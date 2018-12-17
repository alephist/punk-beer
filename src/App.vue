<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <router-link tag="h1" :to="{ name: 'Home' }" class="title has-text-centered">Punk Beers</router-link>
          <h2 class="subtitle has-text-centered">Site for Beer Lovers</h2>
        </div>
      </div>
    </section>

    <router-view @onSearchItem="handleSearchItem" :list="filteredBeerList"></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      searchQuery: "",
      beerList: []
    };
  },
  methods: {
    getBeerData() {
      axios
        .get("https://api.punkapi.com/v2/beers?per_page=30")
        .then(response => (this.beerList = response.data))
        .catch(error => alert(error.message));
    },
    handleSearchItem(query) {
      this.searchQuery = query;
    }
  },
  created() {
    this.getBeerData();
  },
  computed: {
    filteredBeerList() {
      return this.beerList.filter(
        beer =>
          beer.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
      );
    }
  }
};
</script>

<style>
h1 {
  cursor: pointer;
}
</style>
