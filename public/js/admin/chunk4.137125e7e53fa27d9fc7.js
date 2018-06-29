webpackJsonp([4],{431:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(432),s=o.n(a),r=o(435),i=o.n(r),n=o(438),l=o.n(n),m=o(441),d=o.n(m);e.default={data(){this.$createElement;return{Columns:[{title:"用户名",key:"username"},{title:"邮箱",key:"email"},{title:"手机号码",key:"phone"},{title:"操作",render:(t,{row:e,column:o,index:a})=>t("button-group",[t("i-button",{on:{click:()=>{this.updateButton(e)}},attrs:{size:"small"}},["更新"]),t("i-button",{on:{click:()=>{this.allotButton(e)}},attrs:{size:"small"}},["分配权限"]),t("i-button",{on:{click:()=>{this.groupButton(e)}},attrs:{size:"small"}},["分配用户组"])])}],Datas:[],page:{total:0,current:1,page_size:20},createModalShow:!1,updateModalShow:!1,updateId:0,allotModalShow:!1,allotId:0,groupModalShow:!1,groupId:0}},mounted(){this.search(1)},methods:{search(t){this.$get("admin/user",{page:t}).then(t=>{this.Datas=t.data.data,this.page.total=t.data.total,this.page.current=t.data.current_page,this.page.page_size=t.data.per_page})},updateButton(t){this.updateId=t.id,this.updateModalShow=!0},allotButton(t){this.allotId=t.id,this.allotModalShow=!0},groupButton(t){this.groupId=t.id,this.groupModalShow=!0},visibleChangeCreate(t){this.createModalShow=t,!1===t&&this.search(1)},visibleChangeAllot(t){this.allotModalShow=t},visibleChangeGroup(t){this.groupModalShow=t},visibleChangeUpdate(t){this.updateModalShow=t,!1===t&&this.search(this.page.current)}},components:{Create:s.a,Update:i.a,Allot:l.a,Group:d.a}}},432:function(t,e,o){var a=o(4)(o(433),o(434),!1,null,null,null);t.exports=a.exports},433:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1}},computed:{modalShow:{get:function(){return this.show},set:function(){}}},data:function(){return{loadingVisible:!1,formItem:{}}},methods:{visibleChange:function(t){!1===t?this.$emit("visibleChange",t):this.formItem={}},submit:function(t){var e=this;this.loadingVisible=!0,this.$refs[t].validate(function(t){t&&e.$post("admin/user",e.formItem).then(function(t){e.loadingVisible=!1,e.visibleChange(!1),e.$Message.error("用户添加成功!")})}).catch(function(t){e.loadingVisible=!1})}}}},434:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Modal",{attrs:{title:"创建项目","mask-closable":!1,"class-name":"vertical-center-modal",width:"auto","ok-text":"提交"},on:{"on-visible-change":t.visibleChange,"on-ok":t.submit},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[o("Form",{ref:"formItem",attrs:{model:t.formItem,"label-width":100}},[o("FormItem",{attrs:{label:"用户姓名:",prop:"username",rules:{required:!0,message:"用户姓名不能为空！",trigger:"blur"}}},[o("Input",{staticStyle:{width:"300px"},model:{value:t.formItem.username,callback:function(e){t.$set(t.formItem,"username",e)},expression:"formItem.username"}})],1),t._v(" "),o("FormItem",{attrs:{label:"登录邮箱:",prop:"email",rules:{required:!0,type:"email",message:"请输出正确的邮箱号码！",trigger:"blur"}}},[o("Input",{staticStyle:{width:"300px"},model:{value:t.formItem.email,callback:function(e){t.$set(t.formItem,"email",e)},expression:"formItem.email"}})],1),t._v(" "),o("FormItem",{attrs:{label:"手机号码:",prop:"phone",rules:{pattern:/^1[34578][0-9]{9}$/,message:"手机号码格式不正确！",trigger:"blur"}}},[o("Input",{staticStyle:{width:"300px"},model:{value:t.formItem.phone,callback:function(e){t.$set(t.formItem,"phone",e)},expression:"formItem.phone"}})],1),t._v(" "),o("FormItem",{attrs:{label:"密码",prop:"password",rules:{required:!0,message:"密码不能为空！",trigger:"blur"}}},[o("Input",{attrs:{type:"password"},model:{value:t.formItem.password,callback:function(e){t.$set(t.formItem,"password",e)},expression:"formItem.password"}})],1),t._v(" "),o("FormItem",{attrs:{label:"确认密码",prop:"password_confirmation",rules:{required:!0,message:"确认密码不能为空！",trigger:"blur"}}},[o("Input",{attrs:{type:"password"},model:{value:t.formItem.password_confirmation,callback:function(e){t.$set(t.formItem,"password_confirmation",e)},expression:"formItem.password_confirmation"}})],1)],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"primary",size:"large",loading:t.loadingVisible},on:{click:function(e){t.submit("formItem")}}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]}},435:function(t,e,o){var a=o(4)(o(436),o(437),!1,null,null,null);t.exports=a.exports},436:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},row:{type:Number,default:0}},computed:{modalShow:{get:function(){return this.show},set:function(){}},updateId:function(){return this.row}},data:function(){return{loadingVisible:!1,formItem:{},formSetPassword:{old_password:"",password:"",password_confirmation:""},setPassword:!1}},methods:{handlePassword:function(t){var e=this;this.$put("admin/user/"+this.updateId+"/password",this.formSetPassword).then(function(t){e.$Message.success("密码修改成功!"),e.$refs.modalSetPassword.close()})},visibleChange:function(t){!1===t&&this.$emit("visibleChange",t)},submit:function(t){var e=this;this.loadingVisible=!0,this.$refs[t].validate(function(t){t&&e.$put("admin/user/"+e.updateId,{username:e.formItem.username,phone:e.formItem.phone,email:e.formItem.email}).then(function(t){e.loadingVisible=!1,e.visibleChange(!1),e.$Message.error("用户更新成功!")}).catch(function(t){e.loadingVisible=!1})})}},watch:{modalShow:function(t,e){var o=this;t?this.$get("admin/user/"+this.updateId).then(function(t){o.formItem=t.data}):this.formItem={}}}}},437:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Modal",{attrs:{title:"修改文档","mask-closable":!1,"class-name":"vertical-center-modal",width:"auto","ok-text":"提交"},on:{"on-visible-change":t.visibleChange,"on-ok":t.submit},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[o("Form",{ref:"formItem",attrs:{model:t.formItem,"label-width":100}},[o("FormItem",{attrs:{label:"用户姓名:",prop:"username",rules:{required:!0,message:"用户姓名不能为空！",trigger:"blur"}}},[o("Input",{staticStyle:{width:"300px"},model:{value:t.formItem.username,callback:function(e){t.$set(t.formItem,"username",e)},expression:"formItem.username"}})],1),t._v(" "),o("FormItem",{attrs:{label:"登录邮箱:",prop:"email",rules:{required:!0,type:"email",message:"请输出正确的邮箱号码！",trigger:"blur"}}},[o("Input",{staticStyle:{width:"300px"},model:{value:t.formItem.email,callback:function(e){t.$set(t.formItem,"email",e)},expression:"formItem.email"}})],1),t._v(" "),o("FormItem",{attrs:{label:"手机号码:",prop:"phone",rules:{pattern:/^1[34578][0-9]{9}$/,message:"手机号码格式不正确！",trigger:"blur"}}},[o("Input",{staticStyle:{width:"300px"},model:{value:t.formItem.phone,callback:function(e){t.$set(t.formItem,"phone",e)},expression:"formItem.phone"}})],1),t._v(" "),o("FormItem",{attrs:{label:"登录密码:"}},[o("Button",{attrs:{type:"text"},on:{click:function(e){t.setPassword=!0}}},[t._v("修改密码")])],1)],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"primary",size:"large",loading:t.loadingVisible},on:{click:function(e){t.submit("formItem")}}},[t._v("提交")])],1)],1),t._v(" "),o("Modal",{ref:"modalSetPassword",attrs:{title:"修改密码","ok-text":"提交","cancel-text":"取消",loading:!0},on:{"on-ok":t.handlePassword},model:{value:t.setPassword,callback:function(e){t.setPassword=e},expression:"setPassword"}},[o("Form",{ref:"formSetPassword",attrs:{model:t.formSetPassword,"label-width":100}},[o("FormItem",{attrs:{label:"原密码",prop:"old_password",rules:{required:!0,message:"原密码不能为空！",trigger:"blur"}}},[o("Input",{attrs:{type:"password"},model:{value:t.formSetPassword.old_password,callback:function(e){t.$set(t.formSetPassword,"old_password",e)},expression:"formSetPassword.old_password"}})],1),t._v(" "),o("FormItem",{attrs:{label:"新密码",prop:"password",rules:{required:!0,message:"密码不能为空！",trigger:"blur"}}},[o("Input",{attrs:{type:"password"},model:{value:t.formSetPassword.password,callback:function(e){t.$set(t.formSetPassword,"password",e)},expression:"formSetPassword.password"}})],1),t._v(" "),o("FormItem",{attrs:{label:"确认密码",prop:"password_confirmation",rules:{required:!0,message:"确认密码不能为空！",trigger:"blur"}}},[o("Input",{attrs:{type:"password"},model:{value:t.formSetPassword.password_confirmation,callback:function(e){t.$set(t.formSetPassword,"password_confirmation",e)},expression:"formSetPassword.password_confirmation"}})],1)],1)],1)],1)},staticRenderFns:[]}},438:function(t,e,o){var a=o(4)(o(439),o(440),!1,null,null,null);t.exports=a.exports},439:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},row:{type:Number,default:0}},computed:{modalShow:{get:function(){return this.show},set:function(){}},allotId:function(){return this.row}},data:function(){return{loadingVisible:!1,formItem:{permission:[],data:[]}}},methods:{visibleChange:function(t){!1===t&&this.$emit("visibleChange",t)},allCheck:function(){this.formItem.data.length===this.formItem.permission.length?this.formItem.data=[]:this.formItem.data=this.formItem.permission.map(function(t){return t.id})},submit:function(t){var e=this;this.loadingVisible=!0,this.$post("admin/user/"+this.allotId+"/role",{relation:this.formItem.data}).then(function(t){e.loadingVisible=!1,e.visibleChange(!1)})}},watch:{modalShow:function(t,e){var o=this;t?(this.$get("admin/role/all").then(function(t){o.formItem.permission=t.data}),this.$get("admin/user/"+this.allotId+"/role").then(function(t){o.formItem.data=t.data.map(function(t){return t.id})})):this.formItem.data=[]}}}},440:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Modal",{attrs:{title:"分配权限组","mask-closable":!1,"class-name":"vertical-center-modal",width:"500","ok-text":"提交"},on:{"on-visible-change":t.visibleChange,"on-ok":t.submit},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[o("Form",{ref:"formItem",attrs:{model:t.formItem,"label-width":1}},[o("FormItem",[o("CheckboxGroup",{model:{value:t.formItem.data,callback:function(e){t.$set(t.formItem,"data",e)},expression:"formItem.data"}},t._l(t.formItem.permission,function(e){return o("Checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.display_name))])}))],1)],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{size:"large"},on:{click:t.allCheck}},[t._v("全选")]),t._v(" "),o("Button",{attrs:{type:"primary",size:"large",loading:t.loadingVisible},on:{click:function(e){t.submit("formItem")}}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]}},441:function(t,e,o){var a=o(4)(o(442),o(443),!1,null,null,null);t.exports=a.exports},442:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},row:{type:Number,default:0}},computed:{modalShow:{get:function(){return this.show},set:function(){}},allotId:function(){return this.row}},data:function(){return{loadingVisible:!1,formItem:{permission:[],data:[]}}},methods:{visibleChange:function(t){!1===t&&this.$emit("visibleChange",t)},allCheck:function(){this.formItem.data.length===this.formItem.permission.length?this.formItem.data=[]:this.formItem.data=this.formItem.permission.map(function(t){return t.id})},submit:function(t){var e=this;this.loadingVisible=!0,this.$post("admin/user/"+this.allotId+"/group",{relation:this.formItem.data}).then(function(t){e.loadingVisible=!1,e.visibleChange(!1)})}},watch:{modalShow:function(t,e){var o=this;t?(this.$get("admin/group/all").then(function(t){o.formItem.permission=t.data}),this.$get("admin/user/"+this.allotId+"/group").then(function(t){o.formItem.data=t.data.map(function(t){return t.id})})):this.formItem.data=[]}}}},443:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Modal",{attrs:{title:"分配权限组","mask-closable":!1,"class-name":"vertical-center-modal",width:"500","ok-text":"提交"},on:{"on-visible-change":t.visibleChange,"on-ok":t.submit},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[o("Form",{ref:"formItem",attrs:{model:t.formItem,"label-width":1}},[o("FormItem",[o("CheckboxGroup",{model:{value:t.formItem.data,callback:function(e){t.$set(t.formItem,"data",e)},expression:"formItem.data"}},t._l(t.formItem.permission,function(e){return o("Checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.name))])}))],1)],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{size:"large"},on:{click:t.allCheck}},[t._v("全选")]),t._v(" "),o("Button",{attrs:{type:"primary",size:"large",loading:t.loadingVisible},on:{click:function(e){t.submit("formItem")}}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]}},444:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box-flex"},[o("div",{staticClass:"box-flex-list"},[o("Card",{attrs:{bordered:!1}},[o("p",{attrs:{slot:"title"},slot:"title"},[o("span",[t._v("列表")]),t._v(" "),o("Button",{attrs:{size:"small",type:"success"},on:{click:function(e){t.createModalShow=!0}}},[t._v("添加")])],1),t._v(" "),o("Table",{ref:"table",attrs:{columns:t.Columns,data:t.Datas,size:"small"}}),t._v(" "),o("Page",{attrs:{total:t.page.total,size:"small",current:t.page.current,"page-size":t.page.page_size,"show-total":""},on:{"update:current":function(e){t.$set(t.page,"current",e)}}})],1)],1),t._v(" "),o("Create",{attrs:{show:t.createModalShow},on:{visibleChange:t.visibleChangeCreate}}),t._v(" "),o("Update",{attrs:{show:t.updateModalShow,row:t.updateId},on:{visibleChange:t.visibleChangeUpdate}}),t._v(" "),o("Allot",{attrs:{show:t.allotModalShow,row:t.allotId},on:{visibleChange:t.visibleChangeAllot}}),t._v(" "),o("Group",{attrs:{show:t.groupModalShow,row:t.groupId},on:{visibleChange:t.visibleChangeGroup}})],1)},staticRenderFns:[]}},726:function(t,e,o){var a=o(4)(o(431),o(444),!1,null,null,null);t.exports=a.exports}});