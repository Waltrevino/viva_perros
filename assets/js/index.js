window.onscroll = function() {applyStickyy()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function applySticky(){
  if(window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

console.log(sticky);