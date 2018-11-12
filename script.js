let mainDiv = document.querySelector(".main");
let tilesArr = [];
let tilesInDiv = 16;
const tiles = document.getElementsByClassName("hide");
let tilesClicked = [];
mainDiv.className = "main";
mainDiv.classList.add("easy");

let moves = 0;

//////////// MENU

const menuBtns = document.querySelectorAll("button");
const menuClick = e => {
  switch (e.target.dataset.menu) {
    case "easy":
      tilesInDiv = 16;
      mainDiv.className = "main";
      mainDiv.classList.add("easy");
      newGame();
      break;
    case "medium":
      tilesInDiv = 36;
      mainDiv.className = "main";
      mainDiv.classList.add("medium");
      newGame();
      break;

    case "hard":
      tilesInDiv = 64;
      mainDiv.className = "main";
      mainDiv.classList.add("hard");
      newGame();
      break;

    case "new":
      newGame();
      break;
  }
};
menuBtns.forEach(e => e.addEventListener("click", menuClick));

const init = () => {
  mainDiv.innerHTML = "";
  generateTilesArr(tilesArr);
  addTilesToDiv();
  [...tiles].forEach(element => {
    element.addEventListener("click", checkTiles);
  });
  [...tiles].forEach(e => {
    setTimeout(() => {
      e.classList.remove("hide");
    }, 100);

    setTimeout(() => {
      e.classList.add("hide");
    }, 1500);
  });
};

const newGame = () => {
  moves = 1;
  tilesArr = [];
  tilesClicked = [];
  init();
};
const generateTilesArr = arr => {
  for (let i = 0; i < tilesInDiv / 2; i++) {
    tilesArr.push(i);
    tilesArr.push(i);
  }
  var j, x, i;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
};

const addTilesToDiv = () => {
  tilesArr.forEach(tileIndex => {
    const tile = document.createElement("div");
    tile.setAttribute("class", `tile tile${tileIndex}`);
    tile.style.backgroundImage = `url(${backgrounds[tileIndex]})`;
    tile.innerHTML = `<div class="hidingTile hide" data-key="${tileIndex}"></div>`;
    mainDiv.appendChild(tile);
  });
};

const changeTileVisible = changing => {
  if (changing == "add") {
    tilesClicked[0].classList.add("hide");
    tilesClicked[1].classList.add("hide");
  } else {
    tilesClicked[0].classList.remove("hide");
    tilesClicked[1].classList.remove("hide");
  }
  tilesClicked = [];
  checkWin();
};

const checkWin = () => {
  if ([...tiles].length === 0) {
    setTimeout(() => {
      alert("wygrana");
    }, 1000);
  }
};

function checkTiles() {
  if (tilesClicked[0] === undefined) {
    tilesClicked[0] = this;
    this.classList.remove("hide");
  } else if (tilesClicked[1] === undefined) {
    this.classList.remove("hide");
    tilesClicked[1] = this;
    document.getElementById("moves").textContent = `Ruchy: ${moves++}`;
  }
  setTimeout(() => {
    if (tilesClicked[0] !== undefined && tilesClicked[1] !== undefined) {
      if (tilesClicked[0].dataset.key !== tilesClicked[1].dataset.key) {
        changeTileVisible("add");
        return;
      } else {
        changeTileVisible("remove");
      }
    }
  }, 1500);
}

const backgrounds = [
  "https://image.flaticon.com/icons/svg/1153/1153011.svg",
  "https://image.flaticon.com/icons/svg/1153/1153009.svg",
  "https://image.flaticon.com/icons/svg/1153/1153031.svg",
  "https://image.flaticon.com/icons/svg/1153/1153036.svg",
  "https://image.flaticon.com/icons/svg/1153/1153035.svg",
  "https://image.flaticon.com/icons/svg/1153/1153022.svg",
  "https://image.flaticon.com/icons/svg/1153/1153017.svg",
  "https://image.flaticon.com/icons/svg/1153/1153015.svg",
  "https://image.flaticon.com/icons/svg/1153/1153052.svg",
  "https://image.flaticon.com/icons/svg/1153/1153042.svg",

  "https://image.flaticon.com/icons/svg/1153/1153025.svg",
  "https://image.flaticon.com/icons/svg/1153/1153051.svg",
  "https://image.flaticon.com/icons/svg/1153/1153033.svg",
  "https://image.flaticon.com/icons/svg/1153/1153012.svg",
  "https://image.flaticon.com/icons/svg/1153/1153013.svg",
  "https://image.flaticon.com/icons/svg/1153/1153039.svg",
  "https://image.flaticon.com/icons/svg/1153/1153019.svg",
  "https://image.flaticon.com/icons/svg/1153/1153020.svg",
  "https://image.flaticon.com/icons/svg/1153/1153014.svg",
  "https://image.flaticon.com/icons/svg/1153/1153016.svg",

  "https://image.flaticon.com/icons/svg/1153/1153057.svg",
  "https://image.flaticon.com/icons/svg/1153/1153027.svg",
  "https://image.flaticon.com/icons/svg/1153/1153055.svg",
  "https://image.flaticon.com/icons/svg/1153/1153023.svg",
  "https://image.flaticon.com/icons/svg/1153/1153010.svg",
  "https://image.flaticon.com/icons/svg/1153/1153043.svg",
  "https://image.flaticon.com/icons/svg/1153/1153046.svg",
  "https://image.flaticon.com/icons/svg/1153/1153045.svg",
  "https://image.flaticon.com/icons/svg/1153/1153041.svg",
  "https://image.flaticon.com/icons/svg/1153/1153024.svg",

  "https://image.flaticon.com/icons/svg/1153/1153040.svg",
  "https://image.flaticon.com/icons/svg/1153/1153047.svg"
];
