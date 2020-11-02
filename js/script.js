var mainPage = document.querySelector(".js-main-page");
var radio1 = document.querySelector(".slider-1");
var radio2 = document.querySelector(".slider-2");
var radio3 = document.querySelector(".slider-3");

var slide1 = document.querySelector(".slide-item1");
var slide2 = document.querySelector(".slide-item2");
var slide3 = document.querySelector(".slide-item3");


if (mainPage) {
  radio1.addEventListener("change", function (evt) {
    slide1.classList.add("slide-active");
    slide2.classList.remove("slide-active");
    slide3.classList.remove("slide-active");
  });

  radio2.addEventListener("change", function (evt) {
    slide2.classList.add("slide-active");
    slide1.classList.remove("slide-active");
    slide3.classList.remove("slide-active");
  });

  radio3.addEventListener("change", function (evt) {
    slide3.classList.add("slide-active");
    slide1.classList.remove("slide-active");
    slide2.classList.remove("slide-active");
  });
};



var writeUs = document.querySelector(".write-us-button");
var popupWriteUs = document.querySelector(".write-us");
var closeWriteUs = document.querySelector(".modal-close");
var form = popupWriteUs.querySelector(".write-us-form");
var nameUser = popupWriteUs.querySelector(".write-us-name");
var email = popupWriteUs.querySelector(".write-us-email");
var letter = document.querySelector(".js-write-us-text-letter");

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("write-us-show");
});

closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("write-us-show");
  popupWriteUs.classList.remove("write-us-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupWriteUs.classList.contains("write-us-show")) {
      evt.preventDefault ();
      popupWriteUs.classList.remove("write-us-show");
      popupWriteUs.classList.remove("write-us-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if ((!nameUser.value) || (!email.value) || (!letter.value)) {
    evt.preventDefault();
    popupWriteUs.classList.remove("write-us-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("write-us-error");
  }
});



let selectedTd;

table.onclick = function(event) {
  let target = event.target; // где был клик?

  if (target.tagName != 'TD') return; // не на TD? тогда не интересует

  highlight(target); // подсветить TD
};

function highlight(td) {
  if (selectedTd) { // убрать существующую подсветку, если есть
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // подсветить новый td
}
