!function(X){"use strict";var e="ht",Z=X[e],b=Z.Default,R=Math,S=(R.PI,R.sin,R.cos,R.atan2,R.sqrt,R.max),W=R.floor,Q=(R.round,R.ceil),L=Z.Shape,i=(Z.Edge,Z.List),O=Z.Style,E=Z.graph,Y=b.getInternal(),D=Y.ui(),z=null,I="prototype",u=X.clearInterval,j=X.setInterval,J=function(j){var K=j.data,I=this.dm();if(K&&"add"===j.kind){var $=I.$1c,c=K instanceof L?"shape.":"edge.";$&&K.s(c+"dash.flow")&&$.indexOf(K)<0&&$.push(K)}"clear"===j.kind&&(I.$1c=[])},p=function(H){var W=H.property,h=H.data,m=H.newValue,j=this.dm().$1c,w=h instanceof L?"s:shape.dash.flow":"s:edge.dash.flow";if(j&&W===w)if(m)j.indexOf(h)<0&&j.push(h);else for(var c=j.length,Y=0;c>Y;Y++)if(j[Y]===h){j.splice(Y,1);break}},a=E.GraphView[I],M=D.EdgeUI[I],m=D.ShapeUI[I],A=m._80o,U=M._80o,P=Z.DataModel[I],k=P.prepareRemove,h=a.setDataModel;O["edge.dash.flow.step"]==z&&(O["edge.dash.flow.step"]=3),O["shape.dash.flow.step"]==z&&(O["shape.dash.flow.step"]=3),P.prepareRemove=function(z){k.call(this,z);var l=z._dataModel,f=l.$1c;if(f)for(var W=f.length,G=0;W>G;G++)if(f[G]===z){f.splice(G,1);break}},a.setDataModel=function(c){var Z=this,V=Z._dataModel;if(V!==c){V&&(V.umm(J,Z),V.umd(p,Z),V.$1c=[]),c.mm(J,Z),c.md(p,Z);var r=c.$1c=[];c.each(function($){var i=$ instanceof L?"shape.":"edge.";$.s(i+"dash.flow")&&r.indexOf($)<0&&r.push($)}),h.call(Z,c)}},a.setDashFlowInterval=function(g){var Y=this,l=Y.$2c;Y.$2c=g,Y.fp("dashFlowInterval",l,g),Y.$3c!=z&&(u(Y.$3c),delete Y.$3c,Y.enableDashFlow(g))},a.getDashFlowInterval=function(){return this.$2c},a.$4c=function(){var E,v,A,G=this,a=G.tx(),c=G.ty(),k=G._zoom,L=G.getWidth(),B=G.getHeight(),P={x:-a/k,y:-c/k,width:L/k,height:B/k},t=G.dm().$1c,D=G._56I,e=new i;if(t.forEach(function(m){D[m.getId()]&&(E=G.getDataUI(m),E&&(A=E._79o(),A&&e.add(A)))}),0!==e.size()&&(e.each(function(X){b.intersectsRect(P,X)&&(v=b.unionRect(v,X))}),v&&(v&&(b.grow(v,S(1,1/k)),v.x=W(v.x*k)/k,v.y=W(v.y*k)/k,v.width=Q(v.width*k)/k,v.height=Q(v.height*k)/k,v=b.intersection(P,v)),v))){var O=G._canvas.getContext("2d");O.save(),O.lineCap=b.lineCap,O.lineJoin=b.lineJoin;var H=b.devicePixelRatio,x=v.x,n=v.y,$=v.width,_=v.height;x=Math.floor((x*k+a)*H),n=Math.floor((n*k+c)*H),$=Math.ceil($*k*H)+1,_=Math.ceil(_*k*H)+1,v.x=(x/H-a)/k,v.y=(n/H-c)/k,v.width=$/H/k,v.height=_/H/k,O.beginPath(),O.rect(x,n,$,_),O.clip(),O.clearRect(x,n,$,_),Y.translateAndScale(O,a,c,k),G.$5c(O,v),O.restore()}},a.$5c=function(F,t){var y,B,O=this;O._93db(F),O.each(function(I){O._56I[I._id]&&(y=O.getDataUI(I),y&&(B=y._79o(),(!t||b.intersectsRect(t,B))&&(y.$7c=!0,y._42(F),delete y.$7c)))}),O._92db(F)},a.enableDashFlow=function(q){var F=this;F.$3c==z&&(F.$3c=j(function(){F.$4c()},q||F.$2c||50))},a.disableDashFlow=function(){var F=this;u(F.$3c),delete F.$3c};var y=function(){var X=this,h=X._data,E=h instanceof L?"shape.":"edge.",C=h.s(E+"dash.pattern"),x=h.s(E+"dash.flow.reverse");if(C&&h.s(E+"dash")&&h.s(E+"dash.flow")&&X.$7c){var V=X.s(E+"dash.offset")||0,Z=h.s(E+"dash.flow.step"),m=h.getStyleMap(),l=0;C.forEach(function(Y){l+=Y}),x&&(Z=-Z),V-=Z,V%=l,m||(h._styleMap=m={}),m[E+"dash.offset"]=V}};M._80o=function(H){U.call(this,H),y.call(this)},m._80o=function(a){A.call(this,a),y.call(this)}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);