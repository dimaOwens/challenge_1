

//Creating grid done
var grid = []
var row = [];
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
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            grid[i][j] = 0;
        }
    }
}
//

//taking the player move
var setVal = function (r, c) {
    var id = r + '' + c
    grid[r][c] = document.getElementById(id).value;
    c_g(r, c)
}
//

//tic-tac-checking
var c_g = function (r, c) {
    var item = grid[r][c]
    //check row, col, main-diag, sec-diag  
    if (c_c(c, item) || c_r(r, item) || c_s_d(item) || c_m_d(item)) {
        console.log(grid[r][c], " WINS");
    }
    //return false

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