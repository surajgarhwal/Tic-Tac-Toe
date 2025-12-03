let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebtn = document.querySelector(".new-game");
let msg = document.getElementById("msg");
let msgcontainer = document.querySelector(".msg-container");

let currentPlayer = "O";

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const showwinner = (winner) => {
    msg.innerText = `Player ${winner} is the Winner!`;
    msgcontainer.classList.remove("hide");
    boxes.forEach((box) => box.disabled = true);
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val && pos1val === pos2val && pos2val === pos3val) {
            showwinner(pos1val);
            return;
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = currentPlayer;
        box.disabled = true;
        checkwinner();
        currentPlayer = currentPlayer === "O" ? "X" : "O";
    });
});

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgcontainer.classList.add("hide");
    currentPlayer = "O";
};

resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);
