<template>
  <p class="empty-list">
    <i class="fas fa-truck-moving"></i>
    <span>Your truck is empty.
      <router-link to="/create">Click here</router-link>
      to add new container
    </span>
  </p>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.empty-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-top: 20px;
  i {
    font-size: 60px;
    margin-bottom: 20px;
    color: $gray-99;
  }
}
</style>
