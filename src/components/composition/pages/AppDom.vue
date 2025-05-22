<template>
  <h1 class="theme-title">Доступ к Dom элементам</h1>
  <hr />
  <br />
  <h4>Файл: AppDom.vue</h4>

  <h3>
    Задача: <br />
    - Получить доступ к текстовому input <br />
    - При клике на кнопке "Изменить" вывести в консоль значение, введенное в input <br />
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
    <input type="text" placeholder="Вывести введенное значение" style="padding: 4px 8px" /><br /><br />

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
