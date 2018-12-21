<template>
  <div>
    <SearchBar/>
    <BeerList/>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import BeerList from "./BeerList";

export default {
  name: "Home",
  components: {
    SearchBar,
    BeerList
  }
};
</script>