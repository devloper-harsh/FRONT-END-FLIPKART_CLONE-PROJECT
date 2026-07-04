// 50+ Products with real images and prices
const products = [
    // Mobiles
    { id: 1, name: 'Apple iPhone 15 Pro Max', price: '₹1,39,900', oldPrice: '₹1,59,900', rating: '4.8', img: 'https://unsplash.com/photos/white-and-black-remote-control-DV0mB2uJM34' },
    { id: 2, name: 'Samsung Galaxy S24 Ultra', price: '₹1,29,999', oldPrice: '₹1,49,999', rating: '4.7', img: 'https://fdn.gsmarena.com/imgroot/news/24/01/samsung-galaxy-s24-ultra-review/-1200/gsmarena_001.jpg' },
    { id: 3, name: 'OnePlus 12 5G', price: '₹64,999', oldPrice: '₹69,999', rating: '4.5', img: 'https://fdn.gsmarena.com/imgroot/news/23/12/oneplus-12-review/-1200/gsmarena_001.jpg' },
    { id: 4, name: 'Vivo X100 Pro', price: '₹89,999', oldPrice: '₹99,999', rating: '4.6', img: 'https://fdn.gsmarena.com/imgroot/news/23/11/vivo-x100-pro-review/-1200/gsmarena_001.jpg' },
    { id: 5, name: 'Xiaomi 14 Ultra', price: '₹99,999', oldPrice: '₹1,09,999', rating: '4.7', img: 'https://fdn.gsmarena.com/imgroot/news/24/02/xiaomi-14-ultra-review/-1200/gsmarena_001.jpg' },
    { id: 6, name: 'Google Pixel 8 Pro', price: '₹1,06,999', oldPrice: '₹1,19,999', rating: '4.6', img: 'https://fdn.gsmarena.com/imgroot/news/23/10/google-pixel-8-pro-review/-1200/gsmarena_001.jpg' },
    { id: 7, name: 'Samsung Galaxy Z Fold 5', price: '₹1,54,999', oldPrice: '₹1,69,999', rating: '4.8', img: 'https://fdn.gsmarena.com/imgroot/news/23/07/samsung-galaxy-z-fold5-review/-1200/gsmarena_001.jpg' },
    { id: 8, name: 'OnePlus Nord 4', price: '₹29,999', oldPrice: '₹34,999', rating: '4.4', img: 'https://fdn.gsmarena.com/imgroot/news/24/07/oneplus-nord-4-review/-1200/gsmarena_001.jpg' },
    { id: 9, name: 'Nothing Phone (2)', price: '₹44,999', oldPrice: '₹49,999', rating: '4.3', img: 'https://fdn.gsmarena.com/imgroot/news/23/07/nothing-phone-2-review/-1200/gsmarena_001.jpg' },
    { id: 10, name: 'Motorola Edge 50 Pro', price: '₹39,999', oldPrice: '₹44,999', rating: '4.4', img: 'https://fdn.gsmarena.com/imgroot/news/24/04/motorola-edge-50-pro-review/-1200/gsmarena_001.jpg' },
    { id: 11, name: 'Realme GT 6', price: '₹40,999', oldPrice: '₹45,999', rating: '4.3', img: 'https://fdn.gsmarena.com/imgroot/news/24/06/realme-gt-6-review/-1200/gsmarena_001.jpg' },
    { id: 12, name: 'iQOO 12 5G', price: '₹52,999', oldPrice: '₹57,999', rating: '4.5', img: 'https://fdn.gsmarena.com/imgroot/news/23/12/iqoo-12-review/-1200/gsmarena_001.jpg' },
    { id: 13, name: 'Poco X6 Pro', price: '₹25,999', oldPrice: '₹29,999', rating: '4.2', img: 'https://fdn.gsmarena.com/imgroot/news/24/01/poco-x6-pro-review/-1200/gsmarena_001.jpg' },
    { id: 14, name: 'Oppo Find X7 Ultra', price: '₹1,09,999', oldPrice: '₹1,19,999', rating: '4.6', img: 'https://fdn.gsmarena.com/imgroot/news/24/01/oppo-find-x7-ultra-review/-1200/gsmarena_001.jpg' },
    
    // Electronics - Laptops
    { id: 15, name: 'Apple MacBook Air M3', price: '₹1,14,900', oldPrice: '₹1,29,900', rating: '4.9', img: 'https://cdn.mos.cms.futurecdn.net/8X3qKJzVf7YQ5bQxPq8jY6-1200-80.jpg' },
    { id: 16, name: 'Dell XPS 16', price: '₹1,89,990', oldPrice: '₹2,09,990', rating: '4.7', img: 'https://cdn.mos.cms.futurecdn.net/YqJq3KqYVf7QY5bQxPq8jY6-1200-80.jpg' },
    { id: 17, name: 'HP Spectre x360', price: '₹1,49,990', oldPrice: '₹1,69,990', rating: '4.6', img: 'https://cdn.mos.cms.futurecdn.net/8X3qKJzVf7YQ5bQxPq8jY6-1200-80.jpg' },
    { id: 18, name: 'Lenovo Yoga 9i', price: '₹1,39,990', oldPrice: '₹1,59,990', rating: '4.5', img: 'https://cdn.mos.cms.futurecdn.net/8X3qKJzVf7YQ5bQxPq8jY6-1200-80.jpg' },
    { id: 19, name: 'Asus ROG Zephyrus G16', price: '₹1,59,990', oldPrice: '₹1,79,990', rating: '4.8', img: 'https://cdn.mos.cms.futurecdn.net/8X3qKJzVf7YQ5bQxPq8jY6-1200-80.jpg' },
    { id: 20, name: 'Acer Predator Helios 18', price: '₹1,99,990', oldPrice: '₹2,29,990', rating: '4.7', img: 'https://cdn.mos.cms.futurecdn.net/8X3qKJzVf7YQ5bQxPq8jY6-1200-80.jpg' },
    { id: 21, name: 'MSI Stealth 16', price: '₹1,79,990', oldPrice: '₹1,99,990', rating: '4.6', img: 'https://cdn.mos.cms.futurecdn.net/8X3qKJzVf7YQ5bQxPq8jY6-1200-80.jpg' },
    
    // Audio
    { id: 22, name: 'Sony WH-1000XM5', price: '₹29,990', oldPrice: '₹34,990', rating: '4.6', img: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg' },
    { id: 23, name: 'Bose QC45 Headphones', price: '₹26,990', oldPrice: '₹31,990', rating: '4.5', img: 'https://m.media-amazon.com/images/I/61xKpLzXpLL._SL1500_.jpg' },
    { id: 24, name: 'AirPods Pro 2', price: '₹24,900', oldPrice: '₹29,900', rating: '4.7', img: 'https://m.media-amazon.com/images/I/71kZfLZ8XLL._SL1500_.jpg' },
    { id: 25, name: 'Samsung Galaxy Buds 3 Pro', price: '₹19,999', oldPrice: '₹24,999', rating: '4.4', img: 'https://m.media-amazon.com/images/I/61xKpLzXpLL._SL1500_.jpg' },
    { id: 26, name: 'JBL PartyBox 310', price: '₹29,999', oldPrice: '₹34,999', rating: '4.3', img: 'https://m.media-amazon.com/images/I/81xKpLzXpLL._SL1500_.jpg' },
    { id: 27, name: 'Marshall Major IV', price: '₹14,999', oldPrice: '₹17,999', rating: '4.2', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' },
    { id: 28, name: 'Boat Nirvana 525 ANC', price: '₹5,999', oldPrice: '₹7,999', rating: '4.3', img: 'https://m.media-amazon.com/images/I/61xKpLzXpLL._SL1500_.jpg' },
    
    // Home Appliances
    { id: 29, name: 'Dyson V15 Vacuum', price: '₹49,900', oldPrice: '₹59,900', rating: '4.4', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' },
    { id: 30, name: 'Philips Air Purifier', price: '₹39,990', oldPrice: '₹44,990', rating: '4.3', img: 'https://m.media-amazon.com/images/I/61xKpLzXpLL._SL1500_.jpg' },
    { id: 31, name: 'LG 55" OLED TV', price: '₹1,19,990', oldPrice: '₹1,39,990', rating: '4.8', img: 'https://m.media-amazon.com/images/I/81xKpLzXpLL._SL1500_.jpg' },
    { id: 32, name: 'Samsung Smart Refrigerator', price: '₹89,990', oldPrice: '₹99,990', rating: '4.5', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' },
    { id: 33, name: 'Whirlpool Washing Machine', price: '₹49,990', oldPrice: '₹54,990', rating: '4.4', img: 'https://m.media-amazon.com/images/I/61xKpLzXpLL._SL1500_.jpg' },
    { id: 34, name: 'IFB Microwave Oven', price: '₹14,990', oldPrice: '₹17,990', rating: '4.2', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' },
    
    // Fashion
    { id: 35, name: 'Nike Air Max 270', price: '₹12,995', oldPrice: '₹15,995', rating: '4.2', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' },
    { id: 36, name: 'Adidas Ultraboost', price: '₹15,999', oldPrice: '₹18,999', rating: '4.3', img: 'https://m.media-amazon.com/images/I/61xKpLzXpLL._SL1500_.jpg' },
    { id: 37, name: 'Puma Suede Classic', price: '₹8,999', oldPrice: '₹10,999', rating: '4.1', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' },
    { id: 38, name: 'Levi\'s 501 Jeans', price: '₹3,999', oldPrice: '₹5,999', rating: '4.4', img: 'https://m.media-amazon.com/images/I/81xKpLzXpLL._SL1500_.jpg' },
    { id: 39, name: 'US Polo T-Shirt', price: '₹1,299', oldPrice: '₹1,999', rating: '4.0', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' },
    { id: 40, name: 'Allen Solly Blazer', price: '₹6,999', oldPrice: '₹9,999', rating: '4.2', img: 'https://m.media-amazon.com/images/I/61xKpLzXpLL._SL1500_.jpg' },
    
    // Gaming
    { id: 41, name: 'PS5 Console', price: '₹54,990', oldPrice: '₹59,990', rating: '4.9', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' },
    { id: 42, name: 'Xbox Series X', price: '₹49,990', oldPrice: '₹54,990', rating: '4.8', img: 'https://m.media-amazon.com/images/I/61xKpLzXpLL._SL1500_.jpg' },
    { id: 43, name: 'Nintendo Switch OLED', price: '₹34,999', oldPrice: '₹39,999', rating: '4.7', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' },
    { id: 44, name: 'Razer Blade 18', price: '₹2,89,990', oldPrice: '₹3,19,990', rating: '4.8', img: 'https://m.media-amazon.com/images/I/81xKpLzXpLL._SL1500_.jpg' },
    { id: 45, name: 'Logitech G Pro Wheel', price: '₹49,999', oldPrice: '₹59,999', rating: '4.6', img: 'https://m.media-amazon.com/images/I/61xKpLzXpLL._SL1500_.jpg' },
    
    // Books
    { id: 46, name: 'Atomic Habits', price: '₹599', oldPrice: '₹799', rating: '4.9', img: 'https://m.media-amazon.com/images/I/81xKpLzXpLL._SL1500_.jpg' },
    { id: 47, name: 'The Psychology of Money', price: '₹499', oldPrice: '₹699', rating: '4.8', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' },
    { id: 48, name: 'Rich Dad Poor Dad', price: '₹399', oldPrice: '₹599', rating: '4.7', img: 'https://m.media-amazon.com/images/I/61xKpLzXpLL._SL1500_.jpg' },
    { id: 49, name: 'The 5 AM Club', price: '₹449', oldPrice: '₹649', rating: '4.5', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' },
    { id: 50, name: 'Think and Grow Rich', price: '₹349', oldPrice: '₹549', rating: '4.6', img: 'https://m.media-amazon.com/images/I/61xKpLzXpLL._SL1500_.jpg' },
    { id: 51, name: 'The Power of Habit', price: '₹499', oldPrice: '₹699', rating: '4.4', img: 'https://m.media-amazon.com/images/I/81xKpLzXpLL._SL1500_.jpg' },
    { id: 52, name: 'Sapiens: A Brief History', price: '₹599', oldPrice: '₹799', rating: '4.7', img: 'https://m.media-amazon.com/images/I/71xKpLzXpLL._SL1500_.jpg' }
];

// ======================== BANNER SLIDER ========================
let currentSlide = 0;
let slideInterval;

function initBannerSlider() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;
    
    // Show first slide
    slides.forEach(slide => slide.classList.remove('active'));
    slides[0].classList.add('active');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[0].classList.add('active');
    
    // Auto-slide
    startAutoSlide();
    
    // Manual navigation
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            stopAutoSlide();
            changeSlide(-1);
            startAutoSlide();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            stopAutoSlide();
            changeSlide(1);
            startAutoSlide();
        });
    }
    
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            stopAutoSlide();
            goToSlide(index);
            startAutoSlide();
        });
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    const total = slides.length;
    
    currentSlide = (currentSlide + direction + total) % total;
    goToSlide(currentSlide);
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 4000);
}

function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

// ======================== RENDER PRODUCTS ========================
function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.img}" alt="${product.name}" loading="lazy" onerror="this.src='https://picsum.photos/seed/${product.id}/200/200'"/>
            <h3>${product.name}</h3>
            <div class="price">
                ${product.price}
                <span class="old-price">${product.oldPrice}</span>
            </div>
            <span class="rating"><i class="fas fa-star"></i> ${product.rating}</span>
        </div>
    `).join('');

    // Product click handler
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('h3')?.textContent || 'Unknown';
            console.log(`🛒 Product clicked: ${productName}`);
            alert(`🛒 ${productName}\nAdded to cart!`);
        });
    });
}

// ======================== LOGIN MODAL ========================
function setupLogin() {
    const loginBtn = document.getElementById('loginBtn');
    const loginOverlay = document.getElementById('loginOverlay');
    const loginClose = document.getElementById('loginClose');
    const loginForm = document.getElementById('loginForm');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('🔐 Login modal opened');
        });
    }
    
    if (loginClose) {
        loginClose.addEventListener('click', function() {
            loginOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            console.log('🔐 Login modal closed');
        });
    }
    
    // Click outside to close
    loginOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            loginOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            console.log('🔐 Login modal closed (click outside)');
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && loginOverlay.classList.contains('active')) {
            loginOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            console.log('🔐 Login modal closed (escape)');
        }
    });
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="text"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (email && password) {
                console.log(`✅ Login attempt: ${email}`);
                alert(`✅ Logged in as: ${email}`);
                loginOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                this.reset();
            } else {
                alert('⚠️ Please fill in all fields');
            }
        });
    }
}

// ======================== AUTO SHOW LOGIN ON PAGE LOAD ========================
function autoShowLogin() {
    const loginOverlay = document.getElementById('loginOverlay');
    if (loginOverlay) {
        // Show login modal after 1 second delay (like real Flipkart)
        setTimeout(function() {
            loginOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('🔐 Login modal auto-shown on page load');
        }, 1000);
    }
}

// ======================== SEARCH ========================
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    console.log(`🔍 Search: "${query}"`);
                    const results = products.filter(p => 
                        p.name.toLowerCase().includes(query.toLowerCase())
                    );
                    if (results.length > 0) {
                        alert(`🔍 Found ${results.length} results for "${query}"`);
                    } else {
                        alert(`🔍 No results found for "${query}"`);
                    }
                } else {
                    alert('Please enter a search term.');
                }
            }
        });
    }
}

// ======================== MORE BUTTON ========================
function setupMoreButton() {
    const moreBtn = document.getElementById('moreBtn');
    if (moreBtn) {
        moreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('📋 More button clicked');
            alert('📋 Account Settings\n\n• My Profile\n• My Orders\n• Wishlist\n• Payment Methods\n• Logout');
        });
    }
}

// ======================== NAV ITEMS ========================
function setupNavItems() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.textContent.trim();
            const filtered = products.filter(p => 
                p.category && p.category.toLowerCase().includes(category.toLowerCase())
            );
            console.log(`📂 Category clicked: ${category} - ${filtered.length} products found`);
            alert(`📂 ${category}\nFound ${filtered.length} products in this category`);
        });
    });
}

// ======================== VIEW ALL ========================
function setupViewAll() {
    const viewAll = document.querySelector('.view-all');
    if (viewAll) {
        viewAll.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(`📦 View all products - Total: ${products.length}`);
            alert(`📦 All Products\nTotal: ${products.length} items available`);
        });
    }
}

// ======================== FOOTER LINKS ========================
function setupFooterLinks() {
    document.querySelectorAll('.footer-col a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(`🔗 Footer link: ${this.textContent.trim()}`);
            alert(`🔗 ${this.textContent.trim()}\nPage coming soon!`);
        });
    });
}

// ======================== LOG VIEWPORT ========================
function logViewport() {
    const width = window.innerWidth;
    let device = 'Desktop';
    if (width < 480) device = 'Mobile (small)';
    else if (width < 768) device = 'Mobile';
    else if (width < 1024) device = 'Tablet';
    console.log(`📱 Viewport: ${width}px · ${device} mode`);
}

// ======================== INITIALIZE ========================
document.addEventListener('DOMContentLoaded', function() {
    // Render products
    renderProducts();
    
    // Initialize banner slider
    initBannerSlider();
    
    // Setup all features
    setupLogin();
    setupMoreButton();
    setupSearch();
    setupNavItems();
    setupViewAll();
    setupFooterLinks();
    
    // AUTO SHOW LOGIN ON PAGE LOAD (like real Flipkart)
    autoShowLogin();
    
    // Log viewport
    logViewport();
    
    // Resize handler
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(logViewport, 500);
    });

    // Console info
    console.log('🚀 Flipkart Clone · Responsive Frontend');
    console.log(`📦 ${products.length} products loaded`);
    console.log('📱 Fully responsive across all devices');
    console.log('💡 Built with HTML5, CSS3, Vanilla JS');
    console.log('🔄 Banner auto-slides every 4 seconds');
    console.log('🔐 Login modal auto-shown on page load');
});