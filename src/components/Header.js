import React from 'react';
import NavLink from './NavLink';

const Header = ({ activePage, setActivePage }) => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-orange-600">
                    🐾 Encontre Meu Pet
                </h1>
                <nav className="hidden md:flex items-center space-x-2">
                    <NavLink page="inicio" activePage={activePage} setActivePage={setActivePage}>Início</NavLink>
                    <NavLink page="perdidos" activePage={activePage} setActivePage={setActivePage}>Perdidos</NavLink>
                    <NavLink page="adocao" activePage={activePage} setActivePage={setActivePage}>Adoção</NavLink>
                    <NavLink page="parceiros" activePage={activePage} setActivePage={setActivePage}>Parceiros</NavLink>
                    <NavLink page="ongs" activePage={activePage} setActivePage={setActivePage}>ONGs</NavLink>
                </nav>
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                    Criar Alerta
                </button>
            </div>
        </header>
    );
};

export default Header;