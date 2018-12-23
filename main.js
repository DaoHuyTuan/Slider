var nextBtn = document.getElementById("nextButton");
var preBtn = document.getElementById("preButton");
var slider = document.getElementById("slider");
//change value slider width id you want  
var widthItem = document.querySelector(".item").offsetWidth;
var numItem = slider.querySelectorAll(".item").length;
/* - Count how many Element in slider
** - And get width of item **
*/
var currentPosition = 0;
console.log(currentPosition)
//preBtn.disabled = true;

var widthSlider = numItem * widthItem;
console.log(widthSlider)
//var distantSlide = "translate("+ (currentPosition) + "px)";
//slider.style.transform = distantSlide;

nextBtn.addEventListener("click",nextSlider);
preBtn.addEventListener("click",backSlider);

function nextSlider(){
  
    currentPosition -= widthItem;
    checkPosition(currentPosition);
}

function backSlider(){
   

   
    currentPosition += widthItem;
    console.log("click back " + parseInt(currentPosition));
    checkPosition(currentPosition); 
    
}

//translate
function checkPosition(newValue) {
    distantSlide = "translate("+ (currentPosition) + "px)";
    slider.style.transform = distantSlide;
    console.log(currentPosition);
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

   if(currentPosition == -(widthItem*(numItem -2)))  {
        // currentPosition = 0;
        // console.log("this is current position" +currentPosition)
        slider.style.transform = "translateX(" + currentPosition + "px)";   
        setTimeout(function(){
            slider.style.transition = "0s";
            currentPosition = 0;
            slider.style.transform = "translateX(" + currentPosition + "px)"; 
        }, 600);
    }else {
        slider.style.transition = "0.5s";
    }
    if(currentPosition == widthItem) {
        console.log(currentPosition)
        slider.style.transform = "translateX(" + currentPosition + "px)";
        setTimeout(function(){
            slider.style.transition = "0s";
            currentPosition = -(widthItem*(numItem -3));
            slider.style.transform = "translateX(" + currentPosition + "px)"; 
        }, 600);
    }
    else {
        slider.style.transition = "0.5s";
    }
   
}