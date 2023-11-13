// Percorso immagini
imagesPath = [          //Si crea un array contenente i percorsi delle foto, in questo caso non sono link"
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

// Inserimento immagini

let imagesToAdd = "";                           //Si crea una variabile vuota FUORI dal ciclo, per salvarne il valore a ciclo finito.
for (let i = 0; i < imagesPath.length; i++) {      //Fino a quando non si eccede il numero di stringhe presenti nell'array
    const singleImagePath = imagesPath[i];      //Salvo ogni percorso singolarmente 
    imagesToAdd += `<img src="${singleImagePath}">`;        //si aggiunge alla variabile vuota creata un valore, inserendo il codice html destinando il singolo percorso all'attributo "src" dell'immagine appena creata
}
document.getElementById("wrapper").innerHTML += imagesToAdd; //si prende il container (wrapper in questo caso) e si stampa in pagina il codice con l'immagine.


// Visualizzo la prima immagine

let currentImg = 0;                 //si definisce una variabile e si assegna valore 0, sapendo che la prima immagine ha index uguale a 0.
const images = document.querySelectorAll("#wrapper img"); //si definisce una costante che va a pescare TUTTI i tag immagine presenti nel container
images[currentImg].classList.add("displayed"); //all'immagine che ha index 0 (valore definito sopra) e quindi la prima, aggiungiamo la classe css che abbiamo preparato, contenente il display block

// Pulsante SU

document.getElementById("arrowUp").addEventListener("click", function () {
    if (currentImg < images.length - 1) {                   //Partendo da zero, l'ultima immagine avrà valore 4 anche se l'array avrà lunghezza 5, quindi alla lunghezza di quest'ultimo si sottrae 1. Non si mette direttamente 4 perchè se si aggiungono immagini si spacca tutto
        images[currentImg].classList.remove("displayed");       //si toglie il display block al valore corrente (0 quindi prima foto)
        currentImg++;                                           //si incrementa di 1 il valore
        images[currentImg].classList.add("displayed");             //si aggiunge il display block al nuovo valore (1 in questo caso, seconda foto)
    } else if (currentImg == images.length - 1) {               //se si raggiunge il limite di foto inserite
        images[currentImg].classList.remove("displayed");       // si toglie il display block all'elemento corrente (ultima foto)
        currentImg = 0;                                        // si imposta un nuovo valore per far iniziare nuovamente il giro, e quindi la prima foto (valore 0)
        images[currentImg].classList.add("displayed");          //a questo valore, si aggiunge nuovamente il diplay block
    }
});

// Pulsante GIU 

document.getElementById("arrowDown").addEventListener("click", function () {
    if (currentImg > 0) {                                       // se non si è nella posizione di partenza (valore 0)
        images[currentImg].classList.remove("displayed");       //si toglie il display alla foto appena visualizzata
        currentImg--;                                           //si decrementa il valore di 1
        images[currentImg].classList.add("displayed");          // si aggiunge il display block al nuovo valore
    } else if (currentImg == 0) {                               //altrimenti se si è nella posizione di partenza
        images[currentImg].classList.remove("displayed");       //si toglie comunque il display al valore corrente
        currentImg = images.length - 1;                         //si imposta il valore dell'ultima foto nell'array
        images[currentImg].classList.add("displayed");          //si mostra il valore
    }
});