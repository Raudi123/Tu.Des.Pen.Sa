function PaymentForm({ total, items }) {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            phone: '',
            address: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const totalCUP = total * CUP_RATE;
            
            let message = `🛒 Nuevo Pedido\n\n\n`;
            
            message += `👤 Datos del Cliente:\n\n`;
            message += `• Nombre: ${formData.name}\n\n`;
            message += `• Teléfono: ${formData.phone}\n\n`;
            message += `• Dirección: ${formData.address}\n\n`;
            message += `• Método de Pago: Transferencia CUP\n\n\n`;
            
            message += `💳 Información de Pago:\n\n`;
            message += `Total a pagar: ${totalCUP.toFixed(2)} CUP\n\n`;
            message += `Por favor realice la transferencia y envíe el comprobante por este medio.\n\n`;
            
            message += `\n🛍 Productos:\n\n`;
            items.forEach(item => {
                const itemTotalCUP = item.price * item.quantity * CUP_RATE;
                message += `• ${item.quantity}x ${item.name} - ${itemTotalCUP.toFixed(2)} CUP\n\n`;
            });
            
            message += `\n💰 Total a Pagar: ${totalCUP.toFixed(2)} CUP`;
            message += ` de 24 a 48 horas pedido completado`;
            
            const whatsappUrl = `https://wa.me/5354066204?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        };

        return (
            <form data-name="payment-form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Nombre Completo</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1">Teléfono</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1">Dirección</label>
                    <textarea
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600"
                >
                    Proceder al pago
                </button>
            </form>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
