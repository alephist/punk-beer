<template>
  <section class="section">
    <div class="container">
      <div class="columns" v-if="filteredBeerList.length">
        <BeerCard v-for="item in filteredBeerList" :key="item.id" :item="item"/>
      </div>

      <div
        class="notification is-danger has-text-centered"
        v-else
      >List has not been successfully loaded.</div>
    </div>
  </section>
</template>

<script>
import BeerCard from "./BeerCard";

export default {
  name: "BeerList",
  components: {
    BeerCard
  },
  computed: {
    filteredBeerList() {
      return this.$store.getters.filteredBeerList;
    }
  },
  created() {
    this.$store.dispatch("getBeerData");
  }
};
</script>

<style scoped>
div.columns {
  flex-wrap: wrap;
}
</style>
