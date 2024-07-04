let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let restart = document.querySelector("#restart-btn");
let reset = document.querySelector("#reset-btn");

let turnX = true; // turnX, turnO
let count = 0;

// array of wininning patterns
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// looping through
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX === true) {
      box.innerText = "X";
      box.classList.add("x");
      turnX = false;
    } else {
      box.innerText = "O";
      box.classList.add("o");
      turnX = true;
    }
    box.disabled = true;
    count++;

    let winner = checkWinner();

    // condition for draw
    if (count === 9 && !winner) {
      drawGame();
    }
  });
});

// reaetGame func
const reaetGame = () => {
  container.classList.add("hide");
  enableBxoes();
  turnX = true;
  count = 0;
};

// enableBxoes func
const enableBxoes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// disableBoxes func
const disableBxoes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

// drawGame function
const drawGame = () => {
  container.classList.remove("hide");
  msg.innerText = `This game was draw, try again.`;
  disableBxoes();
};

// showWinner function
const showWinner = (winner) => {
  container.classList.remove("hide");
  msg.innerText = `Congratulations, winner is '${winner}'.`;
  disableBxoes();
};

// checkWInner func
const checkWinner = () => {
  for (const pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

// eventListener for reset & restart btn
reset.addEventListener("click", reaetGame);
restart.addEventListener("click", reaetGame);
