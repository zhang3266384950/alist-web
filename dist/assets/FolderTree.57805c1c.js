import{ao as f,e,I as R,k as i,B as c,a0 as C,M as m,f as b,aM as T,i as k,j as v,m as $,q as M,d as g,Y as w,av as z,a as D,_ as V,ba as p,bb as h,ae as q,bc as H,z as P,ay as j,a_ as A,W as J,v as N,p as W,aq as X,bd as Y}from"./index.a4a6b1e7.js";import{d as E}from"./index.c88adeca.js";import{k as G}from"./api.dcf008da.js";import{u as F}from"./useT.d7e5023d.js";const x=X(),S=t=>{const[n,a]=g("/");return e(w,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(x.Provider,{get value(){var o;return{value:n,onChange:r=>{a(r),t.onChange(r)},forceRoot:(o=t.forceRoot)!=null?o:!1}},get children(){return e(_,{path:"/"})}})}})},_=t=>{const[n,a]=g([]),{value:o,onChange:r,forceRoot:l}=z(x),[y,B]=D(()=>G(t.path,V(),l)),I=async()=>{if(n().length>0)return;const u=await B();Y(u,a)},{isOpen:s,onToggle:O}=f(),d=()=>o()===t.path;return e(w,{get children(){return[e(C,{spacing:"$2",get children(){return[e(i,{get when(){return!y()},get fallback(){return e(p,{size:"sm",get color(){return h()}})},get children(){return e(q,{get color(){return h()},as:E,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{O(),s()&&I()}})}}),e(H,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return d()?"$info8":"transparent"},get _hover(){return{bgColor:d()?"$info8":P()}},onClick:()=>{r(t.path)},get children(){return j(()=>t.path==="/",!0)()?"root":A(t.path)}})]}}),e(i,{get when(){return s()},get children(){return e(J,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(N,{get each(){return n()},children:u=>e(_,{get path(){return W(t.path,u.name)}})})}})}})]}})},Z=t=>{var r;const n=F(),[a,o]=g((r=t.defaultValue)!=null?r:"");return e(M,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(m,{}),e(b,{get children(){return[e(k,{get children(){return n("home.toolbar.choose_dst_folder")}}),e(v,{get children(){return e(S,{onChange:o})}}),e($,{display:"flex",gap:"$2",get children(){return[e(c,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return n("global.cancel")}}),e(c,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,a())},get children(){return n("global.ok")}})]}})]}})]}})},ee=t=>{const{isOpen:n,onOpen:a,onClose:o}=f(),r=F();return[e(C,{w:"$full",spacing:"$2",get children(){return[e(R,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?a:()=>{}},get placeholder(){return r(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(i,{get when(){return!t.onlyFolder},get children(){return e(c,{onClick:a,get children(){return r("global.choose")}})}})]}}),e(M,{size:"xl",get opened(){return n()},onClose:o,get children(){return[e(m,{}),e(b,{get children(){return[e(T,{}),e(k,{get children(){return r("global.choose_folder")}}),e(v,{get children(){return e(S,{forceRoot:!0,get onChange(){return t.onChange}})}}),e($,{get children(){return e(c,{onClick:o,get children(){return r("global.confirm")}})}})]}})]}})]};export{ee as F,Z as M};
