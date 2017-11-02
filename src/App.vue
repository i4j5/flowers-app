<template lang="pug">
  #app.page
    .loader(:class="{ loader_active : loading }")
      .spinner 
    .header
    .content
      router-view
    .footer
      menu-bar
</template>

<script>
  import menuBar from '@/components/menu/menu'

  export default {
    name: 'app',
    computed: {
      loading () {
        return this.$store.state.loading
      }
    },
    beforeCreate() {
      this.$store.dispatch('getCatalog')
    },
    components: {
      menuBar
    }
  }
</script>

<style lang="stylus">
  *
    box-sizing border-box
  body
    background-color #e8e8e8
    width 100%
    padding 0
    margin 0
  #app
    font-family Arial, sans-serif
  .page
    padding 40px 0 60px
  .loader
    position fixed
    width 100%
    height 100%
    background-color #fff
    left 0
    top 0
    z-index 99999
    display none 
    &_active
      display block
  .spinner
    width 40px
    height 40px
    position relative
    top 50%
    left 50%
    margin-top -20px
    margin-left -20px
    background-color #000
    border-radius 100%
    animation sk-scaleout 1.0s infinite ease-in-out
  @keyframes sk-scaleout
    0%
      transform scale(0)
    100%
      transform scale(1.0)
      opacity 0

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
