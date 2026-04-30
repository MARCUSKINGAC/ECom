// ==========================================
// ShopEasy - Products Page JavaScript
// Handles product filtering, sorting, and display
// ==========================================

// ==========================================
// GET DOM ELEMENTS
// Select elements we need to interact with
// ==========================================
const productContainer = document.getElementById('product-container');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const priceValue = document.getElementById('price-value');
const sortFilter = document.getElementById('sort-filter');
const noResultsMessage = document.getElementById('no-results');

// ==========================================
// FUNCTION: Read URL Parameters
// Gets the category from URL if user clicked from homepage
// Example: products.html?category=electronics
// ==========================================
function getCategoryFromURL() {
  // URLSearchParams helps us read query parameters from URL
  const params = new URLSearchParams(window.location.search);
  // Get the 'category' parameter value
  return params.get('category');
}

// ==========================================
// FUNCTION: Set Initial Filter Values
// Pre-select category filter based on URL parameter
// ==========================================
function setInitialFilters() {
  const categoryFromURL = getCategoryFromURL();
  
  // If there's a category in the URL, set the dropdown to that category
  if (categoryFromURL) {
    categoryFilter.value = categoryFromURL;
  }
}

// ==========================================
// FUNCTION: Render Products
// Creates HTML for products and displays them on the page
// Takes an array of products as parameter
// ==========================================
function renderProducts(productsToRender) {
  // Check if there are any products to display
  if (productsToRender.length === 0) {
    // No products found - show the "no results" message
    productContainer.innerHTML = '';  // Clear any existing products
    noResultsMessage.classList.remove('hidden');  // Show message
    return;  // Exit the function early
  }
  
  // Products found - hide the "no results" message
  noResultsMessage.classList.add('hidden');
  
  // Create HTML string for all products
  let productsHTML = '';
  
  // Loop through each product using forEach
  productsToRender.forEach(product => {
    // Create a product card with image, name, category, price, and button
    productsHTML += `
      <div class="product-card">
        <!-- Product Image -->
        <img src="${product.image}" alt="${product.name}" class="product-image">
        
        <!-- Product Information -->
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-category">${product.category}</p>
          <p class="product-price">$${product.price.toFixed(2)}</p>
          
          <!-- Button links to product detail page with product ID -->
          <a href="product-detail.html?id=${product.id}" class="btn">View Details</a>
        </div>
      </div>
    `;
  });
  
  // Insert the generated HTML into the product container
  productContainer.innerHTML = productsHTML;
}

// ==========================================
// FUNCTION: Filter Products
// Applies all active filters to the products array
// Returns a filtered array of products
// ==========================================
function filterProducts() {
  // Get current values from all filter inputs
  const selectedCategory = categoryFilter.value;
  const maxPrice = parseFloat(priceFilter.value);  // Convert string to number
  const sortOption = sortFilter.value;
  
  // Update the displayed price value
  priceValue.textContent = maxPrice;
  
  // STEP 1: Filter by category
  // Use the filter() method to create a new array with only matching products
  let filtered = products.filter(product => {
    // If category is 'all', include all products
    // Otherwise, only include products matching the selected category
    if (selectedCategory === 'all') {
      return true;  // Include this product
    }
    return product.category === selectedCategory;  // Check if categories match
  });
  
  // STEP 2: Filter by price
  // Chain another filter() to filter by maximum price
  filtered = filtered.filter(product => {
    return product.price <= maxPrice;  // Only include products at or below max price
  });
  
  // STEP 3: Sort products
  // Use the sort() method to order products
  if (sortOption === 'price-low') {
    // Sort by price: lowest first
    // (a, b) => a.price - b.price sorts in ascending order
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    // Sort by price: highest first
    // (a, b) => b.price - a.price sorts in descending order
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'name') {
    // Sort alphabetically by name
    // localeCompare() compares strings alphabetically
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }
  // If sortOption is 'default', keep original order (no sorting)
  
  // STEP 4: Render the filtered products
  renderProducts(filtered);
}

// ==========================================
// EVENT LISTENERS
// Listen for user interactions with filters
// ==========================================

// Category filter change event
// Fires when user selects a different category
categoryFilter.addEventListener('change', function() {
  filterProducts();  // Re-filter and display products
});

// Price filter input event
// Fires as user drags the slider (real-time updates)
priceFilter.addEventListener('input', function() {
  filterProducts();  // Re-filter and display products
});

// Sort filter change event
// Fires when user selects a different sort option
sortFilter.addEventListener('change', function() {
  filterProducts();  // Re-filter and display products
});

// ==========================================
// INITIALIZE PRODUCTS PAGE
// Run setup functions when page loads
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  setInitialFilters();    // Set category from URL if present
  filterProducts();       // Apply filters and display products
});
