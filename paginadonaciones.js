//pagina donaciones//
// Clase Proyecto
class Proyecto {
    constructor(nombre, descripcion, fechaInicio, fechaFin) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

    mostrarDetalles() {
        return `${this.nombre} - Fecha: ${this.fecha}, Lugar: ${this.lugar}, Descripción: ${this.descripcion}, Organizador: ${this.organizador}, Horario: ${this.horario}`;
    }
}

// Clase Evento
class Evento {
    constructor(nombre, fecha, lugar, descripcion, organizador, horario) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.lugar = lugar;
        this.descripcion = descripcion;
        this.organizador = organizador;
        this.horario = horario;
    }

    mostrarDetalles() {
        return `${this.nombre} - Fecha: ${this.fecha}, Lugar: ${this.lugar}`;
    }
}

// Clase Donacion
class Donacion {
    constructor(monto, donante, fecha) {
        this.monto = monto;
        this.donante = donante;
        this.fecha = fecha;
    }

    mostrarDetalles() {
        return `Donación de ${this.donante} por ${this.monto} el ${this.fecha}`;
    }
}

// Ejemplos de datos
let proyectos = [
    new Proyecto('Reforestación Urbana', 'Plantación de árboles en áreas urbanas', '01/09/2024', '30/09/2024'),
    new Proyecto('Protección de Especies en Peligro', 'Conservación de especies nativas', '15/08/2024', '15/11/2024')
];

let eventos = [
    new Evento('Carrera Solidaria por el Medio Ambiente', '15/05/2024', 'Parque Central', 'Una carrera para recaudar fondos para proyectos ambientales.', 'Organización Verde', '08:00 AM - 12:00 PM'),
    new Evento('Conferencia sobre Cambio Climático', '22/05/2024', 'Auditorio Municipal', 'Conferencia con expertos en cambio climático y panel de discusión.', 'GreenTalks', '10:00 AM - 02:00 PM'),
    new Evento('Limpieza de Ríos', '05/06/2024', 'Río Grande', 'Actividad de limpieza del río para restaurar el hábitat acuático.', 'EcoRivers', '09:00 AM - 03:00 PM'),
    new Evento('Taller de Reciclaje en la Comunidad', '12/06/2024', 'Centro Comunitario', 'Taller educativo sobre reciclaje y reducción de residuos.', 'ReciclajeLocal', '02:00 PM - 05:00 PM'),
    new Evento('Plantación de Árboles', '25/06/2024', 'Parque Ecológico', 'Actividad de plantación de árboles para mejorar áreas verdes.', 'Árboles para Todos', '08:00 AM - 01:00 PM'),
   
];

let donaciones = [
    new Donacion('$100', 'Juan Pérez', '01/09/2024'),
    new Donacion('$50', 'María García', '02/09/2024')
];

// Mostrar eventos en la página
function mostrarEventos() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';
    eventos.forEach((evento, index) => {
        let li = document.createElement('li');
        li.textContent = evento.mostrarDetalles();
        li.setAttribute('onclick', `showEventDetails(${index})`);
        eventList.appendChild(li);
    });
}

// Mostrar detalles de un evento
function showEventDetails(index) {
    const evento = eventos[index];
    const eventDetails = document.getElementById('eventDetails');
    document.getElementById('eventDetailsText').textContent = `Nombre: ${evento.nombre}`;
    document.getElementById('eventLocation').textContent = `Lugar: ${evento.lugar}`;
    document.getElementById('eventDate').textContent = `Fecha: ${evento.fecha}`;
    document.getElementById('eventDescription').textContent = `Descripción: ${evento.descripcion}`;
    document.getElementById('eventOrganizer').textContent = `Organizador: ${evento.organizador}`;
    document.getElementById('eventTime').textContent = `Horario: ${evento.horario}`;
    eventDetails.style.display = 'block';
}

// Cerrar detalles
function closeDetails() {
    document.getElementById('eventDetails').style.display = 'none';
    document.getElementById('projectDetails').style.display = 'none';
    document.getElementById('donations').style.display = 'none';
}

// Filtrar eventos
function searchEvents() {
    const searchTerm = document.getElementById('eventSearch').value.toLowerCase();
    const filteredEvents = eventos.filter(evento => evento.nombre.toLowerCase().includes(searchTerm));
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';
    filteredEvents.forEach((evento, index) => {
        let li = document.createElement('li');
        li.textContent = evento.mostrarDetalles();
        li.setAttribute('onclick', `showEventDetails(${index})`);
        eventList.appendChild(li);
    });
}

// Notificaciones instantáneas
function mostrarNotificacion(mensaje) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = mensaje;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Ejemplo de uso de notificaciones
setInterval(() => {
    let randomDonacion = donaciones[Math.floor(Math.random() * donaciones.length)];
    mostrarNotificacion(`Nueva donación: ${randomDonacion.mostrarDetalles()}`);
}, 10000); // Notificación cada 10 segundos

// Inicializar eventos al cargar la página
window.onload = function() {
    mostrarEventos();
};
