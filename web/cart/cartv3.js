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
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16127474/2023/11/20/58711868-9ccb-45aa-a3f3-ca6c6942f0581700479581777USPoloAssnMenRedNavyBlueStripedComfort-FitLoungeT-Shirt1.jpg",
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
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/4/1KggjQ4i_18213148989b443795e9067c1a471b09.jpg",
    availableSizes: ["S", "M", "L", "XL"],
  },
];

// Variables for size selection modal
let currentProductForSizeSelection = null;
let tempSelectedSize = null; // To hold selection within modal before confirming

// Function to generate product HTML
function createProductHTML(product, isLast = false) {
  const borderClass = isLast ? "" : "border border-gray-200";

  return `
    <div class="relative flex gap-4 p-2 ${borderClass} product-card" data-product-id="${
    product.id
  }">
      <div class="w-20 h-28 md:w-28 md:h-36 bg-gray-100 relative flex-shrink-0">
        ${
          product.imageUrl
            ? `<img src="${product.imageUrl}" alt="${product.name}" class="w-full h-full object-cover">`
            : ""
        }
      </div>
      <button class="absolute top-2 right-2 w-5 h-5 md:w-6 md:h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer text-xs md:text-sm remove-btn" onclick="removeProduct(${
        product.id
      })">×</button>
      <div class="flex-1 flex gap-1 flex-col gap-3">
        <div class="font-semibold text-sm md:text-base">${product.brand}</div>
        <div class="text-gray-600 leading-snug text-sm md:text-base">${
          product.name
        }</div>
        <div class="flex gap-6">
          <div class="flex items-center gap-2">
            <span>Size:</span>
            <span class="font-semibold cursor-pointer text-teal-500" id="selectedSize-${
              product.id
            }" onclick="openProductSizeModal(${product.id})">${
    product.size
  }</span>
          </div>
          <div class="flex items-center gap-2">
            <span>Qty:</span>
            <div class="flex items-center">
              <button class="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center focus:outline-none" onclick="decreaseQuantity(${
                product.id
              })">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><line x1="5" x2="19" y1="12" y2="12"/></svg>
              </button>
              <input type="number" min="1" id="quantity-${
                product.id
              }" class="w-12 text-center border border-gray-300 rounded outline-none focus:ring-0 mx-1 appearance-none" value="${
    product.quantity
  }" onchange="updateProductQuantity(${product.id}, this.value)">
              <button class="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center focus:outline-none" onclick="increaseQuantity(${
                product.id
              })">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <span class="font-semibold text-base">₹${product.price}</span>
          <span class="line-through text-gray-500 text-base">₹${
            product.originalPrice
          }</span>
          <span class="text-yellow-500 font-semibold text-base">${
            product.discount
          }% OFF</span>
        </div>
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
<div class="text-center py-8 text-gray-500">
  <p>Your bag is empty</p>
  <a href="/" class="text-rose-500 font-semibold mt-2 inline-block">Continue Shopping</a>
</div>
    `;
    updateItemCount();
    return;
  }

  const productsHTML = products
    .map((product, index) => createProductHTML(product))
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
      renderProducts();
    }
  }
}

// Function to update product size
function updateProductSize(productId, newSize) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    product.size = newSize;
    console.log(`Updated product ${productId} size to ${newSize}`);
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

// Function to add new product
function addProduct(productData) {
  const newProduct = {
    id: Date.now(), // Simple ID generation
    ...productData,
  };
  products.push(newProduct);
  renderProducts();
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

  const totalMRPElement = document.querySelector(".price-total-mrp");
  const totalDiscountElement = document.querySelector(".price-total-discount");
  const finalAmountElement = document.querySelector(".price-final-amount");

  if (totalMRPElement) totalMRPElement.textContent = `₹${totalMRP}`;
  if (totalDiscountElement)
    totalDiscountElement.textContent = `-₹${totalDiscount}`;
  if (finalAmountElement) finalAmountElement.textContent = `₹${finalAmount}`;

  // Update items selected text
  const itemsSelectedElement = document.querySelector(".items-selected");
  if (itemsSelectedElement) {
    itemsSelectedElement.textContent = `${totalQuantity} items selected for order`;
  }
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
      const selectedSizeElement = document.getElementById(
        `selectedSize-${productToUpdate.id}`
      );
      if (selectedSizeElement) {
        selectedSizeElement.textContent = tempSelectedSize; // Update visible size immediately
      }
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
        break; // Exit loop after closing one modal
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
      // Remove selected class from all buttons in the same section
      const section = this.parentElement;
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
    });
  });

  // Category selection for "You may also like"
  // First, create the category buttons dynamically
  const categoryButtons = [
    "All",
    "Shampoo",
    "Lip Balm",
    "Deodorant",
    "Roll-Ons",
  ];

  const categoryContainer = document.getElementById("youMayAlsoLikeContainer");
  if (categoryContainer) {
    categoryButtons.forEach((buttonText, index) => {
      const button = document.createElement("button");
      button.className =
        "py-2 px-4 border border-gray-300 bg-white text-gray-700 rounded-full cursor-pointer category-btn";
      button.textContent = buttonText;

      // Make the first button (All) active by default
      if (index === 0) {
        button.classList.remove("border-gray-300", "bg-white", "text-gray-700");
        button.classList.add("border-rose-500", "bg-[#FF3F6C]", "text-white");
      }

      categoryContainer.appendChild(button);
    });
  }

  // Create mobile category buttons
  const mobileCategoryContainer = document.getElementById(
    "mobileCategoryContainer"
  );
  if (mobileCategoryContainer) {
    categoryButtons.forEach((buttonText, index) => {
      const button = document.createElement("button");
      button.className =
        "py-2 px-4 border border-gray-300 bg-white text-gray-700 rounded-full text-sm whitespace-nowrap cursor-pointer category-btn mobile-category-btn";
      button.textContent = buttonText;

      // Make the first button (All) active by default
      if (index === 0) {
        button.classList.remove("border-gray-300", "bg-white", "text-gray-700");
        button.classList.add("border-rose-500", "bg-[#FF3F6C]", "text-white");
      }

      mobileCategoryContainer.appendChild(button);
    });
  }

  // Handle category button clicks
  document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active styling from all buttons
      document.querySelectorAll(".category-btn").forEach((btn) => {
        btn.classList.remove("border-rose-500", "bg-[#FF3F6C]", "text-white");
        btn.classList.add("border-gray-300", "bg-white", "text-gray-700");
      });

      // Add active styling to clicked button
      this.classList.remove("border-gray-300", "bg-white", "text-gray-700");
      this.classList.add("border-rose-500", "bg-[#FF3F6C]", "text-white");

      // Here you can add logic to filter products based on the category
      console.log("Selected category:", this.textContent);
    });
  });

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
        charCountSpan.style.color = "#ff3f6c";
      } else {
        charCountSpan.style.color = "#696e79";
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

  // Recommended Products Data for "You May Also Like" section
  const recommendedProducts = [
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
      category: "Shampoo",
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
      category: "Lip Balm",
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
      category: "Deodorant",
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
      category: "Roll-Ons",
    },
  ];

  // Function to create product card HTML
  function createProductCardHTML(item) {
    return `
      <div class="relative text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white border border-gray-200 rounded-lg">
          <!-- Product Link (excludes Add to Bag button) -->
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
                      </div>
                      <div class="border-t border-gray-200 w-[90%] mx-auto"></div>
                  </div>
              </div>
          </a>
          
          <!-- Add to Bag Button (outside product link) -->
          <div class="p-2">
              <button class="desktop-add-to-bag w-full uppercase text-[#ff3f6c] font-bold text-sm hover:text-[#ff3f6c]/80 transition-colors bg-transparent border-none cursor-pointer" data-product-id="${item.id}">Add to Bag</button>
          </div>
      </div>
  `;
  }

  // Function to create mobile product card HTML
  function createMobileProductCardHTML(item) {
    return `
      <div class="flex-shrink-0 w-44 text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white border border-gray-200 rounded-lg">
        <!-- Product Link (excludes Add to Bag button) -->
        <a href="${item.href}" class="block text-gray-800 no-underline outline-none">
          <div class="relative overflow-hidden">
            <!-- Product Image -->
            <div class="relative w-full h-52 bg-pink-50">
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
                <h3 class="text-left pl-2 font-bold text-gray-800 text-sm leading-tight whitespace-nowrap overflow-hidden text-ellipsis mb-0">
                  ${item.title}
                </h3>

                <!-- Description -->
                <h4 class="text-left pl-2 opacity-60 whitespace-nowrap overflow-hidden text-ellipsis m-0 text-xs font-normal text-gray-800 h-3">
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
          <button class="mobile-add-to-bag w-full uppercase text-[#ff3f6c] font-bold text-xs hover:text-[#ff3f6c]/80 transition-colors bg-transparent border-none cursor-pointer" data-product-id="${item.id}">Add to Bag</button>
        </div>
      </div>
    `;
  }

  // Function to render products in the desktop grid
  function renderProductGrid(productsToShow = recommendedProducts) {
    const productsGrid = document.getElementById("products-grid");
    if (!productsGrid) return;

    productsGrid.innerHTML = "";
    productsToShow.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.innerHTML = createProductCardHTML(product);
      productsGrid.appendChild(productCard);
    });

    // Add event listeners to desktop "Add to Bag" buttons
    const addToBagButtons = productsGrid.querySelectorAll(
      ".desktop-add-to-bag"
    );
    addToBagButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const productId = parseInt(this.getAttribute("data-product-id"));
        const product = recommendedProducts.find((p) => p.id === productId);

        if (product) {
          // Add visual feedback
          const originalText = this.textContent;
          this.textContent = "ADDED";
          this.classList.add("text-green-500");
          this.classList.remove("text-[#ff3f6c]", "hover:text-[#ff3f6c]/80");

          setTimeout(() => {
            this.textContent = originalText;
            this.classList.remove("text-green-500");
            this.classList.add("text-[#ff3f6c]", "hover:text-[#ff3f6c]/80");
          }, 2000);

          console.log("Added to bag from desktop:", product.title);
          // Here you could add the product to the actual cart
        }
      });
    });
  }

  // Function to render products in the mobile grid
  function renderMobileProductGrid(productsToShow = recommendedProducts) {
    const mobileProductsContainer = document.getElementById(
      "mobileProductsContainer"
    );
    if (!mobileProductsContainer) return;

    mobileProductsContainer.innerHTML = "";
    productsToShow.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.innerHTML = createMobileProductCardHTML(product);
      mobileProductsContainer.appendChild(productCard);
    });

    // Add event listeners to mobile "Add to Bag" buttons
    const mobileAddToBagButtons =
      mobileProductsContainer.querySelectorAll(".mobile-add-to-bag");
    mobileAddToBagButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const productId = parseInt(this.getAttribute("data-product-id"));
        const product = recommendedProducts.find((p) => p.id === productId);

        if (product) {
          // Add visual feedback
          const originalText = this.textContent;
          this.textContent = "ADDED";
          this.classList.add("text-green-500");
          this.classList.remove("text-[#ff3f6c]", "hover:text-[#ff3f6c]/80");

          setTimeout(() => {
            this.textContent = originalText;
            this.classList.remove("text-green-500");
            this.classList.add("text-[#ff3f6c]", "hover:text-[#ff3f6c]/80");
          }, 2000);

          console.log("Added to bag from mobile:", product.title);
          // Here you could add the product to the actual cart
        }
      });
    });
  }

  // Function to filter products by category for both desktop and mobile
  function filterProductsByCategory(category) {
    if (category === "All") {
      renderProductGrid(recommendedProducts);
      renderMobileProductGrid(recommendedProducts);
    } else {
      const filteredProducts = recommendedProducts.filter(
        (product) => product.category === category
      );
      renderProductGrid(filteredProducts);
      renderMobileProductGrid(filteredProducts);
    }
  }

  // Update category button click handler to filter products for both desktop and mobile
  document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.textContent.trim();

      // Remove active styling from all buttons (both desktop and mobile)
      document.querySelectorAll(".category-btn").forEach((btn) => {
        btn.classList.remove("border-rose-500", "bg-[#FF3F6C]", "text-white");
        btn.classList.add("border-gray-300", "bg-white", "text-gray-700");
      });

      // Add active styling to all buttons with the same category text (both desktop and mobile)
      document.querySelectorAll(".category-btn").forEach((btn) => {
        if (btn.textContent.trim() === category) {
          btn.classList.remove("border-gray-300", "bg-white", "text-gray-700");
          btn.classList.add("border-rose-500", "bg-[#FF3F6C]", "text-white");
        }
      });

      // Filter products by category for both grids
      filterProductsByCategory(category);

      console.log("Selected category:", category);
    });
  });

  // Initial render of both product grids
  renderProductGrid();
  renderMobileProductGrid();
});
