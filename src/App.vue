<template lang="pug">
  #app
    router-view
    br
    div
      router-link(to="/") Главная 
      router-link(to="/cart") Корзина 
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="stylus">
  #app
    font-family Arial sans-serif
</style>
