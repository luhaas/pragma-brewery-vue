/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const beersArray = [
  {
    id: 1,
    name: 'Pilsner',
    range: {
      start: -4,
      end: 6,
    },
  },
  {
    id: 2,
    name: 'IPA',
    range: {
      start: -5,
      end: 6,
    },
  },
  {
    id: 3,
    name: 'Lager',
    range: {
      start: -4,
      end: 7,
    },
  },
  {
    id: 4,
    name: 'Stout',
    range: {
      start: -6,
      end: 8,
    },
  },
  {
    id: 5,
    name: 'Wheat Beer',
    range: {
      start: -3,
      end: 5,
    },
  },
  {
    id: 6,
    name: 'Pale Ale',
    range: {
      start: -4,
      end: 6,
    },
  },
];

export default new Vuex.Store({
  state: {
    containers: [],
    beers: beersArray,
    totalContainers: 0,
  },
  mutations: {
    ADD_CONTAINER(state, { beer, quantity }) {
      state.containers.push({
        id: state.containers.length + 1,
        beer,
        quantity,
        temperature: 0,
      });
    },
    UPDATE_CONTAINER_TEMPERATURE(state, { id, temperature }) {
      state.containers[(id - 1)].temperature = temperature;
    },
    REMOVE_CONTAINER(state, id) {
      state.containers.splice((id - 1), 1);
    },
  },
  actions: {
    addContainer({ commit }, { beer, quantity }) {
      commit('ADD_CONTAINER', { beer, quantity });
    },
    removeContainer({ commit }, id) {
      commit('REMOVE_CONTAINER', id);
    },
    setTemperature({ commit }, { id, temperature }) {
      commit('UPDATE_CONTAINER_TEMPERATURE', { id, temperature });
    },
  },
});
