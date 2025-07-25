import React, { useState, useEffect } from 'react';

const AdminFormModal = ({ isOpen, onClose, type, data, onSave }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        // Preenche o formulário com os dados existentes ao editar
        if (data) {
            setFormData(data);
        } else {
            setFormData({}); // Limpa o formulário ao adicionar um novo
        }
    }, [data, isOpen]);

    if (!isOpen) return null;

    const isPartner = type === 'partner';
    const title = data ? `Editar ${isPartner ? 'Parceiro' : 'ONG'}` : `Adicionar Novo ${isPartner ? 'Parceiro' : 'ONG'}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(type, formData);
        onClose();
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const partnerFields = () => (
        <>
            <input name="name" value={formData.name || ''} onChange={handleChange} placeholder="Nome da Empresa" className="w-full p-3 border rounded-lg" required />
            <input name="logo" value={formData.logo || ''} onChange={handleChange} placeholder="URL da Logomarca" className="w-full p-3 border rounded-lg" />
            <select name="category" value={formData.category || ''} onChange={handleChange} className="w-full p-3 border rounded-lg">
                <option value="">Selecione a Categoria</option>
                <option value="Petshop">Petshop</option>
                <option value="Veterinário">Veterinário</option>
                <option value="Adestrador">Adestrador</option>
                <option value="Hospedagem">Hospedagem</option>
                <option value="Fotografia">Fotografia</option>
            </select>
            <input name="title" value={formData.title || ''} onChange={handleChange} placeholder="Título da Promoção" className="w-full p-3 border rounded-lg" />
            <textarea name="description" value={formData.description || ''} onChange={handleChange} placeholder="Descrição Detalhada" rows="3" className="w-full p-3 border rounded-lg"></textarea>
            <input name="coupon" value={formData.coupon || ''} onChange={handleChange} placeholder="Código do Cupom" className="w-full p-3 border rounded-lg" />
            <input name="link" value={formData.link || ''} onChange={handleChange} placeholder="Link do Parceiro" className="w-full p-3 border rounded-lg" />
        </>
    );

    const ongFields = () => (
        <>
            <input name="name" value={formData.name || ''} onChange={handleChange} placeholder="Nome da ONG" className="w-full p-3 border rounded-lg" required />
            <input name="logo" value={formData.logo || ''} onChange={handleChange} placeholder="URL da Logomarca" className="w-full p-3 border rounded-lg" />
            <input name="location" value={formData.location || ''} onChange={handleChange} placeholder="Localização (Cidade, UF)" className="w-full p-3 border rounded-lg" />
            <textarea name="description" value={formData.description || ''} onChange={handleChange} placeholder="Descrição da Missão" rows="4" className="w-full p-3 border rounded-lg"></textarea>
            <input name="link" value={formData.link || ''} onChange={handleChange} placeholder="Link do Site da ONG" className="w-full p-3 border rounded-lg" />
        </>
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {isPartner ? partnerFields() : ongFields()}
                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={onClose} className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300">Cancelar</button>
                        <button type="submit" className="py-2 px-6 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminFormModal;
