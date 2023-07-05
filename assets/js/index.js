import { words } from './words.js';
import { findWord } from './findWord.js';
import { insertWord } from './insertWord.js';
import { keyboard } from './keyboard.js';

import { canvas } from './canvas.js';

window.addEventListener("DOMContentLoaded", function(){  
    // console.log("Je suis dans l'index.js");

    // Selection aléatoire d'un mot dans le tableau et découpage du mot
    let wordToFind = findWord(words);
    console.log(wordToFind);

    // Affichage du mot découpé dans le HTML
    insertWord(wordToFind);

    keyboard(wordToFind);


    canvas();


    // let letters = creatWord();
    // console.log(letters);
    // let letterWrite = keyboard();
    // console.log(letterWrite);

    
});
