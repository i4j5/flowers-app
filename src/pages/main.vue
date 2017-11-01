<template lang="pug">
  div
    div(v-for="item in items")
      product(:folder="item")
</template>

<script>
  import product from "@/components/product/product"

  export default {
    data: () => {
      return {
        items: [
          {
            id: 1,
            title: "Цветы"
          },
          {
            id: 2,
            title: "Цветы 1",
            price: 4000
          },
          {
            id: 3,
            title: "Цветы 2",
            price: 1595
          }
        ]
      }
    },
    name: "main",
    components: {
      product
    }
  }
</script>
