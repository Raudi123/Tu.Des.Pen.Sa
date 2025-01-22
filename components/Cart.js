function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }) {
    try {
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const totalCUP = total * CUP_RATE;

        return (
            <div data-name="cart-modal" className={`fixed inset-0 z-50 ${isOpen ? 'flex' : 'hidden'}`}>
                <div data-name="cart-overlay" className="cart-overlay absolute inset-0" onClick={onClose}></div>
                <div data-name="cart-content" className="absolute right-0 top-0 h-full w-96 bg-white shadow-lg overflow-y-auto">
                    <div className="p-4 border-b">
                        <div className="flex justify-between items-center">
                            <h3 data-name="cart-title" className="text-xl font-bold">Carrito</h3>
                            <button data-name="close-cart" onClick={onClose}>✕</button>
                        </div>
                    </div>
                    <div data-name="cart-items" className="p-4">
                        {items.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onUpdateQuantity={onUpdateQuantity}
                                onRemove={onRemove}
                            />
                        ))}
                    </div>
                    {items.length > 0 && (
                        <div data-name="cart-footer" className="p-4 border-t">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold">Total:</span>
                                <div data-name="cart-total" className="text-xl font-bold">
                                    {totalCUP.toFixed(2)} CUP
                                </div>
                            </div>
                            <PaymentForm 
                                total={total} 
                                items={items}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
