let gridNumber= parseInt(prompt("How many square would you like in a line? (choose less than 100): "));
while (gridNumber > 100){
    gridNumber= parseInt(prompt("How many square would you like in a line? (choose less than 100): "));
}

const gridSize= 960/gridNumber;
const root= document.querySelector(":root");
root.style.setProperty('--gridNumber', gridNumber);


function createGridItems(count){
    for (let i=0; i< count**2; i++){
        const template =document.createElement("div");
        template.className="gridItem";
        template.id=i;
        template.addEventListener("mouseenter", (e) => 
        {template.style.backgroundColor="blue"});
        document.getElementById("gridContainer").appendChild(template);
    }
    
}

createGridItems(gridNumber)
