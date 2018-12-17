<template>
  <section class="section">
    <div class="container">
      <div class="columns" v-if="product">
        <div class="column is-two-fifths">
          <figure class="image">
            <img :src="product.image_url" :alt="product.name">
          </figure>

          <div class="buttons is-centered">
            <router-link :to="{ name: 'Home' }" class="button is-info">Back to Home</router-link>
          </div>
        </div>

        <div class="column">
          <h1 class="title">{{ product.name }}</h1>
          <h2 class="subtitle">{{ product.tagline }}</h2>

          <dl>
            <dt class="has-text-weight-bold">Description:</dt>
            <dd>{{ product.description }}</dd>
            <br>
            <dt class="has-text-weight-bold">ABV:</dt>
            <dd>{{ product.abv }}</dd>
            <br>
            <dt class="has-text-weight-bold">pH:</dt>
            <dd>{{ product.ph }}</dd>
            <br>
            <dt class="has-text-weight-bold">Best paired with:</dt>
            <dd>
              <div class="content">
                <ul>
                  <li v-for="(pair, index) in product.food_pairing" :key="index">{{ pair }}</li>
                </ul>
              </div>
            </dd>
          </dl>
        </div>
      </div>

      <div class="notification is-danger has-text-centered" v-else>Item has not been loaded.</div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "BeerDetail",
  data() {
    return {
      productId: this.$route.params.id,
      product: null
    };
  },
  methods: {
    getBeer() {
      axios
        .get(`https://api.punkapi.com/v2/beers/${this.productId}`)
        .then(response => (this.product = response.data[0]))
        .catch(error => alert(error.message));
    }
  },
  created() {
    this.getBeer();
  }
};
</script>

<style scoped>
.image {
  width: 18.75rem;
  height: 18.75rem;
}

.image,
img {
  margin: auto;
}

.image img {
  width: auto;
  height: 100%;
}

.buttons {
  margin-top: 0.9375rem;
}
</style>
