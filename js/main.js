"use strict";
const list = document.querySelector(".js-list");
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
    ' </h3> accordion <h4 class="card_race">' + 
    valueBreed + 
    ' </h4> <p class="card_description"> ' + 
    valueDesc + 
    '</p> </article> </li>';

  list.innerHTML = list.innerHTML + newCat;
});

// buscar por descripción

const kittenName1 = '';
const kittenName2 = '';

const kittenDesc1 = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenDesc2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';

const search = document.querySelector('.js_search')

search.addEventListener("click", (event) => {
  event.preventDefault();

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

if ( kittenDesc1.includes(descrSearchText) ) {
  list.innerHTML = `
  <li class="card js_kitten1">
          <article>
            <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
            <h3 class="card_title">Anastacio</h3>
            <h4 class="card_race">Siamés</h4>
            <p class="card_description js_kittenDesc1">
              Porte elegante, su patrón de color tan característico y sus ojos
              de un azul intenso, pero su historia se remonta a Asía al menos
              hace 500 años, donde tuvo su origen muy posiblemente.
            </p>
          </article>
        </li>
  `;
}

if ( kittenDesc2.includes(descrSearchText) ) {
  list.innerHTML = `
  <li class="card js_kitten2">
          <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
          <h3 class="card_title">Fiona</h3>
          <h4 class="card_race">Sphynx</h4>
          <p class="card_description js_kittenDesc2">
            Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
            hasta con pinta de alienígena han llegado a definir a esta raza
            gatuna que se caracteriza por la «ausencia» de pelo.
          </p>
        </li>
  `;
}

if ( kittenDesc3.includes(descrSearchText) ) {
  list.innerHTML = `
  <li class="card js_kitten3">
          <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
          <h3 class="card_title">Cielo</h3>
          <h4 class="card_race">Maine Coon</h4>
          <p class="card_description js_kittenDesc3">
            Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
            bella mirada se ha convertido en una de sus señas de identidad.
            Sus ojos son grandes y las orejas resultan largas y en punta.
          </p>
  `;
}
/*
const kittenDesc1 = document.querySelector('.js_kittenDesc1');
const kittenDesc2 = document.querySelector('.js_kittenDesc2');
const kittenDesc3 = document.querySelector('.js_kittenDesc3');

const kitten1 = document.querySelector('.js_kitten1');
const kitten2 = document.querySelector('.js_kitten2');
const kitten3 = document.querySelector('.js_kitten3');

if ( kittenDesc1.innerHTML.includes(descrSearchText) ) {
  //Completa el código para poner el <li> del gato 1 en la página
  kitten1.classList.remove('hidden');
  } else {
    kitten1.classList.add('hidden');
}
  
if (kittenDesc2.innerHTML.includes(descrSearchText) ) {
//Completa el código para poner el <li> del gato 2 en la página
  kitten2.classList.remove('hidden');
  } else {
  kitten2.classList.add('hidden');
  }
  
  if( kittenDesc3.innerHTML.includes(descrSearchText) ) {
  //Completa el código para poner el <li> del gato 3 en la página
  kitten2.classList.remove('hidden');
  } else {
  kitten2.classList.add('hidden');
}
*/
})