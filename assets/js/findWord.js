export function findWord(words){

    // Je selectionne un nombre entre 0 et 100
    let randomNum = parseInt(Math.floor(Math.random() * 101));
    // console.log("le nobmre aléatoire est : "+randomNum);

    // Je selectionne un mot au hasard dans la liste des mots
    let wordToFind = words[randomNum];
    // console.log(wordToFind);

    // Je retire les accents
    let wordWithoutAccent = wordToFind.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // console.log(wordWithoutAccent);

    // Je passe en majuscule
    let wordMajuscule = wordWithoutAccent.toLocaleUpperCase()
    // console.log(wordMajuscule);

    // Je sépare les lettres
    let letters = wordMajuscule.split('');
    // console.log(letters)

    return letters;
}