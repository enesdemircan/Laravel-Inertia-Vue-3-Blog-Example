import{T as f,k as c,w as i,o as w,a,u as s,Z as _,b as r,f as d,q as g,n as V,d as v}from"./app-4167dba2.js";import{_ as b}from"./GuestLayout-0396e7e2.js";import{_ as t,a as m,b as n}from"./TextInput-c2471cd7.js";import{P as y}from"./PrimaryButton-3866e072.js";import"./ApplicationLogo-040110ea.js";import"./_plugin-vue_export-helper-c27b6911.js";const x=["onSubmit"],k={class:"mt-4"},q={class:"mt-4"},U={class:"mt-4"},B={class:"flex items-center justify-end mt-4"},A={__name:"Register",setup(P){const e=f({name:"",email:"",surname:"",password:"",password_confirmation:""}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(p,o)=>(w(),c(b,null,{default:i(()=>[a(s(_),{title:"Register"}),r("form",{onSubmit:v(u,["prevent"])},[r("div",null,[a(t,{for:"name",value:"Ad"}),a(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",null,[a(t,{for:"surname",value:"Soyad"}),a(m,{id:"surname",type:"text",class:"mt-1 block w-full",modelValue:s(e).surname,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).surname=l),required:"",autofocus:"",autocomplete:"surname"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.surname},null,8,["message"])]),r("div",k,[a(t,{for:"email",value:"Email"}),a(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[2]||(o[2]=l=>s(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",q,[a(t,{for:"password",value:"Password"}),a(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[3]||(o[3]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",U,[a(t,{for:"password_confirmation",value:"Confirm Password"}),a(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[4]||(o[4]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),r("div",B,[a(s(g),{href:p.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:i(()=>[d(" Already registered? ")]),_:1},8,["href"]),a(y,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:i(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{A as default};
