/*Nada mas cargar la pagina q haga todo esto*/
document.addEventListener('DOMContentLoaded', () => {

/*-------Controlar sesion*/

    let estaLogueado = true;/*Esta variable se cambia con php*/
    
    /*Local storage para invitado*/
    let estaLogueadoLS = localStorage.getItem('estaLogueado');
    if (estaLogueadoLS) {
      estaLogueado = estaLogueadoLS;
    }else if(estaLogueado ===true){
        localStorage.removeItem('estaLogueado');
    }

    const enlacePerfil = document.querySelector('a[href="perfilUsuario.html"]');
    const botonSesion = document.getElementById('boton-sesion');

    if (estaLogueado === true) {
        //con el usuario logeado los estilos de Perfil no se tocan y en el select de sesion solo se muestra Cerrar Sesión
        
        botonSesion.textContent = 'Cerrar Sesión';
        /*Cuando seleccione cerrar sesion href a acceso y estaLogueado flase*/

        botonSesion.addEventListener('click',() =>{
            window.location.href = "acceso.html";
        });
        

    } else {
        // con el usuario no logeado se pone display none al perfil para ocultarlo y en el select se muestra iniciar sesion y registrarse
        enlacePerfil.style.display = 'none';

        botonSesion.textContent = 'Iniciar Sesión';
        /*ns si añadir otro option de iniciar sesion con google y q redireccione donde lo tengamos hecho si es que lo hacemos*/

        botonSesion.addEventListener('click',() =>{
            localStorage.removeItem('estaLogueado'); /*Esto quizas se cambie en php*/
            window.location.href = "login.html";
        });
    }


/*----PopUp*/

    const botonComoJugar = document.getElementById('boton-como-jugar');
    const popup = document.getElementById('popup-reglas'); 
    const botonCerrar = popup.querySelector('.cerrar-popup');

        botonComoJugar.addEventListener('click', () => {
            popup.style.display = 'block';
        });

        if (botonCerrar) {
            botonCerrar.addEventListener('click', () => {
                popup.style.display = 'none';
            });
        }    
});