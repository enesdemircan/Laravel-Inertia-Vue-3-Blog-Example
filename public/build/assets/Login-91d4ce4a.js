import{l as w,e as k,m as y,u as s,o as i,c as b,p as x,T as v,k as u,w as d,a as o,Z as V,t as B,g as c,b as r,q as C,f as p,n as $,d as q}from"./app-4167dba2.js";import{_ as P}from"./GuestLayout-0396e7e2.js";import{_ as f,a as g,b as _}from"./TextInput-c2471cd7.js";import{P as N}from"./PrimaryButton-3866e072.js";import"./ApplicationLogo-040110ea.js";import"./_plugin-vue_export-helper-c27b6911.js";const R=["value"],S={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const m=l,n=w({get(){return m.checked},set(t){e("update:checked",t)}});return(t,a)=>k((i(),b("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":a[0]||(a[0]=h=>x(n)?n.value=h:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,R)),[[y,s(n)]])}},U={key:0,class:"mb-4 font-medium text-sm text-green-600"},L=["onSubmit"],D={class:"mt-4"},E={class:"block mt-4"},F={class:"flex items-center"},M=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),T={class:"flex items-center justify-end mt-4"},I={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=v({email:"",password:"",remember:!1}),m=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(i(),u(P,null,{default:d(()=>[o(s(V),{title:"Log in"}),l.status?(i(),b("div",U,B(l.status),1)):c("",!0),r("form",{onSubmit:q(m,["prevent"])},[r("div",null,[o(f,{for:"email",value:"Email"}),o(g,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=a=>s(e).email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(_,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",D,[o(f,{for:"password",value:"Password"}),o(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=a=>s(e).password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(_,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",E,[r("label",F,[o(S,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=a=>s(e).remember=a)},null,8,["checked"]),M])]),r("div",T,[l.canResetPassword?(i(),u(s(C),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>[p(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),o(N,{class:$(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[p(" Log in ")]),_:1},8,["class","disabled"])])],40,L)]),_:1}))}};export{I as default};