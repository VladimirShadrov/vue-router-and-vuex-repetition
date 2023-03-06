<template>
  <div class="wrapper">
    <h2>Марка машины: {{}}</h2>
    <br />
    <h2>Год выпуска: {{}}</h2>
  </div>
</template>

<script>
export default {
  name: 'app-car-full-info',
};
</script>

<style scoped>
.wrapper {
  width: max-content;
  padding: 16px;
  border: 1px solid black;
}
</style>
