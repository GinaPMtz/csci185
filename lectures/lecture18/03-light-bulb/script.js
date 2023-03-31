const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

function turnOnOff() {
    console.log('image clicked');
    //if current image's source is the same as imgOff image address, 
    //then switch the source to the imgOn image address 
    if (elem.src === imgOff) {
    elem.src = imgOn;
    } else {
        elem.src = imgOff;
    }
}
