/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    parts: null,
    sidebar: true,
    unsavedRobot: false,
    robot: {
      head: 0,
      leftArm: 0,
      rightArm: 0,
      base: 0,
      torso: 0,
    },
  },
  mutations: {
    savedRobotState(state, isSaved) {
      state.unsavedRobot = !isSaved;
    },
    addToCart(state, payload) {
      state.cart.push(Object.assign({}, payload.robot, { cost: payload.cost }));
    },
    updateRobot(state, payload) {
      console.log(payload);
      state.robot[payload.name] = payload.partId;
      state.unsavedRobot = true;
    },
    setSidebarState(state, isVisible) {
      state.sidebar = isVisible;
    },
    updateParts(state, parts) {
      state.parts = parts;
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
    robot(state) {
      const { robot, parts } = state;
      return {
        head: parts.heads[robot.head],
        base: parts.bases[robot.base],
        torso: parts.torsos[robot.torso],
        leftArm: parts.arms[robot.leftArm],
        rightArm: parts.arms[robot.rightArm],
      };
    },
  },
  actions: {
    updateParts({ commit }) {
      axios.get('http://127.0.0.1:8081/api/parts').then(res => commit('updateParts', res.data)).catch(console.error());
    },
    resetRobot({ commit }) {
      commit('updateRobot', { name: 'head', part: 0 });
      commit('updateRobot', { name: 'base', part: 0 });
      commit('updateRobot', { name: 'torso', part: 0 });
      commit('updateRobot', { name: 'leftArm', part: 0 });
      commit('updateRobot', { name: 'rightArm', part: 0 });
      commit('savedRobotState', true);
    },
    saveRobot({ commit, getters, dispatch }) {
      const { robot } = getters;
      const cost = robot.head.cost
        + robot.leftArm.cost
        + robot.rightArm.cost
        + robot.base.cost
        + robot.torso.cost;
      commit('addToCart', { robot, cost });
      dispatch('resetRobot');
    },
  },
});
