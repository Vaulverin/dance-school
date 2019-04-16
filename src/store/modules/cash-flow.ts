import CashFlowActivity from '@/models/CashFlowActivity';

export default {
  namespaced: true,
  state: {
    items: [
      new CashFlowActivity(1, Date.now(), 1, 2000, 'абонемент на 8'),
      new CashFlowActivity(2, Date.now(), 1, 10, 'Донат'),
      new CashFlowActivity(3, Date.now(), 1, -200, 'Чаёк с печенками'),
      new CashFlowActivity(4, Date.now(), 1, 1000, 'абонемент на 4'),
    ],
  },
  getters: {
    getById: (state: any) => (id: number) => {
      return state.items.find((e: CashFlowActivity) => e.id === id);
    },
    cashFlow(state: any) {
      const items = [...state.items];
      return items.sort((a: CashFlowActivity, b: CashFlowActivity) => {
        if (a.timestamp > b.timestamp) { return -1; }
        if (a.timestamp < b.timestamp) { return 1; }
        return 0;
      });
    },
  },
  mutations: {
    add(state: any, items: CashFlowActivity[]) {
      state.items = state.items.concat(items);
    },
  },
  actions: {
    load(context: any) {
      return new Promise((resolve, reject) => {
        resolve();
      });
    },
    async create(context: any, item: CashFlowActivity) {
      const payments = context.state.items;
      if (payments.length === 0) {
        item.id = 1;
      } else {
        item.id = payments[payments.length - 1].id + 1;
      }
      context.commit('add', [item]);
    },
  },

};
