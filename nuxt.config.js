const isDev = process.env.NODE_ENV === 'development';

export default {
    // mode: isDev ? 'spa' : 'universal',
    // mode: 'universal',
    env: {
        title: '冰凌胧月的小窝'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: '冰凌胧月的小窝',
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: '欢迎来到我的秘密花园'
            },
            {
                name: 'keywords',
                content: '冰凌胧月, Ice-Hazymoon'
            },
            {
                name: 'author',
                content: 'Ice-Hazymoon'
            },
            {
                name: 'HandheldFriendly',
                content: true
            },
            {
                property: 'og:site_name',
                content: 'Ice-Hazymoon'
            },
            {
                property: 'og:title',
                content: 'Ice-Hazymoon 的博客'
            },
            {
                property: 'og:locale',
                content: 'zh_CN'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: '欢迎来到我的秘密花园'
            },
            {
                property: 'og:image',
                content: '/icon.png'
            },
            {
                name: 'twitter:card',
                content: 'summary'
            },
            {
                name: 'twitter:title',
                content: 'Ice-Hazymoon 的博客'
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: '欢迎来到我的秘密花园'
            },
            {
                name: 'apple-mobile-web-app-capable',
                content: 'yes'
            },
            {
                name: 'apple-mobile-web-app-title',
                content: 'Ice-Hazymoon'
            },
            {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'white'
            },
            {
                name: 'theme-color',
                content: '#ff80b0'
            },
            {
                name: 'msapplication-TileColor',
                content: '#ff80b0'
            },
            {
                name: 'msapplication-TileImage',
                content: '/icon.png'
            },
            {
                name: 'msapplication-TileImage',
                content: '/icon.png'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#9399ff',
        height: '4px'
    },
    /*
     ** Global CSS
     */
    css: [
        // 'normalize.css',
        // 'kursor/dist/kursor.css',
        '~/styles/tailwind.scss',
        '~/styles/owo.scss',
        '~/styles/typo.scss',
        '~styles/main.scss',
        'eva-icons/style/eva-icons.css'
    ],
    styleResources: {
        scss: ['styles/help.scss', '~/styles/theme.scss']
    },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        './plugins/request.js',
        // {
        //     src: './plugins/kursor.js',
        //     ssr: false
        // },
        // {
        //     src: './plugins/db.js',
        //     ssr: false
        // },
        {
            src: './components/UI/index.js'
        },
        // {
        //     src: './plugins/clipboard.js',
        //     ssr: false
        // },
        {
            src: './plugins/vue-lazyload.js',
            ssr: false
        },
        {
            src: './plugins/v-tooltip.js',
            ssr: false
        },
        // {
        //     src: './plugins/v-waves.js',
        //     ssr: false
        // },
        {
            src: '~/plugins/localStorage.js',
            ssr: false
        },
        {
            src: '~/plugins/SmoothScroll.js',
            ssr: false
        },
        {
            src: '~/plugins/console.style.js',
            ssr: false
        }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        // '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/amp',
        '@nuxtjs/sitemap',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        '@nuxtjs/style-resources',
        'nuxt-purgecss',
        'nuxt-i18n',
        [
            '@nuxtjs/google-analytics',
            {
                id: 'UA-98634098-1'
            }
        ],
        ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }]
    ],
    amp: {},
    sitemap: {
        hostname: 'https://imiku.me',
        gzip: true,
        exclude: []
    },
    i18n: {
        seo: true,
        locales: [
            {
                code: 'zh',
                iso: 'zh-CN',
                name: '简体中文'
            },
            {
                code: 'ja',
                iso: 'ja',
                name: '日本語'
            },
            {
                code: 'en',
                iso: 'en',
                name: 'English'
            }
        ],
        vueI18nLoader: true,
        defaultLocale: 'zh',
        baseUrl: 'https://imiku.me',
        vueI18n: {
            locale: 'zh',
            fallbackLocale: 'zh',
            silentFallbackWarn: true
        },
        lazy: false,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            onlyOnRoot: true,
            alwaysRedirect: true,
            fallbackLocale: 'zh'
        }
    },
    purgeCSS: {
        enabled: !isDev,
        whitelist: [
            'html',
            'body',
            'figure',
            'typo',
            "[aria-hidden='true']",
            "[aria-hidden='false']"
        ],
        whitelistPatterns: [
            /(md|lg|sm|xl):/,
            /eva/,
            /hljs/,
            /pre/,
            /sprite|owo/,
            /scrollbar/,
            /text-theme/,
            /tooltip|x-placement|arrow|he-plugin-simple|weather-view-he/,
            /(hover|focus|active|disabled|visited|first|last|odd|even):/,
            /medium/,
            /kursor|notCursor/
        ],
        whitelistPatternsChildren: [/typo/]
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: isDev
            ? 'http://localhost:3333/express'
            : 'https://imikume.cdn.hazymoon.vip/express',
        progress: false
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        publicPath:
            'https://cdn.jsdelivr.net/gh/Ice-Hazymoon/blog_pages/.nuxt/dist/client/',
        extends(config, ctx) {
            config.resolve.alias.vue = 'vue/dist/vue.common';
        },
        postcss: {
            plugins: {
                tailwindcss: {},
                'postcss-pxtorem': {
                    rootValue: 16,
                    propList: ['*'],
                    selectorBlackList: ['html']
                },
                autoprefixer: {},
                'postcss-easing-gradients': {}
                // '@fullhuman/postcss-purgecss': {
                //     content: [
                //         './pages/**/*.vue',
                //         './layouts/**/*.vue',
                //         './components/**/*.vue'
                //     ],
                //     whitelist: ['html', 'body'],
                //     whitelistPatterns: [
                //         /(md|lg|sm|xl):/,
                //         /eva/,
                //         /tooltip/,
                //         /(hover|focus|active|disabled|visited|first|last|odd|even):/
                //     ]
                // }
            }
        },
        extend(config, ctx) {}
    },
    workbox: {
        enabled: false,
        manifest: {
            description: 'Ice-Hazymoon的博客',
            display: 'standalone',
            name: 'Ice-Hazymoon',
            short_name: 'Ice-Hazymoon',
            start_url: '/',
            background_color: '#ffffff',
            theme_color: '#ff80b0',
            scope: '/',
            lang: 'zh-cn',
            publicPath: '/'
        }
    },
    manifest: {
        description: 'Ice-Hazymoon的博客',
        display: 'standalone',
        name: 'Ice-Hazymoon',
        short_name: 'Ice-Hazymoon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ff80b0',
        scope: '/',
        lang: 'zh-cn',
        publicPath: '/'
    },
    router: {
        prefetchLinks: false,
        mode: 'history',
        extendRoutes(routes, resolve) {
            // routes.unshift({
            //     path: '/index.html',
            //     component: resolve(__dirname, 'pages/index.vue')
            // });
            routes.unshift({
                name: 'page-page.html',
                path: '/page/:page.html',
                component: resolve(__dirname, 'pages/index.vue')
            });
            routes.unshift({
                name: 'author-id-page.html',
                path: '/author/:id/:page.html',
                component: resolve(__dirname, 'pages/author/_id.vue')
            });
            routes.unshift({
                name: 'category-id-page.html',
                path: '/category/:id/:page.html',
                component: resolve(__dirname, 'pages/category/_id.vue')
            });
            routes.unshift({
                name: 'tag-id-page.html',
                path: '/tag/:id/:page.html',
                component: resolve(__dirname, 'pages/tag/_id.vue')
            });
            routes.unshift({
                name: 'search-keyword-page.html',
                path: '/search/:keyword/:page.html',
                component: resolve(__dirname, 'pages/Search.html.vue')
            });
            routes.unshift({
                name: 'search-keyword',
                path: '/search/:keyword',
                component: resolve(__dirname, 'pages/Search.html.vue')
            });
            // routes.push({
            //     name: '404',
            //     path: '*',
            //     component: resolve(__dirname, 'pages/404.vue')
            // });
        }
    },
    render: {
        resourceHints: false
    }
};
