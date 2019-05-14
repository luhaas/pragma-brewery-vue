<template>
  <div class="containers-list">
    <header>
      <h2>Containers</h2>
      <router-link to="/create" class="btn">Add Container</router-link>
    </header>
    <div class="grid">
      <div class="col" v-for="(container, key) in containers" :key="key">
        <container-card :container="container" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Card from '@/components/atoms/Card.vue';

export default {
  name: 'ContainersList',
  components: {
    'container-card': Card,
  },
  // call store prop
  computed: mapGetters([
    'containers',
  ]),
};
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}

@media screen and (min-width: 768px) and (max-width: 992px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 767px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
