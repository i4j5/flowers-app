<template lang="pug">
  .product
    slider(:images="folder.images")   
    .product__title {{ folder.title }}
    .product__price {{ folder.price }}
    .product__id {{ folder.id }}
    .btn(v-on:click="addCart") Добавить
</template>

<script>
  import slider from '@/components/slider/slider'

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
      addCart() {
        this.$store.dispatch("cart", {
          action: "add",
          id: this.$props.folder.id
        })
      }
    },
    components: {
      slider
    }
  }
</script>

<style lang="stylus">
  .product
    width 100%
    background-color #fff
    margin-bottom  10px
    &__image
      max-width 100%
</style>