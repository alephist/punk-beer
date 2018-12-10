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

    <SearchBar @onSearchItem="handleSearchItem"/>
  </div>
</template>

<script>
import axios from "axios/dist/axios.min.js";
import SearchBar from "./components/SearchBar";

export default {
  name: "app",
  components: {
    SearchBar
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
        .get("https://api.punkapi.com/v2/beers")
        .then(response => (this.beerList = response.data))
        .catch(error => alert(error.message));
    },
    handleSearchItem(query) {
      this.searchQuery = query;
    }
  },
  created() {
    this.getBeerData();
  }
};
</script>

<style>
</style>
