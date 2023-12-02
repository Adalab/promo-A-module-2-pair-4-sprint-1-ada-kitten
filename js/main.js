"use strict";
const list = document.querySelector(".js-list");
const formSection = document.querySelector(".js_new-form");
const addButton = document.querySelector(".js_button");
const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const inputBreed = document.querySelector(".js-input-breed");
const search = document.querySelector(".js_search");

// Variables

const kittenPhoto1 = "https://dev.adalab.es/gato-siames.webp";
const kittenPhoto2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenPhoto3 = "https://dev.adalab.es/maine-coon-cat.webp";

const kittenName1 = "Anastacio";
const kittenName2 = "Fiona";
const kittenName3 = "Cielo";

const kittenBreed1 = "Siamés";
const kittenBreed2 = "Sphynx";
const kittenBreed3 = "Maine Coon";

const kittenDesc1 =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenDesc2 =
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenDesc3 =
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";


// Eventos

function showNewCatForm() {
  formSection.classList.remove("collapsed");
}
function hideNewCatForm() {
  formSection.classList.add("collapsed");
}
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formSection.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

addButton.addEventListener("click", handleClickNewCatForm);

//modifica el evento para cumplir una función manejadora

const btnAdd = document.querySelector(".js-btn-add");

function addNewKitten(event) {
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;
  const newCat =
    '<li class="card"> <article> <img class="card_img" src=' +
    valuePhoto +
    ' alt="siames-cat"/> <h3 class="card_title"> ' +
    valueName +
    ' </h3> accordion <h4 class="card_race">' +
    valueBreed +
    ' </h4> <p class="card_description"> ' +
    valueDesc +
    "</p> </article> </li>";

  list.innerHTML = list.innerHTML + newCat;
}
btnAdd.addEventListener("click", addNewKitten);


// EVENTOS

function renderKitten(url, desc, name, breed) {
   return `<li class="card ">
          <img class="card_img" src= ${url} alt="cat-photo" />
          <h3 class="card_title">${name}</h3>
          <h4 class="card_race">${breed}</h4>
          <p class="card_description ">
            ${desc}
          </p>
          </li>`;
}


const input_search_desc = document.querySelector(".js_in_search_desc");
const descrSearchText = input_search_desc.value;

const filterKitten = (event) => {
    event.preventDefault();

      if (kittenDesc1.includes(descrSearchText)) {
        list.innerHTML += kitten1;
      }
      if (kittenDesc2.includes(descrSearchText)) {
        list.innerHTML += kitten2;
      }
      if (kittenDesc3.includes(descrSearchText)) {
        list.innerHTML += kitten3;
      }
};

// buscar por descripción

search.addEventListener("click", filterKitten);



// CÓDIGO QUE SE EJECUTA AL CARGAR

const kitten1 = renderKitten (kittenPhoto1, kittenDesc1, kittenName1, kittenBreed1);
const kitten2 = renderKitten (kittenPhoto2, kittenDesc2, kittenName2, kittenBreed2);
const kitten3 = renderKitten (kittenPhoto3, kittenDesc3, kittenName3, kittenBreed3);

list.innerHTML = kitten1 + kitten2 + kitten3