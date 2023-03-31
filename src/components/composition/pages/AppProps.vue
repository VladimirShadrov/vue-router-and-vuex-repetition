<template>
  <h1 class="theme-title">Передача параметров компоненту</h1>
  <hr />
  <br />
  <h3>
    Компонент: AppProps.vue <br /><br />
    Задача: <br />
    - В компонент AppPropsTest передать параметры (название и версию фреймворка) <br />
    - В компоненте AppPropsTest с помощью computed свойства расчитать удвоенную версию фреймворка <br />
    - При изменении параметров здесь, в тестовом компоненте значения тоже должны поменяться <br />
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
    <input type="text" placeholder="Связать с v-model" style="padding: 4px 8px" /><br /><br />

    <button @click="changeFrame" class="button">Изменить</button>
  </div>
  <app-props-test :title="title" :version="version"></app-props-test>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import AppPropsTest from './AppPropsTest.vue';

export default {
  setup() {
    const title = ref('Vue');
    const version = ref(3);

    const dubleVersion = computed(() => version.value * 2);
    const newFrame = reactive({
      title: 'React',
      version: 18,
    });

    function changeFrame() {
      title.value = newFrame.title;
      version.value = newFrame.version;
    }

    return {
      title,
      version,
      dubleVersion,
      changeFrame,
    };
  },
  components: { AppPropsTest },
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
