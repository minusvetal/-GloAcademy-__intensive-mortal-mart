// new WOW().init();
const orderFilm = document.querySelector("#order");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

orderFilm.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

