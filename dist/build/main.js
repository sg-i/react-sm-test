(()=>{"use strict";var e={8389:(e,t,n)=>{var a=n(7329),r=n(6156),l=n(7294),c=n(3935),i=n(3727),s=n(9704),o=n(6610),u=n(5991),d=n(379),m=n(3724),p=n(7608),f=n(5977),h=n(4699),E=n(9669),v=n.n(E);const y=function(e){var t=e.title,n=e.arrChoice,r=e.setArrChoice,c=(e.changeStateTypes,e.searchState,e.section),i=((0,s.v9)((function(e){return e.types})),(0,s.I0)()),o=(0,l.useState)(!1),u=(0,h.Z)(o,2),d=u[0],m=u[1];return l.createElement("li",null,l.createElement("label",{style:{cursor:"pointer"},className:"unselectable"},l.createElement("input",{type:"checkbox",onChange:function(){d?("types"===c&&i({type:"TYPES_DEL",data:t}),"brands"===c&&i({type:"BRANDS_DEL",data:t}),r((0,a.Z)(n.filter((function(e){return e!==t}))))):("types"===c&&i({type:"TYPES_ADD",data:t}),"brands"===c&&i({type:"BRANDS_ADD",data:t}),r([].concat((0,a.Z)(n),[t]))),m(!d)},checked:d}),t))};var g=function(e){var t=e.setBrands,n=e.setTypes,a=e.handleInputMaxPrice,r=e.handleInputMinPrice,c=e.maxBound,i=e.minBound,s=(0,l.useState)([]),o=(0,h.Z)(s,2),u=o[0],d=o[1],m=(0,l.useState)([]),p=(0,h.Z)(m,2),f=p[0],E=p[1];return(0,l.useEffect)((function(){n(u)}),[u]),(0,l.useEffect)((function(){t(f)}),[f]),l.createElement("div",{className:"contfilt"},l.createElement("ul",{className:"mainListFilters"},l.createElement("li",null,l.createElement("b",null,"Тип товара"),l.createElement("ul",{className:"supList"},["Миксер","Смартфон","Телевизор","Пылесос"].map((function(e){return l.createElement(y,{key:e,arrChoice:u,setArrChoice:d,title:e,section:"types"})})))),l.createElement("li",null,l.createElement("b",null,"Бренд"),l.createElement("ul",{className:"supList"},["Apple","Philips","Samsung","Dyson","LG"].map((function(e){return l.createElement(y,{key:e,arrChoice:f,setArrChoice:E,title:e,section:"brands"})})))),l.createElement("li",null,l.createElement("b",null,"Цена"),l.createElement("div",{style:{display:"flex",alignItems:"center ",paddingLeft:10,paddingTop:7}},l.createElement("input",{onChange:r,value:i,style:{width:"50%",padding:8,border:"0.1rem solid #b5b5b9"},type:"text"}),l.createElement("div",{className:"linePrice"}),l.createElement("input",{onChange:a,value:c,style:{width:"50%",padding:8,border:"0.1rem solid #b5b5b9"},type:"text"})),l.createElement("div",{style:{paddingLeft:10,paddingTop:10}}))))},b=function(e){var t,n=e.items;return l.createElement("table",{className:"table"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{style:{width:211}},"id"),l.createElement("th",{style:{width:190}},"Название"),l.createElement("th",null,"Описание"),l.createElement("th",{style:{width:150}},"Тип"),l.createElement("th",{style:{width:80}},"Цена"),l.createElement("th",{style:{width:107}},"Бренд"))),l.createElement("tbody",null,null===(t=n.data)||void 0===t?void 0:t.map((function(e){return l.createElement("tr",{key:e._id},l.createElement("td",null,e._id),l.createElement("td",null,e.name),l.createElement("td",{className:"tableDescr"},e.description),l.createElement("td",{style:{textAlign:"center"}},e.typeProduct),l.createElement("td",{style:{textAlign:"center"}},e.price),l.createElement("td",{style:{textAlign:"center"}},e.brand))}))))},x=function(){var e=(0,s.v9)((function(e){return e})),t=((0,s.I0)(),(0,l.useState)(e.data)),n=(0,h.Z)(t,2),a=n[0],r=n[1],c=(0,l.useState)(e.types),i=(0,h.Z)(c,2),o=i[0],u=i[1],d=(0,l.useState)(e.brands),m=(0,h.Z)(d,2),p=m[0],f=m[1],E=(0,l.useState)(""),y=(0,h.Z)(E,2),x=y[0],w=y[1],N=(0,l.useState)(0),A=(0,h.Z)(N,2),_=A[0],S=A[1],D=(0,l.useState)(18e5),Z=(0,h.Z)(D,2),C=Z[0],P=Z[1];function O(e){w(e.target.value)}return(0,l.useEffect)((function(){"data"in a&&v().get("http://localhost:9000/api/getitems/f",{params:{search:x,types:o,brands:p,minBound:_,maxBound:C}}).then((function(e){r({data:e.data})}))}),[o,p,x,_,C]),(0,l.useEffect)((function(){"data"in a||v().get("http://localhost:9000/api/getitems").then((function(e){r({data:e.data})}))}),[]),l.createElement("div",null,l.createElement("div",{className:"mainPageWrap"},l.createElement("div",{className:"filters"},l.createElement("div",null,l.createElement("div",null,l.createElement(g,{value:x,onChange:O,setBrands:f,setTypes:u,handleInputMinPrice:function(e){S(Number(e.target.value))},handleInputMaxPrice:function(e){P(Number(e.target.value))},maxBound:C,minBound:_})))),l.createElement("div",{className:"contentSide"},l.createElement("div",{style:{marginBottom:10}},l.createElement("input",{onChange:O,value:x,className:"searchInput",type:"text",placeholder:"Поиск.."})),l.createElement("div",null,l.createElement(b,{items:a})))))},w=n(733),N=n.n(w),A=function(){var e=l.useState(!1),t=(0,h.Z)(e,2),n=t[0],a=t[1],r=l.useState(""),c=(0,h.Z)(r,2),i=c[0],s=c[1],o=l.useState(""),u=(0,h.Z)(o,2),d=u[0],m=u[1],p=l.useState(""),f=(0,h.Z)(p,2),E=f[0],y=f[1],g=l.useState(""),b=(0,h.Z)(g,2),x=b[0],w=b[1],A=l.useState(""),_=(0,h.Z)(A,2),S=_[0],D=_[1];return l.createElement("div",{className:"wrapAdd"},n?l.createElement("div",{style:{padding:"10%"}},l.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:"100%"}},l.createElement(N(),{style:{margin:"0 auto",height:"7%",width:"7%"},type:"spinningBubbles",color:"#000000",height:"4%",width:"4%"}),l.createElement("h2",{style:{margin:"0 auto",marginTop:30}},"Загрузка"))):l.createElement("div",{className:"leftSideAddControl"},l.createElement("div",{className:"d-flex mb-10"},l.createElement("div",{className:"labelTextAreaAdd"},"Название:"),l.createElement("textarea",{value:i,rows:"1",onChange:function(e){return s(e.target.value)},className:"textareaAdd",maxLength:200,type:"text"})),l.createElement("div",{className:"d-flex mb-10"},l.createElement("div",{className:"labelTextAreaAdd"},"Тип:"),l.createElement("div",{style:{display:"flex",flexDirection:"column"}},["Миксер","Смартфон","Телевизор","Пылесос"].map((function(e){return l.createElement("div",{key:e.toString()},l.createElement("input",{type:"radio",name:"type",value:e,onChange:function(e){return m(e.target.value)}}),e)})))),l.createElement("div",{className:"d-flex mb-10"},l.createElement("div",{className:"labelTextAreaAdd"},"Бренд:"),l.createElement("div",{style:{display:"flex",flexDirection:"column"}},["Apple","Philips","Samsung","Dyson","LG"].map((function(e){return l.createElement("div",{key:e.toString()},l.createElement("input",{type:"radio",name:"brand",value:e,onChange:function(e){return y(e.target.value)}}),e)})))),l.createElement("div",{className:"d-flex mb-20"},l.createElement("div",{className:"labelTextAreaAdd"},"Цена:"),l.createElement("input",{value:x,onChange:function(e){return w(e.target.value)},className:"textareaAdd priceInput",min:0,max:999999999,type:"number"})),l.createElement("div",{className:"d-flex mb-10"},l.createElement("div",{className:"labelTextAreaAdd"},"Описание:"),l.createElement("textarea",{value:S,onChange:function(e){return D(e.target.value)},style:{border:"1px solid black",resize:"vertical",borderRadius:10},rows:"8",placeholder:"Введите данные",className:"textareaAdd",maxLength:400,type:"text"})),l.createElement("div",{style:{display:"flex"}},l.createElement("button",{onClick:function(){""===i||""===x||""===S||""===d||""===E?window.alert("Необходимо заполнить все поля."):window.confirm("Вы уверены, что хотите добавить товар?")&&(a(!0),v().post("/addProduct",{name:i,type:d,brand:E,price:x,description:S}).then((function(e){a(!1),s(""),m(""),y(""),w(""),D(""),alert("Товар добавлен")})).catch((function(e){a(!1),alert("Товар не добавлен. Ошибка:".concat(e.response.data.message)),console.log({error:e.response.data.message})})))},style:{margin:"0 auto",padding:7,borderRadius:15,borderColor:"purple",backgroundColor:"white",fontSize:"18px",cursor:"pointer"}},"Сохранить"))))};var _=function(e){(0,d.Z)(r,e);var t,n,a=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,p.Z)(t);if(n){var r=(0,p.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,m.Z)(this,e)});function r(){return(0,o.Z)(this,r),a.apply(this,arguments)}return(0,u.Z)(r,[{key:"render",value:function(){return l.createElement("div",{className:"ui-app"},l.createElement("div",{className:"ui-app__navigation"},l.createElement(i.OL,{className:"ui-app__navigation__link",activeClassName:"ui-app__navigation__link--active",to:"/",exact:!0},"Поиск"),l.createElement(i.OL,{className:"ui-app__navigation__link",activeClassName:"ui-app__navigation__link--active",to:"/add",exact:!0},"Добавить товар")),l.createElement(f.rs,null,l.createElement(f.AW,{path:"/",exact:!0,component:x}),l.createElement(f.AW,{path:"/add",exact:!0,component:A})))}}]),r}(l.Component),S=n(879),D=n(3894);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=(0,S.UY)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DATA":return t.data;default:return e}},types:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{arr:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TYPES_ADD":return null==e.arr&&(e.arr=[]),C(C({},e),{},{arr:[].concat((0,a.Z)(e.arr),[t.data])});case"TYPES_DEL":return null==e.arr&&(e.arr=[]),C(C({},e),{},{arr:e.arr.filter((function(e){return e!==t.data}))});default:return e}},brands:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{arr:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BRANDS_ADD":return null==e.arr&&(e.arr=[]),C(C({},e),{},{arr:[].concat((0,a.Z)(e.arr),[t.data])});case"BRANDS_DEL":return null==e.arr&&(e.arr=[]),C(C({},e),{},{arr:e.arr.filter((function(e){return e!==t.data}))});default:return e}}}),O=("undefined"!=typeof window&&window.document&&window.document.createElement,(0,S.MT)(P,window.REDUX_DATA,(0,S.md)(D.Z)));c.hydrate(l.createElement(s.zt,{store:O},l.createElement(i.VK,null,l.createElement(_,null))),document.getElementById("app"))}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[8389,736]],a=()=>{};function r(){for(var a,r=0;r<t.length;r++){for(var l=t[r],c=!0,i=1;i<l.length;i++){var s=l[i];0!==e[s]&&(c=!1)}c&&(t.splice(r--,1),a=n(n.s=l[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),a}n.x=()=>{n.x=()=>{},c=c.slice();for(var e=0;e<c.length;e++)l(c[e]);return(a=r)()};var l=r=>{for(var l,c,[s,o,u,d]=r,m=0,p=[];m<s.length;m++)c=s[m],n.o(e,c)&&e[c]&&p.push(e[c][0]),e[c]=0;for(l in o)n.o(o,l)&&(n.m[l]=o[l]);for(u&&u(n),i(r);p.length;)p.shift()();return d&&t.push.apply(t,d),a()},c=self.webpackChunkreact_sm_test=self.webpackChunkreact_sm_test||[],i=c.push.bind(c);c.push=l})(),n.x()})();
//# sourceMappingURL=main.js.map