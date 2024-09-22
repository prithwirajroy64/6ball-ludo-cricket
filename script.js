let score = 0;
let initialScore = document.getElementById("score");
initialScore.innerHTML = score;
let target = Math.round(Math.random() * 13) + 14;

// ////////// Target generating /////////

function targetGenerate() {
  let targetRun = document.getElementById("target");
  targetRun.innerText = target;
}
targetGenerate();

// /////// playBtn functionality ////////

let playCount = 0;

const playBtn = document.getElementById("playBtn");
playBtn.innerHTML = `<p>play</p>`;

playBtn.addEventListener("click", () => {
  if (score <= target) {
    if (playCount < 5) {
      playCount++;
    } else {
      playBtn.setAttribute("disabled", "");
    }
  } else {
    playBtn.setAttribute("disabled", "");
  }
});

// /////// run generating /////////

function run() {
  let run = Math.floor(Math.random() * 6) + 1;
  return run;
}

// ///// create ball after generating run ////////

function createBall() {
  let ball = document.createElement("div");
  ball.classList.add("ball");

  let cRun = run();

  score += cRun;
  initialScore.innerHTML = score;

  resultFunc(cRun);

  ball.innerHTML = `<p>${cRun}</p>`;

  let ballsRun = document.querySelector(".ballsRun");
  ballsRun.appendChild(ball);
  return ball;
}

// ////////// results //////////

function resultFunc(val) {
  let result = document.querySelector(".resultDiv");
  if (score > target) {
    result.innerHTML = `<p>You Won 🎉</p>`;
  } else if (playCount > 4 && score < target) {
    result.innerHTML = `<p>You loose ☹️</p>`;
  } else if (playCount > 4 && score == target) {
    result.innerHTML = `<p>Match Tie 🫡</p>`;
  } else {
    result.innerHTML = `<img src="./images/${val}.png" alt="">`;
  }
  // result.innerHTML = "";
}

// ///////////// play again button ///////////

function playAgain() {
  score = 0;
  playCount = 0;
  target = Math.round(Math.random() * 13) + 14;
  targetGenerate();
  let ballsRun = document.querySelector(".ballsRun");
  ballsRun.innerHTML = "";
  initialScore.innerHTML = score;
  let result = document.querySelector(".resultDiv");
  result.innerHTML = "";
  playBtn.toggleAttribute("disabled", "");
}

let playAgainBtn = document.getElementById("playAgain");
playAgainBtn.addEventListener("click", playAgain);
