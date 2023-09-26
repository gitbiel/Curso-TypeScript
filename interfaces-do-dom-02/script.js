"use strict";
const elementosLink = document.querySelectorAll(".link");
function modificarEstilo(elemento) {
    if (elemento instanceof HTMLElement) {
        elemento.style.color = "red";
        elemento.style.border = "2px solid red";
    }
}
elementosLink.forEach((link) => {
    modificarEstilo(link);
});
