import { random } from '../helpers/helper';
import { ColumnData } from '../helpers/table';

class BIService {
  getFunnelInThings = () => {
    const names = ['Создание', 'Оформление', 'Продажа'];
    const data = {
      header: 'Воронка продаж',
      type: 'Кол-во сделок, шт',
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
        name: names[i],
        data: random(0, 100)
      };
      funnel.push(layer);
    }
    data.funnel = funnel;
    data.loading = false;
    return data;
  };

  getFunnelInMlns = () => {
    const names = ['Создание', 'Оформление', 'Продажа'];
    const data = {
      header: 'Воронка продаж',
      type: 'Сумма сделок, млн',
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
        name: names[i],
        data: random(0, 100)
      };
      funnel.push(layer);
    }
    data.funnel = funnel;
    data.loading = false;
    return data;
  };

  getTableData = () => {
    let table = {};
    table.data = [
      {
        stage: 'Создание',
        dealsCntInStage: random(30, 400),
        totalInMlns: random(1000, 200000) / 1000,
        chance: `${random(0, 100)},0%`,
        totalWithChanceInMlns: random(10000, 2000000) / 10000
      },
      {
        stage: 'Создание',
        dealsCntInStage: random(30, 400),
        totalInMlns: random(1000, 200000) / 1000,
        chance: `${random(0, 100)},0%`,
        totalWithChanceInMlns: random(10000, 2000000) / 10000
      },
      {
        stage: 'Оформление',
        dealsCntInStage: random(30, 400),
        totalInMlns: random(1000, 200000) / 1000,
        chance: `${random(0, 100)},0%`,
        totalWithChanceInMlns: random(10000, 2000000) / 10000
      },
      {
        stage: 'Оформление',
        dealsCntInStage: random(30, 400),
        totalInMlns: random(1000, 200000) / 1000,
        chance: `${random(0, 100)},0%`,
        totalWithChanceInMlns: random(10000, 2000000) / 10000
      },
      {
        stage: 'Итого',
        dealsCntInStage: random(30, 400),
        totalInMlns: random(1000, 200000) / 1000,
        chance: `${random(0, 100)},0%`,
        totalWithChanceInMlns: random(10000, 2000000) / 10000
      }
    ];

    table.columns = [
      new ColumnData({
        Name: 'stage',
        Display: 'Этап',
        Type: 'label',
        Width: 112
      }),
      new ColumnData({
        Name: 'dealsCntInStage',
        Display: 'Кол-во сделок на этапе',
        Width: 126
      }),
      new ColumnData({
        Name: 'totalInMlns',
        Display: 'Сумма, млн.',
        Width: 121
      }),
      new ColumnData({
        Name: 'chance',
        Display: 'Вероятность, %',
        Width: 125
      }),
      new ColumnData({
        Name: 'totalWithChanceInMlns',
        Display: 'Сумма с учетом вероятности, млн.',
        Width: 165
      })
    ];
    return table;
  };

  getPipeListHeader = () => {
    return {
      title: 'RN03 Список открытых сделок в Pipe',
      values: [
        {
          title: 'Отчетный период',
          labels: [
            { label: 'Год', value: '2019' },
            { label: 'Квартал', value: '4' },
            { label: 'Месяц', value: 'апрель' }
          ]
        },
        {
          title: 'Организационная структура',
          labels: [
            { label: 'УД', value: 'не выбрано' },
            { label: 'Филиал', value: 'не выбрано' },
            { label: 'Региональный офис', value: 'не выбрано' },
            { label: 'ТП', value: 'не выбрано' },
            { label: 'Отдел', value: 'не выбрано' },
            { label: 'Сотудник', value: 'не выбрано' }
          ]
        },
        {
          title: 'Продукт',
          labels: [{ label: 'Продукт', value: 'не выбрано' }]
        }
      ]
    };
  };
}

export default new BIService();
