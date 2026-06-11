# SmartCompare Hub 📱

**SmartCompare Hub** is a premium, feature-rich smartphone price comparison and customer review analysis web application. It fetches, organizes, and displays real-time prices from top e-commerce websites (Amazon, Flipkart, etc.) along with comprehensive device specifications and authentic customer reviews (including buyer-uploaded photos).

---

## ✨ Key Features

### 1. 📊 Interactive Reviews Dashboard
- **Average Rating Summary**: Displays a dynamically calculated average score of actual customer reviews.
- **Visual Progress Bars**: A 5-star to 1-star visual percentage progress bar breakdown indicating ratings distribution.
- **Systematic Sorting**: Reviews are automatically sorted in descending order by rating (highest rating first).
- **Interactive Filter Chips**: Action pills allowing users to filter reviews instantly:
  - *All Reviews*
  - *5 Star*
  - *4 Star*
  - *3 Star & Below*
  - *With Photos Only* (Filters reviews containing buyer-uploaded attachments)

### 2. 💰 Live Price Comparison & Variants
- **Variant Accordions**: View prices dynamically adjusted by storage configurations (e.g., *8 GB + 128GB* vs *12 GB + 256GB*).
- **Go To Store Redirect**: A simulated, multi-step secure checkout redirect portal leading users directly to their selected store (Amazon, Flipkart).

### 3. 🔍 Live Search & Specifications Sheet
- **Specifications Card**: Fully detailed key specifications grid containing animated vector icons (processor, display, front/rear cameras, RAM/storage, battery, network, OS).
- **Search Auto-Suggestions**: Intelligent home page search queries with smart redirects.

### 4. 🌓 Theme Customization
- Fully integrated glassmorphic **Light & Dark Mode** toggle preserving configuration state across sessions using local storage.

---

## 🛠️ Technology Stack

- **Frontend**: Vanilla HTML5, Custom CSS3 Variables, ES6+ JavaScript.
- **Backend/Scrapers**: Node.js (for scraping and structure-parsing reviews via Flipkart’s minified state widgets).
- **Assets & Icons**: Curated responsive SVG paths.

---

## 🚀 How to Run Locally

### 1. Start a Local Server
Start a lightweight web server in the project directory:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000
```
Open your browser and navigate to `http://localhost:8000`.

### 2. Run the Reviews Scraper
If you want to update the reviews database:
1. Navigate to the project folder:
   ```bash
   cd price-comparison-hub
   ```
2. Run the background importer:
   ```bash
   node auto_reviews_importer.js
   ```
This updates `reviews_data.js` automatically with the latest scraped reviews and CDN photo links from Flipkart.
