import { random } from '../helpers/helper';

class BIService {
  getFunnelInThings = () => {
    const data = {
      header: 'Воронка продаж',
      types: ['Кол-во сделок, шт', 'Сумма сделок, млн'],
      body: {
        title: 'Уровень конверсии',
        data: [
          {
            label: 'за предыдущий квартал',
            value: '0.0%'
          },
          {
            label: 'за 4 предыдущиx квартала',
            value: '5,6%'
          }
        ]
      }
    };
    let funnel = [];
    for (let i = 0; i < 3; i++) {
      let layer = {
        order: i + 1,
        name: `NAME_${i + 1}`,
        data: random(0, 100)
      };
      funnel.push(layer);
    }
    data.funnel = funnel;
    data.loading = false;
    return data;
  };

  getFunnelInMlns = () => {
    const data = {
      header: 'Воронка продаж',
      types: ['Кол-во сделок, шт', 'Сумма сделок, млн'],
      body: {
        title: 'Уровень конверсии',
        data: [
          {
            label: 'за предыдущий квартал',
            value: '0.0%'
          },
          {
            label: 'за 4 предыдущиx квартала',
            value: '5,6%'
          }
        ]
      }
    };
    let funnel = [];
    for (let i = 0; i < 3; i++) {
      let layer = {
        order: i + 1,
        name: `NAME_MLNS${i + 1}`,
        data: random(0, 100)
      };
      funnel.push(layer);
    }
    data.funnel = funnel;
    data.loading = false;
    return data;
  };
}

export default new BIService();
