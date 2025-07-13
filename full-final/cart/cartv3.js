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

// Variables for modals
let currentProductForSizeSelection = null;
let tempSelectedSize = null; // To hold selection within modal before confirming
let currentProductIdForModal = null; // To hold ID for the "Move from Bag" modal

// ---- NEW: Functions for the "Move from Bag" Modal ----

function openMoveFromBagModal(productId) {
    currentProductIdForModal = productId;
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('moveFromBagModal');
    
    if (product && modal) {
        const modalImage = document.getElementById('modalProductImage');
        modalImage.src = product.imageUrl;
        modalImage.alt = product.name;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeMoveFromBagModal() {
    const modal = document.getElementById('moveFromBagModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
    currentProductIdForModal = null;
}
// ---- END NEW FUNCTIONS ----

// Function to generate product HTML
function createProductHTML(product, isLast = false) {
  const borderClass = isLast ? "" : "md:border md:border-gray-200";

  return `
    <div class="relative bg-white flex gap-4 p-2 ${borderClass} product-card" data-product-id="${
    product.id
  }">
      <div class="w-20 h-28 md:w-28 md:h-36 bg-gray-100 relative flex-shrink-0">
        ${
          product.imageUrl
            ? `<img src="${product.imageUrl}" alt="${product.name}" class="w-full h-full object-cover">`
            : ""
        }
      </div>
       <!-- MODIFIED: The 'x' button now opens our custom modal -->
      <button class="absolute top-2 right-2 w-5 h-5 md:w-6 md:h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer text-xs md:text-sm remove-btn" onclick="openMoveFromBagModal(${
        product.id
      })">×</button>
      <div class="flex-1 flex gap-1 flex-col gap-3">
        <div class="font-semibold text-sm md:text-base">${product.brand}</div>
        <div class="text-gray-600 leading-snug text-sm md:text-base">${
          product.name
        }</div>
        <div class="flex gap-2">
          <div class="flex items-center gap-2 bg-[#f5f5f6] px-3 font-semibold text-sm">
            <span>Size:</span>
            <span class="cursor-pointer text-teal-500" id="selectedSize-${
              product.id
            }" onclick="openProductSizeModal(${product.id})">${
    product.size
  }</span>
          </div>
          <div class="flex items-center gap-2 px-4">
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
    if (isNaN(parsedQuantity) || parsedQuantity < 1) {
      parsedQuantity = 1;
    }
    product.quantity = parsedQuantity;
    updateItemCount(); 
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
    input.value = Math.max(1, parseInt(input.value) - 1);
    updateProductQuantity(productId, input.value);
  }
}

// Function to add new product
function addProduct(productData) {
  const newProduct = {
    id: Date.now(), 
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

  const donationAmountElement = document.querySelector(".price-donation-amount");
  const platformFeeElement = document.querySelector(".price-platform-fee");

  let donationAmount = donationAmountElement ? parseInt(donationAmountElement.textContent.replace("₹", "")) : 20;
  let platformFee = platformFeeElement ? parseInt(platformFeeElement.textContent.replace("₹", "")) : 20;
  const couponDiscount = 0;
  let finalAmount = totalMRP - totalDiscount - couponDiscount + donationAmount + platformFee;

  document.querySelectorAll(".price-title").forEach(el => el.textContent = `PRICE DETAILS (${totalQuantity} Items)`);
  
  const totalMRPElement = document.querySelector(".price-total-mrp");
  if(totalMRPElement) totalMRPElement.textContent = `₹${totalMRP.toLocaleString()}`;

  const discountElement = document.querySelector("span[data-price-key='discountOnMRP']");
  if(discountElement) discountElement.textContent = `-₹${totalDiscount.toLocaleString()}`;

  const finalAmountElement = document.querySelector("span[data-price-key='totalAmount']");
  if(finalAmountElement) finalAmountElement.textContent = `₹${finalAmount.toLocaleString()}`;

  const itemsSelectedElement = document.querySelector(".items-selected");
  if (itemsSelectedElement) {
    itemsSelectedElement.textContent = `${totalQuantity} items selected for order`;
  }
}

// --- MODAL FUNCTIONS (Gift, Social Work, Product Size) ---

function openModal(modalId, animatedContentId) {
  const modal = document.getElementById(modalId);
  const content = document.getElementById(animatedContentId || modalId);
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden"; 

  setTimeout(() => {
    if (content.classList.contains("translate-y-full")) {
      content.classList.remove("translate-y-full");
    }
  }, 10);
}

function closeModal(modalId, animatedContentId) {
  const modal = document.getElementById(modalId);
  const content = document.getElementById(animatedContentId || modalId); 

  if (content) {
    content.classList.add("translate-y-full");
  }
  document.body.style.overflow = "auto";

  setTimeout(() => {
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  }, 300); 
}

function openGiftModal() { openModal("giftModal", "giftModalContent"); }
function closeGiftModal() { closeModal("giftModal", "giftModalContent"); }
function openSocialWorkModal() { openModal("socialWorkModal", "socialWorkModalContent"); }
function closeSocialWorkModal() { closeModal("socialWorkModal", "socialWorkModalContent"); }

function openProductSizeModal(productId) {
  currentProductForSizeSelection = products.find((p) => p.id === productId);
  if (!currentProductForSizeSelection) return;

  tempSelectedSize = currentProductForSizeSelection.size;
  const productInfoContainer = document.getElementById("productSizeModalProductInfo");
  const sizeOptionsContainer = document.getElementById("sizeOptionsContainer");

  productInfoContainer.innerHTML = `
    <div class="h-[80px] w-[60px] flex-shrink-0"><img src="${currentProductForSizeSelection.imageUrl}" alt="${currentProductForSizeSelection.name}" class="w-full h-full object-cover"></div>
    <div class="flex-1"><div class="text-sm font-semibold">${currentProductForSizeSelection.brand}</div><div class="text-gray-600 text-sm">${currentProductForSizeSelection.name}</div><div class="text-sm mt-1"><b>₹${currentProductForSizeSelection.price}</b> <s class="text-gray-500">₹${currentProductForSizeSelection.originalPrice}</s> <span class="text-orange-500 text-xs">${currentProductForSizeSelection.discount}% OFF</span></div></div>`;

  sizeOptionsContainer.innerHTML = currentProductForSizeSelection.availableSizes.map(size => `<div class="border rounded-md py-2 text-center cursor-pointer text-sm font-semibold ${size === currentProductForSizeSelection.size ? "bg-rose-500 text-white border-rose-500" : "bg-white text-gray-700"}" onclick="selectSizeInModal('${size}')" data-size="${size}"><div>${size}</div></div>`).join("");
  openModal("productSizeModal", "productSizeModalContent");
}

function selectSizeInModal(selectedSize) {
  tempSelectedSize = selectedSize;
  const sizeItems = document.querySelectorAll("#sizeOptionsContainer div[data-size]");
  sizeItems.forEach(item => {
    item.classList.toggle("bg-rose-500", item.dataset.size === selectedSize);
    item.classList.toggle("text-white", item.dataset.size === selectedSize);
    item.classList.toggle("border-rose-500", item.dataset.size === selectedSize);
    item.classList.toggle("bg-white", item.dataset.size !== selectedSize);
    item.classList.toggle("text-gray-700", item.dataset.size !== selectedSize);
  });
}

function confirmSizeSelection() {
  if (currentProductForSizeSelection && tempSelectedSize) {
    const productToUpdate = products.find(p => p.id === currentProductForSizeSelection.id);
    if (productToUpdate) {
      productToUpdate.size = tempSelectedSize;
      const selectedSizeElement = document.getElementById(`selectedSize-${productToUpdate.id}`);
      if (selectedSizeElement) {
        selectedSizeElement.textContent = tempSelectedSize;
      }
    }
  }
  closeModal("productSizeModal", "productSizeModalContent");
  currentProductForSizeSelection = null;
  tempSelectedSize = null;
}

// Event Listeners on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    renderProducts();

    // ---- NEW: Event Listeners for "Move from Bag" Modal ----
    const modalRemoveBtn = document.getElementById('modalRemoveButton');
    const modalMoveToWishlistBtn = document.getElementById('modalMoveToWishlistButton');
    const moveFromBagModal = document.getElementById('moveFromBagModal');

    if (modalRemoveBtn) {
        modalRemoveBtn.addEventListener('click', () => {
            if (currentProductIdForModal !== null) {
                const productIndex = products.findIndex(p => p.id === currentProductIdForModal);
                if (productIndex > -1) {
                    console.log(`Removing product ${currentProductIdForModal} from bag.`);
                    products.splice(productIndex, 1);
                    renderProducts();
                }
                closeMoveFromBagModal();
            }
        });
    }

    if (modalMoveToWishlistBtn) {
        modalMoveToWishlistBtn.addEventListener('click', () => {
            if (currentProductIdForModal !== null) {
                const productIndex = products.findIndex(p => p.id === currentProductIdForModal);
                if (productIndex > -1) {
                    console.log(`Moving product ${currentProductIdForModal} to wishlist and removing from bag.`);
                    // For now, we just remove it from the bag.
                    products.splice(productIndex, 1);
                    renderProducts();
                }
                closeMoveFromBagModal();
            }
        });
    }

    // Close modal on overlay click
    if (moveFromBagModal) {
        moveFromBagModal.addEventListener('click', (event) => {
            if (event.target === moveFromBagModal) {
                closeMoveFromBagModal();
            }
        });
    }
    // ---- END NEW LISTENERS ----

    // Universal modal closing logic
    document.addEventListener("click", function (event) {
        const closeBtn = event.target.closest("[data-modal-close]");
        if (closeBtn) {
            const modalIdToClose = closeBtn.dataset.modalClose;
            closeModal(modalIdToClose, modalIdToClose === "productSizeModal" ? "productSizeModalContent" : null);
        }
    });

    window.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            const activeModals = ["giftModal", "socialWorkModal", "productSizeModal", "moveFromBagModal"];
            activeModals.forEach(id => {
                const modal = document.getElementById(id);
                if(modal && !modal.classList.contains('hidden')) {
                    if(id === 'moveFromBagModal') closeMoveFromBagModal();
                    else closeModal(id, id + 'Content');
                }
            });
        }
    });

    window.toggleOffers = function () {
        const hiddenOffers = document.querySelectorAll(".hidden-offer");
        const toggleText = document.getElementById("toggleText");
        const arrowIcon = document.getElementById("arrowIcon");
        const isHidden = hiddenOffers[0].classList.contains("hidden");
        hiddenOffers.forEach(offer => offer.classList.toggle("hidden"));
        toggleText.textContent = isHidden ? "Show Less" : "Show More";
        arrowIcon.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
    };
});
