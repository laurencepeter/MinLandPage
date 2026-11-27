// Service directory. Edit URLs here — this is the only file you need to touch.
// Only https:// URLs are rendered; anything else is skipped (see app.js).
window.SERVICES = [
  // Internal tools
  { name: "Printer Logs",          desc: "Print job & device logs",        group: "Internal Tools",  icon: "printerlogs.svg", url: "https://printerlogs.example.lan" },
  { name: "ICT Equipment Tracker", desc: "Asset check-in / check-out",     group: "Internal Tools",  icon: "ict-tracker.svg", url: "https://ict-tracker.example.lan" },
  { name: "TriniHub",              desc: "Internal portal",                group: "Internal Tools",  icon: "trinihub.svg",    url: "https://trinihub.example.lan" },
  { name: "Xiao",                  desc: "Assistant",                      group: "Internal Tools",  icon: "xiao.svg",        url: "https://xiao.example.lan" },

  // Infrastructure
  { name: "Authentik",             desc: "Identity provider & SSO",        group: "Infrastructure",  icon: "authentik.svg",   url: "https://auth.example.lan" },
  { name: "NGINX Reverse Proxy",   desc: "Proxy hosts & TLS certs",        group: "Infrastructure",  icon: "nginx.svg",       url: "https://proxy.example.lan" },
  { name: "NetBox",                desc: "IPAM & DCIM source of truth",    group: "Infrastructure",  icon: "netbox.svg",      url: "https://netbox.example.lan" },
  { name: "MeshCentral",           desc: "Remote device management",       group: "Infrastructure",  icon: "meshcentral.svg", url: "https://mesh.example.lan" },

  // Apps
  { name: "Nextcloud",             desc: "Files, calendar & collaboration", group: "Apps",           icon: "nextcloud.svg",   url: "https://cloud.example.lan" },
  { name: "Oracle APEX",           desc: "Low-code database apps",         group: "Apps",            icon: "oracle-apex.svg", url: "https://apex.example.lan" },
  { name: "GLPI",                  desc: "IT service desk & inventory",    group: "Apps",            icon: "glpi.svg",        url: "https://glpi.example.lan" },
  { name: "Moodle",                desc: "Learning management",            group: "Apps",            icon: "moodle.svg",      url: "https://moodle.example.lan" },
];
