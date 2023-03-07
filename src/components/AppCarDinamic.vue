<template>
  <div class="wrapper">
    <h1>Автомобиль {{ model }}</h1>
    <br />

    <div class="buttons__wrapper">
      <button @click="backToCarsPage" class="button">Вернуться назад</button>

      <router-link class="button" :to="{ name: 'fullInfo', query: { model }, hash: '#scroll' }">
        <button class="button">Показать полную информацию</button>
      </router-link>
    </div>
    <hr />
    <br />

    <!-- СЮДА ОТРИСОВАТЬ ПОЛНУЮ ИНФОРМАЦИЮ О МАШИНЕ -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app-car-dinamic',
  data() {
    return {
      model: this.$route.params['id'],
    };
  },
  watch: {
    $route(to) {
      this.model = to.params['id'];
    },
  },
  methods: {
    backToCarsPage() {
      this.$router.push('/dinamic-routes');
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding-top: 40px;
}
h1 {
  text-align: center;
  margin-bottom: 16px;
}
.buttons__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
.button {
  padding: 6px 10px;
  margin: 0 auto;
  cursor: pointer;
  display: block;
  font-weight: bold;
  text-decoration: none;
  margin: 0 8px;
}
</style>
