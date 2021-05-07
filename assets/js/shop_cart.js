var btnAddToCart = document.querySelector("#add-to-cart-btn");
var btnClearCart = document.querySelector("#clear-cart-btn");
var modalEl = document.querySelector(".show-cart");
var totalCountEl = document.querySelector(".total-count");
var subtotalEl = document.querySelector("#subtotal-cart");
const tax = .085;
var totalEl = document.querySelector(".total-cart");
var totalAmount = document.querySelector("#totalAmountTotalAmount");
var lblCartCount = document.querySelector("#lblCartCount");
var lblCart = document.querySelector(".fa-cart");




var y = document.querySelectorAll(".lblCartCount");

console.log(y.length);



function checkShoppingCart(item){
  loadCart();
  console.log("cart::::", cart);
  var n = 0;
  for (i in cart){
    if (cart[i].name === item){
      n += cart[i].count;
    }
  }
  return n;
}

function uploadInCart(){
for (var i = 0; i < y.length; i++){
    y[i].textContent = checkShoppingCart(y[i].getAttribute("data-name"));
    }
  
}


uploadInCart();




var cartMain = [];

cartMain = JSON.parse(sessionStorage.getItem("shoppingCart"));
function cartMainCount(){
  var totalCount = 0;
  for (var i in cartMain){
    totalCount += cartMain[i].count;
  }
  return totalCount;
}

console.log(cartMainCount());
lblCartCount.innerHTML = cartMainCount();
lblCart.addEventListener("click", function(){
  displayCart();
})


btnAddToCart.addEventListener("click", function (event) {
  event.preventDefault();

  var name = document.getElementById("add-to-cart-btn").getAttribute("data-name");

  // var price = Number($(this).data("price"));
  var price = Number(this.getAttribute("data-price"));
  var size = document.getElementById("sizes").value;
  var color = document.getElementById("colors").value;
  var img = this.getAttribute("product-img");
  shoppingCart.addItemToCart(name, price, 1, size, color, img);
  displayCart();
  uploadInCart();
  console.log(cart);
})

btnClearCart.addEventListener("click", function (e) {
  e.preventDefault();
  shoppingCart.clearCart();
  displayCart();
})

function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "<tr>"
    + "<th>Item</th><th></th><th>Size</th><th>Color</th><th>Qty</th><th>Cost/Unit</th><th>Total</th>"
    + "</tr>"
  for (i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>"
      + "<td><img src=" + cartArray[i].img + "></td>"
      + "<td>" + cartArray[i].size + "</td>"
      + "<td>" + cartArray[i].color + "</td>"
      + "<td>" + cartArray[i].count + "</td>"
      + "<td>" + cartArray[i].price + "</td>"
      + "<td>" + cartArray[i].total + "</td>"
      + "</tr>"
  }

  output += "<tr>"
  + "<tr>"
  + "<td>Subtotal</td><td></td><td></td><td></td><td></td><td></td<td></td><td id='subtotal-cart'>" + shoppingCart.totalCart() + "</td>"
  + "</tr>"
    + "<tr>"
    + "<td>Tax</td><td></td><td></td><td></td><td></td><td></td<td></td><td id='tax-cart'>" + (shoppingCart.totalCart() * tax).toFixed(2) + "</td>"
    + "</tr>"
    + "<tr>"
    + "<td>Total</td><td></td><td></td><td></td><td></td><td></td<td></td><td id='total-cart'>" + shoppingCart.grandTotalCart() + "</td>"
    + "</tr>"
  modalEl.innerHTML = output;
  totalCountEl.innerHTML = shoppingCart.totalCount();
  // totalEl.innerHTML = shoppingCart.totalCart();
  
  // document.querySelector(".total-cart").innerHTML = shoppingCart.totalCart();
  totalAmount.innerHTML = shoppingCart.grandTotalCart();
  lblCartCount.innerHTML = shoppingCart.totalCount();
  uploadInCart();
}

paypal.Buttons({
  style: {
    shape: 'rect',
    color: 'silver',
    layout: 'vertical',
    label: 'buynow',
    
  },
  // Set up the transaction
  createOrder: function (data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: shoppingCart.grandTotalCart()
        }
      }]
    }); 
  },

  // Finalize the transaction
  onApprove: function (data, actions) {
    return actions.order.capture().then(function (details) {
      // Show a success message to the buyer
      alert('Transaction completed by ' + details.payer.name.given_name + '!');
    });
  }

}).render('#paypal-button-container');

var shoppingCart = (function () {
  cart = [];

  function Item(name, price, count, size, color, img) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.size = size;
    this.color = color;
    this.img = img;
  }

  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }

  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  var obj = {};

  obj.addItemToCart = function (name, price, count, size, color, img) {
    for (var item in cart) {
      if (cart[item].name === name && cart[item].size === size && cart[item].color === color) {
        cart[item].count++;
        saveCart();
        return;
      }
    }

    var item = new Item(name, price, count, size, color, img);
    cart.push(item);
    saveCart();
  }

  obj.setCountForItem = function (name, count) { 
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  }

  obj.totalCount = function () {
    var totalCount = 0;
    for (i in cart) {
      totalCount += cart[i].count;
    }
    return totalCount;
  }

  obj.listCart = function () {
    var cartCopy = [];
    for (var i in cart) {
      item = cart[i];
      itemCopy = {};
      for (i in item) {
        itemCopy[i] = item[i];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(0);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  }

  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].count * cart[item].price;
    }
    return Number(totalCart.toFixed(0));
  }

  obj.grandTotalCart = function(){
    var grandTotal = 0;
    grandTotal = this.totalCart() + (this.totalCart() * tax);
    return Number(grandTotal.toFixed(2));
  }

  obj.clearCart = function () {
    cart = [];
    saveCart();
  }
  return obj;
})();

console.log(shoppingCart.totalCount());
