<template>
  <div class="wrapper" style="margin-top: 16px">
    <h3>Test component</h3>
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
      Удвоенная версия: <b> {{ dubleVer }} </b>
    </div>
    <br /><br />

    <button @click="backTitle" class="button">Вернуть старые значения</button>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['title', 'version'],
  setup(props, context) {
    function back() {
      context.emit('return-olg-title', { title: 'Vue', version: 3 });
    }
    const dubleVer = computed(() => props.version * 2);
    return {
      backTitle: back,
      dubleVer,
    };
  },
};
</script>

<style scoped>
.button {
  padding: 4px 8px;
  cursor: pointer;
}
</style>
