(this["webpackJsonpstar-admin-free-react"]=this["webpackJsonpstar-admin-free-react"]||[]).push([[22],{371:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(14),r=t(4),l=t(5),c=t(6),m=t(7),o=t(0),s=t.n(o),i=t(385),u=t(76),h=t(204),p=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(r.a)(this,t);for(var l=arguments.length,c=new Array(l),m=0;m<l;m++)c[m]=arguments[m];return(e=a.call.apply(a,[this].concat(c))).state={amount:"",phone:"",show:!1},e.changeHandler=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.onSubmit=function(a){a.preventDefault(),e.setState({show:!0})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"page-header"},s.a.createElement("h3",{className:"page-title"}," Riskys Deposit "),s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Forms")),s.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Deposit")))),s.a.createElement("div",{className:"row"},s.a.createElement(i.a,{show:this.state.show,onHide:function(){return e.setState({show:!1})}},s.a.createElement(i.a.Header,{closeButton:!0},s.a.createElement(i.a.Title,null,"Deposit")),s.a.createElement(i.a.Body,null,"STK PUSH initiated.check your phone for pin entrance!"),s.a.createElement(i.a.Footer,null,s.a.createElement(u.a,{variant:"primary",onClick:function(){return e.setState({show:!1})}},"Okay"))),s.a.createElement("div",{className:"col-md-6 offset-md-3 grid-margin stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Money Deposit Form"),s.a.createElement("form",{className:"forms-sample",onSubmit:this.onSubmit},s.a.createElement(h.a.Group,null,s.a.createElement("label",{htmlFor:"exampleInputUsername1"},"Amount"),s.a.createElement(h.a.Control,{type:"text",id:"exampleInputUsername1",placeholder:"Enter Amount",size:"lg",name:"amount",value:this.state.amount,onChange:this.changeHandler})),s.a.createElement(h.a.Group,null,s.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Phone"),s.a.createElement(h.a.Control,{type:"text",className:"form-control",name:"phone",value:this.state.phone,id:"exampleInputEmail1",placeholder:"Phone Number",onChange:this.changeHandler})),s.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Submit")))))))}}]),t}(o.Component)}}]);
//# sourceMappingURL=22.bdcd57ae.chunk.js.map