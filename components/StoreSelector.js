function StoreSelector({ stores, selectedStore, onSelectStore }) {
    try {
        return (
            <div data-name="store-selector" className="container mx-auto px-4 py-4 mt-20">
                <div className="flex flex-wrap gap-4">
                    {stores.map(store => (
                        <button
                            key={store.id}
                            data-name={`store-button-${store.id}`}
                            onClick={() => onSelectStore(store)}
                            className={`px-6 py-3 rounded-lg ${
                                selectedStore?.id === store.id
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            {store.name}
                        </button>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
