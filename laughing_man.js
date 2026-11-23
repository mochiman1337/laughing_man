const firstSquare = document.querySelector("#square");

firstSquare.style.left = "225px";//width/2 - boxwidth/2
firstSquare.style.top = "175px";

firstSquare.addEventListener("click", () => {
    alert("OMG YOU CLICKED ME!");
});