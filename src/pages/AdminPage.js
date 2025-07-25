import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import PartnerManager from '../components/PartnerManager';
import OngManager from '../components/OngManager';
import AdminFormModal from '../components/AdminFormModal';

const AdminPage = ({ partners, setPartners, ongs, setNgos }) => {
    const [activeManager, setActiveManager] = useState('partners');
    const [isFormOpen, setFormOpen] = useState(false);
    const [editingData, setEditingData] = useState(null);
    const [formType, setFormType] = useState('partner');

    const handleAdd = (type) => {
        setFormType(type);
        setEditingData(null);
        setFormOpen(true);
    };

    const handleEdit = (type, data) => {
        setFormType(type);
        setEditingData(data);
        setFormOpen(true);
    };

    const handleDelete = (type, id) => {
        if (window.confirm('Tem a certeza de que deseja remover este item?')) {
            if (type === 'partner') {
                setPartners(current => current.filter(p => p.id !== id));
            } else {
                setNgos(current => current.filter(o => o.id !== id));
            }
        }
    };

    const handleSave = (type, data) => {
        if (type === 'partner') {
            if (data.id) { // Edit
                setPartners(current => current.map(p => p.id === data.id ? data : p));
            } else { // Add
                setPartners(current => [{ ...data, id: Date.now() }, ...current]);
            }
        } else { // ONG
             if (data.id) { // Edit
                setNgos(current => current.map(o => o.id === data.id ? data : o));
            } else { // Add
                setNgos(current => [{ ...data, id: Date.now() }, ...current]);
            }
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <AdminSidebar activeManager={activeManager} setActiveManager={setActiveManager} />
            <div className="flex-grow">
                {activeManager === 'partners' && (
                    <PartnerManager partners={partners} onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />
                )}
                 {activeManager === 'ongs' && (
                    <OngManager ongs={ongs} onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />
                )}
            </div>
            <AdminFormModal 
                isOpen={isFormOpen}
                onClose={() => setFormOpen(false)}
                type={formType}
                data={editingData}
                onSave={handleSave}
            />
        </div>
    );
};

export default AdminPage;
