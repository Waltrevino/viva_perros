// window.onscroll = function() {applyStickyy()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function applySticky(){
//   if(window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// console.log(sticky);

var btn = document.getElementById("myButton");

// var printViva = document.querySelector(".header-text-viva")
// var printPerros = document.querySelector(".header-text-perros")
// var textToPrintViva;
// var textToPrintPerros;
// var howFast = 1000;
// var iViva = 0;
// var iPerros = 0;

// function setFields() {
//   textToPrintViva = printViva.textContent;
//   printViva.textContent = ""
//   textToPrintPerros = printPerros.textContent;
//   printPerros.textContent = ""
// }

// setFields();

// function writeViva() {
//   console.log(textToPrintViva);
//   if (iViva < textToPrintViva.length) {
//     printViva.innerHTML += textToPrintViva.charAt(iViva);
//     iViva++;
//     setTimeout(writeViva, howFast);
//   }
// }

// function writePerros() {
//   console.log(textToPrintPerros);
//   if (iPerros < textToPrintPerros.length) {
//     printPerros.innerHTML += textToPrintPerros.charAt(iPerros);
//     iPerros++;
//     setTimeout(writePerros, howFast);
//   }
// }
// var boton = document.querySelector("#myButton");

// function writeOutHeader() {
//   writeViva();
//   writePerros();
// }

// writeOutHeader();

// 12 Creative CSS and JavaScript Text Typing Animations
//https://www.codesdope.com/blog/article/12-creative-css-and-javascript-text-typing-animati/
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 600 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.05em solid transparent;}";
  document.body.appendChild(css);
};

$(".fixed-logo-wrapper").on("click", function() {
  $(this).addClass("hide");
  console.log("clicked");
})