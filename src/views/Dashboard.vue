<template>
  <div class="dashboard container">
    <header class="d-flex align-items-center justify-content-between">
      <h1>PragmaBrewery Code Challenge</h1>
      <router-link class="btn" to="/create">Add Container</router-link>
    </header>
    <div class="content">
      <containers-list />
      <containers-create v-if="$route.name === 'Create'"/>
    </div>
  </div>
</template>

<script>
import ContainersList from '@/components/ContainersList.vue';
import ContainerCreate from '@/components/ContainerCreate.vue';
import { list, setTemperature } from '@/actions/containers';
import beers from '@/actions/beers';
import bus from '@/actions/bus';

export default {
  name: 'Dashboard',
  components: {
    'containers-list': ContainersList,
    'containers-create': ContainerCreate,
  },
  methods: {
    changeTemperature(container, temperature) {
      setTemperature(container.id, temperature);

      const beer = beers().filter(beer => beer.id === container.beer)[0];
      if (temperature > beer.range.max || temperature < beer.range.min) {
        bus.$emit('send-notification', container);
      }
    },
    temperatureRandom() {
      setInterval(() => {
        if (this.containers.length) {
          console.log('temperatureRandom');
          const container = this.containers[Math.floor(Math.random() * this.containers.length)];
          let temperature = container.temperature + Math.floor(Math.random() * 2) - 2;

          if (temperature < -10) temperature = -10;
          if (temperature > 10) temperature = 10;

          this.changeTemperature(container, temperature);
        }
      }, 2000);
    },
  },
  computed: {
    containers() {
      return list();
    },
  },
  mounted() {
    this.temperatureRandom();

    bus.$on('send-notification', (container) => {
      alert(container);
    });
  },
};
</script>
<style lang="scss" scoped>
.dashboard {
  padding-top: 50px;
}
</style>
