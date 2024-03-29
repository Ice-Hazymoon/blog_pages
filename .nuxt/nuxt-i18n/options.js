

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"locale":"zh","fallbackLocale":"zh","silentFallbackWarn":true},
  vueI18nLoader: true,
  locales: [{"code":"zh","iso":"zh-CN","name":"简体中文"},{"code":"ja","iso":"ja","name":"日本語"},{"code":"en","iso":"en","name":"English"}],
  defaultLocale: "zh",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"zh","onlyOnNoPrefix":false,"onlyOnRoot":true,"useCookie":true},
  differentDomains: false,
  seo: true,
  baseUrl: "https://imiku.me",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"zh","iso":"zh-CN","name":"简体中文"},{"code":"ja","iso":"ja","name":"日本語"},{"code":"en","iso":"en","name":"English"}],
  localeCodes: ["zh","ja","en"],
}

export const localeMessages = {}
