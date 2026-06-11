const https = require('https');
const fs = require('fs');

const PRODUCTS = [
  { id: "samsung-s25-fe", query: "samsung s24" }, // Fallback to S24 reviews since S25 FE has low reviews count on Flipkart
  { id: "iphone-16-pro", query: "iphone 16 pro" },
  { id: "iphone-15-pro", query: "iphone 15 pro" },
  { id: "samsung-s24-ultra", query: "samsung s24 ultra" },
  { id: "oneplus-12", query: "oneplus 12" },
  { id: "pixel-8-pro", query: "pixel 8 pro" },
  { id: "nothing-phone-2a", query: "nothing phone 2a" },
  { id: "oneplus-nord-ce4", query: "oneplus nord ce4" },
  { id: "redmi-note-13-pro", query: "redmi note 13 pro" },
  { id: "realme-gt-6t", query: "realme gt 6t" },
  { id: "vivo-v30-pro", query: "vivo v30 pro" },
  { id: "motorola-edge-50-pro", query: "motorola edge 50 pro" }
];

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9'
};

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        // Handle redirect
        fetchUrl(res.headers.location).then(resolve).catch(reject);
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeReviewsForProduct(product) {
  console.log(`\n========================================`);
  console.log(`Processing ${product.id} (query: "${product.query}")...`);
  
  const searchUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(product.query)}`;
  
  try {
    const searchHtml = await fetchUrl(searchUrl);
    
    // Find PDP link
    const pdpMatch = searchHtml.match(/\/[-a-zA-Z0-9%]+\/p\/itm[a-zA-Z0-9]+/);
    if (!pdpMatch) {
      throw new Error('No product PDP page found on search page.');
    }
    
    const pdpUrl = `https://www.flipkart.com${pdpMatch[0]}`;
    const reviewsUrl = pdpUrl.replace('/p/itm', '/product-reviews/itm');
    console.log(`Constructed reviews subpage: ${reviewsUrl}`);
    
    const reviewsHtml = await fetchUrl(reviewsUrl);
    
    // Find initial state JSON
    const stateMatch = reviewsHtml.match(/window\.__INITIAL_STATE__\s*=\s*(\{[\s\S]*?\});\s*<\/script>/);
    if (!stateMatch) {
      throw new Error('__INITIAL_STATE__ script block not found.');
    }
    
    const state = JSON.parse(stateMatch[1]);
    const extractedReviews = [];
    
    function searchNode(node) {
      if (!node) return;
      if (typeof node === 'object') {
        if (node.text && node.title && node.rating !== undefined && node.author) {
          // Flatten review and format images
          const reviewImages = [];
          if (node.images && Array.isArray(node.images)) {
            node.images.forEach(img => {
              if (img.value && img.value.imageURL) {
                // Replace parameters
                const formattedUrl = img.value.imageURL
                  .replace('{@width}', '500')
                  .replace('{@height}', '500')
                  .replace('{@quality}', '80');
                reviewImages.push(formattedUrl);
              }
            });
          }
          
          extractedReviews.push({
            author: node.author.trim(),
            rating: node.rating,
            title: node.title.trim(),
            text: node.text.trim(),
            images: reviewImages
          });
        } else {
          Object.keys(node).forEach(key => {
            searchNode(node[key]);
          });
        }
      }
    }
    
    searchNode(state.multiWidgetState);
    console.log(`Extracted ${extractedReviews.length} real reviews from Flipkart.`);
    
    return extractedReviews;

  } catch (error) {
    console.error(`Failed to scrape ${product.id}:`, error.message);
    return null;
  }
}

async function start() {
  const allReviews = {};
  
  for (const product of PRODUCTS) {
    const reviews = await scrapeReviewsForProduct(product);
    if (reviews && reviews.length > 0) {
      allReviews[product.id] = reviews;
    } else {
      console.log(`No reviews fetched for ${product.id}, will use placeholder template.`);
    }
    // Add 1.5s delay to be polite to Flipkart servers and prevent rate limits
    await delay(1500);
  }
  
  // Save as JS file for client consumption
  const fileContent = `// Real-time scraped customer reviews database from Flipkart
const REVIEWS_DATA = ${JSON.stringify(allReviews, null, 2)};
`;
  
  fs.writeFileSync('reviews_data.js', fileContent);
  console.log('\n========================================');
  console.log(`Scraping complete! Saved data to reviews_data.js.`);
}

start();
