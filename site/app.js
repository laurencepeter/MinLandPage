(function () {
  "use strict";
  var grid = document.getElementById("grid");
  var empty = document.getElementById("empty");
  var filter = document.getElementById("filter");
  var LABELS = { live: "Live", beta: "Beta", soon: "Coming soon" };

  function safeUrl(u) {
    try { var p = new URL(u); return (p.protocol === "https:" || p.protocol === "http:") ? p.href : null; }
    catch (e) { return null; }
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text; // textContent only — no innerHTML, no XSS
    return n;
  }

  function render(q) {
    q = (q || "").trim().toLowerCase();
    grid.replaceChildren();
    var shown = 0;
    (window.SERVICES || []).forEach(function (s) {
      var hay = (s.name + " " + s.desc + " " + s.tag).toLowerCase();
      if (q && hay.indexOf(q) === -1) return;
      var href = safeUrl(s.url);
      var disabled = s.status === "soon" || !href;
      var li = el("li");
      var card = el(disabled ? "div" : "a", "card" + (disabled ? " is-disabled" : ""));
      if (!disabled) { card.href = href; card.rel = "noopener noreferrer"; }
      var top = el("div", "card-top");
      top.append(el("span", "tag", s.tag), el("span", "status status-" + s.status, LABELS[s.status] || s.status));
      card.append(top, el("h2", null, s.name), el("p", null, s.desc));
      if (href) card.append(el("span", "host", new URL(href).host));
      li.append(card);
      grid.append(li);
      shown++;
    });
    empty.hidden = shown !== 0;
  }

  filter.addEventListener("input", function () { render(filter.value); });
  document.getElementById("year").textContent = new Date().getFullYear();
  render();
})();
