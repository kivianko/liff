import{c as N,r as M,o as d,d as w,a as I,b as D,e as k,f as x,u as S,g as b,h as L,l as g,i as p,j as e,w as U,k as f,v as _,m as r,n as y,t as F,p as O,F as j,q as T,s as W,x as R,y as Z,z}from"./vendor.89738104.js";const H=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const u of t)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const u={};return t.integrity&&(u.integrity=t.integrity),t.referrerpolicy&&(u.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?u.credentials="include":t.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(t){if(t.ep)return;t.ep=!0;const u=i(t);fetch(t.href,u)}};H();var P=(s,o)=>{const i=s.__vccOpts||s;for(const[l,t]of o)i[l]=t;return i};const K={};function X(s,o){const i=M("router-view");return d(),N(i)}var Y=P(K,[["render",X]]);const G={class:"bg-white py-6 sm:py-8 lg:py-12"},J={class:"max-w-screen-2xl px-4 md:px-8 mx-auto"},Q=e("div",{class:"mb-10 md:mb-16"},[e("h2",{class:"text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"},"\u304A\u554F\u3044\u5408\u308F\u305B"),e("p",{class:"max-w-screen-md text-gray-500 md:text-lg text-center mx-auto"}," \u5F53\u793E\u30FB\u5F53\u30B5\u30A4\u30C8\u3078\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u306B\u3064\u304D\u307E\u3057\u3066\u306F\u3001\u304A\u96FB\u8A71\u307E\u305F\u306F\u4E0B\u8A18\u30D5\u30A9\u30FC\u30E0\u3088\u308A\u304A\u554F\u3044\u5408\u308F\u305B\u3044\u305F\u3060\u3051\u307E\u3059\u3002 ")],-1),ee=e("label",{for:"first-name",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u6027*",-1),te={class:"text-red-500"},ue=e("label",{for:"last-name",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u540D*",-1),ne={class:"text-red-500"},se={class:"sm:col-span-2"},oe=e("label",{for:"company",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u4F1A\u793E\u540D",-1),ie={class:"sm:col-span-2"},re=e("label",{for:"email",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9*",-1),ae={class:"text-red-500"},le={class:"sm:col-span-2"},ce=e("label",{for:"subject",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u96FB\u8A71\u756A\u53F7*",-1),de={class:"text-red-500"},me={class:"sm:col-span-2"},pe=e("label",{for:"message",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u304A\u554F\u3044\u5408\u308F\u305B\u8A73\u7D30*",-1),fe={class:"text-red-500"},ge=e("div",{class:"sm:col-span-2 flex justify-between items-center"},[e("button",{type:"submit",class:"inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"}," \u9001\u4FE1 "),e("span",{class:"text-red-500 text-sm"},"*\u5FC5\u9808\u9805\u76EE")],-1),_e=w({setup(s){const o=I("NOT_INITIALIZED"),i=D({profile:void 0}),l=k({first_name:x().required("\u6027\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059"),last_name:x().required("\u540D\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059"),email:x().required("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059").email("\u6709\u52B9\u306A\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044"),phone:x().required("\u96FB\u8A71\u756A\u53F7\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059").matches(/^0\d{2,3}-\d{1,4}-\d{4}$/,"\u6709\u52B9\u306A\u96FB\u8A71\u756A\u53F7\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044"),detail:x().required("\u8A73\u7D30\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059")}),{errors:t,meta:u,handleSubmit:c}=S({validationSchema:l}),{value:m}=b("first_name"),{value:v}=b("last_name"),B="",{value:h}=b("email"),{value:E}=b("phone"),{value:A}=b("detail");L(async()=>{if(g.isInClient()){o.value=!0,q();return}o.value=!1});const q=async()=>{const C=await g.getProfile();i.profile=C},$=c(async C=>{g.isInClient()?await g.sendMessages([{type:"text",text:`__\u304A\u554F\u3044\u5408\u308F\u305B__
`+m+`
`+v+`
`+B+`
`+h+`
`+E+`
`+A}]).then(()=>{g.closeWindow()}).catch(n=>{window.alert("Error sending message: "+n)}):window.alert("\u73FE\u5728\u3001LIFF\u3092\u5916\u90E8\u30D6\u30E9\u30A6\u30B6\u3067\u958B\u3044\u3066\u3044\u308B\u305F\u3081\u3001\u3053\u306E\u30DC\u30BF\u30F3\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002")});return(C,n)=>(d(),p("div",G,[e("div",J,[Q,e("form",{onSubmit:n[6]||(n[6]=U((...a)=>r($)&&r($)(...a),["prevent"])),class:"max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"},[e("div",null,[ee,f(e("input",{"onUpdate:modelValue":n[0]||(n[0]=a=>y(m)?m.value=a:null),name:"first-name",class:"w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[_,r(m)]]),e("p",te,F(r(t).first_name),1)]),e("div",null,[ue,f(e("input",{"onUpdate:modelValue":n[1]||(n[1]=a=>y(v)?v.value=a:null),name:"last-name",class:"w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[_,r(v)]]),e("p",ne,F(r(t).last_name),1)]),e("div",se,[oe,f(e("input",{"onUpdate:modelValue":n[2]||(n[2]=a=>B=a),name:"company",class:"w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[_,B]])]),e("div",ie,[re,f(e("input",{"onUpdate:modelValue":n[3]||(n[3]=a=>y(h)?h.value=a:null),name:"email",class:"w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[_,r(h)]]),e("p",ae,F(r(t).email),1)]),e("div",le,[ce,f(e("input",{"onUpdate:modelValue":n[4]||(n[4]=a=>y(E)?E.value=a:null),name:"subject",class:"w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[_,r(E)]]),e("p",de,F(r(t).phone),1)]),e("div",me,[pe,f(e("textarea",{"onUpdate:modelValue":n[5]||(n[5]=a=>y(A)?A.value=a:null),name:"message",class:"w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[_,r(A)]]),e("p",fe,F(r(t).detail),1)]),ge],32)])]))}}),xe=w({setup(){const s=I("NOT_INITIALIZED"),o=D({profile:void 0}),i=async()=>{const l=await g.getProfile();o.profile=l};return L(async()=>{if(g.isInClient()){s.value=!0,i();return}s.value=!1}),{liffState:o,isInClient:s}}}),Fe={key:0},be=e("h1",null,"Welcome to Your Liff + Vue.js App",-1),ye=["src"],ve={key:1},he={key:1};function Ee(s,o,i,l,t,u){return s.isInClient?(d(),p("div",Fe,[be,f(e("ul",null,[(d(!0),p(j,null,T(s.liffState.profile,(c,m)=>(d(),p("li",{key:m},[m==="pictureUrl"?(d(),p("img",{key:0,src:c,alt:"line-profile-picture"},null,8,ye)):(d(),p("span",ve,F(`${m}: ${c}`),1))]))),128))],512),[[O,s.liffState.profile]])])):s.isInClient===!1?(d(),p("div",he,"Please open in LIFF browser!!")):W("",!0)}var Ae=P(xe,[["render",Ee]]);const Be={class:"input-field"},Ce={class:"error-message"},we=e("button",{type:"submit"},"\u9001\u4FE1",-1),$e=w({setup(s){const o=k({text:x().required("\u30C6\u30AD\u30B9\u30C8\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059"),name:x().required("\u540D\u524D\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059")});S({validationSchema:o});const{value:i,errorMessage:l}=b("name");return(t,u)=>(d(),p("form",null,[e("div",Be,[f(e("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=c=>y(i)?i.value=c:null)},null,512),[[_,r(i)]]),e("p",Ce,F(r(l)),1)]),we]))}}),Ie=[{path:"/",name:"contact",component:_e,meta:{title:"\u304A\u554F\u3044\u5408\u308F\u305B"}},{path:"/Page1",name:"page1",component:Ae},{path:"/Page2",name:"page2",component:$e}],De=R({history:Z("/liff/"),routes:Ie});g.init({liffId:"1657003961-vMy8e8X2"});const V=z(Y);V.use(De);V.mount("#app");