function App() {
    const [cartItems, setCartItems] = React.useState([]);
    const [isCartOpen, setIsCartOpen] = React.useState(false);

    const handleAddToCart = (product) => {
        try {
            setCartItems(prevItems => addToCart(prevItems, product));
        } catch (error) {
            reportError(error);
        }
    };

    const handleUpdateQuantity = (productId, newQuantity) => {
        try {
            setCartItems(prevItems => updateCart(prevItems, productId, newQuantity));
        } catch (error) {
            reportError(error);
        }
    };

    const handleRemoveItem = (productId) => {
        try {
            setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="app-container">
            <Header 
                cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                onCartClick={() => setIsCartOpen(true)}
            />
            <FeatureBoxes />
            <ProductList 
                products={stores[0].products}
                onAddToCart={handleAddToCart} 
            />
            <Cart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
            />
            <WhatsAppButton />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
