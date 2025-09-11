// Sample product data - replace with your actual data source
const products = [
  {
    id: 1,
    brand: "Levis",
    name: "Men Soft Pure Cotton Round Neck Half Sleeve Tshirt",
    price: 389,
    originalPrice: 649,
    discount: 40,
    size: "S",
    quantity: 1,
    returnDays: 10,
    imageUrl:
      "https://assets.myntassets.com/w_111,h_148,dpr_1,q_60,c_limit,fl_progressive/h_148,q_60,w_111/v1/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"], // Added for size modal
  },
  {
    id: 2,
    brand: "Puma",
    name: "Men Black Solid Polo Collar T-shirt",
    price: 799,
    originalPrice: 1599,
    discount: 50,
    size: "M",
    quantity: 2,
    returnDays: 15,
    imageUrl:
      "https://assets.myntassets.com/w_111,h_148,dpr_1,q_60,c_limit,fl_progressive/h_148,q_60,w_111/v1/assets/images/productimage/2019/11/27/e64ed075-e877-4b08-8e62-c10bf55a29f81574805721731-Puma-Men-Black-Solid-Polo-Collar-T-shirt-9571574805720743-1.jpg",
    availableSizes: ["S", "M", "L", "XXL"],
  },
  {
    id: 3,
    brand: "HRX by Hrithik Roshan",
    name: "Men Colourblocked Active Performance T-shirt",
    price: 549,
    originalPrice: 1099,
    discount: 50,
    size: "L",
    quantity: 1,
    returnDays: 10,
    imageUrl:
      "https://assets.myntassets.com/w_111,h_148,dpr_1,q_60,c_limit,fl_progressive/h_148,q_60,w_111/v1/assets/images/productimage/2019/10/24/cefb35b4-d533-4fce-aa1a-a5fdf6f78ee41571900139169-HRX-by-Hrithik-Roshan-Men-Navy-Blue-White-Colourblocked-Activ-1.jpg",
    availableSizes: ["S", "M", "L", "XL"],
  },
];

// Variables for size selection modal
let currentProductForSizeSelection = null;
let tempSelectedSize = null; // To hold selection within modal before confirming

// Function to generate product HTML for the main list
function createProductHTML(product) {
  return `
    <div class="itemContainer-base-itemMargin mb-2" data-product-id="${
      product.id
    }">
        <div>
            <div class="item-base-item relative">
                <div class="itemContainer-base-item bg-white text-sm relative pt-3 px-3 pb-0 border border-gray-200 rounded-md">
                    <!-- Left section: Selection Icon and Image -->
                    <div class="itemContainer-base-itemLeft absolute">
                        <div class="itemComponents-base-selectionIconContainer itemContainer-base-selectionIndicator absolute left-0 top-0 h-16 w-16 flex items-center justify-center -left-[9px] -top-[12px]">
                            <div class="itemComponents-base-animationContainer absolute h-4 w-4 top-[18px] left-[14px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="itemComponents-base-activeProduct fill-rose-500 bg-white rounded-sm">
                                    <path fill-rule="evenodd" d="M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0"></path>
                                </svg>
                            </div>
                        </div>
                        <a href="#" data-testid="itemImageComponent" class="no-underline outline-none bg-transparent block">
                            <div class="bg-blue-100 h-[148px] w-[111px]">
                                <picture class="image-base-imgResponsive block w-full">
                                    <source srcset="${product.imageUrl.replace(
                                      ".jpg",
                                      ".webp"
                                    )}" type="image/webp">
                                    <img src="${
                                      product.imageUrl
                                    }" class="image-base-imgResponsive block max-w-full h-auto w-[111px] h-[148px]" alt="${
    product.name
  }" fetchpriority="high" loading="eager">
                                </picture>
                            </div>
                        </a>
                    </div>
                    <!-- Right section: Product Details -->
                    <div class="itemContainer-base-itemRight ml-[123px]">
                        <div class="itemContainer-base-details">
                            <div>
                                <div class="itemContainer-base-brand font-semibold text-gray-800">${
                                  product.brand
                                }</div>
                                <a class="itemContainer-base-itemLink block text-gray-800 no-underline text-sm mt-0.5" href="#">${
                                  product.name
                                }</a>
                            </div>
                            <div class="itemComponents-base-sellerContainer mt-1">
                                <div class="itemComponents-base-sellerData text-xs text-gray-500">Sold by: MODENIK LIFESTYLE PRIVATE LIMITED</div>
                            </div>
                            <div class="itemContainer-base-sizeAndQtyContainer mt-2">
                                <div class="itemContainer-base-sizeAndQty flex items-center space-x-4">
                                    <div class="itemComponents-base-size inline-flex items-center text-xs text-gray-700 cursor-pointer" onclick="openProductSizeModal(${
                                      product.id
                                    })">
                                        <span>Size: <span class="font-semibold text-gray-800" id="selectedSize-${
                                          product.id
                                        }">${product.size}</span></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" class="itemComponents-base-dropDown ml-1 fill-current"><path fill-rule="evenodd" d="M0 0h6L3 3z"></path></svg>
                                    </div>
                                    <div class="itemComponents-base-quantity inline-flex items-center text-xs text-gray-700">
                                        <span>Qty:</span>
                                        <div class="flex items-center ml-1">
                                            <button class="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center focus:outline-none" onclick="decreaseQuantity(${
                                              product.id
                                            })">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><line x1="5" x2="19" y1="12" y2="12"/></svg>
                                            </button>
                                            <input type="number" min="1" id="quantity-${
                                              product.id
                                            }" class="w-12 text-center border border-gray-300 rounded outline-none focus:border-rose-500 focus:ring-0 mx-1 text-sm bg-white" value="${
    product.quantity
  }" onchange="updateProductQuantity(${product.id}, this.value)">
                                            <button class="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center focus:outline-none" onclick="increaseQuantity(${
                                              product.id
                                            })">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" y1="5" x2="12" y1="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="itemContainer-base-price mt-2 flex items-center">
                                <div class="itemComponents-base-price itemComponents-base-bold flex items-center font-bold text-gray-800">
                                    <svg width="8" height="10" viewBox="0 0 8 10" class="itemComponents-base-rupeeBoldIcon fill-current mr-0.5">
                                        <path fill-rule="nonzero" d="M3.418 10 .898 5.604V4.568h.84c.336 0 .63-.047.882-.14.262-.103.476-.247.644-.434.178-.187.299-.41.364-.672H.898V2.286h2.716a1.694 1.694 0 0 0-.294-.644 1.289 1.289 0 0 0-.532-.434 1.678 1.678 0 0 0-.784-.168H.898V.004h6.314V1.04H5.014c.159.177.29.369.392.574.112.205.187.43.224.672h1.582v1.036H5.658c-.093.69-.36 1.232-.798 1.624-.438.383-1.003.644-1.694.784L5.91 10H3.418Z"></path>
                                    </svg>${product.price}
                                </div>
                                <div class="itemContainer-base-discountBlock flex items-center ml-2 space-x-1">
                                    <span class="itemComponents-base-strikedAmount">
                                        <span class="itemComponents-base-price itemComponents-base-strike itemContainer-base-mrpStrikedAmount line-through text-gray-500 flex items-center">
                                            <svg width="7" height="9" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg" class="itemComponents-base-rupeeIcon fill-current mr-0.5">
                                                <g clip-path="url(#clip0_674_1209)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.966797 4.6993L3.27973 8.73777H4.52798L2.19057 4.88287C2.6647 4.81768 3.06996 4.69005 3.40632 4.5H7V3.5H4.29767C4.37186 3.30767 4.42008 3.09555 4.44231 2.86364H6.03325V2.08042H4.41785C4.38521 1.79487 4.30771 1.54604 4.18531 1.33392C4.06295 1.12179 3.90795 0.938227 3.72028 0.783217H6.03325V0H0.966797V0.783217H1.23603C1.65211 0.783217 2.00293 0.82809 2.28848 0.917833C2.58218 1.00758 2.8147 1.15035 2.98603 1.34615C3.15736 1.5338 3.27158 1.77855 3.32868 2.08042H0.966797V2.86364H3.34091C3.3155 3.11784 3.24801 3.32996 3.13843 3.5H0V4.5H0.966797V4.6993Z"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_674_1209">
                                                        <rect width="7" height="9"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>${product.originalPrice}
                                        </span>
                                    </span>
                                    <span class="itemComponents-base-impulseDriverDiscountWrapperStyle bg-orange-100 text-orange-500 px-1 py-0.5 rounded text-xs font-semibold">
                                      <span class="itemComponents-base-itemDiscount">${
                                        product.discount
                                      }% OFF</span>
                                    </span>
                                </div>
                            </div>
                            <div></div>
                            <div class="returnPeriod-base-returnItem flex items-center mt-3 pb-3">
                                <div class="returnPeriod-base-returnIcon mr-1">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-800">
                                        <path d="M6.63639 6.99013C6.84386 7.1976 6.84386 7.53397 6.63639 7.74143L5.7725 8.60533H8.27232C9.21251 8.60533 9.97949 7.84333 9.97949 6.89824C9.97949 5.95914 9.21859 5.19824 8.27949 5.19824H6.89116C6.59776 5.19824 6.35991 4.96039 6.35991 4.66699C6.35991 4.37359 6.59776 4.13574 6.89116 4.13574H8.27949C9.80539 4.13574 11.042 5.37234 11.042 6.89824C11.042 8.43232 9.79722 9.66783 8.27241 9.66783H5.77242L6.63639 10.5318C6.84386 10.7393 6.84386 11.0756 6.63639 11.2831C6.42893 11.4906 6.09256 11.4906 5.88509 11.2831L4.11426 9.51227C4.0417 9.43971 3.99452 9.35138 3.97271 9.25831C3.96352 9.21922 3.95866 9.17846 3.95866 9.13658C3.95866 9.05996 3.97488 8.98713 4.00407 8.92134C4.02519 8.87367 4.05366 8.82847 4.08949 8.78745C4.09828 8.77738 4.10745 8.76764 4.11697 8.75826L5.88509 6.99013C6.09256 6.78267 6.42893 6.78267 6.63639 6.99013Z" fill="#282C3F"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.416992 7.50033C0.416992 3.58831 3.58831 0.416992 7.50033 0.416992C11.4123 0.416992 14.5837 3.58831 14.5837 7.50033C14.5837 11.4123 11.4123 14.5837 7.50033 14.5837C3.58831 14.5837 0.416992 11.4123 0.416992 7.50033ZM7.50033 1.47949C4.17511 1.47949 1.47949 4.17511 1.47949 7.50033C1.47949 10.8255 4.17511 13.5212 7.50033 13.5212C10.8255 13.5212 13.5212 10.8255 13.5212 7.50033C13.5212 4.17511 10.8255 1.47949 7.50033 1.47949Z"></path>
                                    </svg>
                                </div>
                                <div class="returnPeriod-base-returnText text-xs text-gray-700">
                                    <span class="returnPeriod-base-returnDays font-semibold">${
                                      product.returnDays
                                    } days</span> return available
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Close icon for product card -->
                <svg onclick="removeProduct(${
                  product.id
                })" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="absolute top-3 right-3 w-4 h-4 fill-current text-gray-800 cursor-pointer">
                    <path fill="#000" fill-rule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"></path>
                </svg>
            </div>
        </div>
    `;
}

// Function to render all products
function renderProducts() {
  const container = document.getElementById("productContainer");
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-lg p-8 text-center text-gray-500 shadow-sm">
        <p class="text-base mb-4">Your bag is empty</p>
        <a href="/" class="text-rose-500 font-semibold no-underline text-lg hover:underline">Continue Shopping</a>
      </div>
    `;
    updateItemCount();
    return;
  }

  const productsHTML = products
    .map((product) => createProductHTML(product))
    .join("");
  container.innerHTML = productsHTML;
  updateItemCount();
}

// Function to remove product
function removeProduct(productId) {
  if (confirm("Remove this item from your bag?")) {
    const productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex > -1) {
      products.splice(productIndex, 1);
      renderProducts(); // Re-render to update the list and counts
    }
  }
}

// Function to update product quantity (includes increment/decrement logic)
function updateProductQuantity(productId, newQuantity) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    let parsedQuantity = parseInt(newQuantity);
    // Ensure quantity is at least 1
    if (isNaN(parsedQuantity) || parsedQuantity < 1) {
      parsedQuantity = 1;
      document.getElementById(`quantity-${productId}`).value = 1; // Update input field if value was invalid
    }
    product.quantity = parsedQuantity;
    console.log(`Updated product ${productId} quantity to ${parsedQuantity}`);
    updateItemCount(); // Recalculate totals as quantity changed
  }
}

function increaseQuantity(productId) {
  const input = document.getElementById(`quantity-${productId}`);
  if (input) {
    input.value = parseInt(input.value) + 1;
    updateProductQuantity(productId, input.value);
  }
}

function decreaseQuantity(productId) {
  const input = document.getElementById(`quantity-${productId}`);
  if (input) {
    input.value = Math.max(1, parseInt(input.value) - 1); // Prevent going below 1
    updateProductQuantity(productId, input.value);
  }
}

// Function to calculate and update totals
function updateItemCount() {
  let totalQuantity = 0;
  let totalMRP = 0;
  let totalDiscount = 0;

  products.forEach((product) => {
    totalQuantity += product.quantity;
    totalMRP += product.originalPrice * product.quantity;
    totalDiscount += (product.originalPrice - product.price) * product.quantity;
  });

  // Fetch donation amount from current UI, or use default
  const donationAmountElement = document.querySelector(
    ".price-donation-amount"
  );
  const platformFeeElement = document.querySelector(".price-platform-fee");

  let donationAmount = donationAmountElement
    ? parseInt(donationAmountElement.textContent.replace("₹", ""))
    : 20; // Default if not found/parseable
  let platformFee = platformFeeElement
    ? parseInt(platformFeeElement.textContent.replace("₹", ""))
    : 20; // Default if not found/parseable

  const couponDiscount = 0; // Implement actual coupon logic later

  let finalAmount =
    totalMRP - totalDiscount - couponDiscount + donationAmount + platformFee;

  // Update UI elements in Price Details section
  const priceTitleElements = document.querySelectorAll(".price-title");
  priceTitleElements.forEach((element) => {
    element.textContent = `PRICE DETAILS (${totalQuantity} Items)`;
  });

  document.querySelector(".price-total-mrp").textContent = `₹${totalMRP}`;
  document.querySelector(
    ".price-total-discount"
  ).textContent = `-₹${totalDiscount}`;
  // coupon discount, donation and platform fee might already be dynamically set or static.
  document.querySelector(".price-final-amount").textContent = `₹${finalAmount}`;
}

// --- MODAL FUNCTIONS (Gift, Social Work, Product Size) ---

function openModal(modalId, animatedContentId) {
  const modal = document.getElementById(modalId);
  const content = document.getElementById(animatedContentId || modalId); // Use modalId as contentId if not specified for generic modals
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden"; // Prevent body scroll

  setTimeout(() => {
    if (content.classList.contains("translate-y-full")) {
      content.classList.remove("translate-y-full");
    }
  }, 10);
}

function closeModal(modalId, animatedContentId) {
  const modal = document.getElementById(modalId);
  const content = document.getElementById(animatedContentId || modalId); // Use modalId as contentId if not specified

  if (content) {
    content.classList.add("translate-y-full");
  }
  document.body.style.overflow = "auto";

  setTimeout(() => {
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  }, 300); // Match Tailwind transition duration
}

// Gift Modal Specific
function openGiftModal() {
  openModal("giftModal", "giftModalContent"); // No specific content ID for giftModal
}

function closeGiftModal() {
  closeModal("giftModal", "giftModalContent"); // No specific content ID for giftModal
}

// Social Work Modal Specific
function openSocialWorkModal() {
  openModal("socialWorkModal", "socialWorkModalContent"); // No specific content ID for socialWorkModal
}

function closeSocialWorkModal() {
  closeModal("socialWorkModal", "socialWorkModalContent"); // No specific content ID for socialWorkModal
}

// Product Size Modal Specific
function openProductSizeModal(productId) {
  currentProductForSizeSelection = products.find((p) => p.id === productId);
  if (!currentProductForSizeSelection) {
    console.error("Product not found for size selection:", productId);
    return;
  }

  tempSelectedSize = currentProductForSizeSelection.size; // Store current size in case user cancels

  const productInfoContainer = document.getElementById(
    "productSizeModalProductInfo"
  );
  const sizeOptionsContainer = document.getElementById("sizeOptionsContainer");

  // Populate product info in modal header
  productInfoContainer.innerHTML = `
    <div class="dialogs-base-productImage flex-shrink-0">
        <div class="bg-blue-100 h-[80px] w-[60px] flex items-center justify-center overflow-hidden">
            <img src="${currentProductForSizeSelection.imageUrl}" alt="${currentProductForSizeSelection.name}" class="w-full h-full object-cover">
        </div>
    </div>
    <div class="dialogs-base-productDetails flex-1">
        <div class="dialogs-base-brandName text-sm font-semibold text-gray-800">${currentProductForSizeSelection.brand}</div>
        <div class="dialogs-base-productName text-gray-600 text-sm leading-tight">${currentProductForSizeSelection.name}</div>
        <div class="inlinePriceComponent-base-price text-sm mt-1 flex items-center">
            <span class="inlinePriceComponent-base-bold font-bold text-gray-800 flex items-center">
                <svg width="8" height="10" viewBox="0 0 8 10" class="fill-current mr-0.5"><path fill-rule="nonzero" d="M3.418 10 .898 5.604V4.568h.84c.336 0 .63-.047.882-.14.262-.103.476-.247.644-.434.178-.187.299-.41.364-.672H.898V2.286h2.716a1.694 1.694 0 0 0-.294-.644 1.289 1.289 0 0 0-.532-.434 1.678 1.678 0 0 0-.784-.168H.898V.004h6.314V1.04H5.014c.159.177.29.369.392.574.112.205.187.43.224.672h1.582v1.036H5.658c-.093.69-.36 1.232-.798 1.624-.438.383-1.003.644-1.694.784L5.91 10H3.418Z"></path></svg>${currentProductForSizeSelection.price}
            </span>
            <span class="itemComponents-base-strikedAmount ml-2">
                <span class="itemComponents-base-price itemComponents-base-strike dialogs-base-strikedAmount line-through text-gray-500 flex items-center">
                    <svg width="7" height="9" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg" class="fill-current mr-0.5"><g clip-path="url(#clip0_674_1209)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.966797 4.6993L3.27973 8.73777H4.52798L2.19057 4.88287C2.6647 4.81768 3.06996 4.69005 3.40632 4.5H7V3.5H4.29767C4.37186 3.30767 4.42008 3.09555 4.44231 2.86364H6.03325V2.08042H4.41785C4.38521 1.79487 4.30771 1.54604 4.18531 1.33392C4.06295 1.12179 3.90795 0.938227 3.72028 0.783217H6.03325V0H0.966797V0.783217H1.23603C1.65211 0.783217 2.00293 0.82809 2.28848 0.917833C2.58218 1.00758 2.8147 1.15035 2.98603 1.34615C3.15736 1.5338 3.27158 1.77855 3.32868 2.08042H0.966797V2.86364H3.34091C3.3155 3.11784 3.24801 3.32996 3.13843 3.5H0V4.5H0.966797V4.6993Z"></path></g><defs><clipPath id="clip0_674_1209"><rect width="7" height="9"></rect></clipPath></defs></svg>${currentProductForSizeSelection.originalPrice}
                </span>
            </span>
            <span class="itemComponents-base-impulseDriverDiscountWrapperStyle bg-orange-100 text-orange-500 px-1 py-0.5 rounded text-xs font-semibold ml-2">
              <span class="itemComponents-base-itemDiscount">${currentProductForSizeSelection.discount}% OFF</span>
            </span>
        </div>
    </div>
  `;

  // Populate size options
  sizeOptionsContainer.innerHTML = currentProductForSizeSelection.availableSizes
    .map(
      (size) => `
    <div class="sizeSelector-base-item border border-gray-300 rounded-md py-2 px-1 text-center cursor-pointer text-sm font-semibold transition-colors
    ${
      size === currentProductForSizeSelection.size
        ? "bg-[#FF3F6C] text-white border-rose-500"
        : "bg-white text-gray-700 hover:bg-gray-100"
    }"
    onclick="selectSizeInModal('${size}')" data-size="${size}">
        <div class="sizeSelector-base-display">${size}</div>
    </div>
  `
    )
    .join("");

  openModal("productSizeModal", "productSizeModalContent");
}

function selectSizeInModal(selectedSize) {
  tempSelectedSize = selectedSize; // Update temporary selection

  const sizeItems = document.querySelectorAll(
    "#sizeOptionsContainer .sizeSelector-base-item"
  );
  sizeItems.forEach((item) => {
    if (item.dataset.size === selectedSize) {
      item.classList.add("bg-[#FF3F6C]", "text-white", "border-rose-500");
      item.classList.remove("bg-white", "text-gray-700", "hover:bg-gray-100");
    } else {
      item.classList.remove("bg-[#FF3F6C]", "text-white", "border-rose-500");
      item.classList.add("bg-white", "text-gray-700", "hover:bg-gray-100");
    }
  });
}

function confirmSizeSelection() {
  if (currentProductForSizeSelection && tempSelectedSize) {
    const productToUpdate = products.find(
      (p) => p.id === currentProductForSizeSelection.id
    );
    if (productToUpdate) {
      productToUpdate.size = tempSelectedSize;
      console.log(
        `Size for product ${currentProductForSizeSelection.id} updated to ${tempSelectedSize}`
      );
      document.getElementById(
        `selectedSize-${productToUpdate.id}`
      ).textContent = tempSelectedSize; // Update visible size immediately
      // No full re-render needed if only size changes that don't affect price directly
    }
  }
  closeModal("productSizeModal", "productSizeModalContent");
  currentProductForSizeSelection = null;
  tempSelectedSize = null;
}

// Universal modal closing logic based on data attribute
document.addEventListener("click", function (event) {
  // Check if a close button for any modal was clicked
  const closeBtn = event.target.closest("[data-modal-close]");
  if (closeBtn) {
    const modalIdToClose = closeBtn.dataset.modalClose;
    closeModal(
      modalIdToClose,
      modalIdToClose === "productSizeModal" ? "productSizeModalContent" : null
    );
  }
});

// Close modal when clicking outside (using a common pattern for all modals)
document.addEventListener("click", function (event) {
  const modals = ["giftModal", "socialWorkModal", "productSizeModal"];
  modals.forEach((modalId) => {
    const modal = document.getElementById(modalId);
    if (modal && !modal.classList.contains("hidden")) {
      // If modal is active
      const modalContentId =
        modalId === "productSizeModal"
          ? "productSizeModalContent"
          : modalId === "giftModal"
          ? "giftModalContent"
          : modalId; // Specify content ID if applicable
      const modalContent = document.getElementById(modalContentId);
      // Check if click is inside the modal wrapper but *not* inside the actual content
      if (
        modal.contains(event.target) &&
        modalContent &&
        !modalContent.contains(event.target)
      ) {
        // Ensure we click on the transparent overlay, not on modal content itself
        if (
          event.target === modal ||
          event.target.classList.contains("bg-black/50")
        ) {
          // Adjust for bg-black/50 overlay
          closeModal(modalId, modalContentId);
        }
      }
    }
  });
});

// Close modal with Escape key
window.addEventListener("keydown", function (e) {
  const activeModals = [
    { id: "giftModal", contentId: "giftModalContent" },
    { id: "socialWorkModal", contentId: "socialWorkModalContent" },
    { id: "productSizeModal", contentId: "productSizeModalContent" },
  ];

  for (const modalDef of activeModals) {
    const modal = document.getElementById(modalDef.id);
    if (modal && !modal.classList.contains("hidden")) {
      if (e.key === "Escape") {
        closeModal(modalDef.id, modalDef.contentId);
        return; // Close only one modal
      }
    }
  }
});

// Add to bag functionality for "You may also like" section
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".add-to-bag").forEach((button) => {
    button.addEventListener("click", function () {
      this.textContent = "ADDED";
      this.classList.add("bg-green-500", "text-white", "border-green-500");
      this.classList.remove(
        "bg-transparent",
        "text-rose-500",
        "border-rose-500"
      );
      setTimeout(() => {
        this.textContent = "ADD TO BAG";
        this.classList.remove("bg-green-500", "text-white", "border-green-500");
        this.classList.add(
          "bg-transparent",
          "text-rose-500",
          "border-rose-500"
        );
      }, 2000);
    });
  });

  // Donation amount selection
  document.querySelectorAll(".amount-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const section = this.closest(".bg-white"); // Changed to a more general parent for this context
      if (section) {
        section
          .querySelectorAll(".amount-btn")
          .forEach((btn) =>
            btn.classList.remove(
              "selected",
              "bg-rose-50",
              "text-rose-500",
              "border-rose-500"
            )
          );
      }
      this.classList.add(
        "selected",
        "bg-rose-50",
        "text-rose-500",
        "border-rose-500"
      );
      // Update donation amount for calculations
      const newDonationAmount = parseInt(this.textContent.replace("₹", ""));
      const donationSpan = document.querySelector(".price-donation-amount");
      if (donationSpan) donationSpan.textContent = `₹${newDonationAmount}`;
      updateItemCount();
    });
  });

  // Category selection for "You may also like"
  document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", function () {
      document
        .querySelectorAll(".category-btn")
        .forEach((btn) =>
          btn.classList.remove("active", "bg-[#FF3F6C]", "text-white")
        );
      this.classList.add("active", "bg-[#FF3F6C]", "text-white");
    });
  });

  // Update item count on page load and dynamically (original structure needs total quantities, not just cards count)
  updateItemCount(); // Initial calculation

  // Login button
  document.querySelectorAll(".login-btn").forEach((button) => {
    button.addEventListener("click", function () {
      alert("Login functionality would be implemented here");
    });
  });

  // Place order button
  document.querySelectorAll(".place-order-btn").forEach((button) => {
    button.addEventListener("click", function () {
      alert("Proceeding to payment...");
    });
  });

  // Pin code buttons
  document
    .querySelectorAll(".pin-code-btn, .enter-pin-btn")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const pincode = prompt("Enter your PIN code:");
        if (pincode) {
          alert(`Checking delivery options for ${pincode}...`);
        }
      });
    });

  // Show more offers
  document.querySelectorAll(".show-more").forEach((button) => {
    button.addEventListener("click", function () {
      alert("More offers would be displayed here");
    });
  });

  // Apply coupon
  document.querySelectorAll(".apply-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const couponCode = prompt("Enter coupon code:");
      if (couponCode) {
        alert(`Applying coupon: ${couponCode}`);
      }
    });
  });

  // Character count for gift message (if the element is present)
  const giftMessageTextarea = document.getElementById("giftMessage");
  const charCountSpan = document.getElementById("charCount");
  if (giftMessageTextarea && charCountSpan) {
    giftMessageTextarea.addEventListener("input", function () {
      const currentLength = this.value.length;
      charCountSpan.textContent = currentLength;

      // Change color when approaching limit
      if (currentLength > 180) {
        charCountSpan.style.color = "#ff3f6c"; // Myntra Pink
      } else {
        charCountSpan.style.color = "#696e79"; // Text gray
      }
    });
  }

  // Back arrow (mobile) - if this element exists
  document.querySelector(".back-arrow")?.addEventListener("click", function () {
    if (confirm("Go back to shopping?")) {
      window.history.back();
    }
  });

  // Toggle offers list
  window.toggleOffers = function () {
    // Made global to be callable from inline HTML onclick
    const hiddenOffers = document.querySelectorAll(".hidden-offer");
    const toggleText = document.getElementById("toggleText");
    const arrowIcon = document.getElementById("arrowIcon");

    const isHidden = hiddenOffers[0].classList.contains("hidden");

    hiddenOffers.forEach((offer) => {
      offer.classList.toggle("hidden");
    });

    toggleText.textContent = isHidden ? "Show Less" : "Show More";
    arrowIcon.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
  };

  renderProducts(); // Initial rendering of products
});
