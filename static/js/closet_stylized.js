// script.js

// Estimación del precio
const precioBase = {
    "camisa": 25000,
    "pantalon": 30000,
    "chaqueta": 35000,
    "buso": 28000,
    "short": 15000,
    "pantaloneta": 18000,
    "medias": 8000
};

document.getElementById('formulario-diseño').addEventListener('submit', function (e) {
    e.preventDefault();

    const prenda = document.getElementById('prenda').value;
    const material = document.getElementById('material').value;
    const talla = document.getElementById('talla').value;
    const bordado = document.getElementById('bordado').files.length;

    let precio = precioBase[prenda];

    if (bordado > 0) {
        precio += 5000; // Suponiendo que el bordado cuesta 5000 COP adicionales
    }

    // Aumentar el precio según el material (solo un ejemplo)
    if (material === 'denim') {
        precio += 5000;
    }

    document.getElementById('precio').textContent = precio.toLocaleString();
    agregarAlCarrito(prenda, precio);
});

// Función para añadir productos al carrito
function agregarAlCarrito(prenda, precio) {
    const productosCarrito = document.getElementById('productos-carrito');
    const producto = document.createElement('div');
    producto.textContent = `${prenda} - ${precio.toLocaleString()} COP`;
    productosCarrito.appendChild(producto);

    let total = parseInt(document.getElementById('total').textContent.replace(' COP', '')) || 0;
    total += precio;
    document.getElementById('total').textContent = total.toLocaleString() + " COP";
}

// Registro de Diseñador
document.getElementById('formulario-registro').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = new Date(document.getElementById('fecha-nacimiento').value);
    const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();

    if (edad < 18) {
        alert("Necesitas permiso de tus padres para registrarte.");
    } else {
        alert(`¡Bienvenido, ${nombre}! Te has registrado correctamente como diseñador.`);
    }
});
