webpackJsonp([5],{292:function(l,n,u){"use strict";function t(l){return a._21(0,[(l()(),a.Z(0,0,null,null,30,"ion-header",[],null,null,null,null,null)),a.Y(1,16384,null,0,g.a,[f.a,a.j,a.z,[2,k.a]],null,null),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(3,0,null,null,18,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,h.b,h.a)),a.Y(4,49152,null,0,v.a,[C.a,[2,k.a],[2,A.a],f.a,a.j,a.z],{color:[0,"color"]},null),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(6,0,null,3,2,"ion-title",[["id","app-title"]],null,null,null,Z.b,Z.a)),a.Y(7,49152,null,0,j.a,[f.a,a.j,a.z,[2,Y.a],[2,v.a]],null,null),(l()(),a._19(-1,0,["\n      Ionic Laboratory\n    "])),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(10,0,null,2,10,"ion-buttons",[["end",""]],null,null,null,null,null)),a.Y(11,16384,null,1,y.a,[f.a,a.j,a.z,[2,Y.a],[2,v.a]],null,null),a._17(603979776,1,{_buttons:1}),(l()(),a._19(-1,null,["\n      "])),(l()(),a.Z(14,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.onHome()&&t}return t},P.b,P.a)),a.Y(15,1097728,[[1,4]],0,z.a,[[8,""],f.a,a.j,a.z],null,null),(l()(),a._19(-1,0,["\n        "])),(l()(),a.Z(17,0,null,0,1,"ion-icon",[["name","home"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(18,147456,null,0,q.a,[f.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n      "])),(l()(),a._19(-1,null,["\n    "])),(l()(),a._19(-1,3,["\n  "])),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(23,0,null,null,6,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,M.b,M.a)),a.Y(24,49152,null,0,Y.a,[f.a,a.j,a.z],null,null),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(26,0,null,3,2,"ion-title",[],null,null,null,Z.b,Z.a)),a.Y(27,49152,null,0,j.a,[f.a,a.j,a.z,[2,Y.a],[2,v.a]],null,null),(l()(),a._19(-1,0,["\n      Embedded AMP Article\n    "])),(l()(),a._19(-1,3,["\n  "])),(l()(),a._19(-1,null,["\n"])),(l()(),a._19(-1,null,["\n\n\n"])),(l()(),a.Z(32,0,null,null,4,"ion-content",[["no-padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,w.b,w.a)),a.Y(33,4374528,null,0,X.a,[f.a,x.a,L.a,a.j,a.z,C.a,E.a,a.u,[2,k.a],[2,A.a]],null,null),(l()(),a._19(-1,1,["\n  "])),(l()(),a.Z(35,0,null,1,0,"div",[["id","container"]],null,null,null,null,null)),(l()(),a._19(-1,1,["\n"])),(l()(),a._19(-1,null,["\n"]))],function(l,n){l(n,4,0,"primary");l(n,18,0,"home")},function(l,n){l(n,3,0,a._13(n,4)._hidden,a._13(n,4)._sbPadding);l(n,17,0,a._13(n,18)._hidden);l(n,23,0,a._13(n,24)._sbPadding);l(n,32,0,a._13(n,33).statusbarPadding,a._13(n,33)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var a=u(0),o=(u(3),u(117),function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){var l=this,n=this.navParams.data.url;console.log(n),(window.AMP=window.AMP||[]).push(function(u){var t=document.getElementById("container");l.getAmpArticlePage(n).then(function(l){console.log(l),u.attachShadowDoc(t,l,n)})})},l.prototype.onHome=function(){this.navCtrl.setRoot("HomePage")},l.prototype.getAmpArticlePage=function(l){var n=new XMLHttpRequest;return new Promise(function(u,t){n.open("GET",l,!0),n.responseType="document",n.setRequestHeader("Accept","text/html"),n.onload=function(){return n.responseXML.documentElement.hasAttribute("amp")||n.responseXML.documentElement.hasAttribute("⚡")?u(n.responseXML):t("Article does not have an AMP version.")},n.send()})},l}()),e=function(){return function(){}}(),s=u(210),i=u(211),c=u(212),r=u(213),d=u(214),b=u(215),_=u(216),p=u(217),m=u(218),g=u(119),f=u(1),k=u(5),h=u(300),v=u(43),C=u(8),A=u(21),Z=u(301),j=u(118),Y=u(54),y=u(122),P=u(44),z=u(20),q=u(45),M=u(303),w=u(302),X=u(23),x=u(4),L=u(9),E=u(38),H=u(11),R=a.X({encapsulation:2,styles:[],data:{}}),B=a.V("page-amp-detail",o,function(l){return a._21(0,[(l()(),a.Z(0,0,null,null,1,"page-amp-detail",[],null,null,null,t,R)),a.Y(1,49152,null,0,o,[A.a,H.a],null,null)],null,null)},{},{},[]),D=u(18),I=u(15),T=u(120),S=u(39);u.d(n,"AmpDetailPageModuleNgFactory",function(){return V});var V=a.W(e,[],function(l){return a._10([a._11(512,a.i,a.S,[[8,[s.a,i.a,c.a,r.a,d.a,b.a,_.a,p.a,m.a,B]],[3,a.i],a.s]),a._11(4608,D.l,D.k,[a.r,[2,D.t]]),a._11(4608,I.u,I.u,[]),a._11(4608,I.d,I.d,[]),a._11(512,D.c,D.c,[]),a._11(512,I.s,I.s,[]),a._11(512,I.g,I.g,[]),a._11(512,I.p,I.p,[]),a._11(512,T.a,T.a,[]),a._11(512,T.b,T.b,[]),a._11(512,e,e,[]),a._11(256,S.a,o,[])])})},300:function(l,n,u){"use strict";function t(l){return a._21(0,[(l()(),a.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.backButtonClick(u)&&t}return t},e.b,e.a)),a.Y(3,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(4,1097728,null,0,s.a,[[8,"bar-button"],i.a,a.j,a.z],null,null),(l()(),a.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(6,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(7,147456,null,0,c.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),a.Y(9,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._19(10,null,["",""])),a._12(null,0),a._12(null,1),a._12(null,2),(l()(),a.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a.Y(15,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode);l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb);l(n,5,0,a._13(n,7)._hidden);l(n,10,0,u._backText)})}u.d(n,"a",function(){return r}),n.b=t;var a=u(0),o=u(18),e=u(44),s=u(20),i=u(1),c=u(45),r=(u(5),u(21),a.X({encapsulation:2,styles:[],data:{}}))},301:function(l,n,u){"use strict";function t(l){return a._21(2,[(l()(),a.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}u.d(n,"a",function(){return e}),n.b=t;var a=u(0),o=u(18),e=(u(1),a.X({encapsulation:2,styles:[],data:{}}))},302:function(l,n,u){"use strict";function t(l){return a._21(2,[a._17(402653184,1,{_fixedContent:0}),a._17(402653184,2,{_scrollContent:0}),(l()(),a.Z(2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),a._12(null,0),(l()(),a.Z(4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),a._12(null,1),a._12(null,2)],null,null)}u.d(n,"a",function(){return o}),n.b=t;var a=u(0),o=(u(1),u(4),u(9),u(38),u(5),u(21),a.X({encapsulation:2,styles:[],data:{}}))},303:function(l,n,u){"use strict";function t(l){return a._21(2,[(l()(),a.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,0),a._12(null,1),a._12(null,2),(l()(),a.Z(5,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a.Y(6,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,6,0,"toolbar-content","toolbar-content-"+u._mode)},null)}u.d(n,"a",function(){return e}),n.b=t;var a=u(0),o=u(18),e=(u(1),a.X({encapsulation:2,styles:[],data:{}}))}});