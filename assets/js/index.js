import { words } from './words.js';
import { findWord } from './findWord.js';
import { insertWord } from './insertWord.js';
import { keyboard } from './keyboard.js';

window.addEventListener("DOMContentLoaded", function(){  

    let newGame = document.getElementById("newGame");
    newGame.addEventListener("click", function(){
        let win = document.getElementById("win");
        win.classList.add("hidden");
        let lose = document.getElementById("lose");
        lose.classList.add("hidden");
        let canvas = document.querySelector("canvas");
        canvas.parentNode.removeChild(canvas);
        let drawing = document.getElementById("drawing");
        let newCanvas = document.createElement("canvas");
        newCanvas.setAttribute("height", "250px");
        newCanvas.setAttribute("width", "300px");
        drawing.prepend(newCanvas);





        // Selection aléatoire d'un mot dans le tableau et découpage du mot
        let wordToFind = findWord(words);
        console.log(wordToFind);

        // Affichage du mot découpé dans le HTML
        insertWord(wordToFind);

        // Lancement de l'écoute du clavier
        keyboard(wordToFind);
    });
});
