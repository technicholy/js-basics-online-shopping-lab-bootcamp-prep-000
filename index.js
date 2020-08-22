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
    return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`
  }else if(cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}, and ${cart[1].itemName} at \$${cart[1].itemPrice}.`
  }else{
    return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}, ${cart[1].itemName} at \$${cart[1].itemPrice}, and ${cart[2].itemName} at \$${cart[2].itemPrice}.`
    }
}

function total() {
  var price = 0
  cart.forEach(function(item){
    price += item.itemPrice
  })
  return price
}

function removeFromCart(item) {
  if (cart.includes(item)){
    cart.slice(cart.findIndex((cart.itemName === item)), 1)
    }
  }else{
    return "That item is not in your cart."
  }
}
function placeOrder(cardNumber) {
  // write your code here
}
