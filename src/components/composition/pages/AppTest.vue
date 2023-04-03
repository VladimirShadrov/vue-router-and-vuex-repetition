<template>
  <div class="wrapper" style="margin-top: 16px">
    <h3>Test component</h3>
    <br />
    <hr />
    <br />

    <div class="item">
      Название: <b> {{}} </b>
    </div>
    <div class="item">
      Версия: <b> {{}}.</b>
    </div>
    <div class="item">
      Удвоенная версия: <b> {{}} </b>
    </div>
    <br /><br />

    <button class="button">Вернуть старые значения</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  padding: 4px 8px;
  cursor: pointer;
}
</style>
