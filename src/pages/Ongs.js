import React, { useState, useEffect } from 'react';
import OngCard from '../components/OngCard';
import OngFilterBar from '../components/OngFilterBar';

const ONGS_PER_PAGE = 16;

const Ongs = ({ ongs, onOngClick }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(ongs.length / ONGS_PER_PAGE);
    const startIndex = (currentPage - 1) * ONGS_PER_PAGE;
    const endIndex = startIndex + ONGS_PER_PAGE;
    const currentOngs = ongs.slice(startIndex, endIndex);

    useEffect(() => {
        setCurrentPage(1);
    }, [ongs]);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-2">ONGs Parceiras</h2>
            <p className="text-center text-gray-600 mb-8">Conheça e apoie quem trabalha incansavelmente pela causa animal.</p>

            <OngFilterBar />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentOngs.map(ong => (
                    <OngCard key={ong.id} ong={ong} onClick={() => onOngClick(ong)} />
                ))}
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
        </div>
    );
};

export default Ongs;
