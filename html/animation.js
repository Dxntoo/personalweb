var t = setInterval(move, 10);

//start position
var pos = 0;
//box element
var box = document.getElementById('box');

//moving the box element

function move() {
    if(pos >= 150){
        clearInterval(t)
    }
    else{
        pos += 1;
        box.style.left = pos + 'px';
    }
    
}