(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[4],{288:function(e,s,t){"use strict";t.d(s,"a",(function(){return m}));var a=t(5),n=t(33),i=t(34),c=t(36),o=t(35),r=t(0),u=t.n(r),d=t(12),j=t(10),l=t(1),g=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var s=function(s){Object(c.a)(r,s);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(e,Object(a.a)({},this.props)):Object(l.jsx)(j.a,{to:"/login"})}}]),r}(u.a.Component);return Object(d.b)(g)(s)}},289:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__1AuRv",dialog:"Dialogs_dialog__L4tWv",dialogsItem:"Dialogs_dialogsItem__1mXR_",active:"Dialogs_active__3ZUQz",messages:"Dialogs_messages__3AtNP",message:"Dialogs_message__2N2GE"}},295:function(e,s,t){"use strict";t.r(s);t(0);var a=t(12),n=t(9),i=t(288),c=t(101),o=t(10),r=t(123),u=t(124),d=t(82),j=t(62),l=t(13),g=t(289),m=t.n(g),b=t(1),O=function(e){return Object(b.jsx)("div",{className:m.a.dialog,children:Object(b.jsx)(l.b,{to:"/dialogs/".concat(e.id),children:e.name})})},h=function(e){return Object(b.jsx)("div",{className:m.a.message,children:e.message})},f=Object(d.a)(50),p=Object(u.a)({form:"dialog"})((function(e){var s=e.handleSubmit;return Object(b.jsxs)("form",{onSubmit:s,children:[Object(b.jsx)(r.a,{placeholder:"Enter your message",name:"text",component:j.b,validate:[d.b,f]}),Object(b.jsx)("button",{children:"Add message"})]})})),x=function(e){var s=e.messagesPage,t=e.sendMessage,a=e.isAuth,n=s.dialogs,i=s.messages,c=n.map((function(e){return Object(b.jsx)(O,{name:e.name,id:e.id},e.id)})),r=i.map((function(e){return Object(b.jsx)(h,{message:e.message,id:e.id},e.id)}));return a?Object(b.jsxs)("div",{className:m.a.dialogs,children:[Object(b.jsx)("div",{className:m.a.dialogsItem,children:c}),Object(b.jsx)("div",{className:m.a.messages,children:r}),Object(b.jsx)("div",{children:Object(b.jsx)(p,{onSubmit:function(e){t(e.text)}})})]}):Object(b.jsx)(o.a,{to:"/login"})};s.default=Object(n.d)(Object(a.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(s){e(Object(c.a)(s))}}})),i.a)(x)}}]);
//# sourceMappingURL=4.e1c1e6a7.chunk.js.map