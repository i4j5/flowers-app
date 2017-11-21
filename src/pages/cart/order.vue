<template lang="pug">
  .order
    .form
      .form__item
        lablel.form__label Ваше имя
        input.input
      .form__item
        lablel.form__label  Телефон
        input.input
      .form__item
        lablel.form__label Email
        input.input
      .form__item
        label.checkbox
          input(class="checkbox__control" type="checkbox")
          span.checkbox__box
          span.checkbox__text Я получатель
      .form__item
        label.checkbox
          input(class="checkbox__control" type="checkbox")
          span.checkbox__box
          span.checkbox__text Не говорить, от кого букет
      .form__item
        label.checkbox
          input(class="checkbox__control" type="checkbox")
          span.checkbox__box
          span.checkbox__text Добавить открытку к букету (бесплатно)
      .form__item
        lablel.form__label Текс на открытке
        textarea.textarea
      .form__item
        lablel.form__label Имя получателя
        input.input
      .form__item
        lablel.form__label  Телефон получателя
        input.input
      .form__item
        lablel.form__label Адрес получателя
        textarea.textarea
      .form__item
        .grid.grid_size_2
          .grid__item
            lablel.form__label Дата доставки
            .select
              .select__text 10.12.2017
              .select__icon
                .icon.icon_image_calendar.icon_size_m.icon_color_main
          .grid__item
            .select
              lablel.form__label Интервал доставки
              .select__text 10:00 - 12:00
              .select__icon
                .icon.icon_image_clock.icon_size_m.icon_color_main
      .form__item
        lablel.form__label Коментарий к заказу
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
