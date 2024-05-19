// selecting elements and declaring variables
const Box1 = document.getElementById("Box1");
const Box2 = document.getElementById("Box2");
const Box3 = document.getElementById("Box3");
const Box4 = document.getElementById("Box4");
const Box5 = document.getElementById("Box5");
const Box6 = document.getElementById("Box6");
const Box7 = document.getElementById("Box7");
const Box8 = document.getElementById("Box8");
const Box9 = document.getElementById("Box9");
const Box10 = document.getElementById("Box10");
const Box11 = document.getElementById("Box11");
const Box12 = document.getElementById("Box12");
const Box13 = document.getElementById("Box13");
const Box14 = document.getElementById("Box14");
const Box15 = document.getElementById("Box15");
const Box16 = document.getElementById("Box16");
const Box17 = document.getElementById("Box17");
const Box18 = document.getElementById("Box18");
const Box19 = document.getElementById("Box19");
const Box20 = document.getElementById("Box20");
const Box21 = document.getElementById("Box21");
const Box22 = document.getElementById("Box22");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
let playersBox = 0;
let boxCount = 0;
const boxes = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0,
  21: 0,
  22: 0,
};
const prizeValue = [
  0.01, 0.1, 0.5, 1, 5, 10, 50, 100, 250, 500, 750, 1000, 3000, 5000, 10000,
  15000, 20000, 30000, 50000, 75000, 100000, 250000,
];

function shuffleArray(array) {
  //shuffles box values for a new game
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  for (let i = 0; i < prizeValue.length; i++) {
    boxes[i + 1] = prizeValue[i];
  }
}
shuffleArray(prizeValue);
console.log(boxes);

function pickBox(boxNumber) {
  //selects the players box if they havent already, then starts eliminating boxes.
  let temp = Number(boxNumber.id.slice(3));
  let seletedBox = boxes[temp];
  boxCount++;
  function hideBox(boxNumberid) {
    // hides the box element from the selection screen when a box is chosen.
    document.getElementById(boxNumber.id).style.visibility = "hidden";
  }
  if (playersBox == 0) {
    //selects the players box at the start of the game
    playersBox = temp;
    hideBox();
    document.getElementById(
      "modalText"
    ).textContent = `You have selected box ${playersBox}, the value will be hidden until the end of the game`;
    console.log(playersBox);
  } else if (boxCount < 22) {
    //eliminates boxes as long as there is more than 1 left
    document.getElementById(boxes[temp]).style.visibility = "hidden";
    hideBox();
    document.getElementById(
      "modalText"
    ).textContent = `you have selected box ${temp}, it contained $${boxes[temp]} `;
    console.log(boxes[temp]);
  } else {
    //once on the final box, it will give you the option to stick with your original chosen box or swap to the last remaining one.
    document.getElementById(
      "modalText"
    ).textContent = `you have selected box ${temp}, the value could be ${
      boxes[playersBox] < seletedBox ? boxes[playersBox] : seletedBox
    } or ${
      boxes[playersBox] > seletedBox ? boxes[playersBox] : seletedBox
    } would you like to stick or swap? `;
    document.querySelector(".stick").style.display = "block";
    document.querySelector(".swap").style.display = "block";
  }
  document.querySelector(".stick").onclick = function () {
    document.getElementById(
      "modalText"
    ).textContent = `you have selected box ${playersBox}, congratulations you win $${boxes[playersBox]}`;
    document.querySelector(".stick").style.display = "none";
    document.querySelector(".swap").style.display = "none";
    document.getElementById(boxes[temp]).style.visibility = "hidden";
    hideBox();
  };
  document.querySelector(".swap").onclick = function () {
    document.getElementById(
      "modalText"
    ).textContent = `you have selected box ${temp}, congratulations you win $${boxes[temp]}`;
    document.querySelector(".stick").style.display = "none";
    document.querySelector(".swap").style.display = "none";
    document.getElementById(boxes[playersBox]).style.visibility = "hidden";
    hideBox();
  };
  modal.style.display = "block";
  console.log(boxCount);
}

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
