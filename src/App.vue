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
    &_image_home
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGQ9Ik0xNiwxLjZMMS44LDE0SDV2MTZoNy4xaDcuOEgyN1YxNGgzLjJMMTYsMS42eiBNMTQsMjh2LThoNHY4SDE0eiBNMjUsMjhoLTVWMThoLTh2MTBIN1YxMi4zbDktOGw5LDhWMjh6Ii8+DQo8L3N2Zz4NCg==")
    &_image_cart
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xMS41LDI2LjNjLTAuMiwwLjItMC4zLDAuNC0wLjMsMC43YzAsMC4zLDAuMSwwLjUsMC4zLDAuN2MwLjIsMC4yLDAuNCwwLjMsMC43LDAuM2MwLjMsMCwwLjUtMC4xLDAuNy0wLjMNCgkJYzAuMi0wLjIsMC4zLTAuNSwwLjMtMC43cy0wLjEtMC41LTAuMy0wLjdDMTIuNSwyNS45LDExLjksMjUuOSwxMS41LDI2LjN6Ii8+DQoJPHBhdGggZD0iTTIxLjUsMjYuM2MtMC4yLDAuMi0wLjMsMC41LTAuMywwLjdzMC4xLDAuNSwwLjMsMC43YzAuMiwwLjIsMC40LDAuMywwLjcsMC4zYzAuMywwLDAuNS0wLjEsMC43LTAuMw0KCQljMC4yLTAuMiwwLjMtMC41LDAuMy0wLjdzLTAuMS0wLjUtMC4zLTAuN0MyMi41LDI1LjksMjEuOSwyNS45LDIxLjUsMjYuM3oiLz4NCgk8cGF0aCBkPSJNOC43LDhDOC41LDcsOC40LDYuOSw4LjMsNi43QzcuOSw1LjMsNi45LDUsNi4zLDVIMnYyaDQuM2MwLDAsMC4xLDAuMSwwLjEsMC4zYzAuNCwxLjYsNCwxNi44LDQsMTdsMC4yLDAuOGgxMy42bDAuNC0yDQoJCUgxMi40Yy0wLjEsMC0wLjMtMS4yLTAuNS0yaDExLjljMS44LDAsMy0xLjYsMy40LTIuNkwyOS42LDhIOC43eiBNMjUuNCwxNy43Yy0wLjEsMC4zLTAuNywxLjMtMS42LDEuM0gxMS40Yy0wLjctMy0xLjYtNi0yLjItOWgxOA0KCQlMMjUuNCwxNy43eiIvPg0KPC9nPg0KPC9zdmc+DQo=")
    &_image_plus
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHBvaW50cz0iMjksMTUgMTcsMTUgMTcsMyAxNSwzIDE1LDE1IDMsMTUgMywxNyAxNSwxNyAxNSwyOSAxNywyOSAxNywxNyAyOSwxNyAiLz4NCjwvc3ZnPg0K")
    &_image_minus
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IHg9IjMiIHk9IjE1IiB3aWR0aD0iMjYiIGhlaWdodD0iMiIvPg0KPC9zdmc+DQo=")
    &_image_clear
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHBvaW50cz0iMjkuNywzLjcgMjguMywyLjMgMTYsMTQuNiAzLjcsMi4zIDIuMywzLjcgMTQuNiwxNiAyLjMsMjguMyAzLjcsMjkuNyAxNiwxNy40IDI4LjMsMjkuNyAyOS43LDI4LjMgMTcuNCwxNiAiLz4NCjwvc3ZnPg0K")
    &_image_delete
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGQ9Ik0yNS4xLDZIMjJWNC4zQzIyLDMsMjEuMiwyLDE5LjksMmgtNy44QzEwLjgsMiwxMCwzLDEwLDQuM1Y2SDYuOUM1LjYsNiw1LDYuOSw1LDguMlYxM2gxdjE0LjdDNiwyOSw2LjksMzAsOC4yLDMwaDE1LjYNCgljMS4zLDAsMi4yLTEsMi4yLTIuM1YxM2gxVjguMkMyNyw2LjksMjYuNCw2LDI1LjEsNnogTTEyLDQuM0MxMiw0LjEsMTEuOSw0LDEyLjEsNGg3LjhDMjAuMSw0LDIwLDQuMSwyMCw0LjNWNmgtOFY0LjN6IE0yMy44LDI4DQoJSDguMkM4LDI4LDgsMjcuOSw4LDI3LjdWMTNoMTZ2MTQuN0MyNCwyNy45LDI0LDI4LDIzLjgsMjh6IE0yNSwxMWgtMC45SDcuOUg3VjhoMThWMTF6Ii8+DQo8L3N2Zz4NCg==")
    &_image_menu
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxyZWN0IHg9IjMiIHk9IjE1IiB3aWR0aD0iMjYiIGhlaWdodD0iMiIvPg0KCTxyZWN0IHg9IjMiIHk9IjkiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyIi8+DQoJPHJlY3QgeD0iMyIgeT0iMjEiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyIi8+DQo8L2c+DQo8L3N2Zz4NCg==")
    &_image_grid
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLDE0aDExVjNIM1YxNHogTTUsNWg3djdINVY1eiIvPg0KCTxwYXRoIGQ9Ik0xOCwzdjExaDExVjNIMTh6IE0yNywxMmgtN1Y1aDdWMTJ6Ii8+DQoJPHBhdGggZD0iTTMsMjloMTFWMThIM1YyOXogTTUsMjBoN3Y3SDVWMjB6Ii8+DQoJPHBhdGggZD0iTTE4LDI5aDExVjE4SDE4VjI5eiBNMjAsMjBoN3Y3aC03VjIweiIvPg0KPC9nPg0KPC9zdmc+DQo=")


  .input
    font-size 14px
    line-height inherit
    position relative
    display inline-block
    box-sizing border-box
    padding 0 10px
    height 40px
    background #fff
    width 100%
    border 1px solid #ababab
    outline none
    margin-bottom 10px
</style>
