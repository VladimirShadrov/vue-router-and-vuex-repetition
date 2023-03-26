<template>
  <div class="wrapper">
    <h1>Автомобиль {{ $route.params['id'] }}</h1>
    <br />

    <div class="buttons__wrapper">
      <button @click="backToCars" class="button">Вернуться назад</button>

      <!-- <router-link class="button" >
        <button class="button">Показать полную информацию</button>
      </router-link> -->
    </div>
    <hr />
    <br />

    <!-- СЮДА ОТРИСОВАТЬ ПОЛНУЮ ИНФОРМАЦИЮ О МАШИНЕ -->
  </div>
</template>

<script>
export default {
  name: 'app-car-dinamic',
  methods: {
    backToCars() {
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
