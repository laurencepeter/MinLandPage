// Edit this list to add/remove services. `url` should match a host in the Caddyfile.
window.SERVICES = [
  { name: "Dashboard",  desc: "Internal metrics and status overview.",  url: "https://dash.mrdlg.example.com",  tag: "Internal", status: "live" },
  { name: "Web App",    desc: "Primary customer-facing application.",   url: "https://app.mrdlg.example.com",   tag: "Product",  status: "live" },
  { name: "API",        desc: "REST API and docs.",                      url: "https://api.mrdlg.example.com",   tag: "Platform", status: "beta" },
  { name: "Git",        desc: "Self-hosted source control.",             url: "https://git.mrdlg.example.com",   tag: "DevOps",   status: "live" },
  { name: "Docs",       desc: "Guides, runbooks, and knowledge base.",   url: "https://docs.mrdlg.example.com",  tag: "Internal", status: "soon" },
  { name: "Status",     desc: "Uptime and incident history.",            url: "https://status.mrdlg.example.com",tag: "Platform", status: "soon" }
];
