
function change() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ',' + g + ',' + b + ")";
}
var start = document.getElementById('start');
var restart = document.getElementById('restart');
var boxChioce = document.getElementsByClassName('box');
var timer;
function clickchange() {
        for (var m = 0; m < 9; m++) {
            boxChioce[m].style.background = "orange";
        }
    function chioce() {
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
    console.log(chioce());
    
    var f = chioce();
        for (var n = 0; n < 3; n++) {
            boxChioce[f[n]].style.background = change();
        }
}
// console.log(chioce());
start.onclick = function () {
    clearInterval(timer);
    for (var m = 0; m < 9; m++) {
        boxChioce[m].style.background = "orange";
    }
     timer = setInterval("clickchange()", 1000);
    
};
restart.onclick = function () {
    clearInterval(timer);
    for (var m = 0; m < 9; m++) {
        boxChioce[m].style.background = "orange";
    }
};