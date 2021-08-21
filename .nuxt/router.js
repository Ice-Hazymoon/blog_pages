import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _78bc281e = () => interopDefault(import('..\\pages\\About.html.vue' /* webpackChunkName: "pages/About.html" */))
const _376d2445 = () => interopDefault(import('..\\pages\\author\\index.vue' /* webpackChunkName: "pages/author/index" */))
const _bd9fcd1c = () => interopDefault(import('..\\pages\\category\\index.vue' /* webpackChunkName: "pages/category/index" */))
const _44ba5c30 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _60917794 = () => interopDefault(import('..\\pages\\Github.html.vue' /* webpackChunkName: "pages/Github.html" */))
const _3422251c = () => interopDefault(import('..\\pages\\Links.html.vue' /* webpackChunkName: "pages/Links.html" */))
const _2b834922 = () => interopDefault(import('..\\pages\\Search.html.vue' /* webpackChunkName: "pages/Search.html" */))
const _1a4e550a = () => interopDefault(import('..\\pages\\tag\\index.vue' /* webpackChunkName: "pages/tag/index" */))
const _2f939776 = () => interopDefault(import('..\\pages\\Timeline.html.vue' /* webpackChunkName: "pages/Timeline.html" */))
const _255ae578 = () => interopDefault(import('..\\pages\\Twitter.html.vue' /* webpackChunkName: "pages/Twitter.html" */))
const _461173ed = () => interopDefault(import('..\\pages\\author\\_id.vue' /* webpackChunkName: "pages/author/_id" */))
const _af0c5f4c = () => interopDefault(import('..\\pages\\category\\_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _0aa211f2 = () => interopDefault(import('..\\pages\\tag\\_id.vue' /* webpackChunkName: "pages/tag/_id" */))
const _267a96d2 = () => interopDefault(import('..\\pages\\_year\\_month\\_day\\_id.vue' /* webpackChunkName: "pages/_year/_month/_day/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About.html",
    component: _78bc281e,
    meta: {},
    alias: ["/amp/About.html"],
    name: "About.html___zh"
  }, {
    path: "/author",
    component: _376d2445,
    meta: {},
    alias: ["/amp/author"],
    name: "author___zh"
  }, {
    path: "/category",
    component: _bd9fcd1c,
    meta: {},
    alias: ["/amp/category"],
    name: "category___zh"
  }, {
    path: "/en",
    component: _44ba5c30,
    meta: {},
    alias: ["/amp/"],
    name: "index___en"
  }, {
    path: "/Github.html",
    component: _60917794,
    meta: {},
    alias: ["/amp/Github.html"],
    name: "Github.html___zh"
  }, {
    path: "/ja",
    component: _44ba5c30,
    meta: {},
    alias: ["/amp/"],
    name: "index___ja"
  }, {
    path: "/Links.html",
    component: _3422251c,
    meta: {},
    alias: ["/amp/Links.html"],
    name: "Links.html___zh"
  }, {
    path: "/Search.html",
    component: _2b834922,
    meta: {},
    alias: ["/amp/Search.html"],
    name: "Search.html___zh"
  }, {
    path: "/tag",
    component: _1a4e550a,
    meta: {},
    alias: ["/amp/tag"],
    name: "tag___zh"
  }, {
    path: "/Timeline.html",
    component: _2f939776,
    meta: {},
    alias: ["/amp/Timeline.html"],
    name: "Timeline.html___zh"
  }, {
    path: "/Twitter.html",
    component: _255ae578,
    meta: {},
    alias: ["/amp/Twitter.html"],
    name: "Twitter.html___zh"
  }, {
    path: "/en/About.html",
    component: _78bc281e,
    meta: {},
    alias: ["/amp/About.html"],
    name: "About.html___en"
  }, {
    path: "/en/author",
    component: _376d2445,
    meta: {},
    alias: ["/amp/author"],
    name: "author___en"
  }, {
    path: "/en/category",
    component: _bd9fcd1c,
    meta: {},
    alias: ["/amp/category"],
    name: "category___en"
  }, {
    path: "/en/Github.html",
    component: _60917794,
    meta: {},
    alias: ["/amp/Github.html"],
    name: "Github.html___en"
  }, {
    path: "/en/Links.html",
    component: _3422251c,
    meta: {},
    alias: ["/amp/Links.html"],
    name: "Links.html___en"
  }, {
    path: "/en/Search.html",
    component: _2b834922,
    meta: {},
    alias: ["/amp/Search.html"],
    name: "Search.html___en"
  }, {
    path: "/en/tag",
    component: _1a4e550a,
    meta: {},
    alias: ["/amp/tag"],
    name: "tag___en"
  }, {
    path: "/en/Timeline.html",
    component: _2f939776,
    meta: {},
    alias: ["/amp/Timeline.html"],
    name: "Timeline.html___en"
  }, {
    path: "/en/Twitter.html",
    component: _255ae578,
    meta: {},
    alias: ["/amp/Twitter.html"],
    name: "Twitter.html___en"
  }, {
    path: "/ja/About.html",
    component: _78bc281e,
    meta: {},
    alias: ["/amp/About.html"],
    name: "About.html___ja"
  }, {
    path: "/ja/author",
    component: _376d2445,
    meta: {},
    alias: ["/amp/author"],
    name: "author___ja"
  }, {
    path: "/ja/category",
    component: _bd9fcd1c,
    meta: {},
    alias: ["/amp/category"],
    name: "category___ja"
  }, {
    path: "/ja/Github.html",
    component: _60917794,
    meta: {},
    alias: ["/amp/Github.html"],
    name: "Github.html___ja"
  }, {
    path: "/ja/Links.html",
    component: _3422251c,
    meta: {},
    alias: ["/amp/Links.html"],
    name: "Links.html___ja"
  }, {
    path: "/ja/Search.html",
    component: _2b834922,
    meta: {},
    alias: ["/amp/Search.html"],
    name: "Search.html___ja"
  }, {
    path: "/ja/tag",
    component: _1a4e550a,
    meta: {},
    alias: ["/amp/tag"],
    name: "tag___ja"
  }, {
    path: "/ja/Timeline.html",
    component: _2f939776,
    meta: {},
    alias: ["/amp/Timeline.html"],
    name: "Timeline.html___ja"
  }, {
    path: "/ja/Twitter.html",
    component: _255ae578,
    meta: {},
    alias: ["/amp/Twitter.html"],
    name: "Twitter.html___ja"
  }, {
    path: "/en/author/:id",
    component: _461173ed,
    meta: {},
    alias: ["/amp/author/:id"],
    name: "author-id___en"
  }, {
    path: "/en/category/:id",
    component: _af0c5f4c,
    meta: {},
    alias: ["/amp/category/:id"],
    name: "category-id___en"
  }, {
    path: "/en/page/:page.html",
    component: _44ba5c30,
    meta: {},
    alias: ["/amp/page/:page.html"],
    name: "page-page.html___en"
  }, {
    path: "/en/search/:keyword",
    component: _2b834922,
    meta: {},
    alias: ["/amp/search/:keyword"],
    name: "search-keyword___en"
  }, {
    path: "/en/tag/:id",
    component: _0aa211f2,
    meta: {},
    alias: ["/amp/tag/:id"],
    name: "tag-id___en"
  }, {
    path: "/ja/author/:id",
    component: _461173ed,
    meta: {},
    alias: ["/amp/author/:id"],
    name: "author-id___ja"
  }, {
    path: "/ja/category/:id",
    component: _af0c5f4c,
    meta: {},
    alias: ["/amp/category/:id"],
    name: "category-id___ja"
  }, {
    path: "/ja/page/:page.html",
    component: _44ba5c30,
    meta: {},
    alias: ["/amp/page/:page.html"],
    name: "page-page.html___ja"
  }, {
    path: "/ja/search/:keyword",
    component: _2b834922,
    meta: {},
    alias: ["/amp/search/:keyword"],
    name: "search-keyword___ja"
  }, {
    path: "/ja/tag/:id",
    component: _0aa211f2,
    meta: {},
    alias: ["/amp/tag/:id"],
    name: "tag-id___ja"
  }, {
    path: "/en/author/:id/:page.html",
    component: _461173ed,
    meta: {},
    alias: ["/amp/author/:id/:page.html"],
    name: "author-id-page.html___en"
  }, {
    path: "/en/category/:id/:page.html",
    component: _af0c5f4c,
    meta: {},
    alias: ["/amp/category/:id/:page.html"],
    name: "category-id-page.html___en"
  }, {
    path: "/en/search/:keyword/:page.html",
    component: _2b834922,
    meta: {},
    alias: ["/amp/search/:keyword/:page.html"],
    name: "search-keyword-page.html___en"
  }, {
    path: "/en/tag/:id/:page.html",
    component: _0aa211f2,
    meta: {},
    alias: ["/amp/tag/:id/:page.html"],
    name: "tag-id-page.html___en"
  }, {
    path: "/ja/author/:id/:page.html",
    component: _461173ed,
    meta: {},
    alias: ["/amp/author/:id/:page.html"],
    name: "author-id-page.html___ja"
  }, {
    path: "/ja/category/:id/:page.html",
    component: _af0c5f4c,
    meta: {},
    alias: ["/amp/category/:id/:page.html"],
    name: "category-id-page.html___ja"
  }, {
    path: "/ja/search/:keyword/:page.html",
    component: _2b834922,
    meta: {},
    alias: ["/amp/search/:keyword/:page.html"],
    name: "search-keyword-page.html___ja"
  }, {
    path: "/ja/tag/:id/:page.html",
    component: _0aa211f2,
    meta: {},
    alias: ["/amp/tag/:id/:page.html"],
    name: "tag-id-page.html___ja"
  }, {
    path: "/author/:id",
    component: _461173ed,
    meta: {},
    alias: ["/amp/author/:id"],
    name: "author-id___zh"
  }, {
    path: "/category/:id",
    component: _af0c5f4c,
    meta: {},
    alias: ["/amp/category/:id"],
    name: "category-id___zh"
  }, {
    path: "/page/:page.html",
    component: _44ba5c30,
    meta: {},
    alias: ["/amp/page/:page.html"],
    name: "page-page.html___zh"
  }, {
    path: "/search/:keyword",
    component: _2b834922,
    meta: {},
    alias: ["/amp/search/:keyword"],
    name: "search-keyword___zh"
  }, {
    path: "/tag/:id",
    component: _0aa211f2,
    meta: {},
    alias: ["/amp/tag/:id"],
    name: "tag-id___zh"
  }, {
    path: "/author/:id/:page.html",
    component: _461173ed,
    meta: {},
    alias: ["/amp/author/:id/:page.html"],
    name: "author-id-page.html___zh"
  }, {
    path: "/category/:id/:page.html",
    component: _af0c5f4c,
    meta: {},
    alias: ["/amp/category/:id/:page.html"],
    name: "category-id-page.html___zh"
  }, {
    path: "/search/:keyword/:page.html",
    component: _2b834922,
    meta: {},
    alias: ["/amp/search/:keyword/:page.html"],
    name: "search-keyword-page.html___zh"
  }, {
    path: "/tag/:id/:page.html",
    component: _0aa211f2,
    meta: {},
    alias: ["/amp/tag/:id/:page.html"],
    name: "tag-id-page.html___zh"
  }, {
    path: "/en/:year/:month?/:day?/:id?",
    component: _267a96d2,
    meta: {},
    alias: ["/amp/:year/:month?/:day?/:id?"],
    name: "year-month-day-id___en"
  }, {
    path: "/ja/:year/:month?/:day?/:id?",
    component: _267a96d2,
    meta: {},
    alias: ["/amp/:year/:month?/:day?/:id?"],
    name: "year-month-day-id___ja"
  }, {
    path: "/",
    component: _44ba5c30,
    meta: {},
    alias: ["/amp/"],
    name: "index___zh"
  }, {
    path: "/:year/:month?/:day?/:id?",
    component: _267a96d2,
    meta: {},
    alias: ["/amp/:year/:month?/:day?/:id?"],
    name: "year-month-day-id___zh"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
