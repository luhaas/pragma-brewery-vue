<template>
  <main class="dashboard wrapper">
    <!-- Import list of containers -->
    <containers-list v-if="!!containers.length" />
    <empty-list v-else />

    <!-- Import form for add a new container -->
    <container-create v-if="$route.name === 'Create'" />

    <!-- Notification components -->
    <notifications
      group="create"
      position="bottom right"
    />
    <notifications
      group="checkTemperature"
      position="bottom right"
    />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import ContainersList from '@/components/ContainersList.vue';
import EmptyList from '@/components/atoms/EmptyList.vue';
import ContainerCreate from '@/components/ContainerCreate.vue';
import bus from '@/actions/bus';

export default {
  name: 'Dashboard',
  components: {
    'containers-list': ContainersList,
    'empty-list': EmptyList,
    'container-create': ContainerCreate,
  },
  methods: {
    changeTemperature(container, temperature) {
      // dispatch mutation to update container temperature
      this.$store.dispatch('setTemperature', { id: container.id, temperature });

      const beer = this.beers.filter(b => b.id === container.beer)[0];

      // validate the temperature and send notification
      if (temperature > beer.range.end || temperature < beer.range.start) {
        bus.$emit('send-notification', container);
      }
    },
    temperatureRandom() {
      // update temperature every two seconds
      setInterval(() => {
        if (this.containers.length) {
          // select container randomly
          const container = this.containers[Math.floor(Math.random() * this.containers.length)];

          // calculate randomly the new temperature
          let temperature = container.temperature + Math.floor(Math.random() * 5) - 2;

          // prevents the new temperature being less than -10 and greater than 10
          if (temperature < -10) temperature = -10;
          if (temperature > 10) temperature = 10;

          // call method to update temperature
          this.changeTemperature(container, temperature);
        }
      }, 2000);
    },
  },
  // call store props
  computed: mapGetters([
    'containers',
    'beers',
  ]),
  mounted() {
    this.temperatureRandom();

    // listening 'send-notification' event
    bus.$on('send-notification', (container) => {
      this.$notify({
        type: 'error',
        group: 'checkTemperature',
        title: 'Check the temperature!',
        text: `The container #${container.id} is outside the temperature`,
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.dashboard {
  padding-top: 50px;
  padding-bottom: 50px;
  flex: 1;
  footer {
    margin-top: auto;
  }
}
</style>
