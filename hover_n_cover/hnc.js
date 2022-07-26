let n = 100;

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

}

function switchBgColor () {

    this.classList.add('fill-in-black');

}

function addEventListenerList(list, event, fn) {

    for (var i = 0, len = list.length; i < len; i++) {

        list[i].addEventListener(event, fn, false);

    }

}

column();

let gridSquares = document.querySelectorAll('.square');
addEventListenerList(gridSquares, 'mouseover', switchBgColor); 