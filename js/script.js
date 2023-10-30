const startBtn = document.getElementById("start");
const difficultyElem = document.getElementById("difficulty");

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
    }else{
        gridSize = 49;
        cellSize = 7;
    }

    const bombs = generateBombs(gridSize);
    console.log(bombs);
    
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
        const clickedNumber = parseInt(this.innerHTML);
        console.log(clickedNumber);
        if (bombs.includes(clickedNumber)){
            this.classList.add("red");
        } else{this.classList.add("blue");}
        
    }
})

