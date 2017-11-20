<template lang="pug">
  .order
    .form
      .form__item
        label Ваше имя
        input.input
      .form__item
        label  Телефон
        input.input
      .form__item
        label Email
        input.input
      .form__item
        .checkbox Я получатель
      .form__item
        .checkbox.checkbox_checked 
          i
          |Не говорить, от кого букет
      .form__item
        .checkbox 
          i
          |Добавить открытку к букету (бесплатно)
      .form__item
        label Текс на открытке
        textarea.textarea
      .form__item
        label Имя получателя
        input.input
      .form__item
        label  Телефон получателя
        input.input
      .form__item
        label Адрес получателя
        textarea.textarea
      .form__item
        .grid.grid_size_2
          .grid__item
            label Дата доставки
            .select
              .select__text 10.12.2017
              .select__icon
                .icon.icon_image_calendar.icon_size_m.icon_color_main
          .grid__item
            .select
              label Интервал доставки
              .select__text 10:00 - 12:00
              .select__icon
                .icon.icon_image_clock.icon_size_m.icon_color_main
      .form__item
        label Коментарий к заказу
        textarea.textarea
</template>

<script>
  export default {
    methods: {
      send() {}
    },
    name: 'order'
  }
</script>

<style lang="stylus">
  .order
    background #fff
    padding 20px 10px
</style>
