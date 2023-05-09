<template>
  <div>
    <!-- ЗДЕСЬ ДОБАВИТЬ КНОПКУ ПРОКРУТКИ -->

    <router-link class="button" :to="{ name: 'fullInfo', query: { model: model, year: year }, hash: '#fullInfo' }">
      <button class="button">Прокрутить к элементу</button>
    </router-link>

    <div class="scroll1"></div>

    <div id="fullInfo" class="wrapper">
      <h2>Марка машины: {{ model }}</h2>
      <br />
      <h2>Год выпуска: {{ year }}</h2>
    </div>

    <div class="scroll"></div>
  </div>
</template>

<script>
export default {
  name: 'app-car-full-info',
  computed: {
    model() {
      return this.$route.query['model'];
    },
    year() {
      return this.$route.query['year'];
    },
  },
  beforeRouteEnter(to, from, next) {
    const ddd = true;
    next(ddd);
  },
};
</script>

<style scoped>
.wrapper {
  width: max-content;
  padding: 16px;
  border: 1px solid black;
}
.scroll,
.scroll1 {
  height: 900px;
  width: 900px;
  background: lightgrey;
}
.scroll1 {
  height: 300px;
}
.button {
  padding: 6px 10px;
  cursor: pointer;
  display: block;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 16px;
}
</style>
