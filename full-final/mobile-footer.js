document.addEventListener("DOMContentLoaded", function () {
  // Mobile footer navigation interaction
  const footerItems = document.querySelectorAll(".mobile-footer-nav-item");
  footerItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove selected class and underline from all items
      footerItems.forEach((i) => {
        i.classList.remove("selected");
        const underline = i.querySelector(".footer-underline");
        if (underline) underline.remove();
        const label = i.querySelector(".footer-label");
        if (label) label.style.color = "";
      });
      // Add selected class and underline to the clicked item
      this.classList.add("selected");
      const label = this.querySelector(".footer-label");
      if (label) label.style.color = "#ff3f6c";
      if (!this.querySelector(".footer-underline")) {
        const underline = document.createElement("div");
        underline.className =
          "footer-underline absolute -inset-1 bg-[#ff3f6c] h-1";
        this.appendChild(underline);
      }
    });
  });

  // Set initial selected color
  const selected = document.querySelector(
    ".mobile-footer-nav-item.selected .footer-label"
  );
  if (selected) selected.style.color = "#ff3f6c";

  // Intersection Observer to hide mobile footer navigation
  const footerContainer = document.getElementById("footer-container");
  const mobileFooterNav = document.getElementById("mobile-footer-nav");

  if (footerContainer && mobileFooterNav && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            mobileFooterNav.classList.add("hidden");
          } else {
            mobileFooterNav.classList.remove("hidden");
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0, // Trigger as soon as any part of the footer container is visible
      }
    );
    observer.observe(footerContainer);
  }

  // Mobile footer toggle functionality
  const footerToggle = document.getElementById("footerToggle");
  const footerContent = document.getElementById("footerContent");
  const footerContent2 = document.getElementById("footerContent2");
  const chevronIcon = footerToggle
    ? footerToggle.querySelector(".lucide-chevron-down")
    : null;

  if (footerToggle && footerContent && footerContent2 && chevronIcon) {
    // Initially collapse the footer content
    footerContent.style.display = "none";
    footerContent2.style.display = "none";
    chevronIcon.style.transform = "rotate(0deg)";

    // Toggle footer content visibility on click
    footerToggle.addEventListener("click", () => {
      const isCollapsed = footerContent.style.display === "none";
      footerContent.style.display = isCollapsed ? "block" : "none";
      footerContent2.style.display = isCollapsed ? "block" : "none";
      chevronIcon.style.transform = isCollapsed
        ? "rotate(180deg)"
        : "rotate(0deg)";
    });
  }
});
