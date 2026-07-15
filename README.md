# Ayasya Technologies — website

A simple, responsive 4-page static site (Home, About, Services, Contact) built
with plain HTML/CSS/JS — no build tools, no frameworks, no dependencies.

## Files

```
index.html      Home
about.html      About
services.html   Services
contact.html    Contact
styles.css      All styles (shared across pages)
script.js       Mobile nav toggle
```

## Preview it locally

Just open `index.html` in a browser — no server required. Or, for a proper
local server (recommended so relative paths behave the same as they will
online):

```bash
cd ayasya-site
python3 -m http.server 8000
# then open http://localhost:8000
```

## Editing content

- Text lives directly in each `.html` file — search for the copy you want to
  change and edit it in place.
- Colors, fonts, and spacing are all defined as CSS variables at the top of
  `styles.css` under `:root { ... }`.
- The contact form (`contact.html`) currently opens the visitor's email
  client via a `mailto:` link — see the comment in that file for how to wire
  it up to a real form backend (e.g. Formspree) instead.

## Deploying to GitHub Pages

1. **Create a new repository** on GitHub (e.g. `ayasya-website`). Don't
   initialize it with a README (you already have files here).

2. **Push this folder to it**, from inside the `ayasya-site` folder:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ayasya-website.git
   git push -u origin main
   ```

3. **Turn on GitHub Pages**:
   - On GitHub, open the repo → **Settings** → **Pages** (left sidebar).
   - Under "Build and deployment", set **Source** to **Deploy from a
     branch**.
   - Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
   - After a minute or two, GitHub will show the live URL — typically
     `https://<your-username>.github.io/ayasya-website/`.

4. **Custom domain (optional)**: if you own `ayasyatechnologies.com`, add it
   under the same Pages settings screen, then create a `CNAME` record at
   your DNS provider pointing to `<your-username>.github.io`. GitHub will
   also add a `CNAME` file to your repo automatically once you save the
   custom domain there.

That's it — any time you push changes to `main`, GitHub Pages redeploys
automatically within a minute or so.
