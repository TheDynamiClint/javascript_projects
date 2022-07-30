
// function called to cycle through countdown array

function countDown (i){

    const countdiv =  document.querySelector('#countdown');

    let count = ["10...", "9...", "8...", "7...", 
                    "6...", "5...", "4...", "3...", 
                        "2...", "1...","0..."];

    countdiv.textContent = count[i];

} 

// start countdown ---------------------------------

let i = 0;

setInterval(function() {

    if (i < 11){    

        countDown(i);
        i++;

    } else {
        
       clearInterval;
       const n = document.querySelector('#countdown');
       n.textContent = '';

    }
    
}, 1000)

// end countdown ------------------------------------

/*                                                  *
* Parallax Starfield by easymac                     *
* https://codepen.io/easymac/pen/bGBBeE             *
*                                                   */

var canvas = document.querySelector("#starfield");
var context = canvas.getContext("2d");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var stars = {};
var adjustmentPoint = [0, 0];

var mousecoords = [];

var DENSITY = 5; // "per square inch" or something maybe
makeStars(DENSITY);

$("#starfield").mousemove(function(evt) {

  mousecoords = [evt.clientX, evt.clientY];
  adjustmentPoint = [(mousecoords[0] - (canvas.width/2))/25, (mousecoords[1] - (canvas.height/2))/25]

});

function makeStars(DENSITY) {

  var totalStars = (Math.floor(canvas.width / 72)) * (Math.floor(canvas.height / 72)) * DENSITY;
  
  var randomX, randomY, randomZ;
  var sortable = [];

  for (var i = 0; i < totalStars; i++) {

    randomX = Math.random() * (canvas.width - 1) + 1;
    randomY = Math.random() * (canvas.height - 1) + 1;
    randomZ = Math.random() * 5;
    stars[i] = [randomX, randomY, randomZ];
    sortable.push(randomZ);

  }

  sortable.sort();
  
  for (var i in stars) {

    stars[i][2] = sortable[i];

  }
}

requestAnimationFrame(drawStars);

function drawStars() {

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#FF0000";

  for (var i in stars) {

    context.fillStyle = blendColors("#FFFFFF", "#000000", 1 - stars[i][2]/10 * 2);
    context.fillRect(stars[i][0], stars[i][1], stars[i][2], stars[i][2]);
  
}

  updateStars();
  requestAnimationFrame(drawStars);

}

function updateStars() {

  for (var i in stars) {

    stars[i][0] += adjustmentPoint[0] * stars[i][2]/10;
    stars[i][1] += adjustmentPoint[1] * stars[i][2]/10;

    if (stars[i][0] >= canvas.width) {

      stars[i][0] = -5;

    }

    if (stars[i][1] >= canvas.height) {

      stars[i][1] = -5;

    }

    if (stars[i][0] < -6) {

      stars[i][0] = canvas.width;

    }

    if (stars[i][1] < -6) {

      stars[i][1] = canvas.height;

    }

  }
}

function blendColors(c0, c1, p) {
    
    var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
    
    return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);

}
// end starfield ------------------------------------