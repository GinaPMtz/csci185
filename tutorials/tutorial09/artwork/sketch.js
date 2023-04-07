const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(2);
    
    fill("#08415c");

    let i = 0;
    while (i < 100) {
        fill(colors[randomInt(0, 4)]);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomFloat(25, 125);
        circle(x, y, size);
    
        fill(colors [randomInt(0, 4)]);
        let x1 = randomInt(0, canvasWidth);
        let y1 = randomInt(0, canvasHeight);
        let size1 = randomFloat(25, 125);
        square(x1, y1, size1);
        i++;
    }
}


// // anything that you want to animate goes in this function:  
// function draw() {
//     clear();

// }


 
// // 1. draw a random square:
// square(x, y, size);

/*function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    fill("#08415c");
    let i = 0;
    while (i < 200){
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(25, 125);
    square(x, y, size);
    ++i;
}
}*/

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

/*function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    let i = 0;
    while (i < 300){
    let x = (x, y - size / 2);
    let y = (x - size / 2.25, y + size / 4.3);
    let size = (x + size / 2.25, y + size / 4.3);
    triangle(x, y, size);
    ++i;
}
}*/

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

// do this 1000 times


