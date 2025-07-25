import React from 'react';

const PartnerManager = ({ partners, onAdd, onEdit, onDelete }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg w-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Gestão de Parceiros</h3>
                <button onClick={() => onAdd('partner')} className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700">
                    + Adicionar Parceiro
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2">Nome</th>
                            <th className="p-2">Categoria</th>
                            <th className="p-2">Oferta</th>
                            <th className="p-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partners.map(partner => (
                            <tr key={partner.id} className="border-b hover:bg-gray-50">
                                <td className="p-2 font-semibold">{partner.name}</td>
                                <td className="p-2">{partner.category}</td>
                                <td className="p-2">{partner.title}</td>
                                <td className="p-2 flex gap-2">
                                    <button onClick={() => onEdit('partner', partner)} className="text-blue-600 hover:underline">Editar</button>
                                    <button onClick={() => onDelete('partner', partner.id)} className="text-red-600 hover:underline">Remover</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PartnerManager;
