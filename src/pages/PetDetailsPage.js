import React from 'react';
import AdBanner from '../components/AdBanner';

const PetDetailsPage = ({ pet, onBack, onStartChat }) => {
    if (!pet) return null;

    const handleShowPhone = () => {
        alert(`O telefone de contato é: ${pet.contact.phone}`);
    };

    return (
        <div>
            <button onClick={onBack} className="mb-8 font-semibold text-orange-600 hover:underline">
                &larr; Voltar para a lista
            </button>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Coluna Principal */}
                <div className="w-full lg:w-3/4">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Coluna de Imagens */}
                            <div>
                                <img src={pet.image} alt={pet.name} className="w-full h-80 object-cover rounded-lg mb-4" />
                                <div className="grid grid-cols-4 gap-2">
                                    <img src={pet.image} alt="thumb 1" className="w-full h-20 object-cover rounded-md cursor-pointer border-2 border-orange-500" />
                                    <div className="w-full h-20 bg-gray-200 rounded-md"></div>
                                    <div className="w-full h-20 bg-gray-200 rounded-md"></div>
                                    <div className="w-full h-20 bg-gray-200 rounded-md"></div>
                                </div>
                            </div>

                            {/* Coluna de Informações */}
                            <div>
                                <h2 className="text-4xl font-bold">{pet.name}</h2>
                                <p className="text-lg text-gray-600 mb-4">{pet.breed}, {pet.sex}, {pet.age}</p>
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
                                
                                {/* Seção de Contato */}
                                <div className="mt-6 border-t pt-6">
                                    <h3 className="text-xl font-bold mb-4">Entrar em Contato</h3>
                                    <div className="space-y-3">
                                        <button onClick={onStartChat} className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">
                                            💬 Enviar Mensagem
                                        </button>
                                        {pet.contact?.phone && (
                                            <button onClick={handleShowPhone} className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                                                📞 Ver Telefone
                                            </button>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2 text-center">Para sua segurança, prefira o chat da plataforma.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coluna de Anúncios */}
                <aside className="w-full lg:w-1/4">
                    <AdBanner id="Detalhes 1" orientation="vertical" />
                    <AdBanner id="Detalhes 2" orientation="vertical" />
                </aside>
            </div>
        </div>
    );
};

export default PetDetailsPage;
