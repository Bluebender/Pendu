export function insertWord(wordToFind){

    let section = document.querySelector("#word > section");
    let sectionsToDelete = document.querySelectorAll("#word > section > section");

    if(sectionsToDelete){
        for(let section of sectionsToDelete){
            section.remove();
        }

    }

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