<template>
  <select v-model="value" :id="id">
    <option :value="undefined" hidden disabled>Select</option>
    <option v-for="(option, key) in options" :key="key" :value="option.id">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      default: undefined,
    },
    id: String,
  },
};
</script>
