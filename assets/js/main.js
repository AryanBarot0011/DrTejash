// Global Application Controller

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Common Layout Elements (Header, Navbar, Footer, Floating Buttons, Loader)
  initCommonLayouts();

  // 2. Initialize Theme Toggler
  initTheme();

  // 3. Initialize Language Switcher
  initLanguage();

  // 4. Initialize Loader Fadeout
  initLoader();

  // 5. Initialize Page Specific Features
  const page = document.body.getAttribute("data-page");
  if (page === "home") {
    initHomePage();
  } else if (page === "about") {
    initAboutPage();
  } else if (page === "products") {
    initProductsPage();
  } else if (page === "product-detail") {
    initProductDetailPage();
  } else if (page === "testimonials") {
    initTestimonialsPage();
  } else if (page === "contact") {
    initContactPage();
  }

  // 6. Initialize AOS (Animate on Scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }

  // 7. Initialize Scroll Animations & Behaviors (Navbar styling & Back-To-Top trigger)
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    const mainNavbar = document.querySelector(".main-navbar");
    if (mainNavbar) {
      if (window.scrollY > 40) {
        mainNavbar.classList.add("navbar-scrolled");
      } else {
        mainNavbar.classList.remove("navbar-scrolled");
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

/* ==========================================================================
   DYNAMIC LAYOUT INJECTION
   ========================================================================== */
function initCommonLayouts() {
  const currentLang = localStorage.getItem("app_lang") || "en";
  const clinicName = CONFIG.clinicName;
  const docName = CONFIG.doctorName;
  const phone = CONFIG.phone;
  const whatsapp = CONFIG.whatsapp;
  const email = CONFIG.email;
  const address = CONFIG.address;

  // Render Loader
  const loaderContainer = document.getElementById("loader-placeholder");
  if (loaderContainer) {
    loaderContainer.innerHTML = `
      <div class="page-loader" id="pageLoader">
        <div class="text-center">
          <div class="loader-spinner mb-3"></div>
          <h5 class="gradient-text font-heading fw-bold" style="letter-spacing: 1px;">${clinicName}</h5>
        </div>
      </div>
    `;
  }

  // Render Top Header
  const topHeaderContainer = document.getElementById("top-header-placeholder");
  if (topHeaderContainer) {
    topHeaderContainer.innerHTML = `
      <div class="top-header d-none d-lg-block">
        <div class="container d-flex flex-wrap justify-content-between align-items-center">
          <div class="d-flex align-items-center flex-wrap">
            <a href="tel:${phone}" class="d-flex align-items-center mb-1 mb-sm-0">
              <i class="bi bi-telephone-fill me-2 text-primary"></i> ${phone}
            </a>
            <a href="https://wa.me/${whatsapp}" target="_blank" class="d-flex align-items-center mb-1 mb-sm-0">
              <i class="bi bi-whatsapp me-2 text-success"></i> WhatsApp
            </a>
            <a href="mailto:${email}" class="d-flex align-items-center">
              <i class="bi bi-envelope-fill me-2 text-primary"></i> ${email}
            </a>
          </div>
          <div class="d-none d-md-block fw-medium top-header-info">
            <span>${docName} | Ayurveda Practitioner</span>
          </div>
        </div>
      </div>
    `;
  }

  // Render Navigation Bar
  const navContainer = document.getElementById("navbar-placeholder");
  if (navContainer) {
    const pageAttr = document.body.getAttribute("data-page");
    const activeClass = (p) => pageAttr === p ? "active" : "";

    navContainer.innerHTML = `
      <nav class="navbar navbar-expand-lg main-navbar">
        <div class="navbar-bg-blur"></div>
        <div class="container">
          <a class="navbar-brand d-flex align-items-center fw-bold" href="index.html">
            <i class="bi bi-heart-pulse-fill me-2 text-primary"></i>
            <span>${docName}</span>
          </a>
          
          <!-- Menu Toggler for mobile -->
          <button class="navbar-toggler border-0 shadow-none ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <!-- Offcanvas container -->
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header border-bottom">
              <h5 class="offcanvas-title fw-bold text-primary" id="offcanvasNavbarLabel">
                <i class="bi bi-heart-pulse-fill me-2"></i>${docName}
              </h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div class="offcanvas-body d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between">
              <!-- Navigation Links -->
              <ul class="navbar-nav mx-lg-auto mb-0 text-center gap-1">
                <li class="nav-item">
                  <a class="nav-link ${activeClass("home")}" href="index.html" data-i18n="nav_home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ${activeClass("about")}" href="about.html" data-i18n="nav_about">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ${activeClass("products")}" href="products.html" data-i18n="nav_products">Products</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ${activeClass("testimonials")}" href="testimonials.html" data-i18n="nav_testimonials">Testimonials</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ${activeClass("faq")}" href="faq.html" data-i18n="nav_faq">FAQ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ${activeClass("contact")}" href="contact.html" data-i18n="nav_contact">Contact Us</a>
                </li>
              </ul>
              
              <!-- Bottom Area on Mobile, Right Area on Desktop -->
              <div class="d-flex flex-column flex-lg-row align-items-center gap-3 mt-auto mt-lg-0 pt-3 pt-lg-0">
                <!-- Lang & Theme Switcher -->
                <div class="d-flex align-items-center gap-3">
                  <div class="d-flex align-items-center gap-1">
                    <i class="bi bi-translate text-primary"></i>
                    <select class="lang-select" id="langSelect">
                      <option value="en">English</option>
                      <option value="hi">हिन्दी</option>
                      <option value="gu">ગુજરાતી</option>
                    </select>
                  </div>
                  
                  <button class="theme-toggle-btn" id="themeToggleBtn" aria-label="Toggle Theme">
                    <i class="bi bi-moon-stars" id="themeIcon"></i>
                  </button>
                </div>
                
                <!-- Contact details inside offcanvas drawer on mobile (hides on desktop) -->
                <div class="d-lg-none w-100 border-top pt-4 mt-2">
                  <h6 class="fw-bold text-dark mb-3" data-i18n="nav_contact">Contact Us</h6>
                  <div class="d-flex flex-column gap-3 align-items-start text-start small">
                    <a href="tel:${phone}" class="text-dark d-flex align-items-center gap-2">
                      <i class="bi bi-telephone-fill text-primary"></i> <span>${phone}</span>
                    </a>
                    <a href="https://wa.me/${whatsapp}" target="_blank" class="text-success d-flex align-items-center gap-2">
                      <i class="bi bi-whatsapp"></i> <span>WhatsApp Chat</span>
                    </a>
                    <a href="mailto:${email}" class="text-dark d-flex align-items-center gap-2">
                      <i class="bi bi-envelope-fill text-primary"></i> <span class="text-break">${email}</span>
                    </a>
                    <span class="text-muted d-flex align-items-start gap-2">
                      <i class="bi bi-geo-alt-fill text-primary mt-1"></i> <span style="line-height: 1.3;">${address}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  // Render Footer
  const footerContainer = document.getElementById("footer-placeholder");
  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="row g-4">
            <!-- Col 1: About Clinic -->
            <div class="col-lg-4 col-md-6">
              <a class="footer-logo d-flex align-items-center fw-bold text-white mb-3" href="index.html">
                <i class="bi bi-heart-pulse-fill me-2 text-primary"></i>
                <span>${clinicName}</span>
              </a>
              <p class="mb-4" data-i18n="footer_about">Providing premium healthcare products and consultations under ${docName}. 100% natural, tested, and trusted.</p>
              <div class="footer-social-icons">
                <a href="#" class="footer-social-icon"><i class="bi bi-facebook"></i></a>
                <a href="#" class="footer-social-icon"><i class="bi bi-instagram"></i></a>
                <a href="https://wa.me/${whatsapp}" target="_blank" class="footer-social-icon"><i class="bi bi-whatsapp"></i></a>
                <a href="mailto:${email}" class="footer-social-icon"><i class="bi bi-envelope"></i></a>
              </div>
            </div>
            
            <!-- Col 2: Quick Links -->
            <div class="col-lg-2 col-md-6 col-6 ps-lg-5">
              <h5 class="fw-semibold text-white mb-4" data-i18n="quick_links">Quick Links</h5>
              <ul class="footer-links">
                <li><a href="index.html" data-i18n="nav_home">Home</a></li>
                <li><a href="about.html" data-i18n="nav_about">About Us</a></li>
                <li><a href="products.html" data-i18n="nav_products">Products</a></li>
                <li><a href="testimonials.html" data-i18n="nav_testimonials">Testimonials</a></li>
              </ul>
            </div>

            <!-- Col 3: Support Links -->
            <div class="col-lg-2 col-md-6 col-6">
              <h5 class="fw-semibold text-white mb-4" data-i18n="nav_faq">FAQ</h5>
              <ul class="footer-links">
                <li><a href="faq.html" data-i18n="nav_faq">FAQ</a></li>
                <li><a href="contact.html" data-i18n="nav_contact">Contact Us</a></li>
                <li><a href="#" data-i18n="privacy_policy">Privacy Policy</a></li>
                <li><a href="#" data-i18n="terms_conditions">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <!-- Col 4: Contact details -->
            <div class="col-lg-4 col-md-6">
              <h5 class="fw-semibold text-white mb-4" data-i18n="nav_contact">Contact Us</h5>
              <p class="mb-2"><i class="bi bi-geo-alt-fill text-primary me-2"></i> ${address}</p>
              <p class="mb-2"><i class="bi bi-telephone-fill text-primary me-2"></i> <a href="tel:${phone}" class="text-white-50">${phone}</a></p>
              <p class="mb-2"><i class="bi bi-whatsapp text-primary me-2"></i> <a href="https://wa.me/${whatsapp}" target="_blank" class="text-white-50">${whatsapp}</a></p>
              <p class="mb-2"><i class="bi bi-envelope-fill text-primary me-2"></i> <a href="mailto:${email}" class="text-white-50">${email}</a></p>
            </div>
          </div>
          
          <div class="footer-bottom text-center">
            <p class="mb-0">&copy; 2026 ${clinicName}. <span data-i18n="footer_copyright">All Rights Reserved.</span></p>
          </div>
        </div>
      </footer>
    `;
  }

  // Render Floating Buttons
  const floatsContainer = document.getElementById("floats-placeholder");
  if (floatsContainer) {
    floatsContainer.innerHTML = `
      <!-- Floating WhatsApp -->
      <a href="https://wa.me/${whatsapp}" target="_blank" class="whatsapp-float" aria-label="WhatsApp chat">
        <i class="bi bi-whatsapp"></i>
      </a>
      
      <!-- Scroll To Top Button -->
      <button class="back-to-top" id="backToTopBtn" aria-label="Scroll to top">
        <i class="bi bi-arrow-up"></i>
      </button>
    `;
  }
}

/* ==========================================================================
   THEME TOGGLING FUNCTIONALITY
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem("app_theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  
  if (currentTheme === "dark") {
    themeIcon.classList.replace("bi-moon-stars", "bi-sun");
  } else {
    themeIcon.classList.replace("bi-sun", "bi-moon-stars");
  }

  themeToggleBtn.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme");
    let newTheme = "light";
    
    if (theme === "light") {
      newTheme = "dark";
      themeIcon.classList.replace("bi-moon-stars", "bi-sun");
    } else {
      themeIcon.classList.replace("bi-sun", "bi-moon-stars");
    }
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("app_theme", newTheme);
  });
}

/* ==========================================================================
   MULTI-LANGUAGE TRANSLATION SYSTEM
   ========================================================================== */
function initLanguage() {
  const langSelect = document.getElementById("langSelect");
  if (!langSelect) return;

  const currentLang = localStorage.getItem("app_lang") || "en";
  langSelect.value = currentLang;
  translateUI(currentLang);

  langSelect.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem("app_lang", selectedLang);
    translateUI(selectedLang);
    
    // Dispatch custom event for page content translation
    const event = new CustomEvent("languageChanged", { detail: { lang: selectedLang } });
    document.dispatchEvent(event);
  });
}

function translateUI(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = TRANSLATIONS[lang][key];
      } else {
        element.innerHTML = TRANSLATIONS[lang][key];
      }
    }
  });
}

/* ==========================================================================
   PAGE LOADER SCREEN
   ========================================================================== */
function initLoader() {
  const pageLoader = document.getElementById("pageLoader");
  if (pageLoader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        pageLoader.style.opacity = "0";
        pageLoader.style.visibility = "hidden";
      }, 300);
    });
  }
}

/* ==========================================================================
   HOME PAGE LOGIC
   ========================================================================== */
let typingTimeout;

function initHomePage() {
  const lang = localStorage.getItem("app_lang") || "en";
  renderFeaturedProducts(lang);
  initStatsCounters();
  initTypingEffect();

  document.addEventListener("languageChanged", (e) => {
    renderFeaturedProducts(e.detail.lang);
    initTypingEffect();
  });
}

function renderFeaturedProducts(lang) {
  const productsContainer = document.getElementById("featured-products-row");
  if (!productsContainer) return;

  // Filter 4 popular products
  const featured = PRODUCTS.filter(p => p.isPopular).slice(0, 4);

  let html = "";
  featured.forEach(prod => {
    const t = prod.translations[lang] || prod.translations["en"];
    const badge = prod.isNew 
      ? `<span class="badge-new" data-i18n="sort_new">New</span>` 
      : (prod.isPopular ? `<span class="badge-popular" data-i18n="sort_popular">Popular</span>` : "");
      
    html += `
      <div class="col-lg-3 col-md-6" data-aos="fade-up">
        <div class="product-card">
          ${badge}
          <div class="product-img-container">
            <img src="${prod.image}" alt="${t.name}" onerror="this.src='https://placehold.co/400x300/e2e8f0/009688?text=${encodeURIComponent(t.name)}'">
          </div>
          <div class="product-body">
            <div class="product-cat">${prod.category.toUpperCase()}</div>
            <h4 class="product-title">${t.name}</h4>
            <p class="product-desc">${t.shortDesc}</p>
            <div class="product-price-row">
              <div class="product-price">₹${prod.price}</div>
            </div>
            <div class="product-action-row">
              <a href="product-detail.html?id=${prod.id}" class="btn btn-details btn-sm d-flex align-items-center justify-content-center" data-i18n="btn_view_details">Details</a>
              <a href="https://wa.me/${CONFIG.whatsapp}?text=Hello%20Doctor,%20I%20am%20interested%20in%20${encodeURIComponent(t.name)}" target="_blank" class="btn btn-order-card btn-sm">
                <i class="bi bi-whatsapp"></i><span data-i18n="btn_order_whatsapp">Order</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  productsContainer.innerHTML = html;
  translateUI(lang); // Run UI translation on newly rendered cards
}

function initStatsCounters() {
  const counters = document.querySelectorAll(".counter-number");
  if (counters.length === 0) return;

  const startCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute("data-target"));
      const suffix = counter.getAttribute("data-suffix") || "";
      let count = 0;
      const speed = target / 50; // speed of counting

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.floor(count) + suffix;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target + suffix;
        }
      };
      updateCount();
    });
  };

  // Scroll detection trigger
  let animated = false;
  window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".stats-section");
    if (statsSection && !animated) {
      const position = statsSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (position < screenHeight - 100) {
        startCounters();
        animated = true;
      }
    }
  });
}

function initTypingEffect() {
  const element = document.getElementById("typing-subtitle");
  if (!element) return;

  // Clear any existing typing interval globally to prevent mixing
  if (window.typingInterval) {
    clearInterval(window.typingInterval);
  }

  const lang = localStorage.getItem("app_lang") || "en";
  const texts = {
    en: "Trusted Ayurvedic Remedies | Doctor Approved | 100% Purity",
    hi: "विश्वसनीय आयुर्वेदिक उपचार | डॉक्टर द्वारा स्वीकृत | 100% शुद्धता",
    gu: "ભરોસાપાત્ર આયુર્વેદિક સારવાર | ડોક્ટર માન્ય | 100% શુદ્ધતા"
  };

  const text = texts[lang] || texts["en"];
  let index = 0;
  element.innerHTML = "";

  window.typingInterval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(window.typingInterval);
    }
  }, 50);
}

/* ==========================================================================
   ABOUT PAGE LOGIC
   ========================================================================== */
function initAboutPage() {
  // Trigger animations or simple stats counts
}

/* ==========================================================================
   PRODUCTS PAGE LOGIC
   ========================================================================== */
let activeCategory = "all";
let searchQuery = "";
let sortBy = "default";
let currentPage = 1;
const productsPerPage = 6;

function initProductsPage() {
  const lang = localStorage.getItem("app_lang") || "en";
  renderCatalog(lang);

  // Search Input Event Listener
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      currentPage = 1;
      renderCatalog(localStorage.getItem("app_lang") || "en");
    });
  }

  // Sort Selector Event Listener
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortBy = e.target.value;
      currentPage = 1;
      renderCatalog(localStorage.getItem("app_lang") || "en");
    });
  }

  // Category Tabs Event Listeners
  const tabs = document.querySelectorAll(".catalog-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-category");
      currentPage = 1;
      renderCatalog(localStorage.getItem("app_lang") || "en");
    });
  });

  // Language Change Listener
  document.addEventListener("languageChanged", (e) => {
    renderCatalog(e.detail.lang);
  });
}

function renderCatalog(lang) {
  const grid = document.getElementById("products-catalog-grid");
  const paginationContainer = document.getElementById("pagination");
  if (!grid) return;

  // 1. Filter products by category & search query
  let filtered = PRODUCTS.filter(prod => {
    const t = prod.translations[lang] || prod.translations["en"];
    const matchesCategory = activeCategory === "all" || prod.category === activeCategory;
    const matchesSearch = t.name.toLowerCase().includes(searchQuery) || 
                          prod.category.toLowerCase().includes(searchQuery) ||
                          t.shortDesc.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // 2. Apply sorting rules
  if (sortBy === "price-low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high-low") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "popular") {
    filtered.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
  } else if (sortBy === "new") {
    filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  // 3. Setup Pagination parameters
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / productsPerPage);
  
  if (totalItems === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
        <h5 class="mt-3 text-muted" data-i18n="no_products_found">No products found matching your search.</h5>
      </div>
    `;
    if (paginationContainer) paginationContainer.innerHTML = "";
    translateUI(lang);
    return;
  }

  // Slice list for active page
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedList = filtered.slice(startIndex, startIndex + productsPerPage);

  // Render cards
  let html = "";
  paginatedList.forEach(prod => {
    const t = prod.translations[lang] || prod.translations["en"];
    const badge = prod.isNew 
      ? `<span class="badge-new" data-i18n="sort_new">New</span>` 
      : (prod.isPopular ? `<span class="badge-popular" data-i18n="sort_popular">Popular</span>` : "");
      
    html += `
      <div class="col-lg-4 col-md-6" data-aos="fade-up">
        <div class="product-card">
          ${badge}
          <div class="product-img-container">
            <img src="${prod.image}" alt="${t.name}" onerror="this.src='https://placehold.co/400x300/e2e8f0/009688?text=${encodeURIComponent(t.name)}'">
          </div>
          <div class="product-body">
            <div class="product-cat">${prod.category.toUpperCase()}</div>
            <h4 class="product-title">${t.name}</h4>
            <p class="product-desc">${t.shortDesc}</p>
            <div class="product-price-row">
              <div class="product-price">₹${prod.price}</div>
            </div>
            <div class="product-action-row">
              <a href="product-detail.html?id=${prod.id}" class="btn btn-details btn-sm d-flex align-items-center justify-content-center" data-i18n="btn_view_details">Details</a>
              <a href="https://wa.me/${CONFIG.whatsapp}?text=Hello%20Doctor,%20I%20am%20interested%20in%20${encodeURIComponent(t.name)}" target="_blank" class="btn btn-order-card btn-sm">
                <i class="bi bi-whatsapp"></i><span data-i18n="btn_order_whatsapp">Order</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;

  // Render pagination buttons
  if (paginationContainer) {
    let paginationHtml = "";
    if (totalPages > 1) {
      // Prev Button
      paginationHtml += `<button class="pagination-btn" ${currentPage === 1 ? "disabled" : ""} onclick="changeCatalogPage(${currentPage - 1})"><i class="bi bi-chevron-left"></i></button>`;
      
      // Page numbers
      for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<button class="pagination-btn ${i === currentPage ? "active" : ""}" onclick="changeCatalogPage(${i})">${i}</button>`;
      }
      
      // Next Button
      paginationHtml += `<button class="pagination-btn" ${currentPage === totalPages ? "disabled" : ""} onclick="changeCatalogPage(${currentPage + 1})"><i class="bi bi-chevron-right"></i></button>`;
    }
    paginationContainer.innerHTML = paginationHtml;
  }

  translateUI(lang);
}

// Global function since it's called inline from onclick
window.changeCatalogPage = function(pageNumber) {
  currentPage = pageNumber;
  renderCatalog(localStorage.getItem("app_lang") || "en");
  window.scrollTo({ top: 250, behavior: "smooth" });
};

/* ==========================================================================
   PRODUCT DETAIL LOGIC
   ========================================================================== */
function initProductDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const prodId = urlParams.get('id');
  const lang = localStorage.getItem("app_lang") || "en";

  renderProductDetails(prodId, lang);

  document.addEventListener("languageChanged", (e) => {
    renderProductDetails(prodId, e.detail.lang);
  });
}

function renderProductDetails(prodId, lang) {
  const container = document.getElementById("product-detail-container");
  if (!container) return;

  const product = PRODUCTS.find(p => p.id === prodId) || PRODUCTS[0];
  const t = product.translations[lang] || product.translations["en"];

  // Populate dynamic header titles
  const breadcrumbName = document.getElementById("breadcrumb-product-name");
  if (breadcrumbName) breadcrumbName.innerText = t.name;

  const badge = product.isNew 
    ? `<span class="badge bg-primary px-3 py-2 rounded-pill mb-3" data-i18n="sort_new">New</span>` 
    : (product.isPopular ? `<span class="badge bg-warning px-3 py-2 rounded-pill text-dark mb-3" data-i18n="sort_popular">Popular</span>` : "");

  // Generate list benefits items
  let benefitsListHtml = "";
  if (t.benefits && Array.isArray(t.benefits)) {
    t.benefits.forEach(benefit => {
      benefitsListHtml += `<li class="mb-2"><i class="bi bi-patch-check-fill text-success me-2"></i> ${benefit}</li>`;
    });
  }

  // Get product images (support either array 'images' or single 'image' string)
  const productImages = product.images && Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [product.image].filter(Boolean);

  if (productImages.length === 0) {
    productImages.push("https://placehold.co/400x300/e2e8f0/009688?text=Product+Image");
  }

  const firstImage = productImages[0];

  // Generate Thumbnails HTML
  let thumbsHtml = "";
  if (productImages.length > 1) {
    thumbsHtml = `
      <div class="gallery-thumbs d-flex gap-2 justify-content-center">
        ${productImages.map((imgUrl, idx) => `
          <div class="gallery-thumb-item ${idx === 0 ? 'active' : ''}" onclick="changeDetailThumb(this, '${imgUrl}')">
            <img src="${imgUrl}" class="img-fluid" style="max-height: 100%; object-fit: contain;" alt="Thumb ${idx + 1}">
          </div>
        `).join('')}
      </div>
    `;
  }

  // Construct UI
  // Construct UI
  container.innerHTML = `
    <div class="row g-5">
      <!-- Col 1: Images & Gallery Mockup -->
      <div class="col-lg-6" data-aos="fade-right">
        <div class="detail-gallery bg-white p-3 p-sm-4 rounded-4 shadow-sm border border-light height-100 d-flex flex-column align-items-center justify-content-center">
          <div class="gallery-main mb-4 d-flex align-items-center justify-content-center" style="height: 380px; width: 100%;">
            <img src="${firstImage}" id="mainDetailImage" class="img-fluid rounded-3" style="max-height: 100%; object-fit: contain;" alt="${t.name}">
          </div>
          ${thumbsHtml}
        </div>
      </div>
      
      <!-- Col 2: Info and CTA -->
      <div class="col-lg-6" data-aos="fade-left">
        <div class="detail-info bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
          ${badge}
          <div class="text-primary font-heading fw-bold text-uppercase mb-1" style="font-size: 0.85rem; letter-spacing: 1px;">
            ${product.category.toUpperCase()}
          </div>
          <h1 class="display-6 fw-bold mb-3 text-dark">${t.name}</h1>
          
          <div class="d-flex flex-wrap align-items-center gap-3 mb-4">
            <div class="product-price fs-2 fw-bold text-primary">₹${product.price}</div>
            <div class="badge bg-success px-3 py-2 rounded-pill fw-semibold text-white d-inline-flex align-items-center gap-1" data-i18n="in_stock">
              <i class="bi bi-shield-fill-check"></i> In Stock
            </div>
          </div>
          
          <p class="lead text-light mb-4" style="font-size: 1.05rem; line-height: 1.7;">${t.description}</p>
          
          <h5 class="fw-bold text-dark mb-3" data-i18n="details_benefits">Key Benefits</h5>
          <ul class="list-unstyled mb-4 text-start">
            ${benefitsListHtml}
          </ul>
          
          <div class="d-flex flex-wrap gap-3 mt-4 border-top pt-4 justify-content-center justify-content-sm-start">
            <a href="https://wa.me/${CONFIG.whatsapp}?text=Hello%20Doctor,%20I%20am%20interested%20in%20buying%20the%20product%20*${encodeURIComponent(t.name)}*." target="_blank" class="btn btn-whatsapp-custom d-inline-flex align-items-center gap-2 px-4 py-3">
              <i class="bi bi-whatsapp fs-5"></i> <span data-i18n="btn_order_whatsapp">Order on WhatsApp</span>
            </a>
            <a href="tel:${CONFIG.phone}" class="btn btn-secondary-custom d-inline-flex align-items-center gap-2 px-4 py-3">
              <i class="bi bi-telephone-fill"></i> <span data-i18n="btn_call_now">Call Now</span>
            </a>
            <a href="contact.html" class="btn btn-secondary-custom d-inline-flex align-items-center gap-2 px-4 py-3">
              <i class="bi bi-envelope"></i> <span data-i18n="btn_contact_us">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Specs and Details Section -->
    <div class="row mt-5" data-aos="fade-up">
      <div class="col-12">
        <div class="accordion detail-accordion shadow-sm rounded-4 border border-light overflow-hidden" id="detailSpecsAccordion">
          <!-- Item 1: Usage -->
          <div class="accordion-item border-0 border-bottom">
            <h2 class="accordion-header">
              <button class="accordion-button py-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUsage" aria-expanded="true" data-i18n="details_usage">
                How to Use
              </button>
            </h2>
            <div id="collapseUsage" class="accordion-collapse collapse show" data-bs-parent="#detailSpecsAccordion">
              <div class="accordion-body p-4 text-light text-start" style="line-height: 1.6;">
                <p class="mb-0">${t.usage}</p>
              </div>
            </div>
          </div>
          
          <!-- Item 2: Ingredients -->
          <div class="accordion-item border-0 border-bottom">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed py-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIngredients" aria-expanded="false" data-i18n="details_ingredients">
                Ingredients
              </button>
            </h2>
            <div id="collapseIngredients" class="accordion-collapse collapse" data-bs-parent="#detailSpecsAccordion">
              <div class="accordion-body p-4 text-light text-start" style="line-height: 1.6;">
                <p class="mb-0">${t.ingredients}</p>
              </div>
            </div>
          </div>
          
          <!-- Item 3: Suitable For -->
          <div class="accordion-item border-0 border-bottom">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed py-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSuitable" aria-expanded="false" data-i18n="details_suitable">
                Suitable For
              </button>
            </h2>
            <div id="collapseSuitable" class="accordion-collapse collapse" data-bs-parent="#detailSpecsAccordion">
              <div class="accordion-body p-4 text-light text-start" style="line-height: 1.6;">
                <p class="mb-0">${t.suitableFor}</p>
              </div>
            </div>
          </div>
          
          <!-- Item 4: Warnings -->
          <div class="accordion-item border-0">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed py-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWarnings" aria-expanded="false" data-i18n="details_warnings">
                Warnings / Precautions
              </button>
            </h2>
            <div id="collapseWarnings" class="accordion-collapse collapse" data-bs-parent="#detailSpecsAccordion">
              <div class="accordion-body p-4 text-light text-start" style="line-height: 1.6;">
                <p class="mb-0">${t.warnings}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  renderRelatedProducts(product.id, product.category, lang);
  translateUI(lang);
}

// Inline trigger for changing thumbnails
window.changeDetailThumb = function(element, imageUrl) {
  document.getElementById("mainDetailImage").src = imageUrl;
  document.querySelectorAll(".gallery-thumb-item").forEach(item => item.classList.remove("active"));
  element.classList.add("active");
};

function renderRelatedProducts(currProdId, category, lang) {
  const row = document.getElementById("related-products-row");
  if (!row) return;

  // Filter products in same category (excl current)
  const related = PRODUCTS.filter(p => p.category === category && p.id !== currProdId).slice(0, 3);
  
  if (related.length === 0) {
    // If no related products in same category, show any popular products
    const backup = PRODUCTS.filter(p => p.id !== currProdId).slice(0, 3);
    related.push(...backup);
  }

  let html = "";
  related.forEach(prod => {
    const t = prod.translations[lang] || prod.translations["en"];
    html += `
      <div class="col-md-4">
        <div class="product-card">
          <div class="product-img-container">
            <img src="${prod.image}" alt="${t.name}" onerror="this.src='https://placehold.co/400x300/e2e8f0/009688?text=${encodeURIComponent(t.name)}'">
          </div>
          <div class="product-body">
            <div class="product-cat">${prod.category.toUpperCase()}</div>
            <h4 class="product-title" style="font-size: 1rem;">${t.name}</h4>
            <div class="product-price-row">
              <div class="product-price" style="font-size: 1.1rem;">₹${prod.price}</div>
            </div>
            <a href="product-detail.html?id=${prod.id}" class="btn btn-details btn-sm text-center w-100" data-i18n="btn_view_details">Details</a>
          </div>
        </div>
      </div>
    `;
  });

  row.innerHTML = html;
}

/* ==========================================================================
   TESTIMONIALS PAGE LOGIC
   ========================================================================== */
function initTestimonialsPage() {
  const lang = localStorage.getItem("app_lang") || "en";
  renderVideoTestimonials();
  renderBeforeAfter(lang);

  document.addEventListener("languageChanged", (e) => {
    renderBeforeAfter(e.detail.lang);
  });
}

function renderVideoTestimonials() {
  const container = document.getElementById("video-testimonials-row");
  if (!container) return;

  if (typeof TESTIMONIALS === "undefined" || !Array.isArray(TESTIMONIALS)) {
    container.innerHTML = `<p class="text-center text-muted">No video testimonials available.</p>`;
    return;
  }

  let html = "";
  TESTIMONIALS.forEach((test, idx) => {
    const delay = (idx + 1) * 100;
    html += `
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${delay}">
        <div class="video-card cursor-pointer" onclick="playTestimonialVideo('${test.id}')">
          <img src="${test.thumbnail}" class="video-thumb" alt="${test.clientName}">
          <button class="video-play-btn" aria-label="Play video"><i class="bi bi-play-fill"></i></button>
          <div class="position-absolute bottom-0 start-0 p-3 text-white fw-bold" style="text-shadow: 1px 1px 5px rgba(0,0,0,0.5);">
            ${test.clientName} (${test.productName})
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderBeforeAfter(lang) {
  const container = document.getElementById("before-after-row");
  if (!container) return;

  if (typeof BEFORE_AFTER === "undefined" || !Array.isArray(BEFORE_AFTER)) {
    container.innerHTML = `<p class="text-center text-muted">No before & after comparisons available.</p>`;
    return;
  }

  let html = "";
  BEFORE_AFTER.forEach((result, idx) => {
    const t = result.translations[lang] || result.translations["en"];
    const delay = (idx + 1) * 100;
    const aosDirection = idx % 2 === 0 ? "fade-right" : "fade-left";
    
    html += `
      <div class="col-lg-5 col-md-6" data-aos="${aosDirection}" data-aos-delay="${delay}">
        <h4 class="fw-bold mb-3 text-center">${t.title}</h4>
        <div class="ba-container">
          <div class="ba-side">
            <img src="${result.beforeImage}" alt="Before">
            <span class="ba-badge" data-i18n="before">Before</span>
          </div>
          <div class="ba-side">
            <img src="${result.afterImage}" alt="After">
            <span class="ba-badge" data-i18n="after">After</span>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  translateUI(lang);
}

window.playTestimonialVideo = function(testId) {
  const test = TESTIMONIALS.find(t => t.id === testId);
  if (!test) return;

  // Create modal element dynamically
  let modalEl = document.getElementById("videoTestimonialModal");
  if (!modalEl) {
    modalEl = document.createElement("div");
    modalEl.id = "videoTestimonialModal";
    modalEl.className = "modal fade";
    modalEl.tabIndex = "-1";
    modalEl.setAttribute("aria-hidden", "true");
    document.body.appendChild(modalEl);
  }

  // Determine media element (Youtube iframe or HTML5 Video player)
  let mediaHtml = "";
  const isYoutube = test.videoUrl.includes("youtube.com") || test.videoUrl.includes("youtu.be");
  if (isYoutube) {
    let embedUrl = test.videoUrl;
    if (test.videoUrl.includes("watch?v=")) {
      embedUrl = test.videoUrl.replace("watch?v=", "embed/");
    } else if (test.videoUrl.includes("youtu.be/")) {
      embedUrl = test.videoUrl.replace("youtu.be/", "youtube.com/embed/");
    }
    mediaHtml = `<iframe src="${embedUrl}?autoplay=1" class="w-100" style="height: 400px;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  } else {
    mediaHtml = `
      <video class="w-100 rounded-3 shadow" controls autoplay style="max-height: 450px;">
        <source src="${test.videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  }

  modalEl.innerHTML = `
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 bg-dark text-white rounded-4 shadow-lg overflow-hidden">
        <div class="modal-header border-bottom border-secondary bg-dark p-3 d-flex justify-content-between align-items-center">
          <h5 class="modal-title fw-bold font-heading text-primary">${test.clientName} - ${test.productName}</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-0 bg-black text-center">
          ${mediaHtml}
        </div>
      </div>
    </div>
  `;

  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();

  // Pause/stop video when modal is closed by resetting modal content
  modalEl.addEventListener("hidden.bs.modal", () => {
    modalEl.innerHTML = "";
  });
};

/* ==========================================================================
   CONTACT PAGE LOGIC
   ========================================================================== */
function initContactPage() {
  const mapPlaceholder = document.getElementById("mapEmbedContainer");
  if (mapPlaceholder) {
    mapPlaceholder.innerHTML = `<iframe src="${CONFIG.mapEmbed}" allowfullscreen="" loading="lazy"></iframe>`;
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("formName").value.trim();
      const phone = document.getElementById("formPhone").value.trim();
      const email = document.getElementById("formEmail").value.trim();
      const message = document.getElementById("formMessage").value.trim();

      const lang = localStorage.getItem("app_lang") || "en";
      const alerts = {
        nameReq: { en: "Please enter your full name.", hi: "कृपया अपना पूरा नाम दर्ज करें।", gu: "કૃપા કરીને તમારું પૂરું નામ દાખલ કરો." },
        phoneVal: { en: "Please enter a valid 10-digit phone number.", hi: "कृपया एक वैध 10-अंकीय फ़ोन नंबर दर्ज करें।", gu: "કૃપા કરીને સાચો ૧૦-આંકડાનો ફોન નંબર દાખલ કરો." },
        emailVal: { en: "Please enter a valid email address.", hi: "कृपया एक वैध ईमेल पता दर्ज करें।", gu: "કૃપા કરીને સાચું ઈમેલ એડ્રેસ દાખલ કરો." },
        msgReq: { en: "Please enter your message.", hi: "कृपया अपना संदेश दर्ज करें।", gu: "કૃપા કરીને તમારો સંદેશ દાખલ કરો." },
        success: { en: "Thank you! Your inquiry has been sent successfully.", hi: "धन्यवाद! आपकी पूछताछ सफलतापूर्वक भेज दी गई है।", gu: "આભાર! તમારી પૂછપરછ સફળતાપૂર્વક મોકલવામાં આવી છે." }
      };

      if (!name) {
        alert(alerts.nameReq[lang] || alerts.nameReq.en);
        return;
      }

      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phone || !phoneRegex.test(phone)) {
        alert(alerts.phoneVal[lang] || alerts.phoneVal.en);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !emailRegex.test(email)) {
        alert(alerts.emailVal[lang] || alerts.emailVal.en);
        return;
      }

      if (!message) {
        alert(alerts.msgReq[lang] || alerts.msgReq.en);
        return;
      }

      // Simulate form submission
      const alertSuccess = document.getElementById("contactFormAlert");
      if (alertSuccess) {
        alertSuccess.classList.remove("d-none");
        form.reset();
        setTimeout(() => {
          alertSuccess.classList.add("d-none");
        }, 5000);
      } else {
        alert(alerts.success[lang] || alerts.success.en);
        form.reset();
      }
    });
  }
}
