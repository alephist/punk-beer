<template>
  <section class="section" >
    <div class="container">
      <div class="columns" v-if="list.length">
        <BeerCard v-for="item in list" :key="item.id" :item="item"/>
      </div>

      <div class="notification is-danger has-text-centered" v-else>
        List has not been successfully loaded.
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
