// DỮ LIỆU SẢN PHẨM (MENU)
const C_HUE_BANNER = "images/amthuchue.jpeg";
const C_BUN_BO = "images/bunbo.jpg";
const C_BANH_BEO = "images/banhbeo.jpeg";
const C_HUE_RES = "images/nha-hang-o-hue.webp";

const products = [
    // BÁNH HUẾ (Category: banh-hue)
    {
        id: 'p1',
        title: 'Bánh Bèo Chén (Mẹt 8 chén)',
        category: 'banh-hue',
        price: 40000,
        img: 'images/banhbeo.jpeg',
        desc: 'Những chiếc bánh nhỏ xinh trong chén sành, phủ lên trên là tôm cháy thơm lừng và mỡ hành béo ngậy.',
        rating: 4.9,
        sold: 1250,
        isBestSeller: true,
        toppings: [
            { id: 't1', name: 'Thêm tôm cháy', price: 10000 },
            { id: 't2', name: 'Thêm tóp mỡ', price: 5000 }
        ]
    },
    {
        id: 'p2',
        title: 'Bánh Bột Lọc Trần (10 cái)',
        category: 'banh-hue',
        price: 55000,
        img: 'images/banhbotloc.jpg',
        desc: 'Vỏ bánh trong suốt, dai giòn sần sật bọc lấy nhân tôm thịt đậm đà, ăn kèm nước mắm chua ngọt cay nồng.',
        rating: 4.8,
        sold: 840,
        isSpicy: true,
        toppings: []
    },
    {
        id: 'p3',
        title: 'Bánh Nậm Lá Dong (5 cái)',
        category: 'banh-hue',
        price: 40000,
        img: 'images/banhnam.jpg',
        desc: 'Bánh mỏng gói trong lá dong, thơm mùi tôm băm và bột gạo mịn màng, tan ngay trên đầu lưỡi.',
        rating: 4.7,
        sold: 620,
        toppings: []
    },
    {
        id: 'p10',
        title: 'Bánh Khoái Hoàng Cung',
        category: 'banh-hue',
        price: 45000,
        img: 'images/banhkhoai.jpg',
        desc: 'Vỏ bánh dày chiên giòn rụm, nhân tôm thịt đầy đặn, ăn cùng nước lèo tương đậu sền sệt đậm đà.',
        rating: 4.8,
        sold: 430,
        toppings: []
    },
    {
        id: 'p11',
        title: 'Bánh Xèo Miền Trung',
        category: 'banh-hue',
        price: 40000,
        img: 'images/banhxeo.jpg',
        desc: 'Vỏ bánh vàng ươm, giòn rụm bên ngoài, nhân tôm thịt và giá đỗ tươi ngon bên trong.',
        rating: 4.6,
        sold: 310,
        toppings: []
    },

    // MÓN BÚN & NƯỚC (Category: mon-chinh)
    {
        id: 'p4',
        title: 'Bún Bò Huế Đặc Biệt',
        category: 'mon-chinh',
        price: 65000,
        img: 'https://i.ytimg.com/vi/CSI9ildGX9s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxhRIyoYY7k9ZuxY0YOC9jNFLapgT',
        desc: 'Bắp bò hoa, giò heo, chả cua Huế, tiết lợn. Nước dùng chuẩn vị Cố Đô ngọt thanh từ xương ống.',
        rating: 5.0,
        sold: 2100,
        isBestSeller: true,
        isSpicy: true,
        toppings: [
            { id: 't3', name: 'Thêm chả cua', price: 15000 },
            { id: 't4', name: 'Thêm giò heo', price: 20000 }
        ]
    },
    {
        id: 'p6',
        title: 'Bún Bò Huế (Thường)',
        category: 'mon-chinh',
        price: 50000,
        img: 'images/bunbo.jpg',
        desc: 'Hương vị đậm đà đặc trưng của mắm ruốc Huế, nước dùng ngọt thanh, thịt bò mềm mọng.',
        rating: 4.8,
        sold: 1500,
        toppings: []
    },
    {
        id: 'p7',
        title: 'Bún Hến Mai Thúc Loan',
        category: 'mon-chinh',
        price: 35000,
        img: 'images/bunhen.jpg',
        desc: 'Sự kết hợp giữa nước hến ngọt thanh, vị cay nồng của ớt và rau sống tươi mát.',
        rating: 4.7,
        sold: 890,
        isSpicy: true,
        toppings: []
    },
    {
        id: 'p8',
        title: 'Bánh Canh Nam Phổ',
        category: 'mon-chinh',
        price: 40000,
        img: 'images/banhcanh.jpg',
        desc: 'Nước dùng sền sệt, vị ngọt thanh từ tôm và thịt băm, sợi bánh dai mềm đặc trưng.',
        rating: 4.8,
        sold: 560,
        toppings: []
    },

    // MÓN CƠM (Category: mon-com)
    {
        id: 'p9',
        title: 'Cơm Âm Phủ Cung Đình',
        category: 'mon-com',
        price: 60000,
        img: 'images/ComCungDinh.jpg',
        desc: 'Món cơm cung đình với 7 màu sắc từ thịt nướng, chả lụa, tôm cháy, trứng rán rạng rỡ.',
        rating: 4.9,
        sold: 420,
        toppings: []
    },
    {
        id: 'p12',
        title: 'Cơm Hến Vĩ Dạ',
        category: 'mon-com',
        price: 35000,
        img: 'images/com-hen.jpg',
        desc: 'Hến xào thơm, tóp mỡ giòn tan, lạc rang bùi béo ăn kèm nước dùng hến nóng hổi.',
        rating: 4.7,
        sold: 720,
        isSpicy: true,
        toppings: []
    },

    // ĐỒ UỐNG (Category: drink)
    {
        id: 'd1',
        title: 'Trà Cung Đình Thảo Mộc',
        category: 'drink',
        price: 15000,
        img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop',
        desc: 'Trà thảo mộc thanh nhiệt, giải độc, cực kỳ hợp khi dùng kèm món Huế cay nồng.',
        rating: 4.9,
        sold: 3000,
        toppings: []
    },
    {
        id: 'd2',
        title: 'Coca Cola Mát Lạnh',
        category: 'drink',
        price: 20000,
        img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=600&auto=format&fit=crop',
        desc: 'Nước giải khát có ga, sảng khoái tức thì.',
        rating: 4.8,
        sold: 2100,
        toppings: []
    },

    // COMBO (Category: combo)
    {
        id: 'c1',
        title: 'Combo Mộc Huế Sum Vầy',
        category: 'combo',
        price: 159000,
        oldPrice: 205000,
        img: 'images/combo.jpg',
        desc: '2 tô Bún Bò đặc biệt, 1 mẹt đủ loại Bánh Huế và 4 ly Trà thảo mộc thanh mát.',
        rating: 4.9,
        sold: 520,
        isPromo: true,
        toppings: [],
        isCombo: true
    }
];

// STATE TỒN TẠI TẠI LOCALSTORAGE
let cart = JSON.parse(localStorage.getItem('mocHueCart')) || [];
let userPoints = parseInt(localStorage.getItem('mocHuePoints')) || 0;

// THÔNG SỐ VÀ CONFIG
const COMBO_DISCOUNT_PERCENT = 10;
const COMBO_MIN_ITEMS = 3;
const FLASH_SALE_PERCENT = 15;
let isFlashSale = false;

// DOM ELEMENTS
const menuContainer = document.getElementById('menu-container');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const toastEl = document.getElementById('toast');

// BIẾN LƯU SẢN PHẨM ĐANG CHỌN CHO MODAL & ANIMATION OBSERVER
let currentProductSelected = null;
let aosObserver = null;

// ==========================================
// 1. SYSTEM INITIALIZATION & MODULE LOADER (ROUTING)
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
    // Initial load based on hash
    handleRouting();

    // Listen for hash changes
    window.addEventListener('hashchange', handleRouting);

    checkFlashSale();
    updateCartIcon();
    updatePointsDisplay();
    setupStaticEventListeners();
    setupScrollHandler();
    initAnimations();
    startCountdown();
    initActivityBadges();
});

function setupScrollHandler() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

async function handleRouting() {
    // Get route from hash, default to 'home'
    let route = window.location.hash.slice(1) || 'home';

    // Map 'home' to 'hero' module file
    const moduleName = route === 'home' ? 'hero' : route;

    const appContent = document.getElementById('app-content');

    // Show loader
    appContent.innerHTML = `
        <div class="loader-container" style="text-align: center; padding: 100px 0; opacity: 0; animation: fadeIn 0.4s forwards;">
            <i class="fa-solid fa-spinner fa-spin" style="font-size: 3rem; color: var(--primary-color);"></i>
            <p style="margin-top: 20px; font-family: var(--font-heading);">Đang mở không gian ${route.toUpperCase()}...</p>
        </div>
    `;

    try {
        const response = await fetch(`./modules/${moduleName}.html`);
        if (!response.ok) throw new Error('Module not found');

        const html = await response.text();

        // Update content with transition
        appContent.style.opacity = '0';
        setTimeout(() => {
            appContent.innerHTML = html;
            appContent.style.opacity = '1';

            // Re-initialize dynamic content if needed
            if (route === 'menu' || route === 'home') {
                const initialCat = route === 'menu' ? 'all' : 'banh-hue';
                renderMenu(initialCat);
                if (route === 'menu') setupDynamicEventListeners(); 
            }

            // Always initialize animations for ANY newly loaded content
            initAnimations();
            
            // Highlight active link
            updateActiveLink(route);
            
            window.scrollTo(0, 0);
        }, 200);

    } catch (err) {
        console.error(`Error loading module ${moduleName}:`, err);
        appContent.innerHTML = `<div class="container py-5 text-center"><h3>Xin lỗi, trang này đang được cập nhật.</h3><a href="#home" class="btn btn-primary mt-3">Quay lại trang chủ</a></div>`;
    }
}

function updateActiveLink(route) {
    document.querySelectorAll('.desktop-nav a, .mobile-link').forEach(link => {
        const href = link.getAttribute('href').slice(1);
        if (href === route) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Separate permanent listeners from module-specific ones
function setupStaticEventListeners() {
    // Cart open/close
    const openCart = () => {
        renderCart();
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('show');
    };
    const closeCart = () => {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('show');
    };

    window.toggleCart = openCart;

    const cartTog = document.getElementById('cart-toggle');
    if (cartTog) cartTog.addEventListener('click', openCart);

    const closeBtn = document.getElementById('close-cart');
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    // Modals Close
    const closeModalElements = (pid, overlayId) => {
        const ov = document.getElementById(overlayId);
        const modal = document.getElementById(pid);
        if (ov) ov.classList.remove('show');
        if (modal) modal.classList.remove('show');
    };

    const closePM = document.getElementById('close-product-modal');
    if (closePM) closePM.addEventListener('click', () => closeModalElements('product-modal', 'product-modal-overlay'));
    
    const pmOverlay = document.getElementById('product-modal-overlay');
    if (pmOverlay) pmOverlay.addEventListener('click', () => closeModalElements('product-modal', 'product-modal-overlay'));

    const closeCheck = document.getElementById('close-checkout-modal');
    if (closeCheck) closeCheck.addEventListener('click', () => closeModalElements('checkout-modal', 'checkout-modal-overlay'));
    
    const checkOverlay = document.getElementById('checkout-modal-overlay');
    if (checkOverlay) checkOverlay.addEventListener('click', () => closeModalElements('checkout-modal', 'checkout-modal-overlay'));

    // Open Checkout
    const btnCheck = document.getElementById('btn-checkout');
    if (btnCheck) {
        btnCheck.addEventListener('click', () => {
            if (cart.length === 0) return;
            renderCart(); // Ensure latest totals
            document.getElementById('checkout-modal-overlay').classList.add('show');
            document.getElementById('checkout-modal').classList.add('show');
        });
    }

    // Checkout Delivery Address Toggle & Submit
    const checkForm = document.getElementById('checkout-form');
    if (checkForm) checkForm.addEventListener('submit', submitCheckout);
    
    document.querySelectorAll('input[name="delivery_type"]').forEach(rad => {
        rad.addEventListener('change', (e) => {
            const ag = document.getElementById('address-group');
            if (ag) ag.style.display = e.target.value === 'delivery' ? 'block' : 'none';
        });
    });

    // Mobile Menu Toggle
    const mobBtn = document.getElementById('mobile-menu-btn');
    if (mobBtn) {
        mobBtn.addEventListener('click', () => {
            document.getElementById('mobile-nav').classList.toggle('open');
        });
    }
    
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.getElementById('mobile-nav');
            if (nav) nav.classList.remove('open');
        });
    });

    // Quantity controls inside modal
    const qPlus = document.getElementById('qty-plus');
    if (qPlus) {
        qPlus.addEventListener('click', () => {
            let ipt = document.getElementById('qty-input');
            if (ipt) {
                ipt.value = parseInt(ipt.value) + 1;
                updateModalPrice();
            }
        });
    }

    const qMinus = document.getElementById('qty-minus');
    if (qMinus) {
        qMinus.addEventListener('click', () => {
            let ipt = document.getElementById('qty-input');
            if (ipt && parseInt(ipt.value) > 1) {
                ipt.value = parseInt(ipt.value) - 1;
                updateModalPrice();
            }
        });
    }

    const addBtn = document.getElementById('btn-add-to-cart');
    if (addBtn) addBtn.addEventListener('click', addToCart);
}

function setupDynamicEventListeners() {
    // Menu Tabs (These are inside the dynamically loaded menu.html)
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnEl = e.currentTarget;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btnEl.classList.add('active');
            renderMenu(btnEl.dataset.category);
        });
    });
}

// ==========================================
// 2. NGHIỆP VỤ FLASH SALE (GOLDEN HOUR)
// ==========================================
function checkFlashSale() {
    const d = new Date();
    const hour = d.getHours();
    if ((hour >= 11 && hour < 14) || (hour >= 16 && hour < 19)) {
        isFlashSale = true;
        const msg = document.getElementById('flash-sale-msg');
        if (msg) msg.innerHTML = `<i class="fa-solid fa-bolt text-yellow"></i> Đang diễn ra FLASH SALE (-${FLASH_SALE_PERCENT}% toàn menu)`;
        const banner = document.getElementById('cart-flash-sale');
        if (banner) banner.style.display = 'block';
    } else {
        isFlashSale = false;
        const banner = document.getElementById('cart-flash-sale');
        if (banner) banner.style.display = 'none';
        const msg = document.getElementById('flash-sale-msg');
        if (msg) msg.innerHTML = `<i class="fa-solid fa-clock text-yellow"></i> Sẵn sàng cho khung giờ vàng tiếp theo!`;
    }
}

function startCountdown() {
    const timerEl = document.getElementById('flash-countdown');
    if (!timerEl) return;

    function updateTimer() {
        const now = new Date();
        const hour = now.getHours();
        let targetHour;

        if (hour < 14) targetHour = 14;
        else if (hour < 19) targetHour = 19;
        else targetHour = 11; // Next day morning range

        let target = new Date();
        if (targetHour === 11 && hour >= 19) target.setDate(target.getDate() + 1);
        target.setHours(targetHour, 0, 0, 0);

        const diff = target - now;
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        timerEl.innerHTML = `${h.toString().padStart(2, '0')}h : ${m.toString().padStart(2, '0')}m : ${s.toString().padStart(2, '0')}s`;
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

function initActivityBadges() {
    // Random activity badges to simulate social proof
    const items = document.querySelectorAll('.featured-item');
    items.forEach(item => {
        const badge = document.createElement('div');
        badge.className = 'activity-badge';
        const views = Math.floor(Math.random() * 30) + 10;
        badge.innerHTML = `🔥 ${views} người đang xem`;
        item.appendChild(badge);
    });
}

// ==========================================
// 3. HIỂN THỊ THỰC ĐƠN
// ==========================================
function renderMenu(category) {
    const container = document.getElementById('menu-container');
    if (!container) return;

    // Default to 'banh-hue' if no category provided to ensure landing experience is full
    const activeCategory = category || 'banh-hue';
    const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);
    
    container.innerHTML = filtered.map(p => {
        const isFlashSaleActive = isFlashSale;
        const currentPrice = isFlashSaleActive ? p.price * (1 - FLASH_SALE_PERCENT / 100) : p.price;
        const displayOldPrice = p.oldPrice || (isFlashSaleActive ? p.price : null);
        const cartItem = cart.find(i => i.productId === p.id);
        const qtyInCart = cartItem ? cartItem.qty : 0;

        return `
            <div class="menu-item" data-aos="fade-up">
                <div class="item-badge-container">
                    ${p.isBestSeller ? '<span class="badge-tag badge-best-seller">🔥 Top 1 Bán chạy</span>' : ''}
                    ${p.isPromo || isFlashSaleActive ? '<span class="badge-tag badge-promo">🧧 Ưu đãi hời</span>' : ''}
                    ${p.isSpicy ? '<span class="badge-tag badge-spicy">🌶️ Cay nhẹ</span>' : ''}
                </div>
                <div class="item-img-box" onclick="openProductModal('${p.id}')">
                    <img src="${p.img}" alt="${p.title}" loading="lazy">
                </div>
                <div class="item-content">
                    <div class="item-rating-row">
                        <div class="item-rating"><i class="fa-solid fa-star"></i> ${p.rating}</div>
                        <div class="item-sold">Đã bán ${p.sold}+</div>
                    </div>
                    <h3 class="item-title" onclick="openProductModal('${p.id}')">${p.title}</h3>
                    <p class="item-desc">${p.desc}</p>
                    <div class="item-footer">
                        <div class="price-box">
                            ${displayOldPrice ? `<span class="old-price">${formatVND(displayOldPrice)}</span>` : ''}
                            <span class="new-price">${formatVND(currentPrice)}</span>
                        </div>
                        <div class="action-box">
                            ${qtyInCart > 0 ? `
                                <div class="quick-add">
                                    <button class="qa-btn" onclick="quickQty('${p.id}', -1)">-</button>
                                    <span class="qa-num">${qtyInCart}</span>
                                    <button class="qa-btn" onclick="quickQty('${p.id}', 1)">+</button>
                                </div>
                            ` : `
                                <button class="btn-buy-now" onclick="openProductModal('${p.id}')">
                                    <i class="fa-solid fa-plus"></i> Chọn
                                </button>
                            `}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // CRITICAL: Re-initialize animations for the newly added elements
    initAnimations();
}

function quickQty(productId, delta) {
    const itemIndex = cart.findIndex(i => i.productId === productId);
    if (itemIndex > -1) {
        cart[itemIndex].qty += delta;
        if (cart[itemIndex].qty <= 0) cart.splice(itemIndex, 1);
    } else if (delta > 0) {
        const prod = products.find(p => p.id === productId);
        cart.push({
            cartId: 'item_' + Date.now(),
            productId: prod.id,
            title: prod.title,
            img: prod.img,
            basePrice: prod.price,
            toppingsTotal: 0,
            toppings: [],
            qty: 1
        });
    }
    saveCart();
    
    // Safety check for active tab before re-rendering
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
        renderMenu(activeTab.dataset.category);
    } else {
        // Fallback for home page or if no tab active
        const menuContainer = document.getElementById('menu-container');
        if (menuContainer) renderMenu('banh-hue');
    }
}

// ==========================================
// 4. CHỨC NĂNG CHỌN SẢN PHẨM & TOPPING
// ==========================================
function openProductModal(id) {
    const product = products.find(p => p.id === id);
    currentProductSelected = product;

    document.getElementById('modal-title').innerText = product.title;
    document.getElementById('modal-img').src = product.img;
    document.getElementById('modal-desc').innerText = product.desc;

    let basePrice = product.price;
    if (isFlashSale) basePrice = basePrice * (100 - FLASH_SALE_PERCENT) / 100;

    document.getElementById('modal-price').innerText = formatVND(basePrice);
    document.getElementById('qty-input').value = 1;

    const tpContainer = document.getElementById('toppings-container');
    const tpList = document.getElementById('toppings-list');

    if (product.toppings && product.toppings.length > 0) {
        tpContainer.style.display = 'block';
        let tpHtml = '';
        product.toppings.forEach(t => {
            tpHtml += `
                <label class="topping-item">
                    <div class="custom-checkbox">
                        <input type="checkbox" class="topping-cb" data-id="${t.id}" data-price="${t.price}" data-name="${t.name}">
                        <span>${t.name}</span>
                    </div>
                    <span>+${formatVND(t.price)}</span>
                </label>
            `;
        });
        tpList.innerHTML = tpHtml;
        document.querySelectorAll('.topping-cb').forEach(cb => {
            cb.addEventListener('change', updateModalPrice);
        });
    } else {
        tpContainer.style.display = 'none';
        tpList.innerHTML = '';
    }
    updateModalPrice();
    showCrossSell(product.category);
    document.getElementById('product-modal-overlay').classList.add('show');
    document.getElementById('product-modal').classList.add('show');
}

function showCrossSell(category) {
    const csContainer = document.getElementById('cross-sell-item');
    // Simple logic: If buying main dish, suggest drink. If buying cake, suggest bigger tray.
    let suggest = category === 'mon-chinh' ? products.find(p => p.id === 'p1') : products.find(p => p.id === 'p4');
    if(!suggest) return;
    
    csContainer.innerHTML = `
        <img src="${suggest.img}" style="width:40px;height:40px;border-radius:4px;">
        <div>
            <div style="font-size:0.8rem; font-weight:bold;">${suggest.title}</div>
            <div style="font-size:0.7rem; color:var(--accent-red);">${formatVND(suggest.price)}</div>
        </div>
        <button class="btn btn-primary btn-sm ms-auto" style="padding:2px 8px; font-size:0.7rem;" onclick="openProductModal('${suggest.id}')">Thêm</button>
    `;
}

function updateModalPrice() {
    if (!currentProductSelected) return;
    let basePrice = currentProductSelected.price;
    if (isFlashSale) basePrice = basePrice * (100 - FLASH_SALE_PERCENT) / 100;
    let toppingsTotal = 0;
    document.querySelectorAll('.topping-cb:checked').forEach(cb => {
        toppingsTotal += parseInt(cb.dataset.price);
    });
    let qty = parseInt(document.getElementById('qty-input').value);
    let total = (basePrice + toppingsTotal) * qty;
    document.getElementById('modal-total-price').innerText = formatVND(total);
}

// ==========================================
// 5. GIỎ HÀNG (CART) LOGIC
// ==========================================
let lastAddedCartId = null;

function addToCart() {
    const qty = parseInt(document.getElementById('qty-input').value);
    let toppings = [];
    let toppingsTotal = 0;
    document.querySelectorAll('.topping-cb:checked').forEach(cb => {
        toppings.push({ name: cb.dataset.name, price: parseInt(cb.dataset.price) });
        toppingsTotal += parseInt(cb.dataset.price);
    });
    
    let basePrice = currentProductSelected.price;
    if (isFlashSale) basePrice = basePrice * (100 - FLASH_SALE_PERCENT) / 100;

    const cartId = 'item_' + Date.now();
    lastAddedCartId = cartId;

    const cartItem = {
        cartId: cartId,
        productId: currentProductSelected.id,
        title: currentProductSelected.title,
        img: currentProductSelected.img,
        basePrice: basePrice,
        toppingsTotal: toppingsTotal,
        toppings: toppings,
        qty: qty
    };
    cart.push(cartItem);
    saveCart();
    
    showToast(`Đã thêm ${qty} ${currentProductSelected.title} vào giỏ!`);
    
    // Auto-open drawer
    const cartDrawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (cartDrawer) {
        cartDrawer.classList.add('open');
        if (overlay) overlay.classList.add('show');
    }

    document.getElementById('product-modal-overlay').classList.remove('show');
    document.getElementById('product-modal').classList.remove('show');

    // Trigger Upsell after a small delay
    setTimeout(() => { triggerUpsell(currentProductSelected); }, 600);
}

function addToCartDirect(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    lastAddedCartId = 'item_' + Date.now();
    cart.push({
        cartId: lastAddedCartId,
        productId: product.id,
        title: product.title,
        img: product.img,
        basePrice: product.price,
        toppingsTotal: 0,
        toppings: [],
        qty: 1
    });
    saveCart();
    showToast(`Đã thêm ${product.title} vào giỏ!`);
}

function saveCart() {
    localStorage.setItem('mocHueCart', JSON.stringify(cart));
    updateCartIcon();
    renderCart();
    
    // Refresh the menu grid if it exists to update "Quick Add" quantities
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
        renderMenu(activeTab.dataset.category);
    } else if (document.getElementById('menu-container')) {
        // Fallback for home hero section
        renderMenu('banh-hue'); 
    }

    const cartBtn = document.getElementById('floating-cart-summary');
    if (cartBtn) {
        cartBtn.style.animation = 'none';
        setTimeout(() => cartBtn.style.animation = 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 10);
    }
}

function updateCartIcon() {
    let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    let totalPrice = cart.reduce((sum, item) => sum + ((item.basePrice + item.toppingsTotal) * item.qty), 0);
    
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) cartCountEl.innerText = totalItems;
    


    // Sync Floating Cart
    const floatingCount = document.getElementById('floating-cart-badge');
    if (floatingCount) floatingCount.innerText = totalItems;
    const floatingTotal = document.getElementById('floating-cart-total');
    if (floatingTotal) floatingTotal.innerText = formatVND(totalPrice);
    
    const floatingBox = document.getElementById('floating-cart-summary');
    if (floatingBox) {
        floatingBox.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// ==========================================
// UPSELL FLOW
// ==========================================
function triggerUpsell(mainItem) {
    if (mainItem.category === 'combo' || mainItem.id === 'drink1') return; // Don't upsell on combos or if already a drink
    
    const upsellModal = document.getElementById('upsell-modal');
    const upsellOverlay = document.getElementById('upsell-modal-overlay');
    const upsellTarget = document.getElementById('upsell-target');
    
    // Suggest a drink
    const drink = { id: 'drink1', title: 'Trà Cung Đình Thảo Mộc', price: 15000, img: 'https://images.unsplash.com/photo-1544787210-2213d4b999b1?q=80&w=200&auto=format&fit=crop' };
    
    upsellTarget.innerHTML = `
        <div class="p-3 bg-light rounded d-flex align-items-center gap-3" style="border: 2px dashed var(--primary-color);">
            <img src="${drink.img}" style="width:60px; height:60px; border-radius:8px; object-fit:cover;">
            <div class="text-start">
                <div class="font-bold">${drink.title}</div>
                <div class="text-red font-bold">${formatVND(drink.price)}</div>
            </div>
        </div>
    `;
    
    document.getElementById('btn-upsell-add').onclick = () => {
        cart.push({
            cartId: 'upsell_' + Date.now(),
            productId: drink.id,
            title: drink.title,
            img: drink.img,
            basePrice: drink.price,
            toppingsTotal: 0,
            toppings: [],
            qty: 1
        });
        saveCart();
        showToast("Tuyệt vời! Đã thêm Trà vào giỏ.");
        closeUpsell();
    };

    upsellModal.classList.add('show');
    upsellOverlay.classList.add('show');
    
    // Auto close after 8 seconds if no action
    setTimeout(closeUpsell, 8000);
}

function closeUpsell() {
    const upsellModal = document.getElementById('upsell-modal');
    const upsellOverlay = document.getElementById('upsell-modal-overlay');
    if (upsellModal) upsellModal.classList.remove('show');
    if (upsellOverlay) upsellOverlay.classList.remove('show');
}

function renderCart() {
    const itemsContainer = document.getElementById('cart-items');
    if (!itemsContainer) return;
    itemsContainer.innerHTML = '';

    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="text-center text-gray py-5">
                <i class="fa-solid fa-basket-shopping mb-3" style="font-size:3.5rem; opacity:0.3"></i>
                <br>Giỏ hàng đang trống.<br>Hãy thêm món ngon vào nhé!
            </div>
        `;
        document.getElementById('cart-subtotal').innerText = '0đ';
        document.getElementById('cart-total').innerText = '0đ';
        document.getElementById('discount-wrapper').style.display = 'none';
        return;
    }

    let subtotal = 0;
    cart.forEach(item => {
        let itemSum = (item.basePrice + item.toppingsTotal) * item.qty;
        subtotal += itemSum;
        let toppingStr = item.toppings.map(t => t.name).join(', ');
        const isNew = item.cartId === lastAddedCartId;
        
        itemsContainer.innerHTML += `
            <div class="cart-item py-3 ${isNew ? 'highlight-new' : ''}" style="border-bottom: 1px solid #eee;">
                <img src="${item.img}" class="cart-item-img" style="width:70px; height:70px">
                <div class="cart-item-details ps-3">
                    <div class="cart-item-title font-bold text-dark">${item.title}</div>
                    <div class="cart-item-price text-primary">${formatVND(item.basePrice + item.toppingsTotal)} x ${item.qty}</div>
                    ${toppingStr ? `<div class="cart-item-toppings text-gray small">🥗 ${toppingStr}</div>` : ''}
                    <div class="d-flex align-items-center mt-2">
                        <div class="cart-qty-ctrl-modern">
                            <button onclick="changeCartQty('${item.cartId}', -1)">-</button>
                            <span>${item.qty}</span>
                            <button onclick="changeCartQty('${item.cartId}', 1)">+</button>
                        </div>
                        <button class="btn-remove-item ms-auto" onclick="removeCartItem('${item.cartId}')">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    // Clean highlight after rendering
    setTimeout(() => { lastAddedCartId = null; }, 2000);

    // Shipping Progress
    const FREE_SHIP = 200000;
    let diff = FREE_SHIP - subtotal;
    const shipProgressEl = document.getElementById('ship-progress');
    if (shipProgressEl) {
        if (diff > 0) {
            shipProgressEl.innerHTML = `Mua thêm <b>${formatVND(diff)}</b> để được FreeShip 🚚`;
            shipProgressEl.className = 'ship-not-reached';
        } else {
            shipProgressEl.innerHTML = `Mộc Huế đang kỉ niệm ngày thành lập.<br>Bạn đã đủ điều kiện <b>FreeShip</b> 🎉`;
            shipProgressEl.className = 'ship-reached';
        }
    }

    // Upsell Banner inside cart (suggest drink if missing)
    const hasDrink = cart.some(i => i.productId === 'p7' || i.productId === 'd1');
    if (!hasDrink) {
        itemsContainer.innerHTML += `
            <div class="cart-upsell-banner mt-3 p-3 rounded" style="background:#fff9f9; border: 1px solid #ffebeb;">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=200" style="width:40px;height:40px;border-radius:6px;object-fit:cover">
                        <div>
                            <div class="small font-bold">Thêm ngay Trà Cung Đình</div>
                            <div class="text-red small">+15.000đ</div>
                        </div>
                    </div>
                    <button class="btn btn-sm btn-danger px-3 rounded-pill" onclick="addToCartDirect('d1')">Thêm</button>
                </div>
            </div>
        `;
    }

    // Totals logic (simplified and clear)
    let discountPercent = isFlashSale ? 0 : 0.15; // 15% discount for demo if not flash sale
    let discountAmount = subtotal * discountPercent;
    let finalTotal = subtotal - discountAmount;

    document.getElementById('cart-subtotal').innerText = formatVND(subtotal);
    const discWrapper = document.getElementById('discount-wrapper');
    const discText = document.getElementById('cart-discount');
    if (discountAmount > 0) {
        discWrapper.style.display = 'flex';
        discText.innerText = `-${formatVND(discountAmount)}`;
    } else {
        discWrapper.style.display = 'none';
    }

    document.getElementById('cart-total').innerText = formatVND(finalTotal);
    
    // Sync to checkout modal too
    const chTotal = document.getElementById('checkout-final-total');
    if (chTotal) chTotal.innerText = formatVND(finalTotal);

    // Update CTA text directly
    const mainBtn = document.querySelector('.btn-checkout-primary');
    if (mainBtn) mainBtn.innerHTML = `Xác Nhận Đặt Hàng - <span class="ms-1">${formatVND(finalTotal)}</span>`;
}

function changeCartQty(cartId, delta) {
    let item = cart.find(i => i.cartId === cartId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) removeCartItem(cartId);
        else saveCart();
    }
}

function removeCartItem(cartId) {
    cart = cart.filter(i => i.cartId !== cartId);
    saveCart();
}

function showToast(msg) {
    const toastEl = document.getElementById('toast');
    if (!toastEl) return;
    toastEl.innerText = msg;
    toastEl.classList.add('show');
    setTimeout(() => { toastEl.classList.remove('show'); }, 3000);
}

// ==========================================
// 6. CHECKOUT & TÍCH ĐIỂM
// ==========================================
function submitCheckout(e) {
    e.preventDefault();
    if (cart.length === 0) return;
    const name = document.getElementById('cust-name').value;
    showToast(`Cảm ơn ${name}! Đơn hàng đang được xử lý.`);
    let finalTotalStr = document.getElementById('checkout-final-total').innerText.replace(/\D/g, '');
    let pointsAdded = Math.floor(parseInt(finalTotalStr) * 0.05);
    userPoints += pointsAdded;
    localStorage.setItem('mocHuePoints', userPoints);
    updatePointsDisplay();
    cart = [];
    saveCart();
    document.getElementById('checkout-modal-overlay').classList.remove('show');
    document.getElementById('checkout-modal').classList.remove('show');
    document.getElementById('cart-drawer').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('show');
}

function updatePointsDisplay() {
    const display = document.getElementById('user-points-display');
    if (display) display.innerText = formatVND(userPoints).replace('đ', '');
}

function formatVND(n) {
    return (n || 0).toLocaleString('vi-VN') + 'đ';
}

function initAnimations() {
    if (!aosObserver) {
        aosObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-init');
                }
            });
        }, { threshold: 0.1 });
    }
    
    // Observe ALL elements with data-aos that haven't been initialized yet
    document.querySelectorAll('[data-aos]:not(.aos-init)').forEach(el => aosObserver.observe(el));
}

// Analytics Placeholder
function trackEvent(name, data) {
    console.log(`[Tracking] Event: ${name}`, data);
    // window.gtag('event', name, data);
}
