import React from 'react';

const PartnerFilterBar = () => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md mb-8 flex flex-wrap gap-4 items-center justify-center">
            <select className="p-2 border rounded-lg bg-gray-50">
                <option value="todos">Todas as Categorias</option>
                <option value="Petshop">Petshop</option>
                <option value="Veterinário">Veterinário</option>
                <option value="Adestrador">Adestrador</option>
                <option value="Hospedagem">Hospedagem</option>
                <option value="Fotografia">Fotografia</option>
            </select>
            <input type="text" placeholder="Buscar por nome do parceiro..." className="p-2 border rounded-lg bg-gray-50 flex-grow" />
            <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600">
                Buscar
            </button>
        </div>
    );
};

export default PartnerFilterBar;
