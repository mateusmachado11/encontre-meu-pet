import React, { useState, useEffect } from 'react';
import PetCard from '../components/PetCard';
import FilterBar from '../components/FilterBar';
import AdBanner from '../components/AdBanner';

const mockLostPets = [
    { id: 1, name: 'Bolinha', type: 'Cachorro', breed: 'Vira-lata', age: '2 anos', color: 'Caramelo', location: 'Goiânia', image: 'https://placehold.co/400x300/F97316/FFFFFF?text=Bolinha', status: 'Perdido', reward: 'R$ 100' },
    { id: 2, name: 'Mimi', type: 'Gato', breed: 'Siamês', age: '1 ano', color: 'Branco e Cinza', location: 'Aparecida de Goiânia', image: 'https://placehold.co/400x300/4F46E5/FFFFFF?text=Mimi', status: 'Perdido', reward: 'R$ 50' },
    { id: 3, name: 'Thor', type: 'Cachorro', breed: 'Golden Retriever', age: '3 anos', color: 'Dourado', location: 'Anápolis', image: 'https://placehold.co/400x300/10B981/FFFFFF?text=Thor', status: 'Encontrado', reward: null },
    { id: 4, name: 'Frajola', type: 'Gato', breed: 'Vira-lata', age: '4 anos', color: 'Preto e Branco', location: 'Goiânia', image: 'https://placehold.co/400x300/6B7280/FFFFFF?text=Frajola', status: 'Perdido', reward: 'R$ 75' },
];

const Perdidos = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        // Ordena do mais recente para o mais antigo (simulado pelo ID)
        const sortedPets = mockLostPets.sort((a, b) => b.id - a.id);
        setPets(sortedPets);
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-2">Animais Perdidos e Encontrados</h2>
            <p className="text-center text-gray-600 mb-8">Filtre pelos alertas e ajude uma família a se reunir.</p>
            
            <FilterBar />
            <AdBanner id="Anúncio Meio de Página" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pets.map(pet => <PetCard key={pet.id} pet={pet} />)}
            </div>
        </div>
    );
};

export default Perdidos;
