import { menu } from '../menu.js';
import { storage } from '../storage.js';
//import { neighborhoods } from './neighborhoods.js';

export const stageOne = {
  exec({ from, message, client }) {
    if (message === '1') {
      let msg = 'ð¨  SERVIÃOS  ð¨\n\n';

      Object.keys(menu).map((value) => {
        const element = menu[value];
        if (value === '1') {
          msg += `1ï¸â£ - _${element.description}_ \n`;
        } else if (value === '2') {
          msg += `2ï¸â£ - _${element.description}_ \n`;
        } else if (value === '3') {
          msg += `3ï¸â£ - _${element.description}_ \n`;
        } else if (value === '4') {
          msg += `4ï¸â£ - _${element.description}_ \n`;
        } else if (value === '5') {
          msg += `5ï¸â£ - _${element.description}_ \n`;          
        } else if (value === '6') {
          msg += `6ï¸â£ - _${element.description}_ \n`;
        } else if (value === '7') {
          msg += `7ï¸â£ - _${element.description}_ \n`;
        } else if (value === '8') {
          msg += `8ï¸â£ - _${element.description}_ \n`;
        } else if (value === '9') {
          msg += `9ï¸â£ - _${element.description}_ \n`;
        } else if (value === '10') {
          msg += `ð - _${element.description}_ \n`;
        } else if (value === '11') {
          msg += `1ï¸â£1ï¸â£ - _${element.description}_ \n`;
        } else if (value === '12') {
          msg += `1ï¸â£2ï¸â£ - _${element.description}_ \n`;
        } else if (value === '13') {
          msg += `1ï¸â£3ï¸â£ - _${element.description}_ \n`;
        }
      });

      msg +=
        '\nPara mais info, *acesse o nosso instagram*: @pro.tecnologia \n\nâ ï¸ ```APENAS UMA OPÃÃO POR VEZ``` â ï¸\n*Digite OPÃÃO referente ao produto ao qual deseja pedir:*';
      storage[from].stage = 2;

      return msg;
    } /* else if (message === '2') {
      return (
        '\nâââââââââââââââââââââ\n1ï¸â£ - ```FAZER PEDIDO``` \n0ï¸â£ - ```FALAR COM ATENDENTE```\n\n' +
        neighborhoods +
        '\nâââââââââââââââââââââ\n1ï¸â£ - ```FAZER PEDIDO``` \n0ï¸â£ - ```FALAR COM ATENDENTE``` '
      );
    } */ else if (message === '0') {
      client.markUnseenMessage(from);

      storage[from].stage = 5;

      return 'ð Encaminhando vocÃª para um atendente. \nâ³ *Aguarde um instante*.';
    }

    return 'â *Digite uma opÃ§Ã£o vÃ¡lida, por favor.* \nâ ï¸ ```APENAS UMA OPÃÃO POR VEZ``` â ï¸';
  },
};
