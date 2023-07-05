export function insertWord(wordToFind){

    let section = document.querySelector("#word > section");
    for(let i = 0; i < wordToFind.length; i++){

        let newSection = document.createElement("section");
        let newParagraphe = document.createElement("p");
        newParagraphe.textContent = wordToFind[i];
        newParagraphe.classList.add("hidden");
        newParagraphe.classList.add("letter-"+i);
        newSection.appendChild(newParagraphe);
        section.appendChild(newSection);
    }

}