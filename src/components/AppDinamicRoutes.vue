<template>
  <div class="content-wrapper">
    <h1 class="theme-title">Динамические роуты</h1>
    <br />

    <nav></nav>
  </div>
</template>

<script>
export default {
  name: 'app-page-1',
  data() {
    return {
      cars: [
        {
          id: 1,
          model: 'KIA',
          year: 2015,
        },
        {
          id: 2,
          model: 'Ford',
          year: 2007,
        },
        {
          id: 3,
          model: 'BMV',
          year: 1999,
        },
        {
          id: 4,
          model: 'Volvo',
          year: 2019,
        },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  padding: 16px 0;
  border-top: 1px solid #858181;
  border-bottom: 1px solid #858181;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e0dcdc;
}

.link,
.link__active {
  text-decoration: none;
  margin: 0 16px;
  color: black;
}
.link__active {
  font-weight: bold;
}
</style>
