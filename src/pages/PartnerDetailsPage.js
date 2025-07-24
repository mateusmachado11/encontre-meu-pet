import React from 'react';
import AdBanner from '../components/AdBanner';

const PartnerDetailsPage = ({ partner, onBack }) => {
    if (!partner) return null;

    return (
        <div>
            <button onClick={onBack} className="mb-8 font-semibold text-orange-600 hover:underline">
                &larr; Voltar para a lista de parceiros
            </button>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Coluna Principal */}
                <div className="w-full lg:w-3/4">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex flex-col md:flex-row items-center gap-8 border-b pb-8 mb-8">
                            <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain rounded-lg bg-gray-100 p-2" />
                            <div className="text-center md:text-left">
                                <h2 className="text-4xl font-bold">{partner.name}</h2>
                                <p className="text-xl text-orange-600 font-semibold mt-2">{partner.title}</p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Detalhes da Oferta</h3>
                            <p className="text-gray-700 leading-relaxed">{partner.description}</p>

                            <div className="mt-6 bg-orange-50 p-6 rounded-lg text-center">
                                <h4 className="font-semibold text-gray-700">SEU CUPOM DE DESCONTO</h4>
                                <p className="text-3xl font-bold text-orange-600 my-2 tracking-widest border-2 border-dashed border-orange-300 py-2">{partner.coupon}</p>
                                <a href={partner.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
                                    Ativar Desconto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coluna de Anúncios */}
                <aside className="w-full lg:w-1/4">
                    <AdBanner id="Parceiro 1" orientation="vertical" />
                    <AdBanner id="Parceiro 2" orientation="vertical" />
                </aside>
            </div>
        </div>
    );
};

export default PartnerDetailsPage;
