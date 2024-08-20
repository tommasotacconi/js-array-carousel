// SET UP PHASE
//1. Preparo le sorgenti delle immagini
const sources = ['1', '2', '3', '4', '5', '6', '7', '8'];
//2. Prendo gli elementi che mi interessano dal DOM
const carouselGallery = document.querySelector('#gallery');
console.log(carouselGallery);

//2. Genero le immagini da js
for (let i = 0; i < sources.length; i++) {
  const src = `img/moto-${sources[i]}.jpg`;
  const image = document.createElement('img');
  image.src = src;
  image.alt = `moto-${sources[i]}`;
  carouselGallery.appendChild(image);
  console.log(image);
}
