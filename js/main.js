// ==========================================
// ShopEasy - Homepage JavaScript
// Handles category display and featured products
// ==========================================

// ==========================================
// CATEGORY DATA
// Define categories with icons and descriptions
// ==========================================
const categories = [
  {
    name: 'electronics',
    displayName: 'Electronics',
    icon: '📱',
    description: 'Latest gadgets and devices'
  },
  {
    name: 'clothing',
    displayName: 'Clothing',
    icon: '👕',
    description: 'Fashion and apparel'
  },
  {
    name: 'accessories',
    displayName: 'Accessories',
    icon: '🎒',
    description: 'Bags, wallets, and more'
  },
  {
    name: 'sports',
    displayName: 'Sports & Games',
    icon: '⚽',
    description: 'Sports equipment and games'
  },
  {
    name: 'food',
    displayName: 'Food & Beverages',
    icon: '🍕',
    description: 'Delicious food and drinks'
  },
  {
    name: 'books',
    displayName: 'Books',
    icon: '📚',
    description: 'Educational and fiction books'
  }
];

// ==========================================
// FUNCTION: Render Category Cards
// Creates HTML for each category and inserts into page
// ==========================================
function renderCategories() {
  // Get the container element where categories will be displayed
  const categoryContainer = document.getElementById('category-container');
  
  // Create HTML string for all categories
  // We use template literals (backticks) for multi-line strings
  let categoriesHTML = '';
  
  // Loop through each category using forEach
  categories.forEach(category => {
    // For each category, create a card with click event
    // When clicked, navigate to products page with category filter
    categoriesHTML += `
      <div class="category-card" onclick="navigateToCategory('${category.name}')">
        <div class="category-icon">${category.icon}</div>
        <h3>${category.displayName}</h3>
        <p>${category.description}</p>
      </div>
    `;
  });
  
  // Insert the generated HTML into the container
  categoryContainer.innerHTML = categoriesHTML;
}

// ==========================================
// FUNCTION: Navigate to Category
// Redirects to products page with category filter in URL
// ==========================================
function navigateToCategory(categoryName) {
  // Use URL parameters to pass the category to products page
  // Example: products.html?category=electronics
  window.location.href = `products.html?category=${categoryName}`;
}

// ==========================================
// FUNCTION: Render Featured Products
// Displays 6 random products on the homepage
// ==========================================
function renderFeaturedProducts() {
  // Get the container element for featured products
  const featuredContainer = document.getElementById('featured-container');
  
  // Select 6 random products from the products array
  // We use slice(0, 6) to get first 6 products
  // You could also shuffle the array for random selection
  const featuredProducts = products.slice(0, 6);
  
  // Create HTML string for featured products
  let productsHTML = '';
  
  // Loop through each featured product
  featuredProducts.forEach(product => {
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
  
  // Insert the generated HTML into the container
  featuredContainer.innerHTML = productsHTML;
}

// ==========================================
// INITIALIZE HOMEPAGE
// Run functions when page loads
// ==========================================
// DOMContentLoaded event fires when HTML is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  renderCategories();           // Display category cards
  renderFeaturedProducts();     // Display featured products
});
