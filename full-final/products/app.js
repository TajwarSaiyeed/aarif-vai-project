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
});

const productsGridDesktop = document.getElementById("products-grid-desktop");
const productsSliderMobile = document.getElementById("products-slider-mobile");
const productCountDesktop = document.getElementById("product-count-desktop");
const selectedFiltersContainer = document.getElementById("selected-filters");
const clearFiltersBtnDesktop = document.getElementById("clear-btn");

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
    sizes: ["100ml", "200ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
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
    sizes: ["50ml", "100ml"],
    bundleType: "Combo Pack",
    countryOfOrigin: "India",
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
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
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
    sizes: ["50ml", "100ml", "200ml"],
    bundleType: "Value Pack",
    countryOfOrigin: "India",
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
    sizes: ["50ml", "100ml"],
    bundleType: "Single",
    countryOfOrigin: "France",
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
    sizes: ["50ml"],
    bundleType: "Gift Set",
    countryOfOrigin: "USA",
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
    sizes: ["100ml", "200ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
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
    sizes: ["50ml"],
    bundleType: "Starter Kit",
    countryOfOrigin: "India",
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
    sizes: ["100ml"],
    bundleType: "Combo Pack",
    countryOfOrigin: "India",
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
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
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
    sizes: ["50ml", "100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
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
    sizes: ["200ml"],
    bundleType: "Value Pack",
    countryOfOrigin: "India",
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
    sizes: ["200ml", "500ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
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
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
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
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
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
    sizes: ["50ml"],
    bundleType: "Single",
    countryOfOrigin: "USA",
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
    sizes: ["100ml", "200ml"],
    bundleType: "Single",
    countryOfOrigin: "UK",
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
    sizes: ["100ml"],
    bundleType: "Gift Set",
    countryOfOrigin: "India",
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
    sizes: ["100ml", "200ml"],
    bundleType: "Combo Pack",
    countryOfOrigin: "India",
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
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 21,
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
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
  {
    id: 22,
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
    sizes: ["50ml"],
    bundleType: "Single",
    countryOfOrigin: "USA",
  },
  {
    id: 23,
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
    sizes: ["100ml", "200ml"],
    bundleType: "Single",
    countryOfOrigin: "UK",
  },
  {
    id: 24,
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
    sizes: ["100ml"],
    bundleType: "Gift Set",
    countryOfOrigin: "India",
  },
  {
    id: 25,
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
    sizes: ["100ml", "200ml"],
    bundleType: "Combo Pack",
    countryOfOrigin: "India",
  },
  {
    id: 26,
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
    sizes: ["100ml"],
    bundleType: "Single",
    countryOfOrigin: "India",
  },
];

// <div
//       class="bg-white w-full h-[330px] group hover:shadow-xl overflow-hidden"
//     >
//       <div class="w-full h-[250px] relative">
//         <img
//           class="w-full h-full object-fit"
//           src="../img.jpeg"
//           alt=""
//         />
function createProductCardHTML(item, wishlisted = false) {
  return `
    <div
      class="bg-white w-full max-h-[430px] group hover:shadow-xl overflow-hidden pb-4 md:pb-3"
    >
      <div class="w-full h-full max-h-[330px] relative">
        <div class="w-full h-full xl:max-h-[195px]  2xl:max-h-[260px] bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-bold z-[999] overflow-hidden p-h-swiper transition-all duration-300 hidden group-hover:xl:flex swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg"
                alt="Slide 1"
                class="w-full h-full object-fit"
              />
            </div>
            <div class="swiper-slide">
              <img src="../img.jpeg" alt="Slide 2" 
                class="w-full h-full object-fit"
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg"
                alt="Slide 3"
                class="w-full h-full object-fit"
              />
            </div>

            <div class="swiper-slide">
              <img src="../img.jpeg" alt="Slide 2" 
                class="w-full h-full object-fit"
              />
            </div><div class="swiper-slide">
              <img
                src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg"
                alt="Slide 3"
                class="w-full h-full object-fit"
              />
            </div>

            <div class="swiper-slide">
              <img src="../img.jpeg" alt="Slide 2" 
                class="w-full h-full object-fit"
              />
            </div><div class="swiper-slide">
              <img
                src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg"
                alt="Slide 3"
                class="w-full h-full object-fit"
              />
            </div>

            <div class="swiper-slide">
              <img src="../img.jpeg" alt="Slide 2" 
                class="w-full h-full object-fit"
              />
            </div>
            </div>
            <div class="swiper-pagination absolute z-[9999] !bottom-5 w-full !p-0 !m-0 bg-white left-0 right-0"></div>
          </div>

        <img
          class="w-full h-full object-fit group-hover:xl:hidden transition-all duration-300"
          src="../img.jpeg"
          alt=""
        />
        <div class="bg-white absolute  -bottom-7 right-0 w-full p-2 hidden ${
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

        <div class="view-similar-btn w-[30px] h-[30px] hidden group-hover:xl:flex hover:w-[140px] rounded-full bg-white absolute bottom-12 right-5 transition-all duration-300 justify-center items-center gap-2 overflow-hidden outline-none border-none cursor-pointer group/view-similar  z-[20]" data-product-id="${
          item.id
        }" title="View Similar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff3f6c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
          <p class="hidden group-hover/view-similar:block uppercase font-bold text-[#ff3f6c] transition-opacity duration-300 delay-200 whitespace-nowrap text-[12px]">
            View Similar
          </p>
        </div>
      </div>

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
          <span class="font-bold flex-shrink-0">Rs. ${item.currentPrice}</span>
          <del class="text-gray-500 flex-shrink-0">Rs. ${
            item.originalPrice
          }</del>
          <span class="text-xs text-[#ff905a] flex-shrink-0">(${
            item.discountPercent
          }% OFF)</span>
        </p>
        <!-- Wishlist Icon -->
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

// Global filter state
let globalFilters = {
  colors: [],
  categories: [],
  brands: [],
  priceRange: { min: 100, max: 10100 },
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

  updateSelectedFilters();
}

function renderProductsDesktop(productsToRender) {
  if (productsGridDesktop) {
    productsGridDesktop.innerHTML = "";
    productsToRender.forEach((product, index) => {
      const productCard = document.createElement("div");
      if (index % 2 === 0) {
        productCard.innerHTML = createProductCardHTML(product, true);
      } else {
        productCard.innerHTML = createProductCardHTML(product);
      }
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
    productsToRender.forEach((product, index) => {
      const productCard = document.createElement("div");
      if (index % 2 === 0) {
        productCard.innerHTML = createProductCardHTML(product, true);
      } else {
        productCard.innerHTML = createProductCardHTML(product);
      }
      productCard.classList.add(
        "border-r-[0.1px]",
        "border-gray-200",
        "border-b-[0.1px]"
      );
      productsSliderMobile.appendChild(productCard);
    });
  }
}

// Function to check if any filters are active
function hasActiveFilters() {
  return (
    globalFilters.colors.length > 0 ||
    globalFilters.categories.length > 0 ||
    globalFilters.brands.length > 0 ||
    globalFilters.sizes.length > 0 ||
    globalFilters.bundles.length > 0 ||
    globalFilters.countryOfOrigin.length > 0 ||
    globalFilters.moreFilters.length > 0 ||
    globalFilters.discount !== null ||
    globalFilters.customerRating !== null ||
    globalFilters.priceRange.min !== 100 ||
    globalFilters.priceRange.max !== 10100
  );
}

// Function to update selected filters display
function updateSelectedFilters() {
  const selectedFiltersContainerWrapper = document.getElementById(
    "selected-filters-container"
  );
  const selectedFiltersContainer = document.getElementById("selected-filters");
  const filterBarHeader = document.getElementById("filter-bar-header");

  if (
    !selectedFiltersContainerWrapper ||
    !selectedFiltersContainer ||
    !filterBarHeader
  )
    return;

  // Use the existing helper function to determine if any filters are active
  const areFiltersActive = hasActiveFilters();

  if (areFiltersActive) {
    filterBarHeader.classList.add("shadow-[1px_5px_4px_-2px_rgba(0,0,0,0.06)]");
    filterBarHeader.classList.remove("border-b", "border-gray-200");
  } else {
    filterBarHeader.classList.remove(
      "shadow-[1px_5px_4px_-2px_rgba(0,0,0,0.06)]"
    );
    filterBarHeader.classList.add("border-b", "border-gray-200");
  }

  // Toggle visibility of the entire wrapper based on filter state
  if (areFiltersActive) {
    selectedFiltersContainerWrapper.classList.remove("hidden");
  } else {
    selectedFiltersContainerWrapper.classList.add("hidden");
  }

  selectedFiltersContainer.innerHTML = "";

  // Helper function to create a filter tag
  function createFilterTag(filterType, value, displayText) {
    const tag = document.createElement("button");
    tag.className =
      "px-2 py-1 rounded-full border border-gray-400 hover:border-gray-800 flex items-center rounded-full text-xs gap-1";

    tag.innerHTML = `
       <span>${displayText}</span>
       <span
         class="myntraweb-sprite filter-summary-removeIcon sprites-remove scale-60"
         data-filter-type="${filterType}" data-filter-value="${value}"
       ></span>
    `;
    tag.addEventListener("click", () => removeFilter(filterType, value));

    selectedFiltersContainer.appendChild(tag);
  }

  // if (hasActiveFilters()) {
  //   selectedFiltersContainer.classList.add("pt-4", "mb-2");
  // } else {
  //   selectedFiltersContainer.classList.remove("pt-4", "mb-2");
  // }

  // Add color filters
  globalFilters.colors.forEach((color) => {
    const displayText =
      colors.find((c) => c.name.toLowerCase().replace(/\s+/g, "-") === color)
        ?.name || color;
    createFilterTag("colors", color, displayText);
  });

  // Add category filters
  globalFilters.categories.forEach((category) => {
    const displayText =
      categories.find(
        (c) => c.name.toLowerCase().replace(/\s+/g, "-") === category
      )?.name || category;
    createFilterTag("categories", category, displayText);
  });

  // Add brand filters
  globalFilters.brands.forEach((brand) => {
    const displayText =
      brands.find((b) => b.name.toLowerCase().replace(/\s+/g, "-") === brand)
        ?.name || brand;
    createFilterTag("brands", brand, displayText);
  });

  // Add size filters
  globalFilters.sizes.forEach((size) => {
    const displayText =
      filterData.Size.find(
        (s) => s.toLowerCase().replace(/\s+/g, "-") === size
      ) || size;
    createFilterTag("sizes", size, displayText);
  });

  // Add bundle filters
  globalFilters.bundles.forEach((bundle) => {
    const displayText =
      filterData.Bundles.find(
        (b) => b.toLowerCase().replace(/\s+/g, "-") === bundle
      ) || bundle;
    createFilterTag("bundles", bundle, displayText);
  });

  // Add country of origin filters
  globalFilters.countryOfOrigin.forEach((country) => {
    if (country !== "all-countries") {
      const displayText =
        filterData["Country of Origin"].find(
          (c) => c.toLowerCase().replace(/\s+/g, "-") === country
        ) || country;
      createFilterTag("countryOfOrigin", country, displayText);
    }
  });

  // Add more filters
  globalFilters.moreFilters.forEach((filter) => {
    const displayText =
      filterData["More Filters"].find(
        (f) => f.toLowerCase().replace(/\s+/g, "-") === filter
      ) || filter;
    createFilterTag("moreFilters", filter, displayText);
  });

  // Add discount filter
  if (globalFilters.discount !== null) {
    const displayText =
      discountRanges.find((d) => d.value === globalFilters.discount)?.label ||
      `${globalFilters.discount}% and above`;
    createFilterTag("discount", globalFilters.discount, displayText);
  }

  // Add customer rating filter
  if (globalFilters.customerRating !== null) {
    const displayText =
      customerRatings.find((r) => r.value === globalFilters.customerRating)
        ?.label || `${globalFilters.customerRating}★ & above`;
    createFilterTag(
      "customerRating",
      globalFilters.customerRating,
      displayText
    );
  }

  // Add price range filter
  if (
    globalFilters.priceRange.min !== 100 ||
    globalFilters.priceRange.max !== 10100
  ) {
    const displayText = `₹${globalFilters.priceRange.min} - ₹${
      globalFilters.priceRange.max === 10100
        ? "10,100+"
        : globalFilters.priceRange.max
    }`;
    createFilterTag(
      "priceRange",
      `${globalFilters.priceRange.min}-${globalFilters.priceRange.max}`,
      displayText
    );
  }

  // Show/hide clear filters button
  if (clearFiltersBtnDesktop) {
    clearFiltersBtnDesktop.classList.toggle("hidden", !hasActiveFilters());
  }
}

// Function to remove a specific filter
function removeFilter(filterType, filterValue) {
  if (filterType === "colors") {
    globalFilters.colors = globalFilters.colors.filter(
      (c) => c !== filterValue
    );
    const checkbox = document.querySelector(
      `#color-filter-list input[value="${filterValue}"]`
    );
    if (checkbox) checkbox.checked = false;
  } else if (filterType === "categories") {
    globalFilters.categories = globalFilters.categories.filter(
      (c) => c !== filterValue
    );
    const checkbox = document.querySelector(
      `#category-list input[value="${filterValue}"]`
    );
    if (checkbox) checkbox.checked = false;
  } else if (filterType === "brands") {
    globalFilters.brands = globalFilters.brands.filter(
      (b) => b !== filterValue
    );
    const checkbox = document.querySelector(
      `#brand-list input[value="${filterValue}"]`
    );
    if (checkbox) checkbox.checked = false;
  } else if (filterType === "sizes") {
    globalFilters.sizes = globalFilters.sizes.filter((s) => s !== filterValue);
    const checkbox = document.querySelector(
      `#sub-categories-list input[value="${filterValue}"]`
    );
    if (checkbox) checkbox.checked = false;
  } else if (filterType === "bundles") {
    globalFilters.bundles = globalFilters.bundles.filter(
      (b) => b !== filterValue
    );
    const checkbox = document.querySelector(
      `#sub-categories-list input[value="${filterValue}"]`
    );
    if (checkbox) checkbox.checked = false;
  } else if (filterType === "countryOfOrigin") {
    globalFilters.countryOfOrigin = globalFilters.countryOfOrigin.filter(
      (c) => c !== filterValue
    );
    const checkbox = document.querySelector(
      `#sub-categories-list input[value="${filterValue}"]`
    );
    if (checkbox) checkbox.checked = false;
  } else if (filterType === "moreFilters") {
    globalFilters.moreFilters = globalFilters.moreFilters.filter(
      (f) => f !== filterValue
    );
    const checkbox = document.querySelector(
      `#sub-categories-list input[value="${filterValue}"]`
    );
    if (checkbox) checkbox.checked = false;
  } else if (filterType === "discount") {
    globalFilters.discount = null;
    const radio = document.querySelector(
      `#discount-range-list input[value="${filterValue}"]`
    );
    if (radio) radio.checked = false;
  } else if (filterType === "customerRating") {
    globalFilters.customerRating = null;
    const checkbox = document.querySelector(
      `#customer-rating-list input[value="${filterValue}"]`
    );
    if (checkbox) checkbox.checked = false;
  } else if (filterType === "priceRange") {
    globalFilters.priceRange = { min: 100, max: 10100 };
    if (minRange && maxRange) {
      minRange.value = minRange.min;
      maxRange.value = maxRange.max;
      updateSlider();
    }
  }

  applyFilters();
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

  // Apply size filter
  if (globalFilters.sizes.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      globalFilters.sizes.some((size) =>
        product.sizes
          .map((s) => s.toLowerCase().replace(/\s+/g, "-"))
          .includes(size)
      )
    );
  }

  // Apply bundle filter
  if (globalFilters.bundles.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      globalFilters.bundles.includes(
        product.bundleType.toLowerCase().replace(/\s+/g, "-")
      )
    );
  }

  // Apply country of origin filter
  if (
    globalFilters.countryOfOrigin.length > 0 &&
    !globalFilters.countryOfOrigin.includes("all-countries")
  ) {
    filteredProducts = filteredProducts.filter((product) =>
      globalFilters.countryOfOrigin.includes(
        product.countryOfOrigin.toLowerCase().replace(/\s+/g, "-")
      )
    );
  }

  // Apply more filters (still a placeholder as no product data supports these)
  if (globalFilters.moreFilters.length > 0) {
    // Placeholder: Add more filter data to products array to enable this
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
  const filterBarHeader = document.getElementById("filter-bar-header");

  if (activeFilter === filterName) {
    activeFilter = null;
    subCategoriesContainer.classList.add("hidden");
    arrowIcon.setAttribute("points", "6,9 12,15 18,9");
    buttonElement.classList.remove("bg-gray-100", "text-gray-800");
    buttonElement.classList.add("text-gray-600");
    if (filterBarHeader) {
      filterBarHeader.classList.remove(
        "shadow-[1px_5px_4px_-2px_rgba(0,0,0,0.06)]"
      );
      filterBarHeader.classList.add("border-b", "border-gray-200");
    }
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

  if (filterBarHeader) {
    filterBarHeader.classList.add("shadow-[1px_5px_4px_-2px_rgba(0,0,0,0.06)]");
    filterBarHeader.classList.remove("border-b", "border-gray-200");
  }

  const subCategories = filterData[filterName];
  subCategories.forEach((subCategory) => {
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
    subCategoriesList.appendChild(label);

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
  const searchContainer = document.querySelector(".color-search-container");
  const searchInput = document.querySelector(".color-search-input");
  const searchIcon = document.querySelector(".color-lucide-search-icon");
  const closeIcon = document.querySelector(".color-lucide-x-icon");
  const colorsLabel = searchContainer.parentElement.querySelector("h3");

  if (
    !colorFilterContainer ||
    !searchContainer ||
    !searchInput ||
    !searchIcon ||
    !closeIcon ||
    !colorsLabel
  )
    return;

  colorFilterContainer.innerHTML = "";

  // Search toggle functionality
  searchIcon.addEventListener("click", function () {
    colorsLabel.classList.add("hidden");
    searchContainer.classList.remove("w-[25px]", "h-[25px]", "p-1");
    searchContainer.classList.add("w-full", "h-auto", "p-1", "flex-row");
    searchInput.classList.remove("hidden");
    searchIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    searchInput.focus();
  });

  closeIcon.addEventListener("click", function () {
    colorsLabel.classList.remove("hidden");
    searchContainer.classList.remove("w-full", "h-auto", "p-1", "flex-row");
    searchContainer.classList.add("w-[25px]", "h-[25px]", "p-1");
    searchInput.classList.add("hidden");
    closeIcon.classList.add("hidden");
    searchIcon.classList.remove("hidden");
    searchInput.value = ""; // Clear input on close
    // Reapply filter to show all colors
    const colorItems = colorFilterContainer.querySelectorAll("li");
    colorItems.forEach((item) => {
      item.style.display = "";
    });
    // Show the show more button again when search is closed
    showMoreBtn.style.display = "";
  });

  searchInput.addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const colorItems = colorFilterContainer.querySelectorAll("li");
    colorItems.forEach((item) => {
      const colorName = item
        .querySelector(".color-name")
        .textContent.toLowerCase();
      if (colorName.includes(searchTerm)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });

    // Hide show more button when searching
    if (searchTerm.length > 0) {
      showMoreBtn.style.display = "none";
    } else {
      showMoreBtn.style.display = "";
    }
  });

  const maxInitialColors = 7;
  const showMoreBtn = document.createElement("button");
  showMoreBtn.className = "text-[15px] text-[#ff3e6c] mt-2 cursor-pointer ml-7";
  showMoreBtn.textContent = `+${colors.length - maxInitialColors} more`;

  let showAll = false;

  showMoreBtn.addEventListener("click", function () {
    showAll = !showAll;
    showMoreBtn.textContent = showAll
      ? "Hide extra colors"
      : `+${colors.length - maxInitialColors} more`;
    const colorItems = colorFilterContainer.querySelectorAll("li");
    colorItems.forEach((item, index) => {
      if (index >= maxInitialColors) {
        item.style.display = showAll ? "" : "none";
      }
    });
  });

  // Color list generation
  colors.forEach((color, index) => {
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
    colorName.className = "text-sm text-gray-800 font-medium color-name"; // Added class 'color-name'
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
    if (index >= maxInitialColors) {
      listItem.style.display = "none";
    }
  });

  colorFilterContainer.appendChild(showMoreBtn);
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

function initializeBrandFilter() {
  const brandList = document.getElementById("brand-list");
  const searchContainer = document.querySelector(".brand-search-container");
  const searchInput = document.querySelector(".brand-search-input");
  const searchIcon = document.querySelector(".brand-lucide-search-icon");
  const closeIcon = document.querySelector(".brand-lucide-x-icon");
  const brandsLabel = searchContainer.parentElement.querySelector("h3");
  const showAllButton = document.getElementById("brand-show-all");
  const popup = document.getElementById("brand-popup");
  const popupSearch = document.getElementById("brand-popup-search");
  const brandLetters = document.getElementById("brand-letters");
  const brandCheckboxesContainer = document.getElementById("brand-checkboxes");
  const closeButton = document.getElementById("brand-close-btn");

  if (
    !brandList ||
    !searchContainer ||
    !searchInput ||
    !searchIcon ||
    !closeIcon ||
    !brandsLabel ||
    !showAllButton ||
    !popup ||
    !popupSearch ||
    !brandLetters ||
    !brandCheckboxesContainer ||
    !closeButton
  )
    return;

  brandList.innerHTML = "";
  brandCheckboxesContainer.innerHTML = "";

  const letters = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 100; i++) {
    const letter = letters[Math.floor(i / 4) % 26];
    brands.push({
      name: `${letter}Brand${i + 1}`,
      count: Math.floor(Math.random() * 100) + 1,
    });
  }

  // Initial display of a few brands
  const maxInitialBrands = 5;
  brands.slice(0, maxInitialBrands).forEach((brand) => {
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
    brandName.className = "text-sm text-gray-800 font-medium brand-name";
    brandName.textContent = brand.name;

    const brandCount = document.createElement("span");
    brandCount.className = "text-sm text-gray-400";
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
      const popupCheckbox = popup.querySelector(
        `input[value="${normalizedBrand}"]`
      );
      if (popupCheckbox) popupCheckbox.checked = this.checked;
    });
  });

  // Search toggle functionality
  searchIcon.addEventListener("click", function () {
    brandsLabel.classList.add("hidden");
    searchContainer.classList.remove("w-[25px]", "h-[25px]", "p-1");
    searchContainer.classList.add("w-full", "h-auto", "p-1", "flex-row");
    searchInput.classList.remove("hidden");
    searchIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    searchInput.focus();
  });

  closeIcon.addEventListener("click", function () {
    brandsLabel.classList.remove("hidden");
    searchContainer.classList.remove("w-full", "h-auto", "p-1", "flex-row");
    searchContainer.classList.add("w-[25px]", "h-[25px]", "p-1");
    searchInput.classList.add("hidden");
    closeIcon.classList.add("hidden");
    searchIcon.classList.remove("hidden");
    searchInput.value = "";

    // Reset brand list to show initial brands
    brandList.innerHTML = "";
    const maxInitialBrands = 5;
    brands.slice(0, maxInitialBrands).forEach((brand) => {
      const listItem = document.createElement("li");
      listItem.classList.add("m-0");
      const label = document.createElement("label");
      label.className =
        "inline-flex items-center cursor-pointer gap-2 relative";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "custom-checkbox hidden peer";
      checkbox.value = brand.name.toLowerCase().replace(/\s+/g, "-");

      // Check if this brand is already selected
      checkbox.checked = globalFilters.brands.includes(checkbox.value);

      const checkboxBox = document.createElement("div");
      checkboxBox.className =
        "checkbox-box w-4 h-4 rounded-[1px] border border-gray-300 peer-checked:bg-[#f63d68] peer-checked:border-[#f63d68] relative transition";

      label.appendChild(checkbox);
      label.appendChild(checkboxBox);

      const brandName = document.createElement("span");
      brandName.className = "text-sm text-gray-800 font-medium brand-name";
      brandName.textContent = brand.name;

      const brandCount = document.createElement("span");
      brandCount.className = "text-sm text-gray-400";
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
        const popupCheckbox = popup.querySelector(
          `input[value="${normalizedBrand}"]`
        );
        if (popupCheckbox) popupCheckbox.checked = this.checked;
      });
    });
  });

  searchInput.addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();

    // Clear the brand list first
    brandList.innerHTML = "";

    // Filter brands based on search term
    const filteredBrands = brands.filter((brand) =>
      brand.name.toLowerCase().includes(searchTerm)
    );

    // Display filtered brands (limit to reasonable number for performance)
    const maxDisplayBrands = searchTerm ? 20 : 5; // Show more when searching
    const brandsToShow = searchTerm
      ? filteredBrands
      : brands.slice(0, maxDisplayBrands);

    brandsToShow.slice(0, maxDisplayBrands).forEach((brand) => {
      const listItem = document.createElement("li");
      listItem.classList.add("m-0");
      const label = document.createElement("label");
      label.className =
        "inline-flex items-center cursor-pointer gap-2 relative";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "custom-checkbox hidden peer";
      checkbox.value = brand.name.toLowerCase().replace(/\s+/g, "-");

      // Check if this brand is already selected
      checkbox.checked = globalFilters.brands.includes(checkbox.value);

      const checkboxBox = document.createElement("div");
      checkboxBox.className =
        "checkbox-box w-4 h-4 rounded-[1px] border border-gray-300 peer-checked:bg-[#f63d68] peer-checked:border-[#f63d68] relative transition";

      label.appendChild(checkbox);
      label.appendChild(checkboxBox);

      const brandName = document.createElement("span");
      brandName.className = "text-sm text-gray-800 font-medium brand-name";
      brandName.textContent = brand.name;

      const brandCount = document.createElement("span");
      brandCount.className = "text-sm text-gray-400";
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
        const popupCheckbox = popup.querySelector(
          `input[value="${normalizedBrand}"]`
        );
        if (popupCheckbox) popupCheckbox.checked = this.checked;
      });
    });
  });

  // Popup functionality
  showAllButton.addEventListener("click", function () {
    popup.classList.toggle("hidden");
    if (!popup.classList.contains("hidden")) {
      // Populate letter navigation
      brandLetters.innerHTML = "";
      const letters = [..."#ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.classList.add(
          "cursor-pointer",
          "text-gray-400",
          "hover:text-gray-600"
        );
        span.textContent = letter;
        brandLetters.appendChild(span);
      });

      // Populate all checkboxes
      brandCheckboxesContainer.innerHTML = "";
      brands.forEach((brand) => {
        const label = document.createElement("label");
        label.setAttribute(
          "for",
          `brand-${brand.name.toLowerCase().replace(/\s+/g, "-")}`
        );
        label.classList.add(
          "inline-flex",
          "items-center",
          "cursor-pointer",
          "gap-2",
          "relative",
          "max-w-[200px]"
        );

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "custom-checkbox hidden peer";
        checkbox.id = `brand-${brand.name.toLowerCase().replace(/\s+/g, "-")}`;
        checkbox.value = brand.name.toLowerCase().replace(/\s+/g, "-");
        if (globalFilters.brands.includes(checkbox.value))
          checkbox.checked = true;

        const checkboxBox = document.createElement("div");
        checkboxBox.className =
          "checkbox-box w-4 h-4 rounded-[1px] border border-gray-300 peer-checked:bg-[#f63d68] peer-checked:border-[#f63d68] relative transition";

        const brandNameSpan = document.createElement("span");
        brandNameSpan.className = "text-sm font-medium brand-name-span";
        brandNameSpan.textContent = brand.name;

        const brandCount = document.createElement("span");
        brandCount.className = "text-sm text-gray-400 ml-auto";
        brandCount.textContent = `(${brand.count.toLocaleString()})`;

        label.appendChild(checkbox);
        label.appendChild(checkboxBox);
        label.appendChild(brandNameSpan);
        label.appendChild(brandCount);
        brandCheckboxesContainer.appendChild(label);

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
          const mainCheckbox = brandList.querySelector(
            `input[value="${normalizedBrand}"]`
          );
          if (mainCheckbox) mainCheckbox.checked = this.checked;
        });
      });

      // Hover effect for letter navigation
      brandLetters.querySelectorAll("span").forEach((letter) => {
        letter.addEventListener("mouseover", function () {
          const selectedLetter = this.textContent.toLowerCase();
          const allBrandSpans =
            brandCheckboxesContainer.querySelectorAll(".brand-name-span");
          allBrandSpans.forEach((span) => {
            const brandName = span.textContent.toLowerCase();
            if (brandName.startsWith(selectedLetter)) {
              span.classList.remove("text-gray-200");
              span.classList.add("text-gray-800");
            } else {
              span.classList.remove("text-gray-800");
              span.classList.add("text-gray-200");
            }
          });
        });
        letter.addEventListener("mouseout", function () {
          const allBrandSpans =
            brandCheckboxesContainer.querySelectorAll(".brand-name-span");
          allBrandSpans.forEach((span) => {
            span.classList.remove("text-gray-200", "text-gray-800");
            span.classList.add("text-gray-800");
          });
        });
      });
    }
  });

  // Close button functionality
  closeButton.addEventListener("click", function () {
    popup.classList.add("hidden");
    brandCheckboxesContainer.innerHTML = "";
    popupSearch.value = "";
    const allCheckboxes = brandCheckboxesContainer.querySelectorAll("label");
    allCheckboxes.forEach((label) => {
      label.style.display = "";
    });
  });

  // Popup search functionality
  popupSearch.addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const brandItems = brandCheckboxesContainer.querySelectorAll("label");
    brandItems.forEach((item) => {
      const brandName = item
        .querySelector(".brand-name-span")
        .textContent.toLowerCase();
      if (brandName.includes(searchTerm)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
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

    if (clearFiltersBtnDesktop) {
      clearFiltersBtnDesktop.addEventListener("click", function () {
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

        const allCheckboxes = document.querySelectorAll(
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
        if (!filterModal.classList.contains("translate-y-full")) {
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

// --- Product Sidebar Logic ---
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("product-view-similar-sidebar");
  const overlay = document.getElementById("product-sidebar-overlay");
  const sidebarContent = document.getElementById("product-similar-content");
  const closeBtn = document.getElementById("close-product-sidebar");

  function openProductSidebar(productData) {
    sidebar.classList.remove("translate-x-full");
    sidebar.style.display = "block";
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Clear previous content
    sidebarContent.innerHTML = "";

    if (productData) {
      // Get similar products (same category or brand)
      const currentProduct =
        products.find((p) => p.id == productData) || products[0];
      const similarProducts = products.filter(
        (p) =>
          p.id !== currentProduct.id &&
          (p.category === currentProduct.category ||
            p.brand === currentProduct.brand)
      );

      if (similarProducts.length > 0) {
        similarProducts.forEach((item) => {
          const productCard = document.createElement("div");
          productCard.innerHTML = `
            <div
              class="bg-white max-w-[210px] w-full max-h-[330px] group hover:shadow-md overflow-hidden cursor-pointer"
              onclick="window.location.href='../product/index.html?id=${item.id}'"
            >
              <div class="w-full h-[200px] relative">
                <img
                  class="w-full h-full object-cover object-center"
                  src="${item.image}"
                  alt="${item.title}"
                />
              </div>

              <div class="p-2">
                <h1 class="text-base font-bold text-black">${item.brand}</h1>
                <h2 class="text-sm block text-gray-500">
                  ${item.description}
                </h2>
                <p class="space-x-2">
                  <span class="font-bold">${item.currentPrice}</span>
                  <del class="text-sm text-gray-500">${item.originalPrice}</del>
                  <span class="text-xs text-[#ff905a]">(${item.discountPercent}% OFF)</span>
                </p>
              </div>
            </div>
          `;
          sidebarContent.appendChild(productCard);
        });
      } else {
        sidebarContent.innerHTML = `
          <div class="text-gray-500 text-center mt-10 col-span-2">
            No similar products found.
          </div>
        `;
      }
    } else {
      sidebarContent.innerHTML = `
        <div class="text-gray-500 text-center mt-10 col-span-2">
          No similar products loaded.
        </div>
      `;
    }
  }

  function closeSidebar() {
    sidebar.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
    setTimeout(() => {
      sidebar.style.display = "none";
    }, 300);
  }

  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  // Listen for View Similar button clicks
  document.body.addEventListener("click", function (e) {
    const btn = e.target.closest(".view-similar-btn");
    if (btn) {
      const productId =
        btn.getAttribute("data-product-id") ||
        btn.getAttribute("data-similar-content");
      openProductSidebar(productId);
    }
  });
});

document.addEventListener("click", function (event) {
  const popup = document.getElementById("brand-popup");
  const showAllButton = document.getElementById("brand-show-all");
  if (
    popup &&
    !popup.classList.contains("hidden") &&
    event.target !== popup &&
    !popup.contains(event.target) &&
    event.target !== showAllButton
  ) {
    popup.classList.add("hidden");
    const brandCheckboxesContainer =
      document.getElementById("brand-checkboxes");
    const popupSearch = document.getElementById("brand-popup-search");
    if (brandCheckboxesContainer && popupSearch) {
      brandCheckboxesContainer.innerHTML = "";
      popupSearch.value = "";
      const allCheckboxes = brandCheckboxesContainer.querySelectorAll("label");
      allCheckboxes.forEach((label) => {
        label.style.display = "";
      });
    }
  }
});
