
const btnPlay = document.getElementById("my-btn-play");
btnPlay.addEventListener("click", function(){
    
    const gridContainer = document.querySelector(".my-grid-container");

    // # reset to " " of the innerHtml under the div.my-grid-container
    gridContainer.innerHTML = "";
    
    let selectValue = document.getElementById("my-select").value;
    
    if (selectValue == 1){
        // % without the function
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
        // % without the function
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
        // % without the function
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
 * Function that given an  outsideElement,
 * creates N  <div></div> elements,
 * each <div> element has classNameOne and classNameTwo,
 * inside each <div> is written the number through the variable i,
 * inside element has an eventListener that add a classNameThree to itself
 * 
 * @param {*} outsideElement outside element to which you is added the <div>
 * @param {*} classNameOne first calss name for the insideElement(<div>)
 * @param {*} classNameTwo second class name for the insideElement(<div>)
 * @param {*} classNameThree class added with the eventListener
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
