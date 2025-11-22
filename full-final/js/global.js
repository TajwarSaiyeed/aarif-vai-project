// Central global helpers: toast, popup carousel, modal helpers
(function () {
  // Toast
  function showAddToBagToast(imageUrl, message = "Added to bag") {
    let toast = document.getElementById("global-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "global-toast";
      toast.className =
        "fixed top-20 right-8 bg-black bg-opacity-75 text-white px-4 py-2 rounded-md shadow-lg z-50 transform translate-x-full transition-transform duration-300 ease-out flex items-center space-x-2 hidden";
      toast.innerHTML = `
        <img src="${
          imageUrl || "https://via.placeholder.com/80"
        }" alt="thumbnail" class="w-8 h-8 rounded bg-white" />
        <span>${message}</span>
      `;
      document.body.appendChild(toast);
    } else {
      const img = toast.querySelector("img");
      if (img && imageUrl) img.src = imageUrl;
      const txt = toast.querySelector("span");
      if (txt) txt.textContent = message;
    }

    toast.classList.remove("hidden");
    setTimeout(() => {
      toast.classList.remove("translate-x-full");
      toast.classList.add("translate-x-0");
    }, 50);

    setTimeout(() => {
      toast.classList.remove("translate-x-0");
      toast.classList.add("translate-x-full");
      setTimeout(() => toast.classList.add("hidden"), 300);
    }, 3000);
  }

  // Expose globally
  window.showAddToBagToast = showAddToBagToast;
  // stable internal alias to avoid being overwritten by per-page global functions
  window.__central_showAddToBagToast = showAddToBagToast;

  // Popup persistence key & helpers
  const DISMISS_KEY = "panda_popup_dismissed_at";
  function isDismissedWithin(hours) {
    try {
      const v = localStorage.getItem(DISMISS_KEY);
      if (!v) return false;
      const t = parseInt(v, 10);
      if (isNaN(t)) return false;
      return Date.now() - t < hours * 3600 * 1000;
    } catch (e) {
      return false;
    }
  }

  function dismissNow() {
    try {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
    } catch (e) {}
  }

  window.__pandaPopup = {
    isDismissedWithin,
    dismissNow,
  };

  // Simple mobile popup carousel renderer (consumers must add HTML markup container with id 'panda-popup-root')
  function createMobilePopup(rootEl, slides) {
    if (!rootEl || !slides || !slides.length) return null;
    // build markup
    rootEl.innerHTML = `
      <div id="panda-popup-overlay" class="fixed inset-0 bg-black/40 z-40 flex items-center justify-center">
        <div id="panda-popup" class="bg-white w-[90%] max-w-sm rounded-xl shadow-lg relative overflow-hidden">
          <button id="panda-popup-close" aria-label="close" class="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style="background:#FF3F6C;color:#fff;border:none">✕</button>
          <div class="p-4">
            <div id="panda-carousel" class="overflow-hidden">
              <div id="panda-carousel-track" class="flex transition-transform duration-300"></div>
            </div>
            <div class="flex items-center justify-between mt-3">
              <div id="panda-dots" class="flex gap-2 items-center"></div>
              <div class="flex gap-2">
                <button id="panda-prev" class="px-2 py-1 border rounded">‹</button>
                <button id="panda-next" class="px-2 py-1 border rounded">›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const track = rootEl.querySelector("#panda-carousel-track");
    const dots = rootEl.querySelector("#panda-dots");
    let idx = 0;
    slides.forEach((s) => {
      const slide = document.createElement("div");
      slide.className = "panda-slide w-full flex-shrink-0";
      slide.style.padding = "8px 0";
      slide.innerHTML = `
        <div class="bg-white rounded-lg p-2 flex gap-3 items-center">
          <div class="w-20 h-20 bg-white rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
            <img src="${s.image}" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1">
            <div class="font-bold text-sm text-[#111]">${s.title || ""}</div>
            <div class="text-xs text-gray-500">${s.subtitle || ""}</div>
            <div class="mt-2"><button class="panda-order-btn bg-white font-bold text-[#FF3F6C] border border-[#FF3F6C] px-3 py-1 rounded">Order Now</button></div>
          </div>
        </div>
      `;
      track.appendChild(slide);

      const dot = document.createElement("button");
      dot.className = "w-2 h-2 rounded-full border border-white bg-transparent";
      dot.addEventListener("click", () => goTo(slides.indexOf(s)));
      dots.appendChild(dot);
    });

    const update = () => {
      track.style.transform = `translateX(-${idx * 100}%)`;
      const ds = dots.querySelectorAll("button");
      ds.forEach((d, i) => {
        d.style.background = i === idx ? "#fff" : "transparent";
      });
    };

    function next() {
      idx = (idx + 1) % slides.length;
      update();
    }
    function prev() {
      idx = (idx - 1 + slides.length) % slides.length;
      update();
    }
    function goTo(i) {
      idx = i % slides.length;
      update();
    }

    rootEl.querySelector("#panda-next").addEventListener("click", next);
    rootEl.querySelector("#panda-prev").addEventListener("click", prev);
    rootEl.querySelector("#panda-popup-close").addEventListener("click", () => {
      rootEl.innerHTML = "";
      dismissNow();
    });

    update();
    return { next, prev, goTo, destroy: () => (rootEl.innerHTML = "") };
  }

  window.createMobilePopup = createMobilePopup;
  // Central ripple helper (small, dependency-free)
  (function () {
    function createRippleElement(btn, clientX, clientY, opts) {
      try {
        var rect = btn.getBoundingClientRect();
        var ripple = document.createElement("span");
        ripple.className = opts && opts.className ? opts.className : "ripple";

        var multiplier = btn.classList && btn.classList.contains("nav-item-pill") ? 2 : 1.2;
        var size = Math.max(rect.width, rect.height) * (opts && opts.multiplier ? opts.multiplier : multiplier);
        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = (clientX - rect.left - size / 2) + "px";
        ripple.style.top = (clientY - rect.top - size / 2) + "px";
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.pointerEvents = 'none';
        ripple.style.background = (opts && opts.color) ? opts.color : 'rgba(0,0,0,0.12)';
        ripple.style.animation = (opts && opts.duration) ? `ripple ${opts.duration}ms linear` : 'ripple 600ms linear';

        // ensure container can host ripple
        if (!btn.classList.contains('ripple-target')) btn.classList.add('ripple-target');

        btn.appendChild(ripple);
        ripple.addEventListener('animationend', function () { ripple.remove(); });
      } catch (e) {
        // silent
      }
    }

    function attachRippleToSelector(selector, options) {
      if (!selector) return;
      var els = typeof selector === 'string' ? document.querySelectorAll(selector) : (selector instanceof Element ? [selector] : selector);
      if (!els || !els.length) return;
      els.forEach(function (el) {
        if (!el.classList.contains('ripple-target')) el.classList.add('ripple-target');
        // avoid double attaching
        if (el.__ripple_attached) return;
        el.__ripple_attached = true;
        el.addEventListener('click', function (e) {
          var x = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0;
          var y = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || 0;
          createRippleElement(el, x, y, options || {});
        }, { passive: true });
      });
    }

    // Expose API
    window.__attachRipple = attachRippleToSelector;
    window.__createRippleElement = createRippleElement;

    // Provide default ripple CSS if not present (inject once)
    if (!document.getElementById('__ripple_styles')) {
      var style = document.createElement('style');
      style.id = '__ripple_styles';
      style.innerHTML = '\n@keyframes ripple { to { transform: scale(1); opacity: 0 } }\n.ripple-target { position: relative; overflow: hidden; }\n.ripple { position: absolute; border-radius: 50%; transform: scale(0); animation: ripple 600ms linear; background: rgba(0,0,0,0.12); pointer-events: none; }\n';
      document.head.appendChild(style);
    }
  })();
})();
