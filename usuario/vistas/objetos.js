// ----- CLASE CARTA -----
export class Carta {
  constructor(id, titulo, efecto, info, emoji, neutraliza, zona) {
    this.id = id;
    this.titulo = titulo;
    this.efecto = efecto;
    this.info = info;
    this.emoji = emoji;
    this.neutraliza = neutraliza; // id del evento que neutraliza (o null)
    this.zona = zona; // Bosque, Mar, Desierto, Ciudad
  }

  // GETTERS
  getTitulo() { return this.titulo; }
  getEfecto() { return this.efecto; }
  getNeutraliza() { return this.neutraliza; }
  getZona() { return this.zona; }

  // SETTERS
  setTitulo(titulo) { this.titulo = titulo; }
  setEfecto(efecto) { this.efecto = efecto; }
  setNeutraliza(eventoId) { this.neutraliza = eventoId; }

 
}




// ----- CLASE EVENTO -----
export class Evento {
  constructor(id, titulo, efecto, info, emoji, zona) {
    this.id = id;
    this.titulo = titulo;
    this.efecto = efecto;
    this.info = info;
    this.emoji = emoji;
    this.zona = zona; // Bosque, Mar, Desierto, Ciudad
    this.activo = true; // está afectando al planeta
  }

  // GETTERS
  getId() { return this.id; }
  getTitulo() { return this.titulo; }
  getEfecto() { return this.efecto; }
  getZona() { return this.zona; }
  isActivo() { return this.activo; }

  // SETTERS
  setActivo(valor) { this.activo = valor; }
}
