<template>
  <h1 class="theme-title">Setup и Ref</h1>
  <hr />
  <br />
  <h4>Файл: AppSetup.vue</h4>
  <h3>
    Задача: 1. Вывести в шаблон реактивные переменные (назнвание фреймворка и его версию)<br />
    2. При клике на кнопку "Изменить" переопределить переменные на: Название: React, Версия: 19
  </h3>
  <br />
  <hr />
  <br />

  <!-- ЗДЕСЬ ПИСАТЬ РЕШЕНИЕ -->
  <div class="wrapper">
    <h3>Vue Composition Api</h3>
    <br />
    <hr />
    <br />

    <div class="item">Название: <b> {{}} </b></div>
    <div class="item">Версия: <b> {{}} </b></div>
    <br />

    <button class="button">Изменить</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  padding: 18px;
  border: 1px solid black;
  border-radius: 16px;
}
.item {
  margin: 6px 0;
}
.button {
  cursor: pointer;
  padding: 4px 8px;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
