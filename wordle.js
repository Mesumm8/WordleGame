
var height = 6; //no of guesses
var width = 5; //length of the word

var row = 0; //current guess / attempt #
var col = 0; //current letter for attempt

var gameOver = false;
var word = "SQUID";

window.onload = function() {
    initialize();
}

function initialize() {
    //create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // creating span with an id and class
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerHTML = "";
            document.getElementById("board").appendChild(tile);
        }
    }
    
    // Listen for key Press
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;

        if ("KeyA" <= e.code && e.code <= "KeyX") {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
        } else if (e.code == "Backspace") {
            if (0 < col && col <= width) {
                col -= 1;
            }
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            currTile.innerText = "";
        
        }  else if (e.code == "Enter") {
            if (col === width) {
                update();
                row += 1; // move to new row
                col = 0;  // reset column index for new row
            }
        }

        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }
    })
}

function update() {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //is it in correct position
        if (word[c] == letter) {
            currTile.classList.add("correct");
            correct += 1;
        } //is it in the word
        else if (word.includes(letter)) {
            currTile.classList.add("present");
        }
        else {
            currTile.classList.add("absent");
        }

        if (correct == width) {
            gameOver = true;
        }
        
    }
}