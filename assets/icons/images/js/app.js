document.addEventListener('DOMContentLoaded', () => {
    // Carrito
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartPopup = document.querySelector('.cart-popup');
    
    // Actualizar carrito
    function updateCart() {
        // Contador
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = cart.length;
        });
        
        // Items
        const cartItems = document.querySelector('.cart-items');
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                ${item.name} - $${item.price}
            </div>
        `).join('');
        
        // Total
        const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
        document.querySelector('.cart-total').textContent = total.toFixed(2);
        
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Eventos
    document.querySelector('.cart-btn').addEventListener('click', () => {
        cartPopup.style.display = 'block';
    });

    document.querySelector('.close-cart').addEventListener('click', () => {
        cartPopup.style.display = 'none';
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            cart.push({
                name: button.dataset.name,
                price: button.dataset.price
            });
            updateCart();
        });
    });

    // Inicializar
    updateCart();
});