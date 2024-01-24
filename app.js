let boxes = document.getElementsByClassName("btn");
let msgContainer = document.querySelector(".msg-container"); // Use querySelector for a single element
let msg = document.getElementById("msg");
let newGameBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");

const arr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let turnO = true;

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};


for (const btn of boxes) {
  btn.addEventListener("click", () => {
    if (turnO === true) {
      btn.innerHTML = "O";
      turnO = false;
    } else {
      btn.innerHTML = "X";
      turnO = true;
    }
    btn.disabled = true;
    checkwinner();
  });
}


const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};


const showWinner = (winner) => {
  msg.innerText = `Congrulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");

}


const checkwinner = () => {
  for (let x of arr) {
    let pos1 = boxes[x[0]].innerHTML;
    let pos2 = boxes[x[1]].innerHTML;
    let pos3 = boxes[x[2]].innerHTML;
    if (pos1 != "" && pos2 != "" && pos2 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("Winner", pos1);
        showWinner(pos1);
        return true;
      }
    }

  }
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
