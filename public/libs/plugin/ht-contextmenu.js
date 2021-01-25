!function(m,y){"use strict";var i="ht",Z=m[i],k="position",C="absolute",f="px",L="left",q="top",c="innerHTML",H="className",P="width",b="height",o="0",U="display",V="none",j="visibility",e="user-select",J="margin",n="padding",x=null,N=Z.Color,B=Z.Default,v=B.getInternal(),_=m.setTimeout,r=m.setInterval,S=m.clearTimeout,A=m.clearInterval,t=m.parseInt,l=B.isLeftButton,R=B.isDragging,g=B.startDragging,u=B.getDistance,Q=B.isTouchable,h=N.widgetIconHighlight,D=N.widgetIconBorder,s=N.widgetIconGradient,p=function(){return document},F=function(s,x){return s.querySelectorAll(x)},W=function(u){var _=p().createElement(u);return"ul"===u&&(O(_,k,"relative"),O(_,J,o),O(_,n,o),O(_,"list-style",V),O(_,"box-sizing","border-box"),O(_,"-moz-box-sizing","border-box"),O(_,U,"inline-block"),O(_,"vertical-align","text-bottom"),O(_,"border","1px solid "+B.contextMenuBorderColor),O(_,"box-shadow","0 0 16px 1px "+B.contextMenuShadowColor),O(_,"overflow","hidden"),B.contextMenuBorderRadius&&O(_,"border-radius",B.contextMenuBorderRadius+f)),_},T=function(Y){var H=Y.touches[0];return H?H:Y.changedTouches[0]},G=function(){return W("div")},w=function(){return W("canvas")},O=function(e,L,m){e.style.setProperty(L,m,x)},d=function(z,t,D){B.def(Z.widget[z],t,D)},E=function(H,t){H.appendChild(t)},Y=function(a,B){a.removeChild(B)},K=v.addEventListener,z=v.removeEventListener;v.addMethod(B,{contextMenuCheckIcon:{width:16,height:16,comps:[{type:"border",rect:[1,1,14,14],width:1,color:D},{type:"shape",points:[13,3,7,12,4,8],borderWidth:2,borderColor:h}]},contextMenuRadioIcon:{width:16,height:16,comps:[{type:"circle",rect:[2,2,12,12],borderWidth:1,borderColor:D},{type:"circle",rect:[4,4,8,8],borderWidth:1,borderColor:h,gradient:B.imageGradient,gradientColor:s,background:h}]},contextMenuLabelFont:(Q?"16":"13")+"px arial, sans-serif",contextMenuLabelColor:"#000",contextMenuBackground:"#fff",contextMenuDisabledLabelColor:"#888",contextMenuHoverBackground:"#648BFE",contextMenuHoverLabelColor:"#fff",contextMenuSeparatorWidth:1,contextMenuSeparatorColor:"#E5E5E5",contextMenuScrollerColor1:"#FDFDFD",contextMenuScrollerColor2:"#D3D3D3",contextMenuScrollerBorderColor:"#C3C3C3",contextMenuBorderColor:"#C3C3C3",contextMenuShadowColor:"rgba(128, 128, 128, 0.5)",contextMenuBorderRadius:5,contextMenuSubmenuMark:"▶"},!0);var M=function(M){var F=this,s=M._view;if(F.$11b=M,F.addListeners(),K(s,"contextmenu",function(X){X.preventDefault()}),!Q){var T=F.$37b=F.$36b.bind(F);K(s,"mouseover",T),K(s,"mouseout",T)}};B.def(M,y,{ms_listener:1,getView:function(){return this.$11b._view},handle_touchstart:function(O){if(B.preventDefault(O),l(O)){for(var F=this,D=F.$11b,x=F.getView(),w=x.children,a=0;a<w.length;a++){var Y=w[a],H=Y.$24b,L=Y.$25b;if(H&&H.contains(O.target))return D.scrollUp(Y),F.$28b=_(function(){F.$29b=r(function(){D.scrollUp(Y)},100)},500),g(F,O),void 0;if(L&&L.contains(O.target))return D.scrollDown(Y),F.$28b=_(function(){F.$29b=r(function(){D.scrollDown(Y)},100)},500),g(F,O),void 0}Q&&(O=T(O)),F.$30b={x:O.pageX,y:O.pageY}}},handle_mousedown:function(p){this.handle_touchstart(p)},handle_touchend:function(i){if(l(i)){var h=this,v=h.$30b,b=Q?{x:T(i).pageX,y:T(i).pageY}:{x:i.pageX,y:i.pageY};if(!v||u(v,b)>1)return delete h.$30b,void 0;for(var J=h.getView(),M=h.$11b,m=i.target,g=x,L=x,z=M._items,R=J.$26b,G=0;G<R.length;G++)if(L=R[G],L.contains(m)){g=L.getAttribute("data-id");break}if(g&&z){var K=M.$17b(z,function(N){return N._id===g});if(K){var Z=!1;K.disabled instanceof Function?Z=K.disabled.call(M,K):K.disabled===!0&&(Z=!0),Z||(K.items?Q&&h.$36b(L,!0):M.$1b(K,i))}}delete h.$30b}},$36b:function(G,z){if(!R()){var o,$=this,A=$.$11b,n=$.getView(),J=A.$20b||n.children[0],S=A.$19b,U=n.$26b,F=n.children,T=G.target,K=n.getBoundingClientRect(),u=B.getWindowInfo(),s=u.width,d=u.height,I=function(c){for(var V=0;V<F.length;V++){var b=F[V],K=new RegExp(c+"$"),N=b[H];if(N&&(K.test(N)||N.indexOf(c+" ")>=0))return b}},Q=function(n){for(var f=0;f<U.length;f++){var d=U[f],v=new RegExp(n+"$"),X=d[H];if(X&&(v.test(X)||X.indexOf(n+" ")>=0))return d}},a=function(_){var B=Q("menu-item"+_.$45b),A=B.getBoundingClientRect(),w=A.top-K.top,$=A.left-K.left;O(_,q,w+f),O(_,L,$+A.width+f);var n=_.getBoundingClientRect(),r=n.top,M=n.left,N=n.height,v=n.width,J=r+N+2,E=M+v+2;J>d&&O(_,q,w+d-J+f),E>s&&O(_,L,$-v+f)};if(z)o=G;else{if("mouseover"===G.type){for(var P=0;P<U.length;P++){var b=U[P];if(b.contains(T)){o=b;break}}if(!o&&S){var h=S.parentNode,e=I("submenu"+S.getAttribute("data-id"));(e&&e.contains(T)||h&&h.contains(T))&&(o=S)}}else if("mouseout"===G.type){for(var W=!1,C=G.relatedTarget,P=0;P<F.length;P++){var r=F[P];if("hidden"!==r.style.visibility&&r.contains(C)){W=!0;break}}if(W)return}!o&&J&&(o=Q("menu-item"+(J.$45b||"NaN")))}if(o!=S){if(S)for(var N=S;N;){if(N[H]=N[H].replace(" menu-item-hover",""),N[H].indexOf("disabled")<0){var M=A.getItemByProperty("_id",N.getAttribute("data-id"));null!=M.background?M.background instanceof Function?O(N,"background-color",M.background.call(A,M)):O(N,"background-color",M.background):O(N,"background-color",B.contextMenuBackground),O(N,"color",B.contextMenuLabelColor)}var p=I("submenu"+N.getAttribute("data-id"));p&&O(p,j,"hidden");var E=N.parentNode;N=Q("menu-item"+(E.$45b||"NaN"))}if(o){for(var m=o,_=[];m;){m[H]+=" menu-item-hover",m[H].indexOf("disabled")<0&&(O(m,"background-color",B.contextMenuHoverBackground),O(m,"color",B.contextMenuHoverLabelColor));var Y=I("submenu"+m.getAttribute("data-id"));Y&&(O(Y,j,"visible"),_.push(Y));var E=m.parentNode;m=Q("menu-item"+(E.$45b||"NaN"))}_.reverse(),_.forEach(function(b){a(b)})}}A.$19b=o,A.$20b=o?o.parentNode:n.children[0]}},handle_mouseup:function(i){this.handle_touchend(i)},handleWindowTouchEnd:function(){var T=this;T.$28b!=x&&(S(T.$28b),delete T.$28b),T.$29b!=x&&(A(T.$29b),delete T.$29b),delete T.$34b,delete T.$30b,delete T.$35b},handleWindowMouseUp:function(K){this.handleWindowTouchEnd(K)},handle_mousemove:function(S){this.handle_touchmove(S)},handle_touchmove:function(C){if(!R()&&l(C)){for(var w=this,q=w.getView().children,L=x,N=0;N<q.length;N++){var F=q[N];if(F.contains(C.target)){L=F;break}}var M=w.$30b,H=Q?{x:T(C).pageX,y:T(C).pageY}:{x:C.pageX,y:C.pageY};L&&M&&u(M,H)>2&&(g(w,C),w.$34b=L,w.$35b=L.$18b)}},handleWindowTouchMove:function(v){v.preventDefault();var n=this,P=n.$11b,$=n.$34b,R=n.$35b,w=n.$30b;if(w&&$){var U=Q?{x:T(v).pageX,y:T(v).pageY}:{x:v.pageX,y:v.pageY},e=U.y-w.y;e>0?P.scrollUp($,$.$18b-(R-e)):P.scrollDown($,R-e-$.$18b)}},handleWindowMouseMove:function(R){this.handleWindowTouchMove(R)},$10b:function(B,u){B.preventDefault();for(var j=this,E=j.getView().children,m=x,F=0;F<E.length;F++){var Z=E[F];if(Z.contains(B.target)){m=Z;break}}if(m){var s=this.$11b,K=s.getRowHeight();Math.abs(u)>.05&&(u>0?s.scrollUp(m,u*K):0>u&&s.scrollDown(m,-u*K))}},handle_mousewheel:function(X){this.$10b(X,X.wheelDelta/40)},handle_DOMMouseScroll:function(f){this.$10b(f,-f.detail)},$44b:function(R){this.getView().contains(R.target)||this.$11b.hide()},$41b:function(T){this.$11b.show(T)},$4b:function(E,N){var L=this.$11b;if(N=N||L._items,N&&N.length&&E.keyCode){var k=[E.keyCode];E.shiftKey&&k.push(16),E.ctrlKey&&k.push(17),E.altKey&&k.push(18),/mac/.test(m.navigator?m.navigator.userAgent.toLowerCase():"")?E.metaKey&&k.push(17):E.metaKey&&k.push(91),k.sort();var U=k.join(),J=L.$17b(N,function(e){if(e.key){var F=e.key.slice(0);return F.sort(),U===F.join()}});if(J){J.preventDefault!==!1&&E.preventDefault();var d=!1;J.disabled instanceof Function?d=J.disabled.call(L,J):J.disabled===!0&&(d=!0),d||L.$1b(J,E)}}},$39b:function(Z){var z=this,P=T(Z);z.$32b={x:P.pageX,y:P.pageY}},$38b:function(k){var L=this,D=T(k);L.$31b={x:D.pageX,y:D.pageY},L.$33b=_(function(){L.$31b&&(L.$32b?u(L.$31b,L.$32b)<10&&L.$11b.show(k):L.$11b.show(k)),delete L.$33b,delete L.$31b,delete L.$32b},600)},$40b:function(){var _=this;_.$33b!=x&&(S(_.$33b),delete _.$33b,delete _.$31b,delete _.$32b)}}),Z.widget.ContextMenu=function(E){var T=this,d=T._view=v.createView(null,T);d[H]="ht-widget-contextmenu",T.setItems(E),T.$13b=new M(T),O(d,"font",B.contextMenuLabelFont),O(d,k,C),O(d,"cursor","default"),O(d,"-webkit-"+e,V),O(d,"-moz-"+e,V),O(d,"-ms-"+e,V),O(d,e,V),O(d,"box-sizing","border-box"),O(d,"-moz-box-sizing","border-box"),B.baseZIndex!=x&&O(d,"z-index",t(B.baseZIndex)+2+""),T.$3b=function(F){T.$13b.$4b(F)}},d("ContextMenu",y,{$5b:0,_items:x,$21b:x,_enableGlobalKey:!1,ms_v:1,enableGlobalKey:function(){var m=this,Q=m._enableGlobalKey;Q===!1&&(K(p(),"keydown",m.$3b),m._enableGlobalKey=!0)},disableGlobalKey:function(){this._enableGlobalKey=!1,z(p(),"keydown",this.$3b)},setItems:function(K){this._items=K},getItems:function(){return this._items},setVisibleFunc:function(s){this.$16b=s},setLabelMaxWidth:function($){this.$43b=$},$1b:function(P,Q){var C=this;if("check"===P.type)P.selected=!P.selected;else if("radio"===P.type){var E=P.groupId;C.$17b(C._items,function(e){e.groupId===E&&(e.selected=!1)}),P.selected=!0}if(C.hide(),P.action)P.action.apply(P.scope||C,[P,Q]);else if(P.href){var x=P.linkTarget||"_self";m.open(P.href,x)}},getItemById:function(W){return this.getItemByProperty("id",W)},setItemVisible:function(w,N){var b=this.getItemById(w);b&&(b.visible=N)},getItemByProperty:function(A,h,i){var J=this;if(i=i||J._items,!i||0===i.length)return x;var c=J.$17b(i,function(j){return j[A]===h});return c||x},scrollUp:function(V,D){var $=this;if(D=D==x?20:D,D=t(D),0!==D){var I=0;V.$18b>D&&(I=V.$18b-D),$.$42b(V,I),V.scrollTop=I,V.$18b=I}},scrollDown:function($,j){var m=this;if(j=j==x?20:j,j=t(j),0!==j){var I=$.$22b,F=$.$23b,L=I-F;F+$.$18b+j<I&&(L=$.$18b+j),m.$42b($,L),$.scrollTop=L,$.$18b=L}},$42b:function(z,S){S=S==x?z.$18b:S;var q=z.$24b,v=z.$25b;q&&(O(q,"top",S+f),0==S?O(q,U,V):O(q,U,"block")),v&&(O(v,"bottom",-S+f),S==z.$22b-z.$23b?O(v,U,V):O(v,U,"block"))},getRowHeight:function(){return this._view.querySelector(".menu-item").offsetHeight},$17b:function(P,x){for(var l=0;l<P.length;l++){var j=P[l];if(x(j))return j;if(j.items){var X=this.$17b(j.items,x);if(X)return X}}},$2b:function(t,s){for(var I=this,L=0;L<t.length;L++){I.$5b++;var $=t[L];if($.visible!==!1&&!(B.isFunction($.visible)&&$.visible()===!1||I.$16b&&!I.$16b.call(I,$))){var e=W("li"),M=I.$5b+"";if(O(e,"white-space","nowrap"),O(e,U,"block"),"separator"===$||$.separator===!0){var N=G();N[H]="separator",O(N,b,B.contextMenuSeparatorWidth+f),O(N,"background",B.contextMenuSeparatorColor),E(e,N)}else{$._id=M,e.setAttribute("data-id",M);var p=W("span"),K=W("span"),D=w(),z=G();if(O(p,U,"inline-block"),O(p,b,"1.2em"),O(K,U,"inline-block"),O(K,b,"1.2em"),O(K,"line-height","1.2em"),D[H]="prefix",O(D,U,"inline-block"),O(D,P,"1em"),O(D,b,"1em"),O(D,"vertical-align","middle"),O(D,J,"0 0.2em"),"check"===$.type&&$.selected?D[H]+=" check-prefix":"radio"===$.type&&$.selected&&(D[H]+=" radio-prefix"),E(e,D),$.icon){var d=w();d[H]="contextmenu-item-icon",O(d,U,"inline-block"),O(d,b,"1.2em"),O(d,P,"1.2em"),O(d,"margin-right","0.2em"),O(d,"float","left"),d.$50b=$.icon,d._item=$,E(p,d)}if(K[c]=$.label,E(p,K),E(e,p),z[H]="suffix",O(z,U,"inline-block"),O(z,"margin-left","1em"),O(z,"margin-right","0.4em"),O(z,"text-align","right"),O(z,"font-size","75%"),$.items&&(z[c]=B.contextMenuSubmenuMark),$.suffix&&(z[c]=$.suffix),E(e,z),e[H]="menu-item menu-item"+M,null!=$.background?$.background instanceof Function?O(e,"background-color",$.background.call(I,$)):O(e,"background-color",$.background):O(e,"background-color",B.contextMenuBackground),O(e,"color",B.contextMenuLabelColor),O(e,n,"3px 0"),$.disabled instanceof Function){var v=$.disabled.call(I,$);v&&(e[H]+=" disabled",O(e,"color",B.contextMenuDisabledLabelColor))}else $.disabled&&(e[H]+=" disabled",O(e,"color",B.contextMenuDisabledLabelColor));if($.items){I.$21b||(I.$21b=new Z.List);var T=W("ul");T[H]="submenu"+M,T.$45b=M,O(T,j,"hidden"),O(T,k,C),E(I._view,T),I.$21b.add(T),I.$2b($.items,T)}}E(s,e)}}},rebuild:function(){var K=this,a=K._items,i=K._view;if(i&&(i[c]="",K.$21b=x,K.$5b=0,K.$19b=x,K.$20b=x,i.$26b=x,a&&0!==a.length)){var P=W("ul",K._r);E(i,P),K.$2b(a,P)}},addTo:function(h){if(h){var g=this,D=g.$13b;if(g.$12b=h,g.$9b=function(N){D.$44b(N)},g.$27b=function(I){D.$41b(I)},Q){var C=g.$6b=function(w){D.$38b(w)},d=g.$7b=function(m){D.$39b(m)},H=g.$8b=function(B){D.$40b(B)};K(h,"touchstart",C,!0),K(h,"touchmove",d),K(h,"touchend",H)}else K(h,"contextmenu",g.$27b)}},showOnView:function(i,L,o){i=i.getView?i.getView():i;var P=B.getWindowInfo(),C=i.getBoundingClientRect();this.show(C.left+P.left+L,C.top+P.top+o)},show:function(l,s,b){var I=this,b=b==x?!0:!1,j=I._view;if(j){if(I.invalidate(),1===arguments.length){var m=l;if(Q){var r=T(m);l=r.pageX,s=r.pageY}else l=m.pageX,s=m.pageY}var h=B.getWindowInfo(),n=h.width,d=h.height,i=h.left,A=h.top,t={pageX:l,pageY:s,clientX:l-i,clientY:s-A,target:1,originEvent:m},u=t.clientX,z=t.clientY,v=function(l){l.style.height=d-6+f;var s=G(),i=G(),e=function(N){O(N,k,C),O(N,"text-align","center"),O(N,P,"100%"),O(N,"font-size",10+f),O(N,"padding","2px 0"),O(N,"border","0px solid "+B.contextMenuScrollerBorderColor),O(N,"background-color",B.contextMenuScrollerColor1),N.style.backgroundImage="-webkit-linear-gradient(top, "+B.contextMenuScrollerColor1+", "+B.contextMenuScrollerColor2+")",N.style.backgroundImage="linear-gradient(to bottom, "+B.contextMenuScrollerColor1+", "+B.contextMenuScrollerColor2+")"};s[H]="menu-arrow-item menu-arrow-item-top",i[H]="menu-arrow-item menu-arrow-item-bottom",e(s),O(s,"top",o),O(s,"left",o),O(s,"border-bottom-width",1+f),s[c]="▲",e(i),O(i,"bottom",o),O(i,"left",o),O(i,"border-top-width",1+f),i[c]="▼",l.$24b=s,l.$25b=i,l.$18b=l.scrollTop,l.$22b=l.scrollHeight,l.$23b=l.clientHeight,E(l,s),E(l,i),I.$42b(l)};I.beforeShow&&I.beforeShow(t);var $=I._items;if($&&(m&&m.preventDefault(),$.length)){I.rebuild(),B.appendToScreen(j),j.$26b=F(j,".menu-item");var V=j.children[0];V.offsetHeight>d&&v(V);var Z=z+(b?1:0),S=u+(b?1:0),J=function(p){for(var l=0,$=0,B=0,L=I.$43b;B<p.children.length;B++){var H=p.children[B];if(H.getAttribute("data-id")){var y=H.children[1],n=H.children[2],D=y.children;if(L){var K=D[0];D.length>1&&(K=D[1]),K.offsetWidth>L&&(K[c]="<marquee scrollamount='3'>"+K[c]+"</marquee>",K.children[0].style.verticalAlign="text-bottom",O(K,P,L+f),O(K,U,"inline-block"))}var S=y.offsetWidth,d=n.offsetWidth;S>l&&(l=S),d>$&&($=d)}}for(B=0;B<p.children.length;B++){var H=p.children[B];if(H.getAttribute("data-id")){var y=H.children[1],n=H.children[2],E=y.children[0],W=y.children[1];!W&&E.style.width&&O(E,P,l+f),O(y,P,l+f),O(n,P,$+f)}}};J(V);var W=z+3+j.offsetHeight,y=u+3+j.offsetWidth;W>d?O(j,q,Z-(W-d)+A+f):O(j,q,Z+A+f),y>n?O(j,L,S-(y-n)+i+f):O(j,L,S+i+f);var M=I.$21b;M&&M.each(function(r){J(r),r.offsetHeight>d&&v(r)}),I.$9b&&K(p(),Q?"touchstart":"mousedown",I.$9b,!0),I.afterShow&&I.afterShow(t),I.$47b()}}},isShowing:function(){return this._view?this._view.parentNode!=x:!1},getRelatedView:function(){return this.$12b},hide:function(){var b=this,K=b._view;K&&K.parentNode&&(Y(K.parentNode,K),z(p(),Q?"touchstart":"mousedown",b.$9b,!0),b.afterHide&&b.afterHide())},dispose:function(){var D=this,g=D.$12b,F=D._view;F&&(F.parentNode&&Y(F.parentNode,F),D.disableGlobalKey(),g&&(Q?(z(g,"touchstart",D.$6b,!0),z(g,"touchmove",D.$7b),z(g,"touchend",D.$8b)):z(g,"contextmenu",D.$27b)),D._view=D._items=D.$21b=D.$19b=D.$12b=D.beforeShow=D.afterShow=D.afterHide=D.$9b=D.$3b=D.$6b=D.$7b=D.$8b=D.$27b=x)},$46b:function(M,T,Q,b,x){var U=v.initContext(M);v.translateAndScale(U,0,0,1),U.clearRect(0,0,Q,b),B.drawStretchImage(U,B.getImage(T),"fill",0,0,Q,b,x,this),U.restore()},$47b:function(){var t,X,_,R=this,j=R._view;if(R.isShowing()){var L=F(j,".check-prefix");for(_=0;_<L.length;_++){var B=L[_];t=B.clientWidth,X=B.clientHeight,B.$48b=t,B.$49b=X,v.setCanvas(B,t,X)}var e=F(j,".radio-prefix");for(_=0;_<e.length;_++){var P=e[_];t=P.clientWidth,X=P.clientHeight,P.$48b=t,P.$49b=X,v.setCanvas(P,t,X)}var s=F(j,".contextmenu-item-icon");for(_=0;_<s.length;_++){var N=s[_];t=N.clientWidth,X=N.clientHeight,N.$48b=t,N.$49b=X,v.setCanvas(N,t,X)}}},validateImpl:function(){var w,z,E,C=this,a=C._view;if(C.isShowing()){var K=F(a,".check-prefix");for(E=0;E<K.length;E++){var s=K[E];w=s.$48b,z=s.$49b,w&&z&&C.$46b(s,B.contextMenuCheckIcon,w,z)}var d=F(a,".radio-prefix");for(E=0;E<d.length;E++){var $=d[E];w=$.$48b,z=$.$49b,w&&z&&C.$46b($,B.contextMenuRadioIcon,w,z)}var P=F(a,".contextmenu-item-icon");for(E=0;E<P.length;E++){var l=P[E];w=l.$48b,z=l.$49b,w&&z&&C.$46b(l,B.getImage(l.$50b),w,z,l._item)}}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);