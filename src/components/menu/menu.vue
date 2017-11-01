<template lang="pug">
  .menu
    router-link(to="/" tag="div" class="menu__item")
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
    &__item
      width 25%
      float left
      color #000
      text-deactivated none
      border none
      &_active
        color #e05555
    &__text
      text-align center
      font-size 10px
      line-height 1em
    &__icon
      width 30px
      height 30px
      background-color #ddd
      margin 10px auto 5px auto
</style>