let board = document.getElementById("board");
let grids = document.getElementsByClassName("grid-div");
let player1;
let player2;
let index = 1;

function mark(e){

  if (index % 2 !== 0) {
    let x = document.createElement("h3");
    x.id = "x"
    x.innerHTML = "x";
    e.target.appendChild(x);
    e.target.removeEventListener("click", mark);
    index++;
  } else {
    let o = document.createElement("h3");
    o.id = "o"
    o.innerHTML = "o";
    e.target.appendChild(o);
    e.target.removeEventListener("click", mark);
    index++;
  }
}

for (var i = 0; i < grids.length; i++) {
  let individualGrid = grids[i];
  individualGrid.value = i +1;
  individualGrid.addEventListener("click", mark);
  console.log(individualGrid.value);
}
