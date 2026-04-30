// ==========================================
// ShopEasy - Product Detail Page JavaScript
// Displays full product information
// ==========================================

// ==========================================
// GET DOM ELEMENTS
// ==========================================
const productDetailContainer = document.getElementById('product-detail');

// ==========================================
// FUNCTION: Get Product ID from URL
// Reads the product ID from URL parameter
// Example: product-detail.html?id=5
// ==========================================
function getProductIdFromURL() {
  // URLSearchParams helps us read query parameters from URL
  const params = new URLSearchParams(window.location.search);
  // Get the 'id' parameter and convert it to a number
  const productId = params.get('id');
  
  // Convert string to number using parseFloat
  // Return null if id doesn't exist
  return productId ? parseFloat(productId) : null;
}

// ==========================================
// FUNCTION: Find Product in Data
// Searches the products array for a specific product
// Uses the find() method
// ==========================================
function findProduct(productId) {
  // The find() method returns the first element that matches the condition
  // It checks each product's id against our productId
  const product = products.find(product => product.id === productId);
  
  return product;  // Returns the product object or undefined if not found
}

// ==========================================
// FUNCTION: Render Product Tags
// Creates HTML for product tags
// Takes an array of tag strings as parameter
// ==========================================
function renderTags(tags) {
  // Check if product has tags
  if (!tags || tags.length === 0) {
    return '';  // Return empty string if no tags
  }
  
  // Create HTML for tags section
  let tagsHTML = `
    <div class="detail-tags">
      <h3>Tags:</h3>
  `;
  
  // Loop through each tag and create a span element
  tags.forEach(tag => {
    tagsHTML += `<span class="tag">${tag}</span>`;
  });
  
  // Close the div
  tagsHTML += `</div>`;
  
  return tagsHTML;
}

// ==========================================
// FUNCTION: Render Product Details
// Creates HTML for the complete product detail page
// ==========================================
function renderProductDetail(product) {
  // Create HTML for product details
  // Capitalize the first letter of category name
  const capitalizedCategory = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  
  const productHTML = `
    <!-- Product Image (Left Column) -->
    <div class="detail-image-container">
      <img src="${product.image}" alt="${product.name}" class="detail-image">
    </div>
    
    <!-- Product Information (Right Column) -->
    <div class="detail-info">
      <!-- Product Name -->
      <h1>${product.name}</h1>
      
      <!-- Product Category -->
      <p class="detail-category">${capitalizedCategory}</p>
      
      <!-- Product Price -->
      <p class="detail-price">$${product.price.toFixed(2)}</p>
      
      <!-- Product Description -->
      <div class="detail-description">
        <h3>Description:</h3>
        <p>${product.description}</p>
      </div>
      
      <!-- Product Tags -->
      ${renderTags(product.tags)}
      
      <!-- Back to Products Button -->
      <a href="products.html" class="btn">Browse More Products</a>
    </div>
  `;
  
  // Insert the HTML into the container
  productDetailContainer.innerHTML = productHTML;
}

// ==========================================
// FUNCTION: Show Error Message
// Displays an error when product is not found
// ==========================================
function showErrorMessage() {
  const errorHTML = `
    <div class="error-message">
      <h2>Product Not Found</h2>
      <p>Sorry, the product you're looking for doesn't exist.</p>
      <a href="products.html" class="btn btn-secondary">Browse Products</a>
    </div>
  `;
  
  productDetailContainer.innerHTML = errorHTML;
}

// ==========================================
// INITIALIZE PRODUCT DETAIL PAGE
// Load and display product when page loads
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  // Step 1: Get product ID from URL
  const productId = getProductIdFromURL();
  
  // Step 2: Check if ID exists
  if (!productId) {
    showErrorMessage();  // No ID in URL
    return;  // Exit function
  }
  
  // Step 3: Find the product in our data
  const product = findProduct(productId);
  
  // Step 4: Check if product was found
  if (!product) {
    showErrorMessage();  // Product not in database
    return;  // Exit function
  }
  
  // Step 5: Render the product details
  renderProductDetail(product);
  
  // Step 6: Update page title with product name
  document.title = `ShopEasy - ${product.name}`;
});
