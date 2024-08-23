// SET UP PHASE
//1. Preparo le sorgenti delle immagini
const sources = ['1', '2', '3', '4', '5', '6', '7', '8'];
//2. Prendo gli elementi che mi interessano dal DOM
const carouselGallery = document.querySelector('#gallery');
console.log(carouselGallery);
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');


//3. Genero le immagini da js
for (let i = 0; i < sources.length; i++) {
  const src = `img/moto-${sources[i]}.jpg`;
  const image = document.createElement('img');
  image.src = src;
  image.alt = `moto-${sources[i]}`;
  carouselGallery.appendChild(image);
}

//4. Costruisco la lista di nodi immagine
//in modo da poter agire poi sulle singole immagini
const images = document.querySelectorAll('#carousel img');
console.log(images);

//5. Rendo visibile la prima immagine
let activeIndex = 0;
images[activeIndex].classList.add('active');

//EVENTI DINAMICI
//6. Reazione al next
nextButton.addEventListener('click', function () {
  //blocco la funzione del bottone se sono alla fine
  if (activeIndex == images.length - 1) return;

  //tolgo la classe dall'immagine con classe active
  images[activeIndex].classList.remove('active');
  
  //incremento l'indice
  activeIndex++;
  
  //aggiungo la classe all'immagine successiva a quella active
  images[activeIndex].classList.add('active');
})

//7. Reazione al prev
prevButton.addEventListener('click', function () {
  //blocco la funzione del bottone se sono all'inizio
  if (!activeIndex) return;

  //tolgo la classe dall'immagine con classe active
  images[activeIndex].classList.remove('active');
  
  //decremento l'indice
  activeIndex--;
  
  //aggiungo la classe all'immagine precedente a quella active
  images[activeIndex].classList.add('active');
})

