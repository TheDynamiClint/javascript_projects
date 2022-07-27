let n = 16;
let gridSquares;
let lineColor = '#050505';
let rainbow = false;

function column () {

    for (let i = 0; i < n; i++) {

        let div = document.createElement("div");
        let col = (i).toString();
        let colNum = 'column' + col;
        let container = document.querySelector("#sub_container");

        colDiv = container.appendChild(div);
        colDiv.classList.add('column');
        colDiv.id = colNum;

        square(colNum);
    }

}    

function square (colNum) {   

    for (let i = 0; i < n; i++) {
        
        let id = colNum;
        let colById = document.querySelector('#'+id);
        let square = document.createElement("div");
        
        colById.appendChild(square);
        square.classList.add('square');

    }

    gridSquares = document.querySelectorAll('.square');
    addEventListenerList(gridSquares, 'mouseover', switchBgColor);

}

function clearGrid () {

    container = document.getElementById('sub_container');
    container.classList.add('shake');

    setTimeout(function(){
        container.classList.remove('shake');
    }, 3000);

    for (var i = 0, len = gridSquares.length; i < len; i++) {

        gridSquares[i].style.backgroundColor = "white";

    }

}

function switchBgColor () {

    if (rainbow === true){

        this.style.backgroundColor = rainbowlizeColor();

    } else {

        this.style.backgroundColor = lineColor;

    }

}

function addEventListenerList(list, event, fn) {

    for (var i = 0, len = list.length; i < len; i++) {

        list[i].addEventListener(event, fn, false);

    }

}

function changeGridSize () {

    n = document.getElementById('tb-size').value;
    const node = document.getElementById('sub_container');

    while (node.firstChild) {

        node.replaceChildren();

    }

    column();
}

function setColor () {

    clearGrid();
    rainbow = false;
    lineColor = colorBox.value;

}

function rainbowlizeColor () {
 
    let colr = ["rgba(255, 0, 0, 1)",
    "rgba(255, 154, 0, 1)",
    "rgba(208, 222, 33, 1)",
    "rgba(79, 220, 74, 1)",
    "rgba(63, 218, 216, 1)",
    "rgba(47, 201, 226, 1)",
    "rgba(28, 127, 238, 1)",
    "rgba(95, 21, 242, 1)",
    "rgba(186, 12, 248, 1)",
    "rgba(251, 7, 217, 1)",
    "rgba(255, 0, 0, 1)"]

    let num = Math.floor(Math.random() * colr.length);
    let color = colr[num];

    return color;

}

function setRainbow () {

    clearGrid();
    rainbow = true;

}

column();

let shakeBtn = document.getElementById('shake-btn');
shakeBtn.addEventListener('click', clearGrid);

let sizeBox = document.getElementById('tb-size');
sizeBox.value = 16;
sizeBox.addEventListener('change', changeGridSize);

let colorBox = document.getElementById('color-picker');
colorBox.addEventListener('change', setColor);

let rainbowBtn = document.getElementById('rainbow');
rainbowBtn.addEventListener('click', setRainbow);