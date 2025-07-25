import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

import Header from './components/Header';
import AdBanner from './components/AdBanner';
import LoginModal from './components/LoginModal';
import CreateAlertModal from './components/CreateAlertModal';
import PetDetailsPage from './pages/PetDetailsPage';
import PartnerDetailsPage from './pages/PartnerDetailsPage';
import OngDetailsPage from './pages/OngDetailsPage';
import ChatModal from './components/ChatModal';
import AdminPage from './pages/AdminPage';

import Inicio from './pages/Inicio';
import Perdidos from './pages/Perdidos';
import Adocao from './pages/Adocao';
import Parceiros from './pages/Parceiros';
import Ongs from './pages/Ongs';

export default function App() {
    const [activePage, setActivePage] = useState('inicio');
    const [isLoading, setIsLoading] = useState(true);
    
    // Estados dos Modais
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isAlertModalOpen, setAlertModalOpen] = useState(false);
    const [isAdoptionModalOpen, setAdoptionModalOpen] = useState(false);
    const [isChatModalOpen, setChatModalOpen] = useState(false);
    
    // Estados de Seleção para Páginas de Detalhes
    const [selectedPet, setSelectedPet] = useState(null);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [selectedOng, setSelectedOng] = useState(null);

    // Estados para armazenar os dados vindos do Firebase
    const [lostPets, setLostPets] = useState([]);
    const [adoptionPets, setAdoptionPets] = useState([]);
    const [partners, setPartners] = useState([]);
    const [ongs, setNgos] = useState([]);

    // Função para buscar todos os dados do Firebase
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const collections = {
                lostPets: query(collection(db, "lostPets"), orderBy("createdAt", "desc")),
                adoptionPets: query(collection(db, "adoptionPets"), orderBy("createdAt", "desc")),
                partners: collection(db, "partners"),
                ongs: collection(db, "ongs"),
            };

            const [lostPetsSnapshot, adoptionPetsSnapshot, partnersSnapshot, ngosSnapshot] = await Promise.all([
                getDocs(collections.lostPets),
                getDocs(collections.adoptionPets),
                getDocs(collections.partners),
                getDocs(collections.ongs),
            ]);

            setLostPets(lostPetsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setAdoptionPets(adoptionPetsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setPartners(partnersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setNgos(ngosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        } catch (error) {
            console.error("Erro ao buscar dados do Firebase:", error);
        }
        setIsLoading(false);
    };

    // Efeito para buscar os dados quando a aplicação carrega
    useEffect(() => {
        fetchData();
    }, []);


    const handlePetClick = (pet) => setSelectedPet(pet);
    const handlePartnerClick = (partner) => setSelectedPartner(partner);
    const handleOngClick = (ong) => setSelectedOng(ong);
    
    const handleBackToList = () => {
        setSelectedPet(null);
        setSelectedPartner(null);
        setSelectedOng(null);
    };

    const renderCurrentPage = () => {
        if (isLoading) {
            return <div className="text-center p-10">A carregar dados da plataforma...</div>;
        }
        if (selectedPet) return <PetDetailsPage pet={selectedPet} onBack={handleBackToList} onStartChat={() => setChatModalOpen(true)} />;
        if (selectedPartner) return <PartnerDetailsPage partner={selectedPartner} onBack={handleBackToList} />;
        if (selectedOng) return <OngDetailsPage ong={selectedOng} onBack={handleBackToList} />;

        const pages = {
            inicio: <Inicio setActivePage={setActivePage} setAlertModalOpen={setAlertModalOpen} setAdoptionModalOpen={setAdoptionModalOpen} partners={partners} ongs={ongs} />,
            perdidos: <Perdidos pets={lostPets} onPetClick={handlePetClick} setAlertModalOpen={setAlertModalOpen} />,
            adocao: <Adocao pets={adoptionPets} setAdoptionModalOpen={setAdoptionModalOpen} onPetClick={handlePetClick} />,
            parceiros: <Parceiros partners={partners} onPartnerClick={handlePartnerClick} />,
            ongs: <Ongs ongs={ongs} onOngClick={handleOngClick} />,
            admin: <AdminPage partners={partners} ongs={ongs} refreshData={fetchData} />
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
            
            <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
            <CreateAlertModal isOpen={isAlertModalOpen} onClose={() => setAlertModalOpen(false)} onDataAdded={fetchData} type="alert" />
            <CreateAlertModal isOpen={isAdoptionModalOpen} onClose={() => setAdoptionModalOpen(false)} onDataAdded={fetchData} type="adoption" />
            <ChatModal isOpen={isChatModalOpen} onClose={() => setChatModalOpen(false)} pet={selectedPet} />
        </div>
    );
}
