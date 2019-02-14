import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
  getters: {
    salesItems(state) {
      return state.cart.filter(item => item.head.onSale
                              || item.base.onSale
                              || item.leftArm.onSale
                              || item.rightArm.onSale
                              || item.torso.onSale);
    },
  },
});
