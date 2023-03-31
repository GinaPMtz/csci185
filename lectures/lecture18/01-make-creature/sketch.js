function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(400, 400, 'blue');
    makeCreature(700, 100, 'green');
    makeCreature(0, 400, 'purple', 'red');

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x, y, fillColor, eyeColor='black') {
    // your creature:
    fill(fillColor);
    circle(x, y, 300);

    fill(eyeColor)
    ellipse(x - 50, y - 50, 30, 40); // x, y, width, height
    ellipse(x + 50, y - 50, 30, 40);
}

function mouseClicked(){
    makeCreature(mouseX, mouseY, 'pink', 'red');
}

function mouseDragged(){
    makeCreature(mouseX, mouseY, 'purple', 'red');
}