export function keyboard(wordToFind){
    // console.log("Je rentre dans clavier.js");

    let keys = document.querySelectorAll("#keyboard > section > p");
    let paragraphes = document.querySelectorAll("#word > section > section > p");
    let compteur = 0;

    for(let key of keys){
        key.addEventListener("click", function(){
            // console.log(key.textContent);
            let letter = key.textContent;
            console.log(letter);

            // console.log(paragraphes);
            
            let reponse = false;
            for(let i=0; i<wordToFind.length;  i++){
               
                if(letter === wordToFind[i]){
                    // console.log(paragraphes[i]);
                    paragraphes[i].classList.remove("hidden");
                    reponse = true;
                }
            }
            if(reponse === false){
                compteur = compteur + 1;
                console.log(compteur);
            }

            // Affichage des illustrations
            let canvas = document.querySelector("canvas");
            let ctx = canvas.getContext("2d");
            ctx.fillStyle = "#000000";
            if(compteur===1){
                ctx.fillRect(0, 230, 150, 10);
                ctx.fillRect(75, 230, 10, -200);
                ctx.fillRect(75, 30, 140, 10);
                ctx.fillRect(215, 30, 10, 50);
            }
            else if(compteur===2){
                ctx.beginPath();
                ctx.arc(220, 80, 25, 0, Math.PI*2, false);
                ctx.fill();
            }
            else if(compteur===3){
                ctx.fillRect(215, 100, 10, 60);
            }
            else if(compteur===4){
                ctx.fillRect(180, 120, 40, 10);
            }
            else if(compteur===5){
                ctx.fillRect(220, 120, 40, 10);
            }
            else if(compteur===6){
                ctx.fillRect(205, 155, 10, 50);
            }
            else if(compteur===7){
                ctx.fillRect(225, 155, 10, 50);
                let lose = document.getElementById("lose");
                lose.classList.remove("hidden");
                for(let letter of paragraphes){
                    letter.classList.remove("hidden");
                }
            }

            // partie gagnante
            let hiddenLetters = document.querySelectorAll("#word > section > section > p.hidden");
            console.log(hiddenLetters.length);
            if(hiddenLetters.length==0){
                let win = document.getElementById("win");
                win.classList.remove("hidden");
            }

        });
    }

    return compteur;



}