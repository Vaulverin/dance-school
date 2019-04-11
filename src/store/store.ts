import Vue from 'vue';
import Vuex from 'vuex';
import users from '@/store/modules/users';
import transfers from '@/store/modules/transfers';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    viewTitle: '',
    alerts: [],
    notifications: [],
  },
  mutations: {
    setViewTitle(state: any, title: string) {
      state.viewTitle = title;
    },
    addAlert(state: any, alert: any) {
      state.alerts.push(alert);
    },
    shiftAlert(state: any) {
      state.alerts.shift();
    },
    addSuccessAlert(state: any, text: string) {
      state.alerts.push({
        type: 'success',
        dismissible: true,
        text,
      });
    },
    addNotification(state: any, text: string) {
      state.notifications.push({
        y: 'bottom',
        text,
        timeout: 1000,
      });
    },
    shiftNotification(state: any) {
      state.notifications.shift();
    },
  },
  actions: {},

  modules: {
    users,
    transfers,
  },

  strict: debug,

});
