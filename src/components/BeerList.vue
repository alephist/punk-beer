<template>
  <section class="section" v-if="list.length">
    <div class="container">
      <div class="columns">
        <div class="column is-4" v-for="item in list" :key="item.id">
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BeerList",
  props: {
    list: Array
  }
};
</script>

<style scoped>
div.columns {
  flex-wrap: wrap;
}

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
