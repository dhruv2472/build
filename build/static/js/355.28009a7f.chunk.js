"use strict";(self.webpackChunkJob_Portal_with_AI_Resume_Analyzer=self.webpackChunkJob_Portal_with_AI_Resume_Analyzer||[]).push([[355],{227:function(e,t,n){var a=n(2982),c=n(885),s=n(2791);t.Z=function(e,t,n){var r=(0,s.useState)([]),i=(0,c.Z)(r,2),o=i[0],l=i[1],d=(0,s.useState)([]),p=(0,c.Z)(d,2),u=p[0],h=p[1];return(0,s.useEffect)((function(){var c=function(e,t){for(var n=[],a=Math.ceil(e.length/t),c=1;c<=a;c++)n.push(c);return n}(e,n);l((0,a.Z)(c));var s=function(e,t,n){return e.slice((t-1)*n,t*n)}(e,t,n);h((0,a.Z)(s))}),[e,l,t,h,n]),{slice:u,range:o}}},4010:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(2791),c="TableFooter_tableFooter__0SLjT",s="TableFooter_button__Bj0wN",r="TableFooter_activeButton__K20VT",i="TableFooter_inactiveButton__SwQDk",o=n(184),l=function(e){var t=e.range,n=e.setPage,l=e.page,d=e.slice;return(0,a.useEffect)((function(){d.length<1&&1!==l&&n(l-1)}),[d,l,n]),(0,o.jsx)("div",{className:c,children:t.map((function(e,t){return(0,o.jsx)("button",{className:"".concat(s," ").concat(l===e?r:i),onClick:function(){return n(e)},children:e},t)}))})}},9355:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(2791),c=n(2982),s=n(885),r=n(7022),i=n(9743),o=n(2677),l=n(2591),d=n(6871),p=n(4569),u=n.n(p),h=n(4010),_=n(227),f=n(8233),b=n(598),m=n(5987),j=n(7361),x=n(5998),Z=n(184),v=["setAction"],A=function(e){var t=e.setAction,n=(0,m.Z)(e,v),a=n.applicantItem._id,c=n.token;return(0,Z.jsxs)("tr",{className:j.Z.row,children:[(0,Z.jsx)("td",{children:n.applicantItem.userId.name}),(0,Z.jsx)("td",{children:(0,Z.jsx)("button",{className:j.Z.button,onClick:function(){u().get("".concat(x.L+"provider/applicants/view-resume/"+a),{headers:{Authorization:"Bearer "+c},responseType:"blob"}).then((function(e){var t=new Blob([e.data],{type:"application/pdf"}),n=URL.createObjectURL(t);window.open(n)})).catch((function(e){console.log(e)}))},children:"View Resume"})}),(0,Z.jsxs)("td",{className:j.Z.actions,children:[(0,Z.jsxs)("button",{className:"".concat(j.Z.shortlistCandidate," ").concat(j.Z.button),onClick:function(){u().patch("".concat(x.L+"provider/applicants/shortlist/"+a),{},{headers:{Authorization:"Bearer "+c}}).then((function(e){t((function(e){return!e}))})).catch((function(e){console.log(e)}))},disabled:"Shortlisted"===n.applicantItem.status,children:[(0,Z.jsx)("span",{children:(0,Z.jsx)("i",{className:"bi bi-person-check-fill"})}),(0,Z.jsx)("span",{children:"Shortlist"})]}),(0,Z.jsxs)("button",{className:"".concat(j.Z.rejectCandidate," ").concat(j.Z.button),onClick:function(){u().patch("".concat(x.L+"provider/applicants/reject/"+a),{},{headers:{Authorization:"Bearer "+c}}).then((function(e){t((function(e){return!e}))})).catch((function(e){console.log(e)}))},children:[(0,Z.jsx)("span",{children:(0,Z.jsx)("i",{className:"bi bi-person-x-fill"})}),(0,Z.jsx)("span",{children:"Reject"})]})]})]})},g=[],N=function(){var e=(0,a.useState)(1),t=(0,s.Z)(e,2),n=t[0],p=t[1],m=(0,a.useState)([]),j=(0,s.Z)(m,2),x=j[0],v=j[1],N=(0,a.useState)(!0),w=(0,s.Z)(N,2),T=w[0],I=w[1],B=(0,a.useState)(!1),S=(0,s.Z)(B,2),k=S[0],C=S[1],y=(0,_.Z)(x,n,5),L=y.slice,z=y.range,R=(0,d.UO)().jobId,P=localStorage.getItem("token");(0,a.useEffect)((function(){u().get("http://localhost:8080/provider/view-applicants/".concat(R),{headers:{Authorization:"Bearer "+P}}).then((function(e){var t=e.data.applicants;I(!1),g=(0,c.Z)(t),v(t)})).catch((function(e){I(!1),console.log(e)}))}),[R,k,P]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(r.Z,{children:(0,Z.jsxs)(i.Z,{className:b.Z.rowStyle,children:[(0,Z.jsx)(o.Z,{className:"".concat(b.Z.manageUsers," col-md-3"),children:(0,Z.jsx)("span",{className:b.Z.span,children:"Manage Applicants"})}),(0,Z.jsx)(o.Z,{className:"".concat(b.Z.col," col-md-6  "),children:(0,Z.jsx)(o.Z,{className:"d-flex justify-content-center align-items-center",children:(0,Z.jsx)("input",{type:"text",id:"search",placeholder:"Search Applicants",className:b.Z.searchBar,onChange:function(e){v(g.filter((function(t){return t.userId.name.toLowerCase().includes(e.target.value.toLowerCase())})))}})})})]})}),x.length>0&&(0,Z.jsxs)(r.Z,{children:[(0,Z.jsxs)("div",{className:b.Z.tableBox,children:[T&&(0,Z.jsx)(f.Z,{}),(0,Z.jsxs)(l.Z,{striped:!0,hover:!0,children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{className:b.Z.tableHeader,children:[(0,Z.jsx)("th",{children:"Job Title"}),(0,Z.jsx)("th",{children:"Resume"}),(0,Z.jsx)("th",{children:"Actions"})]})}),(0,Z.jsx)("tbody",{className:b.Z.tableBody,children:L.map((function(e){return(0,Z.jsx)(A,{applicantItem:e,setAction:C,token:P},e._id)}))})]})]}),(0,Z.jsx)(h.Z,{range:z,slice:L,setPage:p,page:n})]}),0===x.length&&(0,Z.jsx)("h3",{className:"text-center fw-bold",children:"No Applicant Data!"})]})};function w(){return(0,a.useEffect)((function(){document.title=x.R.gv}),[]),(0,Z.jsx)(N,{})}},2591:function(e,t,n){var a=n(1413),c=n(5987),s=n(1694),r=n.n(s),i=n(2791),o=n(162),l=n(184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],p=i.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.striped,p=e.bordered,u=e.borderless,h=e.hover,_=e.size,f=e.variant,b=e.responsive,m=(0,c.Z)(e,d),j=(0,o.vE)(n,"table"),x=r()(s,j,f&&"".concat(j,"-").concat(f),_&&"".concat(j,"-").concat(_),i&&"".concat(j,"-striped"),p&&"".concat(j,"-bordered"),u&&"".concat(j,"-borderless"),h&&"".concat(j,"-hover")),Z=(0,l.jsx)("table",(0,a.Z)((0,a.Z)({},m),{},{className:x,ref:t}));if(b){var v="".concat(j,"-responsive");return"string"===typeof b&&(v="".concat(v,"-").concat(b)),(0,l.jsx)("div",{className:v,children:Z})}return Z}));t.Z=p},7361:function(e,t){t.Z={row:"ApplicantItem_row__gP9aE",actions:"ApplicantItem_actions__tr7wf",button:"ApplicantItem_button__LGjLc",applicants:"ApplicantItem_applicants__nEa6P",shortlisted:"ApplicantItem_shortlisted__vxezX",shortlistCandidate:"ApplicantItem_shortlistCandidate__ADcXs",rejectCandidate:"ApplicantItem_rejectCandidate__GpH1k"}},598:function(e,t){t.Z={rowStyle:"ApplicantTab_rowStyle__9Wnkq",manageUsers:"ApplicantTab_manageUsers__2rvNB",col:"ApplicantTab_col__H2faR",input:"ApplicantTab_input__i2TsP",span:"ApplicantTab_span__MqAe8",addUser:"ApplicantTab_addUser__STbz0",button:"ApplicantTab_button__OeeF1",tableHeader:"ApplicantTab_tableHeader__9ELAf",tableBody:"ApplicantTab_tableBody__d3Or1",tableBox:"ApplicantTab_tableBox__0n914"}}}]);
//# sourceMappingURL=355.28009a7f.chunk.js.map