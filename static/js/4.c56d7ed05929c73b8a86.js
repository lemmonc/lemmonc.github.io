webpackJsonp([4],{"i/HC":function(t,e){},iPIx:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("OMN4"),a=r.n(n),i={created:function(){var t=this;try{a.a.get("http://192.168.2.129:3000/api/userlist").then(function(e){var r=e.data;r&&(t.users=r)})}catch(t){}},watch:{fUsers:function(t){this.length=t.length},current:function(t){console.log(t)}},data:function(){return{search:"",columns:[{title:"ID",key:"id",width:60},{title:" ",key:"upic",width:70,render:function(t,e){return t("Avatar",{props:{src:e.row.upic}})}},{title:"姓名",key:"name",minWidth:120,maxWidth:200},{title:"邮箱",key:"email",minWidth:200},{title:"日期",key:"date",minWidth:160,maxWidth:360},{title:"管理",key:"date",width:100,render:function(t,e){var r=e.row;return t("Button",{props:{size:"small",type:"warning"},on:{click:function(){console.log(r)}}},"删除")}}],users:[],length:null,current:1,pageSize:10}},computed:{fUsers:function(){var t=this;return this.users.filter(function(e){return e.email.indexOf(t.search)>-1||e.name.indexOf(t.search)>-1})}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Content",{staticClass:"user"},[r("Breadcrumb",[r("BreadcrumbItem",{attrs:{to:"/"}},[t._v("首页")]),t._v(" "),r("BreadcrumbItem",[t._v("查询用户")])],1),t._v(" "),r("div",{staticClass:"search"},[r("Input",{staticStyle:{width:"460px"},attrs:{search:"","enter-button":"",placeholder:"姓名\\邮箱"},model:{value:t.search,callback:function(e){t.search="string"==typeof e?e.trim():e},expression:"search"}})],1),t._v(" "),r("div",{staticClass:"uers-table"},[r("Table",{attrs:{columns:t.columns,data:t.fUsers}})],1),t._v(" "),r("div",{staticClass:"user-page"},[r("Page",{attrs:{total:t.length,current:t.current,"show-elevator":"",size:"small","page-size":t.pageSize},on:{"update:current":function(e){t.current=e}}})],1)],1)},staticRenderFns:[]};var c=r("VU/8")(i,s,!1,function(t){r("i/HC")},"data-v-3eab9b90",null);e.default=c.exports}});
//# sourceMappingURL=4.c56d7ed05929c73b8a86.js.map