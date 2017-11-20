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
      opacity .8
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
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjMUQxRDFCIiBkPSJNMTkuNCwyOS41aC02Ljh2LTExaDYuOFYyOS41eiBNMTMuNiwyOC41aDQuOHYtOWgtNC44VjI4LjV6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjMUQxRDFCIiBkPSJNMjYuNiwyOS41SDUuNFYxMy42SDMuMUwxNiwyLjNsMTIuOSwxMS4zaC0yLjNWMjkuNXogTTYuNCwyOC41aDE5LjJWMTIuNmgwLjZMMTYsMy43TDUuOCwxMi42aDAuNlYyOC41eiINCgkJCS8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=")
    &_image_cart
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTI4MCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjgwIDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQzNiwyNTIuOGMtMS42LTcuOS0zLTE0LjQtNC0xOS4yYy0xMi44LTY0LTU3LjYtODAtODAtNzYuOEgyMjR2MzJoMTI4YzMuMiwwLDM4LjQtMy4yLDQ4LDUxLjJjMTIuOCw2Ny4yLDk2LDQ4MCw5Niw0ODANCgkJbDMuMiwxMi44SDkyOHYtMzJINTI0LjhjLTMuMi0xNy45LTEwLTUyLjgtMTguNS05Nkg4OTZjODkuNiwwLDExMi0xMTIsMTEyLTExNS4ybDcwLjQtMjM2LjhINDM2eiBNOTc2LDQ4My4yYzAsMC0xNiw4OS42LTgwLDg5LjYNCgkJSDUwMGMtMTguOC05NS40LTQzLTIxNi41LTU3LjUtMjg4aDU5MS4xTDk3Niw0ODMuMnoiLz4NCgk8cGF0aCBkPSJNODY0LDc3MS4yYy0yNS42LDAtNDgsMjIuNC00OCw0OHMyMi40LDQ4LDQ4LDQ4czQ4LTIyLjQsNDgtNDhTODg5LjYsNzcxLjIsODY0LDc3MS4yeiBNODY0LDgzNS4yYy05LjYsMC0xNi02LjQtMTYtMTYNCgkJczYuNC0xNiwxNi0xNnMxNiw2LjQsMTYsMTZTODczLjYsODM1LjIsODY0LDgzNS4yeiIvPg0KCTxwYXRoIGQ9Ik01NDQsNzcxLjJjLTI1LjYsMC00OCwyMi40LTQ4LDQ4czIyLjQsNDgsNDgsNDhjMjUuNiwwLDQ4LTIyLjQsNDgtNDhTNTY5LjYsNzcxLjIsNTQ0LDc3MS4yeiBNNTQ0LDgzNS4yDQoJCWMtOS42LDAtMTYtNi40LTE2LTE2czYuNC0xNiwxNi0xNmM5LjYsMCwxNiw2LjQsMTYsMTZTNTUzLjYsODM1LjIsNTQ0LDgzNS4yeiIvPg0KPC9nPg0KPC9zdmc+DQo=")
    &_image_plus
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTI4MCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjgwIDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBvbHlnb24gZmlsbD0iIzFEMUQxQiIgcG9pbnRzPSIxMDU2LDQ5NiA2NTYsNDk2IDY1Niw5NiA2MjQsOTYgNjI0LDQ5NiAyMjQsNDk2IDIyNCw1MjggNjI0LDUyOCA2MjQsOTI4IDY1Niw5MjggNjU2LDUyOCAxMDU2LDUyOCANCgkiLz4NCjwvc3ZnPg0K")
    &_image_minus
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxyZWN0IHg9IjMiIHk9IjE1LjUiIGZpbGw9IiMxRDFEMUIiIHdpZHRoPSIyNiIgaGVpZ2h0PSIxIi8+DQo8L2c+DQo8L3N2Zz4NCg==")
    &_image_clear
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTI4MCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjgwIDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBvbHlnb24gZmlsbD0iIzFEMUQxQiIgcG9pbnRzPSIxMDY3LjcsMTA3IDEwNDUsODQuMyA2NDAsNDg5LjQgMjM1LDg0LjMgMjEyLjMsMTA3IDYxNy40LDUxMiAyMTIuMyw5MTcgMjM1LDkzOS42IDY0MCw1MzQuNiANCgkxMDQ1LDkzOS42IDEwNjcuNyw5MTcgNjYyLjYsNTEyICIvPg0KPC9zdmc+DQo=")
    &_image_delete
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTI4MCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjgwIDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iIzFEMUQxQiIgZD0iTTkzMS4yLDIwNC44SDgyMi40di02Ny4yYzAtMzItMjUuNi01Ny42LTU3LjYtNTcuNkg1MTUuMmMtMzIsMC01Ny42LDI1LjYtNTcuNiw1Ny42djY3LjJIMzQ4LjgNCgljLTMyLDAtNTcuNiwyNS42LTU3LjYsNTcuNnYxNDAuOGg0MS42djQ4My4yYzAsMzIsMjUuNiw1Ny42LDU3LjYsNTcuNmg0OTkuMmMzMiwwLDU3LjYtMjUuNiw1Ny42LTU3LjZWNDAzLjJoNDEuNlYyNjIuNA0KCUM5ODguOCwyMzAuNCw5NjMuMiwyMDQuOCw5MzEuMiwyMDQuOHogTTQ4OS42LDEzNy42YzAtMTIuOCwxMi44LTI1LjYsMjUuNi0yNS42aDI0OS42YzEyLjgsMCwyNS42LDEyLjgsMjUuNiwyNS42djY3LjJINDg5LjZWMTM3LjYNCgl6IE04ODkuNiw5MTJIMzkwLjRjLTEyLjgsMC0yNS42LTEyLjgtMjUuNi0yNS42VjQwMy4yaDU1MC40djQ4My4yQzkxNS4yLDg5OS4yLDkwMi40LDkxMiw4ODkuNiw5MTJ6IE05NTYuOCwzNzEuMmgtMjUuNmgtMTZIMzY0LjgNCgloLTE2aC0yNS42VjI2Mi40YzAtMTIuOCwxMi44LTI1LjYsMjUuNi0yNS42aDU4Mi40YzEyLjgsMCwyNS42LDEyLjgsMjUuNiwyNS42VjM3MS4yeiIvPg0KPC9zdmc+DQo=")
    &_image_menu
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTI4MCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjgwIDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHJlY3QgeD0iMjI0IiB5PSI0OTYiIGZpbGw9IiMxRDFEMUIiIHdpZHRoPSI4MzIiIGhlaWdodD0iMzIiLz4NCgk8cmVjdCB4PSIyMjQiIHk9IjMxMC40IiBmaWxsPSIjMUQxRDFCIiB3aWR0aD0iODMyIiBoZWlnaHQ9IjMyIi8+DQoJPHJlY3QgeD0iMjI0IiB5PSI2ODEuNiIgZmlsbD0iIzFEMUQxQiIgd2lkdGg9IjgzMiIgaGVpZ2h0PSIzMiIvPg0KPC9nPg0KPC9zdmc+DQo=")
    &_image_grid
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTI4MCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjgwIDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iIzFEMUQxQiIgZD0iTTI0MCw0MzJoMzIwVjExMkgyNDBWNDMyeiBNMjcyLDE0NGgyNTZ2MjU2SDI3MlYxNDR6Ii8+DQoJPHBhdGggZmlsbD0iIzFEMUQxQiIgZD0iTTcyMCwxMTJ2MzIwaDMyMFYxMTJINzIweiBNMTAwOCw0MDBINzUyVjE0NGgyNTZWNDAweiIvPg0KCTxwYXRoIGZpbGw9IiMxRDFEMUIiIGQ9Ik0yNDAsOTEyaDMyMFY1OTJIMjQwVjkxMnogTTI3Miw2MjRoMjU2djI1NkgyNzJWNjI0eiIvPg0KCTxwYXRoIGZpbGw9IiMxRDFEMUIiIGQ9Ik03MjAsOTEyaDMyMFY1OTJINzIwVjkxMnogTTc1Miw2MjRoMjU2djI1Nkg3NTJWNjI0eiIvPg0KPC9nPg0KPC9zdmc+DQo=")
    &_image_tick
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwb2x5Z29uIGZpbGw9IiMxRDFEMUIiIHBvaW50cz0iMTMuMiwyNi4xIDIuNywxOC42IDMuMywxNy44IDEzLDI0LjcgMjguNiw2LjMgMjkuNCw2LjkgCSIvPg0KPC9nPg0KPC9zdmc+DQo=")
    &_image_calendar
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTI4MCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjgwIDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iIzFEMUQxQiIgZD0iTTEwMTQuNCwxNzZIOTYwdjMyaDU0LjRjMTIuOCwwLDI1LjYsMTIuOCwyNS42LDI1LjZ2NjIwLjhjMCwxMi44LTEyLjgsMjUuNi0yNS42LDI1LjZIMjY1LjYNCgkJYy0xMi44LDAtMjUuNi0xMi44LTI1LjYtMjUuNlYyMzMuNmMwLTEyLjgsMTIuOC0yNS42LDI1LjYtMjUuNkgzMjB2LTMyaC01NC40Yy0zMiwwLTU3LjYsMjUuNi01Ny42LDU3LjZ2NjIwLjgNCgkJYzAsMzIsMjUuNiw1Ny42LDU3LjYsNTcuNmg3NDguOGMzMiwwLDU3LjYtMjUuNiw1Ny42LTU3LjZWMjMzLjZDMTA3MiwyMDEuNiwxMDQ2LjQsMTc2LDEwMTQuNCwxNzZ6Ii8+DQoJPHJlY3QgeD0iNTEyIiB5PSIxNzYiIGZpbGw9IiMxRDFEMUIiIHdpZHRoPSIyNTYiIGhlaWdodD0iMzIiLz4NCgk8cGF0aCBmaWxsPSIjMUQxRDFCIiBkPSJNNDE2LDMwNGM5LjYsMCwxNi02LjQsMTYtMTZWMTI4YzAtOS42LTYuNC0xNi0xNi0xNmMtOS42LDAtMTYsNi40LTE2LDE2djE2MEM0MDAsMjk3LjYsNDA2LjQsMzA0LDQxNiwzMDR6DQoJCSIvPg0KCTxwYXRoIGZpbGw9IiMxRDFEMUIiIGQ9Ik04NjQsMzA0YzkuNiwwLDE2LTYuNCwxNi0xNlYxMjhjMC05LjYtNi40LTE2LTE2LTE2cy0xNiw2LjQtMTYsMTZ2MTYwQzg0OCwyOTcuNiw4NTQuNCwzMDQsODY0LDMwNHoiLz4NCgk8cmVjdCB4PSI0MDAiIHk9IjU0NCIgZmlsbD0iIzFEMUQxQiIgd2lkdGg9IjMyIiBoZWlnaHQ9Ijk2Ii8+DQoJPHJlY3QgeD0iNTYwIiB5PSI1NDQiIGZpbGw9IiMxRDFEMUIiIHdpZHRoPSIzMiIgaGVpZ2h0PSI5NiIvPg0KCTxyZWN0IHg9IjcyMCIgeT0iNTQ0IiBmaWxsPSIjMUQxRDFCIiB3aWR0aD0iMzIiIGhlaWdodD0iOTYiLz4NCgk8cmVjdCB4PSI4ODAiIHk9IjU0NCIgZmlsbD0iIzFEMUQxQiIgd2lkdGg9IjMyIiBoZWlnaHQ9Ijk2Ii8+DQoJPHJlY3QgeD0iNDAwIiB5PSI3MDQiIGZpbGw9IiMxRDFEMUIiIHdpZHRoPSIzMiIgaGVpZ2h0PSI5NiIvPg0KCTxyZWN0IHg9IjU2MCIgeT0iNzA0IiBmaWxsPSIjMUQxRDFCIiB3aWR0aD0iMzIiIGhlaWdodD0iOTYiLz4NCgk8cmVjdCB4PSI3MjAiIHk9IjcwNCIgZmlsbD0iIzFEMUQxQiIgd2lkdGg9IjMyIiBoZWlnaHQ9Ijk2Ii8+DQoJPHJlY3QgeD0iODgwIiB5PSI3MDQiIGZpbGw9IiMxRDFEMUIiIHdpZHRoPSIzMiIgaGVpZ2h0PSI5NiIvPg0KPC9nPg0KPC9zdmc+DQo=")
    &_image_clock
      background-image url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTI4MCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjgwIDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iIzFEMUQxQiIgZD0iTTY0MCw4MGMtMjM2LjgsMC00MzIsMTk1LjItNDMyLDQzMnMxOTUuMiw0MzIsNDMyLDQzMnM0MzItMTk1LjIsNDMyLTQzMlM4NzYuOCw4MCw2NDAsODB6IE02NDAsOTEyDQoJCWMtMjIwLjgsMC00MDAtMTc5LjItNDAwLTQwMHMxNzkuMi00MDAsNDAwLTQwMHM0MDAsMTc5LjIsNDAwLDQwMFM4NjAuOCw5MTIsNjQwLDkxMnoiLz4NCgk8cGF0aCBmaWxsPSIjMUQxRDFCIiBkPSJNNjU2LDUwNS42VjIyNGMwLTkuNi02LjQtMTYtMTYtMTZzLTE2LDYuNC0xNiwxNnYyOTcuNmwxMzEuMiwxMzEuMmMxMC44LDEwLjUsMjIuNCwzLjIsMjUuNiwwDQoJCWM2LjQtNi40LDYuNC0xNiwwLTIyLjRMNjU2LDUwNS42eiIvPg0KPC9nPg0KPC9zdmc+DQo=")

  .select
    *
      vertical-align top
    &__text
      font-size 13px
      color #606266
      line-height 40px
      position relative
      display block
      box-sizing border-box
      padding 0 14px
      background #fff
      width calc(100% - 40px)
      height 40px
      border 1px solid #e3e3e3
      border-right none
      border-top-left-radius 2px
      border-bottom-left-radius 2px
      display inline-block
    &__icon
      padding 8px
      width 40px
      height 40px
      border-top-right-radius 2px
      border-bottom-right-radius 2px
      background #e3e3e3
      display inline-block
  .input
    font-size 13px
    color #606266
    line-height inherit
    position relative
    display inline-block
    box-sizing border-box
    padding 0 14px
    background #fff
    width 100%
    height 40px
    border 1px solid #e3e3e3
    outline none
    border-radius 2px
    transition border-color .15s ease-in-out
    &:hover
      border 1px solid #bbb
  
  .checkbox
    position relative
    display block
    padding-top 2px
    font-size 13px
    line-height 1.4
    padding-left 30px
    color #626262
    i
      opacity 0
      position absolute
      top 0
      left 0
      display block
      width 20px
      height 20px
      transition opacity .15s ease-in-out
      &:before
      &:after
        position absolute
        content ""
        height 2px
        background #a1a3a5
      &:before
        width 7px
        transform rotate(45deg)
        top 11px
        left 3px
      &:after
        width 12px
        transform rotate(-45deg)
        top 9px
        left 6px
    &_checked
      i
        opacity 1
    &:before
      position absolute
      content ""
      top 0
      left 0
      display block
      width 20px
      height 20px
      border 1px solid #bdc3c7
  .textarea
    font-size 13px
    line-height 1.4
    color #606266
    position relative
    display inline-block
    box-sizing border-box
    padding 12px 14px
    background #fff
    width 100%
    height auto
    border 1px solid #e3e3e3
    outline none
    border-radius 2px
    transition border-color .15s ease-in-out
    resize none
    &:hover
      border 1px solid #bbb
  .form
    .grid__item
      padding-left 5px
      &:nth-child(1)
        padding-left 0
        padding-right 5px
    &__item 
      margin-bottom 15px
      label
        display block
        clear both
        margin-bottom 7px
        font-size 13px
        color #626262
</style>
