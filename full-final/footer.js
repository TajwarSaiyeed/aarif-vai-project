document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer-container");
  const footerToggle = document.getElementById("footerToggle");
  const footerContentWrapper = document.querySelector(
    ".footer-content-wrapper"
  );
  const footerArrow = document.getElementById("footerArrow");
  const contentOverlay = document.getElementById("contentOverlayFooter");

  let isExpanded = false; // Start collapsed

  footerToggle.addEventListener("click", function () {
    isExpanded = !isExpanded;

    if (isExpanded) {
      // When expanding: move footer after main content and show content
      footerContainer.style.position = "relative";
      footerContainer.style.bottom = "auto";
      footerContainer.style.transform = "translateY(0)";
      footerContainer.classList.add("expanded");
      footerContentWrapper.classList.add("expanded");
      footerArrow.classList.add("rotated");
      contentOverlay.classList.add("active");
    } else {
      // When collapsing: make footer sticky at bottom and hide content
      footerContainer.style.position = "fixed";
      footerContainer.style.bottom = "0";
      footerContainer.style.transform = "translateY(calc(100% - 45px))";
      footerContainer.classList.remove("expanded");
      footerContentWrapper.classList.remove("expanded");
      footerArrow.classList.remove("rotated");
      contentOverlay.classList.remove("active");
    }
  });

  // Close footer when clicking overlay
  contentOverlay.addEventListener("click", function () {
    if (isExpanded) {
      footerToggle.click(); // Trigger the toggle to collapse
    }
  });

  // Handle escape key to close expanded footer
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isExpanded) {
      footerToggle.click();
    }
  });

  // Initialize lucide icons if they are used dynamically
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
