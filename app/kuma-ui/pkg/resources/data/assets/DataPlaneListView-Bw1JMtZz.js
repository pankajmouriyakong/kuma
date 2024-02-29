import{d as K,a as r,o as s,b as m,w as a,e as o,m as z,f as n,E as L,t as l,F as y,W as B,c,H as E,p as _,T as R,K as b,q as k,U as I,D as N,_ as $}from"./index-ppP-fnGF.js";import{A as F}from"./AppCollection-wZWT7AKe.js";import{F as A}from"./FilterBar-KxWMTAwl.js";import{S as W}from"./StatusBadge-cMTKNRiq.js";import{S as O}from"./SummaryView-u084UnVn.js";const U={key:0},Z={key:1},H=K({__name:"DataPlaneListView",setup(J){return(j,G)=>{const T=r("RouteTitle"),C=r("KSelect"),u=r("RouterLink"),S=r("KTruncate"),x=r("KTooltip"),w=r("RouterView"),V=r("KCard"),q=r("AppView"),h=r("DataSource"),P=r("RouteView");return s(),m(h,{src:"/me"},{default:a(({data:v})=>[v?(s(),m(P,{key:0,name:"data-plane-list-view",params:{page:1,size:v.pageSize,query:"",dataplaneType:"all",s:"",mesh:"",dataPlane:""}},{default:a(({can:f,route:t,t:i})=>[o(h,{src:`/meshes/${t.params.mesh}/dataplanes/of/${t.params.dataplaneType}?page=${t.params.page}&size=${t.params.size}&search=${t.params.s}`},{default:a(({data:d,error:g})=>[o(q,null,{title:a(()=>[z("h2",null,[o(T,{title:i("data-planes.routes.items.title")},null,8,["title"])])]),default:a(()=>[n(),o(V,null,{default:a(()=>[g!==void 0?(s(),m(L,{key:0,error:g},null,8,["error"])):(s(),m(F,{key:1,class:"data-plane-collection","data-testid":"data-plane-collection","page-number":t.params.page,"page-size":t.params.size,headers:[{label:"Name",key:"name"},{label:"Type",key:"type"},{label:"Services",key:"services"},...f("use zones")?[{label:"Zone",key:"zone"}]:[],{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],items:d==null?void 0:d.items,total:d==null?void 0:d.total,error:g,"is-selected-row":e=>e.name===t.params.dataPlane,"summary-route-name":"service-data-plane-summary-view","empty-state-message":i("common.emptyState.message",{type:"Data Plane Proxies"}),"empty-state-cta-to":i("data-planes.href.docs.data_plane_proxy"),"empty-state-cta-text":i("common.documentation"),onChange:t.update},{toolbar:a(()=>[o(A,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/service: backend'",query:t.params.query,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...f("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onFieldsChange:e=>t.update({query:e.query,s:e.query.length>0?JSON.stringify(e.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"]),n(),o(C,{class:"filter-select",label:"Type",items:["all","standard","builtin","delegated"].map(e=>({value:e,label:i(`data-planes.type.${e}`),selected:e===t.params.dataplaneType})),onSelected:e=>t.update({dataplaneType:String(e.value)})},{"item-template":a(({item:e})=>[n(l(e.label),1)]),_:2},1032,["items","onSelected"])]),name:a(({row:e})=>[o(u,{class:"name-link",title:e.name,to:{name:"data-plane-summary-view",params:{mesh:e.mesh,dataPlane:e.name},query:{page:t.params.page,size:t.params.size,query:t.params.query,dataplaneType:t.params.dataplaneType}}},{default:a(()=>[n(l(e.name),1)]),_:2},1032,["title","to"])]),type:a(({row:e})=>[n(l(i(`data-planes.type.${e.dataplaneType}`)),1)]),services:a(({row:e})=>[e.services.length>0?(s(),m(S,{key:0,width:"auto"},{default:a(()=>[(s(!0),c(y,null,E(e.services,(p,D)=>(s(),c("div",{key:D},[o(B,{text:p},{default:a(()=>[e.dataplaneType==="standard"?(s(),m(u,{key:0,to:{name:"service-detail-view",params:{service:p}}},{default:a(()=>[n(l(p),1)]),_:2},1032,["to"])):e.dataplaneType==="delegated"&&f("use gateways ui")?(s(),m(u,{key:1,to:{name:"delegated-gateway-detail-view",params:{service:p}}},{default:a(()=>[n(l(p),1)]),_:2},1032,["to"])):(s(),c(y,{key:2},[n(l(p),1)],64))]),_:2},1032,["text"])]))),128))]),_:2},1024)):(s(),c(y,{key:1},[n(l(i("common.collection.none")),1)],64))]),zone:a(({row:e})=>[e.zone?(s(),m(u,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:a(()=>[n(l(e.zone),1)]),_:2},1032,["to"])):(s(),c(y,{key:1},[n(l(i("common.collection.none")),1)],64))]),certificate:a(({row:e})=>{var p;return[(p=e.dataplaneInsight.mTLS)!=null&&p.certificateExpirationTime?(s(),c(y,{key:0},[n(l(i("common.formats.datetime",{value:Date.parse(e.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(s(),c(y,{key:1},[n(l(i("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:a(({row:e})=>[o(W,{status:e.status},null,8,["status"])]),warnings:a(({row:e})=>[e.isCertExpired||e.warnings.length>0?(s(),m(x,{key:0},{content:a(()=>[z("ul",null,[e.warnings.length>0?(s(),c("li",U,l(i("data-planes.components.data-plane-list.version_mismatch")),1)):_("",!0),n(),e.isCertExpired?(s(),c("li",Z,l(i("data-planes.components.data-plane-list.cert_expired")),1)):_("",!0)])]),default:a(()=>[n(),o(R,{class:"mr-1",size:k(b),"hide-title":""},null,8,["size"])]),_:2},1024)):(s(),c(y,{key:1},[n(l(i("common.collection.none")),1)],64))]),details:a(({row:e})=>[o(u,{class:"details-link","data-testid":"details-link",to:{name:"data-plane-detail-view",params:{dataPlane:e.name}}},{default:a(()=>[n(l(i("common.collection.details_link"))+" ",1),o(k(I),{display:"inline-block",decorative:"",size:k(b)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["page-number","page-size","headers","items","total","error","is-selected-row","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"])),n(),t.params.dataPlane?(s(),m(w,{key:2},{default:a(e=>[o(O,{onClose:p=>t.replace({name:t.name,params:{mesh:t.params.mesh},query:{page:t.params.page,size:t.params.size}})},{default:a(()=>[(s(),m(N(e.Component),{name:t.params.dataPlane,"dataplane-overview":d==null?void 0:d.items.find(p=>p.name===t.params.dataPlane)},null,8,["name","dataplane-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):_("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["params"])):_("",!0)]),_:1})}}}),ae=$(H,[["__scopeId","data-v-dae06fa6"]]);export{ae as default};
