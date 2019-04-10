import User from '@/models/User';

export default {
  namespaced: true,
  state: {
    items: [],
    searchText: '',
  },
  getters: {
    getById: (state: any) => (id: number) => {
      return state.items.find((e: User) => e.id === id);
    },
    users(state: any) {
      let items = [...state.items];
      if (state.searchText) {
        items = items.filter((e: User) => e.name.toLowerCase().includes(state.searchText.toLowerCase()));
      }
      return items;
    },
  },
  mutations: {
    add(state: any, users: User[]) {
      state.items = state.items.concat(users);
    },
    search(state: any, search: string) {
      state.searchText = search;
    },
  },
  actions: {
    load(context: any) {
      return new Promise((resolve, reject) => {
        const users = [
          new User(1, 'Ксения', 'Рычкова', '', ''),
          new User(2, 'Сергей', 'Толкачев', '', ''),
          new User(3, 'Ангелина', '', '', ''),
          new User(4, 'Оля', '', '', ''),
        ];
        context.commit('add', users);
        resolve(context.state.items);
      });
    },
    async create(context: any, user: User) {
      let users = context.state.items;
      if (users.length === 0) {
        users = await context.dispatch('load');
      }
      user.id = users[users.length - 1].id + 1;
      context.commit('add', [user]);
    },
  },

};
