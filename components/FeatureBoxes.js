function FeatureBoxes() {
    try {
        return (
            <div data-name="feature-boxes" className="container mx-auto px-4 py-8 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div data-name="feature-box-delivery" className="relative overflow-hidden rounded-lg group">
                        <img 
                            src="compras.jpg"
                            alt="Delivery" 
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end">
                            <div className="text-white text-4xl mb-4">
                                <i className="fas fa-truck"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Compra Online y Entrega a Domicilio</h3>
                            <p className="text-gray-200">
                                Disfruta de la comodidad de comprar desde casa y recibir tus productos 
                                directamente en tu puerta.
                            </p>
                        </div>
                    </div>
                    
                    <div data-name="feature-box-payment" className="relative overflow-hidden rounded-lg group">
                        <img 
                            src="atencion.jpg"
                            alt="Payment" 
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end">
                            <div className="text-white text-4xl mb-4">
                                <i className="fas fa-voicemail"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Soporte al Cliente</h3>
                            <p className="text-gray-200">
                            Contamos con atención al cliente que estará con ustedes en todo momento.
                            </p>
                        </div>
                    </div>
                    
                    <div data-name="feature-box-quality" className="relative overflow-hidden rounded-lg group">
                        <img 
                            src="calidad.png"
                            alt="Quality" 
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end">
                            <div className="text-white text-4xl mb-4">
                                <i className="fas fa-award"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Productos de Alta Calidad</h3>
                            <p className="text-gray-200">
                                Seleccionamos los mejores productos para ti, garantizando 
                                frescura y calidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
