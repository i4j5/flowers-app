<template lang="pug">
  #app.page
    .loader(:class="{ loader_active : loading }")
      .spinner 
    .header
    .content
      router-view
    .footer
      menu-bar
</template>

<script>
  import menuBar from '@/components/menu/menu'
  import '@/components/fonts/fonts.css'

  export default {
    name: 'app',
    computed: {
      loading () {
        return this.$store.state.loading
      }
    },
    beforeCreate() {
      this.$store.dispatch('getCatalog')
    },
    components: {
      menuBar
    }
  }
</script>

<style lang="stylus">
  *, ::after, ::before 
    box-sizing border-box
    padding 0
    margin 0
  body
    background-color #e8e8e8
    width 100%
    padding 0
    margin 0
  #app
    font-family 'Roboto', Arial, sans-serif
    font-weight 400
    font-style normal
  .page
    padding 40px 0 80px
  .loader
    position fixed
    width 100%
    height 100%
    background-color #fff
    left 0
    top 0
    z-index 99999
    display none 
    &_active
      display block

  .spinner
    width 40px
    height 40px
    position relative
    top 50%
    left 50%
    margin-top -20px
    margin-left -20px
    background-color #000
    border-radius 100%
    animation sk-scaleout 1.0s infinite ease-in-out
  @keyframes sk-scaleout
    0%
      transform scale(0)
    100%
      transform scale(1.0)
      opacity 0

  .header
    background-color #fff
    position fixed
    top 0
    left 0
    width 100%
    display block
    height 40px
    box-shadow 0 1px 4px #ddd
    z-index 100
  .footer
    background-color #fff	
    position fixed
    bottom 0
    left 0
    width 100%
    display block
    height 60px
    box-shadow 0 -1px 4px #ddd
    z-index 100
  .content
    padding-top 5px
  .grid
    display flex
    flex-flow row wrap
    max-width 100%
    &__item
      position relative
      display inline-block
      vertical-align top
      margin 0
    &_size_2
      & .grid__item 
        flex 0 0 calc(100%/2)
        max-width calc(100%/2)
    &_size_3
      & .grid__item 
        flex 0 0 calc(100%/3)
        max-width calc(100%/3)
    &_size_4
      & .grid__item 
        flex 0 0 calc(100%/4)
        max-width calc(100%/4)

  .icon
    vertical-align top
    background 50% no-repeat
    display inline-block
    &_color_main
      opacity .53
    &_color_disabled
      opacity .15
    &_size_s
      width 16px
      height 16px
      background-size 16px
    &_size_m
      width 24px
      height 24px
      background-size 24px
    &_image_plus
      background-image url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTExIDExVjIuOTkxYzAtLjUzNi40NDctLjk5MSAxLS45OTEuNTU2IDAgMSAuNDQ0IDEgLjk5MVYxMWg4LjAwOGMuNTM2IDAgLjk5Mi40NDcuOTkyIDEgMCAuNTU2LS40NDUgMS0uOTkyIDFIMTN2OC4wMDhjMCAuNTM2LS40NDguOTkyLTEgLjk5Mi0uNTU3IDAtMS0uNDQ1LTEtLjk5MlYxM0gyLjk5MUMyLjQ1NSAxMyAyIDEyLjU1MiAyIDEyYzAtLjU1Ny40NDQtMSAuOTkxLTFIMTF6Ii8+PC9zdmc+")
    &_image_minus
      background-image url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHJlY3QgeD0iMiIgeT0iMTEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyIiByeD0iMSIvPjwvc3ZnPg==")
    &_image_clear
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgPGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLW9wYWNpdHk9IjAuODciPiAgICAgICAgPGcgc3Ryb2tlPSIjMDAwMDAwIj4gICAgICAgICAgICA8cGF0aCBkPSJNNyw4IEwxNiwxNyI+PC9wYXRoPiAgICAgICAgICAgIDxwYXRoIGQ9Ik03LDE3IEwxNiw4Ij48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=")
    &_image_delete
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgPGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8cmVjdCBmaWxsLW9wYWNpdHk9IjAuMyIgZmlsbD0iI0ZGMzUwMCIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+ICAgICAgICA8cGF0aCBkPSJNOC44MDQsNiBMMTUuMTk1LDYgTDE0LjA3Niw0LjIwOCBDMTQuMDIzLDQuMTI0IDEzLjc5Nyw0IDEzLjY5Niw0IEwxMC4zMDMsNCBDMTAuMjAzLDQgOS45NzUsNC4xMjYgOS45MjMsNC4yMDggTDguODA0LDYgWiBNMTcuMzI2LDcuOTQ0IEMxNy4yMjIsNy45ODAgMTcuMTEyLDggMTYuOTk3LDggTDcuMDAyLDggQzYuODg3LDggNi43NzYsNy45ODAgNi42NzMsNy45NDUgQzYuNTEzLDcuOTgwIDYuMzUzLDggNi4xOTYsOCBMNCw4IEw0LDYgTDYuMTk2LDYgQzYuMjk3LDYgNi41MjMsNS44NzUgNi41NzYsNS43OTEgTDguMjI3LDMuMTQ4IEM4LjY0NSwyLjQ4MSA5LjUxNSwyIDEwLjMwMywyIEwxMy42OTYsMiBDMTQuNDg1LDIgMTUuMzUzLDIuNDc4IDE1Ljc3MiwzLjE0OCBMMTcuNDIzLDUuNzkxIEMxNy40NzMsNS44NzAgMTcuNzA4LDYgMTcuODAzLDYgTDIwLDYgTDIwLDggTDE3LjgwMyw4IEMxNy42NDYsOCAxNy40ODYsNy45ODAxNy4zMjYsNy45NDQgWiBNNiw5IEwxOCw5IEwxOCwxOS45OTcgQzE4LDIxLjEwMyAxNy4wOTgsMjIgMTUuOTkxLDIyIEw4LjAwOCwyMiBDNi44OTksMjIgNiwyMS4xMDYgNiwxOS45OTcgTDYsOSBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=")
</style>
