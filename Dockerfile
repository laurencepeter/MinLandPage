# Unprivileged nginx: runs as non-root, listens on 8080
FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html styles.css app.js services.js /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:8080/ >/dev/null || exit 1
