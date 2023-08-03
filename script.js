
let slideIndex = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("slides")[0].children;
  const thumbnails = document.getElementsByClassName("thumbnails")[0].children;
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = 0;
  } else if (slideIndex >= slides.length) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  // Highlight the active thumbnail
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("active");
  }
  thumbnails[slideIndex].classList.add("active");
}

function changeSlide(n) {
  showSlide(n);
}

function currentSlide(n) {
  showSlide((n - slideIndex));
}

// Show the first slide initially
showSlide(0);


// function showCart() {
//   var x = document.getElementById("yourCart");
//   if (x.style.display === "block") {
//       x.style.display = "none";
//   } else {
//       x.style.display = "block";
//   }
// }
// function hiddenCart() {
//   var x = document.getElementById("yourCart");
//   if (x.style.display === "block") {
//       x.style.display = "none";
//   } 
// }

function openTab(tabId) {
  var i;
  var x = document.getElementsByClassName("panel");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
}
