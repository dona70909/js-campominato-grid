
let selectValue = document.getElementById("my-select").value;

const gridContainer = document.querySelector(".my-grid-container");





if (selectValue == 1){
    for(let i = 0; i < 100; i++){
        let divElement = document.createElement("div");
        gridContainer.appendChild(divElement);
        divElement.classList.add("my-grid-square", "my-grid-square-one");
    }
} else if(selectValue == 2) {
    for(let i = 0; i <81; i++){
        let divElement = document.createElement("div");
        gridContainer.appendChild(divElement);
        divElement.classList.add("my-grid-square", "my-grid-square-two");
    }
} else if (selectValue == 3){
    for(let i = 0; i <49; i++){
        let divElement = document.createElement("div");
        gridContainer.appendChild(divElement);
        divElement.classList.add("my-grid-square", "my-grid-square-three");
    }
} else {
    console.log("scegli");
}