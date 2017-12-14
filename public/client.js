var socket;  

function gustave() {
    $('.sketchbook').css('background-image', 'url("images/gustave.png")')
    
    changeCharacters('gustave');
 }
                         
function margot() {
    $('.sketchbook').css('background-image', 'url("images/margot.png")')
    
    changeCharacters('margot');
 }

function narrator() {
    $('.sketchbook').css('background-image', 'url("images/narrator.png")')
    
    changeCharacters('narrator');
 }

function ben() {
    $('.sketchbook').css('background-image', 'url("images/ben.png")')
    
    changeCharacters('ben');
 }

function fox() {
    $('.sketchbook').css('background-image', 'url("images/fox.png")')
    
    changeCharacters('fox');
 }

function zissou() {
    $('.sketchbook').css('background-image', 'url("images/zissou.png")')
    
    changeCharacters('zissou');
 }

function richard() {
    $('.sketchbook').css('background-image', 'url("images/richard.png")')
    
    changeCharacters('richard');
 }

function francis() {
    $('.sketchbook').css('background-image', 'url("images/francis.png")')
    
    changeCharacters('francis');
 }

var rColor = 255;
var gColor = 255;
var bColor = 255;

function redMe() {
    rColor = 234;
    gColor = 13;
    bColor = 59;
    
    changeColors('redMe');
}

function purpleMe() {
    rColor = 145;
    gColor = 72;
    bColor = 251;
}

function iceMe() {
    rColor = 158;
    gColor = 229;
    bColor = 254;
}

function emeraldMe() {
    rColor = 136;
    gColor = 253;
    bColor = 186;
}

function mustardMe() {
    rColor = 225;
    gColor = 233;
    bColor = 50;
}

function beigeMe() {
    rColor = 254;
    gColor = 228;
    bColor = 143;
}

function magentaMe() {
    rColor = 234;
    gColor = 20;
    bColor = 127;
}

function blueMe() {
    rColor = 40;
    gColor = 40;
    bColor = 231;
}

function skyMe() {
    rColor = 27;
    gColor = 167;
    bColor = 225;
}

function yellowgreenMe() {
    rColor = 45;
    gColor = 253;
    bColor = 47;
}

function mandarinMe() {
    rColor = 253;
    gColor = 174;
    bColor = 42;
}

function brownMe() {
    rColor = 142;
    gColor = 79;
    bColor = 33;
}

function pinkMe() {
    rColor = 253;
    gColor = 72;
    bColor = 249;
}

function coolMe() {
    rColor = 159;
    gColor = 180;
    bColor = 253;
}

function mintMe() {
    rColor = 38;
    gColor = 224;
    bColor = 202;
}

function leafMe() {
    rColor = 233;
    gColor = 254;
    bColor = 161;
}

function orangeMe() {
    rColor = 253;
    gColor = 108;
    bColor = 34;
}

function whiteMe() {
    rColor = 255;
    gColor = 242;
    bColor = 231;
}

function eraseMe() {
    rColor = 245;
    gColor = 245;
    bColor = 222;
}

function setup() {
    var myCanvas = createCanvas(500, 560);
//    var x = 940;
//    var y = 400;
//    myCanvas.position(x, y);
    
    myCanvas.parent('pic');
    background(245, 245, 221);
    
    var button = createButton("reset");
    button.mousePressed(resetColor);
    
    socket = io.connect('http://localhost:3000'); 
    socket.on('mouse', newColoring);
    
    socket.on('changeCharacters', function (data) {
        $('.sketchbook').css('background-image', 'url("images/' + data + '.png")')
    });
    
    socket.on('changeColors', function (data) {
        data + '()';
    });
    
}

function newColoring(data) {
    noStroke();
    fill(rColor, gColor, bColor);
    ellipse(data.x, data.y, 15, 15);
}

function resetColor() {
    var myCanvas = createCanvas(500, 560);
    myCanvas.parent('pic');
    background(245, 245, 221);
}

function mouseDragged() {
    console.log('Sending: ' + mouseX + ',' + mouseY);
    var data = {
        x : mouseX,
        y : mouseY
    }
    
    socket.emit('mouse', data);
    
    noStroke();
    
    fill(rColor, gColor, bColor);
    
    ellipse(mouseX, mouseY, 15, 15);
}

function changeCharacters(chrName) {
    socket.emit('changeCharacters', chrName);
    resetColor();
}

function changeColors(crName) {
    socket.emit('changeColors', crName);
    resetColor();
}