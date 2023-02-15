import { storage } from '../storage.js';

export const stageThree = {
  async exec({ from, message, client }) {
    storage[from].address = message;
    storage[from].stage = 4;

    if (message === '*') {
      storage[from].stage = 0;
      return 'Pedido *CANCELADO* com sucesso. \n Volte Sempre!';
    }

    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });
    const total = storage[from].itens.length;

    await client.sendText(
      message.from,
      `🗒️ *RESUMO DO PEDIDO*: \n\n🧁 Serviço: *${desserts}* \n📍 Nome: *${message}* \n\n` +
        '🔊 ```Agora, informe a forma de pagamento e se vai precisar de troco, por gentileza.```'
    );

    return '✅ *Prontinho, pedido feito!* \n\nAgora, se você ainda não sabe o valor da taxa de entrega para sua região, vou te passar para um atendente para que ele verique o valor da *taxa de entrega*. \n\n⏳ *Aguarde um instante*.';
  },
};
