<template lang="pug">
  .cart
    div(v-if="priceTotal > 0")
      .cart__item(v-for="item in items", :key="item.id")
        .grid
          .grid__item.cart__image
            img(:src="item.images[0].src")
          .grid__item
            .cart__title {{ item.title }}
            div Артикуль
        .cart__offer
          span
            .cart__price {{ item.price }} ₽
          span
            .icon.icon_image_clear.icon_size_s.icon_color_main
          span
            .cart__btn.cart__btn_decrement(v-on:click="remove(item.id)")
              .icon.icon_image_minus.icon_size_m.icon_color_main(v-bind:class="{ 'icon_color_disabled': item.quantity == 1 }")
            .cart__count {{ item.quantity }} 
            .cart__btn.cart__btn_increment(v-on:click="add(item.id)")
              .icon.icon_image_plus.icon_size_m.icon_color_main
          span
            .cart__btn.cart__btn_delete(v-on:click="removeAll(item.id)")
              .icon.icon_image_delete.icon_size_m.icon_color_main
      
      .cart__total Итого: {{ priceTotal }} ₽
      router-link(to="/cart/order" tag="div" class="cart__btn cart__btn_order") Оформить заказ
</template>

<script>
  export default {
    computed: {
      priceTotal() {
        let price = 0
        this.items.forEach(el => {
          price = price + el.price * el.quantity
        });

        return price
      },
      items () {
        const allProducts = this.$store.state.catalog.products
        const cart = this.$store.state.cart

        let items = []

        items = cart.map( el => {
          let product = allProducts.find( p => p.id === el.id )
          product.quantity = el.quantity
          return product
        })

        return items
      }
    },
    methods: {
      remove(id) {
        let item = this.items.find( p => p.id === id )
        
        if (item.quantity != 1) {
          this.$store.dispatch("cart", {
            action: "remove",
            id
          })
        }
      },
      add(id) {
        this.$store.dispatch("cart", {
          action: "add",
          id
        })
      },
      removeAll(id) {
        this.$store.dispatch("cart", {
          action: "delete",
          id
        })
      }
    },
    name: 'cart'
  }
</script>

<style lang="stylus">
  .cart
    & .grid__item
      flex 0 0 calc(100% - 90px)
      max-width calc(100% - 90px)
    &__offer
      display flex
      justify-content space-between
      -webkit-box-pack justify
      margin-top 4px
    &__item
      width 100%
      background #fff
      padding 10px
      margin-bottom 5px
      *
        align-self center
        vertical-align top
    &__image
      width 90px !important
      flex 0 0 90px !important
      padding-right 10px
      img 
        width 100%
    &__title
      padding-right 10px
      font-size 20px
    &__price
      font-size 20px
      line-height 34px
      font-weight 400
      display inline-block
      margin-right 10px
    &__btn
      font-weight 300
      display inline-block
      width 40px
      height 40px
      text-align center
      line-height 34px
      font-size 24px
      background #e6e6e6
      color #000
      border-radius 50px
      padding 8px
      &_disabled
        color #adadad
      &_order
        width calc(100% - 20px)
        height auto
        padding 10px
        line-height 1em
        margin auto
        display block
        background #FEDA1E
      &_decrement
        border-radius 0px
        border-top-left-radius 50px
        border-bottom-left-radius 50px
        width 40px
        padding-left 10px
      &_increment
        border-radius 0px
        border-top-right-radius 50px
        border-bottom-right-radius 50px
        width 40px
        padding-left 6px
      &_delete
        margin-left 5px
    &__count
      display inline-block
      width 46px
      height 40px
      text-align center
      line-height 40px
      font-size 16px
      background #fff
      border 1px solid #e6e6e6
      font-weight 400
    &__total
      text-align right 
      background #fff
      padding 10px
      margin-bottom 20px
      font-size 20px
</style>
