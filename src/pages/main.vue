<template lang="pug">
  div
    div(v-for="item in items")
      product(:folder="item")
</template>

<script>
  import product from "@/components/product/product"

  export default {
    computed: {
      items () {
        return this.$store.state.day
      }
    },
    name: "main",
    components: {
      product
    }
  }
</script>
