class Display{
    constructor(){
    }
    
    show(contenido){
        let content = document.querySelector(".content");
        content.innerHTML = "";
        content.appendChild(contenido);
    }
}   

export default Display;