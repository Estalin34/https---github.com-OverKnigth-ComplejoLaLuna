function loadModalContent(servicio) {
    const carouselImages = document.getElementById("carouselImages");
    const modalDescription = document.getElementById("modalDescription");

    let images = [];
    let description = '';

    switch (servicio) {
        case 'restaurante':
            images = [
                "image/EventoInfantilUno.jpg",
                "image/restaurante2.jpg",
                "image/restaurante3.jpg"
            ];
            description = "En nuestro restaurante, ofrecemos una variedad de platos gourmet preparados con ingredientes frescos y locales.";
            break;
        case 'infantil':
            images = [
                "image/LlamaUno.jpg",
                "image/eventos_infantiles2.jpg",
                "image/eventos_infantiles3.jpg"
            ];
            description = "Los eventos infantiles incluyen actividades creativas, juegos y diversión para los más pequeños.";
            break;
        case 'recepcion':
            images = [
                "image/Mision.jpg",
                "image/recepcion2.jpg",
                "image/recepcion3.jpg"
            ];
            description = "Nuestra recepción de eventos está diseñada para brindar el mejor servicio y comodidad a nuestros invitados.";
            break;
        case 'animales':
            images = [
                "image/RestauranteUno.jpg",
                "image/animales2.jpg",
                "image/animales3.jpg"
            ];
            description = "Interactúa con nuestros amigables animalitos, incluyendo a Luna, el llamingo.";
            break;
        case 'vacacionales':
            images = [
                "image/VacacionalUno.jpg",
                "image/vacacionales2.jpg",
                "image/vacacionales3.jpg"
            ];
            description = "Ofrecemos actividades al aire libre que fomentan la diversión y el aprendizaje en la naturaleza.";
            break;
    }

    // Limpiar el contenido anterior
    carouselImages.innerHTML = '';

    // Agregar nuevas imágenes al carrusel
    images.forEach((img, index) => {
        const itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';
        carouselImages.innerHTML += `
            <div class="${itemClass}">
                <img src="${img}" class="d-block w-100" alt="...">
            </div>
        `;
    });

    // Establecer la descripción
    modalDescription.textContent = description;
}
