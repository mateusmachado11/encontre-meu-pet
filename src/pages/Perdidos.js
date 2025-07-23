import React, { useState, useEffect } from 'react';
import PetCard from '../components/PetCard';
import FilterBar from '../components/FilterBar';
import AdBanner from '../components/AdBanner';

const PETS_PER_PAGE = 20;

const Perdidos = ({ pets, onPetClick }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(pets.length / PETS_PER_PAGE);
    const startIndex = (currentPage - 1) * PETS_PER_PAGE;
    const endIndex = startIndex + PETS_PER_PAGE;
    const currentPets = pets.slice(startIndex, endIndex);

    // Reseta a página para 1 se a lista de pets mudar (ex: filtro)
    useEffect(() => {
        setCurrentPage(1);
    }, [pets]);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-2">Animais Perdidos e Encontrados</h2>
            <p className="text-center text-gray-600 mb-8">Filtre pelos alertas e ajude uma família a se reunir.</p>
            
            <FilterBar />

            <div className="flex gap-8">
                <aside className="hidden lg:block w-1/5">
                    <AdBanner id="Lateral Esquerda" orientation="vertical" />
                </aside>

                <main className="flex-grow">
                    <AdBanner id="Central" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {currentPets.map(pet => <PetCard key={pet.id} pet={pet} onClick={() => onPetClick(pet)} />)}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button 
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-white rounded-lg shadow disabled:opacity-50"
                            >
                                Anterior
                            </button>
                            <span>Página {currentPage} de {totalPages}</span>
                            <button 
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-white rounded-lg shadow disabled:opacity-50"
                            >
                                Próxima
                            </button>
                        </div>
                    )}
                </main>

                <aside className="hidden lg:block w-1/5">
                    <AdBanner id="Lateral Direita" orientation="vertical" />
                </aside>
            </div>
        </div>
    );
};

export default Perdidos;
