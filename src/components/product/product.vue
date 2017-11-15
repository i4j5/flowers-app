<template lang="pug">
  .product
    slider(:images="folder.images")
    .product__content
      .product__col-left
        .product__title {{ folder.title }}
        .product__btn.product__btn_tmpl_info Подробнее
        .product__description {{ folder.description }}
      .product__col-right
        .product__price {{ folder.price }} ₽
        br
        .product__btn.product__btn_tmpl_order(v-on:click="addCart") Заказать
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
    padding-bottom 10px
    &__title
      font-size 16px
      line-height 25px
    &__content
      display table-row
      &:after
        content ""
        display table
        clear both
    &__col
      &-left
        padding 0 5px 0 10px
        display table-cell
        width 100%
        // float left
        // display inline-block
      &-right
        padding 0 10px 0 5px
        display table-cell
        // display inline-block
        // float right
        text-align center
    &__price
      font-size 20px
      line-height 1.4em
      font-weight 300
      display inline-block
      padding 0 14px
    &__image
      max-width 100%
    &__btn
      display inline-block
      border none
      &_tmpl_info
        font-size 14px
        line-height 25px
        padding 0 14px
        user-select none
        white-space nowrap
        border 1px solid #aaa
        border-radius 5px
      &_tmpl_order
        font-size 16px
        line-height 1.8em
        padding 0 1em
        user-select none
        white-space nowrap
        background #ddd
        border-radius 5px
</style>