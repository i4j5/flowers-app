<template lang="pug">
  div
    div(v-for="item in items", :key="item.id")
      .btn(v-on:click="removeCart(item.id)") Удалить
</template>

<script>
  export default {
    computed: {
      // Сделать поиск
      items () {
        return this.$store.state.cart
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
