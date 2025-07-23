import React from 'react';

const CreateAlertModal = ({ isOpen, onClose, type }) => {
    if (!isOpen) return null;

    const title = type === 'alert' ? 'Criar Alerta de Animal Perdido' : 'Criar Anúncio de Adoção';

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Nome do Pet" className="w-full p-3 border rounded-lg" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select className="w-full p-3 border rounded-lg"><option>Tipo (Cão, Gato...)</option></select>
                        <input type="text" placeholder="Raça" className="w-full p-3 border rounded-lg" />
                        <input type="text" placeholder="Idade" className="w-full p-3 border rounded-lg" />
                        <input type="text" placeholder="Cor" className="w-full p-3 border rounded-lg" />
                    </div>
                    <textarea placeholder="Características e informações adicionais" rows="4" className="w-full p-3 border rounded-lg"></textarea>
                    <input type="text" placeholder="Última localização vista (Setor, Cidade)" className="w-full p-3 border rounded-lg" />
                    {type === 'alert' && (
                        <input type="text" placeholder="Recompensa (Opcional, ex: R$ 100,00)" className="w-full p-3 border rounded-lg" />
                    )}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fotos do Animal (até 5)</label>
                        <input type="file" multiple className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" />
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={onClose} className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300">Cancelar</button>
                        <button type="submit" className="py-2 px-6 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600">Publicar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAlertModal;