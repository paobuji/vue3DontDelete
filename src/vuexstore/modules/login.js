export default {
  state: {
    name: 'chp',
  },
  getters: {
    name: (state) => state.name,
  },
  mutations: {
    SET_NAME(state) {
      if (state.name == 'chp') {
        state.name = 'syy';
      } else {
        state.name = 'chp';
      }
    },
  },
  actions: {
    setname({ commit }, par) {
      return new Promise((resolve) => {
        commit('SET_NAME', par);
        resolve();
      });
    },
  },
};
