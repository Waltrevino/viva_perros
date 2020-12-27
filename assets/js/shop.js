$(document).ready(function() {
  var inventoryUnsorted = [...inventoryO];
  const inventory = inventoryO.sort(() => 0.5 - Math.random());
  var sizesAvailable = document.getElementById("sizes");
  var colorsAvailable = document.getElementById("colors");
  var quantityAvailable = document.getElementById("quantity");
  var sizesGroup = document.getElementById("sizes-group");
  var colorsGroup = document.getElementById("colors-group");

  for (var i = 0; i < inventory.length; i++) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });

    const cards = document.querySelector(".shopping-cards-container");

    var itemCard =
      `<div class="shopping-item-card box-shadow" data-id=${i} id=${i}     product-id=${inventory[i].product_id}>
        <a class="item" href="#"><img class="shopping-card-image" src=${inventory[i].  product_img}></a>  
        <div class="shopping-card-content">
          <p class="product-title"><a class="item" href="#">${inventory[i].product_name}</a></p>
          <p class="product-price"><a class="item" href="#">${formatter.format(inventory[i].product_price)}</a></p>
        </div>     
      </div>`

    cards.innerHTML += itemCard;
  }

  var shopPortal = document.querySelector(".shop-main");
  var shopPortalWrapper = document.querySelector(".shop-portal-wrapper");
  var btnCloseShopPortal = document.querySelector("#close-portal-btn");

  var shoppingCartImg = document.querySelector(".shop-portal-img");
  var shoppingProdNameLabel = $(".spd-product-name-label");
  var shoppingProdDesc = $(".spd-product-desc");

  $(".shopping-item-card").on("click", function() {
    var itemIndex = 0;
    itemIndex = inventoryUnsorted.findIndex(item => item.product_id == $(this).attr("product-id"));
    shopPortalWrapper.classList.add("shop-portal-wrapper-show");
    shopPortalWrapper.classList.remove("hide");
    shoppingCartImg.setAttribute("src", inventoryUnsorted[itemIndex].product_img);
    shoppingCartImg.setAttribute("product-id", $(this).attr("product-id"));
    var shoppingProdName = document.querySelector(".spd-product-name");
    var shoppingProdDesc = document.querySelector(".spd-product-desc");

    var index = inventoryUnsorted.map((item) => item.product_id).indexOf(parseInt($(this).attr("product-id")));

    shoppingCartImg.setAttribute("item-id", itemIndex);



    shoppingProdName.textContent = inventoryUnsorted[$(this).attr("data-id")].product_name + " - $" + inventoryUnsorted[itemIndex].product_price;
    shoppingProdDesc.innerHTML = "";




    for (var i = 0; i < inventoryUnsorted[itemIndex].product_desc.length; i++) {
      var itemDesc = document.createElement("p");
      itemDesc.append(inventoryUnsorted[itemIndex].product_desc[i]);
      shoppingProdDesc.append(itemDesc);
    }

    sizesAvailable.innerHTML = "";
    for (var i = 0; i < inventoryUnsorted[itemIndex].sizes.length; i++) {
      var option = document.createElement("option");
      option.innerText = inventoryUnsorted[itemIndex].sizes[i];
      sizesAvailable.append(option);
    }

    colorsAvailable.innerHTML = "";
    for (var i = 0; i < inventoryUnsorted[itemIndex].colors.length; i++) {
      var option = document.createElement("option");
      option.innerText = inventoryUnsorted[itemIndex].colors[i];
      colorsAvailable.append(option);
    }

    quantityAvailable.setAttribute("max", inventoryUnsorted[itemIndex].quantity);


    if (inventoryUnsorted[itemIndex].type !== "clothes") {
      sizesGroup.style.display = "none";
      colorsGroup.style.display = "none";
    }

    console.log(inventoryUnsorted[itemIndex].type);

  });







  function closeShoppingPortal() {
    shopPortalWrapper.classList.remove("shop-portal-wrapper-show");
    shopPortalWrapper.classList.add("hide");
  }

  btnCloseShopPortal.addEventListener("click", function() {
    closeShoppingPortal();
  });

  viewPrevious = document.getElementById("view-prev");
  viewNext = document.getElementById("view-next");

  viewPrevious.addEventListener("click", function(e) {
    e.preventDefault();
    var curentIndex = parseInt($(".shop-portal-img").attr("item-id"))
    console.log(curentIndex);
    navigate(curentIndex, -1);
  });

  viewNext.addEventListener("click", function(e) {
    e.preventDefault();

    var curentIndex = parseInt($(".shop-portal-img").attr("item-id"))
    console.log(curentIndex);
    navigate(curentIndex, 1);
  });

  function navigate(currentIndex, direction) {
    var productName = document.querySelector(".spd-product-name");
    var productDesc = document.querySelector(".spd-product-desc");
    productName.textContent = ""
    productDesc.textContent = ""
    index = currentIndex + direction;
    if (index < 0) {
      index = inventoryUnsorted.length - 1;
    } else if (index > inventoryUnsorted.length - 1) {
      index = 0;
    }
    currentImage = inventoryUnsorted[index].product_img;
    console.log(currentImage);
    $(".shop-portal-img").attr("src", currentImage);
    $(".shop-portal-img").attr("item-id", index);
    $(".spd-product-name").append(inventoryUnsorted[index].product_name + " - $" + inventoryUnsorted[index].product_price);
    console.log(inventoryUnsorted[index].product_name + " - $" + inventoryUnsorted[index].product_price);

    for (var i = 0; i < inventoryUnsorted[index].product_desc.length; i++) {
      var itemDesc = document.createElement("p");
      itemDesc.append(inventoryUnsorted[index].product_desc[i]);
      productDesc.append(itemDesc);
    }

    sizesAvailable.innerHTML = "";
    for (var i = 0; i < inventoryUnsorted[index].sizes.length; i++) {
      var option = document.createElement("option");
      option.innerText = inventoryUnsorted[index].sizes[i];
      sizesAvailable.append(option);
    }

    colorsAvailable.innerHTML = "";
    for (var i = 0; i < inventoryUnsorted[index].colors.length; i++) {
      var option = document.createElement("option");
      option.innerText = inventoryUnsorted[index].colors[i];
      colorsAvailable.append(option);
    }

    quantityAvailable.value = "1";
    quantityAvailable.setAttribute("max", inventoryUnsorted[index].quantity);

    if (inventoryUnsorted[index].type !== "clothes") {
      sizesGroup.style.display = "none";
      colorsGroup.style.display = "none";
    }

    if (inventoryUnsorted[index].type === "clothes") {
      sizesGroup.style.display = "inherit";
      colorsGroup.style.display = "inherit";
    }




  }






  $("#view-all").on("click", function(e) {
    e.preventDefault();
    closeShoppingPortal();
  })


  var addToCart = document.getElementById("add-to-cart-btn");

  addToCart.addEventListener("click", function(event) {
    event.preventDefault();
    alert();
  })







});