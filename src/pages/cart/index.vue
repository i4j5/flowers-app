<template lang="pug">
  div.cart
    .cart__item(v-for="item in items", :key="item.id")
      .cart__image
        img(:src="item.images[0].src")
      .cart__title {{ item.title }}
      .cart__btn.cart__minus(v-on:click="remove(item.id)", v-bind:class="{ 'cart__btn_disabled': item.quantity == 1 }") - 
      .cart__count {{ item.quantity }} 
      .cart__btn.cart__plus(v-on:click="add(item.id)") +
      div {{ item.price * item.quantity }} руб.
      .cart__btn(v-on:click="removeAll(item.id)") Удалить
    div(v-if="priceTotal > 0")
      hr
      div Итого: {{ priceTotal }} руб.
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
    &__item
      white-space nowrap
      display table
      width 100%
      margin-bottom 10px
      *
        vertical-align top
    &__image
      width 80px
      display table-cell
      padding-right 10px
      img 
        width 100%
    &__title
      display table-cell
      padding-right 10px
    &__btn
      display inline-block
      width 20px
      text-align center
      background #ddd
      &_disabled
        color #adadad
    &__minus
      margin-right 5px
    &__plus
      margin-left 5px
    &__count
      display inline-block
    
</style>
