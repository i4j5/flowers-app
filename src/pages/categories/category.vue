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
        return this.$store.state.catalog.products.filter( priduct => priduct.id_category === this.$route.params.id )
      }
    },
    name: "category",
    components: {
      product
    }
  }
</script>
