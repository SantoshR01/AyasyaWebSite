# Ayasya Technologies — website

A simple, responsive 4-page static site (Home, About, Services, Contact) built
with plain HTML/CSS/JS — no build tools, no frameworks, no dependencies.

## Files

```
index.html      Home
about.html      About
services.html   Services
contact.html    Contact
404.html        Shown by GitHub Pages for any missing page
styles.css      All styles (shared across pages)
script.js       Mobile nav, scroll reveals, hero console animation, testimonial video player
favicon.svg     Browser-tab icon (PNG fallbacks live in images/)
images/         Client logos, icons and the social-sharing (Open Graph) image
robots.txt      Search engine rules, points at sitemap.xml
sitemap.xml     List of pages for search engines (update lastmod when a page changes)
CNAME           Custom domain for GitHub Pages
```

## Preview it locally

Open `index.html` in a browser, or run any static file server from the
repository folder so relative paths behave the same as they will online,
for example:

```bash
npx serve .
# then open the URL it prints
```

## Editing content

- Text lives directly in each `.html` file — search for the copy you want to
  change and edit it in place.
- Colors, fonts, and spacing are all defined as CSS variables at the top of
  `styles.css` under `:root { ... }`.
- The contact form (`contact.html`) currently opens the visitor's email
  client via a `mailto:` link — see the comment in that file for how to wire
  it up to a real form backend (e.g. Formspree) instead.

## Client stories (logos, quotes, video)

The "What our clients say" section on the home page (`index.html`, search for
`Client stories`) currently features Remitrix and BReady.

- **Logos** live in `images/clients/` (PNG or SVG; a white or transparent
  background works, since logo tiles are white). To add a client, add an
  `<a class="logo">` to the logo row and a `<figure class="card quote story">`
  to the `.stories` grid.
- **Headshots** go in `images/testimonials/` (square, ~200px, under 100 KB)
  and replace the initials inside `.avatar`.
- **Video**: the lazy-loading player in `script.js` still supports a
  `.video-card` with `data-video="videos/your-file.mp4"` (compressed MP4 under
  ~10 MB) or `data-youtube="VIDEO_ID"` (unlisted YouTube video), plus an
  optional `data-poster`. The video only loads when a visitor clicks play.

Get each client's written permission before publishing their name, logo,
photo, quote or video.

## Deploying

The site is hosted on GitHub Pages from the `main` branch of
`SantoshR01/AyasyaWebSite` (root folder), with the custom domain
`ayasyatechnologies.com` set in the `CNAME` file.

**Every push to `main` publishes the live site**, usually within a minute
or two. Preview changes locally before pushing.

If the domain ever needs to be set up again: GitHub repo → Settings → Pages,
set the source to `main` / root, enter the custom domain, and make sure the
DNS at the registrar has a CNAME (or A records) pointing at GitHub Pages.

## Social previews and icons

- `images/og-image.jpg` (1200×630) is the picture shown when a page is shared
  on LinkedIn, WhatsApp, Slack or X. Every page points at it via
  `og:image`; replace the file to change the preview everywhere.
- `favicon.svg` is the tab icon; `images/favicon-32.png` and
  `images/apple-touch-icon.png` are fallbacks for older browsers and iOS.
