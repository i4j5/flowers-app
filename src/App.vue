<template lang="pug">
  #app.page
    .header
    .content
      router-view
    .footer
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
  body
    background-color #e8e8e8
    width 100%
    padding 0
    margin 0
  #app
    font-family Arial, sans-serif
  .page
    padding 40px 0 60px
  .header
    background-color #fff
    position fixed
    top 0
    left 0
    width 100%
    display block
    height 40px
    box-shadow 0 1px 4px #ddd
  .footer
    background-color #fff	
    position fixed
    bottom 0
    left 0
    width 100%
    display block
    height 60px
    box-shadow 0 -1px 4px #ddd
  .content
    padding-top 5px
</style>
