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
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

//INSERISCO LE IMMAGINI
let contentToAdd = "";
images.forEach((element) => {
    let image = `<img src="${element.image}">`;
    let content = `<h3 class="textContent title">${element.title}</h3>
    <p class="textContent">${element.text}</p>`
    contentToAdd += `${image} ${content}`;
});
document.getElementById("wrapper").innerHTML += contentToAdd;
// Visualizzo la prima immagine
let currentCard = 0;
const imagesDOM = document.querySelectorAll("#wrapper img");
const titlesDOM = document.querySelectorAll("#wrapper h3");
const textDOM = document.querySelectorAll("#wrapper p");
showContent();

// Pulsante SU

document.getElementById("arrowUp").addEventListener("click", function () {
    if (currentCard < imagesDOM.length - 1) {
        hideContent()
        currentCard++;
        showContent()
    } else if (currentCard == imagesDOM.length - 1) {
        hideContent()
        currentCard = 0;
        showContent()
    }
});
// Pulsante GIU 

document.getElementById("arrowDown").addEventListener("click", function () {
    if (currentCard > 0) {
        hideContent()
        currentCard--;
        showContent()
    } else if (currentCard == 0) {
        hideContent()
        currentCard = imagesDOM.length - 1;
        showContent()
    }
});

//BONUS START AUTOPLAY
document.getElementById("start").addEventListener("click", function(){
    autoplay = setInterval(function () {
        if (currentCard < imagesDOM.length - 1) {
            hideContent()
            currentCard++;
            showContent()
        } else if (currentCard == imagesDOM.length - 1) {
            hideContent()
            currentCard = 0;
            showContent()
        }
    }, 3000);
});

//BONUS AUTOPLAY REVERT
document.getElementById("invert").addEventListener("click", function () {
    clearInterval(autoplay);
    autoplay = setInterval(function () {
        if (currentCard > 0) {
        hideContent()
        currentCard--;
        showContent()
    } else if (currentCard == 0) {
        hideContent()
        currentCard = imagesDOM.length - 1;
        showContent()
    }
}, 3000);
});
//BONUS STOP AUTOPLAY
document.getElementById("stop").addEventListener("click", function(){
    clearInterval(autoplay);
})

function hideContent() {
    imagesDOM[currentCard].classList.remove("displayed");
    titlesDOM[currentCard].classList.remove("displayed");
    textDOM[currentCard].classList.remove("displayed");
}

function showContent() {
    imagesDOM[currentCard].classList.add("displayed");
    titlesDOM[currentCard].classList.add("displayed");
    textDOM[currentCard].classList.add("displayed");
}