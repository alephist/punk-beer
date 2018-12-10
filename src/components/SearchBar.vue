<template>
  <section class="section">
    <div class="container">
      <div class="field">
        <div class="control">
          <input
            type="text"
            class="input"
            placeholder="Search for beer"
            @input="searchItem"
            v-model="searchQuery"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    searchItem() {
      this.$emit("onSearchItem", this.searchQuery);
    }
  }
};
</script>

<style>
</style>
