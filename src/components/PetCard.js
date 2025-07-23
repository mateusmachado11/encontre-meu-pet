import React from 'react';

const PetCard = ({ pet, onClick }) => {
    const isLost = pet.status === 'Perdido';
    return (
        <button onClick={onClick} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col cursor-pointer text-left">
            <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-lg">{pet.name}</h3>
                <p className="text-sm text-gray-600">{pet.breed}, {pet.age}</p>
                <p className="text-sm text-gray-500 mt-1">📍 {pet.setor}, {pet.location}</p>
                {pet.status && (
                    <span className={`mt-2 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full self-start ${pet.status === 'Perdido' ? 'text-red-600 bg-red-200' : 'text-green-600 bg-green-200'}`}>
                        {pet.status}
                    </span>
                )}
                {isLost && pet.reward && (
                     <div className="mt-2 text-sm font-bold text-green-700 bg-green-100 p-2 rounded-md self-start">
                        Recompensa: {pet.reward}
                    </div>
                )}
            </div>
        </button>
    );
};

export default PetCard;
