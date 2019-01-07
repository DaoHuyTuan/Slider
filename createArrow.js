const createArrow = function genArrow(options) {
    DOM.nextBtn =  document.createElement("BUTTON");
    DOM.nextBtn.setAttribute("id",options.nextBtn)
    DOM.nextBtn.classList += "btn";
    DOM.preBtn = document.createElement("BUTTON");
    DOM.preBtn.setAttribute("id",options.preBtn)
    DOM.preBtn.classList += "btn";
    DOM.main.appendChild(DOM.preBtn)
    DOM.main.appendChild(DOM.nextBtn)
    addEventsListener();
}