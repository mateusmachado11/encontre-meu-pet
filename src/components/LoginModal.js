import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full" onClick={e => e.stopPropagation()}>
                <h2 className="text-2xl font-bold mb-6 text-center">Acesse sua Conta</h2>
                
                <div className="space-y-4">
                    <input type="email" placeholder="Seu e-mail" className="w-full p-3 border rounded-lg" />
                    <input type="password" placeholder="Sua senha" className="w-full p-3 border rounded-lg" />
                </div>

                <button className="w-full mt-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600">
                    Entrar
                </button>

                <div className="my-4 flex items-center">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="px-2 text-gray-500">ou</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

                <div className="space-y-3">
                    <button className="w-full py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100">
                        {/* Placeholder para o ícone do Google */}
                        <span className="w-5 h-5 bg-red-500 rounded-full"></span> Entrar com Google
                    </button>
                    <button className="w-full py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100">
                         {/* Placeholder para o ícone do Facebook */}
                        <span className="w-5 h-5 bg-blue-600 rounded-full"></span> Entrar com Facebook
                    </button>
                </div>

                <p className="text-center text-sm mt-6">
                    Não tem uma conta? <a href="#" className="font-semibold text-orange-600">Cadastre-se</a>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;