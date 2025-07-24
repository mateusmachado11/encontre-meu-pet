import React from 'react';

const OngFilterBar = () => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md mb-8 flex flex-wrap gap-4 items-center justify-center">
            <input type="text" placeholder="Buscar por nome da ONG..." className="p-2 border rounded-lg bg-gray-50 flex-grow" />
            <input type="text" placeholder="Buscar por cidade..." className="p-2 border rounded-lg bg-gray-50 flex-grow" />
            <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600">
                Buscar
            </button>
        </div>
    );
};

export default OngFilterBar;
