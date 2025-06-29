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
    title: "Category 4",
    subtitle: "Subtitle for Category 4",
    image: "https://www.pngall.com/wp-content/uploads/2016/03/Bottle-PNG-2.png",
  },
  {
    title: "Category 5",
    subtitle: "Subtitle for Category 5",
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

// Function to create product card HTML for mobile slider
function createMobileProductCardHTML(item) {
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

const productsGridDesktop = document.querySelector("#products-grid-desktop");
if (productsGridDesktop) {
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createProductCardHTML(product);
    productsGridDesktop.appendChild(productCard);
  });
}

const productsSliderMobile = document.querySelector("#products-slider-mobile");
if (productsSliderMobile) {
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createMobileProductCardHTML(product);
    productsSliderMobile.appendChild(productCard);
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
    <div class="relative rounded-lg text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white  border border-gray-200">
        <a href="${item.href}" class="block text-gray-800 no-underline outline-none">
            <div class="relative overflow-hidden">
                <!-- Product Image -->
                <div class="relative w-full h-52 bg-pink-50">
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
    <div class="relative rounded-lg text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white border border-gray-200 mobile-product-card">
        <a href="${item.href}" class="block text-gray-800 no-underline outline-none">
            <div class="relative overflow-hidden">
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

const shopByNotesGridDesktop = document.querySelector(
  "#shop-by-notes-grid-desktop"
);
if (shopByNotesGridDesktop) {
  shopByNotesProducts.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createShopByNotesProductCardHTML(product);
    shopByNotesGridDesktop.appendChild(productCard);
  });
}

const shopByNotesSliderMobile = document.querySelector(
  "#shop-by-notes-slider-mobile"
);
if (shopByNotesSliderMobile) {
  shopByNotesProducts.slice(0, 6).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createMobileShopByNotesProductCardHTML(product);
    shopByNotesSliderMobile.appendChild(productCard);
  });
}

const shopByNotesGridDesktop2 = document.querySelector(
  "#shop-by-notes-grid-desktop2"
);
if (shopByNotesGridDesktop2) {
  shopByNotesProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createShopByNotesProductCardHTML(product);
    shopByNotesGridDesktop2.appendChild(productCard);
  });
}

const shopByNotesSliderMobile2 = document.querySelector(
  "#shop-by-notes-slider-mobile2"
);
if (shopByNotesSliderMobile2) {
  shopByNotesProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = createMobileShopByNotesProductCardHTML(product);
    shopByNotesSliderMobile2.appendChild(productCard);
  });
}
