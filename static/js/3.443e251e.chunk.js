(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[3],{288:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var c=s(5),n=s(33),i=s(34),a=s(36),r=s(35),o=s(0),u=s.n(o),j=s(12),p=s(10),b=s(1),d=function(t){return{isAuth:t.auth.isAuth}},l=function(t){var e=function(e){Object(a.a)(o,e);var s=Object(r.a)(o);function o(){return Object(n.a)(this,o),s.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(t,Object(c.a)({},this.props)):Object(b.jsx)(p.a,{to:"/login"})}}]),o}(u.a.Component);return Object(j.b)(d)(e)}},290:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3LB6v",posts:"MyPosts_posts__2QWVv"}},291:function(t,e,s){t.exports={item:"Post_item__16nkm"}},292:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1QwQ_",photo:"ProfileInfo_photo__1lWdO"}},294:function(t,e,s){"use strict";s.r(e);var c=s(5),n=s(33),i=s(34),a=s(36),r=s(35),o=s(0),u=s.n(o),j=s(12),p=s(92),b=s(123),d=s(124),l=s(82),h=s(62),O=s(290),f=s.n(O),x=s(291),v=s.n(x),m=s(1),g=function(t){var e=t.message,s=t.likes;return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:v.a.item,children:[Object(m.jsx)("img",{src:"https://vokrug-tv.ru/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",alt:""}),e,Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:["likes - ",s]})})]})})},k=Object(l.a)(10),P=Object(d.a)({form:"addPost"})((function(t){var e=t.handleSubmit;return Object(m.jsxs)("form",{onSubmit:e,children:[Object(m.jsx)("div",{children:Object(m.jsx)(b.a,{name:"text",placeholder:"text",component:h.b,validate:[l.b,k]})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Add post"})})]})})),_=function(t){var e=t.postsData,s=t.addPosts,c=e.map((function(t){return Object(m.jsx)(g,{message:t.message,likes:t.likesCount})}));return Object(m.jsxs)("div",{className:f.a.postsBlock,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"My posts"}),Object(m.jsx)(P,{onSubmit:function(t){s(t.text)}})]}),Object(m.jsx)("div",{className:f.a.posts,children:c})]})},S=Object(j.b)((function(t){return{postsData:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPosts:function(e){t(Object(p.a)(e))}}}))(_),y=s(38),w=s(125),B=function(t){var e=Object(o.useState)(!1),s=Object(w.a)(e,2),c=s[0],n=s[1],i=Object(o.useState)(t.status),a=Object(w.a)(i,2),r=a[0],u=a[1];Object(o.useEffect)((function(){u(t.status)}),[t.status]);return Object(m.jsxs)("div",{children:[!c&&Object(m.jsx)("div",{children:Object(m.jsx)("span",{onDoubleClick:function(){return n(!0)},children:t.status||"----------"})}),c&&Object(m.jsx)("div",{children:Object(m.jsx)("input",{autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(r)},onChange:function(t){u(t.target.value)},value:r})})]})},I=s(292),N=s.n(I),A=function(t){var e=t.profile,s=t.status,c=t.updateStatus;return e?Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300"})}),Object(m.jsxs)("div",{className:N.a.descriptionBlock,children:[e.photos.large?Object(m.jsx)("div",{className:N.a.photo,children:Object(m.jsx)("img",{src:e.photos.large,alt:""})}):Object(m.jsx)("div",{className:N.a.photo,children:Object(m.jsx)("img",{src:"https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"})}),Object(m.jsx)(B,{status:s,updateStatus:c}),Object(m.jsxs)("div",{children:["Name: ",e.fullName]}),Object(m.jsxs)("div",{children:["About me: ",e.aboutMe]}),Object(m.jsxs)("div",{children:["Contacts:",Object(m.jsxs)("div",{children:["Facebook: ",e.contacts.facebook]}),Object(m.jsxs)("div",{children:["Instagram: ",e.contacts.instagram]}),Object(m.jsxs)("div",{children:["twitter: ",e.contacts.twitter]})]})]})]}):Object(m.jsx)(y.a,{})},M=function(t){var e=t.profile,s=t.status,c=t.updateStatus;return Object(m.jsxs)("div",{children:[Object(m.jsx)(A,{profile:e,status:s,updateStatus:c}),Object(m.jsx)(S,{})]})},C=s(10),D=s(288),U=s(9),T=function(t){Object(a.a)(s,t);var e=Object(r.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfileThunc(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsx)(M,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})})}}]),s}(u.a.Component);e.default=Object(U.d)(Object(j.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfileThunc:p.c,getStatus:p.b,updateStatus:p.e}),D.a,C.f)(T)}}]);
//# sourceMappingURL=3.443e251e.chunk.js.map