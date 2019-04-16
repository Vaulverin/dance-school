import CFCategory from '@/models/CFCategory';

export default {
  namespaced: true,
  state: {
    items: [
      new CFCategory(1, 'Абонемент на 8 занятий', 2000),
      new CFCategory(2, 'Абонемент на 4 занятий', 1000),
      new CFCategory(3, 'Индивидуальное занятие 1 час', 1500),
      new CFCategory(4, 'Прочее'),
    ],
    searchText: '',
  },
  getters: {
    getById: (state: any) => (id: number) => {
      return state.items.find((e: CFCategory) => e.id === id);
    },
    categories(state: any) {
      let items = [...state.items];
      if (state.searchText) {
        items = items.filter((e: CFCategory) => e.name.toLowerCase().includes(state.searchText.toLowerCase()));
      }
      return items.sort((a: CFCategory, b: CFCategory) => {
        if (a.name > b.name) { return -1; }
        if (a.name < b.name) { return 1; }
        return 0;
      });
    },
  },
  mutations: {
    add(state: any, items: CFCategory[]) {
      state.items = state.items.concat(items);
    },
    search(state: any, search: string) {
      state.searchText = search;
    },
  },
  actions: {
    load(context: any) {
      return new Promise((resolve, reject) => {
        resolve();
      });
    },
    async create(context: any, item: CFCategory) {
      const items = context.state.items;
      if (items.length === 0) {
        item.id = 1;
      } else {
        item.id = items[items.length - 1].id + 1;
      }
      context.commit('add', [item]);
    },
  },

};
