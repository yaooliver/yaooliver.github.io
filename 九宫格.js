function chioce() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var return_array = new Array();
    for (var i = 0; i < 3; i++) {
        if (arr.length > 0) {
            var Index = Math.floor(Math.random() * arr.length);
            return_array[i] = arr[Index];
            arr.splice(Index, 1);
        } else {
            break;
        }
    }
    return return_array;
}

function change() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ',' + g + ',' + b + ")";
}
var start = document.getElementById('start');
var restart = document.getElementById('restart');
var boxChioce = document.getElementsByClassName('box');

start.onclick = function () {
    timer=setInterval(function () {
        for (var m = 0; m < 9; m++) {
            boxChioce[m].style.background = "orange";
        }
        for (var n = 0; n < 3; n++) {
            boxChioce[chioce()[n] - 1].style.background = change();
        }
    }, 1000);
};
restart.onclick = function () {
    clearInterval(timer);
    for (var m = 0; m < 9; m++) {
        boxChioce[m].style.background = "orange";
    }
};