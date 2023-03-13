
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.color = 'white';
};

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = '#2E86AB';
};

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = '#F49390';
};

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = '#F26419';
};

function clearScreen() {
    // your code here...
    console.log('Clear all sections (no bg, font color white)');

    document.querySelector('#section1').style.backgroundColor = 'white';
    document.querySelector('#section1').style.color = 'black';

    document.querySelector('#section2').style.backgroundColor = 'white';
    document.querySelector('#section2').style.color = 'black';

    document.querySelector('#section3').style.backgroundColor = 'white';
    document.querySelector('#section3').style.color = 'black';

    document.querySelector('#section4').style.backgroundColor = 'white';
    document.querySelector('#section4').style.color = 'black';

};

