<template lang="pug">
  div.categories
    div(v-for="item in items", :key="item.id")
      router-link(:to="{ path: 'categories/' + item.id }"  tag="div" class="categories__item" v-bind:style="'background-image: url(' + item.image.src + ')'")
        div {{ item.title }}
</template>

<script>
  export default {
    computed: {
      items () {
        return this.$store.state.catalog.categories
      }
    },
    methods: {},
    name: 'categories'
  }
</script>

<style lang="stylus">
  .categories
    width 100%
    &__item
      text-align center
      color #fff
      padding 40px 0
      background-color #ddd
      background-repeat no-repeat
      background-position center
      background-size 100%
</style>
