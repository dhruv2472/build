"use strict";(self.webpackChunkJob_Portal_with_AI_Resume_Analyzer=self.webpackChunkJob_Portal_with_AI_Resume_Analyzer||[]).push([[415],{227:function(e,t,n){var a=n(2982),c=n(885),s=n(2791);t.Z=function(e,t,n){var r=(0,s.useState)([]),i=(0,c.Z)(r,2),o=i[0],l=i[1],d=(0,s.useState)([]),p=(0,c.Z)(d,2),u=p[0],_=p[1];return(0,s.useEffect)((function(){var c=function(e,t){for(var n=[],a=Math.ceil(e.length/t),c=1;c<=a;c++)n.push(c);return n}(e,n);l((0,a.Z)(c));var s=function(e,t,n){return e.slice((t-1)*n,t*n)}(e,t,n);_((0,a.Z)(s))}),[e,l,t,_,n]),{slice:u,range:o}}},4010:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(2791),c="TableFooter_tableFooter__0SLjT",s="TableFooter_button__Bj0wN",r="TableFooter_activeButton__K20VT",i="TableFooter_inactiveButton__SwQDk",o=n(184),l=function(e){var t=e.range,n=e.setPage,l=e.page,d=e.slice;return(0,a.useEffect)((function(){d.length<1&&1!==l&&n(l-1)}),[d,l,n]),(0,o.jsx)("div",{className:c,children:t.map((function(e,t){return(0,o.jsx)("button",{className:"".concat(s," ").concat(l===e?r:i),onClick:function(){return n(e)},children:e},t)}))})}},5415:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(2791),c=n(2982),s=n(885),r=n(7022),i=n(9743),o=n(2677),l=n(2591),d=n(4569),p=n.n(d),u=n(4010),_=n(227),h=n(8233),b=n(598),f=n(7361),j=n(6871),x=n(184),m=function(e){var t=(0,j.s0)();return(0,x.jsxs)("tr",{className:f.Z.row,children:[(0,x.jsx)("td",{children:e.jobItem.title}),(0,x.jsx)("td",{children:(0,x.jsxs)("button",{className:"".concat(f.Z.applicants," ").concat(f.Z.button),onClick:function(){t("/manage-applicants/".concat(e.jobItem._id))},children:[(0,x.jsx)("span",{children:(0,x.jsx)("i",{className:"bi bi-person-bounding-box"})}),(0,x.jsx)("span",{children:"View Applicants"})]})}),(0,x.jsx)("td",{children:(0,x.jsxs)("button",{className:"".concat(f.Z.shortlisted," ").concat(f.Z.button),onClick:function(){t("/view-shortlists/".concat(e.jobItem._id))},children:[(0,x.jsx)("span",{children:(0,x.jsx)("i",{className:"bi bi-person-check-fill"})}),(0,x.jsx)("span",{children:"View Shortlisted"})]})})]})},Z=n(5998),v=[],g=function(){var e=(0,a.useState)(1),t=(0,s.Z)(e,2),n=t[0],d=t[1],f=(0,a.useState)([]),j=(0,s.Z)(f,2),g=j[0],A=j[1],N=(0,a.useState)(!0),w=(0,s.Z)(N,2),T=w[0],S=w[1],I=(0,_.Z)(g,n,5),k=I.slice,y=I.range;(0,a.useEffect)((function(){p().get("".concat(Z.L+"provider/jobs"),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){var t=e.data.jobs;S(!1),v=(0,c.Z)(t),A(t)})).catch((function(e){S(!1),console.log(e)}))}),[]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.Z,{children:(0,x.jsxs)(i.Z,{className:b.Z.rowStyle,children:[(0,x.jsx)(o.Z,{className:"".concat(b.Z.manageUsers," col-md-3"),children:(0,x.jsx)("span",{className:b.Z.span,children:"Manage Applicants"})}),(0,x.jsx)(o.Z,{className:"".concat(b.Z.col," col-md-6  "),children:(0,x.jsx)(o.Z,{className:"d-flex justify-content-center align-items-center",children:(0,x.jsx)("input",{type:"text",id:"search",placeholder:"Search Applicants",className:b.Z.searchBar,onChange:function(e){A(v.filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())})))}})})})]})}),g.length>0&&(0,x.jsxs)(r.Z,{children:[(0,x.jsxs)("div",{className:b.Z.tableBox,children:[T&&(0,x.jsx)(h.Z,{}),(0,x.jsxs)(l.Z,{striped:!0,hover:!0,children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{className:b.Z.tableHeader,children:[(0,x.jsx)("th",{children:"Job Title"}),(0,x.jsx)("th",{children:"Applicants"}),(0,x.jsx)("th",{children:"Shortlisted"})]})}),(0,x.jsx)("tbody",{className:b.Z.tableBody,children:k.map((function(e){return(0,x.jsx)(m,{jobItem:e},e._id)}))})]})]}),(0,x.jsx)(u.Z,{range:y,slice:k,setPage:d,page:n})]}),0===g.length&&(0,x.jsx)("h3",{children:"No job Data!"})]})};function A(){return(0,a.useEffect)((function(){document.title=Z.R.gv}),[]),(0,x.jsx)(g,{})}},2591:function(e,t,n){var a=n(1413),c=n(5987),s=n(1694),r=n.n(s),i=n(2791),o=n(162),l=n(184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],p=i.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.striped,p=e.bordered,u=e.borderless,_=e.hover,h=e.size,b=e.variant,f=e.responsive,j=(0,c.Z)(e,d),x=(0,o.vE)(n,"table"),m=r()(s,x,b&&"".concat(x,"-").concat(b),h&&"".concat(x,"-").concat(h),i&&"".concat(x,"-striped"),p&&"".concat(x,"-bordered"),u&&"".concat(x,"-borderless"),_&&"".concat(x,"-hover")),Z=(0,l.jsx)("table",(0,a.Z)((0,a.Z)({},j),{},{className:m,ref:t}));if(f){var v="".concat(x,"-responsive");return"string"===typeof f&&(v="".concat(v,"-").concat(f)),(0,l.jsx)("div",{className:v,children:Z})}return Z}));t.Z=p},7361:function(e,t){t.Z={row:"ApplicantItem_row__gP9aE",actions:"ApplicantItem_actions__tr7wf",button:"ApplicantItem_button__LGjLc",applicants:"ApplicantItem_applicants__nEa6P",shortlisted:"ApplicantItem_shortlisted__vxezX",shortlistCandidate:"ApplicantItem_shortlistCandidate__ADcXs",rejectCandidate:"ApplicantItem_rejectCandidate__GpH1k"}},598:function(e,t){t.Z={rowStyle:"ApplicantTab_rowStyle__9Wnkq",manageUsers:"ApplicantTab_manageUsers__2rvNB",col:"ApplicantTab_col__H2faR",input:"ApplicantTab_input__i2TsP",span:"ApplicantTab_span__MqAe8",addUser:"ApplicantTab_addUser__STbz0",button:"ApplicantTab_button__OeeF1",tableHeader:"ApplicantTab_tableHeader__9ELAf",tableBody:"ApplicantTab_tableBody__d3Or1",tableBox:"ApplicantTab_tableBox__0n914"}}}]);
//# sourceMappingURL=415.96ac7a33.chunk.js.map