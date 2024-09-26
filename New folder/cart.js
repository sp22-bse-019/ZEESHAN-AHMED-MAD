// Array to hold the cart items
let cart = [];

// Function to add items to the cart (maximum 8 items)
const addItemToCart = (productId, productName, quantity, price) => {
  if (cart.length < 8) {
    cart.push({ productId, productName, quantity, price });
    console.log(`${productName} added to the cart.`);
  } else {
    console.log("Cart is full! You cannot add more than 8 items.");
  }
};

// Function to remove an item by productId
const removeItemFromCart = (productId) => {
  const initialLength = cart.length;
  cart = cart.filter(item => item.productId !== productId);
  if (cart.length < initialLength) {
    console.log(`Item with ID ${productId} removed.`);
  } else {
    console.log(`Item with ID ${productId} not found.`);
  }
};

// Function to update item quantity
const updateItemQuantity = (productId, newQuantity) => {
  let found = false;
  cart = cart.map(item => 
    item.productId === productId ? { ...item, quantity: newQuantity } : item
  );
  if (found) {
    console.log(`Quantity updated for product ID ${productId}.`);
  } else {
    console.log(`Item with ID ${productId} not found.`);
  }
};

// Function to calculate total cost of items in the cart
const calculateTotalCost = () => {
  return cart.reduce((total, item) => total + (item.quantity * item.price), 0);
};

// Function to display cart summary
const displayCartSummary = () => {
  if (cart.length === 0) {
    console.log("Cart is empty.");
  } else {
    cart.forEach(item => {
      console.log(`${item.productName} - Quantity: ${item.quantity}, Total: $${item.quantity * item.price}`);
    });
  }
};

// Function to filter out items with zero quantity
const filterZeroQuantityItems = () => {
  const initialLength = cart.length;
  cart = cart.filter(item => item.quantity > 0);
  if (cart.length < initialLength) {
    console.log("Zero-quantity items removed from the cart.");
  }
};

// Function to apply discount code to total price
const applyDiscount = (discountCode) => {
  let discountPercentage = 0;
  if(discountCode === 'DISCOUNT10') discountPercentage = 10;
  else if(discountCode === 'DISCOUNT20') discountPercentage = 20;
  
  const totalCost = calculateTotalCost();
  const discountedCost = totalCost - (totalCost * (discountPercentage / 100));
  console.log(`Total after applying ${discountCode}: $${discountedCost.toFixed(2)}`);
  return discountedCost;
};

// Example of adding up to 8 items to the cart
addItemToCart(1, 'Phone', 2, 500);
addItemToCart(2, 'Laptop', 1, 1200);
addItemToCart(3, 'Headphones', 3, 100);
addItemToCart(4, 'Smartwatch', 1, 250);
addItemToCart(5, 'Tablet', 2, 600);
addItemToCart(6, 'Monitor', 1, 300);
addItemToCart(7, 'Keyboard', 1, 50);
addItemToCart(8, 'Mouse', 1, 30);

// Trying to add a 9th item (should display a warning)
addItemToCart(9, 'Charger', 1, 20);

// Displaying cart summary
displayCartSummary();

// Update item quantity
updateItemQuantity(1, 5); // Updating quantity of Phone to 5
displayCartSummary();

// Removing an item from the cart
removeItemFromCart(7); // Removes Keyboard
displayCartSummary();

// Filtering zero quantity items (if any)
filterZeroQuantityItems();
displayCartSummary();

// Calculate total cost
console.log("Total Cost: $" + calculateTotalCost());

// Applying a discount code
applyDiscount('DISCOUNT10'); // Applying a 10% discount
