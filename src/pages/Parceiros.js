import React, { useState, useEffect } from 'react';

const mockPartners = [
    { id: 1, name: 'Petz', logo: 'https://placehold.co/100x100/1D4ED8/FFFFFF?text=Petz', title: '15% de desconto em todo o site', description: 'Use o cupom ENCONTREPET15 e ganhe 15% de desconto em rações, brinquedos e acessórios. Válido para a primeira compra.', link: '#' },
    { id: 2, name: 'Cobasi', logo: 'https://placehold.co/100x100/F97316/FFFFFF?text=Cobasi', title: 'Banho e Tosa com 20% OFF', description: 'Agende o banho do seu pet e ganhe 20% de desconto no serviço. Válido para todas as unidades de Goiás.', link: '#' },
    { id: 3, name: 'Vet Quality', logo: 'https://placehold.co/100x100/059669/FFFFFF?text=Vet', title: 'Consulta com especialista pela metade do preço', description: 'Agende uma consulta com um de nossos veterinários especialistas e pague apenas 50% do valor.', link: '#' },
];

const Parceiros = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        setPartners(mockPartners);
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-2">Clube de Parceiros</h2>
            <p className="text-center text-gray-600 mb-8">Descontos e benefícios exclusivos para a nossa comunidade.</p>
            
            <div className="space-y-6">
                {partners.map(partner => (
                    <div key={partner.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
                        <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-contain rounded-lg" />
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-xl font-bold">{partner.name}</h3>
                            <p className="text-lg text-orange-600 font-semibold">{partner.title}</p>
                            <p className="text-gray-600 mt-1">{partner.description}</p>
                        </div>
                        <a href={partner.link} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors w-full md:w-auto text-center">
                            Ver Oferta
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Parceiros;
