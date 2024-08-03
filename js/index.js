// Crear el mapa y establecer la vista inicial
let map = L.map("map").setView([-0.51732, -78.57425], 50); // Coordenadas del complejo y zoom inicial

// Añadir una capa de mapa de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Añadir un marcador en la ubicación del lugar
let marker = L.marker([-0.51732, -78.57425])
  .addTo(map)
  .bindPopup('Complejo "La Luna')
  .openPopup();

// Añadir un evento que redirija a un enlace
marker.on("click", function () {
  window.location.href =
    "https://www.google.com.ec/maps/place/Complejo+%22La+Luna%22+Machachi-Ec/@-0.5182823,-78.5752009,17z/data=!4m15!1m8!3m7!1s0x91d5abf5eaa7fbfd:0x9baedc6e0badccf!2sComplejo+%22La+Luna%22+Machachi-Ec!8m2!3d-0.5175013!4d-78.5742769!10e1!16s%2Fg%2F11s63zttk3!3m5!1s0x91d5abf5eaa7fbfd:0x9baedc6e0badccf!8m2!3d-0.5175013!4d-78.5742769!16s%2Fg%2F11s63zttk3?hl=es&entry=ttu"; // Cambia esto por el enlace al que deseas redirigir
});
