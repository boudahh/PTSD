# PTSD — Post Traumatic Selloff Disorder Website

A dependency-free, mobile-friendly one-page meme coin website.

## Files
- `index.html` — page structure and copy
- `styles.css` — responsive design
- `script.js` — contract copy button, placeholder-link notices, current year

## Open it locally
Double-click `index.html` or open it in any browser.

## Before launch
Search `index.html` and replace:
- `CONTRACT_ADDRESS_HERE`
- `COMING SOON` chain label
- `TBD` token supply
- Each `href="#"` social/buy link

## Character art
The current hero contains a CSS placeholder character so the site works immediately without image files.

When the final character PNG is available, add it to an `assets` folder and replace the placeholder `.face` block in `index.html` with:

```html
<img class="character-image" src="assets/ptsd-character.png" alt="PTSD character">
```

Then add to `styles.css`:

```css
.character-image {
  width: 100%;
  max-height: 430px;
  object-fit: contain;
}
```

## Easy hosting
This is a static site. It can be uploaded directly to Netlify, Vercel, GitHub Pages, Cloudflare Pages, or standard cPanel/shared hosting.
