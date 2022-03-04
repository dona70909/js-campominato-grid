
const btnPlay = document.getElementById("my-btn-play");
btnPlay.addEventListener("click", function(){
    
    const gridContainer = document.querySelector(".my-grid-container");
    gridContainer.innerHTML = "";
    
    let selectValue = document.getElementById("my-select").value;
    
    if (selectValue == 1){
        /*for(let i = 0; i < 100; i++){
            let divElement = document.createElement("div");
            gridContainer.appendChild(divElement);
            divElement.classList.add("my-grid-square", "my-grid-square-one");
            divElement.innerHTML = i + 1;
            
            divElement.addEventListener("click", function(){
                divElement.classList.add("background-red"); 
            });  
            
            
            
            
        } */
    

        drawBox(gridContainer,"my-grid-square","my-grid-square-one","background-red",100);
        
        
    } else if(selectValue == 2) {
        /*  for(let i = 0; i <81; i++){
            let divElement = document.createElement("div");
            gridContainer.appendChild(divElement);
            divElement.classList.add("my-grid-square", "my-grid-square-two");
            divElement.innerHTML = i + 1;
            
            divElement.addEventListener("click", function(){
                divElement.classList.add("background-blue"); 
            });
        } */

        drawBox(gridContainer,"my-grid-square","my-grid-square-two","background-blue",81);
        
    } else if (selectValue == 3){
        /*  for(let i = 0; i <49; i++){
            let divElement = document.createElement("div");
            gridContainer.appendChild(divElement);
            divElement.classList.add("my-grid-square", "my-grid-square-three");
            divElement.innerHTML = i + 1;
            
            divElement.addEventListener("click", function(){
                divElement.classList.add("background-green"); 
            });
        } */

        drawBox(gridContainer,"my-grid-square","my-grid-square-three","background-green",49);
        
    } else {
        console.log("scegli");
    }
    
});

/**
 * 
 * Function that given an  Outside element 
 * creates N  <div></div> elements
 * Each <div> element has classNameOne and classNameTwo
 * Inside each <div> is written the number through the variable i
 * Inside element has an eventListener that add a classNameThree to itself
 * 
 * @param {*} outsideElement outside element to which you can add the div
 * @param {*} classNameOne first calss name for the insideElement
 * @param {*} classNameTwo second class name for the insideElement 
 * @param {*} classNameThree class added with the event listener
 * @param {*} N value of how many numbers you want  
 */
function drawBox(outsideElement,classNameOne,classNameTwo,classNameThree,N){
    for (let i = 0; i < N ;i++){
        let insideElement = document.createElement("div");
        outsideElement.appendChild(insideElement);
        insideElement.classList.add(classNameOne,classNameTwo);
        insideElement.innerHTML = i + 1;
        
        insideElement.addEventListener("click", function(){
            insideElement.classList.add(classNameThree); 
        }); 
    }
}
