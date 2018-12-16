<template>
  <div>
    <SearchBar @onSearchItem="searchItem"/>
    <BeerList :list="list"/>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import BeerList from "./BeerList";

export default {
  name: "Home",
  props: {
    list: Array
  },
  components: {
    SearchBar,
    BeerList
  },
  methods: {
    searchItem(query) {
      this.$emit("onSearchItem", query);
    }
  }
};
</script>