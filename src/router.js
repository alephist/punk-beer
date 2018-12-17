import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import BeerDetail from './components/BeerDetail.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/beer/:id', name: 'BeerDetail', component: BeerDetail }
  ]
});
