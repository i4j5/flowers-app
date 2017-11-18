<template lang="pug">
  .menu.grid.grid_size_4
    router-link(to="/" tag="div" class="grid__item menu__item menu__item_page_main")
      .menu__icon
      .menu__text Букет дня 
    router-link(to="/categories" tag="div" class="grid__item menu__item")
      .menu__icon
      .menu__text Каталог
    router-link(to="/cart" tag="div" class="grid__item menu__item")
      .menu__icon
        .menu__quantity(v-if="quantity > 0") {{ quantity }}
      .menu__text Корзина
    .menu__item.grid__item
      .menu__icon
      .menu__text Меню
</template>

<script>
  export default {
    name: 'menu',
    computed: {
      quantity () {
        let quantity = 0
        this.$store.state.cart.forEach(el => {
          quantity = quantity + el.quantity
        })
        return quantity
      }
    },
  }
</script>

<style lang="stylus">
  .menu
    width 100%
    height 100%
    &__item
      width 100%
      color #000
      height 100%
      border none
      &_active
        .menu__text
          color #e05555
      &_exact-active
        .menu__text
          color #e05555 !important
      &_page_main
        .menu__text
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
      position relative
    .menu__quantity
      font-size 10px
      position absolute
      background #ffb16d
      height 16px
      width 16px
      line-height 16px
      text-align center
      border-radius 100%
      top -4px
      right -2px
</style>