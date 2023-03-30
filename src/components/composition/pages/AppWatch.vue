<template>
  <h1 class="theme-title">Watch</h1>
  <hr />
  <br />
  <h3>
    Задача: <br />
    - Реализовать метод watch, который следит за computed свойством <br />
    - При изменении свойства computed вывести в консоль новое и старое значение свойства, которое вычисляет computed <br />
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

    <button @click="changeFrame" class="button">Изменить</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch } from 'vue';

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

    watch(dubleVersion, (newVal, oldVal) => {
      console.log('New value: ', newVal);
      console.log('Old value: ', oldVal);
    });

    return {
      title,
      version,
      dubleVersion,
      changeFrame,
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
