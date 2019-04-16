import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import users from '@/store/modules/users';
import cashFlow from '@/store/modules/cash-flow';
import cfCategories from '@/store/modules/cf-categories';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    viewTitle: '',
    firstViews: ['users.list', 'cash-flow.list'],
    alerts: [],
    notifications: [],
  },
  mutations,
  actions,

  modules: {
    users,
    cashFlow,
    cfCategories,
  },

  strict: debug,

});
