<template lang="pug">
  .product
    slider(:images="folder.images")
    .product__content
      .product__title {{ folder.title }}
      .product__price {{ folder.price }} ₽
      .product__delivery Доставка после 16
      .product__row
        .product__col.product__col.product__col_left
          .product__btn.product__btn_tmpl_order(v-on:click="addCart") Заказать
        .product__col.product__col.product__col_right
          modal(:link="infoBtn") 
            span(v-html="folder.discription")
</template>

<script>
  import slider from '@/components/slider/slider'
  import modal from '@/components/modal/modal'

  export default {
    name: 'product',
    data: () => {
      return {
        infoBtn: "<div class='product__btn product__btn_tmpl_info'>О букете</div>"
      }
    },
    props:{
      folder: {
        type: Object,
        required: true
      }
    },
    methods: {
      info() {
        console.log()
      },
      addCart() {
        this.$store.dispatch("cart", {
          action: "add",
          id: this.$props.folder.id
        })
      }
    },
    components: {
      slider,
      modal
    }
  }
</script>

<style lang="stylus">
  .product
    width 100%
    background-color #fff
    margin-bottom  10px
    padding-bottom 10px
    &__content
      padding 0 10px
    &__title
      font-size 16px
      line-height 1.2em
      margin-bottom 5px
    &__delivery
      font-size 12px
      line-height 1.25em
      margin 10px 0
    &__price
      font-size 20px
      line-height 1em
      font-weight 300
      display inline-block
    &__image
      max-width 100%
    &__row
      white-space nowrap
      display table
      width 100%
    &__col
      width 50%  
      display table-cell
      &_left
        padding-right 4px
      &_right
        padding-left 4px
    &__btn
      border none
      text-align center
      font-size 14px
      line-height 34px
      border-radius 4px
      user-select none
      white-space nowrap
      &_tmpl_info
        border 1px solid #aaa
      &_tmpl_order
        background #ddd
</style>