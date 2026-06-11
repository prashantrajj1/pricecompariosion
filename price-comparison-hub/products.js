// Smartphone Price Database with Storage Variants (Flipkart, Amazon, Croma, Reliance Digital)
const PRODUCTS_DATA = [
  {
    id: "samsung-s25-fe",
    title: "Samsung Galaxy S25 FE 5G (Titanium Graphite)",
    brand: "Samsung",
    rating: 4.5,
    image: "samsung_s25_fe.png",
    reviews: 120,
    specs: {
      "Display": "6.4-inch Dynamic AMOLED 2X, 120Hz",
      "Processor": "Exynos 2500 / Snapdragon 8 Gen 4",
      "Camera": "50MP Main | 12MP Ultra Wide | 8MP Telephoto",
      "Battery": "4600 mAh with 25W fast charging",
      "OS": "Android 15 (One UI 7)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="s25fe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3e4149" />
          <stop offset="100%" stop-color="#181a1d" />
        </linearGradient>
      </defs>
      <rect x="30" y="10" width="60" height="100" rx="6" fill="url(#s25fe-grad)" stroke="#222" stroke-width="1.5"/>
      <rect x="33" y="12" width="54" height="96" rx="4" fill="#0c0e12"/>
      <circle cx="60" cy="16" r="1.5" fill="#333"/>
    </svg>`,
    variants: [
      {
        storage: "128GB",
        deals: [
          { store: "Flipkart", price: 54999, url: "https://www.flipkart.com/search?q=samsung+s25+fe", rating: 4.4, stock: true },
          { store: "Amazon", price: 55999, url: "https://www.amazon.in/s?k=samsung+s25+fe", rating: 4.5, stock: true },
          { store: "Croma", price: 56900, url: "https://www.croma.com/search?text=samsung+s25+fe", rating: 4.3, stock: true }
        ],
        history: [59999, 58999, 57999, 56999, 55999, 54999]
      },
      {
        storage: "256GB",
        deals: [
          { store: "Flipkart", price: 59999, url: "https://www.flipkart.com/search?q=samsung+s25+fe", rating: 4.4, stock: true },
          { store: "Amazon", price: 60999, url: "https://www.amazon.in/s?k=samsung+s25+fe", rating: 4.5, stock: true },
          { store: "Croma", price: 61900, url: "https://www.croma.com/search?text=samsung+s25+fe", rating: 4.3, stock: true }
        ],
        history: [64999, 63999, 62999, 61999, 60999, 59999]
      }
    ]
  },
  {
    id: "iphone-16-pro",
    title: "Apple iPhone 16 Pro (Desert Titanium)",
    brand: "Apple",
    rating: 4.9,
    image: "iphone_16_pro.png",
    reviews: 840,
    specs: {
      "Display": "6.3-inch Super Retina XDR OLED, 120Hz",
      "Processor": "A18 Pro chip with 6-core GPU",
      "Camera": "48MP Fusion | 48MP Ultra Wide | 12MP 5x Telephoto",
      "Battery": "Up to 25 hours video playback",
      "OS": "iOS 18 (Apple Intelligence)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="i16-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c5b49f" />
          <stop offset="50%" stop-color="#dfd3c3" />
          <stop offset="100%" stop-color="#a3907c" />
        </linearGradient>
      </defs>
      <rect x="32" y="10" width="56" height="100" rx="12" fill="url(#i16-grad)" stroke="#6b5e4f" stroke-width="1.5"/>
      <rect x="35" y="13" width="50" height="94" rx="9" fill="#0d0d0e"/>
      <rect x="52" y="16" width="16" height="4" rx="2" fill="#000"/>
    </svg>`,
    variants: [
      {
        storage: "128GB",
        deals: [
          { store: "Flipkart", price: 129900, url: "https://www.flipkart.com/search?q=iphone+16+pro", rating: 4.9, stock: true },
          { store: "Amazon", price: 129900, url: "https://www.amazon.in/s?k=iphone+16+pro", rating: 4.8, stock: true },
          { store: "Croma", price: 131900, url: "https://www.croma.com/search?text=iphone+16+pro", rating: 4.7, stock: true }
        ],
        history: [134900, 134900, 131900, 129900, 129900, 129900]
      },
      {
        storage: "256GB",
        deals: [
          { store: "Flipkart", price: 139900, url: "https://www.flipkart.com/search?q=iphone+16+pro", rating: 4.9, stock: true },
          { store: "Amazon", price: 139900, url: "https://www.amazon.in/s?k=iphone+16+pro", rating: 4.9, stock: true },
          { store: "Croma", price: 141900, url: "https://www.croma.com/search?text=iphone+16+pro", rating: 4.7, stock: true }
        ],
        history: [144900, 144900, 141900, 139900, 139900, 139900]
      },
      {
        storage: "512GB",
        deals: [
          { store: "Flipkart", price: 159900, url: "https://www.flipkart.com/search?q=iphone+16+pro", rating: 4.9, stock: true },
          { store: "Amazon", price: 159900, url: "https://www.amazon.in/s?k=iphone+16+pro", rating: 4.8, stock: true },
          { store: "Croma", price: 161900, url: "https://www.croma.com/search?text=iphone+16+pro", rating: 4.8, stock: true }
        ],
        history: [164900, 164900, 161900, 159900, 159900, 159900]
      }
    ]
  },
  {
    id: "iphone-15-pro",
    title: "Apple iPhone 15 Pro (Natural Titanium)",
    brand: "Apple",
    rating: 4.8,
    image: "iphone_15_pro.png",
    reviews: 1420,
    specs: {
      "Display": "6.1-inch Super Retina XDR OLED, 120Hz",
      "Processor": "A17 Pro chip with 6-core GPU",
      "Camera": "48MP Main | 12MP Ultra Wide | 12MP Telephoto",
      "Battery": "Up to 23 hours video playback",
      "OS": "iOS 17 (Upgradable to iOS 18)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="32" y="10" width="56" height="100" rx="12" fill="#b3b5b3" stroke="#3a3c3a" stroke-width="1.5"/>
      <rect x="35" y="13" width="50" height="94" rx="9" fill="#0d0d0e"/>
      <rect x="52" y="17" width="16" height="4" rx="2" fill="#000"/>
    </svg>`,
    variants: [
      {
        storage: "128GB",
        deals: [
          { store: "Flipkart", price: 124900, url: "https://www.flipkart.com/search?q=iphone+15+pro", rating: 4.7, stock: true },
          { store: "Croma", price: 127900, url: "https://www.croma.com/search?text=iphone+15+pro", rating: 4.6, stock: true },
          { store: "Amazon", price: 129900, url: "https://www.amazon.in/s?k=iphone+15+pro", rating: 4.8, stock: true },
          { store: "Reliance Digital", price: 128900, url: "https://www.reliancedigital.in/search?q=iphone+15+pro", rating: 4.5, stock: false }
        ],
        history: [134900, 132900, 129900, 128000, 126900, 124900]
      },
      {
        storage: "256GB",
        deals: [
          { store: "Flipkart", price: 134900, url: "https://www.flipkart.com/search?q=iphone+15+pro", rating: 4.7, stock: true },
          { store: "Croma", price: 137900, url: "https://www.croma.com/search?text=iphone+15+pro", rating: 4.6, stock: true },
          { store: "Amazon", price: 139900, url: "https://www.amazon.in/s?k=iphone+15+pro", rating: 4.8, stock: true }
        ],
        history: [144900, 142900, 139900, 138000, 136900, 134900]
      }
    ]
  },
  {
    id: "samsung-s24-ultra",
    title: "Samsung Galaxy S24 Ultra (Titanium Gray)",
    brand: "Samsung",
    rating: 4.7,
    image: "samsung_s24_ultra.png",
    reviews: 985,
    specs: {
      "Display": "6.8-inch Dynamic AMOLED 2X, 120Hz",
      "Processor": "Snapdragon 8 Gen 3 for Galaxy",
      "Camera": "200MP Main | 50MP + 10MP Telephoto | 12MP Ultra Wide",
      "Battery": "5000 mAh with 45W charging",
      "OS": "Android 14 (One UI 6.1)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="10" width="64" height="100" rx="4" fill="#878c96" stroke="#222" stroke-width="1.5"/>
      <rect x="31" y="12" width="58" height="96" rx="2" fill="#0c0e12"/>
      <circle cx="60" cy="16" r="1.5" fill="#000"/>
    </svg>`,
    variants: [
      {
        storage: "256GB",
        deals: [
          { store: "Amazon", price: 124999, url: "https://www.amazon.in/s?k=samsung+s24+ultra", rating: 4.7, stock: true },
          { store: "Reliance Digital", price: 125999, url: "https://www.reliancedigital.in/search?q=samsung+s24+ultra", rating: 4.6, stock: true },
          { store: "Flipkart", price: 129999, url: "https://www.flipkart.com/search?q=samsung+s24+ultra", rating: 4.4, stock: true },
          { store: "Croma", price: 126900, url: "https://www.croma.com/search?text=samsung+s24+ultra", rating: 4.5, stock: true }
        ],
        history: [134999, 132000, 129999, 127500, 125999, 124999]
      },
      {
        storage: "512GB",
        deals: [
          { store: "Amazon", price: 134999, url: "https://www.amazon.in/s?k=samsung+s24+ultra", rating: 4.7, stock: true },
          { store: "Reliance Digital", price: 135999, url: "https://www.reliancedigital.in/search?q=samsung+s24+ultra", rating: 4.6, stock: true },
          { store: "Flipkart", price: 139999, url: "https://www.flipkart.com/search?q=samsung+s24+ultra", rating: 4.4, stock: true }
        ],
        history: [144999, 142000, 139999, 137500, 135999, 134999]
      }
    ]
  },
  {
    id: "oneplus-12",
    title: "OnePlus 12 (Flowy Emerald)",
    brand: "OnePlus",
    rating: 4.6,
    image: "oneplus_12.png",
    reviews: 620,
    specs: {
      "Display": "6.82-inch 2K Oriental AMOLED, 120Hz",
      "Processor": "Snapdragon 8 Gen 3",
      "Camera": "50MP Main | 64MP Periscope | 48MP Ultra Wide",
      "Battery": "5400 mAh with 100W SuperVOOC",
      "OS": "Android 14 (OxygenOS)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="10" width="60" height="100" rx="10" fill="#2c6b56" stroke="#111" stroke-width="1.5"/>
      <rect x="32" y="12" width="56" height="96" rx="8" fill="#090d0b"/>
      <circle cx="40" cy="17" r="1.5" fill="#000"/>
    </svg>`,
    variants: [
      {
        storage: "256GB",
        deals: [
          { store: "Croma", price: 64499, url: "https://www.croma.com/search?text=oneplus+12", rating: 4.6, stock: true },
          { store: "Amazon", price: 64999, url: "https://www.amazon.in/s?k=oneplus+12", rating: 4.7, stock: true },
          { store: "Flipkart", price: 65499, url: "https://www.flipkart.com/search?q=oneplus+12", rating: 4.4, stock: true }
        ],
        history: [69999, 68999, 66999, 65999, 64999, 64499]
      },
      {
        storage: "512GB",
        deals: [
          { store: "Croma", price: 69499, url: "https://www.croma.com/search?text=oneplus+12", rating: 4.6, stock: true },
          { store: "Amazon", price: 69999, url: "https://www.amazon.in/s?k=oneplus+12", rating: 4.7, stock: true },
          { store: "Flipkart", price: 70499, url: "https://www.flipkart.com/search?q=oneplus+12", rating: 4.4, stock: true }
        ],
        history: [74999, 73999, 71999, 70999, 69999, 69499]
      }
    ]
  },
  {
    id: "pixel-8-pro",
    title: "Google Pixel 8 Pro (Bay Blue)",
    brand: "Google",
    rating: 4.6,
    image: "pixel_8_pro.png",
    reviews: 812,
    specs: {
      "Display": "6.7-inch Super Actua display, 120Hz",
      "Processor": "Google Tensor G3 chip with Titan M2",
      "Camera": "50MP Main | 48MP Wide | 48MP Zoom",
      "Battery": "5050 mAh with 30W charging",
      "OS": "Android 14 (Stock Android)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="32" y="10" width="56" height="100" rx="10" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
      <rect x="35" y="13" width="50" height="94" rx="8" fill="#0c0e12"/>
      <rect x="32" y="24" width="56" height="12" fill="#c0c0c0" stroke="#a0a0a0" stroke-width="0.5"/>
      <circle cx="42" cy="30" r="2.5" fill="#000"/>
      <circle cx="50" cy="30" r="2.5" fill="#000"/>
    </svg>`,
    variants: [
      {
        storage: "128GB",
        deals: [
          { store: "Flipkart", price: 91999, url: "https://www.flipkart.com/search?q=pixel+8+pro", rating: 4.5, stock: true },
          { store: "Amazon", price: 93999, url: "https://www.amazon.in/s?k=pixel+8+pro", rating: 4.6, stock: true },
          { store: "Reliance Digital", price: 92499, url: "https://www.reliancedigital.in/search?q=pixel+8+pro", rating: 4.4, stock: true }
        ],
        history: [99999, 97999, 95999, 93999, 92999, 91999]
      },
      {
        storage: "256GB",
        deals: [
          { store: "Flipkart", price: 98999, url: "https://www.flipkart.com/search?q=pixel+8+pro", rating: 4.5, stock: true },
          { store: "Amazon", price: 99999, url: "https://www.amazon.in/s?k=pixel+8+pro", rating: 4.6, stock: true },
          { store: "Croma", price: 99490, url: "https://www.croma.com/search?text=pixel+8+pro", rating: 4.3, stock: true }
        ],
        history: [106999, 104999, 102999, 100999, 99999, 98999]
      }
    ]
  },
  {
    id: "nothing-phone-2a",
    title: "Nothing Phone (2a) 5G (White)",
    brand: "Nothing",
    rating: 4.5,
    image: "nothing_phone_2a.png",
    reviews: 1930,
    specs: {
      "Display": "6.7-inch Flexible AMOLED, 120Hz",
      "Processor": "MediaTek Dimensity 7200 Pro",
      "Camera": "50MP Dual rear camera | 32MP Front",
      "Interface": "Glyph Interface light system",
      "OS": "Android 14 (Nothing OS 2.5)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="31" y="10" width="58" height="100" rx="14" fill="#fafafa" stroke="#e0e0e0" stroke-width="2"/>
      <rect x="34" y="13" width="52" height="94" rx="11" fill="#0d0d0d"/>
    </svg>`,
    variants: [
      {
        storage: "128GB",
        deals: [
          { store: "Flipkart", price: 23499, url: "https://www.flipkart.com/search?q=nothing+phone+2a", rating: 4.6, stock: true },
          { store: "Amazon", price: 23999, url: "https://www.amazon.in/s?k=nothing+phone+2a", rating: 4.4, stock: true },
          { store: "Croma", price: 23999, url: "https://www.croma.com/search?text=nothing+phone+2a", rating: 4.5, stock: true }
        ],
        history: [25999, 24999, 23999, 23999, 23999, 23499]
      },
      {
        storage: "256GB",
        deals: [
          { store: "Flipkart", price: 25999, url: "https://www.flipkart.com/search?q=nothing+phone+2a", rating: 4.6, stock: true },
          { store: "Amazon", price: 26999, url: "https://www.amazon.in/s?k=nothing+phone+2a", rating: 4.4, stock: true },
          { store: "Croma", price: 26900, url: "https://www.croma.com/search?text=nothing+phone+2a", rating: 4.5, stock: true }
        ],
        history: [28999, 27999, 26999, 26999, 26999, 25999]
      }
    ]
  },
  {
    id: "oneplus-nord-ce4",
    title: "OnePlus Nord CE4 (Celadon Marble)",
    brand: "OnePlus",
    rating: 4.5,
    image: "oneplus_nord_ce4.png",
    reviews: 2840,
    specs: {
      "Display": "6.7-inch Fluid AMOLED, 120Hz",
      "Processor": "Snapdragon 7 Gen 3",
      "Camera": "50MP Sony LYT-600 | 8MP Ultra Wide",
      "Battery": "5500 mAh with 100W charging",
      "OS": "Android 14 (OxygenOS)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="31" y="10" width="58" height="100" rx="9" fill="#72b596" stroke="#5ea181" stroke-width="1.5"/>
      <rect x="33" y="12" width="54" height="96" rx="7" fill="#0d110f"/>
    </svg>`,
    variants: [
      {
        storage: "128GB",
        deals: [
          { store: "Flipkart", price: 24790, url: "https://www.flipkart.com/search?q=oneplus+nord+ce4", rating: 4.5, stock: true },
          { store: "Amazon", price: 24999, url: "https://www.amazon.in/s?k=oneplus+nord+ce4", rating: 4.5, stock: true },
          { store: "Croma", price: 24999, url: "https://www.croma.com/search?text=oneplus+nord+ce4", rating: 4.4, stock: true }
        ],
        history: [26999, 25999, 25499, 24999, 24999, 24790]
      },
      {
        storage: "256GB",
        deals: [
          { store: "Flipkart", price: 26790, url: "https://www.flipkart.com/search?q=oneplus+nord+ce4", rating: 4.5, stock: true },
          { store: "Amazon", price: 26999, url: "https://www.amazon.in/s?k=oneplus+nord+ce4", rating: 4.5, stock: true },
          { store: "Croma", price: 26999, url: "https://www.croma.com/search?text=oneplus+nord+ce4", rating: 4.4, stock: true }
        ],
        history: [28999, 27999, 27499, 26999, 26999, 26790]
      }
    ]
  },
  {
    id: "redmi-note-13-pro",
    title: "Redmi Note 13 Pro 5G (Coral Purple)",
    brand: "Xiaomi",
    rating: 4.4,
    image: "redmi_note_13_pro.png",
    reviews: 3512,
    specs: {
      "Display": "6.67-inch 1.5K CrystalRes AMOLED",
      "Processor": "Snapdragon 7s Gen 2",
      "Camera": "200MP Main with OIS | 8MP + 2MP",
      "Battery": "5100 mAh with 67W charging",
      "OS": "Android 13 (Upgradable to HyperOS)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="31" y="10" width="58" height="100" rx="9" fill="#a694bf" stroke="#8d77ad" stroke-width="1.5"/>
      <rect x="33" y="12" width="54" height="96" rx="7" fill="#0d0b11"/>
    </svg>`,
    variants: [
      {
        storage: "128GB",
        deals: [
          { store: "Flipkart", price: 22999, url: "https://www.flipkart.com/search?q=redmi+note+13+pro", rating: 4.4, stock: true },
          { store: "Croma", price: 23499, url: "https://www.croma.com/search?text=redmi+note+13+pro", rating: 4.3, stock: true },
          { store: "Amazon", price: 23999, url: "https://www.amazon.in/s?k=redmi+note+13+pro", rating: 4.4, stock: true }
        ],
        history: [25999, 24999, 24999, 23999, 23999, 22999]
      },
      {
        storage: "256GB",
        deals: [
          { store: "Flipkart", price: 24999, url: "https://www.flipkart.com/search?q=redmi+note+13+pro", rating: 4.4, stock: true },
          { store: "Croma", price: 25499, url: "https://www.croma.com/search?text=redmi+note+13+pro", rating: 4.3, stock: true },
          { store: "Amazon", price: 25999, url: "https://www.amazon.in/s?k=redmi+note+13+pro", rating: 4.4, stock: true }
        ],
        history: [28999, 27999, 26999, 26499, 25999, 24999]
      }
    ]
  },
  {
    id: "realme-gt-6t",
    title: "Realme GT 6T 5G (Fluid Silver)",
    brand: "Realme",
    rating: 4.4,
    image: "realme_gt_6t.png",
    reviews: 1720,
    specs: {
      "Display": "6.78-inch 8T LTPO AMOLED, 120Hz",
      "Processor": "Snapdragon 7+ Gen 3",
      "Camera": "50MP OIS Main | 8MP Ultra Wide",
      "Battery": "5500 mAh with 120W SUPERVOOC",
      "OS": "Android 14 (Realme UI 5)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="31" y="10" width="58" height="100" rx="10" fill="#9ca3af" stroke="#4b5563" stroke-width="1.5"/>
      <rect x="33" y="12" width="54" height="96" rx="8" fill="#0f0f12"/>
    </svg>`,
    variants: [
      {
        storage: "128GB",
        deals: [
          { store: "Flipkart", price: 30499, url: "https://www.flipkart.com/search?q=realme+gt+6t", rating: 4.3, stock: true },
          { store: "Croma", price: 30900, url: "https://www.croma.com/search?text=realme+gt+6t", rating: 4.4, stock: true },
          { store: "Amazon", price: 30999, url: "https://www.amazon.in/s?k=realme+gt+6t", rating: 4.5, stock: true }
        ],
        history: [32999, 32999, 31999, 30999, 30999, 30499]
      },
      {
        storage: "256GB",
        deals: [
          { store: "Flipkart", price: 32999, url: "https://www.flipkart.com/search?q=realme+gt+6t", rating: 4.3, stock: true },
          { store: "Croma", price: 33400, url: "https://www.croma.com/search?text=realme+gt+6t", rating: 4.4, stock: true },
          { store: "Amazon", price: 33999, url: "https://www.amazon.in/s?k=realme+gt+6t", rating: 4.5, stock: true }
        ],
        history: [35999, 35999, 34999, 33999, 33999, 32999]
      }
    ]
  },
  {
    id: "vivo-v30-pro",
    title: "Vivo V30 Pro 5G (Classic Black)",
    brand: "Vivo",
    rating: 4.6,
    image: "vivo_v30_pro.png",
    reviews: 940,
    specs: {
      "Display": "6.78-inch curved AMOLED, 120Hz, 2800 nits",
      "Processor": "MediaTek Dimensity 8200",
      "Camera": "ZEISS 50MP Main | 50MP Portrait | 50MP Ultra Wide",
      "Battery": "5000 mAh with 80W charging",
      "OS": "Android 14 (Funtouch OS 14)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vivo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2d3035" />
          <stop offset="100%" stop-color="#121315" />
        </linearGradient>
      </defs>
      <rect x="31" y="10" width="58" height="100" rx="12" fill="url(#vivo-grad)" stroke="#222" stroke-width="1.5"/>
      <rect x="33" y="12" width="54" height="96" rx="10" fill="#000"/>
      <!-- Square camera module with Aura light representation -->
      <rect x="42" y="24" width="36" height="24" rx="2" fill="#1c1d21" opacity="0.3"/>
    </svg>`,
    variants: [
      {
        storage: "256GB",
        deals: [
          { store: "Flipkart", price: 41999, url: "https://www.flipkart.com/search?q=vivo+v30+pro", rating: 4.5, stock: true },
          { store: "Amazon", price: 42999, url: "https://www.amazon.in/s?k=vivo+v30+pro", rating: 4.6, stock: true },
          { store: "Croma", price: 41999, url: "https://www.croma.com/search?text=vivo+v30+pro", rating: 4.4, stock: true }
        ],
        history: [44999, 43999, 42999, 42999, 41999, 41999]
      },
      {
        storage: "512GB",
        deals: [
          { store: "Flipkart", price: 46999, url: "https://www.flipkart.com/search?q=vivo+v30+pro", rating: 4.5, stock: true },
          { store: "Amazon", price: 47999, url: "https://www.amazon.in/s?k=vivo+v30+pro", rating: 4.6, stock: true },
          { store: "Croma", price: 46999, url: "https://www.croma.com/search?text=vivo+v30+pro", rating: 4.4, stock: true }
        ],
        history: [49999, 48999, 47999, 47999, 46999, 46999]
      }
    ]
  },
  {
    id: "motorola-edge-50-pro",
    title: "Motorola Edge 50 Pro 5G (Luxe Lavender)",
    brand: "Motorola",
    rating: 4.5,
    image: "motorola_edge_50_pro.png",
    reviews: 1410,
    specs: {
      "Display": "6.7-inch 1.5K pOLED curved display, 144Hz",
      "Processor": "Snapdragon 7 Gen 3",
      "Camera": "50MP Main | 13MP Ultra Wide | 10MP Telephoto",
      "Battery": "4500 mAh with 125W TurboPower",
      "OS": "Android 14 (Hello UI)"
    },
    svg: `<svg viewBox="0 0 120 120" class="product-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="moto-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b8a6d9" />
          <stop offset="100%" stop-color="#937abf" />
        </linearGradient>
      </defs>
      <rect x="31" y="10" width="58" height="100" rx="12" fill="url(#moto-grad)" stroke="#7e66ab" stroke-width="1.5"/>
      <rect x="33" y="12" width="54" height="96" rx="10" fill="#0b080f"/>
    </svg>`,
    variants: [
      {
        storage: "256GB",
        deals: [
          { store: "Flipkart", price: 31999, url: "https://www.flipkart.com/search?q=motorola+edge+50+pro", rating: 4.4, stock: true },
          { store: "Amazon", price: 32999, url: "https://www.amazon.in/s?k=motorola+edge+50+pro", rating: 4.5, stock: true },
          { store: "Croma", price: 31999, url: "https://www.croma.com/search?text=motorola+edge+50+pro", rating: 4.3, stock: true }
        ],
        history: [35999, 34999, 33999, 32999, 32999, 31999]
      }
    ]
  }
];
