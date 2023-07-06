export function findWord(words){

    // Je selectionne un nombre entre 0 et 100
    let randomNum = parseInt(Math.floor(Math.random() * 101));

    // Je selectionne un mot au hasard dans la liste des mots
    let wordToFind = words[randomNum];

    // Je retire les accents
    let wordWithoutAccent = wordToFind.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Je passe en majuscule
    let wordMajuscule = wordWithoutAccent.toLocaleUpperCase()

    // Je sépare les lettres
    let letters = wordMajuscule.split('');

    return letters;
}