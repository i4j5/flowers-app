<template lang="pug">
  .slider
    agile(:infinite="false", :arrows="false")
      .slider__item(v-for="image in images")
        img.slider__image(:src="image.src")
</template>

<script>
  export default {
    name: 'slider',
    props:{
      images: {
        type: Array,
        required: true
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  .agile
    &__dots
      bottom 0
      display block
      width 100%
      position absolute
      text-align center
    &__dot
      margin-bottom 10px
      display inline-block
      button
        background-color #ddd
        border none
        border-radius 50%
        cursor pointer
        display block
        height 5px
        font-size 0
        line-height 0
        margin 0 2px
        transition-duration .3s
        width 5px
        &:hover
          background-color #fff
      &--current
        button
          background-color #fff
  .slider
    width 100%
    position relative
    &__image
      max-width 100%
</style>