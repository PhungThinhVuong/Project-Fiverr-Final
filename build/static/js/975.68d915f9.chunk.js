"use strict";(self.webpackChunkfiverr_project=self.webpackChunkfiverr_project||[]).push([[975],{75033:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(1413),o=t(72791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},l=t(69726),u=function(e,n){return o.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};u.displayName="EllipsisOutlined";var a=o.forwardRef(u)},93241:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(4942),o=t(1413),i=t(29439),l=t(45987),u=t(72791),a=t(85903),c=t(81694),s=t.n(c),f={adjustX:1,adjustY:1},d=[0,0],v={topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:d},topCenter:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:d},bottomCenter:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:d}},p=t(11354),m=t(75314),b=t(39393),y=p.Z.ESC,h=p.Z.TAB;var g=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function Z(e,n){var t=e.arrow,c=void 0!==t&&t,f=e.prefixCls,d=void 0===f?"rc-dropdown":f,p=e.transitionName,Z=e.animation,C=e.align,E=e.placement,w=void 0===E?"bottomLeft":E,M=e.placements,k=void 0===M?v:M,N=e.getPopupContainer,P=e.showAction,x=e.hideAction,I=e.overlayClassName,S=e.overlayStyle,R=e.visible,K=e.trigger,O=void 0===K?["hover"]:K,A=e.autoFocus,T=(0,l.Z)(e,g),L=u.useState(),D=(0,i.Z)(L,2),V=D[0],_=D[1],z="visible"in e?R:V,F=u.useRef(null);u.useImperativeHandle(n,(function(){return F.current})),function(e){var n=e.visible,t=e.setTriggerVisible,r=e.triggerRef,o=e.onVisibleChange,i=e.autoFocus,l=u.useRef(!1),a=function(){var e,i,l,u;n&&r.current&&(null===(e=r.current)||void 0===e||null===(i=e.triggerRef)||void 0===i||null===(l=i.current)||void 0===l||null===(u=l.focus)||void 0===u||u.call(l),t(!1),"function"===typeof o&&o(!1))},c=function(){var e,n,t,o,i=(0,b.tS)(null===(e=r.current)||void 0===e||null===(n=e.popupRef)||void 0===n||null===(t=n.current)||void 0===t||null===(o=t.getElement)||void 0===o?void 0:o.call(t))[0];return!!(null===i||void 0===i?void 0:i.focus)&&(i.focus(),l.current=!0,!0)},s=function(e){switch(e.keyCode){case y:a();break;case h:var n=!1;l.current||(n=c()),n?e.preventDefault():a()}};u.useEffect((function(){return n?(window.addEventListener("keydown",s),i&&(0,m.Z)(c,3),function(){window.removeEventListener("keydown",s),l.current=!1}):function(){l.current=!1}}),[n])}({visible:z,setTriggerVisible:_,triggerRef:F,onVisibleChange:e.onVisibleChange,autoFocus:A});var j=function(){var n=function(){var n=e.overlay;return"function"===typeof n?n():n}();return u.createElement(u.Fragment,null,c&&u.createElement("div",{className:"".concat(d,"-arrow")}),n)},W=x;return W||-1===O.indexOf("contextMenu")||(W=["click"]),u.createElement(a.Z,(0,o.Z)((0,o.Z)({builtinPlacements:k},T),{},{prefixCls:d,ref:F,popupClassName:s()(I,(0,r.Z)({},"".concat(d,"-show-arrow"),c)),popupStyle:S,action:O,showAction:P,hideAction:W||[],popupPlacement:w,popupAlign:C,popupTransitionName:p,popupAnimation:Z,popupVisible:z,stretch:function(){var n=e.minOverlayWidthMatchTrigger,t=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?n:!t}()?"minWidth":"",popup:"function"===typeof e.overlay?j:j(),onPopupVisibleChange:function(n){var t=e.onVisibleChange;_(n),"function"===typeof t&&t(n)},onPopupClick:function(n){var t=e.onOverlayClick;_(!1),t&&t(n)},getPopupContainer:N}),function(){var n=e.children,t=n.props?n.props:{},r=s()(t.className,function(){var n=e.openClassName;return void 0!==n?n:"".concat(d,"-open")}());return z&&n?u.cloneElement(n,{className:r}):n}())}var C=u.forwardRef(Z)},82257:function(e,n,t){t.d(n,{iz:function(){return He},ck:function(){return G},BW:function(){return We},sN:function(){return G},GP:function(){return We},Wd:function(){return he},ZP:function(){return Ge},Xl:function(){return qe}});var r=t(87462),o=t(4942),i=t(1413),l=t(93433),u=t(29439),a=t(45987),c=t(72791),s=t(81694),f=t.n(s),d=t(79613),v=t.n(d),p=t(75179),m=t(60632),b=t(7573),y=t(15671),h=t(43144),g=t(60136),Z=t(27277),C=t(11354),E=t(41818),w=t(81534),M=["children","locked"],k=c.createContext(null);function N(e){var n=e.children,t=e.locked,r=(0,a.Z)(e,M),o=c.useContext(k),l=(0,w.Z)((function(){return function(e,n){var t=(0,i.Z)({},e);return Object.keys(n).forEach((function(e){var r=n[e];void 0!==r&&(t[e]=r)})),t}(o,r)}),[o,r],(function(e,n){return!t&&(e[0]!==n[0]||!v()(e[1],n[1]))}));return c.createElement(k.Provider,{value:l},n)}function P(e,n,t,r){var o=c.useContext(k),i=o.activeKey,l=o.onActive,u=o.onInactive,a={active:i===e};return n||(a.onMouseEnter=function(n){null===t||void 0===t||t({key:e,domEvent:n}),l(e)},a.onMouseLeave=function(n){null===r||void 0===r||r({key:e,domEvent:n}),u(e)}),a}var x=["item"];function I(e){var n=e.item,t=(0,a.Z)(e,x);return Object.defineProperty(t,"item",{get:function(){return(0,m.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}function S(e){var n=e.icon,t=e.props,r=e.children;return("function"===typeof n?c.createElement(n,(0,i.Z)({},t)):n)||r||null}function R(e){var n=c.useContext(k),t=n.mode,r=n.rtl,o=n.inlineIndent;if("inline"!==t)return null;return r?{paddingRight:e*o}:{paddingLeft:e*o}}var K=[],O=c.createContext(null);function A(){return c.useContext(O)}var T=c.createContext(K);function L(e){var n=c.useContext(T);return c.useMemo((function(){return void 0!==e?[].concat((0,l.Z)(n),[e]):n}),[n,e])}var D=c.createContext(null),V=c.createContext(null);function _(e,n){return void 0===e?null:"".concat(e,"-").concat(n)}function z(e){return _(c.useContext(V),e)}var F=c.createContext({}),j=["title","attribute","elementRef"],W=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],H=["active"],q=function(e){(0,g.Z)(t,e);var n=(0,Z.Z)(t);function t(){return(0,y.Z)(this,t),n.apply(this,arguments)}return(0,h.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.attribute,o=e.elementRef,i=(0,a.Z)(e,j),l=(0,E.Z)(i,["eventKey"]);return(0,m.ZP)(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),c.createElement(b.Z.Item,(0,r.Z)({},t,{title:"string"===typeof n?n:void 0},l,{ref:o}))}}]),t}(c.Component),B=function(e){var n,t=e.style,u=e.className,s=e.eventKey,d=(e.warnKey,e.disabled),v=e.itemIcon,p=e.children,m=e.role,b=e.onMouseEnter,y=e.onMouseLeave,h=e.onClick,g=e.onKeyDown,Z=e.onFocus,E=(0,a.Z)(e,W),w=z(s),M=c.useContext(k),N=M.prefixCls,x=M.onItemClick,K=M.disabled,O=M.overflowDisabled,A=M.itemIcon,T=M.selectedKeys,D=M.onActive,V=c.useContext(F)._internalRenderMenuItem,_="".concat(N,"-item"),j=c.useRef(),B=c.useRef(),G=K||d,X=L(s);var U=function(e){return{key:s,keyPath:(0,l.Z)(X).reverse(),item:j.current,domEvent:e}},Y=v||A,J=P(s,G,b,y),Q=J.active,$=(0,a.Z)(J,H),ee=T.includes(s),ne=R(X.length),te={};"option"===e.role&&(te["aria-selected"]=ee);var re=c.createElement(q,(0,r.Z)({ref:j,elementRef:B,role:null===m?"none":m||"menuitem",tabIndex:d?null:-1,"data-menu-id":O&&w?null:w},E,$,te,{component:"li","aria-disabled":d,style:(0,i.Z)((0,i.Z)({},ne),t),className:f()(_,(n={},(0,o.Z)(n,"".concat(_,"-active"),Q),(0,o.Z)(n,"".concat(_,"-selected"),ee),(0,o.Z)(n,"".concat(_,"-disabled"),G),n),u),onClick:function(e){if(!G){var n=U(e);null===h||void 0===h||h(I(n)),x(n)}},onKeyDown:function(e){if(null===g||void 0===g||g(e),e.which===C.Z.ENTER){var n=U(e);null===h||void 0===h||h(I(n)),x(n)}},onFocus:function(e){D(s),null===Z||void 0===Z||Z(e)}}),p,c.createElement(S,{props:(0,i.Z)((0,i.Z)({},e),{},{isSelected:ee}),icon:Y}));return V&&(re=V(re,e,{selected:ee})),re};var G=function(e){var n=e.eventKey,t=A(),r=L(n);return c.useEffect((function(){if(t)return t.registerPath(n,r),function(){t.unregisterPath(n,r)}}),[r]),t?null:c.createElement(B,e)},X=t(71002),U=t(85501),Y=["label","children","key","type"];function J(e,n){return(0,U.Z)(e).map((function(e,t){if(c.isValidElement(e)){var r,o,i=e.key,u=null!==(r=null===(o=e.props)||void 0===o?void 0:o.eventKey)&&void 0!==r?r:i;(null===u||void 0===u)&&(u="tmp_key-".concat([].concat((0,l.Z)(n),[t]).join("-")));var a={key:u,eventKey:u};return c.cloneElement(e,a)}return e}))}function Q(e){return(e||[]).map((function(e,n){if(e&&"object"===(0,X.Z)(e)){var t=e.label,o=e.children,i=e.key,l=e.type,u=(0,a.Z)(e,Y),s=null!==i&&void 0!==i?i:"tmp-".concat(n);return o||"group"===l?"group"===l?c.createElement(We,(0,r.Z)({key:s},u,{title:t}),Q(o)):c.createElement(he,(0,r.Z)({key:s},u,{title:t}),Q(o)):"divider"===l?c.createElement(He,(0,r.Z)({key:s},u)):c.createElement(G,(0,r.Z)({key:s},u),t)}return null})).filter((function(e){return e}))}function $(e,n,t){var r=e;return n&&(r=Q(n)),J(r,t)}function ee(e){var n=c.useRef(e);n.current=e;var t=c.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return e?t:void 0}var ne=["className","children"],te=function(e,n){var t=e.className,o=e.children,i=(0,a.Z)(e,ne),l=c.useContext(k),u=l.prefixCls,s=l.mode,d=l.rtl;return c.createElement("ul",(0,r.Z)({className:f()(u,d&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat("inline"===s?"inline":"vertical"),t)},i,{"data-menu-list":!0,ref:n}),o)},re=c.forwardRef(te);re.displayName="SubMenuList";var oe=re,ie=t(85903),le=t(75314),ue={adjustX:1,adjustY:1},ae={topLeft:{points:["bl","tl"],overflow:ue,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ue,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:ue,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:ue,offset:[4,0]}},ce={topLeft:{points:["bl","tl"],overflow:ue,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ue,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:ue,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:ue,offset:[4,0]}};function se(e,n,t){return n||(t?t[e]||t.other:void 0)}var fe={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function de(e){var n=e.prefixCls,t=e.visible,r=e.children,l=e.popup,a=e.popupClassName,s=e.popupOffset,d=e.disabled,v=e.mode,p=e.onVisibleChange,m=c.useContext(k),b=m.getPopupContainer,y=m.rtl,h=m.subMenuOpenDelay,g=m.subMenuCloseDelay,Z=m.builtinPlacements,C=m.triggerSubMenuAction,E=m.forceSubMenuRender,w=m.rootClassName,M=m.motion,N=m.defaultMotions,P=c.useState(!1),x=(0,u.Z)(P,2),I=x[0],S=x[1],R=y?(0,i.Z)((0,i.Z)({},ce),Z):(0,i.Z)((0,i.Z)({},ae),Z),K=fe[v],O=se(v,M,N),A=(0,i.Z)((0,i.Z)({},O),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),T=c.useRef();return c.useEffect((function(){return T.current=(0,le.Z)((function(){S(t)})),function(){le.Z.cancel(T.current)}}),[t]),c.createElement(ie.Z,{prefixCls:n,popupClassName:f()("".concat(n,"-popup"),(0,o.Z)({},"".concat(n,"-rtl"),y),a,w),stretch:"horizontal"===v?"minWidth":null,getPopupContainer:b,builtinPlacements:R,popupPlacement:K,popupVisible:I,popup:l,popupAlign:s&&{offset:s},action:d?[]:[C],mouseEnterDelay:h,mouseLeaveDelay:g,onPopupVisibleChange:p,forceRender:E,popupMotion:A},r)}var ve=t(15207);function pe(e){var n=e.id,t=e.open,o=e.keyPath,l=e.children,a="inline",s=c.useContext(k),f=s.prefixCls,d=s.forceSubMenuRender,v=s.motion,p=s.defaultMotions,m=s.mode,b=c.useRef(!1);b.current=m===a;var y=c.useState(!b.current),h=(0,u.Z)(y,2),g=h[0],Z=h[1],C=!!b.current&&t;c.useEffect((function(){b.current&&Z(!1)}),[m]);var E=(0,i.Z)({},se(a,v,p));o.length>1&&(E.motionAppear=!1);var w=E.onVisibleChanged;return E.onVisibleChanged=function(e){return b.current||e||Z(!0),null===w||void 0===w?void 0:w(e)},g?null:c.createElement(N,{mode:a,locked:!b.current},c.createElement(ve.Z,(0,r.Z)({visible:C},E,{forceRender:d,removeOnLeave:!1,leavedClassName:"".concat(f,"-hidden")}),(function(e){var t=e.className,r=e.style;return c.createElement(oe,{id:n,className:t,style:r},l)})))}var me=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],be=["active"],ye=function(e){var n,t=e.style,l=e.className,s=e.title,d=e.eventKey,v=(e.warnKey,e.disabled),p=e.internalPopupClose,m=e.children,y=e.itemIcon,h=e.expandIcon,g=e.popupClassName,Z=e.popupOffset,C=e.onClick,E=e.onMouseEnter,w=e.onMouseLeave,M=e.onTitleClick,x=e.onTitleMouseEnter,K=e.onTitleMouseLeave,O=(0,a.Z)(e,me),A=z(d),T=c.useContext(k),V=T.prefixCls,_=T.mode,j=T.openKeys,W=T.disabled,H=T.overflowDisabled,q=T.activeKey,B=T.selectedKeys,G=T.itemIcon,X=T.expandIcon,U=T.onItemClick,Y=T.onOpenChange,J=T.onActive,Q=c.useContext(F)._internalRenderSubMenuItem,$=c.useContext(D).isSubPathKey,ne=L(),te="".concat(V,"-submenu"),re=W||v,ie=c.useRef(),le=c.useRef();var ue=y||G,ae=h||X,ce=j.includes(d),se=!H&&ce,fe=$(B,d),ve=P(d,re,x,K),ye=ve.active,he=(0,a.Z)(ve,be),ge=c.useState(!1),Ze=(0,u.Z)(ge,2),Ce=Ze[0],Ee=Ze[1],we=function(e){re||Ee(e)},Me=c.useMemo((function(){return ye||"inline"!==_&&(Ce||$([q],d))}),[_,ye,q,Ce,d,$]),ke=R(ne.length),Ne=ee((function(e){null===C||void 0===C||C(I(e)),U(e)})),Pe=A&&"".concat(A,"-popup"),xe=c.createElement("div",(0,r.Z)({role:"menuitem",style:ke,className:"".concat(te,"-title"),tabIndex:re?null:-1,ref:ie,title:"string"===typeof s?s:null,"data-menu-id":H&&A?null:A,"aria-expanded":se,"aria-haspopup":!0,"aria-controls":Pe,"aria-disabled":re,onClick:function(e){re||(null===M||void 0===M||M({key:d,domEvent:e}),"inline"===_&&Y(d,!ce))},onFocus:function(){J(d)}},he),s,c.createElement(S,{icon:"horizontal"!==_?ae:null,props:(0,i.Z)((0,i.Z)({},e),{},{isOpen:se,isSubMenu:!0})},c.createElement("i",{className:"".concat(te,"-arrow")}))),Ie=c.useRef(_);if("inline"!==_&&(Ie.current=ne.length>1?"vertical":_),!H){var Se=Ie.current;xe=c.createElement(de,{mode:Se,prefixCls:te,visible:!p&&se&&"inline"!==_,popupClassName:g,popupOffset:Z,popup:c.createElement(N,{mode:"horizontal"===Se?"vertical":Se},c.createElement(oe,{id:Pe,ref:le},m)),disabled:re,onVisibleChange:function(e){"inline"!==_&&Y(d,e)}},xe)}var Re=c.createElement(b.Z.Item,(0,r.Z)({role:"none"},O,{component:"li",style:t,className:f()(te,"".concat(te,"-").concat(_),l,(n={},(0,o.Z)(n,"".concat(te,"-open"),se),(0,o.Z)(n,"".concat(te,"-active"),Me),(0,o.Z)(n,"".concat(te,"-selected"),fe),(0,o.Z)(n,"".concat(te,"-disabled"),re),n)),onMouseEnter:function(e){we(!0),null===E||void 0===E||E({key:d,domEvent:e})},onMouseLeave:function(e){we(!1),null===w||void 0===w||w({key:d,domEvent:e})}}),xe,!H&&c.createElement(pe,{id:Pe,open:se,keyPath:ne},m));return Q&&(Re=Q(Re,e,{selected:fe,active:Me,open:se,disabled:re})),c.createElement(N,{onItemClick:Ne,mode:"horizontal"===_?"vertical":_,itemIcon:ue,expandIcon:ae},Re)};function he(e){var n,t=e.eventKey,r=e.children,o=L(t),i=J(r,o),l=A();return c.useEffect((function(){if(l)return l.registerPath(t,o),function(){l.unregisterPath(t,o)}}),[o]),n=l?i:c.createElement(ye,e,i),c.createElement(T.Provider,{value:o},n)}var ge=t(39393),Ze=C.Z.LEFT,Ce=C.Z.RIGHT,Ee=C.Z.UP,we=C.Z.DOWN,Me=C.Z.ENTER,ke=C.Z.ESC,Ne=C.Z.HOME,Pe=C.Z.END,xe=[Ee,we,Ze,Ce];function Ie(e,n){return(0,ge.tS)(e,!0).filter((function(e){return n.has(e)}))}function Se(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var o=Ie(e,n),i=o.length,l=o.findIndex((function(e){return t===e}));return r<0?-1===l?l=i-1:l-=1:r>0&&(l+=1),o[l=(l+i)%i]}function Re(e,n,t,r,i,l,u,a,s,f){var d=c.useRef(),v=c.useRef();v.current=n;var p=function(){le.Z.cancel(d.current)};return c.useEffect((function(){return function(){p()}}),[]),function(c){var m=c.which;if([].concat(xe,[Me,ke,Ne,Pe]).includes(m)){var b,y,h,g=function(){return b=new Set,y=new Map,h=new Map,l().forEach((function(e){var n=document.querySelector("[data-menu-id='".concat(_(r,e),"']"));n&&(b.add(n),h.set(n,e),y.set(e,n))})),b};g();var Z=function(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}(y.get(n),b),C=h.get(Z),E=function(e,n,t,r){var i,l,u,a,c="prev",s="next",f="children",d="parent";if("inline"===e&&r===Me)return{inlineTrigger:!0};var v=(i={},(0,o.Z)(i,Ee,c),(0,o.Z)(i,we,s),i),p=(l={},(0,o.Z)(l,Ze,t?s:c),(0,o.Z)(l,Ce,t?c:s),(0,o.Z)(l,we,f),(0,o.Z)(l,Me,f),l),m=(u={},(0,o.Z)(u,Ee,c),(0,o.Z)(u,we,s),(0,o.Z)(u,Me,f),(0,o.Z)(u,ke,d),(0,o.Z)(u,Ze,t?f:d),(0,o.Z)(u,Ce,t?d:f),u);switch(null===(a={inline:v,horizontal:p,vertical:m,inlineSub:v,horizontalSub:m,verticalSub:m}["".concat(e).concat(n?"":"Sub")])||void 0===a?void 0:a[r]){case c:return{offset:-1,sibling:!0};case s:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case f:return{offset:1,sibling:!1};default:return null}}(e,1===u(C,!0).length,t,m);if(!E&&m!==Ne&&m!==Pe)return;(xe.includes(m)||[Ne,Pe].includes(m))&&c.preventDefault();var w=function(e){if(e){var n=e,t=e.querySelector("a");(null===t||void 0===t?void 0:t.getAttribute("href"))&&(n=t);var r=h.get(e);a(r),p(),d.current=(0,le.Z)((function(){v.current===r&&n.focus()}))}};if([Ne,Pe].includes(m)||E.sibling||!Z){var M,k,N=Ie(M=Z&&"inline"!==e?function(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}(Z):i.current,b);k=m===Ne?N[0]:m===Pe?N[N.length-1]:Se(M,b,Z,E.offset),w(k)}else if(E.inlineTrigger)s(C);else if(E.offset>0)s(C,!0),p(),d.current=(0,le.Z)((function(){g();var e=Z.getAttribute("aria-controls"),n=Se(document.getElementById(e),b);w(n)}),5);else if(E.offset<0){var P=u(C,!0),x=P[P.length-2],I=y.get(x);s(x,!1),w(I)}}null===f||void 0===f||f(c)}}var Ke=Math.random().toFixed(5).toString().slice(2),Oe=0;var Ae="__RC_UTIL_PATH_SPLIT__",Te=function(e){return e.join(Ae)},Le="rc-menu-more";function De(){var e=c.useState({}),n=(0,u.Z)(e,2)[1],t=(0,c.useRef)(new Map),r=(0,c.useRef)(new Map),o=c.useState([]),i=(0,u.Z)(o,2),a=i[0],s=i[1],f=(0,c.useRef)(0),d=(0,c.useRef)(!1),v=(0,c.useCallback)((function(e,o){var i=Te(o);r.current.set(i,e),t.current.set(e,i),f.current+=1;var l,u=f.current;l=function(){u===f.current&&(d.current||n({}))},Promise.resolve().then(l)}),[]),p=(0,c.useCallback)((function(e,n){var o=Te(n);r.current.delete(o),t.current.delete(e)}),[]),m=(0,c.useCallback)((function(e){s(e)}),[]),b=(0,c.useCallback)((function(e,n){var r=t.current.get(e)||"",o=r.split(Ae);return n&&a.includes(o[0])&&o.unshift(Le),o}),[a]),y=(0,c.useCallback)((function(e,n){return e.some((function(e){return b(e,!0).includes(n)}))}),[b]),h=(0,c.useCallback)((function(e){var n="".concat(t.current.get(e)).concat(Ae),o=new Set;return(0,l.Z)(r.current.keys()).forEach((function(e){e.startsWith(n)&&o.add(r.current.get(e))})),o}),[]);return c.useEffect((function(){return function(){d.current=!0}}),[]),{registerPath:v,unregisterPath:p,refreshOverflowKeys:m,isSubPathKey:y,getKeyPath:b,getKeys:function(){var e=(0,l.Z)(t.current.keys());return a.length&&e.push(Le),e},getSubPathKeys:h}}var Ve=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],_e=[],ze=["className","title","eventKey","children"],Fe=["children"],je=function(e){var n=e.className,t=e.title,o=(e.eventKey,e.children),i=(0,a.Z)(e,ze),l=c.useContext(k).prefixCls,u="".concat(l,"-item-group");return c.createElement("li",(0,r.Z)({},i,{onClick:function(e){return e.stopPropagation()},className:f()(u,n)}),c.createElement("div",{className:"".concat(u,"-title"),title:"string"===typeof t?t:void 0},t),c.createElement("ul",{className:"".concat(u,"-list")},o))};function We(e){var n=e.children,t=(0,a.Z)(e,Fe),r=J(n,L(t.eventKey));return A()?r:c.createElement(je,(0,E.Z)(t,["warnKey"]),r)}function He(e){var n=e.className,t=e.style,r=c.useContext(k).prefixCls;return A()?null:c.createElement("li",{className:f()("".concat(r,"-item-divider"),n),style:t})}var qe=L,Be=c.forwardRef((function(e,n){var t,s,d=e.prefixCls,m=void 0===d?"rc-menu":d,y=e.rootClassName,h=e.style,g=e.className,Z=e.tabIndex,C=void 0===Z?0:Z,E=e.items,w=e.children,M=e.direction,k=e.id,P=e.mode,x=void 0===P?"vertical":P,S=e.inlineCollapsed,R=e.disabled,K=e.disabledOverflow,A=e.subMenuOpenDelay,T=void 0===A?.1:A,L=e.subMenuCloseDelay,z=void 0===L?.1:L,j=e.forceSubMenuRender,W=e.defaultOpenKeys,H=e.openKeys,q=e.activeKey,B=e.defaultActiveFirst,X=e.selectable,U=void 0===X||X,Y=e.multiple,J=void 0!==Y&&Y,Q=e.defaultSelectedKeys,ne=e.selectedKeys,te=e.onSelect,re=e.onDeselect,oe=e.inlineIndent,ie=void 0===oe?24:oe,le=e.motion,ue=e.defaultMotions,ae=e.triggerSubMenuAction,ce=void 0===ae?"hover":ae,se=e.builtinPlacements,fe=e.itemIcon,de=e.expandIcon,ve=e.overflowedIndicator,pe=void 0===ve?"...":ve,me=e.overflowedIndicatorPopupClassName,be=e.getPopupContainer,ye=e.onClick,ge=e.onOpenChange,Ze=e.onKeyDown,Ce=(e.openAnimation,e.openTransitionName,e._internalRenderMenuItem),Ee=e._internalRenderSubMenuItem,we=(0,a.Z)(e,Ve),Me=c.useMemo((function(){return $(w,E,_e)}),[w,E]),ke=c.useState(!1),Ne=(0,u.Z)(ke,2),Pe=Ne[0],xe=Ne[1],Ie=c.useRef(),Se=function(e){var n=(0,p.Z)(e,{value:e}),t=(0,u.Z)(n,2),r=t[0],o=t[1];return c.useEffect((function(){Oe+=1;var e="".concat(Ke,"-").concat(Oe);o("rc-menu-uuid-".concat(e))}),[]),r}(k),Ae="rtl"===M;var Te=c.useMemo((function(){return"inline"!==x&&"vertical"!==x||!S?[x,!1]:["vertical",S]}),[x,S]),ze=(0,u.Z)(Te,2),Fe=ze[0],je=ze[1],We=c.useState(0),He=(0,u.Z)(We,2),qe=He[0],Be=He[1],Ge=qe>=Me.length-1||"horizontal"!==Fe||K,Xe=(0,p.Z)(W,{value:H,postState:function(e){return e||_e}}),Ue=(0,u.Z)(Xe,2),Ye=Ue[0],Je=Ue[1],Qe=function(e){Je(e),null===ge||void 0===ge||ge(e)},$e=c.useState(Ye),en=(0,u.Z)($e,2),nn=en[0],tn=en[1],rn="inline"===Fe,on=c.useRef(!1);c.useEffect((function(){rn&&tn(Ye)}),[Ye]),c.useEffect((function(){on.current?rn?Je(nn):Qe(_e):on.current=!0}),[rn]);var ln=De(),un=ln.registerPath,an=ln.unregisterPath,cn=ln.refreshOverflowKeys,sn=ln.isSubPathKey,fn=ln.getKeyPath,dn=ln.getKeys,vn=ln.getSubPathKeys,pn=c.useMemo((function(){return{registerPath:un,unregisterPath:an}}),[un,an]),mn=c.useMemo((function(){return{isSubPathKey:sn}}),[sn]);c.useEffect((function(){cn(Ge?_e:Me.slice(qe+1).map((function(e){return e.key})))}),[qe,Ge]);var bn=(0,p.Z)(q||B&&(null===(t=Me[0])||void 0===t?void 0:t.key),{value:q}),yn=(0,u.Z)(bn,2),hn=yn[0],gn=yn[1],Zn=ee((function(e){gn(e)})),Cn=ee((function(){gn(void 0)}));(0,c.useImperativeHandle)(n,(function(){return{list:Ie.current,focus:function(e){var n,t,r,o,i=null!==hn&&void 0!==hn?hn:null===(n=Me.find((function(e){return!e.props.disabled})))||void 0===n?void 0:n.key;i&&(null===(t=Ie.current)||void 0===t||null===(r=t.querySelector("li[data-menu-id='".concat(_(Se,i),"']")))||void 0===r||null===(o=r.focus)||void 0===o||o.call(r,e))}}}));var En=(0,p.Z)(Q||[],{value:ne,postState:function(e){return Array.isArray(e)?e:null===e||void 0===e?_e:[e]}}),wn=(0,u.Z)(En,2),Mn=wn[0],kn=wn[1],Nn=ee((function(e){null===ye||void 0===ye||ye(I(e)),function(e){if(U){var n,t=e.key,r=Mn.includes(t);n=J?r?Mn.filter((function(e){return e!==t})):[].concat((0,l.Z)(Mn),[t]):[t],kn(n);var o=(0,i.Z)((0,i.Z)({},e),{},{selectedKeys:n});r?null===re||void 0===re||re(o):null===te||void 0===te||te(o)}!J&&Ye.length&&"inline"!==Fe&&Qe(_e)}(e)})),Pn=ee((function(e,n){var t=Ye.filter((function(n){return n!==e}));if(n)t.push(e);else if("inline"!==Fe){var r=vn(e);t=t.filter((function(e){return!r.has(e)}))}v()(Ye,t)||Qe(t)})),xn=ee(be),In=Re(Fe,hn,Ae,Se,Ie,dn,fn,gn,(function(e,n){var t=null!==n&&void 0!==n?n:!Ye.includes(e);Pn(e,t)}),Ze);c.useEffect((function(){xe(!0)}),[]);var Sn=c.useMemo((function(){return{_internalRenderMenuItem:Ce,_internalRenderSubMenuItem:Ee}}),[Ce,Ee]),Rn="horizontal"!==Fe||K?Me:Me.map((function(e,n){return c.createElement(N,{key:e.key,overflowDisabled:n>qe},e)})),Kn=c.createElement(b.Z,(0,r.Z)({id:k,ref:Ie,prefixCls:"".concat(m,"-overflow"),component:"ul",itemComponent:G,className:f()(m,"".concat(m,"-root"),"".concat(m,"-").concat(Fe),g,(s={},(0,o.Z)(s,"".concat(m,"-inline-collapsed"),je),(0,o.Z)(s,"".concat(m,"-rtl"),Ae),s),y),dir:M,style:h,role:"menu",tabIndex:C,data:Rn,renderRawItem:function(e){return e},renderRawRest:function(e){var n=e.length,t=n?Me.slice(-n):null;return c.createElement(he,{eventKey:Le,title:pe,disabled:Ge,internalPopupClose:0===n,popupClassName:me},t)},maxCount:"horizontal"!==Fe||K?b.Z.INVALIDATE:b.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){Be(e)},onKeyDown:In},we));return c.createElement(F.Provider,{value:Sn},c.createElement(V.Provider,{value:Se},c.createElement(N,{prefixCls:m,rootClassName:y,mode:Fe,openKeys:Ye,rtl:Ae,disabled:R,motion:Pe?le:null,defaultMotions:Pe?ue:null,activeKey:hn,onActive:Zn,onInactive:Cn,selectedKeys:Mn,inlineIndent:ie,subMenuOpenDelay:T,subMenuCloseDelay:z,forceSubMenuRender:j,builtinPlacements:se,triggerSubMenuAction:ce,getPopupContainer:xn,itemIcon:fe,expandIcon:de,onItemClick:Nn,onOpenChange:Pn},c.createElement(D.Provider,{value:mn},Kn),c.createElement("div",{style:{display:"none"},"aria-hidden":!0},c.createElement(O.Provider,{value:pn},Me)))))}));Be.Item=G,Be.SubMenu=he,Be.ItemGroup=We,Be.Divider=He;var Ge=Be},39393:function(e,n,t){t.d(n,{tS:function(){return l}});var r=t(93433),o=t(92386);function i(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,o.Z)(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||"a"===t&&!!e.getAttribute("href"),i=e.getAttribute("tabindex"),l=Number(i),u=null;return i&&!Number.isNaN(l)?u=l:r&&null===u&&(u=0),r&&e.disabled&&(u=null),null!==u&&(u>=0||n&&u<0)}return!1}function l(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(0,r.Z)(e.querySelectorAll("*")).filter((function(e){return i(e,n)}));return i(e,n)&&t.unshift(e),t}}}]);
//# sourceMappingURL=975.68d915f9.chunk.js.map