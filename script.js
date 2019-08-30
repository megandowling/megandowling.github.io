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
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT961wvpSl2f-3xbAS3RwCW1fwuLNfePAsvxWiJC25AaayyF_Nb",
"https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_20,y_0/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg?itok=Nj49PDxW"
]
setInterval(function(){
  $("#intro").css("background-image", `url(${images[backgroundImg%2]})`)
  backgroundImg++
},5000)