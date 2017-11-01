import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import main from '@/pages/main'
import cart from '@/pages/cart'
import notFound from '@/pages/not-found'

const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}

export default new Router({
	mode: 'history',
	base: '/',
  //linkActiveClass: 'menu__item_active',
  linkExactActiveClass: 'menu__item_active',
	scrollBehavior,
  routes: [
    { path: '/', component: main },
    { path: '/cart', component: cart },
    { path: '*', component: notFound }
  ]
})