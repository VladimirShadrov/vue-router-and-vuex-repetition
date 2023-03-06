<template>
  <div class="wrapper">
    <h1>Автомобиль {{}}</h1>
    <br />

    <div class="buttons__wrapper">
      <button @click="backToCars" class="button">Вернуться назад</button>

      <router-link class="button">
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
      // model: this.$route.params['id'],
      // params: this.$route.query,
    };
  },
  methods: {
    backToCars() {
      console.log(this.$route);
      this.$router.push('/dinamic-routes');
    },
  },
  watch: {
    $route(to) {
      this.model = to.params['id'];
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
