<template>
  <h1 class="theme-title">Объекты и реактивность</h1>
  <hr />
  <br />
  <h4>Файл: AppObjects.vue</h4>
  <h3>
    Задача: <br />
    - Сделать отдельный объект по фреймворку и его версии <br />
    - Полученный объект сделать реактивным <br />
    - Экспортировать из Setup реактивный объект, а также свойства этого объекта в виде ref <br />
    - Проверить являются ли рефы и объект с фреймворком реактивными<br />
    - Реализовать метод по изменению значений с помощью данных объекта<br />
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
