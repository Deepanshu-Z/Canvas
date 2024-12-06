let h = 16;
function createCanvas(h) {
  const container = document.querySelector(".container");
  container.innerHTML = ""; 
  let i = 0;
  while (i < h * h) {
    let rc = 660 / h;
    const divs = document.createElement("div");
    divs.classList.add("grids");
    divs.style.cssText = `height: ${rc}px; width :${rc}px`;
    container.appendChild(divs);
    i++;
  }
  const grid = document.querySelectorAll(".grids");
  grid.forEach(function (e) {
    e.addEventListener("mouseover", function () {
      e.classList.remove("white");
      e.style.backgroundColor = "black"; 
    });
  });
}
createCanvas(h);

function erase() {
  const grids = document.querySelectorAll(".grids");
  grids.forEach(function (grid) {
    grid.classList.add("white"); // Add the class without the dot prefix
  });
}

function changeSize() {
  let h = prompt("Enter the size of the display from 1 to 64: ");

  h = Number(h);
  if (h >= 1 && h <= 64) {
    createCanvas(h);
  } else {
    alert("Please enter a valid number between 1 and 64.");
    changeSize();
  }
}
