
let checkImagesFor2x = () => {
  let images = document.querySelectorAll('img');

  images.forEach( (img) => {

    if( img.src.includes('@2x') ){
      img.onload = () => {
        img.style.maxWidth = img.naturalWidth / 2 + 'px';
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function(){
  // checkImagesFor2x();
});
