const card = document.querySelector("#card");
const btn = document.querySelector("button");
let numSquare = 16;
let opacity = 0;

btn.addEventListener("click", () => {
    numSquare = parseInt(prompt("Number of squares per side?", 16));
    if (numSquare > 100) {
        alert("Maximum number of squares per side is 100!");
        numSquare = 100;
    } else if (numSquare < 1) {
        alert("Minimum number of squares per side is 1!");
        numSquare = 1;
    }
    card.innerHTML = "";
    setGrid();
});

card.addEventListener("mouseover", (e) => {
    if (e.target.id === "square") {
        e.target.style.backgroundColor = `rgb(${setRandomColor()}, ${setRandomColor()}, ${setRandomColor()})`;
        opacity += 0.01;
        e.target.style.opacity = opacity;
    }
});

setGrid();

function setGrid() {
    let pixelPerSquare = 512 / numSquare;

    for (let i = 0; i < numSquare * numSquare; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.setAttribute("id", "square");
        squareDiv.style.width = `${pixelPerSquare}px`;
        squareDiv.style.height = `${pixelPerSquare}px`;
        
        card.appendChild(squareDiv);
    }
}

function setRandomColor() {
    return Math.floor(Math.random() * 255 * 10) / 10;
}