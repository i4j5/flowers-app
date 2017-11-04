<template lang="pug">
  div
    div(v-for="item in items", :key="item.id")
      div {{ item.title }} - {{ item.quantity }}
      .btn(v-on:click="removeCart(item.id)") Удалить
</template>

<script>
  export default {
    computed: {
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
      removeCart(id) {
        this.$store.dispatch("cart", {
          action: "remove",
          id
        })
      }
    },
    name: 'cart'
  }
</script>
