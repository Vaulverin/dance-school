import Transfer from '@/models/Transfer';

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    getById: (state: any) => (id: number) => {
      return state.items.find((e: Transfer) => e.id === id);
    },
    payments(state: any) {
      return [...state.items];
    },
  },
  mutations: {
    add(state: any, items: Transfer[]) {
      state.items = state.items.concat(items);
    },
  },
  actions: {
    load(context: any) {
      return new Promise((resolve, reject) => {
        resolve();
      });
    },
    async create(context: any, item: Transfer) {
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
