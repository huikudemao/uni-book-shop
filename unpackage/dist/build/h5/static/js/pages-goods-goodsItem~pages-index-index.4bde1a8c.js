(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goodsItem~pages-index-index"],{"08aa":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-row",props:{gutter:{type:[String,Number],default:20},justify:{type:String,default:"start"},align:{type:String,default:"center"},stop:{type:Boolean,default:!0}},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(t){this.$emit("click")}}};e.default=i},"0e1d":function(t,e,a){var i=a("c9fd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("50095853",i,!0,{sourceMap:!1,shadowMode:!1})},"158c":function(t,e,a){"use strict";a.r(e);var i=a("bfba"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"1a27":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-row",style:{alignItems:t.uAlignItem,justifyContent:t.uJustify},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},3313:function(t,e,a){"use strict";var i=a("782e"),n=a.n(i);n.a},3827:function(t,e,a){"use strict";a.r(e);var i=a("a88c"),n=a("b584");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("e42a");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"3655901a",null,!1,i["a"],o);e["default"]=s.exports},"38a1":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-col-0[data-v-0a5981a4]{width:0}.u-col-1[data-v-0a5981a4]{width:calc(100%/12)}.u-col-2[data-v-0a5981a4]{width:calc(100%/12 * 2)}.u-col-3[data-v-0a5981a4]{width:calc(100%/12 * 3)}.u-col-4[data-v-0a5981a4]{width:calc(100%/12 * 4)}.u-col-5[data-v-0a5981a4]{width:calc(100%/12 * 5)}.u-col-6[data-v-0a5981a4]{width:calc(100%/12 * 6)}.u-col-7[data-v-0a5981a4]{width:calc(100%/12 * 7)}.u-col-8[data-v-0a5981a4]{width:calc(100%/12 * 8)}.u-col-9[data-v-0a5981a4]{width:calc(100%/12 * 9)}.u-col-10[data-v-0a5981a4]{width:calc(100%/12 * 10)}.u-col-11[data-v-0a5981a4]{width:calc(100%/12 * 11)}.u-col-12[data-v-0a5981a4]{width:calc(100%/12 * 12)}',""]),t.exports=e},"46f2":function(t,e,a){"use strict";var i=a("b1bc"),n=a.n(i);n.a},5572:function(t,e,a){"use strict";a.r(e);var i=a("08aa"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"5a98":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"goods-card",props:{goods:{type:Object,default:function(){return{}}}},data:function(){return{}}};e.default=i},"6ff6":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-col",class:["u-col-"+t.span],style:{padding:"0 "+Number(t.gutter)/2+"rpx",marginLeft:100/12*t.offset+"%",flex:"0 0 "+100/12*t.span+"%",alignItems:t.uAlignItem,justifyContent:t.uJustify,textAlign:t.textAlign},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},"782e":function(t,e,a){var i=a("b91c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3069138e",i,!0,{sourceMap:!1,shadowMode:!1})},"85f3":function(t,e,a){"use strict";var i=a("a8bb"),n=a.n(i);n.a},"8abe":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uIcon:a("723f").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():a("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?a("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):a("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?a("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):a("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},r=[]},"8d8a":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-col",props:{span:{type:[Number,String],default:12},offset:{type:[Number,String],default:0},justify:{type:String,default:"start"},align:{type:String,default:"center"},textAlign:{type:String,default:"left"},stop:{type:Boolean,default:!0}},data:function(){return{gutter:20}},created:function(){this.parent=!1},mounted:function(){this.parent=this.$u.$parent.call(this,"u-row"),this.parent&&(this.gutter=this.parent.gutter)},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(t){this.$emit("click")}}};e.default=i},"8dd14":function(t,e,a){"use strict";a.r(e);var i=a("1a27"),n=a("5572");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("3313");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"345affc4",null,!1,i["a"],o);e["default"]=s.exports},a88c:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uImage:a("bc4b").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[a("v-uni-navigator",{staticClass:"goods-item",attrs:{url:"/pages/goods/goodsItem?id="+t.goods.id}},[a("u-image",{staticClass:"u-skeleton-fillet",attrs:{width:"100%",height:"300rpx",src:t.goods.cover_url}}),a("v-uni-view",{staticClass:"title u-line-1 u-skeleton-rect"},[t._v(t._s(t.goods.title?t.goods.title:"商品名称"))]),a("v-uni-view",{staticClass:"u-flex u-row-between"},[a("v-uni-view",{staticClass:"price u-skeleton-rect"},[t._v("￥ "+t._s(t.goods.price))]),a("v-uni-view",{staticClass:"sales u-skeleton-rect"},[t._v("销量："+t._s(t.goods.sales))])],1)],1)],1)},r=[]},a8bb:function(t,e,a){var i=a("fe84");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("48fd2353",i,!0,{sourceMap:!1,shadowMode:!1})},b1bc:function(t,e,a){var i=a("38a1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("4e679982",i,!0,{sourceMap:!1,shadowMode:!1})},b584:function(t,e,a){"use strict";a.r(e);var i=a("5a98"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},b91c:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-row[data-v-345affc4]{\r\ndisplay:flex;flex-direction:row;\r\nflex-wrap:wrap}',""]),t.exports=e},bc4b:function(t,e,a){"use strict";a.r(e);var i=a("8abe"),n=a("158c");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("85f3");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"885009e8",null,!1,i["a"],o);e["default"]=s.exports},bfba:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=i},c9fd:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.goods-item[data-v-3655901a]{padding:%?40?%;box-shadow:0 %?12?% %?20?% 0 rgba(0,0,0,.1);margin-top:%?30?%}.goods-item .title[data-v-3655901a]{margin:%?10?% 0;font-weight:500;font-size:%?32?%;width:100%}.goods-item .price[data-v-3655901a]{color:red;width:40%}.goods-item .sales[data-v-3655901a]{color:#888;width:40%}',""]),t.exports=e},d789:function(t,e,a){"use strict";a.r(e);var i=a("6ff6"),n=a("e8f4");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("46f2");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"0a5981a4",null,!1,i["a"],o);e["default"]=s.exports},e42a:function(t,e,a){"use strict";var i=a("0e1d"),n=a.n(i);n.a},e8f4:function(t,e,a){"use strict";a.r(e);var i=a("8d8a"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},fe84:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-image[data-v-885009e8]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-885009e8]{width:100%;height:100%}.u-image__loading[data-v-885009e8], .u-image__error[data-v-885009e8]{position:absolute;top:0;left:0;width:100%;height:100%;\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e}}]);