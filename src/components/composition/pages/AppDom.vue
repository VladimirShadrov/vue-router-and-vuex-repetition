<template>
  <h1 class="theme-title">Доступ к Dom элементам</h1>
  <hr />
  <br />
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

    <div class="item">
      Название: <b> {{ title }} </b>
    </div>
    <div class="item">
      Версия: <b> {{ version }}.</b>
    </div>
    <div class="item">
      Удвоенная версия: <b> {{ dubleVersion }} </b>
    </div>
    <br />
    <input ref="textInp" type="text" placeholder="Вывести введенное значение" style="padding: 4px 8px" /><br /><br />

    <button @click="changeFrame" class="button">Изменить</button>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
  setup() {
    const title = ref('Vue');
    const version = ref(3);
    const textInp = ref(null);

    const dubleVersion = computed(() => version.value * 2);
    const newFrame = reactive({
      title: 'React',
      version: 18,
    });

    function changeFrame() {
      title.value = newFrame.title;
      version.value = newFrame.version;

      console.log(textInp.value.value);
    }

    return {
      title,
      version,
      dubleVersion,
      changeFrame,
      textInp,
    };
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
