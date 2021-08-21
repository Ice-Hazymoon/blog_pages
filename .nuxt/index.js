import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_googleanalytics_a377870c from 'nuxt_plugin_googleanalytics_a377870c' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_pluginutils_5f90787c from 'nuxt_plugin_pluginutils_5f90787c' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginseo_5539bf96 from 'nuxt_plugin_pluginseo_5539bf96' // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_5756688d from 'nuxt_plugin_pluginrouting_5756688d' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_0d8d1602 from 'nuxt_plugin_pluginmain_0d8d1602' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_amp_7ba50ede from 'nuxt_plugin_amp_7ba50ede' // Source: .\\amp.js (mode: 'all')
import nuxt_plugin_workbox_7675a248 from 'nuxt_plugin_workbox_7675a248' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_80446270 from 'nuxt_plugin_metaplugin_80446270' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_76f51788 from 'nuxt_plugin_iconplugin_76f51788' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_6426882c from 'nuxt_plugin_axios_6426882c' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_request_29fe4b4e from 'nuxt_plugin_request_29fe4b4e' // Source: ..\\plugins\\request.js (mode: 'all')
import nuxt_plugin_index_b4216704 from 'nuxt_plugin_index_b4216704' // Source: ..\\components\\UI\\index.js (mode: 'all')
import nuxt_plugin_vuelazyload_48a9e110 from 'nuxt_plugin_vuelazyload_48a9e110' // Source: ..\\plugins\\vue-lazyload.js (mode: 'client')
import nuxt_plugin_vtooltip_335b3591 from 'nuxt_plugin_vtooltip_335b3591' // Source: ..\\plugins\\v-tooltip.js (mode: 'client')
import nuxt_plugin_localStorage_830ec59e from 'nuxt_plugin_localStorage_830ec59e' // Source: ..\\plugins\\localStorage.js (mode: 'client')
import nuxt_plugin_SmoothScroll_c7b818b4 from 'nuxt_plugin_SmoothScroll_c7b818b4' // Source: ..\\plugins\\SmoothScroll.js (mode: 'client')
import nuxt_plugin_consolestyle_87c2fe5a from 'nuxt_plugin_consolestyle_87c2fe5a' // Source: ..\\plugins\\console.style.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"冰凌胧月的小窝","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"欢迎来到我的秘密花园"},{"name":"keywords","content":"冰凌胧月, Ice-Hazymoon"},{"name":"author","content":"Ice-Hazymoon"},{"name":"HandheldFriendly","content":true},{"property":"og:site_name","content":"Ice-Hazymoon"},{"property":"og:title","content":"Ice-Hazymoon 的博客"},{"property":"og:locale","content":"zh_CN"},{"hid":"og:description","property":"og:description","content":"欢迎来到我的秘密花园"},{"property":"og:image","content":"\u002Ficon.png"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Ice-Hazymoon 的博客"},{"hid":"twitter:description","name":"twitter:description","content":"欢迎来到我的秘密花园"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-title","content":"Ice-Hazymoon"},{"name":"apple-mobile-web-app-status-bar-style","content":"white"},{"name":"theme-color","content":"#ff80b0"},{"name":"msapplication-TileColor","content":"#ff80b0"},{"name":"msapplication-TileImage","content":"\u002Ficon.png"},{"name":"msapplication-TileImage","content":"\u002Ficon.png"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_googleanalytics_a377870c === 'function') {
    await nuxt_plugin_googleanalytics_a377870c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_5f90787c === 'function') {
    await nuxt_plugin_pluginutils_5f90787c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_5539bf96 === 'function') {
    await nuxt_plugin_pluginseo_5539bf96(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_5756688d === 'function') {
    await nuxt_plugin_pluginrouting_5756688d(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_0d8d1602 === 'function') {
    await nuxt_plugin_pluginmain_0d8d1602(app.context, inject)
  }

  if (typeof nuxt_plugin_amp_7ba50ede === 'function') {
    await nuxt_plugin_amp_7ba50ede(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_7675a248 === 'function') {
    await nuxt_plugin_workbox_7675a248(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_80446270 === 'function') {
    await nuxt_plugin_metaplugin_80446270(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_76f51788 === 'function') {
    await nuxt_plugin_iconplugin_76f51788(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_6426882c === 'function') {
    await nuxt_plugin_axios_6426882c(app.context, inject)
  }

  if (typeof nuxt_plugin_request_29fe4b4e === 'function') {
    await nuxt_plugin_request_29fe4b4e(app.context, inject)
  }

  if (typeof nuxt_plugin_index_b4216704 === 'function') {
    await nuxt_plugin_index_b4216704(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuelazyload_48a9e110 === 'function') {
    await nuxt_plugin_vuelazyload_48a9e110(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vtooltip_335b3591 === 'function') {
    await nuxt_plugin_vtooltip_335b3591(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_localStorage_830ec59e === 'function') {
    await nuxt_plugin_localStorage_830ec59e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_SmoothScroll_c7b818b4 === 'function') {
    await nuxt_plugin_SmoothScroll_c7b818b4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_consolestyle_87c2fe5a === 'function') {
    await nuxt_plugin_consolestyle_87c2fe5a(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
