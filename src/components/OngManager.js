import React from 'react';

const OngManager = ({ ongs, onAdd, onEdit, onDelete }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg w-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Gestão de ONGs</h3>
                <button onClick={() => onAdd('ong')} className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700">
                    + Adicionar ONG
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2">Nome</th>
                            <th className="p-2">Localização</th>
                            <th className="p-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ongs.map(ong => (
                            <tr key={ong.id} className="border-b hover:bg-gray-50">
                                <td className="p-2 font-semibold">{ong.name}</td>
                                <td className="p-2">{ong.location}</td>
                                <td className="p-2 flex gap-2">
                                    <button onClick={() => onEdit('ong', ong)} className="text-blue-600 hover:underline">Editar</button>
                                    <button onClick={() => onDelete('ong', ong.id)} className="text-red-600 hover:underline">Remover</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OngManager;
