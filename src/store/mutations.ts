const mutations = {
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
};
export default mutations;
