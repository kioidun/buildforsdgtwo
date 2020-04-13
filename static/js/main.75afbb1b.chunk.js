(this.webpackJsonpbuildforsdg=this.webpackJsonpbuildforsdg||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(2),s=a.n(o),r=(a(12),a(3)),c=a(4),i=a(6),m=a(5),d=(a(13),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).handleChange=function(e){l.setState({population:e.target.value})},l.handleChange2=function(e){l.setState({timeToElapse:e.target.value})},l.handleChange3=function(e){l.setState({reportedCases:e.target.value})},l.handleChange4=function(e){l.setState({totalHospitalBeds:e.target.value})},l.handleSelectChange=function(e){l.setState({periodType:e.target.value})},l.handleSubmit=function(e){e.preventDefault();l.state;alert("".concat(l.state.population," ").concat(l.state.timeToElapse," ").concat(l.state.reportedCases," ").concat(l.state.totalHospitalBeds," ").concat(l.state.periodType))},l.state={population:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:"",periodType:"days"},l}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t={},a={};return n.a.createElement("div",{class:"container"},n.a.createElement("nav",{class:"navbar"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#form"},"Form")))),n.a.createElement("section",{id:"home"},n.a.createElement("h1",null,"COVID-19 Health Simulator"),n.a.createElement("p",null,"Build for SDG")),n.a.createElement("section",{id:"formLoading"},n.a.createElement("h1",null,"Fill in the form"),n.a.createElement("form",{class:"formtwo",id:"form",onSubmit:this.handleSubmit},n.a.createElement("div",{class:"form-control"},n.a.createElement("label",{for:"population"},"Population"),n.a.createElement("input",{type:"text",id:"population",value:this.state.population,onChange:this.handleChange,placeholder:"data-population"}),n.a.createElement("i",{class:"fas fa-check-circle"}),n.a.createElement("i",{class:"fas fa-exclamation-circle"}),n.a.createElement("small",null,"Error message")),n.a.createElement("div",{class:"form-control"},n.a.createElement("label",{for:"timeToElapse"},"Time To Elapse"),n.a.createElement("input",{type:"text",id:"timeToElapse",value:this.state.timeToElapse,onChange:this.handleChange2,placeholder:"data-time-to-elapse"}),n.a.createElement("i",{class:"fas fa-check-circle"}),n.a.createElement("i",{class:"fas fa-exclamation-circle"}),n.a.createElement("small",null,"Error message")),n.a.createElement("div",{class:"form-control"},n.a.createElement("label",{for:"reportedCases"},"Reported Cases"),n.a.createElement("input",{type:"text",id:"reportedCases",value:this.state.reportedCases,onChange:this.handleChange3,placeholder:"data-reported-cases"}),n.a.createElement("i",{class:"fas fa-check-circle"}),n.a.createElement("i",{class:"fas fa-exclamation-circle"}),n.a.createElement("small",null,"Error message")),n.a.createElement("div",{class:"form-control"},n.a.createElement("label",{for:"totalHospitalBeds"},"Total Hospital Beds"),n.a.createElement("input",{type:"text",id:"totalHospitalBeds",value:this.state.totalHospitalBeds,onChange:this.handleChange4,placeholder:"data-total-hospital-beds"}),n.a.createElement("i",{class:"fas fa-check-circle"}),n.a.createElement("i",{class:"fas fa-exclamation-circle"}),n.a.createElement("small",null,"Error message")),n.a.createElement("div",{class:"form-control"},n.a.createElement("label",{for:"periodType"},"Period Type"),n.a.createElement("select",{id:"periodType",value:this.state.periodType,onChange:this.handleSelectChange,name:"data-period-type"},n.a.createElement("option",{disabled:!0,hidden:!0,selected:!0},"Select"),n.a.createElement("option",{value:"days"},"days"),n.a.createElement("option",{value:"weeks"},"weeks"),n.a.createElement("option",{value:"months"},"months"))),n.a.createElement("button",{type:"submit"},"data-go-submit"),n.a.createElement("div",{class:"form-control"},n.a.createElement("label",{for:"data-result"},"data-result"),n.a.createElement("input",{type:"text",id:"data-result",value:function(l){return function(e){var l=10*e.reportedCases,n=50*e.reportedCases,o=e.timeToElapse,s=e.totalHospitalBeds,r=e.region.avgDailyIncomeInUSD,c=e.region.avgDailyIncomePopulation;"months"===e.periodType?o=30*e.timeToElapse:"weeks"===e.periodType&&(o=7*e.timeToElapse);var i=l*Math.pow(2,Math.trunc(o/3)),m=n*Math.pow(2,Math.trunc(o/3)),d=.15*i,p=Math.trunc(.35*s),u=p-(d-1),h=Math.trunc(.05*i),E=Math.trunc(.02*i),f=.15*m,v=p-(f-1),g=Math.trunc(.05*m),y=Math.trunc(.02*m),C=Math.trunc(i*c*r/o),T=Math.trunc(m*c*r/o);t.currentlyInfected=l,t.infectionsByRequestedTime=i,t.severeCasesByRequestedTime=d,t.hospitalBedsByRequestedTime=u,t.casesForICUByRequestedTime=h,t.casesForVentilatorsByRequestedTime=E,t.dollarsInFlight=C,a.currentlyInfected=n,a.infectionsByRequestedTime=m,a.severeCasesByRequestedTime=f,a.hospitalBedsByRequestedTime=v,a.casesForICUByRequestedTime=g,a.casesForVentilatorsByRequestedTime=y,a.dollarsInFlight=T}(l=[{data_population:e.state.reportedCases,data_time_to_elapse:e.state.timetoElapse,data_reported_cases:e.state.reportedCases,data_total_hospital_beds:e.state.totalHospitalBeds,data_period_type:e.state.periodType}]),{data:l,impact:t,severeImpact:a}}})))))}}]),a}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.75afbb1b.chunk.js.map