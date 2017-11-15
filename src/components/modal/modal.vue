<template lang="pug">
  div
    span(v-on:click="open" v-html="link")
    .modal(v-bind:class="{ modal_visible: visible }")
      .modal__wrapper
        .modal__dialog
          .modal__content
            slot
          .modal__close(v-on:click="close") Закрыть
</template>

<script>
  export default {
    name: 'modal',
    data: () => {
      return {
        visible: false
      }
    },
    props: {
      link: {
        type: String,
        required: true
      }
    },
    methods: {
      open() {
        this.visible = true
      },
      close() {
        this.visible = false       
      }
    }
  }
</script>

<style lang="stylus">
  .modal
    *, :after, :before
      box-sizing border-box
      padding 0
      margin 0
    position fixed
    left 0
    top 0
    height 100%
    width 100%
    visibility hidden
    z-index 190
    transition visibility 0ms 300ms
    &__wrapper
      display flex
      white-space nowrap
      position absolute
      left 0
      top 0
      height 100%
      width 100%
      z-index 1000
      transition opacity 300ms 0ms, visibility 0ms 300ms
      opacity 0
      visibility hidden
      background-color rgba(48, 55, 59, 0.1) 
    &::after
      display inline-block
      vertical-align middle
      width 0
      height 100%
      content ''
    &_visible
      visibility visible
      .modal__wrapper
        transition opacity 300ms 0ms, visibility 0ms 0ms
        opacity 1
        visibility visible
      .modal__dialog
        transition transform 300ms 0ms
        transform scale(1, 1)
    &__dialog
      display inline-block
      vertical-align middle
      z-index 100
      margin auto
      transition transform 300ms 0ms
      transform scale(.5, .5)
      padding 0
      width 90%
      position relative
      white-space normal
    &__content
      padding 10px
      border-top-left-radius 4px
      border-top-right-radius 4px
      background #fff
    &__close
      cursor pointer
      width 100%
      border none
      text-align center
      font-size 14px
      line-height 34px
      user-select none
      white-space nowrap
      background #ddd
      border-bottom-left-radius 4px
      border-bottom-right-radius 4px
</style>