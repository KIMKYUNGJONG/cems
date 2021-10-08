!function(M,_){"use strict";var f="ht",q=M[f],I="position",S="absolute",P="px",D="left",n="top",R="innerHTML",H="className",G="width",W="height",v="0",s="display",y="none",t="visibility",i="user-select",m="margin",l="padding",A=null,Z=q.Color,K=q.Default,X=K.getInternal(),c=M.setTimeout,N=M.setInterval,O=M.clearTimeout,p=M.clearInterval,F=M.parseInt,k=K.isLeftButton,r=K.isDragging,g=K.startDragging,Q=K.getDistance,w=K.isTouchable,T=K.isTouchEvent,z=K.getPagePoint,d=K.isRightButton,u=Z.widgetIconHighlight,e=Z.widgetIconBorder,$=Z.widgetIconGradient,o=function(){return document},j=function(D,Z){return D.querySelectorAll(Z)},J=function(i){var d=o().createElement(i);return"ul"===i&&(U(d,I,"relative"),U(d,m,v),U(d,l,v),U(d,"list-style",y),U(d,"box-sizing","border-box"),U(d,"-moz-box-sizing","border-box"),U(d,s,"inline-block"),U(d,"vertical-align","text-bottom"),U(d,"border","1px solid "+K.contextMenuBorderColor),U(d,"box-shadow","0 0 16px 1px "+K.contextMenuShadowColor),U(d,"overflow","hidden"),K.contextMenuBorderRadius&&U(d,"border-radius",K.contextMenuBorderRadius+P)),d},h=function(W){var j=W.touches[0];return j?j:W.changedTouches[0]},L=function(){return J("div")},V=function(){return J("canvas")},U=function(W,L,e){W.style.setProperty(L,e,A)},x=function(D,y,R){K.def(q.widget[D],y,R)},b=function(W,p){W.appendChild(p)},B=function(D,w){D.removeChild(w)},E=X.addEventListener,C=X.removeEventListener;X.addMethod(K,{contextMenuCheckIcon:{width:16,height:16,comps:[{type:"border",rect:[1,1,14,14],width:1,color:e},{type:"shape",points:[13,3,7,12,4,8],borderWidth:2,borderColor:u}]},contextMenuRadioIcon:{width:16,height:16,comps:[{type:"circle",rect:[2,2,12,12],borderWidth:1,borderColor:e},{type:"circle",rect:[4,4,8,8],borderWidth:1,borderColor:u,gradient:K.imageGradient,gradientColor:$,background:u}]},contextMenuLabelFont:(w?"16":"13")+"px arial, sans-serif",contextMenuLabelColor:"#000",contextMenuBackground:"#fff",contextMenuDisabledLabelColor:"#888",contextMenuHoverBackground:"#648BFE",contextMenuHoverLabelColor:"#fff",contextMenuSeparatorWidth:1,contextMenuSeparatorColor:"#E5E5E5",contextMenuScrollerColor1:"#FDFDFD",contextMenuScrollerColor2:"#D3D3D3",contextMenuScrollerBorderColor:"#C3C3C3",contextMenuBorderColor:"#C3C3C3",contextMenuShadowColor:"rgba(128, 128, 128, 0.5)",contextMenuBorderRadius:5,contextMenuSubmenuMark:"▶"},!0);var Y=function(_){var N=this,A=_._view;N.$11b=_,N.addListeners(),E(A,"contextmenu",function(u){u.preventDefault()});var r=N.$37b=N.$36b.bind(N);E(A,"mouseover",r),E(A,"mouseout",r)};K.def(Y,_,{ms_listener:1,getView:function(){return this.$11b._view},handle_touchstart:function(u){if(K.preventDefault(u),k(u)){for(var h=this,E=h.$11b,H=h.getView(),n=H.children,t=0;t<n.length;t++){var O=n[t],G=O.$24b,v=O.$25b;if(G&&G.contains(u.target))return E.scrollUp(O),h.$28b=c(function(){h.$29b=N(function(){E.scrollUp(O)},100)},500),g(h,u),void 0;if(v&&v.contains(u.target))return E.scrollDown(O),h.$28b=c(function(){h.$29b=N(function(){E.scrollDown(O)},100)},500),g(h,u),void 0}h.$30b=z(u)}},handle_mousedown:function(L){this.handle_touchstart(L)},handle_touchend:function(N){if(k(N)){var G=this,s=G.$30b,l=T(N)?{x:h(N).pageX,y:h(N).pageY}:{x:N.pageX,y:N.pageY};if(!s||Q(s,l)>1)return delete G.$30b,void 0;for(var u=G.getView(),L=G.$11b,m=N.target,g=A,J=A,p=L._items,S=u.$26b,W=0;W<S.length;W++)if(J=S[W],J.contains(m)){g=J.getAttribute("data-id");break}if(g&&p){var P=L.$17b(p,function(l){return l._id===g});if(P){var O=!1;P.disabled instanceof Function?O=P.disabled.call(L,P):P.disabled===!0&&(O=!0),O||(P.items?T(N)&&G.$36b(J,!0):L.$1b(P,N))}}delete G.$30b}},$36b:function(O,y){if(!r()){var $,Q=this,E=Q.$11b,l=Q.getView(),s=E.$20b||l.children[0],S=E.$19b,j=l.$26b,b=l.children,B=O.target,v=l.getBoundingClientRect(),z=K.getWindowInfo(),Y=z.width,A=z.height,J=function(m){for(var k=0;k<b.length;k++){var t=b[k],o=new RegExp(m+"$"),E=t[H];if(E&&(o.test(E)||E.indexOf(m+" ")>=0))return t}},w=function(w){for(var P=0;P<j.length;P++){var G=j[P],C=new RegExp(w+"$"),r=G[H];if(r&&(C.test(r)||r.indexOf(w+" ")>=0))return G}},V=function(j){var G=w("menu-item"+j.$45b),y=G.getBoundingClientRect(),M=y.top-v.top,F=y.left-v.left;U(j,n,M+P),U(j,D,F+y.width+P);var s=j.getBoundingClientRect(),m=s.top,d=s.left,H=s.height,z=s.width,Q=m+H+2,q=d+z+2;Q>A&&U(j,n,M+A-Q+P),q>Y&&U(j,D,F-z+P)};if(y)$=O;else{if("mouseover"===O.type){for(var f=0;f<j.length;f++){var M=j[f];if(M.contains(B)){$=M;break}}if(!$&&S){var e=S.parentNode,W=J("submenu"+S.getAttribute("data-id"));(W&&W.contains(B)||e&&e.contains(B))&&($=S)}}else if("mouseout"===O.type){for(var i=!1,h=O.relatedTarget,f=0;f<b.length;f++){var q=b[f];if("hidden"!==q.style.visibility&&q.contains(h)){i=!0;break}}if(i)return}!$&&s&&($=w("menu-item"+(s.$45b||"NaN")))}if($!=S){if(S)for(var T=S;T;){if(T[H]=T[H].replace(" menu-item-hover",""),T[H].indexOf("disabled")<0){var R=E.getItemByProperty("_id",T.getAttribute("data-id"));null!=R.background?R.background instanceof Function?U(T,"background-color",R.background.call(E,R)):U(T,"background-color",R.background):U(T,"background-color",K.contextMenuBackground),U(T,"color",K.contextMenuLabelColor)}var g=J("submenu"+T.getAttribute("data-id"));g&&U(g,t,"hidden");var G=T.parentNode;T=w("menu-item"+(G.$45b||"NaN"))}if($){for(var x=$,C=[];x;){x[H]+=" menu-item-hover",x[H].indexOf("disabled")<0&&(U(x,"background-color",K.contextMenuHoverBackground),U(x,"color",K.contextMenuHoverLabelColor));var _=J("submenu"+x.getAttribute("data-id"));_&&(U(_,t,"visible"),C.push(_));var G=x.parentNode;x=w("menu-item"+(G.$45b||"NaN"))}C.reverse(),C.forEach(function(b){V(b)})}}E.$19b=$,E.$20b=$?$.parentNode:l.children[0]}},handle_mouseup:function(W){this.handle_touchend(W)},handleWindowTouchEnd:function(){var I=this;I.$28b!=A&&(O(I.$28b),delete I.$28b),I.$29b!=A&&(p(I.$29b),delete I.$29b),delete I.$34b,delete I.$30b,delete I.$35b},handleWindowMouseUp:function(o){this.handleWindowTouchEnd(o)},handle_mousemove:function(U){this.handle_touchmove(U)},handle_touchmove:function(Z){if(!r()&&k(Z)){for(var f=this,s=f.getView().children,E=A,R=0;R<s.length;R++){var u=s[R];if(u.contains(Z.target)){E=u;break}}var V=f.$30b,$=T(Z)?{x:h(Z).pageX,y:h(Z).pageY}:{x:Z.pageX,y:Z.pageY};E&&V&&Q(V,$)>2&&(g(f,Z),f.$34b=E,f.$35b=E.$18b)}},handleWindowTouchMove:function(X){X.preventDefault();var i=this,S=i.$11b,Y=i.$34b,C=i.$35b,E=i.$30b;if(E&&Y){var q=T(X)?{x:h(X).pageX,y:h(X).pageY}:{x:X.pageX,y:X.pageY},A=q.y-E.y;A>0?S.scrollUp(Y,Y.$18b-(C-A)):S.scrollDown(Y,C-A-Y.$18b)}},handleWindowMouseMove:function(x){this.handleWindowTouchMove(x)},$10b:function(x,i){x.preventDefault();for(var n=this,e=n.getView().children,w=A,t=0;t<e.length;t++){var L=e[t];if(L.contains(x.target)){w=L;break}}if(w){var X=this.$11b,T=X.getRowHeight();Math.abs(i)>.05&&(i>0?X.scrollUp(w,i*T):0>i&&X.scrollDown(w,-i*T))}},handle_mousewheel:function(A){this.$10b(A,A.wheelDelta/40)},handle_DOMMouseScroll:function(Q){this.$10b(Q,-Q.detail)},$44b:function(y){this.getView().contains(y.target)||this.$11b.hide()},$41b:function(Z){K.preventDefault(Z)},$4b:function(e,g){var J=this.$11b;if(g=g||J._items,g&&g.length&&e.keyCode){var L=[e.keyCode];e.shiftKey&&L.push(16),e.ctrlKey&&L.push(17),e.altKey&&L.push(18),/mac/.test(M.navigator?M.navigator.userAgent.toLowerCase():"")?e.metaKey&&L.push(17):e.metaKey&&L.push(91),L.sort();var I=L.join(),f=J.$17b(g,function(k){if(k.key){var H=k.key.slice(0);return H.sort(),I===H.join()}});if(f){f.preventDefault!==!1&&e.preventDefault();var V=!1;f.disabled instanceof Function?V=f.disabled.call(J,f):f.disabled===!0&&(V=!0),V||J.$1b(f,e)}}},$39b:function(y){this.$32b=z(y)},$38b:function(V){if(K.preventDefault(V),!k(V)){var S=this;S._showContextMenu=d(V),S._showContextMenu||(S.$31b=z(V),S.$33b=c(function(){S._showContextMenu=!0,delete S.$33b},600))}},$40b:function(w){var G=this;G._showContextMenu&&(d(w)?G.$11b.show(w):G.$31b&&(G.$32b?Q(G.$31b,G.$32b)<10&&G.$11b.show(w):G.$11b.show(w))),G.$33b!=A&&(O(G.$33b),delete G.$33b),delete G.$31b,delete G.$32b}}),q.widget.ContextMenu=function(b){var Z=this,P=Z._view=X.createView(null,Z);P[H]="ht-widget-contextmenu",Z.setItems(b),Z.$13b=new Y(Z),U(P,"font",K.contextMenuLabelFont),U(P,I,S),U(P,"cursor","default"),U(P,"-webkit-"+i,y),U(P,"-moz-"+i,y),U(P,"-ms-"+i,y),U(P,i,y),U(P,"box-sizing","border-box"),U(P,"-moz-box-sizing","border-box"),K.baseZIndex!=A&&U(P,"z-index",F(K.baseZIndex)+2+""),Z.$3b=function(c){Z.$13b.$4b(c)}},x("ContextMenu",_,{$16b:A,$5b:0,_items:A,$21b:A,_enableGlobalKey:!1,ms_v:1,enableGlobalKey:function(){var e=this,y=e._enableGlobalKey;y===!1&&(E(o(),"keydown",e.$3b),e._enableGlobalKey=!0)},disableGlobalKey:function(){this._enableGlobalKey=!1,C(o(),"keydown",this.$3b)},setItems:function(J){this._items=J},getItems:function(){return this._items},getVisibleFunc:function(){return this.$16b},setVisibleFunc:function(e){this.$16b=e},setLabelMaxWidth:function(I){this.$43b=I},$1b:function(a,G){var b=this;if("check"===a.type)a.selected=!a.selected;else if("radio"===a.type){var S=a.groupId;b.$17b(b._items,function(w){w.groupId===S&&(w.selected=!1)}),a.selected=!0}if(b.hide(),a.action)a.action.apply(a.scope||b,[a,G]);else if(a.href){var P=a.linkTarget||"_self";M.open(a.href,P)}},getItemById:function(q){return this.getItemByProperty("id",q)},setItemVisible:function(W,H){var K=this.getItemById(W);K&&(K.visible=H)},getItemByProperty:function(v,e,$){var c=this;if($=$||c._items,!$||0===$.length)return A;var j=c.$17b($,function(H){return H[v]===e});return j||A},scrollUp:function(g,n){var s=this;if(n=n==A?20:n,n=F(n),0!==n){var O=0;g.$18b>n&&(O=g.$18b-n),s.$42b(g,O),g.scrollTop=O,g.$18b=O}},scrollDown:function(H,P){var w=this;if(P=P==A?20:P,P=F(P),0!==P){var W=H.$22b,a=H.$23b,k=W-a;a+H.$18b+P<W&&(k=H.$18b+P),w.$42b(H,k),H.scrollTop=k,H.$18b=k}},$42b:function(B,g){g=g==A?B.$18b:g;var m=B.$24b,o=B.$25b;m&&(U(m,"top",g+P),0==g?U(m,s,y):U(m,s,"block")),o&&(U(o,"bottom",-g+P),g==B.$22b-B.$23b?U(o,s,y):U(o,s,"block"))},getRowHeight:function(){return this._view.querySelector(".menu-item").offsetHeight},$17b:function(Q,N){for(var c=0;c<Q.length;c++){var z=Q[c];if(N(z))return z;if(z.items){var S=this.$17b(z.items,N);if(S)return S}}},$2b:function(N,a){for(var h=this,B=0;B<N.length;B++){h.$5b++;var $=N[B];if($.visible!==!1)if(K.isFunction($.visible)&&$.visible()===!1)this._clearItemId($);else if(!h.$16b||h.$16b.call(h,$)){var D=J("li"),n=h.$5b+"";if(U(D,"white-space","nowrap"),U(D,s,"block"),"separator"===$||$.separator===!0){var e=L();e[H]="separator",U(e,W,K.contextMenuSeparatorWidth+P),U(e,"background",K.contextMenuSeparatorColor),b(D,e)}else{$._id=n,D.setAttribute("data-id",n);var d=J("span"),Z=J("span"),z=V(),O=L();if(U(d,s,"inline-block"),U(d,W,"1.2em"),U(Z,s,"inline-block"),U(Z,W,"1.2em"),U(Z,"line-height","1.2em"),z[H]="prefix",U(z,s,"inline-block"),U(z,G,"1em"),U(z,W,"1em"),U(z,"vertical-align","middle"),U(z,m,"0 0.2em"),"check"===$.type&&$.selected?z[H]+=" check-prefix":"radio"===$.type&&$.selected&&(z[H]+=" radio-prefix"),b(D,z),$.icon){var o=V();o[H]="contextmenu-item-icon",U(o,s,"inline-block"),U(o,W,"1.2em"),U(o,G,"1.2em"),U(o,"margin-right","0.2em"),U(o,"float","left"),o.$50b=$.icon,o._item=$,b(d,o)}if(Z[R]=$.label,b(d,Z),b(D,d),O[H]="suffix",U(O,s,"inline-block"),U(O,"margin-left","1em"),U(O,"margin-right","0.4em"),U(O,"text-align","right"),U(O,"font-size","75%"),$.items&&(O[R]=K.contextMenuSubmenuMark),$.suffix&&(O[R]=$.suffix),b(D,O),D[H]="menu-item menu-item"+n,null!=$.background?$.background instanceof Function?U(D,"background-color",$.background.call(h,$)):U(D,"background-color",$.background):U(D,"background-color",K.contextMenuBackground),U(D,"color",K.contextMenuLabelColor),U(D,l,"3px 0"),$.disabled instanceof Function){var y=$.disabled.call(h,$);y&&(D[H]+=" disabled",U(D,"color",K.contextMenuDisabledLabelColor))}else $.disabled&&(D[H]+=" disabled",U(D,"color",K.contextMenuDisabledLabelColor));if($.items){h.$21b||(h.$21b=new q.List);var A=J("ul");A[H]="submenu"+n,A.$45b=n,U(A,t,"hidden"),U(A,I,S),b(h._view,A),h.$21b.add(A),h.$2b($.items,A)}}b(a,D)}else this._clearItemId($);else this._clearItemId($)}},rebuild:function(){var Y=this,l=Y._items,c=Y._view;if(c&&(c[R]="",Y.$21b=A,Y.$5b=0,Y.$19b=A,Y.$20b=A,c.$26b=A,l&&0!==l.length)){var F=J("ul",Y._r);b(c,F),Y.$2b(l,F)}},addTo:function(F){if(F){var l=this,Q=l.$13b;l.$12b=F,l.$9b=function(N){Q.$44b(N)};var b=l.$6b=function(n){Q.$38b(n)},f=l.$7b=function(I){Q.$39b(I)},i=l.$8b=function(p){Q.$40b(p)};K.mockTouch&&(E(F,"touchstart",b,!0),E(F,"touchmove",f),E(F,"touchend",i)),E(F,"mousedown",b,!0),E(F,"mousemove",f),E(F,"mouseup",i),l.$27b=function(U){Q.$41b(U)},E(F,"contextmenu",l.$27b)}},showOnView:function(x,M,r){x=x.getView?x.getView():x;var B=K.getWindowInfo(),p=x.getBoundingClientRect();this.show(p.left+B.left+M,p.top+B.top+r)},show:function(V,W,$){var r=this,$=$==A?!0:!1,k=r._view;if(k){if(r.invalidate(),1===arguments.length){var y=V;if(T(y)){var w=h(y);V=w.pageX,W=w.pageY}else V=y.pageX,W=y.pageY}var C=K.getWindowInfo(),q=C.width,c=C.height,g=C.left,J=C.top,m={pageX:V,pageY:W,clientX:V-g,clientY:W-J,target:1,originEvent:y},l=m.clientX,Y=m.clientY,e=function(l){l.style.height=c-6+P;var _=L(),w=L(),E=function(e){U(e,I,S),U(e,"text-align","center"),U(e,G,"100%"),U(e,"font-size",10+P),U(e,"padding","2px 0"),U(e,"border","0px solid "+K.contextMenuScrollerBorderColor),U(e,"background-color",K.contextMenuScrollerColor1),e.style.backgroundImage="-webkit-linear-gradient(top, "+K.contextMenuScrollerColor1+", "+K.contextMenuScrollerColor2+")",e.style.backgroundImage="linear-gradient(to bottom, "+K.contextMenuScrollerColor1+", "+K.contextMenuScrollerColor2+")"};_[H]="menu-arrow-item menu-arrow-item-top",w[H]="menu-arrow-item menu-arrow-item-bottom",E(_),U(_,"top",v),U(_,"left",v),U(_,"border-bottom-width",1+P),_[R]="▲",E(w),U(w,"bottom",v),U(w,"left",v),U(w,"border-top-width",1+P),w[R]="▼",l.$24b=_,l.$25b=w,l.$18b=l.scrollTop,l.$22b=l.scrollHeight,l.$23b=l.clientHeight,b(l,_),b(l,w),r.$42b(l)};r.beforeShow&&r.beforeShow(m);var d=r._items;if(d&&(y&&y.preventDefault(),d.length)){r.rebuild();var z=k.$26b=j(k,".menu-item");if(z.length){K.appendToScreen(k);var Q=k.children[0];Q.offsetHeight>c&&e(Q);var t=Y+($?1:0),i=l+($?1:0),M=function(q){for(var S=0,e=0,v=0,n=r.$43b;v<q.children.length;v++){var i=q.children[v];if(i.getAttribute("data-id")){var E=i.children[1],x=i.children[2],_=E.children;if(n){var z=_[0];_.length>1&&(z=_[1]),z.offsetWidth>n&&(z[R]="<marquee scrollamount='3'>"+z[R]+"</marquee>",z.children[0].style.verticalAlign="text-bottom",U(z,G,n+P),U(z,s,"inline-block"))}var h=E.offsetWidth,K=x.offsetWidth;h>S&&(S=h),K>e&&(e=K)}}for(v=0;v<q.children.length;v++){var i=q.children[v];if(i.getAttribute("data-id")){var E=i.children[1],x=i.children[2],c=E.children[0],y=E.children[1];!y&&c.style.width&&U(c,G,S+P),U(E,G,S+P),U(x,G,e+P)}}};M(Q);var p=Y+3+k.offsetHeight,Z=l+3+k.offsetWidth;p>c?U(k,n,t-(p-c)+J+P):U(k,n,t+J+P),Z>q?U(k,D,i-(Z-q)+g+P):U(k,D,i+g+P);var x=r.$21b;x&&x.each(function(t){M(t),t.offsetHeight>c&&e(t)}),r.$9b&&(K.mockTouch&&E(o(),"touchstart",r.$9b,!0),E(o(),"mousedown",r.$9b,!0)),r.afterShow&&r.afterShow(m),r.$47b()}}}},isShowing:function(){return this._view?this._view.parentNode!=A:!1},getRelatedView:function(){return this.$12b},hide:function(){var _=this,h=_._view;h&&h.parentNode&&(B(h.parentNode,h),K.mockTouch&&C(o(),"touchstart",_.$9b,!0),C(o(),"mousedown",_.$9b,!0),_.afterHide&&_.afterHide())},dispose:function(){var a=this,v=a.$12b,J=a._view;J&&(this.hide(),a.disableGlobalKey(),v&&(K.mockTouch&&(C(v,"touchstart",a.$6b,!0),C(v,"touchmove",a.$7b),C(v,"touchend",a.$8b)),C(v,"mousedown",a.$6b,!0),C(v,"mousemove",a.$7b),C(v,"mouseup",a.$8b),C(v,"contextmenu",a.$27b)),a._view=a._items=a.$21b=a.$19b=a.$12b=a.beforeShow=a.afterShow=a.afterHide=a.$9b=a.$3b=a.$6b=a.$7b=a.$8b=a.$27b=A)},$46b:function(G,m,E,Z,l){var t=X.initContext(G);X.translateAndScale(t,0,0,1),t.clearRect(0,0,E,Z),K.drawStretchImage(t,K.getImage(m),"fill",0,0,E,Z,l,this),t.restore()},$47b:function(){var h,q,e,H=this,O=H._view;if(H.isShowing()){var D=j(O,".check-prefix");for(e=0;e<D.length;e++){var T=D[e];h=T.clientWidth,q=T.clientHeight,T.$48b=h,T.$49b=q,X.setCanvas(T,h,q)}var p=j(O,".radio-prefix");for(e=0;e<p.length;e++){var b=p[e];h=b.clientWidth,q=b.clientHeight,b.$48b=h,b.$49b=q,X.setCanvas(b,h,q)}var U=j(O,".contextmenu-item-icon");for(e=0;e<U.length;e++){var k=U[e];h=k.clientWidth,q=k.clientHeight,k.$48b=h,k.$49b=q,X.setCanvas(k,h,q)}}},validateImpl:function(){var v,z,o,Z=this,Y=Z._view;if(Z.isShowing()){var q=j(Y,".check-prefix");for(o=0;o<q.length;o++){var Q=q[o];v=Q.$48b,z=Q.$49b,v&&z&&Z.$46b(Q,K.contextMenuCheckIcon,v,z)}var r=j(Y,".radio-prefix");for(o=0;o<r.length;o++){var l=r[o];v=l.$48b,z=l.$49b,v&&z&&Z.$46b(l,K.contextMenuRadioIcon,v,z)}var d=j(Y,".contextmenu-item-icon");for(o=0;o<d.length;o++){var U=d[o];v=U.$48b,z=U.$49b,v&&z&&Z.$46b(U,K.getImage(U.$50b),v,z,U._item)}}},_clearItemId:function(j){var I=this;delete j._id,j.items&&j.items.forEach(function(j){I._clearItemId(j)})}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);