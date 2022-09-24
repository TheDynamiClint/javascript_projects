
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

var timer = setInterval(function() {

    if (i < 11){    

        countDown(i);
        i++;

    } else {

       const n = document.querySelector('#countdown');

        if (n != null) {
          
            clearInterval(timer);

            n.remove();

            phaseInCalc();

        }

    }
    
}, 700)


// Unhide, make calculator bigger ------------------------

function phaseInCalc () {

  var phasediv = document.querySelector(".hide")

  phasediv.classList.remove('hide');

  setTimeout(function() { increaseSize(); }, 11);

}

function increaseSize () {

  clearInterval();
  clearTimeout();

  var downdiv = document.querySelector(".down")
  
  downdiv.classList.remove('down');

}

// end countdown/ calc enlarge ----------------------

/* ------------------------------------------------ *
* Parallax Starfield by easymac                     *
* https://codepen.io/easymac/pen/bGBBeE             *
*                                                   */

let canvas = document.querySelector("#starfield");
var context = canvas.getContext("2d");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var stars = {};
var adjustmentPoint = [0, 0];

var mousecoords = [];

var DENSITY = 5; // "per square inch" or something maybe
makeStars(DENSITY);

canvas.onmousemove = function (evt) {
    
        mousecoords = [evt.clientX, evt.clientY];
        adjustmentPoint = [(mousecoords[0] - (canvas.width/2))/25, (mousecoords[1] - (canvas.height/2))/25];
      
    };
    
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

// Listen for key hovers and clicks and do stuff ----

function changeColor () {

  function getRandNum () {

    let randNum = Math.floor(Math.random() * 1000);

    return randNum;

  }
  
  let randColor = `rgba(${getRandNum()},${getRandNum()},${getRandNum()}`

  this.style.backgroundColor = `${randColor}, 0.6)`;
  this.style.color = `${randColor}, 1)`;
  this.style.transform = "scale(1.1)";
  this.style.transition = "transform 2s";
  this.style.textShadow = '1px 1px 5px rgb(4, 4, 4), 0px 0px 8px rgb(255, 255, 255)';

}

function changeColorBack () {

  this.style.backgroundColor = 'rgba(251, 248, 248, 0.525)';
  this.style.color = 'rgba(3, 3, 247, 0.8)';
  this.style.transform = "scale(1)";

}

document.querySelectorAll('.keys')
  .forEach( function(el) {

    el.addEventListener('mouseover', changeColor, true);
    el.addEventListener('mouseout', changeColorBack, true);

  })


/* ufo flying animation will go here ------------------------
modified code from: 
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations */


// calculator logic -----------------------------------------

// function to get number input
function numberSelect(e) {
  
  if (input.innerHTML === '0' && output.innerHTML === '0') {

    input.innerHTML = e.innerHTML;

  } else {
    
    input.innerHTML += e.innerHTML;

  }
}

function allClear () {

input.innerHTML = 0;
output.innerHTML = 0;
n1 = 0;
n2 = 0;

}

function mathOperator (e) {
  
  if (input.innerHTML.match(/[0-9]*[\+\-x\/][0-9]*/) &&
      output.innerHTML == '0') {  
   
    equalSelect();
    input.innerHTML = output.innerHTML + e.innerHTML;

  } else if (input.innerHTML.match(/[0-9]*[\+\-x\/][0-9]*/) &&
             parseFloat(output.innerHTML) > 0) {  

    equalSelect();
    input.innerHTML = output.innerHTML + e.innerHTML;

  } else {

    input.innerHTML += e.innerHTML;

  }

}

function decimalSelect (e) {

  let term = input.innerHTML;

  if (term.match(/^(\d+)$|(\d+\.*\d+)([\+\-\/x])(\d+)/)){

    input.innerHTML += ".";

  } else if (term.match(/^(\d+\.+\d+)$|(\d+\.*\d+)([\+\-\/x])(\d+\.+\d*)/)) {

    input.innerHTML;

  } else {

    input.innerHTML += "0.";

  }


}

function percentSelect () {

  let inputString = input.innerHTML;
  let outputString = output.innerHTML;

  if (outputString = '0' && inputString != '0'){

    console.log('passed percent condition');
    let percent = Number.parseFloat(inputString) * .01;
    input.innerHTML = percent.toString();

  } else {

    console.log('didn\'t pass percent condition');
  }


}

function equalSelect () {

  let inputString = input.innerHTML;

  console.log(inputString); //test remove later *****************

  // create a JSON object containing a first number, operator, and operator
  let getResult = inputString => {

    let [,n1, operator, n2] = inputString.match(/(\d+\.*\d*)([\+\-x\/]*?)(\d+\.*\d*)/);

    console.log(n1, n2, operator); //test remove later *****************

    operate (Number.parseFloat(n1), Number.parseFloat(n2), operator);

  }

  getResult(inputString);

} 

function clearSelect () {

  str = input.innerHTML;

  if(str == '' || str.length < 2) {

    input.innerHTML = 0;

  } else {

  input.innerHTML = str.substring(0, str.length - 1);

  }

}

/* Operate function, specified by instructions,
gets two numbers and calls appropriate operation function */

function operate (n1,n2,operator) {

  console.log(n1, n2, operator); //test remove later *****************

  let n = 0;
  let result = 0;

  if (operator === '+') {

    n = add(n1, n2);

  } else if (operator === '-') {

    n = subtract(n1, n2);

  } else if (operator === 'x') {

    n = multiply(n1, n2);

  } else if (operator === '/') {

    n = divide(n1, n2);

  } else {

    console.log('no operator function worked');
    result = 0;

  }

  result = Math.round((n + Number.EPSILON) * 100) / 100;
  output.innerHTML = result;
  console.log(result); //test remove later *****************

}

// Functions to perform operation on numbers

function add (n1, n2) {

  return n1 + n2;

}

function subtract (n1, n2) {

  return n1 - n2;

}

function multiply (n1, n2) {

  return n1 * n2;

}

function divide (n1, n2) {

  return n1 / n2;

}

/* Allow keyboard to be used to manipulate calculator
attach keyboard event */
document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case '0':
      numberSelect(document.querySelector('#zero'));
      break;
    case '1':
      numberSelect(document.querySelector('#one'));
      break;
    case '2':
      numberSelect(document.querySelector('#two'));
      break;
    case '3':
      numberSelect(document.querySelector('#three'));
      break;
    case '4':
      numberSelect(document.querySelector('#four'));
      break;
    case '5':
      numberSelect(document.querySelector('#five'));
      break;
    case '6':
      numberSelect(document.querySelector('#six'));
      break;
    case '7':
      numberSelect(document.querySelector('#seven'));
      break;
    case '8':
      numberSelect(document.querySelector('#eight'));
      break;
    case '9':
      numberSelect(document.querySelector('#nine'));
      break;
    case '+':
      mathOperator(document.querySelector('#plus'));
      break;
    case '-':
      mathOperator(document.querySelector('#minus'));
      break;
    case '*':
      mathOperator(document.querySelector('#multiply'));
      break;
    case '/':
      mathOperator(document.querySelector('#divide'));
      break;
    case '.':
      decimalSelect();
      break;
    case '%':
      percentSelect(document.querySelector('#percent'));
      break;
    case 'Enter':
      // prevent default action
      e.preventDefault();
      equalSelect();
      break;
    case 'Backspace':
      clearSelect();
      break;
    case 'Escape':
      allClear();
      break;
  }
});
