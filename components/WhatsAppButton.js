function WhatsAppButton() {
    try {
        return (
            <a
                data-name="whatsapp-button"
                href="https://wa.me/5354066204"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-50"
            >
                <i className="fab fa-whatsapp text-3xl"></i>
            </a>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
