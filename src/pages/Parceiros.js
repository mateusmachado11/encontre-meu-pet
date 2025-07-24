import React, { useState, useEffect } from 'react';
import PartnerCard from '../components/PartnerCard';
import PartnerFilterBar from '../components/PartnerFilterBar';

const PARTNERS_PER_PAGE = 16; // 4 linhas de 4

const Parceiros = ({ partners, onPartnerClick }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(partners.length / PARTNERS_PER_PAGE);
    const startIndex = (currentPage - 1) * PARTNERS_PER_PAGE;
    const endIndex = startIndex + PARTNERS_PER_PAGE;
    const currentPartners = partners.slice(startIndex, endIndex);

    useEffect(() => {
        setCurrentPage(1);
    }, [partners]);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-2">Clube de Parceiros</h2>
            <p className="text-center text-gray-600 mb-8">Descontos e benefícios exclusivos para a nossa comunidade.</p>

            <PartnerFilterBar />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentPartners.map(partner => (
                    <PartnerCard key={partner.id} partner={partner} onClick={() => onPartnerClick(partner)} />
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

export default Parceiros;
