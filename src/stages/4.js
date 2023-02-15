import { storage } from '../storage.js';

export const stageFour = {
  exec({ from, message }) {
    const address = storage[from].address;
    const phone = from.split('@');

    storage[from].stage = 5;
    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });
    //const total = storage[from].itens.length;

    return ` 📌 *RESUMO DO PEDIDO* 📌 \n\n📞 Cliente: +${
      phone[0]
    } \n🛠️ Serviço: *${desserts}* \n👨 Nome: *${address}* \n📝 Detalhes: *${message}*\n✅ *Prontinho, pedido concluido!* \n\n\n⏳ *Aguarde um instante para agendar uma visista ou entrar em contato*.`;
    
  },
    
};
