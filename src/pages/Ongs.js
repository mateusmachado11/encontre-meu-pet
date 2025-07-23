import React from 'react';

const mockNgos = [
    { id: 1, name: 'ONG Vida Lata', logo: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=VL', location: 'Goiânia, GO', description: 'Resgatamos, cuidamos e encontramos lares para cães e gatos em situação de rua. Vivemos de doações e do trabalho de voluntários.', link: '#' },
    { id: 2, name: 'Grupo Miau Au', logo: 'https://placehold.co/100x100/EC4899/FFFFFF?text=MA', location: 'Aparecida de Goiânia, GO', description: 'Focados no controle populacional através da castração solidária e na conscientização sobre a posse responsável de animais.', link: '#' },
];

const Ongs = () => (
     <div>
        <h2 className="text-3xl font-bold text-center mb-2">ONGs Parceiras</h2>
        <p className="text-center text-gray-600 mb-8">Conheça e apoie quem trabalha incansavelmente pela causa animal.</p>
        
        <div className="space-y-6">
            {mockNgos.map(ong => (
                <div key={ong.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
                    <img src={ong.logo} alt={ong.name} className="w-24 h-24 object-contain rounded-lg" />
                    <div className="flex-grow text-center md:text-left">
                        <h3 className="text-xl font-bold">{ong.name}</h3>
                        <p className="font-semibold text-gray-500">{ong.location}</p>
                        <p className="text-gray-600 mt-1">{ong.description}</p>
                    </div>
                    <a href={ong.link} target="_blank" rel="noopener noreferrer" className="border border-orange-500 text-orange-600 font-bold py-3 px-6 rounded-lg hover:bg-orange-50 transition-colors w-full md:w-auto text-center">
                        Visitar Site
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default Ongs;