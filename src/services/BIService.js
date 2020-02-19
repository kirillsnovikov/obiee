import { random, randomRGB } from '../helpers/helper';
import { ColumnData } from '../helpers/table';

class BIService {
  getCards = () => {
    let res = [];
    let titles = [
      'Прирост портфеля под управлением',
      'Прирост портфеля активных клиентов',
      'Комиссионный доход'
    ];
    let actionNames = ['moredetails', 'moredetails', 'moredetails'];
    for (let i = 0; i < 3; i++) {
      let card = {
        id: i + 1,
        actionName: actionNames[i],
        title: titles[i],
        pct: random(0, 100),
        plan: random(40, 60),
        fact: random(70, 100),
        pipe: random(5, 30),
        confirm: random(5, 20)
      };
      res.push(card);
    }
    return res;
  };

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
    table.config = {
      row: {
        nowrap: true
      }
    };
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
      actionName: 'backToPipeList',
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

  getPipeListTable = () => {
    let table = {};
    table.config = {
      row: {
        nowrap: false
      }
    };
    table.data = [
      {
        tp: 'ДО "Алтайский"',
        employee: 'Кузнецов Алексей Петрович',
        stage: 'Создание',
        clientId: '1-BACUFP',
        nameOfPotentialClient: 'Пискарев Виктор Петрович',
        product: 'Пакет услуг Прайм',
        planingClosingDate: '27.12.2018',
        totalEquivRbl: '10.00'
      },
      {
        tp: 'ДО "Тульской" в г.Москва',
        employee: 'Молянов Владимир Алексеевич',
        stage: 'Создание',
        clientId: '1-BACUFP',
        nameOfPotentialClient: 'Некулов Олег Игоревич',
        product: 'ВТБ страхование жизни/согаз',
        planingClosingDate: '27.12.2018',
        totalEquivRbl: '10.00'
      },
      {
        tp: 'ДО "Алтайский"',
        employee: 'Акулов Геннадий Полякович',
        stage: 'Создание',
        clientId: '1-BACUFP',
        nameOfPotentialClient: 'Петров Константин Сергеевич',
        product: 'Пакет услуг Прайм',
        planingClosingDate: '27.12.2018',
        totalEquivRbl: '10.00'
      },
      {
        tp: 'ДО "Тульской" в г.Москва',
        employee: 'Акулов Геннадий Полякович',
        stage: 'Создание',
        clientId: '1-BACUFP',
        nameOfPotentialClient: 'Петров Константин Сергеевич',
        product: 'ВТБ страхование жизни/согаз',
        planingClosingDate: '27.12.2018',
        totalEquivRbl: '10.00'
      },
      {
        tp: 'ДО "Алтайский"',
        employee: 'Акулов Геннадий Полякович',
        stage: 'Создание',
        clientId: '1-BACUFP',
        nameOfPotentialClient: 'Петров Константин Сергеевич',
        product: 'Пакет услуг Прайм',
        planingClosingDate: '27.12.2018',
        totalEquivRbl: '10.00'
      },
      {
        tp: 'ДО "Тульской" в г.Москва',
        employee: 'Акулов Геннадий Полякович',
        stage: 'Создание',
        clientId: '1-BACUFP',
        nameOfPotentialClient: 'Петров Константин Сергеевич',
        product: 'ВТБ страхование жизни/согаз',
        planingClosingDate: '27.12.2018',
        totalEquivRbl: '10.00'
      },
      {
        tp: 'ДО "Алтайский"',
        employee: 'Акулов Геннадий Полякович',
        stage: 'Создание',
        clientId: '1-BACUFP',
        nameOfPotentialClient: 'Петров Константин Сергеевич',
        product: 'Пакет услуг Прайм',
        planingClosingDate: '27.12.2018',
        totalEquivRbl: '10.00'
      },
      {
        tp: 'ДО "Тульской" в г.Москва',
        employee: 'Акулов Геннадий Полякович',
        stage: 'Создание',
        clientId: '1-BACUFP',
        nameOfPotentialClient: 'Петров Константин Сергеевич',
        product: 'ВТБ страхование жизни/согаз',
        planingClosingDate: '27.12.2018',
        totalEquivRbl: '10.00'
      },
      {
        tp: 'ДО "Алтайский"',
        employee: 'Акулов Геннадий Полякович',
        stage: 'Создание',
        clientId: '1-BACUFP',
        nameOfPotentialClient: 'Петров Константин Сергеевич',
        product: 'Пакет услуг Прайм',
        planingClosingDate: '27.12.2018',
        totalEquivRbl: '10.00'
      }
    ];

    table.columns = [
      new ColumnData({
        Name: 'tp',
        Display: 'ТП',
        Type: 'label',
        Width: 70
      }),
      new ColumnData({
        Name: 'employee',
        Display: 'Сотрудник',
        Width: 126
      }),
      new ColumnData({
        Name: 'stage',
        Display: 'Этап',
        Width: 70
      }),
      new ColumnData({
        Name: 'clientId',
        Display: 'ID клиента',
        Width: 80
      }),
      new ColumnData({
        Name: 'nameOfPotentialClient',
        Display: 'ФИО потенциального клиента',
        Width: 126
      }),
      new ColumnData({
        Name: 'product',
        Display: 'Продукт',
        Width: 121
      }),
      new ColumnData({
        Name: 'planingClosingDate',
        Display: 'Дата закрытия плановая',
        Width: 100
      }),
      new ColumnData({
        Name: 'totalEquivRbl',
        Display: 'Сумма экв.,руб.',
        Width: 50
      })
    ];
    return table;
  };

  getPipeListChart = () => {
    return {
      title: 'Факт, млн.руб',
      type: 'vertical',
      pie: [
        {
          title: {
            label: 'Продукт',
            value: 'ВТБ Страхование жизни/Согаз'
          },
          data: {
            label: 'сумма экв.руб.',
            value: random(0, 300)
          },
          color: randomRGB()
        },
        {
          title: {
            label: 'Продукт',
            value: 'ВТБ Страхование жизни/Согаз'
          },
          data: {
            label: 'сумма экв.руб.',
            value: random(0, 300)
          },
          color: randomRGB()
        },
        {
          title: {
            label: 'Продукт',
            value: 'ВТБ Страхование жизни/Согаз'
          },
          data: {
            label: 'сумма экв.руб.',
            value: random(0, 300)
          },
          color: randomRGB()
        },
        {
          title: {
            label: 'Продукт',
            value: 'ВТБ Страхование жизни/Согаз'
          },
          data: {
            label: 'сумма экв.руб.',
            value: random(0, 300)
          },
          color: randomRGB()
        },
        {
          title: {
            label: 'Продукт',
            value: 'Брокерское обслуживание (ВТБ капитал Брокер)'
          },
          data: {
            label: 'сумма экв.руб.',
            value: random(0, 300)
          },
          color: randomRGB()
        }
      ]
    };
  };
}

export default new BIService();
