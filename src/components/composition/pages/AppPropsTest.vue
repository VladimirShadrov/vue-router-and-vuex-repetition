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
      Удвоенная версия: <b> {{ dubleVersion }} </b>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['title', 'version'],
  setup(props) {
    const dubleVersion = computed(() => props.version * 2);

    return { dubleVersion };
  },
};
</script>

<style></style>
