import React from 'react';
import AdBanner from '../components/AdBanner';
import PetCard from '../components/PetCard';

const mockLostPets = [
    { id: 1, name: 'Bolinha', breed: 'Vira-lata', sex: 'Macho', location: 'Goiânia', setor: 'Setor Bueno', image: 'https://placehold.co/400x300/F97316/FFFFFF?text=Bolinha', status: 'Perdido', reward: 'R$ 100' },
    { id: 2, name: 'Mimi', breed: 'Siamês', sex: 'Fêmea', location: 'Aparecida de Goiânia', setor: 'Centro', image: 'https://placehold.co/400x300/4F46E5/FFFFFF?text=Mimi', status: 'Perdido', reward: 'R$ 50' },
];
const mockAdoptionPets = [
    { id: 105, name: 'Amora', breed: 'Vira-lata', sex: 'Fêmea', location: 'Goiânia', setor: 'Jardim América', image: 'https://placehold.co/400x300/EC4899/FFFFFF?text=Amora' },
    { id: 106, name: 'Simba', breed: 'SRD', sex: 'Macho', location: 'Aparecida de Goiânia', setor: 'Garavelo', image: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=Simba' },
];

const Section = ({ title, children, buttonText, onButtonClick }) => (
    <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">{title}</h3>
            <button onClick={onButtonClick} className="font-semibold text-orange-600 hover:underline">
                {buttonText}
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {children}
        </div>
    </section>
);

const Inicio = ({ setActivePage, setAlertModalOpen, setAdoptionModalOpen }) => {
    return (
        <div>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Bem-vindo à Comunidade</h2>
                <p className="text-lg text-gray-600">Juntos, podemos fazer a diferença na vida de um pet.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
                <button onClick={() => setAlertModalOpen(true)} className="w-full md:w-auto flex-grow bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors text-lg">
                    Criar Alerta de Animal Perdido
                </button>
                <button onClick={() => setAdoptionModalOpen(true)} className="w-full md:w-auto flex-grow bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors text-lg">
                    Anunciar para Adoção
                </button>
            </div>

            <AdBanner id="Principal" />

            <Section title="Últimos Alertas Perto de Você" buttonText="Ver Todos" onButtonClick={() => setActivePage('perdidos')}>
                {mockLostPets.slice(0, 5).map(pet => <PetCard key={pet.id} pet={pet} onClick={() => {}} />)}
            </Section>

            <Section title="Anjinhos para Adoção" buttonText="Ver Todos" onButtonClick={() => setActivePage('adocao')}>
                {mockAdoptionPets.slice(0, 5).map(pet => <PetCard key={pet.id} pet={pet} onClick={() => {}} />)}
            </Section>
        </div>
    );
};

export default Inicio;
