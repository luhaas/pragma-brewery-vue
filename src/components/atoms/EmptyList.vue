<template>
  <p class="empty-list">
    <i class="icon"></i>
    <span>Your truck is empty.
      <router-link to="/create" class="add">Click here</router-link>
      to add new container</span>
  </p>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.empty-list {
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-top: 20px;
  .add {
    color: #0099bf;
    &:hover {
      color: #00667f;
    }
  }
}
</style>
