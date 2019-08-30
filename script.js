document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.slider');
//   var instances = M.Slider.init(elems,{height:660});
// });

var backgroundImg = 1;
var images = [
  "https://i.ytimg.com/vi/DJMkJybnoQI/maxresdefault.jpg",
  "https://media3.giphy.com/media/3og0INtldac8gncQO4/giphy.gif?cid=790b7611c2a97130dc9864ffd1607d59ef5f77805707d57e&rid=giphy.gif",
  "https://images.immediate.co.uk/production/volatile/sites/4/2018/10/p1501ay_0-4a31e22.jpg?quality=90&resize=620,413",
  "https://media2.giphy.com/media/3ov9jWPi1AH2XUfI6Q/giphy.gif?cid=790b761160408f09823f70c3ef0cf2a83f836ba62695d07e&rid=giphy.gif",
  "https://i.ytimg.com/vi/62XtuOMndxM/maxresdefault.jpg",
  "https://media0.giphy.com/media/l3c614V12UA82q1vG/giphy.gif?cid=790b761160408f09823f70c3ef0cf2a83f836ba62695d07e&rid=giphy.gif",
  "https://images.immediate.co.uk/production/volatile/sites/4/2018/10/heic1520a_1280-d0693f4.jpg?quality=45&resize=960,413",
  "http://33.media.tumblr.com/ca21bf60fd701a2aeb84def658fa0767/tumblr_nn50a10eHS1tejz4lo1_540.gif"
]

setInterval(function () {
  $("#intro").css("background-image", `url(${images[backgroundImg % 8]})`)
  backgroundImg++
}, 5000)