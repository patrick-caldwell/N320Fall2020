(function(e){function t(t){for(var r,u,i=t[0],s=t[1],l=t[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("1d50")},"1d50":function(e,t,n){"use strict";n.r(t);n("b1eb"),n("f977"),n("935d"),n("60eb");var r=n("e832"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("DataDisplay",{attrs:{games:this.games}})],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pageTitle"},[n("h1",[e._v("Part of my N64 Game Collection")]),n("h4",[e._v("Because I don't know what else to use")])])}],u=(n("68b5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gameContainer"},e._l(e.games,(function(t){return n("div",{key:t.name,staticClass:"game"},[n("img",{staticClass:"boxArt",attrs:{src:t.image,alt:t.name}}),n("div",{staticClass:"gameInfo"},[n("p",[e._v(e._s(t.name))]),n("p",[e._v(e._s(t.language)+" "+e._s(t.region))]),n("p",[e._v("Developed by "+e._s(t.developer))])])])})),0)}),i=[],s={props:["games"],data:function(){return{test:"Hello Hello"}},name:"DataDisplay"},l=s,c=(n("aba3"),n("5762")),p=Object(c["a"])(l,u,i,!1,null,"eb145e0c",null),f=p.exports,d={name:"App",data:function(){return{games:null}},components:{DataDisplay:f},mounted:function(){var e=this;fetch("data/data.json").then((function(e){return e.json()})).then((function(t){console.log(t),e.games=t}))}},v=d,b=(n("e5cd"),Object(c["a"])(v,a,o,!1,null,null,null)),m=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)}}).$mount("#app")},aba3:function(e,t,n){"use strict";var r=n("db23"),a=n.n(r);a.a},c68a:function(e,t,n){},db23:function(e,t,n){},e5cd:function(e,t,n){"use strict";var r=n("c68a"),a=n.n(r);a.a}});
//# sourceMappingURL=app.138ab84d.js.map