import React, { useState, useEffect } from 'react';

// Dados de exemplo. No futuro, isso virá do nosso banco de dados.
const mockLostPets = [
    { id: 1, name: 'Bolinha', type: 'Cachorro', location: 'Goiânia', image: 'https://placehold.co/400x300/F97316/FFFFFF?text=Bolinha', status: 'Perdido' },
    { id: 2, name: 'Mimi', type: 'Gato', location: 'Aparecida de Goiânia', image: 'https://placehold.co/400x300/4F46E5/FFFFFF?text=Mimi', status: 'Perdido' },
    { id: 3, name: 'Thor', type: 'Cachorro', location: 'Anápolis', image: 'https://placehold.co/400x300/10B981/FFFFFF?text=Thor', status: 'Encontrado' },
    { id: 4, name: 'Frajola', type: 'Gato', location: 'Goiânia', image: 'https://placehold.co/400x300/6B7280/FFFFFF?text=Frajola', status: 'Perdido' },
];

const Perdidos = () => {
    // O 'useState' guarda a lista de pets que será exibida.
    const [pets, setPets] = useState([]);

    // O 'useEffect' roda uma única vez quando a página carrega para buscar os dados.
    useEffect(() => {
        setPets(mockLostPets);
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-6">Animais Perdidos e Encontrados</h2>
            
            {/* Grid para exibir os cards dos pets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* O '.map' cria um card para cada pet na nossa lista */}
                {pets.map(pet => (
                    <div key={pet.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                        <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg">{pet.name}</h3>
                            <p className="text-sm text-gray-600">{pet.type} - {pet.location}</p>
                            <span className={`mt-2 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${pet.status === 'Perdido' ? 'text-red-600 bg-red-200' : 'text-green-600 bg-green-200'}`}>
                                {pet.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Perdidos;
