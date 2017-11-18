<template lang="pug">
  .cart
    div(v-if="priceTotal > 0")
      .cart__item(v-for="item in items", :key="item.id")
        .grid
          .grid__item.cart__image
            img(:src="item.images[0].src")
          .grid__item
            .cart__title {{ item.title }}
            .cart__price {{ item.price }} ₽
            .cart__btn.cart__btn_decrement(v-on:click="remove(item.id)", v-bind:class="{ 'cart__btn_disabled': item.quantity == 1 }") - 
            .cart__count {{ item.quantity }} 
            .cart__btn.cart__btn_increment(v-on:click="add(item.id)") +

            .cart__btn.cart__btn_delete(v-on:click="removeAll(item.id)") X
      
      div Итого: {{ priceTotal }} ₽
      .cart__btn.cart__btn_order Оформить заказ
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
      flex 0 0 calc(100% - 80px)
      max-width calc(100% - 80px)
    &__item
      width 100%
      background #fff
      padding 5px 10px
      *
        vertical-align top
    &__image
      width 80px !important
      flex 0 0 80px !important
      padding-right 10px
      img 
        width 100%
    &__title
      padding-right 10px
    &__price
      font-size 20px
      line-height 34px
      font-weight 300
      display inline-block
      margin-right 10px
    &__btn
      font-weight 300
      display inline-block
      width 34px
      height 34px
      text-align center
      line-height 34px
      font-size 24px
      background #ccc
      color #000
      border-radius 4px
      &_disabled
        color #adadad
      &_order
        width 100%
      &_decrement
        border-radius 0px
        border-top-left-radius 4px
        border-bottom-left-radius 4px
      &_increment
        border-radius 0px
        border-top-right-radius 4px
        border-bottom-right-radius 4px
      &_delete
        margin-left 5px
    &__count
      display inline-block
      width 36px
      height 34px
      text-align center
      line-height 34px
      font-size 16px
      background #fff
      border 1px solid #ccc
      font-weight 400
    
</style>
