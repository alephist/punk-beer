<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">Punk Beers</h1>
          <h2 class="subtitle has-text-centered">Site for Beer Lovers</h2>
        </div>
      </div>
    </section>

    <Home @onSearchItem="handleSearchItem" :list="filteredBeerList"/>
  </div>
</template>

<script>
import axios from "axios";
import Home from "./components/Home";

export default {
  name: "app",
  components: {
    Home
  },
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
</style>
