!function(p){"use strict";var m=p.ht,i=m.Default,y=i.getInternal(),B=y.ui(),b=null,X="__segmentLengths",H="__lineTotalLength",C="__linePoints",q="__distance0",g="flow.count",F="flow.step",r="flow.element.max",k="flow.element.count",w="flow.element.min",x="flow.element.space",A="flow.element.autorotate",n="flow.element.background",L="flow.element.shadow.max",G="flow.element.shadow.min",Y="flow.element.shadow.begincolor",I="flow.element.shadow.endcolor",s="flow.element.shadow.visible",D="flow.element.image",o="flow",u=m.Math.Vector2,l=new u;new u,new u,m.List;var t=m.Default._edgeProtectMethod,E=t.getStraightLinePoints,M=function(l,p){for(var S=[],E=l.length,J=0;E>J;J++){var Y=l[J];Y._as&&(Y=Y._as);for(var T=Y[0],B=1;B<Y.length;B++)S.push([T,Y[B]]),T=Y[B]}for(var M=[],J=0;J<S.length;J++){var D=O(S[J][0],S[J][1],p);M.push(D)}return{distance:M,segments:S}},P=function(y,J,r){if(y){for(var W,c=M(y,J),Y=c.distance,t=c.segments,O=1/0,e=null,N=0,j=Y.length;j>N;N++){var s=Y[N];s.z<O&&(W=N,O=s.z,e=s)}if(null==r&&(r=.1),e.z<r){for(var R=0,n=0;W>=n;n++)R+=i.getDistance(t[n][0],W>n?t[n][1]:e);return R}}},O=function(A,y,F){var P=A.x,l=A.y,Z=y.x,J=y.y,K=F.x,Y=F.y,I=Z-P,n=J-l,j=Math.sqrt(I*I+n*n),v=I/j,$=n/j,O=(-P+K)*v+(-l+Y)*$,S={x:P+O*v,y:l+O*$};return S.x>=Math.min(A.x,y.x)&&S.x<=Math.max(A.x,y.x)&&S.y>=Math.min(A.y,y.y)&&S.y<=Math.max(A.y,y.y)||(S.x=Math.abs(S.x-A.x)<Math.abs(S.x-y.x)?A.x:y.x,S.y=Math.abs(S.y-A.y)<Math.abs(S.y-y.y)?A.y:y.y),I=K-S.x,n=Y-S.y,S.z=Math.sqrt(I*I+n*n),S},W=function(P,F){if(P){var J=M(P,F).distance,H=1/0,q=null;return J.forEach(function(t){t.z<H&&(H=t.z,q=t)}),q}},e=t.calculateLineLength,T=t.calcSegmentIndexByDistance,V=t.calculatePointAlongLine,Z=function(l,w,v){if(!l)return v;if(0===w){var g=l[0][0],G=l[0][1];return v+Math.atan2(G.y-g.y,G.x-g.x)}if(100===w){l=l[l.length-1];var g=l[l.length-2],G=l[l.length-1];return v+Math.atan2(G.y-g.y,G.x-g.x)}for(var y=0,b=[],z=l.length,P=0;z>P;P++){var B=l[P],O=e(B);y+=O,b.push(O)}for(var p=y*w/100,X=T(p,b),Q=0,s=0;X>s;s++)Q+=b[s];p-=Q;for(var x=V(l[X],p),u=l[X],W=0,t=0,d=0;d<u.length-1;d++){var D=u[d],i=u[d+1],Y=i.x-D.x,a=i.y-D.y,_=Math.sqrt(Y*Y+a*a);if(W+=_,W>p){t=d;break}}var j=u[t];return v+Math.atan2(x.y-j.y,x.x-j.x)},c=function(a){var S=0;if(a)if(Array.isArray(a[0]))for(var J=a.length,O=0;J>O;O++){var r=a[O],Q=e(r);S+=Q}else S=e(a);return S},z=function(K,q,B,G){return l.set(q,B).rotateAround(null,G),K?{x:K.x+l.x,y:K.y+l.y}:{x:l.x,y:l.y}},v=function(M){var a=M._data,r=E(M);if(r){a.s("flow.reverse")&&(r.reverse(),r.forEach(function(G){G.reverse()}));for(var v=0,O=[],Z=r.length,f=0;Z>f;f++){var $=r[f],V=e($);v+=V,O.push(V)}if(a[X]=O,a[H]=v,a[C]=r,a instanceof m.Edge){var n=i.unionPoint(r),g=n.x+n.width/2,o=n.y+n.height/2;a.$10e={x:g,y:o}}Q(M,!0)}},S=t.getPercentPosition,Q=function(W,S){var R=W._data,Z=R[H],E=R.s(g),f=R.s(F),x=0,s=R[X],O=R.s(r),p=R.s(w),L=R.s(k),e=(O-p)/(L-1),U=[];if(s){if(1===L)U.push(O);else if(2===L)U.push(O),U.push(p);else{if(!(L>2))return;U.push(O);for(var n=L-2;n>0;n--)U.push(p+e*n);U.push(p)}var t=0,i=0;U.forEach(function(w){L-1>t&&(i+=R.getFlowElementSpace(w)),t++}),i+=(O+p)/2,x=(Z-E*i+i)/E;var V=W[q];for(null==V&&(V=0),S||(V+=f);V>Z+i;){var o=W._overCount;o?o++:o=1,o>=E&&(o=null),W._overCount=o,R.s("flow.autoreverse")?o?V-=x+i:(V=0,R.s("flow.reverse",!R.s("flow.reverse"))):V-=x+i}W[q]=V}},R="prototype",J=m.graph.GraphView[R],K=m.Data[R],_=B.DataUI[R],N=B.ShapeUI[R],d=B.EdgeUI[R],j=m.DataModel[R],U=m.Style;U[r]==b&&(U[r]=7),U[w]==b&&(U[w]=0),U[g]==b&&(U[g]=1),U[F]==b&&(U[F]=3),U[k]==b&&(U[k]=10),U[x]==b&&(U[x]=3.5),U[A]==b&&(U[A]=!1),U[n]==b&&(U[n]="rgba(255, 255, 114, 0.4)"),U[Y]==b&&(U[Y]="rgba(255, 255, 0, 0.3)"),U[I]==b&&(U[I]="rgba(255, 255, 0, 0)"),U[s]==b&&(U[s]=1),U[L]==b&&(U[L]=22),U[G]==b&&(U[G]=4),J.calculatePointLength=function(p,c,X){var N=this.getDataUI(p),m=E(N);return P(m,c,X)},i.calculatePointLength=function(f,e,q,O){var r=E(b,f,e);return P(r,q,O)},i.calculateClosestPointOnLine=O,J.calculateClosestPoint=function(N,L){var D=this.getDataUI(N),p=E(D);return W(p,L)},i.calculateClosestPoint=function(f,t,g){var F=E(b,f,t);return W(F,g)},J.getPercentAngle=function(c,f){var g=this.getDataUI(c),W=E(g);return c.getRotation?c.getRotation():0,Z(W,f,c.getRotation?c.getRotation():0)},i.getPercentAngle=function(n,_,m){var P=E(b,n,_);return Z(P,m,0)},J.calculateLength=function(Z){var q=this.getDataUI(Z),v=E(q);return c(v)},i.calculateLength=function(f,n){var l=E(b,f,n);return c(l)},J.getPercentPosition=function(R,G){var s=this.getDataUI(R),z=E(s);return S(z,G)},i.getPercentPositionOnPoints=function(O,F,w){var G=E(b,O,F);return S(G,w)};var f=function(j){var g=j.data,k=this.dm();if(g&&"add"===j.kind){var u=k.$3e;u&&g.s(o)&&u.indexOf(g)<0&&u.push(g)}"clear"===j.kind&&(k.$3e=[])},$=function(Q){var w=Q.property,G=Q.data,Y=Q.newValue,p=this.dm().$3e;if(p&&"s:flow"===w)if(Y)p.indexOf(G)<0&&p.push(G);else for(var F=p.length,t=0;F>t;t++)if(p[t]===G){p.splice(t,1);break}},h=J.setDataModel;J.setDataModel=function(T){var y=this,U=y._dataModel;if(U!==T){U&&(U.umm(f,y),U.umd($,y),U.$3e=[]),T.mm(f,y),T.md($,y);var m=T.$3e=[];T.each(function(W){W.s(o)&&m.indexOf(W)<0&&m.push(W)}),h.call(y,T)}},K.getFlowElementSpace=function(){return this.s(x)};var a=function(O){var d=this,s=d._data,M=s[H],x=s[X],m=s[C],N=s.s(g),Z=0,t=d[q],y=s.s(r),l=s.s(w),F=s.s(k),R=s.s(G),U=s.s(L),K=s.s(A),E=(U-R)/(F-1),_=(y-l)/(F-1),j=s.getRotation?s.getRotation():0,u=s.getPosition?s.p():s.$10e,n=[],c=[];if(t!=b){if(1===F)n.push(y);else if(2===F)n.push(y),n.push(l);else{if(!(F>2))return;n.push(y);for(var i=F-2;i>0;i--)n.push(l+_*i);n.push(l)}if(1===F)c.push(U);else if(2===F)c.push(U),c.push(R);else{if(!(F>2))return;c.push(U);for(var i=F-2;i>0;i--)c.push(R+E*i);c.push(R)}var e=0,P=0;n.forEach(function(x){F-1>e&&(P+=s.getFlowElementSpace(x)),e++}),P+=(y+l)/2,Z=(M-N*P+P)/N,O.save();for(var i=0;N>i;i++){var Y=t,$=0,Q=d._overCount,v=0;s.s("flow.autoreverse")&&Q&&Q>N-(i+1)||(Y-=i*(Z+P),e=0,n.forEach(function(C){var y=Y-$;if(y>=0&&M>y){var Z=!0,U=T(y,x);v=0;for(var A=0;U>A;A++)v+=x[A];if(y-=v,Z){var L=V(m[U],y),B=j;if(K){for(var g=m[U],k=0,X=0,q=0;q<g.length-1;q++){var t=g[q],p=g[q+1],S=p.x-t.x,o=p.y-t.y,G=Math.sqrt(S*S+o*o);if(k+=G,k>y){X=q;break}}var R=g[X];B+=Math.atan2(L.y-R.y,L.x-R.x)}j&&(L=z(u,L.x-u.x,L.y-u.y,j)),d.$5e(O,L,C,c[e],B)}}$+=s.getFlowElementSpace(n[e]),e++}))}O.restore()}},Mq=d._80o;d._80o=function(J){Mq.call(this,J);var M=this,Q=M._data,Y=M.gv;Q.s(o)&&Y.$7e!=b&&a.call(M,J)};var zh=N._80o;N._80o=function(R){zh.call(this,R);var s=this,V=s._data,e=s.gv;V.s(o)&&e.$7e!=b&&a.call(s,R)};var Zm=d._79o,Wh=N._79o,zi=function(){var Z=this,D=Z._data,e=D.s(r),Y=!1,d=b;if(Z._6I||(Y=!0),d=D instanceof m.Edge?Zm.call(Z):Wh.call(Z),D.s(o)&&Y){var K=D.s(L),B=D.s(s);B&&K>e&&(e=K),e>0&&i.grow(d,Math.ceil(e/2)),v(Z)}return!D.s(o)&&Y&&(D[X]=D[H]=D[C]=Z[q]=b),d};N._79o=zi,d._79o=zi,_.$5e=function(R,T,o,E,S){var k=this,V=k._data,e=k.gv,v=V.s(n),O=V.s(Y),W=V.s(I),K=V.s(s),g=e.$8e,c=V.s(D);if(g==b&&(g=e.$8e={}),R.beginPath(),c!=b){var A=i.getImage(c),q=o/2;R.translate(T.x,T.y),R.rotate(S),R.translate(-T.x,-T.y),i.drawImage(R,A,T.x-q,T.y-q,o,o,V),R.translate(T.x,T.y),R.rotate(-S),R.translate(-T.x,-T.y)}else if(e.__flowBatch){var J=e.__flowBatchGroup;J||(J=e.__flowBatchGroup={});var L=[T.x,T.y,o/2];J[v]?J[v].push(L):J[v]=[L]}else R.fillStyle=v,R.arc(T.x,T.y,o/2,0,2*Math.PI,!0),R.fill();if(K){var Z=22,X=Z+"_"+O+"_"+W,B=g[X];if(B==b){var C=document.createElement("canvas");y.setCanvas(C,Z,Z);var M=C.getContext("2d"),r=Z/2,j=r,N=r;y.translateAndScale(M,0,0,1),M.beginPath();var m=M.createRadialGradient(j,N,0,j,j,r);m.addColorStop(0,O),m.addColorStop(1,W),M.fillStyle=m,M.arc(j,N,r,0,2*Math.PI,!0),M.fill(),B=g[X]=C}var q=E/2;i.drawImage(R,B,T.x-q,T.y-q,E,E,V)}},J.$9e=function(){var q=this,C=q.dm().$3e;q._24I,C.forEach(function(F){q._24I[F._id]=F}),q.iv()};var bb=j.prepareRemove;j.prepareRemove=function(R){bb.call(this,R);var P=R._dataModel,X=P.$3e;if(X)for(var U=X.length,T=0;U>T;T++)if(X[T]===R){X.splice(T,1);break}},J.setFlowInterval=function(x){var t=this,Z=t.$11e;t.$11e=x,t.fp("flowInterval",Z,x),t.$7e!=b&&(clearInterval(t.$7e),delete t.$7e,t.enableFlow(x))},J.getFlowInterval=function(){return this.$11e},J.enableFlow=function(i){var s=this,o=s.dm(),L=o.$3e;s.$7e==b&&(L.forEach(function(Q){var T=s.getDataUI(Q);v(T)}),s.$7e=setInterval(function(){o.$3e.forEach(function(t){Q(s.getDataUI(t))}),s.$9e()},i||s.$11e||50))},J.disableFlow=function(){var s=this;clearInterval(s.$7e),delete s.$7e;var E=s.dm().$3e;E&&s.$9e()};var Kh=function(){this.__flowBatchGroup={}},Lh=function(h){var C=this.__flowBatchGroup;if(C){h.save();for(var L in C){h.fillStyle=L,h.beginPath();var p=C[L];p.forEach(function(o){h.moveTo(o[0],o[1]),h.arc(o[0],o[1],o[2],0,2*Math.PI,!0)}),h.fill()}h.restore()}};J.setFlowBatch=function(V){var E=this;!!E.__flowBatch!=!!V&&(E.__flowBatch=V,V?(E.addBottomPainter(Kh),E.addTopPainter(Lh)):(E.removeBottomPainter(Kh),E.removeTopPainter(Lh)))}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);