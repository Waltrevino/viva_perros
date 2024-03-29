// 12 Creative CSS and JavaScript Text Typing Animations
//https://www.codesdope.com/blog/article/12-creative-css-and-javascript-text-typing-animati/
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
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

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
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

setActiveLinkBackground();
renderFooter();

$(".fixed-logo-wrapper").on("click", function () {
  $(this).addClass("hide");
  console.log("clicked");
})

// Add style to active links on navbar
function setActiveLinkBackground() {
  var $navLinks = document.querySelectorAll(".nav-link-me");
  for (var i = 0; i < $navLinks.length; i++) {
    if ($navLinks[i].classList.contains("active")) {
      $navLinks[i].setAttribute("style", "color: #FDF9D8;font-weight: bolder")
    }
    $navLinks[i].setAttribute("style", "font-weight: bolder");
  }
}

// DISPLAY FOOTER
function renderFooter() {
  var footer = document.getElementById("footer")
  var footerContent = `
    <div class="footer-wrapper">
    <div class="footer-container"> 
      <ul class="footer-items">
        <li class="footer-item ">
          <ul><span>Viva Perros</span>
            <li><a href="about.html">About</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="https://www.paypal.com/donate/?hosted_button_id=9QBLQNST57886">Donate</a></li>
          </ul>
        </li>
        <li class="footer-item">
          <ul><span>Partners</span>
            <li><a href="http://joeking.com" target="_blank">Joe King Carrasco</a></li>
            <li><a href="https://www.austinpetsalive.org" target="_blank">Austin Pets Alive</a></li>
            <li><a href="https://www.facebook.com/NicaVetsCasaLupita" target="_blank">Casa Lupita Nicaragua</a></li>
            <li><a href="https://www.barriodogs.org" target="_blank">Barrio Dogs</a></li>
            <li><a href="https://spcapv.com" target="_blank">SPCA Puerto Vallarta</a></li>
            <li><a href="https://www.sos-animales-nica.org" target="_blank">Animales Nicaragua SOS</a></li>
            <li><a href="https://www.petfinder.com/member/us/tx/austin/viva-perros-tx2459/" target="_blank">Petfinder</a></li>
          </ul>
        </li>
        <li class="footer-item">
          <ul><span>Adoptions</span>
            <li><a href="adopt.html">Meet Our Adoptable Dogs</a></li>
            <li><a href="success.html">Success Stories</a></li>
            <li><a href="./assets/docs/viva_perros_adoption_application.pdf" target="_blank">Adoption Application</a></li>
            <li><a href="./assets/docs/viva_perros_pet_adoption_agreement.pdf" target="_blank">Pet Adoption Agreement</a></li>
            <li><a href="adopt.html">Foster A Dog</a></li>
          </ul>
        </li>
        <li  class="footer-item">
          <ul><span>Contact Us</span>
            <li><a href="https://www.facebook.com/vivaperros/" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/vivaperros/?hl=en" target="_blank">Instagram</a></li>
            <li><a href="https://www.petfinder.com/member/us/tx/austin/viva-perros-tx2459/" target="_blank">Petfinder</a></li>
            <li><a href="contact.html" target="_blank">Email</a></li>
            <li><a href="faq.html" target="_blank">FAQ</a></li>
          </ul>
        </li>        
      </ul>
      <div>
        <i class="fas fa-paw footer-paw"></i><span class="footer-logo-text"><a href='./index.html'>Viva Perros</a></span><i
          class="fas fa-paw footer-paw"></i>
      </div>
      <p class="text-muted">
        501(c)(3)
      </p>
      <p class="text-muted">
        &copy; Copyright 2021 WZE TekSolutions
      </p>
    </div>
  </div>`
  footer.innerHTML = footerContent;
}

// Make full screen when pager header is clicked
if (window.location.pathname !== '/index.html'){
  document.querySelector("#page-title").addEventListener
  ('click', (e) => {
    e.preventDefault();
    $body = document.querySelector("body");
    const $makeFullScreen = document.querySelector("#page-title");
    if ($body.requestFullscreen()) {
      $body.requestFullscreen();
    }
  });
}