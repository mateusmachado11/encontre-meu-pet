import React from 'react';

const NavLink = ({ page, activePage, setActivePage, children }) => (
    <button
        onClick={() => setActivePage(page)}
        className={`p-2 border-b-2 font-medium transition-colors
            ${activePage === page ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-600 hover:text-orange-600'}
        `}
    >
        {children}
    </button>
);

export default NavLink;