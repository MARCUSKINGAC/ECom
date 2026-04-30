// ==========================================
// ShopEasy - Product Dataset
// 36 products across 6 categories
// ==========================================

const products = [
  // ==========================================
  // ELECTRONICS (6 products)
  // ==========================================
  {
    id: 1,
    name: "Wireless Headphones",
    category: "electronics",
    price: 79.99,
    image: "js/images/WirelessHeadphone.webp",
    description: "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality. Perfect for music lovers and professionals.",
    tags: ["wireless", "audio", "bluetooth", "noise-cancellation"]
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "electronics",
    price: 199.99,
    image: "js/images/SmartWatch.webp",
    description: "Feature-rich smartwatch with fitness tracking, heart rate monitor, GPS, and smartphone notifications. Water-resistant up to 50 meters.",
    tags: ["wearable", "fitness", "smart", "gps"]
  },
  {
    id: 3,
    name: "Tablet Pro 10\"",
    category: "electronics",
    price: 449.99,
    image: "js/images/Tablet.webp",
    description: "Powerful 10-inch tablet with stunning display, fast processor, and all-day battery. Ideal for work, entertainment, and creativity.",
    tags: ["tablet", "portable", "productivity"]
  },
  {
    id: 4,
    name: "Digital Camera",
    category: "electronics",
    price: 599.99,
    image: "js/images/Camera.png",
    description: "Professional-grade digital camera with 24MP sensor, 4K video recording, and advanced autofocus system. Perfect for photography enthusiasts.",
    tags: ["camera", "photography", "4k", "professional"]
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 89.99,
    image: "js/images/BluetoothSpeaker.jpg",
    description: "Portable Bluetooth speaker with 360-degree sound, waterproof design, and 12-hour battery life. Great for outdoor adventures.",
    tags: ["speaker", "portable", "waterproof", "bluetooth"]
  },
  {
    id: 6,
    name: "SmartPhone X",
    category: "electronics",
    price: 899.99,
    image: "js/images/Smartphone.webp",
    description: "Latest flagship smartphone with advanced camera system, fast charging, and stunning OLED display. The ultimate mobile experience.",
    tags: ["smartphone", "mobile", "5g", "camera"]
  },

  // ==========================================
  // CLOTHING (6 products)
  // ==========================================
  {
    id: 7,
    name: "Classic Cotton T-Shirt",
    category: "clothing",
    price: 24.99,
    image: "js/images/CottonT.webp",
    description: "Comfortable 100% cotton t-shirt available in multiple colors. Perfect for casual everyday wear with a relaxed fit.",
    tags: ["casual", "cotton", "basic", "comfortable"]
  },
  {
    id: 8,
    name: "Slim Fit Jeans",
    category: "clothing",
    price: 59.99,
    image: "js/images/DenimJeans.webp",
    description: "Modern slim fit jeans made from premium denim with stretch for comfort. Classic blue wash that pairs with everything.",
    tags: ["denim", "casual", "slim-fit", "stretch"]
  },
  {
    id: 9,
    name: "Winter Jacket",
    category: "clothing",
    price: 129.99,
    image: "js/images/WinterJacket.jpg",
    description: "Warm and stylish winter jacket with water-resistant outer shell, insulated lining, and multiple pockets. Perfect for cold weather.",
    tags: ["winter", "warm", "waterproof", "outerwear"]
  },
  {
    id: 10,
    name: "Running Sneakers",
    category: "clothing",
    price: 89.99,
    image: "js/images/Running Sneakers.avif",
    description: "Lightweight running sneakers with cushioned sole, breathable mesh upper, and excellent grip. Ideal for daily runs and workouts.",
    tags: ["shoes", "running", "athletic", "comfortable"]
  },
  {
    id: 11,
    name: "Cozy Hoodie",
    category: "clothing",
    price: 49.99,
    image: "js/images/Hoodie.avif",
    description: "Ultra-soft fleece hoodie with kangaroo pocket and adjustable drawstring hood. Perfect for lounging or casual outings.",
    tags: ["hoodie", "casual", "fleece", "comfortable"]
  },
  {
    id: 12,
    name: "Baseball Cap",
    category: "clothing",
    price: 19.99,
    image: "js/images/BaseballCap.webp",
    description: "Classic adjustable baseball cap with curved brim and embroidered logo. One size fits most with snapback closure.",
    tags: ["hat", "cap", "casual", "accessories"]
  },

  // ==========================================
  // ACCESSORIES (6 products)
  // ==========================================
  {
    id: 13,
    name: "Travel Backpack",
    category: "accessories",
    price: 69.99,
    image: "js/images/Bagpack.jpg",
    description: "Durable travel backpack with laptop compartment, multiple organizer pockets, and water-resistant material. Perfect for school or travel.",
    tags: ["bag", "travel", "laptop", "durable"]
  },
  {
    id: 14,
    name: "Polarized Sunglasses",
    category: "accessories",
    price: 45.99,
    image: "js/images/Sunglass.webp",
    description: "Stylish polarized sunglasses with UV400 protection, lightweight frame, and scratch-resistant lenses. Essential for sunny days.",
    tags: ["eyewear", "uv-protection", "polarized", "style"]
  },
  {
    id: 15,
    name: "Leather Wallet",
    category: "accessories",
    price: 39.99,
    image: "js/images/Wallet.webp",
    description: "Genuine leather bifold wallet with multiple card slots, bill compartment, and RFID blocking technology. Slim and elegant design.",
    tags: ["wallet", "leather", "rfid", "minimalist"]
  },
  {
    id: 16,
    name: "Perfume Set",
    category: "accessories",
    price: 29.99,
    image: "js/images/Perfume.avif",
    description: "Elegant perfume set with multiple scents. Perfect for gifting or personal use.",
    tags: ["perfume", "fragrance", "gift", "elegant"]
  },
  {
    id: 17,
    name: "Phone Case Pro",
    category: "accessories",
    price: 24.99,
    image: "js/images/PhoneCase.jpg",
    description: "Protective phone case with military-grade drop protection, wireless charging compatible, and slim profile. Available for multiple models.",
    tags: ["phone", "protection", "case", "durable"]
  },
  {
    id: 18,
    name: "Gold Plated Bracelet",
    category: "accessories",
    price: 34.99,
    image: "js/images/Bracelet.png",
    description: "Elegant gold-plated bracelet with sturdy quality. Perfect gift for any occasion.",
    tags: ["jewelry", "bracelet", "gift", "elegant"]
  },

  // ==========================================
  // SPORTS & GAMES (6 products)
  // ==========================================
  {
    id: 19,
    name: "Cricket Kit Complete",
    category: "sports",
    price: 149.99,
    image: "js/images/CricketKit.webp",
    description: "Complete cricket kit including bat, pads, gloves, and bag. Perfect for beginners and intermediate players. High-quality equipment.",
    tags: ["cricket", "bat", "sports", "kit"]
  },
  {
    id: 20,
    name: "Golf Club Set",
    category: "sports",
    price: 399.99,
    image: "js/images/GolfClubs.jpg",
    description: "Professional golf club set with driver, irons, putter, and carrying bag. Suitable for all skill levels.",
    tags: ["golf", "clubs", "professional", "set"]
  },
  {
    id: 21,
    name: "Wooden Chess Set",
    category: "sports",
    price: 49.99,
    image: "js/images/Chess.webp",
    description: "Handcrafted wooden chess set with folding board and weighted pieces. Classic design for chess enthusiasts.",
    tags: ["chess", "board-game", "wooden", "strategy"]
  },
  {
    id: 22,
    name: "Jenga Classic Game",
    category: "sports",
    price: 19.99,
    image: "js/images/Jenga.jpg",
    description: "Classic Jenga block-stacking game with 54 hardwood blocks. Fun for family gatherings and parties. Ages 6 and up.",
    tags: ["jenga", "family", "blocks", "party-game"]
  },
  {
    id: 23,
    name: "Premium Playing Cards",
    category: "sports",
    price: 9.99,
    image: "js/images/Cards.webp",
    description: "Premium quality playing cards with linen finish for easy dealing. Perfect for poker, bridge, and card tricks.",
    tags: ["cards", "poker", "games", "entertainment"]
  },
  {
    id: 24,
    name: "Badminton Racket Set",
    category: "sports",
    price: 59.99,
    image: "js/images/BadmintonRacket.jpg",
    description: "Complete badminton set with 2 rackets, shuttlecocks, and carrying case. Lightweight and perfect for outdoor play.",
    tags: ["badminton", "racket", "outdoor", "sports"]
  },

  // ==========================================
  // FOOD & BEVERAGES (6 products)
  // ==========================================
  {
    id: 25,
    name: "Pre-Baked Pizza",
    category: "food",
    price: 12.99,
    image: "js/images/Pizza.jpg",
    description: "Delicious pre-baked pizza ready in minutes. Made with premium ingredients, crispy crust, and rich tomato sauce. Serves 2-3 people.",
    tags: ["pizza", "quick-meal", "frozen", "italian"]
  },
  {
    id: 26,
    name: "Instant Noodles Pack",
    category: "food",
    price: 8.99,
    image: "js/images/Noodles.jpg",
    description: "Pack of 6 instant noodles with delicious flavor varieties. Quick and easy meal ready in 3 minutes. Perfect for busy days.",
    tags: ["noodles", "instant", "quick-meal", "asian"]
  },
  {
    id: 27,
    name: "Fresh Fruit Basket",
    category: "food",
    price: 29.99,
    image: "js/images/Fruits.jpg",
    description: "Assorted fresh seasonal fruits beautifully arranged. Includes apples, oranges, bananas, and grapes. Healthy and delicious gift option.",
    tags: ["fruits", "fresh", "healthy", "gift"]
  },
  {
    id: 28,
    name: "Butter Croissant (4 Pack)",
    category: "food",
    price: 14.99,
    image: "js/images/croissant.jpg",
    description: "Freshly baked butter croissants made with premium French butter. Flaky, golden, and delicious. Pack of 4.",
    tags: ["bakery", "croissant", "breakfast", "french"]
  },
  {
    id: 29,
    name: "Packaged Drinking Water (24 Pack)",
    category: "food",
    price: 19.99,
    image: "js/images/Water.jpg",
    description: "Clean, refreshing drinking water in convenient 24-pack bottles. Perfect for hydration anytime, anywhere.",
    tags: ["water", "drinking", "hydration", "convenient"]
  },
  {
    id: 30,
    name: "Coca-Cola Classic (12 Pack)",
    category: "food",
    price: 7.99,
    image: "js/images/Coca.jpg",
    description: "Classic Coca-Cola in convenient 12-pack cans. The original refreshing cola taste. Perfect for parties and everyday enjoyment.",
    tags: ["soda", "beverage", "coke", "refreshing"]
  },

  // ==========================================
  // BOOKS (6 products)
  // ==========================================
  {
    id: 31,
    name: "Mahabharatha - The Legendary Epic",
    category: "books",
    price: 99.99,
    image: "js/images/Mahabharatha.jpg",
    description: "Complete Mahabharatha set including all volumes. Experience the legendary tale of the Pandavas and Kauravas. A must-have for any fan of Indian epics.",
    tags: ["fiction", "epic", "indian-literature", "bestseller"]
  },
  {
    id: 32,
    name: "MachineLearning & Artificial Intelligence",
    category: "books",
    price: 44.99,
    image: "js/images/AI-ML.jpg",
    description: "Comprehensive guide to AI fundamentals, machine learning, and deep learning. Perfect for beginners and intermediate learners with practical examples.",
    tags: ["ai", "technology", "learning", "programming"]
  },
  {
    id: 33,
    name: "Wings of Fire",
    category: "books",
    price: 19.99,
    image: "js/images/WingsOfFire.jpg",
    description: "Inspiring autobiography of Dr. APJ Abdul Kalam. A story of perseverance, dreams, and triumph. Motivational read for all ages.",
    tags: ["autobiography", "inspirational", "biography", "motivation"]
  },
  {
    id: 34,
    name: "Data Structures Using Java",
    category: "books",
    price: 54.99,
    image: "js/images/DS-Java.jpg",
    description: "In-depth coverage of data structures and algorithms using Java. Includes practical implementations, exercises, and real-world examples.",
    tags: ["java", "programming", "computer-science", "algorithms"]
  },
  {
    id: 35,
    name: "Java and JavaScript Guide",
    category: "books",
    price: 39.99,
    image: "js/images/Java-JS.jpg",
    description: "Complete guide to both Java and JavaScript programming languages. Learn syntax, concepts, and build real projects with this comprehensive resource.",
    tags: ["java", "javascript", "programming", "web-development"]
  },
  {
    id: 36,
    name: "Backdoors of Backend Technology",
    category: "books",
    price: 49.99,
    image: "js/images/BackendBook.jpg",
    description: "Explore advanced backend development concepts including APIs, databases, server architecture, and security. Essential reading for web developers.",
    tags: ["backend", "web-development", "apis", "databases"]
  }
];