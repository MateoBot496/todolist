import "./styles.css";
import Tarea from "./tarea.js";
import Display from "./display.js";
import secciones from "./contenidos.js";

let display = new Display();
display.show(secciones.total);

let añadir = document.querySelector(".añadir");

añadir.addEventListener("click",function(){
    console.log("hgoasf");
    let main = document.querySelector(".main");
    main.classList.add("bgblur");
});



