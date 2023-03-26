<template>
  <div>
    <!-- ЗДЕСЬ ДОБАВИТЬ КНОПКУ ПРОКРУТКИ -->

    <div class="scroll1"></div>

    <div id="fullInfo" class="wrapper">
      <h2>Марка машины: {{ $route.params['id'] }}</h2>
      <br />
      <h2>Год выпуска: {{ $route.params['year'] }}</h2>
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
.scroll,
.scroll1 {
  height: 900px;
  width: 900px;
  background: lightgrey;
}
.scroll1 {
  height: 300px;
}
.button {
  padding: 6px 10px;
  cursor: pointer;
  display: block;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 16px;
}
</style>
