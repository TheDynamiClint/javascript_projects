
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

