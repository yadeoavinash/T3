let currentPlayer = "X";
let arr = Array(9).fill(null);
let a = 0
let newArr = []
let gameOver = false
let Xscore = 0
let Yscore = 0
let turn = "X"
// let click = document.getElementById("audioo");
let winner = new Audio("/sound/winner.mp3")

function score() {

  setInterval(() => {
    Xscore = window.localStorage.getItem("Xscore")
    Yscore = window.localStorage.getItem("Yscore")
    
    document.getElementById("X").innerText = Xscore
    document.getElementById("Y").innerText = Yscore
  }, 100)
  
}

function handle(el) {


  // if(currentPlayer === "X"){

  //   window.localStorage.setItem("turn","X")
  // }else if(currentPlayer === "O"){
  //   window.localStorage.setItem("turn","O")

  // }

  let green = "green"
  let red = "red"
  let bg = "black"
  let random = Math.floor(Math.random() * 6)
  if (random === 6) {
    random = -1
  }
  const id = Number(el.id);
  if (arr[id] === null) {
    el.classList.add("useCol");
  }
  if (arr[id] !== null) {
    return;
  }
  if (currentPlayer === "X") {
    document.getElementById(`${id}`).style.color = "red";

  } else if ((currentPlayer === "O")) {
    document.getElementById(`${id}`).style.color = "green";
  }
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  const result = document.getElementsByClassName("resultt");

  if
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) {
    if (currentPlayer === "X") {

      document.getElementById("0").style.backgroundColor = "red";
      document.getElementById("1").style.backgroundColor = "red";
      document.getElementById("2").style.backgroundColor = "red";
      document.getElementById("0").style.color = bg;
      document.getElementById("1").style.color = bg;
      document.getElementById("2").style.color = bg;
    }
    else if (currentPlayer === "O") {

      document.getElementById("0").style.backgroundColor = "green";
      document.getElementById("1").style.backgroundColor = "green";
      document.getElementById("2").style.backgroundColor = "green";
      document.getElementById("0").style.color = bg;
      document.getElementById("1").style.color = bg;
      document.getElementById("2").style.color = bg;
    }

  }
  else if
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) {
    if (currentPlayer === "X") {
      document.getElementById(`3`).style.backgroundColor = "red";
      document.getElementById(`4`).style.backgroundColor = "red";
      document.getElementById(`5`).style.backgroundColor = "red";
      document.getElementById(`3`).style.color = bg;
      document.getElementById(`4`).style.color = bg;
      document.getElementById(`5`).style.color = bg;

    }
    else if (currentPlayer === "O") {
      document.getElementById(`3`).style.backgroundColor = "green";
      document.getElementById(`4`).style.backgroundColor = "green";
      document.getElementById(`5`).style.backgroundColor = "green";
      document.getElementById(`3`).style.color = bg;
      document.getElementById(`4`).style.color = bg;
      document.getElementById(`5`).style.color = bg;

    }
  }

  else if (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) {
    if (currentPlayer === "X") {
      document.getElementById(`6`).style.backgroundColor = "red";
      document.getElementById(`7`).style.backgroundColor = "red";
      document.getElementById(`8`).style.backgroundColor = "red";
      document.getElementById(`6`).style.color = bg;
      document.getElementById(`7`).style.color = bg;
      document.getElementById(`8`).style.color = bg;

    }
    else if (currentPlayer === "O") {
      document.getElementById(`6`).style.backgroundColor = "green";
      document.getElementById(`7`).style.backgroundColor = "green";
      document.getElementById(`8`).style.backgroundColor = "green";
      document.getElementById(`6`).style.color = bg;
      document.getElementById(`7`).style.color = bg;
      document.getElementById(`8`).style.color = bg;

    }
  }


  else if (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) {
    if (currentPlayer === "X") {
      document.getElementById(`0`).style.backgroundColor = "red";
      document.getElementById(`3`).style.backgroundColor = "red";
      document.getElementById(`6`).style.backgroundColor = "red";
      document.getElementById(`0`).style.color = bg;
      document.getElementById(`3`).style.color = bg;
      document.getElementById(`6`).style.color = bg;

    }
    else if (currentPlayer === "O") {
      document.getElementById(`0`).style.backgroundColor = "green";
      document.getElementById(`3`).style.backgroundColor = "green";
      document.getElementById(`6`).style.backgroundColor = "green";
      document.getElementById(`0`).style.color = bg;
      document.getElementById(`3`).style.color = bg;
      document.getElementById(`6`).style.color = bg;

    }
  }


  else if (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) {
    if (currentPlayer === "X") {
      document.getElementById(`1`).style.backgroundColor = "red";
      document.getElementById(`4`).style.backgroundColor = "red";
      document.getElementById(`7`).style.backgroundColor = "red";
      document.getElementById(`1`).style.color = bg;
      document.getElementById(`4`).style.color = bg;
      document.getElementById(`7`).style.color = bg;

    }
    else if (currentPlayer === "O") {
      document.getElementById(`1`).style.backgroundColor = "green";
      document.getElementById(`4`).style.backgroundColor = "green";
      document.getElementById(`7`).style.backgroundColor = "green";
      document.getElementById(`1`).style.color = bg;
      document.getElementById(`4`).style.color = bg;
      document.getElementById(`7`).style.color = bg;

    }
  }


  else if (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) {
    if (currentPlayer === "X") {
      document.getElementById(`2`).style.backgroundColor = "red";
      document.getElementById(`5`).style.backgroundColor = "red";
      document.getElementById(`8`).style.backgroundColor = "red";
      document.getElementById(`2`).style.color = bg;
      document.getElementById(`5`).style.color = bg;
      document.getElementById(`8`).style.color = bg;

    }
    else if (currentPlayer === "O") {
      document.getElementById(`2`).style.backgroundColor = "green";
      document.getElementById(`5`).style.backgroundColor = "green";
      document.getElementById(`8`).style.backgroundColor = "green";
      document.getElementById(`2`).style.color = bg;
      document.getElementById(`5`).style.color = bg;
      document.getElementById(`8`).style.color = bg;

    }
  }


  else if (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) {
    if (currentPlayer === "X") {
      document.getElementById(`0`).style.backgroundColor = "red";
      document.getElementById(`4`).style.backgroundColor = "red";
      document.getElementById(`8`).style.backgroundColor = "red";
      document.getElementById(`0`).style.color = bg;
      document.getElementById(`4`).style.color = bg;
      document.getElementById(`8`).style.color = bg;

    }
    else if (currentPlayer === "O") {
      document.getElementById(`0`).style.backgroundColor = "green";
      document.getElementById(`4`).style.backgroundColor = "green";
      document.getElementById(`8`).style.backgroundColor = "green";
      document.getElementById(`0`).style.color = bg;
      document.getElementById(`4`).style.color = bg;
      document.getElementById(`8`).style.color = bg;

    }
  }


  else if (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]) {
    if (currentPlayer === "X") {
      document.getElementById(`2`).style.backgroundColor = "red";
      document.getElementById(`4`).style.backgroundColor = "red";
      document.getElementById(`6`).style.backgroundColor = "red";
      document.getElementById(`2`).style.color = bg;
      document.getElementById(`4`).style.color = bg;
      document.getElementById(`6`).style.color = bg;

    }
    else if (currentPlayer === "O") {
      document.getElementById(`2`).style.backgroundColor = " green";
      document.getElementById(`4`).style.backgroundColor = "green";
      document.getElementById(`6`).style.backgroundColor = "green";
      document.getElementById(`2`).style.color = bg;
      document.getElementById(`4`).style.color = bg;
      document.getElementById(`6`).style.color = bg;

    }
  }

  if (a <= 6 && gameOver === false) {

    newArr.push(Number(el.id))
  }
  if (a > 6 && gameOver === false) {
    document.getElementById(newArr[0]).innerText = null
    arr[newArr[0]] = null
    newArr[0] = newArr[1]
    newArr[1] = newArr[2]
    newArr[2] = newArr[3]
    newArr[3] = newArr[4]
    newArr[4] = newArr[5]
    newArr[5] = newArr[6]
    newArr[6] = Number(el.id)

    console.log("yed", newArr, random, arr)
  }
  a++

  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    score()
    winner.play()
    gameOver = true
    console.log(arr[id])


    if (currentPlayer === "X") {
      window.localStorage.setItem("turn", "X")
      Xscore++
      document.getElementById("won").innerText = `X : is Winner`;
      window.localStorage.setItem("Xscore", Xscore)
      currentPlayer = "";

    } else if (currentPlayer === "O") {
      window.localStorage.setItem("turn", "O")
      Yscore++
      document.getElementById("won").innerText = `O : is Winner`;
      window.localStorage.setItem("Yscore", Yscore)
      currentPlayer = "";


    }
    return;
  }
  if (!arr.some((e) => e === null)) {
    document.getElementById("won").innerText = `Match Draw!!`;
  }

  document.getElementById("tuen").innerText = currentPlayer === "X" ? "O" : "X"

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  console.log(a, newArr);

  window.localStorage.setItem("Time", new Date().toLocaleString())
  console.log("hello")
}

window.onload = function () {
  Xscore = window.localStorage.getItem("Xscore") ?? 0
  Yscore = window.localStorage.getItem("Yscore") ?? 0
  let x = document.getElementById("X").innerText = Xscore
  let y = document.getElementById("Y").innerText = Yscore
  currentPlayer = window.localStorage.getItem("turn") ?? "X"
  document.getElementById("tuen").innerText = window.localStorage.getItem("turn")
}

function reload() {
  location.reload();
  handle(0)
}

function reset() {

  window.localStorage.setItem("Xscore", 0)
  window.localStorage.setItem("Yscore", 0)
  document.getElementById("X").innerText = Xscore
  document.getElementById("Y").innerText = Yscore
  score()
}

