let currentPlayer = "X";
let arr = Array(9).fill(null);
let gameOver = false;
function checkWinner(){
    if(
        (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) || 
        (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) || 
        (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
    )
   {
        document.getElementById("result").innerText = `Winner is ${currentPlayer}!!🥳🎉`;
        gameOver = true;
        return;
    }
    if (!arr.includes(null)) 
        {
        document.getElementById("result").innerText = "Draw!";
        gameOver = true;
    }

}
function handleClick(el){
    const id =Number(el.id);
    if(arr[id] != null || gameOver) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    
    if (currentPlayer === "X") {
        el.classList.add("x-color");
    } else {
        el.classList.add("o-color");
    }
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetGame() {
    arr = Array(9).fill(null);
    currentPlayer = "X";
    gameOver = false;
    document.getElementById("result").innerText = "";

    const cells = document.getElementsByClassName("col");
    for (let cell of cells) {
        cell.innerText = "";
    }
}