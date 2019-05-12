<template>
  <div class="card">
    <i class="icon icon-close" @click="removeContainer"></i>
    <div class="row">
      <div class="col-6">
        <p class="container-name">{{ container.name }}</p>
        <p class="beer-name">{{ beer.name }}</p>
      </div>
      <div class="col-6">
        <p class="temperature">{{ `${container.temperature}°C` }}</p>
        <p class="range">{{ `${beer.range.start}°C to ${beer.range.end}°C` }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { remove } from '@/actions/containers';
import beers from '@/actions/beers';

export default {
  props: {
    container: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeContainer() {
      remove(this.container.id);
    },
  },
  computed: {
    beer() {
      return beers().find(beer => beer.id === this.container.beer);
    },
  },
};
</script>
<style>
.card {
  border-radius: 8px;
  background-color: #fff;
  padding: 15px;
}
</style>
