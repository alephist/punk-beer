import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchQuery: '',
    beerList: []
  },
  mutations: {
    handleSearchItem(state, payload) {
      state.searchQuery = payload;
    },
    setBeerList(state, payload) {
      state.beerList = payload;
    }
  },
  actions: {
    getBeerData({ commit }) {
      axios
        .get('https://api.punkapi.com/v2/beers?per_page=30')
        .then((response) => response.data)
        .then((list) => commit('setBeerList', list))
        .catch((error) => alert(error.message));
    }
  },
  getters: {
    filteredBeerList(state) {
      return state.beerList.filter((beer) => beer.name.toLowerCase().indexOf(state.searchQuery.toLowerCase()) > -1);
    }
  }
});
