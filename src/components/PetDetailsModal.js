import React from 'react';

const PetDetailsModal = ({ pet, isOpen, onClose }) => {
    if (!isOpen || !pet) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img src={pet.image} alt={pet.name} className="w-full h-80 object-cover rounded-lg mb-4" />
                        <div className="grid grid-cols-4 gap-2">
                            <img src={pet.image} alt="thumb 1" className="w-full h-20 object-cover rounded-md cursor-pointer" />
                            <div className="w-full h-20 bg-gray-200 rounded-md"></div>
                            <div className="w-full h-20 bg-gray-200 rounded-md"></div>
                            <div className="w-full h-20 bg-gray-200 rounded-md"></div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">{pet.name}</h2>
                        <p className="text-lg text-gray-600 mb-4">{pet.breed}, {pet.age}</p>
                        {pet.status && (
                            <span className={`mb-4 text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full ${pet.status === 'Perdido' ? 'text-red-600 bg-red-200' : 'text-green-600 bg-green-200'}`}>
                                {pet.status}
                            </span>
                        )}
                        <div className="space-y-4 text-gray-700">
                            <div><h4 className="font-bold">Localização</h4><p>Visto por último em: {pet.setor}, {pet.location}</p></div>
                            <div><h4 className="font-bold">Características</h4><p>{pet.description}</p></div>
                            {pet.reward && (
                                <div>
                                    <h4 className="font-bold text-green-700">Recompensa</h4>
                                    <p className="text-xl font-bold text-green-600">{pet.reward}</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-6 h-48 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
                            Placeholder do Mapa
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetailsModal;
