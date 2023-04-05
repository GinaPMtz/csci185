//array of strings
const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",  "Alex", "Brisa", "Teresa",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe", "Gina", "Rebecca", "Ella", "Henry",
];


// use a while loop to output a message for each
// item in the array:
/**
 * what do you want to repeat?
 *    output
 * how long do you want to repeat?
 *    11
 *    names. lenght
 * what do you want to change each time?
 *     which slotisbeing accessed
 */

const outputElement = document.querySelector('#output');
let i = 0;
while (i < names.length){
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`);
    i++;
}

outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[1]}!</p>`);
outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[2]}!</p>`);
outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[3]}!</p>`);
outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[4]}!</p>`);
outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[5]}!</p>`);

