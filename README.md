# MinLandPage

Minimal, dependency-free landing page for internal systems. Static files only — no build step, no external requests.

## Configure

Edit **`services.js`** — set each `url` to your real hostname (placeholders use `*.example.lan`).
Only `https://` URLs render; anything else is skipped with a console warning.

## Run

Serve the folder with any static server, or open `index.html` directly. Theme follows the OS light/dark setting.

## Deploy (Coolify)

New Resource → Public/Private Git repo → this repo, then:

| Setting | Value |
|---|---|
| Build Pack | **Dockerfile** |
| Base Directory | `/` |
| Ports Exposes | `8080` |
| Domains | `https://hub.yourdomain.tld` (Coolify/Traefik issues the TLS cert) |

The image is unprivileged nginx (non-root) and sends the security headers from `nginx.conf`. Enable auto-deploy on push via the GitHub App/webhook.
Quick alternative: Build Pack **Static**, Publish Directory `/` — works, but without the custom headers.

Shortcuts: `/` focus search · `Enter` open first match · `Esc` clear.

## Security

- Strict CSP (`default-src 'none'`, self-only scripts/styles/images); no inline JS/CSS.
- All links open with `rel="noopener noreferrer"`; `no-referrer` policy so internal hostnames don't leak.
- DOM built with `textContent` only (no `innerHTML`); icon paths whitelisted to local `*.svg`.
- `noindex, nofollow`. Put it behind Authentik forward-auth if it shouldn't be public.
- `nginx.conf` sends headers that can't be set via `<meta>` (`frame-ancestors`, `X-Frame-Options`, `nosniff`, etc.).

## Icons

`assets/icons/`: Authentik, Nextcloud, NGINX and Moodle logos from [Simple Icons](https://simpleicons.org) (CC0; trademarks belong to their owners). The rest are custom glyphs — drop in official SVGs with the same filename to replace them.
