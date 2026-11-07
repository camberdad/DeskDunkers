# Desk Dunkers

Unity WebGL release for CamberDad Games.

Play or embed this stable URL:

https://camberdad.github.io/DeskDunkers/

Google Sites: Insert → Embed → URL, then use the URL above. Existing embeds of this URL pick up releases without changing the embed code. A reusable iframe snippet is in `embed.html`.

Each game update replaces `index.html` and the complete `Build/` bundle together. Asset URLs include a content-based version to refresh browser caches. `release.json` identifies the deployed release and lists SHA-256 checksums for its assets. GitHub Pages publishes from `main` at the repository root.

Numbered releases (V2, V3, and later) appear in the game and its footer. The player checks `version.json` every 30 seconds and when returning to the browser. A newer version prompts active players to return home; on the home screen it shows updating progress, reloads the fresh release, and confirms completion after the new player has loaded. It does not interrupt a live shot.

V5 adds named profiles, a home menu, Settings, How to Play and a shared JSONBin High Scores screen with best streak and active playtime. During play, Your Best appears beside #1 Best. Scores cache locally while offline. The dedicated Desk Dunkers bin is separate from the other games; no account master credential is included in this release.

V6 adds a Maps selection on Home: Office, Bedroom and Living Room. The chosen room is remembered on the device. All rooms retain the same tossing controls, distances, wind and shared high scores.

From V5 onward, every numbered web release is retained under `versions/vN/`. The root remains current for existing website embeds.

Unity source workspace: run `Tools/Publish-WebGL.ps1 -Message '<description>'` after building and testing. Verify Pages serves the new `release.json` and assets before calling an update deployed.

Release folder: [V6](versions/v6/). Numbered folders are retained; the root URL remains current.
