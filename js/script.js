let proyectos = document.getElementById("proyectos");
let desplegable = document.getElementById("desplegable");
let arrayProyectos = proyectos.childNodes;

desplegable.addEventListener("click", function() {
    for (let i = 8; i < arrayProyectos.length; i++) {
        let proyecto = arrayProyectos[i];
        if (proyecto.className === "proyecto-oculto") {
            proyecto.className = "proyecto";
        } else if (proyecto.className === "proyecto") {
            proyecto.className = "proyecto-oculto";
        }
    }
});