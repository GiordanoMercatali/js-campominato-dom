const startBtn = document.getElementById("start");
const difficultyElem = document.getElementById("difficulty");
const resultElem = document.getElementById("result");

let gameOver = false;
let score = 0;

startBtn.addEventListener("click", function(){

    startBtn.classList.add("disappear");
    difficultyElem.classList.add("disappear");

    const numberArray = [];

    const gridElem = document.querySelector(".grid");

    const difficulty = difficultyElem.value;
    
    let gridSize;

    if (difficulty === "easy"){
        gridSize = 100;
        cellSize = 10;
    } else if (difficulty === "medium"){
        gridSize = 81;
        cellSize = 9;
    } else{
        gridSize = 49;
        cellSize = 7;
    }

    const bombs = generateBombs(gridSize);
    console.log(bombs);

    const maxClicks = gridSize - bombs.length;
    console.log(maxClicks);

    let remainingClicks = maxClicks;
    console.log(remainingClicks);
    
    for (let i = 0; i < gridSize; i++){
        numberArray[i] = i + 1;
        curNumber = numberArray[i];
        const cell = generateGridCell(curNumber, cellSize);
        cell.addEventListener("click", handleCellClick);
        gridElem.append(cell);
    }

    function generateGridCell(innerNumber, cellSizeMultiplier){
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.style.width = `calc(100% / ${cellSizeMultiplier})`;
        newCell.style.height = `calc(100% / ${cellSizeMultiplier})`;
        newCell.innerHTML = innerNumber;
        return newCell;
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    function generateBombs(max){
        const result = [];
        while (result.length < 16){
            const rndNum = getRandomNumber(1, max);
            if(!result.includes(rndNum)){
                result.push(rndNum);
            }
        } console.log(result);
        return result;
    }

    function handleCellClick() {
        if (remainingClicks > 0 && gameOver === false){
            const clickedNumber = parseInt(this.innerHTML);
            console.log(clickedNumber);
            if (bombs.includes(clickedNumber)){
                this.classList.add("red");
                // window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
                resultElem.innerHTML = `You lose. Your score: ${score}`;
                gameOver = true;
            } else {
                this.classList.add("blue");
                remainingClicks -= 1;
                score += 1;
                this.removeEventListener("click", handleCellClick);
                console.log("Remaining clicks:" + remainingClicks);
            }
        } else if (remainingClicks === 0) {
            resultElem.innerHTML = `You win. Your score: ${score}`;
            gameOver = true;
        }
        return score;
    }
})

