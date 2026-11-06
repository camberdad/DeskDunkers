# Desk Dunkers

Unity WebGL release for CamberDad Games.

Play or embed this stable URL:

https://camberdad.github.io/DeskDunkers/

Google Sites: Insert → Embed → URL, then use the URL above. Existing embeds of this URL pick up releases without changing the embed code. A reusable iframe snippet is in `embed.html`.

Each game update replaces `index.html` and the complete `Build/` bundle together. Asset URLs include a content-based version to refresh browser caches. `release.json` identifies the deployed release and lists SHA-256 checksums for its assets. GitHub Pages publishes from `main` at the repository root.

Unity source workspace: run `Tools/Publish-WebGL.ps1 -Message '<description>'` after building and testing. Verify Pages serves the new `release.json` and assets before calling an update deployed.
