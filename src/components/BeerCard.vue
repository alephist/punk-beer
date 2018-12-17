<template>
  <div class="column is-4">
    <div class="card">
      <div class="card-image">
        <figure class="image is-128x128">
          <img :src="item.image_url" :alt="item.name">
        </figure>
      </div>

      <div class="card-content">
        <p class="has-text-centered has-text-weight-semibold">{{ item.name }}</p>
      </div>

      <footer class="card-footer">
        <router-link
          :to="{ name: 'BeerDetail', params: { id: item.id } }"
          class="card-footer-item"
        >Details</router-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeerCard",
  props: ["item"]
};
</script>

<style scoped>
.card-image {
  padding-top: 0.9375rem;
}

.image img {
  width: auto;
  height: 100%;
}

.image,
img {
  margin: auto;
}
</style>
