var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function addToCart(item) {
 var kart = {}
 kart.itemName = item
 kart.itemPrice = getRandomInt(100)
 cart.push(kart)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }else if(cart.length === 1){
    return `In your cart, you have ${cart[1].itemName} at \$${cart[1].itemPrice}`    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
