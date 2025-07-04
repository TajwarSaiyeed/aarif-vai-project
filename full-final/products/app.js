const productsGridDesktop = document.getElementById("products-grid-desktop");
const productsSliderMobile = document.getElementById("products-slider-mobile");
const productCountDesktop = document.getElementById("product-count-desktop");

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
    description: "Hyaluron Moisture Sealing",
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
    description: "Night Cream Anti-Aging",
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
    description: "Charcoal Face Wash",
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
    description: "Activated Charcoal Face Wash",
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
    description: "Watermelon Superglow Moisturizer",
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
    description: "Onion Hair Oil for Hair Growth",
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
    description: "Apple Cider Vinegar Shampoo",
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
    description: "Naked & Raw Coffee Body Scrub",
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
    description: "Bio Papaya Tan Removal Scrub",
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
    description: "Tea Tree Skin Clearing Face Wash",
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
    description: "Delicate Facial Cleanser Kashmiri Saffron & Neem",
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
      class="bg-white max-w-[210px] h-[330px] group hover:shadow-xl overflow-hidden"
    >
      <div class="w-full h-[250px] relative">
        <img
          class="w-full h-full object-fit"
          src="${item.image}"
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
        <h1 class="text-base font-bold text-black">${item.brand}</h1>
        <h2 class="text-sm block text-gray-500 group-hover:hidden">
          ${item.title}
        </h2>
        <h2 class="text-sm hidden text-gray-500 group-hover:block">Size : S</h2>
        <p class="space-x-2">
          <span class="font-bold">Rs. ${item.currentPrice}</span>
          <del class="text-sm text-gray-500">Rs. ${item.originalPrice}</del>
          <span class="text-xs text-[#ff905a]">(${item.discountPercent}% OFF)</span>
        </p>
      </div>

      <!-- Wishlist Icon -->
      <div class="absolute bottom-11 right-2 top-0.5 pt-1 pl-4 h-10 text-gray-800">
        <svg class="w-6 h-6 hover:fill-red-500 hover:text-red-500 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </div>
    </div>
  `;
}

// Global filter state
let globalFilters = {
  colors: [],
  categories: [],
  brands: [],
  priceRange: { min: 0, max: 10100 },
  discount: null,
  sizes: [],
  customerRating: null,
  bundles: [],
  countryOfOrigin: [],
  moreFilters: [],
};

let currentSortType = "recommended";
let activeFilter = null;

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
  Size: ["50ml", "100ml", "200ml", "500ml"],
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

// Main render function
function render(filteredProducts = products) {
  const sortedProducts = sortProducts(filteredProducts, currentSortType);

  // Render for desktop
  if (productsGridDesktop) {
    renderProductsDesktop(sortedProducts);
  }

  // Render for mobile
  if (productsSliderMobile) {
    renderProducts(sortedProducts);
  }
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

// Modified applyFilters function
function applyFilters() {
  let filteredProducts = [...products];

  // Apply color filter
  if (globalFilters.colors.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      globalFilters.colors.includes(
        product.color.toLowerCase().replace(/\s+/g, "-")
      )
    );
  }

  // Apply category filter
  if (globalFilters.categories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      globalFilters.categories.includes(
        product.category.toLowerCase().replace(/\s+/g, "-")
      )
    );
  }

  // Apply brand filter
  if (globalFilters.brands.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      globalFilters.brands.includes(
        product.brand.toLowerCase().replace(/\s+/g, "-")
      )
    );
  }

  // Apply price range filter
  filteredProducts = filteredProducts.filter((product) => {
    const price = parseInt(product.currentPrice.replace("₹", ""));
    return (
      price >= globalFilters.priceRange.min &&
      price <= globalFilters.priceRange.max
    );
  });

  // Apply discount filter
  if (globalFilters.discount) {
    filteredProducts = filteredProducts.filter(
      (product) => parseInt(product.discountPercent) >= globalFilters.discount
    );
  }

  // Apply customer rating filter
  if (globalFilters.customerRating) {
    filteredProducts = filteredProducts.filter(
      (product) => parseFloat(product.rating) >= globalFilters.customerRating
    );
  }

  // Apply size filter (Note: Product data needs size information)
  if (globalFilters.sizes.length > 0) {
    // Placeholder: Add size data to products array to enable this
    // filteredProducts = filteredProducts.filter(product =>
    //   globalFilters.sizes.some(size => product.sizes?.includes(size))
    // );
  }

  // Apply bundle filter
  if (globalFilters.bundles.length > 0) {
    // Placeholder: Add bundle data to products array to enable this
    // filteredProducts = filteredProducts.filter(product =>
    //   globalFilters.bundles.includes(product.bundleType)
    // );
  }

  // Apply country of origin filter
  if (globalFilters.countryOfOrigin.length > 0) {
    // Placeholder: Add country data to products array to enable this
    // filteredProducts = filteredProducts.filter(product =>
    //   globalFilters.countryOfOrigin.includes(product.countryOfOrigin)
    // );
  }

  // Apply more filters
  if (globalFilters.moreFilters.length > 0) {
    // Placeholder: Add more filter data to products array to enable this
    // filteredProducts = filteredProducts.filter(product =>
    //   globalFilters.moreFilters.some(filter => product.filters?.includes(filter))
    // );
  }

  render(filteredProducts);
}

// Initialize filter categories
function initializeFilters() {
  const filterCategoriesContainer =
    document.getElementById("filter-categories");

  if (!filterCategoriesContainer) return;

  filterCategoriesContainer.classList.add("pb-1");

  Object.keys(filterData).forEach((filterName) => {
    const filterButton = document.createElement("span");
    filterButton.className = `text-[14px] text-gray-600 mr-4 px-2 py-1 rounded-full cursor-pointer flex items-center gap-1 transition-all duration-200 border-none hover:bg-gray-100`;
    filterButton.setAttribute("data-filter", filterName);

    filterButton.innerHTML = `
      ${filterName}
      <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CACBD0" stroke-width="2">
        <polyline points="6,9 12,15 18,9"></polyline>
      </svg>
    `;

    if (activeFilter === filterName) {
      filterButton.classList.remove("text-gray-600");
      filterButton.classList.add("bg-gray-100", "text-gray-800");
    }

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

  if (activeFilter === filterName) {
    activeFilter = null;
    subCategoriesContainer.classList.add("hidden");
    arrowIcon.setAttribute("points", "6,9 12,15 18,9");
    buttonElement.classList.remove("bg-gray-100", "text-gray-800");
    buttonElement.classList.add("text-gray-600");
    return;
  }

  allFilterButtons.forEach((btn) => {
    const arrow = btn.querySelector(".arrow-icon polyline");
    arrow.setAttribute("points", "6,9 12,15 18,9");
    btn.classList.remove("bg-gray-100", "text-gray-800");
    btn.classList.add("text-gray-600");
  });

  activeFilter = filterName;
  arrowIcon.setAttribute("points", "18,15 12,9 6,15");
  buttonElement.classList.remove("text-gray-600");
  buttonElement.classList.add("bg-gray-100", "text-gray-800");
  subCategoriesContainer.classList.remove("hidden");
  subCategoriesList.innerHTML = "";

  const subCategories = filterData[filterName];
  subCategories.forEach((subCategory) => {
    const listItem = document.createElement("li"); // Fixed: Define listItem here
    const label = document.createElement("label");
    label.className = "inline-flex items-center cursor-pointer gap-2 relative";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "custom-checkbox hidden peer";
    checkbox.value = subCategory.toLowerCase().replace(/\s+/g, "-");

    const checkboxBox = document.createElement("div");
    checkboxBox.className =
      "checkbox-box w-4 h-4 rounded-[1px] border border-gray-300 peer-checked:bg-[#f63d68] peer-checked:border-[#f63d68] relative transition";

    label.appendChild(checkbox);
    label.appendChild(checkboxBox);

    const subCategoryName = document.createElement("span");
    subCategoryName.className = "text-sm text-gray-700 font-medium";
    subCategoryName.textContent = subCategory;

    label.appendChild(subCategoryName);
    listItem.appendChild(label);
    subCategoriesList.appendChild(listItem);

    checkbox.addEventListener("change", function () {
      handleSubCategoryChange(filterName, subCategory, this.checked);
    });
  });
}

// Handle sub-category selection
function handleSubCategoryChange(filterName, subCategory, isChecked) {
  const normalizedSubCategory = subCategory.toLowerCase().replace(/\s+/g, "-");
  let filterKey;

  switch (filterName) {
    case "Size":
      filterKey = "sizes";
      break;
    case "Bundles":
      filterKey = "bundles";
      break;
    case "Country of Origin":
      filterKey = "countryOfOrigin";
      break;
    case "More Filters":
      filterKey = "moreFilters";
      break;
    default:
      return;
  }

  if (isChecked) {
    if (!globalFilters[filterKey].includes(normalizedSubCategory)) {
      globalFilters[filterKey].push(normalizedSubCategory);
    }
  } else {
    globalFilters[filterKey] = globalFilters[filterKey].filter(
      (c) => c !== normalizedSubCategory
    );
  }

  applyFilters();
}

// Handle color filter changes
function handleColorFilterChange(colorName, isChecked) {
  const normalizedColor = colorName.toLowerCase().replace(/\s+/g, "-");
  if (isChecked) {
    if (!globalFilters.colors.includes(normalizedColor)) {
      globalFilters.colors.push(normalizedColor);
    }
  } else {
    globalFilters.colors = globalFilters.colors.filter(
      (c) => c !== normalizedColor
    );
  }
  applyFilters();
}

// Initialize color filters
function initializeColorFilters() {
  const colorFilterContainer = document.getElementById("color-filter-list");

  if (!colorFilterContainer) return;

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

    if (color.hex) {
      const colorDisplay = document.createElement("div");
      colorDisplay.className = "w-4 h-4 rounded-full border border-gray-200";
      colorDisplay.style.backgroundColor = color.hex;
      label.appendChild(checkbox);
      label.appendChild(checkboxBox);
      label.appendChild(colorDisplay);
    } else {
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

    checkbox.addEventListener("change", function () {
      handleColorFilterChange(color.name, this.checked);
    });
  });
}

// Sort products
function sortProducts(productsToSort, sortType) {
  currentSortType = sortType;
  let sortedProducts = [...productsToSort];

  switch (sortType) {
    case "popularity":
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
      sortedProducts.sort((a, b) => b.id - a.id);
      break;
    case "discount":
      sortedProducts.sort(
        (a, b) => parseInt(b.discountPercent) - parseInt(a.discountPercent)
      );
      break;
    case "price-high-low":
    case "price_desc":
      sortedProducts.sort((a, b) => {
        const aPrice = parseInt(a.currentPrice.replace("₹", ""));
        const bPrice = parseInt(b.currentPrice.replace("₹", ""));
        return bPrice - aPrice;
      });
      break;
    case "price-low-high":
    case "price_asc":
      sortedProducts.sort((a, b) => {
        const aPrice = parseInt(a.currentPrice.replace("₹", ""));
        const bPrice = parseInt(b.currentPrice.replace("₹", ""));
        return aPrice - bPrice;
      });
      break;
    case "rating":
    case "customer_rating":
      sortedProducts.sort(
        (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
      );
      break;
    case "recommended":
    default:
      break;
  }

  return sortedProducts;
}

// Initialize the sort by dropdown functionality
const sortByList = document.getElementById("sort-by-list");
const sortByValue = document.getElementById("sort-by-value");

if (sortByList) {
  sortByList.addEventListener("change", (e) => {
    if (e.target.tagName === "INPUT" && e.target.type === "radio") {
      const selectedValue = e.target.value;
      let labelText = e.target.parentElement.textContent.trim();
      sortByValue.textContent = labelText;
      currentSortType = selectedValue;
      applyFilters();
    }
  });
  sortByList.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT" && e.target.type === "radio") {
      const selectedValue = e.target.value;
      let labelText = e.target.parentElement.textContent.trim();
      sortByValue.textContent = labelText;
      currentSortType = selectedValue;
      applyFilters();
    }
  });
}

// Price range slider
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const rangeTrack = document.getElementById("rangeTrack");
const output = document.getElementById("priceOutput");

function updateSlider() {
  let min = parseInt(minRange.value);
  let max = parseInt(maxRange.value);

  if (min > max - 100) {
    min = max - 100;
    minRange.value = min;
  }

  const rangeWidth = maxRange.max - minRange.min;
  const left = ((min - minRange.min) / rangeWidth) * 100;
  const right = ((max - minRange.min) / rangeWidth) * 100;

  rangeTrack.style.left = `${left}%`;
  rangeTrack.style.right = `${100 - right}%`;

  output.textContent = `₹${min} - ₹${max === 10100 ? "10,100+" : max}`;
  globalFilters.priceRange = { min, max };
  applyFilters();
}

if (minRange && maxRange) {
  minRange.addEventListener("input", updateSlider);
  maxRange.addEventListener("input", updateSlider);
  updateSlider();
}

// Discount filter
const discountRanges = [
  { label: "10% and above", value: 10 },
  { label: "20% and above", value: 20 },
  { label: "30% and above", value: 30 },
  { label: "40% and above", value: 40 },
];

function initializeDiscountRangeFilter() {
  const discountFilterContainer = document.getElementById(
    "discount-range-list"
  );
  if (!discountFilterContainer) return;
  discountFilterContainer.innerHTML = "";
  discountRanges.forEach((range) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label class="flex items-center cursor-pointer text-[14px]">
        <input type="radio" name="discount" value="${range.value}" class="mr-2 accent-[#ff3e6c]" />
        ${range.label}
      </label>
    `;
    discountFilterContainer.appendChild(li);

    li.querySelector("input").addEventListener("change", function () {
      globalFilters.discount = this.checked ? parseInt(this.value) : null;
      applyFilters();
    });
  });
}

// Category filter
const categories = [
  { name: "Face Wash", count: 8 },
  { name: "Moisturizer", count: 4 },
  { name: "Hair Serum", count: 1 },
  { name: "Hair Oil", count: 1 },
  { name: "Shampoo", count: 1 },
  { name: "Body Scrub", count: 1 },
  { name: "Face Scrub", count: 1 },
  { name: "Night Cream", count: 1 },
];

function initializeCategoryFilter() {
  const categoryList = document.getElementById("category-list");
  if (!categoryList) return;

  categoryList.innerHTML = "";
  categories.forEach((category) => {
    const listItem = document.createElement("li");
    listItem.classList.add("m-0");
    const label = document.createElement("label");
    label.className = "inline-flex items-center cursor-pointer gap-2 relative";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "custom-checkbox hidden peer";
    checkbox.value = category.name.toLowerCase().replace(/\s+/g, "-");

    const checkboxBox = document.createElement("div");
    checkboxBox.className =
      "checkbox-box w-4 h-4 rounded-[1px] border border-gray-300 peer-checked:bg-[#f63d68] peer-checked:border-[#f63d68] relative transition";

    label.appendChild(checkbox);
    label.appendChild(checkboxBox);

    const categoryName = document.createElement("span");
    categoryName.className = "text-sm text-gray-800 font-medium";
    categoryName.textContent = category.name;

    const categoryCount = document.createElement("span");
    categoryCount.className = "text-sm text-gray-400 ml-auto";
    categoryCount.textContent = `(${category.count.toLocaleString()})`;

    label.appendChild(categoryName);
    label.appendChild(categoryCount);
    listItem.appendChild(label);
    categoryList.appendChild(listItem);

    checkbox.addEventListener("change", function () {
      const normalizedCategory = this.value;
      if (this.checked) {
        if (!globalFilters.categories.includes(normalizedCategory)) {
          globalFilters.categories.push(normalizedCategory);
        }
      } else {
        globalFilters.categories = globalFilters.categories.filter(
          (c) => c !== normalizedCategory
        );
      }
      applyFilters();
    });
  });
}

// Brand filter
const brands = [
  { name: "Bella Vita Organic", count: 1 },
  { name: "Plum", count: 1 },
  { name: "Minimalist", count: 1 },
  { name: "Himalaya", count: 1 },
  { name: "L'Oreal Paris", count: 1 },
  { name: "Olay", count: 1 },
  { name: "Deconstruct", count: 1 },
  { name: "Pilgrim", count: 1 },
  { name: "The Man Company", count: 1 },
  { name: "Beardo", count: 1 },
  { name: "Dot & Key", count: 1 },
  { name: "Mamaearth", count: 2 },
  { name: "WOW Skin Science", count: 2 },
  { name: "Mcaffeine", count: 1 },
  { name: "Biotique", count: 1 },
  { name: "Neutrogena", count: 1 },
  { name: "The Body Shop", count: 1 },
  { name: "Forest Essentials", count: 1 },
];

function initializeBrandFilter() {
  const brandList = document.getElementById("brand-list");
  if (!brandList) return;

  brandList.innerHTML = "";
  brands.forEach((brand) => {
    const listItem = document.createElement("li");
    listItem.classList.add("m-0");
    const label = document.createElement("label");
    label.className = "inline-flex items-center cursor-pointer gap-2 relative";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "custom-checkbox hidden peer";
    checkbox.value = brand.name.toLowerCase().replace(/\s+/g, "-");

    const checkboxBox = document.createElement("div");
    checkboxBox.className =
      "checkbox-box w-4 h-4 rounded-[1px] border border-gray-300 peer-checked:bg-[#f63d68] peer-checked:border-[#f63d68] relative transition";

    label.appendChild(checkbox);
    label.appendChild(checkboxBox);

    const brandName = document.createElement("span");
    brandName.className = "text-sm text-gray-800 font-medium";
    brandName.textContent = brand.name;

    const brandCount = document.createElement("span");
    brandCount.className = "text-sm text-gray-400 ml-auto";
    brandCount.textContent = `(${brand.count.toLocaleString()})`;

    label.appendChild(brandName);
    label.appendChild(brandCount);
    listItem.appendChild(label);
    brandList.appendChild(listItem);

    checkbox.addEventListener("change", function () {
      const normalizedBrand = this.value;
      if (this.checked) {
        if (!globalFilters.brands.includes(normalizedBrand)) {
          globalFilters.brands.push(normalizedBrand);
        }
      } else {
        globalFilters.brands = globalFilters.brands.filter(
          (b) => b !== normalizedBrand
        );
      }
      applyFilters();
    });
  });
}

// Customer rating filter
const customerRatings = [
  { label: "4★ & above", value: 4 },
  { label: "3★ & above", value: 3 },
  { label: "2★ & above", value: 2 },
];

function initializeCustomerRatingFilter() {
  const ratingList = document.getElementById("customer-rating-list");
  if (!ratingList) return;

  ratingList.innerHTML = "";
  customerRatings.forEach((rating) => {
    const listItem = document.createElement("li");
    listItem.classList.add("m-0");
    const label = document.createElement("label");
    label.className = "inline-flex items-center cursor-pointer gap-2 relative";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "custom-checkbox hidden peer";
    checkbox.value = rating.value;

    const checkboxBox = document.createElement("div");
    checkboxBox.className =
      "checkbox-box w-4 h-4 rounded-[1px] border border-gray-300 peer-checked:bg-[#f63d68] peer-checked:border-[#f63d68] relative transition";

    label.appendChild(checkbox);
    label.appendChild(checkboxBox);

    const ratingName = document.createElement("span");
    ratingName.className = "text-sm text-gray-800 font-medium";
    ratingName.textContent = rating.label;

    label.appendChild(ratingName);
    listItem.appendChild(label);
    ratingList.appendChild(listItem);

    checkbox.addEventListener("change", function () {
      globalFilters.customerRating = this.checked ? parseInt(this.value) : null;
      applyFilters();
    });
  });
}

// Modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const sortBtn = document.getElementById("sort-btn");
  const filterBtn = document.getElementById("filter-btn");
  const sortOverlay = document.getElementById("sort-overlay");
  const sortOverlayBg = document.getElementById("sort-overlay-bg");
  const filterModal = document.getElementById("filter-modal");
  const filterCloseBtn = document.getElementById("filter-close-btn");
  const filterCategoryItems = document.querySelectorAll(
    ".filter-category-item"
  );
  const filterOptionGroups = document.querySelectorAll(".filter-option-group");
  const defaultFilterMessage = document.getElementById(
    "default-filter-message"
  );
  const clearFiltersBtn = document.getElementById("clear-filters-btn");
  const applyFiltersBtn = document.getElementById("apply-filters-btn");

  // Sort modal functionality
  if (sortBtn && sortOverlay && sortOverlayBg) {
    sortBtn.addEventListener("click", openSortModal);

    sortOverlayBg.addEventListener("click", closeSortModal);

    const sortButtons = document.querySelectorAll("[data-sort]");
    sortButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const sortType = this.getAttribute("data-sort");
        currentSortType = sortType;
        sortByValue.textContent = this.textContent.trim();
        applyFilters();
        setTimeout(closeSortModal, 300);
      });
    });
  }

  // Filter modal functionality
  if (filterBtn && filterModal) {
    filterBtn.addEventListener("click", openFilterModal);

    if (filterCloseBtn) {
      filterCloseBtn.addEventListener("click", closeFilterModal);
    }

    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener("click", function () {
        globalFilters = {
          colors: [],
          categories: [],
          brands: [],
          priceRange: { min: 0, max: 10100 },
          discount: null,
          sizes: [],
          customerRating: null,
          bundles: [],
          countryOfOrigin: [],
          moreFilters: [],
        };

        const allCheckboxes = filterModal.querySelectorAll(
          'input[type="checkbox"]'
        );
        allCheckboxes.forEach((checkbox) => (checkbox.checked = false));

        const discountRadios = document.querySelectorAll(
          'input[name="discount"]'
        );
        discountRadios.forEach((radio) => (radio.checked = false));

        if (minRange && maxRange) {
          minRange.value = minRange.min;
          maxRange.value = maxRange.max;
          updateSlider();
        }

        resetFilterModal();
        applyFilters();
      });
    }

    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener("click", function () {
        applyFilters();
        closeFilterModal();
      });
    }

    filterCategoryItems.forEach((item) => {
      item.addEventListener("click", function () {
        const category = this.getAttribute("data-category");
        filterCategoryItems.forEach((categoryItem) => {
          categoryItem.classList.remove("active");
        });
        this.classList.add("active");
        filterOptionGroups.forEach((group) => {
          group.classList.add("hidden");
        });
        if (defaultFilterMessage) {
          defaultFilterMessage.classList.add("hidden");
        }
        const targetGroup = document.querySelector(
          `[data-options="${category}"]`
        );
        if (targetGroup) {
          targetGroup.classList.remove("hidden");
        }
      });
    });

    filterModal.addEventListener("click", function (e) {
      if (e.target === filterModal) {
        closeFilterModal();
      }
    });

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
    resetFilterModal();
  }

  function resetFilterModal() {
    filterCategoryItems.forEach((item) => {
      item.classList.remove("active");
    });
    filterOptionGroups.forEach((group) => {
      group.classList.add("hidden");
    });
    if (defaultFilterMessage) {
      defaultFilterMessage.classList.remove("hidden");
    }
  }

  // Initialize all filters
  initializeFilters();
  initializeColorFilters();
  initializeDiscountRangeFilter();
  initializeCategoryFilter();
  initializeBrandFilter();
  initializeCustomerRatingFilter();

  // Initial render
  render();
});
