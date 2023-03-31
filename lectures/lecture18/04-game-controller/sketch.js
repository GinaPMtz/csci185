let x = 200;
let y = 200;
let width = 150;
let fillColor = 'blue';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    fill(fillColor);
    //noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
    
    //this makes it move up and down
    if (ev.code === 'ArrowUp') {
        //console.log('move tie fighter up!')
        y = y - 10;
    } else if (ev.code === 'ArrowDown') {
        y = y + 10;
    }

    //this makes it move left and right
    if (ev.code === 'ArrowLeft') {
         x = x - 10;
    } else if (ev.code === 'ArrowRight'){
        x = x + 10;
    } 
    
    //makes circle change color
    else if (ev.code === 'Enter'){
        fillColor = 'red' ;
    } 
    
    //makes the circle smaller and bigger
    else if (ev.code === 'Minus') {
        width = width - 10;
    } else if (ev.code === 'Equal') {
        width = width + 10;
    }



    // redraw circle:
    clear();
    fill(fillColor);
    //noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
