<template>
  <h1 class="theme-title">Передача параметров от дочерего компонента</h1>
  <hr />
  <br />
  <h3>
    Компонент: AppEmit.vue <br /><br />
    Задача: <br />
    - Отрисовать компонент AppTest здесь<br />
    - Передать в него параметры (название и версию фреймворка) <br />
    - В компоненте AppTest с помощью computed свойства расчитать удвоенную версию фреймворка <br />
    - При изменении параметров здесь, в тестовом компоненте значения тоже должны поменяться <br />
    - В компоненте AppTest при клике на кнопку "Вернуть обратно" вернуть название фреймворки и его версию к исходным значениям <br />
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

    <div class="item">
      Название: <b> {{}} </b>
    </div>
    <div class="item">
      Версия: <b> {{}}.</b>
    </div>
    <div class="item">
      Удвоенная версия: <b> {{}} </b>
    </div>
    <br />
    <input type="text" placeholder="Связать с v-model" style="padding: 4px 8px" /><br /><br />

    <button class="button">Изменить</button>
  </div>

  <!-- ЗДЕСЬ ДОБАВИТЬ ТЕСТОВЫЙ КОМПОНЕНТ -->
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
