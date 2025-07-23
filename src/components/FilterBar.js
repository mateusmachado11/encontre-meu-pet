import React from 'react';

const FilterBar = () => {
    const handleApplyFilters = () => {
        alert('Filtros aplicados! (Funcionalidade de busca em desenvolvimento)');
    };

    const handleMapView = () => {
        alert('Abrindo a visualização do mapa... (Funcionalidade em desenvolvimento)');
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <select className="p-2 border rounded-lg bg-gray-50"><option value="todos">Perdidos e Achados</option><option value="perdido">Apenas Perdidos</option><option value="achado">Apenas Achados</option></select>
                <select className="p-2 border rounded-lg bg-gray-50">
                    <option value="todos">Qualquer Data</option>
                    <option value="hoje">Hoje</option>
                    <option value="semana">Última Semana</option>
                    <option value="quinzena">Últimas 2 Semanas</option>
                </select>
                <select className="p-2 border rounded-lg bg-gray-50">
                    <option value="todos">Todos os Tipos</option>
                    <option value="Cachorro">Cachorro</option>
                    <option value="Gato">Gato</option>
                    <option value="Outros">Outros</option>
                </select>
                 <select className="p-2 border rounded-lg bg-gray-50">
                    <option value="todos">Todos os Sexos</option>
                    <option value="Macho">Macho</option>
                    <option value="Fêmea">Fêmea</option>
                </select>
                 <div>
                    <input list="racas-filter" name="raca-filter" placeholder="Raça" className="w-full p-2 border rounded-lg bg-gray-50" />
                    <datalist id="racas-filter">
                        <option value="Vira-lata (SRD)"></option><option value="Shih Tzu"></option><option value="Yorkshire"></option><option value="Poodle"></option><option value="Golden Retriever"></option><option value="Labrador"></option><option value="Siamês"></option><option value="Persa"></option>
                    </datalist>
                </div>
            </div>
            <div className="mt-4 border-t pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Busca por Proximidade</label>
                <div className="flex flex-col md:flex-row gap-4">
                    <input type="text" placeholder="Digite um endereço" className="flex-grow p-2 border rounded-lg bg-gray-50" />
                    <select className="p-2 border rounded-lg bg-gray-50">
                        <option value="1">Raio de 1km</option>
                        <option value="5">Raio de 5km</option>
                        <option value="10">Raio de 10km</option>
                    </select>
                </div>
            </div>
            <div className="mt-4 flex justify-center gap-4">
                 <button onClick={handleApplyFilters} className="w-full md:w-auto flex-grow bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors">Aplicar Filtros</button>
                 <button onClick={handleMapView} className="w-full md:w-auto bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">📍 Ver no Mapa</button>
            </div>
        </div>
    );
};

export default FilterBar;
