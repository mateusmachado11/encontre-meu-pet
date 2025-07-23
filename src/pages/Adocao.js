import React, { useState, useEffect } from 'react';
import PetCard from '../components/PetCard';
import FilterBar from '../components/FilterBar';

const mockAdoptionPets = [
    { id: 5, name: 'Amora', type: 'Cachorro', breed: 'Vira-lata', age: '6 meses', color: 'Preta', location: 'Goiânia', image: 'https://placehold.co/400x300/EC4899/FFFFFF?text=Amora' },
    { id: 6, name: 'Simba', type: 'Gato', breed: 'SRD', age: '1 ano', color: 'Laranja', location: 'Aparecida de Goiânia', image: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=Simba' },
    { id: 7, name: 'Mel', type: 'Cachorro', breed: 'Vira-lata', age: '3 anos', color: 'Caramelo', location: 'Goiânia', image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=Mel' },
];

const Adocao = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const sortedPets = mockAdoptionPets.sort((a, b) => b.id - a.id);
        setPets(sortedPets);
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold">Adoção Responsável</h2>
                    <p className="text-gray-600">Encontre um novo amigo para a vida toda.</p>
                </div>
                <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    Criar Anúncio
                </button>
            </div>
            
            <FilterBar />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pets.map(pet => <PetCard key={pet.id} pet={pet} />)}
            </div>
        </div>
    );
};

export default Adocao;