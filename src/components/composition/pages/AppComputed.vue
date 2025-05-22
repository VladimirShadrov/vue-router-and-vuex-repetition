<template>
  <h1 class="theme-title">Computed свойства</h1>
  <hr />
  <br />
  <h4>Файл: AppComputed.vue</h4>
  <h3>
    Задача: <br />
    - Реализовать computed свойство, которое будет возвращать удвоенную версию фреймворка <br />
    - Вывести удвоенную версию фреймворка в шаблон <br />
    - Проверить, является ли computed свойство ref-ом <br />
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
    <div class="item">Версия: <b> {{}}.</b></div>
    <div class="item">Удвоенная версия: <b> {{}} </b></div>
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
