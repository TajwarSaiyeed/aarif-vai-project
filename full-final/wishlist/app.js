// --- Typewriter Effect for Search Placeholder ---
document.addEventListener("DOMContentLoaded", function () {
  const typewriterEl = document.getElementById("typewriter-search");
  if (typewriterEl) {
    const phrases = [
      "Search for products, brands and more",
      "Try 'Skincare', 'Moisturizer', 'Sunscreen'...",
      "Discover trending beauty products!",
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
  }

  const products = [
    {
      id: 1,
      title: "Bella Vita Organic",
      description: "Vitamin C Glow Face Wash",
      image: "https://picsum.photos/300/400?random=10",
      currentPrice: "₹299",
      originalPrice: "₹399",
      discountPercent: "25",
      rating: "4.2",
      ratingCount: "1.2k",
      href: "#",
      color: "White",
      brand: "Bella Vita Organic",
      category: "Face Wash",
    },
    {
      id: 2,
      title: "Plum Green Tea",
      description: "Pore Cleansing Gel Face Wash",
      image: "https://picsum.photos/300/400?random=11",
      currentPrice: "₹349",
      originalPrice: "₹449",
      discountPercent: "22",
      rating: "4.5",
      ratingCount: "890",
      href: "#",
      color: "Green",
      brand: "Plum",
      category: "Face Wash",
    },
    {
      id: 3,
      title: "Minimalist",
      description: "2% Salicylic Acid Face Wash",
      image: "https://picsum.photos/300/400?random=12",
      currentPrice: "₹199",
      originalPrice: "₹299",
      discountPercent: "33",
      rating: "4.3",
      ratingCount: "654",
      href: "#",
      color: "White",
      brand: "Minimalist",
      category: "Face Wash",
    },
    {
      id: 4,
      title: "Himalaya",
      description: "Anti-Pimple Neem Face Wash",
      image: "https://picsum.photos/300/400?random=13",
      currentPrice: "₹175",
      originalPrice: "₹225",
      discountPercent: "22",
      rating: "4.1",
      ratingCount: "2.1k",
      href: "#",
      color: "Green",
      brand: "Himalaya",
      category: "Face Wash",
    },
    {
      id: 5,
      title: "L'Oreal Paris",
      description: "Hyaluron Moisture",
      image: "https://picsum.photos/300/400?random=14",
      currentPrice: "₹549",
      originalPrice: "₹699",
      discountPercent: "21",
      rating: "4.4",
      ratingCount: "532",
      href: "#",
      color: "Blue",
      brand: "L'Oreal Paris",
      category: "Moisturizer",
    },
    {
      id: 6,
      title: "Olay Total Effects",
      description: "Night Cream",
      image: "https://picsum.photos/300/400?random=15",
      currentPrice: "₹899",
      originalPrice: "₹1199",
      discountPercent: "25",
      rating: "4.6",
      ratingCount: "1.5k",
      href: "#",
      color: "White",
      brand: "Olay",
      category: "Night Cream",
    },
    {
      id: 7,
      title: "Deconstruct",
      description: "Oil-Free Moisturizer",
      image: "https://picsum.photos/300/400?random=16",
      currentPrice: "₹425",
      originalPrice: "₹549",
      discountPercent: "23",
      rating: "4.2",
      ratingCount: "743",
      href: "#",
      color: "White",
      brand: "Deconstruct",
      category: "Moisturizer",
    },
    {
      id: 8,
      title: "Pilgrim",
      description: "Hair Growth Serum",
      image: "https://picsum.photos/300/400?random=17",
      currentPrice: "₹649",
      originalPrice: "₹899",
      discountPercent: "28",
      rating: "4.3",
      ratingCount: "967",
      href: "#",
      color: "Brown",
      brand: "Pilgrim",
      category: "Hair Serum",
    },
    {
      id: 9,
      title: "The Man Company",
      description: "Charcoal",
      image: "https://picsum.photos/300/400?random=18",
      currentPrice: "₹399",
      originalPrice: "₹499",
      discountPercent: "20",
      rating: "4.5",
      ratingCount: "1.1k",
      href: "#",
      color: "Black",
      brand: "The Man Company",
      category: "Face Wash",
    },
    {
      id: 10,
      title: "Beardo",
      description: "Activated Charcoal",
      image: "https://picsum.photos/300/400?random=19",
      currentPrice: "₹299",
      originalPrice: "₹399",
      discountPercent: "25",
      rating: "4.2",
      ratingCount: "800",
      href: "#",
      color: "Black",
      brand: "Beardo",
      category: "Face Wash",
    },
    {
      id: 11,
      title: "Dot & Key",
      description: "Watermelon Superglow",
      image: "https://picsum.photos/300/400?random=20",
      currentPrice: "₹595",
      originalPrice: "₹795",
      discountPercent: "25",
      rating: "4.3",
      ratingCount: "1.8k",
      href: "#",
      color: "Pink",
      brand: "Dot & Key",
      category: "Moisturizer",
    },
    {
      id: 12,
      title: "Mamaearth",
      description: "Onion Hair Oil",
      image: "https://picsum.photos/300/400?random=21",
      currentPrice: "₹389",
      originalPrice: "₹499",
      discountPercent: "22",
      rating: "4.0",
      ratingCount: "3.5k",
      href: "#",
      color: "Brown",
      brand: "Mamaearth",
      category: "Hair Oil",
    },
    {
      id: 13,
      title: "WOW Skin Science",
      description: "Apple Cider Vinegar",
      image: "https://picsum.photos/300/400?random=22",
      currentPrice: "₹375",
      originalPrice: "₹499",
      discountPercent: "25",
      rating: "4.1",
      ratingCount: "2.7k",
      href: "#",
      color: "Brown",
      brand: "WOW Skin Science",
      category: "Shampoo",
    },
    {
      id: 14,
      title: "Mcaffeine",
      description: "Naked & Raw Coffee",
      image: "https://picsum.photos/300/400?random=23",
      currentPrice: "₹399",
      originalPrice: "₹599",
      discountPercent: "33",
      rating: "4.4",
      ratingCount: "980",
      href: "#",
      color: "Brown",
      brand: "Mcaffeine",
      category: "Body Scrub",
    },
    {
      id: 15,
      title: "Biotique",
      description: "Bio Papaya Tan Removal ",
      image: "https://picsum.photos/300/400?random=24",
      currentPrice: "₹180",
      originalPrice: "₹250",
      discountPercent: "28",
      rating: "4.0",
      ratingCount: "1.9k",
      href: "#",
      color: "Orange",
      brand: "Biotique",
      category: "Face Scrub",
    },
    {
      id: 16,
      title: "Neutrogena",
      description: "Hydro Boost Water Gel",
      image: "https://picsum.photos/300/400?random=25",
      currentPrice: "₹849",
      originalPrice: "₹950",
      discountPercent: "11",
      rating: "4.5",
      ratingCount: "2.2k",
      href: "#",
      color: "Blue",
      brand: "Neutrogena",
      category: "Moisturizer",
    },
    {
      id: 17,
      title: "The Body Shop",
      description: "Tea Tree Skin Clearing",
      image: "https://picsum.photos/300/400?random=26",
      currentPrice: "₹645",
      originalPrice: "₹745",
      discountPercent: "13",
      rating: "4.6",
      ratingCount: "1.1k",
      href: "#",
      color: "Green",
      brand: "The Body Shop",
      category: "Face Wash",
    },
    {
      id: 18,
      title: "Forest Essentials",
      description: "Delicate Facial",
      image: "https://picsum.photos/300/400?random=27",
      currentPrice: "₹1250",
      originalPrice: "₹1450",
      discountPercent: "14",
      rating: "4.7",
      ratingCount: "900",
      href: "#",
      color: "Yellow",
      brand: "Forest Essentials",
      category: "Face Wash",
    },
    {
      id: 19,
      title: "Mamaearth",
      description: "Vitamin C Face Wash",
      image: "https://picsum.photos/300/400?random=28",
      currentPrice: "₹249",
      originalPrice: "₹349",
      discountPercent: "29",
      rating: "4.2",
      ratingCount: "2.5k",
      href: "#",
      color: "White",
      brand: "Mamaearth",
      category: "Face Wash",
    },
    {
      id: 20,
      title: "WOW Skin Rectified",
      description: "Ubtan Face Wash",
      image: "https://picsum.photos/300/400?random=29",
      currentPrice: "₹299",
      originalPrice: "₹399",
      discountPercent: "25",
      rating: "4.3",
      ratingCount: "1.3k",
      href: "#",
      color: "Yellow",
      brand: "WOW Skin Science",
      category: "Face Wash",
    },
  ];

  // Function to create product card HTML for desktop
  function createProductCardHTML(item) {
    return `
    <div
  class="c-css bg-white w-full  group hover:shadow-xl overflow-hidden pb-4 md:pb-3 relative text-center  transition-shadow duration-300 bg-white border border-gray-200 rounded-lg">
  <!-- Remove from wishlist -->
  <button data-id="${item.id}" class="wishlist-remove-btn absolute top-1 right-1 text-gray-500 hover:text-red-500 transition-colors duration-200 rounded-full p-1 z-5 border border-gray-300" aria-label="Remove from wishlist">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </button>
  <a href="${item.href}" class="block text-gray-800 no-underline outline-none">
    <div class="relative overflow-hidden">
      <!-- Product Image -->
      <div class="w-full h-full c-css-img aspect-[3/4] bg-white relative p-[10px]">
        <img src="../img.jpeg" alt="${item.title} ${item.description}"
          class="w-full h-full object-cover object-top transition-opacity duration-300" loading="lazy" />
      </div>

      <!-- Content -->
      <div class="relative px-2">
        <div class="py-2">
          <!-- Brand Title -->
          <h3
            class="text-left pl-1 font-bold text-gray-800 text-sm leading-tight w-4/5 whitespace-nowrap overflow-hidden text-ellipsis mb-0">
            ${item.title}
          </h3>

          <!-- Description -->
          <h4
            class="text-left pl-1 opacity-60 whitespace-nowrap overflow-hidden text-ellipsis max-w-44 m-0 text-xs font-normal text-gray-800 h-3">
            ${item.description}
          </h4>

          <!-- Price Container -->
          <div class="mt-0 pl-1.5 text-left overflow-hidden whitespace-nowrap text-ellipsis">
            <!-- Current Price -->
            <span class="font-semibold text-gray-800 text-sm">
              <span class="relative -left-0.5">${item.currentPrice}</span>
            </span>

            <!-- Original Price -->
            <span class="text-sm">
              <span class="opacity-40 text-gray-800 line-through text-xs">
                <span>${item.originalPrice}</span>
              </span>
            </span>

            <!-- Discount -->
            <span class="text-orange-400 font-bold text-xs whitespace-nowrap">
              <span>(${item.discountPercent}% OFF)</span>
            </span>
          </div>
        </div>
        <div class="border-t border-gray-200 w-[90%] mx-auto"></div>
      </div>
    </div>
  </a>

  <!-- Add to Bag Button (outside product link) -->
  <div class="p-2">
    <button
      class="w-full uppercase text-[#ff3f6c] font-bold text-sm hover:text-[#ff3f6c]/80 transition-colors bg-transparent border-none cursor-pointer">Move
      to Bag</button>
  </div>
</div>
`;
  }

  const productsGridDesktop = document.querySelector("#products-grid-desktop");
  if (productsGridDesktop) {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.innerHTML = createProductCardHTML(product);
      // mark the outer wrapper so we can remove the whole wrapper (prevents empty gaps)
      productCard.classList.add("product-wrapper");
      productCard.setAttribute("data-product-id", product.id);
      productsGridDesktop.appendChild(productCard);
    });
  }

  // Modal handling for wishlist remove/move actions
  (function () {
    const modal = document.getElementById("moveFromWishlistModal");
    const modalImg = document.getElementById("wishlistModalProductImage");
    const removeBtn = document.getElementById("wishlistModalRemoveButton");
    const moveToBagBtn = document.getElementById(
      "wishlistModalMoveToBagButton"
    );
    let activeCard = null;

    function openMoveFromWishlistModal(card) {
      if (!modal) return;
      // ensure we remove the outer wrapper element (the one appended to the grid)
      const wrapper =
        card.closest(".product-wrapper") || card.parentElement || card;
      activeCard = wrapper;
      // try to find the image inside the card first, fallback to wrapper
      const img =
        card.querySelector("img") || (wrapper && wrapper.querySelector("img"));
      if (modalImg && img) modalImg.src = img.src || "";
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }

    function closeMoveFromWishlistModal() {
      if (!modal) return;
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      activeCard = null;
    }

    // expose for inline onclick on the modal close button
    window.closeMoveFromWishlistModal = closeMoveFromWishlistModal;

    // delegate clicks on remove buttons
    productsGridDesktop &&
      productsGridDesktop.addEventListener("click", function (e) {
        const btn =
          e.target.closest && e.target.closest(".wishlist-remove-btn");
        if (!btn) return;
        // find the product card container (the .c-css element)
        const card = btn.closest(".c-css") || btn.closest("div");
        if (card) openMoveFromWishlistModal(card);
      });

    // Remove from wishlist action
    removeBtn &&
      removeBtn.addEventListener("click", function () {
        if (activeCard) {
          activeCard.remove();
        }
        closeMoveFromWishlistModal();
      });

    // Move to bag action - here we simply remove from wishlist and could add to bag logic
    moveToBagBtn &&
      moveToBagBtn.addEventListener("click", function () {
        if (activeCard) {
          // Optionally, copy item data and add to bag logic here
          activeCard.remove();
        }
        closeMoveFromWishlistModal();
      });

    // close modal when clicking overlay
    modal &&
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeMoveFromWishlistModal();
      });
  })();
});
