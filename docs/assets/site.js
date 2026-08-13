(function () {
  var btn = document.getElementById("menu-btn");
  var panel = document.getElementById("mobile-panel");
  if (btn && panel) {
    btn.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      panel.setAttribute("aria-hidden", open ? "false" : "true");
    });
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        panel.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        panel.setAttribute("aria-hidden", "true");
      });
    });
  }

  function currentHash() {
    var hash = window.location.hash || "#home";
    if (hash === "#" || hash === "") return "#home";
    return hash;
  }

  function markCurrent() {
    var hash = currentHash();
    document.querySelectorAll(".nav-ia a, .mobile-panel a[data-ia]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === hash || (hash === "#home" && (href === "#home" || href === "./"))) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("hashchange", markCurrent);
  markCurrent();

  var sections = document.querySelectorAll("main section[id]");
  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (e) {
            return e.isIntersecting;
          })
          .sort(function (a, b) {
            return b.intersectionRatio - a.intersectionRatio;
          })[0];
        if (!visible || !visible.target.id) return;
        if (window.location.hash === "#" + visible.target.id) return;
        var id = visible.target.id;
        document.querySelectorAll(".nav-ia a, .mobile-panel a[data-ia]").forEach(function (link) {
          if (link.getAttribute("href") === "#" + id) {
            link.setAttribute("aria-current", "page");
          } else if (link.hasAttribute("data-ia")) {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.15, 0.35] }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.addEventListener("click", function () {
      var sel = button.getAttribute("data-copy");
      var node = sel ? document.querySelector(sel) : null;
      if (!node) return;
      var text = node.textContent || "";
      var live = document.getElementById("copy-status");
      var done = function () {
        if (live) {
          live.textContent = "Copied";
          window.setTimeout(function () {
            live.textContent = "";
          }, 2000);
        }
      };
      var fail = function () {
        window.getSelection().selectAllChildren(node);
        if (live) live.textContent = "Copy failed, select the text";
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(fail);
      } else {
        fail();
      }
    });
  });
})();
