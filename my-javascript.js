let element;
function moveRight() {
    element.style.left=parseInt(element.style.left) + 10 +'px';
}
function init() {
    element=document.getElementById("bong");
    element.style.position="relative";
    element.style.left='0px';

}
function Load() {
    window.onload=init();

}
function moveLeft() {
    element.style.left=parseInt((element.style.left))-10 +'px';

}