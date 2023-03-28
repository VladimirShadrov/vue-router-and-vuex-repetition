<template>
  <header class="header">
    <h1 class="header__title">Vue Router + Vuex</h1>
    <nav>
      <!-- <a class="router-link" :href="link.path" v-for="link in routerLinks" :key="link.id">{{ link.title }}</a> -->
      <router-link class="router-link" :to="link.path" v-for="link in routerLinks" :key="link.id" active-class="router-link__active">{{
        link.title
      }}</router-link>
    </nav>
  </header>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      routerLinks: [
        { id: 2, path: '/', title: 'Задания роутер' },
        { id: 3, path: '/dinamic-routes', title: 'Динамические роуты' },
        { id: 4, path: '/composition', title: 'Composition API' },
        { id: 5, path: '/page3', title: 'Страница 3' },
      ],
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: #42b983;
  padding: 20px 16px;
}

.router-link,
.router-link__active {
  text-decoration: none;
  font-weight: bold;
  border: none;
  outline: none;
  position: relative;
  padding: 0 16px;

  transition: all 0.3s;
  font-size: 18px;
}

.router-link {
  color: white;

  &:hover {
    text-shadow: 0 0 7px #fff;
  }
}

.router-link__active {
  text-shadow: 0 0 7px #fff;

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 10%;
    width: 80%;
    height: 1px;
    background: white;
  }
}

.theme-title {
  text-align: center;
  margin: 16px 0;
}

.content-wrapper {
  padding: 16px;
}
</style>
