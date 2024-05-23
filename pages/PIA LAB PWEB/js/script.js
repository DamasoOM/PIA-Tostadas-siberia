let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((cartItem, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${cartItem.item} - $${cartItem.price}
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItems.appendChild(li);
        total += cartItem.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

document.getElementById('confirm-order').addEventListener('click', () => {
    alert('Orden confirmada');
    cart = [];
    updateCart();
});

$(document).ready(function() {
    // Mostrar la sección de información cuando se hace clic en el enlace de información
    $('#informacion-link').on('click', function(e) {
        e.preventDefault();
        $('.informacion').show();
    });

    // Restablecer el formulario cuando se hace clic en el botón de cancelar
    $('#cancel-button').on('click', function() {
        $('#informacion-form')[0].reset();
    });

    // Manejar el envío del formulario para guardar la información
    $('#informacion-form').on('submit', function(e) {
        e.preventDefault();
        // Aquí puedes añadir la lógica para guardar la información
        alert('Información guardada correctamente');
    });

    // Ocultar la sección de información por defecto
    $('.informacion').hide();

    // Mostrar la sección de información al hacer clic en el icono de usuario
    $('#login-button').on('click', function(e) {
        e.preventDefault();
        $('.informacion').show();
    });
});

