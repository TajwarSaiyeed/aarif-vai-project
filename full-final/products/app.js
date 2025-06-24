// New Arrivals Products Data
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
  },
  {
    id: 5,
    title: "L'Oreal Paris",
    description: "Hyaluron Moisture Sealing",
    image: "https://picsum.photos/300/400?random=14",
    currentPrice: "₹549",
    originalPrice: "₹699",
    discountPercent: "21",
    rating: "4.4",
    ratingCount: "532",
    href: "#",
  },
  {
    id: 6,
    title: "Olay Total Effects",
    description: "Night Cream Anti-Aging",
    image: "https://picsum.photos/300/400?random=15",
    currentPrice: "₹899",
    originalPrice: "₹1199",
    discountPercent: "25",
    rating: "4.6",
    ratingCount: "1.5k",
    href: "#",
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
  },
  {
    id: 9,
    title: "The Man Company",
    description: "Charcoal Face Wash",
    image: "https://picsum.photos/300/400?random=18",
    currentPrice: "₹399",
    originalPrice: "₹499",
    discountPercent: "20",
    rating: "4.5",
    ratingCount: "1.1k",
    href: "#",
  },
  {
    id: 10,
    title: "Beardo",
    description: "Activated Charcoal Face Wash",
    image: "https://picsum.photos/300/400?random=19",
    currentPrice: "₹299",
    originalPrice: "₹399",
    discountPercent: "25",
    rating: "4.2",
    ratingCount: "800",
    href: "#",
  },
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
  },
  {
    id: 5,
    title: "L'Oreal Paris",
    description: "Hyaluron Moisture Sealing",
    image: "https://picsum.photos/300/400?random=14",
    currentPrice: "₹549",
    originalPrice: "₹699",
    discountPercent: "21",
    rating: "4.4",
    ratingCount: "532",
    href: "#",
  },
  {
    id: 6,
    title: "Olay Total Effects",
    description: "Night Cream Anti-Aging",
    image: "https://picsum.photos/300/400?random=15",
    currentPrice: "₹899",
    originalPrice: "₹1199",
    discountPercent: "25",
    rating: "4.6",
    ratingCount: "1.5k",
    href: "#",
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
  },
  {
    id: 9,
    title: "The Man Company",
    description: "Charcoal Face Wash",
    image: "https://picsum.photos/300/400?random=18",
    currentPrice: "₹399",
    originalPrice: "₹499",
    discountPercent: "20",
    rating: "4.5",
    ratingCount: "1.1k",
    href: "#",
  },
  {
    id: 10,
    title: "Beardo",
    description: "Activated Charcoal Face Wash",
    image: "https://picsum.photos/300/400?random=19",
    currentPrice: "₹299",
    originalPrice: "₹399",
    discountPercent: "25",
    rating: "4.2",
    ratingCount: "800",
    href: "#",
  },
];

// Function to create product card HTML for desktop
function createProductCardHTML(item) {
  return `
    <div class="relative text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white border border-gray-200 ">
        <a href="${item.href}" class="block text-gray-800 no-underline outline-none">
            <div class="relative overflow-hidden">
                <!-- Product Image -->
                <div class="relative w-full h-64 bg-pink-50">
                    <img
                        src="${item.image}"
                        alt="${item.title} ${item.description}"
                        class="w-full h-full object-cover object-top transition-opacity duration-300"
                        loading="lazy"
                    />
                </div>

                <!-- Content -->
                <div class="relative px-2">
                    <div class="py-2">
                        <!-- Brand Title -->
                        <h3 class="text-left pl-2 font-bold text-gray-800 text-sm leading-tight w-4/5 whitespace-nowrap overflow-hidden text-ellipsis mb-0">
                            ${item.title}
                        </h3>

                        <!-- Description -->
                        <h4 class="text-left pl-2 opacity-60 whitespace-nowrap overflow-hidden text-ellipsis max-w-44 m-0 text-xs font-normal text-gray-800 h-3">
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

                        <!-- Placeholder for additional info tag -->
                        <div class="text-orange-600 text-xs font-bold min-h-4 text-left ml-2"></div>
                    </div>

                    <!-- Wishlist Icon -->
                    <div class="absolute bottom-11 right-2 top-0.5 pt-1 pl-4 h-10 text-gray-800">
                        <svg class="w-6 h-6 hover:fill-red-500 hover:text-red-500 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    </div>
`;
}

const productsSliderMobile = document.querySelector("#products-slider-mobile");
if (productsSliderMobile) {
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createProductCardHTML(product);
    productsSliderMobile.appendChild(productCard);
  });
}

// Desktop product rendering
const productsGridDesktop = document.querySelector("#products-grid-desktop");
const productCountDesktop = document.querySelector("#product-count-desktop");
const sortDesktop = document.querySelector("#sort-desktop");

// Filter data structure
const filterData = {
  Bundles: ["Combo Pack", "Value Pack", "Gift Set", "Starter Kit"],
  "Country of Origin": [
    "All Countries",
    "Bangladesh",
    "Cambodia",
    "China",
    "Egypt",
    "Guatemala",
    "India",
    "Indonesia",
    "Italy",
    "Malaysia",
    "Sri Lanka",
    "Turkey",
    "Vietnam",
  ],
  Size: [
    "3XS",
    "XXS",
    "XS",
    "XS/S",
    "S",
    "S/M",
    "M",
    "M/L",
    "L",
    "L/XL",
    "XL",
    "XL/XXL",
    "XXL",
    "3XL",
    "3XL/4XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL",
    "8XL",
    "9XL",
    "10XL",
    "11XL",
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y",
    "6-7Y",
    "7-8Y",
    "8-9Y",
    "9-10Y",
    "10-11Y",
    "11-12Y",
    "12-13Y",
    "13-14Y",
    "14-15Y",
    "36",
    "38",
    "39",
    "40",
    "42",
    "44",
    "46",
    "50",
    "Onesize",
    "Customise",
  ],
  "More Filters": [
    "Collar",
    "Fabrics",
    "Fashion Trends",
    "Features",
    "Fit",
    "Patterns",
    "Occasions",
    "Sleeve Length",
  ],
};

let activeFilter = null;

// Initialize filter categories
function initializeFilters() {
  const filterCategoriesContainer =
    document.getElementById("filter-categories");

  if (!filterCategoriesContainer) return;

  filterCategoriesContainer.classList.add("pb-1");

  // Create filter category buttons
  Object.keys(filterData).forEach((filterName, index) => {
    const filterButton = document.createElement("span");
    filterButton.className = `text-sm text-gray-600 mr-4 px-3 py-2 rounded-full cursor-pointer flex items-center gap-1 transition-all duration-200 border-none hover:bg-gray-100`;
    filterButton.setAttribute("data-filter", filterName);

    filterButton.innerHTML = `
      ${filterName}
      <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6,9 12,15 18,9"></polyline>
      </svg>
    `;

    // add active filter button bg to gray
    if (activeFilter === filterName) {
      filterButton.classList.remove("text-gray-600");
      filterButton.classList.add("bg-gray-100", "text-gray-800");
    }

    // Add click event listener
    filterButton.addEventListener("click", function () {
      toggleFilter(filterName, this);
    });

    filterCategoriesContainer.appendChild(filterButton);
  });
}

// Toggle filter functionality
function toggleFilter(filterName, buttonElement) {
  const subCategoriesContainer = document.getElementById(
    "sub-categories-container"
  );
  const subCategoriesList = document.getElementById("sub-categories-list");
  const allFilterButtons = document.querySelectorAll("[data-filter]");
  const arrowIcon = buttonElement.querySelector(".arrow-icon polyline");

  // If clicking the same filter, close it
  if (activeFilter === filterName) {
    // Close the filter
    activeFilter = null;
    subCategoriesContainer.classList.add("hidden");
    arrowIcon.setAttribute("points", "6,9 12,15 18,9"); // Down arrow
    // Remove active styling
    buttonElement.classList.remove("bg-gray-100", "text-gray-800");
    buttonElement.classList.add("text-gray-600");
    return;
  }

  // Remove active class from all buttons
  allFilterButtons.forEach((btn) => {
    const arrow = btn.querySelector(".arrow-icon polyline");
    arrow.setAttribute("points", "6,9 12,15 18,9"); // Down arrow
    // Remove active styling from all buttons
    btn.classList.remove("bg-gray-100", "text-gray-800");
    btn.classList.add("text-gray-600");
  });

  // Set new active filter
  activeFilter = filterName;
  arrowIcon.setAttribute("points", "18,15 12,9 6,15"); // Up arrow

  // Add active styling to current button
  buttonElement.classList.remove("text-gray-600");
  buttonElement.classList.add("bg-gray-100", "text-gray-800");

  // Show sub-categories container
  subCategoriesContainer.classList.remove("hidden");

  // Clear previous sub-categories
  subCategoriesList.innerHTML = "";

  // Add new sub-categories
  const subCategories = filterData[filterName];
  subCategories.forEach((subCategory) => {
    const subCategoryElement = document.createElement("label");
    subCategoryElement.className =
      "flex items-center cursor-pointer px-3 py-1  bg-white";

    subCategoryElement.innerHTML = `
      <input type="checkbox" value="${subCategory}" class="mr-2" />
      <span class="text-sm text-gray-700">${subCategory}</span>
    `;

    // Add change event listener for checkboxes
    const checkbox = subCategoryElement.querySelector("input");
    checkbox.addEventListener("change", function () {
      handleSubCategoryChange(filterName, subCategory, this.checked);
    });

    subCategoriesList.appendChild(subCategoryElement);
  });
}

// Handle sub-category selection
function handleSubCategoryChange(filterName, subCategory, isChecked) {
  console.log(
    `Filter: ${filterName}, Sub-category: ${subCategory}, Checked: ${isChecked}`
  );

  // Here you can add logic to filter products based on the selected sub-categories
  // For example, you could maintain an array of active filters and update the product display

  // Example: Apply filters to products
  applyFilters();
}

// Apply filters to products (placeholder function)
function applyFilters() {
  const checkedFilters = {};

  // Collect all checked filters
  const checkboxes = document.querySelectorAll(
    "#sub-categories-list input[type='checkbox']:checked"
  );
  checkboxes.forEach((checkbox) => {
    const filterCategory = activeFilter; // You might want to track this differently for multiple categories
    const value = checkbox.value;

    if (!checkedFilters[filterCategory]) {
      checkedFilters[filterCategory] = [];
    }
    checkedFilters[filterCategory].push(value);
  });

  console.log("Active filters:", checkedFilters);

  // Here you would implement the actual filtering logic
  // For now, we'll just log the filters
}

// Initialize the sort by dropdown functionality
const sortByList = document.getElementById("sort-by-list");
const sortByValue = document.getElementById("sort-by-value");

if (sortByList) {
  sortByList.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
      sortByValue.textContent = e.target.parentElement.textContent.trim();
      const sortType = e.target.value;
      console.log("Selected sort (desktop):", sortType);
      sortProducts(sortType, true);
    }
  });
}

function renderProductsDesktop(productsToRender) {
  if (productsGridDesktop) {
    productsGridDesktop.innerHTML = "";
    productsToRender.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.innerHTML = createProductCardHTML(product);
      productsGridDesktop.appendChild(productCard);
    });
  }
  if (productCountDesktop) {
    productCountDesktop.textContent = `- ${productsToRender.length} items`;
  }
}

if (productsGridDesktop) {
  renderProductsDesktop(products);
  initializeFilters();
}

if (sortDesktop) {
  sortDesktop.addEventListener("change", function () {
    const sortType = this.value;
    console.log("Selected sort (desktop):", sortType);
    sortProducts(sortType, true);
  });
}

// Modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const sortBtn = document.getElementById("sort-btn");
  const filterBtn = document.getElementById("filter-btn");
  const sortOverlay = document.getElementById("sort-overlay");
  const sortOverlayBg = document.getElementById("sort-overlay-bg");
  const filterModal = document.getElementById("filter-modal");

  // Sort modal functionality
  if (sortBtn && sortOverlay && sortOverlayBg) {
    sortBtn.addEventListener("click", function () {
      openSortModal();
    });

    // Close sort modal on background click
    sortOverlayBg.addEventListener("click", function () {
      closeSortModal();
    });

    // Sort option selection
    const sortButtons = document.querySelectorAll("[data-sort]");
    sortButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const sortType = this.getAttribute("data-sort");
        console.log("Selected sort:", sortType);

        // Apply sorting logic here
        sortProducts(sortType, false);

        // Close modal after selection
        setTimeout(() => {
          closeSortModal();
        }, 300);
      });
    });
  } // Filter modal functionality
  if (filterBtn && filterModal) {
    const filterCloseBtn = document.getElementById("filter-close-btn");
    const filterCategoryItems = document.querySelectorAll(
      ".filter-category-item"
    );
    const filterOptionGroups = document.querySelectorAll(
      ".filter-option-group"
    );
    const defaultFilterMessage = document.getElementById(
      "default-filter-message"
    );
    const clearFiltersBtn = document.getElementById("clear-filters-btn");
    const applyFiltersBtn = document.getElementById("apply-filters-btn");

    filterBtn.addEventListener("click", function () {
      openFilterModal();
    });

    // Close button functionality
    if (filterCloseBtn) {
      filterCloseBtn.addEventListener("click", function () {
        closeFilterModal();
      });
    }

    // Clear filters functionality
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener("click", function () {
        // Uncheck all checkboxes
        const allCheckboxes = filterModal.querySelectorAll(
          'input[type="checkbox"]'
        );
        allCheckboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });

        // Reset to default state
        resetFilterModal();
      });
    }

    // Apply filters functionality
    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener("click", function () {
        // Here you can add logic to apply the selected filters
        console.log("Applying filters...");

        // Get all checked filters
        const checkedFilters = [];
        const allCheckboxes = filterModal.querySelectorAll(
          'input[type="checkbox"]:checked'
        );
        allCheckboxes.forEach((checkbox) => {
          const label = checkbox.nextElementSibling;
          const category = checkbox
            .closest(".filter-option-group")
            .getAttribute("data-options");
          checkedFilters.push({
            category: category,
            value: label.textContent.trim(),
          });
        });

        console.log("Selected filters:", checkedFilters);

        // Close modal after applying
        closeFilterModal();

        // You can add your filter logic here
        // For example: applyProductFilters(checkedFilters);
      });
    }

    filterBtn.addEventListener("click", function () {
      openFilterModal();
    });

    // Close button functionality
    if (filterCloseBtn) {
      filterCloseBtn.addEventListener("click", function () {
        closeFilterModal();
      });
    }

    // Category selection functionality
    filterCategoryItems.forEach((item) => {
      item.addEventListener("click", function () {
        const category = this.getAttribute("data-category");

        // Remove active class from all category items
        filterCategoryItems.forEach((categoryItem) => {
          categoryItem.classList.remove("active");
        });

        // Add active class to clicked item
        this.classList.add("active");

        // Hide all option groups
        filterOptionGroups.forEach((group) => {
          group.classList.add("hidden");
        });

        // Hide default message
        if (defaultFilterMessage) {
          defaultFilterMessage.classList.add("hidden");
        }

        // Show the selected category's options
        const targetGroup = document.querySelector(
          `[data-options="${category}"]`
        );
        if (targetGroup) {
          targetGroup.classList.remove("hidden");
        }
      });
    });

    // Close filter modal on background click (optional)
    filterModal.addEventListener("click", function (e) {
      if (e.target === filterModal) {
        closeFilterModal();
      }
    });

    // Close on escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (!filterModal.classList.contains("translate-y-neg-full")) {
          closeFilterModal();
        }
        if (!sortOverlay.classList.contains("translate-y-full")) {
          closeSortModal();
        }
      }
    });
  }

  function openSortModal() {
    sortOverlayBg.classList.remove("pointer-events-none");
    sortOverlayBg.classList.add("opacity-50");
    sortOverlay.classList.remove("translate-y-full");
    sortOverlay.classList.add("translate-y-0");
    document.body.style.overflow = "hidden";
  }

  function closeSortModal() {
    sortOverlayBg.classList.add("pointer-events-none");
    sortOverlayBg.classList.remove("opacity-50");
    sortOverlay.classList.add("translate-y-full");
    sortOverlay.classList.remove("translate-y-0");
    document.body.style.overflow = "";
  }

  function openFilterModal() {
    filterModal.classList.remove("translate-y-full");
    filterModal.classList.add("translate-y-0");
    document.body.style.overflow = "hidden";
  }

  function closeFilterModal() {
    filterModal.classList.add("translate-y-full");
    filterModal.classList.remove("translate-y-0");
    document.body.style.overflow = "";
  }

  function sortProducts(sortType, isDesktop = false) {
    let sortedProducts = [...products];

    switch (sortType) {
      case "popularity":
        // Sort by rating count (higher first)
        sortedProducts.sort((a, b) => {
          const aCount =
            parseFloat(a.ratingCount.replace("k", "")) *
            (a.ratingCount.includes("k") ? 1000 : 1);
          const bCount =
            parseFloat(b.ratingCount.replace("k", "")) *
            (b.ratingCount.includes("k") ? 1000 : 1);
          return bCount - aCount;
        });
        break;
      case "latest":
        // Sort by id (assuming higher id means newer)
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
      case "discount":
        // Sort by discount percentage (higher first)
        sortedProducts.sort(
          (a, b) => parseInt(b.discountPercent) - parseInt(a.discountPercent)
        );
        break;
      case "price-high-low":
        // Sort by current price (higher first)
        sortedProducts.sort((a, b) => {
          const aPrice = parseInt(a.currentPrice.replace("₹", ""));
          const bPrice = parseInt(b.currentPrice.replace("₹", ""));
          return bPrice - aPrice;
        });
        break;
      case "price-low-high":
        // Sort by current price (lower first)
        sortedProducts.sort((a, b) => {
          const aPrice = parseInt(a.currentPrice.replace("₹", ""));
          const bPrice = parseInt(b.currentPrice.replace("₹", ""));
          return aPrice - bPrice;
        });
        break;
      case "rating":
        // Sort by rating (higher first)
        sortedProducts.sort(
          (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
        );
        break;
      default:
        break;
    }

    // Re-render products with sorted order
    if (isDesktop) {
      renderProductsDesktop(sortedProducts);
    } else {
      renderProducts(sortedProducts);
    }
  }

  function renderProducts(productsToRender) {
    if (productsSliderMobile) {
      productsSliderMobile.innerHTML = "";
      productsToRender.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.innerHTML = createProductCardHTML(product);
        productsSliderMobile.appendChild(productCard);
      });
    }
  }

  function openFilterModal() {
    filterModal.classList.remove("translate-y-neg-full");
    filterModal.classList.add("translate-y-0");
    document.body.style.overflow = "hidden";
  }

  function closeFilterModal() {
    filterModal.classList.add("translate-y-neg-full");
    filterModal.classList.remove("translate-y-0");
    document.body.style.overflow = "";

    // Reset filter modal to default state
    resetFilterModal();
  }

  function resetFilterModal() {
    // Remove active class from all category items
    const filterCategoryItems = document.querySelectorAll(
      ".filter-category-item"
    );
    filterCategoryItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Hide all option groups
    const filterOptionGroups = document.querySelectorAll(
      ".filter-option-group"
    );
    filterOptionGroups.forEach((group) => {
      group.classList.add("hidden");
    });

    // Show default message
    const defaultFilterMessage = document.getElementById(
      "default-filter-message"
    );
    if (defaultFilterMessage) {
      defaultFilterMessage.classList.remove("hidden");
    }
  }
});
