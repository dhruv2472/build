(self.webpackChunkJob_Portal_with_AI_Resume_Analyzer=self.webpackChunkJob_Portal_with_AI_Resume_Analyzer||[]).push([[94],{3514:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2791),a="TableFooter_tableFooter__DcY6D",o="TableFooter_button__UOgPi",s="TableFooter_activeButton__rqHSC",i="TableFooter_inactiveButton__6SSN5",c=n(184),u=function(e){var t=e.range,n=e.setPage,u=e.page,l=e.slice;return(0,r.useEffect)((function(){l.length<1&&1!==u&&n(u-1)}),[l,u,n]),(0,c.jsx)("div",{className:a,children:t.map((function(e,t){return(0,c.jsx)("button",{className:"".concat(o," ").concat(u===e?s:i),onClick:function(){return n(e)},children:e},t)}))})}},96:function(e,t,n){"use strict";var r=n(2982),a=n(885),o=n(2791);t.Z=function(e,t,n){var s=(0,o.useState)([]),i=(0,a.Z)(s,2),c=i[0],u=i[1],l=(0,o.useState)([]),d=(0,a.Z)(l,2),f=d[0],p=d[1];return(0,o.useEffect)((function(){var a=function(e,t){for(var n=[],r=Math.ceil(e.length/t),a=1;a<=r;a++)n.push(a);return n}(e,n);u((0,r.Z)(a));var o=function(e,t,n){return e.slice((t-1)*n,t*n)}(e,t,n);p((0,r.Z)(o))}),[e,u,t,p,n]),{slice:f,range:c}}},9094:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(2791),a=n(4942),o=n(1413),s=n(2982),i=n(5861),c=n(885),u=n(7757),l=n.n(u),d=n(7022),f=n(9743),p=n(2677),h=n(323),y=n(3392),b=n(4292),_=n(2591),v={tableBox:"Content_tableBox__x5jHF",tableHeader:"Content_tableHeader__QI0Ev",tableBody:"Content_tableBody__xQOmA",rowStyle:"Content_rowStyle__Muffk",repo:"Content_repo__UoR+L",span11:"Content_span11__As1Qj",str1:"Content_str1__PiQBd",end1:"Content_end1__LzX6y",buttonsty:"Content_buttonsty__71UHx",input:"Content_input__w-a8M",csvsty:"Content_csvsty__fIPhx",textstyl:"Content_textstyl__WzW5a",actions:"Content_actions__ef2Dl",str2:"Content_str2__c0lOn",str21:"Content_str21__cETd6",subm:"Content_subm__DAYGQ",expo:"Content_expo__csAbj",col:"Content_col__YbpUe",filters:"Content_filters__2TABK"},j=n(96),m=n(3514),x=n(8472),g=n(4569),C=n.n(g),w=n(5998),k=n(184);var Z=function(){var e=(0,r.useState)([]),t=(0,c.Z)(e,2),n=t[0],u=t[1],g=(0,r.useState)(1),Z=(0,c.Z)(g,2),O=Z[0],S=Z[1],P=(0,j.Z)(n,O,5),A=P.slice,F=P.range,N=(0,r.useState)({}),D=(0,c.Z)(N,2),E=D[0],R=D[1],I=(0,r.useState)({startdate:"",enddate:""}),T=(0,c.Z)(I,2),B=(T[0],T[1]),U=(0,r.useState)({}),L=(0,c.Z)(U,2),M=L[0],H=L[1];(0,r.useEffect)((function(){var e=function(){var e=(0,i.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().get("".concat(w.L+"provider/jobs/"),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:t=e.sent,n=(0,s.Z)(t.data.jobs),u(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var V=function(){var e="";!E.startdate&&E.enddate&&(e="please enter start date"),E.startdate||E.enddate||H({}),H((function(t){return(0,o.Z)((0,o.Z)({},t),{},{startdate:e})}))},z=function(){var e="";if(!E.enddate&&E.startdate&&(e="please enter end date"),E.startdate||E.enddate){if(E.enddate&&E.startdate){new Date(E.startdate)>new Date(E.enddate)&&(e="end date should be greater than start date")}}else H({});H((function(t){return(0,o.Z)((0,o.Z)({},t),{},{enddate:e})}))},Q=function(e){var t=e.target.name,n=e.target.value;R((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,a.Z)({},t,n))}))},J={headers:[{label:"JobId",key:"jobId"},{label:"ProviderId",key:"providerId"},{label:"Title",key:"title"},{label:"StartDate",key:"startDate"},{label:"EndDate",key:"endDate"}],data:(0,s.Z)(n),filename:"csvfile.csv"};return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(d.Z,{children:[(0,k.jsx)(f.Z,{className:v.rowStyle,children:(0,k.jsx)(p.Z,{className:"".concat(v.repo," col-md-3"),children:(0,k.jsx)("span",{className:v.span11,children:"Reports"})})}),(0,k.jsxs)(f.Z,{className:v.filters,children:[(0,k.jsx)(p.Z,{className:"".concat(v.str1," ").concat(v),children:(0,k.jsx)(h.Z,{controlId:"reportstartdate",children:(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(p.Z,{children:(0,k.jsx)(y.Z,{className:v.textstyl,children:(0,k.jsx)("b",{children:"StartDate"})})}),(0,k.jsxs)(p.Z,{className:v.input,children:[(0,k.jsx)(b.Z,{className:v.str2,onBlur:V,onChange:Q,name:"startdate",type:"date",placeholder:"Start Date"}),(0,k.jsx)(p.Z,{className:"text-danger text-center",children:M.startdate})]})]})})}),(0,k.jsx)(p.Z,{className:v.end1,children:(0,k.jsx)(h.Z,{controlId:"reportenddate",children:(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(p.Z,{children:(0,k.jsx)(y.Z,{className:v.textstyl,children:(0,k.jsx)("b",{children:"EndDate"})})}),(0,k.jsxs)(p.Z,{className:v.input,children:[(0,k.jsx)(b.Z,{className:v.str21,onBlur:z,onChange:Q,name:"enddate",type:"date",placeholder:"End Date"}),(0,k.jsx)(p.Z,{className:"text-danger text-center",children:M.enddate})]})]})})}),(0,k.jsxs)(p.Z,{className:v.actions,children:[(0,k.jsx)(p.Z,{className:v.subm,children:(0,k.jsx)("button",{className:v.buttonsty,onClick:function(){V(),z(),M.startdate||M.enddate||B((0,o.Z)({},E));var e=new Date(E.startdate),t=new Date(E.enddate),r=n.filter((function(n){var r=new Date(n.startDate);if(r>=e&&r<=t)return n}));u(r)},children:"Submit"})}),(0,k.jsx)(p.Z,{className:v.expo,children:(0,k.jsx)("button",{className:v.csvsty,children:(0,k.jsx)(x.CSVLink,(0,o.Z)((0,o.Z)({className:v.sty11},J),{},{children:"Export to CSV"}))})})]})]}),(0,k.jsx)("div",{className:v.tableBox,children:(0,k.jsxs)(_.Z,{striped:!0,hover:!0,children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{className:v.tableHeader,children:[(0,k.jsx)("th",{children:"Title"}),(0,k.jsx)("th",{children:"description"}),(0,k.jsx)("th",{children:"Category"}),(0,k.jsx)("th",{children:"StartDate"}),(0,k.jsx)("th",{children:"EndDate"})]})}),(0,k.jsx)("tbody",{className:v.tableBody,children:A.map((function(e){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:e.title}),(0,k.jsx)("td",{children:e.description}),(0,k.jsx)("td",{children:e.category}),(0,k.jsx)("td",{children:e.startDate}),(0,k.jsx)("td",{children:e.endDate})]},e._id)}))})]})}),(0,k.jsx)(m.Z,{range:F,slice:A,setPage:S,page:O})]})})};function O(){return(0,r.useEffect)((function(){document.title=w.R.xI}),[]),(0,k.jsx)(r.Fragment,{children:(0,k.jsx)(Z,{})})}},8472:function(e,t,n){e.exports=n(3561)},8015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2791),s=(r=o)&&r.__esModule?r:{default:r},i=n(1509),c=n(8333);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"buildURI",value:function(){return i.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,a=e.enclosingCharacter,o=e.uFEFF,s=e.target,i=e.specs,c=e.replace;this.state.page=window.open(this.buildURI(t,o,n,r,a),s,i,c)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(s.default.Component);u.defaultProps=Object.assign(c.defaultProps,{target:"_blank"}),u.propTypes=c.propTypes,t.default=u},9088:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2791),i=(r=s)&&r.__esModule?r:{default:r},c=n(1509),u=n(8333);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var n=this.props,r=n.data,a=n.headers,o=n.separator,s=n.filename,i=n.enclosingCharacter,u=n.uFEFF,l=t&&"function"===typeof r?r():r,d=new Blob([u?"\ufeff":"",(0,c.toCSV)(l,a,o,i)]);return window.navigator.msSaveBlob(d,s),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.headers,o=t.separator,s=t.filename,c=t.uFEFF,u=t.children,l=(t.onClick,t.asyncOnClick,t.enclosingCharacter),d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),f="undefined"===typeof window?"":this.buildURI(n,c,r,o,l);return i.default.createElement("a",a({download:s},d,{ref:function(t){return e.link=t},target:"_self",href:f,onClick:this.handleClick()}),u)}}]),t}(i.default.Component);l.defaultProps=u.defaultProps,l.propTypes=u.propTypes,t.default=l},1509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},o=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":n(e))&&!(e instanceof Array)}))},s=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},i=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(r(e),r(t)))}),[]))},c=t.jsons2arrays=function(e,t){var n=t=t||i(e),a=t;o(t)&&(n=t.map((function(e){return e.label})),a=t.map((function(e){return e.key})));var s=e.map((function(e){return a.map((function(t){return u(t,e)}))}));return[n].concat(r(s))},u=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,r){var a=e[t];if(void 0!==a&&null!==a)return a;r.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},l=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},d=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return l(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},f=t.arrays2csv=function(e,t,n,a){return d(t?[t].concat(r(e)):e,n,a)},p=t.jsons2csv=function(e,t,n,r){return d(c(e,t),n,r)},h=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e.replace(/"/g,'""')},y=t.toCSV=function(e,t,n,r){if(o(e))return p(e,t,n,r);if(s(e))return f(e,t,n,r);if("string"===typeof e)return h(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,o){var s=y(e,n,r,o),i=a()?"application/csv":"text/csv",c=new Blob([t?"\ufeff":"",s],{type:i}),u="data:"+i+";charset=utf-8,"+(t?"\ufeff":"")+s,l=window.URL||window.webkitURL;return"undefined"===typeof l.createObjectURL?u:l.createObjectURL(c)}},3561:function(e,t,n){"use strict";t.CSVLink=void 0;var r=o(n(8015)),a=o(n(9088));function o(e){return e&&e.__esModule?e:{default:e}}r.default,t.CSVLink=a.default},8333:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,a=n(2791),o=((r=a)&&r.__esModule,n(2007));t.propTypes={data:(0,o.oneOfType)([o.string,o.array,o.func]).isRequired,headers:o.array,target:o.string,separator:o.string,filename:o.string,uFEFF:o.bool,onClick:o.func,asyncOnClick:o.bool,enclosingCharacter:o.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]}}]);
//# sourceMappingURL=94.96118324.chunk.js.map