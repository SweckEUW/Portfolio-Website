import{V as _,_ as r,a as d,b as l}from"./VideoWithButton-be1104b2.js";import{P as h}from"./ProjectList-73d5ec33.js";import{_ as p,r as a,o as m,c as u,a as e,b as t,w as v,T as b,p as w,d as f}from"./index-2ce2fe1c.js";import"./me-9bb49f45.js";import"./work-de6b5007.js";import"./ProjectList-a0b3f227.js";import"./projects-2911511d.js";const g={components:{ProjectList:h,VideoWithButton:_},methods:{getMedia(o){return new URL(Object.assign({"/src/assets/home/Reel.webm":r,"/src/assets/home/ReelPoster.png":d,"/src/assets/home/header.webm":l})[`/src/assets/home/${o}`],self.location)}},mounted(){setTimeout(()=>{window.scrollTo(0,0)},0)}},s=o=>(w("data-v-47589906"),o=o(),f(),o),P={class:"Home"},S={class:"ho-header"},k=s(()=>e("div",{class:"ho-container"},[e("h1",null,"Simon Weck"),e("h1",{class:"ho-subheader"},"Technical Director")],-1)),B=["src"],I={class:"ho-reel"},T=s(()=>e("h1",null,"[Showreel]",-1)),V={class:"ho-work"},j=s(()=>e("h1",null,"[My Work]",-1));function x(o,y,M,R,W,i){const c=a("VideoWithButton"),n=a("ProjectList");return m(),u("div",P,[e("div",S,[t(b,{name:"appearFade",appear:""},{default:v(()=>[k]),_:1}),e("video",{src:i.getMedia("header.webm"),muted:"",loop:"",autoplay:""},null,8,B)]),e("div",I,[T,t(c,{class:"ho-video",videoPath:"home/Reel.webm",posterPath:"home/ReelPoster.png"},null,8,["videoPath","posterPath"])]),e("div",V,[j,t(n,{projectsSelection:["Monopoly Animation","AI Image Editor Toolkit","Universe Simulation","Emberpoint","Motile"]})])])}const U=p(g,[["render",x],["__scopeId","data-v-47589906"]]);export{U as default};