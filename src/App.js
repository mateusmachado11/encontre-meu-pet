import React, { useState } from 'react';
import Header from './components/Header';
import AdBanner from './components/AdBanner';
import Inicio from './pages/Inicio';
import Perdidos from './pages/Perdidos';
import Adocao from './pages/Adocao';
import Parceiros from './pages/Parceiros';
import Ongs from './pages/Ongs';

export default function App() {
    const [activePage, setActivePage] = useState('inicio');

    const pages = {
        inicio: <Inicio />,
        perdidos: <Perdidos />,
        adocao: <Adocao />,
        parceiros: <Parceiros />,
        ongs: <Ongs />,
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header activePage={activePage} setActivePage={setActivePage} />
            <main className="container mx-auto p-4 md:p-8">
                {pages[activePage]}
            </main>
            <footer className="container mx-auto p-4">
                 <AdBanner id="Rodapé" />
            </footer>
        </div>
    );
}