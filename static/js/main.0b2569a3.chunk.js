(this.webpackJsonptotalcloud=this.webpackJsonptotalcloud||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(5),c=n.n(a),i=(n(81),n(46)),u=n(10),o=(n(82),n(72)),l=n(136),j=n(140),m=n(141),d=n(33),b=n(53),f=n.n(b),h="GET_USER",O="GET_DETAIL",x="SORT_BY_FNAME",p="SORT_BY_LNAME",v=n(3);var g=function(){return Object(v.jsx)("div",{className:"preloader mt-5 ",children:Object(v.jsx)("img",{src:"https://i.stack.imgur.com/2UAyy.png",className:"rotate",width:"100",height:"100"})})},_=n(139),N=n(48),y=n(70),T=n.n(y);var E=Object(d.b)((function(e){return{users:e.users}}),(function(e){return{getUser:function(){return e((function(e){f.a.get("https://reqres.in/api/users?delay=3").then((function(t){var n=t.data;e({type:h,users:n.data})}))}))},sortByFirstName:function(t){return e(function(e){return function(t){t({type:x,name:e})}}(t))},sortByLastName:function(t){return e(function(e){return function(t){t({type:p,name:e})}}(t))}}}))((function(e){var t=Object(u.f)(),n=Object(r.useState)(""),s=Object(o.a)(n,2),a=s[0],c=s[1];Object(r.useEffect)((function(){e.getUser()}),[]);var i=function(t){"first_name"===t?e.sortByFirstName(t):"last_name"===t&&e.sortByLastName(t),c(null)};return Object(v.jsxs)("div",{className:" mt-2",children:[Object(v.jsx)("h3",{className:"text-center",children:"USERS"}),Object(v.jsxs)("div",{className:"dropdown",children:[Object(v.jsxs)(l.a,{className:"btn_sort","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},children:["Sort By ",Object(v.jsx)(T.a,{})]}),Object(v.jsxs)(j.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){return i("")},TransitionComponent:_.a,children:[Object(v.jsx)(m.a,{onClick:function(){return i("first_name")},children:"First Name"}),Object(v.jsx)(m.a,{onClick:function(){return i("last_name")},children:"Last Name"}),Object(v.jsx)(m.a,{onClick:function(){return i("")},children:"None"})]})]}),Object(v.jsx)("div",{className:"container-fluid text-center",children:Object(v.jsx)("div",{className:"row mx-2",children:e.users.length>0?e.users.map((function(e){return Object(v.jsx)("div",{className:"card p-2 col-sm-3 col-md-4 mt-3",onClick:function(){return n=e.id,void t.push("/".concat(n));var n},children:Object(v.jsx)(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(v.jsxs)("div",{className:" align-items-top ",children:[Object(v.jsx)("img",{src:e.avatar,alt:"images",className:"rounded",width:"155",height:"155"}),Object(v.jsx)("div",{className:"px-2 mt-2",children:Object(v.jsxs)("h6",{className:"ml-5",children:[e.first_name," ",e.last_name]})})]})})},e.id)})):Object(v.jsx)(g,{})})})]})}));var B=Object(d.b)((function(e){return{user:e.userDetail}}),(function(e){return{userDetail:function(t){return e((n=t,function(e){f.a.get("https://reqres.in/api/users/".concat(n)).then((function(t){var n=t.data;e({type:O,userDetail:n.data})}))}));var n}}}))((function(e){var t=Object(u.g)().url_id,n=e.user,s=n.avatar,a=n.id,c=n.email,i=n.first_name,o=n.last_name;return Object(r.useEffect)((function(){e.userDetail(t)}),[]),Object(v.jsx)(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(v.jsxs)("div",{className:"text-center mt-5",children:[Object(v.jsxs)("h3",{className:"mb-3",children:[" ",i," ",o," "]}),Object(v.jsx)("img",{src:s,alt:"user_image",className:"rounded",width:"30%",height:"30%"}),Object(v.jsx)("br",{})," ",Object(v.jsx)("br",{}),Object(v.jsxs)("h6",{children:["id : ",a]}),Object(v.jsxs)("h6",{children:["email : ",c]})]})})}));var C=function(){return Object(v.jsx)(i.a,{children:Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{exact:!0,path:"/",component:E}),Object(v.jsx)(u.a,{exact:!0,path:"/:url_id",component:B})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))},k=n(56),D=n(71),S=n(24),w={users:[],userDetail:{}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var n=t.users;return Object(S.a)(Object(S.a)({},e),{},{users:n});case O:var r=t.userDetail;return Object(S.a)(Object(S.a)({},e),{},{userDetail:r});case x:var s=e.users,a=s;return a.sort((function(e,t){return e.first_name<t.first_name?-1:e.first_name>t.first_name?1:0})),Object(S.a)(Object(S.a)({},e),{},{users:a});case p:var c=e.users,i=c;return i.sort((function(e,t){return e.last_name<t.last_name?-1:e.last_name>t.last_name?1:0})),Object(S.a)(Object(S.a)({},e),{},{users:i});default:return e}},U=Object(k.b)(L,Object(k.a)(D.a));c.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(d.a,{store:U,children:Object(v.jsx)(C,{})})}),document.getElementById("root")),F()},81:function(e,t,n){},82:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.0b2569a3.chunk.js.map