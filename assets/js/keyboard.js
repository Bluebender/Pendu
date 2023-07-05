export function keyboard(wordToFind){
    // console.log("Je rentre dans clavier.js");

    let keys = document.querySelectorAll("#keyboard > section > p");
    let paragraphes = document.querySelectorAll("#word > section > section > p");

    for(let key of keys){
        key.addEventListener("click", function(){
            // console.log(key.textContent);
            let letter = key.textContent;
            console.log(letter)

            console.log(paragraphes);
        
            for(let i=0; i<wordToFind.length;  i++){
               
                if(letter === wordToFind[i]){
                    console.log(paragraphes[i]);
                    paragraphes[i].classList.remove("hidden")

                }
        
            }
        

        });
    }



}