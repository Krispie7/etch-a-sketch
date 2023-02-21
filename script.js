const gridNumber= parseInt(prompt("How many square would you like in a line?: "));
const gridSize= 960/gridNumber;
const root= document.querySelector(":root");
root.style.setProperty('--gridNumber', gridNumber);


function createGridItems(count){
    for (let i=0; i< count**2; i++){
        const template =document.createElement("div");
        template.className="gridItem";
        document.getElementById("gridContainer").appendChild(template)

    }
}

createGridItems(gridNumber)
