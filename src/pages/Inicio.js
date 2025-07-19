import React from 'react';
import AdBanner from '../components/AdBanner';

const Inicio = () => (
    <div>
        <h2 className="text-3xl font-bold text-center mb-6">Painel de Controle</h2>
        <p className="text-center text-gray-600">Gráficos e estatísticas sobre o impacto da plataforma aparecerão aqui.</p>
        <AdBanner id="Principal" />
    </div>
);

export default Inicio;
