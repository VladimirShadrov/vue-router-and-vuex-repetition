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
        { id: 3, path: '/page1', title: 'Страница 1' },
        { id: 4, path: '/page2', title: 'Страница 2' },
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
  padding: 8px 16px;
  transition: all 0.3s;
  font-size: 18px;
}

.router-link {
  color: rgb(49, 45, 45);

  &:hover {
    color: white;
  }
}

.router-link__active {
  color: white;
}

.theme-title {
  text-align: center;
  margin: 16px 0;
}
</style>
