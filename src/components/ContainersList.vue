<template>
  <div class="containers-list">
    <header>
      <h2>My Containers</h2>
      <router-link to="/create" class="btn">Add Container</router-link>
    </header>
    <div class="row" v-if="!!containers.length">
      <div class="col" v-for="(container, key) in containers" :key="key">
        <container-card :container="container" />
      </div>
    </div>
    <empty-list v-else />
  </div>
</template>
<script>
import Card from '@/components/atoms/Card.vue';
import EmptyList from '@/components/atoms/EmptyList.vue';
import { list } from '@/actions/containers';

export default {
  name: 'ContainersList',
  components: {
    'container-card': Card,
    'empty-list': EmptyList,
  },
  data() {
    return {
      containers: [],
    };
  },
  methods: {
    getContainers() {
      this.containers = list();
    },
  },
  mounted() {
    this.getContainers();
  },
};
</script>
<style>

</style>
