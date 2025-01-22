function CartItem({ item, onUpdateQuantity, onRemove }) {
    try {
        const cupPrice = item.price * CUP_RATE;
        
        return (
            <div data-name="cart-item" className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center">
                    <img 
                        data-name="item-image"
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                        <h4 data-name="item-name" className="font-semibold">{item.name}</h4>
                        <p data-name="item-price" className="text-gray-600">
                            {cupPrice.toFixed(2)} CUP
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <button
                        data-name="decrease-quantity"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                    >
                        -
                    </button>
                    <span data-name="item-quantity" className="mx-2">{item.quantity}</span>
                    <button
                        data-name="increase-quantity"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                    >
                        +
                    </button>
                    <button
                        data-name="remove-item"
                        onClick={() => onRemove(item.id)}
                        className="ml-4 text-red-500"
                    >
                        🗑️
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
