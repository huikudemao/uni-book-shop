(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{"22bd":function(e,t,a){"use strict";a.r(t);var i=a("6972"),n=a("c179");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("38ab");var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"6ace1e94",null,!1,i["a"],o);t["default"]=r.exports},"38ab":function(e,t,a){"use strict";var i=a("8cda"),n=a.n(i);n.a},6144:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */[data-v-6ace1e94] .line{color:#c0c4cc;font-size:%?28?%}.wrap[data-v-6ace1e94]{background-color:#f2f2f2}.wrap .top[data-v-6ace1e94]{background-color:#fff;border-top:solid %?2?% #e4e7ed;padding:%?22?%}.wrap .top .item[data-v-6ace1e94]{display:flex;font-size:%?32?%;line-height:%?100?%;align-items:center;border-bottom:solid %?2?% #e4e7ed}.wrap .top .item .left[data-v-6ace1e94]{width:%?180?%}.wrap .top .item uni-input[data-v-6ace1e94]{text-align:left}.wrap .top .address[data-v-6ace1e94]{padding:%?20?% 0}.wrap .top .address uni-textarea[data-v-6ace1e94]{height:%?150?%;background-color:#f7f7f7;line-height:%?60?%;margin:%?40?% auto;padding:%?20?%}.wrap .top .site-clipboard[data-v-6ace1e94]{padding-right:%?40?%}.wrap .top .site-clipboard uni-textarea[data-v-6ace1e94]{height:%?150?%;background-color:#f7f7f7;line-height:%?60?%;margin:%?40?% auto;padding:%?20?%}.wrap .top .site-clipboard .clipboard[data-v-6ace1e94]{display:flex;justify-content:center;align-items:center;font-size:%?26?%;color:#909399;height:%?80?%}.wrap .top .site-clipboard .clipboard .icon[data-v-6ace1e94]{margin-top:%?6?%;margin-left:%?10?%}.wrap .bottom[data-v-6ace1e94]{margin-top:%?20?%;padding:%?40?%;padding-right:0;background-color:#fff;font-size:%?28?%}.wrap .bottom .tag[data-v-6ace1e94]{display:flex}.wrap .bottom .tag .left[data-v-6ace1e94]{width:%?160?%}.wrap .bottom .tag .right[data-v-6ace1e94]{display:flex;flex-wrap:wrap}.wrap .bottom .tag .right .tags[data-v-6ace1e94]{width:%?140?%;padding:%?16?% %?8?%;border:solid %?2?% #e4e7ed;text-align:center;border-radius:%?50?%;margin:0 %?10?% %?20?%;display:flex;font-size:%?28?%;align-items:center;justify-content:center;color:#606266;line-height:1}.wrap .bottom .default[data-v-6ace1e94]{margin-top:%?50?%;display:flex;justify-content:space-between;border-bottom:solid %?2?% #e4e7ed;line-height:%?64?%}.wrap .bottom .default .tips[data-v-6ace1e94]{font-size:%?24?%}.addSite[data-v-6ace1e94]{display:flex;justify-content:space-around;width:%?600?%;line-height:%?100?%;position:absolute;bottom:%?30?%;left:%?80?%;background-color:red;border-radius:%?60?%;font-size:%?30?%}.addSite .add[data-v-6ace1e94]{display:flex;align-items:center;color:#fff}.addSite .add .icon[data-v-6ace1e94]{margin-right:%?10?%}',""]),e.exports=t},6972:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var i={uIcon:a("723f").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"wrap"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"left"},[e._v("收货人")]),a("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:"请填写收货人姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"left"},[e._v("手机号码")]),a("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:"请填写收货人手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"left"},[e._v("省份")]),a("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:"请填写省份"},model:{value:e.province,callback:function(t){e.province=t},expression:"province"}})],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"left"},[e._v("城市")]),a("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:"请填写城市"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"left"},[e._v("区县")]),a("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:"请填写区县"},model:{value:e.county,callback:function(t){e.county=t},expression:"county"}})],1),a("v-uni-view",{staticClass:"item address"},[a("v-uni-view",{staticClass:"left"},[e._v("详细地址")]),a("v-uni-textarea",{attrs:{type:"text","placeholder-class":"line",placeholder:"街道、楼牌等"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)],1),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"default"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",{staticClass:"set"},[e._v("设置默认地址")]),a("v-uni-view",{staticClass:"tips"},[e._v("提醒：每次下单会默认推荐该地址")])],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-switch",{attrs:{color:"red"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.setDefault.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view",{staticClass:"addSite",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getData.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"add"},[a("u-icon",{staticClass:"icon",attrs:{name:"plus",color:"#ffffff",size:30}}),e._v("添加")],1)],1)],1)},s=[]},"8cda":function(e,t,a){var i=a("6144");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("0bddcbf2",i,!0,{sourceMap:!1,shadowMode:!1})},9889:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var n=i(a("1da1")),s={data:function(){return{name:"",phone:"",province:"",city:"",county:"",address:"",is_default:0}},onLoad:function(){},methods:{setDefault:function(){this.is_default=1},getData:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={name:e.name,address:e.address,phone:e.phone,province:e.province,city:e.city,county:e.county,is_default:e.is_default},t.next=3,e.$u.api.postAddress(a);case 3:uni.showToast({title:"添加成功！！",icon:"none"}),setTimeout((function(){uni.redirectTo({url:"/pages/address/index"})}),1500);case 5:case"end":return t.stop()}}),t)})))()}}};t.default=s},c179:function(e,t,a){"use strict";a.r(t);var i=a("9889"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a}}]);