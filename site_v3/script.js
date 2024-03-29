// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

// Carousel
var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) 
    {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) 
    {
      showSlides(slideIndex = n);
    }

    function showSlides(n) 
    {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) 
      {
        slideIndex = 1
      }
      if (n < 1) 
      {
        slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }

//Simple Typing Carousel https://codepen.io/gschier/pen/jkivt?__cf_chl_jschl_tk

var TxtRotate = function(el, toRotate, period) 
{
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() 
{
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) 
  {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } 
  else 
  {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) 
  {
    delta = this.period;
    this.isDeleting = true;
  } 
  else if (this.isDeleting && this.txt === '') 
  {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() 
  {
    that.tick();
  }, delta);
};

window.onload = function() 
{
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) 
  {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) 
    {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #DF2935 }";
  document.body.appendChild(css);
};