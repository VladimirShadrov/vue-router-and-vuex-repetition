<template>
  <div class="content-wrapper">
    <h1 class="theme-title">Composition API</h1>
    <hr />
    <div class="container">
      <div class="side-bar">
        <router-link class="link" active-class="link__active" v-for="route in routes" :key="route" :to="route.to">{{ route.theme }}</router-link>
      </div>
      <div class="content-bar">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-page-2',
  data() {
    return {
      routes: [
        {
          theme: 'Setup и Ref',
          to: { name: 'setup' },
        },
        {
          theme: 'Работа с функциями',
          to: { name: 'methods' },
        },
        {
          theme: 'Объекты и реактивность',
          to: { name: 'reactive-objects' },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.side-bar {
  padding: 8px;
  border-right: 1px solid lightgrey;
  width: 15%;
  min-height: 80vh;
}
.content-bar {
  padding: 8px;
  width: 85%;
  min-height: 80vh;
}
.link {
  transition: all 0.3s;
  color: rgb(65, 63, 63);
  border: none;
  outline: none;
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding: 8px;

  &:hover {
    color: black;
    background: lightgray;
  }
}
.link__active {
  color: black;
  background: lightgray;
}
</style>
