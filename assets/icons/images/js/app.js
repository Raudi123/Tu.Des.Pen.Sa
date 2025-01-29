document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartPopup = document.getElementById('cartPopup');
    const overlay = document.getElementById('overlay');

    const updateCart = () => {
        // Actualizar contador
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = cart.length;
        });

        // Actualizar items
        const cartItems = document.querySelector('.cart-items');
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>$${item.price}</span>
                <button class="remove-item" data-index="${index}">×</button>
            </div>
        `).join('');

        // Actualizar total
        const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
        document.querySelector('.cart-total span').textContent = total.toFixed(2);
        
        // Guardar en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    // Eventos
    document.addEventListener('click', (e) => {
        // Añadir al carrito
        if (e.target.closest('.add-to-cart')) {
            const button = e.target.closest('.add-to-cart');
            cart.push({
                name: button.dataset.name,
                price: parseFloat(button.dataset.price)
            });
            updateCart();
        }

        // Eliminar item
        if (e.target.closest('.remove-item')) {
            const index = e.target.closest('.remove-item').dataset.index;
            cart.splice(index, 1);
            updateCart();
        }

        // Abrir/cerrar carrito
        if (e.target.closest('.cart-btn') || e.target.closest('.close-popup')) {
            cartPopup.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        // Checkout
        if (e.target.closest('.checkout-btn')) {
            if (cart.length === 0) return alert('¡El carrito está vacío!');
            alert(`¡Compra exitosa por $${cart.reduce((a, b) => a + b.price, 0).toFixed(2)}!`);
            cart = [];
            updateCart();
            cartPopup.classList.remove('active');
            overlay.classList.remove('active');
        }
    });

    // Inicializar
    updateCart();
});