import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// A SUA CONFIGURAÇÃO DO FIREBASE QUE VOCÊ ENVIOU
const firebaseConfig = {
  apiKey: "AIzaSyC7oNbduNKEu4jFX28AQ9b061oC-BfoUd0",
  authDomain: "encontre-meu-pet.firebaseapp.com",
  projectId: "encontre-meu-pet",
  storageBucket: "encontre-meu-pet.firebasestorage.app",
  messagingSenderId: "764246977121",
  appId: "1:764246977121:web:965fbceb428d622778d820"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços que vamos usar na plataforma
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
