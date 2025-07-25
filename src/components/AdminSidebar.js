import React from 'react';

const AdminSidebar = ({ activeManager, setActiveManager }) => {
    const NavButton = ({ manager, children }) => (
        <button
            onClick={() => setActiveManager(manager)}
            className={`w-full text-left p-3 rounded-lg transition-colors ${activeManager === manager ? 'bg-orange-500 text-white' : 'hover:bg-gray-200'}`}
        >
            {children}
        </button>
    );

    return (
        <aside className="w-full lg:w-1/4 xl:w-1/5 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Painel de Gestão</h2>
            <nav className="space-y-2">
                <NavButton manager="partners">Gerir Parceiros</NavButton>
                <NavButton manager="ongs">Gerir ONGs</NavButton>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
