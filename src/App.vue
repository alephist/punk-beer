<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <router-link tag="h1" :to="{ name: 'Home' }" class="title has-text-centered">Punk Beers</router-link>
          <h2 class="subtitle has-text-centered">Site for Beer Lovers</h2>
        </div>
      </div>
    </section>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app"
};
</script>

<style>
h1 {
  cursor: pointer;
}
</style>
