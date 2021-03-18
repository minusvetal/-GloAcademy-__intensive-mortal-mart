$ (document).ready(function(){
   $('#container').vide({
    mp4: 'video/video.mp4',
    webm: 'video/video.webm',
    ogv: 'video/video.ogv',
    poster: 'img/cover-image.png'
  });
})


const orderFilm = document.querySelector("#order");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

orderFilm.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


