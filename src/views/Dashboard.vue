<template>
  <div class="dashboard container">
    <h1>PragmaBrewery Code Challenge</h1>
    <small>Created by Luíza Piroli Haas</small>

    <div class="content">
      <containers-list />
    </div>

    <container-create v-if="$route.name === 'Create'" />

    <notifications
      group="create"
      position="bottom right"
    />
    <notifications
      group="checkTemperature"
      position="bottom right"
     />
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
    'container-create': ContainerCreate,
  },
  methods: {
    changeTemperature(container, temperature) {
      setTemperature(container.id, temperature);

      const beer = beers().filter(b => b.id === container.beer)[0];
      console.log(beer.range.end, beer.range.start, temperature);
      if (temperature > beer.range.end || temperature < beer.range.start) {
        console.log('entrei no if');
        bus.$emit('send-notification', container);
      }
    },
    temperatureRandom() {
      setInterval(() => {
        if (this.containers.length) {
          console.log('temperatureRandom');
          const container = this.containers[Math.floor(Math.random() * this.containers.length)];
          let temperature = container.temperature + Math.floor(Math.random() * 5) - 2;

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
      console.log('send-notification');
      this.$notify({
        type: 'warn',
        group: 'checkTemperature',
        title: 'Check the temperature!',
        text: `The container ${container.name} is outside the temperature range`,
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.dashboard {
  padding-top: 50px;
}
</style>
