import { Carta } from './objetos.js';
import { Evento } from './objetos.js';

/*Las cartas se pillan de la bd y se construyen los objetos en un array con el constructor*/

// Array de cartas
export const cartas = [
    // --- Bosque (9 cartas) ---
    new Carta(1, 'Plantar Árboles', 10, 'Mejora la calidad del aire y reduce el CO2.', '🌳', 1, 'Bosque'), // Neutraliza: Deforestación Masiva
    new Carta(2, 'Conservación de Fauna', 12, 'Protege especies en peligro de extinción.', '🦌', 3, 'Bosque'), // Neutraliza: Caza Ilegal
    new Carta(3, 'Reforestación', 14, 'Recupera ecosistemas degradados y aumenta la biodiversidad.', '🌲', 6, 'Bosque'), // Neutraliza: Explotación Forestal
    new Carta(4, 'Senderos Sostenibles', 8, 'Promueve el ecoturismo sin dañar el ecosistema.', '🥾', 7, 'Bosque'), // Neutraliza: Construcción Urbana
    new Carta(5, 'Control de Incendios', 11, 'Previene incendios forestales y protege la fauna.', '🔥', 2, 'Bosque'), // Neutraliza: Incendios Forestales
    new Carta(6, 'Protección de Humedales', 9, 'Conserva ecosistemas acuáticos y especies dependientes.', '🦆', 5, 'Bosque'), // Neutraliza: Contaminación de Ríos
    new Carta(7, 'Educación Ambiental', 7, 'Conciencia a la población sobre la importancia del bosque.', '📚', 9, 'Bosque'), // Neutraliza: Especies Invasoras
    new Carta(8, 'Eliminación de Especies Invasoras', 10, 'Mantiene el equilibrio del ecosistema.', '🐍', 4, 'Bosque'), // Neutraliza: Plagas
    new Carta(9, 'Creación de Reservas', 13, 'Protege grandes áreas naturales de la deforestación.', '🏞️', 8, 'Bosque'), // Neutraliza: Cambio Climático

    // --- Ciudad (9 cartas) ---
    new Carta(10, 'Energía Solar', 15, 'Genera energía limpia y reduce la dependencia de combustibles fósiles.', '☀️', 10, 'Ciudad'), // Neutraliza: Contaminación Industrial
    new Carta(11, 'Reciclaje', 8, 'Reduce la cantidad de residuos y promueve la reutilización.', '♻️', 13, 'Ciudad'), // Neutraliza: Residuos Plásticos
    new Carta(12, 'Huertos Urbanos', 7, 'Fomenta la agricultura local y reduce la huella de carbono.', '🥬', 15, 'Ciudad'), // Neutraliza: Calor Urbano
    new Carta(13, 'Transporte Público', 8, 'Reduce la contaminación y el tráfico urbano.', '🚌', 11, 'Ciudad'), // Neutraliza: Tráfico Intenso
    new Carta(14, 'Movilidad Eléctrica', 12, 'Disminuye emisiones de CO2 en la ciudad.', '⚡', 18, 'Ciudad'), // Neutraliza: Vertidos de Aguas Residuales
    new Carta(15, 'Parques y Zonas Verdes', 10, 'Mejora la calidad de vida y purifica el aire.', '🌿', 14, 'Ciudad'), // Neutraliza: Ruidos y Vibraciones
    new Carta(16, 'Reducción de Plásticos', 9, 'Evita que residuos plásticos contaminen la ciudad y ríos.', '🛍️', 12, 'Ciudad'), // Neutraliza: Vertidos Urbanos
    new Carta(17, 'Gestión de Residuos', 11, 'Optimiza la recogida y tratamiento de basura urbana.', '🗑️', 17, 'Ciudad'), // Neutraliza: Tuberías Rotas
    new Carta(18, 'Educación Ambiental Urbana', 7, 'Informa a ciudadanos sobre hábitos sostenibles.', '📚', 16, 'Ciudad'), // Neutraliza: Construcciones Ilegales

    // --- Desierto (9 cartas) ---
    new Carta(19, 'Parques Eólicos', 12, 'Genera energía renovable y reduce emisiones de gases de efecto invernadero.', '🌬️', 24, 'Desierto'), // Neutraliza: Cambio Climático
    new Carta(20, 'Gestión del Agua', 10, 'Optimiza el uso de agua en zonas áridas.', '💧', 21, 'Desierto'), // Neutraliza: Sobreexplotación de Agua
    new Carta(21, 'Protección de Dunas', 9, 'Evita la erosión y protege el ecosistema desértico.', '🏜️', 22, 'Desierto'), // Neutraliza: Erosión del Suelo
    new Carta(22, 'Energía Solar Masiva', 15, 'Aprovecha la radiación solar para electricidad limpia.', '☀️', 19, 'Desierto'), // Neutraliza: Sequía Extrema
    new Carta(23, 'Reforestación Desértica', 11, 'Plantas resistentes para mejorar el suelo y ecosistema.', '🌱', 25, 'Desierto'), // Neutraliza: Contaminación Minera
    new Carta(24, 'Turismo Sostenible', 8, 'Minimiza impacto ambiental en zonas desérticas.', '🏕️', 27, 'Desierto'), // Neutraliza: Explosiones Petroleras
    new Carta(25, 'Investigación Climatológica', 9, 'Estudia el clima para prevenir sequías extremas.', '🔬', 20, 'Desierto'), // Neutraliza: Tormenta de Arena
    new Carta(26, 'Captura de Agua de Niebla', 10, 'Método innovador para obtener agua en desiertos.', '🌫️', 26, 'Desierto'), // Neutraliza: Plagas de Insectos
    new Carta(27, 'Protección de Fauna Adaptada', 12, 'Evita extinción de especies del desierto.', '🦎', 23, 'Desierto'), // Neutraliza: Fuego en Arbustos

    // --- Mar (9 cartas) ---
    new Carta(28, 'Protección de la Vida Marina', 10, 'Conserva los ecosistemas marinos y protege la biodiversidad.', '🐠', 29, 'Mar'), // Neutraliza: Sobrepesca
    new Carta(29, 'Filtración de Agua', 9, 'Mejora la calidad del agua potable y reduce contaminantes.', '💧', 34, 'Mar'), // Neutraliza: Contaminación Química
    new Carta(30, 'Limpieza de Playas', 8, 'Reduce residuos y protege fauna costera.', '🏖️', 30, 'Mar'), // Neutraliza: Plásticos en el Océano
    new Carta(31, 'Reserva Marina', 13, 'Protege zonas clave de pesca y ecosistemas marinos.', '🐟', 36, 'Mar'), // Neutraliza: Pesca Ilegal
    new Carta(32, 'Educación Ambiental Marina', 7, 'Conciencia sobre contaminación y sostenibilidad marina.', '📚', 28, 'Mar'), // Neutraliza: Derrame de Petróleo
    new Carta(33, 'Reducción de Contaminantes', 11, 'Disminuye químicos y vertidos en mares.', '🛢️', 35, 'Mar'), // Neutraliza: Acidificación del Océano
    new Carta(34, 'Protección de Coral', 12, 'Evita la degradación de arrecifes y biodiversidad marina.', '🪸', 31, 'Mar'), // Neutraliza: Blanqueamiento de Coral
    new Carta(35, 'Energía Mareomotriz', 10, 'Genera electricidad limpia a partir de las mareas.', '🌊', 32, 'Mar'), // Neutraliza: Tempestades Marinas
    new Carta(36, 'Control de Pesca Ilegal', 9, 'Evita la sobreexplotación de especies marinas.', '⚓', 33, 'Mar'), // Neutraliza: Inundaciones Costeras
];

// Array de eventos (se mantiene igual)
export const eventos = [
    // --- Bosque (9 eventos) ---
    new Evento(1, 'Deforestación Masiva', -15, 'Aumenta el CO2 y reduce la biodiversidad.', '🌲', 'Bosque'),
    new Evento(2, 'Incendios Forestales', -20, 'Destruye hábitats y aumenta el CO2.', '🔥', 'Bosque'),
    new Evento(3, 'Caza Ilegal', -12, 'Disminuye la fauna y afecta el ecosistema.', '🏹', 'Bosque'),
    new Evento(4, 'Plagas', -10, 'Afecta la flora y la salud del bosque.', '🐛', 'Bosque'),
    new Evento(5, 'Contaminación de Ríos', -15, 'Afecta fauna acuática y calidad del agua.', '💧', 'Bosque'),
    new Evento(6, 'Explotación Forestal', -18, 'Reducción de árboles y hábitats naturales.', '🪓', 'Bosque'),
    new Evento(7, 'Construcción Urbana', -12, 'Fragmenta ecosistemas y reduce biodiversidad.', '🏗️', 'Bosque'),
    new Evento(8, 'Cambio Climático', -20, 'Sequías y alteración del hábitat.', '🌡️', 'Bosque'),
    new Evento(9, 'Especies Invasoras', -10, 'Compiten con la fauna y flora local.', '🐍', 'Bosque'),

    // --- Ciudad (9 eventos) ---
    new Evento(10, 'Contaminación Industrial', -20, 'Aumenta la contaminación del aire y el agua.', '🏭', 'Ciudad'),
    new Evento(11, 'Tráfico Intenso', -10, 'Aumenta CO2 y ruido en la ciudad.', '🚗', 'Ciudad'),
    new Evento(12, 'Vertidos Urbanos', -15, 'Contamina ríos y zonas urbanas.', '🛢️', 'Ciudad'),
    new Evento(13, 'Residuos Plásticos', -12, 'Aumenta basura y contaminación.', '🛍️', 'Ciudad'),
    new Evento(14, 'Ruidos y Vibraciones', -8, 'Afecta salud y bienestar ciudadano.', '🔊', 'Ciudad'),
    new Evento(15, 'Calor Urbano', -10, 'Aumenta la temperatura por efecto isla de calor.', '🌡️', 'Ciudad'),
    new Evento(16, 'Construcciones Ilegales', -12, 'Impacta zonas verdes y ecosistemas urbanos.', '🏗️', 'Ciudad'),
    new Evento(17, 'Tuberías Rotas', -8, 'Pérdida de agua y contaminación.', '🚰', 'Ciudad'),
    new Evento(18, 'Vertidos de Aguas Residuales', -15, 'Afecta ríos y fauna urbana.', '💦', 'Ciudad'),

    // --- Desierto (9 eventos) ---
    new Evento(19, 'Sequía Extrema', -15, 'Afecta la disponibilidad de agua y la agricultura.', '☀️', 'Desierto'),
    new Evento(20, 'Tormenta de Arena', -10, 'Daños a cultivos y asentamientos.', '🌪️', 'Desierto'),
    new Evento(21, 'Sobreexplotación de Agua', -12, 'Agota acuíferos y ecosistemas áridos.', '💧', 'Desierto'),
    new Evento(22, 'Erosión del Suelo', -11, 'Pérdida de terreno fértil y desertificación.', '🏜️', 'Desierto'),
    new Evento(23, 'Fuego en Arbustos', -10, 'Destruye vegetación y fauna adaptada.', '🔥', 'Desierto'),
    new Evento(24, 'Cambio Climático', -15, 'Aumenta sequías y tormentas extremas.', '🌡️', 'Desierto'),
    new Evento(25, 'Contaminación Minera', -12, 'Afecta suelos y aguas subterráneas.', '⛏️', 'Desierto'),
    new Evento(26, 'Plagas de Insectos', -8, 'Destruyen cultivos y vegetación.', '🐛', 'Desierto'),
    new Evento(27, 'Explosiones Petroleras', -14, 'Daño ambiental y contaminación.', '🛢️', 'Desierto'),

    // --- Mar (9 eventos) ---
    new Evento(28, 'Derrame de Petróleo', -25, 'Daño severo a la vida marina y contaminación del agua.', '🛢️', 'Mar'),
    new Evento(29, 'Sobrepesca', -18, 'Disminuye poblaciones de peces y afecta ecosistemas.', '🎣', 'Mar'),
    new Evento(30, 'Plásticos en el Océano', -15, 'Aumenta contaminación y afecta fauna marina.', '🛍️', 'Mar'),
    new Evento(31, 'Blanqueamiento de Coral', -20, 'Destruye arrecifes y biodiversidad marina.', '🪸', 'Mar'),
    new Evento(32, 'Tempestades Marinas', -12, 'Afecta ecosistemas costeros y pesca.', '🌊', 'Mar'),
    new Evento(33, 'Inundaciones Costeras', -15, 'Aumenta erosión y pérdida de hábitats.', '🏖️', 'Mar'),
    new Evento(34, 'Contaminación Química', -18, 'Afecta fauna y flora marina.', '⚗️', 'Mar'),
    new Evento(35, 'Acidificación del Océano', -15, 'Impacta ecosistemas y arrecifes de coral.', '🧪', 'Mar'),
    new Evento(36, 'Pesca Ilegal', -12, 'Disminuye especies y equilibrio marino.', '⚓', 'Mar'),
];


/*Coger cartas de una misma zona para el jugador y eventos y mostrarlos en el html*/
/*la zona sera una variable desde php dependiendo de la eleccion del jugador al inicio del juego y se le enviara a la funcion*/

let zonaSeleccionada = 'Mar'; // Ejemplo de zona seleccionada

/* Un Array con todas las cartas seleccionadas actualmente para poder sacar su información en el panel central*/

let cartasSeleccionadas = [];

function filtradoDeElementos(zonaSeleccionada) {
    const cartasDeZona = cartas.filter(carta => carta.zona === zonaSeleccionada);
    const eventosDeZona = eventos.filter(evento => evento.zona === zonaSeleccionada);
    return { cartasDeZona, eventosDeZona };
}/*No se si las cartas las filtramos con javascript o desde php con la variable y una consulta a la bd y cargamos los elementos en el array ya filtrados*/



function mostrarElementos(cartas, eventos) {
    const manoCartas = document.querySelector('.mano');
    const contenedorEventos = document.querySelector('.problemas');
    const infoCarta = document.querySelector('.info-carta');

    manoCartas.innerHTML = '';
    contenedorEventos.innerHTML = '';

    /*Decidir cuantos eventos y cartas al principio y cada turno o ronda cuantas se añaden*/
    const cartasAMostrar = cartas.slice(0,5); 
    const eventosAMostrar = eventos.slice(0, 2);

    //------------------------------------Bucle para mostrar cartas----------------------------------
    function actualizarPanelInfo(){
            const infoCarta = document.querySelector('.info-carta');

            //Muestra el texto predeterminado del panel y sale de la función
            if (cartasSeleccionadas.length === 0) {
                infoCarta.innerHTML = `
                <div>
                    <p><b>Info</b></p>
                    <p>Pasa el ratón sobre un Evento para ver su descripción, o selecciona una carta para ver su informacion en detalle</p>
                </div>
                `;
                return;
            }

            //Variable vacía a la que añadirle / quitarle texto
            let html = "";

            //Recorro el array de las cartas. Añado un index para tener el índice del array para uso posterior
            cartasSeleccionadas.forEach((carta, index) => {
                //Saco el nombre del evento neutralizado
                const eventoNeutralizado = eventos.find(ev => ev.id === carta.neutraliza);
                let neutralizaTexto = eventoNeutralizado.titulo;

                //Añado la información a la variable html
                html += `
                <div>
                        <p><b>${carta.titulo}</b></p>
                        <p>${carta.info}</p>
                        <p>Neutraliza: ${neutralizaTexto}</p>
                </div>
                `;
               
            });
            //Muestro la información
            infoCarta.innerHTML=html;
    }

    cartasAMostrar.forEach(carta => {
        
        //Crear div de carta y movidas
        const cartaDiv = document.createElement('div');
        cartaDiv.classList.add('carta', 'carta-mano');
        
        const efectoTexto = "+ "+ carta.efecto + " de vida para el planeta";
        
        /*relaccionar el id de neutraliza con el titulo del evento correspondiente desde javascript y quitar que las cartas no neutralizen nada dice samu*/
        let neutralizaTexto = '';
        const eventoQueNeutraliza = eventos.find(evento => evento.id === carta.neutraliza);
        if (eventoQueNeutraliza) {
            neutralizaTexto = eventoQueNeutraliza.titulo;
        }

        /*Lo que se muestra en la carta en la mano*/
        cartaDiv.innerHTML = `
            <p class="titulo-carta">${carta.titulo}</p>
            <p class="icono-carta">${carta.emoji}</p>
            
        `;

        //<p class="efecto-numero">${efectoTexto}</p> 

        manoCartas.appendChild(cartaDiv);

        // Variable para saber si está levantada
        let levantada = false;

        cartaDiv.addEventListener('click', () => {
            levantada = !levantada; // alternar estado

            if (levantada) {
                cartaDiv.classList.add('carta-levantada'); // CSS hace que suba
                cartasSeleccionadas.push(carta); //Añado la carta al array
            } else {
                cartaDiv.classList.remove('carta-levantada');
                cartasSeleccionadas = cartasSeleccionadas.filter(c => c.id !== carta.id); //Quito la carta del array
            }

            //Función aparte para actualizar el panel central con la información de las cartas en el array
            actualizarPanelInfo();
        });
    });

    //------------------------------------Bucle para mostrar eventos----------------------------------

    eventosAMostrar.forEach(evento => {
        const eventoDiv = document.createElement('div');
        eventoDiv.classList.add('carta', 'problema');
        const efectoTexto = evento.efecto + " de daño cada turno";

        eventoDiv.innerHTML = `
        <div>
            <p class="titulo-carta">${evento.titulo}</p>
            <p class="icono-carta">${evento.emoji}</p>
        </div>
            
        `;
        // <p class="efecto-numero">${efectoTexto}</p>
        contenedorEventos.appendChild(eventoDiv);

        eventoDiv.addEventListener('mouseover', () => {
            infoCarta.innerHTML = `
            <div>
                <p><b>${evento.titulo}</b></p>
                <p>${evento.info}</p>
            </div>
            `;
        });

        eventoDiv.addEventListener('mouseout', () => {
            if(cartasSeleccionadas==0){
                infoCarta.innerHTML = `
                <div>
                        <p><b>Info</b></p>
                        <p>Pasa el ratón sobre un Evento para ver su descripción, o selecciona una carta para ver su informacion en detalle</p>
                </div>
                `;
            }else{
                actualizarPanelInfo();
            }
            
        });
    });
}


/*iniciar funciones al cargar el dom*/
document.addEventListener('DOMContentLoaded', () => {
    let { cartasDeZona, eventosDeZona } = filtradoDeElementos(zonaSeleccionada);
    mostrarElementos(cartasDeZona, eventosDeZona);
});



/*Hacer movida para pasar rondas y turnos la idea seria q cuando se cargue el dom se generen eventos y cartas
/*luego al pasar o jugar turno las cartas jugadas meterlas en un array de ya usadas lo mismo con eventos y una vez clikado jugar o pasar
/*se generan nuevas cartas y eventos cada x turno o ronda ns dedicir entre los compas*/




/*Poner numero encima de la barra de vida y animarla barra de vida al subir y bajar*/
const barraVida = document.querySelector('.vida-restante');
let vidaActual = 100; // Vida inicial del planeta

function actualizarVida(cambio) {
    vidaActual += cambio;
    if (vidaActual > 100) vidaActual = 100;
    if (vidaActual < 0) vidaActual = 0;
    barraVida.style.height = vidaActual + '%';
    barraVida.textContent = vidaActual + '%';//Sustituir esto por una etiqueta nueva en el html y posicionarla encima de la barra
}
/*probar funcion actualizar vida*/
actualizarVida(-20); 


/*Duda quiero que el jugador pueda tirar varias cartas a la vez pero eso significa q en info
/* q se deberia mostrar la info de todas las cartas seleccionadas o la ultima seleccionada?
/*Actualmente solo muestra la ultima seleccionada
*/


/*Dice samu que la filtracion de cartas y eventos se haga desde php con consultas a la bd
/*y que se envie la zona seleccionada desde php a javascript y se carguen los arrays ya filtrados
/*asi que la funcion de filtrado de elementos en javascript no haria falta
*/

/*Todas las cartas neutralizan algo hay que cambiar el texto de las cartas q no neutralizan nada no puede ser null todas las cartas neutralizan algo camnbiar codigo*/