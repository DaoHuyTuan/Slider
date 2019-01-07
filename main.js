
//change value slider width id you want  

/* - Count how many Element in slider
** - And get width of item **
*/


//preBtn.disabled = true;


let DOM = new Object();
//var distantSlide = "translate("+ (currentPosition) + "px)";
//slider.style.transform = distantSlide;

const init = function zyye(options) {
    catchDOM(options);
}
const catchDOM = function variable(options) {
    const widthI =  parseInt(document.querySelector(".item").offsetWidth);
    const numI = parseInt(slider.querySelectorAll(".item").length)
    DOM = {
        main:document.getElementById("main"),
        slider : document.getElementById(options.slider),
        widthItem : widthI,
        numItem :numI ,
        currentPosition : 0,
        widthSlider : widthI * numI,
    }
    createClone(DOM);
    createArrow(options);
   

}

const addEventsListener = function addEventsListener() {
    DOM.nextBtn.addEventListener("click",nextSlider);
    DOM.preBtn.addEventListener("click",backSlider);
}
function nextSlider(){
    DOM.currentPosition -= DOM.widthItem;
    checkPosition(DOM.currentPosition);
}

function backSlider(){
    DOM.currentPosition += DOM.widthItem;
    // console.log("click back " + parseInt(DOM.currentPosition));
    checkPosition(DOM.currentPosition); 
}

//translate
function checkPosition(newValue) {
    distantSlide = "translate("+ (DOM.currentPosition) + "px)";
    DOM.slider.style.transform = distantSlide;
    // console.log(DOM.currentPosition);
    //check first of slider disable button back
    
    // if(currentPosition == 0) {
    //     preBtn.disabled = true;
    // }else {
    //     preBtn.disabled = false;
    // }
    //check end of slider disable button next
    // if(currentPosition <= -(widthSlider - widthItem)) {
    //     nextBtn.disabled = true;
    // }else {
    //     nextBtn.disabled = false;
    // }
    // loop slider

   if(DOM.currentPosition == -(DOM.widthItem*(DOM.numItem -2)))  {
        // currentPosition = 0;
        // console.log("this is current position" +currentPosition)
        DOM.slider.style.transform = "translateX(" + DOM.currentPosition + "px)";   
        setTimeout(function(){
            DOM.slider.style.transition = "0s";
            DOM.currentPosition = 0;
            DOM.slider.style.transform = "translateX(" + DOM.currentPosition + "px)"; 
        }, 400);
    }else {
        DOM.slider.style.transition = "0.5s";
    }
    if(DOM.currentPosition == DOM.widthItem) {
        console.log(DOM.currentPosition)
        DOM.slider.style.transform = "translateX(" + DOM.currentPosition + "px)";
        setTimeout(function(){
            DOM.slider.style.transition = "0s";
            DOM.currentPosition = -(DOM.widthItem*(DOM.numItem -3));
            DOM.slider.style.transform = "translateX(" + DOM.currentPosition + "px)"; 
        }, 400);
    }
    else {
        DOM.slider.style.transition = "0.5s";
    }
}
// catchDOM();
init({
    slider:"slider",
    nextBtn:"nextButton",
    preBtn:"preButton",
    dots:true
})