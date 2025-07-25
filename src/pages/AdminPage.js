import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

import AdminSidebar from '../components/AdminSidebar';
import PartnerManager from '../components/PartnerManager';
import OngManager from '../components/OngManager';
import AdminFormModal from '../components/AdminFormModal';

const AdminPage = ({ partners, ongs, refreshData }) => {
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

    const handleDelete = async (type, id) => {
        if (window.confirm('Tem a certeza de que deseja remover este item?')) {
            const collectionName = type === 'partner' ? 'partners' : 'ongs';
            try {
                await deleteDoc(doc(db, collectionName, id));
                alert('Item removido com sucesso!');
                refreshData();
            } catch (error) {
                console.error("Erro ao remover documento: ", error);
                alert('Ocorreu um erro ao remover o item.');
            }
        }
    };

    const handleSave = async (type, data) => {
        const collectionName = type === 'partner' ? 'partners' : 'ongs';
        try {
            if (data.id) { // Editar
                const docRef = doc(db, collectionName, data.id);
                const { id, ...dataToUpdate } = data; // Remove o id do objeto
                await updateDoc(docRef, dataToUpdate);
                alert('Item atualizado com sucesso!');
            } else { // Adicionar
                await addDoc(collection(db, collectionName), data);
                alert('Item adicionado com sucesso!');
            }
            refreshData();
            setFormOpen(false);
        } catch (error) {
            console.error("Erro ao guardar documento: ", error);
            alert('Ocorreu um erro ao guardar o item.');
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
