import{d as T,l as c,T as z,g as u,a as l,u as s,w as h,F as k,o as i,Z as I,b as e,j as V,m as C,n as b,h as g,c as Z,e as p,p as L,t as f,f as M}from"./app-ClX_5kVW.js";import{_ as Y}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-C3i2VDVW.js";import{_ as x,a as _,P as D,D as O}from"./DeleteConfirmatiomModal-Btw0vanO.js";import"./ApplicationLogo-CZadQoCW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const X=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Dashboard",-1),G={class:"py-12"},J={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},K={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},Q={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},R={class:"flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white"},W={class:"ml-5 mt-4"},ee=e("div",{class:"pr-1"},"Add",-1),te=e("svg",{class:"w-3 h-3 text-white mb-1 me-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 16"},[e("path",{d:"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"})],-1),oe=[ee,te],se={class:"fixed inset-0 bg-black bg-opacity-50"},le={class:"relative p-4 w-full max-w-2xl max-h-full"},ae={class:"relative bg-white rounded-lg shadow"},ne={class:"flex items-center justify-between p-4 md:p-5 border-b rounded-t"},de={key:0,class:"text-xl font-semibold text-gray-900"},ce={key:1,class:"text-xl font-semibold text-gray-900"},re=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),ie=e("span",{class:"sr-only"},"Close modal",-1),ue=[re,ie],me={class:"p-4 md:p-5 space-y-4"},he={class:"max-w-sm mx-auto"},pe={class:"mb-5"},fe={class:"mb-5"},xe={class:"mb-5"},_e={class:"mb-5"},be={class:"flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b"},ge=e("label",{for:"table-search",class:"sr-only"},"Search",-1),ye={class:"w-full text-sm text-left rtl:text-right text-gray-500"},ve=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"p-4"},[e("div",{class:"flex items-center"},[e("input",{id:"checkbox-all-search",type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"}),e("label",{for:"checkbox-all-search",class:"sr-only"},"checkbox")])]),e("th",{scope:"col",class:"px-6 py-3"}," Full Name "),e("th",{scope:"col",class:"px-6 py-3"}," Email "),e("th",{scope:"col",class:"px-6 py-3"}," Phone Number "),e("th",{scope:"col",class:"px-6 py-3"}," Company "),e("th",{scope:"col",class:"px-6 py-3"}," Action ")])],-1),we=e("td",{class:"w-4 p-4"},[e("div",{class:"flex items-center"},[e("input",{id:"checkbox-table-search-1",type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"}),e("label",{for:"checkbox-table-search-1",class:"sr-only"},"checkbox")])],-1),ke={class:"px-6 py-4"},Ve={class:"px-6 py-4"},Ce={class:"px-6 py-4"},Me={class:"flex items-center"},De=e("div",{class:"h-2.5 w-2.5 rounded-full bg-green-500 me-2"},null,-1),Be={class:"px-6 py-4"},Ne={class:"px-6 py-4"},je=["onClick"],Fe=["onClick"],$e=T({__name:"Visitors",props:{visitors:Array},setup(B){const N=c("Are you sure you want to delete this Visitor(s)?"),j=c("Yes, I'm sure"),F=c("No, cancel"),n=c(!1),r=c(!1),m=c(!1),y=c(""),t=z({id:0,full_name:"",email:"",phone_number:"",company:""}),H=()=>{const a=y.value;t.delete(route("visitors.destroy",{visitor:a}),{onFinish:()=>{m.value=!1}})},A=a=>{console.log(a.id),y.value=String(a.id),m.value=!0},E=()=>{m.value=!1},S=()=>{t.post(route("visitors.store"),{onFinish:()=>{}}),n.value=!1},U=()=>{console.log("Starting"),console.log(t.id),t.put(route("visitors.update",{visitor:t.id}),{onFinish:()=>{t.reset("full_name","email","phone_number","company"),n.value=!1}})},$=a=>{n.value=!1,v(),r.value=!0,t.id=a.id,t.full_name=a.full_name,t.phone_number=a.phone_number,t.email=a.email,t.company=a.company,n.value=!0},v=()=>{t.full_name="",t.phone_number="",t.email="",t.company=""},q=()=>{console.log("i hit "),n.value=!1,v(),n.value=!0},w=()=>{n.value=!1,r.value=!1};return(a,d)=>(i(),u(k,null,[l(s(I),{title:"Dashboard"}),l(Y,null,{header:h(()=>[X]),default:h(()=>[e("div",G,[e("div",J,[e("div",K,[e("div",Q,[e("div",R,[e("div",W,[e("button",{onClick:q,"data-modal-target":"static-modal","data-modal-toggle":"static-modal",class:"pl-4 px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300",type:"button"},oe),V(e("div",se,null,512),[[C,n.value]]),e("div",{class:b([{hidden:!n.value},"flex overflow-y-auto overflow-x-hidden fixed top-1/2 right-1/2 left-1/2 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"]),id:"static-modal","data-modal-backdrop":"static",tabindex:"-1","aria-hidden":"true"},[e("div",le,[e("div",ae,[e("div",ne,[r.value?g("",!0):(i(),u("h3",de," Add Visitor ")),r.value?(i(),u("h3",ce," Edit Visitor ")):g("",!0),e("button",{onClick:w,type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center","data-modal-hide":"static-modal"},ue)]),e("div",me,[e("form",he,[e("div",pe,[l(x,{for:"name",value:"Full Name"}),l(_,{id:"name",type:"text",modelValue:s(t).full_name,"onUpdate:modelValue":d[0]||(d[0]=o=>s(t).full_name=o),required:"",autofocus:"",placeholder:"Omoboriola Chukwudi Danjuma",autocomplete:"off"},null,8,["modelValue"])]),e("div",fe,[l(x,{for:"name",value:"Email"}),l(_,{id:"email",type:"email",modelValue:s(t).email,"onUpdate:modelValue":d[1]||(d[1]=o=>s(t).email=o),required:"",autofocus:"",placeholder:"example@example.com",autocomplete:"off"},null,8,["modelValue"])]),e("div",xe,[l(x,{for:"name",value:"Phone Number"}),l(_,{id:"phone",type:"text",modelValue:s(t).phone_number,"onUpdate:modelValue":d[2]||(d[2]=o=>s(t).phone_number=o),required:"",autofocus:"",placeholder:"07000000000",autocomplete:"off"},null,8,["modelValue"])]),e("div",_e,[l(x,{for:"name",value:"Company"}),l(_,{id:"company",type:"text",modelValue:s(t).company,"onUpdate:modelValue":d[3]||(d[3]=o=>s(t).company=o),required:"",autofocus:"",placeholder:"XYZ Limited",autocomplete:"off"},null,8,["modelValue"])])])]),e("div",be,[r.value?g("",!0):(i(),Z(D,{key:0,onClick:S,class:b(["text-center",{"opacity-25":s(t).processing}]),disabled:s(t).processing},{default:h(()=>[p(" Create ")]),_:1},8,["class","disabled"])),V(l(D,{onClick:U,class:b(["text-center",{"opacity-25":s(t).processing}]),disabled:s(t).processing},{default:h(()=>[p(" Update ")]),_:1},8,["class","disabled"]),[[C,r.value]]),e("button",{onClick:w,type:"button",class:"ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"},"Cancel")])])])],2),e("div",null,[l(O,{"show-modal":m.value,message:N.value,"confirm-button-text":j.value,"cancel-button-text":F.value,"confirm-action":H,"close-modal":E},null,8,["show-modal","message","confirm-button-text","cancel-button-text"])])]),ge]),e("table",ye,[ve,e("tbody",null,[(i(!0),u(k,null,L(B.visitors,o=>(i(),u("tr",{key:o.id,class:"bg-white border-b hover:bg-gray-50"},[we,e("td",ke,f(o.full_name),1),e("td",Ve,f(o.email),1),e("td",Ce,[e("div",Me,[De,p(" "+f(o.phone_number),1)])]),e("td",Be,f(o.company),1),e("td",Ne,[e("a",{href:"#",onClick:M(P=>$(o),["stop"]),class:"font-medium text-blue-600 hover:underline"},"Edit",8,je),p(" / "),e("a",{href:"#",onClick:M(P=>A(o),["stop"]),class:"font-medium text-red-600 hover:underline"},"Delete",8,Fe)])]))),128))])])])])])])]),_:1})],64))}});export{$e as default};
