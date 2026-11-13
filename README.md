# Desk Dunkers

Unity WebGL release for CamberDad Games.

Play or embed this stable URL:

https://camberdad.github.io/DeskDunkers/

Google Sites: Insert → Embed → URL, then use the URL above. Existing embeds of this URL pick up releases without changing the embed code. A reusable iframe snippet is in `embed.html`.

Each game update replaces `index.html` and the complete `Build/` bundle together. Asset URLs include a content-based version to refresh browser caches. `release.json` identifies the deployed release and lists SHA-256 checksums for its assets. GitHub Pages publishes from `main` at the repository root.

Numbered releases (V2, V3, and later) appear in the game and its footer. The player checks `version.json` every 30 seconds and when returning to the browser. A newer version prompts active players to return home; on the home screen it shows updating progress, reloads the fresh release, and confirms completion after the new player has loaded. It does not interrupt a live shot.

V5 adds named profiles, a home menu, Settings, How to Play and a shared JSONBin High Scores screen with best streak and active playtime. During play, Your Best appears beside #1 Best. Scores cache locally while offline. The dedicated Desk Dunkers bin is separate from the other games; no account master credential is included in this release.

V7 automatically shuffles Office, Bedroom and Living Room together with Close Shot, Mid Range and Long Haul for every new paper ball. Each three-toss cycle includes all three rooms and all three distances, without consecutive repeats. The top display shows the current setup; manual selectors are removed. Wind applies twice V6's sideways acceleration per MPH, with the same 1.0–4.7 mph range. Successful streaks and shared high scores carry across setups.

V8 resets all leaderboard entries, best scores and playtime. Device usernames are kept. The new leaderboard schema and separate cache prevent earlier releases from restoring pre-reset records.

V9 refreshes the board and leader HUD automatically every five seconds while the game is visible and focused, sends new best scores promptly, and refreshes on returning to the tab. Hidden tabs stop periodic polling. Offline records retry with backoff. The online status reads Live · camberdad.com. V8's reset generation and current player records are preserved.

From V5 onward, every numbered web release is retained under `versions/vN/`. The root remains current for existing website embeds.

V10 adds the supplied Dining Room OBJ to the automatic room rotation. Each four-toss room cycle now includes Office, Bedroom, Living Room and Dining Room; distances keep their independent three-toss cycle. The model uses palette-styled materials and reduced geometry with a clear central throwing lane. Existing scores, playtime and live updates carry forward.

V11 places the fan opposite the displayed wind direction across all maps: RIGHT wind comes from the LEFT fan; LEFT wind comes from the RIGHT fan. The original left fan position is preserved. Nearby laptop/books switch to the free side to avoid overlap and restore their original positions when the fan is left. Fan facing, animation, wind strength and scoring are preserved.

V12 uses the supplied Metal063 texture on desks and tables, including the fan desk and dining table, and WoodFloor051 planks on all four room floors. Surface UVs use consistent world scale with normal and roughness detail. Rugs, upholstery and existing gameplay retain their behavior.

V13 uses the supplied Carpet016 cream woven material on the Living Room/Dining Room rugs and Bark016 on plant surfaces across all four maps. Pots, book covers, upholstery, metal desks and wood floors retain their finishes. Gameplay and player records are preserved.

V14 displays the supplied DeskDunkersHomeScreen2 image on laptop, Office monitor, curved Bedroom monitor and Living Room TV glass. The full image is upright and aspect-fitted with dark side bars, preserving original frames/keyboards and gameplay.

V15 remodels the four home rooms with Furniture Mega Pack and Appliances. Each room has three physically distinct shooting zones: twelve automatic views with alternate desks, seating and focal areas, using four cached room interiors. The camera, paper, bin and fan move together; directional wind, scores and live updates carry forward.

V16 fills the twelve zones with occupied workstations, stocked shelves, books, plants, lamps, coffee mugs, document folders, cushions, table settings, curtains/blinds, clocks and pinned notes. Smaller decorative geometry is shared/combined, and the throwing lane remains clear.


## V17 PBR realism
V17 replaces faceted paper and flat prop finishes with creased-paper, brushed-metal and textured room materials; adds soft contact shadows, window lighting, subtle Bokeh/vignette, dust and flight trails; and adds drag-adjusted arcs plus recorded foley and bin recoil. The 3D depth buffer handles paper entering the bin. Existing scores, twelve zones, browser URL and home-confirmed update flow remain intact.
Unity source workspace: run `Tools/Publish-WebGL.ps1 -Message '<description>'` after building and testing. Verify Pages serves the new `release.json` and assets before calling an update deployed.

Release folder: [V17](versions/v17/). Numbered folders are retained; the root URL remains current.
