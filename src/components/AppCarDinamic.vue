<template>
  <div class="wrapper">
    <h1>Автомобиль {{ model }}</h1>
    <br /><br />
    <div class="buttons__wrapper">
      <button @click="backToCars" class="button">Вернуться назад</button>

      <router-link class="button" :to="'/dinamic-routes'">
        <button class="button">Показать полную информацию</button>
      </router-link>
    </div>
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
  methods: {
    backToCars() {
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
