function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();

    let y = 0;
    while (y <= 750){
        circle(100, y, 50);
        circle(500, y, 50);
        y += 5;
    }

    y = 0;
    while (y <= 650){
        circle(300, y, 50);
        y += 5;
    }

    y = 0;
    let w = 50;
    let x1 = 100;
    let x2 = 300;
    let x3 = 500;
    while (y <= 3000) {
        fill('teal')
        circle(x1, y, w);

        fill('pink')
        circle(x2, y, w);

        fill ('lightblue')
        circle(x3, y, w);
        y += 5;
        w += 5;
        x1 += 5;
        x2 += 5;
        x3 += 5;
    }

    circle(100, 200, 50);
    circle(100, 250, 50);
    circle(100, 300, 50);
    circle(100, 350, 50);
    circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
