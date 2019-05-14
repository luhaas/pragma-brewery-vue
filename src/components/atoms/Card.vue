<template>
  <div class="card">
    <i class="fas fa-trash-alt remove" @click="removeContainer"></i>
    <div class="grid">
      <div class="col">
        <p class="container-id">Container #{{ container.id }}</p>
        <p class="beer-name"><i class="fas fa-beer"></i> {{ beer.name }}</p>
      </div>
      <div class="col">
        <p class="temperature" :class="{'text-error' : !rightTemperature}">
          {{ `${container.temperature}°C` }}
        </p>
        <small class="range">{{ `${beer.range.start}°C to ${beer.range.end}°C` }}</small>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: {
    container: {
      type: Object,
      required: true,
    },
  },
  // call store action to remove selected container
  methods: mapActions([
    'removeContainer',
  ]),
  computed: {
    beer() {
      // filter container beer by id
      return this.$store.state.beers.find(beer => beer.id === this.container.beer);
    },
    rightTemperature() {
      // check if the container temperature is within the beer limit
      return this.container.temperature >= this.beer.range.start
        && this.container.temperature <= this.beer.range.end;
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  border-radius: 8px;
  background-color: $white;
  padding: 15px;
  position: relative;

  -webkit-box-shadow: 3px 3px 6px 0px rgba(68,68,68,0.08);
  -moz-box-shadow: 3px 3px 6px 0px rgba(68,68,68,0.08);
  box-shadow: 3px 3px 6px 0px rgba(68,68,68,0.08);

  .remove {
    position: absolute;
    top: 15px;
    right: 15px;
    color: $gray-99;
    cursor: pointer;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .col {
    padding: 20px 0;
    &:first-child {
      padding-right: 20px;
      text-align: right;
      border-right: 1px solid #eee;
    }
    &:last-child {
      padding-left: 20px;
    }
  }
  .container-id {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .fa-beer {
    color: #cd8000;
    margin-right: 5px;
  }
  .temperature {
    color: $green-1;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
