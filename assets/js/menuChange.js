/* js to handle menu icon changes */

function burgerMenu(x) {
    x.classList.toggle("change");
    toggle_change("theMenu","c","change");
}
function wordMenu(x) {
    x.classList.toggle("change");
    toggle_change("theMenu","c","change");
}
function toggle_change(elToFind,elType,classToToggle){
    let arr=[];
    const z = elType=="c"?document.getElementsByClassName(elToFind):document.getElementById(elToFind);
    arr=elType=="c"?z:[z];
    const len = elType=="c"?arr.length:1;
    let i=0;
    while(i<len){
        arr[i].classList.toggle(classToToggle);
        i++
    };
}