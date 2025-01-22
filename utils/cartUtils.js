function updateCart(items, productId, newQuantity) {
    try {
        if (newQuantity < 1) {
            return items.filter(item => item.id !== productId);
        }

        const existingItem = items.find(item => item.id === productId);
        if (existingItem) {
            return items.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            );
        }
        return items;
    } catch (error) {
        reportError(error);
        return items;
    }
}

function addToCart(items, product) {
    try {
        const existingItem = items.find(item => item.id === product.id);
        if (existingItem) {
            return items.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }
        return [...items, { ...product, quantity: 1 }];
    } catch (error) {
        reportError(error);
        return items;
    }
}
