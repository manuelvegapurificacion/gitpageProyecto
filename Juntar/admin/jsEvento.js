// Referenciar a los elementos
const btnCrearEvento = document.getElementById('btnCrearEvento');
const formularioEventoNuevo = document.getElementById('formularioEventoNuevo');
const eventoSelect = document.getElementById('eventoSelect');

// Variable para controlar el estado del formulario
let creandoEventoNuevo = false;

// FUNCIONES 
// Alternar entre crear evento nuevo o seleccionar existente
btnCrearEvento.addEventListener('click', function(e) {
    
    //Cambiar valor al pulsar el boton
    creandoEventoNuevo = !creandoEventoNuevo;
    
    if (creandoEventoNuevo) {
        // Mostrar formulario de evento nuevo
        formularioEventoNuevo.style.display="block";
        btnCrearEvento.textContent = 'Cancelar';
        btnCrearEvento.style.backgroundColor="red";
        
        // Deshabilitar el select de eventos 
        eventoSelect.disabled = true;
        eventoSelect.value = '';
        
    } else {
        // Ocultar formulario
        formularioEventoNuevo.style.display="none";
        btnCrearEvento.textContent = 'Crear evento';
        btnCrearEvento.style.backgroundColor = "#667eea";
        
        // Habilitar el select de eventos
        eventoSelect.disabled = false;
        
        // Reiniciar los campos al cerrarlo
        document.getElementById('nombreEvento').value = '';
        document.getElementById('descripcionEvento').value = '';
        document.getElementById('danoEvento').value = '';
        document.getElementById('rondasEvento').value = '';
        document.getElementById('emoticonoEvento').value = '';
    }
});