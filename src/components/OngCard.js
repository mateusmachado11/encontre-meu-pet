import React from 'react';

const OngCard = ({ ong, onClick }) => {
    return (
        <button onClick={onClick} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col cursor-pointer text-left">
            <div className="h-32 bg-gray-200 flex items-center justify-center p-4">
                <img src={ong.logo} alt={ong.name} className="max-h-24 max-w-full object-contain" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-lg truncate">{ong.name}</h3>
                <p className="text-sm text-gray-500 mt-1">📍 {ong.location}</p>
            </div>
        </button>
    );
};

export default OngCard;
