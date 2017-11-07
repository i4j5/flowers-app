<template lang="pug">
  div.cart
    div(v-for="item in items", :key="item.id")
      div {{ item.title }}
      .cart__btn.cart__minus(v-on:click="remove(item.id)") -
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

        console.log(items)

        return items
      }
    },
    methods: {
      remove(id) {
        this.$store.dispatch("cart", {
          action: "remove",
          id
        })
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
    &__btn
      display inline-block
      width 20px
      text-align center
      background #ddd
    &__minus
      margin-right 5px
    &__plus
      margin-left 5px
    &__count
      display inline-block
    
</style>
