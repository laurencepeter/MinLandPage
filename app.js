(() => {
  "use strict";

  const grid = document.getElementById("services");
  const search = document.getElementById("search");
  const empty = document.getElementById("empty");

  const safeUrl = (raw) => {
    try {
      const u = new URL(raw);
      return u.protocol === "https:" ? u.href : null;
    } catch {
      return null;
    }
  };
  // Icons are restricted to plain local filenames (no paths, no schemes).
  const safeIcon = (f) => (/^[a-z0-9-]+\.svg$/.test(f) ? `assets/icons/${f}` : null);

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text; // textContent only — never innerHTML
    return n;
  };

  const groups = new Map();
  for (const s of window.SERVICES || []) {
    const href = safeUrl(s.url);
    if (!href) { console.warn(`Skipped "${s.name}": URL must be https://`); continue; }

    if (!groups.has(s.group)) {
      const section = el("section", "group");
      section.append(el("h2", "group-title", s.group));
      const list = el("ul", "cards");
      section.append(list);
      grid.append(section);
      groups.set(s.group, { section, list });
    }

    const li = el("li");
    const a = el("a", "card");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.dataset.search = `${s.name} ${s.desc} ${s.group}`.toLowerCase();

    const tile = el("span", "icon");
    const src = safeIcon(s.icon);
    if (src) {
      const img = el("img");
      img.src = src;
      img.alt = "";
      img.width = 28;
      img.height = 28;
      img.decoding = "async";
      tile.append(img);
    }
    const text = el("span", "text");
    text.append(el("span", "name", s.name), el("span", "desc", s.desc));
    const host = el("span", "host", new URL(href).host);

    a.append(tile, text, host);
    li.append(a);
    groups.get(s.group).list.append(li);
  }

  const filter = () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    for (const { section, list } of groups.values()) {
      let inGroup = 0;
      for (const li of list.children) {
        const hit = !q || li.firstChild.dataset.search.includes(q);
        li.hidden = !hit;
        if (hit) inGroup++;
      }
      section.hidden = inGroup === 0;
      shown += inGroup;
    }
    empty.hidden = shown !== 0;
  };

  search.addEventListener("input", filter);
  search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const first = grid.querySelector("li:not([hidden]) .card");
      if (first) first.click();
    } else if (e.key === "Escape") {
      search.value = "";
      filter();
      search.blur();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== search) {
      e.preventDefault();
      search.focus();
    }
  });
})();
