(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,c){e.exports={item:"TodoItem_item__3MbaD",checkbox:"TodoItem_checkbox__2Jrs8",textInput:"TodoItem_textInput__t35cu"}},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(23),i=c.n(a),s=c(8),r=c(21),l=c(11),u=c(9),d=c(2),j=function(){return Object(d.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(d.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},b=c(15),h=c(16),p=function(e){var t=Object(n.useState)({title:""}),c=Object(u.a)(t,2),o=c[0],a=c[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoProps(o.title),a({title:""})):alert("Please write item")},className:"form-container",children:[Object(d.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(e){a(Object(l.a)(Object(l.a)({},o),{},Object(b.a)({},e.target.name,e.target.value)))}}),Object(d.jsx)("button",{className:"input-submit",children:Object(d.jsx)(h.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},x=c(17),O=c.n(x),f=function(e){var t=Object(n.useState)(!1),c=Object(u.a)(t,2),o=c[0],a=c[1],i=e.todo,s=i.completed,r=i.id,l=i.title,j={},b={};return o?j.display="none":b.display="none",Object(n.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(d.jsxs)("li",{className:O.a.item,children:[Object(d.jsxs)("div",{onDoubleClick:function(){a(!0)},style:j,children:[Object(d.jsx)("input",{type:"checkbox",className:O.a.checkbox,checked:s,onChange:function(){return e.handleChangeProps(r)}}),Object(d.jsx)("button",{onClick:function(){return e.deleteTodoProps(r)},children:Object(d.jsx)(h.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(d.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(d.jsx)("input",{type:"text",style:b,className:O.a.textInput,value:l,onChange:function(t){e.setUpdate(t.target.value,r)},onKeyDown:function(e){"Enter"===e.key&&a(!1)}})]})},m=function(e){return Object(d.jsx)("ul",{children:e.todos.map((function(t){return Object(d.jsx)(f,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},g=c(41),v=c(3),y=function(){console.log(Object(v.f)());var e=Object(v.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),c=t.title,n=t.description;return Object(d.jsxs)("div",{className:"main__content",children:[Object(d.jsx)("h1",{children:c}),Object(d.jsx)("p",{children:n})]})},N=function(e){console.log(Object(v.g)());var t=Object(v.g)(),c=t.url,n=t.path;return Object(d.jsxs)("div",{className:"about__content",children:[Object(d.jsxs)("ul",{className:"about__list",children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"".concat(c,"/about-app"),children:"About App"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"".concat(c,"/about-author"),children:"About Author"})})]}),Object(d.jsx)(v.a,{path:"".concat(n,"/:slug"),children:Object(d.jsx)(y,{})})]})},S=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:"No match for this page"})})},k=c(26),w=c(27),T=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],o=t[1];return Object(d.jsxs)("nav",{className:"navBar",children:[Object(d.jsx)("button",{onClick:function(){o((function(e){return!e}))},children:c?Object(d.jsx)(k.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(d.jsx)(w.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(d.jsx)("ul",{className:"menuNav ".concat(c?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(s.c,{to:e.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:e.text})},e.id)}))})]})};var _=function(){var e=Object(n.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(u.a)(e,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){console.log("use effect");var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&o(t)}),[o]),Object(n.useEffect)((function(){var e=JSON.stringify(c);localStorage.setItem("todos",e)}),[c]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T,{}),Object(d.jsxs)(v.c,{children:[Object(d.jsx)(v.a,{exact:!0,path:"/",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"inner",children:[Object(d.jsx)(j,{}),Object(d.jsx)(p,{addTodoProps:function(e){var t={id:Object(g.a)(),title:e,completed:!1};o([].concat(Object(r.a)(c),[t]))}}),Object(d.jsx)(m,{todos:c,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(r.a)(c.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(c.map((function(c){return c.id===t&&(c.title=e),c})))}})]})})}),Object(d.jsx)(v.a,{path:"/about",children:Object(d.jsx)(N,{})}),Object(d.jsx)(v.a,{path:"*",children:Object(d.jsx)(S,{})})]})]})};c(38);i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(_,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6b1168ab.chunk.js.map