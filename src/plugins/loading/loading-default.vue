<template>
  <div v-if="show" ref="wrapper"
    style="position: fixed; left: 0; top: 0; width: 100vw; height: 100vh;
      display: flex; align-items: center; justify-content: center;
      z-index: 999;"
      :style="{
        background: ui.background
      }">
      <img style="width: 52px;" src="../../assets/loading.gif"/>
  </div>
</template>
<script src="./loading-default.ts">

</script>

<style lang="scss" scoped>
</style>