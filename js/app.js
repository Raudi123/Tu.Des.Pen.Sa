document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartPopup = document.getElementById('cartPopup');
    const overlay = document.getElementById('overlay');
    
    // Elementos clave
    const elements = {
        openCart: document.getElementById('openCart'),
        closeCart: document.getElementById('closeCart'),
        continueBtn: document.getElementById('continue'),
        checkoutBtn: document.getElementById('checkout')
    };

    // ========== FUNCIONES PRINCIPALES ==========
    const updateCart = () => {
        // Actualizar contador
        document.querySelectorAll('.cart-count').forEach(el => el.textContent = cart.length);
        
        // Actualizar items
        const cartItems = document.querySelector('.cart-items');
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
                <button class="remove-item" data-index="${index}">×</button>
            </div>
        `).join('');

        // Actualizar total
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        document.querySelector('.cart-total span').textContent = total.toFixed(2);
        
        // Guardar en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    // ========== MANEJO DE EVENTOS ==========
    // Abrir/cerrar carrito
    elements.openCart.addEventListener('click', () => toggleCart(true));
    [elements.closeCart, overlay, elements.continueBtn].forEach(el => {
        el.addEventListener('click', () => toggleCart(false));
    });

    // Añadir producto
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const product = {
                name: e.target.dataset.name,
                price: parseFloat(e.target.dataset.price)
            };
            cart.push(product);
            updateCart();
            toggleCart(true); // Abrir automáticamente
        }

        // Eliminar producto
        if (e.target.classList.contains('remove-item')) {
            const index = parseInt(e.target.dataset.index);
            cart.splice(index, 1);
            updateCart();
        }
    });

    // Checkout
    elements.checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('¡El carrito está vacío!');
            return;
        }
        if (confirm(`¿Confirmar compra por $${cart.reduce((a, b) => a + b.price, 0).toFixed(2)}?`)) {
            cart = [];
            updateCart();
            toggleCart(false);
        }
    });

    // ========== FUNCIONES AUXILIARES ==========
    const toggleCart = (state) => {
        cartPopup.classList.toggle('active', state);
        overlay.classList.toggle('active', state);
    };

    // Inicializar
    updateCart();
});