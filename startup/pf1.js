

function draw(a) {
  // canvas with id="myCanvas"

  var canvas = document.getElementById(a);
  var ctx = canvas.getContext('2d');
  ctx.beginPath(); // note usage below 
  ctx.fillStyle = "#404040";
  ctx.moveTo(0, 0); // start at top left corner of canvas
  ctx.lineTo(40, 0);
  ctx.lineTo(40, 50);
  ctx.lineTo(21, 70);
  ctx.lineTo(19, 70);
  ctx.lineTo(0, 50);
  ctx.fill(); // connect and fill
  ctx.beginPath();
  ctx.fillStyle = "#00a99d";
  ctx.moveTo(0, 0);
  ctx.lineTo(40, 0);
  ctx.lineTo(40, 30);
  ctx.lineTo(21, 50);
  ctx.lineTo(19, 50);
  ctx.lineTo(0, 30);
  ctx.fill();
  return a;
}
draw('myCanvas');
draw('myCanvas2');
draw('myCanvas3');
draw('myCanvas4');
draw('myCanvas5');
draw('myCanvas6');
function scrollto(x) {
  var a = document.getElementById(x);
  event.preventDefault();
  var b = a.offsetTop
  window.scrollTo(0, b - 140)
}
window.onscroll = function () { myFunction(), this.myFunction2(), myFunction3(),run()};
var navbar = document.getElementById("menu");
var features = document.getElementById("features");
var markups = document.getElementById("bd--markup");
var footer = document.getElementById("footer--page");
var featuresli5 = document.getElementById("li5");
var featuresli7 = document.getElementById("li7");
var sticky = navbar.offsetTop;
var featuresy = features.offsetTop;
var markupsy = markups.offsetTop;
var footery = footer.offsetTop;
var facts = $('.body__content--fact').offset().top
function myFunction() {
  if (window.pageYOffset >= sticky + 200) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function myFunction2() {
  if (window.pageYOffset >= featuresy && markupsy + 480 >= window.pageYOffset) {
    featuresli5.classList.add("active")
  } else {
    featuresli5.classList.remove("active");
  }
}
function myFunction3() {
  if (window.pageYOffset >= footery - 100) {
    featuresli7.classList.add("active")
  } else {
    featuresli7.classList.remove("active");
  }
}
function scrolldown() {
  window.scrollTo(0, 636);
}

function charge() {
    $('.fact--nb').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
}
var divnew = $("#fact--elm");
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  // console.log(viewHeight-rect.bottom)
  return (viewHeight - rect.bottom >= 50&&$('.fact--nb').attr('value') == 'false');
}
function run() {
  if (checkVisible(divnew[0])) {
    $('.fact--nb').attr('value', 'true');
    charge();
  }
}

