/*let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("homepagecitation");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
*/
let slideShow = 1;
pictureSlide(slideShow);

function nextPicture(l) {
  pictureSlide(slideShow += l);
}

function currentPicture(l) {
  pictureSlide(slideShow = l)
}

function pictureSlide(l) {
  let l;
  let imageswitch = document.getElementsByClassName("homegallery");
  if(l > imageswitch.length){ slideShow = 1}
  if(l<1){slideShow = imageswitch.length }
  for (l = 0 ; l < imageswitch.length; l++ ) {
    imageswitch[l].style.display = "none";

    imageswitch[slideShow-1].style.display = "block";

  }
}




  