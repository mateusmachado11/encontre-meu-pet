import React from 'react';

const PartnerCard = ({ partner, onClick }) => {
    return (
        <button onClick={onClick} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col cursor-pointer text-left">
            <div className="h-32 bg-gray-200 flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="max-h-20 max-w-full object-contain p-2" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-lg truncate">{partner.name}</h3>
                <p className="text-sm text-orange-600 font-semibold mt-1">{partner.title}</p>
            </div>
        </button>
    );
};

export default PartnerCard;
