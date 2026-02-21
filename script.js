// Datos de los productos
const products = [
    {
        title: "Torta Triple Chocolate",
        price: "$45.000",
        description: "Una torta de chocolate de tres pisos hecha con bizcocho esponjoso y húmedo, rellena con crema entre las capas. Arriba lleva una buena cubierta de crema batida y frutillas frescas que le dan un toque dulce y fresco, además de hacerla ver súper tentadora.",
        ingredients: "Chocolate negro 70%, frutillas frescas, harina de trigo, manteca, huevos, azúcar, crema fresca",
        time: "4 horas",
        servings: "8 porciones",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9550c883-8b6f-4f16-9789-546e3447dce1.png"
    },
    {
        title: "Red Velvet Clásica",
        price: "$38.000",
        description: "Suave, esponjosa y de un color rojo irresistible. Nuestra torta Red Velvet combina un delicado sabor a cacao con el toque cremoso y fresco del frosting de queso, logrando un equilibrio perfecto. Ideal para endulzar tus momentos especiales y sorprender con su elegancia.",
        ingredients: "Harina de trigo,azucar, huevos, cacao en polvo, manteca, leche entera, colorantes naturales, polvo de hornear, esencia de vainilla",
        time: "4 horas",
        servings: "8 porciones",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/daf0e79a-8e4c-428f-9b1e-cb1c9222d001.png"
    },
    {
        title: "Torta Tropical",
        price: "$42.000",
        description: "Una torta fresca y colorida, con capas de bizcocho suave y esponjoso, rellena con crema ligera y una deliciosa mezcla de frutas tropicales como piña, mango y kiwi. Perfecta para quienes buscan un postre refrescante, natural y lleno de sabor en cada bocado.",
        ingredients: "harina de trigo, azucar, huevos, manteca, leche, polvo para hornear, esencia de vainilla, crema y frutas a eleccion ",
        time: "3.5 horas",
        servings: "8 porciones",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/549d9485-71d2-4fef-b6c1-d9d68791c0c6.png"
    },
    {
        title: "Tiramisú Clásico",
        price: "$12.000 ",
        description: "Capas suaves de bizcochos empapados en café, alternadas con crema ligera de mascarpone y un toque de cacao espolvoreado por encima. Servido en copa, es un postre elegante, cremoso y delicioso, perfecto para disfrutar en cualquier ocasión.",
        ingredients: "vainillas, cafe, crema, queso mascarpone, azucar",
        time: "30 minutos",
        servings: "1 unidad",
        image: "https://laroussecocina.mx/wp-content/uploads/2020/11/Tiramisu.jpg"
    },
    {
        title: "Cheesecake de Frutos Rojos",
        price: "$15.000",
        description: "Suave y cremoso, con una base crujiente de galleta, y una deliciosa capa de queso que se derrite en el paladar. Coronado con una mezcla de frutos rojos frescos, aporta un contraste dulce y ácido que lo hace irresistible y perfecto para cualquier momento especial.",
        ingredients: "Queso crema, galletas digestive, frutos del bosque, crema agria, huevos, azúcar, mantequilla",
        time: "6 horas (incluye refrigeración)",
        servings: "8 porciones",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6993acc1-3499-478b-803b-72046c8b385c.png"
    },
    {
        title: "Profiteroles de Chocolate",
        price: "$10.000 (6 unidades)",
        description: "Delicadas bolitas de masa choux rellenas de crema suave y dulce, bañadas con una irresistible cobertura de chocolate. Un postre clásico que combina textura ligera y cremosidad, perfecto para deleitar a los amantes del chocolate en cada bocado.",
        ingredients: "harina de trigo, huevos, manteca, ganache de chocolate y azucar impalpable",
        time: "3 horas",
        servings: "6 unidades",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8d7ccddb-acfd-48a5-b445-32912d933c30.png"
    },
    {
        title: "Facturas mixtas",
        price: "$15.000 (12 unidades)",
        description: "facturas tradicionales argentinas como vigilantes, cañon de dulce de leche, tortitas negras y medialunas ",
        ingredients: "harina de trigo, huevos, manteca, membrillo, crema pastelera, dulce de leche",
        time: "3 horas",
        servings: "12 unidades",
        image: "https://vinomanos.com/wp-content/uploads/2020/04/Facturas-de-panaderia-copia.jpg"
    },
    {
        title: "pan casero",
        price: "$10.000 (2 unidades)",
        description: "pan casero esponjoso y crujiente",
        ingredients: "harina de trigo, grasa vacuna, sal y agua ",
        time: "2 horas",
        servings: "2 unidades",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROsdAjPio_R8mr9e6AYiNSFe3_1roJLb913Q&s"
    },
    {
        title: "rosca de pascuas ",
        price: "$20.000 (1 unidades)",
        description: "rosca tradicional de pascuas",
        ingredients: "harina de trigo, huevos, manteca, crema pastelera, chocolate, cerezas",
        time: "2 horas",
        servings: "1 unidades",
        image: "https://www.integralisimo.com/wp-content/uploads/sites/5/2020/04/Rosca-de-Pascua-Integral-10.jpg"
    }
];

// Función para abrir el modal con la información del producto
function openModal(index) {
    const product = products[index];
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.title;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalIngredients').textContent = product.ingredients;
    document.getElementById('modalTime').textContent = product.time;
    document.getElementById('modalServings').textContent = product.servings;

    document.getElementById('productModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});