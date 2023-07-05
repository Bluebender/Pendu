function canvas(){
    let canvas = document.querySelector("canvas");
    console.log(canvas)
    let ctx = canvas.getContext("2d");
    console.log(ctx);

    ctx.fillStyle = "#000000";

    // Etape 1
    ctx.fillRect(0, 280, 150, 10);

    ctx.fillRect(75, 280, 10, -200);

    ctx.fillRect(75, 80, 140, 10);

    ctx.fillRect(215, 80, 10, 50);

    // Etape 2
    ctx.beginPath();
    ctx.arc(220, 130, 25, 0, Math.PI*2, false);
    ctx.fill();

    // Etape 3
    ctx.fillRect(215, 150, 10, 60);

    // Etape 4
    ctx.fillRect(180, 170, 40, 10);

    // Etape 5
    ctx.fillRect(220, 170, 40, 10);

    // Etape 6
    ctx.fillRect(205, 205, 10, 50);

    // Etape 7
    ctx.fillRect(225, 205, 10, 50);

}

export { canvas };