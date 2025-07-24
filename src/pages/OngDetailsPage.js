import React from 'react';
import AdBanner from '../components/AdBanner';

const OngDetailsPage = ({ ong, onBack }) => {
    if (!ong) return null;

    return (
        <div>
            <button onClick={onBack} className="mb-8 font-semibold text-orange-600 hover:underline">
                &larr; Voltar para a lista de ONGs
            </button>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Coluna Principal */}
                <div className="w-full lg:w-3/4">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex flex-col md:flex-row items-center gap-8 border-b pb-8 mb-8">
                            <img src={ong.logo} alt={ong.name} className="w-32 h-32 object-contain rounded-lg bg-gray-100 p-2" />
                            <div className="text-center md:text-left">
                                <h2 className="text-4xl font-bold">{ong.name}</h2>
                                <p className="text-xl text-gray-500 font-semibold mt-2">📍 {ong.location}</p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                            <p className="text-gray-700 leading-relaxed">{ong.description}</p>

                            <div className="mt-6 text-center">
                                <a href={ong.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
                                    Visitar Site e Apoiar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coluna de Anúncios */}
                <aside className="w-full lg:w-1/4">
                    <AdBanner id="ONG 1" orientation="vertical" />
                </aside>
            </div>
        </div>
    );
};

export default OngDetailsPage;
