# MinLandPage

MRDLG landing page (static) + Caddy reverse proxy with automatic HTTPS.

```
site/            static landing page (no build step, no external deps)
  services.js    <- edit this to list apps
Caddyfile        reverse proxy + TLS + security headers
docker-compose.yml
```

## Preview locally

```sh
python3 -m http.server -d site 8000   # http://localhost:8000
```

## Deploy

1. Get the server's **public IP** (cloud provider console, or `curl -4 ifconfig.me` on the box).
2. DNS (at your registrar/DNS host):
   - `A  @  <public-ip>`
   - `A  *  <public-ip>` (wildcard, covers `app.`, `api.`, etc.) — or one record per subdomain.
3. Firewall / security group: allow inbound **80 and 443 only**. Keep SSH locked to your IP.
4. On the server:
   ```sh
   cp .env.example .env   # set DOMAIN + ACME_EMAIL
   docker compose up -d
   docker compose logs -f caddy   # watch certs get issued
   ```
5. Add apps: uncomment a block in `Caddyfile`, add the matching entry in `site/services.js`, then
   `docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile`.

Check DNS before step 4 (`dig +short mrdlg.example.com`) — Let's Encrypt rate-limits failed attempts.

## No public IP / behind NAT?

- **Home/office router:** port-forward 80/443 to the server; if the ISP IP changes, use dynamic DNS.
- **CGNAT or don't want open ports:** use Cloudflare Tunnel (`cloudflared`) instead — outbound-only,
  no public IP needed. Point the tunnel at `http://caddy:80` and drop the `ports:` section.
