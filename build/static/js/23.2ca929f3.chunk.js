(this["webpackJsonpstar-admin-free-react"]=this["webpackJsonpstar-admin-free-react"]||[]).push([[23],{372:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var r=t(14),n=t(4),l=t(5),c=t(6),m=t(7),s=t(0),i=t.n(s),o=t(385),u=t(76),d=t(204),h=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),m=0;m<l;m++)c[m]=arguments[m];return(e=a.call.apply(a,[this].concat(c))).state={amount:"",show:!1},e.changeHandler=function(a){e.setState(Object(r.a)({},a.target.name,a.target.value))},e.onsubmit=function(a){a.preventDefault(),e.setState({show:!0})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"}," Risksys Withdrawal"),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Forms")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Form elements")))),i.a.createElement("div",{className:"row"},i.a.createElement(o.a,{show:this.state.show,onHide:function(){return e.setState({show:!1})}},i.a.createElement(o.a.Header,{closeButton:!0},i.a.createElement(o.a.Title,null,"withdrawal")),i.a.createElement(o.a.Body,null,"Withdrawal processing Initiated..."),i.a.createElement(o.a.Footer,null,i.a.createElement(u.a,{variant:"primary",onClick:function(){return e.setState({show:!1})}},"Okay"))),i.a.createElement("div",{className:"col-md-6 offset-md-3 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Withdraw Form"),i.a.createElement("form",{className:"forms-sample",onSubmit:this.onsubmit},i.a.createElement(d.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputUsername1"},"Amount"),i.a.createElement(d.a.Control,{type:"text",id:"exampleInputUsername1",placeholder:"Enter Amount",size:"lg",name:"amount",value:this.state.amount,onChange:this.changeHandler})),i.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Submit")))))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=23.2ca929f3.chunk.js.map