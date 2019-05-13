<template>
  <div class="container-add" :class="{ error }">
    <form name="container-add" class="content" :class="{ error }">
    <h2>Add new container</h2>
      <div class="input-wrapper">
        <label>Beer</label>
        <select v-model="selectedBeer" id="beer-type">
          <option :value="undefined" hidden disabled>Select</option>
          <option v-for="(beer, key) in beers" :key="key" :value="beer.id">
            {{ beer.name }}
          </option>
        </select>
      </div>
      <div class="input-wrapper">
        <label>Quantity</label>
        <input type="number" v-model.number="quantity" name="quantity" />
      </div>
      <div class="button-wrapper">
        <button @click.prevent="back" class="cancel">Cancel</button>
        <button @click.prevent="save" type="submit">Add</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ContainerCreate',
  data() {
    return {
      quantity: undefined,
      selectedBeer: undefined,
      error: false,
    };
  },
  methods: {
    save() {
      if (this.isValid) {
        // dispatch mutation to add the container
        this.$store.dispatch('addContainer', { beer: this.selectedBeer, quantity: this.quantity });
        // return to latest route
        this.back();

        // emit success notification
        this.$notify({
          group: 'create',
          title: 'Success!',
          text: 'Container sucessfully created',
        });
      } else this.error = true;
    },
    back() {
      this.$router.go(-1);
    },
  },
  computed: {
    beers() {
      return this.$store.state.beers;
    },
    isValid() {
      // form validation
      return !!this.selectedBeer && !!this.quantity;
    },
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
    background-color: $gray-44;
    opacity: .6;
    z-index: 1;
  }
  &.error {
    input, select {
      border-color: $error;
    }
  }
  .content {
    padding: 50px;
    background-color: $white;
    border-radius: 4px;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    z-index: 2;

    -webkit-box-shadow: 3px 3px 6px 0px rgba(68,68,68,0.08);
    -moz-box-shadow: 3px 3px 6px 0px rgba(68,68,68,0.08);
    box-shadow: 3px 3px 6px 0px rgba(68,68,68,0.08);
  }
}
</style>
