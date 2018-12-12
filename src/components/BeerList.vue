<template>
  <section class="section" v-if="list.length">
    <div class="container">
      <div class="columns">
        <BeerCard v-for="item in list" :key="item.id" :item="item"/>
      </div>
    </div>
  </section>
</template>

<script>
import BeerCard from "./BeerCard";

export default {
  name: "BeerList",
  props: {
    list: Array
  },
  components: {
    BeerCard
  }
};
</script>

<style scoped>
div.columns {
  flex-wrap: wrap;
}
</style>
