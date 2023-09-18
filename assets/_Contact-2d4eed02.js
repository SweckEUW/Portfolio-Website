import{_ as u,a as m,b as v,c as h,d as b,e as f,f as S,g as w,h as y,i as E,j as I,k,l as x,m as j,n as C,o as q,p as L,q as M,r as T,s as D,t as F,u as B,v as N,w as O,x as V,y as A,z as H,A as P,B as J,C as R,D as W,E as X,F as G,G as U,H as t,S as Q,aQ as Y,aR as z,bj as K,bg as $,bh as Z,L as ss,M as es}from"./index-8a1b0675.js";const r={_origin:"https://api.emailjs.com"},ts=(s,e="https://api.emailjs.com")=>{r._userID=s,r._origin=e},p=(s,e,a)=>{if(!s)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class d{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const g=(s,e,a={})=>new Promise((c,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:n})=>{const l=new d(n);l.status===200||l.text==="OK"?c(l):i(l)}),o.addEventListener("error",({target:n})=>{i(new d(n))}),o.open("POST",r._origin+s,!0),Object.keys(a).forEach(n=>{o.setRequestHeader(n,a[n])}),o.send(e)}),os=(s,e,a,c)=>{const i=c||r._userID;return p(i,s,e),g("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:i,service_id:s,template_id:e,template_params:a}),{"Content-type":"application/json"})},ns=s=>{let e;if(typeof s=="string"?e=document.querySelector(s):e=s,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},_s=(s,e,a,c)=>{const i=c||r._userID,o=ns(a);p(i,s,e);const n=new FormData(o);return n.append("lib_version","3.10.0"),n.append("service_id",s),n.append("template_id",e),n.append("user_id",i),g("/api/v1.0/email/send-form",n)},as={init:ts,send:os,sendForm:_s};const is={data:()=>({spinnerEnabled:!1}),methods:{getIcon(s){return new URL(Object.assign({"/src/assets/icons/Adobe After Effects.png":m,"/src/assets/icons/Adobe Illustrator.png":v,"/src/assets/icons/Adobe XD.png":h,"/src/assets/icons/Autodesk Maya.png":b,"/src/assets/icons/Babylon.js.png":f,"/src/assets/icons/Blender.png":S,"/src/assets/icons/C-Sharp.png":w,"/src/assets/icons/CSS.png":y,"/src/assets/icons/GitHub.png":E,"/src/assets/icons/HTML.png":I,"/src/assets/icons/Java.png":k,"/src/assets/icons/JavaFX.png":x,"/src/assets/icons/JavaScript.png":j,"/src/assets/icons/LinkedIn.png":C,"/src/assets/icons/Node.js.png":q,"/src/assets/icons/OpenCV.png":L,"/src/assets/icons/OpenGL.png":M,"/src/assets/icons/PyQt.png":T,"/src/assets/icons/Python.png":D,"/src/assets/icons/React.png":F,"/src/assets/icons/SolidWorks.png":B,"/src/assets/icons/Unity.png":N,"/src/assets/icons/Vue.png":O,"/src/assets/icons/education.svg":V,"/src/assets/icons/location.svg":A,"/src/assets/icons/mail.svg":H,"/src/assets/icons/mongoDB.png":P,"/src/assets/icons/person.svg":J,"/src/assets/icons/phone.svg":R,"/src/assets/icons/play.svg":W,"/src/assets/icons/work.svg":X})[`/src/assets/icons/${s}`],self.location)},sendEmail(){this.spinnerEnabled=!0,as.sendForm("service_3nfg1cg","template_wwwpk9y",this.$refs.form,"XaE1Tm4qNpspiVMOp").then(s=>{console.log("SUCCESS!",s.text),this.$refs.form.reset(),this.spinnerEnabled=!1},s=>{console.log("FAILED...",s.text),this.spinnerEnabled=!1})}}},_=s=>(ss("data-v-dfc5c5f7"),s=s(),es(),s),cs={class:"Contact"},rs=_(()=>t("h1",null,"[Contact]",-1)),ls={class:"ct-data"},ds=["src"],ps=_(()=>t("p",null,"Simon Weck",-1)),gs=["src"],us=_(()=>t("p",null,"Bahnhofstraße 4, 33602 Bielefeld",-1)),ms=["src"],vs=_(()=>t("p",null,"0176 71236857",-1)),hs=["src"],bs=_(()=>t("a",{href:"mailto:Simon.Weck98@yahoo.de"},"Simon.Weck98@yahoo.de",-1)),fs={class:"ct-form"},Ss={class:"inactive-blocker"},ws=_(()=>t("div",{class:"spinner"},null,-1)),ys=[ws],Es=_(()=>t("label",null,"Name",-1)),Is=_(()=>t("input",{type:"text",name:"user_name",placeholder:"Your Name",required:""},null,-1)),ks=_(()=>t("label",null,"Email",-1)),xs=_(()=>t("input",{type:"email",name:"user_email",placeholder:"Your Email",required:""},null,-1)),js=_(()=>t("label",null,"Message",-1)),Cs=_(()=>t("textarea",{name:"message",placeholder:"Message",required:""},null,-1)),qs=_(()=>t("input",{class:"ct-submit",type:"submit",value:"Send"},null,-1)),Ls=[Es,Is,ks,xs,js,Cs,qs];function Ms(s,e,a,c,i,o){return G(),U("div",cs,[rs,t("div",ls,[t("div",null,[t("img",{src:o.getIcon("person.svg"),alt:""},null,8,ds),ps]),t("div",null,[t("img",{src:o.getIcon("location.svg"),alt:""},null,8,gs),us]),t("div",null,[t("img",{src:o.getIcon("phone.svg"),alt:""},null,8,ms),vs]),t("div",null,[t("img",{src:o.getIcon("mail.svg"),alt:""},null,8,hs),bs])]),t("div",fs,[Q(z,{name:"fade-in"},{default:Y(()=>[$(t("div",Ss,ys,512),[[Z,s.spinnerEnabled]])]),_:1}),t("form",{ref:"form",onSubmit:e[0]||(e[0]=K((...n)=>o.sendEmail&&o.sendEmail(...n),["prevent"]))},Ls,544)])])}const Ds=u(is,[["render",Ms],["__scopeId","data-v-dfc5c5f7"]]);export{Ds as default};