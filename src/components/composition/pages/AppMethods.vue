<template>
  <h1 class="theme-title">Работа с функциями</h1>
  <hr />
  <br />
  <h3>Задача: При клике на кнопке "Изменить", изменить назнвание фреймворка и его версию</h3>
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
      Название: <b> {{ title }} </b>
    </div>
    <div class="item">
      Версия: <b> {{ version }} </b>
    </div>
    <br />

    <button @click="changeTitle" class="button">Изменить</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const title = ref('Vue');
    const version = ref('3');
    function changeTitle() {
      title.value = 'React';
      version.value = '18';
    }

    return { title, version, changeTitle };
  },
};
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
