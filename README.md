# TODAY. — home-screen web app

Today's news as kinetic poster typography. Installs to an iPhone Home Screen and opens full-screen like an app.

## Files
- `index.html` — the app (design, animation, archive, playlist, Instagram export)
- `edition.js` — **today's edition**. The daily job replaces only this file.
- `manifest.webmanifest`, `icons/` — app name, icon and full-screen settings
- `sw.js` — offline support; always fetches the newest edition when online
- `fonts/` — Anton and Instrument Serif (SIL Open Font License), bundled so the app works offline

## Put it online (free)
It must be served over HTTPS from its own address. Any static host works:
- **GitHub Pages:** push this folder to a repo → Settings → Pages → Deploy from branch `main` / root.
- **Netlify Drop:** drag this folder onto app.netlify.com/drop.

## Install on iPhone
Open the address in Safari → Share → **Add to Home Screen**.

## Daily updates
Replace `edition.js` (same `const EDITION = …; const TOPICS = [ … ];` format) and publish. Open apps pick it up the next time they come to the front.
