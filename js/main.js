// ARRAY DI OGGETTI
const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//INSERISCO LE IMMAGINI
let imagesToAdd = "";
let textContentToAdd = "";
images.forEach((element) => {
    let image = `<img src="${element.image}">`;
    let content = `<h3 class="textContent title">${element.title}</h3>
    <p class="textContent">${element.text}</p>`
    imagesToAdd += `${image} ${content}`;
});
document.getElementById("wrapper").innerHTML += imagesToAdd;
// Visualizzo la prima immagine
let currentImg = 0;
const imagesDOM = document.querySelectorAll("#wrapper img");
const titlesDOM = document.querySelectorAll("#wrapper h3");
const textDOM = document.querySelectorAll("#wrapper p");
imagesDOM[currentImg].classList.add("displayed");
titlesDOM[currentImg].classList.add("displayed");
textDOM[currentImg].classList.add("displayed");

// Pulsante SU

document.getElementById("arrowUp").addEventListener("click", function () {
    if (currentImg < imagesDOM.length - 1) {
        imagesDOM[currentImg].classList.remove("displayed");
        titlesDOM[currentImg].classList.remove("displayed");
        textDOM[currentImg].classList.remove("displayed");
        currentImg++;
        imagesDOM[currentImg].classList.add("displayed");
        titlesDOM[currentImg].classList.add("displayed");
        textDOM[currentImg].classList.add("displayed");
    } else if (currentImg == imagesDOM.length - 1) {
        imagesDOM[currentImg].classList.remove("displayed");
        titlesDOM[currentImg].classList.remove("displayed");
        textDOM[currentImg].classList.remove("displayed");
        currentImg = 0;
        imagesDOM[currentImg].classList.add("displayed");
        titlesDOM[currentImg].classList.add("displayed");
        textDOM[currentImg].classList.add("displayed");
    }
});
// Pulsante GIU 

document.getElementById("arrowDown").addEventListener("click", function () {
    if (currentImg > 0) {
        imagesDOM[currentImg].classList.remove("displayed");
        titlesDOM[currentImg].classList.remove("displayed");
        textDOM[currentImg].classList.remove("displayed");
        currentImg--;
        imagesDOM[currentImg].classList.add("displayed");
        titlesDOM[currentImg].classList.add("displayed");
        textDOM[currentImg].classList.add("displayed");
    } else if (currentImg == 0) {
        imagesDOM[currentImg].classList.remove("displayed");
        titlesDOM[currentImg].classList.remove("displayed");
        textDOM[currentImg].classList.remove("displayed");
        currentImg = imagesDOM.length - 1;
        imagesDOM[currentImg].classList.add("displayed");
        titlesDOM[currentImg].classList.add("displayed");
        textDOM[currentImg].classList.add("displayed");
    }
});

//BONUS AUTOPLAY

setInterval(function () {
    if (currentImg < imagesDOM.length - 1) {
        imagesDOM[currentImg].classList.remove("displayed");
        titlesDOM[currentImg].classList.remove("displayed");
        textDOM[currentImg].classList.remove("displayed");
        currentImg++;
        imagesDOM[currentImg].classList.add("displayed");
        titlesDOM[currentImg].classList.add("displayed");
        textDOM[currentImg].classList.add("displayed");
    } else if (currentImg == imagesDOM.length - 1) {
        imagesDOM[currentImg].classList.remove("displayed");
        titlesDOM[currentImg].classList.remove("displayed");
        textDOM[currentImg].classList.remove("displayed");
        currentImg = 0;
        imagesDOM[currentImg].classList.add("displayed");
        titlesDOM[currentImg].classList.add("displayed");
        textDOM[currentImg].classList.add("displayed");
    }
}, 3000);
