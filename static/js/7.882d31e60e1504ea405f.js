webpackJsonp([7],{VpwL:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Muz9"),n=s.n(a),i={data:function(){return{list:[],obj:{address:"",phone:""},data:[],arr:[]}},methods:{tui:function(){this.$router.go(-1)},zeng:function(){var t=this;n.a.get("http://elm.cangdu.org/v1/users/37856/addresses").then(function(e){""!=t.address&&""!=t.phone&&(e.data=t.obj,t.$store.commit("xinzeng",e.data),t.$router.go(-1))})}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"zeng"},[s("div",{staticClass:"tou"},[s("div",{staticClass:"tou_aca"},[s("div",{attrs:{name:"shou"},on:{click:t.tui}},[t._v("<")])]),t._v(" "),s("div",{staticClass:"tou_a",attrs:{name:"di"}},[t._v("新增地址")]),t._v(" "),s("div",{staticClass:"head_b"})]),t._v(" "),s("div",{staticClass:"zeng_a"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"zeng_b"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.obj.address,expression:"obj.address"}],attrs:{type:"text",placeholder:"请填写详细送餐地址"},domProps:{value:t.obj.address},on:{input:function(e){e.target.composing||t.$set(t.obj,"address",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"zeng_b"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.obj.phone,expression:"obj.phone"}],attrs:{type:"text",placeholder:"请填写能够联系你的手机号"},domProps:{value:t.obj.phone},on:{input:function(e){e.target.composing||t.$set(t.obj,"phone",e.target.value)}}})]),t._v(" "),t._m(2)]),t._v(" "),s("button",{staticClass:"zeng_c",on:{click:t.zeng}},[t._v("新增地址")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zeng_b"},[e("input",{attrs:{type:"text",placeholder:"请填写你的姓名"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zeng_b"},[e("input",{attrs:{type:"text",placeholder:"小区/学校/写字楼等"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zeng_bb"},[e("input",{staticClass:"zeng_ba",attrs:{type:"text",placeholder:"备用联系电话(选填)"}})])}]};var r=s("C7Lr")(i,o,!1,function(t){s("lw/v")},null,null);e.default=r.exports},"lw/v":function(t,e){}});