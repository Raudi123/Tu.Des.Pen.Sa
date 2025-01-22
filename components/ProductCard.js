function ProductCard({ product, onAddToCart }) {
    try {
        const { name, price, image, description, category } = product;
        const cupPrice = price * CUP_RATE;
        
        const categoryColors = {
            'Del Cárnico': 'bg-red-500',
            'Del Líquido': 'bg-blue-500',
            'Del Otro': 'bg-orange-500',
            'De Electrodomésticos': 'bg-green-500'
        };
        
        return (
            <div data-name="product-card" className="product-card bg-white rounded-lg shadow-md overflow-hidden relative">
                <div data-name="product-category" className={`absolute top-2 left-2 ${categoryColors[category] || 'bg-gray-500'} text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                    {category}
                </div>
                <img data-name="product-image" src={image} alt={name} className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h3 data-name="product-name" className="text-lg font-semibold mb-2">{name}</h3>
                    <p data-name="product-description" className="text-gray-600 text-sm mb-4">{description}</p>
                    <div className="flex justify-between items-center">
                        <span data-name="product-price" className="text-blue-600 font-bold">{cupPrice.toFixed(2)} CUP</span>
                        <button
                            data-name="add-to-cart-button"
                            onClick={() => onAddToCart(product)}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                        >
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
