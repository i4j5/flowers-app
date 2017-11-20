<template lang="pug">
  .menu.grid.grid_size_4
    router-link(to="/" tag="div" class="grid__item menu__item menu__item_page_main")
      .menu__icon
        .icon.icon_image_home
      .menu__text Букет дня 
    router-link(to="/categories" tag="div" class="grid__item menu__item")
      .menu__icon
        .icon.icon_image_grid
      .menu__text Каталог
    router-link(to="/cart" tag="div" class="grid__item menu__item")
      .menu__icon
        .icon.icon_image_cart
        .menu__quantity(v-if="quantity > 0") {{ quantity }}
      .menu__text Корзина
    router-link(to="/menu" tag="div" class="grid__item menu__item")
      .menu__icon
        .icon.icon_image_menu
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
          color #000
         .menu__icon .icon
          opacity 1
      &_page_main
        .menu__text
          color #6f6f6f
        .menu__icon .icon
            opacity .5
      &_exact-active
        .menu__text
          color #000 !important
        .menu__icon .icon
            opacity 1 !important
    &__text
      text-align center
      font-size 12px
      line-height 1em
      color #6f6f6f
    &__icon
      width 30px
      height 30px
      background-size 30px
      margin 8px auto 5px auto
      position relative
      display block
      & .icon
        opacity .5
        width 100%
        height 100%
    &__quantity
      font-size 10px
      position absolute
      background #feda1e
      height 18px
      width 18px
      line-height 19px
      text-align center
      border-radius 100%
      top -4px
      right -4px
</style>