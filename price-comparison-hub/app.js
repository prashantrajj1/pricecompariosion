// SmartCompare Main Application Logic

document.addEventListener("DOMContentLoaded", () => {
  // --- STATE ---
  const state = {
    products: PRODUCTS_DATA,
    filteredProducts: [],
    filters: {
      search: "",
      priceRange: { min: 0, max: 160000 },
      brands: [],
      stores: [],
      rating: 0
    },
    selectedVariants: {}, // Tracks selected storage capacity per smartphone ID
    sortBy: "popular",
    compareList: JSON.parse(localStorage.getItem("compareList") || "[]"),
    theme: localStorage.getItem("theme") || "dark"
  };

  // --- SELECTORS ---
  const productsGrid = document.getElementById("products-grid");
  const visibleCountEl = document.getElementById("visible-count");
  const sortSelect = document.getElementById("sort-select");
  const searchInput = document.getElementById("search-input");
  const autocompleteDropdown = document.getElementById("autocomplete-dropdown");
  const filterResetBtn = document.getElementById("filter-reset");
  const priceMinInput = document.getElementById("price-min-input");
  const priceMaxInput = document.getElementById("price-max-input");
  const priceSlider = document.getElementById("price-slider");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIconDark = document.getElementById("theme-icon-dark");
  const themeIconLight = document.getElementById("theme-icon-light");
  const mobileFilterToggle = document.getElementById("mobile-filter-toggle");
  const filtersSidebar = document.getElementById("filters-sidebar");
  
  // Modals
  const compareDeck = document.getElementById("compare-deck");
  const compareDeckItems = document.getElementById("compare-deck-items");
  const compareNowBtn = document.getElementById("compare-now-btn");
  const compareModal = document.getElementById("compare-modal");
  const compareModalClose = document.getElementById("compare-modal-close");
  const compareGrid = document.getElementById("compare-grid");

  const redirectModal = document.getElementById("redirect-modal");
  const redirectStoreLogo = document.getElementById("redirect-store-logo");
  const redirectDetails = document.getElementById("redirect-details");

  const priceAlertModal = document.getElementById("price-alert-modal");
  const priceAlertClose = document.getElementById("price-alert-close");
  const priceAlertProductTitle = document.getElementById("price-alert-product-title");
  const priceAlertForm = document.getElementById("price-alert-form");
  const alertTargetPrice = document.getElementById("alert-target-price");
  let currentAlertProductId = null;

  // Toast
  const toastContainer = document.getElementById("toast-container");

  // --- INITIALIZATION ---
  initTheme();
  generateFilterElements();
  parseURLParameters();
  updateCompareDeck();
  applyFiltersAndRender();
  setupEventListeners();

  // --- FUNCTIONS ---

  // Theme Handling
  function parseURLParameters() {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");
    if (search) {
      state.filters.search = decodeURIComponent(search);
      searchInput.value = state.filters.search;
    }
  }

  function initTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    if (state.theme === "light") {
      themeIconDark.style.display = "none";
      themeIconLight.style.display = "block";
    } else {
      themeIconDark.style.display = "block";
      themeIconLight.style.display = "none";
    }
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", state.theme);
    initTheme();
    showToast(`Switched to ${state.theme} mode`, "success");
    
    // Redraw any open canvases to match new color scheme
    document.querySelectorAll(".price-history-drawer.active canvas").forEach(canvas => {
      const productId = canvas.dataset.productId;
      const product = state.products.find(p => p.id === productId);
      if (product) {
        const selectedStorage = state.selectedVariants[productId] || product.variants[0].storage;
        const variantData = product.variants.find(v => v.storage === selectedStorage) || product.variants[0];
        drawTrendChart(canvas, variantData.history);
      }
    });
  }

  // Populate Brands and Stores dynamically from database
  function generateFilterElements() {
    // Brands
    const brands = [...new Set(state.products.map(p => p.brand))];
    const brandContainer = document.getElementById("brand-filter-list");
    brandContainer.innerHTML = brands.map(brand => `
      <label class="checkbox-label">
        <input type="checkbox" class="brand-checkbox" value="${brand}">
        <div class="checkbox-custom"></div>
        <span>${brand}</span>
      </label>
    `).join("");

    // Stores (mapped from nested variants)
    const stores = [...new Set(state.products.flatMap(p => p.variants.flatMap(v => v.deals.map(d => d.store))))];
    const storeContainer = document.getElementById("store-filter-list");
    storeContainer.innerHTML = stores.map(store => `
      <label class="checkbox-label">
        <input type="checkbox" class="store-checkbox" value="${store}">
        <div class="checkbox-custom"></div>
        <span style="text-transform: capitalize;">${store}</span>
      </label>
    `).join("");
  }

  // Formatting helpers
  function formatPrice(num) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  }

  // Filter & Sort Logic
  function applyFiltersAndRender() {
    state.filteredProducts = state.products.filter(product => {
      // Search check (samsung s25 fe, iphone 16 pro, etc.)
      if (state.filters.search) {
        const query = state.filters.search.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        if (!matchesTitle && !matchesBrand) {
          return false;
        }
      }

      // Rating check
      if (product.rating < state.filters.rating) {
        return false;
      }

      // Brand filter check
      if (state.filters.brands.length > 0 && !state.filters.brands.includes(product.brand)) {
        return false;
      }

      // Deals filter (Store & Price) based on the currently selected storage variant
      const selectedStorage = state.selectedVariants[product.id] || product.variants[0].storage;
      const variantData = product.variants.find(v => v.storage === selectedStorage) || product.variants[0];

      const validDeals = variantData.deals.filter(deal => {
        // Store check
        if (state.filters.stores.length > 0 && !state.filters.stores.includes(deal.store)) {
          return false;
        }
        // Price check
        if (deal.price < state.filters.priceRange.min || deal.price > state.filters.priceRange.max) {
          return false;
        }
        return true;
      });

      if (validDeals.length === 0) {
        return false;
      }

      return true;
    });

    // Sort Logic
    state.filteredProducts.sort((a, b) => {
      const aSelected = state.selectedVariants[a.id] || a.variants[0].storage;
      const aVariant = a.variants.find(v => v.storage === aSelected) || a.variants[0];
      const bSelected = state.selectedVariants[b.id] || b.variants[0].storage;
      const bVariant = b.variants.find(v => v.storage === bSelected) || b.variants[0];

      const aMinPrice = Math.min(...aVariant.deals.map(d => d.price));
      const bMinPrice = Math.min(...bVariant.deals.map(d => d.price));

      if (state.sortBy === "price-asc") {
        return aMinPrice - bMinPrice;
      } else if (state.sortBy === "price-desc") {
        return bMinPrice - aMinPrice;
      } else if (state.sortBy === "rating") {
        return b.rating - a.rating;
      } else { // "popular"
        return b.reviews - a.reviews;
      }
    });

    renderProductGrid();
    renderHeroSection();
  }

  // Render products to screen
  function renderProductGrid() {
    visibleCountEl.textContent = state.filteredProducts.length;
    productsGrid.innerHTML = "";

    if (state.filteredProducts.length === 0) {
      productsGrid.innerHTML = `
        <div class="empty-state glass">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3>No products match your filters</h3>
          <p>Try resetting the filters or broadening your search criteria.</p>
          <button id="empty-state-reset" class="btn-primary">Reset Filters</button>
        </div>
      `;
      const emptyReset = document.getElementById("empty-state-reset");
      if (emptyReset) {
        emptyReset.addEventListener("click", resetAllFilters);
      }
      return;
    }

    state.filteredProducts.forEach(product => {
      // Determine selected storage variant
      const selectedStorage = state.selectedVariants[product.id] || product.variants[0].storage;
      if (!state.selectedVariants[product.id]) {
        state.selectedVariants[product.id] = selectedStorage;
      }
      
      const variantData = product.variants.find(v => v.storage === selectedStorage) || product.variants[0];

      // Sort deals ascending by price
      const sortedDeals = [...variantData.deals].sort((a, b) => a.price - b.price);
      const lowestPrice = sortedDeals[0].price;
      const highestPrice = sortedDeals[sortedDeals.length - 1].price;
      const saving = highestPrice - lowestPrice;
      const bestStore = sortedDeals[0].store;
      
      const mrp = Math.round((lowestPrice * 1.18) / 100) * 100 - 1;
      const discountPct = Math.round(((mrp - lowestPrice) / mrp) * 100);

      const isCompared = state.compareList.includes(product.id);

      const card = document.createElement("div");
      card.className = "product-card glass";
      card.dataset.id = product.id;

      card.innerHTML = `
        <div class="card-image-wrapper">
          <div class="card-badges">
            <span class="badge badge-brand">${product.brand}</span>
            ${saving > 0 ? `<span class="badge badge-discount">Cheapest on ${bestStore}</span>` : ''}
          </div>
          ${product.image ? `<img src="${product.image}" class="product-img" alt="${product.title}">` : product.svg}
        </div>
        
        <div class="card-content">
          <div class="card-meta">
            <span class="card-category">Smartphones</span>
            <div class="card-rating">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>${product.rating}</span>
            </div>
            <span style="font-size: 11px; color: var(--text-secondary);">(${product.reviews.toLocaleString('en-IN')} ratings)</span>
          </div>
          
          <h3 class="card-title" title="${product.title}">${product.title}</h3>
          
          <!-- Storage Selector Chips -->
          <div class="variant-selector">
            ${product.variants.map(v => `
              <button class="variant-chip ${v.storage === selectedStorage ? 'active' : ''}" data-id="${product.id}" data-storage="${v.storage}">
                ${v.storage}
              </button>
            `).join("")}
          </div>

          <!-- Amazon/Flipkart style pricing structure -->
          <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 12px; margin-top: 4px;">
            <span style="font-size: 18px; font-weight: 700; color: var(--text-primary);">${formatPrice(lowestPrice)}</span>
            <span style="font-size: 12px; text-decoration: line-through; color: var(--text-secondary);">${formatPrice(mrp)}</span>
            <span style="font-size: 12px; font-weight: 700; color: var(--success);">${discountPct}% off</span>
          </div>
          
          <!-- Price Comparison List -->
          <div class="deals-list">
            ${sortedDeals.map((deal, idx) => `
              <div class="deal-item ${idx === 0 ? 'best-deal' : ''} ${deal.stock ? '' : 'out-of-stock'}">
                <div class="deal-store-info">
                  <span class="store-badge store-${deal.store.toLowerCase().replace(' ', '-')}">${deal.store}</span>
                  ${!deal.stock ? '<span style="font-size: 10px; color: var(--danger); font-weight:600;">Out of Stock</span>' : ''}
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="deal-price">${formatPrice(deal.price)}</span>
                  <button class="deal-link-btn redirect-trigger" data-store="${deal.store}" data-url="${deal.url}" title="Go to Store" ${deal.stock ? '' : 'disabled'}>
                    <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
          
          ${saving > 0 ? `
            <div class="best-saving-text">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Save ${formatPrice(saving)} by buying on ${bestStore}!</span>
            </div>
          ` : ''}

          <!-- Actions -->
          <div class="card-actions">
            <button class="card-btn compare-toggle-btn ${isCompared ? 'active' : ''}" data-id="${product.id}">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"></path>
              </svg>
              <span>${isCompared ? 'Added' : 'Compare'}</span>
            </button>
            <button class="card-btn trend-toggle-btn" data-id="${product.id}">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              <span>Price Trend</span>
            </button>
            <button class="card-btn alert-setup-btn" data-id="${product.id}" style="grid-column: span 2;" title="Alert me when price drops">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              <span>Set Price Drop Alert</span>
            </button>
          </div>
        </div>

        <!-- Hidden Price History Drawer -->
        <div class="price-history-drawer" id="history-drawer-${product.id}">
          <div class="chart-header">
            <span class="chart-title">6-Month Price Trend</span>
            <span class="chart-trend trend-down">
              ${calculateTrendPercent(variantData.history)}
            </span>
          </div>
          <div class="price-canvas-wrapper">
            <canvas id="canvas-${product.id}" data-product-id="${product.id}" width="300" height="80"></canvas>
          </div>
        </div>
      `;

      card.addEventListener("click", (e) => {
        if (e.target.closest(".card-btn") || e.target.closest(".redirect-trigger") || e.target.closest(".variant-chip")) {
          return;
        }
        window.location.href = `details.html?id=${product.id}`;
      });

      productsGrid.appendChild(card);
    });

    // Wire up listeners inside grid
    wireGridEventListeners();
  }

  function renderHeroSection() {
    const heroGrid = document.getElementById("hero-products-grid");
    if (!heroGrid) return;
    
    // Sort products by rating descending to get the top 3 rated smartphones
    const topRated = [...state.products]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
      
    heroGrid.innerHTML = topRated.map(p => {
      const selectedStorage = state.selectedVariants[p.id] || p.variants[0].storage;
      const variantData = p.variants.find(v => v.storage === selectedStorage) || p.variants[0];
      const lowestPrice = Math.min(...variantData.deals.map(d => d.price));
      
      return `
        <div class="hero-card" data-id="${p.id}" data-search-term="${p.brand} ${p.title.split(' ')[1]}">
          <div class="hero-card-img-wrapper">
            ${p.image ? `<img src="${p.image}" class="product-img" alt="${p.title}">` : p.svg}
          </div>
          <div class="hero-card-content">
            <h4 class="hero-card-title">${p.title.split(' (')[0]}</h4>
            <div class="hero-card-price">Starting at <strong>${formatPrice(lowestPrice)}</strong></div>
            <div class="hero-card-meta">
              <span class="hero-card-rating">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                ${p.rating}
              </span>
              <span style="font-size: 10px; color: var(--text-secondary);">(${p.reviews} reviews)</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
    
    // Bind click events to hero cards
    document.querySelectorAll(".hero-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        const searchTerm = card.dataset.searchTerm;
        
        searchInput.value = searchTerm;
        state.filters.search = searchTerm;
        applyFiltersAndRender();
        
        // Highlight card in main grid
        setTimeout(() => {
          const mainCard = document.querySelector(`.product-card[data-id="${id}"]`);
          if (mainCard) {
            mainCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            mainCard.style.outline = "2px solid var(--accent-orange)";
            mainCard.style.boxShadow = "var(--shadow-hover)";
            setTimeout(() => {
              mainCard.style.outline = "none";
            }, 2000);
          }
        }, 300);
      });
    });
  }

  function calculateTrendPercent(history) {
    if (history.length < 2) return "0% change";
    const start = history[0];
    const end = history[history.length - 1];
    const diff = end - start;
    const pct = ((diff / start) * 100).toFixed(1);
    if (diff < 0) {
      return `-${Math.abs(pct)}% (Price Drop)`;
    } else if (diff > 0) {
      return `+${pct}% (Price Rise)`;
    } else {
      return "Stable";
    }
  }

  // Draw Price Trend Line on Canvas
  function drawTrendChart(canvas, history) {
    const ctx = canvas.getContext("2d");
    const width = canvas.width = canvas.parentElement.clientWidth;
    const height = canvas.height = 80;

    ctx.clearRect(0, 0, width, height);

    // Padding inside canvas
    const paddingX = 35;
    const paddingY = 15;
    const chartW = width - paddingX * 2;
    const chartH = height - paddingY * 2;

    const minPrice = Math.min(...history) * 0.98; // Margin below min
    const maxPrice = Math.max(...history) * 1.02; // Margin above max
    const priceDiff = maxPrice - minPrice;

    const points = history.map((price, idx) => {
      const x = paddingX + (idx / (history.length - 1)) * chartW;
      const y = paddingY + chartH - ((price - minPrice) / priceDiff) * chartH;
      return { x, y, price };
    });

    // Draw Grid Lines (Horizontal dotted lines)
    ctx.strokeStyle = state.theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    for (let i = 0; i <= 2; i++) {
      const y = paddingY + (i / 2) * chartH;
      ctx.beginPath();
      ctx.moveTo(paddingX, y);
      ctx.lineTo(width - paddingX, y);
      ctx.stroke();
    }
    ctx.setLineDash([]); // Reset line dash

    // Draw Line Gradient Fill
    const fillGrad = ctx.createLinearGradient(0, paddingY, 0, height - paddingY);
    if (state.theme === "dark") {
      fillGrad.addColorStop(0, "rgba(59, 130, 246, 0.2)");
      fillGrad.addColorStop(1, "rgba(59, 130, 246, 0.0)");
    } else {
      fillGrad.addColorStop(0, "rgba(30, 58, 138, 0.15)");
      fillGrad.addColorStop(1, "rgba(30, 58, 138, 0.0)");
    }

    ctx.beginPath();
    ctx.moveTo(points[0].x, height - paddingY);
    points.forEach((p, idx) => {
      if (idx === 0) {
        ctx.lineTo(p.x, p.y);
      } else {
        // Curve connection
        const prev = points[idx - 1];
        const cpX1 = prev.x + (p.x - prev.x) / 2;
        const cpY1 = prev.y;
        const cpX2 = prev.x + (p.x - prev.x) / 2;
        const cpY2 = p.y;
        ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, p.x, p.y);
      }
    });
    ctx.lineTo(points[points.length - 1].x, height - paddingY);
    ctx.closePath();
    ctx.fillStyle = fillGrad;
    ctx.fill();

    // Draw Core Trend Line
    ctx.beginPath();
    points.forEach((p, idx) => {
      if (idx === 0) {
        ctx.moveTo(p.x, p.y);
      } else {
        const prev = points[idx - 1];
        const cpX1 = prev.x + (p.x - prev.x) / 2;
        const cpY1 = prev.y;
        const cpX2 = prev.x + (p.x - prev.x) / 2;
        const cpY2 = p.y;
        ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, p.x, p.y);
      }
    });
    ctx.strokeStyle = state.theme === "dark" ? "#3b82f6" : "#1e3a8a";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Draw Points & Labels
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    ctx.fillStyle = state.theme === "dark" ? "#ffffff" : "#000000";
    ctx.font = "9px Inter, sans-serif";
    ctx.textAlign = "center";

    points.forEach((p, idx) => {
      // Small circles for first and last point
      if (idx === 0 || idx === points.length - 1) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = state.theme === "dark" ? "#3b82f6" : "#1e3a8a";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }

      // Draw Month Label at bottom
      ctx.fillStyle = varColor("--text-muted");
      ctx.fillText(months[idx], p.x, height - 2);

      // Draw Prices on hover or endpoints
      if (idx === 0 || idx === points.length - 1) {
        ctx.fillStyle = varColor("--text-secondary");
        ctx.fontWeight = "600";
        // Format simplified price (e.g. 1.25L or 125k)
        const displayVal = p.price >= 100000 
          ? `₹${(p.price / 100000).toFixed(2)}L` 
          : `₹${(p.price / 1000).toFixed(0)}k`;
        ctx.fillText(displayVal, p.x, p.y - 6);
      }
    });
  }

  // Get CSS Variable value
  function varColor(cssVarName) {
    return getComputedStyle(document.documentElement).getPropertyValue(cssVarName).trim();
  }

  // Wire event handlers to dynamic nodes inside the grid
  function wireGridEventListeners() {
    // Redirect Trigger
    document.querySelectorAll(".redirect-trigger").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const storeName = btn.dataset.store;
        const targetUrl = btn.dataset.url;
        triggerRedirectPortal(storeName, targetUrl);
      });
    });

    // Compare Toggle
    document.querySelectorAll(".compare-toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        toggleCompareItem(id);
      });
    });

    // Storage Variant Chip Click
    document.querySelectorAll(".variant-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const productId = chip.dataset.id;
        const storage = chip.dataset.storage;
        state.selectedVariants[productId] = storage;
        applyFiltersAndRender();
        
        // Re-open trend drawer if it was active
        const trendBtn = document.querySelector(`.trend-toggle-btn[data-id="${productId}"]`);
        if (trendBtn && trendBtn.classList.contains("active")) {
          const drawer = document.getElementById(`history-drawer-${productId}`);
          const canvas = document.getElementById(`canvas-${productId}`);
          const product = state.products.find(p => p.id === productId);
          if (drawer && canvas && product) {
            const variantData = product.variants.find(v => v.storage === storage) || product.variants[0];
            drawTrendChart(canvas, variantData.history);
          }
        }
      });
    });

    // Trend Toggle
    document.querySelectorAll(".trend-toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const drawer = document.getElementById(`history-drawer-${id}`);
        const canvas = document.getElementById(`canvas-${id}`);
        const product = state.products.find(p => p.id === id);

        drawer.classList.toggle("active");
        btn.classList.toggle("active");

        if (drawer.classList.contains("active") && product) {
          const selectedStorage = state.selectedVariants[id] || product.variants[0].storage;
          const variantData = product.variants.find(v => v.storage === selectedStorage) || product.variants[0];
          setTimeout(() => drawTrendChart(canvas, variantData.history), 50);
        }
      });
    });

    // Alert Modal Trigger
    document.querySelectorAll(".alert-setup-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        openPriceAlertModal(id);
      });
    });
  }

  // Autocomplete Suggestions
  function renderAutocomplete(query) {
    if (!query) {
      autocompleteDropdown.classList.remove("active");
      return;
    }

    const matches = state.products.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    if (matches.length === 0) {
      autocompleteDropdown.classList.remove("active");
      return;
    }

    autocompleteDropdown.innerHTML = matches.map(p => `
      <div class="autocomplete-item" data-id="${p.id}">
        <span class="autocomplete-title">${p.title}</span>
        <span class="autocomplete-category">${p.brand}</span>
      </div>
    `).join("");

    autocompleteDropdown.classList.add("active");

    // Add click listeners to items
    document.querySelectorAll(".autocomplete-item").forEach(item => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        const selectedProduct = state.products.find(p => p.id === id);
        if (selectedProduct) {
          searchInput.value = selectedProduct.title;
          state.filters.search = selectedProduct.title;
          autocompleteDropdown.classList.remove("active");
          applyFiltersAndRender();
        }
      });
    });
  }

  // Compare List Logic
  function toggleCompareItem(id) {
    const idx = state.compareList.indexOf(id);
    if (idx > -1) {
      state.compareList.splice(idx, 1);
      showToast("Product removed from comparison list", "success");
    } else {
      if (state.compareList.length >= 3) {
        showToast("You can compare up to 3 products at a time", "warning");
        return;
      }
      state.compareList.push(id);
      showToast("Product added to comparison", "success");
    }

    localStorage.setItem("compareList", JSON.stringify(state.compareList));
    updateCompareDeck();
    
    // Toggle active state on grid buttons
    document.querySelectorAll(`.compare-toggle-btn[data-id="${id}"]`).forEach(btn => {
      const isCompared = state.compareList.includes(id);
      if (isCompared) {
        btn.classList.add("active");
        btn.querySelector("span").textContent = "Added";
      } else {
        btn.classList.remove("active");
        btn.querySelector("span").textContent = "Compare";
      }
    });
  }

  function updateCompareDeck() {
    if (state.compareList.length > 0) {
      compareDeck.classList.add("active");
      compareDeckItems.innerHTML = state.compareList.map(id => {
        const prod = state.products.find(p => p.id === id);
        return `
          <div class="compare-deck-item">
            <span style="max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              ${prod ? prod.brand + ' ' + prod.title.split(' ')[1] : ''}
            </span>
            <svg fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-id="${id}" class="remove-compare-deck">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        `;
      }).join("");

      // Bind remove buttons inside compare deck
      document.querySelectorAll(".remove-compare-deck").forEach(svg => {
        svg.addEventListener("click", () => {
          toggleCompareItem(svg.dataset.id);
        });
      });
    } else {
      compareDeck.classList.remove("active");
    }
  }

  // Show side-by-side specs in compare modal
  function showComparisonModal() {
    if (state.compareList.length === 0) return;

    compareGrid.innerHTML = "";
    
    // Draw columns
    state.compareList.forEach(id => {
      const prod = state.products.find(p => p.id === id);
      if (!prod) return;

      const selectedStorage = state.selectedVariants[id] || prod.variants[0].storage;
      const variantData = prod.variants.find(v => v.storage === selectedStorage) || prod.variants[0];
      const sortedDeals = [...variantData.deals].sort((a, b) => a.price - b.price);
      
      const col = document.createElement("div");
      col.className = "compare-column";
      col.innerHTML = `
        <div class="compare-product-header">
          ${prod.image ? `<img src="${prod.image}" class="product-img" alt="${prod.title}">` : prod.svg}
          <div class="compare-product-title">${prod.title}</div>
          <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Variant: <strong>${selectedStorage}</strong></div>
          <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Rating: ${prod.rating} ★ (${prod.reviews} reviews)</div>
        </div>
        
        <!-- Spec Details -->
        <div style="flex:1;">
          <h4 style="font-size: 12px; border-bottom: 1px solid var(--border-color); padding-bottom: 4px; margin-bottom: 8px;">Specifications</h4>
          ${Object.entries(prod.specs).map(([key, val]) => `
            <div class="compare-spec-row">
              <div class="compare-spec-label">${key}</div>
              <div class="compare-spec-value">${val}</div>
            </div>
          `).join("")}
        </div>

        <!-- Deals Comparison -->
        <div class="compare-price-summary">
          <h4 style="font-size: 12px; border-bottom: 1px solid var(--border-color); padding-bottom: 4px; margin-bottom: 8px;">Deals comparison</h4>
          ${sortedDeals.map((deal, idx) => `
            <div class="compare-price-item">
              <span style="font-weight: 500; text-transform: capitalize;">${deal.store}:</span>
              <span style="font-weight: 700; ${idx === 0 ? 'color: var(--success);' : ''}">${formatPrice(deal.price)}</span>
            </div>
          `).join("")}
          
          <button class="btn-primary redirect-trigger" data-store="${sortedDeals[0].store}" data-url="${sortedDeals[0].url}" style="width: 100%; margin-top: 12px; font-size: 13px;">
            Buy for ${formatPrice(sortedDeals[0].price)}
          </button>
        </div>
      `;

      // Wire redirect trigger inside modal column
      col.querySelector(".redirect-trigger").addEventListener("click", () => {
        triggerRedirectPortal(sortedDeals[0].store, sortedDeals[0].url);
      });

      compareGrid.appendChild(col);
    });

    compareModal.classList.add("active");
  }

  // Portal Redirection Animation Simulation
  function triggerRedirectPortal(store, url) {
    // Set icon
    redirectStoreLogo.className = `spinner-icon store-${store.toLowerCase().replace(' ', '-')}`;
    redirectStoreLogo.textContent = store.charAt(0).toUpperCase();
    redirectDetails.innerHTML = `Finding the best deals on <strong>${store}</strong>...`;
    
    // Reset steps
    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const step3 = document.getElementById("step-3");
    
    [step1, step2, step3].forEach(step => {
      step.className = "redirect-step";
      step.querySelector("svg").style.display = "none";
    });

    // Show modal
    redirectModal.classList.add("active");
    
    // Sequence timelines
    step1.classList.add("active");
    
    setTimeout(() => {
      step1.classList.remove("active");
      step1.classList.add("done");
      step1.querySelector("svg").style.display = "block";
      step2.classList.add("active");
    }, 500);

    setTimeout(() => {
      step2.classList.remove("active");
      step2.classList.add("done");
      step2.querySelector("svg").style.display = "block";
      step3.classList.add("active");
    }, 1000);

    setTimeout(() => {
      step3.classList.remove("active");
      step3.classList.add("done");
      step3.querySelector("svg").style.display = "block";
      redirectDetails.innerHTML = `Success! Redirecting you to the <strong>${store}</strong> portal...`;
    }, 1500);

    setTimeout(() => {
      redirectModal.classList.remove("active");
      window.open(url, "_blank");
      showToast(`Redirected to ${store}`, "success");
    }, 2200);
  }

  // Price Drop Alert
  function openPriceAlertModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    currentAlertProductId = productId;
    const selectedStorage = state.selectedVariants[productId] || product.variants[0].storage;
    priceAlertProductTitle.textContent = `Get alerts for: ${product.title} (${selectedStorage})`;
    
    const variantData = product.variants.find(v => v.storage === selectedStorage) || product.variants[0];
    const lowestPrice = Math.min(...variantData.deals.map(d => d.price));
    alertTargetPrice.value = Math.round(lowestPrice * 0.95); // default to 5% drop
    
    priceAlertModal.classList.add("active");
  }

  // Reset Filters
  function resetAllFilters() {
    state.filters = {
      search: "",
      priceRange: { min: 0, max: 160000 },
      categories: [],
      brands: [],
      stores: [],
      rating: 0
    };
    
    // Reset inputs
    searchInput.value = "";
    priceMinInput.value = 0;
    priceMaxInput.value = 160000;
    priceSlider.value = 160000;
    
    // Uncheck checkboxes
    document.querySelectorAll(".category-checkbox, .brand-checkbox, .store-checkbox").forEach(box => box.checked = false);
    // Reset rating radios
    const firstRadio = document.querySelector('input[name="rating-filter"][value="0"]');
    if (firstRadio) firstRadio.checked = true;

    showToast("Filters reset successfully", "success");
    applyFiltersAndRender();
  }

  // Toast System
  function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type} glass`;
    toast.innerHTML = `
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Fade out and remove
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      setTimeout(() => toast.remove(), 400);
    }, 2500);
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Theme toggle click
    themeToggleBtn.addEventListener("click", toggleTheme);

    // Search events
    searchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      state.filters.search = val;
      renderAutocomplete(val);
      applyFiltersAndRender();
    });

    // Hide suggestions dropdown on click outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-container")) {
        autocompleteDropdown.classList.remove("active");
      }
    });

    // Reset filters click
    filterResetBtn.addEventListener("click", resetAllFilters);

    // Sorting
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      applyFiltersAndRender();
    });

    // Price Inputs Change
    priceMinInput.addEventListener("change", (e) => {
      state.filters.priceRange.min = parseInt(e.target.value) || 0;
      applyFiltersAndRender();
    });

    priceMaxInput.addEventListener("change", (e) => {
      const val = parseInt(e.target.value) || 160000;
      state.filters.priceRange.max = val;
      priceSlider.value = val;
      applyFiltersAndRender();
    });

    // Price Slider Change
    priceSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      priceMaxInput.value = val;
      state.filters.priceRange.max = val;
      applyFiltersAndRender();
    });

    // Checkboxes change events (Delegated style)
    // Category checklist is removed since page features smartphones exclusively

    document.getElementById("brand-filter-list").addEventListener("change", () => {
      state.filters.brands = Array.from(document.querySelectorAll(".brand-checkbox:checked")).map(b => b.value);
      applyFiltersAndRender();
    });

    document.getElementById("store-filter-list").addEventListener("change", () => {
      state.filters.stores = Array.from(document.querySelectorAll(".store-checkbox:checked")).map(b => b.value);
      applyFiltersAndRender();
    });

    // Rating Filter Change
    document.getElementById("rating-filter-list").addEventListener("change", (e) => {
      if (e.target.name === "rating-filter") {
        state.filters.rating = parseFloat(e.target.value) || 0;
        applyFiltersAndRender();
      }
    });

    // Compare Now Button
    compareNowBtn.addEventListener("click", showComparisonModal);

    // Compare Modal Close
    compareModalClose.addEventListener("click", () => compareModal.classList.remove("active"));
    compareModal.addEventListener("click", (e) => {
      if (e.target === compareModal) compareModal.classList.remove("active");
    });

    // Price Alert Modal Close
    priceAlertClose.addEventListener("click", () => priceAlertModal.classList.remove("active"));
    priceAlertModal.addEventListener("click", (e) => {
      if (e.target === priceAlertModal) priceAlertModal.classList.remove("active");
    });

    // Price Alert Submit
    priceAlertForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("alert-email").value;
      const targetPrice = alertTargetPrice.value;
      const product = state.products.find(p => p.id === currentAlertProductId);
      
      priceAlertModal.classList.remove("active");
      priceAlertForm.reset();
      
      showToast(`Success! Price alert activated for ${product ? product.brand : 'product'} at ${formatPrice(targetPrice)}!`, "success");
    });

    // Mobile filters toggler
    mobileFilterToggle.style.display = window.innerWidth <= 1024 ? "grid" : "none";
    window.addEventListener("resize", () => {
      mobileFilterToggle.style.display = window.innerWidth <= 1024 ? "grid" : "none";
    });

    mobileFilterToggle.addEventListener("click", () => {
      filtersSidebar.classList.toggle("active");
    });

    // Close mobile filters sidebar when clicking outside
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 1024 && filtersSidebar.classList.contains("active")) {
        if (!filtersSidebar.contains(e.target) && e.target !== mobileFilterToggle && !mobileFilterToggle.contains(e.target)) {
          filtersSidebar.classList.remove("active");
        }
      }
    });

    // Logo click reset
    document.getElementById("logo-btn").addEventListener("click", (e) => {
      e.preventDefault();
      resetAllFilters();
    });
  }
});
