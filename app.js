
var n_a = document.getElementById("show1"); //notes area=
var n_a2 = document.getElementById("show2");

//Creating grid done
var grid = []
var row = [];
var winner = "";
var f = 0; //flag
for (var i = 0; i < 3; i++) {
    row = [];
    for (var j = 0; j < 3; j++) {
        row.push(0)
    }
    grid.push(row)
}
//

//RESET DONE
var r_b = document.getElementById('reset') //reset_button
r_b.onclick = function () {
    var id;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            grid[i][j] = 0;
            id = i + '' + j
            document.getElementById(id).value = ''
        }
    }
    n_a.innerHTML = '';
    n_a2.innerHTML = '';
}
//

//taking move and check
var setVal = function (r, c) {

    var id = r + '' + c
    grid[r][c] = document.getElementById(id).value;
    var item = grid[r][c]
    //check row, col, main-diag, sec-diag  
    if (c_c(c, item) || c_r(r, item) || c_s_d(item) || c_m_d(item)) {
        winner = item;
        n_a.innerHTML = "CONGRATULATION PLAYER >> " + winner.toUpperCase() + "  << YOU WON!!"
        n_a2.innerHTML = "NOTE: Winner (" + winner.toUpperCase() + ") start the next round";
    }
}


var c_m_d = function (item) {
    for (var i = 0; i < 3; i++) {
        if (grid[i][i] !== item) {
            return false;
        }
    }
    return true;
}

var c_s_d = function (item) {
    for (var i = 0; i < 3; i++) {
        if (grid[i][2 - i] !== item) {
            return false;
        }
    }
    return true;
}
var c_r = function (r, item) {
    for (var i = 0; i < 3; i++) {
        if (grid[r][i] !== item) {
            return false;
        }
    }
    return true;
}

var c_c = function (c, item) {
    for (var i = 0; i < 3; i++) {
        if (grid[i][c] !== item) {
            return false;
        }
    }
    return true;
}