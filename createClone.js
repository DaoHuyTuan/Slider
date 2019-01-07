const createClone = function genClone(DOM) {
    console.log("hello")
    const numItems = DOM.slider.getElementsByClassName("item").length;
    const firstChild = DOM.slider.getElementsByClassName("item").item(0);
    const lastChild = DOM.slider.getElementsByClassName("item").item(numItems -1);
    const cloneLastChild = lastChild.cloneNode(true);
    const cloneFirstChild = firstChild.cloneNode(true);
    cloneLastChild.classList += " clone";
    cloneFirstChild.classList += " clone";
    DOM.slider.insertBefore(cloneLastChild,firstChild);
    DOM.slider.insertBefore(cloneFirstChild,lastChild.nextSibling);
    DOM.numItem += 2;
   
}