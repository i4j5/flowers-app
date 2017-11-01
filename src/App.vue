<template lang="pug">
  #app
    router-view
    br
    menu-bar
</template>

<script>
  import menuBar from '@/components/menu/menu'

  //console.log(menu)

  export default {
    name: 'app',
    components: {
      menuBar
    }
  }
</script>

<style lang="stylus">
  #app
    font-family Arial sans-serif
</style>
