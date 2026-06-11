const fs = require('fs');

try {
  const html = fs.readFileSync('pdp.html', 'utf8');
  const match = html.match(/window\.__INITIAL_STATE__\s*=\s*(\{[\s\S]*?\});\s*<\/script>/);
  if (!match) {
    console.log('__INITIAL_STATE__ not found.');
    return;
  }
  const state = JSON.parse(match[1]);
  console.log('Parsed initial state.');

  const widgetsData = state.multiWidgetState.widgetsData;
  if (!widgetsData) {
    console.log('widgetsData not found.');
    return;
  }

  console.log('Searching for reviews in widgetsData...');
  
  const reviews = [];
  
  function searchNode(node, path) {
    if (!node) return;
    if (typeof node === 'object') {
      if (node.value && node.value.text && node.value.title && node.value.rating !== undefined) {
        // This looks like a review!
        reviews.push({ path, type: 'review_direct', data: node.value });
      } else if (node.reviewText || node.reviewTitle) {
        reviews.push({ path, type: 'review_text_fields', data: node });
      } else {
        Object.keys(node).forEach(key => {
          searchNode(node[key], `${path}.${key}`);
        });
      }
    }
  }

  Object.keys(widgetsData).forEach(widgetId => {
    searchNode(widgetsData[widgetId], `widgetsData["${widgetId}"]`);
  });

  console.log(`Found ${reviews.length} review-like nodes in widgetsData.`);

  reviews.forEach((r, idx) => {
    console.log(`\n--- REVIEW ${idx} (${r.type}) at ${r.path} ---`);
    console.log(JSON.stringify(r.data, null, 2).substring(0, 800));
  });

} catch (error) {
  console.error('Error:', error.message);
}
