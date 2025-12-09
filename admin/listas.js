const eliminar = document.querySelectorAll(".btn-eliminar");
const title = document.title;
const filterInput = document.querySelector("#busqueda");
const itemsList = document.querySelector("tbody");
let dato;

switch (title){
    case "Listar Cartas":
        dato = "la carta";
        break;
    case "Listar Eventos":
        dato = "el evento";
        break;
    case "Listar Iconos":
        dato = "el icono";
        break;
    case "Listar Usuarios":
        dato = "el usuario";
        break;
    case "Listar Zonas":
        dato = "la zona";
        break;
    default:
        dato = "CRUD desconocido";
}

function mostrarConfirmacion(texto, callback) {
    const modal = document.getElementById("modal-confirm");
    const mensaje = document.getElementById("modal-text");
    const btnSi = document.getElementById("btn-si");
    const btnNo = document.getElementById("btn-no");

    mensaje.textContent = texto;
    modal.style.display = "flex";

    // Reemplaza cualquier evento anterior
    btnSi.onclick = () => {
        modal.style.display = "none";
        callback(true);
    };

    btnNo.onclick = () => {
        modal.style.display = "none";
        callback(false);
    };
}

eliminar.forEach(boton => {
    boton.addEventListener("click", () => {
        mostrarConfirmacion("¿Estás seguro de eliminar " + dato + "?", (respuesta) => {
            if (respuesta) {
                location.reload();
            }
        });
    });
});


filterInput.addEventListener("keyup", function(){
    const term = filterInput.value.toLowerCase();
    const rows = itemsList.getElementsByTagName("tr");

    Array.from(rows).forEach(function(row, index){

        if(row.cells[0].textContent.toLowerCase().includes(term)){
            row.style.display = "table-row";
        }else{
            row.style.display = "none";
        }
    });
});