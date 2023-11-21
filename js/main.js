"use strict";

const formSection = document.querySelector(".js_new-form");
const addButton = document.querySelector(".js_button");

addButton.addEventListener("click", (event) => {
  formSection.classList.toggle("collapsed");
});

const btnAdd = document.querySelector(".js-btn-add");
btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const inputDesc = document.querySelector(".js-input-desc");
  const inputPhoto = document.querySelector(".js-input-photo");
  const inputName = document.querySelector(".js-input-name");
  const inputBreed = document.querySelector(".js-input-breed");
  // const labelMessageError = document.querySelector('.js-label-error');
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;
  const newCat =
    '<li class="card"> <article> <img class="card_img" src=' +
    valuePhoto +
    ' alt="siames-cat"/> <h3 class="card_title"> ' +
    valueName +
    ' </h3> accordion <h4 class="card_race">valueBreed</h4> <p class="card_description">valueDesc </p> </article> </li>';
  const list = document.querySelector(".js-list");
  list.innerHTML = list.innerHTML + newCat;
});
