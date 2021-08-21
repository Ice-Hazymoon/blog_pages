exports.ids = [10];
exports.modules = {

/***/ 109:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"page":" - page {page}"},"ja":{"page":" - 第 {page} 頁"},"zh":{"page":" - 第 {page} 页"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/category/_id.vue?vue&type=template&id=4a76f15f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-blog px-8 md:px-10 relative"},[(_vm.loading)?_c('Loading'):_vm._e(),_vm._ssrNode(" "),(_vm.error)?_c('Error',{staticClass:" absolute left-0 top-0 w-full h-full",attrs:{"error":_vm.error}}):_vm._e(),_vm._ssrNode(" "),(!_vm.error && !_vm.loading)?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"article-list mx-auto\">","</div>",[_vm._ssrNode("<div class=\"text-xl flex items-center py-6\">","</div>",[_vm._ssrNode("<i class=\"eva eva-folder-remove-outline mr-2\"></i>分类\n                <b class=\"text-theme mx-1\">"+_vm._ssrEscape(_vm._s(_vm.params.id))+"</b>\n                下共\n                <b class=\"text-theme mx-1\">"+_vm._ssrEscape(_vm._s(_vm.$store.state.data.posts.total))+"</b>\n                篇文章\n                "),(_vm.pagination > 1)?_vm._ssrNode("<div class=\"ml-2 text-gray-500\">","</div>",[_c('i18n',{attrs:{"path":"page","tag":"span"}},[_c('span',{staticClass:"text-theme mx-1",attrs:{"slot":"page"},slot:"page"},[_vm._v(_vm._s(_vm.pagination))])])],1):_vm._e()],2),_vm._ssrNode(" "),(_vm.loading)?_c('Loading'):_vm._e(),_vm._ssrNode(" "),_c('ArticleList',{attrs:{"data":_vm.$store.state.data.posts.items}})],2),_vm._ssrNode(" "),_c('Pagination',{attrs:{"currentPage":_vm.pagination,"totalPages":_vm.$store.state.data.posts.total_pages,"handleLink":_vm.handleLink,"link":true},on:{"change":_vm.getData}})],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/category/_id.vue?vue&type=template&id=4a76f15f&

// EXTERNAL MODULE: ./components/Loading.vue + 2 modules
var Loading = __webpack_require__(82);

// EXTERNAL MODULE: ./components/ArticleList.vue + 4 modules
var ArticleList = __webpack_require__(97);

// EXTERNAL MODULE: ./components/Pagination.vue + 4 modules
var Pagination = __webpack_require__(90);

// EXTERNAL MODULE: ./components/Error.vue + 4 modules
var Error = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/category/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: 'PageCategory',
  components: {
    Pagination: Pagination["a" /* default */],
    ArticleList: ArticleList["a" /* default */],
    Loading: Loading["a" /* default */],
    Error: Error["a" /* default */]
  },

  head() {
    return Object.assign(this.$nuxtI18nSeo(), {
      title: `${this.params.page ? `${this.$t('page', {
        page: this.params.page
      })} - ` : ''}分类 ${this.params.id} 下的文章 - ${"冰凌胧月的小窝"}`
    });
  },

  data() {
    return {
      pagination: parseInt(this.$route.params.page) || 1,
      loading: false,
      error: null
    };
  },

  computed: {
    rootUrl() {
      return `/category/${this.params.id}`;
    },

    params() {
      const params = this.$route.params;
      return {
        page: params.page,
        id: params.id
      };
    }

  },
  watch: {
    pagination(page) {
      if (page < 1) {
        return false;
      }

      if (page > this.$store.state.data.posts.total_pages) {
        return false;
      }

      if (page > 1) {
        this.$router.push(this.localePath(`${this.rootUrl}/${page}.html`));
      } else {
        this.$router.push(this.localePath(`${this.rootUrl}.html`));
      }
    }

  },

  fetch({
    store,
    params,
    redirect
  }) {
    if (true) {
      if (parseInt(params.page) === 1) return redirect('/');
      const page = parseInt(params.page) || 1;
      store.commit('SET_STORE', {
        key: 'ssr_init',
        value: true
      }); // console.log(params.id);

      return store.dispatch('getPosts', {
        page,
        category: params.id.replace('.html', '')
      });
    }
  },

  mounted() {
    if (this.$store.state.ssr_init) return this.$store.commit('resetInit');
    this.loading = true;
    this.error = null;
    this.$store.dispatch('getPosts', {
      page: this.pagination,
      category: this.params.id.replace('.html', '')
    }).then(e => {
      this.loading = false;
    }).catch(err => {
      this.error = err;
      this.loading = false;
    });
  },

  methods: {
    handleLink(page) {
      if (page <= 1) {
        return `${this.rootUrl}.html`;
      } else {
        return `${this.rootUrl}/${page}.html`;
      }
    },

    getData(page) {
      if (page < 1) {
        return false;
      }

      if (page > this.$store.state.data.posts.total_pages) {
        return false;
      }

      this.pagination = page;
    }

  }
});
// CONCATENATED MODULE: ./pages/category/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var category_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// EXTERNAL MODULE: ./pages/category/_id.vue?vue&type=custom&index=0&blockType=i18n
var _idvue_type_custom_index_0_blockType_i18n = __webpack_require__(131);

// CONCATENATED MODULE: ./pages/category/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  category_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "057d591c"
  
)

/* custom blocks */

if (typeof _idvue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(_idvue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4ea4110a", content, true, context)
};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Loading.vue?vue&type=template&id=273104f3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"com-loading"},[_vm._ssrNode("<div class=\"sk-chase\"><div class=\"sk-chase-dot\"></div> <div class=\"sk-chase-dot\"></div> <div class=\"sk-chase-dot\"></div> <div class=\"sk-chase-dot\"></div> <div class=\"sk-chase-dot\"></div> <div class=\"sk-chase-dot\"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Loading.vue?vue&type=template&id=273104f3&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Loading.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0ac9fc58"
  
)

/* harmony default export */ var Loading = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--theme:#ff80b0;--theme-blue:#80b3ff}.com-loading{display:flex;justify-content:center;align-items:center;margin:3.125rem auto}.com-loading .sk-chase{width:2.5rem;height:2.5rem;position:relative;-webkit-animation:sk-chase 2.5s linear infinite both;animation:sk-chase 2.5s linear infinite both}.com-loading .sk-chase-dot{width:100%;height:100%;position:absolute;left:0;top:0;-webkit-animation:sk-chase-dot 2s ease-in-out infinite both;animation:sk-chase-dot 2s ease-in-out infinite both}.com-loading .sk-chase-dot:before{content:\"\";display:block;width:25%;height:25%;background-color:var(--theme);border-radius:100%;-webkit-animation:sk-chase-dot-before 2s ease-in-out infinite both;animation:sk-chase-dot-before 2s ease-in-out infinite both}.com-loading .sk-chase-dot:first-child{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.com-loading .sk-chase-dot:nth-child(2){-webkit-animation-delay:-1s;animation-delay:-1s}.com-loading .sk-chase-dot:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.com-loading .sk-chase-dot:nth-child(4){-webkit-animation-delay:-.8s;animation-delay:-.8s}.com-loading .sk-chase-dot:nth-child(5){-webkit-animation-delay:-.7s;animation-delay:-.7s}.com-loading .sk-chase-dot:nth-child(6){-webkit-animation-delay:-.6s;animation-delay:-.6s}.com-loading .sk-chase-dot:first-child:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.com-loading .sk-chase-dot:nth-child(2):before{-webkit-animation-delay:-1s;animation-delay:-1s}.com-loading .sk-chase-dot:nth-child(3):before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.com-loading .sk-chase-dot:nth-child(4):before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.com-loading .sk-chase-dot:nth-child(5):before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.com-loading .sk-chase-dot:nth-child(6):before{-webkit-animation-delay:-.6s;animation-delay:-.6s}@-webkit-keyframes sk-chase{to{transform:rotate(1turn)}}@keyframes sk-chase{to{transform:rotate(1turn)}}@-webkit-keyframes sk-chase-dot{80%,to{transform:rotate(1turn)}}@keyframes sk-chase-dot{80%,to{transform:rotate(1turn)}}@-webkit-keyframes sk-chase-dot-before{50%{transform:scale(.4)}0%,to{transform:scale(1)}}@keyframes sk-chase-dot-before{50%{transform:scale(.4)}0%,to{transform:scale(1)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Error.vue?vue&type=template&id=18aaea06&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex justify-center items-center"},[_vm._ssrNode("<div class=\"flex justify-center items-center flex-col max-w-full\"><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt=\"error\" class=\"pointer-events-none mx-auto my-4 w-8/12 max-w-full max-h-full\"> <div class=\" text-center text-gray-600 mt-6 w-8/12\"><div class=\"text-2xl\">好像遇到点奇怪的错误，刷新试试吧~</div> <div class=\"text-xl mt-2 line-clamp-1\">\n                错误代码：<code class=\" bg-gray-800 text-white px-1 rounded\">"+_vm._ssrEscape(_vm._s(_vm.error))+"</code></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Error.vue?vue&type=template&id=18aaea06&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Errorvue_type_script_lang_js_ = ({
  name: 'ComError',
  props: {
    error: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/Error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Errorvue_type_script_lang_js_ = (Errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Error.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e86a6c0"
  
)

/* harmony default export */ var Error = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("603eed8f", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f128710a", content, true, context)
};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--theme:#ff80b0;--theme-blue:#80b3ff}.pagination .current-page{color:#fff!important;box-shadow:0 0 0.375rem 0.1875rem rgba(255,128,176,.3)}.pagination [disabled]{opacity:.8;cursor:not-allowed}.pagination [disabled] *{cursor:not-allowed}.pagination [disabled]:hover{border-width:0.0625rem;background-color:transparent;--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=template&id=386c84fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.totalPages),expression:"totalPages"}],staticClass:"pagination flex justify-between items-center text-gray-600 left-0 bottom-0 py-10 w-full"},[_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.localePath(_vm.handleLink(_vm.prevNum))))+(_vm._ssrAttr("disabled",_vm.currentPage === 1))+" class=\"flex items-center justify-center bg-white rounded-full w-10 h-10 border cursor-pointer text-xl ts-3-ease hover:bg-theme hover:text-white hover:border-none\"><i class=\"eva eva-arrow-left-outline\"></i></a> <div class=\"rounded-full flex justify-between items-center mx-2 px-2 text-sm  \"><a"+(_vm._ssrAttr("href",_vm.localePath(_vm.handleLink(1))))+" class=\" bg-white border rounded-full mr-2 flex items-center justify-center w-10 h-10 hover:text-theme ts-3-ease cursor-pointer\""+(_vm._ssrStyle(null,null, { display: (_vm.showFirst) ? '' : 'none' }))+">1</a> <i class=\" mr-2 eva eva-more-horizontal-outline w-8 text-center\""+(_vm._ssrStyle(null,null, { display: (_vm.showFirst) ? '' : 'none' }))+"></i> "+(_vm._ssrList((_vm.btnNum),function(item,index){return ("<a"+(_vm._ssrAttr("href",_vm.localePath(_vm.handleLink(item))))+(_vm._ssrAttr("index",item))+(_vm._ssrClass("bg-white border rounded-full mr-2 flex items-center justify-center w-10 h-10 hover:text-theme hover:border-none ts-3-ease cursor-pointer",{
                'current-page bg-theme text-white ts-3-ease rounded border-none':
                    item === _vm.currentPage
            }))+">"+_vm._ssrEscape(_vm._s(item))+"</a>")}))+" <i class=\" mr-2 eva eva-more-horizontal-outline w-8 text-center\""+(_vm._ssrStyle(null,null, { display: (_vm.showLast) ? '' : 'none' }))+"></i> <a"+(_vm._ssrAttr("href",_vm.localePath(_vm.handleLink(_vm.totalPages))))+(_vm._ssrClass(" bg-white border rounded-full mr-2 flex items-center justify-center w-10 h-10 hover:text-theme ts-3-ease cursor-pointer",{
                'current-page bg-theme text-white ts-3-ease rounded border-none':
                    _vm.totalPages === _vm.currentPage
            }))+(_vm._ssrStyle(null,null, { display: (_vm.showLast) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.totalPages))+"</a></div> <a"+(_vm._ssrAttr("href",_vm.localePath(_vm.handleLink(_vm.nextNum))))+(_vm._ssrAttr("disabled",_vm.currentPage >= _vm.totalPages))+" class=\"flex items-center justify-center bg-white rounded-full w-10 h-10 border cursor-pointer text-xl ts-3-ease hover:bg-theme hover:text-white hover:border-none\"><i class=\"eva eva-arrow-right-outline\"></i></a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=template&id=386c84fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  name: 'Pagination',
  props: {
    pageSize: {
      type: Number,
      default: 0
    },
    totalPages: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 0
    },
    handleLink: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    prevNum() {
      return this.currentPage - 1 || 1;
    },

    nextNum() {
      if (this.currentPage === this.totalPages) {
        return this.totalPages;
      } else {
        return this.currentPage + 1;
      }
    },

    btnNum() {
      if (this.totalPages < 4) {
        return [...Array(this.totalPages)].map((_, i) => i + 1);
      }

      if (this.currentPage < this.totalPages - 1) {
        if (this.currentPage - 2 === 1) {
          return [this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1];
        }

        if (this.currentPage === this.totalPages - 2) {
          return [this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2];
        } else if (this.currentPage === 1) {
          return [this.currentPage, this.currentPage + 1, this.currentPage + 2, this.currentPage + 3];
        } else {
          return [this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2];
        }
      }

      if (this.currentPage >= this.totalPages - 1) {
        if (this.currentPage === this.totalPages) {
          return [this.currentPage - 3, this.currentPage - 2, this.currentPage - 1, this.currentPage];
        }

        if (this.currentPage === this.totalPages - 1) {
          return [this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1];
        }

        return [this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2];
      }

      return [];
    },

    showFirst() {
      if (this.currentPage === 1) {
        return false;
      }

      if (this.currentPage - 1 === 1) {
        return false;
      }

      if (this.currentPage - 2 === 1) {
        return false;
      }

      return true;
    },

    showLast() {
      if (this.currentPage === this.totalPages) {
        return false;
      }

      if (this.currentPage + 1 === this.totalPages) {
        return false;
      }

      if (this.currentPage + 2 === this.totalPages) {
        return false;
      }

      return true;
    }

  },
  methods: {
    next() {
      if (this.totalPages) {
        if (this.currentPage === this.totalPages) return false;
      }

      this.$emit('change', this.currentPage + 1);
    },

    prev() {
      if (this.currentPage === 1) return false;
      this.$emit('change', this.currentPage - 1);
    }

  }
});
// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Pagination.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7850a132"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/background.6f4032b.png";

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/background-2.9e544d5.jpg";

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--theme:#ff80b0;--theme-blue:#80b3ff}@media (min-width:768px){.article-list .article{box-shadow:0.5rem 0.875rem 2.375rem rgba(39,44,49,.06),0.0625rem 0.1875rem 0.5rem rgba(39,44,49,.03)}.article-list .article:hover{--tw-shadow:0 0 transparent;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);box-shadow:0 0 0.0625rem 0.0625rem #e2e8f0}.article-list .article:hover .article-cover img{border-bottom-right-radius:0;border-bottom-left-radius:0}.article-list .article:hover .article-cover:after{content:\"\";opacity:.25}.article-list .article:hover .cover-shadow{opacity:0}}.article-list .article-title{text-shadow:0 0.0625rem 0.1875rem rgba(0,0,0,.3);position:absolute!important;display:flex;line-height:1.3;background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.00602) 10.79%,rgba(0,0,0,.02315) 21.99%,rgba(0,0,0,.05) 33.34%,rgba(0,0,0,.08519) 44.59%,rgba(0,0,0,.12731) 55.48%,rgba(0,0,0,.175) 65.75%,rgba(0,0,0,.22685) 75.14%,rgba(0,0,0,.28148) 83.41%,rgba(0,0,0,.3375) 90.28%,rgba(0,0,0,.39352) 95.51%,rgba(0,0,0,.44815) 98.83%,rgba(0,0,0,.5))}.article-list .article-cover{padding-bottom:40%;transform:scale(1)}.article-list .article-cover:after{content:\"\";pointer-events:none;position:absolute;top:0;left:0;z-index:0;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity));opacity:0;transition:all .5s ease}.article-list .article .cover-shadow{filter:blur(1.25rem);transform:scale(.94) translateY(0.3125rem);opacity:1}.article-list .article .tag:hover{box-shadow:-0.3125rem 0.3125rem 0.75rem #f2f2f2,0.3125rem -0.3125rem 0.75rem #fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/ArticleList.vue?vue&type=template&id=220763d4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.data),function(item,index){return _vm._ssrNode("<div class=\"article bg-white mb-10 md:mb-16 rounded overflow-hidden ts-3-ease border md:border-none\">","</div>",[(item.format === 'standard')?[(item.cover)?_c('nuxt-link',{staticClass:"block article-cover relative ts-1-ease w-full h-0",attrs:{"to":_vm.localePath(item.link)}},[_c('img',{staticClass:"ts-3-ease absolute left-0 top-0 object-cover w-full h-full object-center",attrs:{"src":item.cover,"alt":"cover"}}),_vm._v(" "),_c('div',{staticClass:"cover-shadow hidden md:block ts-3-ease -z-1 w-full h-full bg-cover bg-no-repeat absolute left-0 top-0 bg-center",style:({
                        'background-image': ("url(" + (item.cover) + ")")
                    })}),_vm._v(" "),_c('div',{staticClass:"article-title p-5 md:p-10 items-end z-10 left-0 top-0 w-full h-full text-2xl md:text-3xl text-white"},[_c('div',{staticClass:"w-full"},[_c('div',{staticClass:"line-clamp-2 md:line-clamp-3 font-bold"},[(item.sticky)?_c('span',{staticClass:" text-theme align-middle"},[_c('i',{staticClass:"eva eva-upload-outline"})]):_vm._e(),_vm._v("\n                            "+_vm._s(item.title)+"\n                        ")]),_vm._v(" "),_c('div',{staticClass:"line-clamp-1 text-xl mt-2 md:mt-4"},[_vm._v("\n                            "+_vm._s(item.excerpt)+"\n                        ")])])])]):_c('nuxt-link',{staticClass:"block relative ts-3-ease w-full border-b",attrs:{"to":_vm.localePath(item.link)}},[_c('div',{staticClass:"z-10 left-0 top-0 w-full h-full md:px-10 md:py-8 px-6 py-5 text-2xl md:text-3xl"},[_c('div',{staticClass:"line-clamp-3 font-bold"},[(item.sticky)?_c('span',{staticClass:" text-theme align-middle"},[_c('i',{staticClass:"eva eva-upload-outline"})]):_vm._e(),_vm._v("\n                        "+_vm._s(item.title)+"\n                        "),(item.protected)?_c('span',[_vm._v("[密码保护]")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"line-clamp-1 text-xl mt-2 md:mt-4"},[_vm._v("\n                        "+_vm._s(item.excerpt)+"\n                    ")])]),_vm._v(" "),(item.protected)?_c('div',{staticClass:" absolute right-0 top-0 text-5xl mr-3 mt-3 opacity-50 text-theme"},[_c('i',{staticClass:"eva eva-lock-outline"})]):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"article-info flex px-5 py-4 justify-between\">","</div>",[_vm._ssrNode("<div class=\"flex\">","</div>",[_vm._ssrNode("<div class=\"mr-4 flex items-center\"><i class=\"eva eva-clock-outline mr-1\"></i> <span>"+_vm._ssrEscape(_vm._s(_vm.formatDate(item.date)))+"</span></div> "),_vm._ssrNode("<div class=\"mr-4 items-center hidden sm:flex\">","</div>",[_vm._ssrNode("<i class=\"eva eva-person-outline mr-1\"></i> "),_c('nuxt-link',{staticClass:"hover:text-theme mr-2",attrs:{"to":_vm.localePath(("/author/" + (item.author) + ".html"))}},[_vm._v(_vm._s(item.author))])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mr-4 flex items-center category-items\">","</div>",[_vm._ssrNode("<i class=\"eva eva-folder-outline mr-1\"></i> "),_vm._l((item.category),function(category){return _c('nuxt-link',{key:category.id,staticClass:"hover:text-theme mr-2",attrs:{"to":_vm.localePath(
                                    ("/category/" + (category.slug) + ".html")
                                )}},[_vm._v(_vm._s(category.name))])})],2)],2),_vm._ssrNode(" "),(item.post_tag.length)?_vm._ssrNode("<div class=\"items-center hidden md:flex\">","</div>",_vm._l((item.post_tag),function(tag,i){return _c('nuxt-link',{key:i,staticClass:"ts-3-ease bg-theme text-white text-xs px-2 py-1 mx-1 rounded-full flex items-center tag",attrs:{"to":_vm.localePath(("/tag/" + tag + ".html"))}},[_c('i',{staticClass:"eva eva-hash-outline mr-1"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(tag))])])}),1):_vm._e()],2)]:_vm._e(),_vm._ssrNode(" "),(item.format === 'status')?[_c('nuxt-link',{staticClass:"p-5 flex relative",attrs:{"to":_vm.localePath(item.link)}},[_c('div',{staticClass:" text-5xl text-theme opacity-50 flex items-center mr-6"},[_c('i',{staticClass:"eva eva-edit-2-outline"})]),_vm._v(" "),_c('div',{staticClass:"justify-between flex-grow"},[_c('div',{staticClass:" text-xl"},[_vm._v("\n                        "+_vm._s(item.excerpt)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:" text-gray-500 text-sm self-end flex items-center mt-2"},[_c('i',{staticClass:"eva eva-clock-outline mr-1"}),_vm._v(" "),_c('div',[_vm._v("\n                            "+_vm._s(_vm.formatDate(item.date, 'YYYY年MM月DD日'))+"\n                        ")])])]),_vm._v(" "),(item.sticky)?_c('span',{staticClass:" text-theme text-2xl absolute right-0 top-0 mr-2 mt-2"},[_c('i',{staticClass:"eva eva-upload-outline"})]):_vm._e()])]:_vm._e()],2)}),_vm._ssrNode(" "+((!_vm.data.length)?("<div class=\"my-20 text-3xl text-gray-500 flex items-center justify-center\"><i class=\"eva eva-alert-circle-outline mr-2\"></i>暂时没有内容\n    </div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ArticleList.vue?vue&type=template&id=220763d4&

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "dayjs/plugin/relativeTime"
var relativeTime_ = __webpack_require__(74);
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime_);

// EXTERNAL MODULE: external "dayjs/locale/zh-cn"
var zh_cn_ = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/ArticleList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_dayjs_default.a.locale('zh-cn');
external_dayjs_default.a.extend(relativeTime_default.a);
/* harmony default export */ var ArticleListvue_type_script_lang_js_ = ({
  name: 'ArticleList',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      articleList: [{
        cover: __webpack_require__(93),
        tags: ['喵喵喵', '汪汪汪', '呱呱呱', 'Games'],
        date: '2019-12-02',
        _id: 'abcefg'
      }, {
        cover: __webpack_require__(94),
        tags: ['喵喵喵', '汪汪汪', '呱呱呱', 'Games'],
        date: '2019-12-02',
        _id: 'abcefg'
      }]
    };
  },

  methods: {
    formatDate(date, params) {
      if (params) {
        return external_dayjs_default()(date).format(params);
      } else {
        return external_dayjs_default()().from(external_dayjs_default()(date));
      }
    }

  }
});
// CONCATENATED MODULE: ./components/ArticleList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleListvue_type_script_lang_js_ = (ArticleListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ArticleList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4413a968"
  
)

/* harmony default export */ var ArticleList = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map