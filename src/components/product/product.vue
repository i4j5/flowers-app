<template lang="pug">
  .product
    .product__title {{ folder.title }}
    .product__price {{ folder.price }}
    .product__id {{ folder.id }}
</template>

<script>
  export default {
    name: 'menu',
    data: () => {
      return {}
    },
    props:{
      folder: {
        type: Object,
        required: true
      }
    },
    methods: {

    }
  }
</script>

<style lang="stylus">
  .product
    width 100%
    background-color #fff
    margin-bottom  10px
</style>