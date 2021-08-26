!function(i,x,F){"use strict";var e="ht",n=i[e],y=n.Default,M=y.def,R=y.getInternal();n.HistoryManager=function(z){this._histories=[],this.setDataModel(z)},M(n.HistoryManager,x,{ms_ac:["dataModel","histories","historyIndex","maxHistoryCount","disabled"],ms_fire:1,_historyIndex:-1,_betweenTransaction:0,_maxHistoryCount:200,_disabled:!1,ignoredPropertyMap:{imageLoaded:!0,children:!0,attaches:!0,shape:!0,childChange:!0,agentChange:!0,sourceAgent:!0,targetAgent:!0,edgeGroup:!0,"*":!0},ignoreDataModelPropertyMap:{},beginInteraction:function(){this.beginTransaction()},endInteraction:function(){this.endTransaction()},beginTransaction:function(){if(!this._disabled){var W=this;W._betweenTransaction++,1===W._betweenTransaction&&(W._transactionHistories={})}},endTransaction:function(){if(!this._disabled){var d=this,y=d._histories;if(d._betweenTransaction>0&&d._betweenTransaction--,0===d._betweenTransaction){if(d._transactionHistories){var z=[];for(var M in d._transactionHistories)z.push(d._transactionHistories[M]);z.length&&(y=y.slice(0,d._historyIndex+1),y.push(z),y.length>d._maxHistoryCount&&(y=y.slice(y.length-d._maxHistoryCount)),d.setHistories(y),d.setHistoryIndex(y.length-1,!0))}delete d._transactionHistories}}},setDataModel:function(q){var a=this,k=a._dataModel;k!==q&&(k&&(delete k._historyManager,k.ump(a.handleDataModelPropertyChange,a),k.umm(a.$5p,a),k.umd(a.$6p,a),k.removeHierarchyChangeListener(a.handleHierarchyChange,a),k.removeIndexChangeListener(a.handleIndexChange,a)),a._dataModel=q,q&&(q._historyManager=a,q.mp(a.handleDataModelPropertyChange,a),q.mm(a.$5p,a),q.md(a.$6p,a),q.addHierarchyChangeListener(a.handleHierarchyChange,a),q.addIndexChangeListener(a.handleIndexChange,a)),a.fp("dataModel",k,q),a.clear())},setHistoryIndex:function(s,t){var e=this,c=e._historyIndex,o=e._histories.length;if(-1>s?s=-1:s>=o&&(s=o-1),c!==s){if(!t){var Z=s-c;Z>0?e.$2p(Z):0>Z&&e.$1p(-Z)}e._historyIndex=s,e.fp("historyIndex",c,s),e.dataModel&&e.dataModel.onHistoryManagerChanged()}},setMaxHistoryCount:function(P){var Z=this,Y=Z._histories,i=Z._maxHistoryCount;(!P||0>=P)&&(P=10),i!==P&&(Z._maxHistoryCount=P,Z.fp("maxHistoryCount",i,P),Y.length>P&&Z.clear())},cloneValue:function(Y){return n.Default.clone(Y)},isPropertyUndoable:function(A){return A&&!this.ignoredPropertyMap[A]},isIndexUndoable:function(){return!1},isDataModelPropertyUndoable:function(g){return g&&!this.ignoreDataModelPropertyMap[g]},$5p:function(e){this.handleChange(e,e.kind)},$6p:function(k){this.handleChange(k,"property")},handleHierarchyChange:function(Q){this.handleChange(Q,"hierarchy")},handleIndexChange:function(i){this.handleChange(i,"index")},handleDataModelPropertyChange:function(_){this.handleChange(_,"dataModelProperty")},toChildrenInfo:function(i){var $={};return $.data=i,$.children=[],i.eachChild(function(Z){$.children.push(this.toChildrenInfo(Z))},this),$},restoreChildren:function(u){var k=u.data;u.children.forEach(function(T){var H=T.data;H.getParent()!==k&&k.addChild(H),this._dataModel.contains(H)||this._dataModel.add(H),this.restoreChildren(T)},this)},handleChange:function(x,W){var b=this;if(!(b._disabled||b._isUndoRedoing||y.loadingRefGraph)){var H,R=(b._histories,x.data),Z=x.property;if(!R||!(R._refGraph||R instanceof n.RefGraph)){if("property"===W)b.isPropertyUndoable(Z,R)&&(H={kind:W,data:R,property:Z,oldValue:b.cloneValue(x.oldValue,R,Z),newValue:b.cloneValue(x.newValue,R,Z),event:x});else if("hierarchy"===W||"index"===W&&b.isIndexUndoable(x))H={kind:W,data:R,oldIndex:x.oldIndex,newIndex:x.newIndex,event:x};else if("clear"===W)H={kind:W,json:x.json,event:x};else if("add"===W){if(H={kind:W,data:R,event:x,childrenInfo:this.toChildrenInfo(R),parent:R.getParent()},H.parent){var V=b._dataModel.getSiblings(R);H.siblingsIndex=V.indexOf(R)}R instanceof n.Node&&(H.host=R.getHost(),H.attaches=R.getAttaches()?R.getAttaches().toArray():F),R instanceof n.Edge&&(H.source=R.getSource(),H.target=R.getTarget())}else"remove"===W?H={kind:W,data:R,event:x}:"dataModelProperty"===W&&b.isDataModelPropertyUndoable(Z,R)&&(H={kind:W,property:Z,oldValue:b.cloneValue(x.oldValue,R,Z),newValue:b.cloneValue(x.newValue,R,Z),event:x});b.addHistory(H)}}},addHistory:function(q){var j=this;if(q)if(j._betweenTransaction){var r=(q.data?q.data._id:0)+"_"+q.kind+"_"+q.property;if("property"===q.kind||"dataModelProperty"===q.kind){var t=j._transactionHistories[r];t&&(q.oldValue=t.oldValue)}j._transactionHistories[r]=q}else{var g=j._histories;g=g.slice(0,j._historyIndex+1),g.push([q]),g.length>j._maxHistoryCount&&(g=g.slice(g.length-j._maxHistoryCount)),j.setHistories(g),j.setHistoryIndex(g.length-1,!0)}},canUndo:function(){return!this._disabled&&this._historyIndex>=0&&this._historyIndex<this._histories.length},canRedo:function(){return!this._disabled&&this._historyIndex>=-1&&this._historyIndex<this._histories.length-1},undo:function(b){(!b||0>=b)&&(b=1),this.setHistoryIndex(this._historyIndex-b)},$1p:function(U){if(this.canUndo()){var p,T=this,W=T._dataModel,f=T._histories,D=T._historyIndex,A=0;for(T._isUndoRedoing=!0,y.setIsolating(!0);U>0;){if(D>=0&&D<f.length){A++,p=f[D],D--;for(var H=p.length-1;H>=0;H--){var s=p[H],u=s.kind,N=s.data,S=s.property,B=s.event,g=this.cloneValue(s.oldValue,N,S);if(s.undo)s.undo();else if("add"===u)W.remove(N,{keepChildren:!0});else if("remove"===u)W.contains(N)||W.add(N,B.rootsIndex,B.datasIndex);else if("clear"===u)W.deserialize(y.clone(s.json));else if("property"===u)if("parent"===S)g?g.addChild(N,B.oldIndex):(N.setParent(g),B.oldIndex>=0&&W.moveTo(N,B.oldIndex));else{var x=null;0===S.indexOf("a:")?(x="attr",S=S.replace("a:","")):0===S.indexOf("s:")?(x="style",S=S.replace("s:","")):0===S.indexOf("f:")&&(x="field",S=S.replace("f:","")),R.setPropertyValue(N,x,S,g)}else if("dataModelProperty"===u){var x=null;0===S.indexOf("a:")?(x="attr",S=S.replace("a:","")):0===S.indexOf("s:")?(x="style",S=S.replace("s:","")):0===S.indexOf("f:")&&(x="field",S=S.replace("f:","")),R.setPropertyValue(W,x,S,g)}else"hierarchy"===u?W.moveTo(N,s.oldIndex):"index"===u?W.moveToIndex(N,s.oldIndex):"selection"===u&&W.sm().ss(s.oldValue)}}U--}y.setIsolating(!1),delete T._isUndoRedoing,T.afterUndo(A)}},afterUndo:function(){},redo:function(V){(!V||0>=V)&&(V=1),this.setHistoryIndex(this._historyIndex+V)},$2p:function(v){if(this.canRedo()){var D,j=this,X=j._dataModel,p=j._histories,u=j._historyIndex,F=0;for(j._isUndoRedoing=!0,y.setIsolating(!0);v>0;){if(u>=-1&&u<p.length-1){F++,u++,D=p[u];for(var B=0;B<D.length;B++){var $=D[B],K=$.kind,L=$.data,V=$.property,W=$.event,d=this.cloneValue($.newValue,L,V);if($.redo)$.redo();else if("add"===K)$.parent&&!L.getParent()&&$.parent.addChild(L,$.siblingsIndex),X.contains(L)||X.add(L,W.rootsIndex,W.datasIndex),this.restoreChildren($.childrenInfo),L instanceof n.Node&&(L.setHost($.host),$.attaches&&$.attaches.forEach(function(o){o.setHost(L)})),L instanceof n.Edge&&(L.setSource($.source),L.setTarget($.target));else if("remove"===K)X.remove(L);else if("clear"===K)X.clear();else if("property"===K)if("parent"===V)d?d.addChild(L,W.newIndex):(L.setParent(d),W.newIndex>=0&&X.moveTo(L,W.newIndex));else{var l=null;0===V.indexOf("a:")?(l="attr",V=V.replace("a:","")):0===V.indexOf("s:")?(l="style",V=V.replace("s:","")):0===V.indexOf("f:")&&(l="field",V=V.replace("f:","")),R.setPropertyValue(L,l,V,d)}else if("dataModelProperty"===K){var l=null;0===V.indexOf("a:")?(l="attr",V=V.replace("a:","")):0===V.indexOf("s:")?(l="style",V=V.replace("s:","")):0===V.indexOf("f:")&&(l="field",V=V.replace("f:","")),R.setPropertyValue(X,l,V,d)}else"hierarchy"===K?X.moveTo(L,$.newIndex):"index"===K?X.moveToIndex(L,$.newIndex):"selection"===K&&X.sm().ss($.newValue)}}v--}y.setIsolating(!1),delete j._isUndoRedoing,this.afterRedo(F)}},afterRedo:function(){},clear:function(){this.setHistories([]),this.setHistoryIndex(-1,!0),this._betweenTransaction=0,delete this._transactionHistories}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);