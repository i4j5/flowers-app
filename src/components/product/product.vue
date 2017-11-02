<template lang="pug">
  .product
    .product__title {{ folder.title }}
    .product__price {{ folder.price }}
    .product__id {{ folder.id }}
    .btn(v-on:click="addCart") Добавить
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
      addCart() {
        console.log(this.$props.folder.id)
        this.$store.dispatch("cart", {
          action: "add",
          id: this.$props.folder.id
        })
      }
    }
  }
</script>

<style lang="stylus">
  .product
    width 100%
    background-color #fff
    margin-bottom  10px
</style>