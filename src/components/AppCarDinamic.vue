<template>
  <div class="wrapper">
    <h1>Автомобиль {{ model }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app-car-dinamic',
  data() {
    return {
      model: this.$route.params['id'],
    };
  },
  watch: {
    $route(to) {
      this.model = to.params['id'];
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding-top: 40px;
}
h1 {
  text-align: center;
  margin-bottom: 16px;
}
</style>
