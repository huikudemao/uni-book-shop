(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0613":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uSwiper:i("c5e4").default,uTabs:i("e5ce").default,uRow:i("8dd14").default,uCol:i("d789").default,goodsCard:i("3827").default,uSkeleton:i("5950").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content "},[i("u-swiper",{attrs:{list:t.slides,name:"img_url",height:"320"}}),i("v-uni-view",{staticClass:"u-text-center u-margin-top-20"},[i("u-tabs",{attrs:{list:t.sortList,current:t.current,"bar-width":"100","item-width":"160"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSort.apply(void 0,arguments)}}})],1),i("u-row",{staticClass:"u-skeleton",attrs:{gutter:"16"}},t._l(t.goodsList,(function(t,e){return i("u-col",{key:e,attrs:{span:"6"}},[i("goods-card",{attrs:{goods:t}})],1)})),1),i("u-skeleton",{attrs:{loading:t.loading,animation:!0,bgColor:"#FFF"}})],1)},a=[]},"0a4a":function(t,e,i){"use strict";i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=n},"0d5e":function(t,e,i){var n=i("3f89");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("40e2b4c6",n,!0,{sourceMap:!1,shadowMode:!1})},"3f89":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.skeleton-fade[data-v-f551b034]{width:100%;height:100%;background:#c2cfd6;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-name:blink-data-v-f551b034;animation-name:blink-data-v-f551b034;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes blink-data-v-f551b034{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}@keyframes blink-data-v-f551b034{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}',""]),t.exports=e},"4b71":function(t,e,i){"use strict";i.r(e);var n=i("0613"),o=i("92c5");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var r,u=i("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"3f9b22f4",null,!1,n["a"],r);e["default"]=s.exports},"518b":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i("v-uni-view",{style:{width:t.windowWinth+"px",height:t.windowHeight+"px",backgroundColor:t.bgColor,position:"absolute",left:t.left+"px",top:t.top+"px",zIndex:9998,overflow:"hidden"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[t._l(t.RectNodes,(function(e,n){return i("v-uni-view",{key:t.$u.guid(),class:[t.animation?"skeleton-fade":""],style:{width:e.width+"px",height:e.height+"px",backgroundColor:t.elColor,position:"absolute",left:e.left-t.left+"px",top:e.top-t.top+"px"}})})),t._l(t.circleNodes,(function(e,n){return i("v-uni-view",{key:t.$u.guid(),class:t.animation?"skeleton-fade":"",style:{width:e.width+"px",height:e.height+"px",backgroundColor:t.elColor,borderRadius:e.width/2+"px",position:"absolute",left:e.left-t.left+"px",top:e.top-t.top+"px"}})})),t._l(t.filletNodes,(function(e,n){return i("v-uni-view",{key:t.$u.guid(),class:t.animation?"skeleton-fade":"",style:{width:e.width+"px",height:e.height+"px",backgroundColor:t.elColor,borderRadius:t.borderRadius+"rpx",position:"absolute",left:e.left-t.left+"px",top:e.top-t.top+"px"}})}))],2):t._e()},a=[]},"53e0":function(t,e,i){"use strict";var n=i("0d5e"),o=i.n(n);o.a},5950:function(t,e,i){"use strict";i.r(e);var n=i("518b"),o=i("d74d");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("53e0");var r,u=i("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"f551b034",null,!1,n["a"],r);e["default"]=s.exports},"66b0":function(t,e,i){"use strict";i.r(e);var n=i("0a4a"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"6ccc":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-swiper-wrap[data-v-b5a02ffc]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-b5a02ffc]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-b5a02ffc]{padding:0 %?24?%;position:absolute;\r\ndisplay:flex;flex-direction:row;\r\nwidth:100%;z-index:1}.u-indicator-item-rect[data-v-b5a02ffc]{width:%?26?%;height:%?8?%;margin:0 %?6?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-b5a02ffc]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-b5a02ffc]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-b5a02ffc]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-b5a02ffc]{width:100%;height:100%;flex:1;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.u-swiper-title[data-v-b5a02ffc]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-b5a02ffc]{\r\ndisplay:flex;flex-direction:row;\r\noverflow:hidden;align-items:center}',""]),t.exports=e},"92c5":function(t,e,i){"use strict";i.r(e);var n=i("f39a"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},b102:function(t,e,i){"use strict";var n=i("bade"),o=i.n(n);o.a},bade:function(t,e,i){var n=i("6ccc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("81824818",n,!0,{sourceMap:!1,shadowMode:!1})},c5e4:function(t,e,i){"use strict";i.r(e);var n=i("e4fa"),o=i("66b0");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("b102");var r,u=i("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"b5a02ffc",null,!1,n["a"],r);e["default"]=s.exports},d74d:function(t,e,i){"use strict";i.r(e);var n=i("e411"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},e411:function(t,e,i){"use strict";i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-skeleton",props:{elColor:{type:String,default:"#e5e5e5"},bgColor:{type:String,default:"#ffffff"},animation:{type:Boolean,default:!1},borderRadius:{type:[String,Number],default:"10"},loading:{type:Boolean,default:!0}},data:function(){return{windowWinth:750,windowHeight:1500,filletNodes:[],circleNodes:[],RectNodes:[],top:0,left:0}},methods:{selecterQueryInfo:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton").boundingClientRect().exec((function(e){t.windowHeight=e[0][0].height,t.windowWinth=e[0][0].width,t.top=e[0][0].bottom-e[0][0].height,t.left=e[0][0].left})),this.getRectEls(),this.getCircleEls(),this.getFilletEls()},getRectEls:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton-rect").boundingClientRect().exec((function(e){t.RectNodes=e[0]}))},getFilletEls:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton-fillet").boundingClientRect().exec((function(e){t.filletNodes=e[0]}))},getCircleEls:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton-circle").boundingClientRect().exec((function(e){t.circleNodes=e[0]}))}},mounted:function(){var t=uni.getSystemInfoSync();this.windowHeight=t.windowHeight,this.windowWinth=t.windowWidth,this.selecterQueryInfo()}};e.default=n},e4fa:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[i("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=n?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=n?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=n?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(n)}}},[i("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?i("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":n==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":n==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":n==t.uCurrent}})})):t._e(),"number"==t.mode?[i("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},a=[]},f39a:function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("2909"));i("96cf");var a=n(i("1da1")),r={data:function(){return{sortList:[{name:"默认"},{name:"销量"},{name:"推荐"},{name:"最新"}],current:0,slides:[],goodsList:[{},{},{},{}],page:1,loading:!1}},onLoad:function(){this.getData()},methods:{changeSort:function(t){this.current=t,this.goodsList=[{},{},{},{}],this.page=1,this.getData()},getData:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.loading=!0,n={page:e.page},1==e.current&&(n.sales=1),2==e.current&&(n.recommend=1),3==e.current&&(n.new=1),i.next=7,e.$u.api.index(n);case 7:a=i.sent,e.loading=!1,t.log(a),e.slides=a.slides,e.goodsList=e.goodsList.pop().title?[].concat((0,o.default)(e.goodsList),(0,o.default)(a.goods.data)):a.goods.data;case 12:case"end":return i.stop()}}),i)})))()}},onReachBottom:function(){this.page=this.page+1,this.getData()}};e.default=r}).call(this,i("5a52")["default"])}}]);