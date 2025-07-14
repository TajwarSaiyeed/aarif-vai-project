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
  // Original page doesn't have deliveryOptionsSection with this ID. Assuming this refers to product-details-section for now or an appropriate top element.
  // For robustness, I'll link it to a section likely to be near the bottom where the sticky footer might appear.
  const observedStickySection = document.getElementById(
    "ratings-reviews-section"
  ); // Using an existing large section from your provided HTML

  if (mobileStickyFooter && observedStickySection) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.innerWidth < 768) {
          // Only apply for mobile
          // If the observed section is mostly out of view (scrolled past), show sticky footer
          if (
            !entry.isIntersecting &&
            window.scrollY > observedStickySection.offsetTop
          ) {
            mobileStickyFooter.classList.add("show");
          } else {
            // If the section is intersecting (visible) or scrolled above it, hide sticky footer
            mobileStickyFooter.classList.remove("show");
          }
        } else {
          mobileStickyFooter.classList.remove("show"); // Ensure hidden on desktop
        }
      },
      { threshold: 0 } // Trigger as soon as any part of the section enters/leaves view
    );

    observer.observe(observedStickySection);

    // Initial check on page load if already scrolled past the section on mobile
    if (
      window.innerWidth < 768 &&
      window.scrollY > observedStickySection.offsetTop
    ) {
      mobileStickyFooter.classList.add("show");
    }

    // Handle resize: If resized to desktop, hide sticky footer. If resized to mobile and scrolled, show.
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1280) {
        mobileStickyFooter.classList.remove("show");
      } else {
        if (window.scrollY > observedStickySection.offsetTop) {
          mobileStickyFooter.classList.add("show");
        }
      }
    });
  }

  // --- Mobile Image Carousel Placeholder (No actual carousel JS provided in initial code) ---
  // These elements and functions were part of my prior responsive product page generation,
  // but not directly relevant to *this* user-provided index.html and its image display grid.
  // I'll keep them as placeholders commented out to acknowledge they existed in prior context.
  /*
        const imageTrack = document.getElementById("image-track");
        const carouselImages = imageTrack.querySelectorAll(
          ".main-carousel-img.md\\:hidden"
        );
        const prevMobileBtn = document.getElementById("prev-image-mobile");
        const nextMobileBtn = document.getElementById("next-image-mobile");
        const carouselDotsContainer = document.getElementById("carousel-dots");
        let currentIndex = 0; // Current index for mobile carousel

        function updateCarousel() {
          // Adjust for desktop: main product image is the first one in the track, others are mobile-only
          const imagesToScroll =
            window.innerWidth < 768 ? carouselImages : [mainCarouselImages[0]];
          const offset = -currentIndex * 100;
          imageTrack.style.transform = `translateX(${offset}%)`;

          // Update dot indicators only for mobile
          if (window.innerWidth < 768) {
            carouselDotsContainer.innerHTML = "";
            imagesToScroll.forEach((_, index) => {
              const dot = document.createElement("span");
              dot.classList.add(
                "w-2",
                "h-2",
                "rounded-full",
                "bg-gray-400",
                "cursor-pointer"
              );
              if (index === currentIndex) {
                dot.classList.add("bg-white");
              }
              dot.addEventListener("click", () => {
                currentIndex = index;
                updateCarousel();
              });
              carouselDotsContainer.appendChild(dot);
            });
          }
        }

        // Mobile carousel navigation
        if (prevMobileBtn && nextMobileBtn) {
          prevMobileBtn.addEventListener("click", () => {
            currentIndex =
              currentIndex > 0 ? currentIndex - 1 : carouselImages.length - 1;
            updateCarousel();
          });

          nextMobileBtn.addEventListener("click", () => {
            currentIndex =
              currentIndex < carouselImages.length - 1 ? currentIndex + 1 : 0;
            updateCarousel();
          });
        }

        // Initialize carousel and dots on page load if mobile
        if (window.innerWidth < 768) {
          updateCarousel();
        }
        // Re-initialize on resize if crossing breakpoint
        window.addEventListener("resize", () => {
          if (window.innerWidth < 768) {
            updateCarousel();
          }
        });

        // --- Desktop Image Navigation (prev/next for main image display) ---
        const prevDesktopBtn = document.getElementById("prev-image-desktop");
        const nextDesktopBtn = document.getElementById("next-image-desktop");
        let currentDesktopImageIndex = 0; // Index for desktop thumbnails

        function updateDesktopImageFromNav() {
          desktopThumbnails.forEach((t) =>
            t.classList.remove("border-2", "border-myntra-pink")
          );
          desktopThumbnails[currentDesktopImageIndex].classList.add(
            "border-2",
            "border-myntra-pink"
          );
          mainCarouselImages[0].src =
            desktopThumbnails[currentDesktopImageIndex].dataset.fullSrc;
        }

        if (prevDesktopBtn && nextDesktopBtn) {
          prevDesktopBtn.addEventListener("click", () => {
            currentDesktopImageIndex =
              currentDesktopImageIndex > 0
                ? currentDesktopImageIndex - 1
                : desktopThumbnails.length - 1;
            updateDesktopImageFromNav();
          });

          nextDesktopBtn.addEventListener("click", () => {
            currentDesktopImageIndex =
              currentDesktopImageIndex < desktopThumbnails.length - 1
                ? currentDesktopImageIndex + 1
                : 0;
            updateDesktopImageFromNav();
          });
        }
        */

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

  // Initial population of the size chart table (only runs once if popup is hidden by default)
  // This ensures data is ready if user opens popup.
  populateSizeChart(currentUnit);
  // -----------------------------------------------
  // NEW JAVASCRIPT FOR SIZE CHART SIDEBAR INJECTION END
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
    "https://picsum.photos/1920/600?random=1",
    "https://picsum.photos/1920/600?random=2",
    "https://picsum.photos/1920/600?random=3",
    "https://picsum.photos/1920/600?random=6",
    "https://picsum.photos/1920/600?random=5",
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
