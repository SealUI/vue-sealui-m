webpackJsonp([2,5],{400:function(t,e,a){a(401);var o=a(306)(a(403),a(404),"data-v-4d9ed508",null);t.exports=o.exports},401:function(t,e,a){var o=a(402);"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);a(304)("34d17421",o,!0)},402:function(t,e,a){e=t.exports=a(303)(),e.push([t.id,".page-home[data-v-4d9ed508]{top:0}.page-home i[data-v-4d9ed508]{color:#666;margin-top:.02rem}.page__hd[data-v-4d9ed508]{padding:.4rem .2rem}.page__hd .page__title[data-v-4d9ed508]{font-size:.2rem;text-align:center}.page__hd .page__desc[data-v-4d9ed508]{margin-top:.2rem;color:#888;text-align:left;font-size:.14rem}.page__hd .logo[data-v-4d9ed508]{width:100%;text-align:center}.page__hd .logo img[data-v-4d9ed508]{width:1rem;border-radius:.05rem}",""])},403:function(t,e){"use strict";e.__esModule=!0,e.default={data:function(){return{logo:"https://avatars.githubusercontent.com/u/20392063?v=3",title:""}},mounted:function(){var t=this;this.$http.get("https://api.github.com/users/sealui").then(function(e){console.log(e.data),t.logo=e.data.avatar_url,t.title=e.data.bio})},methods:{showTip:function(){this.$seal.alert("文档正在整理中，你可以先看看Demo例子")}}}},404:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-home"},[a("div",{staticClass:"page__hd"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.logo}})]),a("h1",{staticClass:"page__title"},[t._v(t._s(t.title))]),t._m(0)]),a("seal-group",[a("seal-cell",{attrs:{title:"Demo",link:"/demos"}},[a("seal-icon",{attrs:{type:"grid"},slot:"icon"})],1),a("seal-cell",{attrs:{title:"Doc",link:"/"},nativeOn:{click:function(e){t.showTip(e)}}},[a("seal-icon",{attrs:{type:"ios-paper"},slot:"icon"})],1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"page__desc"},[t._v("SealUI-M 是一套移动端的基础组件库，由SealUI Team团队维护。"),a("br"),t._v("目的是为了帮助业务线上的快速开发提供基础支持！")])}]}}});