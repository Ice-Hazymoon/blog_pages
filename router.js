import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _902da7b6 = () => interopDefault(import('../pages/About.html.vue' /* webpackChunkName: "pages/About.html" */))
const _4e0350a7 = () => interopDefault(import('../pages/author/index.vue' /* webpackChunkName: "pages/author/index" */))
const _2a180c1a = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _335eafc9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0704f46d = () => interopDefault(import('../pages/Github.html.vue' /* webpackChunkName: "pages/Github.html" */))
const _251bf179 = () => interopDefault(import('../pages/Links.html.vue' /* webpackChunkName: "pages/Links.html" */))
const _de9c4f70 = () => interopDefault(import('../pages/Search.html.vue' /* webpackChunkName: "pages/Search.html" */))
const _eb8d97d8 = () => interopDefault(import('../pages/tag/index.vue' /* webpackChunkName: "pages/tag/index" */))
const _071b420f = () => interopDefault(import('../pages/Timeline.html.vue' /* webpackChunkName: "pages/Timeline.html" */))
const _4d5703bf = () => interopDefault(import('../pages/Twitter.html.vue' /* webpackChunkName: "pages/Twitter.html" */))
const _5bab50cf = () => interopDefault(import('../pages/author/_id.vue' /* webpackChunkName: "pages/author/_id" */))
const _36e365fc = () => interopDefault(import('../pages/category/_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _3e25a908 = () => interopDefault(import('../pages/tag/_id.vue' /* webpackChunkName: "pages/tag/_id" */))
const _6ed5c5da = () => interopDefault(import('../pages/_year/_month/_day/_id.vue' /* webpackChunkName: "pages/_year/_month/_day/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About.html",
    component: _902da7b6,
    name: "About.html___zh"
  }, {
    path: "/author",
    component: _4e0350a7,
    name: "author___zh"
  }, {
    path: "/category",
    component: _2a180c1a,
    name: "category___zh"
  }, {
    path: "/en",
    component: _335eafc9,
    name: "index___en"
  }, {
    path: "/Github.html",
    component: _0704f46d,
    name: "Github.html___zh"
  }, {
    path: "/ja",
    component: _335eafc9,
    name: "index___ja"
  }, {
    path: "/Links.html",
    component: _251bf179,
    name: "Links.html___zh"
  }, {
    path: "/Search.html",
    component: _de9c4f70,
    name: "Search.html___zh"
  }, {
    path: "/tag",
    component: _eb8d97d8,
    name: "tag___zh"
  }, {
    path: "/Timeline.html",
    component: _071b420f,
    name: "Timeline.html___zh"
  }, {
    path: "/Twitter.html",
    component: _4d5703bf,
    name: "Twitter.html___zh"
  }, {
    path: "/en/About.html",
    component: _902da7b6,
    name: "About.html___en"
  }, {
    path: "/en/author",
    component: _4e0350a7,
    name: "author___en"
  }, {
    path: "/en/category",
    component: _2a180c1a,
    name: "category___en"
  }, {
    path: "/en/Github.html",
    component: _0704f46d,
    name: "Github.html___en"
  }, {
    path: "/en/Links.html",
    component: _251bf179,
    name: "Links.html___en"
  }, {
    path: "/en/Search.html",
    component: _de9c4f70,
    name: "Search.html___en"
  }, {
    path: "/en/tag",
    component: _eb8d97d8,
    name: "tag___en"
  }, {
    path: "/en/Timeline.html",
    component: _071b420f,
    name: "Timeline.html___en"
  }, {
    path: "/en/Twitter.html",
    component: _4d5703bf,
    name: "Twitter.html___en"
  }, {
    path: "/ja/About.html",
    component: _902da7b6,
    name: "About.html___ja"
  }, {
    path: "/ja/author",
    component: _4e0350a7,
    name: "author___ja"
  }, {
    path: "/ja/category",
    component: _2a180c1a,
    name: "category___ja"
  }, {
    path: "/ja/Github.html",
    component: _0704f46d,
    name: "Github.html___ja"
  }, {
    path: "/ja/Links.html",
    component: _251bf179,
    name: "Links.html___ja"
  }, {
    path: "/ja/Search.html",
    component: _de9c4f70,
    name: "Search.html___ja"
  }, {
    path: "/ja/tag",
    component: _eb8d97d8,
    name: "tag___ja"
  }, {
    path: "/ja/Timeline.html",
    component: _071b420f,
    name: "Timeline.html___ja"
  }, {
    path: "/ja/Twitter.html",
    component: _4d5703bf,
    name: "Twitter.html___ja"
  }, {
    path: "/en/author/:id",
    component: _5bab50cf,
    name: "author-id___en"
  }, {
    path: "/en/category/:id",
    component: _36e365fc,
    name: "category-id___en"
  }, {
    path: "/en/page/:page.html",
    component: _335eafc9,
    name: "page-page.html___en"
  }, {
    path: "/en/search/:keyword",
    component: _de9c4f70,
    name: "search-keyword___en"
  }, {
    path: "/en/tag/:id",
    component: _3e25a908,
    name: "tag-id___en"
  }, {
    path: "/ja/author/:id",
    component: _5bab50cf,
    name: "author-id___ja"
  }, {
    path: "/ja/category/:id",
    component: _36e365fc,
    name: "category-id___ja"
  }, {
    path: "/ja/page/:page.html",
    component: _335eafc9,
    name: "page-page.html___ja"
  }, {
    path: "/ja/search/:keyword",
    component: _de9c4f70,
    name: "search-keyword___ja"
  }, {
    path: "/ja/tag/:id",
    component: _3e25a908,
    name: "tag-id___ja"
  }, {
    path: "/en/author/:id/:page.html",
    component: _5bab50cf,
    name: "author-id-page.html___en"
  }, {
    path: "/en/category/:id/:page.html",
    component: _36e365fc,
    name: "category-id-page.html___en"
  }, {
    path: "/en/search/:keyword/:page.html",
    component: _de9c4f70,
    name: "search-keyword-page.html___en"
  }, {
    path: "/en/tag/:id/:page.html",
    component: _3e25a908,
    name: "tag-id-page.html___en"
  }, {
    path: "/ja/author/:id/:page.html",
    component: _5bab50cf,
    name: "author-id-page.html___ja"
  }, {
    path: "/ja/category/:id/:page.html",
    component: _36e365fc,
    name: "category-id-page.html___ja"
  }, {
    path: "/ja/search/:keyword/:page.html",
    component: _de9c4f70,
    name: "search-keyword-page.html___ja"
  }, {
    path: "/ja/tag/:id/:page.html",
    component: _3e25a908,
    name: "tag-id-page.html___ja"
  }, {
    path: "/author/:id",
    component: _5bab50cf,
    name: "author-id___zh"
  }, {
    path: "/category/:id",
    component: _36e365fc,
    name: "category-id___zh"
  }, {
    path: "/page/:page.html",
    component: _335eafc9,
    name: "page-page.html___zh"
  }, {
    path: "/search/:keyword",
    component: _de9c4f70,
    name: "search-keyword___zh"
  }, {
    path: "/tag/:id",
    component: _3e25a908,
    name: "tag-id___zh"
  }, {
    path: "/author/:id/:page.html",
    component: _5bab50cf,
    name: "author-id-page.html___zh"
  }, {
    path: "/category/:id/:page.html",
    component: _36e365fc,
    name: "category-id-page.html___zh"
  }, {
    path: "/search/:keyword/:page.html",
    component: _de9c4f70,
    name: "search-keyword-page.html___zh"
  }, {
    path: "/tag/:id/:page.html",
    component: _3e25a908,
    name: "tag-id-page.html___zh"
  }, {
    path: "/en/:year/:month?/:day?/:id?",
    component: _6ed5c5da,
    name: "year-month-day-id___en"
  }, {
    path: "/ja/:year/:month?/:day?/:id?",
    component: _6ed5c5da,
    name: "year-month-day-id___ja"
  }, {
    path: "/",
    component: _335eafc9,
    name: "index___zh"
  }, {
    path: "/:year/:month?/:day?/:id?",
    component: _6ed5c5da,
    name: "year-month-day-id___zh"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
