import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return 'π OlΓ‘, como vai? \n Eu sou _Ragna_, o assistente virtual da _*PROTECNOLOGIA*_ π€ . \nComo Posso te ajudar? \n βββββββββββββββββββββββ \n1οΈβ£ - ```SERVIΓOS``` \n0οΈβ£ - ```FALAR COM ATENDENTE```';
  },
};