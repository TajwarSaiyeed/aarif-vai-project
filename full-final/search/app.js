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

const recently_searches_products = document.getElementById(
  "recently-searches-products"
);

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

  // Function to create recently searched product card HTML for mobile slider
  function createRecentlySearchesProductCardHTML(product) {
    return `
      <div class="bg-white flex flex-col justify-center items-center hover:shadow-md transition-shadow duration-300 cursor-pointer">
        <div class="w-[70px] h-[70px] overflow-hidden relative rounded-full">
          <img
            src="${product.img}"
            alt="${product.title}"
            class="w-full h-full object-cover"
          />
        </div>
          <p class="text-sm text-gray-800">${product.title}</p>
      </div>
    `;
  }

  const recently_searches_products = document.getElementById(
    "recently-searches-products"
  );

  if (recently_searches_products) {
    // Clear existing content
    recently_searches_products.innerHTML = "";

    mockData.forEach((product, index) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = createRecentlySearchesProductCardHTML(product);

      // Add right padding to the last item for better scrolling experience
      if (index === mockData.length - 1) {
        productElement.classList.add("pr-5");
      }

      recently_searches_products.appendChild(productElement);
    });

    // Add touch scroll support for better mobile experience
    recently_searches_products.addEventListener("touchstart", function (e) {
      this.style.scrollBehavior = "auto";
    });

    recently_searches_products.addEventListener("touchend", function (e) {
      this.style.scrollBehavior = "smooth";
    });
  }
});
