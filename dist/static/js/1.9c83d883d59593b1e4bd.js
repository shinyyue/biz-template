webpackJsonp([1],{Sdl4:function(t,n){},ZHiF:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("bOdI"),s=e.n(o),i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"son"},[n("h1",[this._v("count: "+this._s(this.count))])])},staticRenderFns:[]},u=e("VU/8")({name:"son",computed:{count:function(){return this.$store.state.homeStore.count}}},i,!1,null,null,null).exports,c={data:function(){return{count:0}},components:s()({},u.name,u),methods:{add:function(){this.count++,this.$store.dispatch("getCountAdd",this.count)},jumpto:function(){this.$router.push("/test")}},mounted:function(){}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"home"}},[e("div",{staticClass:"info"},[t._v("\n        欢迎进来\n    ")]),t._v(" "),e("son"),t._v(" "),e("div",{staticClass:"bottom"},[e("van-button",{attrs:{type:"primary",plain:""},on:{click:function(n){t.jumpto()}}},[t._v("跳转")]),t._v(" "),e("van-button",{attrs:{type:"primary",plain:""},on:{click:function(n){t.add()}}},[t._v("添加")])],1)],1)},staticRenderFns:[]};var a=e("VU/8")(c,r,!1,function(t){e("Sdl4")},null,null);n.default=a.exports}});
//# sourceMappingURL=1.9c83d883d59593b1e4bd.js.map