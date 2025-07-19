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
