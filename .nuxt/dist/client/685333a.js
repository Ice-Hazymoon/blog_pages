(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{424:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"page":" - page {page}"},"ja":{"page":" - 第 {page} 頁"},"zh":{"page":" - 第 {page} 页"}}'),delete t.options._Ctor}},556:function(t,e,n){"use strict";var o=n(424),r=n.n(o);e.default=r.a},765:function(t,e,n){"use strict";n.r(e);var o=n(399),r=n(412),l=n(406),c=n(401),h={name:"PageTag",components:{Pagination:l.a,ArticleList:r.a,Loading:o.a,Error:c.a},head:function(){return Object.assign(this.$nuxtI18nSeo(),{title:"".concat(this.params.page?"".concat(this.$t("page",{page:this.params.page})," - "):"","标签 ").concat(this.params.id," 下的文章 - ").concat("冰凌胧月的小窝")})},data:function(){return{pagination:parseInt(this.$route.params.page)||1,loading:!1,error:null}},computed:{rootUrl:function(){return"/tag/".concat(this.params.id)},params:function(){var t=this.$route.params;return{page:t.page,id:t.id}}},watch:{pagination:function(t){return!(t<1)&&(!(t>this.$store.state.data.posts.total_pages)&&void(t>1?this.$router.push(this.localePath("".concat(this.rootUrl).concat(t))):this.$router.push(this.localePath(this.rootUrl))))}},fetch:function(t){t.store,t.params,t.redirect},mounted:function(){var t=this;if(this.$store.state.ssr_init)return this.$store.commit("resetInit");this.loading=!0,this.error=null,this.$store.dispatch("getPosts",{page:this.pagination,tag:this.params.id}).then((function(e){t.loading=!1})).catch((function(e){t.error=e,t.loading=!1}))},methods:{handleLink:function(t){return t<=1?this.rootUrl:"".concat(this.rootUrl).concat(t)},getData:function(t){return!(t<1)&&(!(t>this.$store.state.data.posts.total_pages)&&void(this.pagination=t))}}},d=n(13),m=n(556),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-blog px-8 md:px-10 relative"},[t.loading?n("Loading"):t._e(),t._v(" "),t.error?n("Error",{staticClass:" absolute left-0 top-0 w-full h-full",attrs:{error:t.error}}):t._e(),t._v(" "),t.error||t.loading?t._e():n("div",[n("div",{staticClass:"article-list mx-auto"},[n("div",{staticClass:"text-xl flex items-center py-6"},[n("i",{staticClass:"eva eva-pricetags-outline mr-2"}),t._v("标签\n                "),n("b",{staticClass:"text-theme mx-1"},[t._v(t._s(t.params.id))]),t._v(" 下共\n                "),n("b",{staticClass:"text-theme mx-1"},[t._v(t._s(t.$store.state.data.posts.total))]),t._v("\n                篇文章\n                "),t.pagination>1?n("div",{staticClass:"ml-2 text-gray-500"},[n("i18n",{attrs:{path:"page",tag:"span"}},[n("span",{staticClass:"text-theme mx-1",attrs:{slot:"page"},slot:"page"},[t._v(t._s(t.pagination))])])],1):t._e()]),t._v(" "),t.loading?n("Loading"):t._e(),t._v(" "),n("ArticleList",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{data:t.$store.state.data.posts.items}})],1),t._v(" "),n("Pagination",{attrs:{currentPage:t.pagination,totalPages:t.$store.state.data.posts.total_pages,handleLink:t.handleLink,link:!0},on:{change:t.getData}})],1)],1)}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports}}]);