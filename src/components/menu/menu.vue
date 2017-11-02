<template lang="pug">
  .menu
    router-link(to="/" tag="div" class="menu__item menu__item_page_main")
      .menu__icon
      .menu__text Букет дня 
    router-link(to="/categories" tag="div" class="menu__item")
      .menu__icon
      .menu__text Каталог
    router-link(to="/cart" tag="div" class="menu__item")
      .menu__icon
      .menu__text Корзина
    .menu__item
      .menu__icon
      .menu__text Меню
</template>

<script>
  export default {
    name: 'menu'
  }
</script>

<style lang="stylus">
  .menu
    width 100%
    height 100%
    &__item
      width 25%
      float left
      color #000
      height 100%
      border none
      &_active
        color #e05555
      &_exact-active
        color #e05555 !important
      &_page_main
        color #000
    &__text
      text-align center
      font-size 12px
      line-height 1em
    &__icon
      width 30px
      height 30px
      background-color #ddd
      margin 8px auto 5px auto
</style>