var mapLink = document.querySelector(".contacts__btn");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal__close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal--show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal--show")) {
      mapPopup.classList.remove("modal--show");
    }
  }
});
