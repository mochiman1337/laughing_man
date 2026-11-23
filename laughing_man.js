const SQUARE_COUNT = 3;

//First Square
const firstSquare = document.querySelector("#square");

firstSquare.style.left = "225px";//width/2 - boxwidth/2
firstSquare.style.top = "175px";

firstSquare.addEventListener("click", () => {
    alert("OMG YOU CLICKED ME!");
});

//All other Squares
let box = document.querySelector("#box");
for (let i = 0; i < SQUARE_COUNT; i++) {
    let square = document.createElement("img");
    square.src = "laughing_man.jpg";
    square.alt = "Catch the laughing man";
    square.className = "square";
    square.style.left = "225px";
    square.style.top = "175px";
    box.appendChild(square);
}