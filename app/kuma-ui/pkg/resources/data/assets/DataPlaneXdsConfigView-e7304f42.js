import{E as m}from"./EnvoyData-c65fec9b.js";import{a as u}from"./dataplane-0a086c06.js";import{d as _,r as e,o as h,i as f,w as t,j as n,p as w,n as g,k as x}from"./index-a6f5023f.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-ad731d3d.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-1974ccfb.js";const k=_({__name:"DataPlaneXdsConfigView",props:{data:{}},setup(s){const o=s;return(C,V)=>{const r=e("RouteTitle"),p=e("KCard"),d=e("AppView"),c=e("RouteView");return h(),f(c,{name:"data-plane-xds-config-view",params:{mesh:"",dataPlane:"",codeSearch:""}},{default:t(({route:a,t:l})=>[n(d,null,{title:t(()=>[w("h2",null,[n(r,{title:l("data-planes.routes.item.navigation.data-plane-xds-config-view"),render:!0},null,8,["title"])])]),default:t(()=>[g(),n(p,null,{body:t(()=>[n(m,{status:x(u)(o.data.dataplane,o.data.dataplaneInsight).status,resource:"Data Plane Proxy",src:`/meshes/${a.params.mesh}/dataplanes/${a.params.dataPlane}/data-path/xds`,query:a.params.codeSearch,onQueryChange:i=>a.update({codeSearch:i})},null,8,["status","src","query","onQueryChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{k as default};
