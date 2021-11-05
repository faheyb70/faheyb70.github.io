
var fag = new Audio();
var bleep = new Audio();
var bleep1 = new Audio();
var bleep2 = new Audio();
var farft = new Audio();
bleep.src = "bleep.mp3";
bleep1.src = "bleep1.mp3";
bleep2.src = "bleep2.mp3";
farft.src = "job.mp3";
fag.src = "fag.mp3";

function sayHi() {
    let name = document.getElementById('name').value;

    alert('Nice job FARTING,  ' + (name) + '!');
}
function changeImg() {
    var image = document.getElementById('burp');
    if (image.src.match("button.png")) {
        image.src = "button1.png";
    }
    else {
        image.src = "button.png";
    }

}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function randomFart(){
    let value4 = generateRandomInteger(3);
    if(value4 == 1){
        bleep.src = "bleep1.mp3";
    }
    if(value4 == 2){
        bleep.src = "bleep2.mp3";
    }
    if(value4 == 3)
        bleep.src = "bleep.mp3";
    }
