<template lang="pug">
  .order
    .form
      label.form__label Ваше имя
      input(type="text" name="name").input
      label.form__label Телефон
      input(type="text" name="phone").input
      label.form__label Email
      input(type="text" name="email").input
      .form__radio-wrap
        .form__radio-block Я получатель
        .form__radio-block Получатель другой человек
      form__checkbox-btn Не говорить, от кого букет
      form__checkbox-btn Добавить открытку к букету (бесплатно)
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
    padding 0 10px
</style>
