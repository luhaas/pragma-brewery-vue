<template>
  <input :type="type" v-model="value" :id="id">
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    value: [String, Number],
    id: String,
  },
};
</script>
