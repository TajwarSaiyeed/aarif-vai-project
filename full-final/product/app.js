document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements from existing product page script
  // No changes to this section from your provided HTML
  const sizeButtons = document.querySelectorAll(".size-btn");
  const addToBagDesktopBtn = document.getElementById("add-to-bag-desktop");
  const addToBagMobileBtn = document.getElementById("add-to-bag-mobile");
  const sizeSelectionMessage = document.getElementById(
    "size-selection-message"
  );
  const toast = document.getElementById("toast");
  const seeMoreSpecsBtn = document.getElementById("see-more-specs");
  const specsMore = document.getElementById("specs-more");
  // Original HTML reviewContent does not have `readMoreBtns` variable definition, this might be leftover or intended for a separate readMore toggle that wasn't provided. Removing its usage for safety if not used elsewhere.
  // const readMoreBtns = document.querySelectorAll(".read-more-btn");

  let selectedSize = "50ml"; // Track selected size - default to 50ml

  // Initialize default selection
  const defaultButton = document.querySelector('.size-btn[data-size="50ml"]');
  if (defaultButton && !defaultButton.disabled) {
    defaultButton.classList.remove("text-black");
    defaultButton.classList.add(
      "border-[#ff3f6c]",
      "text-white",
      "bg-[#ff3f6c]"
    );
  }

  // --- Size Selection ---
  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Don't allow selection of disabled buttons
      if (button.disabled) {
        return;
      }

      sizeButtons.forEach((btn) => {
        // Remove active styles from all buttons
        btn.classList.remove(
          "border-[#ff3f6c]",
          "text-[#ff3f6c]",
          "text-white",
          "bg-[#ff3f6c]"
        );
        // Restore default styles for enabled buttons
        if (!btn.disabled) {
          btn.classList.add("text-black");
        }
      });

      // Add active styles to clicked button
      button.classList.remove("text-black");
      button.classList.add("border-[#ff3f6c]", "text-white", "bg-[#ff3f6c]");
      selectedSize = button.dataset.size;
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

  // Reusable toast for product page
  function showAddToBagToast(imageUrl, message = "Added to bag") {
    // prefer the central alias to avoid recursion
    if (window && window.__central_showAddToBagToast) {
      return window.__central_showAddToBagToast(imageUrl, message);
    }
    // fallback
    let toast = document.getElementById("global-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "global-toast";
      toast.textContent = message;
      Object.assign(toast.style, {
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "black",
        color: "white",
        padding: "8px",
        zIndex: 9999,
      });
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    }
  }

  // wire other Add to Bag buttons on the product page (delegation)
  // wire Add to Bag and Wishlist buttons (delegation)
  document.body.addEventListener("click", function (e) {
    const el =
      e.target.closest &&
      e.target.closest(
        "button, [role=button], .add-to-bag-btn, .add-to-bag, .add-to-cart"
      );
    if (!el) return;

    const text = ((el.textContent || el.innerText) + "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    const isAddToBagByText =
      /add to bag|add to cart|move to bag|go to bag|add to bag/i.test(text);
    const hasAddToBagClass =
      el.classList &&
      (el.classList.contains("add-to-bag-btn") ||
        el.classList.contains("add-to-bag") ||
        el.classList.contains("add-to-cart"));
    const dataAction =
      el.getAttribute && (el.getAttribute("data-action") || "").toLowerCase();

    // Add to bag
    if (
      isAddToBagByText ||
      hasAddToBagClass ||
      dataAction === "add-to-bag" ||
      dataAction === "add-to-cart"
    ) {
      const card =
        el.closest(".c-css") ||
        el.closest("[data-product-card]") ||
        el.closest(".product-card") ||
        el.closest("div");
      const img = card && card.querySelector("img");
      const src = (img && img.src) || "../img.jpeg";
      if (window && window.__central_showAddToBagToast) {
        window.__central_showAddToBagToast(src, "Added to bag");
      } else {
        showAddToBagToast(src, "Added to bag");
      }
      e.preventDefault && e.preventDefault();
      return;
    }

    // Wishlist button (could be desktop or mobile). Show wishlist modal
    if (
      text.includes("wishlist") ||
      (el.classList && el.classList.contains("wishlist-btn"))
    ) {
      const card = el.closest(".c-css") || el.closest("div");
      const img = card && card.querySelector("img");
      const src = (img && img.src) || "../img.jpeg";
      const modal = document.getElementById("wishlistToastModal");
      const modalImg = document.getElementById("wishlistToastImage");
      const modalText = document.getElementById("wishlistToastText");
      if (modalImg) modalImg.src = src;
      if (modalText) modalText.textContent = "Added to Wishlist";
      if (modal) {
        // ensure proper display classes (match add-to-bag toast behavior)
        modal.classList.remove("hidden");
        // remove translate-x-full then translate to 0 to animate in
        setTimeout(() => {
          modal.classList.remove("translate-x-full");
          modal.classList.add("translate-x-0");
        }, 50);

        // Auto hide after 3s (match add-to-bag)
        setTimeout(() => {
          modal.classList.remove("translate-x-0");
          modal.classList.add("translate-x-full");
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 300);
        }, 3000);
      }
      return;
    }
  });

  const closeWishlistToast = document.getElementById("closeWishlistToast");
  const wishlistModalEl = document.getElementById("wishlistToastModal");
  if (closeWishlistToast && wishlistModalEl) {
    closeWishlistToast.addEventListener("click", function () {
      // animate out then hide
      wishlistModalEl.classList.remove("translate-x-0");
      wishlistModalEl.classList.add("translate-x-full");
      setTimeout(() => {
        wishlistModalEl.classList.add("hidden");
      }, 300);
      document.body.style.overflow = "auto";
    });
  }

  // --- "See More" Specifications Toggle (Desktop) ---
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

  // --- "See More" Specifications Toggle (Mobile) ---
  const mobileSeeMoreSpecsBtn = document.getElementById(
    "mobile-see-more-specs"
  );
  const mobileSpecsMore = document.getElementById("mobile-specs-more");

  if (mobileSeeMoreSpecsBtn) {
    mobileSeeMoreSpecsBtn.addEventListener("click", () => {
      const isHidden = mobileSpecsMore.classList.contains("hidden");
      if (isHidden) {
        mobileSpecsMore.classList.remove("hidden");
        mobileSeeMoreSpecsBtn.textContent = "See Less";
      } else {
        mobileSpecsMore.classList.add("hidden");
        mobileSeeMoreSpecsBtn.textContent = "See More";
      }
    });
  }

  // --- Mobile Sticky Footer ---
  const mobileStickyFooter = document.getElementById("mobile-sticky-footer");
  const mobileBodyActions = document.getElementById("mobile-body-actions");
  const footerContainer = document.getElementById("footer-container");

  if (mobileStickyFooter && mobileBodyActions) {
    let isMobileBodyActionsVisible = false;
    let isFooterVisible = false;

    // Function to update sticky footer visibility
    const updateStickyFooterVisibility = () => {
      if (window.innerWidth < 1280) {
        // Hide sticky footer if either mobile-body-actions or footer is visible
        if (isMobileBodyActionsVisible || isFooterVisible) {
          mobileStickyFooter.classList.remove("show");
        } else {
          mobileStickyFooter.classList.add("show");
        }
      } else {
        // Ensure hidden on desktop
        mobileStickyFooter.classList.remove("show");
      }
    };

    // Observer for mobile-body-actions
    const bodyActionsObserver = new IntersectionObserver(
      ([entry]) => {
        isMobileBodyActionsVisible = entry.isIntersecting;
        updateStickyFooterVisibility();
      },
      {
        threshold: 0.1, // Trigger when 10% of the mobile-body-actions is visible
        rootMargin: "0px 0px -50px 0px", // Add some margin to fine-tune when it triggers
      }
    );

    bodyActionsObserver.observe(mobileBodyActions);

    // Observer for footer container (if it exists)
    if (footerContainer) {
      const footerObserver = new IntersectionObserver(
        ([entry]) => {
          isFooterVisible = entry.isIntersecting;
          updateStickyFooterVisibility();
        },
        {
          threshold: 0, // Trigger as soon as any part of the footer is visible
          rootMargin: "0px 0px 0px 0px",
        }
      );

      footerObserver.observe(footerContainer);
    }

    // Handle resize: If resized to desktop, hide sticky footer
    window.addEventListener("resize", () => {
      updateStickyFooterVisibility();
    });

    // Initial check on page load
    setTimeout(() => {
      if (window.innerWidth < 1280) {
        const bodyActionsRect = mobileBodyActions.getBoundingClientRect();
        isMobileBodyActionsVisible =
          bodyActionsRect.top < window.innerHeight &&
          bodyActionsRect.bottom > 0;

        if (footerContainer) {
          const footerRect = footerContainer.getBoundingClientRect();
          isFooterVisible =
            footerRect.top < window.innerHeight && footerRect.bottom > 0;
        }

        updateStickyFooterVisibility();
      }
    }, 100);
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
    "../img.jpeg",
    "../perfume.jpg",
    "../perfume2.png",
    "../img.jpeg",
    "../perfume.jpg",
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

  // -----------------------------------------------
  // VIEW SIMILAR SMOOTH SCROLL FUNCTIONALITY START
  // -----------------------------------------------
  const viewSimilarButtons = document.querySelectorAll(
    '.view-similar-btn[href="#similar-products-desktop"]'
  );

  viewSimilarButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      const targetElement = document.getElementById("similar-products-desktop");
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    });
  });
  // -----------------------------------------------
  // VIEW SIMILAR SMOOTH SCROLL FUNCTIONALITY END
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
    slide.style.backgroundSize = "contain";
    slide.style.backgroundPosition = "center";
    slide.style.width = "100%";
    slide.style.height = "100%";
    slide.style.backgroundRepeat = "no-repeat";
    mobile_image_slider.appendChild(slide);
    totalSlides++;
  }

  // Example images - you can add as many as you want
  const images = [
    "../img.jpeg",
    "../perfume.jpg",
    "../perfume2.png",
    "../img.jpeg",
    "../perfume.jpg",
    "../perfume2.png",
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
    image: "../perfume.jpg",
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
    image: "../perfume2.png",
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
    image: "../perfume.jpg",
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
    image: "../perfume2.png",
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
    image: "../perfume2.png",
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
    image: "../perfume.jpg",
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
      img: "../img.jpeg",
      title: "Product 1",
      subtitle: "Description for Product 1",
      brand: "Flying Machine",
    },
    {
      img: "../perfume.jpg",
      title: "Product 2",
      subtitle: "Description for Product 2",
      brand: "Roadster",
    },
    {
      img: "../perfume2.png",
      title: "Product 3",
      subtitle: "Description for Product 3",
      brand: "HERE&NOW",
    },
    {
      img: "../img.jpeg",
      title: "Product 4",
      subtitle: "Description for Product 4",
      brand: "HRX by Hrithik Roshan",
    },
    {
      img: "../perfume.jpg",
      title: "Product 5",
      subtitle: "Description for Product 5",
      brand: "Puma",
    },
    {
      img: "../perfume2.png",
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
            class="w-full h-full object-cover bg-gray-50 transition-all duration-300"
            loading="lazy"
            onload="this.parentNode.classList.remove('bg-gray-50')"            
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
    <div class="bg-white border border-gray-100 xl:border-none w-44 xl:w-full group hover:shadow-xl overflow-hidden pb-4 md:pb-3 transition-all duration-300 py-2">
      
      <!-- Image Container with Aspect Ratio -->
      <div class="w-full aspect-[1/1] relative">

      <!-- Main Product Image -->
      <img class="w-full h-full object-cover bg-red-50 transition-all duration-300" src="${
        item.image
      }" priority loading="lazy"
        onload="this.parentNode.classList.remove('bg-gray-50')"
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

  const customerAlsoLikedDesktopGrid = document.getElementById(
    "customer-also-liked-desktop-grid"
  );

  const similarProductsMobileSlider = document.getElementById(
    "similar-products-mobile"
  );

  const customersAlsoViewedMobileSlider = document.getElementById(
    "customers-also-viewed-mobile"
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

  if (customerAlsoLikedDesktopGrid) {
    customerAlsoLikedDesktopGrid.innerHTML = "";
    products.forEach((product, index) => {
      const productCard = document.createElement("div");
      if (index % 2 === 0) {
        productCard.innerHTML = createProductCardHTML(product, true);
      } else {
        productCard.innerHTML = createProductCardHTML(product);
      }
      customerAlsoLikedDesktopGrid.appendChild(productCard);
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

  if (customersAlsoViewedMobileSlider) {
    customersAlsoViewedMobileSlider.innerHTML = "";
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
      customersAlsoViewedMobileSlider.appendChild(productCard);
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
