// --- Typewriter Effect for Search Placeholder ---
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
// Slider functionality
let currentSlide = 0;
const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots-container");
let totalSlides = 0;

function addSlide(imageUrl) {
  const slide = document.createElement("div");
  slide.className = "slide flex-shrink-0";
  slide.style.backgroundImage = `url(${imageUrl})`;
  slide.style.backgroundSize = "cover";
  slide.style.backgroundPosition = "center";
  slider.appendChild(slide);
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
    dot.className =
      "w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity";
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  const dots = dotsContainer.querySelectorAll("button");
  dots.forEach((dot, index) => {
    dot.classList.toggle("opacity-100", index === currentSlide);
    dot.classList.toggle("opacity-50", index !== currentSlide);
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

const categories = [
  {
    title: "Category 1",
    subtitle: "Subtitle for Category 1",
    image: "https://www.pngall.com/wp-content/uploads/2016/03/Bottle-PNG-2.png",
  },
  {
    title: "Category 2",
    subtitle: "Subtitle for Category 2",
    image: "https://www.pngall.com/wp-content/uploads/2016/03/Bottle-PNG-2.png",
  },
  {
    title: "Category 3",
    subtitle: "Subtitle for Category 3",
    image: "https://www.pngall.com/wp-content/uploads/2016/03/Bottle-PNG-2.png",
  },
  {
    title: "Category 6",
    subtitle: "Subtitle for Category 6",
    image: "https://www.pngall.com/wp-content/uploads/2016/03/Bottle-PNG-2.png",
  },
  {
    title: "Category 7",
    subtitle: "Subtitle for Category 7",
    image: "https://www.pngall.com/wp-content/uploads/2016/03/Bottle-PNG-2.png",
  },
  {
    title: "Category 8",
    subtitle: "Subtitle for Category 8",
    image:
      "https://w7.pngwing.com/pngs/381/198/png-transparent-dove-soap-lotion-bathing-personal-care-soap-miscellaneous-cream-soap-thumbnail.png",
  },
];

// Function to create category card HTML with responsive sizing
function createCategoryCardHTML(category) {
  return `
          <div class="rounded-lg p-4 text-center flex-shrink-0 mobile-category-card">
            <div class="w-16 h-16 sm:w-32 sm:h-32 mx-auto bg-orange-100 rounded-full flex items-center justify-start mb-4 sm:mb-8 relative">
              <img
                src="${category.image}"
                alt="${category.title}"
                class="w-20 h-20 sm:w-40 sm:h-40 object-contain rounded-full absolute -top-3 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                loading="lazy"
              />
            </div>
            <p class="text-gray-600 text-xs sm:text-sm md:text-base">${category.subtitle}</p>
            <h3 class="text-orange-500 text-sm sm:text-xl md:text-2xl font-semibold">
              ${category.title}
            </h3>
          </div>
        `;
}

// Generate slider cards for all devices
const categorySlider = document.querySelector("#category-slider");
if (categorySlider) {
  categories.forEach((category) => {
    const categoryCard = document.createElement("div");
    categoryCard.innerHTML = createCategoryCardHTML(category);
    categorySlider.appendChild(categoryCard);
  });
}

const categorySliderMobile = document.querySelector("#category-slider-mobile");
if (categorySliderMobile) {
  categories.forEach((category) => {
    const categoryCard = document.createElement("div");
    categoryCard.innerHTML = createCategoryCardHTML(category);
    categorySliderMobile.appendChild(categoryCard);
  });
}

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
    <div class="bg-white max-w-[210px] w-full max-h-[330px] group hover:shadow-md overflow-hidden">
      <div class="w-full h-[200px] relative">
        <img class="w-full h-full object-center" src="${item.image}" alt="" />
        <div class="bg-white absolute -bottom-7 right-0 w-full p-2 hidden group-hover:block">
          <button class="flex gap-2 justify-center items-center bg-white w-full p-2 uppercase font-bold border-[1px] border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            Wishlist
          </button>
        </div>

        <div class="view-similar-btn w-[30px] h-[30px] hidden group-hover:flex hover:w-[130px] rounded-full bg-white absolute bottom-10 right-5 transition-all duration-300 justify-center items-center gap-2 overflow-hidden outline-none border-none cursor-pointer group/view-similar" data-similar-content="<div><b>Similar products for ${item.title}</b><br>${item.description}</div>" title="View Similar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff3f6c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
          <p class="hidden group-hover/view-similar:block uppercase font-bold text-[#ff3f6c] transition-opacity duration-300 delay-200 whitespace-nowrap text-sm">
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

      <div class="border-t border-gray-200 w-[90%] mx-auto"></div>
      <div class="p-1">
        <button class="outline-none w-full uppercase text-[#ff3f6c] font-bold text-xs hover:text-[#ff3f6c]/80 transition-colors bg-transparent border-none cursor-pointer">Add to Bag</button>
      </div>
    </div>
`;
}

// Function to create product card HTML for mobile slider
function createMobileProductCardHTML(item) {
  return `
    <div
      class="bg-white w-[180px] max-h-[350px] group shadow-md overflow-hidden"
    >
      <div class="w-full h-[200px] relative">
        <img
          class="w-full h-full object-center"
          src="${item.image}"
          alt=""
        />
        <div
          class="bg-white absolute -bottom-7 right-0 w-full p-2 hidden  group-hover:xl:block"
        >
          <button
            class="flex gap-2 justify-center items-center bg-white w-full p-2 uppercase font-bold border-[1px] border-gray-300"
          >
            <span class="myntraweb-sprite sprites-notWishlisted"></span>
            Wishlist
          </button>
        </div>

        <div
          class="w-[40px] h-[40px] hidden group-hover:xl:block hover:w-[150px] rounded-full bg-white absolute bottom-10 right-5 transition-all duration-300 flex justify-center items-center gap-2 group/similar overflow-hidden"
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

      

      <div class="p-2 relative">
        <h1 class="text-base font-bold text-black">Levis</h1>
        <h2 class="text-sm block text-gray-500">
          Solid Lounge T-shirt
        </h2>
        <p class="space-x-2">
          <span class="font-bold">Rs. 389</span>
          <del class="text-sm text-gray-500">Rs. 649 </del>
          <span class="text-xs text-[#ff905a]">(40% OFF)</span>
        </p>

      <!-- Wishlist Icon -->
        <div class="absolute bottom-11 right-2 top-0.5 pt-1 pl-4 h-10 text-gray-800 xl:hidden">
            <svg class="w-6 h-6 hover:fill-red-500 hover:text-red-500 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
        </div>
        </div>
        <div class="border-t border-gray-200 w-[90%] mx-auto"></div>
        <div class="p-1">
            <button class="outline-none w-full uppercase text-[#ff3f6c] font-bold text-xs hover:text-[#ff3f6c]/80 transition-colors bg-transparent border-none cursor-pointer">Add to Bag</button>
          </div>

    </div>
  `;
}

const productsGridDesktop = document.querySelector("#products-grid-desktop");
const productsGridDesktop1 = document.querySelector("#products-grid-desktop1");
if (productsGridDesktop) {
  products.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createProductCardHTML(product);
    productsGridDesktop.appendChild(productCard);
  });
}
if (productsGridDesktop1) {
  products.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createProductCardHTML(product);
    productsGridDesktop1.appendChild(productCard);
  });
}

const productsSliderMobile = document.querySelector("#products-slider-mobile");
const productsSliderMobile1 = document.querySelector(
  "#products-slider-mobile1"
);

if (productsSliderMobile) {
  products.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createMobileProductCardHTML(product);
    if (product === products.slice(0, 6)[products.slice(0, 6).length - 1]) {
      productCard.classList.add("pr-10");
    }
    productsSliderMobile.appendChild(productCard);
  });
}
if (productsSliderMobile1) {
  products.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createMobileProductCardHTML(product);
    if (product === products.slice(0, 6)[products.slice(0, 6).length - 1]) {
      productCard.classList.add("pr-10");
    }
    productsSliderMobile1.appendChild(productCard);
  });
}

const shopByNotesProducts = [
  {
    id: 1,
    title: "Bella",
    image: "https://picsum.photos/300/400?random=10",
    price: "₹299",
    href: "#",
  },
  {
    id: 2,
    title: "Plum Green Tea",
    image: "https://picsum.photos/300/400?random=11",
    price: "₹349",
    href: "#",
  },
  {
    id: 3,
    title: "Minimalist",
    image: "https://picsum.photos/300/400?random=12",
    price: "₹199",
    href: "#",
  },
  {
    id: 4,
    title: "Himalaya",
    image: "https://picsum.photos/300/400?random=13",
    price: "₹175",
    href: "#",
  },
  {
    id: 5,
    title: "L'Oreal Paris",
    image: "https://picsum.photos/300/400?random=14",
    price: "₹549",
    href: "#",
  },
  {
    id: 6,
    title: "Olay Total Effects",
    image: "https://picsum.photos/300/400?random=15",
    price: "₹899",
    href: "#",
  },
  {
    id: 3,
    title: "Minimalist",
    image: "https://picsum.photos/300/400?random=12",
    price: "₹199",
    href: "#",
  },
  {
    id: 4,
    title: "Himalaya",
    image: "https://picsum.photos/300/400?random=13",
    price: "₹175",
    href: "#",
  },
  {
    id: 5,
    title: "L'Oreal Paris",
    image: "https://picsum.photos/300/400?random=14",
    price: "₹549",
    href: "#",
  },
  {
    id: 6,
    title: "Olay Total Effects",
    image: "https://picsum.photos/300/400?random=15",
    price: "₹899",
    href: "#",
  },
];

// Function to create shop by notes product card HTML
function createShopByNotesProductCardHTML(item) {
  return `
    <div class="relative rounded-lg text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white  border border-gray-200 max-w-[190px] w-full">
        <a href="${item.href}" class="block text-gray-800 no-underline outline-none">
            <div class="relative overflow-hidden">
                <!-- Product Image -->
                <div class="relative w-[210px] h-52 bg-pink-50">
                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        class="w-full h-full object-cover object-top transition-opacity duration-300"
                        loading="lazy"
                    />
                </div>

                <!-- Content -->
                <div class="relative">
                    <div class="py-2">
                        <!-- Brand Title -->
                        <h3 class="text-center">
                            ${item.title}
                        </h3>
                        <h3 class="text-orange-500 text-sm sm:text-xl  font-semibold text-center">
              Under ${item.price}
            </h3>
                        </div>

                </div>
            </div>
        </a>
        
    </div>
`;
}

// Function to create product card HTML for mobile slider
function createMobileShopByNotesProductCardHTML(item) {
  return `
    <div class="relative rounded-lg text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white border border-gray-200 w-[190px]">
        <a href="${item.href}" class="block text-gray-800 no-underline outline-none w-full">
            <div class="relative overflow-hidden w-full">
                <!-- Product Image -->
                <div class="relative w-full h-48 bg-pink-50">
                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        class="w-full h-full object-cover object-top transition-opacity duration-300"
                        loading="lazy"
                    />
                </div>

                <!-- Content -->
                <div class="relative">
                    <div class="py-2">
                        <!-- Brand Title -->
                        <h3 class="text-center">
                            ${item.title}
                        </h3>
                        <h3 class="text-orange-500 text-sm sm:text-xl  font-semibold text-center">
              Under ${item.price}
            </h3>
                        </div>

                </div>
            </div>
        </a>
        
    </div>
  `;
}

function createStyleYourBadroomDesktopProductCardHTML(item) {
  return `
    <div class="relative text-center transition-shadow duration-300 overflow-hidden bg-white max-w-[190px] w-full">
        <a href="${item.href}" class="block text-gray-800 no-underline outline-none">
            <div class="relative overflow-hidden">
                <!-- Product Image -->
                <div class="relative rounded-full h-40 w-40">
                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        class="w-full h-full object-cover object-top transition-opacity duration-300 rounded-full"
                        loading="lazy"
                    />
                </div>

                <!-- Content -->
                <div class="relative">
                    <div class="py-2">
                        <!-- Brand Title -->
                        <h3 class="text-orange-500 text-sm sm:text-xl  font-semibold text-center">
                            ${item.title}
                        </h3>
                    </div>
                </div>
            </div>
        </a>
        
    </div>
`;
}

function createStyleYourBadroomMobileProductCardHTML(item) {
  return `
    <div class="relative text-center transition-shadow duration-300 overflow-hidden bg-white max-w-[190px] w-full">
        <a href="${item.href}" class="block text-gray-800 no-underline outline-none">
            <div class="relative overflow-hidden">
                <!-- Product Image -->
                <div class="relative rounded-full h-40 w-40">
                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        class="w-full h-full object-cover object-top transition-opacity duration-300 rounded-full"
                        loading="lazy"
                    />
                </div>

                <!-- Content -->
                <div class="relative">
                    <div class="py-2">
                        <!-- Brand Title -->
                        <h3 class="text-orange-500 text-sm sm:text-xl  font-semibold text-center">
                            ${item.title}
                        </h3>
                    </div>
                </div>
            </div>
        </a>
        
    </div>
`;
}

const shopByNotesGridDesktop = document.querySelector(
  "#shop-by-notes-grid-desktop"
);
const styleYourBadroomDesktop = document.querySelector(
  "#style-your-badroom-desktop"
);
const styleYourBadroomMobile = document.querySelector(
  "#style-your-badroom-mobile"
);

if (shopByNotesGridDesktop) {
  shopByNotesProducts.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createShopByNotesProductCardHTML(product);
    shopByNotesGridDesktop.appendChild(productCard);
  });
}

if (styleYourBadroomDesktop) {
  shopByNotesProducts.slice(0, 10).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML =
      createStyleYourBadroomDesktopProductCardHTML(product);
    styleYourBadroomDesktop.appendChild(productCard);
  });
}

if (styleYourBadroomMobile) {
  shopByNotesProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML =
      createStyleYourBadroomMobileProductCardHTML(product);
    if (product === shopByNotesProducts[shopByNotesProducts.length - 1]) {
      productCard.classList.add("pr-10");
    }
    styleYourBadroomMobile.appendChild(productCard);
  });
}

const shopByNotesSliderMobile = document.querySelector(
  "#shop-by-notes-slider-mobile"
);
if (shopByNotesSliderMobile) {
  shopByNotesProducts.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createMobileShopByNotesProductCardHTML(product);
    if (
      product ===
      shopByNotesProducts.slice(0, 6)[
        shopByNotesProducts.slice(0, 6).length - 1
      ]
    ) {
      productCard.classList.add("pr-10");
    }
    shopByNotesSliderMobile.appendChild(productCard);
  });
}

const shopByNotesGridDesktop2 = document.querySelector(
  "#shop-by-notes-grid-desktop2"
);
if (shopByNotesGridDesktop2) {
  shopByNotesProducts.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createShopByNotesProductCardHTML(product);
    shopByNotesGridDesktop2.appendChild(productCard);
  });
}

const shopByNotesSliderMobile2 = document.querySelector(
  "#shop-by-notes-slider-mobile2"
);
if (shopByNotesSliderMobile2) {
  shopByNotesProducts.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createMobileShopByNotesProductCardHTML(product);
    if (
      product ===
      shopByNotesProducts.slice(0, 6)[
        shopByNotesProducts.slice(0, 6).length - 1
      ]
    ) {
      productCard.classList.add("pr-10");
    }
    shopByNotesSliderMobile2.appendChild(productCard);
  });
}

const shopByNotesGridDesktop3 = document.querySelector(
  "#shop-by-notes-grid-desktop3"
);
if (shopByNotesGridDesktop3) {
  shopByNotesProducts.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createShopByNotesProductCardHTML(product);
    shopByNotesGridDesktop3.appendChild(productCard);
  });
}

const shopByNotesSliderMobile3 = document.querySelector(
  "#shop-by-notes-slider-mobile3"
);
if (shopByNotesSliderMobile3) {
  shopByNotesProducts.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createMobileShopByNotesProductCardHTML(product);
    if (
      product ===
      shopByNotesProducts.slice(0, 6)[
        shopByNotesProducts.slice(0, 6).length - 1
      ]
    ) {
      productCard.classList.add("pr-10");
    }
    shopByNotesSliderMobile3.appendChild(productCard);
  });
}

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
    if (productData) {
      products.map((item) => {
        const productCard = document.createElement("div");
        productCard.innerHTML = `
          <div
            class="bg-white max-w-[210px] w-full min-h-[330px] group hover:shadow-md overflow-hidden"
          >
            <div class="w-full h-[200px] relative">
              <img
                class="w-full h-full object-center"
                src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg"
                alt=""
              />
            </div>

            <div class="p-2">
              <h1 class="text-base font-bold text-black">Levis</h1>
              <h2 class="text-sm block text-gray-500">
                Solid Lounge T-shirt
              </h2>
              <p class="space-x-2">
                <span class="font-bold">Rs. 389</span>
                <del class="text-sm text-gray-500">Rs. 649 </del>
                <span class="text-xs text-[#ff905a]">(40% OFF)</span>
              </p>
            </div>

            <div class="border-t border-gray-200 w-[90%] mx-auto"></div>
            <div class="p-1">
                <button class="outline-none w-full uppercase text-[#ff3f6c] font-bold text-xs hover:text-[#ff3f6c]/80 transition-colors bg-transparent border-none cursor-pointer">Add to Bag</button>
            </div>
          </div>
        `;
        sidebarContent.appendChild(productCard);
      });
    } else {
      sidebarContent.innerHTML = `
      <div class="text-gray-500 text-center mt-10">
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

  document.body.addEventListener("click", function (e) {
    const btn = e.target.closest(".view-similar-btn");
    if (btn) {
      openProductSidebar(btn.getAttribute("data-similar-content") || null);
    }
  });
});
