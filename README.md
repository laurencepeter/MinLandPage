# MinLandPage

Minimal, dependency-free landing page for internal systems. Static files only — no build step, no external requests.

## Configure

Edit **`services.js`** — set each `url` to your real hostname (placeholders use `*.example.lan`).
Only `https://` URLs render; anything else is skipped with a console warning.

## Run

Serve the folder with any static server (NGINX, Caddy, `python3 -m http.server`), or open `index.html` directly.

Shortcuts: `/` focus search · `Enter` open first match · `Esc` clear.

## Security

- Strict CSP (`default-src 'none'`, self-only scripts/styles/images); no inline JS/CSS.
- All links open with `rel="noopener noreferrer"`; `no-referrer` policy so internal hostnames don't leak.
- DOM built with `textContent` only (no `innerHTML`); icon paths whitelisted to local `*.svg`.
- `noindex, nofollow`. Put it behind Authentik forward-auth if it shouldn't be public.
- When serving via NGINX, also send headers that can't be set via `<meta>`:
  ```nginx
  add_header X-Frame-Options "DENY" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header Content-Security-Policy "default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'" always;
  ```

## Icons

`assets/icons/`: Authentik, Nextcloud, NGINX and Moodle logos from [Simple Icons](https://simpleicons.org) (CC0; trademarks belong to their owners). The rest are custom glyphs — drop in official SVGs with the same filename to replace them.
