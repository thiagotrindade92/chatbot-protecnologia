import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '👋 Olá, como vai? \n Eu sou _Ragna_, o assistente virtual da _*PROTECNOLOGIA*_ 🤖 . \nComo Posso te ajudar? \n ━━━━━━━━━━━━━━━━━━━━━━━ \n1️⃣ - ```SERVIÇOS``` \n0️⃣ - ```FALAR COM ATENDENTE```';
  },
};