import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const CreateAlertModal = ({ isOpen, onClose, type, onDataAdded }) => {
    const [imageFile, setImageFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    if (!isOpen) return null;

    const isAdoption = type === 'adoption';
    const title = isAdoption ? "Criar Anúncio de Adoção" : "Criar Alerta de Animal";
    const collectionName = isAdoption ? "adoptionPets" : "lostPets";

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUploading(true);
        const formData = new FormData(e.target);
        
        let imageUrl = `https://placehold.co/400x300/cccccc/FFFFFF?text=${formData.get('pet-name') || 'Novo Pet'}`;

        try {
            if (imageFile) {
                const imageRef = ref(storage, `images/${Date.now()}_${imageFile.name}`);
                await uploadBytes(imageRef, imageFile);
                imageUrl = await getDownloadURL(imageRef);
            }

            const petData = {
                name: formData.get('pet-name') || 'Sem Nome',
                status: isAdoption ? null : formData.get('pet-status'),
                type: formData.get('pet-type') || 'Não informado',
                sex: formData.get('pet-sex') || 'Não informado',
                breed: formData.get('pet-breed') || 'Não informada',
                age: formData.get('pet-age') || 'Não informada',
                color: formData.get('pet-color') || 'Não informada',
                location: 'Goiânia', // Simulado
                setor: 'Setor do Usuário', // Simulado
                image: imageUrl,
                reward: isAdoption ? null : (formData.get('pet-reward') || null),
                description: formData.get('pet-description') || 'Nenhuma descrição fornecida.',
                contact: {
                    phone: formData.get('user-phone') || null,
                    useChat: true,
                },
                createdAt: serverTimestamp()
            };

            await addDoc(collection(db, collectionName), petData);
            alert('Anúncio publicado com sucesso!');
            onDataAdded();
            onClose();
        } catch (error) {
            console.error("Erro ao adicionar documento: ", error);
            alert("Ocorreu um erro ao publicar. Tente novamente.");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="pet-name" type="text" placeholder="Nome do Pet" className="w-full p-3 border rounded-lg" required />
                        {!isAdoption ? (
                        <select name="pet-status" className="w-full p-3 border rounded-lg" required>
                            <option value="">Status*</option>
                            <option value="Perdido">Perdido</option>
                            <option value="Encontrado">Encontrado</option>
                        </select>
                        ) : <div/>}
                     </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <select name="pet-type" className="w-full p-3 border rounded-lg">
                            <option value="">Tipo</option><option value="Cachorro">Cachorro</option><option value="Gato">Gato</option><option disabled>---------</option><option value="Ave">Ave</option><option value="Coelho">Coelho</option><option value="Hamster">Hamster</option><option value="Outro">Outro</option>
                        </select>
                         <select name="pet-sex" className="w-full p-3 border rounded-lg">
                            <option value="">Sexo</option><option value="Macho">Macho</option><option value="Fêmea">Fêmea</option>
                        </select>
                        <div>
                            <input list="racas" name="pet-breed" placeholder="Raça" className="w-full p-3 border rounded-lg" />
                            <datalist id="racas"><option value="Vira-lata (SRD)"></option><option value="Shih Tzu"></option><option value="Yorkshire"></option><option value="Poodle"></option><option value="Golden Retriever"></option><option value="Labrador"></option><option value="Siamês"></option><option value="Persa"></option></datalist>
                        </div>
                        <input name="pet-age" type="text" placeholder="Idade" className="w-full p-3 border rounded-lg" />
                        <input name="pet-color" type="text" placeholder="Cor" className="w-full p-3 border rounded-lg" />
                    </div>
                    <textarea name="pet-description" placeholder="Características e informações adicionais" rows="4" className="w-full p-3 border rounded-lg"></textarea>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Localização</label>
                        <div className="bg-gray-100 p-3 rounded-lg"><p className="text-gray-600 mb-2">Nenhuma localização selecionada.</p><div className="flex gap-2"><button type="button" className="text-sm w-full py-2 px-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">Usar a minha localização atual (GPS)</button><button type="button" className="text-sm w-full py-2 px-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700">Selecionar no Mapa</button></div></div>
                    </div>
                    {!isAdoption && (<input name="pet-reward" type="text" placeholder="Recompensa (Opcional, ex: R$ 100,00)" className="w-full p-3 border rounded-lg" />)}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Foto Principal</label>
                        <input onChange={handleImageChange} type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Informações de Contato</label>
                        <input name="user-phone" type="text" placeholder="O seu Telefone (Opcional)" className="w-full p-3 border rounded-lg" />
                        <p className="text-xs text-gray-500 mt-1">Se não for preenchido, o contato será feito pelo chat seguro da plataforma.</p>
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={onClose} className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300" disabled={isUploading}>Cancelar</button>
                        <button type="submit" className="py-2 px-6 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 disabled:bg-orange-300" disabled={isUploading}>
                            {isUploading ? 'A publicar...' : 'Publicar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAlertModal;
