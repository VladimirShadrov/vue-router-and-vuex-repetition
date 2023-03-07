<template>
  <div>
    <div class="scroll"></div>

    <div id="scroll" class="wrapper">
      <h2>Марка машины: {{ $route.query.model }}</h2>
      <br />
      <h2>Год выпуска: {{ 2022 }}</h2>
    </div>

    <div class="scroll"></div>
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
.scroll {
  height: 900px;
  width: 900px;
  background: lightgrey;
}
</style>
