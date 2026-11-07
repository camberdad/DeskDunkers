(function () {
  'use strict';
  const ATTEMPT_KEY = 'deskdunkers.updateAttempt';
  let currentVersion = 0;
  let latestVersion = 0;
  let home = true;
  let ready = false;
  let applying = false;
  let checking = false;
  let instance = null;
  let notice = null;
  let updateTimer = null;

  function attemptedVersion() {
    try { return Number(sessionStorage.getItem(ATTEMPT_KEY)) || 0; } catch (_) { return 0; }
  }

  function createNotice() {
    if (notice) notice.remove();
    notice = document.createElement('div');
    notice.id = 'gameUpdateNotice';
    notice.className = 'gameUpdateNotice';
    notice.setAttribute('role', 'status');
    notice.setAttribute('aria-live', 'polite');
    document.body.appendChild(notice);
    return notice;
  }

  function applyUpdate() {
    if (applying || !home || !ready || latestVersion <= currentVersion) return;
    if (attemptedVersion() === latestVersion) {
      createNotice().textContent = 'The update could not be applied. Please reload this page to try again.';
      return;
    }
    applying = true;
    try { sessionStorage.setItem(ATTEMPT_KEY, String(latestVersion)); } catch (_) {}
    const target = new URL(location.href);
    target.searchParams.set('v', String(latestVersion));
    target.searchParams.set('update', String(Date.now()));
    createNotice().innerHTML = '<strong>Updating Desk Dunkers to V' + latestVersion + '</strong>' +
      '<div class="updateTrack"><div class="updateFill"></div></div><span>Loading the latest game…</span>';
    updateTimer = window.setTimeout(() => {
      if (home) location.replace(target.toString());
    }, 1000);
  }

  function showPending() {
    if (applying || (notice && notice.classList.contains('updatePending'))) return;
    const panel = createNotice();
    panel.classList.add('updatePending');
    const text = document.createElement('span');
    text.textContent = 'V' + latestVersion + ' is ready. Please return to home screen to update.';
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'RETURN HOME';
    button.addEventListener('click', () => {
      if (instance) instance.SendMessage('Desk Dunkers', 'ReturnHome');
    });
    panel.append(text, button);
  }

  async function checkVersion() {
    if (checking || applying || document.hidden || !currentVersion || location.protocol === 'file:') return;
    checking = true;
    try {
      const response = await fetch('version.json?check=' + Date.now(), { cache: 'no-store' });
      if (!response.ok) return;
      const info = await response.json();
      const remote = Number(info && info.version);
      if (!Number.isInteger(remote) || remote < 1) return;
      if (remote <= currentVersion) {
        try {
          if (ready && attemptedVersion() <= currentVersion) sessionStorage.removeItem(ATTEMPT_KEY);
        } catch (_) {}
        return;
      }
      latestVersion = remote;
      if (home) applyUpdate();
      else showPending();
    } catch (_) {
      // Keep the current game playable when a check is offline or unavailable.
    } finally { checking = false; }
  }

  window.addEventListener('desk-dunkers-state', event => {
    home = !!(event.detail && event.detail.home);
    if (!home && applying) {
      window.clearTimeout(updateTimer);
      applying = false;
      try { sessionStorage.removeItem(ATTEMPT_KEY); } catch (_) {}
      showPending();
    }
    if (home && latestVersion) applyUpdate();
    else if (home) checkVersion();
  });
  document.addEventListener('visibilitychange', checkVersion);
  window.addEventListener('focus', checkVersion);
  window.setInterval(checkVersion, 30000);
  window.DeskDunkersUpdates = {
    start(version) { currentVersion = Number(version); checkVersion(); },
    loaded(game) {
      instance = game;
      ready = true;
      if (latestVersion > currentVersion) applyUpdate();
      else {
        const requested = Number(new URL(location.href).searchParams.get('v'));
        if (requested === currentVersion && attemptedVersion() === currentVersion) {
          createNotice().textContent = '✓ Update complete — Desk Dunkers V' + currentVersion;
          window.setTimeout(() => { if (notice) { notice.remove(); notice = null; } }, 4000);
          try { sessionStorage.removeItem(ATTEMPT_KEY); } catch (_) {}
        }
      }
    }
  };
})();
