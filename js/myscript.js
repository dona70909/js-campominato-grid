
const btnPlay = document.getElementById("my-btn-play");
btnPlay.addEventListener("click", function(){
    
    const gridContainer = document.querySelector(".my-grid-container");
    
    selectValue = document.getElementById("my-select").value;
    
    if (selectValue == 1){
        for(let i = 0; i < 100; i++){
            let divElement = document.createElement("div");
            gridContainer.appendChild(divElement);
            divElement.classList.add("my-grid-square", "my-grid-square-one");
            divElement.innerHTML = i + 1;
            
            divElement.addEventListener("click", function(){
                divElement.classList.add("background-red"); 
            });
        }
        
        
    } else if(selectValue == 2) {
        for(let i = 0; i <81; i++){
            let divElement = document.createElement("div");
            gridContainer.appendChild(divElement);
            divElement.classList.add("my-grid-square", "my-grid-square-two");
            divElement.innerHTML = i + 1;
            
            divElement.addEventListener("click", function(){
                divElement.classList.add("background-blue"); 
            });
        }
        
    } else if (selectValue == 3){
        for(let i = 0; i <49; i++){
            let divElement = document.createElement("div");
            gridContainer.appendChild(divElement);
            divElement.classList.add("my-grid-square", "my-grid-square-three");
            divElement.innerHTML = i + 1;
            
            divElement.addEventListener("click", function(){
                divElement.classList.add("background-green"); 
            });
        }
        
    } else {
        console.log("scegli");
    }
    
});





