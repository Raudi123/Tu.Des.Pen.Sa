function Header({ cartItemCount, onCartClick }) {
    try {
        return (
            <header data-name="header" className="bg-blue-500 header-shadow fixed w-full top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 data-name="logo" className="text-2xl font-bold text-white">TuDespensa</h1>
                    <button 
                        data-name="cart-button"
                        onClick={onCartClick}
                        className="relative p-2"
                    >
                        <span className="material-icons text-3xl text-white">🛒</span>
                        {cartItemCount > 0 && (
                            <span data-name="cart-count" className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                </div>
            </header>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
