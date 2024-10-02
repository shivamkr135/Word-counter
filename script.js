let txt = document.getElementById('text');

let letter = document.getElementById('letter');

let word = document.getElementById('word');

function countletter(){
    var inputTxt = txt.value;
    var lettercount = 0;
    for(var i=0;i<inputTxt.length;i++){
        if(inputTxt[i] !== ' '){
            lettercount++;
        }
    }
    letter.innerText = lettercount;

    inputTxt = inputTxt.trim();

    var words = inputTxt.split(" ");
    word.innerHTML = words.length;

}

function changebg(color){
   // let blue = document.getElementById('blue');
   txt.style.backgroundColor = color;

}

function changetxt(colors){
    // let blue = document.getElementById('blue');
    txt.style.color = colors;
 
 }


 



