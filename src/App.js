import React, { useState } from 'react';
import Header from './components/Header';
import AdBanner from './components/AdBanner';
import LoginModal from './components/LoginModal';
import CreateAlertModal from './components/CreateAlertModal';
import PetDetailsPage from './pages/PetDetailsPage';
import ChatModal from './components/ChatModal';

import Inicio from './pages/Inicio';
import Perdidos from './pages/Perdidos';
import Adocao from './pages/Adocao';
import Parceiros from './pages/Parceiros';
import Ongs from './pages/Ongs';

// Dados iniciais atualizados com a propriedade 'sex'
const initialLostPets = [
    ...Array.from({ length: 25 }, (_, i) => ({
        id: 25 - i,
        name: `Pet Exemplo ${25 - i}`,
        type: i % 2 === 0 ? 'Cachorro' : 'Gato',
        sex: i % 2 === 0 ? 'Macho' : 'Fêmea',
        breed: 'Vira-lata',
        age: `${i % 5 + 1} anos`,
        color: 'Colorido',
        location: 'Goiânia',
        setor: `Setor ${i + 1}`,
        image: `https://placehold.co/400x300/78716C/FFFFFF?text=Pet+${25 - i}`,
        status: i % 3 === 0 ? 'Encontrado' : 'Perdido',
        reward: i % 3 !== 0 ? `R$ ${50 + i * 5}` : null,
        description: `Descrição detalhada do Pet Exemplo ${25 - i}.`,
        contact: {
            phone: i % 4 === 0 ? `(62) 99999-00${25 - i}` : null,
            useChat: true,
        }
    }))
];

const initialAdoptionPets = [
    { id: 105, name: 'Amora', type: 'Cachorro', sex: 'Fêmea', breed: 'Vira-lata', age: '6 meses', color: 'Preta', location: 'Goiânia', setor: 'Jardim América', image: 'https://placehold.co/400x300/EC4899/FFFFFF?text=Amora', description: 'Uma cachorrinha muito carinhosa e brincalhona. Se dá bem com outros cães e crianças. Vacinada e castrada.', contact: { phone: null, useChat: true } },
    { id: 106, name: 'Simba', type: 'Gato', sex: 'Macho', breed: 'SRD', age: '1 ano', color: 'Laranja', location: 'Aparecida de Goiânia', setor: 'Garavelo', image: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=Simba', description: 'Um gatão laranja super companheiro. Adora um sofá e um carinho na barriga. Castrado e vermifugado.', contact: { phone: '(62) 98888-1111', useChat: true } },
    { id: 107, name: 'Mel', type: 'Cachorro', sex: 'Fêmea', breed: 'Vira-lata', age: '3 anos', color: 'Caramelo', location: 'Goiânia', setor: 'Bueno', image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=Mel', description: 'Uma gigante gentil. Mel é muito obediente e calma. Perfeita para quem tem espaço e amor para dar.', contact: { phone: null, useChat: true } },
].sort((a, b) => b.id - a.id);

export default function App() {
    const [activePage, setActivePage] = useState('inicio');
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isAlertModalOpen, setAlertModalOpen] = useState(false);
    const [isAdoptionModalOpen, setAdoptionModalOpen] = useState(false);
    const [isChatModalOpen, setChatModalOpen] = useState(false);
    
    const [selectedPet, setSelectedPet] = useState(null);
    const [lostPets, setLostPets] = useState(initialLostPets);
    const [adoptionPets, setAdoptionPets] = useState(initialAdoptionPets);

    const handlePetClick = (pet) => {
        setSelectedPet(pet);
    };
    
    const handleBackToList = () => {
        setSelectedPet(null);
    };

    const handleAddLostPet = (newPet) => {
        setLostPets(prevPets => [newPet, ...prevPets]);
    };

    const handleAddAdoptionPet = (newPet) => {
        setAdoptionPets(prevPets => [newPet, ...prevPets]);
    };

    const renderCurrentPage = () => {
        if (selectedPet) {
            return <PetDetailsPage pet={selectedPet} onBack={handleBackToList} onStartChat={() => setChatModalOpen(true)} />;
        }

        const pages = {
            inicio: <Inicio setActivePage={setActivePage} setAlertModalOpen={setAlertModalOpen} setAdoptionModalOpen={setAdoptionModalOpen} />,
            perdidos: <Perdidos pets={lostPets} onPetClick={handlePetClick} />,
            adocao: <Adocao pets={adoptionPets} setAdoptionModalOpen={setAdoptionModalOpen} onPetClick={handlePetClick} />,
            parceiros: <Parceiros />,
            ongs: <Ongs />,
        };
        return pages[activePage];
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header 
              activePage={activePage} 
              setActivePage={setActivePage} 
              onLoginClick={() => setLoginModalOpen(true)}
              onLogoClick={handleBackToList}
            />
            <main className="container mx-auto p-4 md:p-8">
                {renderCurrentPage()}
            </main>
            <footer className="container mx-auto p-4">
                 <AdBanner id="Rodapé" />
            </footer>
            
            <LoginModal 
              isOpen={isLoginModalOpen} 
              onClose={() => setLoginModalOpen(false)} 
            />
            <CreateAlertModal
              isOpen={isAlertModalOpen}
              onClose={() => setAlertModalOpen(false)}
              onAddPet={handleAddLostPet}
              type="alert"
            />
             <CreateAlertModal
              isOpen={isAdoptionModalOpen}
              onClose={() => setAdoptionModalOpen(false)}
              onAddPet={handleAddAdoptionPet}
              type="adoption"
            />
            <ChatModal
              isOpen={isChatModalOpen}
              onClose={() => setChatModalOpen(false)}
              pet={selectedPet}
            />
        </div>
    );
}
