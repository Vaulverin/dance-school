import Vue from 'vue';
import Vuex from 'vuex';
import users from '@/store/modules/users';
import transfers from '@/store/modules/transfers';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    viewTitle: '',
    firstViews: ['users.list', 'transfers.list'],
    alerts: [],
    notifications: [],
  },
  mutations,
  actions,

  modules: {
    users,
    transfers,
  },

  strict: debug,

});
