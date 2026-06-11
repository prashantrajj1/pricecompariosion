// SmartCompare Product Details Page Logic

document.addEventListener("DOMContentLoaded", () => {
  // --- STATE ---
  const state = {
    products: PRODUCTS_DATA,
    product: null,
    activeVariantIndex: 0,
    theme: localStorage.getItem("theme") || "light",
    compareList: JSON.parse(localStorage.getItem("compareList") || "[]"),
    reviewsFilter: "all"
  };

  // --- SELECTORS ---
  const searchInput = document.getElementById("search-input");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIconDark = document.getElementById("theme-icon-dark");
  const themeIconLight = document.getElementById("theme-icon-light");
  const detailsRoot = document.getElementById("details-root");

  // Modals
  const redirectModal = document.getElementById("redirect-modal");
  const redirectStoreLogo = document.getElementById("redirect-store-logo");
  const redirectDetails = document.getElementById("redirect-details");
  const toastContainer = document.getElementById("toast-container");

  // --- INITIALIZATION ---
  initTheme();
  parseQueryAndLoad();
  setupEventListeners();

  // --- FUNCTIONS ---

  // Theme Handling
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
  }

  // Parse product ID from query parameter
  function parseQueryAndLoad() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    
    if (!id) {
      showError("No smartphone ID provided. Redirecting to home page...");
      setTimeout(() => window.location.href = "index.html", 2500);
      return;
    }

    state.product = state.products.find(p => p.id === id);

    if (!state.product) {
      showError(`Smartphone with ID "${id}" was not found. Redirecting to home page...`);
      setTimeout(() => window.location.href = "index.html", 2500);
      return;
    }

    renderProductDetails();
  }

  function showError(msg) {
    detailsRoot.innerHTML = `
      <div class="empty-state glass">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="color: var(--danger);">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        <h3>An Error Occurred</h3>
        <p>${msg}</p>
      </div>
    `;
  }

  function formatPrice(num) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  }

  // Render specifications layout exactly matching screenshot details
  function renderProductDetails() {
    const p = state.product;
    const isCompared = state.compareList.includes(p.id);

    // Initial variant is the first one
    const activeVariant = p.variants[state.activeVariantIndex];

    // Compute mock ratings and expert stats
    const ratingPct = Math.round(p.rating * 20);
    const expertScore = (p.rating * 1.8 + 0.1).toFixed(1); // e.g. 4.5 -> 8.2

    // Get mock release dates matching screenshot details
    let releaseDate = "11 Mar 2026";
    if (p.id.includes("iphone-16")) releaseDate = "20 Sep 2024";
    else if (p.id.includes("s24")) releaseDate = "25 Jan 2024";
    else if (p.id.includes("oneplus-12")) releaseDate = "23 Jan 2024";
    else if (p.id.includes("nothing")) releaseDate = "12 Mar 2024";

    detailsRoot.innerHTML = `
      <!-- Title Block -->
      <div class="product-detail-header">
        <div class="product-detail-title-block">
          <h1 class="product-detail-name">${p.title.split(' (')[0]}</h1>
          <div class="product-detail-meta">
            <span>Market Status: <span class="meta-status">Available</span></span>
            <span>|</span>
            <span>Released on: <span class="meta-status">${releaseDate}</span></span>
            <span>|</span>
            <div class="rating-capsule">
              <span>★</span>
              <span>${p.rating}/5</span>
              <span style="font-size: 11px; font-weight: normal; opacity: 0.85;">(${p.reviews} Ratings)</span>
            </div>
            <span>|</span>
            <div class="expert-capsule">
              <span>⟲</span>
              <span>${expertScore}/10</span>
              <span style="font-size: 11px; font-weight: normal; opacity: 0.85;">By Expert</span>
            </div>
            <span>|</span>
            <a href="#" class="write-review-link" id="write-review-btn">Write a Review</a>
          </div>
        </div>
        
        <button class="detail-compare-btn ${isCompared ? 'active' : ''}" id="detail-compare-toggle" data-id="${p.id}">
          <span>${isCompared ? '✓ Added' : '+ Compare'}</span>
        </button>
      </div>

      <!-- Main Layout Grid -->
      <div class="product-detail-grid">
        
        <!-- Left: Image Gallery Card -->
        <div class="detail-gallery-card">
          <div class="detail-image-wrapper">
            <img src="${p.image}" class="detail-main-img" id="detail-main-image" alt="${p.title}">
          </div>
          
          <!-- Slider dots -->
          <div class="gallery-indicators">
            <span class="indicator-dot active" data-index="0"></span>
            <span class="indicator-dot" data-index="1"></span>
            <span class="indicator-dot" data-index="2"></span>
            <span class="indicator-dot" data-index="3"></span>
          </div>
          
          <a href="#" class="view-gallery-link" id="view-gallery-btn">View Gallery</a>
          
          <!-- Thumbnails Strip -->
          <div class="gallery-thumbnails">
            <button class="thumb-btn active" data-index="0">
              <img src="${p.image}" alt="Phone Front">
            </button>
            <button class="thumb-btn" data-index="1">
              <img src="${p.image}" alt="Phone Back" style="filter: hue-rotate(45deg);">
            </button>
            <button class="thumb-btn" data-index="2">
              <img src="${p.image}" alt="Phone Angle" style="filter: hue-rotate(90deg);">
            </button>
            <button class="thumb-btn thumb-btn-more" id="more-photos-btn">
              +38 Photos
            </button>
            <button class="thumb-btn thumb-btn-360" id="rotate-360-btn" title="View in 360 degrees">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Right: Specifications Details -->
        <div class="detail-specs-section">
          <h2 class="detail-specs-title">Key Specifications</h2>
          <div class="specs-grid" id="specs-grid-container">
            <!-- Dynamically Rendered Spec Boxes -->
          </div>
          
          <a href="#" class="view-full-specs" id="view-full-specs-btn">
            View Full Specs 
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>

      </div>

      <!-- Live Prices Variant Accordions -->
      <div class="price-comparison-section">
        <h3 class="section-divider-title">${p.title.split(' (')[0]} Prices</h3>
        <div class="accordions-container" id="accordions-container">
          <!-- Accordion Items Rendered Dynamically -->
        </div>
      </div>

      <!-- Real Flipkart Customer Reviews & User Photos -->
      <div class="customer-reviews-section" id="customer-reviews-container">
        <!-- Rendered Dynamically -->
      </div>
    `;

    renderKeySpecs(activeVariant.storage);
    renderPriceAccordions();
    renderReviews();
    wireEventListenersInsideDetails();
  }

  // Generate specification values alongside vector SVGs
  function renderKeySpecs(activeStorage) {
    const p = state.product;
    const container = document.getElementById("specs-grid-container");
    if (!container) return;

    // Spec definitions matching database keys
    const specItems = [
      {
        label: "Processor",
        value: p.specs["Processor"] || "Octa Core CPU",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>`
      },
      {
        label: "Display",
        value: p.specs["Display"] || "AMOLED Screen",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`
      },
      {
        label: "Rear Camera",
        value: (p.specs["Camera"] || "50 MP").split(" | ")[0],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`
      },
      {
        label: "Front Camera",
        value: (p.specs["Camera"] || "16 MP").includes("|") ? p.specs["Camera"].split(" | ").pop().replace(" Front", "") : "12 MP Front Camera",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M18 21a6 6 0 0 0-12 0"/></svg>`
      },
      {
        label: "RAM | Storage",
        value: activeStorage.includes("128GB") ? "8 GB | " + activeStorage : "12 GB | " + activeStorage,
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 21v-4M12 21v-4M17 21v-4M7 3v4M12 3v4M17 3v4"/></svg>`
      },
      {
        label: "Battery",
        value: p.specs["Battery"] || "5000 mAh Power Cell",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="11" x2="23" y2="13"/></svg>`
      },
      {
        label: "Network",
        value: "Dual SIM: 5G & 5G support",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18l-8-4-8 4z"/></svg>`
      },
      {
        label: "OS",
        value: p.specs["OS"] || "Android 14 OS",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0z"/><path d="M12 10a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0z"/><path d="M8 2v2M16 2v2"/></svg>`
      }
    ];

    container.innerHTML = specItems.map(spec => `
      <div class="spec-box">
        <div class="spec-icon-wrapper">
          ${spec.icon}
        </div>
        <div class="spec-text">
          <div class="spec-label">${spec.label}</div>
          <div class="spec-value" title="${spec.value}">${spec.value}</div>
        </div>
      </div>
    `).join("");
  }

  // Render variant accordions exactly matching screenshot details
  function renderPriceAccordions() {
    const p = state.product;
    const container = document.getElementById("accordions-container");
    if (!container) return;

    container.innerHTML = p.variants.map((v, idx) => {
      const sortedDeals = [...v.deals].sort((a, b) => a.price - b.price);
      const lowestPrice = sortedDeals[0].price;
      const isActive = idx === state.activeVariantIndex;

      // Extract RAM based on Storage capacity
      const ramStr = v.storage.includes("128GB") ? "8 GB" : "12 GB";

      return `
        <div class="accordion-item ${isActive ? 'active' : ''}" data-index="${idx}">
          <div class="accordion-header">
            <div class="accordion-header-left">
              <div class="variant-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 21v-4M12 21v-4M17 21v-4M7 3v4M12 3v4M17 3v4"/></svg>
              </div>
              <span class="variant-name">${ramStr} + ${v.storage}</span>
            </div>
            <div class="accordion-header-right">
              <span class="starting-price-text">Starting from <strong>${formatPrice(lowestPrice)}</strong></span>
              <div class="accordion-chevron">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
          
          <div class="accordion-body" style="max-height: ${isActive ? '500px' : '0'};">
            <div class="accordion-deals-list">
              ${sortedDeals.map(deal => `
                <div class="accordion-deal-item ${deal.stock ? '' : 'out-of-stock'}">
                  <div class="accordion-deal-store">
                    <span class="store-badge store-${deal.store.toLowerCase().replace(' ', '-')}">${deal.store}</span>
                    <span class="accordion-store-label">${deal.store}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 20px;">
                    <span class="accordion-deal-price">${formatPrice(deal.price)}</span>
                    <button class="go-to-store-btn detail-redirect-trigger" data-store="${deal.store}" data-url="${deal.url}" ${deal.stock ? '' : 'disabled'}>
                      Go To Store
                    </button>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Bind Accordion Header Toggle Events
    document.querySelectorAll(".accordion-header").forEach(header => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
        const index = parseInt(item.dataset.index);
        const isActive = item.classList.contains("active");

        // Collapse all items
        document.querySelectorAll(".accordion-item").forEach(acc => {
          acc.classList.remove("active");
          acc.querySelector(".accordion-body").style.maxHeight = "0";
        });

        if (!isActive) {
          item.classList.add("active");
          const body = item.querySelector(".accordion-body");
          body.style.maxHeight = body.scrollHeight + "px";
          state.activeVariantIndex = index;
          
          // Dynamically update RAM | Storage in spec sheet
          const variant = p.variants[index];
          renderKeySpecs(variant.storage);
        }
      });
    });

    // Bind Redirect triggers
    document.querySelectorAll(".detail-redirect-trigger").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const storeName = btn.dataset.store;
        const targetUrl = btn.dataset.url;
        triggerRedirectPortal(storeName, targetUrl);
      });
    });
  }

  // Wire other dynamic details events
  function wireEventListenersInsideDetails() {
    const compareToggle = document.getElementById("detail-compare-toggle");
    if (compareToggle) {
      compareToggle.addEventListener("click", () => {
        const id = compareToggle.dataset.id;
        toggleCompareItem(id);
      });
    }

    // Thumbnail slide mockup clicks
    document.querySelectorAll(".thumb-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".thumb-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const index = btn.dataset.index;
        // Mock dots transition
        document.querySelectorAll(".indicator-dot").forEach(dot => {
          dot.classList.remove("active");
          if (dot.dataset.index === index) dot.classList.add("active");
        });

        // Add filter transformations to show different angles
        const mainImg = document.getElementById("detail-main-image");
        if (index === "1") {
          mainImg.style.transform = "rotateY(180deg) scale(0.95)";
        } else if (index === "2") {
          mainImg.style.transform = "rotate(10deg) scale(1.02)";
        } else {
          mainImg.style.transform = "none";
        }
      });
    });

    // More Photos Alert
    const moreBtn = document.getElementById("more-photos-btn");
    if (moreBtn) {
      moreBtn.addEventListener("click", () => {
        showToast("Gallery photos loaded: +38 HD pictures of " + state.product.brand + " details", "success");
      });
    }

    // 360 Rotation mockup alert
    const rotBtn = document.getElementById("rotate-360-btn");
    if (rotBtn) {
      rotBtn.addEventListener("click", () => {
        showToast("Starting 360° interactive product tour for " + state.product.brand, "success");
      });
    }

    const reviewBtn = document.getElementById("write-review-btn");
    if (reviewBtn) {
      reviewBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("Review portal launched! Thank you for sharing your feedback.", "success");
      });
    }
  }

  // Compare Toggle helper (saves in localStorage to share state with index.html)
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
    
    // Toggle active state on compare button
    const btn = document.getElementById("detail-compare-toggle");
    if (btn) {
      const isCompared = state.compareList.includes(id);
      if (isCompared) {
        btn.classList.add("active");
        btn.querySelector("span").textContent = "✓ Added";
      } else {
        btn.classList.remove("active");
        btn.querySelector("span").textContent = "+ Compare";
      }
    }
  }

  // Redirection transition simulation
  function triggerRedirectPortal(store, url) {
    // Set icon
    redirectStoreLogo.className = `spinner-icon store-${store.toLowerCase().replace(' ', '-')}`;
    redirectStoreLogo.textContent = store.charAt(0).toUpperCase();
    redirectDetails.innerHTML = `Finding the best deals on <strong>${store}</strong>...`;
    
    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const step3 = document.getElementById("step-3");
    
    [step1, step2, step3].forEach(step => {
      step.className = "redirect-step";
      step.querySelector("svg").style.display = "none";
    });

    redirectModal.classList.add("active");
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

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      setTimeout(() => toast.remove(), 400);
    }, 2500);
  }

  function renderReviews() {
    const p = state.product;
    const container = document.getElementById("customer-reviews-container");
    if (!container) return;

    const reviews = (typeof REVIEWS_DATA !== 'undefined' && REVIEWS_DATA[p.id]) ? REVIEWS_DATA[p.id] : [];
    
    if (reviews.length === 0) {
      container.innerHTML = `
        <h3 class="section-divider-title">Real Flipkart Customer Reviews</h3>
        <p style="color: var(--text-secondary); font-size: 13px;">No customer reviews are currently available for this device.</p>
      `;
      return;
    }

    // Sort descending by rating
    const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);

    // Count ratings for breakdown
    const starCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(r => {
      if (starCounts[r.rating] !== undefined) {
        starCounts[r.rating]++;
      }
    });

    // Calculate percentages
    const totalReviewsCount = reviews.length;
    const starPercentages = {};
    for (let i = 1; i <= 5; i++) {
      starPercentages[i] = totalReviewsCount > 0 ? Math.round((starCounts[i] / totalReviewsCount) * 100) : 0;
    }

    // Compute average rating
    const avgRating = totalReviewsCount > 0 
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviewsCount).toFixed(1) 
      : p.rating;
    
    const starsHtml = '★'.repeat(Math.round(avgRating)) + '☆'.repeat(5 - Math.round(avgRating));

    // Extract all customer images across all reviews
    const allImages = [];
    reviews.forEach(r => {
      if (r.images && Array.isArray(r.images)) {
        r.images.forEach(imgUrl => allImages.push(imgUrl));
      }
    });

    let photosGalleryHtml = '';
    if (allImages.length > 0) {
      photosGalleryHtml = `
        <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 12px; color: var(--text-primary);">Customer Photos (${allImages.length})</h4>
        <div class="reviews-photos-gallery">
          ${allImages.map(imgUrl => `
            <div class="review-photo-card review-lightbox-trigger" data-src="${imgUrl}">
              <img src="${imgUrl}" alt="Customer Uploaded Photo">
            </div>
          `).join("")}
        </div>
      `;
    }

    // Apply Filter
    let filteredReviews = [...sortedReviews];
    if (state.reviewsFilter === '5') {
      filteredReviews = filteredReviews.filter(r => r.rating === 5);
    } else if (state.reviewsFilter === '4') {
      filteredReviews = filteredReviews.filter(r => r.rating === 4);
    } else if (state.reviewsFilter === '3-below') {
      filteredReviews = filteredReviews.filter(r => r.rating <= 3);
    } else if (state.reviewsFilter === 'photos') {
      filteredReviews = filteredReviews.filter(r => r.images && r.images.length > 0);
    }

    let reviewsListHtml = '';
    if (filteredReviews.length === 0) {
      reviewsListHtml = `
        <div style="color: var(--text-secondary); font-size: 14px; text-align: center; padding: 40px 0; background: var(--bg-primary); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
          No customer reviews match this filter option. Try selecting another rating.
        </div>
      `;
    } else {
      reviewsListHtml = filteredReviews.map(r => {
        let reviewImagesHtml = '';
        if (r.images && r.images.length > 0) {
          reviewImagesHtml = `
            <div class="review-images-strip">
              ${r.images.map(imgUrl => `
                <button class="review-thumb-btn review-lightbox-trigger" data-src="${imgUrl}">
                  <img src="${imgUrl}" alt="Customer Thumbnail">
                </button>
              `).join("")}
            </div>
          `;
        }

        return `
          <div class="review-card">
            <div class="review-card-header">
              <div class="review-author-info">
                <span class="review-author-name">${r.author}</span>
                <span class="review-verified-badge">
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20" style="display:inline; margin-top:-2px;">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  Certified Buyer
                </span>
              </div>
              <div class="review-rating-badge">
                <span>${r.rating}</span>
                <span>★</span>
              </div>
            </div>
            <div class="review-title">${r.title}</div>
            <p class="review-text">${r.text}</p>
            ${reviewImagesHtml}
          </div>
        `;
      }).join("");
    }

    container.innerHTML = `
      <h3 class="section-divider-title">Real Flipkart Customer Reviews</h3>
      
      <!-- Dashboard -->
      <div class="reviews-dashboard">
        <div class="rating-summary-box">
          <div class="rating-big-number">${avgRating}</div>
          <div class="rating-summary-stars">${starsHtml}</div>
          <div class="rating-summary-count">${p.reviews.toLocaleString()} Ratings &<br>${totalReviewsCount} Reviews</div>
        </div>
        <div class="rating-breakdown-box">
          <div class="breakdown-row">
            <span class="breakdown-label">5 ★</span>
            <div class="breakdown-bar-bg">
              <div class="breakdown-bar-fill" style="width: ${starPercentages[5]}%"></div>
            </div>
            <span class="breakdown-percent">${starPercentages[5]}%</span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">4 ★</span>
            <div class="breakdown-bar-bg">
              <div class="breakdown-bar-fill" style="width: ${starPercentages[4]}%"></div>
            </div>
            <span class="breakdown-percent">${starPercentages[4]}%</span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">3 ★</span>
            <div class="breakdown-bar-bg">
              <div class="breakdown-bar-fill" style="width: ${starPercentages[3]}%"></div>
            </div>
            <span class="breakdown-percent">${starPercentages[3]}%</span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">2 ★</span>
            <div class="breakdown-bar-bg">
              <div class="breakdown-bar-fill" style="width: ${starPercentages[2]}%"></div>
            </div>
            <span class="breakdown-percent">${starPercentages[2]}%</span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">1 ★</span>
            <div class="breakdown-bar-bg">
              <div class="breakdown-bar-fill" style="width: ${starPercentages[1]}%"></div>
            </div>
            <span class="breakdown-percent">${starPercentages[1]}%</span>
          </div>
        </div>
      </div>

      ${photosGalleryHtml}

      <!-- Filter Bar -->
      <div class="reviews-filter-bar">
        <span class="filter-bar-label">Filter Reviews:</span>
        <button class="filter-chip ${state.reviewsFilter === 'all' ? 'active' : ''}" data-filter="all">All Reviews (${reviews.length})</button>
        <button class="filter-chip ${state.reviewsFilter === '5' ? 'active' : ''}" data-filter="5">5 Star (${starCounts[5]})</button>
        <button class="filter-chip ${state.reviewsFilter === '4' ? 'active' : ''}" data-filter="4">4 Star (${starCounts[4]})</button>
        <button class="filter-chip ${state.reviewsFilter === '3-below' ? 'active' : ''}" data-filter="3-below">3 Star & Below (${starCounts[3] + starCounts[2] + starCounts[1]})</button>
        <button class="filter-chip ${state.reviewsFilter === 'photos' ? 'active' : ''}" data-filter="photos">With Photos Only (${reviews.filter(r => r.images && r.images.length > 0).length})</button>
      </div>

      <div class="reviews-list-container">
        ${reviewsListHtml}
      </div>
    `;

    // Bind click events for Lightbox modal
    document.querySelectorAll(".review-lightbox-trigger").forEach(el => {
      el.addEventListener("click", () => {
        openImageLightbox(el.dataset.src);
      });
    });

    // Bind click events for filter chips
    container.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        state.reviewsFilter = chip.dataset.filter;
        renderReviews();
      });
    });
  }

  function openImageLightbox(src) {
    const lightbox = document.createElement("div");
    lightbox.className = "modal-overlay active";
    lightbox.style.zIndex = "400";
    lightbox.innerHTML = `
      <div class="modal-content glass" style="max-width: 600px; text-align: center; padding: 16px;">
        <button class="modal-close-btn" id="lightbox-close" style="top:12px; right:12px;">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <img src="${src}" style="max-width: 100%; max-height: 80vh; object-fit: contain; border-radius: var(--radius-md);">
      </div>
    `;
    document.body.appendChild(lightbox);
    
    lightbox.querySelector("#lightbox-close").addEventListener("click", () => lightbox.remove());
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.remove();
    });
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Theme toggle click
    themeToggleBtn.addEventListener("click", toggleTheme);

    // Search input (redirects back to index.html with active search term)
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && searchInput.value.trim() !== "") {
        const query = encodeURIComponent(searchInput.value.trim());
        window.location.href = `index.html?search=${query}`;
      }
    });
  }
});
