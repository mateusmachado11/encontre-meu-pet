import React from 'react';

const ChatModal = ({ isOpen, onClose, pet }) => {
    if (!isOpen || !pet) return null;

    const handleSendMessage = (e) => {
        e.preventDefault();
        const messageInput = e.target.elements.message;
        const message = messageInput.value;
        if (message.trim() === '') return;

        alert(`Mensagem enviada: "${message}"\n\nNo mundo real, o anunciante receberia uma notificação por e-mail agora.`);
        messageInput.value = '';
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-lg w-full">
                <div className="flex items-center border-b pb-4 mb-4">
                    <img src={pet.image} alt={pet.name} className="w-12 h-12 object-cover rounded-full mr-4" />
                    <div>
                        <p className="text-gray-600">Iniciando conversa sobre:</p>
                        <h3 className="text-lg font-bold">{pet.name}</h3>
                    </div>
                </div>
                
                <div className="space-y-4 mb-4 h-48 overflow-y-auto bg-gray-100 p-4 rounded-lg">
                    {/* Mensagens de exemplo */}
                    <div className="flex justify-start">
                        <div className="bg-gray-300 text-black p-3 rounded-lg max-w-xs">
                            Olá! Tenho interesse em adotar o(a) {pet.name}. Ele(a) ainda está disponível?
                        </div>
                    </div>
                     <div className="flex justify-end">
                        <div className="bg-orange-500 text-white p-3 rounded-lg max-w-xs">
                           Olá! Sim, está disponível. Podemos conversar?
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSendMessage}>
                    <textarea name="message" placeholder="Digite sua mensagem..." rows="3" className="w-full p-3 border rounded-lg mb-4"></textarea>
                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300">Fechar</button>
                        <button type="submit" className="py-2 px-6 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatModal;
