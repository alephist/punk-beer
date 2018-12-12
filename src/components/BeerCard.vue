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
  padding-top: 15px;
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
