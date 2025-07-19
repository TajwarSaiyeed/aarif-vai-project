document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements from existing product page script
  // No changes to this section from your provided HTML
  const mainCarouselImages = document.querySelectorAll(".main-carousel-img"); // Images in the mobile carousel
  const desktopThumbnails = document.querySelectorAll(".thumbnail-img"); // Thumbnails for desktop view
  const sizeButtons = document.querySelectorAll(".size-btn");
  const addToBagDesktopBtn = document.getElementById("add-to-bag-desktop");
  const addToBagMobileBtn = document.getElementById("add-to-bag-mobile");
  const sizeSelectionMessage = document.getElementById(
    "size-selection-message"
  );
  const garmentMeasurement = document.getElementById("garment-measurement");
  const chestSizeSpan = document.getElementById("chest-size");
  const toast = document.getElementById("toast");
  const pincodeInput = document.getElementById("pincode-input");
  const pincodeCheckBtn = document.getElementById("pincode-check-btn");
  const pincodeMessage = document.getElementById("pincode-message");
  const seeMoreSpecsBtn = document.getElementById("see-more-specs");
  const specsMore = document.getElementById("specs-more");
  const viewDetailsFitLengthBtn = document.getElementById(
    "view-details-fit-length"
  );
  const fitLengthModal = document.getElementById("fit-length-modal");
  const closeFitLengthModalBtn = document.getElementById(
    "close-fit-length-modal"
  );
  // Original HTML reviewContent does not have `readMoreBtns` variable definition, this might be leftover or intended for a separate readMore toggle that wasn't provided. Removing its usage for safety if not used elsewhere.
  // const readMoreBtns = document.querySelectorAll(".read-more-btn");
  const likeButtons = document.querySelectorAll(".like-btn");
  const dislikeButtons = document.querySelectorAll(".dislike-btn");

  let selectedSize = null; // Track selected size

  // --- Image Gallery (Desktop) ---
  desktopThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      desktopThumbnails.forEach((t) =>
        t.classList.remove("border-2", "border-myntra-pink")
      );
      thumbnail.classList.add("border-2", "border-myntra-pink");
      // Change the first image in the carousel track (which is the main desktop image)
      if (mainCarouselImages[0]) {
        mainCarouselImages[0].src = thumbnail.dataset.fullSrc;
      }
      // For mobile, if desktop view's thumbnail changes, reset mobile carousel to first image
      currentIndex = 0;
      // updateCarousel(); // This function does not exist in the provided HTML, assuming it's meant for a carousel that's not fully provided.
    });
  });

  // Initialize the first desktop thumbnail as active
  if (desktopThumbnails.length > 0) {
    desktopThumbnails[0].classList.add("border-2", "border-myntra-pink");
  }

  // --- Size Selection ---
  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sizeButtons.forEach((btn) => {
        // Note: using explicit hex color for border and text based on myntra-pink definition.
        btn.classList.remove("border-[#ff3f6c]", "text-[#ff3f6c]"); // Remove active styles
      });
      button.classList.add("border-[#ff3f6c]", "text-[#ff3f6c]"); // Add active styles
      selectedSize = button.dataset.size;
      chestSizeSpan.textContent = button.dataset.chest;
      garmentMeasurement.classList.remove("hidden");
      sizeSelectionMessage.classList.add("hidden");
    });
  });

  // --- "Add to Bag" Functionality ---
  function handleAddToBag(event) {
    if (!selectedSize) {
      sizeSelectionMessage.classList.remove("hidden");
      return;
    }
    sizeSelectionMessage.classList.add("hidden");

    // Update desktop button text and style
    if (addToBagDesktopBtn) {
      addToBagDesktopBtn.innerHTML =
        '<i class="fas fa-arrow-right"></i> <span>GO TO BAG</span>';
      addToBagDesktopBtn.classList.add("border", "border-gray-300");
    }

    // Update mobile button text and style
    if (addToBagMobileBtn) {
      addToBagMobileBtn.innerHTML =
        '<i class="fas fa-arrow-right"></i> <span>GO TO BAG</span>';
      addToBagMobileBtn.classList.add(
        "border",
        "border-gray-300",
        "hover:border-gray-500"
      );
    }

    toast.classList.remove("hidden");
    setTimeout(() => {
      toast.classList.remove("translate-x-full");
      toast.classList.add("translate-x-0");
    }, 100);

    setTimeout(() => {
      toast.classList.remove("translate-x-0");
      toast.classList.add("translate-x-full");
      setTimeout(() => {
        toast.classList.add("hidden");
      }, 300);
    }, 3000);
  }

  if (addToBagDesktopBtn)
    addToBagDesktopBtn.addEventListener("click", handleAddToBag);
  if (addToBagMobileBtn)
    addToBagMobileBtn.addEventListener("click", handleAddToBag);

  // --- Pincode Check ---
  if (pincodeCheckBtn) {
    pincodeCheckBtn.addEventListener("click", () => {
      const pincode = pincodeInput.value.trim();
      if (pincode.length === 6 && !isNaN(pincode)) {
        pincodeMessage.textContent =
          "Delivery available to " +
          pincode +
          ". Expected delivery in 3-5 days.";
        pincodeMessage.classList.remove("text-red-500");
        pincodeMessage.classList.add("text-myntra-green");
      } else {
        pincodeMessage.textContent = "Please enter a valid 6-digit Pincode.";
        pincodeMessage.classList.remove("text-myntra-green");
        pincodeMessage.classList.add("text-red-500");
      }
    });
  }

  // --- "See More" Specifications Toggle ---
  if (seeMoreSpecsBtn) {
    seeMoreSpecsBtn.addEventListener("click", () => {
      const isHidden = specsMore.classList.contains("hidden");
      if (isHidden) {
        specsMore.classList.remove("hidden");
        seeMoreSpecsBtn.textContent = "See Less";
      } else {
        specsMore.classList.add("hidden");
        seeMoreSpecsBtn.textContent = "See More";
      }
    });
  }

  // --- Fit/Length Details Modal ---
  if (viewDetailsFitLengthBtn) {
    viewDetailsFitLengthBtn.addEventListener("click", () => {
      fitLengthModal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden"); // Prevent scrolling body when modal is open
    });
  }

  if (closeFitLengthModalBtn) {
    closeFitLengthModalBtn.addEventListener("click", () => {
      fitLengthModal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    });
  }

  // Close modal when clicking outside
  if (fitLengthModal) {
    fitLengthModal.addEventListener("click", (e) => {
      if (e.target === fitLengthModal) {
        fitLengthModal.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
      }
    });
  }

  // --- Like/Dislike Buttons (Visual only) ---
  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const countSpan = button.querySelector(".like-count");
      let currentCount = parseInt(countSpan.textContent);
      countSpan.textContent = currentCount + 1;
      button.classList.add("text-[#ff3f6c]");
    });
  });

  dislikeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const countSpan = button.querySelector(".dislike-count");
      let currentCount = parseInt(countSpan.textContent);
      countSpan.textContent = currentCount + 1;
      button.classList.add("text-gray-500");
    });
  });

  // --- Mobile Sticky Footer ---
  const mobileStickyFooter = document.getElementById("mobile-sticky-footer");
  const mobileBodyActions = document.getElementById("mobile-body-actions");

  if (mobileStickyFooter && mobileBodyActions) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.innerWidth < 1280) {
          // Only apply for mobile/tablet screens
          if (entry.isIntersecting) {
            // When mobile-body-actions is visible, hide the sticky footer
            mobileStickyFooter.classList.remove("show");
          } else {
            // When mobile-body-actions is not visible, show the sticky footer
            mobileStickyFooter.classList.add("show");
          }
        } else {
          // Ensure hidden on desktop
          mobileStickyFooter.classList.remove("show");
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the mobile-body-actions is visible
        rootMargin: "0px 0px -50px 0px", // Add some margin to fine-tune when it triggers
      }
    );

    observer.observe(mobileBodyActions);

    // Handle resize: If resized to desktop, hide sticky footer
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1280) {
        mobileStickyFooter.classList.remove("show");
      }
    });

    // Initial check on page load
    setTimeout(() => {
      if (window.innerWidth < 1280) {
        const rect = mobileBodyActions.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (!isVisible) {
          mobileStickyFooter.classList.add("show");
        }
      }
    }, 100);
  }

  // -----------------------------------------------
  // NEW JAVASCRIPT FOR SIZE CHART SIDEBAR INJECTION START
  // -----------------------------------------------
  const sizeChartLink = document.getElementById("size-chart-link"); // This is the trigger from the existing page
  const sizeChartSidebar = document.getElementById("size-chart-sidebar");
  const sizeChartBackdrop = document.getElementById("size-chart-backdrop");
  const closeSidebarBtn = document.getElementById("close-sidebar-btn");

  const sizeChartTabBtn = document.getElementById("size-chart-tab-btn");
  const howToMeasureTabBtn = document.getElementById("how-to-measure-tab-btn");
  const sizeChartContentTab = document.getElementById("size-chart-content-tab");
  const howToMeasureContentTab = document.getElementById(
    "how-to-measure-content-tab"
  );

  const sizeChartTbody = document.getElementById("size-chart-tbody");
  const unitInBtn = document.getElementById("unit-in-btn");
  const unitCmBtn = document.getElementById("unit-cm-btn");
  const garmentUnitNote = document.getElementById("garment-unit-note");
  const chestColHeader = document.getElementById("chest-col-header");
  const frontLengthColHeader = document.getElementById(
    "front-length-col-header"
  );
  const acrossShoulderColHeader = document.getElementById(
    "across-shoulder-col-header"
  );

  let currentUnit = "in"; // 'in' for inches, 'cm' for centimeters

  const sizes = [
    { size: "S", chest: 38.0, frontLength: 27.0, acrossShoulder: 17.5 },
    { size: "M", chest: 40.0, frontLength: 28.0, acrossShoulder: 18.0 },
    { size: "L", chest: 42.0, frontLength: 29.0, acrossShoulder: 18.5 },
    { size: "XL", chest: 44.0, frontLength: 30.0, acrossShoulder: 19.0 },
  ];

  const convertToCm = (val) => (val * 2.54).toFixed(1);

  // Function to populate size chart table
  function populateSizeChart(unit) {
    sizeChartTbody.innerHTML = ""; // Clear existing rows
    const isCm = unit === "cm";
    garmentUnitNote.textContent = isCm ? "Centimeters" : "Inches";
    chestColHeader.textContent = `Chest (${unit})`;
    frontLengthColHeader.textContent = `Front Length (${unit})`;
    acrossShoulderColHeader.textContent = `Across Shoulder (${unit})`;

    sizes.forEach((row) => {
      const tr = document.createElement("tr");
      const isSelected = row.size === "L"; // Example: default select 'L' as shown in video
      if (isSelected) {
        tr.classList.add("sizeChartWeb-newRow", "selected");
      } else {
        tr.classList.add("sizeChartWeb-newRow");
      }

      const chest = isCm ? convertToCm(row.chest) : row.chest;
      const frontLength = isCm ? convertToCm(row.frontLength) : row.frontLength;
      const acrossShoulder = isCm
        ? convertToCm(row.acrossShoulder)
        : row.acrossShoulder;

      tr.innerHTML = `
                    <td class="sizeChartWeb-newCell common-customRadio common-newCustomRadio">
                        <label class="common-customRadio common-newCustomRadio">
                            <input type="radio" name="sizeSelection" class="undefined undefined" value="${
                              row.size
                            }" ${isSelected ? "checked" : ""}>
                            <div class="common-radioIndicator sizeChartWeb-radioIndicator common-radioIndicatorNew sizeChartWeb-radioIndicatorNew"></div>
                        </label>
                    </td>
                    <td class="sizeChartWeb-newCell ">${row.size}</td>
                    <td class="sizeChartWeb-newCell ">${chest}</td>
                    <td class="sizeChartWeb-newCell ">${frontLength}</td>
                    <td class="sizeChartWeb-newCell ">${acrossShoulder}</td>
                `;
      sizeChartTbody.appendChild(tr);

      // Add event listener to radio button to highlight row
      const radioInput = tr.querySelector('input[type="radio"]');
      if (radioInput) {
        radioInput.addEventListener("change", () => {
          document
            .querySelectorAll(".sizeChartWeb-newRow")
            .forEach((r) => r.classList.remove("selected"));
          if (radioInput.checked) {
            tr.classList.add("selected");
          }
        });
      }
    });
  }

  // Open Sidebar via the "SIZE CHART" link on the main product page
  if (sizeChartLink) {
    sizeChartLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      sizeChartSidebar.classList.remove("hidden"); // Make display:flex or display:block initially
      setTimeout(() => {
        // Allow reflow before starting transition
        sizeChartSidebar.classList.add("open");
        sizeChartBackdrop.classList.add("open");
        document.body.classList.add("overflow-hidden"); // Prevent scrolling of background content
      }, 10);
      populateSizeChart(currentUnit); // Populate table when opening
    });
  }

  // Close Sidebar
  const closeSidebar = () => {
    sizeChartSidebar.classList.remove("open");
    sizeChartBackdrop.classList.remove("open");
    sizeChartSidebar.addEventListener(
      "transitionend",
      () => {
        sizeChartSidebar.classList.add("hidden"); // Hide after transition
        document.body.classList.remove("overflow-hidden");
      },
      { once: true }
    );
  };

  if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", closeSidebar);
  if (sizeChartBackdrop)
    sizeChartBackdrop.addEventListener("click", closeSidebar); // Close when clicking outside

  // Tab Switching Logic
  if (sizeChartTabBtn) {
    sizeChartTabBtn.addEventListener("click", () => {
      sizeChartTabBtn.classList.add("sizeChartWeb-tabSelected");
      if (howToMeasureTabBtn)
        howToMeasureTabBtn.classList.remove("sizeChartWeb-tabSelected");

      if (sizeChartContentTab) sizeChartContentTab.classList.remove("hidden");
      if (howToMeasureContentTab)
        howToMeasureContentTab.classList.add("hidden");
    });
  }

  if (howToMeasureTabBtn) {
    howToMeasureTabBtn.addEventListener("click", () => {
      howToMeasureTabBtn.classList.add("sizeChartWeb-tabSelected");
      if (sizeChartTabBtn)
        sizeChartTabBtn.classList.remove("sizeChartWeb-tabSelected");

      if (howToMeasureContentTab)
        howToMeasureContentTab.classList.remove("hidden");
      if (sizeChartContentTab) sizeChartContentTab.classList.add("hidden");
    });
  }

  // Unit Toggle Logic (in/cm)
  if (unitInBtn) {
    unitInBtn.addEventListener("click", () => {
      currentUnit = "in";
      unitInBtn.classList.add("scaleAndUnits-selected");
      if (unitCmBtn) unitCmBtn.classList.remove("scaleAndUnits-selected");
      populateSizeChart(currentUnit);
    });
  }

  if (unitCmBtn) {
    unitCmBtn.addEventListener("click", () => {
      currentUnit = "cm";
      unitCmBtn.classList.add("scaleAndUnits-selected");
      if (unitInBtn) unitInBtn.classList.remove("scaleAndUnits-selected");
      populateSizeChart(currentUnit);
    });
  }

  // -----------------------------------------------
  // VIEW SIMILAR MODAL FUNCTIONALITY START
  // -----------------------------------------------
  const viewSimilarBtn = document.getElementById("view-similar-btn");
  const viewSimilarModal = document.getElementById("viewSimilarModal");
  const viewSimilarModalContent = document.getElementById(
    "viewSimilarModalContent"
  );
  const closeSimilarModal = document.getElementById("closeSimilarModal");

  // Function to open modal
  function openSimilarModal() {
    viewSimilarModal.classList.remove("hidden");
    viewSimilarModal.classList.add("flex");
    document.body.style.overflow = "hidden"; // Prevent body scroll

    setTimeout(() => {
      viewSimilarModalContent.classList.remove("translate-y-full");
      viewSimilarModalContent.classList.add("translate-y-0");
    }, 10);
  }

  // Function to close modal
  function closeSimilarModalFunc() {
    viewSimilarModalContent.classList.remove("translate-y-0");
    viewSimilarModalContent.classList.add("translate-y-full");
    document.body.style.overflow = "auto";

    setTimeout(() => {
      viewSimilarModal.classList.remove("flex");
      viewSimilarModal.classList.add("hidden");
    }, 300); // Match transition duration
  }

  // Event listeners
  if (viewSimilarBtn) {
    viewSimilarBtn.addEventListener("click", openSimilarModal);
  }

  if (closeSimilarModal) {
    closeSimilarModal.addEventListener("click", closeSimilarModalFunc);
  }

  // Close modal when clicking on backdrop
  if (viewSimilarModal) {
    viewSimilarModal.addEventListener("click", function (event) {
      if (event.target === viewSimilarModal) {
        closeSimilarModalFunc();
      }
    });
  }

  // Close modal with Escape key
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !viewSimilarModal.classList.contains("hidden")) {
      closeSimilarModalFunc();
    }
  });
  // -----------------------------------------------
  // VIEW SIMILAR MODAL FUNCTIONALITY END
  // -----------------------------------------------

  // Initial population of the size chart table (only runs once if popup is hidden by default)
  // This ensures data is ready if user opens popup.
  populateSizeChart(currentUnit);
  // -----------------------------------------------
  // NEW JAVASCRIPT FOR SIZE CHART SIDEBAR INJECTION END
  // -----------------------------------------------

  // -----------------------------------------------
  // IMAGE MODAL FUNCTIONALITY START
  // -----------------------------------------------
  const imageModal = document.getElementById("imageModal");
  const imageModalImg = document.getElementById("imageModalImg");
  const imageModalClose = document.getElementById("imageModalClose");
  const imageModalPrev = document.getElementById("imageModalPrev");
  const imageModalNext = document.getElementById("imageModalNext");
  const imageModalCounter = document.getElementById("imageModalCounter");
  const desktopProductImages = document.querySelectorAll(
    ".desktop-product-image"
  );

  let currentImageIndex = 0;
  const productImages = [
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32193132/2025/1/3/8243634c-0c19-4a5a-890e-aa808dbe19e51735884731052CampusSutraMenStripedPoloCollarRawEdgeT-shirt1.jpg",
    "../img.jpeg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32193132/2025/1/3/8243634c-0c19-4a5a-890e-aa808dbe19e51735884731052CampusSutraMenStripedPoloCollarRawEdgeT-shirt1.jpg",
    "../img.jpeg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32193132/2025/1/3/8243634c-0c19-4a5a-890e-aa808dbe19e51735884731052CampusSutraMenStripedPoloCollarRawEdgeT-shirt1.jpg",
  ];

  // Function to open modal with specific image
  function openImageModal(imageIndex) {
    currentImageIndex = imageIndex;
    updateModalImage();
    imageModal.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent body scroll
  }

  // Function to close modal
  function closeImageModal() {
    imageModal.classList.remove("open");
    document.body.style.overflow = "auto"; // Restore body scroll
  }

  // Function to update modal image and counter
  function updateModalImage() {
    imageModalImg.src = productImages[currentImageIndex];
    imageModalCounter.textContent = `${currentImageIndex + 1} / ${
      productImages.length
    }`;
  }

  // Function to show next image
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % productImages.length;
    updateModalImage();
  }

  // Function to show previous image
  function showPrevImage() {
    currentImageIndex =
      (currentImageIndex - 1 + productImages.length) % productImages.length;
    updateModalImage();
  }

  // Add click event listeners to desktop product images
  desktopProductImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      openImageModal(index);
    });

    // Add pointer cursor style
    img.style.cursor = "pointer";
  });

  // Modal event listeners
  if (imageModalClose) {
    imageModalClose.addEventListener("click", closeImageModal);
  }

  if (imageModalPrev) {
    imageModalPrev.addEventListener("click", showPrevImage);
  }

  if (imageModalNext) {
    imageModalNext.addEventListener("click", showNextImage);
  }

  // Close modal when clicking on overlay (outside the image)
  if (imageModal) {
    imageModal.addEventListener("click", (e) => {
      if (e.target === imageModal) {
        closeImageModal();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!imageModal.classList.contains("open")) return;

    switch (e.key) {
      case "Escape":
        closeImageModal();
        break;
      case "ArrowLeft":
        showPrevImage();
        break;
      case "ArrowRight":
        showNextImage();
        break;
    }
  });

  // Prevent modal from closing when clicking on the image or navigation buttons
  if (imageModalImg) {
    imageModalImg.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  [imageModalPrev, imageModalNext, imageModalClose].forEach((button) => {
    if (button) {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
  });

  // -----------------------------------------------
  // IMAGE MODAL FUNCTIONALITY END
  // -----------------------------------------------
});

document.addEventListener("DOMContentLoaded", function () {
  const typewriterEl = document.getElementById("typewriter-search");
  if (!typewriterEl) return;
  const phrases = [
    "Search for products, brands and more",
    "Try 'T-Shirts', 'Shoes', 'Watches'...",
    "Discover trending styles!",
    "Find your favorite brands",
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let typing = true;

  function type() {
    if (!typing) return;
    const phrase = phrases[phraseIndex];
    if (charIndex < phrase.length) {
      typewriterEl.textContent += phrase.charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
    } else {
      setTimeout(erase, 1200);
    }
  }

  function erase() {
    if (!typing) return;
    if (charIndex > 0) {
      typewriterEl.textContent = typewriterEl.textContent.slice(0, -1);
      charIndex--;
      setTimeout(erase, 25);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 400);
    }
  }

  type();

  // Optional: Pause effect on input focus
  const searchInput = typewriterEl.previousElementSibling;
  if (searchInput && searchInput.tagName === "INPUT") {
    searchInput.addEventListener("focus", () => {
      typing = false;
      typewriterEl.textContent = "";
    });
    searchInput.addEventListener("blur", () => {
      if (!typing) {
        typing = true;
        charIndex = 0;
        typewriterEl.textContent = "";
        type();
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const mobile_image_slider = document.querySelector("#mobile_image_slider");

  let currentSlide = 0;
  const dotsContainer = document.getElementById("dots-container");
  let totalSlides = 0;

  function addSlide(imageUrl) {
    const slide = document.createElement("div");
    slide.className = "slide flex-shrink-0";
    slide.style.backgroundImage = `url(${imageUrl})`;
    slide.style.backgroundSize = "cover";
    slide.style.backgroundPosition = "center";
    mobile_image_slider.appendChild(slide);
    totalSlides++;
  }

  // Example images - you can add as many as you want
  const images = [
    "https://png.pngtree.com/background/20250103/original/pngtree-abstract-light-pink-and-purple-background-picture-image_15503407.jpg",
    "https://png.pngtree.com/background/20210711/original/pngtree-abstract-80s-trendy-geometric-background-neon-colors-picture-image_1157555.jpg",
    "https://png.pngtree.com/background/20250209/original/pngtree-spring-flowers-beautiful-scenery-dreamy-spring-background-picture-image_16260934.jpg",
    "https://png.pngtree.com/background/20210709/original/pngtree-red-scene-synthesis-banner-explosion-picture-image_911074.jpg",
    "https://png.pngtree.com/background/20250103/original/pngtree-abstract-light-pink-and-purple-background-picture-image_15503407.jpg",
    "https://png.pngtree.com/background/20210711/original/pngtree-abstract-80s-trendy-geometric-background-neon-colors-picture-image_1157555.jpg",
    "https://png.pngtree.com/background/20250209/original/pngtree-spring-flowers-beautiful-scenery-dreamy-spring-background-picture-image_16260934.jpg",
  ];

  // Add all slides
  images.forEach((image) => addSlide(image));

  function createDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("button");
      dot.className = "w-2 h-2 rounded-full bg-[#ff3f6c] transition-opacity";
      dot.onclick = () => goToSlide(i);
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    mobile_image_slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    const dots = dotsContainer.querySelectorAll("button");
    dots.forEach((dot, index) => {
      dot.classList.toggle("bg-[#ff3f6c]", index === currentSlide);
      dot.classList.toggle("bg-gray-100", index !== currentSlide);
    });
  }

  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  // Initialize after slides are added
  createDots();
  updateSlider();

  // Auto-play slider
  setInterval(nextSlide, 5000);
});

const products = [
  {
    id: 1,
    title: "Bella Vita Organic",
    description: "Vitamin C Glow Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹299",
    originalPrice: "₹399",
    discountPercent: "25",
    rating: "4.2",
    ratingCount: "1.2k",
    href: "#",
    color: "White",
    brand: "Bella Vita Organic",
    category: "Face Wash",
    sizes: ["100ml", "200ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 2,
    title: "Plum Green Tea",
    description: "Pore Cleansing Gel Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹349",
    originalPrice: "₹449",
    discountPercent: "22",
    rating: "4.5",
    ratingCount: "890",
    href: "#",
    color: "Green",
    brand: "Plum",
    category: "Face Wash",
    sizes: ["50ml", "100ml"],
    bundleType: "Combo Pack",
    countryOfOrigin: "India",
  },
  {
    id: 3,
    title: "Minimalist",
    description: "2% Salicylic Acid Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹199",
    originalPrice: "₹299",
    discountPercent: "33",
    rating: "4.3",
    ratingCount: "654",
    href: "#",
    color: "White",
    brand: "Minimalist",
    category: "Face Wash",
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 4,
    title: "Himalaya",
    description: "Anti-Pimple Neem Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹175",
    originalPrice: "₹225",
    discountPercent: "22",
    rating: "4.1",
    ratingCount: "2.1k",
    href: "#",
    color: "Green",
    brand: "Himalaya",
    category: "Face Wash",
    sizes: ["50ml", "100ml", "200ml"],
    bundleType: "Value Pack",
    countryOfOrigin: "India",
  },
  {
    id: 5,
    title: "L'Oreal Paris",
    description: "Hyaluron Moisture Sealing",
    image: "../img.jpeg",
    currentPrice: "₹549",
    originalPrice: "₹699",
    discountPercent: "21",
    rating: "4.4",
    ratingCount: "532",
    href: "#",
    color: "Blue",
    brand: "L'Oreal Paris",
    category: "Moisturizer",
    sizes: ["50ml", "100ml"],
    bundleType: "Single",
    countryOfOrigin: "France",
  },
  {
    id: 6,
    title: "Olay Total Effects",
    description: "Night Cream Anti-Aging",
    image: "../img.jpeg",
    currentPrice: "₹899",
    originalPrice: "₹1199",
    discountPercent: "25",
    rating: "4.6",
    ratingCount: "1.5k",
    href: "#",
    color: "White",
    brand: "Olay",
    category: "Night Cream",
    sizes: ["50ml"],
    bundleType: "Gift Set",
    countryOfOrigin: "USA",
  },
  {
    id: 7,
    title: "Deconstruct",
    description: "Oil-Free Moisturizer",
    image: "../img.jpeg",
    currentPrice: "₹425",
    originalPrice: "₹549",
    discountPercent: "23",
    rating: "4.2",
    ratingCount: "743",
    href: "#",
    color: "White",
    brand: "Deconstruct",
    category: "Moisturizer",
    sizes: ["100ml", "200ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 8,
    title: "Pilgrim",
    description: "Hair Growth Serum",
    image: "../img.jpeg",
    currentPrice: "₹649",
    originalPrice: "₹899",
    discountPercent: "28",
    rating: "4.3",
    ratingCount: "967",
    href: "#",
    color: "Brown",
    brand: "Pilgrim",
    category: "Hair Serum",
    sizes: ["50ml"],
    bundleType: "Starter Kit",
    countryOfOrigin: "India",
  },
  {
    id: 9,
    title: "The Man Company",
    description: "Charcoal Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹399",
    originalPrice: "₹499",
    discountPercent: "20",
    rating: "4.5",
    ratingCount: "1.1k",
    href: "#",
    color: "Black",
    brand: "The Man Company",
    category: "Face Wash",
    sizes: ["100ml"],
    bundleType: "Combo Pack",
    countryOfOrigin: "India",
  },
  {
    id: 10,
    title: "Beardo",
    description: "Activated Charcoal Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹299",
    originalPrice: "₹399",
    discountPercent: "25",
    rating: "4.2",
    ratingCount: "800",
    href: "#",
    color: "Black",
    brand: "Beardo",
    category: "Face Wash",
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 11,
    title: "Dot & Key",
    description: "Watermelon Superglow Moisturizer",
    image: "../img.jpeg",
    currentPrice: "₹595",
    originalPrice: "₹795",
    discountPercent: "25",
    rating: "4.3",
    ratingCount: "1.8k",
    href: "#",
    color: "Pink",
    brand: "Dot & Key",
    category: "Moisturizer",
    sizes: ["50ml", "100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 12,
    title: "Mamaearth",
    description: "Onion Hair Oil for Hair Growth",
    image: "../img.jpeg",
    currentPrice: "₹389",
    originalPrice: "₹499",
    discountPercent: "22",
    rating: "4.0",
    ratingCount: "3.5k",
    href: "#",
    color: "Brown",
    brand: "Mamaearth",
    category: "Hair Oil",
    sizes: ["200ml"],
    bundleType: "Value Pack",
    countryOfOrigin: "India",
  },
  {
    id: 13,
    title: "WOW Skin Science",
    description: "Apple Cider Vinegar Shampoo",
    image: "../img.jpeg",
    currentPrice: "₹375",
    originalPrice: "₹499",
    discountPercent: "25",
    rating: "4.1",
    ratingCount: "2.7k",
    href: "#",
    color: "Brown",
    brand: "WOW Skin Science",
    category: "Shampoo",
    sizes: ["200ml", "500ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 14,
    title: "Mcaffeine",
    description: "Naked & Raw Coffee Body Scrub",
    image: "../img.jpeg",
    currentPrice: "₹399",
    originalPrice: "₹599",
    discountPercent: "33",
    rating: "4.4",
    ratingCount: "980",
    href: "#",
    color: "Brown",
    brand: "Mcaffeine",
    category: "Body Scrub",
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 15,
    title: "Biotique",
    description: "Bio Papaya Tan Removal Scrub",
    image: "../img.jpeg",
    currentPrice: "₹180",
    originalPrice: "₹250",
    discountPercent: "28",
    rating: "4.0",
    ratingCount: "1.9k",
    href: "#",
    color: "Orange",
    brand: "Biotique",
    category: "Face Scrub",
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 16,
    title: "Neutrogena",
    description: "Hydro Boost Water Gel",
    image: "../img.jpeg",
    currentPrice: "₹849",
    originalPrice: "₹950",
    discountPercent: "11",
    rating: "4.5",
    ratingCount: "2.2k",
    href: "#",
    color: "Blue",
    brand: "Neutrogena",
    category: "Moisturizer",
    sizes: ["50ml"],
    bundleType: "Single",
    countryOfOrigin: "USA",
  },
  {
    id: 17,
    title: "The Body Shop",
    description: "Tea Tree Skin Clearing Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹645",
    originalPrice: "₹745",
    discountPercent: "13",
    rating: "4.6",
    ratingCount: "1.1k",
    href: "#",
    color: "Green",
    brand: "The Body Shop",
    category: "Face Wash",
    sizes: ["100ml", "200ml"],
    bundleType: "Single",
    countryOfOrigin: "UK",
  },
  {
    id: 18,
    title: "Forest Essentials",
    description: "Delicate Facial Cleanser Kashmiri Saffron & Neem",
    image: "../img.jpeg",
    currentPrice: "₹1250",
    originalPrice: "₹1450",
    discountPercent: "14",
    rating: "4.7",
    ratingCount: "900",
    href: "#",
    color: "Yellow",
    brand: "Forest Essentials",
    category: "Face Wash",
    sizes: ["100ml"],
    bundleType: "Gift Set",
    countryOfOrigin: "India",
  },
  {
    id: 19,
    title: "Mamaearth",
    description: "Vitamin C Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹249",
    originalPrice: "₹349",
    discountPercent: "29",
    rating: "4.2",
    ratingCount: "2.5k",
    href: "#",
    color: "White",
    brand: "Mamaearth",
    category: "Face Wash",
    sizes: ["100ml", "200ml"],
    bundleType: "Combo Pack",
    countryOfOrigin: "India",
  },
  {
    id: 20,
    title: "WOW Skin Rectified",
    description: "Ubtan Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹299",
    originalPrice: "₹399",
    discountPercent: "25",
    rating: "4.3",
    ratingCount: "1.3k",
    href: "#",
    color: "Yellow",
    brand: "WOW Skin Science",
    category: "Face Wash",
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 21,
    title: "Biotique",
    description: "Bio Papaya Tan Removal Scrub",
    image: "../img.jpeg",
    currentPrice: "₹180",
    originalPrice: "₹250",
    discountPercent: "28",
    rating: "4.0",
    ratingCount: "1.9k",
    href: "#",
    color: "Orange",
    brand: "Biotique",
    category: "Face Scrub",
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 22,
    title: "Neutrogena",
    description: "Hydro Boost Water Gel",
    image: "../img.jpeg",
    currentPrice: "₹849",
    originalPrice: "₹950",
    discountPercent: "11",
    rating: "4.5",
    ratingCount: "2.2k",
    href: "#",
    color: "Blue",
    brand: "Neutrogena",
    category: "Moisturizer",
    sizes: ["50ml"],
    bundleType: "Single",
    countryOfOrigin: "USA",
  },
  {
    id: 23,
    title: "The Body Shop",
    description: "Tea Tree Skin Clearing Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹645",
    originalPrice: "₹745",
    discountPercent: "13",
    rating: "4.6",
    ratingCount: "1.1k",
    href: "#",
    color: "Green",
    brand: "The Body Shop",
    category: "Face Wash",
    sizes: ["100ml", "200ml"],
    bundleType: "Single",
    countryOfOrigin: "UK",
  },
  {
    id: 24,
    title: "Forest Essentials",
    description: "Delicate Facial Cleanser Kashmiri Saffron & Neem",
    image: "../img.jpeg",
    currentPrice: "₹1250",
    originalPrice: "₹1450",
    discountPercent: "14",
    rating: "4.7",
    ratingCount: "900",
    href: "#",
    color: "Yellow",
    brand: "Forest Essentials",
    category: "Face Wash",
    sizes: ["100ml"],
    bundleType: "Gift Set",
    countryOfOrigin: "India",
  },
  {
    id: 25,
    title: "Mamaearth",
    description: "Vitamin C Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹249",
    originalPrice: "₹349",
    discountPercent: "29",
    rating: "4.2",
    ratingCount: "2.5k",
    href: "#",
    color: "White",
    brand: "Mamaearth",
    category: "Face Wash",
    sizes: ["100ml", "200ml"],
    bundleType: "Combo Pack",
    countryOfOrigin: "India",
  },
  {
    id: 26,
    title: "WOW Skin Rectified",
    description: "Ubtan Face Wash",
    image: "../img.jpeg",
    currentPrice: "₹299",
    originalPrice: "₹399",
    discountPercent: "25",
    rating: "4.3",
    ratingCount: "1.3k",
    href: "#",
    color: "Yellow",
    brand: "WOW Skin Science",
    category: "Face Wash",
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
];
const sizes = [
  { title: "50ml", quantity: 6 },
  { title: "100ml", quantity: 9 },
  { title: "200ml", quantity: 2 },
  { title: "250ml", quantity: 0 },
  { title: "500ml", quantity: 0 },
  { title: "1000ml", quantity: 0 },
];

let selectedSize = sizes[0];

function renderSizeButtons() {
  const sizeContainer = document.querySelector(".mobile_size-container");
  sizeContainer.innerHTML = "";
  sizes.forEach((size, index) => {
    const isSelected = size === selectedSize;
    const isAvailable = size.quantity > 0;
    const button = document.createElement("div");
    button.className = `px-4 py-2 rounded-md flex items-center justify-center text-sm font-bold cursor-pointer ${
      isSelected
        ? "bg-[#ff3f6c] text-white border border-[#ff3f6c]"
        : "bg-white text-black border border-[#535766]"
    } ${!isAvailable ? "relative border-gray-400 text-gray-400" : ""}`;
    button.innerText = size.title;
    if (!isAvailable) {
      const strikethrough = document.createElement("span");
      strikethrough.className =
        "absolute inset-0 flex items-center justify-center";
      strikethrough.innerHTML = '<span class="w-full h-px bg-gray-400"></span>';
      button.appendChild(strikethrough);
    }
    button.addEventListener("click", () => {
      if (isAvailable) {
        selectedSize = size;
        renderSizeButtons();
      }
    });
    const wrapper = document.createElement("div");
    wrapper.className = "text-center";
    wrapper.appendChild(button);
    if (isAvailable) {
      const stock = document.createElement("div");
      stock.className =
        "text-[8px] text-[#ff5722] mt-1 border-[0.5px] border-[#ff5722 w-[70%] mx-auto ";
      stock.innerText = `${size.quantity} Left`;
      wrapper.appendChild(stock);
    }

    if (index === sizes.length - 1) {
      wrapper.classList.add("pr-5");
    }

    sizeContainer.appendChild(wrapper);
  });
}

// Initial render
renderSizeButtons();

// Recently Viewed Products with Slider functionality
document.addEventListener("DOMContentLoaded", () => {
  const mockData = [
    {
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/2024/NOVEMBER/19/N8tWn0a1_fff920fd9e78421d935221cc936c8822.jpg",
      title: "Product 1",
      subtitle: "Description for Product 1",
      brand: "Flying Machine",
    },
    {
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/2024/NOVEMBER/19/N8tWn0a1_fff920fd9e78421d935221cc936c8822.jpg",
      title: "Product 2",
      subtitle: "Description for Product 2",
      brand: "Roadster",
    },
    {
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/2024/NOVEMBER/19/N8tWn0a1_fff920fd9e78421d935221cc936c8822.jpg",
      title: "Product 3",
      subtitle: "Description for Product 3",
      brand: "HERE&NOW",
    },
    {
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/2024/NOVEMBER/19/N8tWn0a1_fff920fd9e78421d935221cc936c8822.jpg",
      title: "Product 4",
      subtitle: "Description for Product 4",
      brand: "HRX by Hrithik Roshan",
    },
    {
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/2024/NOVEMBER/19/N8tWn0a1_fff920fd9e78421d935221cc936c8822.jpg",
      title: "Product 5",
      subtitle: "Description for Product 5",
      brand: "Puma",
    },
    {
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/2024/NOVEMBER/19/N8tWn0a1_fff920fd9e78421d935221cc936c8822.jpg",
      title: "Product 6",
      subtitle: "Description for Product 6",
      brand: "Nike",
    },
  ];

  // Function to create recently viewed product card HTML for mobile slider
  function createRecentlyViewedProductCardHTML(product) {
    return `
      <div class="bg-white w-[150px] max-h-[220px] border-[1px] border-gray-200 flex-shrink-0 hover:shadow-md transition-shadow duration-300 cursor-pointer">
        <div class="w-full h-[160px] overflow-hidden relative">
          <img
            src="${product.img}"
            alt="${product.title}"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="bg-white w-full px-2 py-2">
          <p class="text-sm font-semibold text-gray-800 truncate">${product.brand}</p>
          <p class="text-xs text-gray-500 truncate mb-1">${product.subtitle}</p>
        </div>
      </div>
    `;
  }

  const recently_viewed_products = document.getElementById(
    "recently-viewed-products"
  );

  if (recently_viewed_products) {
    // Clear existing content
    recently_viewed_products.innerHTML = "";

    mockData.forEach((product, index) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = createRecentlyViewedProductCardHTML(product);

      // Add right padding to the last item for better scrolling experience
      if (index === mockData.length - 1) {
        productElement.classList.add("pr-5");
      }

      recently_viewed_products.appendChild(productElement);
    });

    // Add touch scroll support for better mobile experience
    recently_viewed_products.addEventListener("touchstart", function (e) {
      this.style.scrollBehavior = "auto";
    });

    recently_viewed_products.addEventListener("touchend", function (e) {
      this.style.scrollBehavior = "smooth";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  function createProductCardHTML(item, wishlisted = false) {
    return `
    <div class="bg-white border border-gray-100 xl:border-none w-44 xl:w-full group hover:shadow-xl overflow-hidden pb-4 md:pb-3 transition-all duration-300">
      
      <!-- Image Container with Aspect Ratio -->
      <div class="w-full aspect-[1/1] relative">
        
        <!-- Main Product Image -->
        <img
          class="w-full h-full object-cover transition-all duration-300"
          src="${item.image}"
          alt="${item.description}"
        />

        <!-- Wishlist Button (Desktop) -->
        <div class="bg-white absolute -bottom-7 right-0 w-full p-2 hidden ${
          wishlisted ? "xl:block" : "group-hover:xl:block"
        }  z-[10]">
          <div class="flex text-xs gap-2 justify-center items-center  ${
            wishlisted ? "bg-[#535766] text-white" : "bg-white"
          } w-full p-2 uppercase font-bold border-[1px] border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${
              wishlisted ? "#ff3f6c" : "none"
            }" stroke="${
      wishlisted ? "#ff3f6c" : "#535766"
    }" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            Wishlist
          </div>
        </div>

      </div>

      <!-- Text Content -->
      <div class="p-2 relative">
        <h1 class="text-[13px] z-[30] md:text-base font-bold text-black truncate">${
          item.brand
        }</h1>
        <h2 class="text-[11px] z-[30] md:text-sm text-gray-500 group-hover:xl:hidden truncate">${
          item.title
        }</h2>
        <h2 class="text-sm hidden text-gray-500 group-hover:xl:block truncate">Size: ${item.sizes.join(
          ", "
        )}</h2>
        <p class="flex items-center space-x-1 text-[13px] md:text-sm overflow-hidden">
          <span class="font-bold flex-shrink-0">${item.currentPrice}</span>
          <del class="text-gray-500 flex-shrink-0">${item.originalPrice}</del>
          <span class="text-xs text-[#ff905a] flex-shrink-0">(${
            item.discountPercent
          }% OFF)</span>
        </p>
        <!-- Wishlist Icon (Mobile) -->
        <div class="absolute bottom-11 right-2 top-0.5 pt-1 pl-4 h-10 text-gray-800 xl:hidden">
          <svg class="w-6 h-6 ${
            wishlisted
              ? "fill-[#ff3f6c] stroke-[#ff3f6c]"
              : "fill-none stroke-[#535766]"
          } hover:fill-[#ff3f6c] hover:stroke-[#ff3f6c] hover:text-red-500 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="#535766" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
      </div>
    </div>
  `;
  }

  const similarProductsDesktopGrid = document.getElementById(
    "similar-products-desktop-grid"
  );

  const similarProductsMobileSlider = document.getElementById(
    "similar-products-mobile"
  );

  if (similarProductsDesktopGrid) {
    similarProductsDesktopGrid.innerHTML = "";
    products.forEach((product, index) => {
      const productCard = document.createElement("div");
      if (index % 2 === 0) {
        productCard.innerHTML = createProductCardHTML(product, true);
      } else {
        productCard.innerHTML = createProductCardHTML(product);
      }
      similarProductsDesktopGrid.appendChild(productCard);
    });
  }

  if (similarProductsMobileSlider) {
    similarProductsMobileSlider.innerHTML = "";
    products.forEach((product, index) => {
      const productCard = document.createElement("div");
      if (index % 2 === 0) {
        productCard.innerHTML = createProductCardHTML(product, true);
      } else {
        productCard.innerHTML = createProductCardHTML(product);
      }
      if (index === products.length - 1) {
        productCard.classList.add("pr-5");
      }
      similarProductsMobileSlider.appendChild(productCard);
    });
  }

  const similar_products = document.getElementById("similar-products");

  if (similar_products) {
    // Clear existing content
    similar_products.innerHTML = "";

    products.forEach((product, index) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = createProductCardHTML(product);

      // Add right padding to the last item for better scrolling experience
      if (index === products.length - 1) {
        productElement.classList.add("pr-5");
      }

      similar_products.appendChild(productElement);
    });

    // Add touch scroll support for better mobile experience
    similar_products.addEventListener("touchstart", function (e) {
      this.style.scrollBehavior = "auto";
    });

    similar_products.addEventListener("touchend", function (e) {
      this.style.scrollBehavior = "smooth";
    });
  }
});
