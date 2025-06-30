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
];

// Function to create product card HTML for desktop
function createProductCardHTML(item) {
  return `
    <div
      class="bg-white w-[210px] h-[330px] group hover:shadow-xl overflow-hidden"
    >
      <div class="w-full h-[250px] relative">
        <img
          class="w-full h-full object-fit"
          src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg"
          alt=""
        />
        <div
          class="bg-white absolute -bottom-7 right-0 w-full p-2 hidden group-hover:block"
        >
          <button
            class="flex gap-2 justify-center items-center bg-white w-full p-2 uppercase font-bold border-[1px] border-gray-300"
          >
            <span class="myntraweb-sprite sprites-notWishlisted"></span>
            Wishlist
          </button>
        </div>

        <div
          class="w-[40px] h-[40px] hidden group-hover:block hover:w-[150px] rounded-full bg-white absolute bottom-10 right-5 transition-all duration-300 flex justify-center items-center gap-2 group/similar overflow-hidden"
        >
          <span
            class="myntraweb-sprite sprites-similarProductsIcon mt-2 ml-[7px]"
          ></span>
          <p
            class="group-hover/similar:opacity-100 opacity-0 ml-10 -mt-7 font-bold text-[#ff517b] transition-opacity duration-300 delay-200 whitespace-nowrap text-base"
          >
            View Similar
          </p>
        </div>
      </div>

      <div class="p-2">
        <h1 class="text-base font-bold text-black">Levis</h1>
        <h2 class="text-sm block text-gray-500 group-hover:hidden">
          Solid Lounge T-shirt
        </h2>
        <h2 class="text-sm hidden text-gray-500 group-hover:block">Size : S</h2>
        <p class="space-x-2">
          <span class="font-bold">Rs. 389</span>
          <del class="text-sm text-gray-500">Rs. 649 </del>
          <span class="text-xs text-[#ff905a]">(40% OFF)</span>
        </p>
      </div>
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

// Color filter data
const colors = [
  { name: "Black", count: 74582, hex: "#000000" },
  { name: "Blue", count: 72287, hex: "#0000FF" },
  { name: "White", count: 62793, hex: "#FFFFFF" },
  { name: "Green", count: 43371, hex: "#008000" },
  { name: "Navy Blue", count: 40978, hex: "#000080" },
  { name: "Grey", count: 37444, hex: "#808080" },
  { name: "Beige", count: 21535, hex: "#F5F5DC" },
  { name: "Red", count: 19176, hex: "#FF0000" },
  { name: "Brown", count: 17602, hex: "#A52A2A" },
  { name: "Maroon", count: 17432, hex: "#800000" },
  { name: "Pink", count: 17177, hex: "#FFC0CB" },
  { name: "Yellow", count: 16211, hex: "#FFFF00" },
  { name: "Olive", count: 15744, hex: "#808000" },
  { name: "Purple", count: 9390, hex: "#800080" },
  { name: "Orange", count: 8330, hex: "#FFA500" },
  { name: "Off White", count: 7063, hex: "#F8F8FF" },
  { name: "Teal", count: 6700, hex: "#008080" },
  { name: "Mustard", count: 6673, hex: "#FFDB58" },
  { name: "Peach", count: 6345, hex: "#FFDAB9" },
  { name: "Cream", count: 6239, hex: "#FFFDD0" },
  { name: "Multi", count: 5178, hex: "#00000000" },
  { name: "Rust", count: 4052, hex: "#B7410E" },
  { name: "Lavender", count: 3600, hex: "#E6E6FA" },
  { name: "Sea Green", count: 3366, hex: "#2E8B57" },
  { name: "Turquoise Blue", count: 3356, hex: "#00FFFF" },
  { name: "Charcoal", count: 3325, hex: "#36454F" },
  { name: "Burgundy", count: 2598, hex: "#800020" },
  { name: "Khaki", count: 2573, hex: "#F0E68C" },
  { name: "Grey Melange", count: 2047, hex: "#00000000" },
  { name: "Mauve", count: 1790, hex: "#E0B0FF" },
  { name: "Coral", count: 1140, hex: "#FF7F50" },
  { name: "Coffee Brown", count: 1054, hex: "#6F4E37" },
  { name: "Lime Green", count: 1032, hex: "#32CD32" },
  { name: "Gold", count: 732, hex: "#FFD700" },
  { name: "Taupe", count: 583, hex: "#483C32" },
  { name: "Tan", count: 508, hex: "#D2B48C" },
  { name: "Violet", count: 438, hex: "#EE82EE" },
  { name: "Rose", count: 421, hex: "#FF007F" },
  { name: "Camel Brown", count: 388, hex: "#C19A6B" },
  { name: "Silver", count: 363, hex: "#C0C0C0" },
  { name: "Magenta", count: 293, hex: "#FF00FF" },
  { name: "Fluorescent Green", count: 249, hex: "#39FF14" },
  { name: "Nude", count: 119, hex: "#E0DAD4" },
  { name: "Steel", count: 110, hex: "#4682B4" },
  { name: "Assorted", count: 105, hex: "#ffffff00" },
  { name: "Copper", count: 77, hex: "#B87333" },
  { name: "Rose Gold", count: 46, hex: "#B76E79" },
  { name: "Bronze", count: 44, hex: "#CD7F32" },
  { name: "Metallic", count: 43, hex: "#e0d0c5" },
  { name: "Champagne", count: 11, hex: "#F7E7CE" },
  { name: "Skin", count: 5, hex: "#FFDDC4" },
  { name: "Transparent", count: 1, hex: "#eeeeee" },
];

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
      const selectedValue = e.target.value;
      sortByValue.textContent = e.target.nextElementSibling
        ? e.target.nextElementSibling.textContent
        : e.target.parentElement.textContent.trim();
      console.log("Selected sort:", selectedValue);
      sortProducts(selectedValue, true);
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
  initializeColorFilters(); // Initialize color filters
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
      case "new":
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
      case "price_desc":
        // Sort by current price (higher first)
        sortedProducts.sort((a, b) => {
          const aPrice = parseInt(a.currentPrice.replace("₹", ""));
          const bPrice = parseInt(b.currentPrice.replace("₹", ""));
          return bPrice - aPrice;
        });
        break;
      case "price-low-high":
      case "price_asc":
        // Sort by current price (lower first)
        sortedProducts.sort((a, b) => {
          const aPrice = parseInt(a.currentPrice.replace("₹", ""));
          const bPrice = parseInt(b.currentPrice.replace("₹", ""));
          return aPrice - bPrice;
        });
        break;
      case "rating":
      case "customer_rating":
        // Sort by rating (higher first)
        sortedProducts.sort(
          (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
        );
        break;
      case "recommended":
      default:
        // Default sort (no change)
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

// Initialize color filters
function initializeColorFilters() {
  const colorFilterContainer = document.getElementById("color-filter-list");

  if (!colorFilterContainer) return;

  // Clear existing content
  colorFilterContainer.innerHTML = "";

  colors.forEach((color) => {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    label.className = "inline-flex items-center cursor-pointer gap-2 relative";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "custom-checkbox hidden peer";
    checkbox.value = color.name.toLowerCase().replace(/\s+/g, "-");

    const checkboxBox = document.createElement("div");
    checkboxBox.className =
      "checkbox-box w-4 h-4 rounded-[1px] border border-gray-300 peer-checked:bg-[#f63d68] peer-checked:border-[#f63d68] relative transition";

    // Color display circle (only if hex color exists)
    if (color.hex) {
      const colorDisplay = document.createElement("div");
      colorDisplay.className = "w-4 h-4 rounded-full border border-gray-200";
      colorDisplay.style.backgroundColor = color.hex;
      label.appendChild(checkbox);
      label.appendChild(checkboxBox);
      label.appendChild(colorDisplay);
    } else {
      // For colors without hex (Multi, Grey Melange, etc.)
      label.appendChild(checkbox);
      label.appendChild(checkboxBox);
    }

    const colorName = document.createElement("span");
    colorName.className = "text-sm text-gray-800 font-medium";
    colorName.textContent = color.name;

    const colorCount = document.createElement("span");
    colorCount.className = "text-sm text-gray-400 ml-auto";
    colorCount.textContent = `(${color.count.toLocaleString()})`;

    label.appendChild(colorName);
    label.appendChild(colorCount);
    listItem.appendChild(label);
    colorFilterContainer.appendChild(listItem);

    // Add event listener for color filter
    checkbox.addEventListener("change", function () {
      handleColorFilterChange(color.name, this.checked);
    });
  });
}

// Handle color filter changes
function handleColorFilterChange(colorName, isChecked) {
  console.log(`Color filter: ${colorName}, Checked: ${isChecked}`);
  // Add your color filtering logic here
  applyFilters();
}
