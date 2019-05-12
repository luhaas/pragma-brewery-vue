<template>
  <div class="container-add">
    <div class="content" :class="{ error }">
      <header class="d-flex align-items-center justify-content-between">
        <h3 class="mt-0 mb-0">Add new container</h3>
        <i class="icon-remove" @click="back"></i>
      </header>
      <div class="input-wrapper">
        <label>Container name: </label>
         <input type="text" v-model="name" name="container-name">
      </div>
      <div class="input-wrapper">
        <label>Beer</label>
        <select v-model="selectedBeer" id="beer-type">
          <option :value="undefined" hidden disabled>Select</option>
          <option v-for="(option, key) in beerOptions" :key="key" :value="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
      <div class="input-wrapper">
        <label>Quantity</label>
        <input type="number" v-model.number="quantity" name="quantity" />
      </div>
      <div class="button-wrapper">
        <button @click.prevent="save">Add</button>
      </div>
    </div>
  </div>
</template>
<script>
import { add } from '@/actions/containers';
import beers from '@/actions/beers';

export default {
  name: 'ContainerCreate',
  data() {
    return {
      name: '',
      quantity: undefined,
      selectedBeer: undefined,
      beerOptions: [],
      error: false,
    };
  },
  methods: {
    getBeers() {
      this.beerOptions = beers();
    },
    save() {
      if (this.isValid) {
        add(this.name, this.selectedBeer, this.quantity);
        this.back();
        this.$notify({
          group: 'create',
          title: 'Success!',
          text: 'Container sucessfully created',
        });
      } else this.error = true;
      this.reset();
    },
    back() {
      this.$router.go(-1);
    },
    reset() {
      this.name = '';
      this.quantity = undefined;
      this.selectedBeer = undefined;
    },
  },
  computed: {
    isValid() {
      return !!this.selectedBeer && !!this.quantity;
    },
  },
  mounted() {
    this.getBeers();
  },
};
</script>
<style lang="scss" scoped>
.container-add {
  &:before {
    content: '';
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #426cda;
    opacity: 0.12;
    z-index: 1;
  }
  &.error {
    input, select {
      border-color: red;
    }
  }
  .content {
    width: 400px;
    padding: 50px;
    background-color: #fff;
    border-radius: 8px;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    z-index: 2;
  }
}
</style>
