var clock = 0;
var curPos = 0;
var mouseOn = false;

var Images = document.getElementById('slides');
var Points = document.querySelectorAll('.point')
var Arrows = document.querySelectorAll('.arrow');

//move image automatically
function moveImage() {

    // mouse not on, slide image automatically
    if (mouseOn == false) {

        curPos = curPos - 2;
        clock++;
        if (curPos == -2400)
            curPos = 0;
        Images.style.left = curPos + "px";

        if (curPos <= -2400) activePoint(0);
        else if (curPos <= -1600) activePoint(2);
        else if (curPos <= -800) activePoint(1);
        else if (curPos <= 0) activePoint(0);
    }

    // clock: 1 clock=1 ms
    // move speed: 2px / 1ms
    // image width: 800px
    // image move speed: 400 ms / 1 image, i.e., 400 clock will switch 1 image
    if (clock < 400)
        setTimeout("moveImage()", 1); //do next move
    else if (clock == 400) {
        clock = 0;
        setTimeout("moveImage()", 2000); //wait 2000ms untill next image
    }
}


function activePoint(i) {
    for (j = 0; j < 3; j++) {
        if (i == j) Points[j].classList.add("active");
        else Points[j].classList.remove("active");
    }
}

function activeArrow(i) {
    if (i == 0) {
        mouseOn = true;
        Arrows[0].style.display = "block";
        Arrows[1].style.display = "block";
    } else {
        mouseOn = false;
        Arrows[0].style.display = "none";
        Arrows[1].style.display = "none";
    }
}


function clickPoint(i) {
    if (i == 0) curPos = 0;
    else if (i == 1) curPos = -800;
    else curPos = -1600;

    clock = 0;
    Images.style.left = curPos + "px";
    activePoint(i);
}

function clickArrow(i) {
    if (i == 0) {
        if (curPos <= -2400) curPos = -1600;
        else if (curPos <= -1600) curPos = -800;
        else if (curPos <= -800) curPos = 0;
        else curPos = -1600;
    } else {
        if (curPos <= -2400) curPos = -800;
        else if (curPos <= -1600) curPos = 0;
        else if (curPos <= -800) curPos = -1600;
        else curPos = -800;
    }
    clock = 0;
    Images.style.left = curPos + "px";
    if (curPos <= -2400) activePoint(0);
    else if (curPos <= -1600) activePoint(2);
    else if (curPos <= -800) activePoint(1);
    else if (curPos <= 0) activePoint(0);
}