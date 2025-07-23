import React from 'react';
import NavLink from './NavLink';

const Header = ({ activePage, setActivePage, onLoginClick, onLogoClick }) => {
    
    const handleNavClick = (page) => {
        onLogoClick(); // Limpa a seleção de pet ao navegar
        setActivePage(page);
    }

    return (
        <header className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-orange-600 cursor-pointer" onClick={() => handleNavClick('inicio')}>
                    🐾 Encontre Meu Pet
                </h1>
                <nav className="hidden lg:flex items-center space-x-2">
                    <NavLink page="inicio" activePage={activePage} setActivePage={handleNavClick}>Início</NavLink>
                    <NavLink page="perdidos" activePage={activePage} setActivePage={handleNavClick}>Perdidos</NavLink>
                    <NavLink page="adocao" activePage={activePage} setActivePage={handleNavClick}>Adoção</NavLink>
                    <NavLink page="parceiros" activePage={activePage} setActivePage={handleNavClick}>Parceiros</NavLink>
                    <NavLink page="ongs" activePage={activePage} setActivePage={handleNavClick}>ONGs</NavLink>
                </nav>
                <div className="flex items-center gap-4">
                     <button onClick={onLoginClick} className="font-medium text-gray-600 hover:text-orange-600">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
