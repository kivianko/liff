import{r as $,o as d,c as I,d as E,a as A,b as g,u as C,e as x,f as w,l as b,g as m,h as e,w as L,i as p,v as f,j as n,k as F,t as _,m as V,n as q,p as P,F as S,q as M,s as U,x as N,y as O,z as j}from"./vendor.b870c4a9.js";const T=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const t of u)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(u){const t={};return u.integrity&&(t.integrity=u.integrity),u.referrerpolicy&&(t.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?t.credentials="include":u.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(u){if(u.ep)return;u.ep=!0;const t=s(u);fetch(u.href,t)}};T();var W=(l,o)=>{const s=l.__vccOpts||l;for(const[c,u]of o)s[c]=u;return s};const R={};function z(l,o){const s=$("router-view");return d(),I(s)}var H=W(R,[["render",z]]);const K={class:"bg-white py-6 sm:py-8 lg:py-12"},X={class:"max-w-screen-2xl px-4 md:px-8 mx-auto"},Y=e("div",{class:"mb-10 md:mb-16"},[e("h2",{class:"text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"},"\u304A\u554F\u3044\u5408\u308F\u305B"),e("p",{class:"max-w-screen-md text-gray-500 md:text-lg text-center mx-auto"}," \u5F53\u793E\u30FB\u5F53\u30B5\u30A4\u30C8\u3078\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u306B\u3064\u304D\u307E\u3057\u3066\u306F\u3001\u304A\u96FB\u8A71\u307E\u305F\u306F\u4E0B\u8A18\u30D5\u30A9\u30FC\u30E0\u3088\u308A\u304A\u554F\u3044\u5408\u308F\u305B\u3044\u305F\u3060\u3051\u307E\u3059\u3002 ")],-1),Z=e("label",{for:"first-name",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u6027*",-1),G={class:"text-red-500"},J=e("label",{for:"last-name",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u540D*",-1),Q={class:"text-red-500"},ee={class:"sm:col-span-2"},ue=e("label",{for:"company",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u4F1A\u793E\u540D",-1),te={class:"sm:col-span-2"},se=e("label",{for:"email",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9*",-1),ne={class:"text-red-500"},oe={class:"sm:col-span-2"},re=e("label",{for:"subject",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u96FB\u8A71\u756A\u53F7*",-1),ae={class:"text-red-500"},ie={class:"sm:col-span-2"},le=e("label",{for:"message",class:"inline-block text-gray-800 text-sm sm:text-base mb-2"},"\u304A\u554F\u3044\u5408\u308F\u305B\u8A73\u7D30*",-1),ce={class:"text-red-500"},de=e("div",{class:"sm:col-span-2 flex justify-between items-center"},[e("button",{type:"submit",class:"inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"}," \u9001\u4FE1 "),e("span",{class:"text-red-500 text-sm"},"*\u5FC5\u9808\u9805\u76EE")],-1),me=E({setup(l){const o=A({first_name:g().required("\u6027\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059"),last_name:g().required("\u540D\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059"),email:g().required("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059").email("\u6709\u52B9\u306A\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044"),phone:g().required("\u96FB\u8A71\u756A\u53F7\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059").matches(/^0\d{2,3}-\d{1,4}-\d{4}$/,"\u6709\u52B9\u306A\u96FB\u8A71\u756A\u53F7\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044"),detail:g().required("\u8A73\u7D30\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059")}),{errors:s,handleSubmit:c}=C({validationSchema:o}),{value:u}=x("first_name"),{value:t}=x("last_name"),a=w(""),{value:y}=x("email"),{value:v}=x("phone"),{value:h}=x("detail"),B=c(async k=>{b.isInClient()?await b.sendMessages([{type:"text",text:`__\u304A\u554F\u3044\u5408\u308F\u305B__
`+u.value+`
`+t.value+`
`+a.value+`
`+y.value+`
`+v.value+`
`+h.value}]).then(()=>{b.closeWindow()}).catch(r=>{window.alert("Error sending message: "+r)}):window.alert("\u73FE\u5728\u3001LIFF\u3092\u5916\u90E8\u30D6\u30E9\u30A6\u30B6\u3067\u958B\u3044\u3066\u3044\u308B\u305F\u3081\u3001\u3053\u306E\u30DC\u30BF\u30F3\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002")});return(k,r)=>(d(),m("div",K,[e("div",X,[Y,e("form",{onSubmit:r[6]||(r[6]=L((...i)=>n(B)&&n(B)(...i),["prevent"])),class:"max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"},[e("div",null,[Z,p(e("input",{"onUpdate:modelValue":r[0]||(r[0]=i=>F(u)?u.value=i:null),name:"first-name",class:"w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[f,n(u)]]),e("p",G,_(n(s).first_name),1)]),e("div",null,[J,p(e("input",{"onUpdate:modelValue":r[1]||(r[1]=i=>F(t)?t.value=i:null),name:"last-name",class:"w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[f,n(t)]]),e("p",Q,_(n(s).last_name),1)]),e("div",ee,[ue,p(e("input",{"onUpdate:modelValue":r[2]||(r[2]=i=>a.value=i),name:"company",class:"w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[f,a.value]])]),e("div",te,[se,p(e("input",{"onUpdate:modelValue":r[3]||(r[3]=i=>F(y)?y.value=i:null),name:"email",class:"w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[f,n(y)]]),e("p",ne,_(n(s).email),1)]),e("div",oe,[re,p(e("input",{"onUpdate:modelValue":r[4]||(r[4]=i=>F(v)?v.value=i:null),name:"subject",class:"w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[f,n(v)]]),e("p",ae,_(n(s).phone),1)]),e("div",ie,[le,p(e("textarea",{"onUpdate:modelValue":r[5]||(r[5]=i=>F(h)?h.value=i:null),name:"message",class:"w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"},null,512),[[f,n(h)]]),e("p",ce,_(n(s).detail),1)]),de],32)])]))}}),pe=()=>{const l=w("NOT_INITIALIZED"),o=V({profile:void 0});q(async()=>{if(b.isInClient()){l.value=!0,s();return}l.value=!1});const s=async()=>{const c=await b.getProfile();o.profile=c};return{isInClient:l,userProfile:o}},fe={key:0},ge=e("h1",null,"Welcome to Your Liff + Vue.js App",-1),_e=["src"],xe={key:1},Fe={key:1},be=E({setup(l){const{isInClient:o,userProfile:s}=pe();return(c,u)=>n(o)?(d(),m("div",fe,[ge,p(e("ul",null,[(d(!0),m(S,null,M(n(s).profile,(t,a)=>(d(),m("li",{key:a},[a==="pictureUrl"?(d(),m("img",{key:0,src:t,alt:"line-profile-picture"},null,8,_e)):(d(),m("span",xe,_(`${a}: ${t}`),1))]))),128))],512),[[P,n(s).profile]])])):n(o)===!1?(d(),m("div",Fe,"Please open in LIFF browser!!")):U("",!0)}}),ye={class:"input-field"},ve={class:"error-message"},he=e("button",{type:"submit"},"\u9001\u4FE1",-1),Ee=E({setup(l){const o=A({text:g().required("\u30C6\u30AD\u30B9\u30C8\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059"),name:g().required("\u540D\u524D\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059")});C({validationSchema:o});const{value:s,errorMessage:c}=x("name");return(u,t)=>(d(),m("form",null,[e("div",ye,[p(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>F(s)?s.value=a:null)},null,512),[[f,n(s)]]),e("p",ve,_(n(c)),1)]),he]))}}),Be=[{path:"/",name:"contact",component:me,meta:{title:"\u304A\u554F\u3044\u5408\u308F\u305B"}},{path:"/Page1",name:"page1",component:be},{path:"/Page2",name:"page2",component:Ee}],Ae=N({history:O("/liff/"),routes:Be});b.init({liffId:"1657003961-vMy8e8X2"});const D=j(H);D.use(Ae);D.mount("#app");