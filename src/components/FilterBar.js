import React from 'react';

const FilterBar = () => (
    <div className="bg-white p-4 rounded-xl shadow-md mb-8 flex flex-wrap gap-4 items-center justify-center">
        <select className="p-2 border rounded-lg bg-gray-50">
            <option value="todos">Todos os Tipos</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
        </select>
        <select className="p-2 border rounded-lg bg-gray-50">
            <option value="todos">Todas as Raças</option>
            <option value="Vira-lata">Vira-lata</option>
            <option value="Golden Retriever">Golden Retriever</option>
        </select>
        <select className="p-2 border rounded-lg bg-gray-50">
            <option value="todos">Todos os Tamanhos</option>
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
        </select>
        <input type="date" className="p-2 border rounded-lg bg-gray-50" />
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">📍 Ver no Mapa</button>
    </div>
);

export default FilterBar;