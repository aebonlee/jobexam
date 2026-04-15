import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{a as t,c as n,d as r,f as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./vendor-0O6AGl4b.js";import{n as p,t as m}from"./charts--8enhH-2.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var h=r(),g=e(i(),1),_=d(),v=(0,g.createContext)(),y=[{name:`blue`,color:`#1B3A6B`},{name:`red`,color:`#C8102E`},{name:`green`,color:`#00855A`},{name:`purple`,color:`#8B1AC8`},{name:`orange`,color:`#C87200`}];function b(e){let t=document.cookie.match(RegExp(`(^| )`+e+`=([^;]+)`));return t?t[2]:null}function x(e,t,n=365){let r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3),document.cookie=`${e}=${t};expires=${r.toUTCString()};path=/`}function S(){let e=new Date().getHours();return e>=6&&e<18?`light`:`dark`}function C({children:e}){let[t,n]=(0,g.useState)(()=>b(`theme_mode`)||`auto`),[r,i]=(0,g.useState)(()=>b(`color_theme`)||`blue`),a=t===`auto`?S():t;(0,g.useEffect)(()=>{document.documentElement.setAttribute(`data-theme`,a)},[a]),(0,g.useEffect)(()=>{r===`blue`?document.documentElement.removeAttribute(`data-color`):document.documentElement.setAttribute(`data-color`,r)},[r]);let o=(0,g.useCallback)(()=>{n(e=>{let t=e===`auto`?`light`:e===`light`?`dark`:`auto`;return x(`theme_mode`,t),t})},[]),s=(0,g.useCallback)(e=>{i(e),x(`color_theme`,e)},[]);return(0,_.jsx)(v.Provider,{value:{mode:t,resolvedTheme:a,toggleTheme:o,colorTheme:r,setColorTheme:s,COLOR_OPTIONS:y},children:e})}function w(){let e=(0,g.useContext)(v);if(!e)throw Error(`useTheme must be used within ThemeProvider`);return e}var T=(0,g.createContext)({}),E=0;function D({toast:e,onRemove:t}){let[n,r]=(0,g.useState)(!1),i=(0,g.useRef)(null);(0,g.useEffect)(()=>(i.current=setTimeout(()=>r(!0),3e3),()=>clearTimeout(i.current)),[]),(0,g.useEffect)(()=>{if(n){let n=setTimeout(()=>t(e.id),300);return()=>clearTimeout(n)}},[n,e.id,t]);let a=()=>{clearTimeout(i.current),r(!0)},o=e.type===`success`?`fa-solid fa-circle-check`:e.type===`error`?`fa-solid fa-circle-xmark`:`fa-solid fa-circle-info`;return(0,_.jsxs)(`div`,{className:`toast toast-${e.type} ${n?`toast-exit`:``}`,role:`alert`,children:[(0,_.jsx)(`i`,{className:`toast-icon ${o}`}),(0,_.jsx)(`span`,{className:`toast-message`,children:e.message}),(0,_.jsx)(`button`,{className:`toast-close`,onClick:a,"aria-label":`닫기`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-xmark`})})]})}function O({toasts:e,onRemove:t}){return e.length===0?null:(0,_.jsx)(`div`,{className:`toast-container`,"aria-live":`polite`,children:e.map(e=>(0,_.jsx)(D,{toast:e,onRemove:t},e.id))})}function ee({children:e}){let[t,n]=(0,g.useState)([]),r=(0,g.useCallback)((e,t=`info`)=>{let r=++E;n(n=>[...n,{id:r,message:e,type:t}])},[]),i=(0,g.useCallback)(e=>{n(t=>t.filter(t=>t.id!==e))},[]);return(0,_.jsxs)(T.Provider,{value:{showToast:r},children:[e,(0,_.jsx)(O,{toasts:t,onRemove:i})]})}var k=()=>(0,g.useContext)(T);function A(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function j(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var M=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),N=class extends Error{constructor(e,t=`FunctionsError`,n){super(e),this.name=t,this.context=n}},P=class extends N{constructor(e){super(`Failed to send a request to the Edge Function`,`FunctionsFetchError`,e)}},F=class extends N{constructor(e){super(`Relay Error invoking the Edge Function`,`FunctionsRelayError`,e)}},te=class extends N{constructor(e){super(`Edge Function returned a non-2xx status code`,`FunctionsHttpError`,e)}},I;(function(e){e.Any=`any`,e.ApNortheast1=`ap-northeast-1`,e.ApNortheast2=`ap-northeast-2`,e.ApSouth1=`ap-south-1`,e.ApSoutheast1=`ap-southeast-1`,e.ApSoutheast2=`ap-southeast-2`,e.CaCentral1=`ca-central-1`,e.EuCentral1=`eu-central-1`,e.EuWest1=`eu-west-1`,e.EuWest2=`eu-west-2`,e.EuWest3=`eu-west-3`,e.SaEast1=`sa-east-1`,e.UsEast1=`us-east-1`,e.UsWest1=`us-west-1`,e.UsWest2=`us-west-2`})(I||={});var ne=class{constructor(e,{headers:t={},customFetch:n,region:r=I.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=M(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return j(this,arguments,void 0,function*(e,t={}){let n,r;try{let{headers:i,method:a,body:o,signal:s,timeout:c}=t,l={},{region:u}=t;u||=this.region;let d=new URL(`${this.url}/${e}`);u&&u!==`any`&&(l[`x-region`]=u,d.searchParams.set(`forceFunctionRegion`,u));let f;o&&(i&&!Object.prototype.hasOwnProperty.call(i,`Content-Type`)||!i)?typeof Blob<`u`&&o instanceof Blob||o instanceof ArrayBuffer?(l[`Content-Type`]=`application/octet-stream`,f=o):typeof o==`string`?(l[`Content-Type`]=`text/plain`,f=o):typeof FormData<`u`&&o instanceof FormData?f=o:(l[`Content-Type`]=`application/json`,f=JSON.stringify(o)):f=o&&typeof o!=`string`&&!(typeof Blob<`u`&&o instanceof Blob)&&!(o instanceof ArrayBuffer)&&!(typeof FormData<`u`&&o instanceof FormData)?JSON.stringify(o):o;let p=s;c&&(r=new AbortController,n=setTimeout(()=>r.abort(),c),s?(p=r.signal,s.addEventListener(`abort`,()=>r.abort())):p=r.signal);let m=yield this.fetch(d.toString(),{method:a||`POST`,headers:Object.assign(Object.assign(Object.assign({},l),this.headers),i),body:f,signal:p}).catch(e=>{throw new P(e)}),h=m.headers.get(`x-relay-error`);if(h&&h===`true`)throw new F(m);if(!m.ok)throw new te(m);let g=(m.headers.get(`Content-Type`)??`text/plain`).split(`;`)[0].trim(),_;return _=g===`application/json`?yield m.json():g===`application/octet-stream`||g===`application/pdf`?yield m.blob():g===`text/event-stream`?m:g===`multipart/form-data`?yield m.formData():yield m.text(),{data:_,error:null,response:m}}catch(e){return{data:null,error:e,response:e instanceof te||e instanceof F?e.context:void 0}}finally{n&&clearTimeout(n)}})}},re=class extends Error{constructor(e){super(e.message),this.name=`PostgrestError`,this.details=e.details,this.hint=e.hint,this.code=e.code}},ie=class{constructor(e){this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError??!1,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle??!1,this.urlLengthLimit=e.urlLengthLimit??8e3,e.fetch?this.fetch=e.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}then(e,t){var n=this;this.schema===void 0||([`GET`,`HEAD`].includes(this.method)?this.headers.set(`Accept-Profile`,this.schema):this.headers.set(`Content-Profile`,this.schema)),this.method!==`GET`&&this.method!==`HEAD`&&this.headers.set(`Content-Type`,`application/json`);let r=this.fetch,i=r(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async e=>{let t=null,r=null,i=null,a=e.status,o=e.statusText;if(e.ok){if(n.method!==`HEAD`){let t=await e.text();t===``||(r=n.headers.get(`Accept`)===`text/csv`||n.headers.get(`Accept`)&&n.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`)?t:JSON.parse(t))}let s=n.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/),c=e.headers.get(`content-range`)?.split(`/`);s&&c&&c.length>1&&(i=parseInt(c[1])),n.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(t={code:`PGRST116`,details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:`JSON object requested, multiple (or no) rows returned`},r=null,i=null,a=406,o=`Not Acceptable`):r=r.length===1?r[0]:null)}else{let i=await e.text();try{t=JSON.parse(i),Array.isArray(t)&&e.status===404&&(r=[],t=null,a=200,o=`OK`)}catch{e.status===404&&i===``?(a=204,o=`No Content`):t={message:i}}if(t&&n.shouldThrowOnError)throw new re(t)}return{error:t,data:r,count:i,status:a,statusText:o}});return this.shouldThrowOnError||(i=i.catch(e=>{let t=``,n=``,r=``,i=e?.cause;if(i){let n=i?.message??``,r=i?.code??``;t=`${e?.name??`FetchError`}: ${e?.message}`,t+=`\n\nCaused by: ${i?.name??`Error`}: ${n}`,r&&(t+=` (${r})`),i?.stack&&(t+=`\n${i.stack}`)}else t=e?.stack??``;let a=this.url.toString().length;return e?.name===`AbortError`||e?.code===`ABORT_ERR`?(r=``,n=`Request was aborted (timeout or manual cancellation)`,a>this.urlLengthLimit&&(n+=`. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(i?.name===`HeadersOverflowError`||i?.code===`UND_ERR_HEADERS_OVERFLOW`)&&(r=``,n=`HTTP headers exceeded server limits (typically 16KB)`,a>this.urlLengthLimit&&(n+=`. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{error:{message:`${e?.name??`FetchError`}: ${e?.message}`,details:t,hint:n,code:r},data:null,count:null,status:0,statusText:``}})),i.then(e,t)}returns(){return this}overrideTypes(){return this}},ae=class extends ie{select(e){let t=!1,n=(e??`*`).split(``).map(e=>/\s/.test(e)&&!t?``:(e===`"`&&(t=!t),e)).join(``);return this.url.searchParams.set(`select`,n),this.headers.append(`Prefer`,`return=representation`),this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:r,referencedTable:i=r}={}){let a=i?`${i}.order`:`order`,o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:``}${e}.${t?`asc`:`desc`}${n===void 0?``:n?`.nullsfirst`:`.nullslast`}`),this}limit(e,{foreignTable:t,referencedTable:n=t}={}){let r=n===void 0?`limit`:`${n}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:n,referencedTable:r=n}={}){let i=r===void 0?`offset`:`${r}.offset`,a=r===void 0?`limit`:`${r}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(a,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set(`Accept`,`application/vnd.pgrst.object+json`),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set(`Accept`,`text/csv`),this}geojson(){return this.headers.set(`Accept`,`application/geo+json`),this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:r=!1,wal:i=!1,format:a=`text`}={}){let o=[e?`analyze`:null,t?`verbose`:null,n?`settings`:null,r?`buffers`:null,i?`wal`:null].filter(Boolean).join(`|`),s=this.headers.get(`Accept`)??`application/json`;return this.headers.set(`Accept`,`application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`),this}rollback(){return this.headers.append(`Prefer`,`tx=rollback`),this}returns(){return this}maxAffected(e){return this.headers.append(`Prefer`,`handling=strict`),this.headers.append(`Prefer`,`max-affected=${e}`),this}},oe=RegExp(`[,()]`),L=class extends ae{eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(`,`)}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(`,`)}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(`,`)}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(`,`)}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&oe.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`in.(${n})`),this}notIn(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&oe.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`not.in.(${n})`),this}contains(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t==`string`?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(`,`)}}`),this}textSearch(e,t,{config:n,type:r}={}){let i=``;r===`plain`?i=`pl`:r===`phrase`?i=`ph`:r===`websearch`&&(i=`w`);let a=n===void 0?``:`(${n})`;return this.url.searchParams.append(e,`${i}fts${a}.${t}`),this}match(e){return Object.entries(e).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t,referencedTable:n=t}={}){let r=n?`${n}.or`:`or`;return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}},se=class{constructor(e,{headers:t={},schema:n,fetch:r,urlLengthLimit:i=8e3}){this.url=e,this.headers=new Headers(t),this.schema=n,this.fetch=r,this.urlLengthLimit=i}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(e,t){let{head:n=!1,count:r}=t??{},i=n?`HEAD`:`GET`,a=!1,o=(e??`*`).split(``).map(e=>/\s/.test(e)&&!a?``:(e===`"`&&(a=!a),e)).join(``),{url:s,headers:c}=this.cloneRequestState();return s.searchParams.set(`select`,o),r&&c.append(`Prefer`,`count=${r}`),new L({method:i,url:s,headers:c,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}insert(e,{count:t,defaultToNull:n=!0}={}){let{url:r,headers:i}=this.cloneRequestState();if(t&&i.append(`Prefer`,`count=${t}`),n||i.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);r.searchParams.set(`columns`,e.join(`,`))}}return new L({method:`POST`,url:r,headers:i,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:r,defaultToNull:i=!0}={}){let{url:a,headers:o}=this.cloneRequestState();if(o.append(`Prefer`,`resolution=${n?`ignore`:`merge`}-duplicates`),t!==void 0&&a.searchParams.set(`on_conflict`,t),r&&o.append(`Prefer`,`count=${r}`),i||o.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);a.searchParams.set(`columns`,e.join(`,`))}}return new L({method:`POST`,url:a,headers:o,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit})}update(e,{count:t}={}){let{url:n,headers:r}=this.cloneRequestState();return t&&r.append(`Prefer`,`count=${t}`),new L({method:`PATCH`,url:n,headers:r,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit})}delete({count:e}={}){let{url:t,headers:n}=this.cloneRequestState();return e&&n.append(`Prefer`,`count=${e}`),new L({method:`DELETE`,url:t,headers:n,schema:this.schema,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit})}};function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ce(e)}function le(e,t){if(ce(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(ce(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ue(e){var t=le(e,`string`);return ce(t)==`symbol`?t:t+``}function de(e,t,n){return(t=ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?fe(Object(n),!0).forEach(function(t){de(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var me=class e{constructor(e,{headers:t={},schema:n,fetch:r,timeout:i,urlLengthLimit:a=8e3}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.urlLengthLimit=a;let o=r??globalThis.fetch;i!==void 0&&i>0?this.fetch=(e,t)=>{let n=new AbortController,r=setTimeout(()=>n.abort(),i),a=t?.signal;if(a){if(a.aborted)return clearTimeout(r),o(e,t);let i=()=>{clearTimeout(r),n.abort()};return a.addEventListener(`abort`,i,{once:!0}),o(e,pe(pe({},t),{},{signal:n.signal})).finally(()=>{clearTimeout(r),a.removeEventListener(`abort`,i)})}return o(e,pe(pe({},t),{},{signal:n.signal})).finally(()=>clearTimeout(r))}:this.fetch=o}from(e){if(!e||typeof e!=`string`||e.trim()===``)throw Error(`Invalid relation name: relation must be a non-empty string.`);return new se(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}rpc(e,t={},{head:n=!1,get:r=!1,count:i}={}){let a,o=new URL(`${this.url}/rpc/${e}`),s,c=e=>typeof e==`object`&&!!e&&(!Array.isArray(e)||e.some(c)),l=n&&Object.values(t).some(c);l?(a=`POST`,s=t):n||r?(a=n?`HEAD`:`GET`,Object.entries(t).filter(([e,t])=>t!==void 0).map(([e,t])=>[e,Array.isArray(t)?`{${t.join(`,`)}}`:`${t}`]).forEach(([e,t])=>{o.searchParams.append(e,t)})):(a=`POST`,s=t);let u=new Headers(this.headers);return l?u.set(`Prefer`,i?`count=${i},return=minimal`:`return=minimal`):i&&u.set(`Prefer`,`count=${i}`),new L({method:a,url:o,headers:u,schema:this.schemaName,body:s,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit})}},he=class{constructor(){}static detectEnvironment(){if(typeof WebSocket<`u`)return{type:`native`,constructor:WebSocket};if(typeof globalThis<`u`&&globalThis.WebSocket!==void 0)return{type:`native`,constructor:globalThis.WebSocket};if(typeof global<`u`&&global.WebSocket!==void 0)return{type:`native`,constructor:global.WebSocket};if(typeof globalThis<`u`&&globalThis.WebSocketPair!==void 0&&globalThis.WebSocket===void 0)return{type:`cloudflare`,error:`Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,workaround:`Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`};if(typeof globalThis<`u`&&globalThis.EdgeRuntime||typeof navigator<`u`&&navigator.userAgent?.includes(`Vercel-Edge`))return{type:`unsupported`,error:`Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,workaround:`Use serverless functions or a different deployment target for WebSocket functionality.`};let e=globalThis.process;if(e){let t=e.versions;if(t&&t.node){let e=t.node,n=parseInt(e.replace(/^v/,``).split(`.`)[0]);return n>=22?globalThis.WebSocket===void 0?{type:`unsupported`,error:`Node.js ${n} detected but native WebSocket not found.`,workaround:`Provide a WebSocket implementation via the transport option.`}:{type:`native`,constructor:globalThis.WebSocket}:{type:`unsupported`,error:`Node.js ${n} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:`unsupported`,error:`Unknown JavaScript runtime without WebSocket support.`,workaround:`Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`}}static getWebSocketConstructor(){let e=this.detectEnvironment();if(e.constructor)return e.constructor;let t=e.error||`WebSocket not supported in this environment.`;throw e.workaround&&(t+=`\n\nSuggested solution: ${e.workaround}`),Error(t)}static isWebSocketSupported(){try{let e=this.detectEnvironment();return e.type===`native`||e.type===`ws`}catch{return!1}}},ge=`realtime-js/2.101.1`,_e=`1.0.0`,ve=`2.0.0`,ye=ve,be=1e4,xe={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Se={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`,access_token:`access_token`},Ce={connecting:`connecting`,open:`open`,closing:`closing`,closed:`closed`},we=class{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT=`broadcast`,this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event==`string`)return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){return this._isArrayBuffer(e.payload?.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){let t=e.payload?.payload??new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,t)}_encodeJsonUserBroadcastPush(e){let t=e.payload?.payload??{},n=new TextEncoder().encode(JSON.stringify(t)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,n)}_encodeUserBroadcastPush(e,t,n){let r=e.topic,i=e.ref??``,a=e.join_ref??``,o=e.payload.event,s=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},c=Object.keys(s).length===0?``:JSON.stringify(s);if(a.length>255)throw Error(`joinRef length ${a.length} exceeds maximum of 255`);if(i.length>255)throw Error(`ref length ${i.length} exceeds maximum of 255`);if(r.length>255)throw Error(`topic length ${r.length} exceeds maximum of 255`);if(o.length>255)throw Error(`userEvent length ${o.length} exceeds maximum of 255`);if(c.length>255)throw Error(`metadata length ${c.length} exceeds maximum of 255`);let l=this.USER_BROADCAST_PUSH_META_LENGTH+a.length+i.length+r.length+o.length+c.length,u=new ArrayBuffer(this.HEADER_LENGTH+l),d=new DataView(u),f=0;d.setUint8(f++,this.KINDS.userBroadcastPush),d.setUint8(f++,a.length),d.setUint8(f++,i.length),d.setUint8(f++,r.length),d.setUint8(f++,o.length),d.setUint8(f++,c.length),d.setUint8(f++,t),Array.from(a,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(i,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(r,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(o,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(c,e=>d.setUint8(f++,e.charCodeAt(0)));var p=new Uint8Array(u.byteLength+n.byteLength);return p.set(new Uint8Array(u),0),p.set(new Uint8Array(n),u.byteLength),p.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e));if(typeof e==`string`){let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}return t({})}_binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+4,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=e.slice(s,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,p={type:this.BROADCAST_EVENT,event:l,payload:f};return a>0&&(p.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){return e instanceof ArrayBuffer||e?.constructor?.name===`ArrayBuffer`}_pick(e,t){return!e||typeof e!=`object`?{}:Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e)))}},R;(function(e){e.abstime=`abstime`,e.bool=`bool`,e.date=`date`,e.daterange=`daterange`,e.float4=`float4`,e.float8=`float8`,e.int2=`int2`,e.int4=`int4`,e.int4range=`int4range`,e.int8=`int8`,e.int8range=`int8range`,e.json=`json`,e.jsonb=`jsonb`,e.money=`money`,e.numeric=`numeric`,e.oid=`oid`,e.reltime=`reltime`,e.text=`text`,e.time=`time`,e.timestamp=`timestamp`,e.timestamptz=`timestamptz`,e.timetz=`timetz`,e.tsrange=`tsrange`,e.tstzrange=`tstzrange`})(R||={});var Te=(e,t,n={})=>{let r=n.skipTypes??[];return t?Object.keys(t).reduce((n,i)=>(n[i]=Ee(i,e,t,r),n),{}):{}},Ee=(e,t,n,r)=>{let i=t.find(t=>t.name===e)?.type,a=n[e];return i&&!r.includes(i)?De(i,a):Oe(a)},De=(e,t)=>{if(e.charAt(0)===`_`)return Me(t,e.slice(1,e.length));switch(e){case R.bool:return ke(t);case R.float4:case R.float8:case R.int2:case R.int4:case R.int8:case R.numeric:case R.oid:return Ae(t);case R.json:case R.jsonb:return je(t);case R.timestamp:return Ne(t);case R.abstime:case R.date:case R.daterange:case R.int4range:case R.int8range:case R.money:case R.reltime:case R.text:case R.time:case R.timestamptz:case R.timetz:case R.tsrange:case R.tstzrange:return Oe(t);default:return Oe(t)}},Oe=e=>e,ke=e=>{switch(e){case`t`:return!0;case`f`:return!1;default:return e}},Ae=e=>{if(typeof e==`string`){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},je=e=>{if(typeof e==`string`)try{return JSON.parse(e)}catch{return e}return e},Me=(e,t)=>{if(typeof e!=`string`)return e;let n=e.length-1,r=e[n];if(e[0]===`{`&&r===`}`){let r,i=e.slice(1,n);try{r=JSON.parse(`[`+i+`]`)}catch{r=i?i.split(`,`):[]}return r.map(e=>De(t,e))}return e},Ne=e=>typeof e==`string`?e.replace(` `,`T`):e,Pe=e=>{let t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,`http`),t.pathname=t.pathname.replace(/\/+$/,``).replace(/\/socket\/websocket$/i,``).replace(/\/socket$/i,``).replace(/\/websocket$/i,``),t.pathname===``||t.pathname===`/`?t.pathname=`/api/broadcast`:t.pathname+=`/api/broadcast`,t.href},Fe=e=>typeof e==`function`?e:function(){return e},Ie=typeof self<`u`?self:null,Le=typeof window<`u`?window:null,Re=Ie||Le||globalThis,ze=`2.0.0`,Be=1e4,Ve=1e3,He={connecting:0,open:1,closing:2,closed:3},z={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Ue={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`},We={longpoll:`longpoll`,websocket:`websocket`},Ge={complete:4},Ke=`base64url.bearer.phx.`,qe=class{constructor(e,t,n,r){this.channel=e,this.event=t,this.payload=n||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived(`timeout`)||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:e,response:t,_ref:n}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger(`timeout`,{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},Je=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries+=1,this.callback()},this.timerCalc(this.tries+1))}},Ye=class{constructor(e,t,n){this.state=z.closed,this.topic=e,this.params=Fe(t||{}),this.socket=n,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new qe(this,Ue.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Je(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive(`ok`,()=>{this.state=z.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this.joinPush.receive(`error`,e=>{this.state=z.errored,this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log(`channel`,`close ${this.topic}`),this.state=z.closed,this.socket.remove(this)}),this.onError(e=>{this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.isJoining()&&this.joinPush.reset(),this.state=z.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive(`timeout`,()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`timeout ${this.topic}`,this.joinPush.timeout),new qe(this,Ue.leave,Fe({}),this.timeout).send(),this.state=z.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Ue.reply,(e,t)=>{this.trigger(this.replyEventName(t),e)})}join(e=this.timeout){if(this.joinedOnce)throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=z.closed,this.bindings=[]}onClose(e){this.on(Ue.close,e)}onError(e){return this.on(Ue.error,t=>e(t))}on(e,t){let n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}off(e,t){this.bindings=this.bindings.filter(n=>!(n.event===e&&(t===void 0||t===n.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,n=this.timeout){if(t||={},!this.joinedOnce)throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new qe(this,e,function(){return t},n);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=z.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`leave ${this.topic}`),this.trigger(Ue.close,`leave`)},n=new qe(this,Ue.leave,Fe({}),e);return n.receive(`ok`,()=>t()).receive(`timeout`,()=>t()),n.send(),this.canPush()||n.trigger(`ok`,{}),n}onMessage(e,t,n){return t}filterBindings(e,t,n){return!0}isMember(e,t,n,r){return this.topic===e?r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log(`channel`,`dropping outdated message`,{topic:e,event:t,payload:n,joinRef:r}),!1):!0:!1}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=z.joining,this.joinPush.resend(e))}trigger(e,t,n,r){let i=this.onMessage(e,t,n,r);if(t&&!i)throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);let a=this.bindings.filter(r=>r.event===e&&this.filterBindings(r,t,n));for(let e=0;e<a.length;e++)a[e].callback(i,n,r||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===z.closed}isErrored(){return this.state===z.errored}isJoined(){return this.state===z.joined}isJoining(){return this.state===z.joining}isLeaving(){return this.state===z.leaving}},Xe=class{static request(e,t,n,r,i,a,o){if(Re.XDomainRequest){let n=new Re.XDomainRequest;return this.xdomainRequest(n,e,t,r,i,a,o)}else if(Re.XMLHttpRequest){let s=new Re.XMLHttpRequest;return this.xhrRequest(s,e,t,n,r,i,a,o)}else if(Re.fetch&&Re.AbortController)return this.fetchRequest(e,t,n,r,i,a,o);else throw Error(`No suitable XMLHttpRequest implementation found`)}static fetchRequest(e,t,n,r,i,a,o){let s={method:e,headers:n,body:r},c=null;return i&&(c=new AbortController,setTimeout(()=>c.abort(),i),s.signal=c.signal),Re.fetch(t,s).then(e=>e.text()).then(e=>this.parseJSON(e)).then(e=>o&&o(e)).catch(e=>{e.name===`AbortError`&&a?a():o&&o(null)}),c}static xdomainRequest(e,t,n,r,i,a,o){return e.timeout=i,e.open(t,n),e.onload=()=>{let t=this.parseJSON(e.responseText);o&&o(t)},a&&(e.ontimeout=a),e.onprogress=()=>{},e.send(r),e}static xhrRequest(e,t,n,r,i,a,o,s){e.open(t,n,!0),e.timeout=a;for(let[t,n]of Object.entries(r))e.setRequestHeader(t,n);return e.onerror=()=>s&&s(null),e.onreadystatechange=()=>{e.readyState===Ge.complete&&s&&s(this.parseJSON(e.responseText))},o&&(e.ontimeout=o),e.send(i),e}static parseJSON(e){if(!e||e===``)return null;try{return JSON.parse(e)}catch{return console&&console.log(`failed to parse JSON response`,e),null}}static serialize(e,t){let n=[];for(var r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;let i=t?`${t}[${r}]`:r,a=e[r];typeof a==`object`?n.push(this.serialize(a,i)):n.push(encodeURIComponent(i)+`=`+encodeURIComponent(a))}return n.join(`&`)}static appendParams(e,t){return Object.keys(t).length===0?e:`${e}${e.match(/\?/)?`&`:`?`}${this.serialize(t)}`}},Ze=e=>{let t=``,n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return btoa(t)},Qe=class{constructor(e,t){t&&t.length===2&&t[1].startsWith(Ke)&&(this.authToken=atob(t[1].slice(Ke.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=He.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(e){return e.replace(`ws://`,`http://`).replace(`wss://`,`https://`).replace(RegExp(`(.*)/`+We.websocket),`$1/`+We.longpoll)}endpointURL(){return Xe.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,n){this.close(e,t,n),this.readyState=He.connecting}ontimeout(){this.onerror(`timeout`),this.closeAndRetry(1005,`timeout`,!1)}isActive(){return this.readyState===He.open||this.readyState===He.connecting}poll(){let e={Accept:`application/json`};this.authToken&&(e[`X-Phoenix-AuthToken`]=this.authToken),this.ajax(`GET`,e,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:n,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,`session_gone`,!1);return}this.token=n}else t=0;switch(t){case 200:r.forEach(e=>{setTimeout(()=>this.onmessage({data:e}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=He.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,`forbidden`,!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,`internal server error`,500);break;default:throw Error(`unhandled poll status ${t}`)}})}send(e){typeof e!=`string`&&(e=Ze(e)),this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e){this.awaitingBatchAck=!0,this.ajax(`POST`,{"Content-Type":`application/x-ndjson`},e.join(`
`),()=>this.onerror(`timeout`),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,`internal server error`,!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(e,t,n){for(let e of this.reqs)e.abort();this.readyState=He.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:n});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<`u`?this.onclose(new CloseEvent(`close`,r)):this.onclose(r)}ajax(e,t,n,r,i){let a;a=Xe.request(e,this.endpointURL(),t,n,this.timeout,()=>{this.reqs.delete(a),r()},e=>{this.reqs.delete(a),this.isActive()&&i(e)}),this.reqs.add(a)}},$e=class e{constructor(t,n={}){let r=n.events||{state:`presence_state`,diff:`presence_diff`};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.joinRef=this.channel.joinRef(),this.state=e.syncState(this.state,t,n,r),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,n,r)}),this.pendingDiffs=[],i()}),this.channel.on(r.diff,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,n,r),i())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(t){return e.list(this.state,t)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,n,r){let i=this.clone(e),a={},o={};return this.map(i,(e,n)=>{t[e]||(o[e]=n)}),this.map(t,(e,t)=>{let n=i[e];if(n){let r=t.metas.map(e=>e.phx_ref),i=n.metas.map(e=>e.phx_ref),s=t.metas.filter(e=>i.indexOf(e.phx_ref)<0),c=n.metas.filter(e=>r.indexOf(e.phx_ref)<0);s.length>0&&(a[e]=t,a[e].metas=s),c.length>0&&(o[e]=this.clone(n),o[e].metas=c)}else a[e]=t}),this.syncDiff(i,{joins:a,leaves:o},n,r)}static syncDiff(e,t,n,r){let{joins:i,leaves:a}=this.clone(t);return n||=function(){},r||=function(){},this.map(i,(t,r)=>{let i=e[t];if(e[t]=this.clone(r),i){let n=e[t].metas.map(e=>e.phx_ref),r=i.metas.filter(e=>n.indexOf(e.phx_ref)<0);e[t].metas.unshift(...r)}n(t,i,r)}),this.map(a,(t,n)=>{let i=e[t];if(!i)return;let a=n.metas.map(e=>e.phx_ref);i.metas=i.metas.filter(e=>a.indexOf(e.phx_ref)<0),r(t,i,n),i.metas.length===0&&delete e[t]}),e}static list(e,t){return t||=function(e,t){return t},this.map(e,(e,n)=>t(e,n))}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static clone(e){return JSON.parse(JSON.stringify(e))}},et={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}},binaryEncode(e){let{join_ref:t,ref:n,event:r,topic:i,payload:a}=e,o=this.META_LENGTH+t.length+n.length+i.length+r.length,s=new ArrayBuffer(this.HEADER_LENGTH+o),c=new DataView(s),l=0;c.setUint8(l++,this.KINDS.push),c.setUint8(l++,t.length),c.setUint8(l++,n.length),c.setUint8(l++,i.length),c.setUint8(l++,r.length),Array.from(t,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(n,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(i,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(r,e=>c.setUint8(l++,e.charCodeAt(0)));var u=new Uint8Array(s.byteLength+a.byteLength);return u.set(new Uint8Array(s),0),u.set(new Uint8Array(a),s.byteLength),u.buffer},binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,r);case this.KINDS.reply:return this.decodeReply(e,t,r);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,r)}},decodePush(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=this.HEADER_LENGTH+this.META_LENGTH-1,s=n.decode(e.slice(o,o+r));o+=r;let c=n.decode(e.slice(o,o+i));o+=i;let l=n.decode(e.slice(o,o+a));return o+=a,{join_ref:s,ref:null,topic:c,event:l,payload:e.slice(o,e.byteLength)}},decodeReply(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=n.decode(e.slice(s,s+o));s+=o;let f={status:d,response:e.slice(s,e.byteLength)};return{join_ref:c,ref:l,topic:u,event:Ue.reply,payload:f}},decodeBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=this.HEADER_LENGTH+2,o=n.decode(e.slice(a,a+r));a+=r;let s=n.decode(e.slice(a,a+i));return a+=i,{join_ref:null,ref:null,topic:o,event:s,payload:e.slice(a,e.byteLength)}}},tt=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=t.timeout||Be,this.transport=t.transport||Re.WebSocket||Qe,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=t.longPollFallbackMs,this.fallbackTimer=null,this.sessionStore=t.sessionStorage||Re&&Re.sessionStorage,this.establishedConnections=0,this.defaultEncoder=et.encode.bind(et),this.defaultDecoder=et.decode.bind(et),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=t.binaryType||`arraybuffer`,this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport===Qe?(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder):(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder);let n=null;Le&&Le.addEventListener&&(Le.addEventListener(`pagehide`,e=>{this.conn&&(this.disconnect(),n=this.connectClock)}),Le.addEventListener(`pageshow`,e=>{n===this.connectClock&&(n=null,this.connect())}),Le.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=t.autoSendHeartbeat??!0,this.heartbeatCallback=t.heartbeatCallback??(()=>{}),this.rejoinAfterMs=e=>t.rejoinAfterMs?t.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4,this.reconnectAfterMs=e=>t.reconnectAfterMs?t.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3,this.logger=t.logger||null,!this.logger&&t.debug&&(this.logger=(e,t,n)=>{console.log(`${e}: ${t}`,n)}),this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=Fe(t.params||{}),this.endPoint=`${e}/${We.websocket}`,this.vsn=t.vsn||ze,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Je(()=>{if(this.pageHidden){this.log(`Not reconnecting as page is hidden!`),this.teardown();return}this.teardown(async()=>{t.beforeReconnect&&await t.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=t.authToken}getLongPollTransport(){return Qe}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&=(this.conn.close(),null),this.transport=e}protocol(){return location.protocol.match(/^https/)?`wss`:`ws`}endPointURL(){let e=Xe.appendParams(Xe.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)===`/`?e.charAt(1)===`/`?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`:e}disconnect(e,t,n){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,e&&e()},t,n)}connect(e){e&&(console&&console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`),this.params=Fe(e)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Qe?this.connectWithFallback(Qe,this.longPollFallbackMs):this.transportConnect())}log(e,t,n){this.logger&&this.logger(e,t,n)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}onHeartbeat(e){this.heartbeatCallback=e}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),n=Date.now();this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:t});let r=this.onMessage(i=>{i.ref===t&&(this.off([r]),e(Date.now()-n))});return!0}transportName(e){switch(e){case Qe:return`LongPoll`;default:return e.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let e;this.authToken&&(e=[`phoenix`,`${Ke}${btoa(this.authToken).replace(/=/g,``)}`]),this.conn=new this.transport(this.endPointURL(),e),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(e){return this.sessionStore&&this.sessionStore.getItem(e)}storeSession(e,t){this.sessionStore&&this.sessionStore.setItem(e,t)}connectWithFallback(e,t=2500){clearTimeout(this.fallbackTimer);let n=!1,r=!0,i,a=this.transportName(e),o=t=>{this.log(`transport`,`falling back to ${a}...`,t),this.off([void 0,i]),r=!1,this.replaceTransport(e),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o(`memorized`);this.fallbackTimer=setTimeout(o,t),i=this.onError(e=>{this.log(`transport`,`error`,e),r&&!n&&(clearTimeout(this.fallbackTimer),o(e))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(n=!0,!r){let t=this.transportName(e);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${t}`,`true`),this.log(`transport`,`established ${t} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,t),this.ping(e=>{this.log(`transport`,`connected to primary after`,e),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log(`transport`,`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks(`open`)}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log(`transport`,`heartbeat timeout. Attempting to re-establish connection`);try{this.heartbeatCallback(`timeout`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.triggerChanError(),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Ve,`heartbeat timeout`)}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,n){if(!this.conn)return e&&e();let r=this.conn;this.waitForBufferDone(r,()=>{t?r.close(t,n||``):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t,n=1){if(n===5||!e.bufferedAmount){t();return}setTimeout(()=>{this.waitForBufferDone(e,t,n+1)},150*n)}waitForSocketClosed(e,t,n=1){if(n===5||e.readyState===He.closed){t();return}setTimeout(()=>{this.waitForSocketClosed(e,t,n+1)},150*n)}onConnClose(e){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log(`transport`,`close`,e),this.triggerChanError(),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks(`close`,e)}onConnError(e){this.hasLogger()&&this.log(`transport`,e);let t=this.transport,n=this.establishedConnections;this.triggerStateCallbacks(`error`,e,t,n),(t===this.transport||n>0)&&this.triggerChanError()}triggerChanError(){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(Ue.error)})}connectionState(){switch(this.conn&&this.conn.readyState){case He.connecting:return`connecting`;case He.open:return`open`;case He.closing:return`closing`;default:return`closed`}}isConnected(){return this.connectionState()===`open`}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t!==e)}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([t])=>e.indexOf(t)===-1)}channel(e,t={}){let n=new Ye(e,t,this);return this.channels.push(n),n}push(e){if(this.hasLogger()){let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;this.log(`push`,`${t} ${n} (${a}, ${i})`,r)}this.isConnected()?this.encode(e,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(e,e=>this.conn.send(e)))}makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback(`disconnected`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback(`sent`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,e=>{let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){let e=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status===`ok`?`ok`:`error`,e)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log(`receive`,`${r.status||``} ${t} ${n} ${i&&`(`+i+`)`||``}`.trim(),r);for(let e=0;e<this.channels.length;e++){let o=this.channels[e];o.isMember(t,n,r,a)&&o.trigger(n,r,i,a)}this.triggerStateCallbacks(`message`,e)})}triggerStateCallbacks(e,...t){try{this.stateChangeCallbacks[e].forEach(([n,r])=>{try{r(...t)}catch(t){this.log(`error`,`error in ${e} callback`,t)}})}catch(t){this.log(`error`,`error triggering ${e} callbacks`,t)}}leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t.isJoined()||t.isJoining()));t&&(this.hasLogger()&&this.log(`transport`,`leaving duplicate topic "${e}"`),t.leave())}},nt=class e{constructor(t,n){let r=at(n);this.presence=new $e(t.getChannel(),r),this.presence.onJoin((n,r,i)=>{let a=e.onJoinPayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onLeave((n,r,i)=>{let a=e.onLeavePayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onSync(()=>{t.getChannel().trigger(`presence`,{event:`sync`})})}get state(){return e.transformState(this.presence.state)}static transformState(e){return e=it(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{let r=e[n];return t[n]=rt(r),t},{})}static onJoinPayload(e,t,n){return{event:`join`,key:e,currentPresences:ot(t),newPresences:rt(n)}}static onLeavePayload(e,t,n){return{event:`leave`,key:e,currentPresences:ot(t),leftPresences:rt(n)}}};function rt(e){return e.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function it(e){return JSON.parse(JSON.stringify(e))}function at(e){return e?.events&&{events:e.events}}function ot(e){return e?.metas?rt(e):[]}var st;(function(e){e.SYNC=`sync`,e.JOIN=`join`,e.LEAVE=`leave`})(st||={});var ct=class{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new nt(this.channel.channelAdapter,t)}},lt=class{constructor(e,t,n){let r=ut(n);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,n){let r;try{r=this.channel.push(e,t,n)}catch{throw`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`}if(this.channel.pushBuffer.length>100){let e=this.channel.pushBuffer.shift();e.cancelTimeout(),this.socket.log(`channel`,`discarded push due to buffer overflow: ${e.event}`,e.payload())}return r}updateJoinPayload(e){let t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===xe.joined}isJoined(){return this.state===xe.joined}isJoining(){return this.state===xe.joining}isClosed(){return this.state===xe.closed}isLeaving(){return this.state===xe.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}};function ut(e){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},e.config)}}var dt;(function(e){e.ALL=`*`,e.INSERT=`INSERT`,e.UPDATE=`UPDATE`,e.DELETE=`DELETE`})(dt||={});var ft;(function(e){e.BROADCAST=`broadcast`,e.PRESENCE=`presence`,e.POSTGRES_CHANGES=`postgres_changes`,e.SYSTEM=`system`})(ft||={});var pt;(function(e){e.SUBSCRIBED=`SUBSCRIBED`,e.TIMED_OUT=`TIMED_OUT`,e.CLOSED=`CLOSED`,e.CHANNEL_ERROR=`CHANNEL_ERROR`})(pt||={});var mt=class e{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},n){if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,``),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},t.config),this.channelAdapter=new lt(this.socket.socketAdapter,e,this.params),this.presence=new ct(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Pe(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&this.params.config?.broadcast?.replay)throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(e,t=this.timeout){if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){let{config:{broadcast:n,presence:r,private:i}}=this.params,a=this.bindings.postgres_changes?.map(e=>e.filter)??[],o=!!this.bindings[ft.PRESENCE]&&this.bindings[ft.PRESENCE].length>0||this.params.config.presence?.enabled===!0,s={},c={broadcast:n,presence:Object.assign(Object.assign({},r),{enabled:o}),postgres_changes:a,private:i};this.socket.accessTokenValue&&(s.access_token=this.socket.accessTokenValue),this._onError(t=>{e?.(pt.CHANNEL_ERROR,t)}),this._onClose(()=>e?.(pt.CLOSED)),this.updateJoinPayload(Object.assign({config:c},s)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive(`ok`,async({postgres_changes:t})=>{if(this.socket._isManualToken()||this.socket.setAuth(),t===void 0){e?.(pt.SUBSCRIBED);return}this._updatePostgresBindings(t,e)}).receive(`error`,t=>{this.state=xe.errored,e?.(pt.CHANNEL_ERROR,Error(JSON.stringify(Object.values(t).join(`, `)||`error`)))}).receive(`timeout`,()=>{e?.(pt.TIMED_OUT)})}return this}_updatePostgresBindings(t,n){let r=this.bindings.postgres_changes,i=r?.length??0,a=[];for(let o=0;o<i;o++){let i=r[o],{filter:{event:s,schema:c,table:l,filter:u}}=i,d=t&&t[o];if(d&&d.event===s&&e.isFilterValueEqual(d.schema,c)&&e.isFilterValueEqual(d.table,l)&&e.isFilterValueEqual(d.filter,u))a.push(Object.assign(Object.assign({},i),{id:d.id}));else{this.unsubscribe(),this.state=xe.errored,n?.(pt.CHANNEL_ERROR,Error(`mismatch between server and client bindings for postgres changes`));return}}this.bindings.postgres_changes=a,this.state!=xe.errored&&n&&n(pt.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:`presence`,event:`track`,payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:`presence`,event:`untrack`},e)}on(e,t,n){let r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===ft.PRESENCE||e===ft.POSTGRES_CHANGES;if(r&&i)throw this.socket.log(`channel`,`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,n)}async httpSend(e,t,n={}){if(t==null)return Promise.reject(`Payload is required for httpSend()`);let r={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(r.Authorization=`Bearer ${this.socket.accessTokenValue}`);let i={method:`POST`,headers:r,body:JSON.stringify({messages:[{topic:this.subTopic,event:e,payload:t,private:this.private}]})},a=await this._fetchWithTimeout(this.broadcastEndpointURL,i,n.timeout??this.timeout);if(a.status===202)return{success:!0};let o=a.statusText;try{let e=await a.json();o=e.error||e.message||o}catch{}return Promise.reject(Error(o))}async send(e,t={}){if(!this.channelAdapter.canPush()&&e.type===`broadcast`){console.warn(`Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`);let{event:n,payload:r}=e,i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a={method:`POST`,headers:i,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:r,private:this.private}]})};try{let e=await this._fetchWithTimeout(this.broadcastEndpointURL,a,t.timeout??this.timeout);return await e.body?.cancel(),e.ok?`ok`:`error`}catch(e){return e.name===`AbortError`?`timed out`:`error`}}else return new Promise(n=>{let r=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type===`broadcast`&&!this.params?.config?.broadcast?.ack&&n(`ok`),r.receive(`ok`,()=>n(`ok`)),r.receive(`error`,()=>n(`error`)),r.receive(`timeout`,()=>n(`timed out`))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive(`ok`,()=>t(`ok`)).receive(`timeout`,()=>t(`timed out`)).receive(`error`,()=>t(`error`))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(i),a}_on(e,t,n){let r=e.toLocaleLowerCase(),i={type:r,filter:t,callback:n,ref:this.channelAdapter.on(e,n)};return this.bindings[r]?this.bindings[r].push(i):this.bindings[r]=[i],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,n)=>{let r=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(r,n))return!1;let i=this.bindings[r]?.find(t=>t.ref===e.ref);if(!i)return!0;if([`broadcast`,`presence`,`postgres_changes`].includes(r))if(`id`in i){let e=i.id,n=i.filter?.event;return e&&t.ids?.includes(e)&&(n===`*`||n?.toLocaleLowerCase()===t.data?.type.toLocaleLowerCase())}else{let e=(i?.filter?.event)?.toLocaleLowerCase();return e===`*`||e===(t?.event)?.toLocaleLowerCase()}else return i.type.toLocaleLowerCase()===r})}_notThisChannelEvent(e,t){let{close:n,error:r,leave:i,join:a}=Se;return t&&[n,r,i,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,n)=>{if(typeof t==`object`&&`ids`in t){let e=t.data,{schema:n,table:r,commit_timestamp:i,type:a,errors:o}=e;return Object.assign(Object.assign({},{schema:n,table:r,commit_timestamp:i,eventType:a,new:{},old:{},errors:o}),this._getPayloadRecords(e))}return t})}copyBindings(e){if(this.joinedOnce)throw Error(`cannot copy bindings into joined channel`);for(let t in e.bindings)for(let n of e.bindings[t])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}_getPayloadRecords(e){let t={new:{},old:{}};return(e.type===`INSERT`||e.type===`UPDATE`)&&(t.new=Te(e.columns,e.record)),(e.type===`UPDATE`||e.type===`DELETE`)&&(t.old=Te(e.columns,e.old_record)),t}},ht=class{constructor(e,t){this.socket=new tt(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,n,r=1e4){return new Promise(i=>{setTimeout(()=>i(`timeout`),r),this.socket.disconnect(()=>{e(),i(`ok`)},t,n)})}push(e){this.socket.push(e)}log(e,t,n){this.socket.log(e,t,n)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Ce.connecting}isDisconnecting(){return this.socket.connectionState()==Ce.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}},gt={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},_t=[1e3,2e3,5e3,1e4],vt=1e4,yt=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,bt=class{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){if(this.channels=[],this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint=``,this.headers={},this.params={},this.ref=0,this.serializer=new we,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!t?.params?.apikey)throw Error(`API key is required to connect to Realtime`);this.apiKey=t.params.apikey,this.socketAdapter=new ht(e,this._initializeOptions(t)),this.httpEndpoint=Pe(e),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely(`connect`),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){let t=e.message;throw t.includes(`Node.js`)?Error(`${t}\n\nTo use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this.isDisconnecting()?`ok`:await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){let t=await e.unsubscribe();return t===`ok`&&e.teardown(),this.channels.length===0&&this.disconnect(),t}async removeAllChannels(){let e=this.channels.map(async e=>{let t=await e.unsubscribe();return e.teardown(),t}),t=await Promise.all(e);return this.disconnect(),t}log(e,t,n){this.socketAdapter.log(e,t,n)}connectionState(){return this.socketAdapter.connectionState()||Ce.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){let n=`realtime:${e}`,r=this.getChannels().find(e=>e.topic===n);if(r)return r;{let n=new mt(`realtime:${e}`,t,this);return this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic)}async _performAuth(e=null){let t,n=!1;if(e)t=e,n=!0;else if(this.accessToken)try{t=await this.accessToken()}catch(e){this.log(`error`,`Error fetching access token from callback`,e),t=this.accessTokenValue}else t=this.accessTokenValue;n?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(e=>{let n={access_token:t,version:ge};t&&e.updateJoinPayload(n),e.joinedOnce&&e.channelAdapter.isJoined()&&e.channelAdapter.push(Se.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e=`general`){this._isManualToken()||this.setAuth().catch(t=>{this.log(`error`,`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(e=>{this.log(`error`,`error waiting for auth on connect`,e)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,n)=>{t==`sent`&&this._setAuthSafely(),e&&e(t,n)}}_startWorkerHeartbeat(){this.workerUrl?this.log(`worker`,`starting worker for from ${this.workerUrl}`):this.log(`worker`,`starting default worker`);let e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log(`worker`,`worker error`,e.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=e=>{e.data.event===`keepAlive`&&this.sendHeartbeat()},this.workerRef.postMessage({event:`start`,interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&=(this.log(`worker`,`terminating worker`),this.workerRef.terminate(),void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{let e=new Blob([yt],{type:`application/javascript`});t=URL.createObjectURL(e)}return t}_initializeOptions(e){this.worker=e?.worker??!1,this.accessToken=e?.accessToken??null;let t={};t.timeout=e?.timeout??be,t.heartbeatIntervalMs=e?.heartbeatIntervalMs??gt.HEARTBEAT_INTERVAL,t.transport=e?.transport??he.getWebSocketConstructor(),t.params=e?.params,t.logger=e?.logger,t.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),t.reconnectAfterMs=e?.reconnectAfterMs??(e=>_t[e-1]||vt);let n,r,i=e?.vsn??ye;switch(i){case _e:n=(e,t)=>t(JSON.stringify(e)),r=(e,t)=>t(JSON.parse(e));break;case ve:n=this.serializer.encode.bind(this.serializer),r=this.serializer.decode.bind(this.serializer);break;default:throw Error(`Unsupported serializer version: ${t.vsn}`)}if(t.vsn=i,t.encode=e?.encode??n,t.decode=e?.decode??r,t.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,t.params=Object.assign(Object.assign({},t.params),{log_level:this.logLevel})),this.worker){if(typeof window<`u`&&!window.Worker)throw Error(`Web Worker is not supported`);this.workerUrl=e?.workerUrl,t.autoSendHeartbeat=!this.worker}return t}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}},xt=class extends Error{constructor(e,t){super(e),this.name=`IcebergError`,this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType===`CommitStateUnknownException`||[500,502,504].includes(t.status)&&t.icebergType?.includes(`CommitState`)===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function St(e,t,n){let r=new URL(t,e);if(n)for(let[e,t]of Object.entries(n))t!==void 0&&r.searchParams.set(e,t);return r.toString()}async function Ct(e){return!e||e.type===`none`?{}:e.type===`bearer`?{Authorization:`Bearer ${e.token}`}:e.type===`header`?{[e.name]:e.value}:e.type===`custom`?await e.getHeaders():{}}function wt(e){let t=e.fetchImpl??globalThis.fetch;return{async request({method:n,path:r,query:i,body:a,headers:o}){let s=St(e.baseUrl,r,i),c=await Ct(e.auth),l=await t(s,{method:n,headers:{...a?{"Content-Type":`application/json`}:{},...c,...o},body:a?JSON.stringify(a):void 0}),u=await l.text(),d=(l.headers.get(`content-type`)||``).includes(`application/json`),f=d&&u?JSON.parse(u):u;if(!l.ok){let e=d?f:void 0,t=e?.error;throw new xt(t?.message??`Request failed with status ${l.status}`,{status:l.status,icebergType:t?.type,icebergCode:t?.code,details:e})}return{status:l.status,headers:l.headers,data:f}}}}function Tt(e){return e.join(``)}var Et=class{constructor(e,t=``){this.client=e,this.prefix=t}async listNamespaces(e){let t=e?{parent:Tt(e.namespace)}:void 0;return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(e=>({namespace:e}))}async createNamespace(e,t){let n={namespace:e.namespace,properties:t?.properties};return(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces`,body:n})).data}async dropNamespace(e){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Tt(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Tt(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Tt(e.namespace)}`}),!0}catch(e){if(e instanceof xt&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(e){if(e instanceof xt&&e.status===409)return;throw e}}};function Dt(e){return e.join(``)}var Ot=class{constructor(e,t=``,n){this.client=e,this.prefix=t,this.accessDelegation=n}async listTables(e){return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Dt(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){let n={};return this.accessDelegation&&(n[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Dt(e.namespace)}/tables`,body:t,headers:n})).data.metadata}async updateTable(e,t){let n=await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Dt(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":n.data[`metadata-location`],metadata:n.data.metadata}}async dropTable(e,t){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Dt(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String(t?.purge??!1)}})}async loadTable(e){let t={};return this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Dt(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){let t={};this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation);try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Dt(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(e){if(e instanceof xt&&e.status===404)return!1;throw e}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(n){if(n instanceof xt&&n.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw n}}},kt=class{constructor(e){let t=`v1`;e.catalogName&&(t+=`/${e.catalogName}`),this.client=wt({baseUrl:e.baseUrl.endsWith(`/`)?e.baseUrl:`${e.baseUrl}/`,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=e.accessDelegation?.join(`,`),this.namespaceOps=new Et(this.client,t),this.tableOps=new Ot(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}},At=class extends Error{constructor(e,t=`storage`,n,r){super(e),this.__isStorageError=!0,this.namespace=t,this.name=t===`vectors`?`StorageVectorsError`:`StorageError`,this.status=n,this.statusCode=r}};function jt(e){return typeof e==`object`&&!!e&&`__isStorageError`in e}var Mt=class extends At{constructor(e,t,n,r=`storage`){super(e,r,t,n),this.name=r===`vectors`?`StorageVectorsApiError`:`StorageApiError`,this.status=t,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},Nt=class extends At{constructor(e,t,n=`storage`){super(e,n),this.name=n===`vectors`?`StorageVectorsUnknownError`:`StorageUnknownError`,this.originalError=t}},Pt=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Ft=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},It=e=>{if(Array.isArray(e))return e.map(e=>It(e));if(typeof e==`function`||e!==Object(e))return e;let t={};return Object.entries(e).forEach(([e,n])=>{let r=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,``));t[r]=It(n)}),t},Lt=e=>!e||typeof e!=`string`||e.length===0||e.length>100||e.trim()!==e||e.includes(`/`)||e.includes(`\\`)?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e);function Rt(e){"@babel/helpers - typeof";return Rt=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Rt(e)}function zt(e,t){if(Rt(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Rt(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Bt(e){var t=zt(e,`string`);return Rt(t)==`symbol`?t:t+``}function Vt(e,t,n){return(t=Bt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ht(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ht(Object(n),!0).forEach(function(t){Vt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ht(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Ut=e=>e.msg||e.message||e.error_description||(typeof e.error==`string`?e.error:e.error?.message)||JSON.stringify(e),Wt=async(e,t,n,r)=>{if(typeof e==`object`&&e&&typeof e.json==`function`){let n=e,i=parseInt(n.status,10);Number.isFinite(i)||(i=500),n.json().then(e=>{let n=e?.statusCode||e?.code||i+``;t(new Mt(Ut(e),i,n,r))}).catch(()=>{let e=i+``;t(new Mt(n.statusText||`HTTP ${i} error`,i,e,r))})}else t(new Nt(Ut(e),e,r))},Gt=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`||e===`HEAD`||!r?B(B({},i),n):(Ft(r)?(i.headers=B({"Content-Type":`application/json`},t?.headers),i.body=JSON.stringify(r)):i.body=r,t?.duplex&&(i.duplex=t.duplex),B(B({},i),n))};async function Kt(e,t,n,r,i,a,o){return new Promise((s,c)=>{e(n,Gt(t,r,i,a)).then(e=>{if(!e.ok)throw e;if(r?.noResolveJson)return e;if(o===`vectors`){let t=e.headers.get(`content-type`);if(e.headers.get(`content-length`)===`0`||e.status===204||!t||!t.includes(`application/json`))return{}}return e.json()}).then(e=>s(e)).catch(e=>Wt(e,c,r,o))})}function qt(e=`storage`){return{get:async(t,n,r,i)=>Kt(t,`GET`,n,r,i,void 0,e),post:async(t,n,r,i,a)=>Kt(t,`POST`,n,i,a,r,e),put:async(t,n,r,i,a)=>Kt(t,`PUT`,n,i,a,r,e),head:async(t,n,r,i)=>Kt(t,`HEAD`,n,B(B({},r),{},{noResolveJson:!0}),i,void 0,e),remove:async(t,n,r,i,a)=>Kt(t,`DELETE`,n,i,a,r,e)}}var{get:Jt,post:Yt,put:Xt,head:Zt,remove:Qt}=qt(`storage`),V=qt(`vectors`),$t=class{constructor(e,t={},n,r=`storage`){this.shouldThrowOnError=!1,this.url=e,this.headers=t,this.fetch=Pt(n),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=B(B({},this.headers),{},{[e]:t}),this}async handleOperation(e){var t=this;try{return{data:await e(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(jt(e))return{data:null,error:e};throw e}}},en=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t}then(e,t){return this.execute().then(e,t)}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(jt(t))return{data:null,error:t};throw t}}},tn=Symbol.toStringTag,nn=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[tn]=`BlobDownloadBuilder`,this.promise=null}asStream(){return new en(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(jt(t))return{data:null,error:t};throw t}}},rn={limit:100,offset:0,sortBy:{column:`name`,order:`asc`}},an={cacheControl:`3600`,contentType:`text/plain;charset=UTF-8`,upsert:!1},on=class extends $t{constructor(e,t={},n,r){super(e,t,r,`storage`),this.bucketId=n}async uploadOrUpdate(e,t,n,r){var i=this;return i.handleOperation(async()=>{let a,o=B(B({},an),r),s=B(B({},i.headers),e===`POST`&&{"x-upsert":String(o.upsert)}),c=o.metadata;typeof Blob<`u`&&n instanceof Blob?(a=new FormData,a.append(`cacheControl`,o.cacheControl),c&&a.append(`metadata`,i.encodeMetadata(c)),a.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(a=n,a.has(`cacheControl`)||a.append(`cacheControl`,o.cacheControl),c&&!a.has(`metadata`)&&a.append(`metadata`,i.encodeMetadata(c))):(a=n,s[`cache-control`]=`max-age=${o.cacheControl}`,s[`content-type`]=o.contentType,c&&(s[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&a instanceof ReadableStream||a&&typeof a==`object`&&`pipe`in a&&typeof a.pipe==`function`)&&!o.duplex&&(o.duplex=`half`)),r?.headers&&(s=B(B({},s),r.headers));let l=i._removeEmptyFolders(t),u=i._getFinalPath(l),d=await(e==`PUT`?Xt:Yt)(i.fetch,`${i.url}/object/${u}`,a,B({headers:s},o?.duplex?{duplex:o.duplex}:{}));return{path:l,id:d.Id,fullPath:d.Key}})}async upload(e,t,n){return this.uploadOrUpdate(`POST`,e,t,n)}async uploadToSignedUrl(e,t,n,r){var i=this;let a=i._removeEmptyFolders(e),o=i._getFinalPath(a),s=new URL(i.url+`/object/upload/sign/${o}`);return s.searchParams.set(`token`,t),i.handleOperation(async()=>{let e,t=B(B({},an),r),o=B(B({},i.headers),{"x-upsert":String(t.upsert)});return typeof Blob<`u`&&n instanceof Blob?(e=new FormData,e.append(`cacheControl`,t.cacheControl),e.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(e=n,e.append(`cacheControl`,t.cacheControl)):(e=n,o[`cache-control`]=`max-age=${t.cacheControl}`,o[`content-type`]=t.contentType),{path:a,fullPath:(await Xt(i.fetch,s.toString(),e,{headers:o})).Key}})}async createSignedUploadUrl(e,t){var n=this;return n.handleOperation(async()=>{let r=n._getFinalPath(e),i=B({},n.headers);t?.upsert&&(i[`x-upsert`]=`true`);let a=await Yt(n.fetch,`${n.url}/object/upload/sign/${r}`,{},{headers:i}),o=new URL(n.url+a.url),s=o.searchParams.get(`token`);if(!s)throw new At(`No token returned by API`);return{signedUrl:o.toString(),path:e,token:s}})}async update(e,t,n){return this.uploadOrUpdate(`PUT`,e,t,n)}async move(e,t,n){var r=this;return r.handleOperation(async()=>await Yt(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers}))}async copy(e,t,n){var r=this;return r.handleOperation(async()=>({path:(await Yt(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(e,t,n){var r=this;return r.handleOperation(async()=>{let i=r._getFinalPath(e),a=typeof n?.transform==`object`&&n.transform!==null&&Object.keys(n.transform).length>0,o=await Yt(r.fetch,`${r.url}/object/sign/${i}`,B({expiresIn:t},a?{transform:n.transform}:{}),{headers:r.headers}),s=n?.download?`&download=${n.download===!0?``:n.download}`:``,c=a&&o.signedURL.includes(`/object/sign/`)?o.signedURL.replace(`/object/sign/`,`/render/image/sign/`):o.signedURL;return{signedUrl:encodeURI(`${r.url}${c}${s}`)}})}async createSignedUrls(e,t,n){var r=this;return r.handleOperation(async()=>{let i=await Yt(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:e},{headers:r.headers}),a=n?.download?`&download=${n.download===!0?``:n.download}`:``;return i.map(e=>B(B({},e),{},{signedUrl:e.signedURL?encodeURI(`${r.url}${e.signedURL}${a}`):null}))})}download(e,t,n){let r=t?.transform===void 0?`object`:`render/image/authenticated`,i=this.transformOptsToQueryString(t?.transform||{}),a=i?`?${i}`:``,o=this._getFinalPath(e);return new nn(()=>Jt(this.fetch,`${this.url}/${r}/${o}${a}`,{headers:this.headers,noResolveJson:!0},n),this.shouldThrowOnError)}async info(e){var t=this;let n=t._getFinalPath(e);return t.handleOperation(async()=>It(await Jt(t.fetch,`${t.url}/object/info/${n}`,{headers:t.headers})))}async exists(e){var t=this;let n=t._getFinalPath(e);try{return await Zt(t.fetch,`${t.url}/object/${n}`,{headers:t.headers}),{data:!0,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(jt(e)){let t=e instanceof Mt?e.status:e instanceof Nt?e.originalError?.status:void 0;if(t!==void 0&&[400,404].includes(t))return{data:!1,error:e}}throw e}}getPublicUrl(e,t){let n=this._getFinalPath(e),r=[],i=t?.download?`download=${t.download===!0?``:t.download}`:``;i!==``&&r.push(i);let a=t?.transform===void 0?`object`:`render/image`,o=this.transformOptsToQueryString(t?.transform||{});o!==``&&r.push(o);let s=r.join(`&`);return s!==``&&(s=`?${s}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}${s}`)}}}async remove(e){var t=this;return t.handleOperation(async()=>await Qt(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}))}async list(e,t,n){var r=this;return r.handleOperation(async()=>{let i=B(B(B({},rn),t),{},{prefix:e||``});return await Yt(r.fetch,`${r.url}/object/list/${r.bucketId}`,i,{headers:r.headers},n)})}async listV2(e,t){var n=this;return n.handleOperation(async()=>{let r=B({},e);return await Yt(n.fetch,`${n.url}/object/list-v2/${n.bucketId}`,r,{headers:n.headers},t)})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<`u`?Buffer.from(e).toString(`base64`):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,``)}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,``).replace(/\/+/g,`/`)}transformOptsToQueryString(e){let t=[];return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join(`&`)}},sn=`2.101.1`,cn={"X-Client-Info":`storage-js/${sn}`},ln=class extends $t{constructor(e,t={},n,r){let i=new URL(e);r?.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes(`storage.supabase.`)&&(i.hostname=i.hostname.replace(`supabase.`,`storage.supabase.`));let a=i.href.replace(/\/$/,``),o=B(B({},cn),t);super(a,o,n,`storage`)}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=t.listBucketOptionsToQueryString(e);return await Jt(t.fetch,`${t.url}/bucket${n}`,{headers:t.headers})})}async getBucket(e){var t=this;return t.handleOperation(async()=>await Jt(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}))}async createBucket(e,t={public:!1}){var n=this;return n.handleOperation(async()=>await Yt(n.fetch,`${n.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async updateBucket(e,t){var n=this;return n.handleOperation(async()=>await Xt(n.fetch,`${n.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async emptyBucket(e){var t=this;return t.handleOperation(async()=>await Yt(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Qt(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}listBucketOptionsToQueryString(e){let t={};return e&&(`limit`in e&&(t.limit=String(e.limit)),`offset`in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?`?`+new URLSearchParams(t).toString():``}},un=class extends $t{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=B(B({},cn),t);super(r,i,n,`storage`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await Yt(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}))}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=new URLSearchParams;e?.limit!==void 0&&n.set(`limit`,e.limit.toString()),e?.offset!==void 0&&n.set(`offset`,e.offset.toString()),e?.sortColumn&&n.set(`sortColumn`,e.sortColumn),e?.sortOrder&&n.set(`sortOrder`,e.sortOrder),e?.search&&n.set(`search`,e.search);let r=n.toString(),i=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return await Jt(t.fetch,i,{headers:t.headers})})}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Qt(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}from(e){var t=this;if(!Lt(e))throw new At(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);let n=new kt({baseUrl:this.url,catalogName:e,auth:{type:`custom`,getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(n,{get(e,t){let n=e[t];return typeof n==`function`?async(...t)=>{try{return{data:await n.apply(e,t),error:null}}catch(e){if(r)throw e;return{data:null,error:e}}}:n}})}},dn=class extends $t{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=B(B({},cn),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createIndex(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{})}async getIndex(e,t){var n=this;return n.handleOperation(async()=>await V.post(n.fetch,`${n.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers}))}async listIndexes(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}))}async deleteIndex(e,t){var n=this;return n.handleOperation(async()=>await V.post(n.fetch,`${n.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers})||{})}},fn=class extends $t{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=B(B({},cn),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async putVectors(e){var t=this;if(e.vectors.length<1||e.vectors.length>500)throw Error(`Vector batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{})}async getVectors(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}))}async listVectors(e){var t=this;if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw Error(`segmentCount must be between 1 and 16`);if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}))}async queryVectors(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}))}async deleteVectors(e){var t=this;if(e.keys.length<1||e.keys.length>500)throw Error(`Keys batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{})}},pn=class extends $t{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=B(B({},cn),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}async getBucket(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}))}async listBuckets(e={}){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}},mn=class extends pn{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new hn(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,n=this;return t().call(n,e)}async getBucket(e){var t=()=>super.getBucket,n=this;return t().call(n,e)}async listBuckets(e={}){var t=()=>super.listBuckets,n=this;return t().call(n,e)}async deleteBucket(e){var t=()=>super.deleteBucket,n=this;return t().call(n,e)}},hn=class extends dn{constructor(e,t,n,r){super(e,t,r),this.vectorBucketName=n}async createIndex(e){var t=()=>super.createIndex,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,n=this;return t().call(n,n.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,n=this;return t().call(n,n.vectorBucketName,e)}index(e){return new gn(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},gn=class extends fn{constructor(e,t,n,r,i){super(e,t,i),this.vectorBucketName=n,this.indexName=r}async putVectors(e){var t=()=>super.putVectors,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async getVectors(e){var t=()=>super.getVectors,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}},_n=class extends ln{constructor(e,t={},n,r){super(e,t,n,r)}from(e){return new on(this.url,this.headers,e,this.fetch)}get vectors(){return new mn(this.url+`/vector`,{headers:this.headers,fetch:this.fetch})}get analytics(){return new un(this.url+`/iceberg`,this.headers,this.fetch)}},vn=`2.101.1`,yn=30*1e3,bn=3*yn,xn=`http://localhost:9999`,Sn=`supabase.auth.token`,Cn={"X-Client-Info":`gotrue-js/${vn}`},wn=`X-Supabase-Api-Version`,Tn={"2024-01-01":{timestamp:Date.parse(`2024-01-01T00:00:00.0Z`),name:`2024-01-01`}},En=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Dn=class extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name=`AuthError`,this.status=t,this.code=n}};function H(e){return typeof e==`object`&&!!e&&`__isAuthError`in e}var On=class extends Dn{constructor(e,t,n){super(e,t,n),this.name=`AuthApiError`,this.status=t,this.code=n}};function kn(e){return H(e)&&e.name===`AuthApiError`}var An=class extends Dn{constructor(e,t){super(e),this.name=`AuthUnknownError`,this.originalError=t}},jn=class extends Dn{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}},U=class extends jn{constructor(){super(`Auth session missing!`,`AuthSessionMissingError`,400,void 0)}};function Mn(e){return H(e)&&e.name===`AuthSessionMissingError`}var Nn=class extends jn{constructor(){super(`Auth session or user missing`,`AuthInvalidTokenResponseError`,500,void 0)}},Pn=class extends jn{constructor(e){super(e,`AuthInvalidCredentialsError`,400,void 0)}},Fn=class extends jn{constructor(e,t=null){super(e,`AuthImplicitGrantRedirectError`,500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}};function In(e){return H(e)&&e.name===`AuthImplicitGrantRedirectError`}var Ln=class extends jn{constructor(e,t=null){super(e,`AuthPKCEGrantCodeExchangeError`,500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}},Rn=class extends jn{constructor(){super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,`AuthPKCECodeVerifierMissingError`,400,`pkce_code_verifier_not_found`)}},zn=class extends jn{constructor(e,t){super(e,`AuthRetryableFetchError`,t,void 0)}};function Bn(e){return H(e)&&e.name===`AuthRetryableFetchError`}var Vn=class extends jn{constructor(e,t,n){super(e,`AuthWeakPasswordError`,t,`weak_password`),this.reasons=n}},Hn=class extends jn{constructor(e){super(e,`AuthInvalidJwtError`,400,`invalid_jwt`)}},Un=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``),Wn=` 	
\r=`.split(``),Gn=(()=>{let e=Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<Wn.length;t+=1)e[Wn[t].charCodeAt(0)]=-2;for(let t=0;t<Un.length;t+=1)e[Un[t].charCodeAt(0)]=t;return e})();function Kn(e,t,n){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;)n(Un[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6;else if(t.queuedBits>0)for(t.queue<<=6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;)n(Un[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6}function qn(e,t,n){let r=Gn[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else if(r===-2)return;else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}function Jn(e){let t=[],n=e=>{t.push(String.fromCodePoint(e))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=e=>{Zn(e,r,n)};for(let t=0;t<e.length;t+=1)qn(e.charCodeAt(t),i,a);return t.join(``)}function Yn(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function Xn(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){let t=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|t)+65536,n+=1}Yn(r,t)}}function Zn(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw Error(`Invalid UTF-8 sequence`);--t.utf8seq}else if(t.utf8seq>0){if(e<=127)throw Error(`Invalid UTF-8 sequence`);t.codepoint=t.codepoint<<6|e&63,--t.utf8seq,t.utf8seq===0&&n(t.codepoint)}}function Qn(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};for(let t=0;t<e.length;t+=1)qn(e.charCodeAt(t),n,r);return new Uint8Array(t)}function $n(e){let t=[];return Xn(e,e=>t.push(e)),new Uint8Array(t)}function er(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};return e.forEach(e=>Kn(e,n,r)),Kn(null,n,r),t.join(``)}function tr(e){return Math.round(Date.now()/1e3)+e}function nr(){return Symbol(`auth-callback`)}var W=()=>typeof window<`u`&&typeof document<`u`,rr={tested:!1,writable:!1},ir=()=>{if(!W())return!1;try{if(typeof globalThis.localStorage!=`object`)return!1}catch{return!1}if(rr.tested)return rr.writable;let e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),rr.tested=!0,rr.writable=!0}catch{rr.tested=!0,rr.writable=!1}return rr.writable};function ar(e){let t={},n=new URL(e);if(n.hash&&n.hash[0]===`#`)try{new URLSearchParams(n.hash.substring(1)).forEach((e,n)=>{t[n]=e})}catch{}return n.searchParams.forEach((e,n)=>{t[n]=e}),t}var or=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),sr=e=>typeof e==`object`&&!!e&&`status`in e&&`ok`in e&&`json`in e&&typeof e.json==`function`,cr=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},lr=async(e,t)=>{let n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return n}},G=async(e,t)=>{await e.removeItem(t)},ur=class e{constructor(){this.promise=new e.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}};ur.promiseConstructor=Promise;function dr(e){let t=e.split(`.`);if(t.length!==3)throw new Hn(`Invalid JWT structure`);for(let e=0;e<t.length;e++)if(!En.test(t[e]))throw new Hn(`JWT not in base64url format`);return{header:JSON.parse(Jn(t[0])),payload:JSON.parse(Jn(t[1])),signature:Qn(t[2]),raw:{header:t[0],payload:t[1]}}}async function fr(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function pr(e,t){return new Promise((n,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{let r=await e(i);if(!t(i,null,r)){n(r);return}}catch(e){if(!t(i,e)){r(e);return}}})()})}function mr(e){return(`0`+e.toString(16)).substr(-2)}function hr(){let e=new Uint32Array(56);if(typeof crypto>`u`){let e=``;for(let t=0;t<56;t++)e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random()*66));return e}return crypto.getRandomValues(e),Array.from(e,mr).join(``)}async function gr(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t),r=new Uint8Array(n);return Array.from(r).map(e=>String.fromCharCode(e)).join(``)}async function _r(e){if(!(typeof crypto<`u`&&crypto.subtle!==void 0&&typeof TextEncoder<`u`))return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),e;let t=await gr(e);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}async function vr(e,t,n=!1){let r=hr(),i=r;n&&(i+=`/PASSWORD_RECOVERY`),await cr(e,`${t}-code-verifier`,i);let a=await _r(r);return[a,r===a?`plain`:`s256`]}var yr=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function br(e){let t=e.headers.get(wn);if(!t||!t.match(yr))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function xr(e){if(!e)throw Error(`Missing exp claim`);if(e<=Math.floor(Date.now()/1e3))throw Error(`JWT has expired`)}function Sr(e){switch(e){case`RS256`:return{name:`RSASSA-PKCS1-v1_5`,hash:{name:`SHA-256`}};case`ES256`:return{name:`ECDSA`,namedCurve:`P-256`,hash:{name:`SHA-256`}};default:throw Error(`Invalid alg claim`)}}var Cr=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function wr(e){if(!Cr.test(e))throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)}function Tr(){return new Proxy({},{get:(e,t)=>{if(t===`__isUserNotAvailableProxy`)return!0;if(typeof t==`symbol`){let e=t.toString();if(e===`Symbol(Symbol.toPrimitive)`||e===`Symbol(Symbol.toStringTag)`||e===`Symbol(util.inspect.custom)`)return}throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Er(e,t){return new Proxy(e,{get:(e,n,r)=>{if(n===`__isInsecureUserWarningProxy`)return!0;if(typeof n==`symbol`){let t=n.toString();if(t===`Symbol(Symbol.toPrimitive)`||t===`Symbol(Symbol.toStringTag)`||t===`Symbol(util.inspect.custom)`||t===`Symbol(nodejs.util.inspect.custom)`)return Reflect.get(e,n,r)}return!t.value&&typeof n==`string`&&(console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),t.value=!0),Reflect.get(e,n,r)}})}function Dr(e){return JSON.parse(JSON.stringify(e))}var Or=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),kr=[502,503,504];async function Ar(e){if(!sr(e))throw new zn(Or(e),0);if(kr.includes(e.status))throw new zn(Or(e),e.status);let t;try{t=await e.json()}catch(e){throw new An(Or(e),e)}let n,r=br(e);if(r&&r.getTime()>=Tn[`2024-01-01`].timestamp&&typeof t==`object`&&t&&typeof t.code==`string`?n=t.code:typeof t==`object`&&t&&typeof t.error_code==`string`&&(n=t.error_code),!n){if(typeof t==`object`&&t&&typeof t.weak_password==`object`&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0))throw new Vn(Or(t),e.status,t.weak_password.reasons)}else if(n===`weak_password`)throw new Vn(Or(t),e.status,t.weak_password?.reasons||[]);else if(n===`session_not_found`)throw new U;throw new On(Or(t),e.status||500,n)}var jr=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`?i:(i.headers=Object.assign({"Content-Type":`application/json;charset=UTF-8`},t?.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function K(e,t,n,r){let i=Object.assign({},r?.headers);i[`X-Supabase-Api-Version`]||(i[wn]=Tn[`2024-01-01`].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);let a=r?.query??{};r?.redirectTo&&(a.redirect_to=r.redirectTo);let o=await Mr(e,t,n+(Object.keys(a).length?`?`+new URLSearchParams(a).toString():``),{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(o):{data:Object.assign({},o),error:null}}async function Mr(e,t,n,r,i,a){let o=jr(t,r,i,a),s;try{s=await e(n,Object.assign({},o))}catch(e){throw console.error(e),new zn(Or(e),0)}if(s.ok||await Ar(s),r?.noResolveJson)return s;try{return await s.json()}catch(e){await Ar(e)}}function Nr(e){let t=null;zr(e)&&(t=Object.assign({},e),e.expires_at||(t.expires_at=tr(e.expires_in)));let n=e.user??e;return{data:{session:t,user:n},error:null}}function Pr(e){let t=Nr(e);return!t.error&&e.weak_password&&typeof e.weak_password==`object`&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message==`string`&&e.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0)&&(t.data.weak_password=e.weak_password),t}function Fr(e){return{data:{user:e.user??e},error:null}}function Ir(e){return{data:e,error:null}}function Lr(e){let{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,o=A(e,[`action_link`,`email_otp`,`hashed_token`,`redirect_to`,`verification_type`]);return{data:{properties:{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},user:Object.assign({},o)},error:null}}function Rr(e){return e}function zr(e){return e.access_token&&e.refresh_token&&e.expires_in}var Br=[`global`,`local`,`others`],Vr=class{constructor({url:e=``,headers:t={},fetch:n}){this.url=e,this.headers=t,this.fetch=or(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)}}async signOut(e,t=Br[0]){if(Br.indexOf(t)<0)throw Error(`@supabase/auth-js: Parameter scope must be one of ${Br.join(`, `)}`);try{return await K(this.fetch,`POST`,`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}async inviteUserByEmail(e,t={}){try{return await K(this.fetch,`POST`,`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Fr})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async generateLink(e){try{let{options:t}=e,n=A(e,[`options`]),r=Object.assign(Object.assign({},n),t);return`newEmail`in n&&(r.new_email=n?.newEmail,delete r.newEmail),await K(this.fetch,`POST`,`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:Lr,redirectTo:t?.redirectTo})}catch(e){if(H(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(e){try{return await K(this.fetch,`POST`,`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Fr})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async listUsers(e){try{let t={nextPage:null,lastPage:0,total:0},n=await K(this.fetch,`GET`,`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:Rr});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(H(e))return{data:{users:[]},error:e};throw e}}async getUserById(e){wr(e);try{return await K(this.fetch,`GET`,`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Fr})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async updateUserById(e,t){wr(e);try{return await K(this.fetch,`PUT`,`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Fr})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async deleteUser(e,t=!1){wr(e);try{return await K(this.fetch,`DELETE`,`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:Fr})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async _listFactors(e){wr(e.userId);try{let{data:t,error:n}=await K(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})});return{data:t,error:n}}catch(e){if(H(e))return{data:null,error:e};throw e}}async _deleteFactor(e){wr(e.userId),wr(e.id);try{return{data:await K(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}async _listOAuthClients(e){try{let t={nextPage:null,lastPage:0,total:0},n=await K(this.fetch,`GET`,`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:Rr});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(H(e))return{data:{clients:[]},error:e};throw e}}async _createOAuthClient(e){try{return await K(this.fetch,`POST`,`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _getOAuthClient(e){try{return await K(this.fetch,`GET`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _updateOAuthClient(e,t){try{return await K(this.fetch,`PUT`,`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _deleteOAuthClient(e){try{return await K(this.fetch,`DELETE`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(e){try{return await K(this.fetch,`POST`,`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _listCustomProviders(e){try{let t={};return e?.type&&(t.type=e.type),await K(this.fetch,`GET`,`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:e=>({data:{providers:e?.providers??[]},error:null})})}catch(e){if(H(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(e){try{return await K(this.fetch,`POST`,`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _getCustomProvider(e){try{return await K(this.fetch,`GET`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _updateCustomProvider(e,t){try{return await K(this.fetch,`PUT`,`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _deleteCustomProvider(e){try{return await K(this.fetch,`DELETE`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}};function Hr(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}var Ur={debug:!!(globalThis&&ir()&&globalThis.localStorage&&globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`)===`true`)},Wr=class extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}},Gr=class extends Wr{};async function Kr(e,t,n){Ur.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquire lock`,e,t);let r=new globalThis.AbortController,i;t>0&&(i=setTimeout(()=>{r.abort(),Ur.debug&&console.log(`@supabase/gotrue-js: navigatorLock acquire timed out`,e)},t)),await Promise.resolve();try{return await globalThis.navigator.locks.request(e,t===0?{mode:`exclusive`,ifAvailable:!0}:{mode:`exclusive`,signal:r.signal},async r=>{if(r){clearTimeout(i),Ur.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquired`,e,r.name);try{return await n()}finally{Ur.debug&&console.log(`@supabase/gotrue-js: navigatorLock: released`,e,r.name)}}else if(t===0)throw Ur.debug&&console.log(`@supabase/gotrue-js: navigatorLock: not immediately available`,e),new Gr(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);else{if(Ur.debug)try{let e=await globalThis.navigator.locks.query();console.log(`@supabase/gotrue-js: Navigator LockManager state`,JSON.stringify(e,null,`  `))}catch(e){console.warn(`@supabase/gotrue-js: Error when querying Navigator LockManager state`,e)}return console.warn(`@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request`),clearTimeout(i),await n()}})}catch(a){if(t>0&&clearTimeout(i),a?.name===`AbortError`&&t>0){if(r.signal.aborted)return Ur.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock`,e),console.warn(`@supabase/gotrue-js: Lock "${e}" was not released within ${t}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,{mode:`exclusive`,steal:!0},async t=>{if(t){Ur.debug&&console.log(`@supabase/gotrue-js: navigatorLock: recovered (stolen)`,e,t.name);try{return await n()}finally{Ur.debug&&console.log(`@supabase/gotrue-js: navigatorLock: released (stolen)`,e,t.name)}}else return console.warn(`@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true`),await n()}));throw Ur.debug&&console.log(`@supabase/gotrue-js: navigatorLock: lock was stolen by another request`,e),new Gr(`Lock "${e}" was released because another request stole it`)}throw a}}function qr(){if(typeof globalThis!=`object`)try{Object.defineProperty(Object.prototype,`__magic__`,{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<`u`&&(self.globalThis=self)}}function Jr(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function Yr(e){return parseInt(e,16)}function Xr(e){let t=new TextEncoder().encode(e);return`0x`+Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function Zr(e){let{chainId:t,domain:n,expirationTime:r,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:s,resources:c,scheme:l,uri:u,version:d}=e;if(!Number.isInteger(t))throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);if(a&&a.length<8)throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);if(d!==`1`)throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(e.statement?.includes(`
`))throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);let f=Jr(e.address),p=`${l?`${l}://${n}`:n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement?`${e.statement}\n`:``}`,m=`URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a?`\nNonce: ${a}`:``}\nIssued At: ${i.toISOString()}`;if(r&&(m+=`\nExpiration Time: ${r.toISOString()}`),o&&(m+=`\nNot Before: ${o.toISOString()}`),s&&(m+=`\nRequest ID: ${s}`),c){let e=`
Resources:`;for(let t of c){if(!t||typeof t!=`string`)throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);e+=`\n- ${t}`}m+=e}return`${p}\n${m}`}var q=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=r??(n instanceof Error?n.name:void 0)??`Unknown Error`,this.code=t}},Qr=class extends q{constructor(e,t){super({code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:t,message:e}),this.name=`WebAuthnUnknownError`,this.originalError=t}};function $r({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new q({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new q({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new q({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new q({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new q({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new q({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new q({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new q({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!oi(t))return new q({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new q({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new q({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new q({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new q({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}function ei({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new q({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new q({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!oi(t))return new q({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new q({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new q({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new q({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}var ti=new class{createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}};function ni(e){if(!e)throw Error(`Credential creation options are required`);if(typeof PublicKeyCredential<`u`&&`parseCreationOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON==`function`)return PublicKeyCredential.parseCreationOptionsFromJSON(e);let{challenge:t,user:n,excludeCredentials:r}=e,i=A(e,[`challenge`,`user`,`excludeCredentials`]),a=Qn(t).buffer,o=Object.assign(Object.assign({},n),{id:Qn(n.id).buffer}),s=Object.assign(Object.assign({},i),{challenge:a,user:o});if(r&&r.length>0){s.excludeCredentials=Array(r.length);for(let e=0;e<r.length;e++){let t=r[e];s.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:Qn(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return s}function ri(e){if(!e)throw Error(`Credential request options are required`);if(typeof PublicKeyCredential<`u`&&`parseRequestOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON==`function`)return PublicKeyCredential.parseRequestOptionsFromJSON(e);let{challenge:t,allowCredentials:n}=e,r=A(e,[`challenge`,`allowCredentials`]),i=Qn(t).buffer,a=Object.assign(Object.assign({},r),{challenge:i});if(n&&n.length>0){a.allowCredentials=Array(n.length);for(let e=0;e<n.length;e++){let t=n[e];a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:Qn(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return a}function ii(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e;return{id:e.id,rawId:e.id,response:{attestationObject:er(new Uint8Array(e.response.attestationObject)),clientDataJSON:er(new Uint8Array(e.response.clientDataJSON))},type:`public-key`,clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:t.authenticatorAttachment??void 0}}function ai(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e,n=e.getClientExtensionResults(),r=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:er(new Uint8Array(r.authenticatorData)),clientDataJSON:er(new Uint8Array(r.clientDataJSON)),signature:er(new Uint8Array(r.signature)),userHandle:r.userHandle?er(new Uint8Array(r.userHandle)):void 0},type:`public-key`,clientExtensionResults:n,authenticatorAttachment:t.authenticatorAttachment??void 0}}function oi(e){return e===`localhost`||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function si(){return!!(W()&&`PublicKeyCredential`in window&&window.PublicKeyCredential&&`credentials`in navigator&&typeof(navigator==null?void 0:navigator.credentials)?.create==`function`&&typeof(navigator==null?void 0:navigator.credentials)?.get==`function`)}async function ci(e){try{let t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Qr(`Browser returned unexpected credential type`,t)}:{data:null,error:new Qr(`Empty credential response`,t)}}catch(t){return{data:null,error:$r({error:t,options:e})}}}async function li(e){try{let t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Qr(`Browser returned unexpected credential type`,t)}:{data:null,error:new Qr(`Empty credential response`,t)}}catch(t){return{data:null,error:ei({error:t,options:e})}}}var ui={hints:[`security-key`],authenticatorSelection:{authenticatorAttachment:`cross-platform`,requireResidentKey:!1,userVerification:`preferred`,residentKey:`discouraged`},attestation:`direct`},di={userVerification:`preferred`,hints:[`security-key`],attestation:`direct`};function fi(...e){let t=e=>typeof e==`object`&&!!e&&!Array.isArray(e),n=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),r={};for(let i of e)if(i)for(let e in i){let a=i[e];if(a!==void 0)if(Array.isArray(a))r[e]=a;else if(n(a))r[e]=a;else if(t(a)){let n=r[e];t(n)?r[e]=fi(n,a):r[e]=fi(a)}else r[e]=a}return r}function pi(e,t){return fi(ui,e,t||{})}function mi(e,t){return fi(di,e,t||{})}var hi=class{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:`webauthn`}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},i){try{let{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};let s=r??ti.createNewAbortSignal();if(a.webauthn.type===`create`){let{user:e}=a.webauthn.credential_options.publicKey;if(!e.name){let t=n;if(t)e.name=`${e.id}:${t}`;else{let t=(await this.client.getUser()).data.user,n=t?.user_metadata?.name||t?.email||t?.id||`User`;e.name=`${e.id}:${n}`}}e.displayName||=e.name}switch(a.webauthn.type){case`create`:{let{data:t,error:n}=await ci({publicKey:pi(a.webauthn.credential_options.publicKey,i?.create),signal:s});return t?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:t}},error:null}:{data:null,error:n}}case`request`:{let t=mi(a.webauthn.credential_options.publicKey,i?.request),{data:n,error:r}=await li(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:s}));return n?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:n}},error:null}:{data:null,error:r}}}}catch(e){return H(e)?{data:null,error:e}:{data:null,error:new An(`Unexpected error in challenge`,e)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new Dn(`rpId is required for WebAuthn authentication`)};try{if(!si())return{data:null,error:new An(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:i});if(!a)return{data:null,error:o};let{webauthn:s}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:s.type,rpId:t,rpOrigins:n,credential_response:s.credential_response}})}catch(e){return H(e)?{data:null,error:e}:{data:null,error:new An(`Unexpected error in authenticate`,e)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new Dn(`rpId is required for WebAuthn registration`)};try{if(!si())return{data:null,error:new An(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(t=>t.data?.all.find(t=>t.factor_type===`webauthn`&&t.friendly_name===e&&t.status!==`unverified`)).then(e=>e?this.client.mfa.unenroll({factorId:e?.id}):void 0),{data:null,error:o};let{data:s,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:i});return s?this._verify({factorId:a.id,challengeId:s.challengeId,webauthn:{rpId:t,rpOrigins:n,type:s.webauthn.type,credential_response:s.webauthn.credential_response}}):{data:null,error:c}}catch(e){return H(e)?{data:null,error:e}:{data:null,error:new An(`Unexpected error in register`,e)}}}};qr();var gi={url:xn,storageKey:Sn,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Cn,flowType:`implicit`,debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1};async function _i(e,t,n){return await n()}var vi={},yi=class e{get jwks(){return vi[this.storageKey]?.jwks??{keys:[]}}set jwks(e){vi[this.storageKey]=Object.assign(Object.assign({},vi[this.storageKey]),{jwks:e})}get jwks_cached_at(){return vi[this.storageKey]?.cachedAt??-(2**53-1)}set jwks_cached_at(e){vi[this.storageKey]=Object.assign(Object.assign({},vi[this.storageKey]),{cachedAt:e})}constructor(t){var n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let r=Object.assign(Object.assign({},gi),t);if(this.storageKey=r.storageKey,this.instanceID=e.nextInstanceID[this.storageKey]??0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug==`function`&&(this.logger=r.debug),this.instanceID>0&&W()){let e=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(e),this.logDebugMessages&&console.trace(e)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.admin=new Vr({url:r.url,headers:r.headers,fetch:r.fetch}),this.url=r.url,this.headers=r.headers,this.fetch=or(r.fetch),this.lock=r.lock||_i,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock?this.lock=r.lock:this.persistSession&&W()&&(globalThis==null?void 0:globalThis.navigator)?.locks?this.lock=Kr:this.lock=_i,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=-(2**53-1)),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new hi(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:ir()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Hr(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=Hr(this.memoryStorage)),W()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,e)}(n=this.broadcastChannel)==null||n.addEventListener(`message`,async e=>{this._debug(`received broadcast notification from other tab or client`,e);try{await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}catch(e){this._debug(`#broadcastChannel`,`error`,e)}})}r.skipAutoInitialize||this.initialize().catch(e=>{this._debug(`#initialize()`,`error`,e)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${vn}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise||=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise}async _initialize(){try{let e={},t=`none`;if(W()&&(e=ar(window.location.href),this._isImplicitGrantCallback(e)?t=`implicit`:await this._isPKCECallback(e)&&(t=`pkce`)),W()&&this.detectSessionInUrl&&t!==`none`){let{data:n,error:r}=await this._getSessionFromURL(e,t);if(r){if(this._debug(`#_initialize()`,`error detecting session from URL`,r),In(r)){let e=r.details?.code;if(e===`identity_already_exists`||e===`identity_not_found`||e===`single_identity_not_deletable`)return{error:r}}return{error:r}}let{session:i,redirectType:a}=n;return this._debug(`#_initialize()`,`detected session in URL`,i,`redirect type`,a),await this._saveSession(i),setTimeout(async()=>{a===`recovery`?await this._notifyAllSubscribers(`PASSWORD_RECOVERY`,i):await this._notifyAllSubscribers(`SIGNED_IN`,i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return H(e)?this._returnResult({error:e}):this._returnResult({error:new An(`Unexpected error during initialization`,e)})}finally{await this._handleVisibilityChange(),this._debug(`#_initialize()`,`end`)}}async signInAnonymously(e){try{let{data:t,error:n}=await K(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{data:e?.options?.data??{},gotrue_meta_security:{captcha_token:e?.options?.captchaToken}},xform:Nr});if(n||!t)return this._returnResult({data:{user:null,session:null},error:n});let r=t.session,i=t.user;return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,r)),this._returnResult({data:{user:i,session:r},error:null})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signUp(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e,a=null,o=null;this.flowType===`pkce`&&([a,o]=await vr(this.storage,this.storageKey)),t=await K(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,redirectTo:i?.emailRedirectTo,body:{email:n,password:r,data:i?.data??{},gotrue_meta_security:{captcha_token:i?.captchaToken},code_challenge:a,code_challenge_method:o},xform:Nr})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await K(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{phone:n,password:r,data:i?.data??{},channel:i?.channel??`sms`,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Nr})}else throw new Pn(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r||!n)return await G(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:r});let i=n.session,a=n.user;return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,i)),this._returnResult({data:{user:a,session:i},error:null})}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithPassword(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e;t=await K(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Pr})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await K(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Pr})}else throw new Pn(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){let e=new Nn;return this._returnResult({data:{user:null,session:null},error:e})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOAuth(e){return await this._handleProviderSignIn(e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:e.options?.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){let{chain:t}=e;switch(t){case`ethereum`:return await this.signInWithEthereum(e);case`solana`:return await this.signInWithSolana(e);default:throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!W()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`ethereum`in e&&typeof e.ethereum==`object`&&`request`in e.ethereum&&typeof e.ethereum.request==`function`)s=e.ethereum;else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href),l=await s.request({method:`eth_requestAccounts`}).then(e=>e).catch(()=>{throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)});if(!l||l.length===0)throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);let u=Jr(l[0]),d=o?.signInWithEthereum?.chainId;d||=Yr(await s.request({method:`eth_chainId`})),t=Zr({domain:c.host,address:u,statement:a,uri:c.href,version:`1`,chainId:d,nonce:o?.signInWithEthereum?.nonce,issuedAt:o?.signInWithEthereum?.issuedAt??new Date,expirationTime:o?.signInWithEthereum?.expirationTime,notBefore:o?.signInWithEthereum?.notBefore,requestId:o?.signInWithEthereum?.requestId,resources:o?.signInWithEthereum?.resources}),n=await s.request({method:`personal_sign`,params:[Xr(t),u]})}try{let{data:r,error:i}=await K(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`ethereum`,message:t,signature:n},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:Nr});if(i)throw i;if(!r||!r.session||!r.user){let e=new Nn;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSolana(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!W()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`solana`in e&&typeof e.solana==`object`&&(`signIn`in e.solana&&typeof e.solana.signIn==`function`||`signMessage`in e.solana&&typeof e.solana.signMessage==`function`))s=e.solana;else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href);if(`signIn`in s&&s.signIn){let e=await s.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},o?.signInWithSolana),{version:`1`,domain:c.host,uri:c.href}),a?{statement:a}:null)),r;if(Array.isArray(e)&&e[0]&&typeof e[0]==`object`)r=e[0];else if(e&&typeof e==`object`&&`signedMessage`in e&&`signature`in e)r=e;else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);if(`signedMessage`in r&&`signature`in r&&(typeof r.signedMessage==`string`||r.signedMessage instanceof Uint8Array)&&r.signature instanceof Uint8Array)t=typeof r.signedMessage==`string`?r.signedMessage:new TextDecoder().decode(r.signedMessage),n=r.signature;else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)}else{if(!(`signMessage`in s)||typeof s.signMessage!=`function`||!(`publicKey`in s)||typeof s!=`object`||!s.publicKey||!(`toBase58`in s.publicKey)||typeof s.publicKey.toBase58!=`function`)throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);t=[`${c.host} wants you to sign in with your Solana account:`,s.publicKey.toBase58(),...a?[``,a,``]:[``],`Version: 1`,`URI: ${c.href}`,`Issued At: ${o?.signInWithSolana?.issuedAt??new Date().toISOString()}`,...o?.signInWithSolana?.notBefore?[`Not Before: ${o.signInWithSolana.notBefore}`]:[],...o?.signInWithSolana?.expirationTime?[`Expiration Time: ${o.signInWithSolana.expirationTime}`]:[],...o?.signInWithSolana?.chainId?[`Chain ID: ${o.signInWithSolana.chainId}`]:[],...o?.signInWithSolana?.nonce?[`Nonce: ${o.signInWithSolana.nonce}`]:[],...o?.signInWithSolana?.requestId?[`Request ID: ${o.signInWithSolana.requestId}`]:[],...o?.signInWithSolana?.resources?.length?[`Resources`,...o.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join(`
`);let e=await s.signMessage(new TextEncoder().encode(t),`utf8`);if(!e||!(e instanceof Uint8Array))throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);n=e}}try{let{data:r,error:i}=await K(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`solana`,message:t,signature:er(n)},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:Nr});if(i)throw i;if(!r||!r.session||!r.user){let e=new Nn;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _exchangeCodeForSession(e){let[t,n]=(await lr(this.storage,`${this.storageKey}-code-verifier`)??``).split(`/`);try{if(!t&&this.flowType===`pkce`)throw new Rn;let{data:r,error:i}=await K(this.fetch,`POST`,`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:t},xform:Nr});if(await G(this.storage,`${this.storageKey}-code-verifier`),i)throw i;if(!r||!r.session||!r.user){let e=new Nn;return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign(Object.assign({},r),{redirectType:n??null}),error:i})}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:{user:null,session:null,redirectType:null},error:e});throw e}}async signInWithIdToken(e){try{let{options:t,provider:n,token:r,access_token:i,nonce:a}=e,{data:o,error:s}=await K(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:Nr});if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!o||!o.session||!o.user){let e=new Nn;return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers(`SIGNED_IN`,o.session)),this._returnResult({data:o,error:s})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOtp(e){try{if(`email`in e){let{email:t,options:n}=e,r=null,i=null;this.flowType===`pkce`&&([r,i]=await vr(this.storage,this.storageKey));let{error:a}=await K(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{email:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},code_challenge:r,code_challenge_method:i},redirectTo:n?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}if(`phone`in e){let{phone:t,options:n}=e,{data:r,error:i}=await K(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},channel:n?.channel??`sms`}});return this._returnResult({data:{user:null,session:null,messageId:r?.message_id},error:i})}throw new Pn(`You must provide either an email or phone number.`)}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async verifyOtp(e){try{let t,n;`options`in e&&(t=e.options?.redirectTo,n=e.options?.captchaToken);let{data:r,error:i}=await K(this.fetch,`POST`,`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:t,xform:Nr});if(i)throw i;if(!r)throw Error(`An error occurred on token verification.`);let a=r.session,o=r.user;return a?.access_token&&(await this._saveSession(a),await this._notifyAllSubscribers(e.type==`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSSO(e){try{let t=null,n=null;this.flowType===`pkce`&&([t,n]=await vr(this.storage,this.storageKey));let r=await K(this.fetch,`POST`,`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},`providerId`in e?{provider_id:e.providerId}:null),`domain`in e?{domain:e.domain}:null),{redirect_to:e.options?.redirectTo??void 0}),e?.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:t,code_challenge_method:n}),headers:this.headers,xform:Ir});return r.data?.url&&W()&&!e.options?.skipBrowserRedirect&&window.location.assign(r.data.url),this._returnResult(r)}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:null,error:e});throw e}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new U;let{error:r}=await K(this.fetch,`GET`,`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{let t=`${this.url}/resend`;if(`email`in e){let{email:n,type:r,options:i}=e,{error:a}=await K(this.fetch,`POST`,t,{headers:this.headers,body:{email:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},redirectTo:i?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}else if(`phone`in e){let{phone:n,type:r,options:i}=e,{data:a,error:o}=await K(this.fetch,`POST`,t,{headers:this.headers,body:{phone:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new Pn(`You must provide either an email or phone number and a type`)}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug(`#_acquireLock`,`begin`,e);try{if(this.lockAcquired){let e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await e,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug(`#_acquireLock`,`lock acquired for storage key`,this.storageKey);try{this.lockAcquired=!0;let e=t();for(this.pendingInLock.push((async()=>{try{await e}catch{}})()),await e;this.pendingInLock.length;){let e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug(`#_acquireLock`,`lock released for storage key`,this.storageKey),this.lockAcquired=!1}})}finally{this._debug(`#_acquireLock`,`end`)}}async _useSession(e){this._debug(`#_useSession`,`begin`);try{return await e(await this.__loadSession())}finally{this._debug(`#_useSession`,`end`)}}async __loadSession(){this._debug(`#__loadSession()`,`begin`),this.lockAcquired||this._debug(`#__loadSession()`,`used outside of an acquired lock!`,Error().stack);try{let e=null,t=await lr(this.storage,this.storageKey);if(this._debug(`#getSession()`,`session from storage`,t),t!==null&&(this._isValidSession(t)?e=t:(this._debug(`#getSession()`,`session from storage is not valid`),await this._removeSession())),!e)return{data:{session:null},error:null};let n=e.expires_at?e.expires_at*1e3-Date.now()<bn:!1;if(this._debug(`#__loadSession()`,`session has${n?``:` not`} expired`,`expires_at`,e.expires_at),!n){if(this.userStorage){let t=await lr(this.userStorage,this.storageKey+`-user`);t?.user?e.user=t.user:e.user=Tr()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let t={value:this.suppressGetSessionWarning};e.user=Er(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}let{data:r,error:i}=await this._callRefreshToken(e.refresh_token);return i?this._returnResult({data:{session:null},error:i}):this._returnResult({data:{session:r},error:null})}finally{this._debug(`#__loadSession()`,`end`)}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await K(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:e,xform:Fr}):await this._useSession(async e=>{let{data:t,error:n}=e;if(n)throw n;return!t.session?.access_token&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new U}:await K(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:t.session?.access_token??void 0,xform:Fr})})}catch(e){if(H(e))return Mn(e)&&(await this._removeSession(),await G(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:e});throw e}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{let{data:r,error:i}=n;if(i)throw i;if(!r.session)throw new U;let a=r.session,o=null,s=null;this.flowType===`pkce`&&e.email!=null&&([o,s]=await vr(this.storage,this.storageKey));let{data:c,error:l}=await K(this.fetch,`PUT`,`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:s}),jwt:a.access_token,xform:Fr});if(l)throw l;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers(`USER_UPDATED`,a),this._returnResult({data:{user:a.user},error:null})})}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:{user:null},error:e});throw e}}async setSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new U;let t=Date.now()/1e3,n=t,r=!0,i=null,{payload:a}=dr(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){let{data:t,error:n}=await this._callRefreshToken(e.refresh_token);if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!t)return{data:{user:null,session:null},error:null};i=t}else{let{data:r,error:a}=await this._getUser(e.access_token);if(a)return this._returnResult({data:{user:null,session:null},error:a});i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:`bearer`,expires_in:n-t,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers(`SIGNED_IN`,i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(e){if(H(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{if(!e){let{data:n,error:r}=t;if(r)throw r;e=n.session??void 0}if(!e?.refresh_token)throw new U;let{data:n,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _getSessionFromURL(e,t){try{if(!W())throw new Fn(`No browser detected.`);if(e.error||e.error_description||e.error_code)throw new Fn(e.error_description||`Error in URL with unspecified error_description`,{error:e.error||`unspecified_error`,code:e.error_code||`unspecified_code`});switch(t){case`implicit`:if(this.flowType===`pkce`)throw new Ln(`Not a valid PKCE flow url.`);break;case`pkce`:if(this.flowType===`implicit`)throw new Fn(`Not a valid implicit grant flow url.`);break;default:}if(t===`pkce`){if(this._debug(`#_initialize()`,`begin`,`is PKCE flow`,!0),!e.code)throw new Ln(`No code detected.`);let{data:t,error:n}=await this._exchangeCodeForSession(e.code);if(n)throw n;let r=new URL(window.location.href);return r.searchParams.delete(`code`),window.history.replaceState(window.history.state,``,r.toString()),{data:{session:t.session,redirectType:null},error:null}}let{provider_token:n,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:o,expires_at:s,token_type:c}=e;if(!i||!o||!a||!c)throw new Fn(`No session defined in URL`);let l=Math.round(Date.now()/1e3),u=parseInt(o),d=l+u;s&&(d=parseInt(s));let f=d-l;f*1e3<=3e4&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);let p=d-u;l-p>=120?console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,p,d,l):l-p<0&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,p,d,l);let{data:m,error:h}=await this._getUser(i);if(h)throw h;let g={provider_token:n,provider_refresh_token:r,access_token:i,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:m.user};return window.location.hash=``,this._debug(`#_getSessionFromURL()`,`clearing window.location.hash`),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(e){if(H(e))return this._returnResult({data:{session:null,redirectType:null},error:e});throw e}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl==`function`?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error_description)}async _isPKCECallback(e){let t=await lr(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:`global`}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:`global`}){return await this._useSession(async t=>{let{data:n,error:r}=t;if(r&&!Mn(r))return this._returnResult({error:r});let i=n.session?.access_token;if(i){let{error:t}=await this.admin.signOut(i,e);if(t&&!(kn(t)&&(t.status===404||t.status===401||t.status===403)||Mn(t)))return this._returnResult({error:t})}return e!==`others`&&(await this._removeSession(),await G(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){let t=nr(),n={id:t,callback:e,unsubscribe:()=>{this._debug(`#unsubscribe()`,`state change callback with id removed`,t),this.stateChangeEmitters.delete(t)}};return this._debug(`#onAuthStateChange()`,`registered callback with id`,t),this.stateChangeEmitters.set(t,n),(async()=>{await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{try{let{data:{session:n},error:r}=t;if(r)throw r;await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,n),this._debug(`INITIAL_SESSION`,`callback id`,e,`session`,n)}catch(t){await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,null),this._debug(`INITIAL_SESSION`,`callback id`,e,`error`,t),console.error(t)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null;this.flowType===`pkce`&&([n,r]=await vr(this.storage,this.storageKey,!0));try{return await K(this.fetch,`POST`,`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:null,error:e});throw e}}async getUserIdentities(){try{let{data:e,error:t}=await this.getUser();if(t)throw t;return this._returnResult({data:{identities:e.user.identities??[]},error:null})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async linkIdentity(e){return`token`in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){try{let{data:t,error:n}=await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;let i=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:!0});return await K(this.fetch,`GET`,i,{headers:this.headers,jwt:n.session?.access_token??void 0})});if(n)throw n;return W()&&!e.options?.skipBrowserRedirect&&window.location.assign(t?.url),this._returnResult({data:{provider:e.provider,url:t?.url},error:null})}catch(t){if(H(t))return this._returnResult({data:{provider:e.provider,url:null},error:t});throw t}}async linkIdentityIdToken(e){return await this._useSession(async t=>{try{let{error:n,data:{session:r}}=t;if(n)throw n;let{options:i,provider:a,token:o,access_token:s,nonce:c}=e,{data:l,error:u}=await K(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:r?.access_token??void 0,body:{provider:a,id_token:o,access_token:s,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Nr});return u?this._returnResult({data:{user:null,session:null},error:u}):!l||!l.session||!l.user?this._returnResult({data:{user:null,session:null},error:new Nn}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(`USER_UPDATED`,l.session)),this._returnResult({data:l,error:u}))}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;return await K(this.fetch,`DELETE`,`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:n.session?.access_token??void 0})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _refreshAccessToken(e){let t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,`begin`);try{let n=Date.now();return await pr(async n=>(n>0&&await fr(200*2**(n-1)),this._debug(t,`refreshing attempt`,n),await K(this.fetch,`POST`,`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:Nr})),(e,t)=>{let r=200*2**e;return t&&Bn(t)&&Date.now()+r-n<3e4})}catch(e){if(this._debug(t,`error`,e),H(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}finally{this._debug(t,`end`)}}_isValidSession(e){return typeof e==`object`&&!!e&&`access_token`in e&&`refresh_token`in e&&`expires_at`in e}async _handleProviderSignIn(e,t){let n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug(`#_handleProviderSignIn()`,`provider`,e,`options`,t,`url`,n),W()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){let e=`#_recoverAndRefresh()`;this._debug(e,`begin`);try{let t=await lr(this.storage,this.storageKey);if(t&&this.userStorage){let e=await lr(this.userStorage,this.storageKey+`-user`);!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!e&&(e={user:t.user},await cr(this.userStorage,this.storageKey+`-user`,e)),t.user=e?.user??Tr()}else if(t&&!t.user&&!t.user){let e=await lr(this.storage,this.storageKey+`-user`);e&&e?.user?(t.user=e.user,await G(this.storage,this.storageKey+`-user`),await cr(this.storage,this.storageKey,t)):t.user=Tr()}if(this._debug(e,`session from storage`,t),!this._isValidSession(t)){this._debug(e,`session is not valid`),t!==null&&await this._removeSession();return}let n=(t.expires_at??1/0)*1e3-Date.now()<bn;if(this._debug(e,`session has${n?``:` not`} expired with margin of ${bn}s`),n){if(this.autoRefreshToken&&t.refresh_token){let{error:n}=await this._callRefreshToken(t.refresh_token);n&&(console.error(n),Bn(n)||(this._debug(e,`refresh failed with a non-retryable error, removing the session`,n),await this._removeSession()))}}else if(t.user&&t.user.__isUserNotAvailableProxy===!0)try{let{data:n,error:r}=await this._getUser(t.access_token);!r&&n?.user?(t.user=n.user,await this._saveSession(t),await this._notifyAllSubscribers(`SIGNED_IN`,t)):this._debug(e,`could not get user data, skipping SIGNED_IN notification`)}catch(t){console.error(`Error getting user data:`,t),this._debug(e,`error getting user data, skipping SIGNED_IN notification`,t)}else await this._notifyAllSubscribers(`SIGNED_IN`,t)}catch(t){this._debug(e,`error`,t),console.error(t);return}finally{this._debug(e,`end`)}}async _callRefreshToken(e){var t,n;if(!e)throw new U;if(this.refreshingDeferred)return this.refreshingDeferred.promise;let r=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(r,`begin`);try{this.refreshingDeferred=new ur;let{data:t,error:n}=await this._refreshAccessToken(e);if(n)throw n;if(!t.session)throw new U;await this._saveSession(t.session),await this._notifyAllSubscribers(`TOKEN_REFRESHED`,t.session);let r={data:t.session,error:null};return this.refreshingDeferred.resolve(r),r}catch(e){if(this._debug(r,`error`,e),H(e)){let n={data:null,error:e};return Bn(e)||await this._removeSession(),(t=this.refreshingDeferred)==null||t.resolve(n),n}throw(n=this.refreshingDeferred)==null||n.reject(e),e}finally{this.refreshingDeferred=null,this._debug(r,`end`)}}async _notifyAllSubscribers(e,t,n=!0){let r=`#_notifyAllSubscribers(${e})`;this._debug(r,`begin`,t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});let r=[],i=Array.from(this.stateChangeEmitters.values()).map(async n=>{try{await n.callback(e,t)}catch(e){r.push(e)}});if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1)console.error(r[e]);throw r[0]}}finally{this._debug(r,`end`)}}async _saveSession(e){this._debug(`#_saveSession()`,e),this.suppressGetSessionWarning=!0,await G(this.storage,`${this.storageKey}-code-verifier`);let t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await cr(this.userStorage,this.storageKey+`-user`,{user:t.user});let e=Object.assign({},t);delete e.user;let r=Dr(e);await cr(this.storage,this.storageKey,r)}else{let e=Dr(t);await cr(this.storage,this.storageKey,e)}}async _removeSession(){this._debug(`#_removeSession()`),this.suppressGetSessionWarning=!1,await G(this.storage,this.storageKey),await G(this.storage,this.storageKey+`-code-verifier`),await G(this.storage,this.storageKey+`-user`),this.userStorage&&await G(this.userStorage,this.storageKey+`-user`),await this._notifyAllSubscribers(`SIGNED_OUT`,null)}_removeVisibilityChangedCallback(){this._debug(`#_removeVisibilityChangedCallback()`);let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&W()&&window!=null&&window.removeEventListener&&window.removeEventListener(`visibilitychange`,e)}catch(e){console.error(`removing visibilitychange callback failed`,e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug(`#_startAutoRefresh()`);let e=setInterval(()=>this._autoRefreshTokenTick(),yn);this.autoRefreshTicker=e,e&&typeof e==`object`&&typeof e.unref==`function`?e.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t==`object`&&typeof t.unref==`function`?t.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug(`#_stopAutoRefresh()`);let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug(`#_autoRefreshTokenTick()`,`begin`);try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/yn);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${yn}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}})}catch(e){if(e.isAcquireTimeout||e instanceof Wr)this._debug(`auto refresh token tick lock not available`);else throw e}}async _handleVisibilityChange(){if(this._debug(`#_handleVisibilityChange()`),!W()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug(`#visibilityChangedCallback`,`error`,e)}},window==null||window.addEventListener(`visibilitychange`,this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error(`_handleVisibilityChange`,e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;this._debug(t,`visibilityState`,document.visibilityState),document.visibilityState===`visible`?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!==`visible`){this._debug(t,`acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);return}await this._recoverAndRefresh()}))):document.visibilityState===`hidden`&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let r=[`provider=${encodeURIComponent(t)}`];if(n?.redirectTo&&r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n?.scopes&&r.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType===`pkce`){let[e,t]=await vr(this.storage,this.storageKey),n=new URLSearchParams({code_challenge:`${encodeURIComponent(e)}`,code_challenge_method:`${encodeURIComponent(t)}`});r.push(n.toString())}if(n?.queryParams){let e=new URLSearchParams(n.queryParams);r.push(e.toString())}return n?.skipBrowserRedirect&&r.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${r.join(`&`)}`}async _unenroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;return r?this._returnResult({data:null,error:r}):await K(this.fetch,`DELETE`,`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:n?.session?.access_token})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _enroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType===`phone`?{phone:e.phone}:e.factorType===`totp`?{issuer:e.issuer}:{}),{data:a,error:o}=await K(this.fetch,`POST`,`${this.url}/factors`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(e.factorType===`totp`&&a.type===`totp`&&a?.totp?.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),this._returnResult({data:a,error:null}))})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _verify(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({challenge_id:e.challengeId},`webauthn`in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type===`create`?ii(e.webauthn.credential_response):ai(e.webauthn.credential_response)})}:{code:e.code}),{data:a,error:o}=await K(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/verify`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,a),this._returnResult({data:a,error:o}))})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}})}async _challenge(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=await K(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:n?.session?.access_token});if(i.error)return i;let{data:a}=i;if(a.type!==`webauthn`)return{data:a,error:null};switch(a.webauthn.type){case`create`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:ni(a.webauthn.credential_options.publicKey)})})}),error:null};case`request`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:ri(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}})}async _challengeAndVerify(e){let{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){let{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};let n={all:[],phone:[],totp:[],webauthn:[]};for(let t of e?.factors??[])n.all.push(t),t.status===`verified`&&n[t.factor_type].push(t);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){if(e)try{let{payload:t}=dr(e),n=null;t.aal&&(n=t.aal);let r=n,{data:{user:i},error:a}=await this.getUser(e);if(a)return this._returnResult({data:null,error:a});((i?.factors)?.filter(e=>e.status===`verified`)??[]).length>0&&(r=`aal2`);let o=t.amr||[];return{data:{currentLevel:n,nextLevel:r,currentAuthenticationMethods:o},error:null}}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}let{data:{session:t},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!t)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:r}=dr(t.access_token),i=null;r.aal&&(i=r.aal);let a=i;(t.user.factors?.filter(e=>e.status===`verified`)??[]).length>0&&(a=`aal2`);let o=r.amr||[];return{data:{currentLevel:i,nextLevel:a,currentAuthenticationMethods:o},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await K(this.fetch,`GET`,`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new U})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new U});let a=await K(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`approve`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&W()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new U});let a=await K(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`deny`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&W()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await K(this.fetch,`GET`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new U})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?(await K(this.fetch,`DELETE`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new U})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(t=>t.kid===e);if(n)return n;let r=Date.now();if(n=this.jwks.keys.find(t=>t.kid===e),n&&this.jwks_cached_at+6e5>r)return n;let{data:i,error:a}=await K(this.fetch,`GET`,`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=r,n=i.keys.find(t=>t.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){let{data:e,error:t}=await this.getSession();if(t||!e.session)return this._returnResult({data:null,error:t});n=e.session.access_token}let{header:r,payload:i,signature:a,raw:{header:o,payload:s}}=dr(n);t?.allowExpired||xr(i.exp);let c=!r.alg||r.alg.startsWith(`HS`)||!r.kid||!(`crypto`in globalThis&&`subtle`in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){let{error:e}=await this.getUser(n);if(e)throw e;return{data:{claims:i,header:r,signature:a},error:null}}let l=Sr(r.alg),u=await crypto.subtle.importKey(`jwk`,c,l,!0,[`verify`]);if(!await crypto.subtle.verify(l,u,a,$n(`${o}.${s}`)))throw new Hn(`Invalid JWT signature`);return{data:{claims:i,header:r,signature:a},error:null}}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}};yi.nextInstanceID={};var bi=yi,xi=`2.101.1`,Si=``;Si=typeof Deno<`u`?`deno`:typeof document<`u`?`web`:typeof navigator<`u`&&navigator.product===`ReactNative`?`react-native`:`node`;var Ci={headers:{"X-Client-Info":`supabase-js-${Si}/${xi}`}},wi={schema:`public`},Ti={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:`implicit`},Ei={};function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Di(e)}function Oi(e,t){if(Di(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Di(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ki(e){var t=Oi(e,`string`);return Di(t)==`symbol`?t:t+``}function Ai(e,t,n){return(t=ki(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ji(Object(n),!0).forEach(function(t){Ai(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ji(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Mi=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Ni=()=>Headers,Pi=(e,t,n)=>{let r=Mi(n),i=Ni();return async(n,a)=>{let o=await t()??e,s=new i(a?.headers);return s.has(`apikey`)||s.set(`apikey`,e),s.has(`Authorization`)||s.set(`Authorization`,`Bearer ${o}`),r(n,J(J({},a),{},{headers:s}))}};function Fi(e){return e.endsWith(`/`)?e:e+`/`}function Ii(e,t){let{db:n,auth:r,realtime:i,global:a}=e,{db:o,auth:s,realtime:c,global:l}=t,u={db:J(J({},o),n),auth:J(J({},s),r),realtime:J(J({},c),i),storage:{},global:J(J(J({},l),a),{},{headers:J(J({},l?.headers??{}),a?.headers??{})}),accessToken:async()=>``};return e.accessToken?u.accessToken=e.accessToken:delete u.accessToken,u}function Li(e){let t=e?.trim();if(!t)throw Error(`supabaseUrl is required.`);if(!t.match(/^https?:\/\//i))throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);try{return new URL(Fi(t))}catch{throw Error(`Invalid supabaseUrl: Provided URL is malformed.`)}}var Ri=class extends bi{constructor(e){super(e)}},zi=class{constructor(e,t,n){this.supabaseUrl=e,this.supabaseKey=t;let r=Li(e);if(!t)throw Error(`supabaseKey is required.`);this.realtimeUrl=new URL(`realtime/v1`,r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace(`http`,`ws`),this.authUrl=new URL(`auth/v1`,r),this.storageUrl=new URL(`storage/v1`,r),this.functionsUrl=new URL(`functions/v1`,r);let i=`sb-${r.hostname.split(`.`)[0]}-auth-token`,a={db:wi,realtime:Ei,auth:J(J({},Ti),{},{storageKey:i}),global:Ci},o=Ii(n??{},a);this.storageKey=o.auth.storageKey??``,this.headers=o.global.headers??{},o.accessToken?(this.accessToken=o.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(o.auth??{},this.headers,o.global.fetch),this.fetch=Pi(t,this._getAccessToken.bind(this),o.global.fetch),this.realtime=this._initRealtimeClient(J({headers:this.headers,accessToken:this._getAccessToken.bind(this)},o.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(e=>this.realtime.setAuth(e)).catch(e=>console.warn(`Failed to set initial Realtime auth token:`,e)),this.rest=new me(new URL(`rest/v1`,r).href,{headers:this.headers,schema:o.db.schema,fetch:this.fetch,timeout:o.db.timeout,urlLengthLimit:o.db.urlLengthLimit}),this.storage=new _n(this.storageUrl.href,this.headers,this.fetch,n?.storage),o.accessToken||this._listenForAuthEvents()}get functions(){return new ne(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e=this;if(e.accessToken)return await e.accessToken();let{data:t}=await e.auth.getSession();return t.session?.access_token??e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,storageKey:a,flowType:o,lock:s,debug:c,throwOnError:l},u,d){let f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Ri({url:this.authUrl.href,headers:J(J({},f),u),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,flowType:o,lock:s,debug:c,throwOnError:l,fetch:d,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>e.toLowerCase()===`authorization`)})}_initRealtimeClient(e){return new bt(this.realtimeUrl.href,J(J({},e),{},{params:J(J({},{apikey:this.supabaseKey}),e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,`CLIENT`,t?.access_token)})}_handleTokenChanged(e,t,n){(e===`TOKEN_REFRESHED`||e===`SIGNED_IN`)&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e===`SIGNED_OUT`&&(this.realtime.setAuth(),t==`STORAGE`&&this.auth.signOut(),this.changedAccessToken=void 0)}},Bi=(e,t,n)=>new zi(e,t,n);function Vi(){if(typeof window<`u`)return!1;let e=globalThis.process;if(!e)return!1;let t=e.version;if(t==null)return!1;let n=t.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=18:!1}Vi()&&console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217`);var Y=Bi(`https://hcmgdztsgjvzcyxyayaj.supabase.co`,`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw`,{auth:{flowType:`pkce`,detectSessionInUrl:!0,autoRefreshToken:!0,persistSession:!0}}),Hi=`dreamit_sso`,Ui=typeof window<`u`&&(location.hostname===`localhost`||location.hostname===`127.0.0.1`),Wi=Ui?``:`;domain=.dreamitbiz.com`;function Gi(e){document.cookie=`${Hi}=${e}${Wi};path=/;max-age=2592000;SameSite=Lax${Ui?``:`;Secure`}`}function Ki(){let e=document.cookie.match(/(^| )dreamit_sso=([^;]+)/);return e?e[2]:null}function qi(){document.cookie=`${Hi}=${Wi};path=/;max-age=0`}var Ji=`jobexam_`,X={PROFILES:`${Ji}profiles`,SUBJECTS:`${Ji}subjects`,QUESTIONS:`${Ji}questions`,SILGI_QUESTIONS:`${Ji}silgi_questions`,EXAM_SESSIONS:`${Ji}exam_sessions`,EXAM_ANSWERS:`${Ji}exam_answers`,BOOKMARKS:`${Ji}bookmarks`,WRONG_ANSWERS:`${Ji}wrong_answers`,ORDERS:`${Ji}orders`,COUPONS:`${Ji}coupons`,COUPON_REDEMPTIONS:`${Ji}coupon_redemptions`},Yi=[`aebon@kakao.com`],Xi=(0,g.createContext)({}),Zi=`https://jobexam.dreamitbiz.com`;function Qi({children:e}){let[t,n]=(0,g.useState)(null),[r,i]=(0,g.useState)(!0),[a,o]=(0,g.useState)(!1),{showToast:s}=k();return(0,g.useEffect)(()=>{let{data:{subscription:e}}=Y.auth.onAuthStateChange(async(e,t)=>{t?.refresh_token&&Gi(t.refresh_token),e===`SIGNED_OUT`&&qi();let r=t?.user??null;if(n(r),r){let e=[r.email,r.user_metadata?.email].filter(Boolean).map(e=>e.toLowerCase()).some(e=>Yi.includes(e));try{let{data:t}=await Y.from(X.PROFILES).select(`role`).eq(`id`,r.id).single();o(e||t?.role===`admin`||t?.role===`superadmin`)}catch{o(e)}}else o(!1);if(e===`INITIAL_SESSION`){if(!r){let e=Ki();if(e)try{let{data:t}=await Y.auth.refreshSession({refresh_token:e});if(!t.session)qi();else return}catch{qi()}}i(!1)}(e===`SIGNED_IN`||e===`TOKEN_REFRESHED`)&&i(!1),e===`SIGNED_OUT`&&(n(null),o(!1),i(!1))}),t=setTimeout(()=>{i(e=>(e&&console.warn(`Auth: INITIAL_SESSION timeout, forcing loading=false`),!1))},5e3);return()=>{e.unsubscribe(),clearTimeout(t)}},[]),(0,_.jsx)(Xi.Provider,{value:{user:t,loading:r,isAdmin:a,signInWithGoogle:async()=>{try{let{error:e}=await Y.auth.signInWithOAuth({provider:`google`,options:{redirectTo:Zi}});e&&(console.error(`Google login error:`,e.message),s(`Google 로그인에 실패했습니다.`,`error`))}catch(e){console.error(`Google login error:`,e),s(`Google 로그인에 실패했습니다.`,`error`)}},signInWithKakao:async()=>{try{let{error:e}=await Y.auth.signInWithOAuth({provider:`kakao`,options:{redirectTo:Zi}});e&&(console.error(`Kakao login error:`,e.message),s(`카카오 로그인에 실패했습니다.`,`error`))}catch(e){console.error(`Kakao login error:`,e),s(`카카오 로그인에 실패했습니다.`,`error`)}},signOut:async()=>{try{let{error:e}=await Y.auth.signOut();e?(console.error(`Logout error:`,e.message),s(`로그아웃에 실패했습니다.`,`error`)):s(`로그아웃되었습니다.`,`success`)}catch(e){console.error(`Logout error:`,e),s(`로그아웃에 실패했습니다.`,`error`)}}},children:e})}var Z=()=>(0,g.useContext)(Xi),$i={name:`JobExam`,title:`직업상담사 시험 준비 플랫폼`,description:`직업상담사 1급·2급 필기·실기 시험 준비를 위한 CBT 학습 플랫폼`,url:`https://jobexam.dreamitbiz.com`,domain:`jobexam.dreamitbiz.com`},Q=[{id:1,code:`counseling`,name:`직업상담학`,color:`#1B3A6B`,icon:`fa-solid fa-comments`,sortOrder:1},{id:2,code:`psychology`,name:`직업심리학`,color:`#2A4F8A`,icon:`fa-solid fa-brain`,sortOrder:2},{id:3,code:`jobinfo`,name:`직업정보론`,color:`#3D6DB5`,icon:`fa-solid fa-circle-info`,sortOrder:3},{id:4,code:`labor_market`,name:`노동시장론`,color:`#1E4D80`,icon:`fa-solid fa-chart-line`,sortOrder:4},{id:5,code:`labor_law`,name:`노동관계법규`,color:`#0F2444`,icon:`fa-solid fa-scale-balanced`,sortOrder:5}],ea=[{id:1,code:`job_psychology`,name:`직업심리 및 전직지원`,color:`#1B3A6B`,icon:`fa-solid fa-brain`,sortOrder:1},{id:2,code:`deep_counseling`,name:`심층직업상담 및 슈퍼비전`,color:`#2A4F8A`,icon:`fa-solid fa-comments`,sortOrder:2},{id:3,code:`job_info_proc`,name:`직업정보가공`,color:`#3D6DB5`,icon:`fa-solid fa-database`,sortOrder:3},{id:4,code:`labor_analysis`,name:`노동시장분석`,color:`#1E4D80`,icon:`fa-solid fa-chart-line`,sortOrder:4},{id:5,code:`labor_law_2`,name:`고용노동관계법규(II)`,color:`#0F2444`,icon:`fa-solid fa-scale-balanced`,sortOrder:5}],ta={pilgi:{totalQuestions:100,questionsPerSubject:20,timeLimit:6e3,passScore:60,subjectMinScore:40,optionCount:4},silgi:{timeLimit:9e3,passScore:60}},na=[{path:`/about`,label:`About`,icon:`fa-solid fa-circle-info`,variant:`about`,children:[{path:`/about`,label:`사이트 소개`,icon:`fa-solid fa-building`},{path:`/about/instructor`,label:`제작자 소개`,icon:`fa-solid fa-chalkboard-user`}]},{path:`/info`,label:`시험안내`,icon:`fa-solid fa-clipboard-list`,children:[{path:`/pilgi`,label:`필기 안내`},{path:`/silgi`,label:`실기 안내`},{path:`/info`,label:`시험 일정·개요`}]},{path:`/learn`,label:`학습하기`,icon:`fa-solid fa-book-open`,children:[{path:`/learn`,label:`과목별 학습`},{path:`/summary`,label:`학습 요약`},{path:`/silgi/past`,label:`실기 기출해설`}]},{path:`/practice`,label:`문제풀기`,icon:`fa-solid fa-pen-to-square`,children:[{path:`/pilgi/select`,label:`필기 CBT`},{path:`/silgi/practice`,label:`실기 연습`}]},{path:`/dashboard`,label:`나의학습`,icon:`fa-solid fa-user`,children:[{path:`/dashboard`,label:`대시보드`},{path:`/bookmarks`,label:`북마크`},{path:`/wrong-answers`,label:`오답노트`}]},{path:`/service`,label:`서비스`,icon:`fa-solid fa-concierge-bell`,variant:`service`,children:[{path:`/about/guide`,label:`이용 안내`,icon:`fa-solid fa-book`},{path:`/about/pricing`,label:`요금제`,icon:`fa-solid fa-tag`}]}],ra=[{id:`3month`,label:`3개월 이용권`,price:29900,days:90,desc:`1회차 시험 준비`},{id:`6month`,label:`6개월 이용권`,price:49900,days:180,recommended:!0,desc:`2회차 시험 준비`},{id:`12month`,label:`12개월 이용권`,price:79900,days:365,desc:`연간 전 회차 대비`}],ia=`jobexam_cart`,aa=(0,g.createContext)(null);function oa(){try{let e=sessionStorage.getItem(ia);return e?JSON.parse(e):[]}catch{return[]}}function sa({children:e}){let[t,n]=(0,g.useState)(oa);(0,g.useEffect)(()=>{sessionStorage.setItem(ia,JSON.stringify(t))},[t]);let r=e=>{if(t.find(t=>t.id===e))return;let r=ra.find(t=>t.id===e);r&&n(e=>[...e,{id:r.id,label:r.label,price:r.price,days:r.days??null}])},i=e=>{n(t=>t.filter(t=>t.id!==e))},a=()=>{n([]),sessionStorage.removeItem(ia)},o=t.reduce((e,t)=>e+t.price,0),s=t.length;return(0,_.jsx)(aa.Provider,{value:{items:t,addItem:r,removeItem:i,clearCart:a,cartTotal:o,cartCount:s},children:e})}function ca(){let e=(0,g.useContext)(aa);if(!e)throw Error(`useCart must be used within CartProvider`);return e}async function la(e){if(!e)return{hasAccess:!1,subscription:null,expiresAt:null};try{let{data:{user:e}}=await Y.auth.getUser(),t=(e?.email||``).toLowerCase();if(t===`aebon@kakao.com`||t===`aebon@kyonggi.ac.kr`)return{hasAccess:!0,subscription:{plan_type:`admin`},expiresAt:new Date(`2099-12-31`)}}catch{}let t=new Date,{data:n,error:r}=await Y.from(X.ORDERS).select(`*`).eq(`user_id`,e).eq(`payment_status`,`paid`).order(`created_at`,{ascending:!1});if(!r&&n?.length){let e=n.filter(e=>e.expires_at&&new Date(e.expires_at)>t).sort((e,t)=>new Date(t.expires_at)-new Date(e.expires_at));if(e.length>0)return{hasAccess:!0,subscription:e[0],expiresAt:new Date(e[0].expires_at)}}try{let{data:n}=await Y.from(X.COUPON_REDEMPTIONS).select(`*`).eq(`user_id`,e).order(`created_at`,{ascending:!1});if(n?.length){let e=[...new Set(n.map(e=>e.coupon_id))],{data:r}=await Y.from(X.COUPONS).select(`id, days`).in(`id`,e),i={};(r||[]).forEach(e=>{i[e.id]=e.days||1});for(let e of n){let n=i[e.coupon_id]||1,r=new Date(new Date(e.created_at).getTime()+n*24*60*60*1e3);if(r>t)return{hasAccess:!0,subscription:{plan_type:`${n}day`,payment_method:`coupon`},expiresAt:r}}}}catch{}return{hasAccess:!1,subscription:null,expiresAt:null}}async function ua(e){if(!e)return 0;let{count:t,error:n}=await Y.from(X.EXAM_SESSIONS).select(`*`,{count:`exact`,head:!0}).eq(`user_id`,e).eq(`exam_type`,`pilgi`).not(`completed_at`,`is`,null);return n?0:t||0}async function da(e){let t=await ua(e);return{canTrial:t<1,usedCount:t}}function fa(e){if(!e)return!1;let t=new Date(e)-new Date;return t>0&&t<10080*60*1e3}var pa=`je_coupon_access`;function ma(e,t,n){try{localStorage.setItem(pa,JSON.stringify({userId:e,expiresAt:t.toISOString(),sub:n}))}catch{}}function ha(e){try{let t=localStorage.getItem(pa);if(!t)return null;let n=JSON.parse(t);if(n.userId!==e)return null;let r=new Date(n.expiresAt);return r<=new Date?(localStorage.removeItem(pa),null):{expiresAt:r,subscription:n.sub}}catch{return null}}var ga=(0,g.createContext)(null);function _a({children:e}){let{user:t}=Z(),[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)(null),[o,s]=(0,g.useState)(null),[c,l]=(0,g.useState)(1),[u,d]=(0,g.useState)(!0),f=(0,g.useCallback)((e,n)=>{let i=n||{plan_type:`coupon`,payment_method:`coupon`};r(!0),s(e),a(i),d(!1),t?.id&&ma(t.id,e,i)},[t]),p=(0,g.useCallback)(async()=>{if(!t){r(!1),a(null),s(null),l(1),d(!1);return}d(!0);try{let[e,n]=await Promise.all([la(t.id),da(t.id)]);if(e.hasAccess)r(!0),a(e.subscription),s(e.expiresAt);else{let e=ha(t.id);e?(r(!0),a(e.subscription),s(e.expiresAt)):(r(!1),a(null),s(null))}l(n.canTrial?1:0)}catch(e){console.error(`Subscription check error:`,e);let n=t?.id?ha(t.id):null;n&&(r(!0),a(n.subscription),s(n.expiresAt))}d(!1)},[t]);(0,g.useEffect)(()=>{p()},[p]);let m=fa(o);return(0,_.jsx)(ga.Provider,{value:{hasAccess:n,subscription:i,expiresAt:o,expiringSoon:m,freeTrialRemaining:c,loading:u,refresh:p,grantAccess:f},children:e})}function va(){let e=(0,g.useContext)(ga);if(!e)throw Error(`useSubscription must be used within SubscriptionProvider`);return e}var ya=`je_coupon_tooltip_dismissed`;function ba(){let{mode:e,toggleTheme:t,colorTheme:n,setColorTheme:r,COLOR_OPTIONS:i}=w(),{user:a,signOut:o,isAdmin:s}=Z(),{hasAccess:c,loading:d}=va(),f=u(),[p,m]=(0,g.useState)(!1),[h,v]=(0,g.useState)(!1),[y,b]=(0,g.useState)(!1),[x,S]=(0,g.useState)(!1),[C,T]=(0,g.useState)({}),[E,D]=(0,g.useState)(!1),O=(0,g.useRef)(null),ee=(0,g.useRef)(null);(0,g.useEffect)(()=>{let e=()=>m(window.scrollY>50);return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),(0,g.useEffect)(()=>{v(!1),T({})},[f.pathname]),(0,g.useEffect)(()=>{function e(e){O.current&&!O.current.contains(e.target)&&b(!1),ee.current&&!ee.current.contains(e.target)&&S(!1)}return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,g.useEffect)(()=>{if(d||!a||c||sessionStorage.getItem(ya))return;let e=setTimeout(()=>D(!0),1500);return()=>clearTimeout(e)},[a,c,d]);let k=()=>{D(!1),sessionStorage.setItem(ya,`1`)},A=e===`auto`?`◑`:e===`light`?`☀️`:`🌙`,j=e=>{T(t=>({...t,[e]:!t[e]}))};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`nav`,{className:`navbar ${p?`scrolled`:``}`,"aria-label":`메인 네비게이션`,children:(0,_.jsxs)(`div`,{className:`navbar-inner`,children:[(0,_.jsxs)(l,{to:`/`,className:`navbar-logo`,children:[(0,_.jsx)(`span`,{className:`logo-main`,children:`Job`}),(0,_.jsx)(`span`,{className:`logo-sub`,children:`Exam`})]}),(0,_.jsx)(`ul`,{className:`nav-links`,children:na.map(e=>{let t=e.children?e.children.some(e=>f.pathname===e.path||f.pathname.startsWith(e.path+`/`)):f.pathname===e.path,n=e.variant||``;return(0,_.jsxs)(`li`,{className:`nav-item ${e.children?`nav-item-has-children`:``} ${n?`nav-variant-${n}`:``}`,children:[(0,_.jsx)(l,{to:e.path,className:`nav-link ${t?`active`:``}`,children:e.label}),e.children&&(0,_.jsx)(`ul`,{className:`nav-dropdown ${n?`nav-dropdown-${n}`:``}`,children:e.children.map(e=>(0,_.jsx)(`li`,{children:(0,_.jsxs)(l,{to:e.path,className:`nav-dropdown-link`,children:[e.icon&&(0,_.jsx)(`i`,{className:e.icon}),e.label]})},e.path))})]},e.label)})}),(0,_.jsxs)(`div`,{className:`navbar-actions`,children:[(0,_.jsxs)(`div`,{className:`color-picker-wrapper`,ref:O,children:[(0,_.jsx)(`button`,{className:`color-picker-btn`,onClick:()=>b(!y),title:`컬러 테마`,"aria-expanded":y,"aria-label":`컬러 테마 선택`,children:(0,_.jsx)(`div`,{className:`color-dot-preview`,style:{background:i.find(e=>e.name===n)?.color}})}),(0,_.jsx)(`div`,{className:`color-picker-dropdown ${y?`show`:``}`,children:i.map(e=>(0,_.jsx)(`button`,{className:`color-option ${n===e.name?`active`:``}`,style:{background:e.color},onClick:()=>{r(e.name),b(!1)},title:e.name,"aria-label":e.name},e.name))})]}),(0,_.jsx)(`button`,{className:`theme-toggle`,onClick:t,title:e,"aria-label":`테마 변경`,children:A}),a?(0,_.jsxs)(`div`,{className:`user-menu`,children:[s&&(0,_.jsx)(l,{to:`/admin`,className:`admin-link`,children:`관리자`}),a.user_metadata?.avatar_url&&(0,_.jsx)(`img`,{src:a.user_metadata.avatar_url,alt:``,className:`user-avatar`}),(0,_.jsx)(`button`,{className:`logout-btn`,onClick:o,children:`로그아웃`}),E&&(0,_.jsxs)(`div`,{className:`coupon-tooltip`,children:[(0,_.jsx)(`button`,{className:`coupon-tooltip-close`,onClick:k,"aria-label":`닫기`,children:`×`}),(0,_.jsx)(`div`,{className:`coupon-tooltip-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-ticket`})}),(0,_.jsxs)(`p`,{className:`coupon-tooltip-msg`,children:[`쿠폰이 있으신가요?`,(0,_.jsx)(`br`,{}),(0,_.jsx)(`strong`,{children:`쿠폰 등록`}),`으로 바로 이용하세요!`]}),(0,_.jsxs)(l,{to:`/coupon`,className:`coupon-tooltip-btn`,onClick:k,children:[`쿠폰 등록하기 `,(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]}):(0,_.jsx)(l,{to:`/login`,className:`login-link`,children:`로그인`}),(0,_.jsxs)(`button`,{className:`mobile-menu-toggle ${h?`open`:``}`,onClick:()=>v(!h),"aria-expanded":h,"aria-label":`메뉴 열기/닫기`,children:[(0,_.jsx)(`span`,{}),(0,_.jsx)(`span`,{}),(0,_.jsx)(`span`,{})]})]})]})}),(0,_.jsxs)(`div`,{className:`mobile-menu ${h?`open`:``}`,"aria-hidden":!h,children:[(0,_.jsxs)(`ul`,{className:`mobile-nav-links`,children:[na.map(e=>(0,_.jsx)(`li`,{children:e.children?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`button`,{className:`mobile-subnav-toggle`,onClick:()=>j(e.label),children:[(0,_.jsx)(`span`,{children:e.label}),(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-down toggle-arrow ${C[e.label]?`open`:``}`})]}),C[e.label]&&(0,_.jsx)(`ul`,{className:`mobile-subnav`,children:e.children.map(e=>(0,_.jsx)(`li`,{children:(0,_.jsx)(l,{to:e.path,className:`mobile-subnav-link`,children:e.label})},e.path))})]}):(0,_.jsx)(l,{to:e.path,className:`mobile-nav-link`,children:e.label})},e.label)),a&&s&&(0,_.jsx)(`li`,{children:(0,_.jsxs)(l,{to:`/admin`,className:`mobile-nav-link`,style:{color:`var(--primary-blue)`,fontWeight:700},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-shield-halved`,style:{marginRight:8}}),`관리자`]})}),(0,_.jsx)(`li`,{children:a?(0,_.jsx)(`button`,{className:`mobile-nav-link`,onClick:o,style:{background:`none`,border:`none`,cursor:`pointer`,width:`100%`,textAlign:`left`,fontFamily:`inherit`,fontSize:16},children:`로그아웃`}):(0,_.jsx)(l,{to:`/login`,className:`mobile-nav-link`,children:`로그인`})})]}),(0,_.jsxs)(`div`,{className:`mobile-menu-actions`,children:[(0,_.jsxs)(`div`,{className:`color-picker-wrapper`,ref:ee,children:[(0,_.jsx)(`button`,{className:`color-picker-btn`,onClick:()=>S(!x),title:`컬러 테마`,"aria-label":`컬러 테마 선택`,children:(0,_.jsx)(`div`,{className:`color-dot-preview`,style:{background:i.find(e=>e.name===n)?.color}})}),(0,_.jsx)(`div`,{className:`color-picker-dropdown ${x?`show`:``}`,children:i.map(e=>(0,_.jsx)(`button`,{className:`color-option ${n===e.name?`active`:``}`,style:{background:e.color},onClick:()=>{r(e.name),S(!1)},title:e.name,"aria-label":e.name},e.name))})]}),(0,_.jsx)(`button`,{className:`theme-toggle`,onClick:t,title:e,"aria-label":`테마 변경`,children:A})]})]})]})}function xa(){let e=[{path:`/pilgi`,label:`필기 안내`},{path:`/silgi`,label:`실기 안내`},{path:`/pilgi/select`,label:`필기 CBT`},{path:`/silgi/practice`,label:`실기 연습`},{path:`/learn`,label:`과목별 학습`},{path:`/dashboard`,label:`대시보드`},{path:`/about/pricing`,label:`요금제`},{path:`/info`,label:`시험 일정`}],t=[{name:`DreamIT Biz`,url:`https://dreamitbiz.com`},{name:`Coding Study`,url:`https://coding.dreamitbiz.com`},{name:`Python Master`,url:`https://python.dreamitbiz.com`}],n=e=>{let t=e.target.value;t&&(window.open(t,`_blank`,`noopener`),e.target.value=``)};return(0,_.jsxs)(`footer`,{className:`footer`,"aria-label":`사이트 푸터`,children:[(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`div`,{className:`footer-grid`,children:[(0,_.jsxs)(`div`,{className:`footer-brand`,children:[(0,_.jsxs)(`h3`,{className:`footer-logo`,children:[(0,_.jsx)(`span`,{className:`brand-main`,children:`Job`}),(0,_.jsx)(`span`,{className:`brand-sub`,children:`Exam`})]}),(0,_.jsx)(`p`,{children:`직업상담사 시험 준비 플랫폼`}),(0,_.jsx)(`p`,{className:`footer-desc`,children:`CBT 모의시험, 과목별 학습, 실기 연습까지 직업상담사 합격을 위한 올인원 학습 도구`}),(0,_.jsx)(`div`,{className:`footer-family`,children:(0,_.jsxs)(`select`,{onChange:n,defaultValue:``,children:[(0,_.jsx)(`option`,{value:``,disabled:!0,children:`Family Site`}),t.map((e,t)=>(0,_.jsx)(`option`,{value:e.url,children:e.name},t))]})})]}),(0,_.jsxs)(`div`,{className:`footer-section`,children:[(0,_.jsx)(`h4`,{className:`footer-heading`,children:`바로가기`}),(0,_.jsx)(`ul`,{className:`footer-quick-links`,children:e.map((e,t)=>(0,_.jsx)(`li`,{children:(0,_.jsx)(l,{to:e.path,children:e.label})},t))})]}),(0,_.jsxs)(`div`,{className:`footer-section`,children:[(0,_.jsx)(`h4`,{className:`footer-heading`,children:`고객센터`}),(0,_.jsxs)(`ul`,{className:`footer-contact`,children:[(0,_.jsxs)(`li`,{children:[(0,_.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,_.jsx)(`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`}),(0,_.jsx)(`path`,{d:`m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`})]}),(0,_.jsx)(`a`,{href:`mailto:aebon@dreamitbiz.com`,children:`aebon@dreamitbiz.com`})]}),(0,_.jsxs)(`li`,{children:[(0,_.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,_.jsx)(`path`,{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z`})}),(0,_.jsx)(`span`,{children:`010-3700-0629`})]}),(0,_.jsxs)(`li`,{children:[(0,_.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,_.jsx)(`path`,{d:`M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`})}),(0,_.jsx)(`span`,{children:`카카오톡: dreamitbiz`})]}),(0,_.jsxs)(`li`,{children:[(0,_.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,_.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,_.jsx)(`polyline`,{points:`12 6 12 12 16 14`})]}),(0,_.jsx)(`span`,{children:`평일 09:00 ~ 18:00`})]})]}),(0,_.jsxs)(`div`,{className:`footer-legal-links`,children:[(0,_.jsx)(l,{to:`/terms`,children:`이용약관`}),(0,_.jsx)(l,{to:`/privacy`,children:`개인정보처리방침`})]})]})]}),(0,_.jsx)(`div`,{className:`footer-bottom`,children:(0,_.jsx)(`p`,{children:`© 2026 DreamIT Biz. All rights reserved. | 대표이사: 이애본 | 사업자등록번호: 601-45-20154`})})]}),(0,_.jsx)(`button`,{className:`back-to-top`,onClick:()=>window.scrollTo({top:0,behavior:`smooth`}),"aria-label":`맨 위로`,children:(0,_.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,_.jsx)(`polyline`,{points:`18 15 12 9 6 15`})})})]})}function Sa(){let{user:e}=Z(),{hasAccess:t,expiringSoon:n,expiresAt:r,freeTrialRemaining:i,loading:a}=va();if(a||!e)return null;if(t&&n&&r){let e=Math.ceil((r.getTime()-Date.now())/(1e3*60*60*24));return(0,_.jsx)(`div`,{className:`sub-banner sub-banner--warning`,children:(0,_.jsxs)(`div`,{className:`container sub-banner-inner`,children:[(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-clock`}),` 이용권이 `,(0,_.jsxs)(`strong`,{children:[e,`일`]}),` 후 만료됩니다.`]}),(0,_.jsx)(l,{to:`/about/pricing`,className:`btn btn-sm btn-primary`,children:`연장하기`})]})})}return!t&&i>0?(0,_.jsx)(`div`,{className:`sub-banner sub-banner--info`,children:(0,_.jsxs)(`div`,{className:`container sub-banner-inner`,children:[(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-gift`}),` 필기 CBT `,(0,_.jsx)(`strong`,{children:`1회 무료 체험`}),`이 가능합니다!`]}),(0,_.jsxs)(`div`,{className:`sub-banner-btns`,children:[(0,_.jsx)(l,{to:`/pilgi/select`,className:`btn btn-sm btn-primary`,children:`무료 체험`}),(0,_.jsx)(l,{to:`/coupon`,className:`btn btn-sm btn-coupon`,children:`쿠폰 등록`})]})]})}):!t&&i===0?(0,_.jsx)(`div`,{className:`sub-banner sub-banner--upgrade`,children:(0,_.jsxs)(`div`,{className:`container sub-banner-inner`,children:[(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-crown`}),` 이용권을 구매하면 모든 학습 콘텐츠를 이용할 수 있습니다.`]}),(0,_.jsxs)(`div`,{className:`sub-banner-btns`,children:[(0,_.jsx)(l,{to:`/about/pricing`,className:`btn btn-sm btn-primary`,children:`요금제 보기`}),(0,_.jsx)(l,{to:`/coupon`,className:`btn btn-sm btn-coupon`,children:`쿠폰 등록`})]})]})}):null}function Ca({children:e,allowFreeTrial:t=!1}){let{user:n,loading:r}=Z(),{hasAccess:i,freeTrialRemaining:a,loading:o}=va();if(r||o)return(0,_.jsx)(`div`,{className:`loading-page`,children:(0,_.jsx)(`div`,{className:`loading-spinner`})});if(!n)return(0,_.jsx)(`div`,{className:`paid-guard-block`,children:(0,_.jsxs)(`div`,{className:`paid-guard-card`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-lock`}),(0,_.jsx)(`h2`,{children:`로그인이 필요합니다`}),(0,_.jsx)(`p`,{children:`이 콘텐츠를 이용하려면 로그인해 주세요.`}),(0,_.jsx)(l,{to:`/login`,className:`btn btn-primary`,children:`로그인`})]})});let s=(n.email||``).toLowerCase();return s===`aebon@kakao.com`||s===`aebon@kyonggi.ac.kr`||i||t&&a>0?(0,_.jsx)(_.Fragment,{children:e}):(0,_.jsx)(`div`,{className:`paid-guard-block`,children:(0,_.jsxs)(`div`,{className:`paid-guard-card`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-crown`}),(0,_.jsx)(`h2`,{children:`유료 콘텐츠입니다`}),(0,_.jsx)(`p`,{children:t?`무료 체험을 모두 사용했습니다. 이용권을 구매하시면 모든 콘텐츠를 이용할 수 있습니다.`:`이 콘텐츠를 이용하려면 이용권을 구매해 주세요.`}),(0,_.jsxs)(`div`,{className:`paid-guard-actions`,children:[(0,_.jsx)(l,{to:`/about/pricing`,className:`btn btn-primary`,children:`요금제 보기`}),(0,_.jsx)(l,{to:`/checkout`,className:`btn btn-secondary`,children:`바로 구매`})]})]})})}function $({title:e,description:t}){return(0,g.useEffect)(()=>{document.title=e?`${e} | ${$i.name}`:`${$i.name} | ${$i.title}`;let n=document.querySelector(`meta[name="description"]`);n&&n.setAttribute(`content`,t||$i.description)},[e,t]),null}var wa=[`일`,`월`,`화`,`수`,`목`,`금`,`토`];function Ta(e){return`${e.getMonth()+1}.${e.getDate()}(${wa[e.getDay()]})`}function Ea(){let e=[{label:`2회 필기접수`,type:`필기접수`,start:new Date(2026,3,20),end:new Date(2026,3,23)},{label:`2회 필기시험`,type:`필기시험`,start:new Date(2026,4,9),end:new Date(2026,4,29)},{label:`2회 필기발표`,type:`필기발표`,start:new Date(2026,5,10)},{label:`2회 실기접수`,type:`실기접수`,start:new Date(2026,5,22),end:new Date(2026,5,25)},{label:`2회 실기시험`,type:`실기시험`,start:new Date(2026,6,18),end:new Date(2026,7,5)},{label:`2회 최종발표`,type:`최종발표`,start:new Date(2026,8,11)},{label:`3회 필기접수`,type:`필기접수`,start:new Date(2026,6,20),end:new Date(2026,6,23)},{label:`3회 필기시험`,type:`필기시험`,start:new Date(2026,7,7),end:new Date(2026,8,1)},{label:`3회 필기발표`,type:`필기발표`,start:new Date(2026,8,9)},{label:`3회 실기접수`,type:`실기접수`,start:new Date(2026,8,21),end:new Date(2026,8,28)},{label:`3회 실기시험`,type:`실기시험`,start:new Date(2026,9,24),end:new Date(2026,10,13)},{label:`3회 최종발표`,type:`최종발표`,start:new Date(2026,11,18)}],t=new Date;return t.setHours(0,0,0,0),e.map(e=>{let n=Math.ceil((e.start.getTime()-t.getTime())/(1e3*60*60*24)),r=e.end?`${Ta(e.start)}~${Ta(e.end)}`:Ta(e.start);return{label:e.label,type:e.type,startDate:e.start,endDate:e.end,days:n,dateStr:r}}).filter(e=>{let n=e.endDate??e.startDate;return Math.ceil((n.getTime()-t.getTime())/(1e3*60*60*24))>=0})}function Da(){let e=Ea();if(e.length===0)return null;let t=e[0],n=t.type===`필기시험`||t.type===`실기시험`?`시험`:t.type===`필기접수`||t.type===`실기접수`?`접수`:`발표`;return{label:t.label,type:n,days:t.days,dateStr:t.dateStr}}function Oa(){let e=Da(),t=Ea();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`section`,{className:`hero`,children:[(0,_.jsx)(`div`,{className:`particles`,children:[...[,,,,,,]].map((e,t)=>(0,_.jsx)(`div`,{className:`particle`,style:{width:`${4+t*3}px`,height:`${4+t*3}px`,left:`${10+t*15}%`,top:`${20+t%3*25}%`,"--duration":`${15+t*3}s`,"--delay":`${t*2}s`}},t))}),(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`div`,{className:`hero-content`,children:[(0,_.jsxs)(`div`,{className:`hero-badge`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-award`}),` 2026년 직업상담사 1급·2급`]}),(0,_.jsxs)(`h1`,{className:`hero-title`,children:[`직업상담사`,(0,_.jsx)(`br`,{}),(0,_.jsx)(`span`,{className:`highlight`,children:`합격을 위한 최적의 학습`})]}),(0,_.jsxs)(`p`,{className:`hero-description`,children:[`기출문제 CBT, 모의시험, 과목별 분석, 오답노트까지.`,(0,_.jsx)(`br`,{}),`체계적인 시험 준비로 한 번에 합격하세요.`]}),(0,_.jsxs)(`div`,{className:`hero-buttons`,children:[(0,_.jsxs)(l,{to:`/pilgi`,className:`btn btn-primary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`}),` 필기 시작하기`]}),(0,_.jsxs)(l,{to:`/info`,className:`btn btn-secondary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),` 시험 안내`]})]})]}),t.length>0&&(0,_.jsxs)(`div`,{className:`hero-exam-schedule`,children:[(0,_.jsxs)(`div`,{className:`hero-schedule-title`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),` 2026 시험 일정`]}),(0,_.jsx)(`div`,{className:`hero-schedule-cards`,children:t.slice(0,3).map((e,t)=>{let n=e.type===`필기시험`||e.type===`실기시험`?`exam`:e.type===`필기접수`||e.type===`실기접수`?`register`:`announce`,r=n===`exam`?`fa-solid fa-pen-to-square`:n===`register`?`fa-solid fa-clipboard-list`:`fa-solid fa-bullhorn`,i=e.days<0?`진행중`:e.days===0?`D-Day`:`D-${e.days}`;return(0,_.jsxs)(`div`,{className:`hero-schedule-card ${n}${t===0?` nearest`:``}`,children:[(0,_.jsxs)(`span`,{className:`hero-schedule-type ${n}`,children:[(0,_.jsx)(`i`,{className:r}),` `,e.type]}),(0,_.jsxs)(`div`,{className:`hero-schedule-info`,children:[(0,_.jsx)(`span`,{className:`hero-schedule-label`,children:e.label}),(0,_.jsx)(`span`,{className:`hero-schedule-date`,children:e.dateStr})]}),(0,_.jsx)(`span`,{className:`hero-schedule-dday ${n}`,children:i})]},t)})})]})]}),(0,_.jsxs)(`div`,{className:`scroll-indicator`,children:[(0,_.jsx)(`div`,{className:`mouse`,children:(0,_.jsx)(`div`,{className:`wheel`})}),(0,_.jsx)(`span`,{className:`scroll-text`,children:`Scroll Down`})]})]}),(0,_.jsx)(`section`,{className:`home-section`,style:{padding:`var(--section-padding) 0`},children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`div`,{className:`section-header`,children:[(0,_.jsx)(`div`,{className:`section-badge`,children:`SUBJECTS`}),(0,_.jsx)(`h2`,{className:`section-title`,children:`5개 필기 과목`}),(0,_.jsx)(`p`,{className:`section-subtitle`,children:`과목별 맞춤 학습으로 약점을 보완하고 합격을 준비하세요`})]}),(0,_.jsx)(`div`,{className:`home-subjects-grid`,children:Q.map((e,t)=>(0,_.jsxs)(`div`,{className:`home-subject-card`,style:{borderLeftColor:e.color},children:[(0,_.jsx)(`div`,{className:`home-subject-icon`,style:{background:`${e.color}15`,color:e.color},children:(0,_.jsx)(`i`,{className:e.icon})}),(0,_.jsx)(`h4`,{children:e.name}),(0,_.jsxs)(`p`,{className:`home-subject-desc`,children:[e.code===`counseling`&&`상담이론, 상담기법, 직업상담 과정 등`,e.code===`psychology`&&`직업심리검사, 직업적성, 흥미이론 등`,e.code===`jobinfo`&&`직업분류, 직업정보 수집·분석, 워크넷 등`,e.code===`labor_market`&&`노동시장 이론, 임금, 실업, 인적자본 등`,e.code===`labor_law`&&`근로기준법, 고용보험법, 직업안정법 등`]}),(0,_.jsx)(`span`,{className:`home-subject-questions`,children:`20문항 / 과목`})]},e.code))})]})}),(0,_.jsx)(`section`,{className:`home-section home-features-section`,style:{padding:`var(--section-padding) 0`,background:`var(--bg-light-gray)`},children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`div`,{className:`section-header`,children:[(0,_.jsx)(`div`,{className:`section-badge`,children:`FEATURES`}),(0,_.jsx)(`h2`,{className:`section-title`,children:`학습 기능`}),(0,_.jsx)(`p`,{className:`section-subtitle`,children:`합격을 위한 다양한 학습 도구를 제공합니다`})]}),(0,_.jsx)(`div`,{className:`home-features-grid`,children:[{icon:`fa-solid fa-desktop`,title:`CBT 모의시험`,desc:`실제 시험과 동일한 환경의 온라인 CBT로 실전 감각을 키우세요`,color:`#1B3A6B`,highlight:!0},{icon:`fa-solid fa-book-open`,title:`학습 모드`,desc:`답 선택 즉시 정답과 해설을 확인하며 효율적으로 학습하세요`,color:`#2A4F8A`},{icon:`fa-solid fa-chart-pie`,title:`과목별 분석`,desc:`레이더 차트로 강점과 약점을 한눈에 파악하세요`,color:`#3D6DB5`},{icon:`fa-solid fa-rotate-left`,title:`오답 노트`,desc:`틀린 문제를 모아 반복 학습으로 실력을 올리세요`,color:`#1E4D80`},{icon:`fa-solid fa-trophy`,title:`합격 예측`,desc:`최근 시험 결과를 분석하여 합격 확률을 예측합니다`,color:`#0F2444`,highlight:!0},{icon:`fa-solid fa-file-pen`,title:`실기 연습`,desc:`서술형 문제와 모범답안 비교로 실기도 준비하세요`,color:`#1B3A6B`,highlight:!0}].map((e,t)=>(0,_.jsxs)(`div`,{className:`home-feature-card${e.highlight?` home-feature-card--highlight`:``}`,style:{borderLeftColor:e.color},children:[(0,_.jsx)(`div`,{className:`home-feature-icon`,style:{color:e.color,background:`${e.color}12`},children:(0,_.jsx)(`i`,{className:e.icon})}),(0,_.jsx)(`h4`,{children:e.title}),(0,_.jsx)(`p`,{children:e.desc})]},t))})]})}),(0,_.jsx)(`section`,{className:`home-section`,style:{padding:`var(--section-padding) 0`},children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`div`,{className:`section-header`,children:[(0,_.jsx)(`div`,{className:`section-badge`,children:`ROADMAP`}),(0,_.jsx)(`h2`,{className:`section-title`,children:`학습 로드맵`}),(0,_.jsx)(`p`,{className:`section-subtitle`,children:`체계적인 4단계 학습 프로세스를 따라가세요`})]}),(0,_.jsx)(`div`,{className:`home-overview-grid`,children:[{icon:`fa-solid fa-book-open`,step:`STEP 1`,title:`이론 학습`,desc:`과목별 핵심 이론과 개념을 먼저 학습합니다`,link:`/learn`},{icon:`fa-solid fa-pen-to-square`,step:`STEP 2`,title:`기출문제 풀이`,desc:`CBT 모의시험으로 실전 감각을 익힙니다`,link:`/pilgi/select`},{icon:`fa-solid fa-rotate-left`,step:`STEP 3`,title:`오답 복습`,desc:`틀린 문제를 분석하고 약점을 보완합니다`,link:`/wrong-answers`},{icon:`fa-solid fa-trophy`,step:`STEP 4`,title:`합격 달성`,desc:`반복 학습으로 합격 점수를 안정적으로 확보합니다`,link:`/dashboard`}].map((e,t)=>(0,_.jsxs)(l,{to:e.link,className:`home-overview-step`,style:{textDecoration:`none`},children:[(0,_.jsx)(`div`,{className:`home-overview-step-num`,children:e.step}),(0,_.jsx)(`div`,{className:`home-overview-icon`,children:(0,_.jsx)(`i`,{className:e.icon})}),(0,_.jsx)(`h4`,{children:e.title}),(0,_.jsx)(`p`,{children:e.desc})]},t))})]})}),(0,_.jsx)(`section`,{className:`home-stats-section`,children:(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsxs)(`div`,{className:`home-stats-grid`,children:[e&&(0,_.jsxs)(`div`,{className:`home-stat-item home-stat-dday`,children:[(0,_.jsxs)(`span`,{className:`home-stat-number`,children:[`D-`,e.days===0?`Day`:e.days]}),(0,_.jsxs)(`span`,{className:`home-stat-label`,children:[e.label,` (`,e.dateStr,`)`]})]}),(0,_.jsxs)(`div`,{className:`home-stat-item`,children:[(0,_.jsx)(`span`,{className:`home-stat-number`,children:`5`}),(0,_.jsx)(`span`,{className:`home-stat-label`,children:`필기 과목`})]}),(0,_.jsxs)(`div`,{className:`home-stat-item`,children:[(0,_.jsx)(`span`,{className:`home-stat-number`,children:`100`}),(0,_.jsx)(`span`,{className:`home-stat-label`,children:`문항 / 100분`})]}),(0,_.jsxs)(`div`,{className:`home-stat-item`,children:[(0,_.jsx)(`span`,{className:`home-stat-number`,children:`60`}),(0,_.jsx)(`span`,{className:`home-stat-label`,children:`점 (합격기준)`})]})]})})}),(0,_.jsx)(`section`,{className:`home-cta-section`,children:(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsxs)(`div`,{className:`home-cta-content`,children:[(0,_.jsx)(`h2`,{children:`지금 바로 시작하세요`}),(0,_.jsx)(`p`,{children:`첫 필기 CBT 1회 무료 체험! 합리적인 이용권으로 모든 학습 콘텐츠를 이용하세요.`}),(0,_.jsxs)(`div`,{className:`home-cta-buttons`,children:[(0,_.jsxs)(l,{to:`/about/pricing`,className:`btn btn-primary btn-lg`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-tags`}),` 요금제 보기`]}),(0,_.jsxs)(l,{to:`/login`,className:`btn btn-secondary btn-lg`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-rocket`}),` 무료 체험하기`]})]})]})})})]})}function ka(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{}),(0,_.jsx)(Oa,{})]})}function Aa(){return(0,_.jsxs)(`div`,{className:`not-found-page`,style:{paddingTop:`var(--nav-height)`},children:[(0,_.jsx)($,{title:`404`}),(0,_.jsxs)(`div`,{className:`not-found-content`,children:[(0,_.jsx)(`div`,{className:`not-found-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-compass`})}),(0,_.jsx)(`div`,{className:`not-found-code`,children:`404`}),(0,_.jsx)(`h1`,{className:`not-found-title`,children:`페이지를 찾을 수 없습니다`}),(0,_.jsx)(`p`,{className:`not-found-desc`,children:`요청하신 페이지가 존재하지 않거나 이동되었습니다.`}),(0,_.jsxs)(`div`,{className:`not-found-actions`,children:[(0,_.jsx)(l,{to:`/`,className:`btn btn-primary`,children:`홈으로`}),(0,_.jsx)(l,{to:`/pilgi`,className:`btn btn-secondary`,children:`필기 학습`})]})]})]})}function ja(){let{user:e,signInWithGoogle:t,signInWithKakao:n}=Z();return e?(0,_.jsx)(a,{to:`/dashboard`,replace:!0}):(0,_.jsxs)(`div`,{className:`login-page`,children:[(0,_.jsx)($,{title:`로그인`}),(0,_.jsx)(`div`,{className:`login-container`,children:(0,_.jsxs)(`div`,{className:`login-card`,children:[(0,_.jsxs)(`div`,{className:`login-header`,children:[(0,_.jsxs)(`div`,{className:`login-logo`,children:[(0,_.jsx)(`span`,{children:`For`}),(0,_.jsx)(`span`,{style:{opacity:.7},children:`Job`})]}),(0,_.jsx)(`h1`,{className:`login-title`,children:`로그인`}),(0,_.jsx)(`p`,{className:`login-subtitle`,children:`소셜 계정으로 간편하게 시작하세요`})]}),(0,_.jsxs)(`div`,{className:`login-buttons`,children:[(0,_.jsxs)(`button`,{className:`login-btn google-btn`,onClick:t,children:[(0,_.jsx)(`span`,{className:`login-icon`,children:(0,_.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,children:[(0,_.jsx)(`path`,{fill:`#4285F4`,d:`M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z`}),(0,_.jsx)(`path`,{fill:`#34A853`,d:`M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`}),(0,_.jsx)(`path`,{fill:`#FBBC05`,d:`M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`}),(0,_.jsx)(`path`,{fill:`#EA4335`,d:`M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`})]})}),`Google로 계속하기`]}),(0,_.jsxs)(`button`,{className:`login-btn kakao-btn`,onClick:n,children:[(0,_.jsx)(`span`,{className:`login-icon`,children:(0,_.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,children:(0,_.jsx)(`path`,{fill:`#000000`,d:`M12 3C6.48 3 2 6.36 2 10.5c0 2.69 1.79 5.05 4.48 6.39-.15.54-.97 3.48-1 3.63 0 .11.04.22.13.28.06.04.14.06.21.06.09 0 .17-.03.24-.09.89-.66 3.29-2.44 3.82-2.85.68.1 1.39.15 2.12.15 5.52 0 10-3.36 10-7.5S17.52 3 12 3z`})})}),`카카오로 계속하기`]})]}),(0,_.jsxs)(`p`,{className:`login-terms`,children:[`로그인 시 `,(0,_.jsx)(`a`,{href:`#`,children:`이용약관`}),` 및 `,(0,_.jsx)(`a`,{href:`#`,children:`개인정보처리방침`}),`에 동의하게 됩니다.`]}),(0,_.jsx)(`div`,{className:`login-footer`,children:`학습 기록은 로그인 후 자동으로 저장됩니다.`})]})})]})}function Ma({user:e}){let[t,n]=(0,g.useState)({lastScore:null,passRate:0,totalExams:0,weakSubject:null,weakScore:null}),[r,i]=(0,g.useState)(!0);return(0,g.useEffect)(()=>{async function t(){try{let{data:t}=await Y.from(X.EXAM_SESSIONS).select(`score_total, is_pass, score_by_subject`).eq(`user_id`,e.id).eq(`exam_type`,`pilgi`).not(`completed_at`,`is`,null).order(`completed_at`,{ascending:!1}).limit(5);if(t&&t.length>0){let e=t.filter(e=>e.is_pass).length,r=t[0],i=null,a=null;if(r.score_by_subject){let e=r.score_by_subject,t=1/0;for(let[n,r]of Object.entries(e))r<t&&(t=r,i=Q.find(e=>e.code===n)?.name||n,a=r)}n({lastScore:r.score_total,passRate:Math.round(e/t.length*100),totalExams:t.length,weakSubject:i,weakScore:a})}}catch{}finally{i(!1)}}t()},[e.id]),r?(0,_.jsxs)(`div`,{className:`my-status-card`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-line`}),` 나의 필기 현황`]}),(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`},children:`불러오는 중...`})]}):t.totalExams===0?(0,_.jsxs)(`div`,{className:`my-status-card`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-line`}),` 나의 필기 현황`]}),(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`,marginBottom:16},children:`아직 시험 기록이 없습니다. 첫 CBT를 시작해보세요!`}),(0,_.jsx)(l,{to:`/pilgi/select`,className:`btn btn-primary btn-sm`,children:`필기 CBT 시작`})]}):(0,_.jsxs)(`div`,{className:`my-status-card`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-line`}),` 나의 필기 현황`]}),(0,_.jsxs)(`div`,{className:`my-status-stats`,children:[(0,_.jsxs)(`div`,{className:`my-status-stat`,children:[(0,_.jsx)(`span`,{className:`my-status-stat-label`,children:`최근 점수`}),(0,_.jsxs)(`span`,{className:`my-status-stat-value`,children:[t.lastScore,`점`]})]}),(0,_.jsxs)(`div`,{className:`my-status-stat`,children:[(0,_.jsx)(`span`,{className:`my-status-stat-label`,children:`합격률`}),(0,_.jsxs)(`span`,{className:`my-status-stat-value`,children:[t.passRate,`%`]})]}),(0,_.jsxs)(`div`,{className:`my-status-stat`,children:[(0,_.jsx)(`span`,{className:`my-status-stat-label`,children:`시험`}),(0,_.jsxs)(`span`,{className:`my-status-stat-value`,children:[t.totalExams,`회`]})]})]}),t.weakSubject&&(0,_.jsxs)(`div`,{className:`my-status-weak`,children:[`약점 과목: `,(0,_.jsxs)(`strong`,{children:[t.weakSubject,` (`,t.weakScore,`점)`]})]}),(0,_.jsxs)(`div`,{className:`my-status-actions`,children:[(0,_.jsx)(l,{to:`/dashboard`,className:`btn btn-primary btn-sm`,children:`대시보드 보기`}),(0,_.jsx)(l,{to:`/wrong-answers`,className:`btn btn-secondary btn-sm`,children:`오답노트 보기`})]})]})}function Na(){let{user:e}=Z();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`필기 시험`,description:`직업상담사 2급 필기 시험 준비`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`}),` 필기 시험`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`5과목 100문항, 4지선다. 평균 60점 이상 + 과목당 40점 이상 합격`})]})}),(0,_.jsxs)(`div`,{className:`container`,style:{paddingBottom:80},children:[e?(0,_.jsx)(Ma,{user:e}):(0,_.jsxs)(`div`,{className:`my-status-login-banner`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(l,{to:`/login`,children:`로그인`}),`하면 학습 현황을 확인할 수 있습니다`]})]}),(0,_.jsxs)(`div`,{className:`pilgi-modes`,children:[(0,_.jsxs)(l,{to:`/pilgi/select`,className:`pilgi-mode-card`,children:[(0,_.jsx)(`div`,{className:`pilgi-mode-icon exam`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-desktop`})}),(0,_.jsx)(`h3`,{children:`시험 모드`}),(0,_.jsx)(`p`,{children:`실제 시험과 동일한 환경으로 100문항을 100분 내에 풀어보세요`}),(0,_.jsx)(`span`,{className:`pilgi-mode-badge`,children:`100분 타이머`})]}),(0,_.jsxs)(l,{to:`/pilgi/study`,className:`pilgi-mode-card`,children:[(0,_.jsx)(`div`,{className:`pilgi-mode-icon study`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-book-open`})}),(0,_.jsx)(`h3`,{children:`학습 모드`}),(0,_.jsx)(`p`,{children:`답 선택 즉시 정답과 해설을 확인하며 학습할 수 있습니다`}),(0,_.jsx)(`span`,{className:`pilgi-mode-badge`,children:`즉시 해설`})]})]}),(0,_.jsxs)(`div`,{className:`section-header mt-4`,children:[(0,_.jsx)(`div`,{className:`section-badge`,children:`SUBJECTS`}),(0,_.jsx)(`h2`,{className:`section-title`,children:`과목 안내`})]}),(0,_.jsx)(`div`,{className:`pilgi-subjects-grid`,children:Q.map(e=>(0,_.jsxs)(`div`,{className:`pilgi-subject-card`,style:{borderTopColor:e.color},children:[(0,_.jsx)(`div`,{className:`pilgi-subject-icon`,style:{color:e.color,background:`${e.color}12`},children:(0,_.jsx)(`i`,{className:e.icon})}),(0,_.jsx)(`h4`,{children:e.name}),(0,_.jsx)(`p`,{children:`20문항 / 과목당 40점 이상`})]},e.code))})]})]})}var Pa=null;async function Fa(){if(Pa)return Pa;let e=await f(()=>import(`./pilgiQuestions-b8lTEFML.js`),[]);return Pa=(e.default||e).map(e=>({...e,id:`local_${e.exam_year}_${e.exam_session}_${e.question_number}`})),Pa}async function Ia(e){let{examYear:t,examSession:n,subjectId:r,limit:i}=e||{};try{let e=Y.from(X.QUESTIONS).select(`*`);t&&(e=e.eq(`exam_year`,t)),n&&(e=e.eq(`exam_session`,n)),r&&(e=e.eq(`subject_id`,r)),e=e.order(`subject_id`).order(`question_number`),i&&(e=e.limit(i));let{data:a,error:o}=await e;if(!o&&a&&a.length>0)return a}catch{}let a=[...await Fa()];return t&&(a=a.filter(e=>e.exam_year===t)),n&&(a=a.filter(e=>e.exam_session===n)),r&&(a=a.filter(e=>e.subject_id===r)),a.sort((e,t)=>e.subject_id-t.subject_id||e.question_number-t.question_number),i&&(a=a.slice(0,i)),a}async function La(){let e=await Fa();return[...new Set(e.map(e=>e.exam_year))].sort((e,t)=>t-e)}async function Ra(e){let t=await Fa(),n=e?t.filter(t=>t.exam_year===e):t;return[...new Set(n.map(e=>e.exam_session))].sort()}function za(){let[e,t]=(0,g.useState)(`random`),[r,i]=(0,g.useState)(`random`),[a,o]=(0,g.useState)(!1),[s,c]=(0,g.useState)([]),[l,u]=(0,g.useState)([]),d=n(),{user:f}=Z(),{showToast:p}=k();(0,g.useEffect)(()=>{La().then(c)},[]),(0,g.useEffect)(()=>{Ra(e===`random`?void 0:parseInt(e)).then(u)},[e]);let m=async()=>{o(!0);try{let t=await Ia({examYear:e===`random`?null:parseInt(e),examSession:r===`random`?null:parseInt(r),limit:100});if(!t.length){p(`해당 조건의 문제가 없습니다. 랜덤으로 시작합니다.`,`info`);let e=await Ia({limit:100});if(!e.length){p(`등록된 문제가 없습니다.`,`error`),o(!1);return}let t=await h(e,null,null);d(`/pilgi/exam/${t.id}`,{state:{questions:e,session:t}});return}let n=await h(t,e===`random`?null:parseInt(e),r===`random`?null:parseInt(r));d(`/pilgi/exam/${n.id}`,{state:{questions:t,session:n}})}catch(e){console.error(e),p(`시험 시작에 실패했습니다.`,`error`)}o(!1)},h=async(e,t,n)=>{let r={user_id:f?.id||null,exam_type:`pilgi`,mode:`exam`,exam_year:t,total_questions:e.length,correct_count:0,score_total:0,is_pass:!1,time_spent_sec:0,started_at:new Date().toISOString()};if(!f)return{id:`local_${Date.now()}`,...r};let{data:i,error:a}=await Y.from(X.EXAM_SESSIONS).insert(r).select().single();if(a)throw a;return i};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`시험 선택`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-list-check`}),` 시험 선택`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`연도와 회차를 선택하거나 랜덤으로 시험을 시작하세요`})]})}),(0,_.jsx)(`div`,{className:`container`,style:{paddingBottom:80},children:(0,_.jsxs)(`div`,{className:`exam-select-card`,children:[(0,_.jsxs)(`div`,{className:`form-group`,children:[(0,_.jsx)(`label`,{className:`form-label`,children:`출제 연도`}),(0,_.jsxs)(`select`,{className:`form-select`,value:e,onChange:e=>t(e.target.value),children:[(0,_.jsx)(`option`,{value:`random`,children:`랜덤 (전체 연도)`}),s.map(e=>(0,_.jsxs)(`option`,{value:e,children:[e,`년`]},e))]})]}),(0,_.jsxs)(`div`,{className:`form-group`,children:[(0,_.jsx)(`label`,{className:`form-label`,children:`회차`}),(0,_.jsxs)(`select`,{className:`form-select`,value:r,onChange:e=>i(e.target.value),children:[(0,_.jsx)(`option`,{value:`random`,children:`랜덤 (전체 회차)`}),l.map(e=>(0,_.jsxs)(`option`,{value:e,children:[e,`회`]},e))]})]}),(0,_.jsxs)(`div`,{className:`exam-select-info`,children:[(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),` 총 100문항 (5과목 x 20문항), 제한시간 100분`]}),(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-check`}),` 평균 60점 이상 + 과목당 40점 이상 합격`]})]}),(0,_.jsx)(`button`,{className:`btn btn-primary btn-lg`,onClick:m,disabled:a,style:{width:`100%`,marginTop:24},children:a?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`div`,{className:`loading-spinner`,style:{width:20,height:20,borderWidth:2}}),` 시작 중...`]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-play`}),` 시험 시작`]})})]})})]})}function Ba({isBookmarked:e,onClick:t}){return(0,_.jsxs)(`button`,{className:`bookmark-btn ${e?`active`:``}`,onClick:t,"aria-label":e?`북마크 해제`:`북마크 추가`,children:[(0,_.jsx)(`i`,{className:e?`fa-solid fa-bookmark`:`fa-regular fa-bookmark`}),(0,_.jsx)(`span`,{className:`bookmark-tooltip`,children:e?`북마크 해제`:`북마크 추가`})]})}function Va(e){if(!e)return null;let t=e.split(/\n\n<보기>\n/);if(t.length===2){let e=t[0],n=t[1];return(0,_.jsxs)(_.Fragment,{children:[Ua(e),(0,_.jsxs)(`div`,{className:`bogi-box`,children:[(0,_.jsx)(`div`,{className:`bogi-label`,children:`보기`}),(0,_.jsx)(`div`,{className:`bogi-content`,children:Ha(n)})]})]})}let n=e.split(`
`);if(n.findIndex(e=>e.trim().startsWith(`|`)&&e.trim().endsWith(`|`))>=0){let e=[],t=[],r=[],i=!1,a=!1;for(let o of n){let n=o.trim();!a&&n.startsWith(`|`)&&n.endsWith(`|`)?(i=!0,/^\|[\s\-|]+\|$/.test(n)||t.push(n)):(i&&(i=!1,a=!0),a?r.push(o):e.push(o))}if(t.length>=2)return(0,_.jsxs)(_.Fragment,{children:[e.length>0&&Ua(e.join(`
`)),(0,_.jsx)(`div`,{className:`bogi-box`,children:(0,_.jsx)(`table`,{className:`q-table`,children:(0,_.jsx)(`tbody`,{children:t.map((e,t)=>{let n=e.split(`|`).filter(e=>e!==``);return(0,_.jsx)(`tr`,{className:t===0?`q-table-header`:``,children:n.map((e,n)=>t===0?(0,_.jsx)(`th`,{children:e.trim()},n):(0,_.jsx)(`td`,{children:e.trim()},n))},t)})})})}),r.length>0&&Ua(r.join(`
`))]})}let r=e.match(/\n\n(다음 [^\n]+\n\n)/);if(r&&r.index!==void 0){let t=e.substring(0,r.index),n=e.substring(r.index+2),i=r[1],a=n.substring(i.length);if(a.trim())return(0,_.jsxs)(_.Fragment,{children:[t&&Ua(t),(0,_.jsxs)(`div`,{className:`passage-block`,children:[(0,_.jsx)(`div`,{className:`passage-label`,children:i.trim()}),(0,_.jsx)(`div`,{className:`passage-content`,children:Ha(a)})]})]})}return Ua(e)}function Ha(e){let t=e.split(/\n/).filter(e=>e.trim());return t.some(e=>/^[ㄱ-ㅎ]\.\s/.test(e.trim()))?(0,_.jsx)(`ul`,{className:`bogi-list`,children:t.map((e,t)=>(0,_.jsx)(`li`,{children:e.trim()},t))}):(0,_.jsx)(`span`,{style:{whiteSpace:`pre-wrap`},children:e})}function Ua(e){return!e||!e.trim()?null:(0,_.jsx)(`span`,{style:{whiteSpace:`pre-wrap`},children:e.trim()})}function Wa({question:e,selectedAnswer:t,onSelectAnswer:n,showResult:r=!1,showExplanation:i=!1,questionIndex:a,isBookmarked:o,onToggleBookmark:s}){let{question_text:c,option_1:l,option_2:u,option_3:d,option_4:f,correct_answer:p,explanation:m}=e,h=[l,u,d,f],g=e=>{let n=e+1,i=`option-item`;return t===n&&(i+=` selected`),r&&(n===p?i+=` correct`:t===n&&n!==p&&(i+=` wrong`)),i};return(0,_.jsxs)(`div`,{className:`question-card`,children:[(0,_.jsxs)(`div`,{className:`question-header`,children:[(0,_.jsxs)(`span`,{className:`question-number`,children:[`Q`,a+1]}),s&&(0,_.jsx)(Ba,{isBookmarked:o,onClick:()=>s(e.id)})]}),(0,_.jsx)(`div`,{className:`question-text`,children:Va(c)}),(0,_.jsx)(`div`,{className:`options-list`,children:h.map((e,i)=>(0,_.jsxs)(`button`,{className:g(i),onClick:()=>!r&&n?.(i+1),disabled:r,children:[(0,_.jsx)(`span`,{className:`option-number`,children:i+1}),(0,_.jsx)(`span`,{className:`option-text`,children:e}),r&&i+1===p&&(0,_.jsx)(`i`,{className:`fa-solid fa-circle-check option-icon correct-icon`}),r&&t===i+1&&i+1!==p&&(0,_.jsx)(`i`,{className:`fa-solid fa-circle-xmark option-icon wrong-icon`})]},i))}),i&&m&&(0,_.jsxs)(`div`,{className:`explanation-box`,children:[(0,_.jsxs)(`div`,{className:`explanation-header`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-lightbulb`}),` 해설`]}),(0,_.jsx)(`p`,{children:m})]})]})}function Ga(){let[e,t]=(0,g.useState)(`all`),[n,r]=(0,g.useState)([]),[i,a]=(0,g.useState)(0),[o,s]=(0,g.useState)({}),[c,l]=(0,g.useState)({}),[u,d]=(0,g.useState)(!1),[f,p]=(0,g.useState)([]),{user:m}=Z(),{showToast:h}=k(),v=(0,g.useCallback)(async()=>{d(!0);try{r(await Ia({subjectId:(e===`all`?null:Q.find(t=>t.code===e))?.id||null,limit:50})||[]),a(0),s({}),l({})}catch(e){console.error(e),h(`문제를 불러오는데 실패했습니다.`,`error`)}d(!1)},[e,h]);(0,g.useEffect)(()=>{v()},[v]),(0,g.useEffect)(()=>{m&&Y.from(X.BOOKMARKS).select(`question_id`).eq(`user_id`,m.id).then(({data:e})=>{e&&p(e.map(e=>e.question_id))})},[m]);let y=(e,t)=>{s(n=>({...n,[e]:t})),l(t=>({...t,[e]:!0}))},b=async e=>{if(!m){h(`로그인 후 북마크를 이용할 수 있습니다.`,`info`);return}f.includes(e)?(await Y.from(X.BOOKMARKS).delete().eq(`user_id`,m.id).eq(`question_id`,e),p(t=>t.filter(t=>t!==e)),h(`북마크가 해제되었습니다.`,`info`)):(await Y.from(X.BOOKMARKS).insert({user_id:m.id,question_id:e}),p(t=>[...t,e]),h(`북마크에 추가되었습니다.`,`success`))},x=n[i],S=x?Q.find(e=>e.id===x.subject_id):null;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`학습 모드`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-book-open`}),` 학습 모드`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`답을 선택하면 즉시 정답과 해설을 확인할 수 있습니다`})]})}),(0,_.jsxs)(`div`,{className:`container`,style:{paddingBottom:80},children:[(0,_.jsxs)(`div`,{className:`study-filters`,children:[(0,_.jsx)(`button`,{className:`study-filter-btn ${e===`all`?`active`:``}`,onClick:()=>t(`all`),children:`전체`}),Q.map(n=>(0,_.jsx)(`button`,{className:`study-filter-btn ${e===n.code?`active`:``}`,onClick:()=>t(n.code),style:e===n.code?{background:n.color,borderColor:n.color,color:`#FFF`}:{},children:n.name},n.code))]}),u?(0,_.jsx)(`div`,{className:`loading-page`,children:(0,_.jsx)(`div`,{className:`loading-spinner`})}):n.length===0?(0,_.jsx)(`div`,{className:`text-center mt-4`,children:(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`},children:`등록된 문제가 없습니다.`})}):(0,_.jsxs)(_.Fragment,{children:[S&&(0,_.jsxs)(`div`,{className:`study-subject-badge`,style:{background:`${S.color}15`,color:S.color},children:[(0,_.jsx)(`i`,{className:S.icon}),` `,S.name]}),(0,_.jsx)(Wa,{question:x,selectedAnswer:o[x.id],onSelectAnswer:e=>y(x.id,e),showResult:!!c[x.id],showExplanation:!!c[x.id],questionIndex:i,isBookmarked:f.includes(x.id),onToggleBookmark:b}),(0,_.jsxs)(`div`,{className:`exam-nav-buttons mt-3`,children:[(0,_.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>a(e=>Math.max(0,e-1)),disabled:i===0,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-left`}),` 이전`]}),(0,_.jsxs)(`span`,{className:`exam-page-info`,children:[i+1,` / `,n.length]}),(0,_.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>a(e=>Math.min(n.length-1,e+1)),disabled:i>=n.length-1,children:[`다음 `,(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-right`})]})]})]})]})]})}function Ka({totalSeconds:e,onTimeUp:t,running:n=!0}){let[r,i]=(0,g.useState)(e),a=(0,g.useRef)(null);(0,g.useEffect)(()=>{if(n)return a.current=setInterval(()=>{i(e=>e<=1?(clearInterval(a.current),t?.(),0):e-1)},1e3),()=>clearInterval(a.current)},[n,t]);let o=Math.floor(r/3600),s=Math.floor(r%3600/60),c=r%60,l=e=>String(e).padStart(2,`0`);return(0,_.jsxs)(`div`,{className:`exam-timer ${r<=600?`warning`:``} ${r<=60?`danger`:``}`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-clock`}),(0,_.jsxs)(`span`,{className:`timer-display`,children:[o>0&&`${l(o)}:`,l(s),`:`,l(c)]})]})}function qa({questions:e,answers:t,currentIndex:n,onNavigate:r,bookmarkedIds:i=[]}){return(0,_.jsxs)(`div`,{className:`question-nav`,children:[(0,_.jsxs)(`div`,{className:`question-nav-title`,children:[`문항 네비게이션`,(0,_.jsxs)(`span`,{style:{float:`right`,fontWeight:500,color:`var(--text-secondary)`},children:[Object.keys(t).length,` / `,e.length]})]}),(0,_.jsx)(`div`,{className:`question-nav-grid`,children:e.map((e,a)=>{let o=`question-nav-btn`;return a===n?o+=` current`:i.includes(e.id)?o+=` bookmarked`:t[e.id]&&(o+=` answered`),(0,_.jsx)(`button`,{className:o,onClick:()=>r(a),children:a+1},e.id)})}),(0,_.jsxs)(`div`,{className:`question-nav-legend`,children:[(0,_.jsxs)(`span`,{className:`nav-legend-item`,children:[(0,_.jsx)(`span`,{className:`nav-legend-dot current`}),` 현재`]}),(0,_.jsxs)(`span`,{className:`nav-legend-item`,children:[(0,_.jsx)(`span`,{className:`nav-legend-dot answered`}),` 답변`]}),(0,_.jsxs)(`span`,{className:`nav-legend-item`,children:[(0,_.jsx)(`span`,{className:`nav-legend-dot bookmarked`}),` 북마크`]}),(0,_.jsxs)(`span`,{className:`nav-legend-item`,children:[(0,_.jsx)(`span`,{className:`nav-legend-dot`}),` 미답변`]})]})]})}function Ja({isOpen:e,onClose:t,title:n,children:r,actions:i}){return(0,g.useEffect)(()=>(e?document.body.style.overflow=`hidden`:document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[e]),e?(0,_.jsx)(`div`,{className:`modal-overlay`,onClick:t,children:(0,_.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[n&&(0,_.jsx)(`h2`,{className:`modal-title`,children:n}),(0,_.jsx)(`div`,{className:`modal-body`,children:r}),i&&(0,_.jsx)(`div`,{className:`modal-actions`,children:i})]})}):null}function Ya(e,t){let n={};Q.forEach(r=>{let i=e.filter(e=>e.subject_id===r.id),a=i.filter(e=>t[e.id]===e.correct_answer).length,o=i.length||ta.pilgi.questionsPerSubject;n[r.code]=Math.round(a/o*100)});let r=e.filter(e=>t[e.id]===e.correct_answer).length;return{subjectScores:n,totalScore:Math.round(r/e.length*100),totalCorrect:r}}function Xa(e,t){let{passScore:n,subjectMinScore:r}=ta.pilgi,i=t>=n,a=Object.values(e).every(e=>e>=r),o=Q.filter(t=>(e[t.code]??0)<r);return{isPass:i&&a,avgPass:i,allSubjectsPass:a,failedSubjects:o}}function Za(e){return e>=90?{label:`수`,color:`#10B981`}:e>=80?{label:`우`,color:`#3B82F6`}:e>=70?{label:`미`,color:`#6366F1`}:e>=60?{label:`양`,color:`#F59E0B`}:{label:`가`,color:`#EF4444`}}function Qa(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60,i=e=>String(e).padStart(2,`0`);return t>0?`${i(t)}:${i(n)}:${i(r)}`:`${i(n)}:${i(r)}`}function $a(){let{id:e}=o(),t=u(),r=n(),{user:i}=Z(),{showToast:a}=k(),[s]=(0,g.useState)(t.state?.questions||[]),[c]=(0,g.useState)(t.state?.session||null),[l,d]=(0,g.useState)(0),[f,p]=(0,g.useState)({}),[m,h]=(0,g.useState)([]),[v,y]=(0,g.useState)(!1),[b,x]=(0,g.useState)(!1),[S]=(0,g.useState)(Date.now()),[C,w]=(0,g.useState)(()=>localStorage.getItem(`jobexam-exam-layout`)||`single`),[T,E]=(0,g.useState)(()=>localStorage.getItem(`jobexam-exam-size`)||`md`);(0,g.useEffect)(()=>{s.length||r(`/pilgi/select`,{replace:!0})},[s,r]),(0,g.useEffect)(()=>{localStorage.setItem(`jobexam-exam-layout`,C)},[C]),(0,g.useEffect)(()=>{localStorage.setItem(`jobexam-exam-size`,T)},[T]);let D=(0,g.useCallback)((e,t)=>{p(n=>({...n,[e]:t}))},[]);(0,g.useEffect)(()=>{i&&Y.from(X.BOOKMARKS).select(`question_id`).eq(`user_id`,i.id).then(({data:e})=>{e&&h(e.map(e=>e.question_id))})},[i]);let O=(0,g.useCallback)(async e=>{m.includes(e)?(h(t=>t.filter(t=>t!==e)),i&&await Y.from(X.BOOKMARKS).delete().eq(`user_id`,i.id).eq(`question_id`,e),a(`북마크가 해제되었습니다.`,`info`)):(h(t=>[...t,e]),i&&await Y.from(X.BOOKMARKS).insert({user_id:i.id,question_id:e}),a(`북마크에 추가되었습니다.`,`success`))},[i,m,a]),ee=(0,g.useCallback)(()=>{a(`시간이 종료되었습니다. 자동 제출합니다.`,`info`),A()},[]),A=async()=>{x(!0);let e=Math.floor((Date.now()-S)/1e3),{subjectScores:t,totalScore:n,totalCorrect:o}=Ya(s,f),{isPass:l}=Xa(t,n),u={score_total:n,correct_count:o,score_by_subject:t,is_pass:l,time_spent_sec:e,completed_at:new Date().toISOString()};try{if(i&&c&&!String(c.id).startsWith(`local_`)){await Y.from(X.EXAM_SESSIONS).update(u).eq(`id`,c.id);let e=s.map(e=>({session_id:c.id,question_id:e.id,selected_answer:f[e.id]||null,is_correct:f[e.id]===e.correct_answer}));await Y.from(X.EXAM_ANSWERS).insert(e);let t=s.filter(e=>f[e.id]&&f[e.id]!==e.correct_answer);for(let e of t){let{data:t}=await Y.from(X.WRONG_ANSWERS).select(`id, wrong_count`).eq(`user_id`,i.id).eq(`question_id`,e.id).single();t?await Y.from(X.WRONG_ANSWERS).update({wrong_count:t.wrong_count+1,resolved:!1}).eq(`id`,t.id):await Y.from(X.WRONG_ANSWERS).insert({user_id:i.id,question_id:e.id,wrong_count:1,resolved:!1})}}r(`/pilgi/result/${c?.id||`local`}`,{state:{questions:s,answers:f,session:{...c,...u},subjectScores:t},replace:!0})}catch(e){console.error(e),a(`결과 저장에 실패했습니다.`,`error`),r(`/pilgi/result/${c?.id||`local`}`,{state:{questions:s,answers:f,session:{...c,...u},subjectScores:t},replace:!0})}x(!1)};if(!s.length)return null;let j=s[l],M=Q.find(e=>e.id===j?.subject_id),N=Object.keys(f).length,P=C===`dual`?2:1,F=C===`dual`?s.slice(l,l+2):[j],te=C===`dual`?`${l+1}–${Math.min(l+2,s.length)} / ${s.length}`:`${l+1} / ${s.length}`,I=C===`dual`?l+2>=s.length:l>=s.length-1;return(0,_.jsxs)(`div`,{className:`exam-container`,children:[(0,_.jsx)($,{title:`필기 시험`}),(0,_.jsxs)(`div`,{className:`exam-header`,children:[(0,_.jsxs)(`div`,{className:`exam-header-left`,children:[(0,_.jsxs)(`div`,{className:`exam-subject-badge`,style:{background:`${M?.color}15`,color:M?.color,borderColor:M?.color},children:[(0,_.jsx)(`i`,{className:M?.icon}),` `,M?.name]}),(0,_.jsxs)(`span`,{className:`exam-progress-text`,children:[N,` / `,s.length,` 답변`]})]}),(0,_.jsx)(Ka,{totalSeconds:ta.pilgi.timeLimit,onTimeUp:ee,running:!0})]}),(0,_.jsxs)(`div`,{className:`exam-body ${C===`dual`?`dual-mode`:``}`,children:[(0,_.jsxs)(`div`,{className:`exam-main size-${T}`,children:[(0,_.jsxs)(`div`,{className:`exam-display-toolbar`,children:[(0,_.jsxs)(`div`,{className:`display-toggle-group display-layout-toggle`,children:[(0,_.jsx)(`span`,{className:`display-toggle-label`,children:`보기`}),(0,_.jsxs)(`button`,{className:`display-toggle-btn ${C===`single`?`active`:``}`,onClick:()=>w(`single`),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-square`}),` 1열`]}),(0,_.jsxs)(`button`,{className:`display-toggle-btn ${C===`dual`?`active`:``}`,onClick:()=>w(`dual`),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-table-columns`}),` 2열`]})]}),(0,_.jsxs)(`div`,{className:`display-toggle-group`,children:[(0,_.jsx)(`span`,{className:`display-toggle-label`,children:`크기`}),(0,_.jsx)(`button`,{className:`display-toggle-btn ${T===`sm`?`active`:``}`,onClick:()=>E(`sm`),children:`작게`}),(0,_.jsx)(`button`,{className:`display-toggle-btn ${T===`md`?`active`:``}`,onClick:()=>E(`md`),children:`보통`}),(0,_.jsx)(`button`,{className:`display-toggle-btn ${T===`lg`?`active`:``}`,onClick:()=>E(`lg`),children:`크게`})]})]}),(0,_.jsx)(`div`,{className:C===`dual`?`exam-questions-dual`:``,children:F.map((e,t)=>(0,_.jsx)(Wa,{question:e,selectedAnswer:f[e.id],onSelectAnswer:t=>D(e.id,t),questionIndex:l+t,isBookmarked:m.includes(e.id),onToggleBookmark:O},e.id))}),(0,_.jsxs)(`div`,{className:`exam-nav-buttons`,children:[(0,_.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>d(e=>Math.max(0,e-P)),disabled:l===0,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-left`}),` 이전`]}),(0,_.jsx)(`span`,{className:`exam-page-info`,children:te}),I?(0,_.jsxs)(`button`,{className:`btn btn-primary btn-sm`,onClick:()=>y(!0),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-paper-plane`}),` 제출`]}):(0,_.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>d(e=>Math.min(s.length-1,e+P)),children:[`다음 `,(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-right`})]})]})]}),(0,_.jsxs)(`div`,{className:`exam-sidebar`,children:[(0,_.jsx)(qa,{questions:s,answers:f,currentIndex:l,onNavigate:d,bookmarkedIds:m}),(0,_.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>y(!0),style:{width:`100%`,marginTop:16},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-paper-plane`}),` 시험 제출`]})]})]}),(0,_.jsxs)(Ja,{isOpen:v,onClose:()=>y(!1),title:`시험 제출`,actions:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>y(!1),children:`취소`}),(0,_.jsx)(`button`,{className:`btn btn-primary btn-sm`,onClick:A,disabled:b,children:b?`제출 중...`:`제출하기`})]}),children:[(0,_.jsx)(`p`,{children:`시험을 제출하시겠습니까?`}),(0,_.jsxs)(`p`,{style:{marginTop:8},children:[(0,_.jsx)(`strong`,{children:N}),`문항 답변 완료 /`,(0,_.jsxs)(`strong`,{style:{color:`var(--color-wrong)`},children:[` `,s.length-N]}),`문항 미답변`]})]})]})}m.register(...p);function eo({scores:e}){let t=(0,g.useRef)(null),n=(0,g.useRef)(null);return(0,g.useEffect)(()=>{n.current&&n.current.destroy();let r=Q.map(e=>e.name),i=Q.map(t=>e[t.code]??0),a=Q.map(e=>e.color);return n.current=new m(t.current,{type:`radar`,data:{labels:r,datasets:[{label:`과목별 점수`,data:i,backgroundColor:`rgba(59, 130, 246, 0.15)`,borderColor:`#3B82F6`,borderWidth:2,pointBackgroundColor:a,pointBorderColor:`#FFFFFF`,pointBorderWidth:2,pointRadius:5}]},options:{responsive:!0,maintainAspectRatio:!0,scales:{r:{beginAtZero:!0,max:100,ticks:{stepSize:20,display:!1},grid:{color:`rgba(0,0,0,0.08)`},angleLines:{color:`rgba(0,0,0,0.08)`},pointLabels:{font:{size:12,weight:`600`,family:`Noto Sans KR`},color:`#4B5563`}}},plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>`${e.label}: ${e.raw}점`}}}}}),()=>{n.current&&n.current.destroy()}},[e]),(0,_.jsx)(`div`,{className:`chart-container`,children:(0,_.jsx)(`canvas`,{ref:t})})}function to({sessions:e}){let t=(0,g.useRef)(null),n=(0,g.useRef)(null);return(0,g.useEffect)(()=>{if(n.current&&n.current.destroy(),!e?.length)return;let r=e.map((e,t)=>`${t+1}회`),i=e.map(e=>e.score_total??0);return n.current=new m(t.current,{type:`bar`,data:{labels:r,datasets:[{label:`총점`,data:i,backgroundColor:i.map(e=>e>=60?`rgba(16, 185, 129, 0.7)`:`rgba(239, 68, 68, 0.7)`),borderColor:i.map(e=>e>=60?`#10B981`:`#EF4444`),borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!0,scales:{y:{beginAtZero:!0,max:100,ticks:{stepSize:20}},x:{grid:{display:!1}}},plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>`${e.raw}점`}}}}}),()=>{n.current&&n.current.destroy()}},[e]),(0,_.jsx)(`div`,{className:`chart-container`,children:(0,_.jsx)(`canvas`,{ref:t})})}function no(){let e=u();n();let{questions:t,answers:r,session:i,subjectScores:a}=e.state||{};if(!i)return(0,_.jsx)(`div`,{className:`loading-page`,style:{paddingTop:`var(--nav-height)`},children:(0,_.jsxs)(`div`,{className:`text-center`,children:[(0,_.jsx)(`p`,{children:`결과 데이터가 없습니다.`}),(0,_.jsx)(l,{to:`/pilgi`,className:`btn btn-primary mt-3`,children:`필기 홈으로`})]})});let{isPass:o,failedSubjects:s,avgPass:c,allSubjectsPass:d}=Xa(a,i.score_total),f=Za(i.score_total),p=t?.length?Math.round(i.correct_count/t.length*100):0,m=[...Q].sort((e,t)=>(a[e.code]??0)-(a[t.code]??0)),h=[...Q].sort((e,t)=>(a[t.code]??0)-(a[e.code]??0))[0];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`시험 결과`}),(0,_.jsxs)(`div`,{className:`er-hero ${o?`er-hero--pass`:`er-hero--fail`}`,children:[(0,_.jsx)(`div`,{className:`er-hero-deco er-hero-deco--1`}),(0,_.jsx)(`div`,{className:`er-hero-deco er-hero-deco--2`}),(0,_.jsx)(`div`,{className:`er-hero-deco er-hero-deco--3`}),(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsxs)(`div`,{className:`er-hero-inner`,children:[(0,_.jsx)(`div`,{className:`er-hero-icon`,children:(0,_.jsx)(`i`,{className:o?`fa-solid fa-trophy`:`fa-solid fa-rotate-left`})}),(0,_.jsxs)(`div`,{className:`er-hero-result`,children:[(0,_.jsx)(`span`,{className:`er-hero-badge`,children:o?`합격`:`불합격`}),(0,_.jsx)(`p`,{className:`er-hero-msg`,children:o?`축하합니다! 합격 기준을 충족했습니다.`:`아쉽지만 합격 기준에 미달했습니다. 다시 도전해보세요!`})]}),(0,_.jsxs)(`div`,{className:`er-hero-score-box`,children:[(0,_.jsx)(`span`,{className:`er-hero-score`,children:i.score_total}),(0,_.jsx)(`span`,{className:`er-hero-score-unit`,children:`점`}),(0,_.jsx)(`span`,{className:`er-hero-score-sub`,children:`/ 100점`})]})]})})]}),(0,_.jsxs)(`div`,{className:`container`,style:{paddingBottom:80},children:[(0,_.jsxs)(`div`,{className:`er-criteria`,children:[(0,_.jsxs)(`div`,{className:`er-criteria-item ${c?`er-criteria--ok`:`er-criteria--no`}`,children:[(0,_.jsx)(`i`,{className:c?`fa-solid fa-circle-check`:`fa-solid fa-circle-xmark`}),(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`strong`,{children:[`평균 `,ta.pilgi.passScore,`점 이상`]}),(0,_.jsxs)(`span`,{children:[i.score_total,`점 — `,c?`충족`:`미달`]})]})]}),(0,_.jsxs)(`div`,{className:`er-criteria-item ${d?`er-criteria--ok`:`er-criteria--no`}`,children:[(0,_.jsx)(`i`,{className:d?`fa-solid fa-circle-check`:`fa-solid fa-circle-xmark`}),(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`strong`,{children:[`과목별 `,ta.pilgi.subjectMinScore,`점 이상`]}),(0,_.jsx)(`span`,{children:d?`전 과목 충족`:`${s.length}과목 과락`})]})]})]}),(0,_.jsxs)(`div`,{className:`er-stats`,children:[(0,_.jsxs)(`div`,{className:`er-stat`,children:[(0,_.jsx)(`div`,{className:`er-stat-icon`,style:{background:`rgba(59, 130, 246, 0.1)`,color:`#3B82F6`},children:(0,_.jsx)(`i`,{className:`fa-solid fa-check-double`})}),(0,_.jsxs)(`div`,{className:`er-stat-body`,children:[(0,_.jsxs)(`span`,{className:`er-stat-value`,children:[i.correct_count,(0,_.jsxs)(`small`,{children:[` / `,t?.length||100]})]}),(0,_.jsx)(`span`,{className:`er-stat-label`,children:`정답 수`})]})]}),(0,_.jsxs)(`div`,{className:`er-stat`,children:[(0,_.jsx)(`div`,{className:`er-stat-icon`,style:{background:`rgba(16, 185, 129, 0.1)`,color:`#10B981`},children:(0,_.jsx)(`i`,{className:`fa-solid fa-percentage`})}),(0,_.jsxs)(`div`,{className:`er-stat-body`,children:[(0,_.jsxs)(`span`,{className:`er-stat-value`,children:[p,`%`]}),(0,_.jsx)(`span`,{className:`er-stat-label`,children:`정답률`})]})]}),(0,_.jsxs)(`div`,{className:`er-stat`,children:[(0,_.jsx)(`div`,{className:`er-stat-icon`,style:{background:`rgba(245, 158, 11, 0.1)`,color:`#F59E0B`},children:(0,_.jsx)(`i`,{className:`fa-solid fa-clock`})}),(0,_.jsxs)(`div`,{className:`er-stat-body`,children:[(0,_.jsx)(`span`,{className:`er-stat-value`,children:Qa(i.time_spent_sec)}),(0,_.jsx)(`span`,{className:`er-stat-label`,children:`소요 시간`})]})]}),(0,_.jsxs)(`div`,{className:`er-stat`,children:[(0,_.jsx)(`div`,{className:`er-stat-icon`,style:{background:`${f.color}18`,color:f.color},children:(0,_.jsx)(`i`,{className:`fa-solid fa-award`})}),(0,_.jsxs)(`div`,{className:`er-stat-body`,children:[(0,_.jsx)(`span`,{className:`er-stat-value`,style:{color:f.color},children:f.label}),(0,_.jsx)(`span`,{className:`er-stat-label`,children:`등급`})]})]})]}),s.length>0&&(0,_.jsxs)(`div`,{className:`er-fail-alert`,children:[(0,_.jsxs)(`div`,{className:`er-fail-alert-header`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`}),(0,_.jsxs)(`strong`,{children:[`과락 과목 (`,s.length,`과목)`]})]}),(0,_.jsx)(`div`,{className:`er-fail-list`,children:s.map(e=>(0,_.jsxs)(`div`,{className:`er-fail-item`,children:[(0,_.jsx)(`i`,{className:e.icon,style:{color:e.color}}),(0,_.jsx)(`span`,{className:`er-fail-name`,children:e.name}),(0,_.jsxs)(`span`,{className:`er-fail-score`,children:[a[e.code],`점`]}),(0,_.jsxs)(`span`,{className:`er-fail-gap`,children:[`(-`,ta.pilgi.subjectMinScore-a[e.code],`점 부족)`]})]},e.code))})]}),(0,_.jsxs)(`section`,{className:`er-section`,children:[(0,_.jsxs)(`h3`,{className:`er-section-title`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-bar`}),` 과목별 성적`]}),(0,_.jsx)(`div`,{className:`er-subjects`,children:Q.map(e=>{let t=a[e.code]??0,n=t>=ta.pilgi.subjectMinScore;return(0,_.jsxs)(`div`,{className:`er-subject ${n?``:`er-subject--fail`}`,children:[(0,_.jsxs)(`div`,{className:`er-subject-top`,children:[(0,_.jsxs)(`div`,{className:`er-subject-info`,children:[(0,_.jsx)(`span`,{className:`er-subject-icon`,style:{background:`${e.color}15`,color:e.color},children:(0,_.jsx)(`i`,{className:e.icon})}),(0,_.jsx)(`span`,{className:`er-subject-name`,children:e.name})]}),(0,_.jsxs)(`div`,{className:`er-subject-right`,children:[(0,_.jsx)(`span`,{className:`er-subject-badge ${n?`er-subject-badge--pass`:`er-subject-badge--fail`}`,children:n?`통과`:`과락`}),(0,_.jsxs)(`span`,{className:`er-subject-score`,style:{color:n?e.color:`var(--color-wrong)`},children:[t,`점`]})]})]}),(0,_.jsxs)(`div`,{className:`er-subject-bar`,children:[(0,_.jsx)(`div`,{className:`er-subject-bar-fill`,style:{width:`${t}%`,background:n?`linear-gradient(90deg, ${e.color}cc, ${e.color})`:`linear-gradient(90deg, #EF4444cc, #EF4444)`}}),(0,_.jsx)(`div`,{className:`er-subject-bar-mark`,style:{left:`40%`}})]})]},e.code)})})]}),(0,_.jsxs)(`section`,{className:`er-section`,children:[(0,_.jsxs)(`h3`,{className:`er-section-title`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-pie`}),` 과목별 분석`]}),(0,_.jsxs)(`div`,{className:`er-analysis`,children:[(0,_.jsx)(`div`,{className:`er-analysis-chart`,children:(0,_.jsx)(eo,{scores:a})}),(0,_.jsxs)(`div`,{className:`er-analysis-summary`,children:[(0,_.jsxs)(`div`,{className:`er-analysis-card er-analysis-card--best`,children:[(0,_.jsx)(`div`,{className:`er-analysis-card-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-star`})}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{className:`er-analysis-card-label`,children:`최고 과목`}),(0,_.jsx)(`span`,{className:`er-analysis-card-value`,style:{color:h.color},children:h.name}),(0,_.jsxs)(`span`,{className:`er-analysis-card-score`,children:[a[h.code],`점`]})]})]}),m[0]&&(0,_.jsxs)(`div`,{className:`er-analysis-card er-analysis-card--weak`,children:[(0,_.jsx)(`div`,{className:`er-analysis-card-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-bullseye`})}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{className:`er-analysis-card-label`,children:`보강 필요`}),(0,_.jsx)(`span`,{className:`er-analysis-card-value`,style:{color:m[0].color},children:m[0].name}),(0,_.jsxs)(`span`,{className:`er-analysis-card-score`,children:[a[m[0].code],`점`]})]})]}),(0,_.jsx)(`div`,{className:`er-analysis-tip`,children:o?`합격을 축하합니다! 실기 시험도 함께 준비해보세요.`:`${m[0]?.name} 과목을 집중 학습하면 합격에 한 걸음 더 가까워집니다.`})]})]})]}),(0,_.jsxs)(`div`,{className:`er-actions`,children:[(0,_.jsxs)(l,{to:`/pilgi/review/${i.id}`,className:`er-action-btn er-action-btn--primary`,state:{questions:t,answers:r},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-magnifying-glass`}),(0,_.jsx)(`span`,{children:`오답 복습`}),(0,_.jsx)(`small`,{children:`틀린 문제 확인하기`})]}),(0,_.jsxs)(l,{to:`/pilgi/select`,className:`er-action-btn er-action-btn--secondary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),(0,_.jsx)(`span`,{children:`다시 시험보기`}),(0,_.jsx)(`small`,{children:`새로운 문제 도전`})]}),(0,_.jsxs)(l,{to:`/dashboard`,className:`er-action-btn er-action-btn--secondary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-pie`}),(0,_.jsx)(`span`,{children:`대시보드`}),(0,_.jsx)(`small`,{children:`전체 학습 현황`})]})]})]})]})}function ro(){let{questions:e=[],answers:t={}}=u().state||{},[n,r]=(0,g.useState)(`wrong`),[i,a]=(0,g.useState)(0),o=e.filter(e=>n===`wrong`?t[e.id]&&t[e.id]!==e.correct_answer:n===`correct`?t[e.id]===e.correct_answer:n===`unanswered`?!t[e.id]:!0);if(!e.length)return(0,_.jsx)(`div`,{className:`loading-page`,style:{paddingTop:`var(--nav-height)`},children:(0,_.jsxs)(`div`,{className:`text-center`,children:[(0,_.jsx)(`p`,{children:`복습할 문제가 없습니다.`}),(0,_.jsx)(l,{to:`/pilgi`,className:`btn btn-primary mt-3`,children:`필기 홈으로`})]})});let s=o[i],c=s?Q.find(e=>e.id===s.subject_id):null;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`오답 복습`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-magnifying-glass`}),` 오답 복습`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`틀린 문제를 다시 확인하고 해설을 읽어보세요`})]})}),(0,_.jsxs)(`div`,{className:`container`,style:{paddingBottom:80},children:[(0,_.jsx)(`div`,{className:`review-filters`,children:[{key:`wrong`,label:`오답`,icon:`fa-solid fa-xmark`},{key:`correct`,label:`정답`,icon:`fa-solid fa-check`},{key:`unanswered`,label:`미답변`,icon:`fa-solid fa-minus`},{key:`all`,label:`전체`,icon:`fa-solid fa-list`}].map(i=>(0,_.jsxs)(`button`,{className:`study-filter-btn ${n===i.key?`active`:``}`,onClick:()=>{r(i.key),a(0)},children:[(0,_.jsx)(`i`,{className:i.icon}),` `,i.label,` (`,e.filter(e=>i.key===`wrong`?t[e.id]&&t[e.id]!==e.correct_answer:i.key===`correct`?t[e.id]===e.correct_answer:i.key===`unanswered`?!t[e.id]:!0).length,`)`]},i.key))}),o.length===0?(0,_.jsx)(`div`,{className:`text-center mt-4`,children:(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`},children:`해당 조건의 문제가 없습니다.`})}):(0,_.jsxs)(_.Fragment,{children:[c&&(0,_.jsxs)(`div`,{className:`study-subject-badge`,style:{background:`${c.color}15`,color:c.color},children:[(0,_.jsx)(`i`,{className:c.icon}),` `,c.name]}),(0,_.jsx)(Wa,{question:s,selectedAnswer:t[s.id],showResult:!0,showExplanation:!0,questionIndex:e.indexOf(s)}),(0,_.jsxs)(`div`,{className:`exam-nav-buttons mt-3`,children:[(0,_.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>a(e=>Math.max(0,e-1)),disabled:i===0,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-left`}),` 이전`]}),(0,_.jsxs)(`span`,{className:`exam-page-info`,children:[i+1,` / `,o.length]}),(0,_.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>a(e=>Math.min(o.length-1,e+1)),disabled:i>=o.length-1,children:[`다음 `,(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-right`})]})]})]})]})]})}function io({user:e}){let[t,n]=(0,g.useState)({totalPractice:0,avgMatch:0,passRate:0}),[r,i]=(0,g.useState)(!0);return(0,g.useEffect)(()=>{async function t(){try{let{data:t}=await Y.from(X.EXAM_SESSIONS).select(`score_total, is_pass`).eq(`user_id`,e.id).eq(`exam_type`,`silgi_practice`).not(`completed_at`,`is`,null).order(`completed_at`,{ascending:!1}).limit(5);if(t&&t.length>0){let e=t.filter(e=>e.is_pass).length,r=Math.round(t.reduce((e,t)=>e+(t.score_total||0),0)/t.length);n({totalPractice:t.length,avgMatch:r,passRate:Math.round(e/t.length*100)})}}catch{}finally{i(!1)}}t()},[e.id]),r?(0,_.jsxs)(`div`,{className:`my-status-card`,style:{borderLeftColor:`#10B981`},children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-line`,style:{color:`#10B981`}}),` 나의 실기 현황`]}),(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`},children:`불러오는 중...`})]}):t.totalPractice===0?(0,_.jsxs)(`div`,{className:`my-status-card`,style:{borderLeftColor:`#10B981`},children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-line`,style:{color:`#10B981`}}),` 나의 실기 현황`]}),(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`,marginBottom:16},children:`아직 실기 연습 기록이 없습니다. 첫 연습을 시작해보세요!`}),(0,_.jsx)(l,{to:`/silgi/practice`,className:`btn btn-primary btn-sm`,children:`실기 연습 시작`})]}):(0,_.jsxs)(`div`,{className:`my-status-card`,style:{borderLeftColor:`#10B981`},children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-line`,style:{color:`#10B981`}}),` 나의 실기 현황`]}),(0,_.jsxs)(`div`,{className:`my-status-stats`,children:[(0,_.jsxs)(`div`,{className:`my-status-stat`,children:[(0,_.jsx)(`span`,{className:`my-status-stat-label`,children:`연습`}),(0,_.jsxs)(`span`,{className:`my-status-stat-value`,children:[t.totalPractice,`회`]})]}),(0,_.jsxs)(`div`,{className:`my-status-stat`,children:[(0,_.jsx)(`span`,{className:`my-status-stat-label`,children:`평균 점수`}),(0,_.jsxs)(`span`,{className:`my-status-stat-value`,children:[t.avgMatch,`점`]})]}),(0,_.jsxs)(`div`,{className:`my-status-stat`,children:[(0,_.jsx)(`span`,{className:`my-status-stat-label`,children:`합격률`}),(0,_.jsxs)(`span`,{className:`my-status-stat-value`,children:[t.passRate,`%`]})]})]}),(0,_.jsxs)(`div`,{className:`my-status-actions`,children:[(0,_.jsx)(l,{to:`/dashboard`,className:`btn btn-primary btn-sm`,children:`대시보드 보기`}),(0,_.jsx)(l,{to:`/silgi/practice`,className:`btn btn-secondary btn-sm`,children:`연습 시작`})]})]})}function ao(){let{user:e}=Z();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`실기 시험`,description:`직업상담사 2급 실기 시험 준비`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-file-pen`}),` 실기 시험`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`직업상담 실무 - 주관식/서술형, 150분, 60점 이상 합격`})]})}),(0,_.jsxs)(`div`,{className:`container`,style:{paddingBottom:80},children:[e?(0,_.jsx)(io,{user:e}):(0,_.jsxs)(`div`,{className:`my-status-login-banner`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(l,{to:`/login`,children:`로그인`}),`하면 학습 현황을 확인할 수 있습니다`]})]}),(0,_.jsxs)(`div`,{className:`pilgi-modes`,children:[(0,_.jsxs)(l,{to:`/silgi/practice`,className:`pilgi-mode-card`,children:[(0,_.jsx)(`div`,{className:`pilgi-mode-icon study`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-pen`})}),(0,_.jsx)(`h3`,{children:`서술형 연습`}),(0,_.jsx)(`p`,{children:`주관식/서술형 문제를 풀고 모범답안과 비교하세요`}),(0,_.jsx)(`span`,{className:`pilgi-mode-badge`,children:`모범답안 비교`})]}),(0,_.jsxs)(l,{to:`/silgi/past`,className:`pilgi-mode-card`,children:[(0,_.jsx)(`div`,{className:`pilgi-mode-icon exam`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-scroll`})}),(0,_.jsx)(`h3`,{children:`기출문제 해설`}),(0,_.jsx)(`p`,{children:`회차별 기출문제와 상세 해설을 확인하세요`}),(0,_.jsx)(`span`,{className:`pilgi-mode-badge`,children:`해설 포함`})]}),(0,_.jsxs)(l,{to:`/silgi/frequent`,className:`pilgi-mode-card`,children:[(0,_.jsx)(`div`,{className:`pilgi-mode-icon study`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-fire`})}),(0,_.jsx)(`h3`,{children:`5개년 빈출 정리`}),(0,_.jsx)(`p`,{children:`2019~2023 5개년 빈출 기출문제 177문항 상세 해설`}),(0,_.jsx)(`span`,{className:`pilgi-mode-badge`,children:`177문항`})]}),(0,_.jsxs)(l,{to:`/silgi/terms`,className:`pilgi-mode-card`,children:[(0,_.jsx)(`div`,{className:`pilgi-mode-icon exam`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-book`})}),(0,_.jsx)(`h3`,{children:`핵심 용어`}),(0,_.jsx)(`p`,{children:`실기 시험에 자주 출제되는 핵심 용어를 학습하세요`}),(0,_.jsx)(`span`,{className:`pilgi-mode-badge`,children:`핵심 정리`})]})]}),(0,_.jsxs)(`div`,{className:`silgi-info mt-4`,children:[(0,_.jsx)(`h3`,{children:`실기 시험 안내`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`과목: 직업상담 실무`}),(0,_.jsx)(`li`,{children:`문제 유형: 주관식 (단답형, 서술형, 계산형)`}),(0,_.jsx)(`li`,{children:`시험 시간: 150분`}),(0,_.jsx)(`li`,{children:`합격 기준: 100점 만점 중 60점 이상`})]})]})]})]})}var oo=[{id:`all`,label:`전체`,color:`#6366F1`,icon:`fa-solid fa-list`},{id:`counseling`,label:`직업상담학`,color:`#3B82F6`,icon:`fa-solid fa-comments`},{id:`psychology`,label:`직업심리학`,color:`#8B5CF6`,icon:`fa-solid fa-brain`},{id:`jobinfo`,label:`직업정보론`,color:`#10B981`,icon:`fa-solid fa-circle-info`},{id:`labor_market`,label:`노동시장론`,color:`#F59E0B`,icon:`fa-solid fa-chart-line`}],so=[{num:1,category:`counseling`,title:`부처(Butcher)의 집단 직업상담의 과정 3단계 모델에 대해 쓰고 설명하시오.`,frequency:`24-3, 22-3, 21-3, 21-1, 20-2`,keyword:`부처(Butcher) 집단직업상담 3단계`,answer:`<ol>
<li><strong>탐색단계</strong><br/>자기개방, 흥미와 적성에 대한 탐색, 측정결과에 대한 피드백, 자아상과 피드백 내용 간 불일치의 해결</li>
<li><strong>전환단계</strong><br/>자신의 지식과 직업세계의 연결이 이루어지는 단계, 가치와 피드백 간 불일치 해결</li>
<li><strong>행동단계</strong><br/>목표를 설정하고 정보의 수집과 공유가 이루어지며, 목표를 달성하기 위한 구체적인 행동을 하는 단계</li>
</ol>`},{num:2,category:`counseling`,title:`아들러(Adler)의 개인주의 상담과정의 목표 5가지를 쓰시오.`,frequency:`25-1, 22-3, 20-1, 18-2`,keyword:`아들러(Adler) 개인주의 상담 목표`,answer:`<ol>
<li>사회적 관심을 갖도록 돕는다.</li>
<li>패배감을 극복하고 열등감을 감소시킬 수 있도록 돕는다.</li>
<li>내담자의 잘못된 가치와 목표를 수정하도록 돕는다.</li>
<li>잘못된 동기를 바꾸도록 돕는다.</li>
<li>내담자가 타인과의 동질감을 갖도록 돕는다.</li>
<li>사회의 구성원으로 기여하도록 돕는다.</li>
</ol>`},{num:3,category:`counseling`,title:`크라이티스(Crites)의 포괄적 직업상담의 상담과정을 단계별로 설명하시오.`,frequency:`22-3, 19-1`,keyword:`크라이티스(Crites) 포괄적 직업상담`,answer:`<ol>
<li><strong>제1단계 : 진단</strong><br/>내담자의 진로문제 진단 및 문제파악을 위해 심리검사 자료와 상담을 통한 자료가 수집된다.</li>
<li><strong>제2단계 : 명료화 및 해석</strong><br/>의사결정 과정을 방해하는 태도와 행동을 확인해 대안을 탐색한다. 상담자와 내담자가 함께 문제의 원인을 명료화하고 해결방안을 모색하는 단계이다.</li>
<li><strong>제3단계 : 문제해결</strong><br/>문제해결을 위해 어떤 행동을 실제로 취해야 하는지 결정한다.</li>
</ol>`},{num:4,category:`counseling`,title:`직업적응 이론에서 개인과 환경이 상호작용하는 특성을 나타내는 4가지 성격유형 요소를 설명하시오.`,frequency:`22-3, 20-2`,keyword:`직업적응이론(TWA) 성격유형 요소`,answer:`<ol>
<li><strong>민첩성</strong><br/>개인이 얼마나 빠르게 환경에 적응할 수 있는가를 의미하는 것으로 속도를 중시한다.</li>
<li><strong>역량</strong><br/>개인이 환경과 상호작용을 하는 활동수준, 또는 강도를 의미. 높은 에너지를 가진 사람이 더 많은 역량이 있다고 볼 수 있다.</li>
<li><strong>리듬</strong><br/>과제를 수행하는 과정의 패턴이 얼마나 꾸준하고 주기적인가 또는 불규칙한가를 의미한다.</li>
<li><strong>지구력(지속성)</strong><br/>개인이 불만족스러운 환경을 참고 얼마나 오래 상호작용을 유지할 수 있는가를 나타낸다.</li>
</ol>`},{num:5,category:`counseling`,title:`롭퀴스트와 데이비스의 직업적응 이론에서 직업적응방식의 유형을 쓰고 설명하시오.`,frequency:`23-2, 19-1`,keyword:`직업적응이론(TWA) 적응방식 유형`,answer:`<ol>
<li><strong>융통성</strong> : 개인이 작업환경과 개인의 환경 사이 부조화를 참아낼 수 있는 정도</li>
<li><strong>끈기</strong> : 환경이 자신에게 맞지 않아도 얼마나 오래 견딜 수 있는지</li>
<li><strong>반응성</strong> : 개인이 작업환경에 반응하는 정도</li>
<li><strong>적극성</strong> : 개인이 작업환경을 자신과 더 조화롭게 만들기 위해 노력하는 정도</li>
</ol>`},{num:6,category:`counseling`,title:`직업적응 이론(TWA)에서 중요하게 다루는 직업가치 6가지를 쓰시오.`,frequency:`25-3, 24-1, 22-3`,keyword:`직업적응이론(TWA) 직업가치`,answer:`<ol><li>지위</li><li>성취</li><li>이타심</li><li>안정성</li><li>보호(안락함, 편안함)</li><li>자율성</li></ol>`},{num:7,category:`counseling`,title:`크롬볼츠(Krumboltz)가 제시한 진로선택에 영향을 주는 요인 4가지를 쓰시오.`,frequency:`22-3, 18-2`,keyword:`크롬볼츠(Krumboltz) 진로선택 영향요인`,answer:`<ol><li>유전적 요인과 특별한 능력</li><li>환경적 조건과 사건</li><li>학습경험</li><li>과제 접근 기술</li></ol>`},{num:42,category:`counseling`,title:`인터넷을 이용한 사이버상담의 필요성을 6가지 쓰시오.`,frequency:`22-3`,keyword:`사이버상담 필요성`,answer:`<ol>
<li>접근이 용이하다.</li>
<li>익명성이 보장되어 솔직한 표현이 가능하다.</li>
<li>직접 대면하는 것이 아니므로 심리적인 부담이 덜하다.</li>
<li>상담 중 자료의 탐색이 용이하다.</li>
<li>가명을 이용하여 상담 사례를 소개하는 것이 가능하다.</li>
<li>내담자 주도로 자기 성찰 능력을 기를 수 있다.</li>
</ol>`},{num:49,category:`counseling`,title:`발달적 직업상담에서 진로 자서전과 의사결정 일기를 각각 설명하시오.`,frequency:`24-3, 19-3`,keyword:`진로 자서전 / 의사결정 일기`,answer:`<ol>
<li><strong>진로 자서전</strong><br/>내담자가 과거에 어떤 의사결정을 했는지 자유롭게 기술하는 자료이다.</li>
<li><strong>의사결정 일기</strong><br/>진로 자서전의 보충 역할을 하는 것으로, 내담자의 일상적인 의사결정 방식을 작성하도록 하는 것이다.</li>
</ol>`},{num:61,category:`counseling`,title:`보딘이 제시한 직업문제의 심리적 원인 5가지를 쓰고 설명하시오.`,frequency:`23-2, 21-1, 19-2, 18-3`,keyword:`보딘(Bordin) 심리적 원인`,answer:`<ol>
<li><strong>의존성</strong> : 직업을 스스로 결정하지 못하고 타인에게 의존하는 경우</li>
<li><strong>자아갈등(내적갈등)</strong> : 자아의 내적 갈등으로 인해 직업을 선택하지 못하는 경우</li>
<li><strong>정보의 부족</strong> : 정보가 부족하여 직업을 결정하지 못하는 경우</li>
<li><strong>선택에 대한 불안</strong> : 자신이 하려는 일에 대한 타인의 반응 때문에 불안하여 직업 선택에 어려움을 겪는 경우</li>
<li><strong>확신의 부족(문제 없음)</strong> : 문제 없는 직업 선택을 하였으나 이에 대한 확신이 부족한 경우</li>
</ol>`},{num:62,category:`counseling`,title:`보딘의 3단계 직업상담과정을 쓰고 각각에 대해 설명하시오.`,frequency:`20-3, 18-2`,keyword:`보딘(Bordin) 3단계 직업상담과정`,answer:`<ol>
<li><strong>탐색과 계약설정 단계</strong><br/>내담자의 욕구와 정신 역동성을 탐색하고 상담을 구조화한다.</li>
<li><strong>중대한 결정 단계</strong><br/>내담자의 성격에 맞는 직업을 선택할 것인지, 직업에 맞게 성격을 변화시킬 것인지 중대한 결정을 한다.</li>
<li><strong>변화를 위한 노력 단계</strong><br/>내담자가 결정한 방향으로 변화할 수 있도록 노력한다.</li>
</ol>`},{num:63,category:`counseling`,title:`형태주의(게슈탈트) 상담의 상담기법을 4가지 쓰시오.`,frequency:`24-2, 23-2, 19-3, 18-2`,keyword:`게슈탈트 상담기법`,answer:`<ol>
<li><strong>꿈작업</strong> : 꿈이 현재 일어난 일인 것처럼 연기하도록 하는 기법</li>
<li><strong>빈의자 기법</strong> : 빈의자에 상대가 있다고 생각하고 감정을 표현하도록 하는 기법</li>
<li><strong>과장하기</strong> : 내담자가 자신의 말과 행동을 과장하여 욕구와 감정을 명확하게 이해시키는 기법</li>
<li><strong>신체자각</strong> : 신체 감각을 통해 감정을 자각하도록 하는 기법</li>
<li><strong>언어자각</strong> : 언어를 통해 자신의 욕구를 알 수 있도록 하는 기법</li>
<li><strong>욕구와 감정의 자각</strong> : 현재 상황에서 느끼는 욕구와 감정을 자각하도록 하는 기법</li>
<li><strong>자기 부분들 간의 대화</strong> : 내담자 안에 내재된 자아들 간의 대화를 유도하는 기법</li>
</ol>`},{num:64,category:`counseling`,title:`게슈탈트 상담의 상담기법 3가지만 쓰고 설명하시오.`,frequency:`19-3`,keyword:`게슈탈트 상담기법 상세`,answer:`<ol>
<li><strong>빈의자 기법</strong> : 빈의자에 상대가 있다고 생각하고 내담자가 감정을 표현하도록 하는 기법</li>
<li><strong>꿈작업</strong> : 꿈이 현재 일어난 일인 것처럼 연기하도록 하는 기법</li>
<li><strong>과장하기</strong> : 내담자가 자신의 말과 행동을 과장하여 표현하도록 하여, 스스로의 욕구와 감정을 명확하게 이해시키는 기법</li>
<li><strong>신체자각</strong> : 내담자가 느끼고 있는 욕구와 감정을 신체 감각을 통해 자각하도록 하는 기법</li>
<li><strong>언어자각</strong> : 내담자가 언어를 통해 자신의 욕구를 알 수 있도록 하는 기법</li>
<li><strong>욕구와 감정의 자각</strong> : 현재 상황에서 내담자가 느끼는 욕구와 감정을 자각하도록 하는 기법</li>
<li><strong>자기 부분들 간의 대화</strong> : 내담자 안에 내재된 자아들 간의 대화를 유도하는 기법</li>
</ol>`},{num:65,category:`counseling`,title:`내담자중심 상담기법에서 상담자의 태도 3가지를 쓰시오.`,frequency:`25-3, 24-1, 20-1`,keyword:`내담자중심 상담 상담자 태도`,answer:`<ol>
<li><strong>일치성 또는 진실성</strong> : 상담자가 자신의 감정이나 생각을 있는 그대로 솔직하게 표현하는 것</li>
<li><strong>무조건적인 수용</strong> : 내담자의 말을 비판하거나 평가하지 않고 존중하는 태도</li>
<li><strong>공감적 이해</strong> : 내담자의 감정과 경험을 마치 자신의 것처럼 이해하고자 하는 태도</li>
</ol>`},{num:66,category:`counseling`,title:`형태주의 상담의 목표 6가지를 쓰시오.`,frequency:`22-2`,keyword:`게슈탈트 상담 목표`,answer:`<ol>
<li>자기 인식을 증가시키도록 한다.</li>
<li>자신의 경험에 대한 주체가 자신이라는 태도가 형성되도록 한다.</li>
<li>타인의 권리를 침해하지 않으면서 자신의 욕구를 충족시킬 수 있는 기술을 개발하고 가치관을 형성시킨다.</li>
<li>모든 감각이 더 잘 인식되도록 한다.</li>
<li>행동의 결과가 수용되며, 행동을 결정할 책임이 자신에게 있음을 인정하게 된다.</li>
<li>외적 지지에서 내적 지지로 바꾸도록 돕는다.</li>
<li>타인에게 요구하거나 도움을 청할 수 있게 되며, 동시에 타인에게 도움을 줄 수 있도록 한다.</li>
</ol>`},{num:68,category:`counseling`,title:`실존주의 상담자들이 중요하게 생각하는 주제 4가지를 쓰고 설명하시오.`,frequency:`23-2, 23-1, 20-2`,keyword:`실존주의 궁극적 관심사`,answer:`<ol>
<li><strong>삶의 의미성</strong> : 인간은 삶을 통해 존재 의미를 발견해야 한다.</li>
<li><strong>죽음과 비존재</strong> : 삶과 죽음은 분리될 수 없으며, 인간은 비존재에 대한 불안감을 가진다.</li>
<li><strong>진실성</strong> : 개인의 실존 회복을 위해 진실성 있는 노력이 필요하다.</li>
<li><strong>자유와 책임</strong> : 인간은 자유로운 존재이며, 스스로 선택할 능력과 책임이 있다.</li>
</ol>`},{num:69,category:`counseling`,title:`홀랜드의 육각형 모델에서 일관성, 변별성, 정체성에 대해 설명하시오.`,frequency:`25-1, 23-2`,keyword:`홀랜드 육각형 모델 해석차원`,answer:`<ol>
<li><strong>일관성</strong> : 육각형 모델에서 어떤 쌍들은 다른 쌍에 비해 더 많은 공통점을 갖고 있다.</li>
<li><strong>변별성</strong> : 특정 성격 유형은 다른 어떤 유형과는 유사하고 어떤 유형과는 차별화 된다.</li>
<li><strong>정체성</strong> : 개인에게 정체성은 목표, 흥미, 재능 등이고, 환경에서 정체성은 투명성, 안정성, 일, 목표 등이다.</li>
</ol>`},{num:70,category:`counseling`,title:`고트프레드슨의 직업과 관련된 개인발달의 4단계를 쓰시오.`,frequency:`25-1, 23-2`,keyword:`고트프레드슨(Gottfredson) 직업포부 발달단계`,answer:`<ol>
<li><strong>힘과 크기 지향성</strong> : 사고과정이 구체화되며 어른이 된다는 것의 의미를 알게 된다.</li>
<li><strong>성역할 지향성</strong> : 자아개념이 성의 발달에 의해 영향을 받는다.</li>
<li><strong>사회적 가치 지향성</strong> : 사회계층에 대한 개념이 생기면서 '상황 속 자아'를 인식한다.</li>
<li><strong>내적, 고유한 자아 지향성</strong> : 자아성찰과 사회계층의 맥락에서 직업적 포부가 발달한다.</li>
</ol>`},{num:73,category:`counseling`,title:`진로상담 과정에서 관계수립을 위한 기본 상담기술 6가지를 쓰시오.`,frequency:`25-3, 23-1, 20-1`,keyword:`기본 상담기술`,answer:`<ol><li>공감</li><li>적극적 경청</li><li>명료화</li><li>반영</li><li>수용</li><li>요약과 재진술</li><li>감정이입</li><li>환언</li><li>직면</li></ol>`},{num:74,category:`counseling`,title:`행동주의 직업상담의 불안감소기법과 학습촉진기법을 각각 쓰고 설명하시오.`,frequency:`23-1, 22-1`,keyword:`불안감소기법 / 학습촉진기법`,answer:`<h4>불안감소기법</h4>
<ol>
<li><strong>체계적 둔감법</strong> : 불안 위계 목록에 따라 점진적으로 불안을 경험하게 하여 둔감화시키는 방법</li>
<li><strong>홍수법</strong> : 두려워하는 자극에 장시간 지속적으로 노출시켜 두려움을 제거하는 방법</li>
<li><strong>역조건 형성</strong> : 공포를 느꼈던 장면에 바람직한 반응을 연합시켜 부적절한 반응을 소거하는 방법</li>
<li><strong>혐오치료</strong> : 문제행동에 혐오자극을 제시하여 부적절한 행동을 감소시키는 방법</li>
</ol>
<h4>학습촉진기법</h4>
<ol>
<li><strong>강화</strong> : 내담자의 바람직한 직업결정에 긍정적·부정적 반응을 보여 촉진하는 방법</li>
<li><strong>대리학습(모델링)</strong> : 다른 사람의 진로결정 행동 및 결과를 관찰하여 학습을 촉진하는 방법</li>
<li><strong>변별학습</strong> : 상이한 자극을 구별하게 하여 직업결정 능력을 비교해 보도록 하는 방법</li>
</ol>`},{num:75,category:`counseling`,title:`행동주의 상담의 적응 행동 증진기법 3가지를 설명하시오.`,frequency:`24-1, 21-2, 18-1`,keyword:`적응 행동 증진기법`,answer:`<ol>
<li><strong>강화</strong> : 내담자의 행동에 적절하게 긍정·부정적 반응을 보여 바람직한 행동을 강화</li>
<li><strong>변별학습</strong> : 검사도구를 사용해 직업결정 능력 등을 변별하고 비교해보도록 하는 것</li>
<li><strong>사회적 모델링과 대리학습</strong> : 타인의 행동 관찰과 모방을 통해 학습을 촉진</li>
<li><strong>행동조성</strong> : 행동을 단계별로 세분화해 단계마다 강화를 제공하여 학습 촉진</li>
<li><strong>상표제도(토큰경제)</strong> : 바람직한 행동이 이뤄질 때마다 그에 상응하는 보상을 하는 것</li>
</ol>`},{num:76,category:`counseling`,title:`윌리엄슨의 직업상담 문제유형 4가지를 쓰고 설명하시오.`,frequency:`25-2, 22-2, 21-3, 20-4, 18-1`,keyword:`윌리엄슨 직업상담 문제유형`,answer:`<ol>
<li><strong>진로 무선택</strong> : 직업을 선택해 본 적이 없거나, 어떤 것을 선택할지 모르는 유형</li>
<li><strong>불확실한 선택</strong> : 진로를 선택하였으나 이에 대한 확신이 없는 유형</li>
<li><strong>어리석은 선택</strong> : 자신의 특성을 고려하지 않고 특정 직업의 특권이나 갈망으로 직업을 선택한 유형</li>
<li><strong>흥미와 적성의 불일치</strong> : 자신의 흥미나 적성에 모순되는 직업을 선택한 유형</li>
</ol>`},{num:77,category:`counseling`,title:`집단상담의 형태를 3가지 쓰고 각각 설명하시오.`,frequency:`19-2`,keyword:`집단상담 형태`,answer:`<ol>
<li><strong>성장 집단</strong> : 내담자의 내적, 외적 성장을 위한 집단</li>
<li><strong>교육 집단</strong> : 내담자의 교육을 목표로 하는 집단</li>
<li><strong>상담 집단</strong> : 구성원의 문제 해결, 자아 발견 등을 목표로 하는 집단</li>
</ol>`},{num:78,category:`counseling`,title:`톨버트가 제시한 집단상담 과정에서 나타나는 활동 유형을 제시하시오.`,frequency:`19-1`,keyword:`톨버트 집단상담 활동유형`,answer:`<ol><li>자기탐색</li><li>상호작용</li><li>개인적 정보의 검토 및 목표와의 연결</li><li>직업적·교육적 정보의 획득과 검토</li><li>의사결정</li></ol>`},{num:79,category:`counseling`,title:`집단상담의 장점 6가지를 쓰시오.`,frequency:`24-2, 23-1, 20-4, 19-1`,keyword:`집단상담 장점`,answer:`<ol>
<li>시간과 비용이 경제적이다.</li>
<li>내담자가 사회성을 기를 수 있다.</li>
<li>직업 성숙도가 낮은 내담자에게 적합하다.</li>
<li>타인을 보고 관찰하여 학습하는 효과가 있다.</li>
<li>개인에 대한 집중도가 낮아 내담자의 부담감을 감소시킬 수 있다.</li>
<li>구체적인 경험 및 현실 검증의 기회가 제공된다.</li>
</ol>`},{num:80,category:`counseling`,title:`집단상담의 단점 3가지를 쓰시오.`,frequency:`20-4`,keyword:`집단상담 단점`,answer:`<ol>
<li>다수 내담자로 인해 비밀 보장이 어렵다.</li>
<li>상담을 위한 집단을 구성하기 어렵다.</li>
<li>모든 구성원이 만족하는 상담을 하기 어렵다.</li>
</ol>`},{num:81,category:`counseling`,title:`로저스의 인간중심 상담의 철학적 가정 4가지를 쓰시오.`,frequency:`23-1, 18-3`,keyword:`로저스 인간중심 상담 철학적 가정`,answer:`<ol>
<li>인간은 가치를 지닌 유일한 존재이다.</li>
<li>인간은 성장력을 가지고 있다.</li>
<li>인간은 선한 존재이다.</li>
<li>인간은 자유로운 존재이다.</li>
<li>인간은 자신의 진로를 선택할 권리가 있다.</li>
</ol>`},{num:87,category:`counseling`,title:`홀랜드 직업흥미검사의 6가지 유형을 쓰시오.`,frequency:`25-2, 23-1, 22-1, 20-3, 20-1, 19-2, 18-2`,keyword:`홀랜드(Holland) 흥미유형 RIASEC`,answer:`<ol><li>현실형</li><li>탐구형</li><li>예술형</li><li>사회형</li><li>진취형(기업형)</li><li>관습형</li></ol>`},{num:88,category:`counseling`,title:`인지적 명확성이 부족한 내담자의 유형 5가지를 쓰시오.`,frequency:`21-1`,keyword:`인지적 명확성 부족 유형`,answer:`<ol><li>단순 오정보</li><li>복잡한 오정보</li><li>구체성의 결여</li><li>강박적 사고</li><li>양면적 사고</li></ol>`},{num:89,category:`counseling`,title:`내담자와의 상담목표 설정 시 유의사항 5가지를 쓰시오.`,frequency:`25-2, 22-2, 20-3`,keyword:`상담목표 설정 유의사항`,answer:`<ol>
<li>내담자가 바라고 원하는 것을 목표로 하여야 한다.</li>
<li>상담 목표는 상담자의 기술과 양립 가능한 것이어야 한다.</li>
<li>상담 목표는 구체적인 것이어야 한다.</li>
<li>상담 목표는 실현 가능한 것이어야 한다.</li>
<li>상담 목표는 기한이 있어야 한다.</li>
</ol>`},{num:90,category:`counseling`,title:`내담자와의 초기면담 수행 시 상담자가 유의해야 할 사항 4가지를 쓰시오.`,frequency:`20-3`,keyword:`초기면담 유의사항`,answer:`<ol><li>내담자와 만나기</li><li>상담 전 사례자료 검토하기</li><li>상담의 초기 목표 명확히 제시하기</li><li>비밀 유지에 대해 설명하기</li></ol>`},{num:91,category:`counseling`,title:`내담자의 행동을 이해하고 해석하는 데 기본이 되는 상담 기법을 6가지 쓰시오.`,frequency:`25-3, 21-2`,keyword:`상담 기법 (행동이해/해석)`,answer:`<ol>
<li>가정 사용하기</li><li>의미있는 질문하기</li><li>전이된 오류 정정하기</li><li>분류 및 재구성하기</li>
<li>저항감 재인식하기</li><li>근거없는 믿음 확인하기</li><li>왜곡된 사고 확인하기</li><li>반성의 장 마련하기</li><li>변명에 초점 맞추기</li>
</ol>`},{num:95,category:`counseling`,title:`벡의 인지치료에서 인지적 오류의 유형을 쓰시오.`,frequency:`25-3, 22-2, 19-3, 18-3`,keyword:`벡(Beck) 인지적 오류`,answer:`<ol>
<li><strong>흑백논리</strong> : 중간이 없이 이분법적으로 사고할 때 생기는 오류</li>
<li><strong>선택적 추상화</strong> : 부정적인 일부를 근거로 결론을 내려 전체에 적용하는 오류</li>
<li><strong>과잉 일반화</strong> : 특정 사건의 결과를 관계 없는 상황에 적용할 때 생기는 오류</li>
<li><strong>개인화</strong> : 외부 사건을 자신과 관련짓는 오류</li>
<li><strong>의미의 확대 및 축소</strong> : 사건의 의미를 지나치게 크게 혹은 작게 왜곡하는 오류</li>
<li><strong>임의적 추론</strong> : 근거 없이 자의적으로 결론을 내리는 오류</li>
</ol>`},{num:96,category:`counseling`,title:`벡의 인지적 상담에서 인지적 오류 3가지를 제시하고 간략히 설명하시오.`,frequency:`22-2`,keyword:`벡(Beck) 인지적 오류 간략`,answer:`<ol>
<li><strong>흑백논리</strong> : 중간이 없이 이분법적으로 사고할 때 생기는 오류이다.</li>
<li><strong>선택적 추상화</strong> : 부정적인 일부를 근거로 결론을 내린 후, 이를 전체에 적용하여 파악하려 할 때 생기는 오류이다.</li>
<li><strong>과잉 일반화</strong> : 특정 사건의 결과를 관계 없는 상황에 적용할 때 생기는 오류이다.</li>
</ol>`},{num:97,category:`counseling`,title:`벡의 인지행동적 상담에서 부정적 사고를 반박하는 방법 3가지를 설명하시오.`,frequency:`25-1, 19-3`,keyword:`벡(Beck) 인지행동 상담기법`,answer:`<ol>
<li><strong>언어적 기법</strong> : 비합리적 신념을 논박하여 내담자의 언어를 변화시키는 방법</li>
<li><strong>정서적 기법</strong> : 내담자가 합리적 정서를 상상하도록 하는 방법</li>
<li><strong>행동적 기법</strong> : 내담자에게 목표 행동을 부여하고 실행하도록 하여 신념체계를 변화시키는 방법</li>
</ol>`},{num:102,category:`counseling`,title:`인지 정서 상담기법의 기본 가정, 기본개념, 상담의 목표를 쓰시오.`,frequency:`20-4`,keyword:`인지정서 상담(REBT) 기본가정/개념/목표`,answer:`<ol>
<li><strong>기본가정</strong> : 인간은 합리적일 수도, 비합리적일 수도 있는 존재이며, 내담자의 문제는 비합리적 사고로 인해 생긴다.</li>
<li><strong>기본개념</strong> : 내담자의 문제를 해결하기 위해 상담자의 논박이 필요하며, ABCDEF 모델을 제시한다.</li>
<li><strong>상담의 목표</strong> : 내담자의 비합리적 신념을 합리적 신념으로 변화시켜 문제를 해결한다.</li>
</ol>`},{num:103,category:`counseling`,title:`ABCDEF 모형의 의미를 쓰시오.`,frequency:`24-3, 22-2, 21-3, 21-2, 20-3, 20-2, 18-1, 18-3`,keyword:`REBT ABCDEF 모형`,answer:`<ol>
<li><strong>A (선행사건)</strong> : 내담자의 감정이나 행동에 영향을 미치는 사건</li>
<li><strong>B (비합리적 신념)</strong> : 선행사건에 대한 비합리적 신념체계</li>
<li><strong>C (결과)</strong> : 비합리적 신념으로 인한 부적응적인 정서·행동적 결과</li>
<li><strong>D (논박)</strong> : 비합리적 신념을 논리적으로 반박하는 것</li>
<li><strong>E (효과)</strong> : 논박으로 인해 비합리적 신념이 합리적 신념으로 전환</li>
<li><strong>F (새로운 감정)</strong> : 합리적 신념에서 비롯된 긍정적이고 수용적인 감정</li>
</ol>`},{num:104,category:`counseling`,title:`ABCDEF 기법을 사례에 적용하여 설명하시오. (정리해고 사례)`,frequency:`21-1`,keyword:`REBT ABCDEF 사례 적용`,answer:`<ol>
<li><strong>A (선행사건)</strong> : 회사에서 정리해고를 당하는 사건이 발생하였다.</li>
<li><strong>B (비합리적 신념)</strong> : 해고가 자신이 무가치한 존재인 것을 의미한다는 비합리적 신념을 갖게 되었다.</li>
<li><strong>C (결과)</strong> : 비합리적 신념의 결과로 우울증과 자살 시도 등의 행동이 발생하였다.</li>
<li><strong>D (논박)</strong> : 상담을 통해 정리해고가 무가치함을 의미하는 것이 아님을 논박한다.</li>
<li><strong>E (효과)</strong> : 논박의 효과로 우울감을 극복하고 자신을 재평가한다.</li>
<li><strong>F (새로운 감정)</strong> : 자신에 대해 긍정적으로 평가하기 시작하고 다시 구직활동을 한다.</li>
</ol>`},{num:8,category:`psychology`,title:`규준 제작 시 사용되는 확률표집방법 3가지를 쓰고 설명하시오.`,frequency:`25-3, 24-1, 22-3, 20-2, 18-3`,keyword:`확률표집방법`,answer:`<ol>
<li><strong>단순 무선 표집</strong> : 구성원들에게 번호를 부여하고 무작위로 번호를 뽑아 표집. 모집단의 구성원이 표본에 속할 확률이 동일</li>
<li><strong>층화표집</strong> : 모집단이 서로 이질적인 하위 집단으로 구성된 경우 각 하위 집단에서 표집하여 추출</li>
<li><strong>군집표집</strong> : 모집단이 서로 동질적인 하위 집단으로 구성된 경우에 한 집단 자체를 표본으로 추출</li>
</ol>`},{num:9,category:`psychology`,title:`측정오차를 줄이기 위한 구체적인 방법 6가지를 쓰시오.`,frequency:`25-2, 22-3, 19-2`,keyword:`측정오차 감소 방법`,answer:`<ol><li>검사 문항의 수를 늘린다.</li><li>신뢰도에 나쁜 영향을 주는 문항을 제거한다.</li><li>표준화된 검사를 사용한다.</li><li>균일한 검사 조건을 유지한다.</li><li>검사 실시와 채점 방식을 표준화한다.</li><li>적절한 표본을 추출하여 측정한다.</li></ol>`},{num:10,category:`psychology`,title:`준거 타당도 계수의 크기에 영향을 미치는 요인을 쓰고 설명하시오.`,frequency:`24-3, 22-3, 22-2, 18-1, 18-3`,keyword:`준거타당도 계수 영향요인`,answer:`<ol>
<li><strong>표집오차</strong> : 표집집단이 전체 모집단을 대표하지 못하게 되어 발생하는 오차</li>
<li><strong>준거측정치의 신뢰도</strong> : 준거측정치의 신뢰도가 낮으면 검사의 타당도도 낮아짐</li>
<li><strong>준거측정치의 타당도</strong> : 준거를 측정하는 도구가 해당 준거를 잘 반영하는지</li>
<li><strong>범위 제한</strong> : 자료가 전체 범위를 포괄하지 않고 일부만 포괄하는 경우 상관계수가 실제보다 작아짐</li>
</ol>`},{num:11,category:`psychology`,title:`자기 보고형 검사(설문지 형태 검사)의 장점 5가지를 쓰시오.`,frequency:`22-3, 19-2`,keyword:`자기보고형 검사 장점`,answer:`<ol><li>검사 실시 시간이 짧다.</li><li>검사 비용이 경제적이다.</li><li>검사 결과에 대한 해석이 용이하다.</li><li>신뢰도와 타당도가 높은 편이다.</li><li>검사 환경의 영향을 적게 받는다.</li></ol>`},{num:12,category:`psychology`,title:`자기 보고형 검사(설문지 형태의 검사)가 가지는 단점 3가지를 쓰시오.`,frequency:`19-3`,keyword:`자기보고형 검사 단점`,answer:`<ol>
<li>내담자가 문항의 의도를 파악하여 방어를 할 수 있다.</li>
<li>내담자의 반응이 제한적이어서 다양한 반응 관찰이 어렵고 무의식까지 관찰할 수 없다.</li>
<li>내담자의 반응 경향성에 따라 답변이 오염될 수 있다.</li>
</ol>`},{num:13,category:`psychology`,title:`투사적 검사와 비교하여 객관적 검사의 장점 3가지를 쓰시오.`,frequency:`24-1, 21-2`,keyword:`객관적 검사 장점`,answer:`<ol><li>검사의 실시가 간편하다.</li><li>시간과 노력이 절감된다.</li><li>검사의 신뢰도와 타당도가 검증되어 있다.</li><li>검사의 객관성이 보장된다.</li><li>부적합한 응답을 최소화할 수 있다.</li><li>비용적 측면에서 경제적이다.</li></ol>`},{num:14,category:`psychology`,title:`투사적 검사의 장점과 단점을 각 3가지씩 쓰시오.`,frequency:`24-3, 20-3, 18-1`,keyword:`투사적 검사 장단점`,answer:`<h4>장점</h4><ol><li>수검자의 방어를 무력화할 수 있다.</li><li>수검자의 무의식을 이끌어 낼 수 있다.</li><li>수검자의 다양한 반응을 관찰할 수 있다.</li></ol>
<h4>단점</h4><ol><li>검사 결과 해석을 위해 고도로 훈련된 전문가가 필요하다.</li><li>검사 시행에 비용과 시간이 많이 든다.</li><li>신뢰도와 타당도가 낮다.</li></ol>`},{num:15,category:`psychology`,title:`진로 성숙도 검사(CMI)의 태도 척도와 능력 척도를 각각 쓰시오.`,frequency:`22-3`,keyword:`CMI 태도/능력 척도`,answer:`<h4>태도척도</h4><ol><li>진로 결정성</li><li>참여도</li><li>독립성</li><li>성향</li><li>타협성</li></ol>
<h4>능력척도</h4><ol><li>자기평가</li><li>직업정보</li><li>목표선정</li><li>계획</li><li>문제해결</li></ol>`},{num:16,category:`psychology`,title:`CMI검사에서 능력척도 3가지를 쓰고 설명하시오.`,frequency:`25-3, 20-3`,keyword:`CMI 능력척도 상세`,answer:`<ol>
<li><strong>자기평가</strong> : 자신의 능력과 성격, 흥미를 이해하는 능력</li>
<li><strong>직업정보</strong> : 관심 직업에 대해 얼마나 정보를 가지고 있고, 수집할 수 있는지에 대한 능력</li>
<li><strong>목표선정</strong> : 자신이 갖고 있는 정보와 직업세계를 연결하여 직업 목표를 선정하는 능력</li>
</ol>`},{num:43,category:`psychology`,title:`틴슬레이와 브래들리가 제시한 검사 해석의 4단계를 설명하시오.`,frequency:`23-2, 20-4`,keyword:`검사 해석 4단계`,answer:`<ol>
<li><strong>해석 준비하기</strong> : 검사 결과와 내담자의 정보를 어떻게 연관지어 해석할 수 있는지 검토</li>
<li><strong>내담자 준비시키기</strong> : 내담자가 검사 결과를 수용할 수 있도록 준비</li>
<li><strong>결과 전달하기</strong> : 내담자가 이해할 수 있도록 검사 결과를 전달</li>
<li><strong>추후활동</strong> : 내담자가 검사 결과를 잘 이해했는지 확인하고 의견 교환</li>
</ol>`},{num:44,category:`psychology`,title:`틴슬레이와 브래들리가 제시한 검사 결과 검토의 2단계를 쓰고 설명하시오.`,frequency:`22-3`,keyword:`검사 결과 검토 2단계`,answer:`<ol>
<li><strong>이해 단계</strong> : 규준을 참조하여 검사점수의 의미를 충분히 이해하는 단계</li>
<li><strong>통합 단계</strong> : 이해를 통해 얻은 정보와 상담자가 수집한 다른 정보들을 통합하는 단계</li>
</ol>`},{num:46,category:`psychology`,title:`수퍼의 직업발달(진로발달) 5단계를 쓰고 설명하시오.`,frequency:`25-1, 23-2, 20-4`,keyword:`수퍼(Super) 발달단계`,answer:`<ol>
<li><strong>성장기</strong> : 가정과 학교에서 자아개념을 발달시키는 시기</li>
<li><strong>탐색기</strong> : 여러 가지 활동을 통해 자아를 검증하고 자신에게 맞는 직업을 탐색하는 시기</li>
<li><strong>확립기</strong> : 자신에게 적합한 직업을 선택하여 기반을 다지는 시기</li>
<li><strong>유지기</strong> : 자신의 직업에 안착하여 안정된 생활을 유지하는 시기</li>
<li><strong>쇠퇴기</strong> : 은퇴를 준비하며 새로운 직업이나 활동을 모색하는 시기</li>
</ol>`},{num:47,category:`psychology`,title:`수퍼의 경력개발 단계 중 성장기의 3단계를 쓰고 설명하시오.`,frequency:`19-2`,keyword:`수퍼(Super) 성장기 하위단계`,answer:`<ol>
<li><strong>환상기</strong> : 아동적 욕구가 지배적이며, 직업에 대해 환상을 갖고 있는 단계</li>
<li><strong>흥미기</strong> : 흥미에 따라 직업을 선택하는 단계</li>
<li><strong>능력기</strong> : 직업을 선택할 때 조건을 고려하며, 능력을 중요하게 생각하는 단계</li>
</ol>`},{num:48,category:`psychology`,title:`수퍼의 발달적 직업상담에서 평가 3가지를 설명하시오.`,frequency:`25-2, 22-3, 20-4`,keyword:`수퍼(Super) 평가 유형`,answer:`<ol>
<li><strong>문제의 평가</strong> : 내담자가 겪고 있는 어려움이나 상담에 대한 기대를 평가</li>
<li><strong>개인의 평가</strong> : 심리검사나 사례 연구 등을 통해 내담자 개인의 상태에 대해 분석하고 평가</li>
<li><strong>예언 평가</strong> : 내담자가 직업적으로 성공하고 만족할 수 있는지 예언</li>
</ol>`},{num:50,category:`psychology`,title:`집단 내 규준 3가지를 쓰고 설명하시오.`,frequency:`25-2, 24-2, 23-2, 23-1, 21-2, 20-1, 19-1, 18-3`,keyword:`집단 내 규준`,answer:`<ol>
<li><strong>백분위 점수</strong> : 개인이 집단에서 차지하는 상대적 위치. 100개의 동일한 구간으로 나누어 측정</li>
<li><strong>표준 점수</strong> : 평균으로부터 떨어진 거리를 표준편차 단위로 측정</li>
<li><strong>표준 등급</strong> : 9개의 구간으로 나누어 어디에 속하는지 측정(스테나인)</li>
</ol>`},{num:51,category:`psychology`,title:`규준 참조 검사와 준거 참조 검사를 각각 예를 들어 설명하시오.`,frequency:`21-3, 21-1, 19-2`,keyword:`규준참조검사 / 준거참조검사`,answer:`<ol>
<li><strong>규준참조검사</strong> : 개인의 점수를 다른 사람의 점수와 비교하여 평가하는 상대평가. 예) 각종 심리검사</li>
<li><strong>준거참조검사</strong> : 개인의 점수를 기준 점수와 비교하여 평가하는 절대평가. 예) 국가 자격시험</li>
</ol>`},{num:52,category:`psychology`,title:`직업심리검사의 신뢰도를 추정하는 방법 3가지를 쓰고 설명하시오.`,frequency:`23-2, 21-3, 20-2, 18-1`,keyword:`신뢰도 추정 방법`,answer:`<ol>
<li><strong>검사-재검사 신뢰도</strong> : 동일한 사람에게 동일한 검사를 시간 간격을 두고 두 번 실시하여 상관관계로 추정</li>
<li><strong>동형 검사 신뢰도</strong> : 신뢰도가 검증된 검사와 유사한 검사를 함께 실시하여 두 검사 점수 간 상관관계로 추정</li>
<li><strong>반분 신뢰도</strong> : 한 개의 검사를 두 부분으로 나누어 각 부분 간의 결과를 비교하여 추정</li>
</ol>`},{num:53,category:`psychology`,title:`반분 신뢰도를 추정하기 위해 사용하는 방법 3가지를 쓰고 설명하시오.`,frequency:`24-2, 19-3`,keyword:`반분 신뢰도 추정 방법`,answer:`<ol>
<li><strong>전후 반분법</strong> : 검사 문항을 전반부와 후반부로 나누는 방법</li>
<li><strong>기우 반분법</strong> : 검사 문항을 짝수와 홀수로 나누는 방법</li>
<li><strong>짝진 임의 배치법</strong> : 유사한 두 문항씩 짝을 지은 후, 각 짝에서 한 문항을 임의로 선택하여 양분하는 방법</li>
</ol>`},{num:54,category:`psychology`,title:`극대수행검사와 습관적 수행 검사를 설명하고 대표적 유형을 각각 쓰시오.`,frequency:`20-4`,keyword:`극대수행검사 / 습관적 수행검사`,answer:`<ol>
<li><strong>극대수행검사</strong> : 난이도가 낮은 다수의 문제를 제한 시간 내에 풀도록 하는 검사. 예) 지능검사, 적성검사, 성취도검사</li>
<li><strong>습관적 수행검사</strong> : 일상생활에서 이루어지는 습관적 행동에 대해 최대한 정직하게 응답할 것을 요구하는 검사. 예) 성격검사, 흥미검사, 태도검사</li>
</ol>`},{num:55,category:`psychology`,title:`측정의 기본 단위인 척도의 4가지 유형을 쓰고 설명하시오.`,frequency:`24-2, 20-2`,keyword:`척도의 4가지 유형`,answer:`<ol>
<li><strong>명명척도</strong> : 측정 대상 간 숫자의 차이만 있는 척도</li>
<li><strong>서열척도</strong> : 측정 대상 간에 숫자의 차이와 순위관계 정보가 있는 척도</li>
<li><strong>등간척도</strong> : 측정 대상 간 숫자의 차이와 순위 정보 그리고 간격이 포함된 척도</li>
<li><strong>비율척도</strong> : 측정 대상 간 숫자의 차이, 순위, 간격, 비율을 모두 포함하는 척도</li>
</ol>`},{num:56,category:`psychology`,title:`심리검사에서 신뢰도의 종류와 신뢰도에 영향을 주는 요인을 각각 3가지씩 쓰시오.`,frequency:`23-1, 21-2, 21-1`,keyword:`신뢰도 종류 / 영향요인`,answer:`<h4>신뢰도의 종류</h4><ol><li>검사-재검사 신뢰도</li><li>동형 검사 신뢰도</li><li>반분 신뢰도</li></ol>
<h4>신뢰도에 영향을 주는 요인</h4><ol><li>개인차</li><li>문항 수</li><li>문항 반응 수</li><li>검사유형</li><li>신뢰도 추정방법</li></ol>`},{num:57,category:`psychology`,title:`심리검사 사용의 윤리적 문제와 관련하여 주의할 사항 6가지를 쓰시오.`,frequency:`24-1, 22-2, 19-3`,keyword:`심리검사 윤리적 주의사항`,answer:`<ol>
<li>심리검사가 시대에 뒤떨어질 수 있음을 인정한다.</li>
<li>피검사자가 이해하기 쉬운 용어를 사용한다.</li>
<li>피검사자의 비밀을 보장한다.</li>
<li>검사의 결과는 목적에 맞게 제한적으로 사용한다.</li>
<li>타당도와 신뢰도가 높은 검사를 활용한다.</li>
<li>적절한 훈련을 받은 사람이 검사를 실시한다.</li>
</ol>`},{num:58,category:`psychology`,title:`검사-재검사 신뢰도에 영향을 미치는 요인 4가지를 쓰시오.`,frequency:`25-2, 23-1, 20-3, 18-2`,keyword:`검사-재검사 신뢰도 영향요인`,answer:`<ol><li>검사와 재검사 사이의 시간 간격</li><li>검사가 시행되는 환경의 변화</li><li>응답자의 속성 변화</li><li>응답자가 검사를 치른 경험</li></ol>`},{num:59,category:`psychology`,title:`구성타당도의 유형에 속하는 타당도 2가지를 쓰고 설명하시오.`,frequency:`25-3, 23-2, 20-4, 20-3, 19-3`,keyword:`구성타당도 유형`,answer:`<ol>
<li><strong>수렴 타당도</strong> : 검사 결과가 그 속성과 관계 있는 변인들과 얼마나 높은 상관관계를 갖는지를 나타내는 타당도</li>
<li><strong>변별 타당도</strong> : 검사 결과가 그 속성과 관계 없는 변인들과 얼마나 낮은 상관관계를 갖는지를 나타내는 타당도</li>
<li><strong>요인분석법</strong> : 검사 문항 간의 상관관계를 분석하여 상관성이 높은 문항끼리 묶어주는 방법</li>
</ol>`},{num:83,category:`psychology`,title:`예언 타당도와 동시(공인) 타당도를 예를 포함하여 설명하시오.`,frequency:`23-1, 18-2`,keyword:`예언타당도 / 동시타당도`,answer:`<ol>
<li><strong>예언타당도</strong> : 검사 점수가 미래 행위를 얼마나 잘 예측하는가의 타당도. 예) 적성검사에서 점수가 높았던 사람이 입사 후 우수한 업무 실적을 냈다면 예언타당도가 높다.</li>
<li><strong>동시(공인)타당도</strong> : 이미 타당도가 검증된 검사와 유사한 검사를 실시하고 두 검사 점수를 비교하여 측정하는 타당도. 예) 토익 점수가 높은 사람이 새로 개발한 영어 시험 점수가 높다면 동시타당도가 높다.</li>
</ol>`},{num:84,category:`psychology`,title:`직업상담을 위한 심리검사 선정 시 고려사항 3가지를 쓰시오.`,frequency:`23-1, 20-1`,keyword:`심리검사 선정 고려사항`,answer:`<ol>
<li>신뢰도와 타당도가 검증된 검사를 선정한다.</li>
<li>검사를 하는 목적에 부합하는 검사를 선정해야 한다.</li>
<li>검사의 간편성, 경제성 등을 고려해야 한다.</li>
<li>검사 선택 시 내담자도 포함하여야 한다.</li>
<li>내담자의 문제점을 파악한 후 검사를 선정해야 한다.</li>
</ol>`},{num:85,category:`psychology`,title:`심리검사 제작을 위한 예비문항 제작 시 고려사항 5가지를 쓰시오.`,frequency:`21-2`,keyword:`예비문항 제작 고려사항`,answer:`<ol>
<li><strong>문항의 적절성</strong> : 성별, 종교, 인종, 문화 등 특정집단에 유리하도록 제작해서는 안 된다.</li>
<li><strong>문항의 난이도</strong> : 수검자의 수준에 따라 난이도를 적절하게 구성한다.</li>
<li><strong>문항의 구조화</strong> : 문항 내용은 구체적이고 명확해야 한다.</li>
<li><strong>문항의 동기유발</strong> : 문항은 수검자로 하여금 학습동기를 유발할 수 있어야 한다.</li>
<li><strong>문항의 참신성</strong> : 기존검사에 중복되지 않는 새로운 문항을 제시한다.</li>
<li><strong>문항의 중립성</strong> : 특정집단에 불쾌감을 주는 문항이 포함되지 않도록 주의한다.</li>
</ol>`},{num:98,category:`psychology`,title:`부정적인 심리검사 결과를 내담자에게 통보하는 방법 4가지를 쓰시오.`,frequency:`25-2, 22-2, 20-1`,keyword:`부정적 검사결과 통보 방법`,answer:`<ol>
<li>내담자가 충격을 받지 않도록 주의하여 설명한다.</li>
<li>전문적 용어나 통계적 숫자보다는 일상적인 용어를 사용하여 설명한다.</li>
<li>적절한 해석과 함께 검사 결과를 설명한다.</li>
<li>검사결과가 유출되지 않도록 비밀보장에 유의한다.</li>
</ol>`},{num:99,category:`psychology`,title:`심리검사의 사용목적 3가지를 쓰고 설명하시오.`,frequency:`22-2, 20-1`,keyword:`심리검사 사용목적`,answer:`<ol>
<li><strong>개인적 기능</strong> : 내담자의 자기이해를 증진시키고 성공 가능성이 높은 진로를 선택할 수 있도록 돕는다.</li>
<li><strong>예측적 기능</strong> : 내담자의 성격이나 적성 등을 파악하여 수행능력을 예측한다.</li>
<li><strong>진단적 기능</strong> : 내담자의 문제 원인을 파악하고 해결한다.</li>
<li><strong>조사적 기능</strong> : 특정 집단의 성향을 조사하여 집단의 특징을 규명한다.</li>
</ol>`},{num:101,category:`psychology`,title:`표집 절차의 오류를 해결하기 위한 방법 3가지를 쓰고 설명하시오.`,frequency:`24-3, 22-2, 19-3`,keyword:`정규분포 이탈 해결 방법`,answer:`<ol>
<li><strong>완곡법</strong> : 검사결과가 정규분포와 비슷한 모양을 갖는 경우, 점수를 더하거나 빼서 정상분포 모양이 되도록 하는 방법</li>
<li><strong>절미법</strong> : 꼬리가 작은 경우 분포 곡선에서 한쪽으로 치우친 편포의 꼬리를 잘라내는 방법</li>
<li><strong>면적 환산법</strong> : 각 점수의 백분위를 찾아, 이에 해당하는 Z점수를 찾는 방법</li>
</ol>`},{num:17,category:`jobinfo`,title:`직무분석 방법 중 최초분석법의 종류를 쓰시오.`,frequency:`24-2, 22-3, 21-1`,keyword:`최초분석법 종류`,answer:`<ol><li>면접법</li><li>관찰법</li><li>체험법</li><li>설문지법</li><li>중요사건법(결정적 사건법)</li><li>녹화법</li><li>작업일지법</li></ol>`},{num:18,category:`jobinfo`,title:`최초 분석법에 해당하는 방법을 쓰고 각각 설명하시오.`,frequency:`19-1`,keyword:`최초분석법 상세`,answer:`<ol>
<li><strong>체험법</strong> : 직무 분석자가 직접 직무를 체험하여 자료를 얻는 방법</li>
<li><strong>면접법</strong> : 직무 분석자가 직무 담당자와 면접을 진행하여 자료를 얻는 방법</li>
<li><strong>설문지법</strong> : 직무 담당자에게 설문지를 작성하도록 하여 자료를 얻는 방법</li>
<li><strong>관찰법</strong> : 직무 분석자가 현장에서 직무 담당자를 관찰하여 자료를 얻는 방법</li>
<li><strong>결정적 사건법</strong> : 직무에서 크게 성공하거나 실패한 경우와 관련된 자료를 수집하여 분석하는 방법</li>
<li><strong>녹화법</strong> : 작업 장면을 녹화하여 직무에 관한 자료를 얻는 방법</li>
<li><strong>작업일지법</strong> : 직무 담당자가 작성한 작업 일지를 바탕으로 자료를 얻는 방법</li>
</ol>`},{num:19,category:`jobinfo`,title:`한국 직업사전의 부가직업정보 중 작업강도 5단계를 쓰시오.`,frequency:`20-1`,keyword:`작업강도 5단계`,answer:`<ol><li>아주 가벼운 작업</li><li>가벼운 작업</li><li>보통작업</li><li>힘든작업</li><li>아주 힘든 작업</li></ol>`},{num:20,category:`jobinfo`,title:`직무기능의 사물 세부사항을 쓰시오.`,frequency:`20-3`,keyword:`직무기능 - 사물`,answer:`<ol><li>설치</li><li>정밀작업</li><li>제어조작</li><li>조작운전</li><li>수동조작</li><li>유지</li><li>투입-인출</li><li>단순작업</li></ol>`},{num:21,category:`jobinfo`,title:`부가직업정보 중 정규 교육, 숙련기간, 직무기능의 의미를 기술하시오.`,frequency:`22-3`,keyword:`정규교육 / 숙련기간 / 직무기능`,answer:`<ol>
<li><strong>정규교육</strong> : 해당 직무를 수행하기 위해 필요한 정규교육 수준</li>
<li><strong>숙련기간</strong> : 해당 직무를 평균적인 수준으로 수행하기 위해 필요한 교육·훈련 등의 기간</li>
<li><strong>직무기능</strong> : 해당 직무를 수행하는 과정에서 자료, 사람, 사물과 맺는 관계의 특성</li>
</ol>`},{num:22,category:`jobinfo`,title:`직무기능 중 사람과 관련된 세부사항을 쓰시오.`,frequency:`22-2`,keyword:`직무기능 - 사람`,answer:`<ol><li>자문</li><li>협의</li><li>교육</li><li>감독</li><li>오락제공</li><li>설득</li><li>말하기-신호</li><li>서비스 제공</li></ol>`},{num:23,category:`jobinfo`,title:`직무기능 중 자료와 관련된 세부사항을 쓰시오.`,frequency:`22-2, 21-3`,keyword:`직무기능 - 자료`,answer:`<ol><li>종합</li><li>조정</li><li>분석</li><li>수집</li><li>계산</li><li>기록</li><li>비교</li></ol>`},{num:24,category:`jobinfo`,title:`부가직업 정보 중 육체활동의 구분을 쓰시오.`,frequency:`23-2, 20-4`,keyword:`육체활동 구분`,answer:`<ol><li>균형감각</li><li>시각</li><li>청각</li><li>언어력</li><li>손사용</li><li>웅크림</li></ol>`},{num:25,category:`jobinfo`,title:`한국직업사전에 수록된 부가 직업정보 5가지를 쓰시오.`,frequency:`25-2, 24-1, 21-1, 18-1`,keyword:`부가직업정보 종류`,answer:`<ol><li>작업 강도</li><li>작업 환경</li><li>작업 장소</li><li>육체활동</li><li>정규 교육</li></ol>`},{num:26,category:`jobinfo`,title:`직무기능 중 자료에 대한 기능별 설명`,frequency:`23-1`,keyword:`직무기능 자료 상세`,answer:`<table>
<tr><th>기능</th><th>설명</th></tr>
<tr><td><strong>조정</strong></td><td>데이터의 분석에 기초하여 시간, 장소, 작업순서, 활동 등을 결정. 결정을 실행하거나 상황을 보고한다.</td></tr>
<tr><td><strong>분석</strong></td><td>조사하고 평가한다. 평가와 관련된 대안적 행위의 제시가 빈번하게 포함된다.</td></tr>
<tr><td><strong>수집</strong></td><td>자료, 사람, 사물에 관한 정보를 수집, 대조, 분류한다.</td></tr>
<tr><td><strong>계산</strong></td><td>사칙연산을 실시하고 관련하여 규정된 활동을 수행하거나 보고한다. 수를 세는 것은 포함되지 않는다.</td></tr>
<tr><td><strong>기록</strong></td><td>데이터를 옮겨 적거나 입력하거나 표시한다.</td></tr>
<tr><td><strong>비교</strong></td><td>자료, 사람, 사물의 기능적, 구조적, 조합적 특성을 판단한다.</td></tr>
</table>`},{num:27,category:`jobinfo`,title:`한국직업사전의 작업강도 상세 기준 (빈칸채우기)`,frequency:`22-2`,keyword:`작업강도 상세 기준`,answer:`<ol>
<li><strong>아주 가벼운 작업</strong> : 최고 <strong>4</strong>kg</li>
<li><strong>보통 작업</strong> : 최고 <strong>20</strong>kg, 빈번히 <strong>10</strong>kg</li>
<li><strong>힘든 작업</strong> : 최고 <strong>40</strong>kg, 빈번히 <strong>20</strong>kg</li>
</ol>`},{num:28,category:`jobinfo`,title:`한국 표준산업분류의 세 가지 분류기준을 쓰시오.`,frequency:`25-1, 19-1`,keyword:`KSIC 분류기준`,answer:`<ol><li>산출물의 특성</li><li>투입물의 특성</li><li>생산활동의 일반적인 결합형태(생산공정)</li></ol>`},{num:29,category:`jobinfo`,title:`한국 표준직업분류에서 직업으로 보지 않는 활동을 쓰시오.`,frequency:`25-2, 24-2, 22-2, 20-1, 19-3`,keyword:`직업으로 보지 않는 활동`,answer:`<ol><li>이자, 임대료 등의 수입</li><li>연금법, 고용보험법 등에 의한 수입</li><li>경마, 경륜, 복권 등에 의한 수입</li><li>예금이나 적금의 인출</li><li>가사활동</li><li>사회 수용 시설 내 경제활동</li><li>수형자의 강제노동</li></ol>`},{num:30,category:`jobinfo`,title:`한국표준직업분류의 포괄적 업무와 다수 직업 종사자의 분류 원칙을 쓰시오.`,frequency:`22-3`,keyword:`KSCO 분류 원칙 종합`,answer:`<h4>포괄적인 업무에 대한 직업분류 원칙</h4><ol><li>주된 직무 우선원칙</li><li>최상급 직능 수준 우선 원칙</li><li>생산업무 우선 원칙</li></ol>
<h4>다수 직업 종사자의 분류 원칙</h4><ol><li>취업시간 우선의 원칙</li><li>수입우선의 원칙</li><li>조사 시 최근의 직업 원칙</li></ol>`},{num:31,category:`jobinfo`,title:`다수 직업 종사자의 분류 원칙을 순서대로 쓰고 설명하시오.`,frequency:`24-3, 22-1, 21-3, 19-2, 18-2`,keyword:`KSCO 다수직업 분류 원칙`,answer:`<ol>
<li><strong>취업시간 우선의 원칙</strong> : 투자하는 취업 시간이 가장 긴 직업으로 분류</li>
<li><strong>수입우선의 원칙</strong> : 시간으로 분류하기 어려운 경우, 수입이 높은 직업으로 분류</li>
<li><strong>조사 시 최근의 직업 원칙</strong> : 시간과 수입으로 결정할 수 없는 경우 가장 최근 직업으로 분류</li>
</ol>`},{num:32,category:`jobinfo`,title:`포괄적 업무 분류 원칙 3가지를 설명하시오.`,frequency:`23-1, 20-4, 20-3, 20-2`,keyword:`KSCO 포괄적 업무 분류 원칙`,answer:`<ol>
<li><strong>주된 직무 우선 원칙</strong> : 여러 직무를 수행하는 경우 가장 주된 직업으로 분류</li>
<li><strong>최상급 직능 수준 우선 원칙</strong> : 가장 높은 직무능력을 필요로 하는 일로 분류</li>
<li><strong>생산업무 우선 원칙</strong> : 생산과 공급이 함께 이루어지는 경우 생산으로 분류</li>
</ol>`},{num:33,category:`jobinfo`,title:`한국표준산업분류에서 생산단위 활동형태 3가지를 설명하시오.`,frequency:`25-2, 23-2, 22-3, 21-2`,keyword:`KSIC 생산단위 활동형태`,answer:`<ol>
<li><strong>주된 산업활동</strong> : 생산된 재화 또는 제공된 서비스 중에서 부가가치가 가장 큰 활동</li>
<li><strong>부차적 산업활동</strong> : 주된 산업활동 이외의 재화 생산 및 서비스 제공 활동</li>
<li><strong>보조활동</strong> : 회계, 창고, 운송 등과 같이 주된 산업활동과 부차적 산업활동을 지원하는 활동</li>
</ol>`},{num:34,category:`jobinfo`,title:`한국 표준산업분류의 산업, 산업활동, 산업활동의 범위, 산업분류의 정의를 쓰시오.`,frequency:`24-1, 22-2, 21-1, 20-2, 20-1, 18-3`,keyword:`KSIC 기본 정의`,answer:`<ol>
<li><strong>산업</strong> : 유사한 산업활동에 종사하는 생산단위의 집합</li>
<li><strong>산업활동</strong> : 각 생산단위가 노동, 자본, 자원 등을 투입하여 재화 또는 서비스를 생산·제공하는 일련의 활동과정</li>
<li><strong>산업활동의 범위</strong> : 영리, 비영리 활동은 포함하지만 가사활동은 포함되지 않는다.</li>
<li><strong>산업분류</strong> : 생산단위가 수행하는 생산활동을 그 유사성에 따라 체계적으로 분류한 것</li>
</ol>`},{num:35,category:`jobinfo`,title:`한국표준직업분류에서 직무 유사성의 판단기준 4가지를 쓰시오.`,frequency:`21-2`,keyword:`KSCO 직무 유사성 판단기준`,answer:`<ol><li>지식</li><li>경험</li><li>기능</li><li>직무수행자가 입직하기 위해 필요한 요건</li></ol>`},{num:36,category:`jobinfo`,title:`한국 표준산업분류에서 산업 결정방법과 산업분류의 적용원칙을 쓰시오.`,frequency:`20-4`,keyword:`KSIC 산업 결정방법/적용원칙`,answer:`<h4>산업 결정방법</h4>
<ol>
<li>생산단위가 수행하는 주된 산업으로 결정한다.</li>
<li>계절적으로 산업이 달라지는 경우, 조사기간 중 산출액이 가장 많은 산업으로 결정한다.</li>
<li>휴업·청산 중인 경우에는 영업 중 또는 청산을 시작하기 전 산업으로 결정, 설립 중인 경우에는 개시하는 산업으로 결정한다.</li>
</ol>
<h4>산업분류 적용원칙</h4>
<ol>
<li>산출물, 투입물, 생산공정을 모두 고려하여 분류한다.</li>
<li>대분류를 결정한 후 중, 소, 세, 세세 단위로 분류한다.</li>
<li>산업활동이 결합되어 있는 경우에는 생산단위의 주된 활동으로 분류한다.</li>
</ol>`},{num:37,category:`jobinfo`,title:`한국표준직업분류와 직능 수준의 관계 (빈칸 채우기)`,frequency:`25-3, 23-2, 21-1`,keyword:`KSCO 대분류와 직능수준`,answer:`<table>
<tr><th>대분류 항목</th><th>직능수준</th></tr>
<tr><td>관리자</td><td>제<strong>4</strong>직능수준 혹은 제<strong>3</strong>직능수준 필요</td></tr>
<tr><td>판매종사자</td><td>제<strong>2</strong>직능수준 필요</td></tr>
<tr><td>장치·기계 조작 및 조립 종사자</td><td>제<strong>2</strong>직능수준 필요</td></tr>
<tr><td>군인</td><td>제<strong>2</strong>직능수준 이상 필요</td></tr>
<tr><td>단순 노무직</td><td>제<strong>1</strong>직능수준</td></tr>
</table>`},{num:45,category:`jobinfo`,title:`직무평가 방법을 쓰고 설명하시오.`,frequency:`25-1, 23-2, 21-3`,keyword:`직무평가방법`,answer:`<ol>
<li><strong>서열법</strong> : 직무의 상대적 중요도에 따라 순위를 정하는 방법</li>
<li><strong>분류법</strong> : 사전에 작성한 등급표에 따라 직무에 등급을 부여하는 방법</li>
<li><strong>점수법</strong> : 직무의 구성 요소별 중요도에 따라 점수를 부여한 후 계산하여 가치를 평가하는 방법</li>
<li><strong>요소비교법</strong> : 핵심이 되는 직무를 기준으로 비교함으로써 상대적 가치를 결정하는 방법</li>
</ol>`},{num:82,category:`jobinfo`,title:`직무분석 방법 중 면접법의 장점과 단점을 각각 2가지씩 쓰시오.`,frequency:`23-1`,keyword:`면접법 장단점`,answer:`<h4>장점</h4><ol>
<li>수행자의 정신적인 활동까지 파악할 수 있다.</li>
<li>질문지법에 비해 응답률이 높다.</li>
<li>추가질문, 설명 등을 통해 답변의 오류를 줄일 수 있다.</li>
</ol>
<h4>단점</h4><ol>
<li>피면접자의 주관적인 의견이 반영되어 분석의 정확도에 영향을 줄 수 있다.</li>
<li>정보의 수집에 많은 시간과 노력이 필요하다.</li>
<li>익명성이 보장되지 않아 민감한 질문은 하기 어렵다.</li>
</ol>`},{num:86,category:`jobinfo`,title:`한국 표준산업분류에서 통계 단위의 산업을 결정하는 방법을 쓰시오.`,frequency:`24-3, 23-1, 21-3, 20-3`,keyword:`KSIC 산업 결정 방법`,answer:`<ol>
<li>생산 단위가 수행하는 주된 산업활동의 종류에 따라 결정한다.</li>
<li>계절에 따라 산업이 달라지는 경우에는 조사 기간 중 산출액이 많았던 산업으로 결정한다.</li>
<li>휴업·청산 중인 경우에는 영업 중 또는 청산을 시작하기 전 산업으로, 설립 중인 경우에는 개시하는 산업으로 결정한다.</li>
</ol>`},{num:92,category:`jobinfo`,title:`직무분석 방법 중 결정적 사건법의 단점을 3가지 쓰시오.`,frequency:`22-2, 19-3`,keyword:`결정적 사건법 단점`,answer:`<ol>
<li>응답자의 주관적 의견 개입으로 인해 사건이 왜곡될 수 있다.</li>
<li>직무를 전체적으로 반영하지 못하고 일부만 강조될 수 있다.</li>
<li>정확한 조사를 위해 특별히 훈련받은 사람이 필요하다.</li>
<li>조사를 위하여 많은 시간과 노력을 필요로 한다.</li>
<li>일상적 업무 정보가 배제될 수 있다.</li>
</ol>`},{num:93,category:`jobinfo`,title:`직무분석 자료 활용의 용도 4가지를 쓰시오.`,frequency:`24-3, 24-1, 20-3, 18-1`,keyword:`직무분석 자료 활용`,answer:`<ol>
<li>구인과 채용에 활용한다.</li><li>직무평가의 기초 자료로 활용한다.</li><li>승진, 배치 등에 활용한다.</li><li>교육과 훈련에 활용한다.</li>
<li>직무수행평가 및 인사고과에 활용한다.</li><li>작업환경 개선, 산업 안전 관리에 활용한다.</li><li>직무 분류에 활용한다.</li>
</ol>`},{num:94,category:`jobinfo`,title:`겔라트가 제시한 직업 의사결정의 상담과정 8단계를 순서대로 쓰시오.`,frequency:`22-2, 19-3, 19-1`,keyword:`겔라트(Gelatt) 의사결정 8단계`,answer:`<ol>
<li>목표의식</li><li>정보수집</li><li>대안의 열거</li><li>대안의 결과 예측</li><li>대안의 실현 가능성 예측</li><li>가치평가</li><li>의사결정</li><li>평가 &amp; 재투입</li>
</ol>`},{num:38,category:`labor_market`,title:`내부 노동시장의 형성 요인과 장점을 각각 3가지씩 쓰시오.`,frequency:`23-2, 22-3, 18-1`,keyword:`내부노동시장 형성요인/장점`,answer:`<h4>형성 요인</h4><ol><li>숙련의 특수성</li><li>현장훈련</li><li>기업 내의 관습</li></ol>
<h4>장점</h4><ol>
<li>우수한 인적자원을 확보하고 유지할 수 있다.</li>
<li>승진, 배치전환 등을 통하여 동기를 유발할 수 있다.</li>
<li>인적자원 확보 및 동기유발을 통해 생산성이 향상된다.</li>
</ol>`},{num:39,category:`labor_market`,title:`내부 노동시장의 형성 요인을 3가지 쓰고 각각에 대해 설명하시오.`,frequency:`23-2`,keyword:`내부노동시장 형성요인 상세`,answer:`<ol>
<li><strong>숙련의 특수성</strong> : 기업에서 필요로 하는 숙련도는 기록이나 문서로는 전수가 불가능하여, 축적됨에 따라 내부노동시장을 형성하게 된다.</li>
<li><strong>현장훈련</strong> : 문서화되지 않은 노하우가 실제 현장에서만 전수되어 내부노동시장을 형성한다.</li>
<li><strong>관습</strong> : 기업 내의 고유한 관습은 다른 기업과 차별화된 근로조건, 근로환경을 만들어 내부노동시장을 형성하게 한다.</li>
</ol>`},{num:41,category:`labor_market`,title:`산업별로 임금격차가 발생하는 원인 3가지를 쓰고 설명하시오.`,frequency:`19-3`,keyword:`산업별 임금격차 원인 상세`,answer:`<ol>
<li><strong>노동조합의 존재 여부</strong> : 강력한 노동조합이 존재하는 산업은 그렇지 않은 산업에 비해 급여가 높기 때문에 임금격차가 발생한다.</li>
<li><strong>보상적 임금</strong> : 근무 환경이나 조건이 열악한 산업의 경우 이에 대하여 금전적으로 보상이 이루어지게 되므로 임금격차가 발생한다.</li>
<li><strong>노동생산성의 차이</strong> : 노동생산성이 높은 산업은 그렇지 못한 산업에 비해 임금이 높기 때문에 임금격차가 발생한다.</li>
</ol>`},{num:40,category:`labor_market`,title:`산업별로 임금격차가 발생하는 원인을 쓰시오.`,frequency:`25-1, 22-3, 19-3`,keyword:`산업별 임금격차 원인`,answer:`<ol>
<li><strong>노동조합의 존재 여부</strong> : 강력한 노동조합이 존재하는 산업은 급여가 높음</li>
<li><strong>보상적 임금</strong> : 근무 환경이나 조건이 열악한 산업의 경우 금전적 보상</li>
<li><strong>노동생산성의 차이</strong> : 노동생산성이 높은 산업은 임금이 높음</li>
<li>지리적 요인</li>
<li>산업의 종류</li>
</ol>`},{num:60,category:`labor_market`,title:`야호다의 박탈이론에서 고용으로 인한 잠재효과 5가지를 쓰시오.`,frequency:`23-2`,keyword:`야호다(Jahoda) 박탈이론`,answer:`<ol><li>시간의 조직화</li><li>사회적 접촉</li><li>공동의 목표 참여</li><li>의미 있는 활동</li><li>사회적 정체감과 지위 확보</li></ol>`},{num:67,category:`labor_market`,title:`기혼여성의 경제활동 참가율을 낮게 하는 요인 6가지를 쓰시오.`,frequency:`23-2, 21-1, 18-3`,keyword:`기혼여성 경제활동참가율 저해요인`,answer:`<ol><li>배우자 소득의 증가</li><li>많은 자녀의 수</li><li>높은 사회 전체 실업률</li><li>낮은 자녀의 연령</li><li>열악한 법적, 제도적 환경</li><li>낮은 여성의 교육수준</li></ol>`},{num:71,category:`labor_market`,title:`노동수요의 탄력성 공식과 영향 요인을 쓰시오.`,frequency:`25-2, 23-1, 21-3, 19-3, 19-2`,keyword:`노동수요 탄력성`,answer:`<h4>공식</h4>
<p>노동수요 탄력성 = | 노동수요 변화율 / 임금 변화율 |</p>
<h4>영향을 주는 요인</h4>
<ol><li>총생산비에서 노동 비용이 차지하는 비중</li><li>다른 생산요소의 노동에 대한 대체 가능성</li><li>노동 외 생산요소의 공급 탄력성</li><li>생산품에 대한 수요의 탄력성</li></ol>`},{num:72,category:`labor_market`,title:`임금의 하방경직성의 의미와 원인 5가지를 쓰시오.`,frequency:`24-3, 23-1, 18-2`,keyword:`임금 하방경직성`,answer:`<h4>의미</h4>
<p>한번 인상된 임금이 경제 여건의 변화에도 불구하고 하락하지 않고 현재 수준을 유지하는 현상</p>
<h4>원인</h4>
<ol><li>최저임금제</li><li>강력한 노동조합의 존재</li><li>장기 고용계약</li><li>연공급제 임금 형태</li><li>노동자의 화폐환상</li></ol>`},{num:100,category:`labor_market`,title:`노동수요의 임금 탄력성 계산 문제`,frequency:`22-2`,keyword:`노동수요 탄력성 계산`,answer:`<p><strong>조건:</strong> Ld = 5,000 - 2W, W = 2,000원</p>
<h4>① 임금 탄력성</h4>
<p>탄력성 = (△Ld/△W) × (W/Ld)</p>
<p>△Ld/△W = -2 (기울기)</p>
<p>W = 2,000일 때, Ld = 5,000 - (2×2,000) = 1,000</p>
<p>|-2 × (2,000/1,000)| = <strong>4</strong></p>
<h4>② 근로자의 수입</h4>
<p>수입 = Ld × W = 1,000 × 2,000 = <strong>2,000,000원</strong></p>`},{num:105,category:`counseling`,title:`직업상담사가 갖추어야 할 자질(자격요건) 5가지를 쓰시오.`,frequency:`24-3, 22-1, 20-2`,keyword:`직업상담사 자질/자격요건`,answer:`<ol>
<li><strong>인간에 대한 깊은 관심과 이해</strong> : 내담자의 감정, 경험, 가치관에 공감하고 이해하려는 태도가 필요하다.</li>
<li><strong>직업 및 노동시장에 대한 전문 지식</strong> : 다양한 직업 정보, 고용 동향, 자격제도 등에 대한 최신 지식을 갖추어야 한다.</li>
<li><strong>상담 기법에 대한 숙련</strong> : 경청, 공감, 반영, 질문 등 기본 상담기법을 능숙하게 활용할 수 있어야 한다.</li>
<li><strong>심리검사 실시 및 해석 능력</strong> : 적성검사, 흥미검사 등 다양한 심리검사를 실시하고 결과를 해석할 수 있어야 한다.</li>
<li><strong>윤리의식과 비밀보장</strong> : 내담자의 개인정보를 철저히 보호하고 윤리적 기준을 준수해야 한다.</li>
<li><strong>자기 성찰 능력</strong> : 자신의 편견이나 가치관이 상담에 영향을 미치지 않도록 지속적으로 자기 점검을 해야 한다.</li>
</ol>`},{num:112,category:`counseling`,title:`직업상담의 목적(목표) 4가지를 쓰시오.`,frequency:`21-2, 19-1`,keyword:`직업상담 목적/목표`,answer:`<ol>
<li><strong>자기이해 촉진</strong> : 내담자가 자신의 흥미, 적성, 가치관, 성격 등을 정확하게 이해할 수 있도록 돕는다.</li>
<li><strong>직업세계 이해</strong> : 다양한 직업의 특성, 전망, 요구 조건 등 직업세계에 대한 정보를 제공하여 올바른 이해를 돕는다.</li>
<li><strong>합리적 의사결정 능력 배양</strong> : 내담자가 자신에게 적합한 진로를 스스로 선택하고 결정할 수 있는 능력을 기른다.</li>
<li><strong>진로계획 수립 및 실행 지원</strong> : 구체적인 진로계획을 수립하고 이를 실행할 수 있도록 실질적인 도움을 제공한다.</li>
</ol>`},{num:113,category:`counseling`,title:`역전이(counter-transference)의 개념과 유형 3가지를 쓰고 설명하시오.`,frequency:`22-1, 20-3`,keyword:`역전이 개념/유형`,answer:`<p><strong>개념:</strong> 역전이란 상담자가 내담자에 대해 무의식적으로 갖는 감정적 반응으로, 상담자의 과거 경험이나 미해결 문제가 내담자에게 투사되는 현상이다.</p>
<ol>
<li><strong>긍정적 역전이</strong> : 상담자가 내담자에게 지나치게 호감이나 동정심을 느끼는 것으로, 객관적 판단을 방해할 수 있다.</li>
<li><strong>부정적 역전이</strong> : 상담자가 내담자에게 불쾌감, 거부감, 적대감 등 부정적 감정을 느끼는 것으로, 상담 관계를 악화시킬 수 있다.</li>
<li><strong>동일시 역전이</strong> : 상담자가 내담자와 자신을 동일시하여 객관적 거리를 유지하지 못하는 것으로, 상담자 자신의 문제를 내담자에게 투영하는 현상이다.</li>
</ol>`},{num:114,category:`counseling`,title:`프로이트의 방어기제(defense mechanism) 6가지를 쓰고 설명하시오.`,frequency:`23-1, 21-2`,keyword:`방어기제`,answer:`<ol>
<li><strong>억압</strong> : 불안을 일으키는 생각이나 충동을 무의식 속으로 밀어내어 의식하지 못하게 하는 기제</li>
<li><strong>합리화</strong> : 자신의 행동에 대해 그럴듯한 이유를 붙여 정당화하는 기제</li>
<li><strong>투사</strong> : 자신의 받아들이기 어려운 감정이나 충동을 타인에게 전가하는 기제</li>
<li><strong>반동형성</strong> : 실제 감정과 반대되는 행동이나 태도를 표현하는 기제</li>
<li><strong>퇴행</strong> : 불안 상황에서 발달의 이전 단계로 돌아가는 행동을 보이는 기제</li>
<li><strong>승화</strong> : 사회적으로 용납되지 않는 충동을 사회적으로 수용 가능한 형태로 전환하는 기제</li>
</ol>`},{num:115,category:`counseling`,title:`메이(May)가 제시한 불안의 3가지 유형을 쓰고 설명하시오.`,frequency:`20-4, 19-2`,keyword:`메이(May) 불안 유형`,answer:`<ol>
<li><strong>정상적 불안</strong> : 위협적 상황에 대한 적절한 반응으로, 인간의 성장과 발전에 기여하는 건강한 불안이다. 상황에 비례하고 억압을 수반하지 않는다.</li>
<li><strong>신경증적 불안</strong> : 위협의 정도에 비해 과도한 불안 반응을 보이는 것으로, 억압을 수반하고 비합리적이며 일상생활을 방해한다.</li>
<li><strong>실존적 불안</strong> : 죽음, 자유, 고독, 무의미 등 인간 존재의 근본 조건에서 비롯되는 불안으로, 삶의 유한성을 인식할 때 경험한다.</li>
</ol>`},{num:118,category:`counseling`,title:`번(Berne)의 교류분석(TA)에서 자아상태 3가지를 쓰고 설명하시오.`,frequency:`23-2, 22-1, 20-3, 18-2`,keyword:`교류분석(TA) 자아상태`,answer:`<ol>
<li><strong>부모자아(P, Parent)</strong> : 어린 시절 부모나 양육자로부터 배운 가치관, 태도, 행동양식을 반영하는 자아상태이다. 비판적 부모(CP)와 양육적 부모(NP)로 구분된다.</li>
<li><strong>성인자아(A, Adult)</strong> : 객관적 사실에 근거하여 합리적으로 판단하고 행동하는 자아상태이다. 현실을 있는 그대로 검토하고 분석하는 기능을 한다.</li>
<li><strong>아동자아(C, Child)</strong> : 어린 시절의 감정, 욕구, 충동을 그대로 간직하고 있는 자아상태이다. 자유로운 아동(FC)과 순응하는 아동(AC)으로 구분된다.</li>
</ol>`},{num:119,category:`counseling`,title:`교류분석(TA)에서 교류유형(의사소통 유형) 3가지를 쓰고 설명하시오.`,frequency:`22-2, 20-1`,keyword:`교류분석 교류유형`,answer:`<ol>
<li><strong>상보교류(보완적 교류)</strong> : 의사소통의 자극과 반응이 서로 평행을 이루는 교류로, 예상된 반응이 돌아오므로 원활한 의사소통이 이루어진다. 예) A→A, P→C에 대한 C→P 반응</li>
<li><strong>교차교류</strong> : 의사소통의 자극에 대해 예상과 다른 자아상태에서 반응이 돌아오는 교류로, 의사소통이 단절되거나 갈등이 발생한다. 예) A→A 자극에 대해 P→C 반응</li>
<li><strong>이면교류(이중교류)</strong> : 표면적인 메시지(사회적 수준)와 이면적인 메시지(심리적 수준)가 동시에 전달되는 교류로, 숨겨진 의도가 존재한다.</li>
</ol>`},{num:125,category:`counseling`,title:`생애진로사정(Life Career Assessment)의 구성요소 4가지를 쓰고 설명하시오.`,frequency:`25-2, 24-3, 24-1, 22-1, 20-4, 18-1`,keyword:`생애진로사정 구성요소`,answer:`<ol>
<li><strong>진로사정</strong> : 내담자의 직업적 경험, 직무 만족도, 직업적 성취 등 진로와 관련된 전반적인 정보를 평가하는 것이다.</li>
<li><strong>전형적인 하루</strong> : 내담자의 하루 일과를 상세히 살펴봄으로써 생활방식, 시간 활용, 활동 패턴 등을 파악하는 것이다.</li>
<li><strong>강점과 장애물</strong> : 내담자의 강점(자원, 능력)과 진로 발달을 방해하는 장애물을 파악하여 진로계획에 반영하는 것이다.</li>
<li><strong>요약</strong> : 위 세 가지 사정 결과를 종합하여 내담자에게 피드백을 제공하고 행동계획을 수립하는 것이다.</li>
</ol>`},{num:127,category:`counseling`,title:`생애진로사정에서 사용하는 기법(도구) 3가지를 쓰고 설명하시오.`,frequency:`20-2, 19-3`,keyword:`생애진로사정 기법`,answer:`<ol>
<li><strong>생애진로무지개</strong> : 수퍼(Super)의 이론에 기반하여 인생의 다양한 역할(자녀, 학생, 시민, 근로자 등)을 시각적으로 표현하는 기법이다.</li>
<li><strong>직업카드분류</strong> : 직업카드를 좋아하는 것, 싫어하는 것, 모르는 것으로 분류하여 흥미와 가치관을 탐색하는 기법이다.</li>
<li><strong>생애역할 분석</strong> : 내담자가 현재 수행하고 있는 다양한 역할의 비중과 만족도를 분석하여 역할 간 갈등이나 조화를 파악하는 기법이다.</li>
</ol>`},{num:128,category:`counseling`,title:`생애진로사정의 4단계 과정을 순서대로 쓰시오.`,frequency:`19-1`,keyword:`생애진로사정 4단계`,answer:`<ol>
<li><strong>1단계: 진로사정 면접</strong> — 내담자의 진로 이력, 교육, 직업 경험 등을 체계적으로 수집하는 단계</li>
<li><strong>2단계: 전형적 하루 탐색</strong> — 내담자의 하루 일과를 상세히 탐색하여 생활 패턴, 시간 사용, 역할 수행 양상을 파악하는 단계</li>
<li><strong>3단계: 강점과 장애물 파악</strong> — 내담자의 자원과 역량(강점)을 확인하고, 진로 발달을 방해하는 장애요인을 규명하는 단계</li>
<li><strong>4단계: 종합 요약 및 계획</strong> — 수집된 정보를 종합하여 내담자에게 피드백하고, 구체적인 행동계획을 수립하는 단계</li>
</ol>`},{num:131,category:`counseling`,title:`ABCDE 기법을 사례에 적용하여 설명하시오. (실직 사례)`,frequency:`21-3`,keyword:`REBT ABCDE 사례 적용`,answer:`<p><em>사례: 직장에서 해고된 40대 남성이 극도의 우울감과 무기력감을 호소</em></p>
<ol>
<li><strong>A (선행사건, Activating event)</strong> : 회사의 구조조정으로 갑자기 해고를 당했다.</li>
<li><strong>B (비합리적 신념, Belief)</strong> : "나는 무능한 사람이다", "다시는 직장을 구할 수 없을 것이다"라는 비합리적 신념을 갖게 되었다.</li>
<li><strong>C (결과, Consequence)</strong> : 심한 우울감, 자존감 저하, 사회적 위축, 구직활동 포기 등의 부적응적 행동이 나타났다.</li>
<li><strong>D (논박, Disputing)</strong> : "해고가 당신의 무능을 의미하는가?", "구조조정은 개인의 능력과 무관한 경우가 많지 않은가?" 등으로 비합리적 신념을 논박한다.</li>
<li><strong>E (효과, Effect)</strong> : 논박을 통해 합리적 신념("해고는 나의 가치와 무관하다", "새로운 기회를 찾을 수 있다")으로 전환되어 구직활동을 재개하고 자신감을 회복한다.</li>
</ol>`},{num:132,category:`counseling`,title:`진로시간전망 검사의 개념과 구성요소를 설명하시오.`,frequency:`25-1, 22-1, 19-2`,keyword:`진로시간전망 검사`,answer:`<p><strong>개념:</strong> 진로시간전망(Career Time Perspective)은 개인이 과거, 현재, 미래에 걸쳐 자신의 진로를 어떻게 인식하고 계획하는지를 측정하는 검사이다. 시간에 대한 관점이 진로 의사결정에 미치는 영향을 평가한다.</p>
<h4>구성요소</h4>
<ol>
<li><strong>연속성</strong> : 과거, 현재, 미래의 진로 경험이 연속적으로 연결되어 있다고 인식하는 정도</li>
<li><strong>방향성</strong> : 미래의 진로 목표를 향해 나아가고 있다는 방향 감각의 정도</li>
<li><strong>통합성</strong> : 과거 경험을 현재와 미래에 통합하여 활용할 수 있다고 느끼는 정도</li>
<li><strong>분화성</strong> : 미래의 진로를 구체적이고 세밀하게 구분하여 계획할 수 있는 정도</li>
</ol>`},{num:133,category:`counseling`,title:`진로시간전망에서 과거, 현재, 미래 차원의 의미를 각각 설명하시오.`,frequency:`19-3`,keyword:`진로시간전망 시간차원`,answer:`<ol>
<li><strong>과거 차원</strong> : 개인의 과거 진로 경험, 성공과 실패 경험, 의사결정 이력 등이 현재의 진로 태도에 미치는 영향을 의미한다. 과거 경험을 긍정적으로 통합하면 현재 진로 결정에 도움이 된다.</li>
<li><strong>현재 차원</strong> : 현재 수행하고 있는 역할, 활동, 관계 등이 진로 발달에 미치는 영향을 의미한다. 현재에 충실하면서도 미래를 준비하는 균형이 중요하다.</li>
<li><strong>미래 차원</strong> : 미래의 진로 목표, 계획, 기대, 희망 등을 의미한다. 미래에 대한 긍정적이고 현실적인 전망을 가질수록 진로 발달에 도움이 된다.</li>
</ol>`},{num:136,category:`counseling`,title:`흥미 사정(interest assessment)에 사용되는 기법 4가지를 쓰고 설명하시오.`,frequency:`21-1, 19-2`,keyword:`흥미 사정 기법`,answer:`<ol>
<li><strong>표준화된 흥미 검사</strong> : 스트롱 흥미검사, 홀랜드 자기탐색검사 등 표준화된 검사 도구를 사용하여 객관적으로 흥미를 측정하는 방법이다.</li>
<li><strong>직업카드분류</strong> : 다양한 직업이 적힌 카드를 분류하게 하여 내담자의 흥미, 가치관, 선호를 탐색하는 비공식적 방법이다.</li>
<li><strong>흥미 목록 작성</strong> : 내담자가 좋아하는 활동, 과목, 취미 등을 자유롭게 목록으로 작성하게 하여 흥미 패턴을 파악하는 방법이다.</li>
<li><strong>표현된 흥미(expressed interest) 면접</strong> : 면담을 통해 내담자가 직접 표현하는 흥미를 파악하는 방법이다. 내담자가 "나는 ~에 관심이 있다"고 직접 말한 것을 기록한다.</li>
</ol>`},{num:143,category:`counseling`,title:`직무 스트레스와 관련된 A유형과 B유형 행동양식을 비교 설명하시오.`,frequency:`22-2, 20-1`,keyword:`직무스트레스 A/B 유형`,answer:`<table>
<tr><th>구분</th><th>A유형</th><th>B유형</th></tr>
<tr><td><strong>특징</strong></td><td>시간에 쫓기는 느낌, 경쟁적, 공격적, 성취 지향적, 조급함</td><td>느긋함, 여유로움, 비경쟁적, 인내심이 강함</td></tr>
<tr><td><strong>스트레스</strong></td><td>스트레스에 취약하고 관상동맥 질환 등 건강 위험이 높다</td><td>스트레스에 비교적 강하고 건강 위험이 낮다</td></tr>
<tr><td><strong>업무 태도</strong></td><td>한 번에 여러 일을 처리하려 하고, 마감에 예민하다</td><td>일을 순서대로 처리하며, 시간 압박에 덜 민감하다</td></tr>
<tr><td><strong>대인관계</strong></td><td>타인의 느린 속도에 짜증을 느끼고 직접적이다</td><td>타인과의 관계에서 편안하고 수용적이다</td></tr>
</table>`},{num:144,category:`counseling`,title:`체계적 둔감화(systematic desensitization)의 절차 3단계를 쓰고 설명하시오.`,frequency:`24-2, 21-3, 19-1`,keyword:`체계적 둔감화 절차`,answer:`<p><strong>개념:</strong> 울프(Wolpe)가 개발한 행동치료 기법으로, 불안을 유발하는 자극에 점진적으로 노출시키면서 이완 반응을 연합시켜 불안을 감소시키는 방법이다.</p>
<ol>
<li><strong>1단계: 이완훈련</strong> — 내담자에게 근육 이완법(점진적 근육이완법)을 훈련시켜 불안과 양립할 수 없는 이완 상태를 유도한다.</li>
<li><strong>2단계: 불안 위계 목록 작성</strong> — 불안을 유발하는 장면을 가장 약한 것부터 가장 강한 것까지 순서대로 목록을 작성한다(보통 10~15개).</li>
<li><strong>3단계: 둔감화 실시</strong> — 이완 상태에서 불안 위계 목록의 가장 약한 장면부터 상상하게 하여, 불안 없이 상상할 수 있으면 다음 단계로 진행한다. 모든 장면에 대해 불안이 사라질 때까지 반복한다.</li>
</ol>`},{num:145,category:`counseling`,title:`상담에서 언어적 표현과 비언어적 표현을 각각 3가지씩 쓰시오.`,frequency:`21-1, 19-3`,keyword:`언어적/비언어적 표현`,answer:`<h4>언어적 표현</h4>
<ol>
<li><strong>질문</strong> : 내담자에게 개방형 또는 폐쇄형 질문을 통해 정보를 수집하고 탐색을 촉진하는 표현</li>
<li><strong>반영</strong> : 내담자의 말을 재진술하거나 감정을 반영하여 이해하고 있음을 전달하는 표현</li>
<li><strong>해석</strong> : 내담자의 행동이나 감정의 의미를 상담자가 설명하여 통찰을 돕는 표현</li>
</ol>
<h4>비언어적 표현</h4>
<ol>
<li><strong>눈 맞춤(시선 접촉)</strong> : 적절한 눈 맞춤을 통해 관심과 존중을 전달한다.</li>
<li><strong>고개 끄덕임</strong> : 내담자의 말에 동의하거나 경청하고 있음을 나타내는 동작이다.</li>
<li><strong>몸의 자세</strong> : 상체를 약간 앞으로 기울이는 것은 관심과 참여를 나타내고, 팔짱을 끼는 것은 방어적 태도를 나타낸다.</li>
</ol>`},{num:151,category:`counseling`,title:`구조조정 실직자 상담 시 상담자가 유의해야 할 사항 4가지를 쓰시오.`,frequency:`22-1, 19-2`,keyword:`구조조정 실직자 상담 유의사항`,answer:`<ol>
<li><strong>심리적 충격 인정</strong> : 실직으로 인한 분노, 상실감, 우울감 등의 심리적 충격을 충분히 인정하고 공감해야 한다.</li>
<li><strong>자존감 회복 지원</strong> : 해고가 개인의 능력 부족이 아니라 조직 차원의 결정임을 인식시켜 자존감 회복을 돕는다.</li>
<li><strong>구체적 재취업 정보 제공</strong> : 구직 방법, 이력서 작성법, 면접 기술 등 실질적인 재취업 정보와 기술을 제공한다.</li>
<li><strong>경제적·사회적 자원 연계</strong> : 실업급여, 직업훈련, 취업지원 프로그램 등 활용 가능한 사회적 자원을 안내한다.</li>
</ol>`},{num:157,category:`counseling`,title:`직업상담의 일반적인 과정 5단계를 순서대로 쓰고 설명하시오.`,frequency:`20-4, 19-1`,keyword:`직업상담 5단계`,answer:`<ol>
<li><strong>관계형성 단계</strong> : 상담자와 내담자 간 신뢰관계(라포)를 형성하고, 상담의 목적과 구조를 설명하는 단계이다.</li>
<li><strong>진단 및 사정 단계</strong> : 심리검사, 면접 등을 통해 내담자의 흥미, 적성, 가치관 등을 파악하고 문제를 진단하는 단계이다.</li>
<li><strong>목표설정 단계</strong> : 상담의 구체적인 목표를 설정하고 내담자와 합의하는 단계이다.</li>
<li><strong>개입(실행) 단계</strong> : 설정된 목표를 달성하기 위해 다양한 상담 기법을 적용하여 문제를 해결하는 단계이다.</li>
<li><strong>종결 및 추수지도 단계</strong> : 상담 목표 달성 여부를 평가하고 상담을 종결하며, 사후관리를 실시하는 단계이다.</li>
</ol>`},{num:161,category:`counseling`,title:`가치 사정(value assessment)의 방법 3가지를 쓰고 설명하시오.`,frequency:`21-2, 19-1`,keyword:`가치 사정 방법`,answer:`<ol>
<li><strong>가치 목록(value inventory)</strong> : 직업가치, 생활가치 등을 체계적으로 나열한 목록에서 자신에게 중요한 가치를 선택하고 순위를 매기는 방법이다.</li>
<li><strong>가치카드분류</strong> : 다양한 가치가 적힌 카드를 "매우 중요", "중요", "중요하지 않음"으로 분류하여 자신의 가치관을 탐색하는 방법이다.</li>
<li><strong>가치 경매</strong> : 제한된 가상 화폐로 다양한 가치에 입찰하게 하여 내담자가 가장 중요하게 여기는 가치를 파악하는 방법이다.</li>
</ol>`},{num:162,category:`counseling`,title:`REBT에서 엘리스가 제시한 3가지 당위성(비합리적 신념)을 쓰고 설명하시오.`,frequency:`22-2, 20-4`,keyword:`REBT 3가지 당위성(must)`,answer:`<ol>
<li><strong>자기 자신에 대한 당위성</strong> : "나는 반드시 잘해야 하며, 그렇지 못하면 나는 무가치한 존재이다."라는 신념. 자기비하와 우울을 초래한다.</li>
<li><strong>타인에 대한 당위성</strong> : "다른 사람은 반드시 나를 공정하게 대해야 하며, 그렇지 않으면 그들은 나쁜 사람이다."라는 신념. 분노와 적대감을 초래한다.</li>
<li><strong>세상(환경)에 대한 당위성</strong> : "세상은 반드시 내가 원하는 대로 되어야 하며, 그렇지 않으면 끔찍한 일이다."라는 신념. 좌절감과 자기연민을 초래한다.</li>
</ol>`},{num:165,category:`counseling`,title:`윌리엄슨의 특성-요인 상담의 과정(절차) 6단계를 쓰시오.`,frequency:`25-2, 23-1, 22-1`,keyword:`윌리엄슨 특성요인 상담과정`,answer:`<ol>
<li><strong>분석</strong> : 내담자에 관한 객관적인 자료를 수집하는 단계(심리검사, 학업성적, 이력서 등)</li>
<li><strong>종합</strong> : 수집된 자료를 정리하여 내담자의 특성, 강점, 약점 등을 종합적으로 파악하는 단계</li>
<li><strong>진단</strong> : 종합된 자료를 바탕으로 내담자의 문제 원인을 진단하는 단계</li>
<li><strong>예언(예측)</strong> : 진단 결과에 따라 내담자의 성공 가능성을 예측하는 단계</li>
<li><strong>상담(처치)</strong> : 내담자와 상담자가 함께 문제를 해결하기 위한 대안을 탐색하고 실행하는 단계</li>
<li><strong>추수지도</strong> : 상담 이후에도 내담자의 적응 상태를 확인하고 필요시 추가 상담을 제공하는 단계</li>
</ol>`},{num:167,category:`counseling`,title:`직업적응이론(TWA)에서 사용하는 검사도구 3가지를 쓰고 설명하시오.`,frequency:`21-3, 19-2`,keyword:`TWA 검사도구`,answer:`<ol>
<li><strong>MIQ(미네소타 중요도 질문지, Minnesota Importance Questionnaire)</strong> : 직업 관련 욕구(needs)와 가치를 측정하는 도구로, 개인이 직업에서 얼마나 중요하게 여기는 욕구를 파악한다.</li>
<li><strong>MSQ(미네소타 만족도 질문지, Minnesota Satisfaction Questionnaire)</strong> : 현재 직업에 대한 만족도를 측정하는 도구로, 내적 만족(성취감, 자율성)과 외적 만족(임금, 근무환경) 등을 평가한다.</li>
<li><strong>MJDQ(미네소타 직무기술 질문지, Minnesota Job Description Questionnaire)</strong> : 직무환경이 제공하는 강화인(reinforcer)의 수준을 측정하는 도구로, 직무 환경의 특성을 파악한다.</li>
</ol>`},{num:169,category:`counseling`,title:`실존주의 상담에서 제시하는 양식세계(modes of being) 3가지를 쓰고 설명하시오.`,frequency:`22-2, 20-3`,keyword:`실존주의 양식세계`,answer:`<ol>
<li><strong>주위세계(Umwelt, 환경세계)</strong> : 생물학적 세계로, 자연환경과 인간의 생물학적 욕구 및 본능과 관련된 세계이다. 인간이 자연환경 속에서 생물학적으로 적응하는 차원을 말한다.</li>
<li><strong>공존세계(Mitwelt, 대인관계 세계)</strong> : 다른 사람들과의 관계 속에서 경험하는 세계이다. 사회적 관계, 타인과의 상호작용, 공동체 의식 등 대인관계 차원을 말한다.</li>
<li><strong>자기세계(Eigenwelt, 자아세계)</strong> : 자기 자신과의 관계에서 경험하는 세계이다. 자기인식, 자기이해, 내면적 경험 등 개인의 주관적·심리적 차원을 말한다.</li>
</ol>`},{num:170,category:`counseling`,title:`로(Roe)의 직업분류에서 수직적 차원(직업의 수준) 6단계를 쓰시오.`,frequency:`24-2, 21-1, 19-3`,keyword:`로(Roe) 수직차원 직업수준`,answer:`<ol>
<li><strong>전문·관리직 (1수준, 독립적 책임)</strong> : 최고 수준의 전문적 지식과 독립적 판단이 요구되는 직업</li>
<li><strong>전문·관리직 (2수준)</strong> : 전문적 훈련은 받았으나 독립적 책임보다는 중간 수준의 전문직</li>
<li><strong>준전문·소사업가 (3수준)</strong> : 일정 수준의 교육과 훈련을 받은 준전문직</li>
<li><strong>숙련직 (4수준)</strong> : 체계적인 직업훈련을 이수한 숙련 기능직</li>
<li><strong>반숙련직 (5수준)</strong> : 비교적 짧은 훈련기간이 필요한 반숙련 직업</li>
<li><strong>비숙련직 (6수준)</strong> : 특별한 교육이나 훈련이 필요하지 않은 단순 노무직</li>
</ol>`},{num:174,category:`counseling`,title:`교류분석(TA)의 생활자세 4가지를 쓰고 설명하시오.`,frequency:`22-1, 20-2`,keyword:`교류분석 생활자세(life position)`,answer:`<ol>
<li><strong>I'm OK - You're OK (자기긍정-타인긍정)</strong> : 가장 건강한 자세로, 자신과 타인을 모두 존중하고 긍정적으로 바라본다. 협력적이고 건설적인 대인관계를 맺는다.</li>
<li><strong>I'm OK - You're Not OK (자기긍정-타인부정)</strong> : 자신은 괜찮지만 타인에게 문제가 있다고 보는 자세이다. 타인을 비난하거나 지배하려는 경향이 있다.</li>
<li><strong>I'm Not OK - You're OK (자기부정-타인긍정)</strong> : 자신은 부족하고 타인은 괜찮다고 보는 자세이다. 열등감, 위축감, 우울감을 느끼기 쉽다.</li>
<li><strong>I'm Not OK - You're Not OK (자기부정-타인부정)</strong> : 자신과 타인 모두 부정적으로 바라보는 가장 비건강한 자세이다. 무기력, 절망감, 사회적 고립으로 이어질 수 있다.</li>
</ol>`},{num:106,category:`psychology`,title:`직업상담을 위한 심리검사 선택 시 고려해야 할 사항 5가지를 쓰시오.`,frequency:`22-1, 20-1`,keyword:`심리검사 선택 고려사항`,answer:`<ol>
<li><strong>검사의 타당도와 신뢰도</strong> : 측정하고자 하는 것을 정확히 측정하는지(타당도), 일관된 결과를 제공하는지(신뢰도)를 확인해야 한다.</li>
<li><strong>검사의 목적 부합성</strong> : 상담 목적(진로 탐색, 적성 파악, 흥미 확인 등)에 부합하는 검사를 선택해야 한다.</li>
<li><strong>내담자의 특성</strong> : 내담자의 연령, 교육 수준, 문화적 배경 등을 고려하여 적절한 검사를 선택해야 한다.</li>
<li><strong>검사의 실용성</strong> : 실시 시간, 비용, 채점 방법의 용이성 등 실용적 측면을 고려해야 한다.</li>
<li><strong>규준의 적절성</strong> : 검사의 규준이 내담자가 속한 집단에 적합한지 확인해야 한다.</li>
</ol>`},{num:107,category:`psychology`,title:`질적(비표준화) 측정도구 3가지를 쓰고 설명하시오.`,frequency:`24-3, 21-3, 19-1`,keyword:`질적 측정도구`,answer:`<ol>
<li><strong>직업카드분류</strong> : 다양한 직업이 적힌 카드를 선호 정도에 따라 분류하게 하여 내담자의 흥미, 가치관, 직업 선호를 파악하는 도구이다.</li>
<li><strong>생애진로사정</strong> : 내담자의 과거, 현재, 미래의 진로 경험과 계획을 총체적으로 탐색하여 진로 발달 상태를 평가하는 도구이다.</li>
<li><strong>진로 자서전</strong> : 내담자가 자신의 진로 발달 과정을 자유롭게 기술하게 하여 진로 경험, 의사결정 패턴, 가치관 등을 파악하는 도구이다.</li>
</ol>`},{num:109,category:`psychology`,title:`스피어만(Spearman)의 지능 2요인설을 설명하시오.`,frequency:`22-1, 20-3`,keyword:`스피어만 지능 2요인설`,answer:`<p>스피어만은 지능이 <strong>일반요인(g요인)</strong>과 <strong>특수요인(s요인)</strong>의 2가지 요인으로 구성된다고 주장했다.</p>
<ol>
<li><strong>일반요인(g요인, General Factor)</strong> : 모든 지적 활동의 기초가 되는 공통 요인으로, 모든 지능검사 수행에 영향을 미친다. 추상적 사고, 추론, 문제해결 등의 능력이 포함된다. 유전적 요인에 크게 영향을 받는다.</li>
<li><strong>특수요인(s요인, Specific Factor)</strong> : 특정 과제나 영역에서만 작용하는 요인으로, 수학, 언어, 공간지각 등 개별 과제마다 다른 특수한 능력이다. 교육이나 경험에 의해 발달할 수 있다.</li>
</ol>
<p><em>스피어만은 g요인이 더 중요하다고 보았으며, 이를 '정신 에너지'에 비유했다.</em></p>`},{num:111,category:`psychology`,title:`검사-재검사 신뢰도의 단점(한계) 4가지를 쓰시오.`,frequency:`25-3, 22-1, 20-2, 18-3`,keyword:`검사-재검사 신뢰도 단점`,answer:`<ol>
<li><strong>연습효과(학습효과)</strong> : 동일한 검사를 두 번 실시하므로 두 번째 검사에서 점수가 높아지는 연습효과가 발생할 수 있다.</li>
<li><strong>기억효과</strong> : 첫 번째 검사의 내용을 기억하여 두 번째 검사에서 동일하게 응답할 수 있어 실제 신뢰도보다 높게 추정될 수 있다.</li>
<li><strong>시간 간격의 문제</strong> : 두 검사 간 시간 간격이 너무 짧으면 연습/기억효과가 크고, 너무 길면 실제 특성의 변화로 신뢰도가 낮아질 수 있다.</li>
<li><strong>반응 경향의 변화</strong> : 검사를 두 번 실시하는 동안 수검자의 동기, 건강, 정서 상태 등이 변할 수 있어 정확한 추정이 어렵다.</li>
</ol>`},{num:116,category:`psychology`,title:`GATB(일반적성검사)의 적성(요인) 9가지를 쓰시오.`,frequency:`25-1, 23-2, 22-1, 21-2`,keyword:`GATB 9가지 적성요인`,answer:`<ol>
<li><strong>G (일반학습능력)</strong> : 일반적인 학습 및 이해 능력</li>
<li><strong>V (언어능력)</strong> : 언어의 의미를 이해하고 활용하는 능력</li>
<li><strong>N (수리능력)</strong> : 산술 연산을 빠르고 정확하게 수행하는 능력</li>
<li><strong>S (공간지각능력)</strong> : 평면이나 입체 도형의 관계를 이해하는 능력</li>
<li><strong>P (형태지각능력)</strong> : 대상의 세부적인 형태를 지각하고 비교하는 능력</li>
<li><strong>Q (사무지각능력)</strong> : 문자, 숫자 등의 세부적 차이를 빠르고 정확하게 지각하는 능력</li>
<li><strong>K (운동조정능력)</strong> : 눈과 손의 협응으로 빠르고 정확하게 동작하는 능력</li>
<li><strong>F (손가락 재주)</strong> : 손가락으로 작은 물체를 빠르고 정확하게 조작하는 능력</li>
<li><strong>M (손 재주)</strong> : 손과 팔을 사용하여 물체를 기민하게 다루는 능력</li>
</ol>`},{num:122,category:`psychology`,title:`타당도의 종류를 쓰고 각각 설명하시오 (빈칸 채우기).`,frequency:`25-1, 22-2, 21-1`,keyword:`타당도 종류 종합`,answer:`<ol>
<li><strong>내용타당도</strong> : 검사 내용이 측정하고자 하는 영역을 얼마나 잘 대표하는지를 나타내는 타당도이다. 전문가의 논리적 판단에 의해 평가된다.</li>
<li><strong>구성(구인)타당도</strong> : 검사가 이론적 개념(구인)을 얼마나 잘 측정하는지를 나타내는 타당도이다. 수렴타당도, 변별타당도, 요인분석 등으로 검증한다.</li>
<li><strong>준거타당도</strong> : 검사 결과가 외적 준거와 얼마나 관련되는지를 나타내는 타당도이다. 예언타당도(미래 준거)와 동시타당도(현재 준거)로 구분된다.</li>
<li><strong>안면(액면)타당도</strong> : 검사가 겉보기에 측정하려는 것을 측정하는 것 같은지에 대한 주관적 판단이다. 통계적 타당도가 아닌 외관상 타당도이다.</li>
</ol>`},{num:129,category:`psychology`,title:`준거장면(criterion scene)에서 검사를 분류하는 방법 4가지를 쓰시오.`,frequency:`21-3, 19-2`,keyword:`준거장면 검사 분류`,answer:`<ol>
<li><strong>현재 장면 검사(동시적 준거)</strong> : 검사 실시 시점에서의 행동이나 수행을 기준으로 분류하는 방법이다. 현재의 직무 수행 능력을 평가한다.</li>
<li><strong>미래 장면 검사(예측적 준거)</strong> : 미래의 행동이나 수행을 예측하기 위한 검사로 분류하는 방법이다. 입사 후 직무 수행 능력을 예측한다.</li>
<li><strong>지필(지필검사) 장면</strong> : 종이와 연필을 사용하여 실시하는 검사로 분류하는 방법이다. 필기시험, 객관식 검사 등이 해당된다.</li>
<li><strong>실제 장면(작업표본) 검사</strong> : 실제 작업 상황이나 유사 상황에서 수행을 직접 관찰하여 평가하는 검사이다.</li>
</ol>`},{num:130,category:`psychology`,title:`흥미 사정(interest assessment)의 목적 4가지를 쓰시오.`,frequency:`21-2, 19-1`,keyword:`흥미 사정 목적`,answer:`<ol>
<li><strong>자기이해 촉진</strong> : 내담자가 자신의 흥미 유형과 패턴을 이해하여 자기인식을 높이는 데 도움을 준다.</li>
<li><strong>진로 대안 탐색</strong> : 흥미와 관련된 다양한 직업 대안을 탐색하고 발견하도록 돕는다.</li>
<li><strong>진로 의사결정 지원</strong> : 흥미 정보를 활용하여 합리적인 진로 의사결정을 내릴 수 있도록 지원한다.</li>
<li><strong>진로 변경 시 참고 자료 제공</strong> : 직업 전환이나 진로 변경을 고려할 때 흥미 정보를 참고자료로 활용할 수 있다.</li>
</ol>`},{num:137,category:`psychology`,title:`성격 5요인 모델(Big Five)의 요인을 쓰고 설명하시오.`,frequency:`25-2, 24-1, 23-1, 21-3, 20-2`,keyword:`성격 5요인(Big Five/OCEAN)`,answer:`<ol>
<li><strong>개방성(Openness)</strong> : 새로운 경험, 아이디어, 가치에 대해 열린 태도를 가지는 정도. 상상력이 풍부하고 창의적이며 지적 호기심이 강하다.</li>
<li><strong>성실성(Conscientiousness)</strong> : 목표 지향적이고 조직적이며 자기통제력이 높은 정도. 책임감이 강하고 계획적이며 규칙을 잘 따른다.</li>
<li><strong>외향성(Extraversion)</strong> : 사교적이고 활동적이며 타인과의 상호작용을 즐기는 정도. 에너지가 넘치고 긍정적 정서를 잘 표현한다.</li>
<li><strong>우호성(Agreeableness)</strong> : 타인에게 협조적이고 친절하며 신뢰를 주는 정도. 이타적이고 배려심이 많으며 갈등을 회피하는 경향이 있다.</li>
<li><strong>신경증(Neuroticism)</strong> : 정서적으로 불안정하고 스트레스에 취약한 정도. 불안, 우울, 분노 등 부정적 정서를 경험하기 쉽다.</li>
</ol>`},{num:138,category:`psychology`,title:`성격 5요인 중 성실성(Conscientiousness)과 직업 성과의 관계를 설명하시오.`,frequency:`20-4`,keyword:`성격 5요인 성실성과 직무성과`,answer:`<p>성격 5요인 중 <strong>성실성</strong>은 다양한 직업과 직무에서 직무 성과를 가장 일관되게 예측하는 요인으로 알려져 있다.</p>
<ol>
<li><strong>성실성이 높은 사람의 특징</strong> : 목표 지향적, 조직적, 근면 성실, 자기통제력이 높고 계획적으로 일을 수행한다.</li>
<li><strong>직무 성과와의 관계</strong> : 성실성은 모든 직업군에서 직무 성과와 정적(+) 상관을 보이며, 특히 관리직, 영업직, 전문직에서 높은 예측력을 가진다.</li>
<li><strong>교육 및 훈련 성과</strong> : 성실한 사람은 교육훈련에 더 적극적으로 참여하고, 학습 성과도 높은 경향이 있다.</li>
<li><strong>조직시민행동</strong> : 성실한 사람은 자신의 직무 범위를 넘어서 조직에 도움이 되는 자발적 행동을 더 많이 한다.</li>
</ol>`},{num:139,category:`psychology`,title:`심리검사 결과에서 개인 간 차이가 발생하는 원인 4가지를 쓰시오.`,frequency:`21-2, 19-3`,keyword:`검사 결과 차이 원인`,answer:`<ol>
<li><strong>실제 특성의 차이</strong> : 개인마다 능력, 흥미, 성격 등 실제 특성이 다르기 때문에 검사 결과에 차이가 나타난다.</li>
<li><strong>검사 상황(환경) 요인</strong> : 검사 장소의 소음, 온도, 조명 등 물리적 환경이 검사 수행에 영향을 미칠 수 있다.</li>
<li><strong>수검자 상태 요인</strong> : 검사 당시 수검자의 건강, 피로, 동기, 불안 수준 등 심리적·신체적 상태가 영향을 미친다.</li>
<li><strong>검사 도구 자체의 오차</strong> : 문항의 모호성, 채점 오류, 검사 도구의 측정 오차 등이 결과 차이에 영향을 줄 수 있다.</li>
</ol>`},{num:141,category:`psychology`,title:`스트롱(Strong) 흥미검사의 척도 구성을 설명하시오.`,frequency:`25-3, 22-2, 21-1, 18-2`,keyword:`스트롱 흥미검사 척도`,answer:`<ol>
<li><strong>일반직업주제(GOT, General Occupational Themes)</strong> : 홀랜드의 RIASEC 6유형에 기반한 척도로, 수검자의 전반적인 흥미 유형을 파악한다.</li>
<li><strong>기본흥미척도(BIS, Basic Interest Scales)</strong> : 30개의 세부 영역으로 구성되어 특정 활동이나 주제에 대한 흥미를 측정한다. GOT보다 더 구체적인 흥미 정보를 제공한다.</li>
<li><strong>개인스타일척도(PSS, Personal Style Scales)</strong> : 업무 방식, 학습 환경, 리더십 스타일, 위험 감수 등 개인의 선호 스타일을 측정한다.</li>
<li><strong>직업척도(OS, Occupational Scales)</strong> : 특정 직업에 종사하는 사람들의 흥미 패턴과 수검자의 흥미 패턴을 비교하여 직업별 유사성을 나타낸다.</li>
</ol>`},{num:142,category:`psychology`,title:`동시타당도와 예측타당도를 비교하여 설명하시오.`,frequency:`22-1, 20-3`,keyword:`동시타당도 vs 예측타당도`,answer:`<table>
<tr><th>구분</th><th>동시타당도</th><th>예측타당도</th></tr>
<tr><td><strong>개념</strong></td><td>검사 점수와 현재 시점의 준거 간 상관관계</td><td>검사 점수와 미래 시점의 준거 간 상관관계</td></tr>
<tr><td><strong>시간</strong></td><td>검사와 준거를 동시에 측정</td><td>검사 후 일정 기간 경과 후 준거 측정</td></tr>
<tr><td><strong>목적</strong></td><td>현재 상태의 진단 및 분류</td><td>미래 행동이나 수행의 예측</td></tr>
<tr><td><strong>예시</strong></td><td>새 우울검사와 기존 우울검사를 동시에 실시하여 상관 비교</td><td>입사 적성검사 점수와 1년 후 업무성과 간 상관 비교</td></tr>
</table>`},{num:146,category:`psychology`,title:`성능검사(최대수행검사)와 성향검사(습관적 수행검사)를 비교 설명하시오.`,frequency:`21-3, 19-2`,keyword:`성능검사 vs 성향검사`,answer:`<table>
<tr><th>구분</th><th>성능검사(최대수행검사)</th><th>성향검사(습관적 수행검사)</th></tr>
<tr><td><strong>목적</strong></td><td>수검자가 최대한 발휘할 수 있는 능력을 측정</td><td>수검자의 일상적인 행동 특성을 측정</td></tr>
<tr><td><strong>응답 방식</strong></td><td>정답이 있으며, 맞히기 위해 최선을 다해야 함</td><td>정답이 없으며, 솔직하게 응답해야 함</td></tr>
<tr><td><strong>측정 대상</strong></td><td>지능, 적성, 성취도 등 인지적 능력</td><td>성격, 흥미, 가치관, 태도 등 정의적 특성</td></tr>
<tr><td><strong>예시</strong></td><td>지능검사, 적성검사, 학력검사</td><td>성격검사, 흥미검사, 가치관검사</td></tr>
</table>`},{num:147,category:`psychology`,title:`흥미검사의 종류를 3가지 쓰고 설명하시오.`,frequency:`21-1, 19-3`,keyword:`흥미검사 종류`,answer:`<ol>
<li><strong>스트롱 직업흥미검사(SII)</strong> : 홀랜드의 RIASEC 모형을 기반으로 일반직업주제, 기본흥미, 직업척도, 개인스타일 등을 측정하는 가장 널리 사용되는 흥미검사이다.</li>
<li><strong>자기탐색검사(SDS)</strong> : 홀랜드가 직접 개발한 검사로, 수검자가 스스로 검사를 실시하고 채점할 수 있다. RIASEC 6유형 중 자신의 유형을 찾는다.</li>
<li><strong>쿠더 흥미검사(Kuder Interest Inventory)</strong> : 강제선택 형식으로 활동에 대한 선호를 측정하며, 직업군별 흥미를 파악한다. 10가지 직업영역에 대한 흥미를 측정한다.</li>
</ol>`},{num:152,category:`psychology`,title:`Z점수(표준점수) 계산 문제를 풀이하시오.`,frequency:`21-2, 19-1`,keyword:`Z점수 계산`,answer:`<h4>공식</h4>
<p><strong>Z = (X - M) / SD</strong></p>
<p>X : 원점수, M : 평균, SD : 표준편차</p>
<h4>풀이 예시</h4>
<p>조건: 평균(M) = 60, 표준편차(SD) = 10, 원점수(X) = 80</p>
<p>Z = (80 - 60) / 10 = <strong>2.0</strong></p>
<p><em>Z점수가 2.0이라는 것은 해당 점수가 평균보다 표준편차 2배만큼 높다는 것을 의미한다. 정규분포에서 상위 약 2.28%에 해당한다.</em></p>
<h4>T점수 변환</h4>
<p><strong>T = 50 + 10Z</strong> = 50 + 10(2.0) = <strong>70</strong></p>`},{num:158,category:`psychology`,title:`역량검사(power test)와 속도검사(speed test)를 비교 설명하시오.`,frequency:`21-1, 19-2`,keyword:`역량검사 vs 속도검사`,answer:`<table>
<tr><th>구분</th><th>역량검사(power test)</th><th>속도검사(speed test)</th></tr>
<tr><td><strong>시간 제한</strong></td><td>충분한 시간이 주어진다 (시간 제한이 거의 없음)</td><td>엄격한 시간 제한이 있다</td></tr>
<tr><td><strong>문항 난이도</strong></td><td>쉬운 문항에서 어려운 문항 순으로 배열 (난이도 차이가 큼)</td><td>비슷한 난이도의 문항으로 구성 (난이도 차이가 적음)</td></tr>
<tr><td><strong>측정 대상</strong></td><td>수검자가 최대한 발휘할 수 있는 능력 수준을 측정</td><td>제한 시간 내에 얼마나 빠르고 정확하게 풀 수 있는지를 측정</td></tr>
<tr><td><strong>예시</strong></td><td>지능검사, 적성검사 (어려운 문항에서 변별)</td><td>사무능력검사, 타자속도검사 (속도에서 변별)</td></tr>
</table>`},{num:172,category:`psychology`,title:`준거장면(criterion scene)에서 검사를 분류하는 4가지 방법을 쓰시오.`,frequency:`20-4, 19-3`,keyword:`준거장면 검사 분류 4가지`,answer:`<ol>
<li><strong>지필장면(Paper-and-Pencil Tests)</strong> : 종이와 펜을 사용하여 실시하는 검사. 객관식, 주관식 형태의 필기시험이 해당된다.</li>
<li><strong>구술장면(Oral Tests)</strong> : 구두로 질문하고 답하는 면접이나 구술시험 형태의 검사이다.</li>
<li><strong>실험장면(Simulation Tests)</strong> : 실제 직무 상황을 모의로 재현하여 수행을 평가하는 검사. 역할연기, 인바스켓 등이 해당된다.</li>
<li><strong>실제장면(Work Sample Tests)</strong> : 실제 직무 현장에서 직접 수행하게 하여 평가하는 검사. 작업표본검사가 대표적이다.</li>
</ol>`},{num:173,category:`psychology`,title:`심리검사에서 검사자 변인과 수검자 변인을 각각 3가지씩 쓰시오.`,frequency:`22-1, 19-3`,keyword:`검사자/수검자 변인`,answer:`<h4>검사자 변인</h4>
<ol>
<li><strong>검사자의 태도와 행동</strong> : 검사자의 친절함, 엄격함, 격려 등이 수검자의 반응에 영향을 미친다.</li>
<li><strong>검사 실시 절차의 차이</strong> : 검사 지시문의 전달 방식, 시간 관리 등 절차상의 차이가 결과에 영향을 줄 수 있다.</li>
<li><strong>검사자의 기대효과</strong> : 검사자가 수검자에 대해 가진 기대나 편견이 무의식적으로 검사 결과에 영향을 미칠 수 있다.</li>
</ol>
<h4>수검자 변인</h4>
<ol>
<li><strong>검사 불안</strong> : 검사 상황에 대한 불안이 실제 능력보다 낮은 점수를 받게 할 수 있다.</li>
<li><strong>반응 경향(세트)</strong> : 사회적 바람직성, 묵인 반응 경향 등 특정한 방향으로 응답하려는 경향이 있다.</li>
<li><strong>동기 수준</strong> : 수검자의 검사 참여 동기에 따라 성실하게 응답하는 정도가 달라진다.</li>
</ol>`},{num:108,category:`jobinfo`,title:`한국표준산업분류의 적용 원칙 3가지를 쓰고 설명하시오.`,frequency:`24-1, 22-2, 20-1`,keyword:`KSIC 산업분류 적용원칙`,answer:`<ol>
<li><strong>산출물의 특성</strong> : 생산되는 재화나 서비스의 물리적 구성, 가공 단계, 용도 등 산출물의 특성에 따라 분류한다. 가장 기본적인 분류 기준이다.</li>
<li><strong>투입물의 특성</strong> : 원재료, 생산 기술, 생산 과정 등 투입 요소의 특성에 따라 분류한다. 산출물로 분류가 어려운 경우 보조적으로 사용한다.</li>
<li><strong>생산활동의 일반적 결합형태(생산공정)</strong> : 생산활동이 어떤 방식으로 조직되고 수행되는지에 따라 분류한다. 동일한 산출물이라도 생산 방식이 다르면 다르게 분류할 수 있다.</li>
</ol>`},{num:120,category:`jobinfo`,title:`브레이필드(Brayfield)가 제시한 직업정보의 기능 4가지를 쓰시오.`,frequency:`25-1, 22-1, 21-1`,keyword:`브레이필드 직업정보 기능`,answer:`<ol>
<li><strong>정보적 기능</strong> : 직업에 대한 사실적이고 객관적인 정보를 제공하여 내담자의 직업 세계 이해를 돕는 기능이다.</li>
<li><strong>조정적 기능</strong> : 내담자가 이미 가지고 있는 직업 정보의 오류를 수정하고 올바르게 조정하는 기능이다.</li>
<li><strong>동기적(동기부여) 기능</strong> : 직업 정보를 통해 내담자의 진로 탐색과 직업 선택에 대한 동기를 유발하는 기능이다.</li>
<li><strong>강화적 기능</strong> : 내담자가 이미 내린 진로 결정에 대한 확신을 강화시켜 주는 기능이다.</li>
</ol>`},{num:121,category:`jobinfo`,title:`공공직업정보의 특성(특징) 4가지를 쓰시오.`,frequency:`25-3, 21-3, 19-1`,keyword:`공공직업정보 특성`,answer:`<ol>
<li><strong>공공성</strong> : 공공기관에서 제공하므로 특정 집단이나 기업의 이익이 아닌 공익을 위해 제공된다.</li>
<li><strong>객관성</strong> : 체계적인 조사와 분석에 기반하여 제공되므로 객관적이고 신뢰할 수 있는 정보이다.</li>
<li><strong>무료성(접근성)</strong> : 누구나 무료로 이용할 수 있으며, 접근이 용이하다.</li>
<li><strong>포괄성</strong> : 특정 직업이나 산업에 한정되지 않고, 다양한 직업과 산업에 대한 광범위한 정보를 포괄한다.</li>
</ol>`},{num:153,category:`jobinfo`,title:`미시적 고용정보와 거시적 고용정보를 각각 설명하고 예시를 드시오.`,frequency:`22-2, 20-4`,keyword:`미시적/거시적 고용정보`,answer:`<ol>
<li><strong>미시적 고용정보</strong> : 개별 기업이나 특정 직업에 관한 구체적인 정보를 말한다. 개인의 취업 의사결정에 직접적으로 활용된다.
<br/><em>예시:</em> 특정 기업의 채용 공고, 임금 수준, 근무 조건, 직무 내용, 직업별 자격 요건 등</li>
<li><strong>거시적 고용정보</strong> : 국가 경제 전체의 고용 동향과 노동시장 상황에 관한 정보를 말한다. 정책 수립이나 장기적 진로 계획에 활용된다.
<br/><em>예시:</em> 실업률, 경제활동참가율, 산업별 고용 동향, 직업별 전망, GDP 성장률 등</li>
</ol>`},{num:166,category:`jobinfo`,title:`직무기술서(job description)에 포함되는 정보 6가지를 쓰시오.`,frequency:`22-1, 20-2`,keyword:`직무기술서 포함 정보`,answer:`<ol>
<li><strong>직무명칭</strong> : 해당 직무의 공식적인 이름</li>
<li><strong>직무개요</strong> : 직무의 전반적인 내용과 목적을 간략히 기술한 것</li>
<li><strong>수행 직무(직무내용)</strong> : 실제로 수행하는 구체적인 업무 내용과 과제</li>
<li><strong>작업 조건</strong> : 근무 시간, 물리적 환경, 위험 요소 등 작업 환경에 관한 정보</li>
<li><strong>사용 장비 및 도구</strong> : 직무 수행에 필요한 기계, 장비, 도구 등의 정보</li>
<li><strong>관련 직무와의 관계</strong> : 직무 간의 수직적·수평적 관계, 보고 체계, 감독 관계 등</li>
</ol>`},{num:110,category:`labor_market`,title:`고용률 계산 문제를 풀이하시오.`,frequency:`25-3, 23-1, 21-2, 19-3, 18-1`,keyword:`고용률 계산`,answer:`<h4>공식</h4>
<p><strong>고용률 = (취업자 수 / 15세 이상 인구) × 100</strong></p>
<h4>풀이 예시</h4>
<p>조건: 15세 이상 인구 = 40,000천명, 취업자 = 24,000천명</p>
<p>고용률 = (24,000 / 40,000) × 100 = <strong>60%</strong></p>
<p><em>참고: 고용률은 경제활동참가율과 달리 비경제활동인구를 분모에 포함하므로, 실질적인 고용 상황을 더 정확히 반영한다.</em></p>`},{num:117,category:`labor_market`,title:`최저임금제의 기대효과(긍정적 효과) 4가지를 쓰시오.`,frequency:`25-2, 23-2, 22-1, 20-3, 18-2, 18-3`,keyword:`최저임금제 기대효과`,answer:`<ol>
<li><strong>저임금 근로자의 생활 안정</strong> : 최소한의 임금을 보장하여 저임금 근로자의 기본적인 생활을 보장한다.</li>
<li><strong>소득분배 개선</strong> : 임금의 하한선을 설정하여 임금 격차를 줄이고 소득분배의 형평성을 향상시킨다.</li>
<li><strong>노동생산성 향상</strong> : 적정 임금 지급으로 근로자의 근무 의욕과 동기가 높아져 생산성이 향상된다.</li>
<li><strong>경제 활성화(소비 촉진)</strong> : 저소득 근로자의 소득 증가로 소비가 증가하여 내수 경제가 활성화된다.</li>
</ol>`},{num:123,category:`labor_market`,title:`실업률 계산 문제를 풀이하시오.`,frequency:`25-3, 24-1, 23-2, 22-1, 21-3`,keyword:`실업률 계산`,answer:`<h4>공식</h4>
<p><strong>실업률 = (실업자 수 / 경제활동인구) × 100</strong></p>
<p>경제활동인구 = 취업자 + 실업자</p>
<h4>풀이 예시</h4>
<p>조건: 15세 이상 인구 = 40,000천명, 취업자 = 24,000천명, 실업자 = 1,000천명</p>
<p>경제활동인구 = 24,000 + 1,000 = 25,000천명</p>
<p>실업률 = (1,000 / 25,000) × 100 = <strong>4%</strong></p>
<p><em>경제활동참가율 = (25,000 / 40,000) × 100 = 62.5%</em></p>`},{num:124,category:`labor_market`,title:`이윤극대화 조건에서 노동수요량 계산 문제를 풀이하시오.`,frequency:`22-2, 21-1`,keyword:`이윤극대화 노동수요량`,answer:`<h4>이윤극대화 조건</h4>
<p><strong>MRP = MFC</strong> (한계수입생산 = 한계요소비용)</p>
<p>완전경쟁시장에서: <strong>VMP = W</strong> (한계생산가치 = 임금)</p>
<p>VMP = P × MP (생산물 가격 × 한계생산)</p>
<h4>풀이 예시</h4>
<p>조건: 생산함수 Q = 100L - L², 생산물 가격 P = 10, 임금 W = 200</p>
<p>MP = dQ/dL = 100 - 2L</p>
<p>VMP = P × MP = 10(100 - 2L) = 1,000 - 20L</p>
<p>이윤극대화: VMP = W → 1,000 - 20L = 200</p>
<p>20L = 800 → <strong>L = 40명</strong></p>`},{num:126,category:`labor_market`,title:`실업률, 임금근로자 비율, 경제활동참가율을 각각 계산하시오.`,frequency:`22-1, 20-4`,keyword:`고용지표 종합 계산`,answer:`<h4>주요 공식 정리</h4>
<ol>
<li><strong>실업률</strong> = (실업자 / 경제활동인구) × 100</li>
<li><strong>경제활동참가율</strong> = (경제활동인구 / 15세 이상 인구) × 100</li>
<li><strong>임금근로자 비율</strong> = (임금근로자 / 전체 취업자) × 100</li>
</ol>
<h4>풀이 예시</h4>
<p>조건: 15세이상 인구 = 40,000, 경활인구 = 25,000, 취업자 = 24,000, 실업자 = 1,000, 임금근로자 = 18,000</p>
<p>① 실업률 = (1,000/25,000) × 100 = <strong>4%</strong></p>
<p>② 경활참가율 = (25,000/40,000) × 100 = <strong>62.5%</strong></p>
<p>③ 임금근로자 비율 = (18,000/24,000) × 100 = <strong>75%</strong></p>`},{num:134,category:`labor_market`,title:`노동수요의 임금 탄력성 계산 문제를 풀이하시오.`,frequency:`23-1, 22-2`,keyword:`노동수요 탄력성 계산`,answer:`<h4>공식</h4>
<p><strong>노동수요 탄력성 (Ed) = |노동수요량 변화율 / 임금 변화율|</strong></p>
<p>= |(△L/L) / (△W/W)| = |(△L/△W) × (W/L)|</p>
<h4>풀이 예시</h4>
<p>조건: 임금 10% 인상 시 노동수요 20% 감소</p>
<p>Ed = |(-20%) / (10%)| = <strong>2</strong></p>
<h4>판정 기준</h4>
<ol>
<li>Ed > 1 : <strong>탄력적</strong> (임금변화율보다 고용변화율이 크다)</li>
<li>Ed = 1 : <strong>단위탄력적</strong></li>
<li>Ed < 1 : <strong>비탄력적</strong> (임금변화율보다 고용변화율이 작다)</li>
</ol>`},{num:135,category:`labor_market`,title:`비수요부족 실업의 유형 3가지를 쓰고 설명하시오.`,frequency:`24-2, 22-2, 20-3, 18-1`,keyword:`비수요부족 실업 유형`,answer:`<ol>
<li><strong>마찰적 실업</strong> : 근로자가 더 나은 직장을 찾기 위해 자발적으로 직장을 이동하는 과정에서 일시적으로 발생하는 실업이다. 노동시장의 정보 부족이나 탐색 시간 때문에 발생하며, 자연실업의 일부이다.</li>
<li><strong>구조적 실업</strong> : 산업 구조의 변화, 기술 혁신 등으로 특정 산업이나 지역의 노동수요와 공급 사이에 불일치가 생겨 발생하는 실업이다. 장기적이고 해결이 어렵다.</li>
<li><strong>계절적 실업</strong> : 계절에 따라 특정 산업의 노동수요가 변동하여 발생하는 실업이다. 농업, 건설업, 관광업 등에서 주로 나타난다.</li>
</ol>`},{num:140,category:`labor_market`,title:`한계생산(MP) 및 한계생산가치(VMP) 계산 문제를 풀이하시오.`,frequency:`22-1, 20-4`,keyword:`한계생산/한계생산가치 계산`,answer:`<h4>공식</h4>
<p><strong>한계생산(MP)</strong> = △Q / △L (노동 1단위 추가 시 생산량 변화)</p>
<p><strong>한계생산가치(VMP)</strong> = P × MP (생산물 가격 × 한계생산)</p>
<h4>풀이 예시</h4>
<p>조건: 노동자 수 3→4명일 때 총생산량 30→38</p>
<p>MP = (38 - 30) / (4 - 3) = <strong>8개</strong></p>
<p>생산물 가격 P = 1,000원일 때</p>
<p>VMP = 1,000 × 8 = <strong>8,000원</strong></p>
<p><em>이윤극대화 조건: VMP = W이므로, 임금이 8,000원이면 4번째 노동자까지 고용한다.</em></p>`},{num:148,category:`labor_market`,title:`생산성 임금제에서의 임금 계산 문제를 풀이하시오.`,frequency:`22-2, 19-3`,keyword:`생산성임금제 계산`,answer:`<h4>개념</h4>
<p>생산성임금제란 근로자의 생산성(노동생산성)에 연동하여 임금을 결정하는 제도이다.</p>
<h4>공식</h4>
<p><strong>임금인상률 = 노동생산성 증가율 + 물가상승률</strong></p>
<p>노동생산성 = 총생산량 / 근로자 수</p>
<h4>풀이 예시</h4>
<p>조건: 전년도 노동생산성 = 100, 금년도 노동생산성 = 110, 물가상승률 = 3%</p>
<p>노동생산성 증가율 = (110-100)/100 × 100 = <strong>10%</strong></p>
<p>적정 임금인상률 = 10% + 3% = <strong>13%</strong></p>`},{num:149,category:`labor_market`,title:`임금의 하방경직성의 의미와 발생 원인 5가지를 쓰시오.`,frequency:`24-3, 23-2, 22-1, 18-2`,keyword:`임금 하방경직성 원인`,answer:`<h4>의미</h4>
<p>임금의 하방경직성이란 한번 인상된 임금이 경기 침체 등 경제 상황이 악화되더라도 쉽게 하락하지 않고 현재 수준을 유지하려는 현상을 말한다.</p>
<h4>발생 원인</h4>
<ol>
<li><strong>최저임금제</strong> : 법적으로 임금의 하한선이 정해져 있어 그 이하로 내릴 수 없다.</li>
<li><strong>노동조합의 교섭력</strong> : 강력한 노동조합이 임금 인하에 저항한다.</li>
<li><strong>장기 고용계약</strong> : 계약 기간 동안 임금 변동이 어렵다.</li>
<li><strong>효율임금이론</strong> : 기업이 근로자의 생산성을 높이기 위해 시장임금보다 높은 임금을 유지한다.</li>
<li><strong>화폐환상(money illusion)</strong> : 근로자가 명목임금 삭감에 민감하게 반응하여 실질임금보다 명목임금에 집착한다.</li>
</ol>`},{num:150,category:`labor_market`,title:`한계노동비용(MFC) 계산 문제를 풀이하시오.`,frequency:`21-3, 19-2`,keyword:`한계노동비용 계산`,answer:`<h4>공식</h4>
<p><strong>한계노동비용(MFC)</strong> = △TC / △L (노동 1단위 추가 시 총비용 변화)</p>
<p>완전경쟁 노동시장에서: MFC = W (시장임금)</p>
<p>수요독점 노동시장에서: MFC > W (한계노동비용이 임금보다 크다)</p>
<h4>풀이 예시 (수요독점)</h4>
<p>조건: 노동공급함수 W = 100 + 10L</p>
<p>총노동비용 TC = W × L = (100 + 10L) × L = 100L + 10L²</p>
<p>MFC = dTC/dL = 100 + 20L</p>
<p>L = 5일 때: MFC = 100 + 20(5) = <strong>200</strong>, W = 100 + 10(5) = <strong>150</strong></p>
<p><em>수요독점에서는 MFC가 항상 W보다 크므로, 완전경쟁보다 적은 노동자를 고용하고 낮은 임금을 지불한다.</em></p>`},{num:154,category:`labor_market`,title:`노동시장 이론 3가지를 쓰고 설명하시오.`,frequency:`22-1, 20-3`,keyword:`노동시장 이론`,answer:`<ol>
<li><strong>신고전학파 노동시장이론</strong> : 노동시장이 일반 상품시장과 동일한 원리로 작동한다고 본다. 임금은 노동의 수요와 공급에 의해 결정되며, 시장이 완전경쟁일 때 효율적 배분이 이루어진다.</li>
<li><strong>이중노동시장이론(분절노동시장이론)</strong> : 노동시장이 1차 노동시장(양호한 고용조건)과 2차 노동시장(열악한 고용조건)으로 분절되어 있다고 본다. 두 시장 간 이동이 제한적이다.</li>
<li><strong>내부노동시장이론</strong> : 기업 내부에 독자적인 노동시장이 형성되어 있다고 본다. 채용, 임금, 승진 등이 외부 노동시장이 아닌 기업 내 관행과 규칙에 의해 결정된다.</li>
</ol>`},{num:155,category:`labor_market`,title:`노동수요의 탄력성을 크게 하는 요인(마샬의 파생수요 법칙) 4가지를 쓰시오.`,frequency:`25-2, 22-1, 21-2`,keyword:`마샬 파생수요 법칙(힉스-마샬)`,answer:`<ol>
<li><strong>생산물 수요의 탄력성이 클수록</strong> : 생산물 가격 변화에 수요가 민감하게 반응할수록 노동수요의 탄력성도 크다.</li>
<li><strong>다른 생산요소의 대체 가능성이 클수록</strong> : 노동을 기계 등 다른 요소로 대체하기 쉬울수록 임금 변화에 노동수요가 민감하게 반응한다.</li>
<li><strong>총생산비에서 노동비용이 차지하는 비중이 클수록</strong> : 노동비용 비중이 높으면 임금 변화가 생산비에 미치는 영향이 크므로 탄력성이 크다.</li>
<li><strong>다른 생산요소의 공급 탄력성이 클수록</strong> : 대체 요소의 공급이 탄력적이면 노동 대체가 용이하여 탄력성이 크다.</li>
</ol>`},{num:156,category:`labor_market`,title:`개별 노동공급곡선이 후방굴절(backward-bending)하는 이유를 설명하시오.`,frequency:`25-3, 22-2, 20-4`,keyword:`노동공급곡선 후방굴절`,answer:`<p>개별 노동공급곡선은 일정 임금 수준까지는 우상향하다가, 임금이 충분히 높아지면 뒤로 굽어지는(후방굴절) 형태를 보인다.</p>
<h4>원인: 대체효과와 소득효과</h4>
<ol>
<li><strong>대체효과</strong> : 임금이 상승하면 여가의 기회비용이 커지므로, 여가 시간을 줄이고 노동시간을 늘린다. → 노동공급 증가</li>
<li><strong>소득효과</strong> : 임금이 상승하면 소득이 증가하므로, 여가(정상재)의 소비를 늘리고 노동시간을 줄인다. → 노동공급 감소</li>
</ol>
<p><strong>저임금 구간:</strong> 대체효과 > 소득효과 → 노동공급 증가 (우상향)</p>
<p><strong>고임금 구간:</strong> 소득효과 > 대체효과 → 노동공급 감소 (후방굴절)</p>`},{num:159,category:`labor_market`,title:`고용지표(실업률, 경제활동참가율) 종합 계산 문제를 풀이하시오.`,frequency:`23-1, 22-1`,keyword:`실업률/경활참가율 계산`,answer:`<h4>핵심 공식 요약</h4>
<ol>
<li>경제활동인구 = 취업자 + 실업자</li>
<li>비경제활동인구 = 15세 이상 인구 - 경제활동인구</li>
<li><strong>실업률</strong> = (실업자 / 경활인구) × 100</li>
<li><strong>경활참가율</strong> = (경활인구 / 15세이상 인구) × 100</li>
<li><strong>고용률</strong> = (취업자 / 15세이상 인구) × 100</li>
</ol>
<h4>풀이 예시</h4>
<p>조건: 15세이상 인구 50,000, 취업자 25,000, 실업자 2,500</p>
<p>경활인구 = 25,000 + 2,500 = 27,500</p>
<p>실업률 = (2,500/27,500) × 100 ≒ <strong>9.09%</strong></p>
<p>경활참가율 = (27,500/50,000) × 100 = <strong>55%</strong></p>
<p>고용률 = (25,000/50,000) × 100 = <strong>50%</strong></p>`},{num:160,category:`labor_market`,title:`노동수요 함수에서 탄력성 계산 문제를 풀이하시오.`,frequency:`21-2, 19-3`,keyword:`노동수요함수 탄력성`,answer:`<h4>풀이 예시</h4>
<p>조건: 노동수요함수 Ld = 200 - 4W, 현재 임금 W = 30</p>
<ol>
<li><strong>현재 노동수요량</strong>: Ld = 200 - 4(30) = 200 - 120 = <strong>80명</strong></li>
<li><strong>노동수요 탄력성</strong>:
<br/>Ed = |△Ld/△W × W/Ld| = |-4 × 30/80| = |(-120)/80| = <strong>1.5</strong></li>
<li><strong>판정</strong>: Ed = 1.5 > 1 이므로 <strong>탄력적</strong> (임금 변화에 고용이 민감하게 반응)</li>
</ol>
<p><em>탄력적이므로 임금이 상승하면 고용량이 크게 감소하고, 총 임금지급액도 감소한다.</em></p>`},{num:163,category:`labor_market`,title:`완전경쟁시장에서 이윤극대화 노동수요량 계산 문제를 풀이하시오.`,frequency:`22-1, 20-3`,keyword:`이윤극대화 계산 (완전경쟁)`,answer:`<h4>이윤극대화 조건</h4>
<p><strong>VMP = W</strong> (한계생산가치 = 임금)</p>
<h4>풀이 예시</h4>
<p>조건: 생산함수 Q = 60L - 0.5L², 생산물 가격 P = 100, 임금 W = 1,000</p>
<ol>
<li>한계생산(MP) = dQ/dL = 60 - L</li>
<li>한계생산가치(VMP) = P × MP = 100(60 - L) = 6,000 - 100L</li>
<li>이윤극대화: VMP = W → 6,000 - 100L = 1,000</li>
<li>100L = 5,000 → <strong>L = 50명</strong></li>
</ol>
<p>생산량 Q = 60(50) - 0.5(50²) = 3,000 - 1,250 = <strong>1,750개</strong></p>
<p>총수입 = 100 × 1,750 = 175,000 / 총비용 = 1,000 × 50 = 50,000</p>
<p>이윤 = 175,000 - 50,000 = <strong>125,000</strong></p>`},{num:164,category:`labor_market`,title:`취업자 중 임금근로자 수 계산 문제를 풀이하시오.`,frequency:`21-3, 19-1`,keyword:`임금근로자 계산`,answer:`<h4>주요 개념</h4>
<p><strong>취업자</strong> = 임금근로자 + 비임금근로자(자영업자 + 무급가족종사자)</p>
<h4>풀이 예시</h4>
<p>조건: 전체 취업자 = 24,000천명, 자영업자 = 5,000천명, 무급가족종사자 = 1,000천명</p>
<p>비임금근로자 = 5,000 + 1,000 = 6,000천명</p>
<p>임금근로자 = 24,000 - 6,000 = <strong>18,000천명</strong></p>
<p>임금근로자 비율 = (18,000/24,000) × 100 = <strong>75%</strong></p>`},{num:168,category:`labor_market`,title:`인적자본론에서 인적자본 투자의 대상(유형) 3가지를 쓰고 설명하시오.`,frequency:`22-2, 21-1`,keyword:`인적자본 투자 대상`,answer:`<ol>
<li><strong>정규교육(학교교육)</strong> : 초등학교부터 대학까지의 정규 교육과정에 대한 투자이다. 일반적 지식과 기술을 습득하여 노동생산성을 향상시키며, 학력이 높을수록 임금이 높아지는 경향이 있다.</li>
<li><strong>직업훈련(현장훈련, OJT)</strong> : 기업 내에서 이루어지는 직업 관련 훈련에 대한 투자이다. 일반훈련(general training)과 특수훈련(specific training)으로 구분되며, 일반훈련의 비용은 근로자가, 특수훈련의 비용은 기업이 부담하는 경향이 있다.</li>
<li><strong>이주(migration)</strong> : 더 나은 고용 기회가 있는 지역이나 국가로 이동하는 것에 대한 투자이다. 이주 비용(이사, 정보 탐색, 심리적 비용 등)과 이주 후 기대되는 소득 증가를 비교하여 의사결정한다.</li>
</ol>`},{num:171,category:`labor_market`,title:`고용률과 경제활동참가율의 차이를 설명하고 계산하시오.`,frequency:`22-2, 20-3`,keyword:`고용률 vs 경활참가율`,answer:`<h4>개념 비교</h4>
<table>
<tr><th>구분</th><th>고용률</th><th>경제활동참가율</th></tr>
<tr><td>공식</td><td>(취업자/15세이상인구)×100</td><td>(경활인구/15세이상인구)×100</td></tr>
<tr><td>분자</td><td>취업자만 포함</td><td>취업자 + 실업자 포함</td></tr>
<tr><td>특징</td><td>실질적인 고용 상황 반영</td><td>구직의향 포함한 경제활동 의사</td></tr>
</table>
<h4>풀이 예시</h4>
<p>조건: 15세이상 인구=50,000, 취업자=30,000, 실업자=2,000</p>
<p>고용률 = (30,000/50,000)×100 = <strong>60%</strong></p>
<p>경활참가율 = (32,000/50,000)×100 = <strong>64%</strong></p>`},{num:175,category:`labor_market`,title:`실업자 수 계산 문제를 풀이하시오.`,frequency:`21-2, 19-3`,keyword:`실업자 수 계산`,answer:`<h4>공식</h4>
<p>실업자 = 경제활동인구 - 취업자</p>
<p>경제활동인구 = 15세 이상 인구 × (경제활동참가율/100)</p>
<h4>풀이 예시</h4>
<p>조건: 15세 이상 인구 = 40,000천명, 경활참가율 = 65%, 실업률 = 4%</p>
<p>경활인구 = 40,000 × 0.65 = 26,000천명</p>
<p>실업자 = 26,000 × 0.04 = <strong>1,040천명</strong></p>
<p>취업자 = 26,000 - 1,040 = <strong>24,960천명</strong></p>
<p>비경활인구 = 40,000 - 26,000 = <strong>14,000천명</strong></p>`},{num:176,category:`labor_market`,title:`이중노동시장론에서 1차 노동시장의 특징 5가지를 쓰시오.`,frequency:`22-1, 20-2`,keyword:`1차 노동시장 특징`,answer:`<ol>
<li><strong>높은 임금 수준</strong> : 2차 노동시장에 비해 높은 임금과 양호한 보상 체계를 제공한다.</li>
<li><strong>고용 안정성</strong> : 장기 고용이 보장되고, 해고나 실업의 위험이 상대적으로 낮다.</li>
<li><strong>양호한 근로조건</strong> : 깨끗한 작업 환경, 복리후생, 산업안전 등 근로조건이 양호하다.</li>
<li><strong>승진 기회</strong> : 체계적인 승진 사다리(경력사다리)가 존재하여 내부 승진 기회가 많다.</li>
<li><strong>내부노동시장 발달</strong> : 기업 내부에서 교육·훈련이 활발하고, 채용보다 내부 이동이 중요하다.</li>
</ol>`},{num:177,category:`labor_market`,title:`던롭(Dunlop)의 노사관계 시스템 이론의 구성요소 3가지를 쓰고 설명하시오.`,frequency:`24-2, 22-2, 21-1`,keyword:`던롭 노사관계 시스템`,answer:`<p>던롭은 노사관계를 하나의 시스템으로 보고, 이 시스템이 <strong>행위자(actors)</strong>, <strong>환경(contexts)</strong>, <strong>이데올로기(ideology)</strong>, <strong>규칙(rules)</strong>으로 구성된다고 보았다.</p>
<h4>3대 행위자</h4>
<ol>
<li><strong>근로자와 근로자 단체(노동조합)</strong> : 임금, 근로조건 등에 관한 근로자의 이해를 대변하고 교섭하는 주체이다.</li>
<li><strong>경영자와 경영자 단체(사용자)</strong> : 기업의 경영 의사결정을 하고 근로조건을 결정하는 주체이다.</li>
<li><strong>정부와 전문 기관</strong> : 노사관계의 규칙을 제정하고 분쟁을 조정·중재하며 노동 정책을 수립하는 주체이다.</li>
</ol>
<h4>환경(맥락)</h4>
<p>기술적 특성, 시장·예산 제약, 권력 관계의 3가지 환경이 노사관계에 영향을 미친다.</p>`},{num:178,category:`counseling`,title:`하렌(Harren)의 의사결정 유형 3가지를 쓰고 설명하시오.`,frequency:`25-2`,keyword:`하렌(Harren) 의사결정 유형`,answer:`<ol>
<li><strong>합리적 유형</strong> : 정보를 체계적으로 수집하고 논리적으로 분석하여 신중하게 의사결정을 내리는 유형이다.</li>
<li><strong>직관적 유형</strong> : 감정이나 느낌에 기반하여 빠르게 의사결정을 내리는 유형이다. 결정 과정에서 상상력과 감각을 활용한다.</li>
<li><strong>의존적 유형</strong> : 타인의 기대나 의견에 의존하여 의사결정을 내리는 유형이다. 책임을 타인에게 전가하려는 경향이 있다.</li>
</ol>`},{num:179,category:`counseling`,title:`톨버트(Tolbert)가 제시한 집단직업상담의 핵심요소 6가지를 쓰시오.`,frequency:`25-3`,keyword:`톨버트(Tolbert) 집단직업상담 핵심요소`,answer:`<ol>
<li>구성원 간의 상호작용</li>
<li>집단 목표의 명확한 설정</li>
<li>구성원 간의 신뢰와 응집력</li>
<li>집단 규범의 형성</li>
<li>구성원 개인의 목표와 집단 목표의 통합</li>
<li>집단 경험의 일반화 및 적용</li>
</ol>`},{num:180,category:`counseling`,title:`특성-요인 상담의 3가지 기본가정(기본전제)을 쓰고 설명하시오.`,frequency:`25-3`,keyword:`특성-요인 상담 기본가정`,answer:`<ol>
<li><strong>개인차의 가정</strong> : 각 개인은 고유한 특성(흥미, 적성, 능력 등)을 가지고 있으며, 이러한 특성은 측정 가능하다.</li>
<li><strong>직업차의 가정</strong> : 각 직업은 고유한 요구 조건(요인)이 있으며, 직업마다 필요한 능력과 특성이 다르다.</li>
<li><strong>매칭의 가정</strong> : 개인의 특성과 직업의 요인을 합리적으로 연결(매칭)하면 직업 만족과 성공을 높일 수 있다.</li>
</ol>`},{num:181,category:`counseling`,title:`아들러(Adler)가 주장한 열등감 콤플렉스의 원인 3가지를 쓰시오.`,frequency:`18-1`,keyword:`아들러 열등감 콤플렉스 원인`,answer:`<ol>
<li><strong>기관 열등감</strong> : 선천적으로 신체적 결함이나 약점을 가진 경우 열등감이 형성된다.</li>
<li><strong>과잉보호(응석받이)</strong> : 과잉보호를 받고 자란 아이는 독립심이 부족하여 사회에 나갔을 때 열등감을 느끼게 된다.</li>
<li><strong>양육태만(무시)</strong> : 부모로부터 무시당하거나 방치된 아이는 자신이 무가치하다고 느끼며 열등감이 형성된다.</li>
</ol>`},{num:182,category:`counseling`,title:`의사교류분석 상담(TA)의 제한점 3가지를 쓰시오.`,frequency:`18-1`,keyword:`교류분석(TA) 제한점`,answer:`<ol>
<li>이론의 단순화로 인해 인간의 복잡한 심리를 충분히 설명하지 못할 수 있다.</li>
<li>자아상태 분석이 지나치게 도식적이어서 개인의 독특한 경험을 간과할 수 있다.</li>
<li>상담자의 주관적 판단에 의존하여 분석의 객관성이 떨어질 수 있다.</li>
</ol>`},{num:183,category:`psychology`,title:`규준의 종류 중 발달규준 3가지를 쓰고 각각에 대해 설명하시오.`,frequency:`25-1`,keyword:`발달규준`,answer:`<ol>
<li><strong>연령규준</strong> : 특정 연령 집단의 평균 수행 수준을 기준으로 개인의 점수를 해석하는 규준이다. 같은 연령대의 평균과 비교하여 발달 수준을 파악한다.</li>
<li><strong>학년규준</strong> : 특정 학년 집단의 평균 수행 수준을 기준으로 하는 규준이다. 학업 성취도검사 등에서 주로 사용된다.</li>
<li><strong>서열규준</strong> : 발달 단계에서 특정 과제를 수행할 수 있는 순서를 기준으로 하는 규준이다. 발달의 순서성을 반영한다.</li>
</ol>`},{num:184,category:`psychology`,title:`개념준거와 실제준거의 의미를 각각 설명하시오.`,frequency:`25-1`,keyword:`개념준거 / 실제준거`,answer:`<ol>
<li><strong>개념준거(궁극적 준거)</strong> : 측정하고자 하는 이상적이고 추상적인 개념으로, 실제로는 완벽하게 측정할 수 없는 이론적 준거이다. 예) 직무 수행 능력의 이상적 정의</li>
<li><strong>실제준거(조작적 준거)</strong> : 개념준거를 실제로 측정할 수 있도록 조작적으로 정의한 것으로, 현실적으로 사용 가능한 측정치이다. 예) 상사 평가, 생산량, 매출액 등</li>
</ol>`},{num:185,category:`psychology`,title:`심리검사 점수의 분산 정도를 판단하기 위해 사용되는 기준 2가지를 쓰시오.`,frequency:`25-3`,keyword:`분산 판단 기준 (범위/표준편차)`,answer:`<ol>
<li><strong>범위(Range)</strong> : 검사 점수의 최대값에서 최소값을 뺀 값으로, 점수가 퍼져 있는 전체 폭을 나타낸다. 계산이 간편하지만 극단값에 영향을 받는다.</li>
<li><strong>표준편차(Standard Deviation)</strong> : 각 점수가 평균으로부터 떨어져 있는 정도의 평균으로, 점수의 산포도를 가장 정확하게 나타내는 지표이다. 분산의 제곱근이다.</li>
</ol>`},{num:186,category:`psychology`,title:`비확률표집방법 3가지를 쓰고 각각에 대해 설명하시오.`,frequency:`24-2`,keyword:`비확률표집방법`,answer:`<ol>
<li><strong>편의표집(우연적 표집)</strong> : 조사자가 접근하기 쉬운 대상을 임의로 선택하는 방법이다. 가장 간편하지만 대표성이 낮다.</li>
<li><strong>유의표집(판단표집)</strong> : 조사자가 연구 목적에 적합하다고 판단되는 대상을 의도적으로 선택하는 방법이다.</li>
<li><strong>할당표집</strong> : 모집단의 특성(성별, 연령 등)에 따라 할당량을 정한 후, 각 할당량에 맞게 편의적으로 표본을 추출하는 방법이다.</li>
</ol>`},{num:187,category:`psychology`,title:`코틀(Cottle)의 원형검사에서 원의 의미 3가지를 쓰시오.`,frequency:`25-1`,keyword:`코틀(Cottle) 원형검사`,answer:`<ol>
<li><strong>원의 크기</strong> : 과거, 현재, 미래 각 시간 영역에 대해 개인이 부여하는 중요성 또는 비중을 나타낸다. 원이 클수록 해당 시간 영역을 중요하게 인식한다.</li>
<li><strong>원의 위치(거리)</strong> : 각 시간 영역 간의 심리적 거리를 나타낸다. 원이 가까울수록 시간 영역 간 연결성이 높다고 인식한다.</li>
<li><strong>원의 겹침 정도</strong> : 시간 영역 간의 통합 정도를 나타낸다. 겹치는 부분이 클수록 과거-현재-미래가 통합적으로 연결되어 있다고 인식한다.</li>
</ol>`},{num:188,category:`psychology`,title:`긴즈버그(Ginzberg)의 직업선택 현실기의 3가지 하위단계를 쓰고 설명하시오.`,frequency:`24-3, 18-2`,keyword:`긴즈버그(Ginzberg) 현실기 하위단계`,answer:`<ol>
<li><strong>탐색단계</strong> : 자신의 흥미, 능력, 가치관 등을 고려하여 가능한 직업 대안을 탐색하는 단계이다. 다양한 직업 정보를 수집하고 비교한다.</li>
<li><strong>구체화단계(결정화)</strong> : 탐색한 직업 대안 중에서 구체적인 진로 방향을 설정하는 단계이다. 특정 직업 분야로 범위를 좁혀간다.</li>
<li><strong>실행단계(특수화)</strong> : 최종적으로 선택한 직업을 실현하기 위해 구체적인 행동을 취하는 단계이다. 교육이나 훈련을 받고 취업 활동을 시작한다.</li>
</ol>`},{num:189,category:`psychology`,title:`실존주의 상담에서 인간 본성에 대한 기본 가정 4가지를 쓰시오.`,frequency:`24-2`,keyword:`실존주의 인간본성 가정`,answer:`<ol>
<li><strong>인간은 자유로운 존재이다</strong> : 인간은 자유롭게 선택할 수 있으며, 그 선택에 대한 책임을 진다.</li>
<li><strong>인간은 유한한 존재이다</strong> : 죽음은 피할 수 없으며, 이를 인식함으로써 삶의 의미를 추구하게 된다.</li>
<li><strong>인간은 고독한 존재이다</strong> : 궁극적으로 인간은 혼자이며, 이 고독을 수용해야 한다.</li>
<li><strong>인간은 의미를 추구하는 존재이다</strong> : 인간은 삶의 의미를 스스로 창조하고 발견해야 한다.</li>
</ol>`},{num:190,category:`jobinfo`,title:`민간직업정보의 특성을 3가지 쓰시오.`,frequency:`25-2`,keyword:`민간직업정보 특성`,answer:`<ol>
<li><strong>상업성</strong> : 민간이 제작하여 유료로 판매하므로 수익 창출이 목적이다.</li>
<li><strong>전문성</strong> : 특정 분야나 산업에 대해 심층적이고 전문적인 정보를 제공한다.</li>
<li><strong>신속성</strong> : 시장 변화에 빠르게 대응하여 최신 정보를 제공할 수 있다.</li>
<li><strong>편향 가능성</strong> : 특정 기업이나 집단의 이해관계가 반영될 수 있어 객관성이 떨어질 수 있다.</li>
</ol>`},{num:191,category:`jobinfo`,title:`직업정보 가공 시 유의사항 6가지를 쓰시오.`,frequency:`25-3`,keyword:`직업정보 가공 유의사항`,answer:`<ol>
<li>직업정보의 정확성과 최신성을 확인해야 한다.</li>
<li>정보의 출처를 명확히 밝혀야 한다.</li>
<li>이용자가 이해하기 쉬운 용어와 형식을 사용해야 한다.</li>
<li>편견이나 고정관념이 반영되지 않도록 주의해야 한다.</li>
<li>관련 법규를 준수해야 한다.</li>
<li>직업에 대한 긍정적·부정적 측면을 균형 있게 제시해야 한다.</li>
</ol>`},{num:192,category:`jobinfo`,title:`한국표준직업분류에서 직업분류의 일반원칙 2가지를 쓰고 설명하시오.`,frequency:`25-1`,keyword:`KSCO 직업분류 일반원칙`,answer:`<ol>
<li><strong>포괄성의 원칙</strong> : 모든 직업 활동을 직업분류 체계 내에 포함시켜야 한다. 어떠한 직업도 분류 체계에서 누락되어서는 안 된다.</li>
<li><strong>배타성의 원칙</strong> : 하나의 직업 활동은 분류 체계 내 하나의 항목에만 분류되어야 한다. 동일한 직업이 두 개 이상의 항목에 중복 분류되어서는 안 된다.</li>
</ol>`},{num:193,category:`jobinfo`,title:`한국표준산업분류 11차 개정의 특징 3가지를 쓰시오.`,frequency:`25-3`,keyword:`KSIC 11차 개정 특징`,answer:`<ol>
<li>디지털 경제와 플랫폼 산업 등 신산업 환경을 반영하여 분류체계를 개편하였다.</li>
<li>국제표준산업분류(ISIC Rev.5)와의 비교가능성을 높였다.</li>
<li>산업구조 변화에 따라 서비스업 분야의 세분류를 확대하였다.</li>
</ol>`},{num:194,category:`jobinfo`,title:`한국표준직업분류에서 "직업"으로 규정하기 위한 4가지 요건을 쓰고 설명하시오.`,frequency:`24-1`,keyword:`KSCO 직업 규정 요건`,answer:`<ol>
<li><strong>경제성</strong> : 경제적 보수(수입)를 목적으로 하는 활동이어야 한다.</li>
<li><strong>계속성</strong> : 일시적인 활동이 아니라 계속적으로 수행하는 활동이어야 한다.</li>
<li><strong>사회성</strong> : 사회적으로 유용하고 사회에 기여하는 활동이어야 한다.</li>
<li><strong>윤리성</strong> : 법률이나 사회 윤리에 위배되지 않는 활동이어야 한다.</li>
</ol>`},{num:195,category:`jobinfo`,title:`경력개발 프로그램의 초기·중기·말기 단계별 예시를 쓰시오.`,frequency:`24-1`,keyword:`경력개발 프로그램 단계별`,answer:`<ol>
<li><strong>초기 단계</strong> : 자기이해 활동(흥미검사, 적성검사), 직업세계 탐색, 직업 정보 수집, 진로 목표 설정 등</li>
<li><strong>중기 단계</strong> : 경력 계획 수립, 필요한 교육·훈련 이수, 인턴십·현장실습, 멘토링 프로그램 참여 등</li>
<li><strong>말기 단계</strong> : 이력서·자기소개서 작성, 면접 기술 훈련, 구직 활동, 취업 후 적응 지원, 추수지도 등</li>
</ol>`},{num:196,category:`jobinfo`,title:`입직률(accession rate)을 계산하시오.`,frequency:`25-1`,keyword:`입직률 계산`,answer:`<h4>공식</h4>
<p><strong>입직률 = (입직자 수 / 전월 말 사원 수) × 100</strong></p>
<p>입직자 = 신규채용 인원 + 전입 인원</p>
<h4>풀이 예시</h4>
<p>조건: 9월 말 사원 수 = 2,000명, 신규채용 = 200명, 전입 = 100명</p>
<p>입직자 = 200 + 100 = 300명</p>
<p>10월 입직률 = (300 / 2,000) × 100 = <strong>15%</strong></p>`},{num:197,category:`labor_market`,title:`행동주의 상담에서 노출치료법의 3가지 방법을 쓰고 설명하시오.`,frequency:`18-2`,keyword:`노출치료법 3가지`,answer:`<ol>
<li><strong>실제적 노출(in vivo exposure)</strong> : 불안을 유발하는 실제 자극이나 상황에 직접 노출시키는 방법이다.</li>
<li><strong>상상적 노출(imaginal exposure)</strong> : 불안을 유발하는 장면을 상상하게 하여 간접적으로 노출시키는 방법이다.</li>
<li><strong>체계적 둔감법(systematic desensitization)</strong> : 이완 상태에서 불안 위계에 따라 점진적으로 노출시키는 방법이다.</li>
</ol>`},{num:198,category:`labor_market`,title:`노동공급의 결정요인 5가지를 쓰시오.`,frequency:`18-3`,keyword:`노동공급 결정요인`,answer:`<ol>
<li><strong>임금 수준</strong> : 임금이 높을수록 노동공급이 증가하는 경향이 있다.</li>
<li><strong>인구 규모</strong> : 생산가능인구가 많을수록 잠재적 노동공급이 증가한다.</li>
<li><strong>비근로소득</strong> : 이자, 배당, 임대료 등 비근로소득이 높으면 노동공급이 감소한다.</li>
<li><strong>사회·문화적 요인</strong> : 여성의 경제활동 참여에 대한 사회적 인식, 교육 수준 등이 영향을 미친다.</li>
<li><strong>제도적 요인</strong> : 세금, 사회보장제도, 보육지원 등 정부 정책이 노동공급에 영향을 미친다.</li>
</ol>`},{num:199,category:`labor_market`,title:`노동조합의 임금효과 중 이전효과(spillover effect)와 위협효과(threat effect)를 설명하시오.`,frequency:`18-3`,keyword:`노동조합 이전효과/위협효과`,answer:`<ol>
<li><strong>이전효과(spillover effect)</strong> : 노동조합이 조직된 기업에서 임금을 인상하면, 해당 기업에서 해고된 근로자들이 비조직 부문으로 이동하여 비조직 부문의 노동공급이 증가하고, 결과적으로 비조직 부문의 임금이 하락하는 효과이다.</li>
<li><strong>위협효과(threat effect)</strong> : 비조직 기업의 사용자가 자사 근로자의 노동조합 결성을 막기 위해 선제적으로 임금을 인상하는 효과이다. 노동조합의 존재 자체가 비조직 부문의 임금을 상승시키는 간접적 효과를 가진다.</li>
</ol>`},{num:200,category:`labor_market`,title:`부가급여의 의미와 사용자·근로자가 부가급여를 선호하는 이유를 각각 쓰시오.`,frequency:`18-1`,keyword:`부가급여 선호 이유`,answer:`<h4>의미</h4>
<p>부가급여(fringe benefits)란 기본급 외에 사용자가 근로자에게 제공하는 각종 비임금적 보상을 말한다. 예) 건강보험, 퇴직연금, 유급휴가, 식비 지원 등</p>
<h4>사용자가 선호하는 이유</h4>
<ol>
<li>세금 혜택을 받을 수 있어 비용을 절감할 수 있다.</li>
<li>우수 인력의 이직을 방지하고 근로자의 충성도를 높일 수 있다.</li>
</ol>
<h4>근로자가 선호하는 이유</h4>
<ol>
<li>현금 임금보다 세금 부담이 적어 실질적 혜택이 크다.</li>
<li>건강보험 등 개인이 직접 가입하기 어려운 혜택을 받을 수 있다.</li>
</ol>`},{num:201,category:`labor_market`,title:`직무스트레스의 조절변인 3가지를 쓰고 설명하시오.`,frequency:`18-2`,keyword:`직무스트레스 조절변인`,answer:`<ol>
<li><strong>사회적 지지</strong> : 가족, 동료, 상사 등으로부터 받는 정서적·물질적 지원으로, 사회적 지지가 높을수록 스트레스의 부정적 영향이 완화된다.</li>
<li><strong>자기효능감</strong> : 특정 상황에서 필요한 행동을 성공적으로 수행할 수 있다는 개인의 믿음으로, 자기효능감이 높을수록 스트레스에 대한 대처 능력이 향상된다.</li>
<li><strong>통제감(통제 소재)</strong> : 자신의 삶과 환경을 통제할 수 있다고 느끼는 정도로, 내적 통제 소재를 가진 사람이 스트레스에 더 효과적으로 대처한다.</li>
</ol>`}];function co(e){return!e||e===`all`?so:so.filter(t=>t.category===e)}function lo(){let e={};for(let t of oo)t.id!==`all`&&(e[t.id]=so.filter(e=>e.category===t.id).length);return e.all=so.length,e}function uo(e){return(e.match(/,/g)||[]).length+1}function fo(e){let t=new Set,n=/<strong>(.*?)<\/strong>/g,r;for(;(r=n.exec(e.answer))!==null;){let e=r[1].replace(/<[^>]*>/g,``).trim();e.length>=2&&e.length<=40&&!/^[0-9.]+$/.test(e)&&t.add(e)}return[...t]}function po(e,t){let n=e.toLowerCase().replace(/\s+/g,``);return t.filter(e=>n.includes(e.toLowerCase().replace(/\s+/g,``)))}function mo(e,t,n){if(!e)return``;let r=e;return n.forEach(e=>{let t=RegExp(`(${e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)})`,`gi`);r=r.replace(t,`<mark class="kw-highlight">$1</mark>`)}),r}var ho=[{id:`all`,label:`전체`,icon:`fa-solid fa-list`},{id:`5`,label:`최다빈출 (5+)`,icon:`fa-solid fa-fire-flame-curved`,cls:`sq-freq-grade--5`},{id:`4`,label:`고빈출 (4회)`,icon:`fa-solid fa-fire`,cls:`sq-freq-grade--4`},{id:`3`,label:`빈출 (3회)`,icon:`fa-solid fa-bolt`,cls:`sq-freq-grade--3`},{id:`2`,label:`출제 (2회)`,icon:`fa-solid fa-circle-check`,cls:`sq-freq-grade--2`},{id:`1`,label:`1회`,icon:`fa-regular fa-circle`,cls:`sq-freq-grade--1`}],go=[10,20,30,0];function _o(){let{user:e}=Z(),{showToast:t}=k(),r=n(),[i,a]=(0,g.useState)(`setup`),[o,s]=(0,g.useState)(`all`),[c,l]=(0,g.useState)(`all`),[u,d]=(0,g.useState)(20),[f,p]=(0,g.useState)([]),[m,h]=(0,g.useState)(0),[v,y]=(0,g.useState)(``),[b,x]=(0,g.useState)(!1),[S,C]=(0,g.useState)([]),[w,T]=(0,g.useState)(0),[E,D]=(0,g.useState)(0),[O,ee]=(0,g.useState)(!1),A=(0,g.useRef)(null),j=(0,g.useRef)(0);(0,g.useEffect)(()=>(i===`practice`&&(j.current=window.setInterval(()=>{D(Math.floor((Date.now()-w)/1e3))},1e3)),()=>clearInterval(j.current)),[i,w]);let M=(0,g.useMemo)(()=>{let e=[...so].map(e=>({...e,freqCount:uo(e.frequency)}));if(o!==`all`&&(e=e.filter(e=>e.category===o)),c!==`all`){let t=Number(c);e=t>=5?e.filter(e=>e.freqCount>=5):e.filter(e=>e.freqCount===t)}return e},[o,c]),N=()=>{let e=[...M];for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}if(u>0&&(e=e.slice(0,u)),!e.length){t(`조건에 맞는 문제가 없습니다.`,`error`);return}p(e),h(0),y(``),x(!1),C([]),T(Date.now()),D(0),a(`practice`)},P=f[m],F=(0,g.useMemo)(()=>P?fo(P):[],[P]),te=(0,g.useMemo)(()=>b?po(v,F):[],[b,v,F]),I=()=>{x(!0);let e=po(v,F),t=F.length>0?Math.round(e.length/F.length*100):0;C(n=>[...n,{questionNum:P.num,category:P.category,title:P.title,userAnswer:v,keywords:F,matched:e,score:t}])},ne=()=>{if(m>=f.length-1){clearInterval(j.current),a(`result`);return}h(e=>e+1),y(``),x(!1),setTimeout(()=>A.current?.focus(),100)},re=()=>{if(m<=0)return;h(e=>e-1);let e=S.find(e=>e.questionNum===f[m-1]?.num);y(e?.userAnswer||``),x(!!e)},ie=()=>{!b&&v.trim()&&I(),clearInterval(j.current),a(`result`)},ae=(0,g.useMemo)(()=>S.length?Math.round(S.reduce((e,t)=>e+t.score,0)/S.length):0,[S]),oe=(0,g.useMemo)(()=>{let e={};S.forEach(t=>{e[t.category]||(e[t.category]={total:0,sum:0}),e[t.category].total++,e[t.category].sum+=t.score});let t={};return Object.entries(e).forEach(([e,{total:n,sum:r}])=>{t[e]=Math.round(r/n)}),t},[S]),L=ae>=60,se=(0,g.useCallback)(async()=>{if(!e){t(`로그인이 필요합니다.`,`error`);return}ee(!0);try{let n=S.filter(e=>e.score>=60).length,{error:r}=await Y.from(X.EXAM_SESSIONS).insert({user_id:e.id,exam_type:`silgi_practice`,score_total:ae,correct_count:n,total_questions:S.length,time_spent_sec:E,is_pass:L,score_by_subject:oe,completed_at:new Date().toISOString(),status:`completed`});if(r)throw r;t(`결과가 저장되었습니다!`,`success`)}catch(e){t(`저장 실패: `+(e.message||``),`error`)}ee(!1)},[e,S,ae,E,L,oe,t]);if(i===`setup`)return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`실기 서술형 연습`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-fancy`}),` 실기 서술형 연습`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`서술형 문제를 풀고 모범답안과 비교하세요`})]})}),(0,_.jsx)(`div`,{className:`container`,style:{paddingBottom:80},children:(0,_.jsxs)(`div`,{className:`practice-setup`,children:[(0,_.jsxs)(`div`,{className:`practice-setup-section`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-layer-group`}),` 과목 선택`]}),(0,_.jsx)(`div`,{className:`practice-setup-options`,children:oo.map(e=>(0,_.jsxs)(`button`,{className:`practice-setup-btn ${o===e.id?`active`:``}`,style:o===e.id?{borderColor:e.color,color:e.color}:{},onClick:()=>s(e.id),children:[(0,_.jsx)(`i`,{className:e.icon}),` `,e.label,(0,_.jsx)(`span`,{className:`practice-setup-btn-count`,children:e.id===`all`?so.length:so.filter(t=>t.category===e.id).length})]},e.id))})]}),(0,_.jsxs)(`div`,{className:`practice-setup-section`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-signal`}),` 빈출 등급`]}),(0,_.jsx)(`div`,{className:`practice-setup-options`,children:ho.map(e=>(0,_.jsxs)(`button`,{className:`practice-setup-btn ${c===e.id?`active`:``} ${e.cls||``}`,onClick:()=>l(e.id),children:[(0,_.jsx)(`i`,{className:e.icon}),` `,e.label]},e.id))})]}),(0,_.jsxs)(`div`,{className:`practice-setup-section`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-hashtag`}),` 문제 수`]}),(0,_.jsx)(`div`,{className:`practice-setup-options`,children:go.map(e=>(0,_.jsx)(`button`,{className:`practice-setup-btn ${u===e?`active`:``}`,onClick:()=>d(e),children:e===0?`전체`:`${e}문제`},e))}),(0,_.jsxs)(`p`,{className:`practice-setup-note`,children:[`선택 조건: `,(0,_.jsxs)(`strong`,{children:[M.length,`문제`]}),` 중 `,u===0?`전체`:`${Math.min(u,M.length)}문제`,` 랜덤 출제`]})]}),(0,_.jsxs)(`button`,{className:`btn btn-primary btn-lg practice-start-btn`,onClick:N,disabled:!M.length,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-play`}),` 연습 시작`]})]})})]});if(i===`practice`&&P){let e=(m+1)/f.length*100,t=P.freqCount||uo(P.frequency),n=oo.find(e=>e.id===P.category);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`실기 연습 ${m+1}/${f.length}`}),(0,_.jsx)(`div`,{className:`page-header page-header--compact`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`div`,{className:`practice-topbar`,children:[(0,_.jsxs)(`span`,{className:`practice-progress-label`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen`}),` `,m+1,` / `,f.length]}),(0,_.jsxs)(`span`,{className:`practice-timer`,children:[(0,_.jsx)(`i`,{className:`fa-regular fa-clock`}),` `,Qa(E)]}),(0,_.jsxs)(`button`,{className:`btn btn-sm btn-secondary`,onClick:ie,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-flag-checkered`}),` 연습 종료`]})]}),(0,_.jsx)(`div`,{className:`practice-progress-bar`,children:(0,_.jsx)(`div`,{className:`practice-progress-fill`,style:{width:`${e}%`}})})]})}),(0,_.jsx)(`div`,{className:`container`,style:{paddingBottom:80},children:(0,_.jsxs)(`div`,{className:`practice-question-card`,children:[(0,_.jsxs)(`div`,{className:`practice-question-header`,children:[(0,_.jsxs)(`span`,{className:`practice-question-num`,children:[`Q`,m+1]}),(0,_.jsxs)(`div`,{className:`practice-question-badges`,children:[n&&(0,_.jsxs)(`span`,{className:`sq-badge sq-badge--keyword`,style:{color:n.color,borderColor:n.color},children:[(0,_.jsx)(`i`,{className:n.icon}),` `,n.label]}),(0,_.jsxs)(`span`,{className:`sq-badge sq-badge--freq`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-bar`}),` `,t,`회 출제`]})]})]}),(0,_.jsx)(`p`,{className:`practice-question-text`,children:P.title}),b?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{className:`practice-comparison`,children:[(0,_.jsxs)(`div`,{className:`practice-comparison-col`,children:[(0,_.jsxs)(`h4`,{className:`practice-comparison-title practice-comparison-title--mine`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-user`}),` 내 답안`]}),(0,_.jsx)(`div`,{className:`practice-comparison-text`,dangerouslySetInnerHTML:{__html:mo(v.replace(/\n/g,`<br/>`),F,te)}})]}),(0,_.jsxs)(`div`,{className:`practice-comparison-col`,children:[(0,_.jsxs)(`h4`,{className:`practice-comparison-title practice-comparison-title--model`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-star`}),` 모범답안`]}),(0,_.jsx)(`div`,{className:`practice-comparison-text sq-section-content`,dangerouslySetInnerHTML:{__html:P.answer}})]})]}),F.length>0&&(0,_.jsxs)(`div`,{className:`keyword-analysis`,children:[(0,_.jsxs)(`div`,{className:`keyword-analysis-title`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-key`}),` 키워드 매칭 (`,te.length,`/`,F.length,`)`]}),(0,_.jsx)(`div`,{className:`keyword-list`,children:F.map((e,t)=>(0,_.jsx)(`span`,{className:te.includes(e)?`keyword-match`:`keyword-miss`,children:e},t))}),(0,_.jsxs)(`div`,{className:`keyword-score`,children:[`키워드 일치율:`,(0,_.jsxs)(`span`,{className:`keyword-score-value`,children:[F.length>0?Math.round(te.length/F.length*100):0,`%`]})]})]}),(0,_.jsxs)(`div`,{className:`practice-nav`,children:[(0,_.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:re,disabled:m===0,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-left`}),` 이전`]}),(0,_.jsxs)(`span`,{className:`practice-nav-info`,children:[m+1,` / `,f.length]}),m<f.length-1?(0,_.jsxs)(`button`,{className:`btn btn-primary btn-sm`,onClick:ne,children:[`다음 `,(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-right`})]}):(0,_.jsxs)(`button`,{className:`btn btn-primary btn-sm`,onClick:()=>{clearInterval(j.current),a(`result`)},children:[`결과 보기 `,(0,_.jsx)(`i`,{className:`fa-solid fa-chart-column`})]})]})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{className:`practice-answer-area`,children:[(0,_.jsx)(`label`,{className:`practice-label`,children:`답안 작성`}),(0,_.jsx)(`textarea`,{ref:A,className:`answer-textarea`,value:v,onChange:e=>y(e.target.value),placeholder:`답안을 작성하세요... (핵심 키워드를 포함하여 서술)`,rows:8}),(0,_.jsxs)(`div`,{className:`answer-char-count`,children:[v.length,`자`]})]}),(0,_.jsxs)(`button`,{className:`btn btn-primary practice-reveal-btn`,onClick:I,disabled:!v.trim(),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-eye`}),` 모범답안 확인`]})]})]})})]})}if(i===`result`){let t=Object.entries(oe).filter(([,e])=>e<60).sort(([,e],[,t])=>e-t);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`실기 연습 결과`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-column`}),` 실기 연습 결과`]})})}),(0,_.jsxs)(`div`,{className:`container`,style:{paddingBottom:80},children:[(0,_.jsxs)(`div`,{className:`practice-result-banner ${L?`pass`:`fail`}`,children:[(0,_.jsxs)(`div`,{className:`practice-result-banner-score`,children:[ae,`점`]}),(0,_.jsx)(`div`,{className:`practice-result-banner-label`,children:L?`합격 수준`:`불합격 수준`}),(0,_.jsx)(`div`,{className:`practice-result-banner-sub`,children:`키워드 매칭 평균 | 합격 기준 60%`})]}),(0,_.jsxs)(`div`,{className:`practice-result-stats`,children:[(0,_.jsxs)(`div`,{className:`practice-result-stat`,children:[(0,_.jsx)(`span`,{className:`practice-result-stat-value`,children:S.length}),(0,_.jsx)(`span`,{className:`practice-result-stat-label`,children:`풀이 문제`})]}),(0,_.jsxs)(`div`,{className:`practice-result-stat`,children:[(0,_.jsx)(`span`,{className:`practice-result-stat-value`,children:S.filter(e=>e.score>=60).length}),(0,_.jsx)(`span`,{className:`practice-result-stat-label`,children:`합격 문제`})]}),(0,_.jsxs)(`div`,{className:`practice-result-stat`,children:[(0,_.jsx)(`span`,{className:`practice-result-stat-value`,children:Qa(E)}),(0,_.jsx)(`span`,{className:`practice-result-stat-label`,children:`소요 시간`})]}),(0,_.jsxs)(`div`,{className:`practice-result-stat`,children:[(0,_.jsxs)(`span`,{className:`practice-result-stat-value`,children:[ae,`%`]}),(0,_.jsx)(`span`,{className:`practice-result-stat-label`,children:`평균 일치율`})]})]}),(0,_.jsxs)(`div`,{className:`practice-result practice-result--subjects`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-pie`}),` 과목별 점수`]}),(0,_.jsx)(`div`,{className:`practice-result-breakdown`,children:oo.filter(e=>e.id!==`all`).map(e=>{let t=oe[e.id]??0,n=S.filter(t=>t.category===e.id).length;return n?(0,_.jsxs)(`div`,{className:`practice-result-subject-row`,children:[(0,_.jsxs)(`div`,{className:`practice-result-subject-info`,children:[(0,_.jsxs)(`span`,{style:{color:e.color},children:[(0,_.jsx)(`i`,{className:e.icon}),` `,e.label]}),(0,_.jsxs)(`span`,{className:`practice-result-subject-count`,children:[n,`문제`]})]}),(0,_.jsx)(`div`,{className:`practice-result-bar-track`,children:(0,_.jsx)(`div`,{className:`practice-result-bar-fill ${t>=60?`pass`:`fail`}`,style:{width:`${t}%`}})}),(0,_.jsxs)(`span`,{className:`practice-result-subject-score ${t>=60?`pass`:`fail`}`,children:[t,`%`]})]},e.id):null})})]}),t.length>0&&(0,_.jsxs)(`div`,{className:`practice-result practice-result--weak`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`}),` 약점 분석`]}),(0,_.jsx)(`ul`,{className:`practice-result-weak-list`,children:t.map(([e,t])=>(0,_.jsxs)(`li`,{children:[(0,_.jsx)(`strong`,{children:oo.find(t=>t.id===e)?.label||e}),` 과목 키워드 매칭률이 `,(0,_.jsxs)(`strong`,{style:{color:`#DC2626`},children:[t,`%`]}),`로 낮습니다. 핵심 키워드를 다시 학습하세요.`]},e))})]}),(0,_.jsxs)(`div`,{className:`practice-result practice-result--detail`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-list-ol`}),` 문제별 결과`]}),(0,_.jsx)(`div`,{className:`practice-result-breakdown`,children:S.map((e,t)=>{let n=oo.find(t=>t.id===e.category);return(0,_.jsxs)(`div`,{className:`practice-result-item`,children:[(0,_.jsxs)(`span`,{className:`practice-result-question`,children:[(0,_.jsxs)(`span`,{className:`practice-result-q-num`,children:[`Q`,t+1]}),(0,_.jsx)(`span`,{className:`practice-result-q-cat`,style:{color:n?.color},children:n?.label}),(0,_.jsx)(`span`,{className:`practice-result-q-title`,children:e.title.length>40?e.title.slice(0,40)+`...`:e.title})]}),(0,_.jsxs)(`span`,{className:`practice-result-points ${e.score>=80?`full`:e.score>=60?`partial`:`zero`}`,children:[e.matched.length,`/`,e.keywords.length,` (`,e.score,`%)`]})]},t)})})]}),(0,_.jsxs)(`div`,{className:`practice-result-actions`,children:[e&&(0,_.jsxs)(`button`,{className:`btn btn-primary`,onClick:se,disabled:O,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-cloud-arrow-up`}),` `,O?`저장 중...`:`결과 저장`]}),(0,_.jsxs)(`button`,{className:`btn btn-secondary`,onClick:()=>{a(`setup`),C([])},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),` 다시 연습`]}),(0,_.jsxs)(`button`,{className:`btn btn-secondary`,onClick:()=>r(`/silgi`),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-house`}),` 실기 홈`]}),(0,_.jsxs)(`button`,{className:`btn btn-secondary`,onClick:()=>r(`/dashboard`),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-pie`}),` 대시보드`]})]})]})]})}return null}function vo(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`실기 연습 결과`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-column`}),` 실기 연습 결과`]})})}),(0,_.jsxs)(`div`,{className:`container text-center`,style:{paddingBottom:80},children:[(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`,marginTop:40},children:`실기 서술형 연습을 완료하면 결과가 표시됩니다.`}),(0,_.jsxs)(`div`,{style:{display:`flex`,gap:12,justifyContent:`center`,marginTop:24},children:[(0,_.jsxs)(l,{to:`/silgi/practice`,className:`btn btn-primary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-fancy`}),` 서술형 연습 시작`]}),(0,_.jsxs)(l,{to:`/dashboard`,className:`btn btn-secondary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-pie`}),` 대시보드`]})]})]})]})}var yo=[{term:`직업상담`,definition:`개인이 자신의 직업적 문제를 해결하고 직업 선택·적응·발달을 도모할 수 있도록 전문 상담사가 도움을 제공하는 과정`,category:`직업상담학`},{term:`내담자 중심 상담`,definition:`Rogers의 인간중심 상담이론에 기반하여 공감적 이해, 무조건적 긍정적 존중, 일치성을 핵심 조건으로 하는 상담 방법`,category:`직업상담학`},{term:`행동주의 상담`,definition:`학습이론에 기반하여 관찰 가능한 행동의 변화를 목표로 하는 상담 접근법. 체계적 탈감법, 토큰경제 등의 기법 활용`,category:`직업상담학`},{term:`Holland 유형론`,definition:`현실형(R), 탐구형(I), 예술형(A), 사회형(S), 기업형(E), 관습형(C) 6가지 유형으로 개인과 직업 환경을 분류하는 이론`,category:`직업심리학`},{term:`Super의 발달이론`,definition:`직업발달을 성장기, 탐색기, 확립기, 유지기, 쇠퇴기의 5단계로 나누는 생애발달 이론`,category:`직업심리학`},{term:`직업심리검사`,definition:`개인의 적성, 흥미, 성격 등을 측정하여 직업 선택과 적응에 활용하는 표준화된 검사 도구`,category:`직업심리학`},{term:`한국표준직업분류(KSCO)`,definition:`통계청에서 발행하는 직업분류 체계로, 대분류 10개, 중분류, 소분류, 세분류, 세세분류로 구성`,category:`직업정보론`},{term:`워크넷(WorkNet)`,definition:`고용노동부 산하 한국고용정보원이 운영하는 온라인 취업 지원 서비스`,category:`직업정보론`},{term:`노동시장`,definition:`노동력의 수요(기업)와 공급(근로자)이 만나 임금과 고용량이 결정되는 시장`,category:`노동시장론`},{term:`인적자본론`,definition:`Becker에 의해 체계화된 이론으로, 교육·훈련에 대한 투자가 개인의 생산성과 임금을 높인다는 이론`,category:`노동시장론`},{term:`실업`,definition:`일할 능력과 의사가 있음에도 취업하지 못한 상태. 마찰적, 구조적, 경기적 실업으로 구분`,category:`노동시장론`},{term:`근로기준법`,definition:`근로조건의 최저 기준을 정하여 근로자의 기본적 생활을 보장하는 법률`,category:`노동관계법규`},{term:`고용보험법`,definition:`실업 예방, 고용 촉진, 근로자의 직업능력 개발·향상, 실업급여 지급을 위한 법률`,category:`노동관계법규`},{term:`직업안정법`,definition:`직업소개, 직업지도 등 직업안정 업무에 관한 사항을 규정하는 법률`,category:`노동관계법규`},{term:`구조화된 면접`,definition:`사전에 정해진 질문 목록에 따라 모든 지원자에게 동일한 질문을 하는 면접 방식`,category:`직업상담학`}];function bo(){let[e,t]=(0,g.useState)(`전체`),[n,r]=(0,g.useState)(``),i=[`전체`,...new Set(yo.map(e=>e.category))],a=yo.filter(t=>{let r=e===`전체`||t.category===e,i=!n||t.term.toLowerCase().includes(n.toLowerCase())||t.definition.toLowerCase().includes(n.toLowerCase());return r&&i});return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`핵심 용어`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-book`}),` 핵심 용어`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`실기 시험에 자주 출제되는 핵심 용어를 정리했습니다`})]})}),(0,_.jsxs)(`div`,{className:`container`,style:{paddingBottom:80},children:[(0,_.jsxs)(`div`,{className:`terms-toolbar`,children:[(0,_.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`용어 검색...`,value:n,onChange:e=>r(e.target.value),style:{maxWidth:300}}),(0,_.jsx)(`div`,{className:`study-filters`,style:{marginTop:16},children:i.map(n=>(0,_.jsx)(`button`,{className:`study-filter-btn ${e===n?`active`:``}`,onClick:()=>t(n),children:n},n))})]}),(0,_.jsx)(`div`,{className:`key-terms-grid`,children:a.map((e,t)=>(0,_.jsxs)(`div`,{className:`term-card`,children:[(0,_.jsxs)(`div`,{className:`term-card-header`,children:[(0,_.jsx)(`h4`,{className:`term-name`,children:e.term}),(0,_.jsx)(`span`,{className:`term-category`,children:e.category})]}),(0,_.jsx)(`p`,{className:`term-definition`,children:e.definition})]},t))}),a.length===0&&(0,_.jsx)(`div`,{className:`text-center mt-4`,children:(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`},children:`검색 결과가 없습니다.`})})]})]})}var xo=[{id:`2023-3`,year:2023,round:3,title:`2023년 제3회 직업상담사 실기`,totalPoints:100,questions:[{num:1,title:`현재 사용되고 있는 흥미검사의 종류 5가지를 쓰시오.`,points:5,frequency:`23-3, 20-4, 12-2`,keyword:`흥미검사의 종류`,answer:`<ol>
<li>직업선호도검사(워크넷)</li>
<li>청소년 직업흥미검사(워크넷)</li>
<li>자기방향탐색검사</li>
<li>스트롱 흥미검사</li>
<li>쿠더 직업흥미검사</li>
</ol>`,advanced:`<p><strong>직업흥미검사의 종류</strong></p>
<ol>
<li>직업선호도검사(VPI ; Vocational Preference Inventory)</li>
<li>자기방향탐색검사(SDS ; Self Directed Search)</li>
<li>스트롱 흥미검사(SII ; Strong Interest Inventory)</li>
<li>스트롱-캠벨 흥미검사(SCII ; Strong-Campbell Interest Inventory)</li>
<li>쿠더 직업흥미검사(KOIS ; Kuder Occupational Interest Survey)</li>
<li>경력의사결정검사(CDM ; Career Decision Making System)</li>
<li>직업선호도검사(워크넷)</li>
<li>청소년 직업흥미검사(워크넷)</li>
</ol>`,tips:null,partialScore:`각 1점`},{num:2,title:`행동주의 직업상담의 상담기법은 크게 불안감소기법과 학습촉진기법의 유형으로 구분할 수 있다. 각 유형별 대표적인 방법을 각각 3가지 쓰시오.`,points:6,frequency:`23-3, 22-1, 16-3, 16-2, 15-2, 15-1, 12-3, 11-1`,keyword:`불안감소기법과 학습촉진기법`,answer:`<h4>불안감소기법</h4>
<ol>
<li><strong>홍수법</strong></li>
<li><strong>주장훈련</strong></li>
<li><strong>체계적둔감법</strong></li>
<li><strong>금지조건형성</strong></li>
</ol>
<h4>학습촉진기법</h4>
<ol>
<li><strong>강화</strong></li>
<li><strong>변별학습</strong></li>
<li><strong>모델링(모방)</strong></li>
<li><strong>토큰법</strong></li>
</ol>`,advanced:`<h4>불안감소기법</h4>
<ol>
<li><strong>홍수법</strong> : 특정 불안 공포증을 가진 환자를 단번에 강한 공포자극에 장시간 직면케 하여 불안을 치료하는 방법이다.</li>
<li><strong>주장훈련</strong> : 불안을 역제지하는 방법으로 대인관계에서 오는 불안 제지 효과를 갖는다.</li>
<li><strong>체계적둔감법</strong> : 불안과 공포증이 있는 환자에게 불안 조건을 점차로 노출시켜 둔감화 시키는 치료법이다.</li>
<li><strong>금지조건형성</strong> : 내담자에게 추가적 강화 없이 불안반응을 일으킬만한 단서를 지속적으로 제시함으로써, 불안 감정을 점차로 소거시키는 기법이다.</li>
</ol>
<h4>학습촉진기법</h4>
<ol>
<li><strong>강화</strong> : 학습자에게 강화물을 제공하여, 특정행동의 빈도가 높아지도록 하는 행동수정방법이다.</li>
<li><strong>변별학습</strong> : 자극의 차이에 따라 서로 다른 반응을 보이도록 유도하는 학습촉진기법이다.</li>
<li><strong>모델링(모방)</strong> : 다른 사람들의 행동이나 결과를 관찰함으로써 결정행동학습을 촉진시킨다.</li>
<li><strong>토큰법</strong> : 내담자의 바람직한 행동이 일어날 때 원하는 다양한 물건과 교환할 수 있는 강화물로 토큰이 주어지는 체계적인 강화기법이다.</li>
</ol>`,tips:`출제빈도가 높은 문제입니다. 반드시 숙지하세요. 제시된 답안 중 3가지씩만 쓰시면 됩니다.`,partialScore:`각 1점`},{num:3,title:`진로상담 과정에서 관계수립을 위한 기본 상담기술 5가지를 기술하시오.`,points:5,frequency:`23-1, 20-1, 05-3`,keyword:`기본 상담기술`,answer:`<ol>
<li><strong>공감</strong> : 상담자가 자신이 직접 경험하지 않고도 내담자의 감정을 거의 같은 수준으로 이해하는 능력이다.</li>
<li><strong>적극적 경청</strong> : 내담자가 표현하는 언어적 의미 외에 비언어적인 의미까지 세심하게 주목하는 것을 말한다.</li>
<li><strong>반영</strong> : 내담자의 생각과 말을 상담자가 다른 참신한 말로 부연하는 것을 말한다.</li>
<li><strong>직면</strong> : 상담사가 내담자로 하여금 자신의 문제에 회피하지 않고 도전하도록 하는 것이다.</li>
<li><strong>명료화</strong> : 내담자의 모호한 생각과 감정의 표현을 상담사가 분명하게 밝히는 것이다.</li>
<li><strong>수용</strong> : 내담자의 이야기에 주의 집중하고 내담자를 인격적으로 존중하는 기법이다.</li>
</ol>`,advanced:null,tips:null,partialScore:`각 1점`},{num:4,title:`성향검사의 종류를 6가지 쓰시오.`,points:6,frequency:`23-3`,keyword:`성향검사(습관적 수행검사)`,answer:`<ol>
<li>성격유형검사(MBTI)</li>
<li>성격 5요인(Big-5) 검사</li>
<li>미네소타 다면적 인성검사(MMPI)</li>
<li>직업선호도 검사 중 흥미검사</li>
<li>스트롱-캠밸 흥미검사(SCII)</li>
<li>직무만족도 검사</li>
</ol>`,advanced:`<p><strong>성향검사의 분류</strong></p>
<ul>
<li><strong>성격검사</strong> : 성격유형검사(MBTI), 성격 5요인(Big-5) 검사, 미네소타 다면적 인성검사(MMPI), 캘리포니아 성격검사(CPI)</li>
<li><strong>흥미검사</strong> : 직업선호도 검사 중 흥미검사, 스트롱-캠밸 흥미검사(SCII), 쿠더 직업흥미검사(KOIS)</li>
<li><strong>태도검사</strong> : 직무만족도 검사, 구직욕구검사</li>
</ul>`,tips:null,partialScore:`각 1점`},{num:5,title:`내담자 중심 상담을 성공적으로 이끌기 위해 상담자가 갖춰야 할 기본적인 태도 3가지를 설명하시오.`,points:6,frequency:`23-3, 16-1, 15-3, 15-1, 09-3, 07-3, 06-1`,keyword:`내담자중심 상담의 상담자 태도`,answer:`<ol>
<li><strong>일치성 또는 진실성</strong><br/>내담자와의 관계에서 상담자의 감정이나 생각을 있는 그대로 인정하고 일치화시키되, 있는 그대로 솔직하게 표현하는 것을 말한다.</li>
<li><strong>무조건적인 수용</strong><br/>내담자의 말을 비판하거나 평가하지 않고 그대로 수용함으로 내담자를 존중하는 상담자의 태도이다.</li>
<li><strong>공감적 이해</strong><br/>내담자의 감정과 경험을 마치 상담자 자신의 경험인 것처럼 이해하고자 하는 태도이다.</li>
</ol>`,advanced:null,tips:`기출빈도가 높은 문제입니다. 반드시 숙지하세요.`,partialScore:`각 2점, 설명이 없으면 1점`},{num:6,title:`규준의 종류 중 백분위 점수(percentile score), 표준점수(standard score), 표준등급(stanine scale)의 의미를 각각 설명하시오.`,points:6,frequency:`23-1·2·3, 21-2, 19-1, 18-3, 17-3, 15-1, 14-3, 12-2, 12-3, 10-4, 09-10, 09-3, 08-1, 07-1`,keyword:`집단 내 규준`,answer:`<ol>
<li><strong>백분위 점수</strong><br/>개인이 표준화된 집단에서 차지하는 상대적 위치를 가리키는 것으로 개인의 점수를 100개의 동일한 구간에서 순위를 정한다.</li>
<li><strong>표준점수</strong><br/>원점수를 주어진 집단의 평균을 중심으로 분포의 표준편차로 나누어 전환시킨 점수이다.</li>
<li><strong>표준등급</strong><br/>9등급 또는 스테나인 점수라고 하며, 원점수를 1~9등급까지 범주로 나누는 것이다.</li>
</ol>`,advanced:null,tips:`매우 기출빈도가 높은 문제입니다. 반드시 숙지하세요.`,partialScore:`각 2점, 설명이 없으면 1점`},{num:7,title:`다음은 준거타당도에 관한 사항이다. 물음에 답하시오.`,points:7,frequency:`23-3`,keyword:`준거타당도`,answer:`<h4>(1) 준거타당도의 종류 2가지</h4>
<ol>
<li><strong>예언타당도</strong><br/>피험자의 미래 행위를 측정하는 것이다. 예로써 적성검사에서 높은 점수를 받은 사람들일수록 입사 후 업무 수행이 우수한 것으로 나타났다면, 이 검사는 예언 타당도가 높은 것으로 볼 수 있다.</li>
<li><strong>동시타당도</strong><br/>피험자의 현재 상태를 측정하는 것이다. 예로써 영어면접 시험의 타당도를 입증하기 위해 동시 실시된 토익 등 공인영어시험 점수와 비교하는 것이다.</li>
</ol>
<h4>(2) 준거타당도가 직업상담에서 중요한 이유</h4>
<ol>
<li>직업에서의 성공가능성이나 장래의 직무수행 성과를 예측할 수 있다.</li>
<li>인사관리에 관한 의사결정의 공정성을 높일 수 있다.</li>
</ol>
<h4>(3) 실제연구 보다 타당도 계수가 낮은 이유</h4>
<ol>
<li>표집오차</li>
<li>준거측정치의 타당도</li>
<li>준거측정치의 신뢰도</li>
</ol>`,advanced:`<p>실제연구가 아닌 실증연구에서 타당도가 낮아지는 이유는 준거타당도의 크기에 영향을 미치는 요인과 같습니다.</p>
<ol>
<li>표집오차</li>
<li>범위제한</li>
<li>준거측정치의 타당도</li>
<li>준거측정치의 신뢰도</li>
</ol>
<p><strong>실제연구에서 타당도가 낮아지는 이유</strong></p>
<ol>
<li>실제 연구는 실증 연구에 비해 독립변인의 조작 및 가외변인의 통제가 어렵다.</li>
<li>실제 연구에서는 독립변인에 의한 효과와 가외변인의 효과를 명확히 구분하기 어렵다.</li>
<li>실제 연구는 실증연구에 비해 내적 타당도가 취약하다.</li>
</ol>`,tips:`준거타당도는 출제 빈도가 높은 문제입니다. 숙지하시길 바랍니다. 또한 문제에서 '실제(현장)연구의 타당도'를 묻는지 '실증(실험실)연구의 타당도'를 묻는지에 따라 답안이 달라질 수 있습니다.`,partialScore:`각 1점`},{num:8,title:`실험실 연구의 장점 3가지를 쓰시오.`,points:6,frequency:`23-3`,keyword:`실험실(실증) 연구`,answer:`<ol>
<li>연구대상 변수의 완벽한 통제가 가능한 실험이다.</li>
<li>단순한 예측을 넘어 원인 - 결과의 관계를 파악할 수 있다.</li>
<li>변인들 사이에 존재하는 인과관계를 설명하기에 유리하다.</li>
<li>인과관계가 잘 설명되어 내적 타당성이 높다.</li>
</ol>`,advanced:`<p><strong>현장(실제)연구</strong></p>
<p>현장 연구는 현장에서 이루어지는 연구로 독립변인을 조작하지 않고 현장에서 면접, 설문조사, 관찰 등을 이용해서 이루어지는 연구를 말하는 것으로 관련 방법으로는 전수조사, 표본조사, 참여관찰법 등이 있고 현장 실험처럼 외적타당도가 높다.</p>`,tips:null,partialScore:`각 2점`},{num:9,title:`질문지법(설문법)의 장점과 단점을 각각 2가지씩 쓰시오.`,points:4,frequency:`23-3`,keyword:`직무분석의 질문지법(설문법)`,answer:`<h4>장점</h4>
<ol>
<li>관찰법이나 면접법과는 달리 양적인 정보를 얻는 데 적합하다.</li>
<li>많은 사람들로부터 짧은 시간 내에 정보를 얻을 수 있다.</li>
</ol>
<h4>단점</h4>
<ol>
<li>질문지의 설계 및 작성이 어렵고, 완전한 사실을 얻기 힘들다.</li>
<li>응답자가 성실성이 부족할 경우 회수율이 낮을 수 있다.</li>
</ol>`,advanced:`<ul>
<li>설문지를 배부해 직무담당자가 기록하도록 하여 정보를 얻는 방법이다.</li>
<li>직무수행에 요구되는 지식, 기술, 능력들이 얼마나 자주 사용되는지, 얼마나 중요한지 등을 평가한다.</li>
</ul>`,tips:null,partialScore:`각 1점`},{num:10,title:`홀랜드(Holland) 직업흥미검사의 6가지 유형을 쓰고, 각각에 대해 간략히 설명하시오.`,points:6,frequency:`23-3, 23-2, 23-1, 22-1, 19-2, 18-2, 16-1, 14-3, 09-1, 08-1, 07-1, 04-1`,keyword:`홀랜드(Holland)의 흥미유형`,answer:`<ol>
<li><strong>현실형</strong> : 기계, 도구, 동물에 관한 체계적인 조작활동을 좋아하며 현장 일을 선호하나 사회적 기술이 부족하다.</li>
<li><strong>탐구형</strong> : 호기심이 많고 분석적이여서 과학적 탐구활동을 선호하나 리더십 기술이 부족하다.</li>
<li><strong>예술형</strong> : 창의적이며 감성이 풍부하고 개방적이나 틀에 박힌 일을 싫어하며 규범적인 기술이 부족하다.</li>
<li><strong>사회형</strong> : 친절하고 이해심이 많으며 다른 사람을 돕는 것을 즐기나 과학적이거나 기계적인 활동 능력이 부족하다.</li>
<li><strong>진취형</strong> : 외향적이며 지도력이 있고, 말을 잘하나 상징적, 체계적, 과학적 활동에 대한 능력은 부족하다.</li>
<li><strong>관습형</strong> : 자료를 잘 정리하고 순응적이며 책임감이 강한 반면, 변화에 약하고 융통성이 부족하다.</li>
</ol>`,advanced:null,tips:`출제빈도가 높은 문제입니다. 반드시 숙지하세요.`,partialScore:`각 1점`},{num:11,title:`인지·정서적 상담에서 인간에 대한 기본가정, 기본개념, 상담의 목표를 쓰시오.`,points:6,frequency:`23-3, 20-4, 12-2`,keyword:`인지·정서 상담`,answer:`<h4>(1) 인간에 대한 기본가정</h4>
<ol>
<li>인간을 합리적인 사고를 할 수 있는 동시에 비합리적인 사고의 가능성도 가지고 있는 존재로 보았다.</li>
<li>모든 내담자의 행동적·정서적 문제는 비논리적이고 비합리적인 사고에서 발생한 것이다.</li>
</ol>
<h4>(2) 기본개념</h4>
<ol>
<li>문제해결을 위해 사고의 분석과 논박 그리고 상담사의 교육적 접근을 강조한다.</li>
<li>비합리적 사고를 합리적 사고로 전환하고자 ABCDE모형을 적용한다.</li>
</ol>
<h4>(3) 상담의 목표</h4>
<ol>
<li>자기관심, 자기수용, 불확실성의 수용, 관용, 융통성 등을 통해 자기 책임감 등 합리적인 신념의 변화를 유도한다.</li>
</ol>`,advanced:null,tips:null,partialScore:`각 2점`},{num:12,title:`정신역동 직업상담 모형을 구체화시킨 보딘의 3단계 직업상담과정을 쓰고 각각에 대해 설명하시오.`,points:6,frequency:`23-3, 20-3, 18-2, 17-3, 15-3, 12-1`,keyword:`보딘(Bordin)의 직업상담과정`,answer:`<ol>
<li><strong>탐색과 계약설정의 단계</strong><br/>내담자의 욕구와 정신역동을 탐색할 수 있도록 돕고, 상담전략을 합의하는 단계이다.</li>
<li><strong>중대한(핵심)결정의 단계</strong><br/>개인의 성격에 맞추어 직업을 변경할 것인지, 직업에 맞추어 성격을 변경할 것인지 결정한다.</li>
<li><strong>변화를 위한 노력의 단계</strong><br/>자신의 선택한 직업이 필요로 하는 부분에 대하여 변화를 모색하고 자신의 성격, 욕구 등을 변화시키고자 하는 노력의 단계이다.</li>
</ol>`,advanced:null,tips:null,partialScore:`각 2점, 설명이 없으면 각 1점`},{num:13,title:`내담자와의 초기면담 수행 시 상담자가 유의해야 할 사항 4가지를 쓰시오.`,points:4,frequency:`23-3, 20-3, 07-01, 07-02`,keyword:`초기면담 수행 시 상담자 유의사항`,answer:`<ol>
<li>상담 전 모든 사례 자료 검토하기</li>
<li>내담자와 만나기</li>
<li>내담자의 초기 목표를 명확히 제시하기</li>
<li>비밀 유지에 대해 설명하기</li>
<li>상담시의 필수질문들을 확인하기</li>
</ol>`,advanced:`<ol>
<li>면담시작 전에 내담자 유형에 관한 가능한 모든 사례자료를 검토하기</li>
<li>내담자와 만나기</li>
<li>내담자의 초기목표를 명확히 하기</li>
<li>내담자의 직업상담에 대한 기대를 결정하기</li>
<li>내담자가 상담자의 기대를 얼마나 잘 수용하는지 관찰하기</li>
<li>비밀유지에 대해 설명하기</li>
<li>초기면담의 내용 요약하기</li>
<li>반드시 짚고 넘어가야 할 상담시의 필수질문들을 확인하기</li>
<li>과제물 부여하기</li>
</ol>`,tips:`5가지 중 4가지만 적으시면 됩니다.`,partialScore:`각 1점`}]},{id:`2023-2`,year:2023,round:2,title:`2023년 제2회 직업상담사 실기`,totalPoints:100,questions:[{num:1,title:`보딘의 심리적 원인 5가지를 쓰고 설명하시오.`,points:10,frequency:`23-2, 21-1, 19-2, 18-3, 15-3, 14-1, 14-3, 13-3, 11-1, 10-2, 09-2, 06-1`,keyword:`보딘(Bordin)의 심리적 원인`,answer:`<ol>
<li><strong>내적갈등(자아갈등)</strong><br/>자아개념과 다른 심리적 기능 간의 갈등으로 직업결정의 어려움을 가지는 경우이다.</li>
<li><strong>정보의 부족</strong><br/>개인이 진로에 관련정보를 받지 못하는 경우, 직업선택과 진로문제 해결에 어려움을 가지게 된다.</li>
<li><strong>의존성</strong><br/>개인의 진로문제를 책임을 지는 것이 어렵다고 느끼며, 스스로 해결하지 못하고 주변이나 타인에 의존하는 경우이다.</li>
<li><strong>확신의 결여(문제없음)</strong><br/>잠정적인 진로 및 직업선택과 미래 진로에 대한 확신이 부족한 상황으로 내담자가 진로에 관한 선택을 내린 이후에도 단지 그것을 확인하기 위해서 상담자를 찾는 경우이다.</li>
<li><strong>진로선택의 불안</strong><br/>자신이 원하는 일과 중요한 타인의 요구가 다를 때 개인은 진로선택의 불안을 느끼게 된다.</li>
</ol>`,advanced:null,tips:`이 문제는 빈출 문제를 확장한 문제로 여러 차례 3가지만 요구하다가 처음 5가지를 모두 쓰도록 요구한 문제입니다.`,partialScore:`각 2점, 설명이 없으면 1점`},{num:2,title:`롭퀴스트와 데이비스의 직업적응이론에서 직업적응방식의 유형 3가지를 쓰고 설명하시오.`,points:6,frequency:`23-2, 19-1`,keyword:`직업적응방식`,answer:`<ol>
<li><strong>끈기</strong> : 환경이 맞지 않아도 오래 견딜 수 있는 정도를 의미한다.</li>
<li><strong>적극성</strong> : 자신과 환경을 좀 더 조화롭게 하려는 노력을 말한다.</li>
<li><strong>반응성</strong> : 작업성격의 변화 시 환경에 반응 정도를 말한다.</li>
<li><strong>융통성</strong> : 개인이 작업환경과 개인적 환경 간의 부조화를 참아내는 정도를 말한다.</li>
</ol>`,advanced:null,tips:`이 문제는 기출 문제를 확장한 문제로 3가지 쓰기만 요구하다가 쓰고 설명하기를 요구한 문제입니다.`,partialScore:`각 2점, 설명이 없으면 1점`},{num:3,title:`틴슬레이와 브레들리(Tinsley & Bradley)가 제시한 검사 해석의 4단계를 설명하시오.`,points:4,frequency:`23-2, 20-4`,keyword:`Tinsley & Bradley의 검사 해석 4단계`,answer:`<ol>
<li><strong>해석 준비</strong><br/>검사결과와 내담자의 개인적 정보들과 어떻게 통합되어 해석되는지를 검토한다.</li>
<li><strong>내담자 준비시키기</strong><br/>내담자가 검사결과 해석을 받아들일 수 있도록 준비시킨다.</li>
<li><strong>결과 전달하기</strong><br/>내담자가 이해하기 쉬운 용어를 사용하여 검사결과가 의미하는 바를 전달한다.</li>
<li><strong>추후활동</strong><br/>상담결과에 대한 의견을 나누며 내담자가 그것을 어떻게 이해했는지 확인한다.</li>
</ol>`,advanced:`<p><strong>틴슬레이와 브레들리가 제시한 검사 결과 검토의 2단계</strong></p>
<ol>
<li><strong>1단계 : 이해</strong><br/>내담자의 검사결과 해석에 있어 규준과 참조하여 검사점수의 의미를 충분히 이해한다.</li>
<li><strong>2단계 : 통합</strong><br/>이해를 통해 얻어진 검사 정보와 상담사가 수집한 내담자에 대한 다른 정보들과 통합한다.</li>
</ol>`,tips:null,partialScore:`각 1점`},{num:4,title:`Gottfredson의 직업과 관련된 개인발달의 4단계를 쓰고, 각각에 대해 설명하시오.`,points:4,frequency:`23-2, 16-3, 15-3, 11-3, 11-2`,keyword:`고트프레드슨(Gottfredson)의 직업포부 발달단계`,answer:`<ol>
<li><strong>힘과 크기 지향성</strong><br/>사고과정이 구체화되며 어른이 된다는 것의 의미를 알게 된다.</li>
<li><strong>성역할 지향성</strong><br/>자아개념이 성의 발달에 의해서 영향을 받게 된다.</li>
<li><strong>사회적 가치 지향성</strong><br/>사회계층에 대한 개념이 생겨나기 시작하면서 '상황 속 자아'를 인식하기에 이른다.</li>
<li><strong>내적, 고유한 자아 지향성</strong><br/>자아성찰과 사회계층의 맥락에서 직업적 포부가 더욱 발달하게 된다.</li>
</ol>`,advanced:null,tips:null,partialScore:`각 1점, 설명이 없으면 0.5점`},{num:5,title:`형태주의(게슈탈트) 상담의 상담기법을 4가지만 쓰시오.`,points:4,frequency:`23-2, 19-3, 18-2, 15-3, 13-2, 12-1, 11-1, 10-4`,keyword:`게슈탈트(형태주의) 이론의 상담기법`,answer:`<ol>
<li><strong>욕구와 감정의 자각</strong> : 내담자의 현재 느껴지는 욕구와 감정을 자각시킨다.</li>
<li><strong>신체자각</strong> : 현재 내담자 신체적 느낌을 통해 자신의 감정을 자각한다.</li>
<li><strong>언어자각</strong> : 내담자의 언어를 통해 자신의 욕구에 대한 책임을 자각한다.</li>
<li><strong>과장하기</strong> : 욕구와 감정을 명확히 지각하도록 자신의 행동과 언어를 과장하게 한다.</li>
<li><strong>빈 의자 기법</strong> : 중요한 타인을 빈 의자에 투사하여 자신의 감정을 표현한다.</li>
<li><strong>꿈 작업</strong> : 마치 꿈이 현재 사건인 것처럼 상상 꿈의 각 부분을 연기하게 한다.</li>
</ol>`,advanced:`<p>게슈탈트(형태주의) 이론의 상담기법은 내담자 자신의 욕구와 감정을 자각시키는 방법들로 자각(알아차림)은 개체가 자신의 욕구나 감정을 지각한 다음 게슈탈트로 형성하여 전경으로 떠올리는 행위를 말한다. 이러한 알아차림은 누구에게나 자연적으로 갖추어져 있는 능력이다.</p>`,tips:`제시된 답안 중 4가지만 쓰시면 됩니다.`,partialScore:`각 1점 (설명은 적지 않아도 됩니다.)`},{num:6,title:`Super의 발달단계 5단계를 쓰고, 각 단계에 대해 설명하시오.`,points:5,frequency:`23-2, 20-4, 19-2, 17-1, 09-2, 03-3`,keyword:`Super의 발달단계`,answer:`<ol>
<li><strong>성장기</strong><br/>가정이나 학교에서 중요한 타인을 동일시하여 자아개념을 발달시키는 시기로, 초기에는 욕구와 환상이 지배적이나 점차 흥미와 능력을 중시한다.</li>
<li><strong>탐색기</strong><br/>학교·여가활동, 시간제 일과 같은 활동을 통해 자아를 검증하고 역할을 수행하며 자신에게 적합한 직업을 탐색하는 시기이다.</li>
<li><strong>확립기</strong><br/>자신에게 적합한 직업을 발견·종사하여 기반을 다져 나가는 시기이다.</li>
<li><strong>유지기</strong><br/>직업에서 자신의 위치가 공고해지고 자신의 자리를 유지하기 위해 노력하며 안정된 삶을 살아가는 시기이다.</li>
<li><strong>쇠퇴기</strong><br/>정신적·육체적으로 기능이 쇠퇴함에 따라 직업에서 은퇴하게 되어 새로운 역할과 활동을 찾게 되는 시기이다.</li>
</ol>`,advanced:null,tips:null,partialScore:`각 1점, 설명이 없으면 0.5점`},{num:7,title:`구성타당도를 분석하는 대표적인 방법 2가지를 쓰고 설명하시오.`,points:4,frequency:`23-2, 19-3, 16-1, 15-1, 15-2, 10-1, 10-4, 09-3, 08-1, 06-3, 03-1, 03-3, 01-1`,keyword:`구성타당도의 종류`,answer:`<ol>
<li><strong>변별타당도</strong> : 검사의 결과가 그 속성과 관계없는 변인들과 낮은 상관관계를 지니고 있는지 정도를 측정, 상관계수가 낮을수록 변별타당도가 높다.</li>
<li><strong>수렴타당도</strong> : 검사의 결과가 그 속성과 관계있는 변인들과 높은 상관관계를 지니고 있는지 정도를 측정, 상관계수가 높을수록 수렴타당도가 높다.</li>
<li><strong>요인분석법</strong> : 검사 문항들 간의 상관관계를 분석하여 상관이 높은 문항들을 요인으로 묶어주는 통계방법</li>
</ol>`,advanced:`<p><strong>다속성·다측정방법행렬표(MTMM)</strong> : 둘 이상의 특성에 대해 둘이상의 방법으로 측정하여 그 결과를 분석한 후 두 가지 측정결과가 어느 정도 상관관계가 있는지 알아보는 방법으로 순서는 수렴타당도의 시행 후 변별타당도 실시하고 다시 이 두 점수간의 상관관계를 본다.</p>`,tips:`변별타당도, 수렴타당도, 요인분석법 중 변별타당도, 수렴타당도 2가지를 답안으로 작성하시는 것을 추천 드립니다.`,partialScore:`각 2점, 설명이 없으면 1점`},{num:8,title:`직무평가방법 3가지를 쓰고 설명하시오.`,points:6,frequency:`23-2, 21-3`,keyword:`직무평가방법`,answer:`<ol>
<li><strong>서열법</strong> : 가장 오래되고 간단한 방법으로 전체적·포괄적인 관점에서 각 직무를 상호 비교하여 순위를 결정하는 방법이다.</li>
<li><strong>분류법</strong> : 서열법에서 좀 더 발전된 방식으로 어떠한 기준에 따라 사전에 만들어 놓은 등급에 각 직무를 적절히 판정하여 맞추어 넣는 평가방법이다.</li>
<li><strong>점수법</strong> : 직무를 구성요소로 분해하고 각 요소별로 중요도에 따라 점수를 부여한 후, 각 점수를 계산하여 각 직무별 가치를 평가하는 방법이다.</li>
<li><strong>요인(소)비교법</strong> : 가장 핵심이 되는 몇 개의 기준 직무를 선정하고 각 직무의 평가요소를 기준직무의 평가요소와 결부시켜 비교함으로써 모든 직무의 상대적 가치를 결정하는 방법이다.</li>
</ol>`,advanced:`<p><strong>질적 평가방법</strong></p>
<ol>
<li>서열법(ranking method)</li>
<li>분류법(classification method)</li>
</ol>
<p><strong>양적 평가방법</strong></p>
<ol>
<li>점수법(point method)</li>
<li>요인(소)비교법(factor comparison method)</li>
</ol>`,tips:`제시된 답안 중 3가지만 적으면 됩니다.`,partialScore:`각 2점`},{num:9,title:`홀랜드(Holland) 직업흥미검사의 6가지 유형을 쓰고, 각각에 대해 간략히 설명하시오.`,points:6,frequency:`23-2, 23-1, 22-1, 19-2, 18-2, 16-1, 14-3, 09-1, 08-1, 07-1, 04-1`,keyword:`홀랜드(Holland)의 흥미유형`,answer:`<ol>
<li><strong>현실형</strong> : 기계, 도구, 동물에 관한 체계적인 조작활동을 좋아하며 현장 일을 선호하나 사회적 기술이 부족하다.</li>
<li><strong>탐구형</strong> : 호기심이 많고 분석적이여서 과학적 탐구활동을 선호하나 리더십 기술이 부족하다.</li>
<li><strong>예술형</strong> : 창의적이며 감성이 풍부하고 개방적이나 틀에 박힌 일을 싫어하며 규범적인 기술이 부족하다.</li>
<li><strong>사회형</strong> : 친절하고 이해심이 많으며 다른 사람을 돕는 것을 즐기나 과학적이거나 기계적인 활동 능력이 부족하다.</li>
<li><strong>진취형</strong> : 외향적이며 지도력이 있고, 말을 잘하나 상징적, 체계적, 과학적 활동에 대한 능력은 부족하다.</li>
<li><strong>관습형</strong> : 자료를 잘 정리하고 순응적이며 책임감이 강한 반면, 변화에 약하고 융통성이 부족하다.</li>
</ol>`,advanced:null,tips:`출제빈도가 높은 문제입니다. 반드시 숙지하세요.`,partialScore:`각 1점`},{num:10,title:`집단 내 규준의 종류 3가지를 쓰고 설명하시오.`,points:6,frequency:`23-2, 23-1, 21-2, 20-1, 19-1, 18-3, 17-3, 15-1, 14-3, 12-2, 12-3, 10-4, 09-10, 09-3, 08-1, 07-1`,keyword:`집단 내 규준`,answer:`<ol>
<li><strong>백분위 점수</strong><br/>개인이 표준화된 집단에서 차지하는 상대적 위치를 가리키는 것으로 개인의 점수를 100개의 동일한 구간에서 순위를 정한다.</li>
<li><strong>표준점수</strong><br/>원점수를 주어진 집단의 평균을 중심으로 분포의 표준편차(등간 척도)로 전환시킨 점수이다.</li>
<li><strong>표준등급</strong><br/>9등급 또는 스테나인 점수라고 하며, 원점수를 1~9등급까지 범주로 나누는 것이다.</li>
</ol>`,advanced:null,tips:`매우 기출빈도가 높은 문제입니다. 반드시 숙지하세요.`,partialScore:`각 2점`},{num:11,title:`직업심리검사의 신뢰도를 추정하는 방법 3가지를 쓰고 설명하시오.`,points:6,frequency:`23-2, 21-3, 18-3, 18-1`,keyword:`신뢰도를 추정하는 방법(종류)`,answer:`<ol>
<li><strong>동형검사신뢰도</strong> : 동형의 2가지 검사를 동일인에게 시행하여 두 검사점수 간의 일관성을 추정하는 방법이다.</li>
<li><strong>반분신뢰도</strong> : 한 개의 검사를 적절히 두 부분으로 나누어 시행하는 방법이다.</li>
<li><strong>검사-재검사신뢰도</strong> : 시간차를 두고 동일검사를 반복 측정하는 방법이다.</li>
</ol>`,advanced:null,tips:null,partialScore:`각 2점, 설명이 없으면 1점`},{num:12,title:`실존주의 상담자들이 내담자의 궁극적 관심사와 관련하여 중요하게 생각하는 주제를 3가지 쓰고 설명하시오.`,points:6,frequency:`23-2, 20-2, 17-2, 12-3, 10-2, 09-3`,keyword:`실존주의의 궁극적 관심사`,answer:`<ol>
<li><strong>죽음</strong> : 죽음의 불가피성의 삶의 유한성을 더욱 가치있게 만든다.</li>
<li><strong>자유</strong> : 인간은 자기결정적인 존재로서 선택할 능력과 책임이 있다.</li>
<li><strong>소외(고립)</strong> : 인간은 자신의 실존적 고립에 직면함으로써, 타인과 성숙한 관계를 맺을 수 있다.</li>
<li><strong>무의미성</strong> : 인간은 인생을 살아가면서 끊임없는 삶의 의미를 추구한다.</li>
</ol>`,advanced:`<p>이 문제는 두 가지 답안이 존재합니다. 제시된 해설 답안은 얄롬(Yalom)이란 학자가 제시한 답안이고 또 하나는 일반적인 실존주의 상담사들의 견해가 있습니다.</p>
<p><strong>일반적인 실존주의 상담사들의 견해</strong></p>
<ol>
<li><strong>삶의 의미성</strong> : 인간은 삶을 통해 스스로의 존재 의미를 발견해야 한다.</li>
<li><strong>진실성</strong> : 개인의 실존을 회복하기 위한 진실성 있는 노력을 해야 한다.</li>
<li><strong>자유와 책임</strong> : 인간은 자기결정적인 존재로서 선택할 능력과 책임이 있다.</li>
<li><strong>죽음과 비존재</strong> : 삶과 죽음은 분리될 수 없는 연속성이며, 인간은 비존재에 대한 불안감을 가진다.</li>
</ol>`,tips:`제시된 답안 중 3가지만 작성하시면 됩니다.`,partialScore:`각 2점`},{num:13,title:`내부노동시장의 형성요인 3가지를 쓰고 각각 설명하시오.`,points:6,frequency:`23-2, 18-1, 09-3`,keyword:`내부노동시장의 형성요인`,answer:`<ol>
<li><strong>숙련의 특수성</strong> : 기업 내의 내부노동력만이 유일하게 소유하게 되는 숙련으로 기업의 특수적 인적자본을 형성하게 한다.</li>
<li><strong>현장훈련</strong> : 실제 현장의 노하우는 실무현장에서 전임자의 경험적 지식전달을 말한다.</li>
<li><strong>기업 내의 관습</strong> : 근로자들 사이의 관습과 기업의 문화가 존재하여 기업의 내부노동시장을 발전시킨다.</li>
</ol>`,advanced:null,tips:null,partialScore:`각 2점`},{num:14,title:`한국직업사전의 부가 직업정보 중 육체활동의 구분 5가지를 쓰시오.`,points:5,frequency:`23-2, 20-4`,keyword:`한국직업사전 육체활동 구분`,answer:`<ol>
<li>균형감각</li>
<li>웅크림</li>
<li>손사용</li>
<li>시각</li>
<li>언어력</li>
<li>청각</li>
</ol>`,advanced:null,tips:null,partialScore:`각 1점`},{num:15,title:`한국표준직업분류(KSCO)의 대분류와 직능수준의 관계를 묻는 표 안의 답란을 채우시오.`,points:5,frequency:`23-2, 21-1`,keyword:`KSCO 대분류와 직능수준`,answer:`<table>
<tr><th>대분류 항목</th><th>직능수준</th></tr>
<tr><td>관리자</td><td>제<strong>4</strong>직능수준 혹은 제<strong>3</strong>직능수준 필요</td></tr>
<tr><td>판매종사자</td><td>제<strong>2</strong>직능수준 필요</td></tr>
<tr><td>장치·기계 조작 및 조립종사자</td><td>제<strong>2</strong>직능수준 필요</td></tr>
<tr><td>군인</td><td>제<strong>2</strong>직능수준 이상 필요</td></tr>
</table>`,advanced:null,tips:null,partialScore:`각 1점`},{num:16,title:`한국표준산업분류(KSIC)의 생산단위의 활동 형태 중 주된활동과 보조활동을 각각 설명하시오.`,points:6,frequency:`23-2, 22-3, 21-2`,keyword:`KSIC 생산단위 활동 형태`,answer:`<ol>
<li><strong>주된 산업활동</strong> : 생산된 재화 또는 제공된 서비스 중 부가가치가 가장 큰 활동을 말한다.</li>
<li><strong>부차적 산업활동</strong> : 주된 산업활동 이외의 재화 생산 및 서비스 제공 활동을 말한다.</li>
<li><strong>보조활동(보조적 활동)</strong> : 모 생산단위에서 사용되는 비내구재 또는 서비스를 제공하는 활동을 말한다.</li>
</ol>`,advanced:null,tips:null,partialScore:`각 2점`},{num:17,title:`실업과 관련된 제호다(Jahoda)의 박탈이론에 따르면 일반적으로 고용상태에 있는 것이 실직상태에 있는 것보다 여러 가지 잠재효과가 있다고 한다. 5가지 잠재효과를 기술하시오.`,points:6,frequency:`23-2, 05-3, 01-1`,keyword:`제호다(Jahoda)의 박탈이론`,answer:`<ol>
<li><strong>공동의 목표</strong></li>
<li><strong>시간의 조직화</strong></li>
<li><strong>사회적 접촉</strong></li>
<li><strong>의미 있는 활동</strong></li>
<li><strong>사회적 정체감과 지위</strong></li>
</ol>`,advanced:null,tips:null,partialScore:`각 1점`},{num:18,title:`기혼여성의 경제활동참가율을 낮게 하는 요인 6가지를 쓰시오.`,points:6,frequency:`23-2, 14-2, 12-1, 11-3, 10-3, 07-1, 05-3, 03-1`,keyword:`기혼여성 경제활동참가율 저해요인`,answer:`<ol>
<li>여성의 교육수준</li>
<li>사회적 요인</li>
<li>법, 제도적 요인</li>
<li>배우자의 경제활동</li>
<li>가사부담 경감시설</li>
<li>자녀의 수</li>
</ol>`,advanced:null,tips:null,partialScore:`각 1점`}]}];function So(e){return xo.find(t=>t.id===e)||null}function Co(){return[...xo].sort((e,t)=>t.year===e.year?t.round-e.round:t.year-e.year)}function wo(){let e=Co();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`실기 기출문제`,description:`직업상담사 2급 실기 기출문제 해설 - 회차별 기출문제와 상세 해설`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsx)(`h1`,{children:`실기 기출문제 해설`}),(0,_.jsx)(`p`,{className:`page-desc`,children:`회차별 실기 기출문제와 상세 해설을 확인하세요`})]})}),(0,_.jsxs)(`div`,{className:`container silgi-exam-page`,children:[(0,_.jsxs)(`div`,{className:`silgi-exam-stats-row`,children:[(0,_.jsxs)(`div`,{className:`silgi-exam-stat`,children:[(0,_.jsx)(`span`,{className:`silgi-exam-stat-value`,children:e.length}),(0,_.jsx)(`span`,{className:`silgi-exam-stat-label`,children:`수록 회차`})]}),(0,_.jsxs)(`div`,{className:`silgi-exam-stat`,children:[(0,_.jsx)(`span`,{className:`silgi-exam-stat-value`,children:e.reduce((e,t)=>e+t.questions.length,0)}),(0,_.jsx)(`span`,{className:`silgi-exam-stat-label`,children:`총 문항 수`})]}),(0,_.jsxs)(`div`,{className:`silgi-exam-stat`,children:[(0,_.jsx)(`span`,{className:`silgi-exam-stat-value`,children:`주관식`}),(0,_.jsx)(`span`,{className:`silgi-exam-stat-label`,children:`출제 유형`})]})]}),(0,_.jsx)(`div`,{className:`silgi-exam-grid`,children:e.map(e=>(0,_.jsxs)(l,{to:`/silgi/past/${e.id}`,className:`silgi-exam-card`,children:[(0,_.jsxs)(`div`,{className:`silgi-exam-card-badge`,children:[e.year,`년 제`,e.round,`회`]}),(0,_.jsx)(`h3`,{children:e.title}),(0,_.jsxs)(`div`,{className:`silgi-exam-card-info`,children:[(0,_.jsxs)(`div`,{className:`silgi-exam-card-info-item`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-file-lines`}),(0,_.jsxs)(`span`,{children:[e.questions.length,`문항`]})]}),(0,_.jsxs)(`div`,{className:`silgi-exam-card-info-item`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-star`}),(0,_.jsxs)(`span`,{children:[e.totalPoints,`점 만점`]})]}),(0,_.jsxs)(`div`,{className:`silgi-exam-card-info-item`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-clock`}),(0,_.jsx)(`span`,{children:`150분`})]})]}),(0,_.jsx)(`div`,{className:`silgi-exam-card-arrow`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]},e.id))}),(0,_.jsxs)(`div`,{className:`silgi-exam-notice`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),(0,_.jsx)(`p`,{children:`기출문제 데이터는 지속적으로 추가됩니다. 해설은 학습 참고용이며, 실제 시험에서는 출제 의도에 맞게 답안을 작성하세요.`})]})]})]})}function To({question:e,isOpen:t,onToggle:n}){return(0,_.jsxs)(`div`,{className:`sq-card ${t?`sq-card--open`:``}`,children:[(0,_.jsxs)(`button`,{className:`sq-card-header`,onClick:n,type:`button`,children:[(0,_.jsxs)(`div`,{className:`sq-card-num`,children:[`Q`,e.num]}),(0,_.jsxs)(`div`,{className:`sq-card-title-area`,children:[(0,_.jsx)(`h3`,{className:`sq-card-title`,children:e.title}),(0,_.jsxs)(`div`,{className:`sq-card-meta`,children:[(0,_.jsxs)(`span`,{className:`sq-badge sq-badge--points`,children:[e.points,`점`]}),(0,_.jsx)(`span`,{className:`sq-badge sq-badge--keyword`,children:e.keyword})]})]}),(0,_.jsx)(`div`,{className:`sq-card-toggle`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-${t?`up`:`down`}`})})]}),t&&(0,_.jsxs)(`div`,{className:`sq-card-body`,children:[(0,_.jsxs)(`div`,{className:`sq-frequency`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-bar`}),(0,_.jsxs)(`span`,{children:[`출제 이력: `,e.frequency]})]}),(0,_.jsxs)(`div`,{className:`sq-section`,children:[(0,_.jsxs)(`div`,{className:`sq-section-label`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-check-circle`}),(0,_.jsx)(`span`,{children:`해설`})]}),(0,_.jsx)(`div`,{className:`sq-section-content`,dangerouslySetInnerHTML:{__html:e.answer}})]}),e.advanced&&(0,_.jsxs)(`div`,{className:`sq-section sq-section--advanced`,children:[(0,_.jsxs)(`div`,{className:`sq-section-label`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-graduation-cap`}),(0,_.jsx)(`span`,{children:`더 나아가기`})]}),(0,_.jsx)(`div`,{className:`sq-section-content`,dangerouslySetInnerHTML:{__html:e.advanced}})]}),e.tips&&(0,_.jsxs)(`div`,{className:`sq-section sq-section--tips`,children:[(0,_.jsxs)(`div`,{className:`sq-section-label`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-lightbulb`}),(0,_.jsx)(`span`,{children:`꿀팁`})]}),(0,_.jsx)(`p`,{className:`sq-section-content`,children:e.tips})]}),(0,_.jsxs)(`div`,{className:`sq-partial-score`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen`}),(0,_.jsxs)(`span`,{children:[`부분 점수: `,e.partialScore]})]})]})]})}function Eo(){let{examId:e}=o(),t=So(e),[n,r]=(0,g.useState)(new Set);if(!t)return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsx)(`h1`,{children:`시험을 찾을 수 없습니다`})})}),(0,_.jsxs)(`div`,{className:`container`,style:{padding:`60px 0`,textAlign:`center`},children:[(0,_.jsx)(`p`,{children:`요청하신 기출문제를 찾을 수 없습니다.`}),(0,_.jsx)(l,{to:`/silgi/past`,className:`btn btn-primary`,style:{marginTop:20},children:`목록으로 돌아가기`})]})]});let i=e=>{r(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},a=()=>{r(new Set(t.questions.map(e=>e.num)))},s=()=>{r(new Set)},c=t.questions.reduce((e,t)=>e+t.points,0);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:t.title,description:`${t.title} 기출문제 ${t.questions.length}문항 상세 해설`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(l,{to:`/silgi/past`,className:`sq-back-link`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),` 기출문제 목록`]}),(0,_.jsx)(`h1`,{children:t.title}),(0,_.jsxs)(`p`,{className:`page-desc`,children:[`총 `,t.questions.length,`문항 · `,c,`점 만점 · 150분`]})]})}),(0,_.jsxs)(`div`,{className:`container silgi-exam-page`,children:[(0,_.jsxs)(`div`,{className:`sq-controls`,children:[(0,_.jsxs)(`button`,{className:`sq-control-btn`,onClick:a,type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-angles-down`}),` 전체 펼치기`]}),(0,_.jsxs)(`button`,{className:`sq-control-btn`,onClick:s,type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-angles-up`}),` 전체 접기`]}),(0,_.jsxs)(`span`,{className:`sq-control-count`,children:[n.size,` / `,t.questions.length,` 펼침`]})]}),(0,_.jsx)(`div`,{className:`sq-list`,children:t.questions.map(e=>(0,_.jsx)(To,{question:e,isOpen:n.has(e.num),onToggle:()=>i(e.num)},e.num))}),(0,_.jsxs)(`div`,{className:`sq-bottom-nav`,children:[(0,_.jsxs)(l,{to:`/silgi/past`,className:`btn btn-secondary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-list`}),` 기출문제 목록`]}),(0,_.jsxs)(l,{to:`/silgi`,className:`btn btn-primary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`}),` 실기 연습하기`]})]})]})]})}function Do({question:e,isOpen:t,onToggle:n}){let r=oo.find(t=>t.id===e.category);return(0,_.jsxs)(`div`,{className:`sq-card ${t?`sq-card--open`:``}`,children:[(0,_.jsxs)(`button`,{className:`sq-card-header`,onClick:n,type:`button`,children:[(0,_.jsxs)(`div`,{className:`sq-card-num`,children:[`Q`,e.num]}),(0,_.jsxs)(`div`,{className:`sq-card-title-area`,children:[(0,_.jsx)(`h3`,{className:`sq-card-title`,children:e.title}),(0,_.jsxs)(`div`,{className:`sq-card-meta`,children:[(0,_.jsx)(`span`,{className:`sq-badge`,style:{background:`${r?.color}18`,color:r?.color},children:r?.label}),(0,_.jsx)(`span`,{className:`sq-badge sq-badge--keyword`,children:e.keyword})]})]}),(0,_.jsx)(`div`,{className:`sq-card-toggle`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-${t?`up`:`down`}`})})]}),t&&(0,_.jsxs)(`div`,{className:`sq-card-body`,children:[(0,_.jsxs)(`div`,{className:`sq-frequency`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-bar`}),(0,_.jsxs)(`span`,{children:[`출제 이력: `,e.frequency]})]}),(0,_.jsxs)(`div`,{className:`sq-section`,children:[(0,_.jsxs)(`div`,{className:`sq-section-label`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-check-circle`}),(0,_.jsx)(`span`,{children:`상세 해설`})]}),(0,_.jsx)(`div`,{className:`sq-section-content`,dangerouslySetInnerHTML:{__html:e.answer}})]})]})]})}function Oo(){let[e,t]=(0,g.useState)(`all`),[n,r]=(0,g.useState)(new Set),[i,a]=(0,g.useState)(``),o=(0,g.useMemo)(()=>lo(),[]),s=(0,g.useMemo)(()=>{let t=co(e);if(i.trim()){let e=i.trim().toLowerCase();t=t.filter(t=>t.title.toLowerCase().includes(e)||t.keyword.toLowerCase().includes(e))}return t},[e,i]),c=e=>{r(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`8개년 빈출 기출정리`,description:`직업상담사 2급 실기 2018~2025 8개년 빈출 기출문제 상세 해설`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(l,{to:`/silgi`,className:`sq-back-link`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),` 실기 시험`]}),(0,_.jsx)(`h1`,{children:`8개년 빈출 기출정리`}),(0,_.jsxs)(`p`,{className:`page-desc`,children:[`2018~2025 실기 빈출문제 `,so.length,`문항 · 과목별 상세 해설`]})]})}),(0,_.jsxs)(`div`,{className:`container silgi-exam-page`,children:[(0,_.jsx)(`div`,{className:`freq-filter`,children:oo.map(n=>(0,_.jsxs)(`button`,{className:`freq-filter-btn ${e===n.id?`active`:``}`,onClick:()=>{t(n.id),r(new Set)},type:`button`,style:e===n.id?{background:n.color,borderColor:n.color,color:`#fff`}:void 0,children:[(0,_.jsx)(`i`,{className:n.icon}),(0,_.jsx)(`span`,{children:n.label}),(0,_.jsx)(`span`,{className:`freq-filter-count`,children:o[n.id]})]},n.id))}),(0,_.jsxs)(`div`,{className:`freq-search`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-search`}),(0,_.jsx)(`input`,{type:`text`,placeholder:`문제 검색 (제목, 키워드)`,value:i,onChange:e=>a(e.target.value)}),i&&(0,_.jsx)(`button`,{className:`freq-search-clear`,onClick:()=>a(``),type:`button`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-xmark`})})]}),(0,_.jsxs)(`div`,{className:`sq-controls`,children:[(0,_.jsxs)(`button`,{className:`sq-control-btn`,onClick:()=>{r(new Set(s.map(e=>e.num)))},type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-angles-down`}),` 전체 펼치기`]}),(0,_.jsxs)(`button`,{className:`sq-control-btn`,onClick:()=>{r(new Set)},type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-angles-up`}),` 전체 접기`]}),(0,_.jsxs)(`span`,{className:`sq-control-count`,children:[s.length,`문항`,` `,i&&`(검색: "${i}")`]})]}),(0,_.jsx)(`div`,{className:`sq-list`,children:s.length>0?s.map(e=>(0,_.jsx)(Do,{question:e,isOpen:n.has(e.num),onToggle:()=>c(e.num)},e.num)):(0,_.jsxs)(`div`,{className:`freq-empty`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-search`}),(0,_.jsx)(`p`,{children:`검색 결과가 없습니다.`})]})}),(0,_.jsxs)(`div`,{className:`sq-bottom-nav`,children:[(0,_.jsxs)(l,{to:`/silgi`,className:`btn btn-secondary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),` 실기 시험`]}),(0,_.jsxs)(l,{to:`/silgi/past`,className:`btn btn-primary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-scroll`}),` 기출문제 해설`]})]})]})]})}function ko({sessions:e}){if(!e?.length)return(0,_.jsxs)(`div`,{className:`prediction-card`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-line`}),` 합격 예측`]}),(0,_.jsx)(`p`,{className:`prediction-empty`,children:`시험 기록이 없습니다. 시험을 응시하면 합격 예측이 표시됩니다.`})]});let t=e.slice(-5),n=t.reduce((e,t)=>e+(t.score_total||0),0)/t.length,r=t.filter(e=>e.is_pass).length/t.length*100,i;i=n>=80?95:n>=70?80:n>=60?60:n>=50?35:15;let a=i>=80?`high`:i>=50?`medium`:`low`;return(0,_.jsxs)(`div`,{className:`prediction-card`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-line`}),` 합격 예측`]}),(0,_.jsx)(`div`,{className:`prediction-score`,children:(0,_.jsxs)(`div`,{className:`prediction-circle`,"data-level":a,children:[(0,_.jsxs)(`span`,{className:`prediction-percent`,children:[Math.round(i),`%`]}),(0,_.jsx)(`span`,{className:`prediction-label`,children:`합격 확률`})]})}),(0,_.jsxs)(`div`,{className:`prediction-stats`,children:[(0,_.jsxs)(`div`,{className:`prediction-stat`,children:[(0,_.jsx)(`span`,{className:`prediction-stat-label`,children:`최근 평균`}),(0,_.jsxs)(`span`,{className:`prediction-stat-value`,children:[n.toFixed(1),`점`]})]}),(0,_.jsxs)(`div`,{className:`prediction-stat`,children:[(0,_.jsx)(`span`,{className:`prediction-stat-label`,children:`합격률`}),(0,_.jsxs)(`span`,{className:`prediction-stat-value`,children:[r.toFixed(0),`%`]})]}),(0,_.jsxs)(`div`,{className:`prediction-stat`,children:[(0,_.jsx)(`span`,{className:`prediction-stat-label`,children:`응시 횟수`}),(0,_.jsxs)(`span`,{className:`prediction-stat-value`,children:[t.length,`회`]})]})]})]})}function Ao({children:e}){let{user:t,loading:n}=Z();return n?(0,_.jsx)(`div`,{className:`loading-page`,children:(0,_.jsx)(`div`,{className:`loading-spinner`})}):t?e:(0,_.jsx)(a,{to:`/login`,replace:!0})}function jo(){let{user:e}=Z(),[t,n]=(0,g.useState)([]),[r,i]=(0,g.useState)([]),[a,o]=(0,g.useState)(!0),[s,c]=(0,g.useState)({});(0,g.useEffect)(()=>{e&&u()},[e]);let u=async()=>{o(!0);try{let{data:t}=await Y.from(X.EXAM_SESSIONS).select(`*`).eq(`user_id`,e.id).eq(`exam_type`,`pilgi`).not(`completed_at`,`is`,null).order(`completed_at`,{ascending:!1});n(t||[]);let{data:r}=await Y.from(X.EXAM_SESSIONS).select(`*`).eq(`user_id`,e.id).eq(`exam_type`,`silgi_practice`).not(`completed_at`,`is`,null).order(`completed_at`,{ascending:!1});if(i(r||[]),t?.length){let e={},n={};Q.forEach(t=>{e[t.code]=0,n[t.code]=0}),t.forEach(t=>{t.score_by_subject&&Object.entries(t.score_by_subject).forEach(([t,r])=>{e[t]=(e[t]||0)+r,n[t]=(n[t]||0)+1})});let r={};Object.keys(e).forEach(t=>{r[t]=n[t]?Math.round(e[t]/n[t]):0}),c(r)}}catch(e){console.error(e)}o(!1)};if(a)return(0,_.jsx)(`div`,{className:`loading-page`,children:(0,_.jsx)(`div`,{className:`loading-spinner`})});let d=t.length,f=d?Math.round(t.reduce((e,t)=>e+(t.score_total||0),0)/d):0,p=t.filter(e=>e.is_pass).length,m=d?Math.round(p/d*100):0,h=r.length,v=h?Math.round(r.reduce((e,t)=>e+(t.score_total||0),0)/h):0,y=r.filter(e=>e.is_pass).length,b=h?Math.round(y/h*100):0,x=0,S=new Date,C=new Set([...t.map(e=>new Date(e.completed_at).toDateString()),...r.map(e=>new Date(e.completed_at).toDateString())]);for(let e=0;e<365;e++){let t=new Date(S);if(t.setDate(t.getDate()-e),C.has(t.toDateString()))x++;else if(e>0)break}let w=Q.filter(e=>(s[e.code]||0)<60),T=t.slice(0,5);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`대시보드`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-pie`}),` 학습 대시보드`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`학습 현황을 확인하고 약점을 분석하세요`})]})}),(0,_.jsxs)(`div`,{className:`container`,style:{paddingBottom:80},children:[(0,_.jsxs)(`h2`,{className:`dashboard-section-title`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-file-lines`}),` 필기 시험`]}),(0,_.jsxs)(`div`,{className:`dashboard-stats-grid`,children:[(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-file-lines`})}),(0,_.jsx)(`span`,{className:`stat-number`,children:d}),(0,_.jsx)(`span`,{className:`stat-label`,children:`필기 시험 수`})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-percentage`})}),(0,_.jsxs)(`span`,{className:`stat-number`,children:[f,`점`]}),(0,_.jsx)(`span`,{className:`stat-label`,children:`필기 평균`})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-trophy`})}),(0,_.jsxs)(`span`,{className:`stat-number`,children:[m,`%`]}),(0,_.jsx)(`span`,{className:`stat-label`,children:`필기 합격률`})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-fire`})}),(0,_.jsxs)(`span`,{className:`stat-number`,children:[x,`일`]}),(0,_.jsx)(`span`,{className:`stat-label`,children:`연속 학습`})]})]}),(0,_.jsxs)(`h2`,{className:`dashboard-section-title`,style:{marginTop:32},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-fancy`}),` 실기 연습`]}),(0,_.jsxs)(`div`,{className:`dashboard-stats-grid`,children:[(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-pen`})}),(0,_.jsx)(`span`,{className:`stat-number`,children:h}),(0,_.jsx)(`span`,{className:`stat-label`,children:`실기 연습 수`})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-key`})}),(0,_.jsxs)(`span`,{className:`stat-number`,children:[v,`%`]}),(0,_.jsx)(`span`,{className:`stat-label`,children:`키워드 일치율`})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-medal`})}),(0,_.jsxs)(`span`,{className:`stat-number`,children:[b,`%`]}),(0,_.jsx)(`span`,{className:`stat-label`,children:`실기 합격률`})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-check-double`})}),(0,_.jsx)(`span`,{className:`stat-number`,children:y}),(0,_.jsx)(`span`,{className:`stat-label`,children:`합격 횟수`})]})]}),h===0&&(0,_.jsxs)(`div`,{className:`dashboard-card`,style:{marginTop:12,marginBottom:24,textAlign:`center`,padding:`24px`},children:[(0,_.jsx)(`p`,{className:`dashboard-empty`,style:{marginBottom:12},children:`실기 연습 기록이 없습니다.`}),(0,_.jsxs)(l,{to:`/silgi/practice`,className:`btn btn-sm btn-primary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-fancy`}),` 실기 연습 시작`]})]}),(0,_.jsxs)(`div`,{className:`dashboard-grid`,children:[(0,_.jsxs)(`div`,{className:`dashboard-card`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-pie`}),` 과목별 평균 점수 (필기)`]}),d>0?(0,_.jsx)(eo,{scores:s}):(0,_.jsx)(`p`,{className:`dashboard-empty`,children:`시험 기록이 없습니다.`})]}),(0,_.jsx)(ko,{sessions:t}),(0,_.jsxs)(`div`,{className:`dashboard-card`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-line`}),` 점수 추이 (필기)`]}),t.length>0?(0,_.jsx)(to,{sessions:[...t].reverse().slice(-10)}):(0,_.jsx)(`p`,{className:`dashboard-empty`,children:`시험 기록이 없습니다.`})]}),(0,_.jsxs)(`div`,{className:`dashboard-card`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`}),` 약점 과목`]}),w.length>0?(0,_.jsx)(`div`,{className:`weakness-list`,children:w.map(e=>(0,_.jsxs)(`div`,{className:`weakness-item`,children:[(0,_.jsxs)(`span`,{style:{color:e.color},children:[(0,_.jsx)(`i`,{className:e.icon}),` `,e.name]}),(0,_.jsxs)(`span`,{className:`weakness-score`,children:[s[e.code]||0,`점`]})]},e.code))}):d>0?(0,_.jsx)(`p`,{className:`dashboard-good`,children:`모든 과목이 60점 이상입니다!`}):(0,_.jsx)(`p`,{className:`dashboard-empty`,children:`시험 기록이 없습니다.`})]})]}),(0,_.jsxs)(`div`,{className:`dashboard-card mt-4`,children:[(0,_.jsxs)(`div`,{className:`dashboard-recent-header`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-clock-rotate-left`}),` 최근 필기 시험`]}),(0,_.jsx)(l,{to:`/dashboard/history`,className:`btn btn-sm btn-secondary`,children:`전체 보기`})]}),T.length>0?(0,_.jsx)(`div`,{className:`history-table-wrapper`,children:(0,_.jsxs)(`table`,{className:`history-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`날짜`}),(0,_.jsx)(`th`,{children:`총점`}),(0,_.jsx)(`th`,{children:`정답`}),(0,_.jsx)(`th`,{children:`소요시간`}),(0,_.jsx)(`th`,{children:`결과`})]})}),(0,_.jsx)(`tbody`,{children:T.map(e=>(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:new Date(e.completed_at).toLocaleDateString(`ko-KR`)}),(0,_.jsx)(`td`,{children:(0,_.jsxs)(`strong`,{children:[e.score_total,`점`]})}),(0,_.jsxs)(`td`,{children:[e.correct_count,`/`,e.total_questions]}),(0,_.jsxs)(`td`,{children:[Math.floor(e.time_spent_sec/60),`분`]}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`table-badge ${e.is_pass?`pass`:`fail`}`,children:e.is_pass?`합격`:`불합격`})})]},e.id))})]})}):(0,_.jsx)(`p`,{className:`dashboard-empty`,children:`시험 기록이 없습니다.`})]}),r.length>0&&(0,_.jsxs)(`div`,{className:`dashboard-card mt-4`,children:[(0,_.jsxs)(`div`,{className:`dashboard-recent-header`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-fancy`}),` 최근 실기 연습`]}),(0,_.jsx)(l,{to:`/silgi/practice`,className:`btn btn-sm btn-primary`,children:`연습하기`})]}),(0,_.jsx)(`div`,{className:`history-table-wrapper`,children:(0,_.jsxs)(`table`,{className:`history-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`날짜`}),(0,_.jsx)(`th`,{children:`일치율`}),(0,_.jsx)(`th`,{children:`합격 문제`}),(0,_.jsx)(`th`,{children:`소요시간`}),(0,_.jsx)(`th`,{children:`결과`})]})}),(0,_.jsx)(`tbody`,{children:r.slice(0,5).map(e=>(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:new Date(e.completed_at).toLocaleDateString(`ko-KR`)}),(0,_.jsx)(`td`,{children:(0,_.jsxs)(`strong`,{children:[e.score_total,`%`]})}),(0,_.jsxs)(`td`,{children:[e.correct_count,`/`,e.total_questions]}),(0,_.jsxs)(`td`,{children:[Math.floor(e.time_spent_sec/60),`분`]}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`table-badge ${e.is_pass?`pass`:`fail`}`,children:e.is_pass?`합격`:`불합격`})})]},e.id))})]})})]})]})]})}function Mo(){return(0,_.jsx)(Ao,{children:(0,_.jsx)(jo,{})})}function No(){let{user:e}=Z(),[t,n]=(0,g.useState)([]),[r,i]=(0,g.useState)(!0);return(0,g.useEffect)(()=>{e&&Y.from(X.EXAM_SESSIONS).select(`*`).eq(`user_id`,e.id).not(`completed_at`,`is`,null).order(`completed_at`,{ascending:!1}).then(({data:e})=>{n(e||[]),i(!1)})},[e]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`시험 이력`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-clock-rotate-left`}),` 시험 이력`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`지금까지의 시험 기록을 확인하세요`})]})}),(0,_.jsx)(`div`,{className:`container`,style:{paddingBottom:80},children:r?(0,_.jsx)(`div`,{className:`loading-page`,children:(0,_.jsx)(`div`,{className:`loading-spinner`})}):t.length===0?(0,_.jsx)(`div`,{className:`text-center mt-4`,children:(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`},children:`시험 기록이 없습니다.`})}):(0,_.jsx)(`div`,{className:`history-table-wrapper`,children:(0,_.jsxs)(`table`,{className:`history-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`#`}),(0,_.jsx)(`th`,{children:`날짜`}),(0,_.jsx)(`th`,{children:`유형`}),(0,_.jsx)(`th`,{children:`모드`}),(0,_.jsx)(`th`,{children:`총점`}),(0,_.jsx)(`th`,{children:`정답`}),(0,_.jsx)(`th`,{children:`소요시간`}),(0,_.jsx)(`th`,{children:`결과`})]})}),(0,_.jsx)(`tbody`,{children:t.map((e,n)=>(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:t.length-n}),(0,_.jsx)(`td`,{children:new Date(e.completed_at).toLocaleDateString(`ko-KR`)}),(0,_.jsx)(`td`,{children:e.exam_type===`pilgi`?`필기`:`실기`}),(0,_.jsx)(`td`,{children:e.mode===`exam`?`시험`:`학습`}),(0,_.jsx)(`td`,{children:(0,_.jsxs)(`strong`,{children:[e.score_total,`점`]})}),(0,_.jsxs)(`td`,{children:[e.correct_count,`/`,e.total_questions]}),(0,_.jsx)(`td`,{children:Qa(e.time_spent_sec)}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`pass-badge ${e.is_pass?`pass`:`fail`}`,children:e.is_pass?`합격`:`불합격`})})]},e.id))})]})})})]})}function Po(){return(0,_.jsx)(Ao,{children:(0,_.jsx)(No,{})})}function Fo(){let{user:e}=Z(),{showToast:t}=k(),[n,r]=(0,g.useState)([]),[i,a]=(0,g.useState)(!0),[o,s]=(0,g.useState)(0),[c,l]=(0,g.useState)({}),[u,d]=(0,g.useState)({});(0,g.useEffect)(()=>{e&&f()},[e]);let f=async()=>{a(!0);let{data:t}=await Y.from(X.BOOKMARKS).select(`question_id`).eq(`user_id`,e.id);if(t?.length){let e=t.map(e=>e.question_id),{data:n}=await Y.from(X.QUESTIONS).select(`*`).in(`id`,e).order(`subject_id`).order(`question_number`);r(n||[])}else r([]);a(!1)},p=async i=>{await Y.from(X.BOOKMARKS).delete().eq(`user_id`,e.id).eq(`question_id`,i),r(e=>e.filter(e=>e.id!==i)),t(`북마크가 해제되었습니다.`,`info`),o>=n.length-1&&s(Math.max(0,o-1))},m=(e,t)=>{l(n=>({...n,[e]:t})),d(t=>({...t,[e]:!0}))},h=n[o],v=h?Q.find(e=>e.id===h.subject_id):null;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`북마크`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-bookmark`}),` 북마크`]}),(0,_.jsxs)(`p`,{className:`page-desc`,children:[`북마크한 문제를 복습하세요 (`,n.length,`개)`]})]})}),(0,_.jsx)(`div`,{className:`container`,style:{paddingBottom:80},children:i?(0,_.jsx)(`div`,{className:`loading-page`,children:(0,_.jsx)(`div`,{className:`loading-spinner`})}):n.length===0?(0,_.jsxs)(`div`,{className:`text-center mt-4`,children:[(0,_.jsx)(`i`,{className:`fa-regular fa-bookmark`,style:{fontSize:48,color:`var(--text-light)`,opacity:.3,marginBottom:16,display:`block`}}),(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`},children:`북마크한 문제가 없습니다.`}),(0,_.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:14,marginTop:8},children:`학습 모드에서 문제를 북마크해보세요.`})]}):(0,_.jsxs)(_.Fragment,{children:[v&&(0,_.jsxs)(`div`,{className:`study-subject-badge`,style:{background:`${v.color}15`,color:v.color},children:[(0,_.jsx)(`i`,{className:v.icon}),` `,v.name]}),(0,_.jsx)(Wa,{question:h,selectedAnswer:c[h.id],onSelectAnswer:e=>m(h.id,e),showResult:!!u[h.id],showExplanation:!!u[h.id],questionIndex:o,isBookmarked:!0,onToggleBookmark:p}),(0,_.jsxs)(`div`,{className:`exam-nav-buttons mt-3`,children:[(0,_.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>s(e=>Math.max(0,e-1)),disabled:o===0,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-left`}),` 이전`]}),(0,_.jsxs)(`span`,{className:`exam-page-info`,children:[o+1,` / `,n.length]}),(0,_.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>s(e=>Math.min(n.length-1,e+1)),disabled:o>=n.length-1,children:[`다음 `,(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-right`})]})]})]})})]})}function Io(){return(0,_.jsx)(Ao,{children:(0,_.jsx)(Fo,{})})}function Lo(){let{user:e}=Z(),{showToast:t}=k(),[n,r]=(0,g.useState)([]),[i,a]=(0,g.useState)([]),[o,s]=(0,g.useState)(!0),[c,l]=(0,g.useState)(0),[u,d]=(0,g.useState)({}),[f,p]=(0,g.useState)({}),[m,h]=(0,g.useState)(`unresolved`);(0,g.useEffect)(()=>{e&&v()},[e]);let v=async()=>{s(!0);let{data:t}=await Y.from(X.WRONG_ANSWERS).select(`*`).eq(`user_id`,e.id).order(`wrong_count`,{ascending:!1});if(r(t||[]),t?.length){let e=t.map(e=>e.question_id),{data:n}=await Y.from(X.QUESTIONS).select(`*`).in(`id`,e);a(n||[])}else a([]);s(!1)},y=async e=>{let i=n.find(t=>t.question_id===e);i&&(await Y.from(X.WRONG_ANSWERS).update({resolved:!i.resolved}).eq(`id`,i.id),r(e=>e.map(e=>e.id===i.id?{...e,resolved:!e.resolved}:e)),t(i.resolved?`미해결로 변경했습니다.`:`해결 완료로 표시했습니다.`,`success`))},b=i.filter(e=>{let t=n.find(t=>t.question_id===e.id);return t?m===`unresolved`?!t.resolved:m===`resolved`?t.resolved:!0:!1}),x=(e,t)=>{d(n=>({...n,[e]:t})),p(t=>({...t,[e]:!0}))},S=b[c],C=S?n.find(e=>e.question_id===S.id):null,w=S?Q.find(e=>e.id===S.subject_id):null;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`오답노트`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-rotate-left`}),` 오답노트`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`틀린 문제를 반복 학습하여 실력을 올리세요`})]})}),(0,_.jsxs)(`div`,{className:`container`,style:{paddingBottom:80},children:[(0,_.jsx)(`div`,{className:`study-filters`,children:[{key:`unresolved`,label:`미해결`},{key:`resolved`,label:`해결`},{key:`all`,label:`전체`}].map(e=>(0,_.jsxs)(`button`,{className:`study-filter-btn ${m===e.key?`active`:``}`,onClick:()=>{h(e.key),l(0)},children:[e.label,` (`,i.filter(t=>{let r=n.find(e=>e.question_id===t.id);return r?e.key===`unresolved`?!r.resolved:e.key===`resolved`?r.resolved:!0:!1}).length,`)`]},e.key))}),o?(0,_.jsx)(`div`,{className:`loading-page`,children:(0,_.jsx)(`div`,{className:`loading-spinner`})}):b.length===0?(0,_.jsxs)(`div`,{className:`text-center mt-4`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-check`,style:{fontSize:48,color:`var(--color-correct)`,opacity:.3,marginBottom:16,display:`block`}}),(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`},children:m===`unresolved`?`미해결 오답이 없습니다!`:`오답 기록이 없습니다.`})]}):(0,_.jsxs)(_.Fragment,{children:[w&&(0,_.jsxs)(`div`,{className:`study-subject-badge`,style:{background:`${w.color}15`,color:w.color},children:[(0,_.jsx)(`i`,{className:w.icon}),` `,w.name,C&&(0,_.jsxs)(`span`,{className:`wrong-count-badge`,children:[C.wrong_count,`회 오답`]})]}),(0,_.jsx)(Wa,{question:S,selectedAnswer:u[S.id],onSelectAnswer:e=>x(S.id,e),showResult:!!f[S.id],showExplanation:!!f[S.id],questionIndex:i.indexOf(S)}),(0,_.jsx)(`div`,{className:`wrong-answer-actions mt-2`,children:(0,_.jsxs)(`button`,{className:`btn btn-sm ${C?.resolved?`btn-secondary`:`btn-primary`}`,onClick:()=>y(S.id),children:[(0,_.jsx)(`i`,{className:C?.resolved?`fa-solid fa-rotate-left`:`fa-solid fa-check`}),C?.resolved?`미해결로 변경`:`해결 완료`]})}),(0,_.jsxs)(`div`,{className:`exam-nav-buttons mt-3`,children:[(0,_.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>l(e=>Math.max(0,e-1)),disabled:c===0,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-left`}),` 이전`]}),(0,_.jsxs)(`span`,{className:`exam-page-info`,children:[c+1,` / `,b.length]}),(0,_.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>l(e=>Math.min(b.length-1,e+1)),disabled:c>=b.length-1,children:[`다음 `,(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-right`})]})]})]})]})]})}function Ro(){return(0,_.jsx)(Ao,{children:(0,_.jsx)(Lo,{})})}function zo(){let e=[{label:`2회 필기시험`,date:new Date(2026,4,9)},{label:`3회 필기 접수`,date:new Date(2026,6,20)},{label:`3회 필기시험`,date:new Date(2026,7,7)}],t=new Date;t.setHours(0,0,0,0);for(let n of e){let e=Math.ceil((n.date.getTime()-t.getTime())/(1e3*60*60*24));if(e>=0)return{label:n.label,days:e}}return null}function Bo({user:e}){let[t,n]=(0,g.useState)({pilgiExams:0,silgiExams:0,lastPilgiPass:null}),[r,i]=(0,g.useState)(!0),a=zo();return(0,g.useEffect)(()=>{async function t(){try{let[t,r]=await Promise.all([Y.from(X.EXAM_SESSIONS).select(`is_pass`).eq(`user_id`,e.id).eq(`exam_type`,`pilgi`).not(`completed_at`,`is`,null).order(`completed_at`,{ascending:!1}).limit(5),Y.from(X.EXAM_SESSIONS).select(`id`,{count:`exact`,head:!0}).eq(`user_id`,e.id).eq(`exam_type`,`silgi_practice`).not(`completed_at`,`is`,null)]);n({pilgiExams:t.data?.length??0,silgiExams:r.count??0,lastPilgiPass:t.data?.[0]?.is_pass??null})}catch{}finally{i(!1)}}t()},[e.id]),(0,_.jsxs)(`div`,{className:`my-status-card`,style:{borderLeftColor:`#F59E0B`},children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-user-check`,style:{color:`#F59E0B`}}),` 나의 시험 준비 현황`]}),a&&(0,_.jsxs)(`div`,{className:`my-status-dday`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),a.label,`까지 D-`,a.days===0?`Day`:a.days]}),r?(0,_.jsx)(`p`,{style:{color:`var(--text-secondary)`},children:`불러오는 중...`}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{className:`my-status-stats`,children:[(0,_.jsxs)(`div`,{className:`my-status-stat`,children:[(0,_.jsx)(`span`,{className:`my-status-stat-label`,children:`필기 시험`}),(0,_.jsxs)(`span`,{className:`my-status-stat-value`,children:[t.pilgiExams,`회`]})]}),(0,_.jsxs)(`div`,{className:`my-status-stat`,children:[(0,_.jsx)(`span`,{className:`my-status-stat-label`,children:`실기 연습`}),(0,_.jsxs)(`span`,{className:`my-status-stat-value`,children:[t.silgiExams,`회`]})]}),(0,_.jsxs)(`div`,{className:`my-status-stat`,children:[(0,_.jsx)(`span`,{className:`my-status-stat-label`,children:`최근 필기`}),(0,_.jsx)(`span`,{className:`my-status-stat-value`,children:t.lastPilgiPass===null?`-`:t.lastPilgiPass?`합격`:`불합격`})]})]}),(0,_.jsxs)(`div`,{className:`my-status-actions`,children:[(0,_.jsx)(l,{to:`/dashboard`,className:`btn btn-primary btn-sm`,children:`대시보드 보기`}),(0,_.jsx)(l,{to:`/pilgi/select`,className:`btn btn-secondary btn-sm`,children:`필기 CBT 시작`})]})]})]})}var Vo=[{subject:`직업상담학`,color:`#3B82F6`,items:[`직업상담의 개념`,`직업상담 이론`,`직업상담의 접근방법`,`직업상담 기법`]},{subject:`직업심리학`,color:`#8B5CF6`,items:[`진로발달이론`,`직업심리검사`,`초기면담 및 사정`,`직업스트레스`],newItems:[`초기면담 및 사정`]},{subject:`직업정보론`,color:`#10B981`,items:[`직업·산업분류 활용`,`직업정보 수집·분석`,`직업정보 제공`],newItems:[`직업정보 수집·분석`]},{subject:`노동시장론`,color:`#F59E0B`,items:[`노동시장의 이해`,`임금의 제 이론`,`실업의 제 이론`]},{subject:`노동관계법규(I)`,color:`#EF4444`,items:[`근로기준법`,`최저임금법`,`직업안정법`,`고용보험법`,`고용정책기본법`,`파견근로자보호법`,`근로자직업능력개발법`,`남녀고용평등법`,`고용상 연령차별금지법`,`장애인고용촉진법`]}],Ho=[{area:`직업상담진단`,isNew:!1},{area:`초기면담`,isNew:!1},{area:`진로상담`,isNew:!1},{area:`취업상담`,isNew:!1},{area:`직업복귀상담`,isNew:!0},{area:`직업훈련상담`,isNew:!0},{area:`집단상담`,isNew:!0},{area:`행정`,isNew:!0}],Uo=[{subject:`직업심리 및 전직지원`,color:`#6366F1`,items:[`직업심리학 심화`,`전직지원 이론과 실제`,`직업적응 심층분석`]},{subject:`심층직업상담 및 슈퍼비전`,color:`#EC4899`,items:[`심층상담 기법`,`슈퍼비전 이론과 실제`,`상담사례 분석`]},{subject:`직업정보가공`,color:`#14B8A6`,items:[`직업정보 수집·가공`,`직업정보 데이터베이스 구축`,`직업정보 품질관리`]},{subject:`노동시장분석`,color:`#F97316`,items:[`노동시장 동향 분석`,`고용구조 분석`,`임금·실업 심층분석`]},{subject:`고용노동관계법규(II)`,color:`#EF4444`,items:[`고용정책 관련 법규 심화`,`노동관계법 심화`,`사회보장법 관련 규정`]}],Wo=[{area:`직업상담 및 전직지원 실무`,isNew:!1},{area:`심층상담 실무`,isNew:!1},{area:`직업정보 가공 실무`,isNew:!1},{area:`노동시장 분석 보고서 작성`,isNew:!1}];function Go({user:e}){let t=zo();return(0,_.jsxs)(_.Fragment,{children:[e?(0,_.jsx)(Bo,{user:e}):(0,_.jsxs)(`div`,{className:`my-status-login-banner`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(l,{to:`/login`,children:`로그인`}),`하면 맞춤 시험 준비 현황을 확인할 수 있습니다`,t&&(0,_.jsxs)(_.Fragment,{children:[` · `,t.label,`까지 `,(0,_.jsxs)(`strong`,{children:[`D-`,t.days===0?`Day`:t.days]})]})]})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon overview`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-clipboard-list`})}),(0,_.jsx)(`h2`,{children:`시험 개요`})]}),(0,_.jsxs)(`div`,{className:`info-cert-name`,children:[(0,_.jsx)(`h3`,{className:`info-cert-name-kr`,children:`직업상담사 2급`}),(0,_.jsx)(`span`,{className:`info-cert-name-en`,children:`Vocational Counselor`})]}),(0,_.jsxs)(`p`,{className:`info-card-text`,children:[`구직자와 구인자에게 직업정보를 제공하고 직업상담을 수행할 수 있는 전문 인력을 양성하기 위한 국가기술자격이며, 학력, 경력, 연령 제한 없이 `,(0,_.jsx)(`strong`,{children:`누구나 응시 가능`}),`합니다. 과정평가형 자격 취득도 가능한 종목입니다.`]}),(0,_.jsxs)(`div`,{className:`info-highlight-row`,children:[(0,_.jsxs)(`div`,{className:`info-highlight`,children:[(0,_.jsx)(`span`,{className:`info-highlight-label`,children:`관련 부처`}),(0,_.jsx)(`span`,{className:`info-highlight-value`,children:`고용노동부`})]}),(0,_.jsxs)(`div`,{className:`info-highlight`,children:[(0,_.jsx)(`span`,{className:`info-highlight-label`,children:`시행 기관`}),(0,_.jsx)(`span`,{className:`info-highlight-value`,children:`한국산업인력공단`})]}),(0,_.jsxs)(`div`,{className:`info-highlight`,children:[(0,_.jsx)(`span`,{className:`info-highlight-label`,children:`응시 자격`}),(0,_.jsx)(`span`,{className:`info-highlight-value`,children:`제한 없음`})]}),(0,_.jsxs)(`div`,{className:`info-highlight`,children:[(0,_.jsx)(`span`,{className:`info-highlight-label`,children:`연 시행`}),(0,_.jsx)(`span`,{className:`info-highlight-value`,children:`3회`})]}),(0,_.jsxs)(`div`,{className:`info-highlight`,children:[(0,_.jsx)(`span`,{className:`info-highlight-label`,children:`기타 사항`}),(0,_.jsx)(`span`,{className:`info-highlight-value`,children:`과정평가형 취득 가능`})]})]})]}),(0,_.jsxs)(`div`,{className:`info-grid-2`,children:[(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon pilgi`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`})}),(0,_.jsx)(`h2`,{children:`필기시험`})]}),(0,_.jsx)(`table`,{className:`info-table`,children:(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`과목 수`}),(0,_.jsx)(`td`,{children:`5과목`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`문항 수`}),(0,_.jsx)(`td`,{children:`총 100문항 (과목당 20문항)`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`문제 유형`}),(0,_.jsx)(`td`,{children:`객관식 4지 택일형`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`시험 시간`}),(0,_.jsxs)(`td`,{children:[(0,_.jsx)(`strong`,{children:`100분`}),` (1시간 40분)`]})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`합격 기준`}),(0,_.jsxs)(`td`,{children:[`전 과목 평균 `,(0,_.jsx)(`strong`,{children:`60점`}),` 이상 + 과목당 `,(0,_.jsx)(`strong`,{children:`40점`}),` 이상`]})]})]})}),(0,_.jsxs)(`div`,{className:`info-alert`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`}),(0,_.jsxs)(`span`,{children:[`한 과목이라도 `,(0,_.jsx)(`strong`,{children:`40점 미만`}),`이면 과락으로 불합격됩니다.`]})]}),(0,_.jsx)(`div`,{className:`info-card-action`,children:(0,_.jsx)(l,{to:`/pilgi`,className:`btn btn-primary`,children:`필기 학습 시작`})})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon silgi`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-file-pen`})}),(0,_.jsx)(`h2`,{children:`실기시험`})]}),(0,_.jsx)(`table`,{className:`info-table`,children:(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`과목`}),(0,_.jsx)(`td`,{children:`직업상담 실무`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`문제 유형`}),(0,_.jsx)(`td`,{children:`주관식 (단답형, 서술형, 계산형)`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`시험 시간`}),(0,_.jsxs)(`td`,{children:[(0,_.jsx)(`strong`,{children:`150분`}),` (2시간 30분)`]})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`합격 기준`}),(0,_.jsxs)(`td`,{children:[`100점 만점 중 `,(0,_.jsx)(`strong`,{children:`60점`}),` 이상`]})]})]})}),(0,_.jsxs)(`div`,{className:`info-alert info-alert-info`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),(0,_.jsx)(`span`,{children:`필기시험 합격 후 2년 이내에 실기시험에 합격해야 합니다.`})]}),(0,_.jsx)(`div`,{className:`info-card-action`,children:(0,_.jsx)(l,{to:`/silgi`,className:`btn btn-primary`,children:`실기 학습 시작`})})]})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon subjects`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-book-open`})}),(0,_.jsx)(`h2`,{children:`필기 과목 (5과목)`})]}),(0,_.jsx)(`div`,{className:`info-subjects-grid`,children:Q.map((e,t)=>(0,_.jsxs)(`div`,{className:`info-subject-item`,style:{"--accent":e.color},children:[(0,_.jsx)(`div`,{className:`info-subject-num`,children:t+1}),(0,_.jsxs)(`div`,{className:`info-subject-body`,children:[(0,_.jsx)(`h4`,{children:e.name}),(0,_.jsxs)(`p`,{children:[e.code===`counseling`&&`직업상담의 개념, 상담이론(파슨스/로저스/엘리스), 상담기법, 직업상담 과정, 직업적응이론`,e.code===`psychology`&&`직업발달이론(Super/Holland/Ginzberg), 직업심리검사, 직업적성·흥미·성격검사, 타당도·신뢰도`,e.code===`jobinfo`&&`직업정보 제공·수집, 직업분류, 한국표준직업분류(KSCO), 한국표준산업분류(KSIC), 직무분석`,e.code===`labor_market`&&`노동시장 이론, 노동공급·수요, 임금이론, 실업이론, 인적자본론, 노동이동`,e.code===`labor_law`&&`근로기준법, 고용보험법, 직업안정법, 근로자직업능력개발법, 파견법, 남녀고용평등법`]})]}),(0,_.jsx)(l,{to:`/learn/${e.code}`,className:`info-subject-link`,title:`${e.name} 학습하기`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]},e.code))})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon criteria`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-list-check`})}),(0,_.jsx)(`h2`,{children:`출제기준 (2025~2027)`})]}),(0,_.jsxs)(`div`,{className:`info-alert info-alert-info`,style:{marginBottom:24},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),(0,_.jsxs)(`span`,{children:[`2025~2027년 적용 출제기준입니다. 기존 대비 `,(0,_.jsx)(`strong`,{children:`초기면담`}),`, `,(0,_.jsx)(`strong`,{children:`직업정보 수집 강화`}),`, `,(0,_.jsx)(`strong`,{children:`실기 4개 영역 신규`}),` 추가되었습니다.`]})]}),(0,_.jsxs)(`h3`,{className:`info-criteria-subtitle`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`}),` 필기 출제기준 (5과목)`]}),(0,_.jsx)(`div`,{className:`info-criteria-grid`,children:Vo.map(e=>(0,_.jsxs)(`div`,{className:`info-criteria-card`,style:{"--accent":e.color},children:[(0,_.jsx)(`h4`,{children:e.subject}),(0,_.jsx)(`ul`,{className:`info-criteria-items`,children:e.items.map(t=>(0,_.jsxs)(`li`,{children:[t,e.newItems?.includes(t)&&(0,_.jsx)(`span`,{className:`info-criteria-badge-new`,children:`신규`})]},t))})]},e.subject))}),(0,_.jsxs)(`h3`,{className:`info-criteria-subtitle`,style:{marginTop:32},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-file-pen`}),` 실기 출제기준 (8개 영역)`]}),(0,_.jsx)(`div`,{className:`info-criteria-grid`,children:Ho.map(e=>(0,_.jsx)(`div`,{className:`info-criteria-card info-criteria-card--silgi`,children:(0,_.jsxs)(`h4`,{children:[e.area,e.isNew&&(0,_.jsx)(`span`,{className:`info-criteria-badge-new`,children:`신규`})]})},e.area))})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon schedule`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-calendar-days`})}),(0,_.jsx)(`h2`,{children:`2026년 시험 일정`})]}),(0,_.jsx)(`div`,{className:`info-table-wrap`,children:(0,_.jsxs)(`table`,{className:`info-table schedule full-schedule`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`구분`}),(0,_.jsxs)(`th`,{children:[`필기원서접수`,(0,_.jsx)(`br`,{}),(0,_.jsx)(`small`,{children:`(인터넷, 휴일제외)`})]}),(0,_.jsx)(`th`,{children:`필기시험`}),(0,_.jsxs)(`th`,{children:[`필기합격`,(0,_.jsx)(`br`,{}),`(예정자)발표`]}),(0,_.jsxs)(`th`,{children:[`실기원서접수`,(0,_.jsx)(`br`,{}),(0,_.jsx)(`small`,{children:`(휴일제외)`})]}),(0,_.jsx)(`th`,{children:`실기시험`}),(0,_.jsxs)(`th`,{children:[`최종합격자`,(0,_.jsx)(`br`,{}),`발표일`]})]})}),(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsxs)(`strong`,{children:[`2026년`,(0,_.jsx)(`br`,{}),`정기 기사 1회`]})}),(0,_.jsxs)(`td`,{children:[`2026.01.12`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.01.15`,(0,_.jsx)(`br`,{}),(0,_.jsxs)(`small`,{className:`info-schedule-extra`,children:[`[빈자리접수:`,(0,_.jsx)(`br`,{}),`2026.01.24~01.25]`]})]}),(0,_.jsxs)(`td`,{children:[`2026.01.30`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.03.03`]}),(0,_.jsx)(`td`,{children:`2026.03.11`}),(0,_.jsxs)(`td`,{children:[`2026.03.23`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.03.26`,(0,_.jsx)(`br`,{}),(0,_.jsxs)(`small`,{className:`info-schedule-extra`,children:[`[빈자리접수:`,(0,_.jsx)(`br`,{}),`2026.04.12~04.13]`]})]}),(0,_.jsxs)(`td`,{children:[`2026.04.18`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.05.06`]}),(0,_.jsx)(`td`,{children:`2026.06.12`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsxs)(`strong`,{children:[`2026년`,(0,_.jsx)(`br`,{}),`정기 기사 2회`]})}),(0,_.jsxs)(`td`,{children:[`2026.04.20`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.04.23`,(0,_.jsx)(`br`,{}),(0,_.jsxs)(`small`,{className:`info-schedule-extra`,children:[`[빈자리접수:`,(0,_.jsx)(`br`,{}),`2026.05.03~05.04]`]})]}),(0,_.jsxs)(`td`,{children:[`2026.05.09`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.05.29`]}),(0,_.jsx)(`td`,{children:`2026.06.10`}),(0,_.jsxs)(`td`,{children:[`2026.06.22`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.06.25`]}),(0,_.jsxs)(`td`,{children:[`2026.07.18`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.08.05`]}),(0,_.jsx)(`td`,{children:`2026.09.11`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsxs)(`strong`,{children:[`2026년`,(0,_.jsx)(`br`,{}),`정기 기사 3회`]})}),(0,_.jsxs)(`td`,{children:[`2026.07.20`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.07.23`]}),(0,_.jsxs)(`td`,{children:[`2026.08.07`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.09.01`]}),(0,_.jsx)(`td`,{children:`2026.09.09`}),(0,_.jsxs)(`td`,{children:[`2026.09.21`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.09.28`]}),(0,_.jsxs)(`td`,{children:[`2026.10.24`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.11.13`]}),(0,_.jsx)(`td`,{children:`2026.12.18`})]})]})]})}),(0,_.jsxs)(`div`,{className:`info-alert info-alert-info`,style:{marginTop:16},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-clock`}),(0,_.jsxs)(`span`,{children:[`접수는 첫날 `,(0,_.jsx)(`strong`,{children:`10:00`}),`부터 마지막 날 `,(0,_.jsx)(`strong`,{children:`18:00`}),`까지 · 수수료: 필기 `,(0,_.jsx)(`strong`,{children:`19,400원`}),` / 실기 `,(0,_.jsx)(`strong`,{children:`20,800원`})]})]}),(0,_.jsxs)(`p`,{className:`info-note`,children:[`* 시험 접수 및 상세 일정은 `,(0,_.jsx)(`a`,{href:`https://www.q-net.or.kr`,target:`_blank`,rel:`noopener noreferrer`,children:(0,_.jsx)(`strong`,{children:`큐넷(Q-Net)`})}),`에서 반드시 확인하세요.`,(0,_.jsx)(`br`,{}),`* 필기시험 합격예정자 및 최종합격자 발표시간은 해당 발표일 09:00입니다.`,(0,_.jsx)(`br`,{}),`* 시험 일정은 종목별, 지역별로 상이할 수 있으며, 접수 일정 전에 공지되는 해당 회별 수험자 안내(Q-net 공지사항)를 참조하세요.`]})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon stats`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-chart-column`})}),(0,_.jsx)(`h2`,{children:`검정현황 (합격률 추이)`})]}),(0,_.jsxs)(`p`,{className:`info-card-text`,children:[`최근 10년간 필기 합격률은 `,(0,_.jsx)(`strong`,{children:`약 49~63%`}),`, 실기 합격률은 `,(0,_.jsx)(`strong`,{children:`약 38~47%`}),` 수준입니다. 2024년 기준 필기 `,(0,_.jsx)(`strong`,{children:`58.7%`}),`, 실기 `,(0,_.jsx)(`strong`,{children:`47.1%`}),`로 상대적으로 높은 합격률을 보이고 있습니다.`]}),(0,_.jsx)(`div`,{className:`info-table-wrap`,children:(0,_.jsxs)(`table`,{className:`info-table schedule stats-table`,children:[(0,_.jsxs)(`thead`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{rowSpan:2,children:`연도`}),(0,_.jsx)(`th`,{colSpan:3,className:`info-th-group pilgi`,children:`필기`}),(0,_.jsx)(`th`,{colSpan:3,className:`info-th-group silgi`,children:`실기`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`응시`}),(0,_.jsx)(`th`,{children:`합격`}),(0,_.jsx)(`th`,{children:`합격률`}),(0,_.jsx)(`th`,{children:`응시`}),(0,_.jsx)(`th`,{children:`합격`}),(0,_.jsx)(`th`,{children:`합격률`})]})]}),(0,_.jsx)(`tbody`,{children:[{y:`2024`,pa:15513,pp:9099,pr:`58.7%`,sa:11951,sp:5630,sr:`47.1%`},{y:`2023`,pa:16060,pp:9440,pr:`58.8%`,sa:11479,sp:5187,sr:`45.2%`},{y:`2022`,pa:18059,pp:8778,pr:`48.6%`,sa:13011,sp:4937,sr:`37.9%`},{y:`2021`,pa:24155,pp:13364,pr:`55.3%`,sa:16135,sp:7731,sr:`47.9%`},{y:`2020`,pa:19074,pp:11827,pr:`62.0%`,sa:15701,sp:7241,sr:`46.1%`},{y:`2019`,pa:22283,pp:11690,pr:`52.5%`,sa:15119,sp:6648,sr:`44.0%`},{y:`2018`,pa:23328,pp:12235,pr:`52.4%`,sa:14504,sp:6955,sr:`48.0%`},{y:`2017`,pa:19484,pp:9517,pr:`48.8%`,sa:12653,sp:5227,sr:`41.3%`},{y:`2016`,pa:20516,pp:10289,pr:`50.2%`,sa:13762,sp:5313,sr:`38.6%`},{y:`2015`,pa:19595,pp:10221,pr:`52.2%`,sa:14114,sp:5039,sr:`35.7%`}].map(e=>(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:e.y})}),(0,_.jsx)(`td`,{children:e.pa.toLocaleString()}),(0,_.jsx)(`td`,{children:e.pp.toLocaleString()}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{className:`rate-pilgi`,children:e.pr})}),(0,_.jsx)(`td`,{children:e.sa.toLocaleString()}),(0,_.jsx)(`td`,{children:e.sp.toLocaleString()}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{className:`rate-silgi`,children:e.sr})})]},e.y))})]})}),(0,_.jsxs)(`div`,{className:`info-stats-summary`,children:[(0,_.jsxs)(`div`,{className:`info-stats-summary-item`,children:[(0,_.jsx)(`span`,{className:`info-stats-summary-label`,children:`누적 합계`}),(0,_.jsxs)(`span`,{children:[`필기 응시 `,(0,_.jsx)(`strong`,{children:`374,360`}),`명 / 합격 `,(0,_.jsx)(`strong`,{children:`181,642`}),`명 (`,(0,_.jsx)(`strong`,{children:`48.5%`}),`)`]})]}),(0,_.jsxs)(`div`,{className:`info-stats-summary-item`,children:[(0,_.jsx)(`span`,{className:`info-stats-summary-label`,children:`누적 합계`}),(0,_.jsxs)(`span`,{children:[`실기 응시 `,(0,_.jsx)(`strong`,{children:`243,074`}),`명 / 합격 `,(0,_.jsx)(`strong`,{children:`85,389`}),`명 (`,(0,_.jsx)(`strong`,{children:`35.1%`}),`)`]})]})]}),(0,_.jsxs)(`div`,{className:`info-trend-2024`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-users`}),` 2024년 수험자 동향 (필기)`]}),(0,_.jsxs)(`div`,{className:`info-trend-grid`,children:[(0,_.jsxs)(`div`,{className:`info-trend-card male`,children:[(0,_.jsx)(`div`,{className:`info-trend-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-mars`})}),(0,_.jsxs)(`div`,{className:`info-trend-body`,children:[(0,_.jsx)(`span`,{className:`info-trend-label`,children:`남성`}),(0,_.jsx)(`span`,{className:`info-trend-numbers`,children:`접수 4,494 / 응시 2,908 / 합격 1,532`}),(0,_.jsxs)(`span`,{className:`info-trend-rate`,children:[`합격률 `,(0,_.jsx)(`strong`,{children:`52.7%`})]})]})]}),(0,_.jsxs)(`div`,{className:`info-trend-card female`,children:[(0,_.jsx)(`div`,{className:`info-trend-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-venus`})}),(0,_.jsxs)(`div`,{className:`info-trend-body`,children:[(0,_.jsx)(`span`,{className:`info-trend-label`,children:`여성`}),(0,_.jsx)(`span`,{className:`info-trend-numbers`,children:`접수 14,431 / 응시 9,292 / 합격 5,484`}),(0,_.jsxs)(`span`,{className:`info-trend-rate`,children:[`합격률 `,(0,_.jsx)(`strong`,{children:`59.0%`})]})]})]})]})]})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon benefit`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-medal`})}),(0,_.jsx)(`h2`,{children:`자격증 우대현황`})]}),(0,_.jsxs)(`p`,{className:`info-card-text`,children:[`직업상담사 2급 자격 취득 시 공무원 채용 가산점, 경력경쟁채용 응시 자격, 직업능력개발훈련교사 자격 취득 등`,(0,_.jsx)(`strong`,{children:`다양한 법적 우대`}),`를 받을 수 있습니다.`]}),(0,_.jsx)(`div`,{className:`info-table-wrap`,children:(0,_.jsxs)(`table`,{className:`info-table benefit-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`우대 법령`}),(0,_.jsx)(`th`,{children:`활용 내용`})]})}),(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`공무원임용시험령 제27조`}),(0,_.jsx)(`td`,{children:`경력경쟁채용시험 등의 응시`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`공무원임용시험령 제31조`}),(0,_.jsx)(`td`,{children:`6급 이하 공무원 채용시험 가산 대상 자격증`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`국가공무원법 제36조의2`}),(0,_.jsx)(`td`,{children:`공무원 채용시험 응시 가점`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`교육감소속지방공무원평정규칙 제23조`}),(0,_.jsx)(`td`,{children:`5급 이하 공무원, 연구사 및 지도사 가점`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`군무원인사법시행령 제10조`}),(0,_.jsx)(`td`,{children:`경력경쟁채용 신규채용 요건`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`군인사법시행규칙 제14조`}),(0,_.jsx)(`td`,{children:`부사관 임용 자격`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`근로자직업능력개발법시행령 제28조`}),(0,_.jsx)(`td`,{children:`직업능력개발훈련교사 자격 취득`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`근로자직업능력개발법시행령 제27조`}),(0,_.jsx)(`td`,{children:`직업능력개발훈련교사의 정의`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`근로자직업능력개발법시행령 제44조`}),(0,_.jsx)(`td`,{children:`교원 임용 시 자격증 소지자 우대`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`국가기술자격법 제14조`}),(0,_.jsx)(`td`,{children:`국가기술자격 취득자 우대`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`국가기술자격법시행령 제27조`}),(0,_.jsx)(`td`,{children:`공공기관 등 채용 시 국가기술자격 취득자 우대`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`중소기업인력지원특별법 제28조`}),(0,_.jsx)(`td`,{children:`해당 직종 관련 분야 신기술 창업 지원`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`지방공무원임용령 제55조의3`}),(0,_.jsx)(`td`,{children:`6급 이하 공무원 신규임용 시 필기시험 점수 가산`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`국회인사규칙 제20조`}),(0,_.jsx)(`td`,{children:`동종 직무 자격증 소지자 경력경쟁채용`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`비상대비자원관리법 제2조`}),(0,_.jsx)(`td`,{children:`비상대비 자원의 인력자원 범위`})]})]})]})}),(0,_.jsx)(`p`,{className:`info-note`,children:`* 법령별 세부 우대현황에 대한 적용은 관련 법령을 담당하는 부처의 유권해석에 따릅니다. (2020년 하반기 법제처 조사 기준, 법령 개정에 따라 변경될 수 있음)`})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon tips`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-lightbulb`})}),(0,_.jsx)(`h2`,{children:`효율적인 공부 방법`})]}),(0,_.jsxs)(`div`,{className:`info-tips-grid`,children:[(0,_.jsxs)(`div`,{className:`info-tip-card`,children:[(0,_.jsx)(`div`,{className:`info-tip-num`,children:`1`}),(0,_.jsxs)(`div`,{className:`info-tip-body`,children:[(0,_.jsx)(`h4`,{children:`기출문제 중심 학습`}),(0,_.jsxs)(`p`,{children:[`직업상담사 필기 시험은 `,(0,_.jsx)(`strong`,{children:`문제은행 방식`}),`의 비중이 높습니다. 이론을 완벽히 이해하기보다는, 기출문제를 반복해서 풀며 자주 나오는 개념을 익히는 것이 훨씬 효율적입니다.`]})]})]}),(0,_.jsxs)(`div`,{className:`info-tip-card`,children:[(0,_.jsx)(`div`,{className:`info-tip-num`,children:`2`}),(0,_.jsxs)(`div`,{className:`info-tip-body`,children:[(0,_.jsx)(`h4`,{children:`오답 노트 작성`}),(0,_.jsxs)(`p`,{children:[`틀린 문제는 `,(0,_.jsx)(`strong`,{children:`왜 틀렸는지 확인`}),`하고, 관련 이론을 가볍게 찾아보는 방식으로 보완하세요. 같은 유형의 문제를 다시 틀리지 않는 것이 핵심입니다.`]})]})]}),(0,_.jsxs)(`div`,{className:`info-tip-card`,children:[(0,_.jsx)(`div`,{className:`info-tip-num`,children:`3`}),(0,_.jsxs)(`div`,{className:`info-tip-body`,children:[(0,_.jsx)(`h4`,{children:`반복 횟수 늘리기`}),(0,_.jsxs)(`p`,{children:[`최소 `,(0,_.jsx)(`strong`,{children:`3~5개년`}),` 이상의 기출문제를`,(0,_.jsx)(`strong`,{children:` 3회 이상 반복`}),`해서 풀어보시는 것을 추천합니다. 반복할수록 출제 패턴이 눈에 들어옵니다.`]})]})]})]}),(0,_.jsxs)(`div`,{className:`info-card-action`,style:{marginTop:28},children:[(0,_.jsx)(l,{to:`/pilgi`,className:`btn btn-primary`,style:{marginRight:12},children:`기출문제 풀기`}),(0,_.jsx)(l,{to:`/wrong-answers`,className:`btn btn-secondary`,children:`오답노트 보기`})]})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon links`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-link`})}),(0,_.jsx)(`h2`,{children:`유용한 링크`})]}),(0,_.jsxs)(`div`,{className:`info-links-grid`,children:[(0,_.jsxs)(`a`,{href:`https://www.q-net.or.kr`,target:`_blank`,rel:`noopener noreferrer`,className:`info-link-card`,children:[(0,_.jsx)(`div`,{className:`info-link-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-award`})}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`Q-Net (큐넷)`}),(0,_.jsx)(`p`,{children:`시험 접수 및 합격자 조회`})]}),(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-up-right-from-square info-link-ext`})]}),(0,_.jsxs)(`a`,{href:`https://www.work.go.kr`,target:`_blank`,rel:`noopener noreferrer`,className:`info-link-card`,children:[(0,_.jsx)(`div`,{className:`info-link-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-briefcase`})}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`워크넷`}),(0,_.jsx)(`p`,{children:`직업정보 및 채용공고`})]}),(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-up-right-from-square info-link-ext`})]}),(0,_.jsxs)(`a`,{href:`https://www.keis.or.kr`,target:`_blank`,rel:`noopener noreferrer`,className:`info-link-card`,children:[(0,_.jsx)(`div`,{className:`info-link-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-building-columns`})}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`한국고용정보원`}),(0,_.jsx)(`p`,{children:`고용동향 및 직업연구`})]}),(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-up-right-from-square info-link-ext`})]})]})]})]})}function Ko(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon overview`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-clipboard-list`})}),(0,_.jsx)(`h2`,{children:`1급 시험 개요`})]}),(0,_.jsxs)(`div`,{className:`info-cert-name`,children:[(0,_.jsx)(`h3`,{className:`info-cert-name-kr`,children:`직업상담사 1급`}),(0,_.jsx)(`span`,{className:`info-cert-name-en`,children:`Vocational Counselor, Senior`})]}),(0,_.jsxs)(`p`,{className:`info-card-text`,children:[`2급 대비 심화된 직업상담 전문 역량을 인증하는 국가기술자격으로, 응시자격에 `,(0,_.jsx)(`strong`,{children:`경력 제한`}),`이 있습니다. 과정평가형 자격 취득도 가능한 종목입니다.`]}),(0,_.jsxs)(`div`,{className:`info-highlight-row`,children:[(0,_.jsxs)(`div`,{className:`info-highlight`,children:[(0,_.jsx)(`span`,{className:`info-highlight-label`,children:`관련 부처`}),(0,_.jsx)(`span`,{className:`info-highlight-value`,children:`고용노동부`})]}),(0,_.jsxs)(`div`,{className:`info-highlight`,children:[(0,_.jsx)(`span`,{className:`info-highlight-label`,children:`시행 기관`}),(0,_.jsx)(`span`,{className:`info-highlight-value`,children:`한국산업인력공단`})]}),(0,_.jsxs)(`div`,{className:`info-highlight`,children:[(0,_.jsx)(`span`,{className:`info-highlight-label`,children:`응시 자격`}),(0,_.jsx)(`span`,{className:`info-highlight-value`,children:`경력 필요`})]}),(0,_.jsxs)(`div`,{className:`info-highlight`,children:[(0,_.jsx)(`span`,{className:`info-highlight-label`,children:`연 시행`}),(0,_.jsx)(`span`,{className:`info-highlight-value`,children:`1회 (3회차)`})]}),(0,_.jsxs)(`div`,{className:`info-highlight`,children:[(0,_.jsx)(`span`,{className:`info-highlight-label`,children:`기타 사항`}),(0,_.jsx)(`span`,{className:`info-highlight-value`,children:`과정평가형 취득 가능`})]})]})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon benefit`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-user-check`})}),(0,_.jsx)(`h2`,{children:`응시 자격`})]}),(0,_.jsxs)(`div`,{className:`info-alert info-alert-info`,style:{marginBottom:20},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),(0,_.jsxs)(`span`,{children:[`1급은 2급과 달리 `,(0,_.jsx)(`strong`,{children:`경력 또는 학력 요건`}),`이 필요합니다.`]})]}),(0,_.jsx)(`table`,{className:`info-table`,children:(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`요건 1`}),(0,_.jsxs)(`td`,{children:[`직업상담사 `,(0,_.jsx)(`strong`,{children:`2급 취득 후`}),` 해당 실무 `,(0,_.jsx)(`strong`,{children:`3년`}),` 이상 종사`]})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`요건 2`}),(0,_.jsxs)(`td`,{children:[`해당 실무 `,(0,_.jsx)(`strong`,{children:`5년`}),` 이상 종사자`]})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`요건 3`}),(0,_.jsxs)(`td`,{children:[`관련 학과 대학졸업(예정)자로 해당 실무 `,(0,_.jsx)(`strong`,{children:`4년`}),` 이상 종사`]})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`요건 4`}),(0,_.jsx)(`td`,{children:`기타 국가기술자격법 시행규칙에 따른 요건 충족자`})]})]})}),(0,_.jsxs)(`p`,{className:`info-note`,children:[`* 정확한 응시자격은 `,(0,_.jsx)(`a`,{href:`https://www.q-net.or.kr`,target:`_blank`,rel:`noopener noreferrer`,children:(0,_.jsx)(`strong`,{children:`큐넷(Q-Net)`})}),`에서 확인하세요.`]})]}),(0,_.jsxs)(`div`,{className:`info-grid-2`,children:[(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon pilgi`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`})}),(0,_.jsx)(`h2`,{children:`필기시험`})]}),(0,_.jsx)(`table`,{className:`info-table`,children:(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`과목 수`}),(0,_.jsx)(`td`,{children:`5과목`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`문항 수`}),(0,_.jsx)(`td`,{children:`총 100문항 (과목당 20문항)`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`문제 유형`}),(0,_.jsx)(`td`,{children:`객관식 4지 택일형`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`시험 시간`}),(0,_.jsxs)(`td`,{children:[(0,_.jsx)(`strong`,{children:`150분`}),` (2시간 30분)`]})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`합격 기준`}),(0,_.jsxs)(`td`,{children:[`전 과목 평균 `,(0,_.jsx)(`strong`,{children:`60점`}),` 이상 + 과목당 `,(0,_.jsx)(`strong`,{children:`40점`}),` 이상`]})]})]})})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon silgi`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-file-pen`})}),(0,_.jsx)(`h2`,{children:`실기시험`})]}),(0,_.jsx)(`table`,{className:`info-table`,children:(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`과목`}),(0,_.jsx)(`td`,{children:`직업상담 및 전직지원 실무`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`문제 유형`}),(0,_.jsx)(`td`,{children:`필답형 (서술형)`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`시험 시간`}),(0,_.jsxs)(`td`,{children:[(0,_.jsx)(`strong`,{children:`150분`}),` (2시간 30분)`]})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`합격 기준`}),(0,_.jsxs)(`td`,{children:[`100점 만점 중 `,(0,_.jsx)(`strong`,{children:`60점`}),` 이상`]})]})]})})]})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon subjects`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-book-open`})}),(0,_.jsx)(`h2`,{children:`필기 과목 (5과목)`})]}),(0,_.jsx)(`div`,{className:`info-subjects-grid`,children:ea.map((e,t)=>(0,_.jsxs)(`div`,{className:`info-subject-item`,style:{"--accent":e.color},children:[(0,_.jsx)(`div`,{className:`info-subject-num`,children:t+1}),(0,_.jsxs)(`div`,{className:`info-subject-body`,children:[(0,_.jsx)(`h4`,{children:e.name}),(0,_.jsxs)(`p`,{children:[e.code===`job_psychology`&&`직업심리학 심화, 전직지원 이론과 실제, 직업적응 심층분석`,e.code===`deep_counseling`&&`심층상담 기법, 슈퍼비전 이론과 실제, 상담사례 분석`,e.code===`job_info_proc`&&`직업정보 수집·가공, 데이터베이스 구축, 품질관리`,e.code===`labor_analysis`&&`노동시장 동향 분석, 고용구조 분석, 임금·실업 심층분석`,e.code===`labor_law_2`&&`고용정책 관련 법규 심화, 노동관계법 심화, 사회보장법`]})]})]},e.code))})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon criteria`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-list-check`})}),(0,_.jsx)(`h2`,{children:`출제기준`})]}),(0,_.jsxs)(`h3`,{className:`info-criteria-subtitle`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`}),` 필기 출제기준 (5과목)`]}),(0,_.jsx)(`div`,{className:`info-criteria-grid`,children:Uo.map(e=>(0,_.jsxs)(`div`,{className:`info-criteria-card`,style:{"--accent":e.color},children:[(0,_.jsx)(`h4`,{children:e.subject}),(0,_.jsx)(`ul`,{className:`info-criteria-items`,children:e.items.map(e=>(0,_.jsx)(`li`,{children:e},e))})]},e.subject))}),(0,_.jsxs)(`h3`,{className:`info-criteria-subtitle`,style:{marginTop:32},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-file-pen`}),` 실기 출제기준`]}),(0,_.jsx)(`div`,{className:`info-criteria-grid`,children:Wo.map(e=>(0,_.jsx)(`div`,{className:`info-criteria-card info-criteria-card--silgi`,children:(0,_.jsx)(`h4`,{children:e.area})},e.area))})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon schedule`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-calendar-days`})}),(0,_.jsx)(`h2`,{children:`2026년 시험 일정`})]}),(0,_.jsxs)(`div`,{className:`info-alert info-alert-info`,style:{marginBottom:20},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),(0,_.jsxs)(`span`,{children:[`1급은 연 `,(0,_.jsx)(`strong`,{children:`1회(정기 기사 3회)`}),`만 시행됩니다.`]})]}),(0,_.jsx)(`div`,{className:`info-table-wrap`,children:(0,_.jsxs)(`table`,{className:`info-table schedule full-schedule`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`구분`}),(0,_.jsxs)(`th`,{children:[`필기원서접수`,(0,_.jsx)(`br`,{}),(0,_.jsx)(`small`,{children:`(인터넷, 휴일제외)`})]}),(0,_.jsx)(`th`,{children:`필기시험`}),(0,_.jsxs)(`th`,{children:[`필기합격`,(0,_.jsx)(`br`,{}),`(예정자)발표`]}),(0,_.jsxs)(`th`,{children:[`실기원서접수`,(0,_.jsx)(`br`,{}),(0,_.jsx)(`small`,{children:`(휴일제외)`})]}),(0,_.jsx)(`th`,{children:`실기시험`}),(0,_.jsxs)(`th`,{children:[`최종합격자`,(0,_.jsx)(`br`,{}),`발표일`]})]})}),(0,_.jsx)(`tbody`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsxs)(`strong`,{children:[`2026년`,(0,_.jsx)(`br`,{}),`정기 기사 3회`]})}),(0,_.jsxs)(`td`,{children:[`2026.07.20`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.07.23`]}),(0,_.jsxs)(`td`,{children:[`2026.08.07`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.09.01`]}),(0,_.jsx)(`td`,{children:`2026.09.09`}),(0,_.jsxs)(`td`,{children:[`2026.09.21`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.09.28`]}),(0,_.jsxs)(`td`,{children:[`2026.10.24`,(0,_.jsx)(`br`,{}),`~`,(0,_.jsx)(`br`,{}),`2026.11.13`]}),(0,_.jsx)(`td`,{children:`2026.12.18`})]})})]})}),(0,_.jsxs)(`div`,{className:`info-alert info-alert-info`,style:{marginTop:16},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-clock`}),(0,_.jsxs)(`span`,{children:[`접수는 첫날 `,(0,_.jsx)(`strong`,{children:`10:00`}),`부터 마지막 날 `,(0,_.jsx)(`strong`,{children:`18:00`}),`까지 · 수수료: 필기 `,(0,_.jsx)(`strong`,{children:`19,400원`}),` / 실기 `,(0,_.jsx)(`strong`,{children:`20,800원`})]})]}),(0,_.jsxs)(`p`,{className:`info-note`,children:[`* 시험 접수 및 상세 일정은 `,(0,_.jsx)(`a`,{href:`https://www.q-net.or.kr`,target:`_blank`,rel:`noopener noreferrer`,children:(0,_.jsx)(`strong`,{children:`큐넷(Q-Net)`})}),`에서 반드시 확인하세요.`,(0,_.jsx)(`br`,{}),`* 필기시험 합격예정자 및 최종합격자 발표시간은 해당 발표일 09:00입니다.`,(0,_.jsx)(`br`,{}),`* 시험 일정은 종목별, 지역별로 상이할 수 있으며, 접수 일정 전에 공지되는 해당 회별 수험자 안내(Q-net 공지사항)를 참조하세요.`]})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon stats`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-chart-column`})}),(0,_.jsx)(`h2`,{children:`검정현황 (합격률 추이)`})]}),(0,_.jsxs)(`p`,{className:`info-card-text`,children:[`1급은 응시 인원이 적지만, 최근 필기 합격률은 `,(0,_.jsx)(`strong`,{children:`약 70~83%`}),`, 실기 합격률은 `,(0,_.jsx)(`strong`,{children:`약 67~72%`}),`로 상승 추세입니다. 2024년 기준 필기 `,(0,_.jsx)(`strong`,{children:`81.6%`}),`, 실기 `,(0,_.jsx)(`strong`,{children:`70.8%`}),`입니다.`]}),(0,_.jsx)(`div`,{className:`info-table-wrap`,children:(0,_.jsxs)(`table`,{className:`info-table schedule stats-table`,children:[(0,_.jsxs)(`thead`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{rowSpan:2,children:`연도`}),(0,_.jsx)(`th`,{colSpan:3,className:`info-th-group pilgi`,children:`필기`}),(0,_.jsx)(`th`,{colSpan:3,className:`info-th-group silgi`,children:`실기`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`응시`}),(0,_.jsx)(`th`,{children:`합격`}),(0,_.jsx)(`th`,{children:`합격률`}),(0,_.jsx)(`th`,{children:`응시`}),(0,_.jsx)(`th`,{children:`합격`}),(0,_.jsx)(`th`,{children:`합격률`})]})]}),(0,_.jsx)(`tbody`,{children:[{y:`2024`,pa:755,pp:616,pr:`81.6%`,sa:600,sp:425,sr:`70.8%`},{y:`2023`,pa:650,pp:538,pr:`82.8%`,sa:512,sp:343,sr:`67.0%`},{y:`2022`,pa:622,pp:477,pr:`76.7%`,sa:459,sp:330,sr:`71.9%`},{y:`2021`,pa:435,pp:303,pr:`69.7%`,sa:389,sp:259,sr:`66.6%`},{y:`2020`,pa:406,pp:291,pr:`71.7%`,sa:325,sp:72,sr:`22.2%`},{y:`2019`,pa:584,pp:328,pr:`56.2%`,sa:352,sp:247,sr:`70.2%`},{y:`2018`,pa:340,pp:165,pr:`48.5%`,sa:198,sp:66,sr:`33.3%`},{y:`2017`,pa:362,pp:172,pr:`47.5%`,sa:256,sp:91,sr:`35.5%`},{y:`2016`,pa:276,pp:117,pr:`42.4%`,sa:220,sp:51,sr:`23.2%`},{y:`2015`,pa:336,pp:198,pr:`58.9%`,sa:238,sp:109,sr:`45.8%`},{y:`2014`,pa:252,pp:136,pr:`54.0%`,sa:186,sp:50,sr:`26.9%`},{y:`2013`,pa:212,pp:83,pr:`39.2%`,sa:179,sp:30,sr:`16.8%`},{y:`2012`,pa:189,pp:107,pr:`56.6%`,sa:163,sp:25,sr:`15.3%`},{y:`2011`,pa:137,pp:69,pr:`50.4%`,sa:107,sp:16,sr:`15.0%`},{y:`2010`,pa:110,pp:55,pr:`50.0%`,sa:75,sp:12,sr:`16.0%`},{y:`2009`,pa:62,pp:27,pr:`43.5%`,sa:35,sp:0,sr:`0%`},{y:`2008`,pa:72,pp:26,pr:`36.1%`,sa:50,sp:7,sr:`14.0%`},{y:`2007`,pa:98,pp:33,pr:`33.7%`,sa:51,sp:31,sr:`60.8%`},{y:`2006`,pa:96,pp:44,pr:`45.8%`,sa:55,sp:2,sr:`3.6%`},{y:`2005`,pa:90,pp:47,pr:`52.2%`,sa:53,sp:18,sr:`34.0%`},{y:`2004`,pa:43,pp:10,pr:`23.3%`,sa:19,sp:0,sr:`0%`},{y:`2003`,pa:67,pp:15,pr:`22.4%`,sa:11,sp:0,sr:`0%`}].map(e=>(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{children:e.y})}),(0,_.jsx)(`td`,{children:e.pa.toLocaleString()}),(0,_.jsx)(`td`,{children:e.pp.toLocaleString()}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{className:`rate-pilgi`,children:e.pr})}),(0,_.jsx)(`td`,{children:e.sa.toLocaleString()}),(0,_.jsx)(`td`,{children:e.sp.toLocaleString()}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`strong`,{className:`rate-silgi`,children:e.sr})})]},e.y))})]})}),(0,_.jsxs)(`div`,{className:`info-stats-summary`,children:[(0,_.jsxs)(`div`,{className:`info-stats-summary-item`,children:[(0,_.jsx)(`span`,{className:`info-stats-summary-label`,children:`누적 합계`}),(0,_.jsxs)(`span`,{children:[`필기 응시 `,(0,_.jsx)(`strong`,{children:`6,194`}),`명 / 합격 `,(0,_.jsx)(`strong`,{children:`3,857`}),`명 (`,(0,_.jsx)(`strong`,{children:`62.3%`}),`)`]})]}),(0,_.jsxs)(`div`,{className:`info-stats-summary-item`,children:[(0,_.jsx)(`span`,{className:`info-stats-summary-label`,children:`누적 합계`}),(0,_.jsxs)(`span`,{children:[`실기 응시 `,(0,_.jsx)(`strong`,{children:`4,533`}),`명 / 합격 `,(0,_.jsx)(`strong`,{children:`2,184`}),`명 (`,(0,_.jsx)(`strong`,{children:`48.2%`}),`)`]})]})]}),(0,_.jsxs)(`div`,{className:`info-trend-2024`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-users`}),` 2024년 수험자 동향 (필기)`]}),(0,_.jsxs)(`div`,{className:`info-trend-grid`,children:[(0,_.jsxs)(`div`,{className:`info-trend-card male`,children:[(0,_.jsx)(`div`,{className:`info-trend-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-mars`})}),(0,_.jsxs)(`div`,{className:`info-trend-body`,children:[(0,_.jsx)(`span`,{className:`info-trend-label`,children:`남성`}),(0,_.jsx)(`span`,{className:`info-trend-numbers`,children:`접수 92 / 응시 66 / 합격 43`}),(0,_.jsxs)(`span`,{className:`info-trend-rate`,children:[`합격률 `,(0,_.jsx)(`strong`,{children:`65.2%`})]})]})]}),(0,_.jsxs)(`div`,{className:`info-trend-card female`,children:[(0,_.jsx)(`div`,{className:`info-trend-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-venus`})}),(0,_.jsxs)(`div`,{className:`info-trend-body`,children:[(0,_.jsx)(`span`,{className:`info-trend-label`,children:`여성`}),(0,_.jsx)(`span`,{className:`info-trend-numbers`,children:`접수 845 / 응시 689 / 합격 573`}),(0,_.jsxs)(`span`,{className:`info-trend-rate`,children:[`합격률 `,(0,_.jsx)(`strong`,{children:`83.2%`})]})]})]})]}),(0,_.jsx)(`p`,{className:`info-note`,style:{marginTop:12},children:`* 수험자동향 데이터는 원서접수 시 수집된 데이터로, 종목별 검정현황 데이터와 다를 수 있음`})]})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon benefit`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-medal`})}),(0,_.jsx)(`h2`,{children:`자격증 우대현황`})]}),(0,_.jsxs)(`p`,{className:`info-card-text`,children:[`직업상담사 1급 자격 취득 시 공무원 채용 가산점, 경력경쟁채용 응시 자격, 직업능력개발훈련교사 자격 취득 등`,(0,_.jsx)(`strong`,{children:`다양한 법적 우대`}),`를 받을 수 있습니다.`]}),(0,_.jsx)(`div`,{className:`info-table-wrap`,children:(0,_.jsxs)(`table`,{className:`info-table benefit-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`우대 법령`}),(0,_.jsx)(`th`,{children:`활용 내용`})]})}),(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`공무원임용시험령 제27조`}),(0,_.jsx)(`td`,{children:`경력경쟁채용시험 등의 응시`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`공무원임용시험령 제31조`}),(0,_.jsx)(`td`,{children:`6급 이하 공무원 채용시험 가산 대상 자격증`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`국가공무원법 제36조의2`}),(0,_.jsx)(`td`,{children:`공무원 채용시험 응시 가점`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`교육감소속지방공무원평정규칙 제23조`}),(0,_.jsx)(`td`,{children:`5급 이하 공무원, 연구사 및 지도사 가점`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`군무원인사법시행령 제10조`}),(0,_.jsx)(`td`,{children:`경력경쟁채용 신규채용 요건`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`군무원인사법시행규칙 제18조`}),(0,_.jsx)(`td`,{children:`채용시험의 특전`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`군인사법시행규칙 제14조`}),(0,_.jsx)(`td`,{children:`부사관 임용 자격`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`근로자직업능력개발법시행령 제24조`}),(0,_.jsx)(`td`,{children:`직업능력개발훈련시설의 지정 인력`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`근로자직업능력개발법시행령 제27조`}),(0,_.jsx)(`td`,{children:`직업능력개발훈련교사의 정의`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`근로자직업능력개발법시행령 제28조`}),(0,_.jsx)(`td`,{children:`직업능력개발훈련교사 자격 취득`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`근로자직업능력개발법시행령 제44조`}),(0,_.jsx)(`td`,{children:`교원 임용 시 자격증 소지자 우대`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`기초연구진흥및기술개발지원에관한법률시행규칙 제2조`}),(0,_.jsx)(`td`,{children:`연구전담요원의 자격 기준`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`국가기술자격법 제14조`}),(0,_.jsx)(`td`,{children:`국가기술자격 취득자 우대`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`국가기술자격법시행규칙 제21조`}),(0,_.jsx)(`td`,{children:`시험위원의 자격`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`국가기술자격법시행령 제27조`}),(0,_.jsx)(`td`,{children:`공공기관 등 채용 시 국가기술자격 취득자 우대`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`중소기업인력지원특별법 제28조`}),(0,_.jsx)(`td`,{children:`해당 직종 관련 분야 신기술 창업 지원`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`지방공무원수당등에관한규정 제14조`}),(0,_.jsx)(`td`,{children:`특수업무수당 지급`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`지방공무원임용령 제17조`}),(0,_.jsx)(`td`,{children:`경력경쟁시험 등의 임용 요건`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`지방공무원임용령 제55조의3`}),(0,_.jsx)(`td`,{children:`6급 이하 공무원 신규임용 시 필기시험 점수 가산`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`지방공무원평정규칙 제23조`}),(0,_.jsx)(`td`,{children:`5급 이하 공무원, 연구사 및 지도사 가점`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`국회인사규칙 제20조`}),(0,_.jsx)(`td`,{children:`동종 직무 자격증 소지자 경력경쟁채용`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`비상대비자원관리법 제2조`}),(0,_.jsx)(`td`,{children:`비상대비 자원의 인력자원 범위`})]})]})]})}),(0,_.jsxs)(`p`,{className:`info-note`,children:[`* 본 자료는 2020년 하반기 법제처(law.go.kr) 조사 기준이며, 법령 개정에 따라 변경될 수 있습니다.`,(0,_.jsx)(`br`,{}),`* 법령별 세부 우대현황에 대한 적용은 관련 법령을 담당하는 부처의 유권해석에 따릅니다.`]})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon tips`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-lightbulb`})}),(0,_.jsx)(`h2`,{children:`1급 학습 안내`})]}),(0,_.jsxs)(`div`,{className:`info-alert info-alert-info`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),(0,_.jsxs)(`span`,{children:[`1급 CBT 학습 콘텐츠(기출문제, 모의시험 등)는 `,(0,_.jsx)(`strong`,{children:`향후 업데이트 예정`}),`입니다. 현재는 시험 정보 안내를 제공합니다.`]})]})]}),(0,_.jsxs)(`section`,{className:`info-card`,children:[(0,_.jsxs)(`div`,{className:`info-card-header`,children:[(0,_.jsx)(`span`,{className:`info-card-icon links`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-link`})}),(0,_.jsx)(`h2`,{children:`유용한 링크`})]}),(0,_.jsxs)(`div`,{className:`info-links-grid`,children:[(0,_.jsxs)(`a`,{href:`https://www.q-net.or.kr`,target:`_blank`,rel:`noopener noreferrer`,className:`info-link-card`,children:[(0,_.jsx)(`div`,{className:`info-link-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-award`})}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`Q-Net (큐넷)`}),(0,_.jsx)(`p`,{children:`시험 접수 및 합격자 조회`})]}),(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-up-right-from-square info-link-ext`})]}),(0,_.jsxs)(`a`,{href:`https://www.work.go.kr`,target:`_blank`,rel:`noopener noreferrer`,className:`info-link-card`,children:[(0,_.jsx)(`div`,{className:`info-link-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-briefcase`})}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`워크넷`}),(0,_.jsx)(`p`,{children:`직업정보 및 채용공고`})]}),(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-up-right-from-square info-link-ext`})]}),(0,_.jsxs)(`a`,{href:`https://www.keis.or.kr`,target:`_blank`,rel:`noopener noreferrer`,className:`info-link-card`,children:[(0,_.jsx)(`div`,{className:`info-link-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-building-columns`})}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`한국고용정보원`}),(0,_.jsx)(`p`,{children:`고용동향 및 직업연구`})]}),(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-up-right-from-square info-link-ext`})]})]})]})]})}function qo(){let{user:e}=Z(),[t,n]=(0,g.useState)(`level2`);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`시험 안내`,description:`직업상담사 1급·2급 자격시험 안내 - 시험 개요, 일정, 합격 기준, 출제기준`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsx)(`h1`,{children:`직업상담사 시험 안내`}),(0,_.jsx)(`p`,{className:`page-desc`,children:`국가기술자격 시험에 대한 핵심 정보를 안내합니다`})]})}),(0,_.jsxs)(`div`,{className:`container info-page`,children:[(0,_.jsxs)(`div`,{className:`info-level-tabs`,children:[(0,_.jsx)(`button`,{className:`info-level-tab${t===`level2`?` active`:``}`,onClick:()=>n(`level2`),children:`직업상담사 2급`}),(0,_.jsx)(`button`,{className:`info-level-tab${t===`level1`?` active`:``}`,onClick:()=>n(`level1`),children:`직업상담사 1급`})]}),t===`level2`?(0,_.jsx)(Go,{user:e}):(0,_.jsx)(Ko,{})]})]})}var Jo={counseling:{name:`직업상담학`,code:`counseling`,color:`#3B82F6`,icon:`fa-solid fa-comments`,description:`직업상담의 이론과 기법, 상담 과정 전반을 학습합니다.`,chapters:[{title:`직업상담의 개념`,topics:[{title:`직업상담의 이해`,content:`<h4 class="exam-important">용어 정의</h4>
<table>
  <tr><th>용어</th><th>정의</th></tr>
  <tr><td><strong>진로(Career)</strong></td><td>가장 폭넓은 개념. 일생동안 체험하는 일의 총체</td></tr>
  <tr><td><strong>직업(Vocation)</strong></td><td>직업생활 준비에서 은퇴까지의 과정</td></tr>
  <tr><td><strong>진로상담</strong></td><td>인생 전반에 걸친 진로선택에 관한 상담 (넓은 의미)</td></tr>
  <tr><td><strong>직업상담</strong></td><td>진로상담보다 좁은 의미, 직업 관련 문제에 초점</td></tr>
  <tr><td><strong>진로발달</strong></td><td>어려서부터 죽을 때까지의 발달 과정</td></tr>
</table>
<h4 class="exam-important">직업상담의 영역</h4>
<ul>
  <li><strong>직업일반상담:</strong> 직업 전반에 관한 일반 상담</li>
  <li><strong>취업상담:</strong> 구직활동, 취업준비 관련 상담</li>
  <li><strong>직업(정신)건강상담:</strong> 직업 관련 정신건강 문제</li>
  <li><strong>직업적응상담:</strong> 조직문화, 인간관계, 직업예절, 직업의식, 직업관 정보 제공</li>
  <li><strong>직업전환상담:</strong> 이직, 전직 관련 상담</li>
  <li><strong>직업문제 및 은퇴상담:</strong> 직업 문제 해결과 은퇴 준비</li>
</ul>
<h4 class="exam-important">직업상담의 유형</h4>
<ul>
  <li><strong>구인·구직상담:</strong> 일자리 매칭 관련 상담</li>
  <li><strong>직업적응상담:</strong> 직장 적응 지원</li>
  <li><strong>직업전환상담:</strong> 전직/이직 지원</li>
  <li><strong>경력개발상담:</strong> 경력 관리 및 개발 지원</li>
</ul>
<h4 class="exam-important">직업상담의 목적</h4>
<ul>
  <li>잠정적 진로결정의 확고화</li>
  <li>직업목표의 명백화</li>
  <li>직업세계에 대한 이해 증진</li>
  <li>의사결정능력 향상</li>
  <li>능동적 태도 함양</li>
</ul>
<h4 class="exam-important">기스버스(Gysbers)의 목적 3가지</h4>
<table>
  <tr><th>목적</th><th>내용</th></tr>
  <tr><td><strong>예언과 발달</strong></td><td>미래를 예측하고 발달을 촉진</td></tr>
  <tr><td><strong>처치와 자극</strong></td><td>문제를 처치하고 성장을 자극</td></tr>
  <tr><td><strong>결함과 유능</strong></td><td>결함을 보완하고 유능함을 강화</td></tr>
</table>
<p><strong>암기 팁:</strong> '예 처 결'로 외우기</p>
<h4 class="exam-important">직업상담의 기본원리</h4>
<ul>
  <li>라포(Rapport) 형성이 기본</li>
  <li>내담자의 성격특성 이해</li>
  <li>전생애적 발달 관점</li>
  <li>진로발달이론에 근거</li>
  <li>상담윤리강령 준수</li>
</ul>
<h4 class="exam-important">톨버트(Tolbert)의 진로발달 영향 요인</h4>
<ul>
  <li>직업적성, 직업흥미, 인성(성격)</li>
  <li>직업성숙도, 성취도</li>
  <li>가정환경, 성별, 인종</li>
</ul>`},{title:`직업상담사의 전문지식과 역할`,content:`<h4 class="exam-important">NVGA(국가직업지도협회) 기본영역</h4>
<table>
  <tr><th>영역</th><th>내용</th></tr>
  <tr><td><strong>일반상담능력</strong></td><td>기본적인 상담 수행 능력</td></tr>
  <tr><td><strong>정보분석과 적용능력</strong></td><td>직업정보 수집·분석·활용</td></tr>
  <tr><td><strong>개인/집단 검사 실시능력</strong></td><td>심리검사 실시 및 해석</td></tr>
  <tr><td><strong>관리능력</strong></td><td>상담 프로그램 관리</td></tr>
  <tr><td><strong>실행능력</strong></td><td>상담 계획의 실행</td></tr>
  <tr><td><strong>조언능력</strong></td><td>전문적 조언 제공</td></tr>
</table>
<h4 class="exam-important">김병숙의 지식/능력</h4>
<ul>
  <li><strong>심리치료능력:</strong> 상담 및 심리치료 수행 능력</li>
  <li><strong>국가정책/인구구조 지식:</strong> 노동시장, 인구동향 파악</li>
  <li><strong>연구/평가능력:</strong> 상담 연구 및 프로그램 평가</li>
</ul>
<h4 class="exam-important">상담사의 자질</h4>
<ul>
  <li><strong>건설적 냉철함:</strong> 객관적이고 건설적인 태도 유지</li>
  <li><strong>공감적 이해력:</strong> 내담자의 감정과 경험에 대한 공감</li>
  <li><strong>통일된 동일시:</strong> 일관된 자기정체성 유지</li>
  <li><strong>도덕적 판단:</strong> 윤리적 기준에 따른 판단력</li>
</ul>
<h4>주요 역할</h4>
<ul>
  <li>직업정보 수집 및 분석</li>
  <li>심리검사 실시 및 해석</li>
  <li>직업상담 수행</li>
  <li>프로그램 개발 및 운영</li>
</ul>
<h4 class="exam-important">헤어(Herr)의 직무내용</h4>
<ul>
  <li>상담기법으로 문제 확인</li>
  <li>직업상담 확정</li>
  <li>예비행동 설명</li>
  <li>부가적 대안 확인</li>
</ul>`},{title:`직업상담의 과정`,content:`<h4 class="exam-important">직업상담 5단계</h4>
<ol>
  <li><strong>관계형성(라포):</strong> 신뢰관계 구축</li>
  <li><strong>진단/측정:</strong> 문제 파악 및 심리검사</li>
  <li><strong>목표설정:</strong> 상담 목표 수립</li>
  <li><strong>개입/중재:</strong> 상담 전략 실행</li>
  <li><strong>평가:</strong> 상담 성과 평가</li>
</ol>
<h4 class="exam-important">2단계 모델</h4>
<table>
  <tr><th>단계</th><th>내용</th></tr>
  <tr><td><strong>목표/문제확인 단계</strong></td><td>내담자의 목표와 문제를 확인</td></tr>
  <tr><td><strong>목표/문제해결 단계</strong></td><td>확인된 문제를 해결하기 위한 개입</td></tr>
</table>
<h4 class="exam-important">브래머(Brammer)의 8단계</h4>
<ol>
  <li><strong>준비와 시작:</strong> 상담 시작 준비</li>
  <li><strong>명료화:</strong> 문제의 명확화</li>
  <li><strong>구조화:</strong> 상담 구조 설정</li>
  <li><strong>라포 심화:</strong> 깊은 신뢰관계 형성</li>
  <li><strong>탐색:</strong> 문제 심층 탐색</li>
  <li><strong>견고화:</strong> 변화의 견고화</li>
  <li><strong>계획수립/검토:</strong> 실행 계획 수립</li>
  <li><strong>종료:</strong> 상담 마무리</li>
</ol>
<h4 class="exam-important">상담 단계별 일반 고려사항</h4>
<table>
  <tr><th>단계</th><th>주요 과제</th></tr>
  <tr><td><strong>초기</strong></td><td>라포 형성, 문제 파악, 상담 구조화</td></tr>
  <tr><td><strong>중기</strong></td><td>문제 해결, 저항 해결, 개입 전략 실행</td></tr>
  <tr><td><strong>종결</strong></td><td>목표 달성 확인, 이별 감정 다루기, 추수지도 계획</td></tr>
</table>`},{title:`상담의 구조화와 라포(Rapport) 형성`,content:`<h4 class="exam-important">구조화(Structuring)</h4>
<p>상담 초기에 상담의 기본 틀을 설정하는 과정</p>
<ul>
  <li><strong>상담의 목표:</strong> 상담에서 달성하고자 하는 것</li>
  <li><strong>상담의 성격:</strong> 상담이 어떤 활동인지 설명</li>
  <li><strong>역할:</strong> 상담자와 내담자의 역할 설명</li>
  <li><strong>절차:</strong> 상담 진행 과정 안내</li>
  <li><strong>시간:</strong> 상담 시간 및 횟수 안내</li>
  <li><strong>비용:</strong> 상담 비용 관련 안내</li>
</ul>
<h4 class="exam-important">라포(Rapport) 형성</h4>
<ul>
  <li>초기 접수면접 단계에서 이루어짐</li>
  <li>허용적 분위기 조성이 핵심</li>
  <li>공감과 민감한 반응</li>
  <li>내담자를 있는 그대로 수용</li>
  <li><strong>주의:</strong> 도덕적 판단은 관계형성을 방해함</li>
</ul>`},{title:`집단직업상담`,content:`<h4 class="exam-important">집단직업상담의 장점</h4>
<ul>
  <li>경제적·효율적 (다수 동시 상담)</li>
  <li>다양한 관점과 경험 공유</li>
  <li>대인관계 기술 향상</li>
  <li>소속감과 지지 경험</li>
  <li><strong>직업성숙도가 낮은 사람에게 특히 적합</strong></li>
</ul>
<h4 class="exam-important">톨버트(Tolbert)의 핵심요소</h4>
<table>
  <tr><th>요소</th><th>내용</th></tr>
  <tr><td><strong>목표</strong></td><td>집단상담의 명확한 목표 설정</td></tr>
  <tr><td><strong>과정</strong></td><td>5가지 활동 (탐색, 정보수집, 의사결정, 실행, 평가)</td></tr>
  <tr><td><strong>비밀유지</strong></td><td>집단 내 비밀보장 원칙</td></tr>
  <tr><td><strong>구성원</strong></td><td>6~10명이 적정 규모</td></tr>
</table>
<h4 class="exam-important">부처(Butcher)의 3단계</h4>
<ol>
  <li><strong>탐색 단계:</strong> 문제 파악 및 자기탐색</li>
  <li><strong>전환 단계:</strong> 새로운 관점으로의 전환</li>
  <li><strong>행동 단계:</strong> 구체적 행동 실천</li>
</ol>`},{title:`사이버 직업상담`,content:`<h4 class="exam-important">사이버 직업상담의 필요성</h4>
<ul>
  <li><strong>익명성:</strong> 내담자의 익명성 보장으로 솔직한 상담 가능</li>
  <li><strong>자기성찰 능력 향상:</strong> 글쓰기를 통한 자기탐색 촉진</li>
  <li>시간·공간 제약 없음</li>
  <li>접근성 향상</li>
</ul>
<h4 class="exam-important">사이버 상담 기법 (답변 절차)</h4>
<ol>
  <li><strong>진로논점 파악:</strong> 내담자 문제의 핵심 파악</li>
  <li><strong>유형 정하기:</strong> 상담 유형 결정</li>
  <li><strong>답변 내용:</strong> 답변 내용 구성</li>
  <li><strong>직업정보 가공:</strong> 관련 직업정보 정리</li>
  <li><strong>답변 작성:</strong> 최종 답변 작성</li>
</ol>
<h4>사이버 상담의 장단점</h4>
<table>
  <tr><th>장점</th><th>단점</th></tr>
  <tr><td>익명성 보장</td><td>비언어적 정보 파악 불가</td></tr>
  <tr><td>시간·공간 자유</td><td>즉각적 위기개입 어려움</td></tr>
  <tr><td>기록 보존 용이</td><td>관계 형성의 한계</td></tr>
  <tr><td>자기성찰 촉진</td><td>오해 발생 가능성</td></tr>
</table>
<h4 class="exam-important">전화상담의 특징</h4>
<ul>
  <li>응급상황에서 즉각 활용 가능</li>
  <li>익명성 보장</li>
  <li>비언어적 정보(표정, 몸짓 등)를 파악할 수 없음</li>
  <li>위기상담에 적합</li>
</ul>`},{title:`직업선택의 문제유형`,content:`<h4 class="exam-important">의사결정 유형 분류</h4>
<table>
  <tr><th>유형</th><th>하위유형</th><th>특징</th></tr>
  <tr><td rowspan="3"><strong>의사결정자</strong></td><td>확정적</td><td>이미 결정을 내린 상태</td></tr>
  <tr><td>수행적</td><td>결정을 실행하는 단계</td></tr>
  <tr><td>회피적</td><td>결정을 회피하는 유형</td></tr>
  <tr><td rowspan="3"><strong>의사미결정자</strong></td><td>자연적</td><td>아직 결정 시기가 아님</td></tr>
  <tr><td>발달적</td><td>발달 과정상 미결정</td></tr>
  <tr><td>다기능적</td><td>여러 가지 이유로 미결정</td></tr>
  <tr><td colspan="2"><strong>우유부단형</strong></td><td>성격적으로 결정을 못하는 유형</td></tr>
</table>
<h4 class="exam-important">윌리암슨(Williamson)의 분류</h4>
<ul>
  <li><strong>무선택:</strong> 직업을 선택하지 못한 상태</li>
  <li><strong>확신 부족:</strong> 선택했으나 확신이 없음</li>
  <li><strong>흥미-적성 불일치:</strong> 흥미와 적성이 맞지 않음</li>
  <li><strong>현명하지 못한 선택:</strong> 비합리적 선택을 한 경우</li>
</ul>
<h4 class="exam-important">바딘(Bordin)의 분류</h4>
<ul>
  <li><strong>의존성:</strong> 타인에 의존적인 의사결정</li>
  <li><strong>정보 부족:</strong> 필요한 정보가 부족</li>
  <li><strong>자아갈등:</strong> 내적 갈등으로 인한 어려움</li>
  <li><strong>선택불안:</strong> 선택에 대한 불안감</li>
  <li><strong>확신 부족:</strong> 결정에 대한 확신 부족</li>
</ul>
<h4 class="exam-important">크리이티스(Crites)의 분류</h4>
<ul>
  <li><strong>적응성:</strong> 환경에 대한 적응 정도</li>
  <li><strong>결정성:</strong> 결정을 내리는 능력</li>
  <li><strong>현실성:</strong> 현실적 판단 능력</li>
</ul>
<h4 class="exam-important">필립스(Phillips)의 분류</h4>
<ol>
  <li><strong>자기탐색:</strong> 자신에 대한 이해</li>
  <li><strong>선택준비:</strong> 선택을 위한 준비</li>
  <li><strong>의사결정:</strong> 결정 과정</li>
  <li><strong>선택과 결정:</strong> 최종 선택</li>
  <li><strong>실천:</strong> 결정의 실행</li>
</ol>`}]},{title:`직업상담 이론`,topics:[{title:`파슨스의 특성요인이론`,content:`<h4>특성요인이론 (Trait-Factor Theory)</h4>
<p>파슨스(Frank Parsons)가 창시한 최초의 체계적 직업지도 이론으로, 개인의 특성과 직업의 요인을 매칭하는 접근입니다.</p>
<h4>직업선택의 3단계</h4>
<ol>
  <li><strong>자기이해:</strong> 자신의 적성, 능력, 흥미, 한계 등을 명확히 이해</li>
  <li><strong>직업이해:</strong> 다양한 직업의 조건, 보상, 기회, 전망 등을 파악</li>
  <li><strong>합리적 추론:</strong> 자기이해와 직업이해를 바탕으로 합리적인 직업 선택</li>
</ol>
<h4>윌리엄슨(Williamson)의 특성요인 상담 6단계</h4>
<ol>
  <li><strong>분석(Analysis):</strong> 내담자에 대한 정보 수집</li>
  <li><strong>종합(Synthesis):</strong> 수집된 정보의 요약 정리</li>
  <li><strong>진단(Diagnosis):</strong> 문제의 원인 파악</li>
  <li><strong>예언(Prognosis):</strong> 문제 해결의 가능성 예측</li>
  <li><strong>상담(Counseling):</strong> 적절한 개입과 조력</li>
  <li><strong>추수지도(Follow-up):</strong> 상담 후 적응 확인</li>
</ol>`},{title:`로저스의 인간중심 상담`,content:`<h4>인간중심 상담 (Person-Centered Counseling)</h4>
<p>칼 로저스(Carl Rogers)가 개발한 비지시적 상담 이론으로, 내담자의 자기실현 경향성을 신뢰합니다.</p>
<h4>핵심 조건 (필요충분조건)</h4>
<ul>
  <li><strong>무조건적 긍정적 존중:</strong> 내담자를 조건 없이 수용하고 존중</li>
  <li><strong>공감적 이해:</strong> 내담자의 내적 준거 틀로 세상을 이해</li>
  <li><strong>일치성(진솔성):</strong> 상담자가 진정성 있고 투명하게 행동</li>
</ul>
<h4>주요 개념</h4>
<ul>
  <li><strong>자기실현 경향성:</strong> 인간은 자신의 잠재력을 실현하려는 선천적 동기를 가짐</li>
  <li><strong>자기개념:</strong> 자신에 대한 지각과 신념의 조직화된 체계</li>
  <li><strong>경험과 자기개념의 불일치:</strong> 심리적 부적응의 원인</li>
  <li><strong>충분히 기능하는 사람:</strong> 경험에 개방적이고, 실존적 삶을 영위하는 사람</li>
</ul>`},{title:`엘리스의 합리정서행동치료(REBT)`,content:`<h4>합리정서행동치료 (REBT)</h4>
<p>앨버트 엘리스(Albert Ellis)가 개발한 인지적 상담 이론으로, 비합리적 신념이 정서적 문제를 유발한다고 봅니다.</p>
<h4>ABCDE 모델</h4>
<ul>
  <li><strong>A (Activating event):</strong> 선행사건 - 촉발 사건</li>
  <li><strong>B (Belief):</strong> 신념 체계 - 합리적/비합리적 신념</li>
  <li><strong>C (Consequence):</strong> 결과 - 정서적, 행동적 결과</li>
  <li><strong>D (Disputing):</strong> 논박 - 비합리적 신념에 대한 도전</li>
  <li><strong>E (Effect):</strong> 효과 - 새로운 합리적 신념과 정서</li>
</ul>
<h4>비합리적 신념의 특징</h4>
<ul>
  <li><strong>당위적 사고:</strong> "반드시 ~해야 한다" (musturbation)</li>
  <li><strong>파국화:</strong> "이것은 끔찍하다" (awfulizing)</li>
  <li><strong>좌절에 대한 낮은 인내력:</strong> "나는 견딜 수 없다"</li>
  <li><strong>자기비하:</strong> "나는 무가치한 사람이다"</li>
</ul>`},{title:`행동주의 상담`,content:`<h4>행동주의 상담 이론</h4>
<p>관찰 가능한 행동에 초점을 맞추고, 학습 원리를 적용하여 부적응 행동을 수정하는 접근입니다.</p>
<h4>주요 기법</h4>
<ul>
  <li><strong>체계적 둔감법:</strong> 불안 위계표를 작성하고 이완 훈련을 통해 점진적으로 불안 감소</li>
  <li><strong>강화(Reinforcement):</strong> 바람직한 행동에 보상을 제공하여 행동 빈도 증가</li>
  <li><strong>소거(Extinction):</strong> 강화를 중단하여 부적응 행동 감소</li>
  <li><strong>모델링:</strong> 관찰학습을 통한 새로운 행동 습득 (반두라)</li>
  <li><strong>자기주장훈련:</strong> 적절한 자기표현 능력 향상</li>
  <li><strong>토큰경제:</strong> 토큰을 이용한 보상 체계</li>
  <li><strong>혐오치료:</strong> 부적응 행동에 불쾌 자극을 연합</li>
</ul>
<h4>크럼볼츠(Krumboltz)의 사회학습 진로이론</h4>
<ul>
  <li>유전적 요인과 특별한 능력</li>
  <li>환경적 조건과 사건</li>
  <li>학습경험 (도구적 학습, 연합적 학습)</li>
  <li>과제접근기술</li>
</ul>
<h4>크럼볼츠의 계획된 우연 이론 (2009)</h4>
<p>우연한 사건이 진로발달에 중요한 역할을 하며, 우연을 기회로 만드는 5가지 기술이 필요합니다:</p>
<ol>
  <li><strong>호기심(Curiosity):</strong> 새로운 학습 기회 탐색</li>
  <li><strong>인내(Persistence):</strong> 좌절에도 불구하고 노력 지속</li>
  <li><strong>유연성(Flexibility):</strong> 태도와 상황을 변화시키는 의지</li>
  <li><strong>낙관성(Optimism):</strong> 새로운 기회가 가능하다는 긍정적 태도</li>
  <li><strong>위험감수(Risk-taking):</strong> 불확실한 상황에서도 행동하는 용기</li>
</ol>`},{title:`벡의 인지치료`,content:`<h4>벡의 인지치료 (Cognitive Therapy)</h4>
<p>아론 벡(Aaron Beck)이 개발한 인지적 상담 이론으로, <strong>인지적 오류</strong>와 <strong>자동적 사고</strong>의 수정을 목표로 합니다.</p>
<h4>인지삼제 (Cognitive Triad)</h4>
<p>우울증 환자에게 공통적으로 나타나는 3가지 부정적 인지:</p>
<ol>
  <li><strong>자기 자신에 대한 부정적 사고:</strong> "나는 무능하다"</li>
  <li><strong>세상(환경)에 대한 부정적 사고:</strong> "세상은 불공평하다"</li>
  <li><strong>미래에 대한 부정적 사고:</strong> "앞으로도 나아지지 않을 것이다"</li>
</ol>
<h4>인지 구조의 3수준</h4>
<ul>
  <li><strong>핵심신념(Core Belief/Schema):</strong> 가장 깊은 수준, 어린 시절 형성된 근본적 믿음 ("나는 사랑받을 자격이 없다")</li>
  <li><strong>중간신념(Intermediate Belief):</strong> 규칙, 태도, 가정 ("완벽하지 않으면 실패다")</li>
  <li><strong>자동적 사고(Automatic Thought):</strong> 특정 상황에서 자동으로 떠오르는 사고 (가장 표면적)</li>
</ul>
<h4>주요 인지적 오류</h4>
<table>
  <tr><th>인지적 오류</th><th>설명</th><th>예시</th></tr>
  <tr><td><strong>이분법적 사고</strong></td><td>흑백논리, 전부 아니면 전무</td><td>"완벽하지 않으면 실패"</td></tr>
  <tr><td><strong>과잉일반화</strong></td><td>한두 번의 사건으로 일반화</td><td>"항상 나만 안 돼"</td></tr>
  <tr><td><strong>선택적 추상화</strong></td><td>부정적 측면만 선택적으로 주목</td><td>칭찬 10개, 비판 1개 중 비판만 기억</td></tr>
  <tr><td><strong>확대/축소</strong></td><td>부정은 확대, 긍정은 축소</td><td>실수는 크게, 성공은 운으로</td></tr>
  <tr><td><strong>개인화</strong></td><td>관련 없는 사건을 자기 탓으로</td><td>"그 사람이 화난 건 내 때문"</td></tr>
  <tr><td><strong>재앙화(파국화)</strong></td><td>최악의 결과를 예상</td><td>"면접 망하면 인생 끝"</td></tr>
  <tr><td><strong>감정적 추론</strong></td><td>감정을 근거로 현실 판단</td><td>"불안하니까 위험한 거야"</td></tr>
  <tr><td><strong>당위적 사고</strong></td><td>"~해야 한다"는 경직된 사고</td><td>"나는 반드시 성공해야 한다"</td></tr>
</table>
<h4>상담 기법</h4>
<ul>
  <li><strong>소크라테스식 질문:</strong> 질문을 통해 인지적 오류 스스로 발견</li>
  <li><strong>사고 기록지:</strong> 상황-자동적사고-감정-대안적사고 기록</li>
  <li><strong>행동 실험:</strong> 부정적 예측을 실제로 검증</li>
  <li><strong>인지적 재구조화:</strong> 왜곡된 사고를 합리적으로 교정</li>
</ul>`},{title:`게슈탈트 상담`,content:`<h4>게슈탈트 상담 (Gestalt Therapy)</h4>
<p>프리츠 펄스(Fritz Perls)가 개발한 상담 이론으로, '지금-여기(here and now)'에서의 알아차림을 강조합니다.</p>
<h4>핵심 개념</h4>
<ul>
  <li><strong>알아차림(Awareness):</strong> 현재 순간의 감각, 감정, 사고를 자각</li>
  <li><strong>접촉(Contact):</strong> 환경과의 상호작용</li>
  <li><strong>미해결 과제:</strong> 완결되지 않은 경험이 현재 행동에 영향</li>
  <li><strong>전경과 배경:</strong> 의미 있는 것이 전경으로, 나머지는 배경으로</li>
</ul>
<h4>주요 기법</h4>
<ul>
  <li><strong>빈 의자 기법:</strong> 빈 의자에 대상을 놓고 대화하는 역할극</li>
  <li><strong>실험:</strong> 새로운 행동을 시도해보는 체험적 활동</li>
  <li><strong>과장법:</strong> 특정 행동이나 감정을 과장하여 알아차림 증진</li>
  <li><strong>반대로 하기:</strong> 평소와 반대되는 행동을 시도</li>
  <li><strong>나 언어 사용:</strong> "나는 ~한다"로 책임감 표현</li>
</ul>`}]},{title:`직업상담 이론 II - 추가 주요 이론`,topics:[{title:`정신분석적 상담 (프로이트)`,content:`<h4>프로이트의 정신분석 이론</h4>
<p>지그문트 프로이트(Sigmund Freud)가 창시한 최초의 체계적 심리치료 이론으로, <strong>무의식</strong>의 역할을 강조합니다.</p>
<h4>의식의 3수준</h4>
<ul>
  <li><strong>의식(Conscious):</strong> 현재 자각하고 있는 정신 내용</li>
  <li><strong>전의식(Preconscious):</strong> 노력하면 의식으로 떠올릴 수 있는 내용</li>
  <li><strong>무의식(Unconscious):</strong> 억압된 충동, 욕구, 기억 (빙산의 수면 아래 대부분)</li>
</ul>
<h4>성격 구조</h4>
<ul>
  <li><strong>원초아(Id):</strong> 쾌락 원칙, 본능적 충동, 즉각적 만족 추구</li>
  <li><strong>자아(Ego):</strong> 현실 원칙, 원초아와 초자아를 중재, 적응적 기능</li>
  <li><strong>초자아(Superego):</strong> 도덕 원칙, 양심과 자아이상, 사회적 규범 내면화</li>
</ul>
<h4>심리성적 발달단계</h4>
<ol>
  <li><strong>구강기(0~1세):</strong> 빨기, 물기 등 구강 자극으로 만족</li>
  <li><strong>항문기(1~3세):</strong> 배변훈련, 통제와 자율성</li>
  <li><strong>남근기(3~6세):</strong> 오이디푸스/엘렉트라 콤플렉스</li>
  <li><strong>잠복기(6~12세):</strong> 성적 충동 잠복, 지적 활동에 집중</li>
  <li><strong>생식기(12세~):</strong> 성숙한 성적 관심, 이성 관계 형성</li>
</ol>
<h4>주요 방어기제</h4>
<table>
  <tr><th>방어기제</th><th>설명</th><th>예시</th></tr>
  <tr><td><strong>억압</strong></td><td>위협적 생각/감정을 무의식으로 밀어냄</td><td>충격적 사건 기억 못함</td></tr>
  <tr><td><strong>투사</strong></td><td>자신의 감정을 타인에게 귀인</td><td>"그 사람이 나를 싫어해"</td></tr>
  <tr><td><strong>합리화</strong></td><td>그럴듯한 이유로 정당화</td><td>"포도가 시다"(여우와 포도)</td></tr>
  <tr><td><strong>반동형성</strong></td><td>무의식과 반대되는 행동 표현</td><td>미움→과잉친절</td></tr>
  <tr><td><strong>승화</strong></td><td>충동을 사회적으로 수용 가능한 형태로 전환</td><td>공격성→운동선수</td></tr>
  <tr><td><strong>퇴행</strong></td><td>이전 발달단계로 되돌아감</td><td>동생 태어나면 아기짓</td></tr>
  <tr><td><strong>전치(전위)</strong></td><td>감정 대상을 안전한 대상으로 바꿈</td><td>상사에게 화→가족에게 화풀이</td></tr>
  <tr><td><strong>부정(부인)</strong></td><td>고통스러운 현실을 인정하지 않음</td><td>사망 소식 거부</td></tr>
  <tr><td><strong>보상</strong></td><td>한 영역의 약점을 다른 영역에서 만회</td><td>공부 약→운동 잘</td></tr>
  <tr><td><strong>동일시</strong></td><td>타인의 특성을 자기 것으로 내면화</td><td>존경하는 사람 모방</td></tr>
</table>
<h4>정신분석적 상담 기법</h4>
<ul>
  <li><strong>자유연상:</strong> 떠오르는 생각을 검열 없이 자유롭게 말하기</li>
  <li><strong>꿈의 분석:</strong> 현재몽(기억하는 내용) → 잠재몽(무의식적 의미) 해석</li>
  <li><strong>전이 분석:</strong> 과거 중요 인물에 대한 감정이 상담자에게 전이되는 현상 분석</li>
  <li><strong>저항 분석:</strong> 무의식적 내용 노출을 회피하는 현상 탐색</li>
  <li><strong>해석:</strong> 무의식적 의미를 의식 수준으로 가져오는 작업</li>
</ul>`},{title:`아들러의 개인심리학`,content:`<h4>아들러의 개인심리학 (Individual Psychology)</h4>
<p>알프레드 아들러(Alfred Adler)는 인간을 <strong>사회적 존재</strong>로 보고, 열등감 극복과 사회적 관심을 강조했습니다.</p>
<h4>핵심 개념</h4>
<ul>
  <li><strong>열등감과 보상:</strong> 인간은 본래 열등감을 느끼며, 이를 극복하려는 우월성 추구가 성장의 동력</li>
  <li><strong>열등감 콤플렉스:</strong> 열등감이 과도하여 정상적 보상이 이루어지지 않는 상태</li>
  <li><strong>우월성 콤플렉스:</strong> 열등감을 과잉보상하여 허세, 과시적 행동을 보이는 상태</li>
  <li><strong>가상적 목적론:</strong> 인간은 과거가 아닌 <strong>미래 목표</strong>에 의해 동기화됨 (프로이트의 결정론과 대비)</li>
  <li><strong>사회적 관심(Gemeinschaftsgefühl):</strong> 타인에 대한 관심과 공동체 의식 → 정신건강의 핵심 지표</li>
  <li><strong>생활양식(Lifestyle):</strong> 개인의 독특한 삶의 패턴, 4~5세경 형성</li>
  <li><strong>창조적 자아:</strong> 유전과 환경을 능동적으로 해석하고 활용하는 주체적 힘</li>
</ul>
<h4>생활양식의 4유형</h4>
<table>
  <tr><th>유형</th><th>사회적 관심</th><th>활동 수준</th><th>특징</th></tr>
  <tr><td><strong>지배형</strong></td><td>낮음</td><td>높음</td><td>독단적, 공격적</td></tr>
  <tr><td><strong>획득형(기대형)</strong></td><td>낮음</td><td>낮음</td><td>의존적, 수동적, 기생적</td></tr>
  <tr><td><strong>회피형</strong></td><td>낮음</td><td>낮음</td><td>문제 회피, 위축, 고립</td></tr>
  <tr><td><strong>사회적 유용형</strong></td><td>높음</td><td>높음</td><td>건강하고 성숙한 유형 (이상적)</td></tr>
</table>
<h4>출생순위의 영향</h4>
<ul>
  <li><strong>맏이:</strong> 책임감, 보수적, 권위적 (동생 출생 시 '폐위' 경험)</li>
  <li><strong>둘째:</strong> 경쟁적, 야망적, 맏이를 따라잡으려는 경향</li>
  <li><strong>막내:</strong> 응석받이 가능성, 독특한 방향 추구</li>
  <li><strong>독자:</strong> 관심의 중심, 사회적 관계 형성에 어려움 가능</li>
</ul>
<h4>상담 기법</h4>
<ul>
  <li><strong>격려(Encouragement):</strong> 내담자의 강점과 자원을 인정, 용기 부여 (가장 핵심적 기법)</li>
  <li><strong>초기기억 분석:</strong> 가장 오래된 기억을 통해 생활양식 파악</li>
  <li><strong>가족구도 분석:</strong> 형제 관계, 출생순위를 통한 생활양식 탐색</li>
  <li><strong>"마치 ~인 것처럼" 기법:</strong> 원하는 모습처럼 행동해보기 (as if 기법)</li>
  <li><strong>수프에 침 뱉기:</strong> 부적응적 행동의 숨은 목적을 자각시켜 그 매력을 잃게 함</li>
  <li><strong>역설적 의도:</strong> 증상을 의도적으로 과장하여 통제감 회복</li>
</ul>`},{title:`글래서의 현실치료`,content:`<h4>글래서의 현실치료 (Reality Therapy)</h4>
<p>윌리엄 글래서(William Glasser)가 개발한 이론으로, <strong>선택이론</strong>에 기반하여 현재 행동과 책임을 강조합니다.</p>
<h4>선택이론 (Choice Theory)</h4>
<p>모든 행동은 자신의 <strong>선택</strong>이며, 외부가 아닌 내부(기본 욕구)에서 동기화된다는 이론입니다. 타인의 행동을 통제할 수 없고 자신의 행동만 통제할 수 있습니다.</p>
<h4>5가지 기본 욕구</h4>
<ol>
  <li><strong>생존(Survival):</strong> 음식, 주거, 안전, 건강 (유일한 생리적 욕구)</li>
  <li><strong>사랑과 소속(Love & Belonging):</strong> 대인관계, 가족, 소속감</li>
  <li><strong>힘/성취(Power):</strong> 인정, 성취, 자존감, 경쟁</li>
  <li><strong>자유(Freedom):</strong> 자율성, 독립성, 선택의 자유</li>
  <li><strong>즐거움(Fun):</strong> 놀이, 유머, 학습의 즐거움</li>
</ol>
<h4>전행동(Total Behavior) 개념</h4>
<p>모든 행동은 4가지 구성요소로 이루어져 있습니다 (자동차의 4바퀴 비유):</p>
<ul>
  <li><strong>활동하기(Acting):</strong> 외현적 행동 → <em>직접 통제 가능 (앞바퀴)</em></li>
  <li><strong>생각하기(Thinking):</strong> 인지 → <em>직접 통제 가능 (앞바퀴)</em></li>
  <li><strong>느끼기(Feeling):</strong> 감정 → 간접적 통제 (뒷바퀴)</li>
  <li><strong>신체반응(Physiology):</strong> 생리 반응 → 간접적 통제 (뒷바퀴)</li>
</ul>
<p>★ 핵심: 활동하기와 생각하기(앞바퀴)를 바꾸면 느끼기와 신체반응(뒷바퀴)도 변화합니다.</p>
<h4>WDEP 체계</h4>
<ul>
  <li><strong>W (Want/바람):</strong> "무엇을 원하십니까?" - 바람, 욕구, 지각 탐색</li>
  <li><strong>D (Doing/행동):</strong> "지금 무엇을 하고 있습니까?" - 현재 행동과 방향 탐색</li>
  <li><strong>E (Evaluation/평가):</strong> "지금 하는 것이 원하는 것을 얻는 데 도움이 됩니까?" - 자기 평가 (핵심)</li>
  <li><strong>P (Planning/계획):</strong> 변화를 위한 실행 계획 수립</li>
</ul>
<h4>좋은 계획의 조건: SAMI²C³</h4>
<p>Simple(단순), Attainable(달성가능), Measurable(측정가능), Immediate(즉시실행), Involved(관여), Controlled(통제가능), Committed(헌신), Continuous(지속적)</p>`},{title:`해결중심 단기상담`,content:`<h4>해결중심 단기상담 (Solution-Focused Brief Therapy, SFBT)</h4>
<p>드 셰이저(Steve de Shazer)와 인수 김 버그(Insoo Kim Berg)가 개발한 단기 상담 모델로, <strong>문제가 아닌 해결</strong>에 초점을 맞춥니다.</p>
<h4>기본 가정</h4>
<ul>
  <li>변화는 불가피하며 항상 일어나고 있다</li>
  <li>내담자는 자신의 문제 해결에 필요한 <strong>강점과 자원</strong>을 이미 가지고 있다</li>
  <li>작은 변화가 큰 변화를 이끈다 (눈덩이 효과)</li>
  <li>문제의 원인을 알 필요 없이 해결 가능하다</li>
  <li><strong>효과가 있으면 계속하고, 효과가 없으면 다른 것을 하라</strong></li>
  <li>문제가 항상 일어나는 것은 아니다 (예외는 반드시 존재)</li>
</ul>
<h4>핵심 질문 기법</h4>
<ul>
  <li><strong>기적질문:</strong> "오늘 밤 기적이 일어나 문제가 해결되었다면, 내일 아침 무엇이 달라져 있을까요?"</li>
  <li><strong>예외질문:</strong> "문제가 일어나지 않았던 때는 언제였나요? 그때 무엇이 달랐나요?"</li>
  <li><strong>척도질문:</strong> "1~10점 중 현재 상태는 몇 점? 1점 올리려면 무엇이 필요할까요?"</li>
  <li><strong>대처질문:</strong> "이렇게 힘든 상황에서 어떻게 견뎌오셨나요?" (내담자 강점 발견)</li>
  <li><strong>관계성질문:</strong> "주변 사람들은 당신이 어떻게 달라졌다고 말할까요?"</li>
  <li><strong>첫 회기 전 변화 질문:</strong> "상담 예약 후부터 지금까지 달라진 것이 있나요?"</li>
</ul>
<h4>내담자 유형과 상담 전략</h4>
<table>
  <tr><th>유형</th><th>특징</th><th>전략</th></tr>
  <tr><td><strong>방문형</strong></td><td>자발적 동기 없음 (타인에 의해 의뢰)</td><td>칭찬, 관계 형성에 집중</td></tr>
  <tr><td><strong>불평형</strong></td><td>문제 인식 있으나 자신의 역할 인식 부족</td><td>관찰 과제 부여</td></tr>
  <tr><td><strong>고객형</strong></td><td>문제 인식 + 해결 의지 있음</td><td>행동 과제 부여</td></tr>
</table>
<h4>상담 구조: 메시지 전달</h4>
<ul>
  <li><strong>칭찬:</strong> 내담자의 강점과 노력 인정</li>
  <li><strong>연결문(브릿지):</strong> 칭찬과 과제를 연결하는 근거</li>
  <li><strong>과제:</strong> 관찰 과제 또는 행동 과제 제시</li>
</ul>`},{title:`교류분석(TA)과 실존주의 상담`,content:`<h4>교류분석 (Transactional Analysis, TA)</h4>
<p>에릭 번(Eric Berne)이 개발한 성격이론 및 상담 접근으로, <strong>자아상태</strong>와 대인 교류 패턴을 분석합니다.</p>
<h4>자아상태 (PAC 모델)</h4>
<ul>
  <li><strong>부모 자아(Parent, P):</strong> 부모에게 배운 가치관, 규칙
    <ul><li>양육적 부모(NP): 돌봄, 격려</li><li>비판적 부모(CP): 비판, 통제</li></ul></li>
  <li><strong>성인 자아(Adult, A):</strong> 객관적, 합리적 사고와 현실적 판단 (가장 바람직한 상태)</li>
  <li><strong>아동 자아(Child, C):</strong> 어린 시절의 감정과 충동
    <ul><li>자유로운 아동(FC): 자발적, 창의적</li><li>순응적 아동(AC): 순종적, 의존적</li></ul></li>
</ul>
<h4>교류(Transaction)의 유형</h4>
<ul>
  <li><strong>상보교류(Complementary):</strong> 기대한 자아상태에서 반응 → 원활한 의사소통 지속</li>
  <li><strong>교차교류(Crossed):</strong> 기대하지 않은 자아상태에서 반응 → 의사소통 단절/갈등</li>
  <li><strong>이면교류(Ulterior):</strong> 표면적 메시지와 이면적 메시지가 다름 → 게임의 원인</li>
</ul>
<h4>인생태도(Life Position) 4유형</h4>
<table>
  <tr><th>유형</th><th>태도</th><th>특징</th></tr>
  <tr><td><strong>I'm OK, You're OK</strong></td><td>자타 긍정</td><td>건강한 인생태도 (목표)</td></tr>
  <tr><td><strong>I'm OK, You're not OK</strong></td><td>자기 긍정, 타인 부정</td><td>투사적, 비난적, 우월감</td></tr>
  <tr><td><strong>I'm not OK, You're OK</strong></td><td>자기 부정, 타인 긍정</td><td>열등감, 우울, 의존</td></tr>
  <tr><td><strong>I'm not OK, You're not OK</strong></td><td>자타 부정</td><td>절망적, 무기력, 포기</td></tr>
</table>
<h4>기타 주요 개념</h4>
<ul>
  <li><strong>스트로크(Stroke):</strong> 상대를 인정하는 자극 (긍정적/부정적, 조건적/무조건적)</li>
  <li><strong>인생각본(Life Script):</strong> 어린 시절에 무의식적으로 형성된 인생 계획</li>
  <li><strong>게임(Game):</strong> 이면교류에 기반한 반복적 대인관계 패턴</li>
</ul>
<hr/>
<h4>실존주의 상담</h4>
<p>빅터 프랭클(Frankl), 롤로 메이(May), 어빈 얄롬(Yalom)이 대표적입니다.</p>
<h4>실존적 핵심 주제 (얄롬의 4가지 궁극적 관심사)</h4>
<ul>
  <li><strong>죽음:</strong> 죽음의 자각이 삶의 의미를 부여하고 참된 삶을 살게 함</li>
  <li><strong>자유와 책임:</strong> 인간은 선택의 자유가 있으며, 그에 따른 책임도 짐</li>
  <li><strong>실존적 고독:</strong> 궁극적으로 타인과 완전히 합일될 수 없는 존재</li>
  <li><strong>무의미:</strong> 삶에는 미리 정해진 의미가 없으므로, 스스로 의미를 창조해야 함</li>
</ul>
<h4>프랭클의 로고테라피(Logotherapy) 기법</h4>
<ul>
  <li><strong>역설적 의도:</strong> 두려워하는 것을 의도적으로 행하거나 바라기 (예: 불면증 환자에게 "잠들지 않으려고 노력하세요")</li>
  <li><strong>탈숙고(Dereflection):</strong> 과도한 자기관찰/분석에서 벗어나 외부 대상에 주의 전환</li>
  <li><strong>소크라테스식 대화:</strong> 질문을 통해 스스로 삶의 의미를 발견하도록 안내</li>
  <li><strong>의미에의 의지:</strong> 인간의 가장 근본적 동기는 삶의 의미를 찾는 것</li>
</ul>`}]},{title:`직업상담 이론 - 시험 핵심 키워드`,topics:[{title:`행동주의 상담의 체계적 둔감법`,content:`<h4 class="exam-important">체계적 둔감법 (Systematic Desensitization)</h4>
<p><strong>고전적 조건형성 기법</strong>에 기반한 불안 감소 기법</p>
<ul>
  <li>불안 위계목록 작성</li>
  <li>낮은 자극에서 높은 자극 순으로 상상 유도</li>
  <li>이완 상태에서 점진적으로 불안 자극 노출</li>
</ul>
<h4 class="exam-important">불안감소기법 7가지</h4>
<table>
  <tr><th>기법</th><th>설명</th></tr>
  <tr><td><strong>체계적 둔감법</strong></td><td>이완 + 점진적 불안 자극 노출</td></tr>
  <tr><td><strong>금지조건형성</strong></td><td>부적응 행동에 대한 조건형성 억제</td></tr>
  <tr><td><strong>반조건형성</strong></td><td>기존 조건반응과 반대되는 새 조건반응 형성</td></tr>
  <tr><td><strong>홍수법</strong></td><td>강한 불안 자극에 지속적으로 노출</td></tr>
  <tr><td><strong>혐오치료</strong></td><td>부적응 행동에 혐오 자극 연합</td></tr>
  <tr><td><strong>주장훈련</strong></td><td>자기주장 능력 향상 훈련</td></tr>
  <tr><td><strong>자기표현훈련</strong></td><td>자기 표현 기술 학습</td></tr>
</table>
<h4 class="exam-important">학습촉진법</h4>
<table>
  <tr><th>방법</th><th>설명</th></tr>
  <tr><td><strong>강화</strong></td><td>바람직한 행동 후 보상 제공</td></tr>
  <tr><td><strong>변별학습</strong></td><td>자극 간 차이를 구분하는 학습</td></tr>
  <tr><td><strong>사회적 모델링</strong></td><td>타인의 행동을 관찰하여 학습</td></tr>
  <tr><td><strong>행동조성(Shaping)</strong></td><td>목표 행동에 점진적으로 접근</td></tr>
  <tr><td><strong>토큰경제</strong></td><td>토큰(보상)을 활용한 행동 변화</td></tr>
</table>`},{title:`발달적 직업상담의 6단계`,content:`<h4 class="exam-important">Super의 발달적 직업상담 6단계</h4>
<table>
  <tr><th>단계</th><th>내용</th><th>방식</th></tr>
  <tr><td><strong>1단계</strong></td><td>문제탐색 / 자아개념 묘사</td><td>비지시적</td></tr>
  <tr><td><strong>2단계</strong></td><td>심층적 탐색</td><td>지시적</td></tr>
  <tr><td><strong>3단계</strong></td><td>자아수용 / 통찰</td><td>비지시적</td></tr>
  <tr><td><strong>4단계</strong></td><td>현실검증</td><td>지시적</td></tr>
  <tr><td><strong>5단계</strong></td><td>태도·감정 탐색</td><td>비지시적</td></tr>
  <tr><td><strong>6단계</strong></td><td>의사결정</td><td>비지시적</td></tr>
</table>
<h4 class="exam-important">핵심 포인트</h4>
<ul>
  <li>Super는 <strong>'진단' 대신 '평가'</strong>라는 용어 사용</li>
  <li><strong>3가지 평가:</strong> 문제 평가, 개인 평가, 예언(예후) 평가</li>
  <li>비지시적(1,3,5,6단계)과 지시적(2,4단계)을 번갈아 사용</li>
</ul>`},{title:`개인주의 상담(아들러)의 특징`,content:`<h4 class="exam-important">아들러(Adler) 개인심리학의 핵심</h4>
<p><strong>의식 속 힘을 강조</strong> (프로이트/융은 무의식 강조)</p>
<h4 class="exam-important">10가지 주요 특징</h4>
<table>
  <tr><th>번호</th><th>특징</th></tr>
  <tr><td>1</td><td><strong>전체적 존재:</strong> 인간을 통합된 전체로 봄</td></tr>
  <tr><td>2</td><td><strong>사회적 관계 강조:</strong> 인간은 사회적 존재</td></tr>
  <tr><td>3</td><td><strong>동기수정 관심:</strong> 행동 동기의 수정에 관심</td></tr>
  <tr><td>4</td><td><strong>열등감 극복 / 우월 추구:</strong> 열등감에서 우월로</td></tr>
  <tr><td>5</td><td><strong>가치·목표 수정:</strong> 잘못된 가치와 목표 수정</td></tr>
  <tr><td>6</td><td><strong>사회적 관심:</strong> 공동체 의식 강조</td></tr>
  <tr><td>7</td><td><strong>주관적 지각 중시:</strong> 개인의 주관적 경험 중요</td></tr>
  <tr><td>8</td><td><strong>선택·책임 강조:</strong> 자기 삶에 대한 책임</td></tr>
  <tr><td>9</td><td><strong>계약·협력 중시:</strong> 상담자-내담자 협력 관계</td></tr>
  <tr><td>10</td><td><strong>격려 사용 권장:</strong> 격려를 통한 변화 촉진</td></tr>
</table>`},{title:`특성-요인 직업상담의 과정`,content:`<h4 class="exam-important">특성-요인 상담의 특징</h4>
<p><strong>지시적 상담</strong>의 대표적 접근</p>
<h4 class="exam-important">파슨스(Parsons)의 3요소</h4>
<ol>
  <li><strong>자기이해:</strong> 자신의 적성, 능력, 흥미, 한계 파악</li>
  <li><strong>직업이해:</strong> 직업 세계에 대한 이해</li>
  <li><strong>합리적 연결:</strong> 자기이해와 직업이해의 합리적 매칭</li>
</ol>
<h4 class="exam-important">윌리암슨(Williamson)의 6단계</h4>
<table>
  <tr><th>단계</th><th>내용</th></tr>
  <tr><td><strong>1. 분석(Analysis)</strong></td><td>내담자 정보 수집</td></tr>
  <tr><td><strong>2. 종합(Synthesis)</strong></td><td>수집된 정보 요약·정리</td></tr>
  <tr><td><strong>3. 진단(Diagnosis)</strong></td><td>문제 원인 파악</td></tr>
  <tr><td><strong>4. 처방(Prognosis)</strong></td><td>문제 해결 가능성 예측</td></tr>
  <tr><td><strong>5. 치료(Treatment)</strong></td><td>적절한 개입과 조력</td></tr>
  <tr><td><strong>6. 사후지도(Follow-up)</strong></td><td>상담 후 적응 확인</td></tr>
</table>`},{title:`보딘(Bordin)의 상담`,content:`<h4 class="exam-important">보딘(Bordin) 상담의 특징</h4>
<ul>
  <li><strong>정신역동적</strong> 접근</li>
  <li><strong>특성요인 + 내담자중심</strong> 상담을 통합</li>
  <li>5가지 진단범주 제시</li>
</ul>
<h4 class="exam-important">주요 기법</h4>
<table>
  <tr><th>기법</th><th>설명</th></tr>
  <tr><td><strong>명료화</strong></td><td>내담자의 감정과 생각을 명확하게 정리</td></tr>
  <tr><td><strong>비교</strong></td><td>다양한 대안과 결과를 비교 검토</td></tr>
  <tr><td><strong>소망방어체계 해석</strong></td><td>무의식적 소망과 방어기제 해석</td></tr>
</table>
<h4 class="exam-important">상담 과정 3단계</h4>
<ol>
  <li><strong>탐색 / 계약 설정:</strong> 문제 탐색 및 상담 관계 계약</li>
  <li><strong>핵심 결정:</strong> 핵심 문제에 대한 결정</li>
  <li><strong>변화 노력:</strong> 결정을 실행하기 위한 변화 시도</li>
</ol>`},{title:`내담자중심 상담의 기본태도`,content:`<h4 class="exam-important">로저스(Rogers), 패터슨(Patterson)</h4>
<p><strong>비지시적 상담</strong>의 대표적 접근</p>
<h4 class="exam-important">상담자의 3가지 기본태도 (필요충분조건)</h4>
<table>
  <tr><th>태도</th><th>설명</th></tr>
  <tr><td><strong>일치성/진실성(Congruence)</strong></td><td>상담자가 자신의 경험과 표현이 일치하는 상태. 진솔한 태도</td></tr>
  <tr><td><strong>공감적 이해(Empathy)</strong></td><td>내담자의 내적 세계를 마치 자신의 것처럼 느끼며 이해</td></tr>
  <tr><td><strong>무조건적 긍정적 수용(Unconditional Positive Regard)</strong></td><td>내담자를 조건 없이 존중하고 수용</td></tr>
</table>`},{title:`정신분석적 상담의 방어기제`,content:`<h4 class="exam-important">프로이트(Freud) 정신분석</h4>
<p>특징: <strong>비합리적, 결정론적, 생물학적</strong> 관점</p>
<p>상담자 역할: <strong>텅 빈 스크린(Blank Screen)</strong> - 중립적 태도 유지</p>
<h4 class="exam-important">주요 방어기제</h4>
<table>
  <tr><th>방어기제</th><th>설명</th></tr>
  <tr><td><strong>억압(Repression)</strong></td><td>가장 중요하고 기초적인 방어기제. 고통스러운 기억을 무의식에 억눌러 둠</td></tr>
  <tr><td><strong>부인(Denial)</strong></td><td>위협적인 현실을 인정하지 않음</td></tr>
  <tr><td><strong>합리화(Rationalization)</strong></td><td>그럴듯한 이유를 붙여 정당화</td></tr>
  <tr><td><strong>반동형성(Reaction Formation)</strong></td><td>실제 감정과 반대되는 행동 표현</td></tr>
  <tr><td><strong>투사(Projection)</strong></td><td>자신의 감정을 타인에게 돌림</td></tr>
  <tr><td><strong>퇴행(Regression)</strong></td><td>이전 발달 단계로 되돌아감</td></tr>
  <tr><td><strong>전위(Displacement)</strong></td><td>감정을 다른 대상으로 전환</td></tr>
  <tr><td><strong>대치(Substitution)</strong></td><td>원래 대상 대신 다른 대상으로 대체</td></tr>
  <tr><td><strong>격리(Isolation)</strong></td><td>감정과 사고를 분리</td></tr>
</table>`},{title:`교류분석적 상담의 성격구조`,content:`<h4 class="exam-important">번(Berne)의 교류분석(TA)</h4>
<h4 class="exam-important">분석 유형</h4>
<table>
  <tr><th>유형</th><th>설명</th></tr>
  <tr><td><strong>구조분석</strong></td><td>자아상태(P-A-C)의 구조 분석</td></tr>
  <tr><td><strong>교류분석</strong></td><td>사람 간 의사소통 패턴 분석</td></tr>
  <tr><td><strong>라켓/게임분석</strong></td><td>반복적 부정적 교류 패턴 분석</td></tr>
  <tr><td><strong>각본분석</strong></td><td>인생각본(Life Script) 분석</td></tr>
</table>
<h4 class="exam-important">자아상태 (PAC 모델)</h4>
<table>
  <tr><th>자아상태</th><th>특징</th></tr>
  <tr><td><strong>부모자아(Parent: P)</strong></td><td>양육적 부모(NP), 비판적 부모(CP). 가치관, 규범, 도덕</td></tr>
  <tr><td><strong>성인자아(Adult: A)</strong></td><td>합리적, 객관적, 현실적 사고와 판단</td></tr>
  <tr><td><strong>아동자아(Child: C)</strong></td><td>자유로운 아동(FC), 순응적 아동(AC). 감정, 욕구, 창의성</td></tr>
</table>`},{title:`행동주의 상담의 강화계획`,content:`<h4 class="exam-important">행동주의 상담의 주요 학자</h4>
<table>
  <tr><th>학자</th><th>이론</th></tr>
  <tr><td><strong>파블로프(Pavlov)</strong></td><td>고전적 조건형성 (자극-반응)</td></tr>
  <tr><td><strong>스키너(Skinner)</strong></td><td>조작적 조건형성 (강화-행동)</td></tr>
  <tr><td><strong>반두라(Bandura)</strong></td><td>사회학습이론 (관찰학습, 모델링)</td></tr>
</table>
<h4 class="exam-important">강화계획의 효과 순서 (소거 저항력)</h4>
<table>
  <tr><th>순위</th><th>강화계획</th><th>약자</th><th>설명</th></tr>
  <tr><td>1위 (가장 강함)</td><td><strong>변동비율</strong></td><td>VR</td><td>불규칙한 반응 횟수 후 강화</td></tr>
  <tr><td>2위</td><td><strong>고정비율</strong></td><td>FR</td><td>일정한 반응 횟수 후 강화</td></tr>
  <tr><td>3위</td><td><strong>변동간격</strong></td><td>VI</td><td>불규칙한 시간 간격 후 강화</td></tr>
  <tr><td>4위 (가장 약함)</td><td><strong>고정간격</strong></td><td>FI</td><td>일정한 시간 간격 후 강화</td></tr>
</table>
<p><strong>암기 팁:</strong> VR > FR > VI > FI (변고변고, 비율이 간격보다 강함)</p>`},{title:`REBT의 ABCDEF 모델`,content:`<h4 class="exam-important">엘리스(Ellis)의 REBT</h4>
<p><strong>인지 + 행동주의</strong>를 결합한 상담 이론</p>
<h4 class="exam-important">ABCDEF 모델</h4>
<table>
  <tr><th>요소</th><th>영문</th><th>설명</th></tr>
  <tr><td><strong>A</strong></td><td>Activating Event</td><td>선행사건 - 문제를 유발하는 사건</td></tr>
  <tr><td><strong>B</strong></td><td>Belief</td><td>비합리적 신념 - 사건에 대한 잘못된 믿음</td></tr>
  <tr><td><strong>C</strong></td><td>Consequence</td><td>결과 - 비합리적 신념으로 인한 부정적 결과</td></tr>
  <tr><td><strong>D</strong></td><td>Disputing</td><td>논박 - 비합리적 신념에 대한 도전과 반박</td></tr>
  <tr><td><strong>E</strong></td><td>Effect</td><td>효과 - 논박으로 인한 긍정적 효과</td></tr>
  <tr><td><strong>F</strong></td><td>Feeling</td><td>새로운 감정 - 합리적 신념으로 인한 긍정적 감정</td></tr>
</table>
<h4 class="exam-important">REBT 주요 기법</h4>
<table>
  <tr><th>유형</th><th>기법</th></tr>
  <tr><td><strong>인지기법</strong></td><td>논박(Disputing) - 비합리적 신념에 도전</td></tr>
  <tr><td rowspan="3"><strong>행동기법</strong></td><td>체계적 둔감법</td></tr>
  <tr><td>강화/처벌</td></tr>
  <tr><td>자기관리 프로그램</td></tr>
</table>`}]},{title:`직업상담 기법`,topics:[{title:`생애진로사정(LCA)`,content:`<h4>생애진로사정 개요</h4>
<p><strong>아들러(Adler)의 개인심리학</strong>에 기초를 둔 생애진로사정은 상담자와 내담자가 처음 만났을 때 이용할 수 있는 <strong>구조화된 면접기법</strong>이자 <strong>초기단계 면접법</strong>이며, 검사 실시와 해석의 예비단계입니다.</p>
<p>생애진로사정을 통해 파악할 수 있는 것:</p>
<ol>
  <li>내담자의 <strong>직업경험과 교육수준</strong></li>
  <li>내담자의 <strong>기술과 유능성</strong></li>
  <li>내담자의 <strong>가치관 및 자기인식 정도</strong></li>
</ol>
<h4>생애진로사정의 특징</h4>
<ul>
  <li>작업자, 학습자, 개인의 역할 등 <strong>다양한 생애역할</strong>에 대한 정보를 탐색</li>
  <li>진로사정, 전형적인 하루, 강점과 장애, 요약으로 이루어짐</li>
  <li><strong>비판단적이고 비위협적인 대화</strong>로 내담자와 긍정적 관계를 형성하는 데 도움</li>
  <li>내담자의 진로계획을 향상시킨다</li>
  <li class="exam-highlight">인쇄물이나 소책자, 지필도구 등의 <strong>표준화된 진로사정 도구는 가급적 사용을 삼간다</strong></li>
</ul>
<h4 class="exam-important">생애진로사정의 구조 (4단계)</h4>
<table>
  <tr><th>단계</th><th>내용</th><th>핵심 파악 요소</th></tr>
  <tr><td><strong>1. 진로사정</strong></td><td>직업경험, 교육·훈련, 여가활동</td><td>내담자의 직업경험(시간제·전임, 유·무보수), 교육 또는 훈련과정과 관련된 문제들, 여가활동</td></tr>
  <tr><td><strong>2. 전형적인 하루</strong></td><td>생활 조직 방식을 시간 흐름에 따라 체계적 기술</td><td>의존적인지 또는 독립적인지, 자발적인지 또는 체계적인지</td></tr>
  <tr><td><strong>3. 강점과 장애</strong></td><td>문제·환경적 장애 탐구</td><td>극복을 위한 대처차원이나 잠재력 탐구</td></tr>
  <tr><td><strong>4. 요약</strong></td><td>자기인식 증진</td><td>내담자 스스로 자기인식을 증진, 문제해결 및 장애극복을 위해 목표달성계획 수립</td></tr>
</table>`},{title:`직업가계도(Genogram)`,content:`<h4>직업가계도 개요</h4>
<p>구조화된 면담법의 <strong>직업가계도</strong>는 그 자체로 내담자의 직업선택을 위한 도구로 사용되는 것이 아닌, 내담자의 <strong>생애진로사정을 위한 도구</strong>로 사용됩니다.</p>
<ul>
  <li>내담자의 직업의식, 직업선택, 직업태도에 대한 <strong>가족의 영향력</strong>을 분석하는 대표적인 <strong>질적 평가기법</strong></li>
  <li>경력상담 시 내담자의 가족이나 선조들의 직업 특징에 대한 <strong>시각적 표상</strong>을 얻기 위해 도표를 만드는 방식</li>
  <li>직업가계도를 통해 <strong>가족의 미완성된 과제</strong>를 발견할 수 있다</li>
</ul>
<h4 class="exam-important">다그레이(Dagley)의 직업가계도 작성 시 관심 요인</h4>
<ol>
  <li><strong>3~4세대</strong>의 대표적 직업</li>
  <li>가족 성원의 직업에 전형적인 <strong>지위와 가치의 서열화</strong></li>
  <li>가족 성원들이 직업을 선택 또는 바꾸었을 때 나타난 <strong>진로선택 형태와 방법</strong></li>
  <li>가족의 <strong>경제적 기대와 압력</strong></li>
  <li>가족의 <strong>일의 가치</strong></li>
  <li>내담자가 성장할 때의 <strong>또래집단 상황</strong></li>
</ol>`},{title:`직업선택의 결정모형`,content:`<h4>직업선택의 결정모형 개요</h4>
<p>직업상담기법으로 대안개발과 의사결정에 관한 <strong>직업선택의 결정모형</strong>을 제시하였습니다. 크게 기술적 모형과 처방적 모형으로 구분됩니다.</p>
<h4 class="exam-important">(1) 기술적 직업결정 모형</h4>
<p>타이드만과 오하라, 힐튼, 브룸, 슈, 플레쳐 등이 제시</p>
<table>
  <tr><th>학자</th><th>핵심 내용</th></tr>
  <tr><td><strong>타이드만과 오하라<br/>(Tiedeman & O'Hara)</strong></td><td>자기정체감 분화, 발달과업 수행, 심리사회적 위기 해결의 지속적인 과정. 자기정체감을 지속적으로 구별해 내고 발달과제를 처리하는 과정</td></tr>
  <tr><td><strong>힐튼(Hilton)</strong></td><td>인간이 복잡한 정보에 접근하게 되는 구조에 근거 → <strong>전제단계 - 계획단계 - 인지부조화단계</strong></td></tr>
  <tr><td><strong>브룸(Vroom)</strong></td><td>직업결정요인 → <strong>균형, 기대, 힘</strong></td></tr>
  <tr><td><strong>슈(Hsu)</strong></td><td>직업결정자 → 선택과 목표 사이의 <strong>불균형을 극소화</strong> 시키려는 시도를 가정</td></tr>
  <tr><td><strong>플레쳐(Fletcher)</strong></td><td>개념학습에 대한 생각에 근거 → <strong>'특수성 대 일반성', '구체성 대 추상성'</strong></td></tr>
</table>
<h4 class="exam-important">(2) 처방적 직업결정 모형</h4>
<p>카츠, 겔라트, 칼도와 쥐토우스키가 제시 (이름이 'ㄱ','ㅋ'으로 시작)</p>
<table>
  <tr><th>학자</th><th>핵심 내용</th></tr>
  <tr><td><strong>카츠(Katz)</strong></td><td>특성에 맞는 대안을 선택하고 그 대안이 제공하는 보수에 따라 평가하는 것을 주장</td></tr>
  <tr><td><strong>겔라트(Gelatt)</strong></td><td>직업선택을 <strong>결과보다 과정 중시</strong>. 정보체계 설명 → <strong>예언적 체계, 가치체계, 결정준거</strong></td></tr>
  <tr><td><strong>칼도와 쥐토우스키<br/>(Kaldor-Zytowski)</strong></td><td>직업결정자가 대안에 대해 <strong>무제한 정보</strong>를 갖게 된다고 주장</td></tr>
</table>
<h4>겔라트(Gelatt)의 진로의사결정 과정</h4>
<p><strong>목적의식 → 정보수집 → 대안열거 → 대안결과예측 → 대안실현가능성예측 → 가치평가 → 의사결정 → 평가 및 재투입</strong></p>`},{title:`6개의 생각하는 모자`,content:`<h4>의사결정의 유형 - 하렌(Harren)</h4>
<p>하렌(Harren)의 진로의사결정 유형:</p>
<ul>
  <li><strong>합리적 유형</strong> : 논리적으로 정보를 수집하고 체계적으로 의사결정</li>
  <li><strong>직관적 유형</strong> : 감정과 직감에 의존하여 결정</li>
  <li><strong>의존적 유형</strong> : 타인의 기대나 의견에 의존하여 결정</li>
</ul>
<h4 class="exam-important">6개의 생각하는 모자</h4>
<p>의사결정의 촉진방법으로 제시된 기법입니다.</p>
<table>
  <tr><th>모자 색</th><th>의미</th><th>특징</th></tr>
  <tr><td><strong>백색</strong></td><td>사실</td><td>본인과 직업들에 대한 <strong>사실들만</strong> 고려한다</td></tr>
  <tr><td><strong>적색</strong></td><td>직관</td><td><strong>직관에 의존</strong>하고, 직감에 따라 행동한다</td></tr>
  <tr><td><strong>흑색</strong></td><td>비관</td><td><strong>비관적, 비판적</strong></td></tr>
  <tr><td><strong>황색</strong></td><td>낙관</td><td><strong>낙관적</strong></td></tr>
  <tr><td><strong>녹색</strong></td><td>창의</td><td>새로운 대안을 찾으려 노력, 문제를 <strong>다른 각도</strong>에서 바라본다</td></tr>
  <tr><td><strong>청색</strong></td><td>합리</td><td><strong>합리적</strong>으로 생각한다 (사회자로서의 역할 반영)</td></tr>
</table>
<p class="exam-tip"><strong>시험 꿀팁:</strong> 6개 생각하는 모자 중 '갈색 모자' 지문이 나오면 무조건 오답!</p>`},{title:`상담면접 기법과 공감`,content:`<h4 class="exam-important">공감 (감정에 대한 반영)</h4>
<ul>
  <li>내담자가 전달하려는 내용에서 <strong>한 걸음 더 나아가</strong> 그 내면적 감정에 대해 반영하는 것</li>
  <li><strong>객관적 위치</strong>에서 이해</li>
  <li>내담자의 <strong>자기탐욕과 수용을 촉진</strong></li>
</ul>
<h4>공감적 이해의 5가지 수준</h4>
<table>
  <tr><th>수준</th><th>설명</th><th>공감 수준</th></tr>
  <tr><td>수준 1</td><td>별다른 주의를 기울이지 않은 타입, 소통이 못 미침</td><td>매우 낮음</td></tr>
  <tr><td>수준 2</td><td>어느 정도 반응하는 타입, 상대방 감정이나 의사 무시</td><td>낮음</td></tr>
  <tr><td>수준 3</td><td>상호교류적 의사소통 가능</td><td>보통</td></tr>
  <tr><td>수준 4</td><td>상대방보다 더 의사소통 이루어짐</td><td>높음</td></tr>
  <tr><td>수준 5</td><td>상대방의 표면적, 내면적 감정에 정확한 반응</td><td>매우 높음</td></tr>
</table>
<h4 class="exam-important">상담면접의 주요 기법 (6개 이상 암기)</h4>
<p><strong>공감, 요약과 재진술, 반영, 수용, 경청(반영적/적극적), 탐색적 질문(개방적), 명료화, 해석, 직면, 저항의 처리, 침묵의 처리</strong></p>
<h4>경청 (Active Listening)</h4>
<ul>
  <li><strong>수동적 경청:</strong> 조용히 듣기, 고개 끄덕이기, "음", "네" 등</li>
  <li><strong>적극적 경청:</strong> 재진술, 반영, 명료화를 통한 깊은 이해</li>
  <li><strong>비언어적 주의:</strong> 눈맞춤, 몸 기울이기, 개방적 자세</li>
</ul>
<h4>명료화 (Clarification)</h4>
<p>내담자의 모호한 생각과 감정의 표현을 상담사가 분명하게 밝히는 것</p>
<h4>직면 (Confrontation)</h4>
<p>상담사가 내담자로 하여금 자신의 문제에 회피하지 않고 도전하도록 하는 것</p>
<h4>해석 (Interpretation)</h4>
<p>내담자의 행동, 사고, 감정 아래에 있는 무의식적 의미나 패턴을 설명하는 기법</p>`},{title:`상담의 바람직한 목표설정 방향`,content:`<h4>목표설정의 필요성</h4>
<p>목표설정에 <strong>상담자의 개입이 필요한 이유</strong>는 내담자가 명확하고 구체적인 목표를 설정하도록 돕기 위해서입니다.</p>
<h4 class="exam-important">상담의 바람직한 목표설정 방향</h4>
<ol>
  <li><strong>구체적</strong>이어야 한다</li>
  <li><strong>실현 가능</strong>해야 한다</li>
  <li><strong>내담자가 원하고 바라는 것</strong>이어야 한다</li>
  <li>내담자의 목표는 <strong>상담자의 기술과 양립 가능</strong>해야만 한다</li>
</ol>`},{title:`전이된 오류 정정하기`,content:`<h4>전이된 오류 정정하기 개요</h4>
<p>내담자의 정보 및 행동에 대한 이해기법으로, <strong>정보의 오류, 한계의 오류, 논리적 오류</strong>의 3가지 유형이 있습니다.</p>
<h4 class="exam-important">3가지 오류 유형</h4>
<table>
  <tr><th>오류 유형</th><th>설명</th><th>세부 항목</th></tr>
  <tr>
    <td><strong>정보의 오류</strong></td>
    <td>충분한 정보를 알고 있다고 잘못 생각하는 경우</td>
    <td>이야기 삭제, 불확실한 인물의 사용, 불분명한 동사의 사용, 참고자료의 불충분, 제한된 어투의 사용</td>
  </tr>
  <tr>
    <td><strong>한계의 오류</strong></td>
    <td>제한된 기회 및 선택에 대한 견해</td>
    <td>예외를 인정하지 않는 것, 불가능을 가정하는 것, 어쩔 수 없음을 가정하는 것</td>
  </tr>
  <tr>
    <td><strong>논리적 오류</strong></td>
    <td>논리적으로 잘못된 추론</td>
    <td>잘못된 인간관계 오류, 마음의 해석, 제한된 일반화</td>
  </tr>
</table>`},{title:`자기보고식 가치사정법`,content:`<h4>가치사정법 개요</h4>
<p>자기보고식 가치사정법은 <strong>내담자 사정의 가치 사정하기</strong>에 해당합니다.</p>
<h4 class="exam-important">가치사정법 6가지</h4>
<ol>
  <li><strong>체크목록 가치에 순위 매기기</strong></li>
  <li><strong>과거의 선택 회상하기</strong></li>
  <li><strong>절정경험 조사하기</strong></li>
  <li><strong>자유시간과 금전의 사용</strong></li>
  <li><strong>백일몽 말하기</strong></li>
  <li><strong>존경하는 사람 기술하기</strong></li>
</ol>`},{title:`코틀(Cottle)의 원형검사`,content:`<h4>코틀의 원형검사 개요</h4>
<ul>
  <li>가장 효과적인 <strong>시간전망 개입도구</strong></li>
  <li><strong>과거, 현재, 미래</strong>를 뜻하는 3개의 원을 이용</li>
  <li>원의 크기는 시간차원에 대한 <strong>상대적 친밀감</strong>을 의미</li>
  <li>원의 배치는 시간차원이 각각 어떻게 연관되어 있는지를 나타냄</li>
  <li><strong>방향성, 변별성, 통합성</strong>을 제시</li>
</ul>
<h4 class="exam-important">진로시간전망 개입의 3가지 측면</h4>
<table>
  <tr><th>측면</th><th>설명</th></tr>
  <tr><td><strong>방향성</strong></td><td>미래에 대한 <strong>낙관적인 입장</strong>을 구성</td></tr>
  <tr><td><strong>변별성</strong></td><td>시간차원 내 사건의 강도와 확장의 원리, 미래 계획에 대한 <strong>긍정적 태도를 강화</strong></td></tr>
  <tr><td><strong>통합성</strong></td><td><strong>현재 행동과 미래의 결과</strong>를 연결</td></tr>
</table>
<h4>원의 상대적 배치에 따른 시간 관계성</h4>
<p>흑색(과거), 청색(현재), 적색(미래)을 사용합니다.</p>
<table>
  <tr><th>배치 형태</th><th>시간 관계</th></tr>
  <tr><td>어떤 것도 접해 있지 않은 원</td><td>시간차원의 <strong>고립</strong></td></tr>
  <tr><td>중복되지 않고 경계선에 접해 있는 원</td><td>시간차원의 <strong>연결</strong></td></tr>
  <tr><td>부분적으로 중첩된 원</td><td>시간차원의 <strong>연합</strong></td></tr>
  <tr><td>완전히 중첩된 원</td><td>시간차원의 <strong>통합</strong></td></tr>
</table>
<p class="exam-tip"><strong>참고:</strong> 진로시간전망은 진로에 관한 과거, 현재, 미래의 정신적인 상을 말하며, 직업상담 초기에 하는 것이 좋고, 진로계획에 대한 긍정적 태도의 강화를 목적으로 하며, 직접적인 진로계획 수정을 목적으로 하지 않습니다.</p>`},{title:`MBTI 성격사정`,content:`<h4>MBTI (마이어스-브릭스 성격유형검사)</h4>
<p>Myers-Briggs Type Indicator</p>
<ul>
  <li><strong>융(Jung)의 분석심리학</strong>에 의한 심리유형론에 기반</li>
  <li><strong>객관적 검사</strong>이자 <strong>자기보고식의 강제선택</strong> 검사</li>
  <li>내담자가 선호하는 <strong>작업역할, 기능, 환경</strong>을 찾아내는 데 유용</li>
  <li>성격의 <strong>4가지 양극차원</strong>으로 분류</li>
</ul>
<h4 class="exam-important">성격의 4가지 양극차원</h4>
<table>
  <tr><th>차원</th><th>유형</th><th>의미</th></tr>
  <tr><td><strong>에너지 방향</strong></td><td>외향형(E) / 내향형(I)</td><td>세상에 대한 일반적인 태도</td></tr>
  <tr><td><strong>인식 기능</strong></td><td>감각형(S) / 직관형(N)</td><td>지각적 또는 정보수집적 과정</td></tr>
  <tr><td><strong>판단 기능</strong></td><td>사고형(T) / 감정형(F)</td><td>정보를 평가하는 방식</td></tr>
  <tr><td><strong>생활 양식</strong></td><td>판단형(J) / 인식형(P)</td><td>정보박탈(외부 세계에 대한 태도)</td></tr>
</table>`}]},{title:`직업상담 과정`,topics:[{title:`상담 과정의 단계`,content:`<h4>직업상담의 5단계</h4>
<ol>
  <li><strong>관계형성 단계</strong>
    <ul>
      <li>라포(rapport) 형성</li>
      <li>상담 구조화 (상담의 목적, 과정, 비밀보장 등 안내)</li>
      <li>내담자의 기대 파악</li>
    </ul>
  </li>
  <li><strong>진단 단계</strong>
    <ul>
      <li>내담자의 문제 파악</li>
      <li>심리검사 실시 (적성, 흥미, 가치관 검사)</li>
      <li>직업경력 및 교육배경 분석</li>
    </ul>
  </li>
  <li><strong>목표설정 단계</strong>
    <ul>
      <li>상담 목표의 구체적 설정</li>
      <li>내담자와 상담자 간 합의</li>
      <li>달성 가능하고 측정 가능한 목표</li>
    </ul>
  </li>
  <li><strong>개입(실행) 단계</strong>
    <ul>
      <li>직업정보 탐색 및 제공</li>
      <li>의사결정 지원</li>
      <li>구직기술 훈련 (이력서, 면접)</li>
    </ul>
  </li>
  <li><strong>평가 및 종결 단계</strong>
    <ul>
      <li>목표 달성 여부 평가</li>
      <li>상담 성과 정리</li>
      <li>추수상담(follow-up) 계획</li>
    </ul>
  </li>
</ol>`},{title:`집단 직업상담`,content:`<h4>집단상담의 특징</h4>
<ul>
  <li>여러 내담자를 동시에 상담하여 효율적</li>
  <li>구성원 간 상호작용을 통한 학습 효과</li>
  <li>사회적 지지와 보편성 경험</li>
</ul>
<h4>집단상담의 유형</h4>
<ul>
  <li><strong>구직기술 훈련 집단:</strong> 이력서 작성, 면접 기술 등</li>
  <li><strong>진로탐색 집단:</strong> 자기이해, 직업세계 탐색</li>
  <li><strong>직업적응 집단:</strong> 직장생활 적응 지원</li>
  <li><strong>실직자 지원 집단:</strong> 실직 스트레스 관리, 재취업 지원</li>
</ul>
<h4>집단상담의 발달 단계</h4>
<ol>
  <li>초기 단계: 탐색과 오리엔테이션</li>
  <li>과도기 단계: 갈등과 저항</li>
  <li>작업 단계: 응집력과 생산성</li>
  <li>종결 단계: 통합과 마무리</li>
</ol>`}]},{title:`직업상담의 윤리 및 보호`,topics:[{title:`전문적 태도`,content:`<h4 class="exam-important">전문적 태도의 핵심</h4>
<ul>
  <li>이론적·경험적 훈련을 통한 전문성 확보</li>
  <li>내담자에게 <strong>최선</strong>의 서비스 제공</li>
  <li><strong>능력의 한계</strong>를 인식할 때는 반드시 <strong>다른 전문가에게 의뢰</strong></li>
  <li>지속적인 전문성 개발과 수련</li>
</ul>`},{title:`개인정보 보호`,content:`<h4 class="exam-important">개인정보 보호 원칙</h4>
<ul>
  <li>내담자의 <strong>안전이 위험할 때</strong>에만 정보 공개 가능</li>
  <li><strong>전문적 목적</strong>으로만 정보 사용</li>
  <li><strong>연구 목적</strong> 사용 시 반드시 내담자와의 합의 필요</li>
  <li>상담 기록의 안전한 보관과 관리</li>
</ul>`},{title:`비밀보장의 한계`,content:`<h4 class="exam-important">비밀보장 예외 사항</h4>
<table>
  <tr><th>상황</th><th>설명</th></tr>
  <tr><td><strong>안전 위협</strong></td><td>자신이나 타인의 생명·안전을 위협하는 경우</td></tr>
  <tr><td><strong>치명적 질병</strong></td><td>전염성 치명적 질병 보유 시 관련자 보호</td></tr>
  <tr><td><strong>학대</strong></td><td>아동·노인·장애인 학대가 의심되는 경우</td></tr>
  <tr><td><strong>법적 요구</strong></td><td>법원의 명령 또는 법적 보고 의무가 있는 경우</td></tr>
</table>`},{title:`사회관계`,content:`<h4 class="exam-important">사회관계에서의 윤리</h4>
<ul>
  <li>모순 없는 활동 수행 (일관성 유지)</li>
  <li><strong>공익</strong>에 기여하는 활동</li>
  <li>자격을 <strong>타인에게 양도 금지</strong></li>
  <li>전문적 활동에서의 정직성과 성실성</li>
</ul>`},{title:`내담자 복지`,content:`<h4 class="exam-important">내담자 복지 우선 원칙</h4>
<ul>
  <li><strong>내담자의 복지를 최우선</strong>으로 고려</li>
  <li>도움을 줄 수 없을 때는 상담을 <strong>종결</strong>하고 적절한 전문가에게 의뢰</li>
  <li>상담 <strong>목적에 위배</strong>되는 검사는 실시 금지</li>
  <li>내담자의 자율성과 자기결정권 존중</li>
</ul>`},{title:`반윤리적 행동`,content:`<h4 class="exam-important">반윤리적 행동 유형</h4>
<table>
  <tr><th>유형</th><th>설명</th></tr>
  <tr><td><strong>비밀 누설</strong></td><td>내담자의 비밀을 부적절하게 공개</td></tr>
  <tr><td><strong>능력 초월</strong></td><td>자신의 전문 능력을 넘어서는 상담 수행</td></tr>
  <tr><td><strong>거짓 전문성</strong></td><td>자격이나 경력을 거짓으로 제시</td></tr>
  <tr><td><strong>가치 속이기</strong></td><td>내담자의 가치관을 조작하거나 속이는 행위</td></tr>
  <tr><td><strong>의존성 조장</strong></td><td>내담자가 상담자에게 의존하도록 유도</td></tr>
  <tr><td><strong>성적 행위</strong></td><td>내담자와의 성적 관계 및 행위</td></tr>
</table>`},{title:`윤리강령의 기능`,content:`<h4 class="exam-important">윤리강령의 5가지 기능</h4>
<table>
  <tr><th>기능</th><th>설명</th></tr>
  <tr><td><strong>갈등해결 지침</strong></td><td>윤리적 갈등 상황에서의 판단 기준 제공</td></tr>
  <tr><td><strong>복리 증진</strong></td><td>내담자와 상담자의 복리(복지) 증진</td></tr>
  <tr><td><strong>전문직 보장</strong></td><td>상담 전문직의 사회적 지위와 신뢰 보장</td></tr>
  <tr><td><strong>도덕적 기대 존중</strong></td><td>사회의 도덕적 기대에 부응</td></tr>
  <tr><td><strong>사생활 보호</strong></td><td>내담자의 프라이버시 보호</td></tr>
</table>`},{title:`다중관계 및 성적관계`,content:`<h4 class="exam-important">다중관계 및 성적관계 금지</h4>
<ul>
  <li><strong>객관성에 영향</strong>을 미치는 다중관계는 반드시 피해야 함</li>
  <li>내담자와의 <strong>사적 관계 금지</strong></li>
  <li>내담자와의 <strong>금전 거래 금지</strong></li>
  <li>내담자와의 <strong>성적 관계 절대 금지</strong></li>
  <li>상담 종결 후에도 일정 기간 관계 제한</li>
</ul>`},{title:`상담관계`,content:`<h4 class="exam-important">상담관계에서의 윤리</h4>
<ul>
  <li>상담 절차를 내담자에게 충분히 <strong>설명</strong></li>
  <li><strong>주관적 판단에 의존하지 않기</strong> - 객관적 근거 기반 상담</li>
  <li>내담자의 이해 범위 내에서 기법 활용</li>
  <li>내담자의 동의를 기반으로 한 상담 진행</li>
  <li>상담 과정과 결과에 대한 정확한 정보 제공</li>
</ul>`},{title:`타전문직 관계`,content:`<h4 class="exam-important">타전문직과의 윤리적 관계</h4>
<ul>
  <li><strong>합의 없이</strong> 다른 전문인의 내담자를 상담하지 않기</li>
  <li>타 전문가와의 협력 시 내담자 동의 필수</li>
  <li><strong>비전문인</strong>이 상담 관련 업무 수행 시 <strong>윤리 점검 책임</strong>을 져야 함</li>
  <li>전문가 간 상호 존중과 협력</li>
</ul>`}]}]},psychology:{name:`직업심리학`,code:`psychology`,color:`#8B5CF6`,icon:`fa-solid fa-brain`,description:`직업발달이론, 유형론, 심리검사 등을 학습합니다.`,chapters:[{title:`직업발달이론`,topics:[{title:`Super의 진로발달이론`,content:`<h4>Super의 생애진로발달이론</h4>
<p>Donald Super는 진로발달을 전 생애에 걸친 과정으로 보았으며, 자아개념이 핵심입니다.</p>
<h4>진로발달의 5단계</h4>
<ol>
  <li><strong>성장기 (0~14세):</strong> 자아개념 발달, 욕구와 환상이 지배적</li>
  <li><strong>탐색기 (15~24세):</strong> 학교, 여가활동, 아르바이트를 통한 자기 탐색
    <ul><li>잠정기(15~17) → 전환기(18~21) → 시행기(22~24)</li></ul>
  </li>
  <li><strong>확립기 (25~44세):</strong> 적절한 분야를 찾아 안정적 위치 확보</li>
  <li><strong>유지기 (45~64세):</strong> 획득한 지위를 유지하려는 노력</li>
  <li><strong>쇠퇴기 (65세~):</strong> 은퇴와 새로운 역할 조정</li>
</ol>
<h4>핵심 개념</h4>
<ul>
  <li><strong>진로성숙도:</strong> 개인의 진로발달 수준</li>
  <li><strong>생애역할:</strong> 자녀, 학생, 여가인, 시민, 근로자, 가정관리자</li>
  <li><strong>생애무지개(Life-Career Rainbow):</strong> 생애역할과 발달단계를 통합한 모델</li>
  <li><strong>아치 모형(Archway Model):</strong> 개인적 요인과 환경적 요인의 통합</li>
</ul>`},{title:`Ginzberg의 진로선택이론`,content:`<h4>Ginzberg의 진로발달이론</h4>
<p>Ginzberg는 직업선택을 발달적 과정으로 최초 제시했으며, 비가역적이고 타협의 과정이라고 보았습니다.</p>
<h4>진로발달의 3단계</h4>
<ol>
  <li><strong>환상기 (6~11세):</strong> 현실적 제약 없이 욕구에 따라 직업 선호</li>
  <li><strong>잠정기 (11~17세):</strong>
    <ul>
      <li>흥미 단계(11~12): 좋아하는 활동 중심 선택</li>
      <li>능력 단계(13~14): 자신의 능력 고려</li>
      <li>가치 단계(15~16): 직업적 가치관 형성</li>
      <li>전환 단계(17): 현실적 제약 인식</li>
    </ul>
  </li>
  <li><strong>현실기 (17세~성인초기):</strong>
    <ul>
      <li>탐색 단계: 다양한 경험 탐색</li>
      <li>구체화 단계: 직업 범위 좁히기</li>
      <li>특수화 단계: 특정 직업 선택</li>
    </ul>
  </li>
</ol>
<h4>수정된 이론 (1972)</h4>
<p>초기 이론을 수정하여 직업선택은 비가역적이 아니라 개방적이며, 전 생애에 걸친 과정으로 재정의했습니다.</p>`},{title:`Gottfredson의 제한-타협이론`,content:`<h4>Gottfredson의 직업포부 발달이론</h4>
<p>직업선택에서 성유형화, 사회적 지위, 자아개념의 역할을 강조합니다.</p>
<h4>직업포부 발달의 4단계</h4>
<ol>
  <li><strong>크기와 힘의 지향 (3~5세):</strong> 성인과 아동의 역할 구분</li>
  <li><strong>성역할 지향 (6~8세):</strong> 성별에 따른 직업 구분</li>
  <li><strong>사회적 가치 지향 (9~13세):</strong> 사회적 지위 인식, 직업의 서열화</li>
  <li><strong>내적 고유자아 지향 (14세~):</strong> 흥미, 능력 등 내적 특성에 기반한 직업 선택</li>
</ol>
<h4>타협(Compromise)의 원리</h4>
<p>직업선택 시 현실적 제약으로 인해 포기하는 순서:</p>
<ol>
  <li>흥미를 가장 먼저 포기</li>
  <li>사회적 지위를 그 다음으로 포기</li>
  <li>성유형을 가장 마지막에 포기 (가장 강하게 유지)</li>
</ol>`}]},{title:`직업발달이론 II - 추가 주요 이론`,topics:[{title:`Roe의 욕구이론`,content:`<h4>Roe의 욕구이론 (Need Theory)</h4>
<p>앤 로(Anne Roe)는 <strong>매슬로우의 욕구위계</strong>와 <strong>어린 시절 부모-자녀 관계</strong>를 직업선택에 연결한 이론입니다.</p>
<h4>부모의 양육태도 3유형</h4>
<table>
  <tr><th>양육태도</th><th>하위유형</th><th>자녀 영향</th><th>직업 선택 경향</th></tr>
  <tr><td><strong>정서적 집중</strong></td><td>과보호, 과잉요구</td><td>타인의 관심/인정 추구</td><td>대인 지향 직업 (서비스, 예술, 경영)</td></tr>
  <tr><td><strong>회피</strong></td><td>거부, 무시/방임</td><td>타인으로부터 회피 경향</td><td>비대인 지향 직업 (과학, 기술, 자연)</td></tr>
  <tr><td><strong>수용</strong></td><td>애정적 수용, 비의도적 수용</td><td>균형 잡힌 발달</td><td>다양한 직업 선택 가능</td></tr>
</table>
<h4>직업분류 체계 (8개 직업군)</h4>
<ol>
  <li>서비스 (Service)</li>
  <li>비즈니스 접촉 (Business Contact)</li>
  <li>조직/관리 (Organization)</li>
  <li>기술 (Technology)</li>
  <li>야외활동 (Outdoor)</li>
  <li>과학 (Science)</li>
  <li>일반문화 (General Culture)</li>
  <li>예술/오락 (Arts & Entertainment)</li>
</ol>
<p>★ 1~3: <strong>대인 지향</strong>(사람 중심) / 4~8: <strong>비대인 지향</strong>(사물/아이디어 중심)</p>`},{title:`Tiedeman과 O'Hara의 진로의사결정이론`,content:`<h4>Tiedeman-O'Hara의 진로의사결정 발달이론</h4>
<p>진로발달을 <strong>의사결정의 연속적 과정</strong>으로 보며, 에릭슨의 심리사회적 발달이론에 영향을 받았습니다.</p>
<h4>의사결정의 2단계</h4>
<h4>1단계: 예상기(Anticipation Period)</h4>
<ol>
  <li><strong>탐색(Exploration):</strong> 가능한 대안들을 폭넓게 탐색</li>
  <li><strong>구체화(Crystallization):</strong> 대안들을 평가하여 범위를 좁힘</li>
  <li><strong>선택(Choice):</strong> 특정 대안을 선택</li>
  <li><strong>명료화(Clarification):</strong> 선택에 대한 확신과 세부 계획 수립</li>
</ol>
<h4>2단계: 실행기(Implementation Period)</h4>
<ol>
  <li><strong>순응(Induction):</strong> 새로운 환경에 적응, 집단 규범 수용</li>
  <li><strong>변혁/쇄신(Reformation):</strong> 자신의 주장을 집단에 반영하려는 시도</li>
  <li><strong>통합(Integration):</strong> 개인과 집단의 목표가 조화, 균형 달성</li>
</ol>
<p>★ 핵심: 자아정체감의 분화(차별화)와 통합을 반복하면서 진로가 발달합니다.</p>`},{title:`사회인지진로이론 (SCCT)`,content:`<h4>사회인지진로이론 (Social Cognitive Career Theory)</h4>
<p>렌트(Lent), 브라운(Brown), 해킷(Hackett)이 <strong>반두라의 사회학습이론</strong>을 진로 영역에 적용한 이론입니다.</p>
<h4>3가지 핵심 변인</h4>
<ul>
  <li><strong>자기효능감(Self-efficacy):</strong> 특정 과제를 성공적으로 수행할 수 있다는 자신감
    <ul>
      <li>수행성취 경험 (가장 강력한 영향)</li>
      <li>대리경험 (모델 관찰)</li>
      <li>언어적 설득 (격려)</li>
      <li>정서적/생리적 상태</li>
    </ul>
  </li>
  <li><strong>결과기대(Outcome Expectations):</strong> 특정 행동을 수행하면 어떤 결과가 나타날 것이라는 기대</li>
  <li><strong>개인적 목표(Personal Goals):</strong> 특정 활동에 참여하거나 미래 결과를 달성하겠다는 결심</li>
</ul>
<h4>SCCT의 3가지 모델</h4>
<ol>
  <li><strong>흥미발달 모델:</strong> 자기효능감 + 결과기대 → 흥미 형성 → 활동선택 → 수행경험 (순환)</li>
  <li><strong>진로선택 모델:</strong> 흥미 + 자기효능감 + 결과기대 → 선택목표 → 선택행동</li>
  <li><strong>수행 모델:</strong> 능력 + 자기효능감 + 결과기대 + 목표 → 수행수준 → 성취</li>
</ol>
<p>★ 개인 요인(성별, 인종, 건강)과 환경 요인(지지, 장벽)이 자기효능감과 결과기대에 영향을 미칩니다.</p>`},{title:`Savickas의 진로구성이론`,content:`<h4>Savickas의 진로구성이론 (Career Construction Theory)</h4>
<p>마크 사비카스(Mark Savickas)가 Super의 이론을 <strong>사회구성주의</strong> 관점에서 재구성한 이론입니다.</p>
<h4>핵심 개념: 진로적응성 (Career Adaptability)</h4>
<p>변화하는 직업세계에 대처하는 심리사회적 자원으로, <strong>4C</strong>로 구성됩니다:</p>
<table>
  <tr><th>차원</th><th>질문</th><th>태도/역량</th></tr>
  <tr><td><strong>관심(Concern)</strong></td><td>"나의 미래가 있는가?"</td><td>미래지향적 태도, 계획성</td></tr>
  <tr><td><strong>통제(Control)</strong></td><td>"누가 나의 미래를 만드는가?"</td><td>자기주도성, 책임감, 결단력</td></tr>
  <tr><td><strong>호기심(Curiosity)</strong></td><td>"미래에 무엇을 하고 싶은가?"</td><td>직업세계 탐색, 개방성</td></tr>
  <tr><td><strong>자신감(Confidence)</strong></td><td>"할 수 있는가?"</td><td>자기효능감, 문제해결력</td></tr>
</table>
<h4>생애주제(Life Theme)</h4>
<p>개인이 일에 부여하는 <strong>주관적 의미</strong>로, 생애 이야기(career story)를 통해 발견됩니다.</p>
<h4>진로상담의 3단계</h4>
<ol>
  <li><strong>구성(Construction):</strong> 내담자의 진로 이야기를 듣고 생애주제 파악</li>
  <li><strong>해체(Deconstruction):</strong> 제한적 가정과 편견을 인식하고 해체</li>
  <li><strong>재구성(Reconstruction):</strong> 새로운 관점으로 진로 이야기를 재구성</li>
</ol>
<p>★ 진로상담 = 내담자가 자신의 <strong>진로 내러티브</strong>(이야기)를 구성하도록 돕는 과정</p>`}]},{title:`Holland 유형론`,topics:[{title:`RIASEC 6유형`,content:`<h4>Holland의 직업적 성격유형론</h4>
<p>John Holland은 직업적 흥미를 6가지 유형(RIASEC)으로 분류했습니다.</p>
<h4>6가지 유형</h4>
<table>
  <tr><th>유형</th><th>특성</th><th>대표 직업</th></tr>
  <tr><td><strong>R (현실형)</strong></td><td>기계, 도구, 동물, 야외활동 선호</td><td>기술자, 농부, 정비사</td></tr>
  <tr><td><strong>I (탐구형)</strong></td><td>관찰, 학습, 분석, 과학적 탐구</td><td>과학자, 연구원, 의사</td></tr>
  <tr><td><strong>A (예술형)</strong></td><td>창의적 표현, 자유로운 활동</td><td>예술가, 작가, 음악가</td></tr>
  <tr><td><strong>S (사회형)</strong></td><td>타인 돕기, 교육, 봉사</td><td>교사, 상담사, 사회복지사</td></tr>
  <tr><td><strong>E (진취형)</strong></td><td>설득, 리더십, 목표 달성</td><td>경영자, 영업사원, 정치인</td></tr>
  <tr><td><strong>C (관습형)</strong></td><td>자료 정리, 규칙 준수, 체계적 작업</td><td>회계사, 사무원, 은행원</td></tr>
</table>
<h4>육각형 모형</h4>
<p>RIASEC 유형은 정육각형 꼭짓점에 배치되며, 인접한 유형은 유사하고 대각선 유형은 상반됩니다.</p>`},{title:`일관성, 분화, 정체성`,content:`<h4>Holland 이론의 핵심 개념</h4>
<h4>일관성 (Consistency)</h4>
<ul>
  <li>개인의 유형 코드 간 유사성 정도</li>
  <li>인접 유형 조합(예: RI, AS) → 높은 일관성</li>
  <li>대각 유형 조합(예: RA, SI) → 낮은 일관성</li>
  <li>일관성이 높을수록 직업선택이 예측 가능</li>
</ul>
<h4>분화 (Differentiation)</h4>
<ul>
  <li>6유형 중 특정 유형이 얼마나 두드러지는지</li>
  <li>최고 점수와 최저 점수의 차이로 측정</li>
  <li>분화가 높을수록 명확한 직업적 정체성</li>
</ul>
<h4>정체성 (Identity)</h4>
<ul>
  <li>자신의 목표, 흥미, 능력에 대한 명확한 상(picture)</li>
  <li>직업적 정체성이 높을수록 안정적 직업선택</li>
</ul>
<h4>일치성 (Congruence)</h4>
<ul>
  <li>개인의 성격유형과 직업환경의 일치 정도</li>
  <li>일치성이 높을수록 직업만족, 안정성, 성취도 높음</li>
</ul>`}]},{title:`직업심리검사`,topics:[{title:`심리검사의 유형`,content:`<h4>직업심리검사의 분류</h4>
<h4>표준화 검사</h4>
<ul>
  <li><strong>직업적성검사:</strong> 일반학습능력, 언어능력, 수리능력, 공간판단력 등 측정</li>
  <li><strong>직업흥미검사:</strong> Holland 유형에 기반한 직업흥미 측정 (스트롱 직업흥미검사 등)</li>
  <li><strong>직업가치관검사:</strong> 능력발휘, 보수, 안정성, 사회봉사 등 가치관 측정</li>
  <li><strong>성격검사:</strong> MBTI, MMPI, 16PF, Big Five 등</li>
  <li><strong>지능검사:</strong> 웩슬러(WAIS), 스탠포드-비네</li>
</ul>
<h4>비표준화 검사</h4>
<ul>
  <li>면접, 관찰, 자서전, 일화기록, 사회성측정</li>
</ul>
<h4>검사의 질적 기준</h4>
<ul>
  <li><strong>타당도:</strong> 검사가 측정하려는 것을 정확히 측정하는 정도
    <ul><li>내용타당도, 준거타당도(예언/공인), 구인타당도</li></ul>
  </li>
  <li><strong>신뢰도:</strong> 검사 결과의 일관성
    <ul><li>검사-재검사, 동형검사, 반분, 내적일관성(Cronbach α)</li></ul>
  </li>
</ul>`},{title:`타당도와 신뢰도 상세`,content:`<h4>타당도 (Validity) - 검사의 정확성</h4>
<p>"이 검사가 측정하려는 것을 정확히 측정하고 있는가?"</p>
<table>
  <tr><th>타당도 유형</th><th>의미</th><th>확인 방법</th></tr>
  <tr><td><strong>내용타당도</strong></td><td>검사 내용이 측정 영역을 대표하는 정도</td><td>전문가 판단 (통계적 방법 아님)</td></tr>
  <tr><td><strong>준거타당도</strong></td><td>외부 준거와의 관련성</td><td>상관계수 산출</td></tr>
  <tr><td> - 예언(예측)타당도</td><td>미래 행동/성과 예측</td><td>검사→시간경과→준거 측정</td></tr>
  <tr><td> - 공인(동시)타당도</td><td>현재 상태의 정확한 반영</td><td>검사와 준거를 동시에 측정</td></tr>
  <tr><td><strong>구인(구성)타당도</strong></td><td>이론적 구인을 측정하는 정도</td><td>요인분석, 수렴/변별타당도</td></tr>
  <tr><td> - 수렴타당도</td><td>유사 구인 측정 검사와 높은 상관</td><td>다특성다방법(MTMM)</td></tr>
  <tr><td> - 변별(판별)타당도</td><td>다른 구인 측정 검사와 낮은 상관</td><td>다특성다방법(MTMM)</td></tr>
</table>
<h4>신뢰도 (Reliability) - 검사의 일관성</h4>
<p>"이 검사를 반복 실시하면 같은 결과가 나오는가?"</p>
<table>
  <tr><th>신뢰도 유형</th><th>방법</th><th>특징</th></tr>
  <tr><td><strong>검사-재검사 신뢰도</strong></td><td>같은 검사를 시간 간격을 두고 2회 실시</td><td>안정성 계수, 기억효과/성숙효과 주의</td></tr>
  <tr><td><strong>동형검사 신뢰도</strong></td><td>동등한 2개 검사를 같은 집단에 실시</td><td>동등성 계수, 동형 검사 제작 어려움</td></tr>
  <tr><td><strong>반분 신뢰도</strong></td><td>하나의 검사를 반으로 나누어 비교</td><td>내적일관성, 스피어만-브라운 공식으로 교정</td></tr>
  <tr><td><strong>내적일관성 (Cronbach α)</strong></td><td>문항 간 상관의 평균에 기반</td><td>가장 널리 사용, 0.7 이상이면 양호</td></tr>
  <tr><td><strong>채점자간 신뢰도</strong></td><td>다른 채점자의 평가 일치도</td><td>주관식 평가에서 중요</td></tr>
</table>
<h4>타당도와 신뢰도의 관계</h4>
<ul>
  <li>신뢰도가 높다고 타당도가 높은 것은 아님</li>
  <li>타당도가 높으면 신뢰도도 높음</li>
  <li>신뢰도는 타당도의 <strong>필요조건</strong>이지만 충분조건은 아님</li>
  <li>★ 타당도의 상한 = √신뢰도</li>
</ul>`},{title:`규준과 검사 해석`,content:`<h4>규준 (Norm)</h4>
<p>개인의 검사 점수를 해석하기 위한 비교 기준으로, <strong>규준집단(표준화 집단)</strong>의 점수 분포를 기반으로 합니다.</p>
<h4>점수 유형</h4>
<table>
  <tr><th>점수 유형</th><th>설명</th><th>특징</th></tr>
  <tr><td><strong>원점수</strong></td><td>검사에서 직접 얻은 점수</td><td>그 자체로는 의미 해석 불가</td></tr>
  <tr><td><strong>백분위 점수</strong></td><td>규준집단에서 그 점수 이하인 비율 (%)</td><td>해석 용이, 등간격 아님</td></tr>
  <tr><td><strong>표준점수 (Z점수)</strong></td><td>Z = (원점수 - 평균) / 표준편차</td><td>평균=0, 표준편차=1</td></tr>
  <tr><td><strong>T점수</strong></td><td>T = 10Z + 50</td><td>평균=50, 표준편차=10</td></tr>
  <tr><td><strong>스테나인(Stanine)</strong></td><td>1~9점 척도</td><td>평균=5, 표준편차≈2</td></tr>
  <tr><td><strong>IQ점수(편차IQ)</strong></td><td>IQ = 15Z + 100</td><td>평균=100, 표준편차=15</td></tr>
</table>
<h4>측정의 표준오차 (SEM)</h4>
<div class="formula-box">
  <p><strong>SEM = SD × √(1 - r)</strong></p>
  <p>SD = 표준편차, r = 신뢰도 계수</p>
  <p>★ 신뢰도가 높을수록 SEM이 작아짐 → 점수 해석의 정확성 증가</p>
</div>
<h4>검사 해석 시 유의사항</h4>
<ul>
  <li>하나의 검사 점수만으로 판단하지 말고 <strong>종합적</strong>으로 해석</li>
  <li>점수를 범위(신뢰구간)로 해석하기: 진점수 ± 1.96×SEM (95% 신뢰구간)</li>
  <li>규준집단의 적절성 확인 (연령, 성별, 학력 등)</li>
  <li>검사 실시 조건과 내담자 상태 고려</li>
  <li>내담자에게 결과를 <strong>이해하기 쉽게</strong> 설명하고 상담에 활용</li>
</ul>`},{title:`MBTI와 주요 검사`,content:`<h4>MBTI (Myers-Briggs Type Indicator)</h4>
<p>Jung의 심리유형론에 기반한 성격유형 검사로, 4가지 선호 지표의 조합으로 16유형을 분류합니다.</p>
<h4>4가지 선호 지표</h4>
<table>
  <tr><th>지표</th><th>유형 A</th><th>유형 B</th></tr>
  <tr><td>에너지 방향</td><td>외향(E)</td><td>내향(I)</td></tr>
  <tr><td>인식 기능</td><td>감각(S)</td><td>직관(N)</td></tr>
  <tr><td>판단 기능</td><td>사고(T)</td><td>감정(F)</td></tr>
  <tr><td>생활 양식</td><td>판단(J)</td><td>인식(P)</td></tr>
</table>
<h4>기타 주요 심리검사</h4>
<ul>
  <li><strong>스트롱 직업흥미검사(SII):</strong> 일반직업주제(GOT) + 기본흥미척도(BIS) + 개인특성척도(PSS)</li>
  <li><strong>직업선호도검사:</strong> Holland의 RIASEC 모형 기반</li>
  <li><strong>커리어넷 심리검사:</strong> 한국고용정보원 제공, 워크넷 활용</li>
  <li><strong>성인용 직업적성검사:</strong> 11개 적성요인 측정</li>
</ul>`}]},{title:`직업적응이론`,topics:[{title:`직업적응이론과 직무만족`,content:`<h4>Dawis & Lofquist의 직업적응이론 (TWA)</h4>
<p>개인과 환경의 상호작용에서 '조응(correspondence)'을 강조하는 이론입니다.</p>
<h4>핵심 개념</h4>
<ul>
  <li><strong>만족(Satisfaction):</strong> 직업환경이 개인의 욕구/가치를 충족시키는 정도</li>
  <li><strong>충족(Satisfactoriness):</strong> 개인이 직업환경의 요구를 충족시키는 정도</li>
  <li><strong>조응(Correspondence):</strong> 만족과 충족이 모두 높은 상태 → 직업적응</li>
</ul>
<h4>직무만족 이론</h4>
<ul>
  <li><strong>허즈버그(Herzberg)의 2요인 이론:</strong>
    <ul>
      <li>위생요인(불만족 요인): 급여, 작업조건, 회사정책 → 불만족 감소</li>
      <li>동기요인(만족 요인): 성취감, 인정, 책임감 → 만족 증가</li>
    </ul>
  </li>
  <li><strong>매슬로우(Maslow)의 욕구위계:</strong> 생리 → 안전 → 소속 → 존경 → 자아실현</li>
  <li><strong>브룸(Vroom)의 기대이론:</strong> 동기 = 기대 × 수단성 × 유인가</li>
</ul>`},{title:`직무동기이론 상세`,content:`<h4>내용이론 (Content Theories) - 무엇이 동기를 유발하는가?</h4>
<h4>매슬로우(Maslow)의 욕구위계이론</h4>
<ol>
  <li><strong>생리적 욕구:</strong> 음식, 물, 수면 등 기본 생존 욕구</li>
  <li><strong>안전 욕구:</strong> 신체적·경제적 안전, 직업 안정</li>
  <li><strong>소속·애정 욕구:</strong> 사랑, 우정, 소속감, 대인관계</li>
  <li><strong>존경 욕구:</strong> 자존감, 타인으로부터의 인정과 존경</li>
  <li><strong>자아실현 욕구:</strong> 잠재력 실현, 성장 (결핍욕구가 아닌 성장욕구)</li>
</ol>
<p>★ 하위 욕구가 충족되어야 상위 욕구가 동기로 작용 (위계적 순서)</p>
<h4>앨더퍼(Alderfer)의 ERG 이론</h4>
<ul>
  <li><strong>E (Existence/존재):</strong> 생리적·물질적 욕구 (생리+안전)</li>
  <li><strong>R (Relatedness/관계):</strong> 대인관계 욕구 (소속+존경 일부)</li>
  <li><strong>G (Growth/성장):</strong> 개인적 성장과 발전 욕구 (존경 일부+자아실현)</li>
</ul>
<p>★ 매슬로우와 차이점: <strong>좌절-퇴행 가설</strong> (상위 욕구 좌절 시 하위 욕구가 강화), 여러 욕구 동시 작동 가능</p>
<h4>맥클렐란드(McClelland)의 성취동기이론</h4>
<ul>
  <li><strong>성취 욕구(nAch):</strong> 우수한 결과를 달성하려는 욕구, 중간 수준의 위험 선호</li>
  <li><strong>권력 욕구(nPow):</strong> 타인에게 영향력을 행사하려는 욕구</li>
  <li><strong>친화 욕구(nAff):</strong> 타인과 친밀한 관계를 맺으려는 욕구</li>
</ul>
<h4>과정이론 (Process Theories) - 어떻게 동기가 유발되는가?</h4>
<h4>애덤스(Adams)의 공정성이론</h4>
<div class="formula-box">
  <p><strong>자기의 투입 대비 산출 비율</strong>과 <strong>타인의 투입 대비 산출 비율</strong>을 비교</p>
  <p>불공정 인식 시 → 투입 변경, 산출 변경, 인지적 왜곡, 비교대상 변경, 이직 등으로 해소</p>
</div>
<h4>로크(Locke)의 목표설정이론</h4>
<ul>
  <li>구체적이고 도전적인 목표가 높은 성과를 이끔</li>
  <li>피드백이 주어질 때 목표 효과 증대</li>
  <li>목표에 대한 수용과 몰입이 중요</li>
</ul>
<h4>맥그리거(McGregor)의 XY 이론</h4>
<table>
  <tr><th>X 이론</th><th>Y 이론</th></tr>
  <tr><td>인간은 본래 게으름</td><td>인간은 본래 일을 좋아함</td></tr>
  <tr><td>통제와 감독 필요</td><td>자율성과 책임감 부여</td></tr>
  <tr><td>외적 동기 (급여, 처벌)</td><td>내적 동기 (성취, 자아실현)</td></tr>
  <tr><td>권위적 관리 스타일</td><td>참여적 관리 스타일</td></tr>
</table>`}]},{title:`조직에서의 경력개발`,topics:[{title:`다운사이징 시대의 경력개발`,content:`<h4 class="exam-important">다운사이징(Downsizing)</h4>
<p>조직의 <strong>소형화·축소화</strong>를 의미하며, <strong>수평이동</strong>에 중점을 두는 경력개발 방향</p>
<h4 class="exam-important">다운사이징 시대의 경력개발 방향</h4>
<ol>
  <li>장기고용이 어려워지며, 고용 기간이 점차 짧아진다</li>
  <li><strong>수평이동</strong>에 중점을 둔다</li>
  <li>개인의 <strong>자율권 신장과 능력개발</strong>에 초점을 둔다</li>
  <li>경력개발은 <strong>단기·연속 학습단계</strong>로 이어진다</li>
  <li>다양한 프로젝트 참여가 요구된다</li>
  <li><strong>평생학습</strong>으로의 경력개발이 요구된다</li>
  <li>능력 및 지식에 관련된 <strong>재교육</strong>이 요구된다</li>
  <li>퇴직자 관리 프로그램의 운영이 요구된다</li>
</ol>`},{title:`직업전환 상담`,content:`<h4 class="exam-important">직업전환 상담의 정의</h4>
<p>전직 의도가 있는 직업인을 대상으로 직업경로, 전문지식, 직업전환 정보를 수집·제공하는 상담</p>
<h4 class="exam-important">실업자의 직업전환과 직업상담</h4>
<ul>
  <li>생애훈련적 사고를 갖도록 조언·촉구하며 참여를 권고</li>
  <li>청년기·중년기·정년 전 등 <strong>전환기에 경력개발계획</strong>을 추진할 필요</li>
  <li>청년기 실업자는 <strong>일반적인 평가방법</strong>에 의존해도 무리 없음</li>
  <li>나이가 많을수록 취업 제의를 받는 비율이 <strong>감소</strong></li>
</ul>
<h4 class="exam-important">직업전환 상담 시 고려사항</h4>
<ol>
  <li>내담자의 <strong>변화에 대한 인지능력</strong>을 우선 탐색</li>
  <li>전환될 직업에 대한 기술·능력, 나이·건강, <strong>동기화 여부</strong> 등 일차적 고려</li>
  <li><strong>은퇴 후 진로경로 계획</strong>을 돕는 것이 병행</li>
</ol>`},{title:`요구분석(니즈평가)`,content:`<h4 class="exam-important">요구분석(Needs Assessment)</h4>
<p>경력개발 프로그램 개발을 위한 조사연구 방법</p>
<ul>
  <li><strong>현 시점</strong>에서 어떤 훈련이 필요한지에 대한 요구분석</li>
  <li><strong>누구를 대상으로 어떤 프로그램</strong>을 만들 것인지 우선적으로 파악</li>
</ul>
<h4 class="exam-important">파일럿(Pilot) 연구</h4>
<p>특정 경력개발 프로그램을 <strong>대규모로 적용하기 전</strong>에 소규모 집단에 <strong>시범적으로 실시</strong>하는 과정</p>`},{title:`종업원 개발 프로그램`,content:`<h4 class="exam-important">경력개발 프로그램: 종업원 평가 및 개발</h4>
<table>
  <tr><th>구분</th><th>프로그램</th></tr>
  <tr><td><strong>종업원 평가</strong></td><td>평가기관, 심리검사, 조기발탁제</td></tr>
  <tr><td><strong>종업원(능력) 개발</strong></td><td>훈련 프로그램, 후견인 프로그램, 직무순환 프로그램</td></tr>
</table>
<h4 class="exam-important">주요 경력개발 프로그램</h4>
<table>
  <tr><th>프로그램</th><th>설명</th></tr>
  <tr><td><strong>경력워크숍</strong></td><td>신입사원 대상, 부서 배치 후 <strong>6개월 이내</strong> 실시</td></tr>
  <tr><td><strong>사내공모제</strong></td><td>결원충원 등을 위해 사내에서 필요한 인재 모집</td></tr>
  <tr><td><strong>평가기관(평가센터)</strong></td><td>미국 <strong>AT&T사</strong>에서 최초 운영, 다양한 모의과제로 구성</td></tr>
  <tr><td><strong>조기발탁제</strong></td><td>잠재력 높은 종업원을 조기 발견, <strong>능력주의 승진제도</strong>의 한 유형</td></tr>
  <tr><td><strong>훈련 프로그램</strong></td><td><strong>요구분석</strong>이 우선적으로 고려</td></tr>
  <tr><td><strong>후견인(멘토십)</strong></td><td>후견인이 도와주는 프로그램 (천주교에서 유래)</td></tr>
  <tr><td><strong>직무순환</strong></td><td>다양한 경험을 통해 여러 분야의 능력 개발</td></tr>
</table>`},{title:`작업지도 프로그램`,content:`<h4 class="exam-important">작업지도 프로그램의 주요 종류</h4>
<table>
  <tr><th>프로그램</th><th>설명</th><th>특징</th></tr>
  <tr><td><strong>자신에 대한 탐구</strong></td><td>작업지도·직업상담에서 가장 중요하고 기본적</td><td>진로 미결정자·우유부단한 내담자에게 <strong>가장 우선</strong></td></tr>
  <tr><td><strong>직업세계 이해</strong></td><td>일경험, 직업탐색, 자격·면허 조건 정보 제공</td><td>다양한 정보 제공</td></tr>
  <tr><td><strong>직장 스트레스 대처</strong></td><td>직업적응 프로그램</td><td><strong>퇴직 보유자</strong>에게 가장 적합, 전직 예방 목적</td></tr>
  <tr><td><strong>실업충격 완화</strong></td><td>실업의 정신적 충격 확인·완화</td><td>완화 기술 제공</td></tr>
</table>
<h4 class="exam-important">그 외 프로그램</h4>
<p>직업전환 훈련, 직업복귀 훈련, 직업적응, 조기퇴직 계획, 은퇴 후 경력계획, 생애계획, 취업알선 프로그램 등</p>`},{title:`실업 관련 프로그램`,content:`<h4 class="exam-important">실업 관련 프로그램 6가지</h4>
<ol>
  <li><strong>실업충격 완화</strong> 프로그램</li>
  <li><strong>실업스트레스 대처</strong> 프로그램</li>
  <li><strong>직업전환(훈련)</strong> 프로그램</li>
  <li><strong>작업복귀(훈련)</strong> 프로그램</li>
  <li><strong>취업동기 증진</strong> 프로그램</li>
  <li><strong>구직활동 증진</strong> 프로그램</li>
</ol>`},{title:`작업전환 상담 시 고려사항`,content:`<h4 class="exam-important">작업전환 상담 시 고려사항 3가지</h4>
<ol>
  <li>내담자의 <strong>변화에 대한 인지능력</strong>을 탐색</li>
  <li>전환될 직업에 대한 기술·능력, 나이·건강, <strong>동기화 여부</strong> 등을 일차적으로 고려</li>
  <li>충격완화, 직업선택·문제에 대한 정보제공, <strong>은퇴 후 진로경로 계획</strong>을 돕는 것이 병행</li>
</ol>
<h4 class="exam-important">작업전환의 촉진요인 4가지</h4>
<ol>
  <li>전체 노동인구 중 <strong>젊은 층의 비율이 높을</strong> 경우</li>
  <li>경제구조가 <strong>완전고용</strong>의 상태일 경우</li>
  <li><strong>단순직 근로자</strong>의 비율이 높을 경우</li>
  <li><strong>여성근로자</strong>의 비율이 높을 경우</li>
</ol>`},{title:`작업전환의 촉진요인`,content:`<h4 class="exam-important">작업전환의 촉진요인</h4>
<p>다음 조건이 충족될 때 작업전환이 촉진됩니다:</p>
<ol>
  <li>전체 노동인구 중 <strong>젊은 층의 비율</strong>이 높을 경우</li>
  <li>경제구조가 <strong>완전고용</strong>의 상태일 경우</li>
  <li><strong>단순직 근로자</strong>의 비율이 높을 경우</li>
  <li><strong>여성근로자</strong>의 비율이 높을 경우</li>
</ol>`},{title:`진로교육 모형`,content:`<h4 class="exam-important">진로교육 모형: 인식 → 탐색 → 준비 → 취업</h4>
<table>
  <tr><th>단계</th><th>연령·수준</th><th>내용</th></tr>
  <tr><td><strong>1단계: 진로인식</strong></td><td>6~12세 (초등학교)</td><td>직업세계에 대한 기초적 인식</td></tr>
  <tr><td><strong>2단계: 진로탐색</strong></td><td>12~15세 (중학교)</td><td>자신의 흥미·적성 탐색</td></tr>
  <tr><td><strong>3단계: 진로준비</strong></td><td>15~22세 (고등·대학)</td><td>구체적 직업 준비</td></tr>
  <tr><td><strong>4단계: 취업</strong></td><td>18세 또는 22세 이후</td><td>실제 취업 및 직업 활동</td></tr>
</table>`},{title:`경력개발 프로그램의 유형`,content:`<h4 class="exam-important">경력개발 프로그램의 5가지 유형</h4>
<table>
  <tr><th>유형</th><th>내용</th><th>예시</th></tr>
  <tr><td><strong>자기평가도구</strong></td><td>질문지를 활용한 자기평가</td><td>경력워크숍, 경력연습책자</td></tr>
  <tr><td><strong>개인상담</strong></td><td>종업원의 흥미·목표·현 직무활동·수행·경력목표에 초점</td><td>1:1 상담</td></tr>
  <tr><td><strong>정보제공</strong></td><td>조직 내 기회에 대한 정보</td><td>사내공모제, 기술목록, 경력자원기관</td></tr>
  <tr><td><strong>종업원 평가</strong></td><td>체계적 평가</td><td>평가기관, 심리검사, 조기발탁제</td></tr>
  <tr><td><strong>종업원(능력) 개발</strong></td><td>능력 향상 지원</td><td>훈련 프로그램, 후견인 프로그램, 직무순환</td></tr>
</table>`}]},{title:`직업과 스트레스`,topics:[{title:`역할갈등`,content:`<h4 class="exam-important">직무·조직관련 스트레스원의 종류</h4>
<p>과제특성 → 역할갈등 → 역할모호성 → 역할과다/과소 → 조직문화와 풍토</p>
<h4 class="exam-important">역할갈등의 정의</h4>
<ul>
  <li>역할담당자가 자신의 지위(역할)와 역할전달자의 기대가 <strong>상충</strong>되는 심리적 상태</li>
  <li>공식적·구조적 조직: <strong>구조적 변수</strong>(의사결정 참여, 부하의 폭)로 발생</li>
  <li>비공식적·비구조적 조직: <strong>인간관계 변수</strong>(동료와의 관계)로 발생</li>
</ul>
<h4 class="exam-important">역할갈등의 4가지 유형</h4>
<table>
  <tr><th>유형</th><th>설명</th><th>예시</th></tr>
  <tr><td><strong>개인 간 역할갈등</strong></td><td>직업 내와 직업 이외 요구 간 갈등</td><td>야근 시 가정과의 갈등</td></tr>
  <tr><td><strong>개인 내 역할갈등</strong></td><td>직무와 개인 가치관의 불일치</td><td>이중장부 작성 요구 시</td></tr>
  <tr><td><strong>송신자 간 갈등</strong></td><td>두 명 이상의 요구가 상충</td><td>사장의 감독 vs 부하의 자유 요구</td></tr>
  <tr><td><strong>송신자 내 갈등</strong></td><td>배타적이고 양립 불가한 요구</td><td>안전수칙 준수 + 빠른 완성 요구</td></tr>
</table>`},{title:`셀리에(Selye)의 일반적응증후군(GAS)`,content:`<h4 class="exam-important">셀리에(Selye)의 스트레스 연구</h4>
<p>반응방식 스트레스 연구의 대표자, 주로 <strong>동물실험</strong>으로 연구</p>
<p>어떤 종류의 스트레스를 가해도 모두 <strong>동일한 반응</strong>을 보인다 하여 <strong>일반적응증후군(GAS)</strong>이라 명명</p>
<h4 class="exam-important">일반적응증후군 3단계</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 500 200" style="max-width:480px;width:100%">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6366f1"/></marker>
  </defs>
  <rect x="10" y="60" width="140" height="70" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="80" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">1단계</text>
  <text x="80" y="108" text-anchor="middle" font-size="12" fill="#92400e">경고반응단계</text>
  <line x1="155" y1="95" x2="180" y2="95" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="185" y="60" width="140" height="70" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="255" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">2단계</text>
  <text x="255" y="108" text-anchor="middle" font-size="12" fill="#1e40af">저항반응단계</text>
  <line x1="330" y1="95" x2="355" y2="95" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="360" y="60" width="130" height="70" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="425" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">3단계</text>
  <text x="425" y="108" text-anchor="middle" font-size="12" fill="#991b1b">소진(탈진)단계</text>
  <text x="80" y="155" text-anchor="middle" font-size="10" fill="#666">쇼크 → 역쇼크</text>
  <text x="255" y="155" text-anchor="middle" font-size="10" fill="#666">저항력·면역력 일시 증가</text>
  <text x="425" y="155" text-anchor="middle" font-size="10" fill="#666">저항력 붕괴, 질병 유발</text>
</svg>
</div>
<table>
  <tr><th>단계</th><th>특징</th></tr>
  <tr><td><strong>1단계: 경고반응</strong></td><td>신체 최초의 즉각적 반응, <strong>쇼크단계</strong>와 <strong>역쇼크단계</strong></td></tr>
  <tr><td><strong>2단계: 저항반응</strong></td><td>저항력·면역력 <strong>일시적 증가</strong>, 전반적 기능은 저하</td></tr>
  <tr><td><strong>3단계: 소진(탈진)</strong></td><td>저항력·면역력 <strong>붕괴</strong>, 심각한 질병·신체손상</td></tr>
</table>`},{title:`A/B 성격유형`,content:`<h4 class="exam-important">프리드만(Friedman) & 로젠만(Rosenman)의 A/B 성격유형</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 500 180" style="max-width:480px;width:100%">
  <rect x="20" y="20" width="210" height="140" rx="15" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="125" y="50" text-anchor="middle" font-size="16" font-weight="bold" fill="#dc2626">A형 성격</text>
  <text x="125" y="75" text-anchor="middle" font-size="11" fill="#991b1b">능동적·공격적</text>
  <text x="125" y="93" text-anchor="middle" font-size="11" fill="#991b1b">경쟁·성취 지향</text>
  <text x="125" y="111" text-anchor="middle" font-size="11" fill="#991b1b">신속함·완벽함 추구</text>
  <text x="125" y="135" text-anchor="middle" font-size="10" fill="#b91c1c">⚠ 관상동맥성 심장병(CHD) 위험</text>
  <rect x="270" y="20" width="210" height="140" rx="15" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="375" y="50" text-anchor="middle" font-size="16" font-weight="bold" fill="#2563eb">B형 성격</text>
  <text x="375" y="75" text-anchor="middle" font-size="11" fill="#1e40af">수동적·방어적</text>
  <text x="375" y="93" text-anchor="middle" font-size="11" fill="#1e40af">느긋함·차분함</text>
  <text x="375" y="111" text-anchor="middle" font-size="11" fill="#1e40af">여유로운 일처리</text>
  <text x="375" y="135" text-anchor="middle" font-size="10" fill="#1e3a8a">✓ 질병 걸릴 확률 적음</text>
</svg>
</div>
<h4 class="exam-important">핵심 포인트</h4>
<ul>
  <li>A형은 B형보다 <strong>성취욕구와 포부수준이 높음</strong> → 스트레스 가능성 높음</li>
  <li>스트레스 상황에서 A형은 B형보다 더 많은 <strong>부정과 투사 기제</strong>를 사용</li>
  <li>A형: <strong>관상동맥성 심장병(CHD)</strong> 걸리기 쉬움</li>
</ul>`},{title:`여크스-도슨(Yerkes-Dodson)의 역U자형 가설`,content:`<h4 class="exam-important">역U자형 가설</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 400 250" style="max-width:380px;width:100%">
  <line x1="50" y1="200" x2="370" y2="200" stroke="#333" stroke-width="2"/>
  <line x1="50" y1="200" x2="50" y2="30" stroke="#333" stroke-width="2"/>
  <text x="210" y="240" text-anchor="middle" font-size="12" fill="#333">스트레스 수준</text>
  <text x="25" y="120" text-anchor="middle" font-size="12" fill="#333" transform="rotate(-90, 25, 120)">직무수행능력</text>
  <path d="M 70 190 Q 130 180 170 100 Q 210 30 250 100 Q 290 180 350 190" fill="none" stroke="#6366f1" stroke-width="3"/>
  <circle cx="210" cy="42" r="5" fill="#6366f1"/>
  <text x="210" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#6366f1">최적 수준</text>
  <text x="100" y="195" text-anchor="middle" font-size="10" fill="#999">낮음</text>
  <text x="210" y="195" text-anchor="middle" font-size="10" fill="#999">적정</text>
  <text x="320" y="195" text-anchor="middle" font-size="10" fill="#999">높음</text>
</svg>
</div>
<ul>
  <li>스트레스가 너무 <strong>높거나 낮을 때</strong> 직무수행능력이 떨어짐</li>
  <li>흥분·욕구·긴장이 어느 수준까지는 수행실적을 <strong>높이다가</strong> 이후 <strong>감소</strong></li>
  <li>스트레스를 <strong>적정 수준으로 유지</strong>하는 것이 바람직</li>
</ul>`},{title:`구조조정 생존자의 반응`,content:`<h4 class="exam-important">구조조정·조직 감축에서 살아남은 구성원들의 반응</h4>
<ol>
  <li>조직 분위기 <strong>침체</strong> 및 급격한 사기 저하</li>
  <li>조직에 대한 <strong>신뢰감 상실</strong></li>
  <li>다른 직무나 <strong>낮은 수준의 직무</strong>로 이동 감수</li>
  <li>과로하며, 종종 <strong>불이익도 감수</strong></li>
  <li><strong>불안감</strong>으로 조직몰입에 어려움</li>
  <li>실패 우려있는 <strong>혁신적 업무·변화를 기피</strong></li>
  <li>불공정하게 느껴 <strong>분노·공격적 성향</strong>으로 인간관계 악화</li>
  <li>조직에서의 <strong>이탈</strong></li>
</ol>`},{title:`스트레스 예방 및 대처`,content:`<h4 class="exam-important">스트레스 예방 및 대처를 위한 포괄적 노력</h4>
<ol>
  <li><strong>가치관</strong> 전환</li>
  <li>목표중심적, <strong>과정중심적 사고방식</strong>으로 전환</li>
  <li>스트레스에 <strong>정면으로 도전</strong>하는 마음가짐</li>
  <li>가슴속의 <strong>한을 털어냄</strong></li>
  <li><strong>균형 있는 생활</strong></li>
  <li>취미·오락을 통해 생활장면 전환 활동을 <strong>규칙적</strong>으로 시행</li>
  <li><strong>운동</strong>을 통해 스트레스 적절히 해소</li>
</ol>`},{title:`17-OHCS와 코티졸(Cortisol)`,content:`<h4 class="exam-important">스트레스의 생리적 지표</h4>
<ul>
  <li><strong>17-OHCS</strong> (17-하이드록시코티코스테로이드): 호르몬 총칭, 스트레스의 <strong>생리적 지표</strong></li>
  <li>대표적으로 <strong>코티졸(Cortisol)</strong> 호르몬이 포함</li>
</ul>
<h4 class="exam-important">코티졸 호르몬의 특성</h4>
<ul>
  <li>'<strong>스트레스 호르몬</strong>'이자 '<strong>스트레스 통제 호르몬</strong>'</li>
  <li>장기간 스트레스 노출 시: <strong>기억력·집중력 저하</strong>, 만성피로증후군 유발</li>
</ul>`},{title:`일 중독증과 소진`,content:`<h4 class="exam-important">일 중독증 vs 소진 비교</h4>
<table>
  <tr><th>구분</th><th>일 중독증(워커홀릭)</th><th>소진(번아웃)</th></tr>
  <tr><td><strong>별칭</strong></td><td>과잉적응증후군</td><td>탈진증후군</td></tr>
  <tr><td><strong>특징</strong></td><td>점심 먹으면서 서류 보고, 아무것도 하지 않으면 견딜 수 없음</td><td>열심히 일한 후 성취감보다 허탈감, 인생에 환멸</td></tr>
  <tr><td><strong>핵심</strong></td><td>일에 대한 <strong>과도한 집착</strong></td><td>정서적 <strong>고갈과 냉소</strong></td></tr>
</table>`},{title:`스트레스원(스트레스 원인)`,content:`<h4 class="exam-important">스트레스원의 3가지 분류</h4>
<table>
  <tr><th>분류</th><th>요인</th></tr>
  <tr><td><strong>직무·조직관련</strong></td><td>과제특성, 역할갈등, 역할과다/과소, 조직문화와 풍토</td></tr>
  <tr><td><strong>개인관련</strong></td><td>A형 성격유형, 통제 위치(소재), 능력·경험, 요구와 가치, 인구통계적 변인</td></tr>
  <tr><td><strong>물리적 환경관련</strong></td><td>조명, 소음, 온도, 진동, 공기오염, 사무실 설계, 사회적 밀도</td></tr>
</table>`},{title:`스트레스 관리전략`,content:`<h4 class="exam-important">스트레스 예방관리전략 3단계</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 500 160" style="max-width:480px;width:100%">
  <rect x="10" y="20" width="150" height="50" rx="10" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="85" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">1차적 예방</text>
  <text x="85" y="58" text-anchor="middle" font-size="10" fill="#166534">출처지향적(요인중심)</text>
  <rect x="175" y="20" width="150" height="50" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="250" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">2차적 예방</text>
  <text x="250" y="58" text-anchor="middle" font-size="10" fill="#92400e">반응지향적(반응중심)</text>
  <rect x="340" y="20" width="150" height="50" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="415" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">3차적 예방</text>
  <text x="415" y="58" text-anchor="middle" font-size="10" fill="#991b1b">증후지향적(증후중심)</text>
  <text x="85" y="100" text-anchor="middle" font-size="9" fill="#555">스트레스 요인</text>
  <text x="85" y="112" text-anchor="middle" font-size="9" fill="#555">수정·변경</text>
  <text x="250" y="100" text-anchor="middle" font-size="9" fill="#555">긴장 방제·제거</text>
  <text x="250" y="112" text-anchor="middle" font-size="9" fill="#555">또는 억제</text>
  <text x="415" y="100" text-anchor="middle" font-size="9" fill="#555">최소화·통제</text>
</svg>
</div>
<h4 class="exam-important">1차적 관리전략 (조직 수준)</h4>
<table>
  <tr><th>유형</th><th>방법</th></tr>
  <tr><td><strong>직무중심</strong></td><td>직무재설계, 참여적 관리, 경력개발, 융통적 작업계획</td></tr>
  <tr><td><strong>관계중심</strong></td><td>역할분석, 목표설정, 사회적 지지, 팀 형성</td></tr>
</table>
<h4 class="exam-important">2차적 관리전략 (개인 수준)</h4>
<table>
  <tr><th>유형</th><th>방법</th></tr>
  <tr><td><strong>요인지향적(출처)</strong></td><td>스트레스 지각관리, 작업환경·생활스타일 관리</td></tr>
  <tr><td><strong>반응지향적</strong></td><td>이완훈련, 신체적 배출, 정서적 배출</td></tr>
  <tr><td><strong>증후지향적(증상)</strong></td><td>상담·정신치료, 의학적 보호</td></tr>
</table>`}]}]},jobinfo:{name:`직업정보론`,code:`jobinfo`,color:`#10B981`,icon:`fa-solid fa-circle-info`,description:`직업분류체계, 직업정보 수집/제공 방법을 학습합니다.`,chapters:[{title:`직업분류체계`,topics:[{title:`한국표준직업분류(KSCO)`,content:`<h4>한국표준직업분류 (KSCO)</h4>
<p>통계청이 고시하는 공식 직업분류 체계로, 국제표준직업분류(ISCO)를 기초로 한국 실정에 맞게 작성합니다.</p>
<h4>분류 기준</h4>
<ul>
  <li><strong>직무(Job):</strong> 한 사람이 수행하는 일의 묶음</li>
  <li><strong>직능수준(Skill Level):</strong> 직무 수행에 필요한 교육/훈련/경험 수준 (4단계)</li>
  <li><strong>직능유형(Skill Type):</strong> 직무 수행에 필요한 지식/도구/장비의 종류</li>
</ul>
<h4>대분류 (10개)</h4>
<ol>
  <li>관리자</li>
  <li>전문가 및 관련 종사자</li>
  <li>사무 종사자</li>
  <li>서비스 종사자</li>
  <li>판매 종사자</li>
  <li>농림어업 숙련 종사자</li>
  <li>기능원 및 관련 기능 종사자</li>
  <li>장치·기계 조작 및 조립 종사자</li>
  <li>단순노무 종사자</li>
  <li>군인 (0)</li>
</ol>
<h4>분류 단계</h4>
<p>대분류(1자리) → 중분류(2자리) → 소분류(3자리) → 세분류(4자리) → 세세분류(5자리)</p>`},{title:`한국고용직업분류(KECO)`,content:`<h4>한국고용직업분류 (KECO)</h4>
<p>한국고용정보원이 개발한 직업분류로, 고용서비스 현장에서 활용됩니다.</p>
<h4>KSCO와의 차이점</h4>
<table>
  <tr><th>구분</th><th>KSCO</th><th>KECO</th></tr>
  <tr><td>관리기관</td><td>통계청</td><td>고용노동부(고용정보원)</td></tr>
  <tr><td>목적</td><td>통계 조사</td><td>고용서비스, 직업상담</td></tr>
  <tr><td>분류 기준</td><td>직무 유사성</td><td>직업활동의 현실적 유사성</td></tr>
  <tr><td>직능수준</td><td>별도 구분</td><td>동일 직업 내 통합</td></tr>
</table>
<h4>KECO 대분류 (10개)</h4>
<ol>
  <li>관리직</li>
  <li>경영·사무·금융·보험직</li>
  <li>연구직 및 공학기술직</li>
  <li>교육·법률·사회복지·경찰·소방직 및 군인</li>
  <li>보건·의료직</li>
  <li>예술·디자인·방송·스포츠직</li>
  <li>미용·여행·숙박·음식·경비·청소직</li>
  <li>영업·판매·운전·운송직</li>
  <li>건설·채굴직</li>
  <li>설치·정비·생산직</li>
</ol>`}]},{title:`직업정보 수집`,topics:[{title:`워크넷과 직업정보시스템`,content:`<h4>워크넷 (Work-Net)</h4>
<p>고용노동부와 한국고용정보원이 운영하는 대표적 고용정보 포털사이트입니다.</p>
<h4>워크넷의 주요 서비스</h4>
<ul>
  <li><strong>구인구직 매칭:</strong> 기업의 구인정보와 구직자의 이력서 매칭</li>
  <li><strong>직업심리검사:</strong> 적성, 흥미, 가치관 등 온라인 검사</li>
  <li><strong>직업정보:</strong> 한국직업사전, 직업전망, 직업동영상</li>
  <li><strong>훈련정보:</strong> 직업훈련 과정 검색</li>
  <li><strong>고용지원정책:</strong> 정부 고용지원 사업 안내</li>
</ul>
<h4>한국직업사전</h4>
<ul>
  <li>직무개요, 수행직무, 정규교육, 숙련기간</li>
  <li>직업분류코드, 자격/면허, 조사연도</li>
  <li>부가직업정보: 작업강도, 작업장소, 육체활동 등</li>
</ul>
<h4>기타 직업정보 시스템</h4>
<ul>
  <li><strong>커리어넷:</strong> 한국직업능력연구원 운영 (청소년 진로 중심)</li>
  <li><strong>HRD-Net:</strong> 직업훈련 정보 시스템</li>
  <li><strong>Q-Net:</strong> 한국산업인력공단 자격정보</li>
</ul>`},{title:`직업정보 수집 방법`,content:`<h4>직업정보 수집 방법</h4>
<h4>1차 자료 수집</h4>
<ul>
  <li><strong>직업조사:</strong> 직접 현장 방문, 관찰, 면접</li>
  <li><strong>직무분석:</strong> 직무의 내용, 요건, 조건을 체계적으로 분석</li>
  <li><strong>설문조사:</strong> 근로자, 기업 대상 설문</li>
</ul>
<h4>2차 자료 수집</h4>
<ul>
  <li>한국직업사전, 직업전망서</li>
  <li>통계자료 (경제활동인구조사, 사업체노동력조사)</li>
  <li>학술논문, 보고서, 인터넷 자료</li>
</ul>
<h4>직무분석의 방법</h4>
<ul>
  <li><strong>최초분석법:</strong> 직무에 대한 기존 정보 없이 처음 분석</li>
  <li><strong>비교확인법(DACUM):</strong> 현직자 패널을 활용한 교육과정 개발법</li>
  <li><strong>면접법:</strong> 재직자와의 면담을 통한 정보 수집</li>
  <li><strong>관찰법:</strong> 작업자의 활동을 직접 관찰</li>
  <li><strong>체험법:</strong> 분석가가 직접 작업을 수행</li>
  <li><strong>설문지법:</strong> 구조화된 설문지를 통한 정보 수집</li>
</ul>`}]},{title:`직무분석의 이해`,topics:[{title:`직무분석의 개념과 절차`,content:`<h4>직무분석 (Job Analysis)의 정의</h4>
<p>특정 직무의 <strong>내용, 요건, 조건, 책임</strong> 등을 체계적으로 조사·분석하여 직무에 관한 정보를 수집·정리하는 과정입니다.</p>
<h4>직무 관련 용어</h4>
<ul>
  <li><strong>요소(Element):</strong> 더 이상 분할할 수 없는 최소 작업 단위</li>
  <li><strong>과업(Task):</strong> 요소들의 묶음, 독립적으로 의미 있는 작업 단위</li>
  <li><strong>직위(Position):</strong> 한 사람에게 부여된 과업의 묶음</li>
  <li><strong>직무(Job):</strong> 유사한 직위의 집합</li>
  <li><strong>직업(Occupation):</strong> 유사한 직무의 집합, 사회적으로 인정된 활동</li>
  <li><strong>직군(Job Family):</strong> 유사한 직업의 집합</li>
</ul>
<h4>직무분석의 절차</h4>
<ol>
  <li><strong>준비 단계:</strong> 목적 설정, 대상 직무 선정, 분석방법 결정</li>
  <li><strong>정보수집 단계:</strong> 면접, 관찰, 설문, 작업일지 등으로 자료 수집</li>
  <li><strong>분석 단계:</strong> 수집된 정보의 정리·분석</li>
  <li><strong>결과물 작성:</strong> 직무기술서(Job Description)와 직무명세서(Job Specification) 작성</li>
</ol>
<h4>직무분석의 결과물</h4>
<table>
  <tr><th>구분</th><th>직무기술서 (Job Description)</th><th>직무명세서 (Job Specification)</th></tr>
  <tr><td>초점</td><td><strong>직무</strong> 자체에 대한 정보</td><td><strong>직무수행자</strong>에 대한 요건</td></tr>
  <tr><td>내용</td><td>직무명, 수행업무, 책임, 작업조건</td><td>학력, 경력, 자격, 능력, 신체조건</td></tr>
  <tr><td>용도</td><td>직무 설계, 업무 배분</td><td>채용, 선발, 배치</td></tr>
</table>`},{title:`직무분석 기법 상세`,content:`<h4>주요 직무분석 기법</h4>
<h4>1. 최초분석법 (시간연구법)</h4>
<ul>
  <li>직무에 대한 기존 정보 없이 <strong>처음부터</strong> 분석</li>
  <li>새로운 직무 또는 기존 정보가 없는 경우에 사용</li>
</ul>
<h4>2. DACUM (Developing A CurriculUM)</h4>
<ul>
  <li><strong>현직 종사자 패널</strong>(5~12명)을 활용한 직무분석 및 교육과정 개발 기법</li>
  <li>직무(Duty) → 과업(Task)을 DACUM 차트로 도식화</li>
  <li>장점: 비용 효율적, 단기간 가능 (2~3일), 현장 중심</li>
  <li>단점: 패널의 대표성 문제, 미래 변화 예측 어려움</li>
</ul>
<h4>3. 기능적 직무분석법 (FJA, Functional Job Analysis)</h4>
<p>미국 노동부가 개발한 방법으로, 직무를 <strong>자료(Data)-사람(People)-사물(Things)</strong>의 3가지 기능 영역으로 분류합니다.</p>
<table>
  <tr><th>자료(Data)</th><th>사람(People)</th><th>사물(Things)</th></tr>
  <tr><td>종합(0) ~ 비교(6)</td><td>자문(0) ~ 지시수행(8)</td><td>설치(0) ~ 단순작업(7)</td></tr>
  <tr><td>숫자가 낮을수록 복잡</td><td>숫자가 낮을수록 복잡</td><td>숫자가 낮을수록 복잡</td></tr>
</table>
<h4>4. 직위분석 설문지 (PAQ, Position Analysis Questionnaire)</h4>
<ul>
  <li>맥코믹(McCormick) 개발, <strong>194개 직무요소</strong>를 6개 영역으로 분류</li>
  <li>정보입력 → 정신과정 → 작업출력 → 대인관계 → 직무맥락 → 기타특성</li>
  <li>장점: 표준화되어 직무 간 비교 용이, 양적 분석 가능</li>
</ul>
<h4>5. 중요사건 기법 (CIT, Critical Incident Technique)</h4>
<ul>
  <li>플래너건(Flanagan) 개발, 직무수행 중 <strong>성공/실패에 결정적인 사건</strong>을 수집·분석</li>
  <li>효과적/비효과적 행동을 구체적 사례로 파악</li>
  <li>평가도구 개발, 교육훈련 설계에 활용</li>
</ul>
<h4>6. 워크샘플링 (Work Sampling)</h4>
<ul>
  <li>무작위 시점에서 작업자의 활동을 관찰·기록</li>
  <li>각 활동에 소요되는 시간 비율을 통계적으로 추정</li>
</ul>`}]},{title:`직업정보 제공`,topics:[{title:`직업정보 제공 방법`,content:`<h4>직업정보 제공 방법</h4>
<ul>
  <li><strong>직업카드:</strong> 카드 형태의 직업정보로, 분류/정렬 활동에 활용</li>
  <li><strong>직업동영상:</strong> 실제 직업현장을 영상으로 제공</li>
  <li><strong>직업체험 프로그램:</strong> 직접 체험을 통한 직업이해</li>
  <li><strong>직업박람회:</strong> 다양한 직업정보를 한곳에서 제공</li>
  <li><strong>멘토링:</strong> 현직자와의 만남을 통한 정보 제공</li>
</ul>
<h4>직업전망</h4>
<ul>
  <li>한국직업전망서: 한국고용정보원 발간 (격년)</li>
  <li>고용동향: 통계청 경제활동인구조사 기반</li>
  <li>신직업: 기술변화, 사회변화에 따른 새로운 직업</li>
</ul>
<h4>직업정보의 질적 기준</h4>
<ul>
  <li>정확성: 사실에 기반한 정보</li>
  <li>최신성: 최신 동향 반영</li>
  <li>충분성: 의사결정에 필요한 충분한 정보</li>
  <li>접근성: 이해하기 쉽고 활용하기 편리</li>
</ul>`}]},{title:`산업분류`,topics:[{title:`한국표준산업분류(KSIC)`,content:`<h4>한국표준산업분류 (KSIC)</h4>
<p>통계청이 고시하는 산업 분류 체계로, 국제표준산업분류(ISIC)를 기반으로 합니다.</p>
<h4>분류 기준</h4>
<ul>
  <li><strong>산출물(생산된 재화나 서비스)의 특성</strong></li>
  <li>투입물의 특성</li>
  <li>생산 활동의 일반적인 과정</li>
</ul>
<h4>대분류 (21개)</h4>
<ul>
  <li>A. 농업, 임업 및 어업</li>
  <li>B. 광업</li>
  <li>C. 제조업</li>
  <li>D. 전기, 가스, 증기 및 공기조절 공급업</li>
  <li>E. 수도, 하수 및 폐기물 처리, 원료 재생업</li>
  <li>F. 건설업</li>
  <li>G. 도매 및 소매업</li>
  <li>H. 운수 및 창고업</li>
  <li>I. 숙박 및 음식점업</li>
  <li>J. 정보통신업</li>
  <li>K. 금융 및 보험업</li>
  <li>... (총 21개 대분류)</li>
</ul>
<h4>분류 단계</h4>
<p>대분류(알파벳) → 중분류(2자리) → 소분류(3자리) → 세분류(4자리) → 세세분류(5자리)</p>`}]},{title:`시험 핵심키워드 - 직업정보의 제공`,topics:[{title:`작업강도 5단계`,content:`<div class="exam-important">
<h4>작업강도 5단계 - 한국직업사전 부가정보</h4>
<p>한국직업사전에서 각 직업의 <strong>신체적 작업강도</strong>를 5단계로 분류합니다. ★ <strong>심리적·정신적·노동강도는 고려하지 않습니다.</strong></p>
<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;margin:10px auto;display:block;">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#a7f3d0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#dc2626;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect x="10" y="80" width="680" height="18" rx="9" fill="url(#g1)" opacity="0.3"/>
  <circle cx="80" cy="60" r="28" fill="#a7f3d0" stroke="#065f46" stroke-width="2"/>
  <text x="80" y="65" text-anchor="middle" font-size="11" font-weight="bold">4kg</text>
  <text x="80" y="130" text-anchor="middle" font-size="10">아주 가벼운</text>
  <circle cx="220" cy="60" r="28" fill="#6ee7b7" stroke="#065f46" stroke-width="2"/>
  <text x="220" y="58" text-anchor="middle" font-size="10" font-weight="bold">8kg</text>
  <text x="220" y="70" text-anchor="middle" font-size="9">(4kg빈번)</text>
  <text x="220" y="130" text-anchor="middle" font-size="10">가벼운</text>
  <circle cx="360" cy="60" r="28" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
  <text x="360" y="58" text-anchor="middle" font-size="10" font-weight="bold">20kg</text>
  <text x="360" y="70" text-anchor="middle" font-size="9">(10kg빈번)</text>
  <text x="360" y="130" text-anchor="middle" font-size="10">보통</text>
  <circle cx="500" cy="60" r="28" fill="#f87171" stroke="#991b1b" stroke-width="2"/>
  <text x="500" y="58" text-anchor="middle" font-size="10" font-weight="bold">40kg</text>
  <text x="500" y="70" text-anchor="middle" font-size="9">(20kg빈번)</text>
  <text x="500" y="130" text-anchor="middle" font-size="10">힘든</text>
  <circle cx="630" cy="60" r="28" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
  <text x="630" y="58" text-anchor="middle" font-size="9" font-weight="bold" fill="white">40kg+</text>
  <text x="630" y="70" text-anchor="middle" font-size="8" fill="white">(20kg+빈번)</text>
  <text x="630" y="130" text-anchor="middle" font-size="10">아주 힘든</text>
  <text x="350" y="170" text-anchor="middle" font-size="11" fill="#666">← 낮은 강도 ─────────── 높은 강도 →</text>
  <text x="350" y="200" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="bold">※ 심리적·정신적 노동강도는 고려하지 않음!</text>
</svg>
<table>
  <tr><th>단계</th><th>들어올리기(최대)</th><th>빈번하게 다루는 무게</th></tr>
  <tr><td><strong>아주 가벼운</strong></td><td>4kg 이하</td><td>-</td></tr>
  <tr><td><strong>가벼운</strong></td><td>8kg 이하</td><td>4kg 이하 빈번</td></tr>
  <tr><td><strong>보통</strong></td><td>20kg 이하</td><td>10kg 이하 빈번</td></tr>
  <tr><td><strong>힘든</strong></td><td>40kg 이하</td><td>20kg 이하 빈번</td></tr>
  <tr><td><strong>아주 힘든</strong></td><td>40kg 이상</td><td>20kg 이상 빈번</td></tr>
</table>
<p>★ <strong>암기법:</strong> "4-8-20-40-40+" / 빈번 무게는 항상 최대의 절반!</p>
<p>※ <strong>출제 함정:</strong> "정신적 노동강도를 포함한다" → <strong>틀림!</strong> 신체적 강도만 해당됩니다.</p>
</div>`},{title:`공공직업정보의 특징`,content:`<div class="exam-important">
<h4>공공직업정보의 특징</h4>
<p><strong>비영리기관</strong>이 <strong>공익적 목적</strong>으로 생산·제공하는 직업정보입니다.</p>
<table>
  <tr><th>특징</th><th>상세 설명</th></tr>
  <tr><td><strong>공익적 목적</strong></td><td>비영리기관에서 공익을 위해 생산·제공</td></tr>
  <tr><td><strong>지속적 조사·분석</strong></td><td>전체 산업을 대상으로 지속적으로 조사·분석</td></tr>
  <tr><td><strong>객관적 기준</strong></td><td>국내외 객관적 기준 적용 (국제표준직업분류, 한국표준직업분류 등)</td></tr>
  <tr><td><strong>보편적 항목</strong></td><td>보편적 항목으로 구성되어 비교·활용 용이</td></tr>
  <tr><td><strong>무료 제공</strong></td><td>누구나 무료로 이용 가능</td></tr>
</table>
<p>★ <strong>암기법:</strong> "비공지객보무" (비영리, 공익, 지속적, 객관적, 보편적, 무료)</p>
<p>※ <strong>출제 함정:</strong> 민간직업정보와 비교하여 특징을 뒤바꿔 출제하는 경우가 많습니다. 공공=무료/지속적/객관적 vs 민간=유료/한시적/임의적</p>
</div>`},{title:`직무기능 DPT`,content:`<div class="exam-important">
<h4>직무기능 DPT - 한국직업사전 부가정보</h4>
<p>직무수행 시 <strong>자료(Data)·사람(People)·사물(Thing)</strong>과의 관계를 수준별로 분류합니다. ★ <strong>수준 숫자가 0에 가까울수록 높은 수준</strong>입니다.</p>
<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;margin:10px auto;display:block;">
  <rect x="10" y="10" width="210" height="300" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="115" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">D (자료/Data)</text>
  <text x="115" y="65" text-anchor="middle" font-size="10" fill="#1e40af">0=종합 ← 높은 수준</text>
  <text x="25" y="90" font-size="11">0. 종합</text>
  <text x="25" y="110" font-size="11" font-weight="bold" fill="#b91c1c">1. 조정 (분석 기초)</text>
  <text x="25" y="130" font-size="11" font-weight="bold" fill="#b91c1c">2. 분석 (조사·평가)</text>
  <text x="25" y="150" font-size="11">3. 수집·정리</text>
  <text x="25" y="170" font-size="11" font-weight="bold" fill="#b91c1c">4. 계산 (수세는것 불포함)</text>
  <text x="25" y="190" font-size="11">5. 기록·기입</text>
  <text x="25" y="210" font-size="11">6. 비교</text>
  <text x="115" y="240" text-anchor="middle" font-size="10" fill="#1e40af">6=비교 ← 낮은 수준</text>
  <rect x="245" y="10" width="210" height="300" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="350" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">P (사람/People)</text>
  <text x="350" y="65" text-anchor="middle" font-size="10" fill="#92400e">0=자문 ← 높은 수준</text>
  <text x="260" y="90" font-size="11" font-weight="bold" fill="#b91c1c">0. 자문 (전인격적 문제 조언)</text>
  <text x="260" y="110" font-size="11" font-weight="bold" fill="#b91c1c">1. 협의 (정보·의견 교환)</text>
  <text x="260" y="130" font-size="11">2. 교육</text>
  <text x="260" y="150" font-size="11">3. 감독</text>
  <text x="260" y="170" font-size="11">4. 오락제공</text>
  <text x="260" y="190" font-size="11">5. 설득</text>
  <text x="260" y="210" font-size="11">6. 말하기·신호</text>
  <text x="260" y="230" font-size="11">7. 서비스제공</text>
  <text x="260" y="250" font-size="11">8. 관련없음</text>
  <rect x="480" y="10" width="210" height="300" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="585" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#065f46">T (사물/Thing)</text>
  <text x="585" y="65" text-anchor="middle" font-size="10" fill="#065f46">0=설치 ← 높은 수준</text>
  <text x="495" y="90" font-size="11">0. 설치</text>
  <text x="495" y="110" font-size="11">1. 정밀작업</text>
  <text x="495" y="130" font-size="11" font-weight="bold" fill="#b91c1c">2. 조작운전 (기계 시동·정지·제어)</text>
  <text x="495" y="150" font-size="11">3. 운전·조작</text>
  <text x="495" y="170" font-size="11" font-weight="bold" fill="#b91c1c">4. 수동조작 (판단력 필요)</text>
  <text x="495" y="190" font-size="11">5. 유지</text>
  <text x="495" y="210" font-size="11">6. 투입·인출</text>
  <text x="495" y="230" font-size="11" font-weight="bold" fill="#b91c1c">7. 단순작업 (수공구)</text>
  <text x="495" y="250" font-size="11">8. 관련없음</text>
</svg>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li><strong>자료-조정(1):</strong> 분석을 기초로 한 조정 활동</li>
  <li><strong>자료-분석(2):</strong> 조사·평가 활동</li>
  <li><strong>자료-계산(4):</strong> 수를 세는 것은 포함하지 않음!</li>
  <li><strong>사람-자문(0):</strong> 전인격적 문제에 대한 조언 (가장 높은 수준)</li>
  <li><strong>사람-협의(1):</strong> 정보·의견을 교환하는 활동</li>
  <li><strong>사물-조작운전(2):</strong> 기계의 시동·정지·제어</li>
  <li><strong>사물-수동조작(4):</strong> 판단력이 필요한 수동 조작</li>
  <li><strong>사물-단순작업(7):</strong> 수공구를 사용하는 단순 작업</li>
</ul>
<p>※ <strong>출제 함정:</strong> "숫자가 클수록 높은 수준이다" → <strong>틀림!</strong> 0에 가까울수록 높은 수준입니다.</p>
</div>`},{title:`민간직업정보의 특징`,content:`<div class="exam-important">
<h4>민간직업정보의 특징</h4>
<p>민간 영리기관이 <strong>특정 목적</strong>을 위해 생산·제공하는 직업정보입니다.</p>
<table>
  <tr><th>구분</th><th>공공직업정보</th><th>민간직업정보</th></tr>
  <tr><td><strong>비용</strong></td><td>무료 제공</td><td><strong>유료 제공</strong></td></tr>
  <tr><td><strong>생산기간</strong></td><td>지속적 조사·분석</td><td><strong>한시적·신속 생산, 단기간 집중 제공</strong></td></tr>
  <tr><td><strong>대상범위</strong></td><td>전체 산업 대상</td><td><strong>특정 목적·분야에 제한적 선택</strong></td></tr>
  <tr><td><strong>기준</strong></td><td>객관적 국제기준</td><td><strong>임의적 기준</strong></td></tr>
  <tr><td><strong>활용성</strong></td><td>비교·활용 용이</td><td><strong>다른 정보와 비교 적고 활용성 낮음</strong></td></tr>
  <tr><td><strong>파급효과</strong></td><td>높음</td><td><strong>부가적 파급효과 적음</strong></td></tr>
</table>
<p>★ <strong>암기법:</strong> 민간직업정보 = "유한특임부비" (유료, 한시적, 특정분야, 임의적 기준, 부가파급효과 적음, 비교 어려움)</p>
<p>※ <strong>출제 함정:</strong> 공공과 민간의 특징을 서로 뒤바꿔 출제하는 것이 빈출 패턴입니다. 반드시 비교표로 정리하세요!</p>
</div>`},{title:`정규교육과 숙련기간`,content:`<div class="exam-important">
<h4>정규교육과 숙련기간 - 한국직업사전 부가정보</h4>
<h4>정규교육</h4>
<ul>
  <li><strong>6단계</strong>로 구분 (초등학교~대학원 이상)</li>
  <li>해당 직업 종사에 필요한 <strong>일반적인 정규교육 수준</strong>을 의미</li>
  <li>★ <strong>평균학력이 아님!</strong> 일반적으로 필요한 정규교육 수준</li>
  <li>★ <strong>독학·검정고시</strong>를 통한 학력도 포함</li>
</ul>
<h4>숙련기간</h4>
<ul>
  <li>해당 직업의 직무를 평균적으로 수행하기 위해 필요한 기간</li>
  <li><strong>포함:</strong> 취업 전 교육훈련 + 사내교육 + 현장훈련(OJT)</li>
  <li>★ <strong>미포함:</strong> <strong>향상훈련</strong>은 포함하지 않음!</li>
</ul>
<table>
  <tr><th>구분</th><th>정규교육</th><th>숙련기간</th></tr>
  <tr><td><strong>기준</strong></td><td>일반적 정규교육 수준</td><td>직무 평균 수행 필요 기간</td></tr>
  <tr><td><strong>단계</strong></td><td>6단계</td><td>-</td></tr>
  <tr><td><strong>특이사항</strong></td><td>평균학력 아님, 독학/검정고시 포함</td><td>향상훈련 미포함</td></tr>
</table>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"정규교육은 평균학력을 의미한다" → <strong>틀림!</strong></li>
  <li>"숙련기간에 향상훈련이 포함된다" → <strong>틀림!</strong></li>
  <li>"독학은 정규교육에 포함되지 않는다" → <strong>틀림!</strong> 독학·검정고시도 포함됩니다.</li>
</ul>
</div>`},{title:`한국직업전망 직업정보 내용`,content:`<div class="exam-important">
<h4>한국직업전망 직업정보 내용</h4>
<h4>대표직업명</h4>
<ul>
  <li><strong>KECO 세분류(4자리)</strong>를 기준으로 선정</li>
  <li>★ KSCO가 아닌 <strong>KECO</strong> 기준임에 주의!</li>
</ul>
<h4>일자리 전망</h4>
<p><strong>향후 10년간</strong>의 일자리 변화를 5단계로 제시합니다.</p>
<table>
  <tr><th>단계</th><th>기준</th></tr>
  <tr><td><strong>감소</strong></td><td>-2% 미만</td></tr>
  <tr><td><strong>다소 감소</strong></td><td>-2% ~ 0% 미만</td></tr>
  <tr><td><strong>현 상태 유지</strong></td><td>0% ~ 1% 미만</td></tr>
  <tr><td><strong>다소 증가</strong></td><td>1% ~ 2% 이하</td></tr>
  <tr><td><strong>증가</strong></td><td>2% 초과</td></tr>
</table>
<h4>고용변동 요인</h4>
<table>
  <tr><th>구분</th><th>요인</th><th>예시</th></tr>
  <tr><td><strong>확실성 요인</strong></td><td>예측 가능한 변화</td><td>인구구조 변화, 노동인구 변화, 과학기술 발전, 가치관 변화</td></tr>
  <tr><td><strong>불확실성 요인</strong></td><td>예측 어려운 변화</td><td>법·제도 변화, 정부 정책 변화</td></tr>
</table>
<p>★ <strong>암기법 (확실성 요인):</strong> "인노과가" (인구구조, 노동인구, 과학기술, 가치관)</p>
<p>★ <strong>암기법 (불확실성 요인):</strong> "법정" (법제도, 정부정책)</p>
<p>※ <strong>출제 함정:</strong> "정부정책은 확실성 요인이다" → <strong>틀림!</strong> 정부정책과 법제도는 <strong>불확실성 요인</strong>입니다.</p>
</div>`},{title:`직업정보의 유형별 장단점`,content:`<div class="exam-important">
<h4>직업정보의 유형별 장단점</h4>
<h4>수집 방법에 따른 분류</h4>
<table>
  <tr><th>구분</th><th>직접 수집 (1차 자료)</th><th>기존 자료 활용 (2차 자료)</th></tr>
  <tr><td><strong>장점</strong></td><td>목적에 맞는 정확한 정보 획득, 최신 정보</td><td>시간·비용 절약, 대량 데이터 활용</td></tr>
  <tr><td><strong>단점</strong></td><td>시간·비용 많이 소요</td><td>목적 불일치 가능, 최신성 부족</td></tr>
</table>
<h4>전달 방식에 따른 분류</h4>
<table>
  <tr><th>유형</th><th>특징</th><th>장점</th><th>단점</th></tr>
  <tr><td><strong>인쇄물</strong></td><td>책자, 브로셔, 팸플릿 등</td><td>보관·배포 용이, 반복 열람 가능</td><td>최신 정보 반영 어려움, 상호작용 불가</td></tr>
  <tr><td><strong>시청각자료</strong></td><td>동영상, 오디오 등</td><td>생동감 있는 정보 전달, 이해 용이</td><td>제작 비용 높음, 개별 요구 충족 어려움</td></tr>
  <tr><td><strong>전문가 면접(면담)</strong></td><td>현직자·전문가 인터뷰</td><td>생생한 현장 정보, 질의응답 가능</td><td>주관적 편향 가능, 시간 소요</td></tr>
  <tr><td><strong>관찰</strong></td><td>직업 현장 직접 방문 관찰</td><td>실제 업무 환경 파악</td><td>접근 제한, 표면적 정보만 수집</td></tr>
  <tr><td><strong>직접 경험·체험</strong></td><td>인턴십, 실습, 직업체험</td><td>가장 실질적인 정보 획득</td><td>시간·비용 많이 소요, 기회 제한</td></tr>
</table>
<p>★ <strong>핵심:</strong> 직접 경험이 가장 실질적이지만 비용과 시간이 많이 드는 방법입니다.</p>
<p>※ <strong>출제 포인트:</strong> 각 유형의 장단점을 정확히 구분하여 출제됩니다.</p>
</div>`},{title:`한국직업정보시스템 학과 검색`,content:`<div class="exam-important">
<h4>한국직업정보시스템 학과 검색</h4>
<h4>7개 계열</h4>
<table>
  <tr><th>번호</th><th>계열</th></tr>
  <tr><td>1</td><td><strong>인문</strong> 계열</td></tr>
  <tr><td>2</td><td><strong>사회</strong> 계열</td></tr>
  <tr><td>3</td><td><strong>교육</strong> 계열</td></tr>
  <tr><td>4</td><td><strong>자연</strong> 계열</td></tr>
  <tr><td>5</td><td><strong>공학</strong> 계열</td></tr>
  <tr><td>6</td><td><strong>의약</strong> 계열</td></tr>
  <tr><td>7</td><td><strong>예체능</strong> 계열</td></tr>
</table>
<p>★ <strong>암기법:</strong> "인사교자공의예" (인문, 사회, 교육, 자연, 공학, 의약, 예체능) = 7개 계열</p>
<h4>학과검색 제공 내용</h4>
<ul>
  <li><strong>학과소개:</strong> 학과 개요 및 관련 <strong>자격·면허</strong> 정보</li>
  <li><strong>개설대학:</strong> 해당 학과가 개설된 대학 목록</li>
  <li><strong>모집현황:</strong> 모집인원, 경쟁률 등</li>
  <li><strong>진출 가능 직업:</strong> 졸업 후 진출할 수 있는 직업 목록</li>
</ul>
<p>※ <strong>출제 함정:</strong> "8개 계열" 또는 존재하지 않는 계열을 포함시키는 문제에 주의하세요.</p>
</div>`},{title:`한국직업전망 수록직업 선정기준`,content:`<div class="exam-important">
<h4>한국직업전망 수록직업 선정기준</h4>
<ul>
  <li><strong>KECO 세분류(4자리)</strong>를 기초로 선정</li>
  <li>★ 종사자 <strong>3만 명 이상</strong>인 직업을 원칙으로 수록</li>
  <li><strong>워크넷</strong> 직업·진로 정보단위 사용</li>
  <li>★ <strong>관리직은 제외</strong> (승진을 통해 진입하는 직업이므로)</li>
  <li>실효성이 낮은 직업은 <strong>소분류(3자리)로 통합</strong>하여 수록</li>
</ul>
<table>
  <tr><th>항목</th><th>내용</th></tr>
  <tr><td><strong>분류 기준</strong></td><td>KECO 세분류 (4자리, 4-digit)</td></tr>
  <tr><td><strong>종사자 수</strong></td><td>3만 명 이상 원칙</td></tr>
  <tr><td><strong>정보단위</strong></td><td>워크넷 직업·진로 정보단위</td></tr>
  <tr><td><strong>제외 대상</strong></td><td>관리직 (승진 진입)</td></tr>
  <tr><td><strong>통합 처리</strong></td><td>실효성 낮은 직업 → 소분류(3자리)로 통합</td></tr>
</table>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"KSCO 세분류를 기준으로 한다" → <strong>틀림!</strong> KECO 세분류 기준입니다.</li>
  <li>"종사자 1만 명 이상이 기준이다" → <strong>틀림!</strong> 3만 명 이상입니다.</li>
  <li>"관리직도 포함된다" → <strong>틀림!</strong> 관리직은 승진 진입이므로 제외됩니다.</li>
</ul>
</div>`},{title:`조건별 검색 - 한국직업정보`,content:`<div class="exam-important">
<h4>조건별 검색 - 한국직업정보</h4>
<h4>직업전망 검색</h4>
<table>
  <tr><th>전망 등급</th><th>기준</th></tr>
  <tr><td><strong>매우 밝음</strong></td><td>상위 10%</td></tr>
  <tr><td><strong>밝음</strong></td><td>상위 20%</td></tr>
  <tr><td><strong>보통</strong></td><td>중간 이상</td></tr>
  <tr><td><strong>전망 안 좋음</strong></td><td>하위권</td></tr>
</table>
<h4>내게 맞는 직업 찾기</h4>
<table>
  <tr><th>검색 유형</th><th>항목 수</th><th>선택 기준</th></tr>
  <tr><td><strong>통합 검색</strong></td><td>전체</td><td><strong>10개 이상</strong> 선택</td></tr>
  <tr><td><strong>지식별 검색</strong></td><td>33개 중</td><td><strong>5개 이상</strong> 선택</td></tr>
  <tr><td><strong>업무수행능력별 검색</strong></td><td>44개 중</td><td><strong>7개 이상</strong> 선택</td></tr>
</table>
<p>★ <strong>암기법 (선택 개수):</strong> "통10 지5 업7" (통합 10개, 지식 5개, 업무수행능력 7개)</p>
<p>★ <strong>암기법 (항목 수):</strong> "지33 업44" (지식 33개, 업무수행능력 44개)</p>
<p>※ <strong>출제 함정:</strong> 숫자를 바꿔서 출제합니다. 특히 지식별(33개 중 5개)과 업무수행능력별(44개 중 7개)의 숫자를 정확히 기억하세요!</p>
</div>`}]},{title:`시험 핵심키워드 - 직업 및 산업분류의 활용`,topics:[{title:`KSIC 산업분류 적용원칙`,content:`<div class="exam-important">
<h4>KSIC 한국표준산업분류 적용원칙</h4>
<p>한국표준산업분류(KSIC)를 적용할 때 반드시 지켜야 하는 원칙들입니다. 시험에서 매우 빈출되는 내용입니다.</p>
<h4>핵심 적용원칙</h4>
<table>
  <tr><th>원칙</th><th>상세 설명</th></tr>
  <tr><td><strong>복합 고려</strong></td><td>산출물 + 투입물 + 생산공정을 <strong>함께</strong> 고려하여 분류</td></tr>
  <tr><td><strong>최상급 먼저</strong></td><td>★ <strong>최상급분류(대분류)</strong>를 먼저 결정한 후 하위분류 결정</td></tr>
  <tr><td><strong>결합활동</strong></td><td>결합활동은 <strong>주된 활동</strong>으로 분류</td></tr>
  <tr><td><strong>수수료/계약</strong></td><td>수수료·계약 기준 단위는 자기계정 단위와 <strong>같은 항목</strong>으로 분류</td></tr>
</table>
<h4>수리업 분류 원칙</h4>
<table>
  <tr><th>대상</th><th>분류</th></tr>
  <tr><td><strong>자본재</strong> (산업용 장비)</td><td>34: 산업용 기계장비 수리업</td></tr>
  <tr><td><strong>소비재</strong> (개인 물품)</td><td>95: 개인 소비용품 수리업</td></tr>
</table>
<p>★ <strong>암기법:</strong> "자본=산업(34), 소비=개인(95)"</p>
<h4>분류에 영향 없는 요소</h4>
<ul>
  <li><strong>소유형태:</strong> 공기업/사기업 등 소유형태에 영향 없음</li>
  <li><strong>법적 조직:</strong> 주식회사/합자회사 등 법적 형태 무관</li>
  <li><strong>운영방식:</strong> 운영 방법에 영향 없음</li>
  <li><strong>공식/비공식:</strong> 구분하지 않음</li>
  <li><strong>합법/비합법:</strong> 구분하지 않음</li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"소유형태에 따라 분류가 달라진다" → <strong>틀림!</strong></li>
  <li>"비합법적 활동은 산업분류에서 제외한다" → <strong>틀림!</strong> 합법/비합법 구분하지 않습니다.</li>
  <li>"소분류를 먼저 결정한다" → <strong>틀림!</strong> 최상급분류(대분류)를 먼저 결정합니다.</li>
</ul>
</div>`},{title:`KSCO 직업 대분류와 직능 수준`,content:`<div class="exam-important">
<h4>KSCO 직업 대분류와 직능 수준</h4>
<p>한국표준직업분류(KSCO)에서는 각 대분류별로 요구되는 <strong>직능수준</strong>을 규정합니다.</p>
<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;margin:10px auto;display:block;">
  <rect x="10" y="10" width="580" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">제4직능수준 / 제3직능수준</text>
  <text x="300" y="55" text-anchor="middle" font-size="10" fill="#92400e">관리자 / 전문가 및 관련 종사자</text>
  <rect x="10" y="80" width="580" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="300" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">제2직능수준 이상</text>
  <text x="300" y="125" text-anchor="middle" font-size="10" fill="#1e40af">사무/서비스/판매/농림어업/기능원/장치기계조작 종사자 + 군인</text>
  <rect x="10" y="150" width="580" height="50" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="300" y="180" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">제1직능수준</text>
  <text x="300" y="195" text-anchor="middle" font-size="10" fill="#991b1b">단순노무 종사자</text>
  <text x="300" y="240" text-anchor="middle" font-size="12" fill="#666">▲ 높은 직능수준 ─────── 낮은 직능수준 ▼</text>
  <text x="300" y="265" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="bold">★ 군인은 제2직능수준 이상 (특수 분류)</text>
</svg>
<table>
  <tr><th>대분류</th><th>직능수준</th></tr>
  <tr><td><strong>관리자</strong></td><td>제4직능수준 (또는 제3직능수준)</td></tr>
  <tr><td><strong>전문가 및 관련 종사자</strong></td><td>제4직능수준 / 제3직능수준</td></tr>
  <tr><td><strong>사무·서비스·판매·농림어업·기능원·장치기계조작 종사자</strong></td><td>제2직능수준 이상</td></tr>
  <tr><td><strong>군인</strong></td><td>제2직능수준 이상</td></tr>
  <tr><td><strong>단순노무 종사자</strong></td><td>★ <strong>제1직능수준</strong></td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li><strong>제1직능수준</strong> = 단순노무 종사자만 해당</li>
  <li><strong>군인</strong>은 별도 대분류이지만 제2직능수준 이상</li>
  <li>관리자·전문가 = 가장 높은 직능수준 (제3~4)</li>
</ul>
<p>※ <strong>출제 함정:</strong> "단순노무 종사자는 제2직능수준이다" → <strong>틀림!</strong> 제1직능수준입니다.</p>
</div>`},{title:`KSIC 산업 결정 방법`,content:`<div class="exam-important">
<h4>KSIC 산업 결정 방법</h4>
<p>사업체의 산업을 결정하는 구체적인 방법과 기준입니다.</p>
<h4>기본 원칙</h4>
<ul>
  <li><strong>주된 산업활동</strong>의 종류로 결정</li>
  <li><strong>계절활동:</strong> 산출액이 많은 활동으로 결정</li>
</ul>
<h4>특수 상황별 결정 방법</h4>
<table>
  <tr><th>상황</th><th>결정 방법</th></tr>
  <tr><td><strong>휴업·청산 중</strong></td><td>★ <strong>이전 활동</strong>으로 분류</td></tr>
  <tr><td><strong>설립 중</strong></td><td>★ <strong>개시 활동</strong>(예정 활동)으로 분류</td></tr>
  <tr><td><strong>계절적 활동</strong></td><td>산출액이 많은 활동으로 분류</td></tr>
</table>
<h4>보조단위 처리</h4>
<table>
  <tr><th>유형</th><th>처리 방법</th></tr>
  <tr><td><strong>단일사업체의 보조단위</strong></td><td>일개 부서로 취급 (별도 분류 안 함)</td></tr>
  <tr><td><strong>중앙보조단위 (본부)</strong></td><td>★ <strong>별도 사업체</strong>로 분류</td></tr>
</table>
<h4>주된 활동 판단 순서 (결정 어려울 때)</h4>
<ol>
  <li><strong>부가가치액</strong> 기준 → 어려우면</li>
  <li><strong>산출액</strong> 기준 → 그래도 어려우면</li>
  <li><strong>종업원 수 / 노동시간 / 임금 / 설비</strong> 기준</li>
</ol>
<p>★ <strong>암기법 (판단 순서):</strong> "부산종노임설" (부가가치 → 산출액 → 종업원수·노동시간·임금·설비)</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"휴업 중인 사업체는 분류하지 않는다" → <strong>틀림!</strong> 이전 활동으로 분류합니다.</li>
  <li>"보조단위는 모두 별도 사업체로 분류한다" → <strong>틀림!</strong> 단일사업체의 보조단위는 일개 부서이며, 중앙보조단위(본부)만 별도 사업체입니다.</li>
</ul>
</div>`},{title:`KSCO 포괄적 업무 분류 원칙`,content:`<div class="exam-important">
<h4>KSCO 포괄적 업무 분류 원칙</h4>
<p>한 사람이 여러 업무를 수행할 때 어떤 직업으로 분류할 것인지를 결정하는 3가지 원칙입니다.</p>
<table>
  <tr><th>원칙</th><th>내용</th><th>예시</th></tr>
  <tr><td><strong>1. 주된 직무 우선</strong></td><td>관련 직무 중 상관성이 가장 많은 항목으로 분류</td><td>여러 업무 중 가장 많이 수행하는 직무 기준</td></tr>
  <tr><td><strong>2. 최상급 직능수준 우선</strong></td><td>★ 여러 업무 중 <strong>가장 높은 직능수준</strong>이 요구되는 업무로 분류</td><td>조리 + 배달 → <strong>조리사</strong> (조리가 더 높은 직능수준)</td></tr>
  <tr><td><strong>3. 생산업무 우선</strong></td><td>★ 생산과 판매를 동시에 할 때 <strong>생산업무</strong>로 분류</td><td>빵 생산 + 판매 → <strong>제빵사</strong> (생산 우선)</td></tr>
</table>
<p>★ <strong>암기법:</strong> "주최생" (주된직무, 최상급직능, 생산우선)</p>
<p>★ <strong>적용 순서 핵심:</strong></p>
<ul>
  <li>먼저 <strong>주된 직무</strong>를 확인</li>
  <li>주된 직무 판단이 어려우면 <strong>최상급 직능수준</strong> 적용</li>
  <li>생산+판매 겸업이면 <strong>생산업무</strong>로 분류</li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"조리와 배달을 함께 하면 배달원으로 분류한다" → <strong>틀림!</strong> 조리가 더 높은 직능수준이므로 조리사로 분류</li>
  <li>"빵을 만들어 판매하면 판매원으로 분류한다" → <strong>틀림!</strong> 생산업무 우선 원칙에 따라 제빵사로 분류</li>
</ul>
</div>`},{title:`KSCO 직업의 정의`,content:`<div class="exam-important">
<h4>KSCO 직업의 정의</h4>
<h4>ISCO-08 기본 개념</h4>
<table>
  <tr><th>용어</th><th>정의</th></tr>
  <tr><td><strong>직무(Job)</strong></td><td>일련의 <strong>업무와 과업</strong>의 묶음</td></tr>
  <tr><td><strong>직업(Occupation)</strong></td><td><strong>유사한 직무의 집합</strong></td></tr>
</table>
<h4>직업의 3대 요건</h4>
<table>
  <tr><th>요건</th><th>설명</th></tr>
  <tr><td><strong>계속성</strong></td><td>일을 <strong>지속적으로</strong> 수행해야 함 (일시적 활동 제외)</td></tr>
  <tr><td><strong>경제성</strong></td><td>경제적 보상이 따라야 함 (★ 자연발생적 이득은 제외)</td></tr>
  <tr><td><strong>윤리성과 사회성</strong></td><td>사회적으로 인정받는 윤리적 활동이어야 함</td></tr>
</table>
<p>★ <strong>암기법:</strong> "계경윤사" (계속성, 경제성, 윤리성, 사회성)</p>
<h4>직업이 아닌 활동 (매우 중요!)</h4>
<table>
  <tr><th>활동</th><th>제외 이유</th></tr>
  <tr><td>이자·주식배당·임대료 수입</td><td>경제성 불충분 (자연발생적 이득)</td></tr>
  <tr><td>연금 수령</td><td>노동 수반 없는 소득</td></tr>
  <tr><td>경마·도박</td><td>윤리성·사회성 결여</td></tr>
  <tr><td>밀수</td><td>윤리성 결여</td></tr>
  <tr><td>가사활동</td><td>경제적 보상 없음</td></tr>
  <tr><td>교육·학습활동</td><td>수입 목적이 아님</td></tr>
  <tr><td>무급 봉사활동</td><td>경제적 보상 없음</td></tr>
  <tr><td>교도소 강제노동</td><td>자발성 결여</td></tr>
</table>
<p>※ <strong>출제 함정:</strong> "주식배당 수입은 직업활동에 해당한다" → <strong>틀림!</strong> 자연발생적 이득이므로 직업에 해당하지 않습니다.</p>
</div>`},{title:`KSIC 분류 목적`,content:`<div class="exam-important">
<h4>KSIC 한국표준산업분류의 목적</h4>
<p>한국표준산업분류(KSIC)가 존재하는 이유와 활용 목적입니다.</p>
<ul>
  <li>생산단위(사업체·기업체 등)를 <strong>유사성에 따라 체계적으로 유형화</strong>하기 위함</li>
  <li>★ <strong>통계법</strong>에 의거하여 <strong>의무적으로 사용</strong>해야 하는 분류체계</li>
  <li><strong>행정·산업정책</strong> 관련 법령의 기준으로 <strong>준용</strong>됨</li>
</ul>
<h4>KSIC의 활용 범위</h4>
<table>
  <tr><th>활용 분야</th><th>내용</th></tr>
  <tr><td><strong>통계 조사</strong></td><td>각종 경제·산업 통계의 기본 분류 체계</td></tr>
  <tr><td><strong>행정</strong></td><td>정부 행정업무의 산업 분류 기준</td></tr>
  <tr><td><strong>산업정책</strong></td><td>산업 지원·규제 정책의 법적 기준</td></tr>
  <tr><td><strong>국제 비교</strong></td><td>ISIC(국제표준산업분류)와의 비교 가능</td></tr>
</table>
<p>★ <strong>핵심:</strong> 통계법에 의한 <strong>의무적 사용</strong>이라는 점이 중요합니다.</p>
<p>※ <strong>출제 함정:</strong> "KSIC는 권장 사항이다" → <strong>틀림!</strong> 통계법상 의무적으로 사용해야 합니다.</p>
</div>`},{title:`KSIC 분류기준`,content:`<div class="exam-important">
<h4>KSIC 분류기준</h4>
<p>한국표준산업분류에서 산업활동을 분류할 때 사용하는 기준입니다.</p>
<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;margin:10px auto;display:block;">
  <rect x="10" y="10" width="180" height="170" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="100" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">산출물 특성</text>
  <text x="20" y="65" font-size="10">- 물리적 구성</text>
  <text x="20" y="85" font-size="10">- 가공 단계</text>
  <text x="20" y="105" font-size="10">- 수요처</text>
  <text x="20" y="125" font-size="10">- 기능·용도</text>
  <rect x="210" y="10" width="180" height="170" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">투입물 특성</text>
  <text x="220" y="65" font-size="10">- 원재료</text>
  <text x="220" y="85" font-size="10">- 생산 공정</text>
  <text x="220" y="105" font-size="10">- 생산 기술/시설</text>
  <rect x="410" y="10" width="180" height="170" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="500" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">생산활동의</text>
  <text x="500" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">일반적 결합상태</text>
  <text x="420" y="85" font-size="10">- 여러 활동의</text>
  <text x="420" y="105" font-size="10">  결합 패턴 고려</text>
</svg>
<h4>산출물 특성 (4가지)</h4>
<ul>
  <li><strong>물리적 구성:</strong> 제품의 물리적 구조와 성분</li>
  <li><strong>가공 단계:</strong> 원료에서 완제품까지의 가공 정도</li>
  <li><strong>수요처:</strong> 제품이 판매되는 시장/대상</li>
  <li><strong>기능·용도:</strong> 제품의 기능과 사용 목적</li>
</ul>
<h4>투입물 특성 (3가지)</h4>
<ul>
  <li><strong>원재료:</strong> 투입되는 원료·재료의 종류</li>
  <li><strong>생산공정:</strong> 제조·가공 과정</li>
  <li><strong>생산기술/시설:</strong> 사용되는 기술과 설비</li>
</ul>
<p>★ <strong>암기법 (산출물):</strong> "물가수기" (물리적 구성, 가공 단계, 수요처, 기능용도)</p>
<p>★ <strong>암기법 (투입물):</strong> "원공기" (원재료, 생산공정, 생산기술/시설)</p>
</div>`},{title:`KSIC 산업의 정의`,content:`<div class="exam-important">
<h4>KSIC 산업의 정의</h4>
<h4>핵심 정의</h4>
<table>
  <tr><th>용어</th><th>정의</th></tr>
  <tr><td><strong>산업</strong></td><td>유사한 성질의 산업활동에 종사하는 <strong>생산단위의 집합</strong></td></tr>
  <tr><td><strong>산업활동</strong></td><td>노동·자본·원료를 투입하여 <strong>재화 또는 서비스를 생산·제공</strong>하는 활동</td></tr>
</table>
<h4>포함·제외 범위</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>포함</strong></td><td>영리 활동 + <strong>비영리 활동</strong> 모두 포함</td></tr>
  <tr><td><strong>제외</strong></td><td>★ <strong>가정 내 가사활동</strong>은 제외</td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li>산업 = 생산단위의 <strong>집합</strong> (개별 단위가 아닌 집합 개념)</li>
  <li>영리·비영리 <strong>모두 포함</strong></li>
  <li>가정 내 가사활동은 <strong>제외</strong></li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"비영리 활동은 산업에 포함되지 않는다" → <strong>틀림!</strong> 영리·비영리 모두 포함됩니다.</li>
  <li>"가사활동도 서비스 생산이므로 산업에 포함된다" → <strong>틀림!</strong> 가정 내 가사활동은 제외됩니다.</li>
</ul>
</div>`},{title:`KSIC 분류구조 및 부호체계`,content:`<div class="exam-important">
<h4>KSIC 분류구조 및 부호체계</h4>
<p>한국표준산업분류의 5단계 분류 구조와 부호 체계입니다.</p>
<svg viewBox="0 0 650 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:650px;margin:10px auto;display:block;">
  <rect x="10" y="60" width="110" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="65" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">대분류</text>
  <text x="65" y="105" text-anchor="middle" font-size="10" fill="#1e40af">알파벳 (A~U)</text>
  <line x1="120" y1="90" x2="140" y2="90" stroke="#666" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="140" y="60" width="110" height="60" rx="8" fill="#c7d2fe" stroke="#6366f1" stroke-width="2"/>
  <text x="195" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#4338ca">중분류</text>
  <text x="195" y="105" text-anchor="middle" font-size="10" fill="#4338ca">2자리 (01~99)</text>
  <line x1="250" y1="90" x2="270" y2="90" stroke="#666" stroke-width="2"/>
  <rect x="270" y="60" width="110" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="325" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">소분류</text>
  <text x="325" y="105" text-anchor="middle" font-size="10" fill="#92400e">3자리</text>
  <line x1="380" y1="90" x2="400" y2="90" stroke="#666" stroke-width="2"/>
  <rect x="400" y="60" width="110" height="60" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="455" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">세분류</text>
  <text x="455" y="105" text-anchor="middle" font-size="10" fill="#991b1b">4자리</text>
  <line x1="510" y1="90" x2="530" y2="90" stroke="#666" stroke-width="2"/>
  <rect x="530" y="60" width="110" height="60" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="585" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">세세분류</text>
  <text x="585" y="105" text-anchor="middle" font-size="10" fill="#065f46">5자리</text>
  <text x="325" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">KSIC 5단계 분류구조</text>
  <text x="325" y="160" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="bold">★ 대분류만 알파벳, 나머지는 모두 아라비아 숫자</text>
  <text x="325" y="180" text-anchor="middle" font-size="11" fill="#666">부호 처리 시 대분류도 숫자로 변환</text>
</svg>
<table>
  <tr><th>분류 단계</th><th>부호 형태</th><th>범위</th></tr>
  <tr><td><strong>대분류</strong></td><td>알파벳 1자리 (A~U)</td><td>부호 처리 시 숫자로 변환</td></tr>
  <tr><td><strong>중분류</strong></td><td>아라비아 숫자 2자리</td><td>01 ~ 99</td></tr>
  <tr><td><strong>소분류</strong></td><td>아라비아 숫자 3자리</td><td>끝자리 0~9</td></tr>
  <tr><td><strong>세분류</strong></td><td>아라비아 숫자 4자리</td><td>끝자리 0~9</td></tr>
  <tr><td><strong>세세분류</strong></td><td>아라비아 숫자 5자리</td><td>끝자리 0~9</td></tr>
</table>
<p>★ <strong>핵심:</strong> 대분류만 알파벳이고, <strong>부호 처리는 아라비아 숫자만</strong> 사용합니다 (대분류도 숫자로 변환).</p>
<p>※ <strong>출제 함정:</strong> "대분류 부호는 알파벳을 그대로 사용한다" → 분류 표시는 알파벳이지만, <strong>부호 처리 시에는 숫자로 변환</strong>합니다.</p>
</div>`},{title:`KSCO 다수 직업 종사자 분류원칙`,content:`<div class="exam-important">
<h4>KSCO 다수 직업 종사자 분류원칙</h4>
<p>한 사람이 <strong>2개 이상의 직업</strong>에 종사하는 경우, 다음 우선순위에 따라 분류합니다.</p>
<table>
  <tr><th>우선순위</th><th>기준</th><th>설명</th></tr>
  <tr><td><strong>1순위</strong></td><td>★ <strong>취업시간</strong> 우선</td><td>더 많은 시간을 투입하는 직업으로 분류</td></tr>
  <tr><td><strong>2순위</strong></td><td><strong>수입</strong> 우선</td><td>취업시간이 같으면 수입이 많은 직업으로 분류</td></tr>
  <tr><td><strong>3순위</strong></td><td><strong>조사 시 최근 작업</strong> 우선</td><td>수입도 같으면 조사 시점에서 가장 최근에 한 작업으로 분류</td></tr>
</table>
<p>★ <strong>암기법:</strong> "취수최" (취업시간 → 수입 → 최근 작업)</p>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li><strong>1순위는 취업시간</strong>입니다 (수입이 아님!)</li>
  <li>순서: 취업시간 → 수입 → 최근 작업</li>
  <li>앞 순위로 판단이 안 될 때 다음 순위를 적용</li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"수입이 가장 많은 직업으로 먼저 분류한다" → <strong>틀림!</strong> 취업시간이 1순위입니다.</li>
  <li>"최근 작업이 1순위이다" → <strong>틀림!</strong> 최근 작업은 3순위(마지막)입니다.</li>
</ul>
</div>`}]},{title:`시험 핵심키워드 - 직업 관련 정보의 이해`,topics:[{title:`검정기준 - 등급서열`,content:`<div class="exam-important">
<h4>국가기술자격 검정기준 - 등급서열</h4>
<p>국가기술자격의 <strong>5단계 등급 체계</strong>와 각 등급의 검정기준입니다.</p>
<svg viewBox="0 0 650 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:650px;margin:10px auto;display:block;">
  <rect x="10" y="50" width="110" height="70" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="65" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">기능사</text>
  <text x="65" y="95" text-anchor="middle" font-size="9" fill="#065f46">(공고 수준)</text>
  <text x="65" y="110" text-anchor="middle" font-size="8" fill="#065f46">숙련기능 보유자</text>
  <line x1="120" y1="85" x2="140" y2="85" stroke="#666" stroke-width="2"/>
  <text x="130" y="78" text-anchor="middle" font-size="14" fill="#666">→</text>
  <rect x="140" y="50" width="110" height="70" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="195" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">산업기사</text>
  <text x="195" y="95" text-anchor="middle" font-size="9" fill="#1e40af">(전문대 수준)</text>
  <text x="195" y="110" text-anchor="middle" font-size="8" fill="#1e40af">기초이론/숙련기능</text>
  <line x1="250" y1="85" x2="270" y2="85" stroke="#666" stroke-width="2"/>
  <text x="260" y="78" text-anchor="middle" font-size="14" fill="#666">→</text>
  <rect x="270" y="50" width="110" height="70" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="325" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">기사</text>
  <text x="325" y="95" text-anchor="middle" font-size="9" fill="#92400e">(4년대 수준)</text>
  <text x="325" y="110" text-anchor="middle" font-size="8" fill="#92400e">공학적 기술이론</text>
  <line x1="380" y1="85" x2="400" y2="85" stroke="#666" stroke-width="2"/>
  <text x="390" y="78" text-anchor="middle" font-size="14" fill="#666">→</text>
  <rect x="400" y="50" width="110" height="70" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="455" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">기능장</text>
  <text x="455" y="95" text-anchor="middle" font-size="9" fill="#991b1b">(최상급)</text>
  <text x="455" y="110" text-anchor="middle" font-size="8" fill="#991b1b">최상급 숙련기능</text>
  <line x1="510" y1="85" x2="530" y2="85" stroke="#666" stroke-width="2"/>
  <text x="520" y="78" text-anchor="middle" font-size="14" fill="#666">→</text>
  <rect x="530" y="50" width="110" height="70" rx="8" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
  <text x="585" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">기술사</text>
  <text x="585" y="95" text-anchor="middle" font-size="9" fill="#6b21a8">(단답형/구술형)</text>
  <text x="585" y="110" text-anchor="middle" font-size="8" fill="#6b21a8">고도전문지식+실무</text>
  <text x="325" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">낮은 등급 ───────────────────── 높은 등급</text>
  <text x="325" y="160" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="bold">★ 기능사 → 산업기사 → 기사 → 기능장 → 기술사</text>
</svg>
<table>
  <tr><th>등급</th><th>학력 수준</th><th>검정기준</th></tr>
  <tr><td><strong>기능사</strong></td><td>공업고등학교</td><td>숙련기능 보유자</td></tr>
  <tr><td><strong>산업기사</strong></td><td>전문대학</td><td>기술 기초이론 지식 또는 숙련기능</td></tr>
  <tr><td><strong>기사</strong></td><td>4년제 대학</td><td>공학적 기술이론 지식</td></tr>
  <tr><td><strong>기능장</strong></td><td>-</td><td>★ <strong>최상급 숙련기능</strong> 보유</td></tr>
  <tr><td><strong>기술사</strong></td><td>-</td><td>★ <strong>고도 전문지식과 실무경험</strong> (단답형/구술형 시험)</td></tr>
</table>
<p>★ <strong>암기법:</strong> "기산기기기" (기능사, 산업기사, 기사, 기능장, 기술사)</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"기능장이 기술사보다 상위 등급이다" → <strong>틀림!</strong> 기술사가 최상위입니다.</li>
  <li>"기술사 시험은 필기+실기이다" → <strong>틀림!</strong> 기술사는 단답형+구술형 시험입니다.</li>
</ul>
</div>`},{title:`서비스분야 응시자격`,content:`<div class="exam-important">
<h4>서비스분야 주요 자격종목 응시자격</h4>
<table>
  <tr><th>자격종목</th><th>1급 응시</th><th>2급 응시</th><th>외국자격 인정</th></tr>
  <tr><td><strong>직업상담사</strong></td><td>2급 + 2년 경력</td><td>★ 제한 없음</td><td>불인정</td></tr>
  <tr><td><strong>사회조사분석사</strong></td><td>2급 + 2년 경력</td><td>★ 제한 없음</td><td>불인정</td></tr>
  <tr><td><strong>전자상거래관리사</strong></td><td>2급 + 2년 경력</td><td>★ 제한 없음</td><td>불인정</td></tr>
  <tr><td><strong>소비자전문상담사</strong></td><td>-</td><td>-</td><td>★ <strong>인정</strong></td></tr>
  <tr><td><strong>컨벤션기획사</strong></td><td>-</td><td>-</td><td>★ <strong>인정</strong></td></tr>
  <tr><td><strong>임상심리사</strong></td><td colspan="3">★ 응시자격이 <strong>까다로움</strong> (관련 학과·경력 요구)</td></tr>
  <tr><td><strong>국제의료관광코디네이터</strong></td><td colspan="3">★ <strong>1급/2급 구분 없음</strong></td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li>직업상담사·사회조사분석사·전자상거래관리사: <strong>외국자격 불인정</strong>, 2급은 제한 없음, 1급은 2급+2년</li>
  <li>소비자전문상담사·컨벤션기획사: <strong>외국자격 인정</strong></li>
  <li>국제의료관광코디네이터: 1급/2급 <strong>구분 없음</strong></li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"직업상담사는 외국자격이 인정된다" → <strong>틀림!</strong></li>
  <li>"국제의료관광코디네이터 1급 시험이 있다" → <strong>틀림!</strong> 급수 구분이 없습니다.</li>
</ul>
</div>`},{title:`기술기능분야 응시자격`,content:`<div class="exam-important">
<h4>기술·기능분야 응시자격 체계</h4>
<p>기술·기능분야 국가기술자격의 등급별 응시 자격 요건입니다.</p>
<table>
  <tr><th>등급</th><th>응시자격</th></tr>
  <tr><td><strong>기능사</strong></td><td>★ <strong>제한 없음</strong> (누구나 응시 가능)</td></tr>
  <tr><td><strong>산업기사</strong></td><td>기능사 + <strong>1년</strong> / 전문대 졸업</td></tr>
  <tr><td><strong>기사</strong></td><td>산업기사 + <strong>1년</strong> / 기능사 + <strong>3년</strong> / 4년대 졸업 / <strong>4년</strong> 실무</td></tr>
  <tr><td><strong>기능장</strong></td><td>산업기사 + <strong>5년</strong> / 기능사 + <strong>7년</strong> / <strong>9년</strong> 실무</td></tr>
  <tr><td><strong>기술사</strong></td><td>기사 + <strong>4년</strong> / 산업기사 + <strong>5년</strong> / 기능사 + <strong>7년</strong> / <strong>9년</strong> 실무</td></tr>
</table>
<h4>경력 기간 요약표</h4>
<table>
  <tr><th>보유 자격 →</th><th>기능사 보유</th><th>산업기사 보유</th><th>기사 보유</th><th>실무만</th></tr>
  <tr><td><strong>→ 산업기사</strong></td><td>+1년</td><td>-</td><td>-</td><td>-</td></tr>
  <tr><td><strong>→ 기사</strong></td><td>+3년</td><td>+1년</td><td>-</td><td>4년</td></tr>
  <tr><td><strong>→ 기능장</strong></td><td>+7년</td><td>+5년</td><td>-</td><td>9년</td></tr>
  <tr><td><strong>→ 기술사</strong></td><td>+7년</td><td>+5년</td><td>+4년</td><td>9년</td></tr>
</table>
<p>★ <strong>암기법 (기능사 기준):</strong> "1-3-7-7" (산업기사+1, 기사+3, 기능장+7, 기술사+7)</p>
<p>★ <strong>암기법 (산업기사 기준):</strong> "1-5-5" (기사+1, 기능장+5, 기술사+5)</p>
<p>★ <strong>암기법 (실무경력):</strong> 기능장과 기술사 모두 <strong>9년</strong></p>
<p>※ <strong>출제 함정:</strong> 경력 연수를 바꿔 출제하는 것이 가장 빈출됩니다. 특히 기능사+7년=기능장=기술사 동일하다는 점에 주의!</p>
</div>`},{title:`직무분야별 자격종목`,content:`<div class="exam-important">
<h4>직무분야별 자격종목 - 기술·기능분야</h4>
<p>국가기술자격의 <strong>직무분야별 분류번호</strong>와 주요 분야입니다.</p>
<table>
  <tr><th>분류번호</th><th>직무분야</th></tr>
  <tr><td><strong>14</strong></td><td>건설</td></tr>
  <tr><td><strong>16</strong></td><td>기계</td></tr>
  <tr><td><strong>17</strong></td><td>재료</td></tr>
  <tr><td><strong>18</strong></td><td>화학</td></tr>
  <tr><td><strong>20</strong></td><td>전기·전자</td></tr>
  <tr><td><strong>24</strong></td><td>농림어업</td></tr>
  <tr><td><strong>25</strong></td><td>안전관리</td></tr>
  <tr><td><strong>26</strong></td><td>환경·에너지</td></tr>
</table>
<p>★ <strong>암기법:</strong> "14건 16기 17재 18화 20전 24농 25안 26환" - 숫자와 분야를 짝지어 외우세요.</p>
<p>★ <strong>핵심 포인트:</strong> 분류번호가 연속되지 않으므로 번호-분야 매칭을 정확히 외워야 합니다.</p>
</div>`},{title:`실기시험만 실시 종목`,content:`<div class="exam-important">
<h4>실기시험만 실시하는 자격종목</h4>
<p>필기시험 없이 <strong>실기시험만</strong>으로 자격을 취득할 수 있는 종목들입니다.</p>
<table>
  <tr><th>분류</th><th>종목</th></tr>
  <tr><td><strong>023 사무</strong></td><td>★ <strong>한글속기</strong> 1급, 2급, 3급</td></tr>
  <tr><td><strong>141 건축</strong></td><td>거푸집 등 건축 관련 기능사</td></tr>
  <tr><td><strong>142 토목</strong></td><td>도화, 석공, 지도제작, 항공사진</td></tr>
  <tr><td><strong>172 판금제관새시</strong></td><td>금속재창호기능사</td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li><strong>한글속기</strong>는 사무분야(023)에서 유일하게 실기만 실시</li>
  <li>건축·토목·판금 분야의 <strong>현장 기능직</strong> 종목들이 실기만 해당</li>
</ul>
<p>※ <strong>출제 함정:</strong> "한글속기는 필기+실기 시험이다" → <strong>틀림!</strong> 실기시험만 실시합니다.</p>
</div>`},{title:`기업태별 검색 - 워크넷 채용정보`,content:`<div class="exam-important">
<h4>기업태별 검색 - 워크넷 채용정보</h4>
<h4>검색 조건 제한</h4>
<table>
  <tr><th>항목</th><th>제한</th></tr>
  <tr><td><strong>직종</strong></td><td>최대 <strong>10개</strong></td></tr>
  <tr><td><strong>지역</strong></td><td>최대 <strong>20개</strong></td></tr>
  <tr><td><strong>학력</strong></td><td>전체 ~ 박사 / 학력무관</td></tr>
</table>
<h4>기업형태 검색 가능 항목</h4>
<ul>
  <li>대기업, 공무원/공기업, 강소기업</li>
  <li>코스피/코스닥, 중견기업, 외국계</li>
  <li>일학습병행, 벤처, 청년친화, 가족친화인증</li>
</ul>
<h4>★ 없는 기업형태 (시험 빈출!)</h4>
<table>
  <tr><th>없는 항목</th><th>암기 포인트</th></tr>
  <tr><td><strong>중소기업 X</strong></td><td>★ 강소기업은 있지만 <strong>중소기업은 없음!</strong></td></tr>
  <tr><td><strong>금융권 X</strong></td><td>금융권 별도 검색 불가</td></tr>
  <tr><td><strong>환경친화 X</strong></td><td>가족친화는 있지만 <strong>환경친화는 없음!</strong></td></tr>
  <tr><td><strong>다문화 X</strong></td><td>다문화 관련 검색 불가</td></tr>
</table>
<h4>★ 없는 검색 항목</h4>
<ul>
  <li><strong>연령 X</strong> - 연령으로 검색 불가</li>
  <li><strong>소정근로시간 X</strong> - 근로시간으로 검색 불가</li>
</ul>
<p>★ <strong>암기법 (없는 것):</strong> "중금환다 연소" (중소기업, 금융권, 환경친화, 다문화, 연령, 소정근로시간)</p>
<p>※ <strong>출제 함정:</strong> "중소기업으로 검색할 수 있다" → <strong>틀림!</strong> 강소기업은 있지만 중소기업은 없습니다.</p>
</div>`},{title:`직업선호도검사 - 워크넷`,content:`<div class="exam-important">
<h4>직업선호도검사 - 워크넷</h4>
<p>워크넷에서 제공하는 직업선호도검사는 <strong>S형</strong>과 <strong>L형</strong> 두 가지 유형이 있습니다.</p>
<table>
  <tr><th>구분</th><th>S형 (간편형)</th><th>L형 (종합형)</th></tr>
  <tr><td><strong>구성</strong></td><td>흥미검사</td><td>흥미검사 + <strong>성격검사</strong> + <strong>생활사검사</strong></td></tr>
  <tr><td><strong>공통</strong></td><td colspan="2" style="text-align:center">★ <strong>흥미검사</strong> (S형, L형 모두 포함)</td></tr>
  <tr><td><strong>소요시간</strong></td><td>짧음</td><td>김</td></tr>
</table>
<h4>흥미검사 6유형 (Holland RIASEC)</h4>
<table>
  <tr><th>코드</th><th>유형</th><th>특징</th></tr>
  <tr><td><strong>R</strong></td><td>현실형 (Realistic)</td><td>기계, 도구, 신체활동 선호</td></tr>
  <tr><td><strong>I</strong></td><td>탐구형 (Investigative)</td><td>과학적 탐구, 분석 선호</td></tr>
  <tr><td><strong>A</strong></td><td>예술형 (Artistic)</td><td>창의적, 예술적 활동 선호</td></tr>
  <tr><td><strong>S</strong></td><td>사회형 (Social)</td><td>대인관계, 봉사 활동 선호</td></tr>
  <tr><td><strong>E</strong></td><td>진취형 (Enterprising)</td><td>리더십, 설득, 경영 선호</td></tr>
  <tr><td><strong>C</strong></td><td>관습형 (Conventional)</td><td>체계적, 조직적 활동 선호</td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li>S형 = <strong>흥미검사만</strong></li>
  <li>L형 = <strong>흥미 + 성격 + 생활사</strong></li>
  <li>공통 = <strong>흥미검사</strong></li>
</ul>
<p>※ <strong>출제 함정:</strong> "S형에는 성격검사가 포함된다" → <strong>틀림!</strong> S형은 흥미검사만, 성격검사는 L형에만 포함됩니다.</p>
</div>`},{title:`서비스분야 직무분야별 자격종목`,content:`<div class="exam-important">
<h4>서비스분야 직무분야별 자격종목</h4>
<table>
  <tr><th>분류번호</th><th>직무분야</th><th>비고</th></tr>
  <tr><td><strong>02</strong></td><td>경영·회계·사무</td><td>023 사무: 한글속기 (실기만)</td></tr>
  <tr><td><strong>04</strong></td><td>교육·자연·사회과학</td><td>-</td></tr>
  <tr><td><strong>07</strong></td><td>사회복지·종교</td><td>★ 071: <strong>직업상담사</strong> (필기+실기)</td></tr>
  <tr><td><strong>10</strong></td><td>영업·판매</td><td>-</td></tr>
  <tr><td><strong>12</strong></td><td>이용·숙박·여행·오락·스포츠</td><td>-</td></tr>
  <tr><td><strong>21</strong></td><td>정보통신</td><td>-</td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li><strong>직업상담사</strong>는 071 사회복지·종교 분야에 속함 (필기+실기)</li>
  <li><strong>한글속기</strong>는 023 사무 분야에 속함 (실기만)</li>
  <li>서비스분야 분류번호: 02, 04, 07, 10, 12, 21</li>
</ul>
<p>★ <strong>암기법 (분류번호):</strong> "02경 04교 07사 10영 12이 21정"</p>
<p>※ <strong>출제 함정:</strong> "직업상담사는 교육 분야(04)에 속한다" → <strong>틀림!</strong> 사회복지·종교 분야(07)에 속합니다.</p>
</div>`},{title:`청소년 직업흥미검사 - 워크넷`,content:`<div class="exam-important">
<h4>청소년 직업흥미검사 - 워크넷</h4>
<table>
  <tr><th>항목</th><th>내용</th></tr>
  <tr><td><strong>대상</strong></td><td>★ <strong>중·고등학생</strong></td></tr>
  <tr><td><strong>소요시간</strong></td><td>★ 약 <strong>20분</strong> (기존 30분에서 단축)</td></tr>
  <tr><td><strong>일반흥미</strong></td><td>6유형 (RIASEC: 현실형, 탐구형, 예술형, 사회형, 진취형, 관습형)</td></tr>
  <tr><td><strong>기초흥미</strong></td><td>★ <strong>14개</strong> 분야 (기존 13개에서 변경)</td></tr>
</table>
<p>★ <strong>핵심 숫자 정리:</strong></p>
<ul>
  <li>대상: <strong>중고등학생</strong> (초등학생 아님!)</li>
  <li>시간: <strong>20분</strong> (30분 아님!)</li>
  <li>일반흥미: <strong>6유형</strong> (RIASEC)</li>
  <li>기초흥미: <strong>14개</strong> 분야 (13개 아님!)</li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"소요시간은 약 30분이다" → <strong>틀림!</strong> 기존 30분에서 <strong>20분으로 단축</strong>되었습니다.</li>
  <li>"기초흥미는 13개 분야이다" → <strong>틀림!</strong> 기존 13개에서 <strong>14개로 변경</strong>되었습니다.</li>
  <li>"초등학생도 대상이다" → <strong>틀림!</strong> 중·고등학생만 대상입니다.</li>
</ul>
</div>`},{title:`최저임금 현황 및 유용한 사이트`,content:`<div class="exam-important">
<h4>최저임금 현황</h4>
<table>
  <tr><th>연도</th><th>시급</th><th>인상률</th></tr>
  <tr><td><strong>2023년</strong></td><td>9,620원</td><td>-</td></tr>
  <tr><td><strong>2024년</strong></td><td>★ <strong>9,860원</strong></td><td>★ <strong>2.5%</strong></td></tr>
</table>
<h4>유용한 직업·고용 관련 사이트</h4>
<table>
  <tr><th>사이트</th><th>운영기관</th><th>주요 내용</th></tr>
  <tr><td><strong>HRD-Net</strong></td><td>★ <strong>한국고용정보원</strong></td><td>직업훈련 정보</td></tr>
  <tr><td><strong>CareerNet</strong></td><td>★ <strong>한국직업능력연구원</strong></td><td>진로·직업 정보</td></tr>
  <tr><td><strong>WORLDJOB+</strong></td><td>★ <strong>한국산업인력공단</strong></td><td>해외취업 정보</td></tr>
  <tr><td><strong>공공데이터포털</strong></td><td>★ <strong>한국지능정보사회진흥원</strong></td><td>공공데이터 제공</td></tr>
</table>
<p>★ <strong>암기법 (사이트-기관 매칭):</strong></p>
<ul>
  <li>HRD = 고용정보원 (HRD = Human Resource Development = 고용)</li>
  <li>Career = 직업능력연구원 (Career = 진로)</li>
  <li>WORLD = 산업인력공단 (해외 = 산업인력)</li>
  <li>공공데이터 = 지능정보사회진흥원</li>
</ul>
<p>※ <strong>출제 함정:</strong> 사이트명과 운영기관을 바꿔 출제하는 패턴이 빈출됩니다. 특히 HRD-Net(고용정보원)과 CareerNet(직업능력연구원)을 혼동하지 마세요!</p>
</div>`}]},{title:`시험 핵심키워드 - 직업정보의 수집·분석`,topics:[{title:`가공 유의사항`,content:`<div class="exam-important">
<h4>직업정보 가공 시 유의사항</h4>
<p>수집·분석된 직업정보를 이용자에게 전달하기 위해 가공할 때의 유의사항입니다.</p>
<ul>
  <li>★ <strong>이용자가 이해 가능</strong>하게 가공</li>
  <li><strong>동기부여</strong>가 되도록 구성</li>
  <li><strong>최신 자료</strong>를 활용</li>
  <li>장점과 단점을 <strong>편견 없이</strong> 균형 있게 제시</li>
  <li><strong>객관성</strong> 유지</li>
  <li><strong>시각적 효과</strong>를 활용 (그래프, 도표 등)</li>
  <li><strong>적절한 형태</strong>로 가공 (대상에 맞게)</li>
</ul>
<p>★ <strong>암기법:</strong> "이동최장객시적" (이해 가능, 동기부여, 최신자료, 장단점 균형, 객관성, 시각적 효과, 적절한 형태)</p>
<p>※ <strong>출제 포인트:</strong> 가공·분석·수집·제공 각 단계의 유의사항을 구분하여 출제합니다. 특히 "시각적 효과"는 <strong>가공</strong> 단계의 유의사항입니다.</p>
</div>`},{title:`분석 유의사항`,content:`<div class="exam-important">
<h4>직업정보 분석 시 유의사항</h4>
<p>수집된 직업정보를 분석할 때의 유의사항입니다.</p>
<ul>
  <li>★ <strong>목적을 명확히</strong> 설정</li>
  <li><strong>다각적·종합적</strong>으로 분석 (한 면만 보지 않기)</li>
  <li><strong>전문적 시각</strong>으로 분석</li>
  <li><strong>객관성·정확성</strong> 확보</li>
  <li><strong>효율적 검색</strong> 방법 활용</li>
  <li>★ <strong>숫자로 표현 불가한 정보</strong>도 포함 (질적 정보)</li>
  <li><strong>정보원·제공원</strong>을 반드시 제시</li>
</ul>
<p>★ <strong>암기법:</strong> "목다전객효숫정" (목적 명확, 다각적, 전문적, 객관적, 효율적 검색, 숫자 불가 정보, 정보원 제시)</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"분석은 숫자로 표현 가능한 정보만 대상으로 한다" → <strong>틀림!</strong> 숫자로 표현 불가한 정보도 포함합니다.</li>
  <li>"정보원 제시는 가공 단계의 유의사항이다" → <strong>틀림!</strong> 분석 단계의 유의사항입니다.</li>
</ul>
</div>`},{title:`수집 유의사항`,content:`<div class="exam-important">
<h4>직업정보 수집 시 유의사항</h4>
<p>직업정보를 수집할 때의 유의사항입니다.</p>
<ul>
  <li>★ <strong>목표를 명확</strong>하게 설정</li>
  <li><strong>조직적·계획적</strong>으로 수집</li>
  <li><strong>적시에 제공</strong> (시의적절하게)</li>
  <li>★ <strong>오래된 자료는 폐기</strong></li>
  <li><strong>최신 자료로 보완</strong></li>
  <li><strong>도구 활용:</strong> 녹음·녹화·사진 등</li>
  <li>★ <strong>출처·저자·발행연도</strong>를 반드시 기입</li>
</ul>
<p>★ <strong>암기법:</strong> "목조적폐최도출" (목표 명확, 조직적, 적시 제공, 폐기, 최신 보완, 도구 활용, 출처 기입)</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"오래된 자료도 역사적 가치가 있으므로 보관한다" → <strong>틀림!</strong> 오래된 자료는 폐기합니다.</li>
  <li>"출처 기입은 제공 단계의 유의사항이다" → <strong>틀림!</strong> 수집 단계에서 출처·저자·발행연도를 기입합니다.</li>
</ul>
</div>`},{title:`처리과정 7단계`,content:`<div class="exam-important">
<h4>직업정보 처리과정 7단계</h4>
<p>직업정보의 처리과정은 7단계로 구성됩니다.</p>
<svg viewBox="0 0 700 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;margin:10px auto;display:block;">
  <rect x="5" y="30" width="85" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="47" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">1. 수집</text>
  <text x="100" y="58" font-size="18" fill="#666">→</text>
  <rect x="105" y="30" width="85" height="50" rx="8" fill="#c7d2fe" stroke="#6366f1" stroke-width="2"/>
  <text x="147" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#4338ca">2. 분석</text>
  <text x="200" y="58" font-size="18" fill="#666">→</text>
  <rect x="205" y="30" width="85" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="247" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">3. 가공</text>
  <text x="300" y="58" font-size="18" fill="#666">→</text>
  <rect x="305" y="30" width="85" height="50" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="347" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">4. 체계화</text>
  <text x="400" y="58" font-size="18" fill="#666">→</text>
  <rect x="405" y="30" width="85" height="50" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="447" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">5. 제공</text>
  <text x="500" y="58" font-size="18" fill="#666">→</text>
  <rect x="505" y="30" width="85" height="50" rx="8" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
  <text x="547" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#6b21a8">6. 축적</text>
  <text x="600" y="58" font-size="18" fill="#666">→</text>
  <rect x="605" y="30" width="85" height="50" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="647" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#be185d">7. 평가</text>
  <text x="350" y="115" text-anchor="middle" font-size="14" font-weight="bold" fill="#b91c1c">★ 암기법: "수분가체제축평"</text>
</svg>
<table>
  <tr><th>단계</th><th>내용</th></tr>
  <tr><td><strong>1. 수집</strong></td><td>직업정보를 다양한 방법으로 수집</td></tr>
  <tr><td><strong>2. 분석</strong></td><td>수집된 정보를 다각적으로 분석</td></tr>
  <tr><td><strong>3. 가공</strong></td><td>분석 결과를 이용자가 이해할 수 있도록 가공</td></tr>
  <tr><td><strong>4. 체계화</strong></td><td>가공된 정보를 체계적으로 분류·정리</td></tr>
  <tr><td><strong>5. 제공</strong></td><td>이용자에게 정보를 전달</td></tr>
  <tr><td><strong>6. 축적</strong></td><td>제공된 정보를 데이터베이스에 축적·보관</td></tr>
  <tr><td><strong>7. 평가</strong></td><td>전체 과정과 결과를 평가·피드백</td></tr>
</table>
<p>★ <strong>암기법:</strong> <strong>"수분가체제축평"</strong> (수집→분석→가공→체계화→제공→축적→평가)</p>
<p>※ <strong>출제 함정:</strong> 단계 순서를 바꿔서 출제합니다. 특히 "분석"과 "가공"의 순서, "축적"과 "평가"의 순서를 혼동하지 마세요!</p>
</div>`},{title:`제공 유의사항`,content:`<div class="exam-important">
<h4>직업정보 제공 시 유의사항</h4>
<p>직업정보를 이용자에게 제공할 때의 유의사항입니다.</p>
<ul>
  <li>★ <strong>진로발달단계·수준·이용목적</strong>을 고려</li>
  <li><strong>자발적 의사</strong>를 고려 (강제하지 않기)</li>
  <li><strong>다양한 정보 수집 노력</strong> (편향 방지)</li>
  <li><strong>태도·감정 표현에 대한 피드백</strong> 제공</li>
  <li><strong>흥미·적성에 부합</strong>하는 정보 제공</li>
  <li>★ <strong>전문용어 삼가</strong> (이용자 눈높이에 맞추기)</li>
  <li>★ <strong>개발연도 명시</strong> (정보의 최신성 판단 근거)</li>
</ul>
<p>★ <strong>암기법:</strong> "진자다태흥전개" (진로발달단계, 자발적 의사, 다양한 정보, 태도 피드백, 흥미적성 부합, 전문용어 삼가, 개발연도 명시)</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"전문용어를 많이 사용하여 전문성을 보여준다" → <strong>틀림!</strong> 전문용어는 삼가야 합니다.</li>
  <li>"개발연도는 중요하지 않다" → <strong>틀림!</strong> 반드시 개발연도를 명시해야 합니다.</li>
</ul>
</div>`},{title:`워크넷 용어`,content:`<div class="exam-important">
<h4>워크넷 주요 용어</h4>
<table>
  <tr><th>용어</th><th>정의</th></tr>
  <tr><td><strong>신규구인인원</strong></td><td>해당 기간 동안 새롭게 접수된 <strong>구인 건수</strong> (기업이 사람을 구하는 것)</td></tr>
  <tr><td><strong>신규구직건수</strong></td><td>해당 기간 동안 새롭게 접수된 <strong>구직 신청 건수</strong> (구직자가 일자리를 구하는 것)</td></tr>
  <tr><td><strong>취업건수</strong></td><td>구직 등록 후 실제로 <strong>취업한 건수</strong></td></tr>
  <tr><td><strong>취업률</strong></td><td>계산 공식에 의한 취업 성공 비율</td></tr>
</table>
<h4>취업률 계산공식</h4>
<p style="text-align:center;font-size:1.1em;"><strong>취업률 = (취업건수 / 신규구직건수) x 100</strong></p>
<p>★ <strong>핵심:</strong> 취업률의 분모는 <strong>신규구직건수</strong>입니다 (신규구인인원이 아님!).</p>
<p>※ <strong>출제 함정:</strong> "취업률 = 취업건수 / 신규구인인원" → <strong>틀림!</strong> 분모는 신규<strong>구직</strong>건수입니다.</p>
</div>`},{title:`워크넷 유의사항`,content:`<div class="exam-important">
<h4>워크넷 통계 이용 시 유의사항</h4>
<ul>
  <li><strong>입력 기관:</strong> 전국 고용센터 + 한국산업관리공단 + 시·군·구에서 입력한 데이터가 워크넷 DB에 집계</li>
  <li>★ <strong>워크넷 이용자만 대상:</strong> 워크넷을 통한 구인·구직만 집계되므로 <strong>전체 노동시장과 불일치</strong> 가능</li>
  <li>★ <strong>2006년 8월:</strong> 명칭 변경됨</li>
</ul>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li>워크넷 통계 = 워크넷 이용자만 대상이므로 <strong>전체 노동시장을 대표하지 않음</strong></li>
  <li>여러 기관에서 입력한 데이터가 워크넷 DB에 통합 집계</li>
</ul>
<p>※ <strong>출제 함정:</strong> "워크넷 통계는 전체 노동시장의 현황을 정확히 반영한다" → <strong>틀림!</strong> 워크넷 이용자만 대상이므로 전체 노동시장과 불일치할 수 있습니다.</p>
</div>`},{title:`취업자 정의`,content:`<div class="exam-important">
<h4>취업자의 정의</h4>
<h4>취업자에 해당하는 경우</h4>
<table>
  <tr><th>유형</th><th>기준</th></tr>
  <tr><td><strong>수입목적 근로자</strong></td><td>수입을 목적으로 ★ <strong>1시간 이상</strong> 일한 자</td></tr>
  <tr><td><strong>무급가족종사자</strong></td><td>가족 농장·사업체에서 ★ 주당 <strong>18시간 이상</strong> 근무</td></tr>
  <tr><td><strong>일시휴직자</strong></td><td>병·사고·연가·교육·노사분규 등으로 일시 휴직 중인 자</td></tr>
</table>
<h4>고용통계 기본 구조</h4>
<svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;margin:10px auto;display:block;">
  <rect x="10" y="10" width="580" height="40" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">15세 이상 인구</text>
  <rect x="10" y="65" width="350" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="185" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">경제활동인구 (취업자 + 실업자)</text>
  <rect x="380" y="65" width="210" height="40" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="485" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">비경제활동인구</text>
  <text x="300" y="135" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="bold">★ 15세 이상 인구 = 경제활동인구 + 비경제활동인구</text>
</svg>
<p>★ <strong>핵심 숫자:</strong></p>
<ul>
  <li>수입목적: <strong>1시간 이상</strong></li>
  <li>무급가족종사자: 주당 <strong>18시간 이상</strong></li>
  <li>기준 연령: <strong>15세 이상</strong></li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"무급가족종사자는 주당 15시간 이상이면 취업자이다" → <strong>틀림!</strong> 18시간 이상입니다.</li>
  <li>"일시휴직자는 실업자로 분류한다" → <strong>틀림!</strong> 일시휴직자도 취업자에 해당합니다.</li>
</ul>
</div>`},{title:`Andrus 평가기준`,content:`<div class="exam-important">
<h4>Andrus의 직업정보 평가기준</h4>
<h4>일반적 평가기준 (5W 방식)</h4>
<table>
  <tr><th>기준</th><th>평가 내용</th></tr>
  <tr><td><strong>언제 (When)</strong></td><td>정보가 언제 작성되었는가</td></tr>
  <tr><td><strong>어디서 (Where)</strong></td><td>정보가 어디서 생산되었는가</td></tr>
  <tr><td><strong>누가 (Who)</strong></td><td>누가 정보를 작성하였는가</td></tr>
  <tr><td><strong>어떤 목적 (Why)</strong></td><td>어떤 목적으로 작성되었는가</td></tr>
  <tr><td><strong>어떤 방식 (How)</strong></td><td>어떤 방식으로 수집·작성되었는가</td></tr>
</table>
<p>★ <strong>주의:</strong> 일반적 평가기준에 <strong>"가격"은 포함되지 않음!</strong></p>
<h4>효용의 관점 (4가지)</h4>
<table>
  <tr><th>효용</th><th>내용</th></tr>
  <tr><td><strong>형태효용 (Form)</strong></td><td>정보의 형태가 적절한가</td></tr>
  <tr><td><strong>시간효용 (Time)</strong></td><td>시의적절하게 제공되는가</td></tr>
  <tr><td><strong>장소효용 (Place)</strong></td><td>적절한 장소에서 제공되는가</td></tr>
  <tr><td><strong>소유효용 (Possession)</strong></td><td>필요한 사람이 소유할 수 있는가</td></tr>
</table>
<p>★ <strong>주의:</strong> 효용의 관점에 <strong>"가격효용"은 포함되지 않음!</strong></p>
<p>★ <strong>암기법 (일반적 기준):</strong> "언어누목방" (언제, 어디서, 누가, 목적, 방식) - 가격 X</p>
<p>★ <strong>암기법 (효용):</strong> "형시장소" (형태, 시간, 장소, 소유) - 가격효용 X</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"일반적 평가기준에 가격이 포함된다" → <strong>틀림!</strong></li>
  <li>"가격효용도 효용의 관점에 포함된다" → <strong>틀림!</strong></li>
  <li>★ 두 기준 모두에서 <strong>"가격"이 빠진다</strong>는 것이 핵심 출제 포인트입니다!</li>
</ul>
</div>`},{title:`질문문항 순서 배치 원칙`,content:`<div class="exam-important">
<h4>설문조사 질문문항 순서 배치 원칙</h4>
<h4>전반부에 배치</h4>
<table>
  <tr><th>문항 유형</th><th>배치 위치</th><th>이유</th></tr>
  <tr><td><strong>답변 용이한 질문</strong></td><td>★ <strong>전반부</strong></td><td>응답 부담 낮추기</td></tr>
  <tr><td><strong>계속 기억 필요한 질문</strong></td><td>★ <strong>전반부</strong></td><td>피로 전에 정확한 응답 확보</td></tr>
</table>
<h4>후반부에 배치</h4>
<table>
  <tr><th>문항 유형</th><th>배치 위치</th><th>이유</th></tr>
  <tr><td><strong>민감한 질문</strong></td><td>★ <strong>후반부</strong></td><td>라포 형성 후 답변 유도</td></tr>
  <tr><td><strong>개방형 질문</strong></td><td>★ <strong>후반부</strong></td><td>자유로운 서술은 후반에</td></tr>
</table>
<h4>기타 배치 원칙</h4>
<ul>
  <li><strong>논리적 순서</strong>를 따를 것</li>
  <li><strong>신뢰도 질문</strong>은 분리 배치 (같은 내용 질문을 떨어뜨려 배치)</li>
  <li><strong>동일 척도</strong>의 문항은 모아서 배치</li>
  <li><strong>길이·유형</strong>에 변화를 주어 단조로움 방지</li>
  <li><strong>여과질문</strong>을 적절히 배치 (해당 없는 응답자 거르기)</li>
  <li>★ <strong>특별한 질문</strong>은 일반 질문 <strong>뒤에</strong> 배치 (앞에 X)</li>
</ul>
<p>★ <strong>핵심 정리:</strong></p>
<ul>
  <li>전반부: 쉬운 질문, 기억 필요 질문</li>
  <li>후반부: 민감한 질문, 개방형 질문, 특별한 질문</li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"민감한 질문은 전반부에 배치한다" → <strong>틀림!</strong> 후반부입니다.</li>
  <li>"특별한 질문을 일반 질문 앞에 배치한다" → <strong>틀림!</strong> 일반 질문 <strong>뒤에</strong> 배치합니다.</li>
  <li>"개방형 질문은 전반부에 배치한다" → <strong>틀림!</strong> 후반부입니다.</li>
</ul>
</div>`}]}]},labor_market:{name:`노동시장론`,code:`labor_market`,color:`#F59E0B`,icon:`fa-solid fa-chart-line`,description:`노동시장 이론, 임금, 실업, 인적자본을 학습합니다.`,chapters:[{title:`노동시장 기초`,topics:[{title:`노동공급과 노동수요`,content:`<h4>노동공급</h4>
<p>개인이 시장에 제공하려는 노동의 양으로, 임금률과 여가의 기회비용에 의해 결정됩니다.</p>
<ul>
  <li><strong>대체효과:</strong> 임금 상승 → 여가의 기회비용 증가 → 노동공급 증가</li>
  <li><strong>소득효과:</strong> 임금 상승 → 소득 증가 → 여가 수요 증가 → 노동공급 감소</li>
  <li><strong>후방굴절 노동공급곡선:</strong> 일정 임금 수준 이후 소득효과 > 대체효과</li>
</ul>
<h4>노동수요</h4>
<p>기업이 고용하려는 노동의 양으로, 노동의 한계생산물가치에 의해 결정됩니다.</p>
<ul>
  <li><strong>노동의 한계생산물(MPL):</strong> 노동 1단위 추가 투입 시 추가되는 생산량</li>
  <li><strong>한계생산물가치(VMPL):</strong> MPL × 생산물 가격(P)</li>
  <li><strong>한계수입생산(MRPL):</strong> MPL × 한계수입(MR)</li>
  <li>이윤극대화 조건: MRPL = 임금(W)</li>
  <li><strong>파생수요:</strong> 노동수요는 생산물 수요에서 파생됨</li>
</ul>
<h4>균형임금</h4>
<p>노동공급곡선과 노동수요곡선이 교차하는 점에서 균형임금과 균형고용량이 결정됩니다.</p>`},{title:`노동시장의 유형`,content:`<h4>노동시장 구조별 유형</h4>
<table>
  <tr><th>시장 유형</th><th>노동수요</th><th>노동공급</th><th>임금 결정</th></tr>
  <tr><td><strong>완전경쟁</strong></td><td>다수 기업</td><td>다수 근로자</td><td>시장에서 결정 (W=VMPL=MRPL)</td></tr>
  <tr><td><strong>수요독점</strong></td><td>1개 기업</td><td>다수 근로자</td><td>기업이 결정 (W < MRPL, 착취 발생)</td></tr>
  <tr><td><strong>공급독점(노조)</strong></td><td>다수 기업</td><td>노조 독점</td><td>노조가 결정 (W > 경쟁임금)</td></tr>
  <tr><td><strong>쌍방독점</strong></td><td>수요독점</td><td>공급독점</td><td>협상으로 결정 (불확정적)</td></tr>
</table>
<h4>수요독점 (Monopsony) 상세</h4>
<ul>
  <li>노동의 한계비용(MLC) > 평균비용(임금) → <strong>MLC 곡선이 노동공급곡선 위</strong>에 위치</li>
  <li>이윤극대화: MRPL = MLC인 점에서 고용량 결정</li>
  <li>임금은 해당 고용량에 대응하는 노동공급곡선상의 점 → <strong>MRPL보다 낮은 임금</strong></li>
  <li><strong>착취:</strong> W < MRPL (노동의 한계생산가치보다 낮은 임금 지급)</li>
  <li>최저임금제 도입 시 오히려 <strong>고용이 증가</strong>할 수 있음 (경쟁시장과 차이)</li>
</ul>
<h4>노동조합의 임금 효과</h4>
<ul>
  <li><strong>임금 인상 방법:</strong>
    <ul>
      <li>노동공급 제한 (면허제, 자격요건 강화) → 공급곡선 좌측 이동</li>
      <li>노동수요 증가 유도 (생산성 향상, 정치적 로비) → 수요곡선 우측 이동</li>
      <li>단체교섭으로 최저임금 직접 설정</li>
    </ul>
  </li>
  <li><strong>노조의 임금 프리미엄:</strong> 노조 부문이 비노조 부문보다 10~25% 높은 임금</li>
</ul>`}]},{title:`임금이론`,topics:[{title:`한계생산성 이론과 임금격차`,content:`<h4>한계생산성 임금이론</h4>
<p>완전경쟁 노동시장에서 노동의 가격(임금)은 노동의 한계생산물가치(VMPL)에 의해 결정됩니다.</p>
<ul>
  <li>기업은 VMPL = W인 점까지 노동을 고용</li>
  <li>노동수요곡선 = VMPL 곡선 (우하향)</li>
</ul>
<h4>보상적 임금격차</h4>
<p>동질적 노동자 간에도 직업의 비금전적 특성 차이로 인해 임금격차가 발생합니다.</p>
<ul>
  <li>위험한 직업 → 높은 임금 (위험 프리미엄)</li>
  <li>열악한 근무환경 → 보상적 높은 임금</li>
  <li>애덤 스미스(Adam Smith)가 최초 제시</li>
</ul>
<h4>효율임금 이론</h4>
<p>기업이 시장균형 임금보다 높은 임금을 자발적으로 지급하는 이론입니다.</p>
<ul>
  <li>높은 임금 → 이직률 감소, 사기 진작</li>
  <li>역선택 방지: 우수 인재 유치</li>
  <li>도덕적 해이 방지: 태만 감소 (셔플리 모형)</li>
</ul>`},{title:`임금격차와 차별이론`,content:`<h4>임금격차의 원인</h4>
<ul>
  <li><strong>보상적 임금격차:</strong> 비금전적 직업 특성(위험, 환경)에 따른 차이 (애덤 스미스)</li>
  <li><strong>인적자본 차이:</strong> 교육, 훈련, 경험의 차이</li>
  <li><strong>노동시장 분단:</strong> 1차/2차 시장 간 이동 제한</li>
  <li><strong>차별:</strong> 동일한 생산성에도 불구하고 특성(성별, 인종)에 따른 임금 차이</li>
</ul>
<h4>노동시장 차별이론</h4>
<table>
  <tr><th>이론</th><th>학자</th><th>내용</th></tr>
  <tr><td><strong>개인적 편견 모형</strong></td><td>베커(Becker)</td><td>차별은 고용주/근로자/고객의 편견(taste)에서 비롯. 차별계수(d)만큼 추가 비용 인식</td></tr>
  <tr><td><strong>통계적 차별</strong></td><td>Phelps, Arrow</td><td>개인 정보 부족 → 집단의 평균적 특성으로 판단 (예: 여성의 이직률이 높다는 통계에 기반한 차별)</td></tr>
  <tr><td><strong>이중노동시장론</strong></td><td>Doeringer, Piore</td><td>1차(고임금, 안정)/2차(저임금, 불안정) 시장 간 구조적 장벽</td></tr>
  <tr><td><strong>직업분리</strong></td><td>Bergmann</td><td>특정 집단이 특정 직종에 밀집(과밀효과) → 해당 직종 임금 하락</td></tr>
</table>
<h4>남녀 임금격차 관련</h4>
<ul>
  <li><strong>동일노동 동일임금 원칙:</strong> 같은 직무에 대해 성별에 관계없이 동일 임금 지급</li>
  <li><strong>동일가치노동 동일임금:</strong> 다른 직무라도 동등한 가치의 노동이면 동일 임금</li>
  <li>오악사카(Oaxaca) 분해법: 임금격차를 생산성 차이와 차별로 분해하는 통계 기법</li>
</ul>`}]},{title:`실업이론`,topics:[{title:`실업의 유형과 측정`,content:`<h4>실업의 유형</h4>
<ul>
  <li><strong>마찰적 실업:</strong> 직업 탐색 과정에서 발생하는 일시적 실업 (자발적)</li>
  <li><strong>구조적 실업:</strong> 산업구조 변화, 기술변화로 인한 노동력 수요-공급 불일치</li>
  <li><strong>경기적(순환적) 실업:</strong> 경기침체로 인한 총수요 부족</li>
  <li><strong>계절적 실업:</strong> 계절적 요인에 따른 노동수요 변동</li>
</ul>
<h4>실업률 계산</h4>
<div class="formula-box">
  <p><strong>실업률 = (실업자 수 / 경제활동인구) × 100</strong></p>
  <p>경제활동인구 = 취업자 + 실업자</p>
  <p>경제활동참가율 = (경제활동인구 / 15세 이상 인구) × 100</p>
  <p>고용률 = (취업자 / 15세 이상 인구) × 100</p>
</div>
<h4>자연실업률</h4>
<ul>
  <li>마찰적 실업 + 구조적 실업으로 구성</li>
  <li>완전고용 상태에서도 존재하는 실업률</li>
  <li>인플레이션을 가속시키지 않는 실업률 (NAIRU)</li>
</ul>
<h4>실업 대책</h4>
<ul>
  <li>마찰적 실업: 직업정보 제공, 직업소개 활성화</li>
  <li>구조적 실업: 직업훈련, 재교육</li>
  <li>경기적 실업: 재정정책, 통화정책으로 총수요 확대</li>
</ul>`},{title:`필립스곡선과 오쿤의 법칙`,content:`<h4>필립스곡선 (Phillips Curve)</h4>
<p>영국의 경제학자 필립스(A.W. Phillips)가 발견한 <strong>임금상승률(물가상승률)과 실업률 간의 역(-)의 관계</strong>입니다.</p>
<h4>단기 필립스곡선</h4>
<ul>
  <li>실업률↓ → 물가상승률(인플레이션)↑ (역의 관계)</li>
  <li>실업률↑ → 물가상승률↓</li>
  <li>★ 정부는 실업과 인플레이션 사이에서 <strong>상충관계(trade-off)</strong>에 직면</li>
</ul>
<h4>장기 필립스곡선 (프리드먼-펠프스)</h4>
<ul>
  <li>장기적으로 필립스곡선은 자연실업률 수준에서 <strong>수직</strong></li>
  <li>기대인플레이션이 조정되면 실업률은 자연실업률로 회귀</li>
  <li>자연실업률 = <strong>NAIRU</strong> (Non-Accelerating Inflation Rate of Unemployment)</li>
  <li>장기적으로 실업률-인플레이션 상충관계 없음</li>
</ul>
<h4>스태그플레이션 (Stagflation)</h4>
<p>경기침체(높은 실업률)와 물가상승(인플레이션)이 <strong>동시</strong>에 발생하는 현상 (1970년대 석유파동)</p>
<h4>오쿤의 법칙 (Okun's Law)</h4>
<div class="formula-box">
  <p><strong>실업률이 자연실업률보다 1%p 높으면, 실질GDP가 잠재GDP보다 약 2~3% 낮다</strong></p>
  <p>(실질GDP - 잠재GDP) / 잠재GDP ≈ -2 × (실업률 - 자연실업률)</p>
</div>
<ul>
  <li>오쿤 계수: 약 2~3 (국가와 시기에 따라 다름)</li>
  <li>실업의 경제적 비용을 수량화하는 데 활용</li>
</ul>
<h4>베버리지 곡선 (Beveridge Curve)</h4>
<p><strong>실업률과 빈일자리율(구인율)</strong> 간의 역(-)의 관계를 나타내는 곡선</p>
<ul>
  <li>곡선이 원점에서 멀어지면 → 노동시장의 <strong>매칭 효율성 악화</strong> (구조적 실업 증가)</li>
  <li>곡선 위 이동: 경기침체 (실업↑, 빈일자리↓)</li>
  <li>곡선 아래 이동: 경기회복 (실업↓, 빈일자리↑)</li>
</ul>`}]},{title:`인적자본론`,topics:[{title:`인적자본과 노동이동`,content:`<h4>인적자본론 (Human Capital Theory)</h4>
<p>슐츠(T.W. Schultz)와 베커(G.S. Becker)가 발전시킨 이론으로, 교육/훈련을 투자로 봅니다.</p>
<h4>교육 투자의 분석</h4>
<ul>
  <li><strong>교육의 수익률:</strong> 교육 투자로 인한 미래 소득 증가분의 현재가치</li>
  <li><strong>직접비용:</strong> 학비, 교재비 등</li>
  <li><strong>간접비용(기회비용):</strong> 교육 기간 동안 포기한 소득</li>
  <li><strong>내부수익률법:</strong> 순현재가치 = 0이 되는 할인율</li>
</ul>
<h4>일반훈련 vs 특수훈련</h4>
<ul>
  <li><strong>일반훈련:</strong> 모든 기업에 적용 가능 → 근로자 부담</li>
  <li><strong>특수훈련:</strong> 해당 기업에서만 유용 → 기업 부담 (또는 분담)</li>
</ul>
<h4>노동이동</h4>
<ul>
  <li><strong>자발적 이동:</strong> 더 나은 기회를 위한 이직</li>
  <li><strong>비자발적 이동:</strong> 해고, 정리해고</li>
  <li>이동 결정 요인: 임금격차, 이동비용, 연령, 심리적 비용</li>
</ul>
<h4>이중노동시장론</h4>
<ul>
  <li><strong>1차 노동시장:</strong> 고임금, 고용안정, 승진기회, 양호한 근로조건</li>
  <li><strong>2차 노동시장:</strong> 저임금, 고용불안, 승진제한, 열악한 근로조건</li>
  <li>시장 간 이동이 제한적 (비경쟁 집단)</li>
</ul>`}]},{title:`시험 핵심키워드 - 임금의 제개념`,topics:[{title:`최저임금제도`,content:`<div class="exam-important">
<h4>★ 최저임금제도 핵심정리</h4>

<h4>1. 기대효과 (긍정적)</h4>
<ul>
  <li><strong>소득분배 개선:</strong> 저임금 근로자의 소득 보장</li>
  <li><strong>노동력 질적 향상:</strong> 적정 임금 보장으로 근로의욕 고취</li>
  <li><strong>기업 근대화 / 산업구조 고도화:</strong> 저임금에 의존하는 기업의 체질 개선 유도</li>
  <li><strong>공정경쟁 확보:</strong> 임금 덤핑 방지로 기업 간 공정한 경쟁 환경 조성</li>
  <li><strong>산업평화 유지:</strong> 노사 간 임금 분쟁 감소</li>
  <li><strong>유효수요 창출(경기활성화):</strong> 저소득층 소비 증가 → 내수 활성화</li>
  <li><strong>복지국가 실현:</strong> 사회 안전망 강화의 일환</li>
</ul>
<p>※ <strong>암기법:</strong> "소노기공산유복" (소득-노동력-기업-공정-산업-유효-복지)</p>

<h4>2. 부정적 효과</h4>
<ul>
  <li><strong>고용감소 / 실업증가:</strong> 인건비 부담 → 기업이 고용 축소</li>
  <li><strong>노동시장 내 차별:</strong> 청소년, 고령자 등 취약계층 고용 기피</li>
  <li><strong>지역/업종 간 왜곡:</strong> 지역별, 업종별 임금 수준 차이 무시</li>
  <li><strong>소득분배 역진적 효과:</strong> 실직으로 오히려 소득 감소 가능</li>
  <li><strong>노동력 질적 저하 / 생산성 저하:</strong> 능력과 무관한 일률적 임금</li>
</ul>

<h4>3. 최저임금제의 고용 효과</h4>
<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" style="max-width:500px;width:100%;background:#fff;border:1px solid #ddd;border-radius:8px">
  <defs>
    <marker id="arrow1" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker>
  </defs>
  <text x="250" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">최저임금제 고용효과 (완전경쟁시장)</text>
  <!-- axes -->
  <line x1="80" y1="300" x2="450" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrow1)"/>
  <line x1="80" y1="300" x2="80" y2="40" stroke="#333" stroke-width="2" marker-end="url(#arrow1)"/>
  <text x="460" y="305" font-size="12" fill="#333">고용량(L)</text>
  <text x="50" y="35" font-size="12" fill="#333">임금(W)</text>
  <!-- Supply curve (upward) -->
  <line x1="120" y1="270" x2="400" y2="90" stroke="#2563EB" stroke-width="2.5"/>
  <text x="405" y="85" font-size="12" fill="#2563EB" font-weight="bold">S(노동공급)</text>
  <!-- Demand curve (downward) -->
  <line x1="120" y1="90" x2="400" y2="270" stroke="#DC2626" stroke-width="2.5"/>
  <text x="405" y="275" font-size="12" fill="#DC2626" font-weight="bold">D(노동수요)</text>
  <!-- Equilibrium -->
  <circle cx="260" cy="180" r="4" fill="#333"/>
  <text x="265" y="175" font-size="11" fill="#333">E(균형점)</text>
  <!-- W0, L0 -->
  <line x1="80" y1="180" x2="260" y2="180" stroke="#999" stroke-dasharray="4"/>
  <text x="55" y="184" font-size="11" fill="#333">W0</text>
  <line x1="260" y1="180" x2="260" y2="300" stroke="#999" stroke-dasharray="4"/>
  <text x="255" y="315" font-size="11" fill="#333">L0</text>
  <!-- Minimum wage line WN -->
  <line x1="80" y1="140" x2="420" y2="140" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="425" y="144" font-size="11" fill="#F59E0B" font-weight="bold">WN(최저임금)</text>
  <text x="55" y="144" font-size="11" fill="#F59E0B">WN</text>
  <!-- L1 (demand at WN) -->
  <line x1="220" y1="140" x2="220" y2="300" stroke="#DC2626" stroke-dasharray="4"/>
  <text x="215" y="315" font-size="11" fill="#DC2626">L1</text>
  <!-- L2 (supply at WN) -->
  <line x1="300" y1="140" x2="300" y2="300" stroke="#2563EB" stroke-dasharray="4"/>
  <text x="295" y="315" font-size="11" fill="#2563EB">L2</text>
  <!-- Unemployment bracket -->
  <line x1="220" y1="130" x2="300" y2="130" stroke="#EF4444" stroke-width="2"/>
  <line x1="220" y1="125" x2="220" y2="135" stroke="#EF4444" stroke-width="2"/>
  <line x1="300" y1="125" x2="300" y2="135" stroke="#EF4444" stroke-width="2"/>
  <text x="235" y="122" font-size="11" fill="#EF4444" font-weight="bold">실업(L2-L1)</text>
  <!-- Job loss bracket -->
  <line x1="220" y1="290" x2="260" y2="290" stroke="#9333EA" stroke-width="2"/>
  <line x1="220" y1="285" x2="220" y2="295" stroke="#9333EA" stroke-width="2"/>
  <line x1="260" y1="285" x2="260" y2="295" stroke="#9333EA" stroke-width="2"/>
  <text x="222" y="282" font-size="10" fill="#9333EA">일자리상실</text>
</svg>

<table>
  <tr><th>구분</th><th>탄력적 노동수요곡선</th><th>탄력적 노동공급곡선</th></tr>
  <tr><td><strong>효과</strong></td><td>L0→L1 일자리 상실 (고용감소 큼)</td><td>임금 W0→WN 하락, 차별 경험</td></tr>
  <tr><td><strong>핵심</strong></td><td>수요곡선이 탄력적일수록 고용감소 큼</td><td>공급곡선이 탄력적일수록 임금하락 큼</td></tr>
</table>

<p style="color:#DC2626;font-weight:bold">※ 출제 함정 주의: "최저임금제가 청소년 취업을 촉진한다" → (X) 오히려 청소년 고용 감소 효과!</p>
<p>★ <strong>시험 포인트:</strong> 수요독점시장에서는 최저임금제 도입 시 오히려 고용이 증가할 수 있음 (완전경쟁시장과 반대)</p>
</div>`},{title:`보상적 임금격차`,content:`<div class="exam-important">
<h4>★ 보상적 임금격차 (균등화 임금격차)</h4>
<p>동질적인 노동자 간에도 직업의 비금전적 특성 차이로 인해 발생하는 임금격차. <strong>균등화 임금격차</strong>라고도 함 (애덤 스미스 최초 제시)</p>

<h4>보상적 임금격차의 발생 요인</h4>
<table>
  <tr><th>요인</th><th>내용</th><th>예시</th></tr>
  <tr><td><strong>고용 안정성 (금전적 위험)</strong></td><td>실직 위험이 높은 직업일수록 높은 임금</td><td>건설 일용직, 비정규직</td></tr>
  <tr><td><strong>작업 쾌적함 (비금전적 차이)</strong></td><td>작업환경이 열악할수록 높은 임금</td><td>광산, 유해물질 취급</td></tr>
  <tr><td><strong>교육훈련 비용</strong></td><td>인적자본 투자비용이 클수록 높은 임금</td><td>의사, 변호사</td></tr>
  <tr><td><strong>책임 정도</strong></td><td>직무 책임이 클수록 높은 임금</td><td>경영진, 기장</td></tr>
  <tr><td><strong>성공/실패 가능성</strong></td><td>성공 확률이 낮은 직업일수록 높은 보상</td><td>연예인, 프로운동선수</td></tr>
</table>
<p>※ <strong>암기법:</strong> "고작교책성" (고용-작업-교육-책임-성공)</p>

<h4>★ 고임금 → 고생산성의 원인 (효율임금 이론 연계)</h4>
<ul>
  <li><strong>충성심/귀속감 증대:</strong> 높은 임금에 대한 보답 심리 → 생산성 향상</li>
  <li><strong>직장상실 비용 증대 → 태만 방지:</strong> 해고 시 잃을 것이 큼 → 성실 근무 (셔플리 모형)</li>
  <li><strong>사직 감소 → 채용/훈련비 절감:</strong> 이직률 저하로 인건비 절약</li>
  <li><strong>대규모 사업장 유도:</strong> 규모의 경제 실현 가능</li>
  <li><strong>양질 노동자 고용:</strong> 역선택 방지, 우수 인력 유치 (인재풀 확대)</li>
</ul>
<p>※ <strong>암기법:</strong> "충직사대양" (충성심-직장상실-사직감소-대규모-양질)</p>

<p>★ <strong>시험 포인트:</strong> 보상적 임금격차는 비금전적 특성에 대한 보상이므로, 실질적으로 순편익(net advantage)은 균등화됨</p>
</div>`},{title:`임금체계 (연공급/직능급/직무급)`,content:`<div class="exam-important">
<h4>★ 3대 임금체계 비교</h4>

<svg viewBox="0 0 550 280" xmlns="http://www.w3.org/2000/svg" style="max-width:550px;width:100%;background:#fff;border:1px solid #ddd;border-radius:8px">
  <text x="275" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">임금체계 비교도</text>
  <!-- 연공급 box -->
  <rect x="20" y="50" width="160" height="210" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
  <text x="100" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#3B82F6">연공급</text>
  <text x="100" y="95" text-anchor="middle" font-size="10" fill="#555">기준: 근속연수</text>
  <text x="100" y="110" text-anchor="middle" font-size="10" fill="#555">= 속인급(屬人給)</text>
  <line x1="40" y1="120" x2="160" y2="120" stroke="#CBD5E1" stroke-width="1"/>
  <text x="30" y="138" font-size="9" fill="#333">장: 위계질서, 생활안정</text>
  <text x="30" y="153" font-size="9" fill="#333">   귀속의식, 장기고용</text>
  <text x="30" y="168" font-size="9" fill="#333">   교육훈련효과</text>
  <text x="30" y="183" font-size="9" fill="#333">   배치전환 유리</text>
  <line x1="40" y1="193" x2="160" y2="193" stroke="#CBD5E1" stroke-width="1"/>
  <text x="30" y="211" font-size="9" fill="#DC2626">단: 동일직무동일지급불가</text>
  <text x="30" y="226" font-size="9" fill="#DC2626">   무사안일, 경직적</text>
  <text x="30" y="241" font-size="9" fill="#DC2626">   전문인력확보 어려움</text>
  <!-- 직능급 box -->
  <rect x="195" y="50" width="160" height="210" rx="10" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
  <text x="275" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#16A34A">직능급</text>
  <text x="275" y="95" text-anchor="middle" font-size="10" fill="#555">기준: 직무수행능력</text>
  <text x="275" y="110" text-anchor="middle" font-size="10" fill="#555">동일능력 동일임금</text>
  <line x1="215" y1="120" x2="335" y2="120" stroke="#CBD5E1" stroke-width="1"/>
  <text x="205" y="138" font-size="9" fill="#333">장: 자기계발 동기유발</text>
  <text x="205" y="153" font-size="9" fill="#333">   보상 개별화</text>
  <text x="205" y="168" font-size="9" fill="#333">   노사공동체 의식</text>
  <text x="205" y="183" font-size="9" fill="#333">   생산직 불만 감소</text>
  <line x1="215" y1="193" x2="335" y2="193" stroke="#CBD5E1" stroke-width="1"/>
  <text x="205" y="211" font-size="9" fill="#DC2626">단: 평가 어려움</text>
  <text x="205" y="226" font-size="9" fill="#DC2626">   연공본위 우려</text>
  <text x="205" y="241" font-size="9" fill="#DC2626">   50세 이후 부적절</text>
  <!-- 직무급 box -->
  <rect x="370" y="50" width="160" height="210" rx="10" fill="#FFF7ED" stroke="#EA580C" stroke-width="2"/>
  <text x="450" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#EA580C">직무급</text>
  <text x="450" y="95" text-anchor="middle" font-size="10" fill="#555">기준: 노동의 양+질</text>
  <text x="450" y="110" text-anchor="middle" font-size="10" fill="#555">동일직무 동일임금</text>
  <line x1="390" y1="120" x2="510" y2="120" stroke="#CBD5E1" stroke-width="1"/>
  <text x="380" y="138" font-size="9" fill="#333">장: 임금배분 공평</text>
  <text x="380" y="153" font-size="9" fill="#333">   직무가치 객관화</text>
  <text x="380" y="168" font-size="9" fill="#333">   적재적소 배치</text>
  <text x="380" y="183" font-size="9" fill="#333">   노무비상승 방지</text>
  <line x1="390" y1="193" x2="510" y2="193" stroke="#CBD5E1" stroke-width="1"/>
  <text x="380" y="211" font-size="9" fill="#DC2626">단: 주관 개입 우려</text>
  <text x="380" y="226" font-size="9" fill="#DC2626">   기술변화 시 변경</text>
  <text x="380" y="241" font-size="9" fill="#DC2626">   유연성 저하</text>
</svg>

<h4>연공급 (年功給)</h4>
<ul>
  <li><strong>기준:</strong> 근속연수 (속인급)</li>
  <li><strong>특징:</strong> 보수적 기업에 적합, 연공서열 중시</li>
  <li><strong>장점:</strong> 위계질서 확립, 생활안정, 귀속의식 증대, 장기고용 촉진, 교육훈련 효과 극대화, 배치전환 유리</li>
  <li><strong>단점:</strong> 동일직무 동일지급 불가, 무사안일 조장, 경직적 임금인상 부담, 전문인력 확보 어려움</li>
</ul>

<h4>직능급 (職能給)</h4>
<ul>
  <li><strong>기준:</strong> 직무수행능력 → 동일능력 동일임금</li>
  <li><strong>장점:</strong> 자기계발 동기유발, 보상 개별화, 노사공동체 의식, 생산직 불만 감소</li>
  <li><strong>단점:</strong> 능력 평가 어려움, 연공본위 우려, 직종 간 차이, <strong>50세 이후 부적절</strong></li>
</ul>

<h4>직무급 (職務給)</h4>
<ul>
  <li><strong>기준:</strong> 노동의 양 + 질을 평가 → 동일직무 동일임금</li>
  <li><strong>장점:</strong> 임금배분 공평, 직무가치 객관화, 합리화, 적재적소 배치, 능력위주 인사, 노무비 상승 방지</li>
  <li><strong>단점:</strong> 주관 개입 우려, 기술변화 시 재평가 필요, 적정배치 어려움, 유연성 저하</li>
</ul>

<h4>★ 직무급의 전제조건</h4>
<ul>
  <li>객관적 직무평가가 선행되어야 함</li>
  <li>합리적 채용/평가 제도 확립</li>
  <li>고용 유동성 보장</li>
  <li>합리적 의식 (노사 모두)</li>
</ul>
<p>※ <strong>암기법:</strong> "객합고합" (객관적 평가-합리적 제도-고용유동-합리적 의식)</p>

<p>★ <strong>시험 포인트:</strong> 연공급=속인급=근속연수, 직능급=능력, 직무급=직무가치 → 이 대응 관계를 정확히 구분!</p>
</div>`},{title:`평균임금과 통상임금`,content:`<div class="exam-important">
<h4>★ 평균임금 vs 통상임금 비교 (최빈출!)</h4>

<table>
  <tr><th>구분</th><th>평균임금</th><th>통상임금</th></tr>
  <tr><td><strong>산정방법</strong></td><td>직전 3개월 임금총액 / 총일수</td><td>정기적 / 일률적으로 지급하기로 정한 임금</td></tr>
  <tr><td><strong>성격</strong></td><td>사후적 (실제 지급액 기준)</td><td>사전적 (정해진 금액 기준)</td></tr>
  <tr>
    <td><strong>적용 항목</strong></td>
    <td>
      퇴직금<br/>
      휴업수당<br/>
      연차유급휴가수당<br/>
      재해보상<br/>
      산업재해보상<br/>
      감급 제한액<br/>
      <strong>구직급여(실업급여)</strong>
    </td>
    <td>
      해고예고수당<br/>
      연장/야간/휴일 근로수당<br/>
      연차유급휴가수당<br/>
      출산전후 휴가급여
    </td>
  </tr>
</table>

<p style="color:#2563EB;font-weight:bold">※ 연차유급휴가수당은 평균임금과 통상임금 모두 적용 (둘 중 높은 금액)</p>

<h4>명목임금 vs 실질임금</h4>
<table>
  <tr><th>구분</th><th>명목임금</th><th>실질임금</th></tr>
  <tr><td><strong>정의</strong></td><td>화폐액으로 표시된 임금</td><td>물가 효과를 제거한 임금</td></tr>
  <tr><td><strong>특징</strong></td><td>물가상승률 고려 안 함</td><td>구매력 평가 가능</td></tr>
  <tr><td><strong>산식</strong></td><td>-</td><td>실질임금 = 명목임금 / 물가지수 x 100</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> "퇴휴연재산감구" → 평균임금 적용 7가지 암기!</p>
<p>★ <strong>시험 포인트:</strong> "해연출" → 통상임금 적용(해고예고수당, 연장야간휴일, 출산전후휴가) 암기!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 평균임금이 통상임금보다 낮은 경우 통상임금을 평균임금으로 함</p>
</div>`},{title:`임금격차의 경쟁적 요인`,content:`<div class="exam-important">
<h4>★ 임금격차의 경쟁적 요인</h4>
<p>경쟁적 노동시장에서 임금격차가 발생하는 원인들입니다.</p>

<h4>주요 요인</h4>
<table>
  <tr><th>요인</th><th>내용</th></tr>
  <tr><td><strong>인적자본량</strong></td><td>교육, 훈련, 경험의 차이. 특히 대기업은 <strong>기업특수적 인적자본</strong>이 많아 임금격차 발생</td></tr>
  <tr><td><strong>근로자 생산성 격차</strong></td><td>동일 직무에서도 개인별 생산성 차이 존재</td></tr>
  <tr><td><strong>보상적 임금격차</strong></td><td>비금전적 직업 특성(위험, 환경 등)에 대한 보상</td></tr>
  <tr><td><strong>효율성 임금정책</strong></td><td>기업이 자발적으로 시장균형보다 높은 임금 지급 → 생산성 향상 유도</td></tr>
  <tr><td><strong>시장의 단기적 불균형</strong></td><td>수요-공급 일시적 불일치로 인한 격차</td></tr>
</table>
<p>※ <strong>암기법:</strong> "인근보효시" (인적자본-근로자생산성-보상적-효율성-시장불균형)</p>

<h4>임금격차의 비경쟁적 요인</h4>
<ul>
  <li><strong>통계정보 활용의 부작용:</strong> 집단 평균 특성으로 개인을 판단</li>
  <li><strong>성별/인종/지역별 불완전정보:</strong> 편견이나 고정관념에 기반한 차별적 임금 결정</li>
  <li><strong>노동시장 분단:</strong> 1차/2차 시장 간 이동 제한</li>
  <li><strong>노동조합의 존재:</strong> 조직/비조직 부문 간 격차</li>
</ul>

<p>★ <strong>시험 포인트:</strong> 경쟁적 요인은 생산성/능력 차이에 근거, 비경쟁적 요인은 차별/제도적 장벽에 근거 → 구분 필수!</p>
<p style="color:#DC2626;font-weight:bold">※ 통계적 차별(Statistical Discrimination)은 개인 정보 부족 시 집단 특성을 기준으로 판단하는 것으로 비경쟁적 요인에 해당</p>
</div>`},{title:`임금형태별 비교`,content:`<div class="exam-important">
<h4>★ 임금형태 3대 유형 비교</h4>

<table>
  <tr><th>구분</th><th>시간급제</th><th>능률급제</th><th>연봉제</th></tr>
  <tr><td><strong>기준</strong></td><td>근무시간</td><td>성과/생산량</td><td>1년 단위 성과계약</td></tr>
  <tr><td><strong>종류</strong></td><td>시급, 일급, 주급, 월급, 연봉</td><td>상여급, 성과급, 할증급</td><td>개별 연봉계약</td></tr>
  <tr>
    <td><strong>장점</strong></td>
    <td>확정임금 보장<br/>계산 간편<br/>품질 향상</td>
    <td>동기유발<br/>생산성 향상</td>
    <td>능력주의 정착<br/>전문성 강화<br/>인재 기용<br/>효율성 증대</td>
  </tr>
  <tr>
    <td><strong>단점</strong></td>
    <td>능률 저하 우려</td>
    <td>화합 불리<br/>품질 조악</td>
    <td>공정성 시비<br/>사기 저하<br/>과도한 경쟁심</td>
  </tr>
</table>

<h4>능률급제의 전제조건</h4>
<ul>
  <li>생산량의 <strong>객관적 측정</strong>이 가능해야 함</li>
  <li>노력과 생산량 간 <strong>명확한 관계</strong>가 있어야 함</li>
  <li><strong>직무 표준화</strong>가 되어 있어야 함</li>
  <li>질(Quality)보다 <strong>양(Quantity)</strong>이 중요한 직무</li>
  <li><strong>감독이 철저</strong>히 이루어져야 함</li>
</ul>
<p>※ <strong>암기법:</strong> "객명직양감" (객관측정-명확관계-직무표준화-양중시-감독철저)</p>

<h4>연봉제의 전제조건</h4>
<ul>
  <li><strong>직무분석</strong>이 체계적으로 이루어져야 함</li>
  <li><strong>명확한 인사고과</strong> 제도가 확립되어야 함</li>
  <li><strong>목표관리제도(MBO)</strong>가 운영되어야 함</li>
</ul>
<p>※ <strong>암기법:</strong> "직명목" (직무분석-명확인사고과-목표관리)</p>

<p>★ <strong>시험 포인트:</strong> 시간급은 "품질 향상"이 장점, 능률급은 "품질 조악"이 단점 → 반대 개념으로 자주 출제!</p>
</div>`},{title:`임금이론`,content:`<div class="exam-important">
<h4>★ 임금의 의의</h4>
<ul>
  <li><strong>소득의 원천:</strong> 근로자 가계소득의 주요 원천</li>
  <li><strong>사회적 신분 기준:</strong> 사회경제적 지위를 나타내는 척도</li>
  <li><strong>인적자원 배분:</strong> 노동시장에서 인력 배분 기능 수행</li>
</ul>

<h4>임금의 법적 성격</h4>
<table>
  <tr><th>학설</th><th>내용</th><th>해당 임금</th></tr>
  <tr><td><strong>노동대가설</strong></td><td>실제 제공한 노동에 대한 대가</td><td>직무수당</td></tr>
  <tr><td><strong>노동력대가설</strong></td><td>노동력 자체(제공여부 무관)에 대한 대가</td><td>휴업수당, 가족수당</td></tr>
  <tr><td><strong>임금이분설</strong></td><td>보장적 부분 + 교환적 부분으로 구분</td><td>보장적(생활보장) + 교환적(노동대가)</td></tr>
</table>

<h4>★ 주요 임금이론 변천</h4>
<table>
  <tr><th>이론</th><th>학자</th><th>핵심 내용</th></tr>
  <tr><td><strong>임금생존비설</strong></td><td>스미스, 리카도, 맬더스</td><td>임금은 생존수준으로 귀결. 맬더스 인구법칙, <strong>임금철칙설</strong>이라고도 함</td></tr>
  <tr><td><strong>임금기금설</strong></td><td>밀(Mill)</td><td>임금총액은 기금(Fund)으로 고정. 임금 = 임금기금/노동자수</td></tr>
  <tr><td><strong>노동가치설</strong></td><td>마르크스</td><td>노동이 가치의 원천. 자본가에 의한 <strong>노동착취</strong> 비판</td></tr>
  <tr><td><strong>한계생산력설</strong></td><td>클라크</td><td>임금은 노동의 한계생산물에 의해 결정 (수요-공급)</td></tr>
  <tr><td><strong>임금교섭력설</strong></td><td>웹부부 등</td><td>노사 간 <strong>교섭력의 강도</strong>에 따라 임금 결정</td></tr>
</table>
<p>※ <strong>암기법 (시대순):</strong> "생기노한교" (생존비-기금-노동가치-한계생산-교섭력)</p>

<p>★ <strong>시험 포인트:</strong> 임금생존비설의 "임금철칙설" 명칭, 임금기금설의 "기금 고정" 개념 → 용어 매칭 문제 빈출!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 한계생산력설은 "노동수요" 측면의 이론이지, 노동공급까지 설명하지는 않음</p>
</div>`},{title:`임금의 구성`,content:`<div class="exam-important">
<h4>★ 임금관리의 3요소</h4>
<table>
  <tr><th>요소</th><th>핵심가치</th><th>내용</th></tr>
  <tr><td><strong>임금수준 관리</strong></td><td>적정성</td><td>기업의 지불능력, 생계비, 시장임금 등 고려하여 적정 수준 결정</td></tr>
  <tr><td><strong>임금체계 관리</strong></td><td>공정성</td><td>연공급/직능급/직무급 등 임금결정 기준의 공정한 설계</td></tr>
  <tr><td><strong>임금형태 관리</strong></td><td>합리성</td><td>시간급/능률급/연봉제 등 지급 방식의 합리적 운영</td></tr>
</table>
<p>※ <strong>암기법:</strong> "수체형 → 적공합" (임금수준-체계-형태 → 적정성-공정성-합리성)</p>

<h4>임금의 구성 체계</h4>
<table>
  <tr><th>구분</th><th>세부 항목</th><th>성격</th></tr>
  <tr><td rowspan="2"><strong>고정적 급여</strong></td><td>기본급</td><td>기본 생활 보장</td></tr>
  <tr><td>제수당 (직무수당, 직책수당 등)</td><td>직무/직책에 따른 추가 보상</td></tr>
  <tr><td><strong>변동적 급여</strong></td><td>초과근무수당 (연장, 야간, 휴일)</td><td>추가 근로에 대한 보상</td></tr>
  <tr><td><strong>상여금</strong></td><td>특별급여 (성과급, 보너스 등)</td><td>성과/업적에 대한 보상</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 임금관리의 3요소(수준-체계-형태)와 각각의 핵심가치(적정성-공정성-합리성)의 매칭이 빈출!</p>
</div>`},{title:`의중임금`,content:`<div class="exam-important">
<h4>★ 의중임금 (Reservation Wage)</h4>
<p>근로자가 노동시장에 참가하기 위해 최소한으로 요구하는 임금 수준</p>

<h4>다양한 명칭</h4>
<ul>
  <li><strong>보상요구임금</strong> (Asking Wage)</li>
  <li><strong>유보임금</strong> (Reservation Wage)</li>
  <li><strong>희망임금</strong></li>
  <li><strong>눈높이임금</strong></li>
</ul>

<h4>의중임금의 핵심 원리</h4>
<ul>
  <li><strong>효용극대화 시:</strong> 의중임금 = 제시임금 → 노동시장 참가 결정</li>
  <li><strong>의중임금 > 제시임금:</strong> 비경제활동인구 (노동시장 불참)</li>
  <li><strong>의중임금 < 제시임금:</strong> 경제활동인구 (노동시장 참가)</li>
</ul>

<h4>★ 전업주부의 사례 (빈출)</h4>
<table>
  <tr><th>상황</th><th>결과</th></tr>
  <tr><td>의중임금 > 실제(시장)임금</td><td>경제활동에 참가하지 않음 → <strong>경제활동참가율 감소</strong></td></tr>
  <tr><td colspan="2">의중임금이 높을수록 → <strong>실업기간 연장</strong> (더 좋은 일자리를 찾으므로)</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 의중임금이 높아지면 → 경제활동참가율 감소, 실업기간 연장 → 두 가지 효과 모두 암기!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 의중임금은 "최저" 요구 수준이지, 반드시 받고 싶은 "최고" 임금이 아님</p>
</div>`},{title:`생산성 임금제`,content:`<div class="exam-important">
<h4>★ 생산성 임금제</h4>
<p>임금인상률을 <strong>생산성 증가율에 연계</strong>하여 결정하는 제도</p>

<h4>핵심 공식</h4>
<table>
  <tr><th>공식</th><th>내용</th></tr>
  <tr><td><strong>명목생산성 증가율</strong></td><td>= 실질생산성 증가율 + 물가상승률</td></tr>
  <tr><td><strong>명목임금 인상률</strong></td><td>= 명목생산성 증가율에 연동</td></tr>
</table>

<h4>★ 계산 예시 (시험 계산문제 빈출)</h4>
<table>
  <tr><th>항목</th><th>수치</th></tr>
  <tr><td>실질생산성 증가율</td><td>5%</td></tr>
  <tr><td>물가상승률</td><td>2%</td></tr>
  <tr><td><strong>명목생산성 증가율</strong></td><td><strong>5% + 2% = 7%</strong></td></tr>
  <tr><td><strong>명목임금 인상률</strong></td><td><strong>7% (명목생산성 증가율과 동일)</strong></td></tr>
</table>

<h4>생산성 임금제의 의의</h4>
<ul>
  <li>임금인상과 물가안정을 동시에 추구</li>
  <li>생산성 향상에 대한 공정한 보상 원칙</li>
  <li>인플레이션 억제 효과 기대</li>
</ul>

<p>★ <strong>시험 포인트:</strong> 공식을 반드시 암기! "명목 = 실질 + 물가" 이 한 줄이면 계산문제 해결!</p>
<p>※ 실질임금이 오르려면 명목임금 인상률 > 물가상승률이어야 함</p>
</div>`}]},{title:`시험 핵심키워드 - 실업의 제개념`,topics:[{title:`마찰적 실업`,content:`<div class="exam-important">
<h4>★ 마찰적 실업 (Frictional Unemployment)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>원인:</strong> 직업정보 부족으로 인한 일시적 발생</li>
  <li><strong>성격:</strong> <strong>자발적 실업</strong> (스스로 이직/구직하는 과정)</li>
  <li><strong>별칭:</strong> <strong>탐색적 실업(Search Unemployment)</strong></li>
  <li><strong>사회적 비용:</strong> 실업 유형 중 <strong>가장 적음</strong></li>
  <li><strong>특징:</strong> 완전고용 상태에서도 존재 (자연실업률의 구성요소)</li>
</ul>

<h4>마찰적 실업의 대책</h4>
<table>
  <tr><th>대책</th><th>내용</th></tr>
  <tr><td><strong>전산망 구축</strong></td><td>구인-구직 매칭 시스템 전산화</td></tr>
  <tr><td><strong>정보시스템 확충</strong></td><td>노동시장 정보 데이터베이스 확대</td></tr>
  <tr><td><strong>직업알선기관 확대</strong></td><td>공공/민간 직업소개소 활성화</td></tr>
  <tr><td><strong>고용자료 제공</strong></td><td>체계적 구인정보 배포</td></tr>
  <tr><td><strong>퇴직예고제</strong></td><td>사전 예고로 구직 준비기간 확보</td></tr>
  <tr><td><strong>구직자 세일즈</strong></td><td>구직자의 적극적 자기홍보 지원</td></tr>
</table>
<p>※ <strong>암기법:</strong> "전정직고퇴구" (전산망-정보시스템-직업알선-고용자료-퇴직예고-구직자세일즈)</p>

<p>★ <strong>시험 포인트:</strong> 마찰적 실업 = 자발적 = 탐색적 = 사회적 비용 최소 → 이 4가지 키워드 연결 필수!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 마찰적 실업은 "정보 부족"이 원인이지, "기술 부족"이 아님 (기술 부족 = 구조적 실업)</p>
</div>`},{title:`구조적 실업`,content:`<div class="exam-important">
<h4>★ 구조적 실업 (Structural Unemployment)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>원인:</strong> 경제구조 변화, 기술 부족으로 발생</li>
  <li><strong>특징:</strong> 지역/산업 간 노동력 수급 불균형</li>
  <li><strong>효율성 임금(고임금) 지불 시</strong>에도 발생 가능</li>
  <li><strong>기간:</strong> 경기적 실업보다 <strong>장기적</strong></li>
  <li>자연실업률의 구성요소 (마찰적 실업과 함께)</li>
</ul>

<h4>구조적 실업 vs 마찰적 실업 비교</h4>
<table>
  <tr><th>구분</th><th>마찰적 실업</th><th>구조적 실업</th></tr>
  <tr><td><strong>원인</strong></td><td>정보 부족</td><td>기술/구조 변화</td></tr>
  <tr><td><strong>기간</strong></td><td>단기적</td><td>장기적</td></tr>
  <tr><td><strong>성격</strong></td><td>자발적</td><td>비자발적</td></tr>
  <tr><td><strong>사회적 비용</strong></td><td>가장 적음</td><td>보다 큼</td></tr>
  <tr><td><strong>대책</strong></td><td>정보 제공</td><td>재훈련/이주 지원</td></tr>
</table>

<h4>구조적 실업의 대책</h4>
<ul>
  <li><strong>인력수급정책:</strong> 인력 수요 예측에 기반한 정책 수립</li>
  <li><strong>재훈련(직업훈련):</strong> 새로운 기술/직종에 대한 교육 지원</li>
  <li><strong>지역이주금 지원:</strong> 일자리가 있는 지역으로의 이동 지원</li>
  <li><strong>정보 제공:</strong> 산업별, 직종별 노동시장 정보 제공</li>
  <li><strong>노동력 수급 예측:</strong> 중장기 인력 수요-공급 전망</li>
</ul>
<p>※ <strong>암기법:</strong> "인재지정노" (인력수급-재훈련-지역이주-정보제공-노동력예측)</p>

<p>★ <strong>시험 포인트:</strong> 효율성임금(고임금)이 구조적 실업을 야기할 수 있다는 점 → 임금이론과 연계 출제!</p>
</div>`},{title:`실망노동자효과`,content:`<div class="exam-important">
<h4>★ 실망노동자효과 (Discouraged Worker Effect)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>정의:</strong> 경기침체로 구직활동을 <strong>단념</strong>하여 <strong>비경제활동인구로 전락</strong>하는 현상</li>
  <li><strong>결과:</strong> 실업자 수가 실제보다 <strong>과소평가</strong>됨</li>
  <li><strong>이유:</strong> 구직활동을 하지 않으면 "실업자"로 분류되지 않음 (비경제활동인구로 분류)</li>
</ul>

<h4>★ 실망노동자효과 vs 부가노동자효과 비교 (핵심!)</h4>
<table>
  <tr><th>구분</th><th>실망노동자효과</th><th>부가노동자효과</th></tr>
  <tr><td><strong>방향</strong></td><td>경제활동인구 → 비경제활동인구</td><td>비경제활동인구 → 경제활동인구</td></tr>
  <tr><td><strong>원인</strong></td><td>구직 단념 (취업 포기)</td><td>가구주 실직으로 생계 위협</td></tr>
  <tr><td><strong>실업자 수</strong></td><td><strong>과소평가</strong></td><td><strong>과대평가</strong></td></tr>
  <tr><td><strong>경활참가율</strong></td><td>감소</td><td>증가</td></tr>
  <tr><td><strong>대상</strong></td><td>구직 포기 본인</td><td>주부, 학생 등 2차 노동력</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 실망 = 과소평가, 부가 = 과대평가 → 반드시 쌍으로 암기!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 실망노동자는 "실업자"가 아니라 "비경제활동인구"로 분류됨!</p>
</div>`},{title:`필립스 곡선`,content:`<div class="exam-important">
<h4>★ 필립스 곡선 (Phillips Curve)</h4>

<svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;background:#fff;border:1px solid #ddd;border-radius:8px">
  <defs>
    <marker id="arrow2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker>
  </defs>
  <text x="240" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">필립스 곡선</text>
  <!-- Axes -->
  <line x1="80" y1="300" x2="430" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrow2)"/>
  <line x1="80" y1="300" x2="80" y2="40" stroke="#333" stroke-width="2" marker-end="url(#arrow2)"/>
  <text x="440" y="305" font-size="11" fill="#333">실업률(u)</text>
  <text x="25" y="35" font-size="11" fill="#333">인플레이션율(π)</text>
  <!-- Short-run Phillips Curve -->
  <path d="M 120 80 Q 180 160 250 210 Q 320 250 400 270" stroke="#2563EB" stroke-width="2.5" fill="none"/>
  <text x="405" y="260" font-size="11" fill="#2563EB" font-weight="bold">단기PC</text>
  <!-- Long-run Phillips Curve (vertical) -->
  <line x1="250" y1="60" x2="250" y2="290" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="255" y="55" font-size="11" fill="#DC2626" font-weight="bold">장기PC(수직)</text>
  <!-- Natural rate label -->
  <text x="235" y="318" font-size="11" fill="#DC2626">u*(자연실업률)</text>
  <!-- Points -->
  <circle cx="170" cy="130" r="5" fill="#F59E0B"/>
  <text x="115" y="125" font-size="10" fill="#F59E0B">A: 저실업/고인플레</text>
  <circle cx="330" cy="245" r="5" fill="#16A34A"/>
  <text x="335" y="240" font-size="10" fill="#16A34A">B: 고실업/저인플레</text>
  <!-- Trade-off arrow -->
  <path d="M 180 140 C 220 180 280 220 320 240" stroke="#999" stroke-width="1.5" fill="none" stroke-dasharray="3" marker-end="url(#arrow2)"/>
  <text x="220" y="200" font-size="10" fill="#999" transform="rotate(-30,220,200)">상충관계</text>
</svg>

<h4>핵심 내용</h4>
<ul>
  <li><strong>인플레이션율과 실업률 간 역의 상관관계(상충관계)</strong></li>
  <li>낮은 인플레이션 + 낮은 실업 → <strong>동시 달성 불가</strong></li>
  <li><strong>총수요 증가:</strong> 실업률↓ + 인플레이션↑</li>
  <li><strong>총수요 감소:</strong> 인플레이션↓ + 실업률↑</li>
</ul>

<h4>단기 vs 장기 필립스곡선</h4>
<table>
  <tr><th>구분</th><th>단기</th><th>장기</th></tr>
  <tr><td><strong>형태</strong></td><td>우하향 곡선</td><td>자연실업률에서 <strong>수직</strong></td></tr>
  <tr><td><strong>상충관계</strong></td><td>존재 (trade-off)</td><td>존재하지 않음</td></tr>
  <tr><td><strong>학자</strong></td><td>필립스(Phillips)</td><td>프리드먼(Friedman), 펠프스(Phelps)</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 단기PC는 "우하향", 장기PC는 "수직" → 형태 구분 필수! 장기PC 학자(프리드먼-펠프스) 빈출!</p>
</div>`},{title:`경기적 실업`,content:`<div class="exam-important">
<h4>★ 경기적 실업 (Cyclical Unemployment)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>별칭:</strong> <strong>수요부족실업</strong>, 불경기 실업</li>
  <li><strong>원인:</strong> 총수요 감소 → 노동총수요 감소</li>
  <li><strong>성격:</strong> 비자발적 실업 (케인즈 중시)</li>
  <li><strong>특징:</strong> 경기순환에 따라 발생, 경기 회복 시 해소</li>
</ul>

<h4>경기적 실업의 대책 (총수요 확대 정책)</h4>
<table>
  <tr><th>대책</th><th>내용</th></tr>
  <tr><td><strong>재정금융정책</strong></td><td>총수요 증대를 위한 확장적 재정/통화 정책</td></tr>
  <tr><td><strong>세율 인하</strong></td><td>가처분소득 증가 → 소비 촉진</td></tr>
  <tr><td><strong>공공사업</strong></td><td>정부 주도의 대규모 사업으로 직접 고용 창출</td></tr>
  <tr><td><strong>근무제도 변경</strong></td><td>워크셰어링(일자리 나누기) 등 고용 유지 방안</td></tr>
</table>
<p>※ <strong>암기법:</strong> "재세공근" (재정금융-세율인하-공공사업-근무제도변경)</p>

<h4>★ 실업 유형별 대책 비교 (종합)</h4>
<table>
  <tr><th>실업 유형</th><th>원인</th><th>대책</th></tr>
  <tr><td><strong>마찰적</strong></td><td>정보 부족</td><td>정보 제공, 직업알선</td></tr>
  <tr><td><strong>구조적</strong></td><td>기술/구조 변화</td><td>재훈련, 이주 지원</td></tr>
  <tr><td><strong>경기적</strong></td><td>총수요 부족</td><td>재정금융정책, 공공사업</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 경기적 실업 = 수요부족실업 = 케인즈 실업 → 대책은 "총수요 증대" 키워드 연결!</p>
</div>`},{title:`실업의 계측`,content:`<div class="exam-important">
<h4>★ 실업의 계측</h4>
<p><strong>통계청 경제활동인구조사</strong>에 의해 측정</p>

<h4>핵심 분류</h4>
<ul>
  <li><strong>구직단념자:</strong> 비경제활동인구 (실업자에서 제외)</li>
  <li><strong>취업준비자:</strong> 비경제활동인구 (실업자에서 제외)</li>
  <li><strong>실업자 조건:</strong> (1) 일할 의사 + (2) 일할 능력 + (3) 적극적 구직활동</li>
</ul>

<h4>★ 인구 이동에 따른 변화양상 (최빈출!)</h4>
<svg viewBox="0 0 550 320" xmlns="http://www.w3.org/2000/svg" style="max-width:550px;width:100%;background:#fff;border:1px solid #ddd;border-radius:8px">
  <text x="275" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">인구이동에 따른 실업률/참가율 변화</text>
  <!-- Three circles -->
  <circle cx="140" cy="150" r="60" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
  <text x="140" y="145" text-anchor="middle" font-size="12" font-weight="bold" fill="#3B82F6">취업자</text>
  <circle cx="275" cy="150" r="60" fill="#FEE2E2" stroke="#DC2626" stroke-width="2"/>
  <text x="275" y="145" text-anchor="middle" font-size="12" font-weight="bold" fill="#DC2626">실업자</text>
  <circle cx="410" cy="150" r="60" fill="#F3F4F6" stroke="#6B7280" stroke-width="2"/>
  <text x="410" y="145" text-anchor="middle" font-size="12" font-weight="bold" fill="#6B7280">비경활</text>
  <text x="410" y="162" text-anchor="middle" font-size="10" fill="#6B7280">인구</text>
  <!-- Arrow 1: 취업→비경활 -->
  <path d="M 185 110 Q 275 50 365 110" stroke="#9333EA" stroke-width="2" fill="none" marker-end="url(#arrow2)"/>
  <text x="275" y="65" text-anchor="middle" font-size="9" fill="#9333EA">(1) 실업률↑ 참가율↓</text>
  <!-- Arrow 2: 실업→비경활 -->
  <line x1="330" y1="135" x2="355" y2="135" stroke="#F59E0B" stroke-width="2" marker-end="url(#arrow2)"/>
  <text x="342" y="128" text-anchor="middle" font-size="9" fill="#F59E0B">(2)</text>
  <!-- Arrow 3: 비경활→취업 -->
  <path d="M 365 190 Q 275 250 185 190" stroke="#16A34A" stroke-width="2" fill="none" marker-end="url(#arrow2)"/>
  <text x="275" y="260" text-anchor="middle" font-size="9" fill="#16A34A">(3) 실업률↓ 참가율↑</text>
  <!-- Arrow 4: 비경활→실업 -->
  <line x1="355" y1="165" x2="330" y2="165" stroke="#DC2626" stroke-width="2" marker-end="url(#arrow2)"/>
  <text x="342" y="180" text-anchor="middle" font-size="9" fill="#DC2626">(4)</text>
  <!-- Legend table below -->
  <rect x="50" y="230" width="450" height="80" rx="5" fill="#F9FAFB" stroke="#E5E7EB"/>
  <text x="70" y="250" font-size="10" fill="#9333EA">(1) 취업자→비경활: 실업률↑ 참가율↓</text>
  <text x="70" y="265" font-size="10" fill="#F59E0B">(2) 실업자→비경활: 실업률↓ 참가율↓</text>
  <text x="70" y="280" font-size="10" fill="#16A34A">(3) 비경활→취업자: 실업률↓ 참가율↑</text>
  <text x="70" y="295" font-size="10" fill="#DC2626">(4) 비경활→실업자: 실업률↑ 참가율↑</text>
</svg>

<table>
  <tr><th>이동 방향</th><th>실업률</th><th>경활참가율</th></tr>
  <tr><td><strong>취업자 → 비경활인구</strong></td><td>↑ 상승</td><td>↓ 하락</td></tr>
  <tr><td><strong>실업자 → 비경활인구</strong></td><td>↓ 하락</td><td>↓ 하락</td></tr>
  <tr><td><strong>비경활인구 → 취업자</strong></td><td>↓ 하락</td><td>↑ 상승</td></tr>
  <tr><td><strong>비경활인구 → 실업자</strong></td><td>↑ 상승</td><td>↑ 상승</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 4가지 이동 방향별 실업률/참가율 변화 방향 → 표 자체가 시험문제!</p>
<p>※ <strong>암기법:</strong> "참가율은 경활인구 변화 방향과 같다" → 비경활에서 나오면 참가율↑, 들어가면 참가율↓</p>
</div>`},{title:`부가노동자효과`,content:`<div class="exam-important">
<h4>★ 부가노동자효과 (Added Worker Effect)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>정의:</strong> 가구주 실직 → 주부/학생 등 <strong>2차 노동력</strong>이 구직활동 시작</li>
  <li><strong>결과:</strong> 비경제활동인구 → <strong>경제활동인구</strong>로 전환</li>
  <li><strong>실업자 수:</strong> 실제보다 <strong>과대평가</strong></li>
  <li><strong>경활참가율:</strong> 증가</li>
</ul>

<h4>메커니즘</h4>
<p>가구주 실직 → 가계소득 감소 → 생계 위협 → 가구 내 비경제활동인구(주부, 학생 등)가 노동시장에 진입 → 이들 중 일부가 실업 상태 → 실업자 수 증가</p>

<h4>★ 실망노동자효과 vs 부가노동자효과 (반복 강조)</h4>
<table>
  <tr><th></th><th>실망노동자효과</th><th>부가노동자효과</th></tr>
  <tr><td><strong>이동 방향</strong></td><td>경활 → 비경활</td><td>비경활 → 경활</td></tr>
  <tr><td><strong>실업 평가</strong></td><td>과소평가</td><td>과대평가</td></tr>
  <tr><td><strong>경활참가율</strong></td><td>감소</td><td>증가</td></tr>
  <tr><td><strong>대상</strong></td><td>구직 포기자 본인</td><td>2차 노동력(주부/학생)</td></tr>
  <tr><td><strong>경기 국면</strong></td><td>경기침체기</td><td>경기침체기</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 두 효과 모두 경기침체기에 발생하지만, 방향이 정반대!</p>
<p>※ <strong>암기법:</strong> "실망하면 과소, 부가하면 과대" → 실망=과소평가, 부가=과대평가</p>
</div>`},{title:`소득정책`,content:`<div class="exam-important">
<h4>★ 소득정책 (Incomes Policy)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>시기:</strong> 1960년대 선진국에서 시행</li>
  <li><strong>목적:</strong> <strong>완전고용 + 물가안정</strong>의 양립 (필립스곡선의 상충관계 극복)</li>
  <li><strong>방법:</strong> 임금과 물가의 과도한 상승을 직접적으로 억제</li>
  <li><strong>유형:</strong> 임금가이드라인, 물가통제, 임금동결 등</li>
</ul>

<h4>소득정책의 문제점</h4>
<table>
  <tr><th>문제점</th><th>내용</th></tr>
  <tr><td><strong>비효율</strong></td><td>시장 가격 메커니즘을 왜곡하여 자원 배분 비효율 초래</td></tr>
  <tr><td><strong>불평등</strong></td><td>규제 대상 간 형평성 문제 발생</td></tr>
  <tr><td><strong>성장산업 위축</strong></td><td>유망 산업의 임금/가격 인상 억제 → 성장 동력 약화</td></tr>
  <tr><td><strong>행정비용 증가</strong></td><td>규제 시행 및 감시에 막대한 행정 비용 소요</td></tr>
</table>
<p>※ <strong>암기법:</strong> "비불성행" (비효율-불평등-성장위축-행정비용)</p>

<p>★ <strong>시험 포인트:</strong> 소득정책의 목적 = "완전고용 + 물가안정 양립" → 필립스곡선과 연계하여 이해!</p>
</div>`},{title:`케인즈 실업이론`,content:`<div class="exam-important">
<h4>★ 케인즈(Keynes) 실업이론</h4>

<h4>핵심 내용</h4>
<ul>
  <li><strong>정부개입 중시:</strong> 시장의 자동조절 기능을 불신, 정부의 적극적 개입 주장</li>
  <li><strong>실업 원인:</strong> <strong>유효수요 부족</strong>이 실업의 근본 원인</li>
  <li><strong>정책 방향:</strong> 거시경제정책을 통한 경기부양</li>
</ul>

<h4>케인즈의 정책 처방</h4>
<table>
  <tr><th>정책</th><th>내용</th></tr>
  <tr><td><strong>경기부양정책</strong></td><td>총수요 확대를 위한 적극적 재정/통화 정책</td></tr>
  <tr><td><strong>재분배정책(복지)</strong></td><td>소득 재분배를 통한 소비 진작 (한계소비성향이 높은 저소득층에 지원)</td></tr>
  <tr><td><strong>재정지출 증대</strong></td><td>정부 지출 확대로 직접적 수요 창출 (승수효과)</td></tr>
  <tr><td><strong>소비/투자 증대</strong></td><td>민간 소비와 투자를 촉진하는 정책</td></tr>
</table>

<h4>케인즈 vs 고전학파 비교</h4>
<table>
  <tr><th>구분</th><th>케인즈 학파</th><th>고전학파/통화주의</th></tr>
  <tr><td><strong>시장관</strong></td><td>시장실패 가능</td><td>시장의 자동조절</td></tr>
  <tr><td><strong>실업 원인</strong></td><td>유효수요 부족</td><td>임금 경직성</td></tr>
  <tr><td><strong>정부 역할</strong></td><td>적극적 개입</td><td>최소 개입</td></tr>
  <tr><td><strong>주요 정책</strong></td><td>재정정책</td><td>통화정책</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 케인즈 = 유효수요 부족 = 정부개입 = 재정정책 → 이 연결고리가 핵심!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 케인즈는 "통화정책"이 아닌 "재정정책"을 주로 주장 → 고전학파/통화주의와 혼동 주의!</p>
</div>`},{title:`실업급여 효과`,content:`<div class="exam-important">
<h4>★ 실업급여의 효과</h4>

<h4>경제활동참가율의 정의</h4>
<p><strong>경제활동참가율 = (경제활동인구 / 15세 이상 인구) x 100</strong></p>
<ul>
  <li>경제활동인구 = 취업자 + 실업자</li>
  <li>15세 이상 인구 = 경제활동인구 + 비경제활동인구</li>
</ul>

<h4>실업급여(구직급여)의 효과</h4>
<table>
  <tr><th>효과</th><th>내용</th></tr>
  <tr><td><strong>경제활동참가 증대</strong></td><td>적극적 구직활동자에게 구직급여 지급 → 구직활동 유인 → 비경활인구가 경활인구로 전환</td></tr>
  <tr><td><strong>의중임금 상승</strong></td><td>실업급여가 있으므로 더 좋은 일자리를 찾으려 함 → 의중임금 상승</td></tr>
  <tr><td><strong>실업기간 연장 가능</strong></td><td>급여 수급 기간 동안 구직활동을 더 오래 할 수 있음</td></tr>
  <tr><td><strong>노동시간 효과 불분명</strong></td><td>실업 상태에 따라 노동시간 증감이 불분명</td></tr>
</table>

<h4>실업급여의 양면성</h4>
<ul>
  <li><strong>긍정:</strong> 소득 보전, 구직활동 지원, 적절한 직업-근로자 매칭 촉진</li>
  <li><strong>부정:</strong> 도덕적 해이(moral hazard), 실업기간 장기화, 의중임금 과도 상승</li>
</ul>

<p>★ <strong>시험 포인트:</strong> 실업급여 → "경제활동참가 증대" (구직활동 유인), 동시에 "실업기간 연장 가능" → 양면적 효과!</p>
<p>※ 노동시간 증감 효과는 "불분명"이라는 점 → 확정적 답이 아니므로 출제 시 주의!</p>
</div>`}]},{title:`시험 핵심키워드 - 노사관계이론`,topics:[{title:`숍(Shop) 제도`,content:`<div class="exam-important">
<h4>★ 숍(Shop) 제도 - 노조 가입 강제 유형</h4>

<h4>기본 유형</h4>
<table>
  <tr><th>유형</th><th>내용</th><th>강제성</th></tr>
  <tr><td><strong>오픈숍 (Open Shop)</strong></td><td>가입 여부 자유, 비조합원도 고용 가능</td><td>없음</td></tr>
  <tr><td><strong>클로즈드숍 (Closed Shop)</strong></td><td>조합원만 고용, <strong>일정기간 내 가입 의무</strong></td><td>가장 강함</td></tr>
  <tr><td><strong>유니언숍 (Union Shop)</strong></td><td>고용 후 일정기간 내 가입 의무 (중간 형태)</td><td>중간</td></tr>
</table>

<h4>변형 유형</h4>
<table>
  <tr><th>유형</th><th>내용</th></tr>
  <tr><td><strong>에이전시숍 (Agency Shop)</strong></td><td>비조합원도 <strong>조합비 징수</strong> (무임승차 방지)</td></tr>
  <tr><td><strong>프레퍼렌셜숍 (Preferential Shop)</strong></td><td><strong>조합원 우대</strong> (채용/승진 시 우선권)</td></tr>
  <tr><td><strong>메인터넌스숍 (Maintenance Shop)</strong></td><td>탈퇴 자유하지만 <strong>협약기간 중 탈퇴 불가</strong></td></tr>
</table>

<h4>강제성 순서</h4>
<p style="font-size:1.1em;text-align:center"><strong>클로즈드숍 > 유니언숍 > 에이전시숍 > 메인터넌스숍 > 프레퍼렌셜숍 > 오픈숍</strong></p>

<p>※ <strong>암기법 (기본):</strong> "오클유" (오픈-클로즈드-유니언) → 강제성 순서 "클유오"</p>
<p>※ <strong>암기법 (변형):</strong> "에프메" (에이전시-프레퍼렌셜-메인터넌스)</p>

<p>★ <strong>시험 포인트:</strong> 에이전시숍의 "비조합원도 회비 징수", 메인터넌스숍의 "협약기간 중 탈퇴 불가" → 핵심 키워드 구분!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 유니언숍은 "고용 후" 가입 의무, 클로즈드숍은 "고용 전" 조합원이어야 함 → 시점 구분!</p>
</div>`},{title:`힉스(Hicks) 단체교섭이론`,content:`<div class="exam-important">
<h4>★ 힉스(Hicks) 단체교섭이론</h4>

<svg viewBox="0 0 500 370" xmlns="http://www.w3.org/2000/svg" style="max-width:500px;width:100%;background:#fff;border:1px solid #ddd;border-radius:8px">
  <defs>
    <marker id="arrow3" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker>
  </defs>
  <text x="250" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">힉스(Hicks) 단체교섭 모형</text>
  <!-- Axes -->
  <line x1="80" y1="300" x2="450" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrow3)"/>
  <line x1="80" y1="300" x2="80" y2="40" stroke="#333" stroke-width="2" marker-end="url(#arrow3)"/>
  <text x="460" y="305" font-size="11" fill="#333">파업기간(t)</text>
  <text x="25" y="35" font-size="11" fill="#333">임금인상률(W)</text>
  <!-- Union Resistance Curve (downward sloping) -->
  <path d="M 100 80 Q 200 120 300 200 Q 370 250 420 270" stroke="#DC2626" stroke-width="2.5" fill="none"/>
  <text x="425" y="265" font-size="11" fill="#DC2626" font-weight="bold">노동조합</text>
  <text x="425" y="280" font-size="11" fill="#DC2626" font-weight="bold">저항곡선</text>
  <!-- Employer Concession Curve (upward sloping) -->
  <path d="M 100 270 Q 200 240 300 200 Q 370 170 420 100" stroke="#2563EB" stroke-width="2.5" fill="none"/>
  <text x="425" y="95" font-size="11" fill="#2563EB" font-weight="bold">사용자</text>
  <text x="425" y="110" font-size="11" fill="#2563EB" font-weight="bold">양보곡선</text>
  <!-- Intersection point -->
  <circle cx="300" cy="200" r="6" fill="#F59E0B" stroke="#333" stroke-width="1"/>
  <text x="305" y="195" font-size="11" fill="#333" font-weight="bold">P(합의점)</text>
  <!-- Dashed lines to axes -->
  <line x1="80" y1="200" x2="300" y2="200" stroke="#999" stroke-dasharray="4"/>
  <text x="55" y="204" font-size="11" fill="#333">W*</text>
  <line x1="300" y1="200" x2="300" y2="300" stroke="#999" stroke-dasharray="4"/>
  <text x="292" y="318" font-size="11" fill="#333">t*</text>
  <!-- Labels -->
  <text x="130" y="70" font-size="10" fill="#DC2626">노동자 요구(높음)</text>
  <text x="130" y="280" font-size="10" fill="#2563EB">사용자 제시(낮음)</text>
  <!-- Annotations -->
  <text x="150" y="340" font-size="10" fill="#666">W*: 합의 임금인상률 / t*: 예상 파업기간</text>
</svg>

<h4>핵심 내용</h4>
<ul>
  <li><strong>파업 원인:</strong> 노사 간 <strong>비대칭 정보</strong>로 파업 발생</li>
  <li><strong>파업기간의 함수</strong>로 임금합의에 도달</li>
  <li><strong>노동조합 저항곡선:</strong> 파업 장기화 시 요구 임금인상률 <strong>하락</strong> (우하향)</li>
  <li><strong>사용자 양보곡선:</strong> 파업 장기화 시 제시 임금인상률 <strong>상승</strong> (우상향)</li>
  <li><strong>합의점(P):</strong> 두 곡선의 교차점에서 예상 파업기간(t*)과 합의 임금(W*) 결정</li>
</ul>

<h4>모형의 의미</h4>
<table>
  <tr><th>곡선</th><th>방향</th><th>의미</th></tr>
  <tr><td><strong>노동조합 저항곡선</strong></td><td>우하향</td><td>파업이 길어질수록 노동자 측 임금인상률 요구 낮춤</td></tr>
  <tr><td><strong>사용자 양보곡선</strong></td><td>우상향</td><td>파업이 길어질수록 사용자 측 임금양보율 높임</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 저항곡선=우하향, 양보곡선=우상향 → 방향 구분 필수! "파업 개시 이후 사정"으로 모형 설명!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 합의점은 "파업 전" 예측이 아닌, "파업 후" 양측의 양보에 의해 결정</p>
</div>`},{title:`노동조합의 임금효과`,content:`<div class="exam-important">
<h4>★ 노동조합의 3대 임금효과</h4>

<table>
  <tr><th>효과</th><th>메커니즘</th><th>비조직부문 임금</th><th>격차</th></tr>
  <tr>
    <td><strong>파급효과<br/>(이전/해고효과)</strong></td>
    <td>조직부문 임금인상 → 고용감소 → 해고된 노동자가 비조직부문으로 이전 → 비조직부문 노동공급 증가</td>
    <td><strong>하락</strong></td>
    <td><strong>확대</strong></td>
  </tr>
  <tr>
    <td><strong>위협효과</strong></td>
    <td>비조직기업이 노조 결성을 방지하기 위해 <strong>선제적으로 임금인상</strong></td>
    <td><strong>상승</strong></td>
    <td><strong>축소</strong></td>
  </tr>
  <tr>
    <td><strong>대기실업효과</strong></td>
    <td>해고된 노동자가 비조직부문 취업 대신 <strong>조직기업 재취업을 대기</strong> → 비조직부문 노동공급 미증가</td>
    <td><strong>하락 안함</strong></td>
    <td><strong>축소</strong></td>
  </tr>
</table>

<h4>격차 방향 정리</h4>
<ul>
  <li><strong>파급효과:</strong> 격차 <strong>확대</strong> (유일하게 확대!)</li>
  <li><strong>위협효과:</strong> 격차 <strong>축소</strong></li>
  <li><strong>대기실업효과:</strong> 격차 <strong>축소</strong></li>
</ul>

<p>※ <strong>암기법:</strong> "파확 위축 대축" (파급=확대, 위협=축소, 대기=축소)</p>

<p>★ <strong>시험 포인트:</strong> 3가지 효과 중 격차를 "확대"하는 것은 파급효과뿐! 나머지는 모두 "축소"!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 위협효과는 "비조직부문"이 자발적으로 임금을 올리는 것이지, 노조가 강제하는 것이 아님!</p>
</div>`},{title:`직업별 노동조합`,content:`<div class="exam-important">
<h4>★ 직업별 노동조합 (Craft Union)</h4>

<h4>핵심 특징</h4>
<ul>
  <li><strong>조직 방식:</strong> 산업/기업 구별 없이 <strong>동일 직업(직종)</strong>의 개인이 가맹</li>
  <li><strong>역사:</strong> 노동운동사에서 <strong>가장 초기</strong> 형태</li>
  <li><strong>목적:</strong> <strong>숙련 근로자 독점</strong> (기술/자격의 배타적 통제)</li>
  <li><strong>배타성:</strong> 저임금, 미숙련, 여성, 연소자 가입 어려움</li>
  <li><strong>주요 활동:</strong> <strong>상호부조</strong> 주력 (질병, 사망, 실업 시 지원)</li>
  <li><strong>특징:</strong> 어용화 없지만 <strong>독점적</strong> 성격</li>
</ul>

<h4>★ 노동조합 유형 비교</h4>
<table>
  <tr><th>구분</th><th>직업별</th><th>산업별</th><th>기업별</th></tr>
  <tr><td><strong>조직 기준</strong></td><td>동일 직종</td><td>동일 산업</td><td>동일 기업</td></tr>
  <tr><td><strong>역사</strong></td><td>가장 초기</td><td>중기</td><td>후기</td></tr>
  <tr><td><strong>대상</strong></td><td>숙련공</td><td>전체 근로자</td><td>해당 기업 근로자</td></tr>
  <tr><td><strong>교섭력</strong></td><td>직종 내 강함</td><td>산업 전체 강함</td><td>약함</td></tr>
  <tr><td><strong>대표국</strong></td><td>영국 초기</td><td>독일</td><td>한국, 일본</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 직업별 노조 = 가장 초기 = 숙련공 = 배타적 = 상호부조 → 키워드 연결!</p>
</div>`},{title:`기업별 노동조합`,content:`<div class="exam-important">
<h4>★ 기업별 노동조합 (Enterprise Union)</h4>

<h4>핵심 특징</h4>
<ul>
  <li><strong>조직 방식:</strong> <strong>하나의 기업</strong>이 조직 단위</li>
  <li><strong>대표:</strong> <strong>우리나라</strong>의 주된 노조 형태</li>
  <li><strong>설립:</strong> <strong>대기업</strong>에서 쉽게 조직</li>
  <li><strong>교섭력:</strong> 노동시장 지배력/역량 <strong>약함</strong></li>
</ul>

<h4>장점과 단점</h4>
<table>
  <tr><th>장점</th><th>단점</th></tr>
  <tr><td>노사분규 가능성 <strong>낮음</strong></td><td><strong>어용화</strong> 위험 (사용자 영향 받기 쉬움)</td></tr>
  <tr><td>해당 기업 실정에 맞는 교섭 가능</td><td>직종 간 <strong>반목</strong> 가능성</td></tr>
  <tr><td>의사소통 원활</td><td>교섭력 약함</td></tr>
</table>

<h4>★ 한국의 노조 현황</h4>
<ul>
  <li>기업별 노조가 주류 → 최근 산업별 노조로 전환 추세</li>
  <li>기업별 노조의 한계(어용화, 교섭력 약함)를 극복하기 위해 산별노조 추진</li>
</ul>

<p>★ <strong>시험 포인트:</strong> 기업별 노조 = 한국 주된 형태 = 대기업 쉬움 = 어용화 위험 = 교섭력 약함</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 기업별 노조는 "노사분규 가능성이 낮다"는 것이 장점이지만, "교섭력이 약하다"가 핵심 단점!</p>
</div>`},{title:`단체교섭 유형`,content:`<div class="exam-important">
<h4>★ 단체교섭의 5대 유형</h4>

<table>
  <tr><th>유형</th><th>교섭 구조</th><th>특징</th></tr>
  <tr><td><strong>기업별 교섭</strong></td><td>단일 노조 vs <strong>단일 사용자</strong></td><td>가장 기본적, 한국 주류</td></tr>
  <tr><td><strong>통일교섭</strong></td><td>단일 노조 vs <strong>복수 사용자</strong></td><td>산업별/업종별 통일 교섭</td></tr>
  <tr><td><strong>집단교섭<br/>(연합교섭)</strong></td><td>복수 노조 vs 복수 사용자<br/>(<strong>연합 전선</strong>)</td><td>양측이 모두 연합하여 교섭</td></tr>
  <tr><td><strong>대각선교섭</strong></td><td><strong>상부 노조단체</strong> vs 개별 사용자</td><td>노조의 상부단체가 개별 기업과 교섭</td></tr>
  <tr><td><strong>방사선교섭</strong></td><td>상부 노조단체 vs <strong>2개 이상</strong> 개별 사용자 동시</td><td>대각선교섭을 <strong>2개 이상 동시</strong>에 수행</td></tr>
</table>

<h4>교섭 유형 관계도</h4>
<ul>
  <li><strong>기업별:</strong> 1:1 교섭 (가장 단순)</li>
  <li><strong>통일:</strong> 1:N (노조 하나, 사용자 여러 명)</li>
  <li><strong>집단:</strong> N:N (연합 전선)</li>
  <li><strong>대각선:</strong> 상위 노조:1 (상부단체 개입)</li>
  <li><strong>방사선:</strong> 상위 노조:N (대각선의 확장)</li>
</ul>

<p>※ <strong>암기법:</strong> "기통집대방" (기업별-통일-집단-대각선-방사선)</p>

<p>★ <strong>시험 포인트:</strong> 대각선 vs 방사선 구분 → 대각선은 "상부+개별 1개", 방사선은 "상부+개별 2개 이상 동시"!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 통일교섭의 "복수 사용자"와 집단교섭의 "연합전선" 구분 → 집단교섭은 노조 측도 복수!</p>
</div>`},{title:`노사 교섭력의 원천`,content:`<div class="exam-important">
<h4>★ 노사 교섭력의 원천</h4>

<table>
  <tr><th colspan="2">노동조합의 교섭력</th><th colspan="2">사용자의 교섭력</th></tr>
  <tr><th>수단</th><th>내용</th><th>수단</th><th>내용</th></tr>
  <tr><td><strong>파업/태업</strong></td><td>생산 중단으로 압박</td><td><strong>대체인력</strong></td><td>파업 근로자 대체</td></tr>
  <tr><td><strong>정치적 영향력</strong></td><td>정치권 로비/압력</td><td><strong>관리직 생산동원</strong></td><td>비노조원으로 생산 유지</td></tr>
  <tr><td><strong>불매운동</strong></td><td>제품 불매로 기업 압박</td><td><strong>재정능력</strong></td><td>파업 장기화 버틸 자금력</td></tr>
  <tr><td><strong>노동공급 제한</strong></td><td>면허제, 자격요건 강화</td><td><strong>직장폐쇄 (Lock-out)</strong></td><td><strong>가장 강력한 수단!</strong></td></tr>
</table>

<h4>교섭력 강화 요인</h4>
<ul>
  <li><strong>노조 측:</strong> 높은 조직률, 파업기금, 대체재 부재, 호황기</li>
  <li><strong>사용자 측:</strong> 높은 재고, 대체인력 확보, 불황기, 다공장 운영</li>
</ul>

<p style="color:#DC2626;font-size:1.1em;font-weight:bold">★ 사용자의 가장 강력한 수단 = 직장폐쇄(Lock-out) → 초빈출!</p>

<p>※ <strong>암기법 (노조):</strong> "파정불노" (파업-정치적영향-불매-노동공급제한)</p>
<p>※ <strong>암기법 (사용자):</strong> "대관재직" (대체인력-관리직동원-재정능력-직장폐쇄)</p>

<p>★ <strong>시험 포인트:</strong> "직장폐쇄"는 사용자의 가장 강력한 수단, "파업"은 노동조합의 가장 강력한 수단!</p>
</div>`},{title:`노사관계 주요내용 (던롭 모형)`,content:`<div class="exam-important">
<h4>★ 던롭(Dunlop)의 노사관계체계 이론 (1958)</h4>

<h4>3주체</h4>
<table>
  <tr><th>주체</th><th>대표 조직</th><th>역할</th></tr>
  <tr><td><strong>노동자</strong></td><td>노동조합</td><td>근로조건 개선 추구</td></tr>
  <tr><td><strong>사용자</strong></td><td>사용자단체</td><td>경영권 확보, 이윤 추구</td></tr>
  <tr><td><strong>정부</strong></td><td>정부기관</td><td>규제, 조정, 중재</td></tr>
</table>

<h4>3가지 규제 여건 (환경적 맥락)</h4>
<table>
  <tr><th>여건</th><th>내용</th></tr>
  <tr><td><strong>기술적 특성</strong></td><td>기술 수준, 생산방식이 노사관계에 영향</td></tr>
  <tr><td><strong>시장 (예산 제약)</strong></td><td>상품시장, 노동시장의 경쟁 상황과 예산 제약</td></tr>
  <tr><td><strong>권력 구조</strong></td><td>사회 전반의 권력 분포와 정치적 환경</td></tr>
</table>
<p>※ <strong>암기법:</strong> "기시권" (기술-시장-권력)</p>

<h4>★ 이원적 구조</h4>
<table>
  <tr><th>구분</th><th>관계</th><th>성격</th></tr>
  <tr><td><strong>제1차 관계</strong></td><td>경영 - 종업원</td><td><strong>협력</strong> (일상적 직장 관계)</td></tr>
  <tr><td><strong>제2차 관계</strong></td><td>경영 - 노동조합</td><td><strong>대립</strong> (단체교섭 관계)</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 던롭 = 3주체(노사정) + 3여건(기시권) → 숫자 매칭 필수!</p>
<p>★ <strong>시험 포인트:</strong> 제1차=협력, 제2차=대립 → "일이협대" (1차=협력, 2차=대립)</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 던롭 모형의 산출물은 "규칙(Rule)"이며, "웹 규칙(web of rules)"이라고도 함</p>
</div>`},{title:`이중역할이론 (프리만 & 메도프)`,content:`<div class="exam-important">
<h4>★ 이중역할이론 - 프리만(Freeman) & 메도프(Medoff)</h4>
<p>노동조합은 <strong>독점적 측면</strong>과 <strong>집단적 소리(Collective Voice)</strong>라는 이중적 역할을 수행</p>

<h4>두 가지 측면</h4>
<table>
  <tr><th>측면</th><th>내용</th><th>효과</th></tr>
  <tr>
    <td><strong>독점적 측면<br/>(Monopoly Face)</strong></td>
    <td>
      <ul>
        <li>노동력 공급 <strong>독점</strong></li>
        <li>완전경쟁 시장을 <strong>교란</strong></li>
        <li>효율성 <strong>저해</strong></li>
      </ul>
    </td>
    <td>부정적: 자원배분 왜곡, 비효율, 임금-물가 상승</td>
  </tr>
  <tr>
    <td><strong>집단적 소리<br/>(Collective Voice)</strong></td>
    <td>
      <ul>
        <li>근로자의 <strong>의사소통</strong> 통로</li>
        <li>바람직한 경영 <strong>유도</strong></li>
        <li>비효율 <strong>제거</strong></li>
        <li>생산성 <strong>증진</strong></li>
      </ul>
    </td>
    <td>긍정적: 이직률 감소, 근로조건 개선, 생산성 향상</td>
  </tr>
</table>

<h4>이론의 핵심</h4>
<ul>
  <li>노조의 순효과는 두 측면의 <strong>상대적 크기</strong>에 따라 결정</li>
  <li>집단적 소리 > 독점적 측면 → 사회에 <strong>긍정적</strong></li>
  <li>독점적 측면 > 집단적 소리 → 사회에 <strong>부정적</strong></li>
</ul>

<p>※ <strong>암기법:</strong> "독교효 집의바비생" (독점-교란-효율저해 / 집단소리-의사소통-바람직경영-비효율제거-생산성증진)</p>

<p>★ <strong>시험 포인트:</strong> 프리만 & 메도프 = 이중역할 = 독점 + 집단적 소리 → 학자명과 이론명 매칭!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: "집단적 소리"는 개별 근로자가 아닌 "노동조합을 통한" 의사표현을 의미</p>
</div>`},{title:`파업의 경제적 기능`,content:`<div class="exam-important">
<h4>★ 파업의 경제적 기능과 비용</h4>

<h4>파업의 경제적 비용 구조</h4>
<table>
  <tr><th>구분</th><th>비용 관계</th><th>설명</th></tr>
  <tr><td><strong>노동자 측</strong></td><td>노동소득 손실 < 임금소득 상실분</td><td>파업 중 임금 손실은 전체 소득 손실보다 작음 (파업기금, 부업 등)</td></tr>
  <tr><td><strong>기업 측</strong></td><td>기업이윤 순감소분 < 직접생산중단 감소분</td><td>재고 판매, 하청 전환 등으로 실제 이윤 손실을 완화</td></tr>
</table>

<h4>산업별 사회적 비용</h4>
<p style="font-size:1.1em;text-align:center;font-weight:bold"><strong>서비스업 > 제조업</strong> (사회적 비용)</p>
<ul>
  <li><strong>서비스업:</strong> 재고 비축 불가, 대체 어려움 → 사회적 파급효과 큼 (교통, 의료, 전력 등)</li>
  <li><strong>제조업:</strong> 재고 활용, 하청 전환 가능 → 상대적으로 사회적 비용 적음</li>
</ul>

<h4>파업의 경제적 기능 (순기능)</h4>
<ul>
  <li>노사 간 <strong>힘의 균형</strong> 유지 기능</li>
  <li>근로조건 <strong>개선</strong>의 동력</li>
  <li>경영 <strong>혁신</strong>의 촉매</li>
  <li>사회적 <strong>공론화</strong> 기능</li>
</ul>

<h4>파업 장기화의 영향</h4>
<ul>
  <li>파업 장기화 → <strong>경제적 손실 급증</strong> (양측 모두)</li>
  <li>노동자: 생활고 심화, 파업기금 고갈</li>
  <li>기업: 재고 소진, 거래처 이탈, 신뢰 하락</li>
  <li>사회: 공급 차질, 물가 상승, 경기 둔화</li>
</ul>

<p>★ <strong>시험 포인트:</strong> 서비스업 > 제조업 (사회적 비용) → 이유: 서비스는 "재고 비축" 불가!</p>
<p>★ <strong>시험 포인트:</strong> 노동소득손실과 임금소득상실분의 부등호 방향 주의!</p>
</div>`}]}]},labor_law:{name:`노동관계법규`,code:`labor_law`,color:`#EF4444`,icon:`fa-solid fa-scale-balanced`,description:`근로기준법, 고용보험법, 직업안정법 등을 학습합니다.`,chapters:[{title:`근로기준법`,topics:[{title:`근로계약과 근로조건`,content:`<h4>근로기준법의 기본 원칙</h4>
<ul>
  <li>근로조건은 근로자와 사용자가 동등한 지위에서 자유의사로 결정</li>
  <li>근로기준법에서 정하는 기준은 <strong>최저기준</strong></li>
  <li>국적, 신앙, 사회적 신분에 따른 차별 금지</li>
  <li>강제근로 금지, 폭행 금지</li>
</ul>
<h4>근로계약</h4>
<ul>
  <li>서면으로 명시해야 할 사항: 임금, 소정근로시간, 휴일, 연차유급휴가</li>
  <li>근로계약 기간: 기간의 정함이 없는 것이 원칙 (기간제는 2년 이내)</li>
  <li>위약 예정의 금지: 근로계약 불이행에 대한 위약금/손해배상 예정 금지</li>
  <li>전차금 상계 금지: 전차금과 임금의 상계 금지</li>
</ul>
<h4>근로시간</h4>
<ul>
  <li><strong>법정 근로시간:</strong> 1주 40시간, 1일 8시간</li>
  <li><strong>연장근로:</strong> 당사자 합의 시 1주 12시간 한도</li>
  <li><strong>야간근로:</strong> 오후 10시 ~ 오전 6시</li>
  <li><strong>가산임금:</strong> 연장·야간·휴일근로 시 통상임금의 50% 가산</li>
</ul>`},{title:`임금과 해고`,content:`<h4>임금</h4>
<ul>
  <li><strong>임금의 정의:</strong> 사용자가 근로의 대가로 근로자에게 지급하는 모든 금품</li>
  <li><strong>통상임금:</strong> 정기적·일률적·고정적으로 지급되는 임금</li>
  <li><strong>평균임금:</strong> 산정사유 발생일 이전 3개월간 지급된 임금총액 ÷ 총 일수</li>
  <li><strong>최저임금:</strong> 최저임금법에 의한 최저 한도</li>
</ul>
<h4>임금 지급 원칙 (4대 원칙)</h4>
<ol>
  <li><strong>직접 지급:</strong> 근로자에게 직접 지급</li>
  <li><strong>전액 지급:</strong> 법령/단체협약에 의한 경우 외 공제 불가</li>
  <li><strong>통화 지급:</strong> 한국은행에서 발행한 통화로 지급</li>
  <li><strong>정기 지급:</strong> 매월 1회 이상 일정 기일에 지급</li>
</ol>
<h4>해고</h4>
<ul>
  <li><strong>정당한 이유:</strong> 해고는 정당한 이유가 있어야 함</li>
  <li><strong>해고 예고:</strong> 30일 전 예고 또는 30일분 통상임금 지급</li>
  <li><strong>해고 서면 통지:</strong> 해고 사유와 해고시기를 서면으로 통지</li>
  <li><strong>경영상 해고(정리해고):</strong> 긴박한 경영상의 필요, 해고회피 노력, 합리적 기준, 근로자대표 50일 전 통보</li>
  <li><strong>부당해고 구제:</strong> 노동위원회에 구제신청 (해고일로부터 3개월 이내)</li>
</ul>`},{title:`휴일·휴가·취업규칙`,content:`<h4>휴일</h4>
<ul>
  <li><strong>주휴일:</strong> 1주간 소정근로일을 개근한 근로자에게 1일 유급휴일 (주 15시간 이상)</li>
  <li><strong>근로자의 날:</strong> 5월 1일 (유급휴일, 근로자의날법)</li>
  <li>관공서 공휴일: 5인 이상 사업장에서 유급휴일로 보장</li>
</ul>
<h4>연차유급휴가</h4>
<ul>
  <li><strong>1년 미만 근무자:</strong> 1개월 개근 시 1일 (최대 11일)</li>
  <li><strong>1년 이상 근무자:</strong> 80% 이상 출근 시 15일</li>
  <li><strong>가산휴가:</strong> 3년 이상 계속 근로 시 최초 1년 초과 매 2년마다 1일 가산 (최대 25일)</li>
  <li><strong>사용촉진:</strong> 사용자가 사용을 촉구했는데도 미사용 시 보상 의무 소멸</li>
  <li><strong>미사용 수당:</strong> 연차휴가 미사용분에 대해 통상임금 지급</li>
</ul>
<h4>취업규칙</h4>
<ul>
  <li>상시 <strong>10인 이상</strong> 사업장에서 작성·신고 의무</li>
  <li>기재 사항: 근로시간, 임금, 휴일·휴가, 퇴직, 징계 등</li>
  <li><strong>불이익 변경:</strong> 근로자 과반수 동의 필요 (근로자대표/노조 동의)</li>
  <li>취업규칙은 법령, 단체협약에 반할 수 없음</li>
  <li><strong>효력 순서:</strong> 법령 > 단체협약 > 취업규칙 > 근로계약</li>
</ul>
<h4>여성·연소근로자 보호</h4>
<ul>
  <li><strong>최저 고용연령:</strong> 15세 미만 (취직인허증 필요)</li>
  <li><strong>산전후휴가:</strong> 출산 전후 90일 (쌍둥이 120일), 산전 45일 이상 확보</li>
  <li><strong>육아휴직:</strong> 만 8세 이하 자녀 대상, 1년 이내</li>
  <li><strong>야간·휴일근로 제한:</strong> 임신 중 여성 금지, 18세 미만 근로자 본인 동의+근로감독관 인가</li>
  <li><strong>생리휴가:</strong> 월 1일 무급 휴가</li>
</ul>`}]},{title:`고용보험법`,topics:[{title:`실업급여와 고용안정`,content:`<h4>고용보험제도의 구성</h4>
<ul>
  <li><strong>실업급여사업:</strong> 실직자에 대한 생활 안정 지원</li>
  <li><strong>고용안정사업:</strong> 기업의 고용유지 지원</li>
  <li><strong>직업능력개발사업:</strong> 근로자의 직업능력 향상 지원</li>
</ul>
<h4>구직급여 수급요건</h4>
<ul>
  <li>이직일 이전 18개월간 피보험단위기간이 180일 이상</li>
  <li>비자발적 이직 (정당한 사유 없는 자기 사정으로 이직 시 제한)</li>
  <li>근로 의사와 능력이 있으나 취업하지 못한 상태</li>
  <li>재취업 활동을 적극적으로 할 것</li>
  <li>수급자격 제한 사유에 해당하지 않을 것</li>
</ul>
<h4>구직급여 지급</h4>
<ul>
  <li><strong>급여수준:</strong> 이직 전 평균임금의 60% × 소정급여일수</li>
  <li><strong>소정급여일수:</strong> 연령과 피보험기간에 따라 120~270일</li>
  <li><strong>대기기간:</strong> 수급자격 인정일부터 7일간</li>
  <li><strong>실업인정:</strong> 1~4주 마다 출석하여 구직활동 확인</li>
</ul>
<h4>고용안정사업</h4>
<ul>
  <li>고용유지지원금: 경영악화로 고용조정 불가피 시 휴업, 훈련 등에 대한 지원</li>
  <li>고용촉진장려금: 취업 취약계층 고용 시 지원</li>
</ul>`}]},{title:`직업안정법`,topics:[{title:`직업소개와 직업지도`,content:`<h4>직업안정법의 목적</h4>
<p>모든 근로자가 각자의 능력에 적합한 직업에 취업할 기회를 제공하고, 산업에 필요한 노동력의 충원을 원활히 하는 것입니다.</p>
<h4>직업소개</h4>
<ul>
  <li><strong>무료직업소개사업:</strong> 고용센터(공공), 비영리법인(민간)</li>
  <li><strong>유료직업소개사업:</strong> 등록 후 영리 목적으로 운영</li>
  <li>허위 구인광고 금지</li>
  <li>강제근로 및 부당 소개 금지</li>
</ul>
<h4>직업지도</h4>
<ul>
  <li>직업적성검사, 직업정보 제공, 직업상담</li>
  <li>구인자에 대한 고용관리 진단 및 지도</li>
  <li>취업 취약계층에 대한 우선적 직업지도</li>
</ul>
<h4>고용센터의 업무</h4>
<ul>
  <li>직업소개 및 직업지도</li>
  <li>고용보험 관련 업무</li>
  <li>직업훈련 안내 및 알선</li>
  <li>취업지원 프로그램 운영</li>
</ul>`}]},{title:`근로자직업능력개발법`,topics:[{title:`직업능력개발 훈련`,content:`<h4>근로자직업능력개발법의 목적</h4>
<p>근로자의 생애에 걸친 직업능력개발을 촉진하고 산업현장에서 필요한 기술인력을 양성하는 것입니다.</p>
<h4>직업능력개발훈련의 유형</h4>
<ul>
  <li><strong>양성훈련:</strong> 기초적 직무수행능력을 습득시키기 위한 훈련</li>
  <li><strong>향상훈련:</strong> 양성훈련을 받은 자의 직무수행능력을 향상시키기 위한 훈련</li>
  <li><strong>전직훈련:</strong> 다른 직업에 필요한 직무수행능력을 습득시키기 위한 훈련</li>
</ul>
<h4>훈련 실시 방법</h4>
<ul>
  <li>집체훈련: 훈련기관에서 집합 교육</li>
  <li>현장훈련(OJT): 사업장에서 실시</li>
  <li>원격훈련: 인터넷, 통신매체 활용</li>
  <li>혼합훈련: 위 방법들을 병행</li>
</ul>
<h4>국가기술자격</h4>
<ul>
  <li>기술사 → 기능장 → 기사 → 산업기사 → 기능사</li>
  <li>국가전문자격: 직업상담사, 사회복지사 등</li>
</ul>`}]},{title:`파견근로자보호법 및 기간제법`,topics:[{title:`비정규직 근로자 보호`,content:`<h4>파견근로자보호법</h4>
<ul>
  <li><strong>근로자파견:</strong> 파견사업주가 근로자를 고용한 후 사용사업주의 지휘·명령을 받아 근무하게 하는 것</li>
  <li><strong>파견기간:</strong> 원칙 1년, 파견 당사자 합의 시 1회에 한해 연장 (최대 2년)</li>
  <li><strong>파견 금지 업무:</strong> 건설, 하역, 유해·위험 업무 등</li>
  <li><strong>직접고용 의무:</strong> 2년 초과 사용 시 직접고용 간주</li>
  <li><strong>차별 금지:</strong> 파견근로자에 대한 불합리한 차별적 처우 금지</li>
</ul>
<h4>기간제 및 단시간근로자 보호법</h4>
<ul>
  <li><strong>기간제근로자:</strong> 근로계약 기간을 정한 근로자</li>
  <li><strong>사용기간:</strong> 총 2년 초과 불가 (초과 시 기간의 정함이 없는 근로자로 간주)</li>
  <li><strong>단시간근로자:</strong> 통상 근로자보다 소정근로시간이 짧은 근로자</li>
  <li><strong>차별 금지:</strong> 합리적 이유 없는 차별적 처우 금지</li>
  <li><strong>차별 시정:</strong> 노동위원회에 시정신청 (차별적 처우가 있은 날로부터 6개월 이내)</li>
</ul>`}]},{title:`기타 주요 노동관계법규`,topics:[{title:`최저임금법`,content:`<h4>최저임금법의 목적</h4>
<p>근로자에 대하여 임금의 <strong>최저수준</strong>을 보장하여 근로자의 생활안정과 노동력의 질적 향상을 기함으로써 국민경제의 건전한 발전에 이바지하는 것입니다.</p>
<h4>최저임금 결정</h4>
<ul>
  <li><strong>최저임금위원회:</strong> 근로자 위원 9인 + 사용자 위원 9인 + 공익위원 9인 (총 27인)</li>
  <li>매년 8월 5일까지 결정, 다음 연도 1월 1일부터 적용</li>
  <li>고용노동부 장관이 결정·고시</li>
  <li>시간급 기준으로 결정</li>
</ul>
<h4>적용 대상</h4>
<ul>
  <li>근로자 1인 이상 모든 사업장</li>
  <li><strong>적용 제외:</strong> 동거하는 친족만을 사용하는 사업, 가사사용인</li>
  <li><strong>감액 적용:</strong> 수습 3개월 이내 (1년 이상 계약 시 10% 감액 가능), 장애인 등</li>
</ul>
<h4>위반 시 제재</h4>
<ul>
  <li>최저임금 미만 지급: <strong>3년 이하 징역 또는 2천만원 이하 벌금</strong></li>
  <li>최저임금에 미달하는 근로계약은 그 부분에 한하여 <strong>무효</strong> → 최저임금으로 간주</li>
  <li>최저임금 주지 의무: 사업장에 게시 또는 근로자에게 알려야 함</li>
</ul>`},{title:`남녀고용평등법과 고용정책기본법`,content:`<h4>남녀고용평등과 일·가정 양립 지원에 관한 법률</h4>
<h4>주요 내용</h4>
<ul>
  <li><strong>고용에서의 남녀 차별 금지:</strong> 모집·채용, 임금, 배치·승진, 교육, 정년·퇴직·해고에서 차별 금지</li>
  <li><strong>동일가치노동 동일임금 원칙:</strong> 같은 사업 내 동일 가치 노동에 동일 임금</li>
  <li><strong>직장 내 성희롱 금지:</strong> 사업주·상급자·근로자의 성희롱 금지, 예방교육 연 1회 의무</li>
  <li><strong>적극적 고용개선조치:</strong> 500인 이상 사업장, 여성 고용비율이 일정 기준 미달 시 시행계획 수립</li>
</ul>
<h4>일·가정 양립 지원</h4>
<ul>
  <li><strong>육아휴직:</strong> 만 8세(초등학교 2학년) 이하 자녀, 1년 이내</li>
  <li><strong>육아기 근로시간 단축:</strong> 육아휴직 대신 주 15~35시간 단축 근무</li>
  <li><strong>배우자 출산휴가:</strong> 10일 유급</li>
  <li><strong>가족돌봄휴직:</strong> 부모·배우자·자녀·배우자부모 돌봄, 90일</li>
</ul>
<h4>고용정책기본법</h4>
<ul>
  <li>국가의 고용정책 기본 방향과 수립 절차 규정</li>
  <li><strong>고용영향평가:</strong> 주요 정책이 고용에 미치는 영향 사전 평가</li>
  <li><strong>지역고용촉진:</strong> 지역별 특성에 맞는 고용 창출 지원</li>
  <li><strong>고용정보 수집·제공:</strong> 고용동향, 직업 전망 등 정보 체계 구축</li>
</ul>`}]},{title:`시험 핵심키워드 - 노동법`,topics:[{title:`노동법의 특징`,content:`<div class="exam-important">
<h4 class="exam-important">노동법의 5대 특징</h4>
<table>
  <tr><th>특징</th><th>내용</th></tr>
  <tr><td><strong>근로자의 인간다운 생활보장</strong></td><td>인간의 존엄성에 기초하여 근로자의 최저 생활수준을 법적으로 보장</td></tr>
  <tr><td><strong>근대시민법 원리의 수정</strong></td><td>계약자유의 원칙, 소유권 절대의 원칙 등 시민법 원리를 수정하여 실질적 평등 실현</td></tr>
  <tr><td><strong>종속근로관계의 규율</strong></td><td>사용자에 대해 경제적·인적으로 종속된 근로관계를 법적으로 규율</td></tr>
  <tr><td><strong>노사대등의 실현</strong></td><td>사용자와 근로자 간의 실질적인 대등관계를 실현하기 위한 법적 장치 마련</td></tr>
  <tr><td><strong>자본주의체제의 유지·발전</strong></td><td>노사 간 갈등을 조정하여 자본주의 경제체제의 안정적 유지·발전 도모</td></tr>
</table>
<p>★ <strong>암기 팁:</strong> '인근종노자' — 인간다운 생활, 근대시민법 수정, 종속근로, 노사대등, 자본주의</p>
<p>※ <strong>출제 함정:</strong> "노동법은 사회주의 체제를 지향한다" → <strong>오답!</strong> 자본주의체제의 유지·발전이 목적임에 주의</p>
</div>`},{title:`근로기본권의 개념`,content:`<div class="exam-important">
<h4 class="exam-important">근로기본권 체계</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 280" style="max-width:500px;width:100%">
  <defs>
    <marker id="arrow-labor" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6366f1"/></marker>
  </defs>
  <rect x="160" y="10" width="200" height="50" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="260" y="40" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">근로기본권</text>
  <line x1="180" y1="60" x2="100" y2="90" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <line x1="340" y1="60" x2="420" y2="90" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <rect x="10" y="90" width="180" height="55" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="100" y="113" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">근로의 권리</text>
  <text x="100" y="133" text-anchor="middle" font-size="11" fill="#1e40af">헌법 제32조 제1항</text>
  <rect x="330" y="90" width="180" height="55" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="420" y="113" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">근로3권</text>
  <text x="420" y="133" text-anchor="middle" font-size="11" fill="#dc2626">헌법 제33조 제1항</text>
  <line x1="340" y1="145" x2="260" y2="175" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <line x1="420" y1="145" x2="420" y2="175" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <line x1="500" y1="145" x2="500" y2="175" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <rect x="190" y="175" width="140" height="45" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="260" y="202" text-anchor="middle" font-size="12" font-weight="bold" fill="#9d174d">단결권</text>
  <rect x="350" y="175" width="140" height="45" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="420" y="202" text-anchor="middle" font-size="12" font-weight="bold" fill="#9d174d">단체교섭권</text>
  <rect x="430" y="175" width="140" height="45" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="500" y="202" text-anchor="middle" font-size="12" font-weight="bold" fill="#9d174d">단체행동권</text>
  <text x="260" y="245" text-anchor="middle" font-size="10" fill="#666">노동조합 결성</text>
  <text x="420" y="245" text-anchor="middle" font-size="10" fill="#666">사용자와 교섭</text>
  <text x="500" y="245" text-anchor="middle" font-size="10" fill="#666">쟁의행위(파업 등)</text>
</svg>
</div>
<h4 class="exam-important">근로의 권리 (헌법 제32조 제1항)</h4>
<ul>
  <li>모든 국민은 <strong>근로의 권리</strong>를 가진다</li>
  <li>국가는 사회적·경제적 방법으로 근로자의 <strong>고용의 증진과 적정임금의 보장</strong>에 노력해야 함</li>
  <li>국가는 법률이 정하는 바에 의하여 <strong>최저임금제</strong>를 시행해야 함</li>
</ul>
<h4 class="exam-important">근로3권 (헌법 제33조 제1항)</h4>
<table>
  <tr><th>권리</th><th>내용</th><th>핵심</th></tr>
  <tr><td><strong>단결권</strong></td><td>근로자가 근로조건의 유지·개선을 위하여 자주적으로 단결하는 권리</td><td>노동조합 결성</td></tr>
  <tr><td><strong>단체교섭권</strong></td><td>근로자단체가 사용자 또는 사용자단체와 근로조건에 관해 교섭하는 권리</td><td>사용자와 협상</td></tr>
  <tr><td><strong>단체행동권</strong></td><td>근로자단체가 그 주장을 관철하기 위하여 단체행동을 할 수 있는 권리</td><td>파업·태업 등</td></tr>
</table>
<p>★ <strong>출제 포인트:</strong> 근로의 권리는 <strong>제32조</strong>, 근로3권은 <strong>제33조</strong> — 조문 번호 혼동 주의!</p>
<p>※ <strong>출제 함정:</strong> "단체행동권은 근로의 권리에 포함된다" → <strong>오답!</strong> 단체행동권은 근로3권에 해당</p>
</div>`}]},{title:`시험 핵심키워드 - 근로기준법`,topics:[{title:`취업규칙의 작성·신고·변경`,content:`<div class="exam-important">
<h4 class="exam-important">취업규칙 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>작성·신고 의무</strong></td><td>상시 <strong>10명 이상</strong> 근로자를 사용하는 사용자 → <strong>고용노동부장관</strong>에게 신고</td></tr>
  <tr><td><strong>불리하게 변경</strong></td><td>근로자에게 불리하게 변경하려면 <strong>근로자 과반수의 동의</strong> 필요</td></tr>
  <tr><td><strong>노동조합 없는 경우</strong></td><td>근로자 <strong>과반수의 의견</strong>을 들어 <strong>서면으로 첨부</strong>하여 신고</td></tr>
</table>
<p>★ <strong>핵심 구분:</strong> 불리한 변경 = <strong>"동의"</strong> 필요 / 불리하지 않은 변경 = <strong>"의견"</strong> 청취</p>
<p>※ <strong>출제 함정:</strong> "취업규칙을 불리하게 변경할 때 근로자 과반수의 '의견'을 들으면 된다" → <strong>오답!</strong> 반드시 '동의'가 필요함</p>
<p>※ <strong>출제 함정:</strong> "상시 5명 이상 사업장에서 취업규칙 작성 의무" → <strong>오답!</strong> <strong>10명 이상</strong>이 정답</p>
</div>`},{title:`경영상 해고`,content:`<div class="exam-important">
<h4 class="exam-important">경영상 해고(정리해고)의 4대 요건</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 200" style="max-width:500px;width:100%">
  <rect x="10" y="20" width="110" height="70" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="65" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">1요건</text>
  <text x="65" y="68" text-anchor="middle" font-size="10" fill="#92400e">긴박한</text>
  <text x="65" y="82" text-anchor="middle" font-size="10" fill="#92400e">경영상 필요</text>
  <rect x="135" y="20" width="110" height="70" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="190" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">2요건</text>
  <text x="190" y="68" text-anchor="middle" font-size="10" fill="#1e40af">해고 피하기</text>
  <text x="190" y="82" text-anchor="middle" font-size="10" fill="#1e40af">위한 노력</text>
  <rect x="260" y="20" width="110" height="70" rx="10" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="315" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">3요건</text>
  <text x="315" y="68" text-anchor="middle" font-size="10" fill="#166534">합리적·공정한</text>
  <text x="315" y="82" text-anchor="middle" font-size="10" fill="#166534">해고 기준</text>
  <rect x="385" y="20" width="125" height="70" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="447" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">4요건</text>
  <text x="447" y="68" text-anchor="middle" font-size="10" fill="#9d174d">50일 전 통보</text>
  <text x="447" y="82" text-anchor="middle" font-size="10" fill="#9d174d">성실 협의</text>
  <rect x="10" y="110" width="510" height="45" rx="8" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
  <text x="265" y="128" text-anchor="middle" font-size="11" fill="#374151">노동부장관 신고 사항: 해고사유 / 예정인원 / 협의내용 / 해고일정</text>
  <text x="265" y="148" text-anchor="middle" font-size="10" fill="#6b7280">★ 암기: '사예협일' (사유, 예정인원, 협의내용, 일정)</text>
</svg>
</div>
<h4 class="exam-important">해고예고와 부당해고 구제</h4>
<table>
  <tr><th>구분</th><th>내용</th><th>핵심 숫자</th></tr>
  <tr><td><strong>해고예고</strong></td><td>해고일로부터 <strong>30일 전</strong>에 예고</td><td>30일</td></tr>
  <tr><td><strong>해고예고수당</strong></td><td>예고하지 않은 경우 <strong>30일분 이상의 통상임금</strong> 지급</td><td>30일분 통상임금</td></tr>
  <tr><td><strong>50일 전 통보</strong></td><td>근로자대표에게 해고 <strong>50일 전</strong>까지 통보하고 성실하게 협의</td><td>50일</td></tr>
  <tr><td><strong>부당해고 구제</strong></td><td>해고일로부터 <strong>3개월 이내</strong>에 노동위원회에 신청</td><td>3개월</td></tr>
</table>
<p>★ <strong>숫자 정리:</strong> 해고예고 <strong>30일</strong> / 근로자대표 통보 <strong>50일</strong> / 구제신청 <strong>3개월</strong></p>
<p>※ <strong>출제 함정:</strong> "경영상 해고 시 60일 전에 근로자대표에게 통보" → <strong>오답!</strong> 정답은 <strong>50일</strong> 전</p>
<p>※ <strong>출제 함정:</strong> "해고예고수당은 평균임금 30일분" → <strong>오답!</strong> 해고예고수당은 <strong>통상임금</strong> 30일분</p>
</div>`},{title:`용어 정의`,content:`<div class="exam-important">
<h4 class="exam-important">근로기준법 핵심 용어</h4>
<table>
  <tr><th>용어</th><th>정의</th><th>출제 포인트</th></tr>
  <tr><td><strong>근로자</strong></td><td>직업의 종류와 관계없이 <strong>임금을 목적으로</strong> 사업이나 사업장에 근로를 제공하는 자</td><td>"직업종류 무관"이 핵심</td></tr>
  <tr><td><strong>사용자</strong></td><td><strong>사업주</strong> 또는 사업 <strong>경영담당자</strong>, 그 밖에 근로자에 관한 사항에 대하여 사업주를 위하여 행위하는 자</td><td>사업주 + 경영담당자</td></tr>
  <tr><td><strong>근로</strong></td><td><strong>정신노동</strong>과 <strong>육체노동</strong></td><td>정신+육체 모두 포함</td></tr>
  <tr><td><strong>근로계약</strong></td><td>근로자가 사용자에게 근로를 제공하고 사용자는 이에 대하여 <strong>임금을 지급</strong>하는 것을 목적으로 체결된 계약</td><td>임금지급이 목적</td></tr>
  <tr><td><strong>1주</strong></td><td><strong>휴일을 포함</strong>한 7일</td><td>휴일 포함 여부 주의</td></tr>
  <tr><td><strong>단시간근로자</strong></td><td>1주 동안의 소정근로시간이 그 사업장에서 같은 종류의 업무에 종사하는 <strong>통상 근로자보다 짧은</strong> 근로자</td><td>"통상근로자 기준" 비교</td></tr>
</table>
<p>★ <strong>출제 포인트:</strong> 근로자의 정의에서 <strong>"직업의 종류와 관계없이"</strong>와 <strong>"임금을 목적으로"</strong>가 핵심 키워드</p>
<p>※ <strong>출제 함정:</strong> "1주란 휴일을 제외한 7일을 말한다" → <strong>오답!</strong> 1주는 <strong>휴일을 포함</strong>한 7일</p>
</div>`},{title:`근로조건`,content:`<div class="exam-important">
<h4 class="exam-important">근로조건 명시사항</h4>
<table>
  <tr><th>구분</th><th>명시사항</th><th>서면교부 필수</th></tr>
  <tr><td>임금</td><td>임금의 구성항목, 계산방법, 지급방법</td><td><strong>O</strong></td></tr>
  <tr><td>근로시간</td><td>소정근로시간</td><td><strong>O</strong></td></tr>
  <tr><td>휴일</td><td>휴일</td><td><strong>O</strong></td></tr>
  <tr><td>휴가</td><td>연차유급휴가</td><td><strong>O</strong></td></tr>
  <tr><td>취업장소·업무</td><td>취업의 장소와 종사하여야 할 업무에 관한 사항</td><td>X (명시만)</td></tr>
  <tr><td>취업규칙</td><td>취업규칙의 필수 기재사항</td><td>X (명시만)</td></tr>
  <tr><td>기숙사</td><td>기숙사 규칙에서 정한 사항</td><td>X (명시만)</td></tr>
</table>
<p>★ <strong>서면교부 필수 4가지:</strong> 임금 / 소정근로시간 / 휴일 / 연차유급휴가 — 암기: <strong>'임소휴연'</strong></p>
<h4 class="exam-important">단시간근로자 특례 (주 15시간 미만)</h4>
<ul>
  <li>주 <strong>15시간 미만</strong> 근로자: <strong>주휴일</strong> 미적용, <strong>연차유급휴가</strong> 미적용</li>
</ul>
<h4 class="exam-important">근로조건 위반 시</h4>
<ul>
  <li>근로자는 <strong>노동위원회에 손해배상</strong>을 청구할 수 있음</li>
  <li>근로자는 근로계약을 <strong>즉시 해제</strong>할 수 있음</li>
</ul>
<p>※ <strong>출제 함정:</strong> "취업장소와 업무는 서면으로 교부해야 한다" → <strong>오답!</strong> 서면교부 필수는 임금/소정근로시간/휴일/연차유급휴가만 해당</p>
</div>`},{title:`평균임금과 통상임금`,content:`<div class="exam-important">
<h4 class="exam-important">평균임금 vs 통상임금 적용 비교</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 310" style="max-width:500px;width:100%">
  <rect x="10" y="10" width="240" height="290" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="130" y="40" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">평균임금 적용</text>
  <text x="130" y="70" text-anchor="middle" font-size="11" fill="#1e40af">1. 퇴직급여</text>
  <text x="130" y="92" text-anchor="middle" font-size="11" fill="#1e40af">2. 휴업수당</text>
  <text x="130" y="114" text-anchor="middle" font-size="11" fill="#1e40af">3. 연차유급휴가수당</text>
  <text x="130" y="136" text-anchor="middle" font-size="11" fill="#1e40af">4. 재해보상</text>
  <text x="130" y="158" text-anchor="middle" font-size="11" fill="#1e40af">5. 산업재해보상</text>
  <text x="130" y="180" text-anchor="middle" font-size="11" fill="#1e40af">6. 감급 제한액</text>
  <text x="130" y="202" text-anchor="middle" font-size="11" fill="#1e40af">7. 구직급여</text>
  <text x="130" y="240" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">암기: '퇴휴연재산감구'</text>
  <text x="130" y="260" text-anchor="middle" font-size="10" fill="#1e3a8a">퇴직, 휴업, 연차, 재해,</text>
  <text x="130" y="278" text-anchor="middle" font-size="10" fill="#1e3a8a">산재, 감급, 구직</text>
  <rect x="270" y="10" width="240" height="290" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="390" y="40" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">통상임금 적용</text>
  <text x="390" y="70" text-anchor="middle" font-size="11" fill="#dc2626">1. 해고예고수당</text>
  <text x="390" y="92" text-anchor="middle" font-size="11" fill="#dc2626">2. 연장근로수당</text>
  <text x="390" y="114" text-anchor="middle" font-size="11" fill="#dc2626">3. 야간근로수당</text>
  <text x="390" y="136" text-anchor="middle" font-size="11" fill="#dc2626">4. 휴일근로수당</text>
  <text x="390" y="158" text-anchor="middle" font-size="11" fill="#dc2626">5. 연차유급휴가(수당)</text>
  <text x="390" y="180" text-anchor="middle" font-size="11" fill="#dc2626">6. 출산전후휴가급여</text>
  <text x="390" y="240" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">암기: '해연야휴연출'</text>
  <text x="390" y="260" text-anchor="middle" font-size="10" fill="#991b1b">해고예고, 연장, 야간,</text>
  <text x="390" y="278" text-anchor="middle" font-size="10" fill="#991b1b">휴일, 연차, 출산</text>
</svg>
</div>
<p>★ <strong>핵심:</strong> 평균임금이 통상임금보다 낮으면 <strong>통상임금을 평균임금으로</strong> 적용</p>
<p>★ <strong>연차유급휴가수당</strong>은 평균임금·통상임금 <strong>양쪽 모두</strong>에 해당 — 출제 빈출!</p>
<p>※ <strong>출제 함정:</strong> "해고예고수당은 평균임금으로 산정한다" → <strong>오답!</strong> 해고예고수당은 <strong>통상임금</strong> 기준</p>
<p>※ <strong>출제 함정:</strong> "휴업수당은 통상임금의 70%이다" → <strong>오답!</strong> 휴업수당은 <strong>평균임금</strong>의 70%</p>
</div>`},{title:`임금지급 원칙`,content:`<div class="exam-important">
<h4 class="exam-important">임금지급 4대 원칙</h4>
<table>
  <tr><th>원칙</th><th>내용</th></tr>
  <tr><td><strong>통화불(通貨拂)</strong></td><td>한국은행에서 발행한 <strong>통화</strong>로 지급</td></tr>
  <tr><td><strong>직접불(直接拂)</strong></td><td>근로자 본인에게 <strong>직접</strong> 지급</td></tr>
  <tr><td><strong>전액불(全額拂)</strong></td><td>임금의 <strong>전액</strong>을 지급 (법령·단체협약에 의한 경우 외 공제 불가)</td></tr>
  <tr><td><strong>정기불(定期拂)</strong></td><td><strong>매월 1회 이상</strong> 일정한 기일에 지급</td></tr>
</table>
<p>★ <strong>암기:</strong> '통직전정' — 통화불, 직접불, 전액불, 정기불</p>
<h4 class="exam-important">도급사업의 임금지급</h4>
<ul>
  <li><strong>직상수급인</strong>과 <strong>하수급인</strong>이 <strong>연대책임</strong>을 짐</li>
</ul>
<h4 class="exam-important">비상시 지급 사유</h4>
<table>
  <tr><th>사유</th><th>상세</th></tr>
  <tr><td><strong>출산</strong></td><td>근로자 또는 그 수급권자의 출산</td></tr>
  <tr><td><strong>질병</strong></td><td>질병에 걸린 경우</td></tr>
  <tr><td><strong>재해</strong></td><td>재해를 입은 경우</td></tr>
  <tr><td><strong>혼인</strong></td><td>결혼하는 경우</td></tr>
  <tr><td><strong>사망</strong></td><td>사망한 경우</td></tr>
  <tr><td><strong>1주 이상 귀향</strong></td><td>부득이한 사유로 <strong>1주 이상 귀향</strong>하게 되는 경우</td></tr>
</table>
<p>★ <strong>암기:</strong> '출질재혼사귀' — 출산, 질병, 재해, 혼인, 사망, 1주 이상 귀향</p>
<h4 class="exam-important">휴업수당</h4>
<ul>
  <li>사용자의 귀책사유로 휴업하는 경우: <strong>평균임금의 70% 이상</strong> 지급</li>
</ul>
<p>※ <strong>출제 함정:</strong> "비상시 지급 사유에 '2주 이상 귀향'이 포함된다" → <strong>오답!</strong> 정답은 <strong>1주 이상</strong> 귀향</p>
</div>`},{title:`임금의 시효`,content:`<div class="exam-important">
<h4 class="exam-important">임금채권 소멸시효</h4>
<ul>
  <li>임금채권은 <strong>3년간</strong> 행사하지 않으면 <strong>시효로 소멸</strong></li>
</ul>
<table>
  <tr><th>구분</th><th>소멸시효</th></tr>
  <tr><td><strong>임금채권</strong></td><td><strong>3년</strong></td></tr>
  <tr><td><strong>퇴직금채권</strong></td><td><strong>3년</strong></td></tr>
  <tr><td><strong>재해보상청구권</strong></td><td><strong>3년</strong></td></tr>
</table>
<p>★ <strong>핵심 숫자:</strong> 근로기준법상 각종 채권의 소멸시효는 모두 <strong>3년</strong></p>
<p>※ <strong>출제 함정:</strong> "임금채권의 소멸시효는 5년이다" → <strong>오답!</strong> 정답은 <strong>3년</strong> (민법상 일반채권 10년과 혼동 주의)</p>
</div>`},{title:`임산부 보호`,content:`<div class="exam-important">
<h4 class="exam-important">출산전후휴가</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 200" style="max-width:500px;width:100%">
  <rect x="10" y="10" width="240" height="80" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="130" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">일반 출산</text>
  <text x="130" y="58" text-anchor="middle" font-size="12" fill="#1e40af">총 90일 (출산후 45일 이상)</text>
  <text x="130" y="78" text-anchor="middle" font-size="11" fill="#3b82f6">최초 60일 유급</text>
  <rect x="270" y="10" width="240" height="80" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="390" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#9d174d">다태아(쌍둥이)</text>
  <text x="390" y="58" text-anchor="middle" font-size="12" fill="#9d174d">총 120일 (출산후 60일 이상)</text>
  <text x="390" y="78" text-anchor="middle" font-size="11" fill="#ec4899">최초 75일 유급</text>
  <rect x="10" y="110" width="500" height="70" rx="10" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
  <text x="260" y="132" text-anchor="middle" font-size="11" fill="#374151">출산 전: 언제든지 나누어 사용 가능 | 유산·사산 휴가 부여</text>
  <text x="260" y="152" text-anchor="middle" font-size="11" fill="#374151">휴가 후: 동일 업무 또는 동등 수준 임금의 직무로 복귀</text>
  <text x="260" y="172" text-anchor="middle" font-size="11" fill="#6b7280">임신 중 시간외근로 금지(원칙) | 쉬운 업무로 전환 요청 가능</text>
</svg>
</div>
<h4 class="exam-important">출산전후휴가 핵심 숫자</h4>
<table>
  <tr><th>구분</th><th>일반</th><th>다태아(쌍둥이)</th></tr>
  <tr><td><strong>총 휴가일수</strong></td><td><strong>90일</strong></td><td><strong>120일</strong></td></tr>
  <tr><td><strong>출산후 최소 확보</strong></td><td><strong>45일</strong></td><td><strong>60일</strong></td></tr>
  <tr><td><strong>유급 기간</strong></td><td>최초 <strong>60일</strong></td><td>최초 <strong>75일</strong></td></tr>
</table>
<h4 class="exam-important">임신기 근로시간 단축</h4>
<ul>
  <li>임신 후 <strong>12주 이내</strong> 또는 <strong>36주 이후</strong>: 1일 <strong>2시간</strong> 근로시간 단축 허용</li>
  <li><strong>시작 및 종료시각</strong> 변경을 신청할 수 있음</li>
</ul>
<p>★ <strong>핵심 숫자:</strong> 일반 90/45/60 | 다태아 120/60/75 | 단축 12주·36주·2시간</p>
<p>※ <strong>출제 함정:</strong> "출산전후휴가는 출산후 60일 이상 확보해야 한다" → <strong>오답!</strong> 일반은 <strong>45일</strong>, 다태아가 60일</p>
<p>※ <strong>출제 함정:</strong> "임신기 근로시간 단축은 24주 이내에 가능하다" → <strong>오답!</strong> <strong>12주 이내</strong> 또는 <strong>36주 이후</strong></p>
</div>`},{title:`이행강제금`,content:`<div class="exam-important">
<h4 class="exam-important">이행강제금 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th><th>핵심</th></tr>
  <tr><td><strong>구제명령 이행기한</strong></td><td>서면통지 후 <strong>30일 이내</strong></td><td>30일</td></tr>
  <tr><td><strong>이행강제금 상한</strong></td><td><strong>3천만원 이하</strong></td><td>3,000만원</td></tr>
  <tr><td><strong>사전 문서통보</strong></td><td>부과 <strong>30일 전</strong>까지 문서로 통보</td><td>30일 전</td></tr>
  <tr><td><strong>반복 부과</strong></td><td>매년 <strong>2회</strong> 범위 내, 이행시까지 반복</td><td>연 2회</td></tr>
  <tr><td><strong>반복 부과 한도</strong></td><td><strong>2년</strong> 초과 불가</td><td>최대 2년</td></tr>
  <tr><td><strong>근로자 신고</strong></td><td>이행기한 지난 후 <strong>15일 이내</strong></td><td>15일</td></tr>
</table>
<h4 class="exam-important">이행강제금 주요 원칙</h4>
<ul>
  <li>이행 <strong>전</strong>에 이미 부과된 이행강제금은 <strong>징수</strong>함 (취소하지 않음)</li>
  <li><strong>국세체납처분</strong>의 예에 따라 징수</li>
</ul>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 130" style="max-width:500px;width:100%">
  <rect x="10" y="20" width="100" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="60" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">구제명령</text>
  <text x="60" y="58" text-anchor="middle" font-size="9" fill="#92400e">서면통지</text>
  <line x1="115" y1="45" x2="140" y2="45" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <rect x="145" y="20" width="100" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="195" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">30일 이내</text>
  <text x="195" y="58" text-anchor="middle" font-size="9" fill="#1e40af">이행기한</text>
  <line x1="250" y1="45" x2="275" y2="45" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <rect x="280" y="20" width="100" height="50" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="330" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">미이행 시</text>
  <text x="330" y="58" text-anchor="middle" font-size="9" fill="#dc2626">30일전 통보</text>
  <line x1="385" y1="45" x2="410" y2="45" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <rect x="415" y="20" width="100" height="50" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="465" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">부과</text>
  <text x="465" y="58" text-anchor="middle" font-size="9" fill="#166534">3천만원 이하</text>
  <text x="260" y="100" text-anchor="middle" font-size="10" fill="#6b7280">매년 2회 범위 내 반복 부과 (최대 2년)</text>
  <text x="260" y="118" text-anchor="middle" font-size="10" fill="#6b7280">근로자 신고: 이행기한 경과 후 15일 이내</text>
</svg>
</div>
<p>★ <strong>숫자 총정리:</strong> 이행기한 <strong>30일</strong> / 부과 전 통보 <strong>30일</strong> / 상한 <strong>3천만원</strong> / 연 <strong>2회</strong> / 최대 <strong>2년</strong> / 근로자 신고 <strong>15일</strong></p>
<p>※ <strong>출제 함정:</strong> "이행 후 이미 부과된 이행강제금은 취소한다" → <strong>오답!</strong> 이행 전 부과분은 <strong>징수</strong>함 (취소 안 됨)</p>
</div>`},{title:`최저연령과 취직인허증`,content:`<div class="exam-important">
<h4 class="exam-important">최저 고용연령</h4>
<ul>
  <li><strong>15세 미만</strong>인 자는 근로자로 사용하지 못함</li>
  <li><strong>중학교에 재학 중인 18세 미만</strong>인 자도 포함</li>
</ul>
<h4 class="exam-important">취직인허증</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>대상</strong></td><td><strong>13세 이상 15세 미만</strong></td></tr>
  <tr><td><strong>예외</strong></td><td>예술공연 참가는 <strong>13세 미만</strong>도 가능</td></tr>
  <tr><td><strong>신청자</strong></td><td><strong>본인</strong>이 고용노동부장관에게 신청 (보호자 아님!)</td></tr>
  <tr><td><strong>서명 필요</strong></td><td><strong>학교장</strong>, <strong>친권자</strong> 또는 <strong>후견인</strong> 서명 + <strong>사용자될 자</strong>와 연명</td></tr>
  <tr><td><strong>취소 사유</strong></td><td>거짓으로 발급받은 경우 취소</td></tr>
</table>
<h4 class="exam-important">미성년자 근로의 특례</h4>
<ul>
  <li>친권자 또는 후견인은 미성년자의 근로계약을 <strong>대리할 수 없음</strong></li>
  <li>미성년자는 <strong>독자적으로 임금을 청구</strong>할 수 있음</li>
</ul>
<h4 class="exam-important">야간·휴일근로 (18세 이상 여성)</h4>
<ul>
  <li>야간근로: <strong>오후 10시 ~ 오전 6시</strong></li>
  <li><strong>근로자의 동의</strong>가 있어야 함</li>
</ul>
<h4 class="exam-important">생리휴가</h4>
<ul>
  <li><strong>월 1일</strong> 청구 시 부여</li>
</ul>
<p>★ <strong>연령 정리:</strong> 사용금지 <strong>15세 미만</strong> / 취직인허증 <strong>13세~15세</strong> / 예술공연 <strong>13세 미만</strong>도 가능</p>
<p>※ <strong>출제 함정:</strong> "취직인허증은 보호자가 신청한다" → <strong>오답!</strong> <strong>본인</strong>이 신청</p>
<p>※ <strong>출제 함정:</strong> "친권자는 미성년자의 근로계약을 대리할 수 있다" → <strong>오답!</strong> 대리계약 <strong>불가</strong></p>
</div>`}]},{title:`시험 핵심키워드 - 남녀고용평등법`,topics:[{title:`용어 정의`,content:`<div class="exam-important">
<h4 class="exam-important">남녀고용평등법 핵심 용어</h4>
<table>
  <tr><th>용어</th><th>정의</th></tr>
  <tr><td><strong>차별</strong></td><td>성별, 혼인, 가족 안에서의 지위, 임신 또는 출산 등의 사유로 <strong>합리적인 이유 없이</strong> 채용 또는 근로의 조건을 다르게 하거나, 동일한 조건에서 <strong>특정 성에게 불리한 결과</strong>를 초래하는 것</td></tr>
  <tr><td><strong>차별 아닌 경우</strong></td><td>① 직무의 성격에 비추어 <strong>특정 성이 불가피</strong>하게 요구되는 경우<br>② 여성 근로자의 <strong>모성보호 조치</strong><br>③ 현존 차별 해소를 위한 <strong>적극적 고용개선조치</strong></td></tr>
  <tr><td><strong>직장 내 성희롱</strong></td><td>사업주·상급자 또는 근로자가 <strong>직장 내의 지위를 이용</strong>하거나 <strong>업무와 관련</strong>하여 다른 근로자에게 <strong>성적 굴욕감 또는 혐오감</strong>을 느끼게 하는 행위</td></tr>
  <tr><td><strong>적극적 고용개선조치</strong></td><td>현존하는 차별을 해소하기 위하여 <strong>잠정적</strong>으로 <strong>특정 성</strong>을 우대하는 조치</td></tr>
  <tr><td><strong>근로자</strong></td><td>사업주에게 <strong>고용된 자</strong>와 <strong>취업할 의사를 가진 자</strong>를 포함</td></tr>
</table>
<p>★ <strong>출제 포인트:</strong> 남녀고용평등법의 "근로자"는 근로기준법과 달리 <strong>"취업할 의사를 가진 자"</strong>도 포함!</p>
<p>※ <strong>출제 함정:</strong> "적극적 고용개선조치는 영구적으로 특정 성을 우대하는 조치이다" → <strong>오답!</strong> <strong>"잠정적"</strong>이 핵심 키워드</p>
</div>`},{title:`육아휴직`,content:`<div class="exam-important">
<h4 class="exam-important">육아휴직 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>대상</strong></td><td>① 임신 중인 여성 근로자<br>② <strong>만 8세 이하</strong> 또는 <strong>초등학교 2학년 이하</strong> 자녀를 가진 근로자 (입양 포함)</td></tr>
  <tr><td><strong>기간</strong></td><td><strong>1년 이내</strong></td></tr>
  <tr><td><strong>제외 대상</strong></td><td>해당 사업에서 계속 근로한 기간이 <strong>6개월 미만</strong>인 근로자</td></tr>
  <tr><td><strong>근속기간</strong></td><td>육아휴직 기간은 <strong>근속기간에 포함</strong></td></tr>
  <tr><td><strong>해고/불리처우</strong></td><td>금지 (단, <strong>사업을 계속할 수 없는 경우</strong>는 예외)</td></tr>
  <tr><td><strong>복귀</strong></td><td>휴직 전과 같은 업무 또는 <strong>동등한 수준의 임금</strong>을 지급하는 직무로 복귀</td></tr>
  <tr><td><strong>기간제/파견</strong></td><td>육아휴직 기간은 <strong>사용기간에서 제외</strong></td></tr>
  <tr><td><strong>종료예정일 연기</strong></td><td><strong>한 번만</strong> 가능</td></tr>
  <tr><td><strong>철회</strong></td><td>개시예정일 <strong>7일 전</strong>까지</td></tr>
</table>
<p>★ <strong>숫자 정리:</strong> 대상 <strong>만 8세/초교 2학년</strong> | 기간 <strong>1년</strong> | 제외 <strong>6개월 미만</strong> | 연기 <strong>1회</strong> | 철회 <strong>7일 전</strong></p>
<p>※ <strong>출제 함정:</strong> "육아휴직 기간은 근속기간에 포함되지 않는다" → <strong>오답!</strong> <strong>포함됨</strong></p>
<p>※ <strong>출제 함정:</strong> "육아휴직 종료예정일은 두 번까지 연기할 수 있다" → <strong>오답!</strong> <strong>한 번만</strong> 가능</p>
</div>`},{title:`평등한 기회보장`,content:`<div class="exam-important">
<h4 class="exam-important">차별금지 영역별 벌칙 비교</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 320" style="max-width:500px;width:100%">
  <text x="260" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#374151">남녀고용평등법 벌칙 체계</text>
  <rect x="10" y="35" width="500" height="55" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="260" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">5년 이하 징역 / 3천만원 이하 벌금</text>
  <text x="260" y="78" text-anchor="middle" font-size="11" fill="#991b1b">정년·퇴직·해고 차별 (혼인/임신/출산 사유 퇴직 강요 금지)</text>
  <rect x="10" y="100" width="500" height="55" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="260" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">3년 이하 징역 / 3천만원 이하 벌금</text>
  <text x="260" y="143" text-anchor="middle" font-size="11" fill="#92400e">임금 차별 (동일가치노동 동일임금 위반)</text>
  <rect x="10" y="165" width="500" height="100" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="260" y="185" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">500만원 이하 벌금</text>
  <text x="260" y="208" text-anchor="middle" font-size="11" fill="#1e40af">모집·채용 차별 (남녀 구별, 용모/키/체중/미혼조건 금지)</text>
  <text x="260" y="228" text-anchor="middle" font-size="11" fill="#1e40af">임금 외 금품 차별</text>
  <text x="260" y="248" text-anchor="middle" font-size="11" fill="#1e40af">교육·배치·승진 차별</text>
  <rect x="60" y="280" width="400" height="30" rx="6" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
  <text x="260" y="300" text-anchor="middle" font-size="10" fill="#6b7280">동일가치 판단 기준: 기술 / 노력 / 책임 / 작업조건 (노사협의회 의견 청취)</text>
</svg>
</div>
<h4 class="exam-important">모집·채용 시 금지 조건</h4>
<ul>
  <li><strong>용모</strong>, <strong>키</strong>, <strong>체중</strong>, <strong>미혼</strong> 조건을 제시하거나 요구 금지</li>
  <li>남녀를 구별하여 모집·채용 금지</li>
</ul>
<h4 class="exam-important">동일가치노동 판단 기준</h4>
<ul>
  <li><strong>기술</strong>, <strong>노력</strong>, <strong>책임</strong>, <strong>작업조건</strong> 등을 종합적으로 고려</li>
  <li><strong>노사협의회</strong>의 의견을 들어야 함</li>
</ul>
<p>★ <strong>벌칙 크기 순서:</strong> 정년·퇴직·해고(<strong>5년/3천만</strong>) > 임금(<strong>3년/3천만</strong>) > 모집·채용 등(<strong>500만</strong>)</p>
<p>※ <strong>출제 함정:</strong> "모집·채용 차별은 3년 이하 징역에 해당한다" → <strong>오답!</strong> 모집·채용 차별은 <strong>500만원 이하 벌금</strong></p>
</div>`},{title:`명예고용평등감독관`,content:`<div class="exam-important">
<h4 class="exam-important">명예고용평등감독관 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>위촉 주체</strong></td><td><strong>고용노동부장관</strong>이 노사 추천 근로자를 위촉</td></tr>
  <tr><td><strong>위촉/해촉 위임</strong></td><td><strong>지방고용노동관서장</strong>에게 위임</td></tr>
  <tr><td><strong>신분 보장</strong></td><td>인사상 불이익 금지</td></tr>
  <tr><td><strong>임기</strong></td><td><strong>3년</strong> (연임 가능)</td></tr>
  <tr><td><strong>근무형태</strong></td><td><strong>비상근</strong></td></tr>
  <tr><td><strong>보수</strong></td><td><strong>무보수</strong> 원칙</td></tr>
</table>
<h4 class="exam-important">명예고용평등감독관의 업무</h4>
<ul>
  <li><strong>상담·조언:</strong> 직장 내 고용평등 이행에 관한 상담과 조언</li>
  <li><strong>자율점검 참여:</strong> 사업장의 고용평등 자율적 점검 활동에 참여</li>
  <li><strong>개선건의·신고:</strong> 법령 위반 사실이 있는 경우 개선 건의 및 신고</li>
  <li><strong>홍보·계몽:</strong> 남녀고용평등 의식을 확산시키기 위한 홍보·계몽 활동</li>
</ul>
<p>★ <strong>암기:</strong> 업무 = '상자개홍' (상담조언, 자율점검, 개선건의/신고, 홍보계몽)</p>
<p>★ <strong>핵심:</strong> 비상근 + 무보수 + 임기 3년 + 연임 가능</p>
<p>※ <strong>출제 함정:</strong> "명예고용평등감독관은 상근직이다" → <strong>오답!</strong> <strong>비상근</strong>이며 <strong>무보수</strong> 원칙</p>
</div>`},{title:`출산전후휴가 지원`,content:`<div class="exam-important">
<h4 class="exam-important">출산전후휴가 지원 핵심</h4>
<ul>
  <li>출산전후휴가 기간 중 <strong>통상임금</strong>에 해당하는 금액을 지급</li>
  <li><strong>국가재정</strong> 또는 <strong>사회보험</strong>에서 분담 가능</li>
  <li>사업주는 출산전후휴가 급여 신청에 필요한 <strong>관계 서류의 작성에 협력</strong>해야 함</li>
  <li>지급 요건, 기간, 절차 등은 <strong>별도 법률</strong>에서 정함</li>
</ul>
<p>★ <strong>출제 포인트:</strong> "통상임금" 지급이라는 점에 주의 (평균임금이 아님)</p>
</div>`},{title:`배우자 출산휴가`,content:`<div class="exam-important">
<h4 class="exam-important">배우자 출산휴가 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>일수</strong></td><td><strong>10일</strong> 유급</td></tr>
  <tr><td><strong>청구 기한</strong></td><td>배우자 출산 후 <strong>90일 이내</strong>에 청구</td></tr>
  <tr><td><strong>분할 사용</strong></td><td><strong>1회에 한정</strong>하여 나누어 사용 가능</td></tr>
  <tr><td><strong>보호</strong></td><td>해고 및 불리한 처우 금지</td></tr>
</table>
<p>★ <strong>숫자 정리:</strong> <strong>10일</strong> 유급 / 출산 후 <strong>90일</strong> 이내 / <strong>1회</strong> 분할</p>
<p>※ <strong>출제 함정:</strong> "배우자 출산휴가는 5일이다" → <strong>오답!</strong> <strong>10일</strong> 유급</p>
<p>※ <strong>출제 함정:</strong> "배우자 출산휴가는 여러 번 나누어 사용할 수 있다" → <strong>오답!</strong> <strong>1회에 한정</strong></p>
</div>`},{title:`적용범위`,content:`<div class="exam-important">
<h4 class="exam-important">남녀고용평등법 적용범위</h4>
<ul>
  <li><strong>모든 사업</strong> 또는 <strong>사업장</strong>에 적용</li>
</ul>
<h4 class="exam-important">적용 제외</h4>
<table>
  <tr><th>제외 대상</th><th>내용</th></tr>
  <tr><td><strong>동거하는 친족만으로 이루어진 사업</strong></td><td>가족 경영 사업으로서 근로자를 별도로 고용하지 않은 경우</td></tr>
  <tr><td><strong>가사사용인</strong></td><td>가정 내에서 가사(가정일)에 종사하는 자</td></tr>
</table>
<ul>
  <li>다른 법률에 <strong>특별한 규정</strong>이 있는 경우를 제외하고는 이 법이 적용됨</li>
</ul>
<p>★ <strong>출제 포인트:</strong> 적용 제외 = <strong>동거친족만 사업</strong> + <strong>가사사용인</strong> (근로기준법과 동일한 제외 대상)</p>
</div>`},{title:`성희롱 예방교육`,content:`<div class="exam-important">
<h4 class="exam-important">성희롱 예방교육 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>횟수</strong></td><td>연 <strong>1회 이상</strong></td></tr>
  <tr><td><strong>포함 내용</strong></td><td>① 관련 <strong>법령</strong><br>② <strong>처리절차</strong>와 <strong>조치기준</strong><br>③ <strong>고충상담</strong> 및 <strong>구제절차</strong><br>④ 그 밖의 예방에 필요한 사항</td></tr>
  <tr><td><strong>교육 방법</strong></td><td>연수, 조회, 회의, 사이버교육 등</td></tr>
</table>
<h4 class="exam-important">교육으로 인정되지 않는 경우</h4>
<ul>
  <li>단순한 <strong>자료 배포</strong></li>
  <li><strong>게시</strong></li>
  <li><strong>이메일</strong> 발송</li>
  <li><strong>게시판</strong> 공지</li>
</ul>
<p style="color:#dc2626;font-weight:bold">→ 위 방법만으로는 교육 실시로 인정하지 않음!</p>
<h4 class="exam-important">소규모·단일성별 사업장 특례</h4>
<ul>
  <li><strong>상시 10명 미만</strong> 또는 <strong>한쪽 성으로만 구성</strong>된 사업장</li>
  <li>교육자료 또는 홍보물의 <strong>배포·게시</strong>로 교육에 갈음 가능</li>
</ul>
<p>★ <strong>출제 포인트:</strong> 단순 배포·게시·이메일 = 교육 아님! <strong>단, 10명 미만/단일성별이면 예외</strong></p>
<p>※ <strong>출제 함정:</strong> "이메일 발송으로 성희롱 예방교육을 실시할 수 있다" → <strong>원칙적 오답!</strong> (10명 미만/단일성별만 예외)</p>
</div>`},{title:`성희롱 발생시 조치`,content:`<div class="exam-important">
<h4 class="exam-important">성희롱 발생 시 조치 절차</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 250" style="max-width:500px;width:100%">
  <defs>
    <marker id="arrow-harass" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6366f1"/></marker>
  </defs>
  <rect x="160" y="10" width="200" height="40" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="260" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">성희롱 발생 (누구든지 신고 가능)</text>
  <line x1="260" y1="50" x2="260" y2="70" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-harass)"/>
  <rect x="130" y="72" width="260" height="35" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="260" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">지체 없이 사실확인 조사 실시</text>
  <line x1="130" y1="107" x2="80" y2="130" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-harass)"/>
  <line x1="390" y1="107" x2="440" y2="130" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-harass)"/>
  <rect x="10" y="132" width="180" height="55" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="100" y="152" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">조사기간 피해자 보호</text>
  <text x="100" y="172" text-anchor="middle" font-size="10" fill="#1e40af">근무장소 변경 / 유급휴가 등</text>
  <rect x="330" y="132" width="180" height="55" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="420" y="152" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">확인 시 피해자 원하면</text>
  <text x="420" y="172" text-anchor="middle" font-size="10" fill="#166534">근무장소변경/배치전환/유급휴가</text>
  <rect x="140" y="200" width="240" height="40" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="260" y="220" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">가해자: 징계 / 근무장소 변경 등 조치</text>
</svg>
</div>
<h4 class="exam-important">핵심 포인트</h4>
<ul>
  <li><strong>누구든지</strong> 직장 내 성희롱 발생 사실을 신고할 수 있음</li>
  <li>사업주는 <strong>지체 없이</strong> 사실 확인을 위한 조사 실시</li>
  <li>조사 기간 중 피해자 보호 조치: <strong>근무장소 변경, 유급휴가</strong> 등</li>
  <li>사실이 확인되고 피해자가 원하는 경우: <strong>근무장소 변경, 배치전환, 유급휴가</strong></li>
  <li>가해자에 대해: <strong>징계, 근무장소 변경</strong> 등 필요한 조치</li>
</ul>
<p>★ <strong>핵심:</strong> 신고 주체 = <strong>"누구든지"</strong> / 조사 = <strong>"지체 없이"</strong></p>
</div>`},{title:`고객 성희롱 방지`,content:`<div class="exam-important">
<h4 class="exam-important">고객 등에 의한 성희롱 방지</h4>
<ul>
  <li><strong>업무와 관련</strong>하여 고객 등 제3자가 근로자에게 성희롱을 한 경우</li>
  <li>사업주는 피해 근로자에게 <strong>근무장소 변경, 배치전환, 유급휴가</strong> 등의 조치를 해야 함</li>
</ul>
<h4 class="exam-important">불이익 금지</h4>
<ul>
  <li>피해를 주장하는 근로자에 대한 <strong>해고 및 불이익 금지</strong></li>
  <li>고객 등의 <strong>성적 요구를 거부</strong>한 근로자에 대한 <strong>해고 및 불이익 금지</strong></li>
</ul>
<p>★ <strong>핵심:</strong> 피해 주장 근로자 보호 + 성적 요구 거부 근로자 보호 = 모두 해고/불이익 금지</p>
<p>※ <strong>출제 함정:</strong> "고객에 의한 성희롱은 사업주의 책임이 아니다" → <strong>오답!</strong> 사업주가 피해 근로자 보호 조치 의무 있음</p>
</div>`}]},{title:`시험 핵심키워드 - 고령자고용촉진법`,topics:[{title:`용어 정의`,content:`<div class="exam-important">
<h4 class="exam-important">고령자·준고령자 연령 기준</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 140" style="max-width:500px;width:100%">
  <rect x="10" y="20" width="240" height="50" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="130" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">준고령자</text>
  <text x="130" y="62" text-anchor="middle" font-size="12" fill="#1e40af">50세 이상 ~ 55세 미만</text>
  <rect x="270" y="20" width="240" height="50" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="390" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">고령자</text>
  <text x="390" y="62" text-anchor="middle" font-size="12" fill="#dc2626">55세 이상</text>
  <rect x="60" y="85" width="400" height="40" rx="8" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
  <text x="260" y="110" text-anchor="middle" font-size="11" fill="#374151">★ 기준: 55세를 기준으로 이상 = 고령자, 미만(50세~) = 준고령자</text>
</svg>
</div>
<h4 class="exam-important">기준고용률</h4>
<table>
  <tr><th>업종</th><th>기준고용률</th></tr>
  <tr><td><strong>제조업</strong></td><td><strong>2%</strong></td></tr>
  <tr><td><strong>운수업, 부동산 및 임대업</strong></td><td><strong>6%</strong></td></tr>
  <tr><td><strong>그 외 업종</strong></td><td><strong>3%</strong></td></tr>
</table>
<p>★ <strong>암기:</strong> 제조업 <strong>2%</strong> / 운수·부동산임대 <strong>6%</strong> / 나머지 <strong>3%</strong> → '이육삼(263)'</p>
<p>※ <strong>출제 함정:</strong> "고령자는 60세 이상이다" → <strong>오답!</strong> 고령자는 <strong>55세 이상</strong></p>
<p>※ <strong>출제 함정:</strong> "준고령자는 45세 이상 55세 미만이다" → <strong>오답!</strong> 준고령자는 <strong>50세 이상</strong> 55세 미만</p>
</div>`},{title:`정년퇴직자 재고용`,content:`<div class="exam-important">
<h4 class="exam-important">정년퇴직자 재고용 핵심</h4>
<ul>
  <li>정년에 도달한 자가 <strong>재취업을 희망</strong>하면 그 <strong>직업능력에 맞는 직종</strong>에 재고용하도록 <strong>노력</strong>해야 함</li>
  <li><strong>종전의 근로기간</strong>을 근속기간에서 <strong>제외할 수 있음</strong></li>
  <li>재고용 시 <strong>임금을 달리 결정</strong>할 수 있음</li>
</ul>
<p>★ <strong>핵심:</strong> 재고용은 <strong>"의무"가 아니라 "노력 의무"</strong></p>
<p>★ <strong>핵심:</strong> 종전 근로기간 제외 가능 + 임금 달리 결정 가능 → 새로운 조건 설정 가능</p>
<p>※ <strong>출제 함정:</strong> "정년퇴직자 재고용 시 반드시 이전과 동일한 임금을 지급해야 한다" → <strong>오답!</strong> <strong>달리 결정 가능</strong></p>
</div>`},{title:`우선고용직종`,content:`<div class="exam-important">
<h4 class="exam-important">우선고용직종 핵심 정리</h4>
<ul>
  <li><strong>고용노동부장관</strong>이 <strong>고시</strong>로 정함</li>
  <li><strong>고령자</strong>와 <strong>준고령자</strong> 모두 우선고용 대상</li>
  <li><strong>공공기관</strong>은 매년 <strong>고용현황을 제출</strong>해야 함</li>
</ul>
<p>★ <strong>핵심:</strong> 우선고용직종 = 고용노동부장관 <strong>고시</strong> / 공공기관 = 매년 <strong>고용현황 제출</strong></p>
</div>`},{title:`고령자인재은행`,content:`<div class="exam-important">
<h4 class="exam-important">고령자인재은행 지정 요건</h4>
<table>
  <tr><th>구분</th><th>요건</th></tr>
  <tr><td><strong>법인 유형</strong></td><td><strong>비영리법인</strong> 또는 <strong>공익단체</strong> (무료직업소개사업 수행) + <strong>직업능력개발훈련 위탁기관</strong></td></tr>
  <tr><td><strong>시설</strong></td><td>전화 <strong>1회선 이상</strong>, PC <strong>1대 이상</strong>, <strong>별도 상담실</strong></td></tr>
  <tr><td><strong>인력</strong></td><td><strong>상담 전담자 1인</strong> + <strong>운영지원 1명</strong></td></tr>
</table>
<h4 class="exam-important">고령자인재은행 사업 내용</h4>
<ul>
  <li><strong>구인·구직 등록</strong> 및 <strong>취업알선</strong></li>
  <li><strong>직업상담</strong> 및 <strong>재취업 상담</strong></li>
  <li><strong>직업능력개발훈련</strong></li>
</ul>
<p>★ <strong>시설 암기:</strong> 전화 1 / PC 1 / 별도상담실 → '일일별'</p>
<p>※ <strong>출제 함정:</strong> "고령자인재은행은 영리법인도 지정받을 수 있다" → <strong>오답!</strong> <strong>비영리법인/공익단체</strong>만 가능</p>
</div>`},{title:`세제지원`,content:`<div class="exam-important">
<h4 class="exam-important">세제지원 핵심</h4>
<ul>
  <li>상시 <strong>300명 이상</strong> 사업장에서 <strong>기준고용률을 초과</strong>하여 고령자를 추가 고용한 경우</li>
  <li>해당 사업주에게 <strong>조세감면</strong> 혜택 부여</li>
</ul>
<table>
  <tr><th>요건</th><th>내용</th></tr>
  <tr><td><strong>사업장 규모</strong></td><td>상시 <strong>300명 이상</strong></td></tr>
  <tr><td><strong>고용 조건</strong></td><td>기준고용률을 <strong>초과</strong>하여 고령자를 추가 고용</td></tr>
  <tr><td><strong>지원 내용</strong></td><td><strong>조세감면</strong></td></tr>
</table>
<p>★ <strong>핵심 숫자:</strong> <strong>300명 이상</strong> 사업장 + 기준고용률 <strong>초과</strong> 시 조세감면</p>
</div>`},{title:`연령차별금지`,content:`<div class="exam-important">
<h4 class="exam-important">연령차별 금지 분야</h4>
<ul>
  <li><strong>모집·채용</strong></li>
  <li><strong>임금, 임금 외의 금품 지급, 복리후생</strong></li>
  <li><strong>교육·훈련</strong></li>
  <li><strong>배치·전보·승진</strong></li>
  <li><strong>퇴직·해고</strong></li>
</ul>
<h4 class="exam-important">연령차별 예외 사유</h4>
<table>
  <tr><th>예외 사유</th><th>내용</th></tr>
  <tr><td><strong>직무의 성격</strong></td><td>직무의 성격에 비추어 특정 연령기준이 <strong>불가피하게 요구</strong>되는 경우</td></tr>
  <tr><td><strong>근속기간 차등</strong></td><td>근속기간의 차이를 고려하여 <strong>합리적으로 임금 등을 차등</strong> 지급하는 경우</td></tr>
  <tr><td><strong>정년 설정</strong></td><td>이 법에 따른 정년을 설정하는 경우</td></tr>
  <tr><td><strong>특정 연령집단 지원</strong></td><td>특정 연령집단의 <strong>고용유지·촉진</strong>을 위한 지원조치를 하는 경우</td></tr>
</table>
<h4 class="exam-important">진정(구제) 기관</h4>
<ul>
  <li>연령차별 진정은 <strong>국가인권위원회</strong>에 제기</li>
  <li><strong>노동위원회가 아님!</strong></li>
</ul>
<p>★ <strong>핵심:</strong> 연령차별 진정 = <strong>국가인권위원회</strong> (노동위원회 아님!)</p>
<p>※ <strong>출제 함정:</strong> "연령차별 진정은 노동위원회에 한다" → <strong>오답!</strong> <strong>국가인권위원회</strong>가 정답</p>
</div>`},{title:`고용정보센터 업무`,content:`<div class="exam-important">
<h4 class="exam-important">고령자 고용정보센터 업무</h4>
<ul>
  <li><strong>구인·구직 등록</strong>, <strong>직업지도</strong>, <strong>취업알선</strong></li>
  <li><strong>직장적응훈련</strong> 및 <strong>교육</strong></li>
  <li><strong>정년연장</strong> 및 <strong>고령자 고용에 관한 인사·노무관리</strong></li>
  <li><strong>작업환경 개선</strong>에 관한 <strong>기술상담·교육·지도</strong></li>
  <li><strong>고령자 고용촉진 홍보</strong></li>
</ul>
<p>★ <strong>암기:</strong> '구직적정작홍' — 구인구직/직업지도/취업알선, 직장적응훈련, 정년연장/인사노무관리, 작업환경개선, 홍보</p>
<p>※ <strong>출제 함정:</strong> 고용정보센터의 업무에 <strong>"직업능력개발훈련"</strong>이 포함되지 않음 → 이는 <strong>고령자인재은행</strong>의 업무</p>
</div>`},{title:`고용 노력의무`,content:`<div class="exam-important">
<h4 class="exam-important">고령자 고용 노력의무</h4>
<ul>
  <li>상시 <strong>300명 이상</strong>의 근로자를 사용하는 사업장</li>
  <li><strong>기준고용률 이상</strong>으로 고령자를 고용하도록 <strong>노력</strong>해야 함</li>
</ul>
<table>
  <tr><th>업종</th><th>기준고용률</th></tr>
  <tr><td>제조업</td><td><strong>2%</strong></td></tr>
  <tr><td>운수업, 부동산 및 임대업</td><td><strong>6%</strong></td></tr>
  <tr><td>그 외</td><td><strong>3%</strong></td></tr>
</table>
<p>★ <strong>핵심:</strong> <strong>300명 이상</strong> + 기준고용률 이상 고용 <strong>"노력"</strong> 의무 (강제 의무 아님)</p>
<p>※ <strong>출제 함정:</strong> "100명 이상 사업장에 고령자 고용의무가 있다" → <strong>오답!</strong> <strong>300명 이상</strong>이며, <strong>노력 의무</strong>임</p>
</div>`},{title:`기본계획`,content:`<div class="exam-important">
<h4 class="exam-important">고령자 고용촉진 기본계획</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 120" style="max-width:500px;width:100%">
  <defs>
    <marker id="arrow-plan" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6366f1"/></marker>
  </defs>
  <rect x="10" y="25" width="100" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="60" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">1단계</text>
  <text x="60" y="62" text-anchor="middle" font-size="10" fill="#92400e">관계기관 협의</text>
  <line x1="115" y1="50" x2="140" y2="50" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-plan)"/>
  <rect x="145" y="25" width="100" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="195" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">2단계</text>
  <text x="195" y="62" text-anchor="middle" font-size="10" fill="#1e40af">계획 수립</text>
  <line x1="250" y1="50" x2="275" y2="50" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-plan)"/>
  <rect x="280" y="25" width="100" height="50" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="330" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">3단계</text>
  <text x="330" y="62" text-anchor="middle" font-size="10" fill="#166534">고용정책심의회</text>
  <line x1="385" y1="50" x2="410" y2="50" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-plan)"/>
  <rect x="415" y="25" width="100" height="50" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="465" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">4단계</text>
  <text x="465" y="62" text-anchor="middle" font-size="10" fill="#9d174d">국회 보고</text>
  <text x="260" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">★ 순서: 협의 → 수립 → 심의 → 보고</text>
</svg>
</div>
<h4 class="exam-important">기본계획 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>수립 주기</strong></td><td><strong>5년</strong>마다 수립</td></tr>
  <tr><td><strong>사전 협의</strong></td><td><strong>관계 중앙행정기관의 장</strong>과 협의</td></tr>
  <tr><td><strong>심의</strong></td><td><strong>고용정책심의회</strong> 심의</td></tr>
  <tr><td><strong>보고</strong></td><td><strong>국회 소관 상임위원회</strong>에 보고</td></tr>
</table>
<h4 class="exam-important">기본계획 포함 사항</h4>
<ul>
  <li><strong>직전 기본계획의 평가</strong></li>
  <li>고령자 고용의 <strong>현황과 전망</strong></li>
  <li><strong>직업능력개발</strong> 관련 사항</li>
  <li><strong>취업가능성 개선</strong> 관련 사항</li>
  <li>고령자 고용촉진에 관한 <strong>주요 시책</strong></li>
</ul>
<p>★ <strong>암기:</strong> 순서 = '협수심보' (협의 → 수립 → 심의 → 보고)</p>
<p>★ <strong>핵심 숫자:</strong> <strong>5년</strong>마다 수립</p>
<p>※ <strong>출제 함정:</strong> "기본계획은 3년마다 수립한다" → <strong>오답!</strong> <strong>5년</strong>마다</p>
<p>※ <strong>출제 함정:</strong> "기본계획은 수립 후 심의 없이 국회에 보고한다" → <strong>오답!</strong> <strong>고용정책심의회 심의</strong>를 거쳐야 함</p>
</div>`},{title:`중견전문인력 고용지원센터`,content:`<div class="exam-important">
<h4 class="exam-important">중견전문인력 고용지원센터 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>지정 주체</strong></td><td><strong>고용노동부장관</strong>이 지정</td></tr>
  <tr><td><strong>대상 법인</strong></td><td><strong>비영리법인</strong> 또는 <strong>공익단체</strong> (무료직업소개사업 수행)</td></tr>
</table>
<h4 class="exam-important">중견전문인력 고용지원센터 사업</h4>
<ul>
  <li><strong>구인·구직 등록</strong></li>
  <li><strong>직업상담</strong></li>
  <li><strong>취업알선</strong></li>
  <li><strong>경영자문</strong></li>
  <li><strong>자원봉사 지원</strong></li>
</ul>
<h4 class="exam-important">고령자인재은행 vs 중견전문인력 고용지원센터 비교</h4>
<table>
  <tr><th>구분</th><th>고령자인재은행</th><th>중견전문인력 고용지원센터</th></tr>
  <tr><td><strong>공통 사업</strong></td><td colspan="2">구인·구직, 직업상담, 취업알선</td></tr>
  <tr><td><strong>고유 사업</strong></td><td>재취업 상담, <strong>직업능력개발훈련</strong></td><td><strong>경영자문</strong>, <strong>자원봉사 지원</strong></td></tr>
  <tr><td><strong>시설 요건</strong></td><td>전화 1회선, PC 1대, 별도 상담실</td><td>별도 규정 없음</td></tr>
  <tr><td><strong>인력 요건</strong></td><td>상담 전담자 1인, 운영지원 1명</td><td>별도 규정 없음</td></tr>
</table>
<p>★ <strong>구분 핵심:</strong> 고령자인재은행 = <strong>직업능력개발훈련</strong> / 중견전문인력센터 = <strong>경영자문 + 자원봉사</strong></p>
<p>※ <strong>출제 함정:</strong> "중견전문인력 고용지원센터에서 직업능력개발훈련을 실시한다" → <strong>오답!</strong> 이는 <strong>고령자인재은행</strong>의 사업</p>
</div>`}]}]},silgi:{name:`실기 - 직업상담 실무`,code:`silgi`,color:`#6366F1`,icon:`fa-solid fa-file-pen`,description:`실기 시험 대비 상담 실무, 계산 문제, 핵심 공식을 정리합니다.`,chapters:[{title:`상담 실무`,topics:[{title:`상담과정과 사례분석`,content:`<h4>직업상담 실무 절차</h4>
<ol>
  <li><strong>접수 면접:</strong> 내담자의 기본정보 수집, 주호소 문제 파악</li>
  <li><strong>구조화:</strong> 상담의 목적, 과정, 비밀보장 안내</li>
  <li><strong>심리검사 실시:</strong> 적성, 흥미, 가치관 검사 실시 및 해석</li>
  <li><strong>직업정보 탐색:</strong> 워크넷, 직업사전 등 활용</li>
  <li><strong>의사결정 지원:</strong> 합리적 직업선택 돕기</li>
  <li><strong>구직활동 지원:</strong> 이력서 작성, 면접 기술 훈련</li>
  <li><strong>추수상담:</strong> 취업 후 적응 확인</li>
</ol>
<h4>사례분석 포인트</h4>
<ul>
  <li>내담자의 주호소 문제를 정확히 파악</li>
  <li>적절한 상담이론과 기법 적용</li>
  <li>구체적인 상담 계획 수립</li>
  <li>활용 가능한 직업정보와 심리검사 제시</li>
</ul>
<h4>서술형 답안 작성 요령</h4>
<ul>
  <li>질문에서 요구하는 핵심 키워드를 반드시 포함</li>
  <li>번호를 매겨 체계적으로 작성</li>
  <li>간결하고 명확하게 서술</li>
  <li>이론적 근거를 함께 제시</li>
</ul>`},{title:`실기 서술형 빈출 유형`,content:`<h4>상담이론 관련 빈출 유형</h4>
<ul>
  <li>특정 상담이론의 <strong>핵심 개념 3가지</strong> 서술 (예: REBT의 비합리적 신념 4유형)</li>
  <li>특정 이론의 <strong>상담 기법</strong> 나열 (예: 게슈탈트 상담 기법 5가지)</li>
  <li>상담이론 간 <strong>비교</strong> (예: 파슨스 vs 로저스, 행동주의 vs 인지적 접근)</li>
  <li>사례를 읽고 적절한 <strong>상담이론/기법</strong> 적용 (예: "이 내담자에게 적합한 상담 접근은?")</li>
</ul>
<h4>자주 출제되는 이론별 핵심 키워드</h4>
<table>
  <tr><th>이론</th><th>반드시 기억할 핵심 키워드</th></tr>
  <tr><td>파슨스</td><td>자기이해, 직업이해, 합리적 추론 (3단계)</td></tr>
  <tr><td>윌리엄슨</td><td>분석-종합-진단-예언-상담-추수지도 (6단계)</td></tr>
  <tr><td>로저스</td><td>무조건적 긍정적 존중, 공감적 이해, 일치성</td></tr>
  <tr><td>REBT</td><td>ABCDE 모델, 당위적 사고, 파국화</td></tr>
  <tr><td>벡</td><td>인지삼제, 자동적 사고, 핵심신념, 인지적 오류</td></tr>
  <tr><td>현실치료</td><td>선택이론, 5가지 욕구, WDEP, 전행동</td></tr>
  <tr><td>게슈탈트</td><td>알아차림, 지금-여기, 빈의자, 미해결과제</td></tr>
  <tr><td>아들러</td><td>열등감, 생활양식, 사회적 관심, 격려, 출생순위</td></tr>
  <tr><td>해결중심</td><td>기적질문, 예외질문, 척도질문, 방문형/불평형/고객형</td></tr>
  <tr><td>교류분석</td><td>PAC 자아상태, 상보/교차/이면 교류, 인생태도</td></tr>
</table>
<h4>진로이론 빈출 유형</h4>
<ul>
  <li>Super의 <strong>5단계</strong>와 각 단계의 특징</li>
  <li>Ginzberg의 <strong>3기</strong>와 하위단계</li>
  <li>Gottfredson의 <strong>4단계</strong>와 타협의 순서</li>
  <li>Holland의 <strong>RIASEC 6유형</strong> 특성과 대표 직업</li>
  <li>크럼볼츠의 사회학습이론 <strong>4가지 요인</strong></li>
  <li>SCCT의 <strong>3가지 핵심 변인</strong> (자기효능감, 결과기대, 개인적 목표)</li>
</ul>`}]},{title:`노동시장 계산`,topics:[{title:`실업률과 경제활동참가율`,content:`<h4>핵심 공식</h4>
<div class="formula-box">
  <p><strong>실업률 = 실업자 / 경제활동인구 × 100</strong></p>
  <p><strong>경제활동참가율 = 경제활동인구 / 15세 이상 인구 × 100</strong></p>
  <p><strong>고용률 = 취업자 / 15세 이상 인구 × 100</strong></p>
  <p>경제활동인구 = 취업자 + 실업자</p>
  <p>비경제활동인구 = 15세 이상 인구 - 경제활동인구</p>
</div>
<h4>예제</h4>
<p><strong>문제:</strong> 15세 이상 인구 1,000만 명, 취업자 600만 명, 실업자 40만 명일 때:</p>
<ul>
  <li>경제활동인구 = 600 + 40 = 640만 명</li>
  <li>경제활동참가율 = 640/1000 × 100 = 64%</li>
  <li>실업률 = 40/640 × 100 = 6.25%</li>
  <li>고용률 = 600/1000 × 100 = 60%</li>
</ul>`},{title:`노동수요탄력성과 한계수입생산`,content:`<h4>노동수요의 임금탄력성</h4>
<div class="formula-box">
  <p><strong>노동수요 탄력성 = 노동수요량의 변화율 / 임금의 변화율</strong></p>
  <p>= (ΔL/L) / (ΔW/W)</p>
</div>
<ul>
  <li>|탄력성| > 1: 탄력적 (임금 변화에 민감)</li>
  <li>|탄력성| < 1: 비탄력적 (임금 변화에 둔감)</li>
  <li>|탄력성| = 1: 단위탄력적</li>
</ul>
<h4>마셜의 파생수요 법칙 (탄력성이 큰 경우)</h4>
<ol>
  <li>생산물 수요의 가격탄력성이 클수록</li>
  <li>다른 생산요소의 대체가 용이할수록</li>
  <li>총비용에서 해당 노동비용이 차지하는 비중이 클수록</li>
  <li>다른 생산요소의 공급탄력성이 클수록</li>
</ol>
<h4>한계수입생산(MRPL)</h4>
<div class="formula-box">
  <p><strong>MRPL = MPL × MR</strong></p>
  <p>완전경쟁: MRPL = VMPL = MPL × P</p>
  <p>이윤극대화: MRPL = W (임금)</p>
</div>
<h4>예제</h4>
<p><strong>문제:</strong> 근로자 1명 추가 고용 시 생산량 10개 증가, 생산물 가격 5,000원일 때:</p>
<ul>
  <li>MPL = 10개</li>
  <li>VMPL = 10 × 5,000 = 50,000원</li>
  <li>임금이 50,000원 이하면 고용, 이상이면 비고용</li>
</ul>`},{title:`임금 계산과 퇴직금`,content:`<h4>평균임금 계산</h4>
<div class="formula-box">
  <p><strong>평균임금 = 산정사유 발생일 이전 3개월간 지급된 임금총액 ÷ 그 기간의 총 일수</strong></p>
</div>
<h4>예제 1: 평균임금 계산</h4>
<p><strong>문제:</strong> 퇴직일: 6월 30일, 최근 3개월(4·5·6월) 임금: 기본급 300만원/월, 식대 20만원/월. 총 일수 = 30+31+30 = 91일</p>
<ul>
  <li>3개월 임금총액 = (300+20)×3 = 960만원</li>
  <li>평균임금 = 9,600,000 / 91 = <strong>105,495원/일</strong></li>
  <li>★ 평균임금이 통상임금보다 낮으면 통상임금을 평균임금으로 함</li>
</ul>
<h4>퇴직금 계산</h4>
<div class="formula-box">
  <p><strong>퇴직금 = 1일 평균임금 × 30일 × (재직일수 / 365)</strong></p>
</div>
<h4>예제 2: 퇴직금 계산</h4>
<p><strong>문제:</strong> 1일 평균임금 = 100,000원, 재직기간 = 3년(1,095일)</p>
<ul>
  <li>퇴직금 = 100,000 × 30 × (1,095/365)</li>
  <li>= 100,000 × 30 × 3 = <strong>9,000,000원</strong></li>
</ul>
<h4>연장근로수당 계산</h4>
<div class="formula-box">
  <p><strong>연장근로수당 = 시간당 통상임금 × 1.5 × 연장근로시간</strong></p>
  <p>야간(22시~06시) 또는 휴일에 연장근로 시: 통상임금 × 2.0</p>
</div>
<h4>예제 3: 연장근로수당</h4>
<p><strong>문제:</strong> 시간당 통상임금 = 15,000원, 연장근로 4시간(그 중 야간 2시간)</p>
<ul>
  <li>일반 연장 2시간 = 15,000 × 1.5 × 2 = 45,000원</li>
  <li>야간 연장 2시간 = 15,000 × 2.0 × 2 = 60,000원</li>
  <li>합계 = <strong>105,000원</strong></li>
</ul>
<h4>구직급여 계산</h4>
<div class="formula-box">
  <p><strong>구직급여일액 = 이직 전 평균임금의 60%</strong></p>
  <p><strong>구직급여 총액 = 구직급여일액 × 소정급여일수</strong></p>
  <p>상한액: 1일 66,000원 (2023년 기준) / 하한액: 최저임금 × 80% × 1일 소정근로시간</p>
</div>`}]},{title:`직업정보 활용`,topics:[{title:`직업분류와 정보수집 실무`,content:`<h4>직업분류 실무</h4>
<ul>
  <li>한국표준직업분류(KSCO) 코드 읽기</li>
  <li>한국고용직업분류(KECO) 코드 읽기</li>
  <li>직업분류의 차이점과 활용처 구분</li>
</ul>
<h4>워크넷 활용 실무</h4>
<ul>
  <li><strong>구인구직 검색:</strong> 직종, 지역, 학력 등 조건 검색</li>
  <li><strong>이력서 등록:</strong> 구직자 이력서 작성 및 등록</li>
  <li><strong>심리검사 실시:</strong> 직업선호도검사, 직업적성검사 온라인 실시</li>
  <li><strong>검사 결과 해석:</strong> 검사 결과를 상담에 활용</li>
</ul>
<h4>직업사전 활용</h4>
<ul>
  <li>직무개요: 해당 직업의 주요 업무 내용</li>
  <li>수행직무: 구체적인 작업 내용</li>
  <li>정규교육: 필요한 학력 수준</li>
  <li>숙련기간: 직무수행에 필요한 경력/훈련 기간</li>
  <li>자격/면허: 관련 자격증 정보</li>
</ul>`}]},{title:`핵심 공식 정리`,topics:[{title:`계산형 문제 공식 모음`,content:`<h4>노동시장 공식</h4>
<div class="formula-box">
  <p><strong>실업률</strong> = 실업자 / 경제활동인구 × 100</p>
  <p><strong>경제활동참가율</strong> = 경제활동인구 / 15세 이상 인구 × 100</p>
  <p><strong>고용률</strong> = 취업자 / 15세 이상 인구 × 100</p>
  <p><strong>노동수요 탄력성</strong> = (ΔL/L) / (ΔW/W)</p>
</div>
<h4>임금 관련 공식</h4>
<div class="formula-box">
  <p><strong>평균임금</strong> = 3개월간 임금총액 / 3개월간 총 일수</p>
  <p><strong>퇴직금</strong> = 1일 평균임금 × 30일 × (재직일수/365)</p>
  <p><strong>연장근로 가산</strong> = 통상임금 × 1.5 (50% 가산)</p>
  <p><strong>야간/휴일근로 가산</strong> = 통상임금 × 1.5</p>
</div>
<h4>생산성 공식</h4>
<div class="formula-box">
  <p><strong>한계생산물(MPL)</strong> = ΔQ / ΔL</p>
  <p><strong>한계생산물가치(VMPL)</strong> = MPL × P</p>
  <p><strong>한계수입생산(MRPL)</strong> = MPL × MR</p>
  <p><strong>이윤극대화 조건:</strong> MRPL = W</p>
</div>
<h4>인적자본 공식</h4>
<div class="formula-box">
  <p><strong>교육의 순현재가치(NPV)</strong> = Σ[수익/(1+r)^t] - Σ[비용/(1+r)^t]</p>
  <p><strong>내부수익률(IRR):</strong> NPV = 0이 되는 할인율(r)</p>
  <p>NPV > 0 → 교육투자 실행</p>
</div>
<h4>고용보험 계산</h4>
<div class="formula-box">
  <p><strong>구직급여일액</strong> = 이직 전 평균임금의 60%</p>
  <p><strong>구직급여 총액</strong> = 구직급여일액 × 소정급여일수</p>
  <p>소정급여일수: 연령·피보험기간에 따라 120~270일</p>
</div>`},{title:`시험 빈출 수치·기간 총정리`,content:`<h4>근로기준법 핵심 수치</h4>
<table>
  <tr><th>항목</th><th>수치/기간</th></tr>
  <tr><td>법정 근로시간</td><td><strong>1주 40시간, 1일 8시간</strong></td></tr>
  <tr><td>연장근로 한도</td><td>1주 <strong>12시간</strong></td></tr>
  <tr><td>가산임금 (연장·야간·휴일)</td><td>통상임금의 <strong>50%</strong> 가산</td></tr>
  <tr><td>해고예고 기간</td><td><strong>30일</strong> 전 또는 30일분 통상임금</td></tr>
  <tr><td>경영상 해고 통보</td><td><strong>50일</strong> 전 근로자대표에 통보</td></tr>
  <tr><td>부당해고 구제신청</td><td>해고일로부터 <strong>3개월</strong> 이내</td></tr>
  <tr><td>연차유급휴가 (1년 이상)</td><td><strong>15일</strong> (최대 25일)</td></tr>
  <tr><td>산전후휴가</td><td><strong>90일</strong> (쌍둥이 120일)</td></tr>
  <tr><td>취업규칙 작성 의무</td><td>상시 <strong>10인</strong> 이상</td></tr>
  <tr><td>최저 고용연령</td><td><strong>15세</strong> 미만 금지</td></tr>
  <tr><td>야간근로 시간</td><td>오후 <strong>10시</strong> ~ 오전 <strong>6시</strong></td></tr>
</table>
<h4>고용보험법 핵심 수치</h4>
<table>
  <tr><th>항목</th><th>수치/기간</th></tr>
  <tr><td>구직급여 피보험단위기간</td><td>이직일 이전 18개월 중 <strong>180일</strong> 이상</td></tr>
  <tr><td>구직급여 수준</td><td>평균임금의 <strong>60%</strong></td></tr>
  <tr><td>소정급여일수</td><td><strong>120~270일</strong> (연령·피보험기간별)</td></tr>
  <tr><td>대기기간</td><td><strong>7일</strong></td></tr>
  <tr><td>육아휴직급여</td><td>통상임금의 <strong>80%</strong> (상한 150만원)</td></tr>
</table>
<h4>기타 법규 핵심 수치</h4>
<table>
  <tr><th>항목</th><th>수치/기간</th></tr>
  <tr><td>기간제 사용기간</td><td>최대 <strong>2년</strong></td></tr>
  <tr><td>파견기간</td><td>원칙 <strong>1년</strong>, 최대 <strong>2년</strong></td></tr>
  <tr><td>차별 시정신청</td><td>차별 발생일로부터 <strong>6개월</strong> 이내</td></tr>
  <tr><td>최저임금위원회</td><td><strong>27인</strong> (노사공 각 9인)</td></tr>
  <tr><td>적극적 고용개선조치</td><td><strong>500인</strong> 이상 사업장</td></tr>
  <tr><td>배우자 출산휴가</td><td><strong>10일</strong></td></tr>
</table>
<h4>경제활동 관련 공식 총정리</h4>
<div class="formula-box">
  <p>15세 이상 인구 = 경제활동인구 + 비경제활동인구</p>
  <p>경제활동인구 = 취업자 + 실업자</p>
  <p>실업률 = 실업자 / 경제활동인구 × 100</p>
  <p>경제활동참가율 = 경제활동인구 / 15세 이상 인구 × 100</p>
  <p>고용률 = 취업자 / 15세 이상 인구 × 100</p>
  <p>노동수요 탄력성 = (ΔL/L) / (ΔW/W)</p>
  <p>VMPL = MPL × P (완전경쟁)</p>
  <p>MRPL = MPL × MR (불완전경쟁)</p>
  <p>이윤극대화: MRPL = W</p>
  <p>평균임금 = 3개월 임금총액 / 3개월 총 일수</p>
  <p>퇴직금 = 1일 평균임금 × 30 × (재직일수/365)</p>
</div>`}]}]}},Yo=[`counseling`,`psychology`,`jobinfo`,`labor_market`,`labor_law`,`silgi`];function Xo(e){return Jo[e]||null}function Zo(e){let t=Yo.indexOf(e);return{prev:t>0?Yo[t-1]:null,next:t<Yo.length-1?Yo[t+1]:null}}function Qo(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`과목별 학습하기`,description:`직업상담사 2급 과목별 핵심 이론과 개념을 정리한 학습 페이지입니다.`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-graduation-cap`}),` 과목별 학습하기`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`직업상담사 2급 시험 핵심 이론과 개념을 과목별로 정리했습니다.`})]})}),(0,_.jsx)(`section`,{className:`container`,style:{paddingTop:40,paddingBottom:60},children:(0,_.jsx)(`div`,{className:`learn-grid`,children:Yo.map(e=>{let t=Jo[e],n=t.chapters.reduce((e,t)=>e+t.topics.length,0);return(0,_.jsxs)(l,{to:`/learn/${e}`,className:`learn-card`,style:{"--card-color":t.color},children:[(0,_.jsx)(`div`,{className:`learn-card-icon`,style:{background:t.color},children:(0,_.jsx)(`i`,{className:t.icon})}),(0,_.jsxs)(`div`,{className:`learn-card-body`,children:[(0,_.jsx)(`h3`,{className:`learn-card-title`,children:t.name}),(0,_.jsx)(`p`,{className:`learn-card-desc`,children:t.description}),(0,_.jsxs)(`div`,{className:`learn-card-meta`,children:[(0,_.jsxs)(`span`,{className:`learn-card-badge`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-layer-group`}),` `,t.chapters.length,`개 챕터`]}),(0,_.jsxs)(`span`,{className:`learn-card-badge`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-file-lines`}),` `,n,`개 토픽`]})]})]}),(0,_.jsx)(`div`,{className:`learn-card-arrow`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-right`})})]},e)})})})]})}function $o(){let{subjectCode:e}=o(),t=n(),r=Xo(e),{prev:i,next:a}=Zo(e),[s,c]=(0,g.useState)({}),[u,d]=(0,g.useState)({}),f=(0,g.useRef)({});if((0,g.useEffect)(()=>{if(!r){t(`/learn`,{replace:!0});return}c({0:!0}),d({}),window.scrollTo(0,0)},[e,r,t]),!r)return null;let p=e=>{c(t=>({...t,[e]:!t[e]}))},m=(e,t)=>{let n=`${e}-${t}`;d(e=>({...e,[n]:!e[n]}))},h=e=>{c(t=>({...t,[e]:!0})),f.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`})},v=i?Jo[i]:null,y=a?Jo[a]:null;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`${r.name} 학습`,description:r.description}),(0,_.jsx)(`div`,{className:`page-header`,style:{"--subject-color":r.color},children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(l,{to:`/learn`,className:`subject-back-link`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),` 과목 목록`]}),(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:r.icon,style:{color:r.color}}),` `,r.name]}),(0,_.jsx)(`p`,{className:`page-desc`,children:r.description})]})}),(0,_.jsxs)(`div`,{className:`container subject-study-layout`,children:[(0,_.jsxs)(`aside`,{className:`chapter-nav`,children:[(0,_.jsx)(`div`,{className:`chapter-nav-title`,children:`목차`}),(0,_.jsx)(`ul`,{className:`chapter-nav-list`,children:r.chapters.map((e,t)=>(0,_.jsx)(`li`,{children:(0,_.jsxs)(`button`,{className:`chapter-nav-item ${s[t]?`active`:``}`,onClick:()=>h(t),children:[(0,_.jsx)(`span`,{className:`chapter-nav-num`,children:t+1}),e.title]})},t))})]}),(0,_.jsxs)(`div`,{className:`subject-study-main`,children:[r.chapters.map((e,t)=>(0,_.jsxs)(`div`,{className:`chapter-accordion`,ref:e=>f.current[t]=e,children:[(0,_.jsxs)(`button`,{className:`chapter-header ${s[t]?`open`:``}`,onClick:()=>p(t),style:{"--chapter-color":r.color},children:[(0,_.jsxs)(`div`,{className:`chapter-header-left`,children:[(0,_.jsx)(`span`,{className:`chapter-num`,style:{background:r.color},children:t+1}),(0,_.jsx)(`span`,{className:`chapter-title`,children:e.title}),(0,_.jsxs)(`span`,{className:`chapter-count`,children:[e.topics.length,`개 토픽`]})]}),(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-down chapter-toggle-icon ${s[t]?`open`:``}`})]}),s[t]&&(0,_.jsx)(`div`,{className:`chapter-body`,children:e.topics.map((e,n)=>{let i=`${t}-${n}`;return(0,_.jsxs)(`div`,{className:`topic-item`,children:[(0,_.jsxs)(`button`,{className:`topic-header ${u[i]?`open`:``}`,onClick:()=>m(t,n),children:[(0,_.jsxs)(`span`,{className:`topic-title-text`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-bookmark`,style:{color:r.color,opacity:.7}}),e.title]}),(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-down topic-toggle-icon ${u[i]?`open`:``}`})]}),u[i]&&(0,_.jsx)(`div`,{className:`topic-content`,style:{"--topic-accent":r.color},dangerouslySetInnerHTML:{__html:e.content}})]},n)})})]},t)),(0,_.jsxs)(`div`,{className:`subject-nav-bottom`,children:[v?(0,_.jsxs)(l,{to:`/learn/${i}`,className:`subject-nav-btn prev`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{className:`subject-nav-label`,children:`이전 과목`}),(0,_.jsx)(`span`,{className:`subject-nav-name`,children:v.name})]})]}):(0,_.jsx)(`div`,{}),y?(0,_.jsxs)(l,{to:`/learn/${a}`,className:`subject-nav-btn next`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{className:`subject-nav-label`,children:`다음 과목`}),(0,_.jsx)(`span`,{className:`subject-nav-name`,children:y.name})]}),(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]}):(0,_.jsx)(`div`,{})]})]})]})]})}var es=[{id:`all`,label:`전체`,color:`#6366F1`,icon:`fa-solid fa-list`},{id:`counseling`,label:`직업상담학`,color:`#3B82F6`,icon:`fa-solid fa-comments`},{id:`psychology`,label:`직업심리학`,color:`#8B5CF6`,icon:`fa-solid fa-brain`},{id:`jobinfo`,label:`직업정보론`,color:`#10B981`,icon:`fa-solid fa-circle-info`},{id:`labor_market`,label:`노동시장론`,color:`#F59E0B`,icon:`fa-solid fa-chart-line`},{id:`labor_law`,label:`노동관계법규`,color:`#EF4444`,icon:`fa-solid fa-scale-balanced`}],ts=[{num:1,category:`counseling`,title:`특성-요인 상담이론 (윌리엄슨)`,keyword:`특성-요인이론, 윌리엄슨, Williamson`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>핵심 개념</strong>: 개인의 특성(흥미, 적성, 성격)과 직업의 요인(직무요건)을 매칭하는 이론</li>
<li><strong>상담 6단계</strong>: 분석 → 종합 → 진단 → 예후 → 상담(처치) → 추수지도</li>
<li><strong>진단 유형</strong>: 무선택, 불확실한 선택, 현명하지 못한 선택, 흥미와 적성 간의 불일치</li>
<li><strong>특징</strong>: 상담자 중심(지시적), 심리검사 활용, 합리적 의사결정 강조</li>
<li><strong>한계</strong>: 개인의 감정·가치관 경시, 환경적 요인 간과, 지나치게 이성적 접근</li>
</ul>`},{num:2,category:`counseling`,title:`로저스(Rogers)의 내담자 중심 상담`,keyword:`로저스, 인간중심, 비지시적 상담`,frequency:`거의 매회 (36/39회)`,summary:`<ul>
<li><strong>핵심 조건 3가지</strong>: 무조건적 긍정적 존중, 공감적 이해, 진실성(일치성)</li>
<li><strong>인간관</strong>: 인간은 자아실현 경향이 있으며, 스스로 문제를 해결할 능력이 있다</li>
<li><strong>자아개념</strong>: 이상적 자아와 현실적 자아의 불일치가 부적응의 원인</li>
<li><strong>상담자 역할</strong>: 비지시적, 내담자의 자기탐색 촉진, 반영 기법 활용</li>
<li><strong>특징</strong>: 현상학적 관점, "지금-여기" 중시, 상담관계 자체가 치료적</li>
</ul>`},{num:3,category:`counseling`,title:`정신분석적 직업상담 (보딘)`,keyword:`보딘, Bordin, 정신분석, 정신역동`,frequency:`자주 출제 (30/39회)`,summary:`<ul>
<li><strong>보딘(Bordin)</strong>: 직업문제를 정신역동적 관점으로 해석, 직업선택은 무의식적 욕구 충족</li>
<li><strong>핵심 개념</strong>: 자아방어기제, 전이와 역전이, 자유연상, 저항, 해석</li>
<li><strong>진단 범주</strong>: 의존, 정보 부족, 자아갈등, 선택불안, 무선택</li>
<li><strong>치료 목표</strong>: 무의식적 동기를 의식화하여 합리적 직업선택 가능하게 함</li>
<li><strong>특징</strong>: 조기 아동기 경험과 직업선택의 관계, 욕구-직업 매칭</li>
</ul>`},{num:4,category:`counseling`,title:`행동주의 상담이론 (학습이론)`,keyword:`행동주의, 강화, 체계적 둔감법, 크럼볼츠`,frequency:`자주 출제 (32/39회)`,summary:`<ul>
<li><strong>핵심 원리</strong>: 모든 행동은 학습된 것이며, 새로운 학습을 통해 변화 가능</li>
<li><strong>주요 기법</strong>: 강화(정적/부적), 체계적 둔감법, 모델링, 행동계약, 토큰경제, 자기관리</li>
<li><strong>크럼볼츠 사회학습이론</strong>: 유전적 요인, 환경적 조건, 학습경험, 과제접근기술 → 진로결정에 영향</li>
<li><strong>상담 과정</strong>: 목표행동 설정 → 기초선 측정 → 기법 적용 → 평가</li>
<li><strong>특징</strong>: 구체적·측정 가능한 목표, 과학적·객관적 접근</li>
</ul>`},{num:5,category:`counseling`,title:`게슈탈트 상담이론 (펄스)`,keyword:`펄스, 게슈탈트, 미해결과제, 알아차림`,frequency:`자주 출제 (28/39회)`,summary:`<ul>
<li><strong>핵심 개념</strong>: "지금-여기(here and now)", 알아차림(awareness), 미해결 과제, 전경과 배경</li>
<li><strong>접촉경계혼란</strong>: 내사, 투사, 융합(합류), 반전, 편향</li>
<li><strong>주요 기법</strong>: 빈의자 기법, 과장법, 실험, 반대하기, "나는 ~에 책임진다" 문장 완성</li>
<li><strong>인간관</strong>: 전체적 존재, 자기조절 능력 보유, 환경과의 접촉 중시</li>
<li><strong>상담 목표</strong>: 미해결 과제 해결, 접촉 회복, 통합적 자기인식</li>
</ul>`},{num:6,category:`counseling`,title:`인지·정서·행동 상담 (REBT, 엘리스)`,keyword:`엘리스, Ellis, REBT, ABC모형, 비합리적 신념`,frequency:`자주 출제 (33/39회)`,summary:`<ul>
<li><strong>ABC 모형</strong>: A(선행사건) → B(비합리적 신념) → C(결과/부적응 행동)</li>
<li><strong>D-E 확장</strong>: D(논박, Disputing) → E(효과, 합리적 사고)</li>
<li><strong>비합리적 신념 11가지</strong>: 당위적 사고("반드시 ~해야 한다"), 파국화, 과잉일반화 등</li>
<li><strong>상담 기법</strong>: 논박(인지적/정서적/행동적), 합리적 정서심상, 자기주장 훈련, 수치심 공격 연습</li>
<li><strong>특징</strong>: 지시적·교육적 상담, 비합리적 신념 변화가 핵심 목표</li>
</ul>`},{num:7,category:`counseling`,title:`상담기법: 관계형성 기술`,keyword:`경청, 공감, 반영, 구조화, 질문기법`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>경청(적극적 경청)</strong>: 언어적·비언어적 메시지에 주의, 명료화, 재진술, 요약</li>
<li><strong>공감</strong>: 초보적 공감(내용 반영) vs 심화적 공감(감정+의미 반영)</li>
<li><strong>질문 기법</strong>: 개방형 질문 vs 폐쇄형 질문, 직면, 해석</li>
<li><strong>구조화</strong>: 상담 초기에 상담의 목적·과정·규칙을 안내</li>
<li><strong>직면</strong>: 내담자의 모순·불일치를 지적 (시기와 방법 중요)</li>
<li><strong>즉시성</strong>: 상담관계에서 지금 일어나는 것을 다루는 기술</li>
</ul>`},{num:8,category:`counseling`,title:`직업상담 과정 및 기법`,keyword:`초기면담, 사례개념화, 목표설정, 종결`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>상담 과정</strong>: 관계형성 → 문제파악(사정) → 목표설정 → 개입(실행) → 종결·추수지도</li>
<li><strong>초기면담</strong>: 라포 형성, 주호소문제 파악, 내담자의 기대 확인</li>
<li><strong>사례개념화</strong>: 문제의 원인·유지요인·관련변인 분석, 상담전략 수립</li>
<li><strong>목표설정 원칙</strong>: 구체적, 측정 가능, 현실적, 내담자 동의</li>
<li><strong>종결 조건</strong>: 목표 달성, 내담자 자기관리 능력 확보, 추수지도 계획 수립</li>
</ul>`},{num:9,category:`counseling`,title:`직업상담의 윤리`,keyword:`비밀보장, 이중관계, 윤리원칙, 한계`,frequency:`자주 출제 (25/39회)`,summary:`<ul>
<li><strong>비밀보장</strong>: 상담내용 비밀유지가 원칙, 예외(자·타해 위험, 아동학대, 법원명령 등)</li>
<li><strong>이중관계 금지</strong>: 상담관계 외 사적 관계 형성 금지</li>
<li><strong>사전동의(Informed Consent)</strong>: 상담 전 과정·비용·비밀보장 한계 안내</li>
<li><strong>윤리원칙</strong>: 자율성, 선행, 악행금지, 공정성, 충실성</li>
<li><strong>전문성 유지</strong>: 수련·교육·자문 의무, 자신의 능력범위 내 상담</li>
</ul>`},{num:10,category:`counseling`,title:`집단상담의 이론과 과정`,keyword:`집단상담, 집단역동, 응집력, 치료요인`,frequency:`자주 출제 (27/39회)`,summary:`<ul>
<li><strong>얄롬(Yalom)의 치료요인 11가지</strong>: 희망주입, 보편성, 정보제공, 이타심, 사회화기술, 모방행동, 카타르시스, 실존적 요인, 집단응집력, 가족의 교정적 재현, 대인학습</li>
<li><strong>집단상담 과정</strong>: 초기(탐색) → 전환기(갈등) → 작업(생산) → 종결</li>
<li><strong>집단역동</strong>: 응집력, 하위집단, 갈등, 저항, 전이</li>
<li><strong>집단지도자 역할</strong>: 촉진자, 모델링, 피드백 제공, 갈등중재</li>
</ul>`},{num:11,category:`counseling`,title:`심리검사의 이해와 활용`,keyword:`심리검사, 표준화검사, 신뢰도, 타당도`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>표준화 검사 요건</strong>: 신뢰도, 타당도, 객관성, 규준, 실용성</li>
<li><strong>신뢰도 종류</strong>: 검사-재검사, 동형검사, 반분, 내적일관성(Cronbach α)</li>
<li><strong>타당도 종류</strong>: 내용타당도, 준거타당도(예측/공인), 구인타당도(수렴/변별)</li>
<li><strong>검사 해석</strong>: 규준참조 vs 준거참조, 백분위, 표준점수(T점수, Z점수)</li>
<li><strong>직업상담에서 활용</strong>: 흥미검사, 적성검사, 성격검사, 가치관검사</li>
</ul>`},{num:12,category:`counseling`,title:`직업의사결정 이론`,keyword:`의사결정, 합리적모형, 젤라트, 힐튼, 타이드만`,frequency:`자주 출제 (34/39회)`,summary:`<ul>
<li><strong>젤라트(Gelatt)</strong>: 예측체제(확률), 가치체제(선호도), 기준체제(규칙) → 조사적/최종적 결정</li>
<li><strong>힐튼(Hilton)</strong>: 인지부조화 모형 — 자아개념과 직업정보 간 불일치가 의사결정 촉발</li>
<li><strong>타이드만과 오하라</strong>: 예상기(탐색·구체화·선택·명료화)와 실행기(순응·개혁·통합)</li>
<li><strong>의사결정 유형(하렌)</strong>: 합리적, 직관적, 의존적</li>
<li><strong>진로미결정</strong>: 정보부족, 동기부족, 우유부단, 외적장벽</li>
</ul>`},{num:13,category:`psychology`,title:`홀랜드(Holland)의 직업성격유형론`,keyword:`홀랜드, RIASEC, 6각형 모형, 일치성`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>6가지 유형(RIASEC)</strong>: 현실형(R), 탐구형(I), 예술형(A), 사회형(S), 진취형(E), 관습형(C)</li>
<li><strong>주요 개념</strong>: 일치성(개인-환경 적합), 분화도(유형간 차이), 일관성(인접유형 관계), 정체성</li>
<li><strong>6각형 모형</strong>: RIASEC 순서 배치, 인접유형 유사·대각유형 상이</li>
<li><strong>검사도구</strong>: SDS(자기탐색검사), VPI(직업선호도검사)</li>
<li><strong>한계</strong>: 문화적 차이 반영 미흡, 6유형으로 축소, 변화 가능성 경시</li>
</ul>`},{num:14,category:`psychology`,title:`슈퍼(Super)의 진로발달이론`,keyword:`슈퍼, 진로발달, 생애무지개, 자아개념`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>진로발달단계</strong>: 성장기(~14) → 탐색기(15~24) → 확립기(25~44) → 유지기(45~64) → 쇠퇴기(65~)</li>
<li><strong>생애무지개 모형(Life-Career Rainbow)</strong>: 생애단계(가로)×역할(세로) — 자녀, 학생, 여가인, 시민, 근로자, 가정인 등</li>
<li><strong>아치모형(Archway)</strong>: 개인적 요인과 사회적 요인이 자아개념을 형성</li>
<li><strong>진로성숙</strong>: 진로선택에 대한 태도·지식·기술의 발달 정도</li>
<li><strong>자아개념</strong>: 직업적 자아개념 형성·실행·변환이 진로발달의 핵심</li>
</ul>`},{num:15,category:`psychology`,title:`긴즈버그(Ginzberg)의 진로발달이론`,keyword:`긴즈버그, 환상기, 잠정기, 현실기`,frequency:`자주 출제 (30/39회)`,summary:`<ul>
<li><strong>3단계</strong>: 환상기(~11세) → 잠정기(11~17세) → 현실기(17세~성인초기)</li>
<li><strong>잠정기 4단계</strong>: 흥미 → 능력 → 가치 → 전환</li>
<li><strong>현실기 3단계</strong>: 탐색 → 구체화 → 특수화</li>
<li><strong>핵심 주장</strong>: 직업선택은 비가역적(초기) → 후에 수정(평생 과정으로 변경)</li>
<li><strong>한계</strong>: 중산층 남성 중심, 경제·사회적 요인 경시</li>
</ul>`},{num:16,category:`psychology`,title:`고트프레드슨(Gottfredson)의 제한-타협이론`,keyword:`고트프레드슨, 인지적 지도, 제한, 타협`,frequency:`자주 출제 (28/39회)`,summary:`<ul>
<li><strong>제한(Circumscription)</strong>: 자아개념에 맞지 않는 직업을 배제하는 과정</li>
<li><strong>타협(Compromise)</strong>: 현실적 제약에 따라 직업포부를 조정하는 과정</li>
<li><strong>발달 4단계</strong>: 크기·힘 지향(3~5세) → 성역할 지향(6~8세) → 사회적 가치 지향(9~13세) → 내적 자아 지향(14세~)</li>
<li><strong>타협 우선순위</strong>: 흥미 먼저 포기 → 사회적 지위 → 성유형(가장 마지막)</li>
<li><strong>인지적 지도</strong>: 성유형(남성적-여성적)과 직업위세(사회적 지위) 2차원</li>
</ul>`},{num:17,category:`psychology`,title:`로(Roe)의 욕구이론`,keyword:`로, Roe, 욕구위계, 양육태도, 직업분류`,frequency:`자주 출제 (26/39회)`,summary:`<ul>
<li><strong>이론 기반</strong>: 매슬로우 욕구위계 + 부모 양육태도 → 직업선택에 영향</li>
<li><strong>양육태도 유형</strong>: 과잉보호, 과잉요구, 수용, 거부, 무관심, 무시</li>
<li><strong>직업분류</strong>: 8개 집단(봉사, 사업, 조직, 기술, 옥외, 과학, 일반문화, 예술·오락) × 6수준</li>
<li><strong>대인지향 vs 비대인지향</strong>: 온정적 양육 → 대인지향 직업 / 냉담·거부 → 비대인지향</li>
<li><strong>한계</strong>: 양육태도와 직업선택 간 인과관계 실증 부족</li>
</ul>`},{num:18,category:`psychology`,title:`사회인지진로이론 (SCCT, 반두라/렌트)`,keyword:`SCCT, 자기효능감, 결과기대, 반두라`,frequency:`자주 출제 (31/39회)`,summary:`<ul>
<li><strong>핵심 변인 3가지</strong>: 자기효능감, 결과기대, 개인목표</li>
<li><strong>자기효능감 4가지 원천</strong>: 성취경험(가장 강력), 대리경험, 언어적 설득, 정서적 각성</li>
<li><strong>3가지 모형</strong>: 흥미발달모형, 진로선택모형, 수행모형</li>
<li><strong>흥미발달</strong>: 자기효능감 + 결과기대 → 흥미 → 목표 → 행동 → 성취</li>
<li><strong>특징</strong>: 개인의 주체성(agency) 강조, 환경적 장벽·지지 고려</li>
</ul>`},{num:19,category:`psychology`,title:`직업흥미검사 (스트롱, 쿠더)`,keyword:`흥미검사, 스트롱, SII, 쿠더, 직업선호도`,frequency:`자주 출제 (33/39회)`,summary:`<ul>
<li><strong>스트롱 흥미검사(SII)</strong>: GOT(일반직업주제-RIASEC), BIS(기본흥미척도), OS(직업척도), PSS(개인특성척도)</li>
<li><strong>쿠더 직업흥미검사</strong>: 10개 흥미영역(옥외, 기계, 계산, 과학, 설득, 예술, 문학, 음악, 사회봉사, 사무)</li>
<li><strong>흥미의 특성</strong>: 비교적 안정적, 표현된 흥미·검사된 흥미·명시된 흥미·측정된 흥미</li>
<li><strong>직업선호도 검사(VPI)</strong>: 홀랜드의 6유형 측정</li>
<li><strong>활용</strong>: 진로탐색, 전공선택, 직업전환 상담 등</li>
</ul>`},{num:20,category:`psychology`,title:`직업적성검사`,keyword:`적성검사, GATB, DAT, 일반적성`,frequency:`자주 출제 (30/39회)`,summary:`<ul>
<li><strong>GATB(일반적성검사)</strong>: 미국 고용서비스국 개발, 9개 적성요인(G, V, N, S, P, Q, K, F, M)</li>
<li><strong>G(일반학습능력)</strong>, V(언어능력), N(수리능력), S(공간지각), P(형태지각), Q(사무지각), K(운동조정), F(손재주), M(손가락재주)</li>
<li><strong>DAT(차별적성검사)</strong>: 8개 하위검사, 교육·진로지도에 활용</li>
<li><strong>적성 vs 흥미</strong>: 적성은 '할 수 있는 것', 흥미는 '하고 싶은 것'</li>
<li><strong>적성과 직무 매칭</strong>: 직업별 OAP(직업적성유형) 활용</li>
</ul>`},{num:21,category:`psychology`,title:`직업발달과 진로성숙`,keyword:`진로성숙, 진로적응성, 크라이티스, 사비카스`,frequency:`자주 출제 (27/39회)`,summary:`<ul>
<li><strong>진로성숙(Career Maturity)</strong>: 크라이티스가 개념화, 연령에 따른 진로발달 수준</li>
<li><strong>진로성숙 구성요인</strong>: 진로계획성, 진로탐색, 의사결정, 일의 세계에 대한 지식</li>
<li><strong>진로적응성(Career Adaptability)</strong>: 사비카스(Savickas) 제안, 관심(concern), 통제(control), 호기심(curiosity), 확신(confidence)</li>
<li><strong>사비카스 진로구성이론</strong>: 개인의 진로이야기(narrative)를 통해 자아 구성</li>
<li><strong>측정도구</strong>: CMI(진로성숙도검사), 진로결정자기효능감 척도</li>
</ul>`},{num:22,category:`psychology`,title:`직업적응이론 (TWA, 미네소타)`,keyword:`TWA, 직업적응, 만족, 충족, 미네소타`,frequency:`자주 출제 (29/39회)`,summary:`<ul>
<li><strong>핵심 개념</strong>: 만족(Satisfaction, 개인→환경)과 충족(Satisfactoriness, 환경→개인)의 일치</li>
<li><strong>상호작용</strong>: 개인의 욕구·가치 ↔ 직업의 강화체계(보상)</li>
<li><strong>적응 결과</strong>: 재직, 승진, 이직, 해고</li>
<li><strong>직업가치 6가지</strong>: 성취, 편안함, 지위, 이타, 안전, 자율</li>
<li><strong>성격유형 요소</strong>: 민첩성, 역량, 리듬, 지구력</li>
<li><strong>적응방식</strong>: 융통성, 끈기, 반응성, 적극성</li>
</ul>`},{num:23,category:`psychology`,title:`스트레스와 직업건강심리학`,keyword:`스트레스, 직무소진, 번아웃, 대처방식`,frequency:`자주 출제 (25/39회)`,summary:`<ul>
<li><strong>셀리에(Selye) GAS 3단계</strong>: 경고반응 → 저항 → 소진</li>
<li><strong>직무스트레스 요인</strong>: 역할과부하, 역할모호, 역할갈등, 대인갈등, 경력정체</li>
<li><strong>번아웃(Burnout) 3요소</strong>: 정서적 소진, 비인격화(냉소), 개인적 성취감 저하</li>
<li><strong>스트레스 대처</strong>: 문제중심 대처 vs 정서중심 대처</li>
<li><strong>라자러스 인지평가모형</strong>: 1차 평가(위협?) → 2차 평가(대처자원?) → 재평가</li>
</ul>`},{num:24,category:`psychology`,title:`동기이론 (직무동기)`,keyword:`매슬로우, 허즈버그, 브룸, 기대이론, ERG`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>매슬로우 욕구위계</strong>: 생리 → 안전 → 소속·애정 → 존경 → 자아실현</li>
<li><strong>허즈버그 2요인이론</strong>: 위생요인(불만족 방지)과 동기요인(만족 촉진)</li>
<li><strong>앨더퍼 ERG</strong>: 존재(E), 관계(R), 성장(G) — 좌절-회귀 가설</li>
<li><strong>브룸 기대이론</strong>: 동기 = 기대(E) × 수단(I) × 유의성(V)</li>
<li><strong>아담스 공정성이론</strong>: 투입/산출 비율 비교 → 불공정 지각 시 행동 변화</li>
<li><strong>로크 목표설정이론</strong>: 구체적·도전적 목표가 동기 강화</li>
</ul>`},{num:25,category:`jobinfo`,title:`한국표준직업분류(KSCO)`,keyword:`KSCO, 직업분류, 대분류, 직능수준`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>분류 기준</strong>: 직무유사성(수행 직무의 유형)과 직능수준(숙련도)</li>
<li><strong>직능수준 4단계</strong>: 1수준(단순반복) ~ 4수준(고도전문)</li>
<li><strong>대분류 10개</strong>: 관리자, 전문가, 기술자, 사무종사자, 서비스, 판매, 농림어업, 기능원, 장치·기계조작, 단순노무</li>
<li><strong>분류 체계</strong>: 대분류(1자리) → 중분류(2자리) → 소분류(3자리) → 세분류(4자리) → 세세분류(5자리)</li>
<li><strong>분류 원칙</strong>: 포괄성, 상호배타성, 직무유사성 기준</li>
</ul>`},{num:26,category:`jobinfo`,title:`한국표준산업분류(KSIC)`,keyword:`KSIC, 산업분류, 생산단위, 산업활동`,frequency:`자주 출제 (35/39회)`,summary:`<ul>
<li><strong>분류 대상</strong>: 생산단위(사업체)의 산업활동</li>
<li><strong>분류 기준</strong>: 산출물(재화·서비스)의 특성, 투입물, 생산과정</li>
<li><strong>대분류 21개</strong>: A(농업)~U(국제기관) — 알파벳 코드</li>
<li><strong>분류 체계</strong>: 대분류(1자리) → 중분류(2자리) → 소분류(3자리) → 세분류(4자리) → 세세분류(5자리)</li>
<li><strong>직업분류와 차이</strong>: 산업분류=사업체 기준, 직업분류=개인 수행직무 기준</li>
</ul>`},{num:27,category:`jobinfo`,title:`한국직업사전과 직업정보 체계`,keyword:`한국직업사전, 직업코드, 부가직업정보`,frequency:`자주 출제 (33/39회)`,summary:`<ul>
<li><strong>한국직업사전</strong>: 한국고용정보원 발행, 직무분석 기반의 직업해설서</li>
<li><strong>수록 내용</strong>: 직업명, 직업코드, 직무개요, 수행직무, 정규교육, 자격면허, 부가정보</li>
<li><strong>부가직업정보</strong>: DPT(자료·사람·사물 관계), GED(일반교육발달), SVP(특수직업준비), 작업강도, 작업환경</li>
<li><strong>DPT 코드</strong>: D(자료 0~6), P(사람 0~8), T(사물 0~7) — 숫자 낮을수록 높은 수준</li>
<li><strong>워크넷(Work-Net)</strong>: 한국고용정보원 운영, 직업·훈련·채용 통합 정보</li>
</ul>`},{num:28,category:`jobinfo`,title:`직업정보의 수집·분석·제공`,keyword:`직업정보, 정보원, 직무분석, 취업정보`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>직업정보 종류</strong>: 직업의 전망, 보수, 근무조건, 자격요건, 교육·훈련</li>
<li><strong>정보 수집 방법</strong>: 문헌조사, 면접, 설문, 관찰, 인터넷 검색, 직업체험</li>
<li><strong>직업정보 출처</strong>: 한국직업사전, 한국직업전망서, 워크넷, 커리어넷, 고용보험통계</li>
<li><strong>직업정보 평가기준</strong>: 정확성, 최신성, 충분성, 활용가능성</li>
<li><strong>직업정보 제공 방법</strong>: 상담, 집단지도, 미디어, 온라인, 직업박람회</li>
</ul>`},{num:29,category:`jobinfo`,title:`직무분석의 방법과 활용`,keyword:`직무분석, 최초법, FJA, PAQ, 과업`,frequency:`자주 출제 (34/39회)`,summary:`<ul>
<li><strong>직무분석 정의</strong>: 직무의 내용·특성·요건을 체계적으로 분석하는 과정</li>
<li><strong>결과물</strong>: 직무기술서(Job Description)와 직무명세서(Job Specification)</li>
<li><strong>방법</strong>: 관찰법, 면접법, 설문법, 작업일지법, 최초분석법, 중요사건기법(CIT)</li>
<li><strong>FJA(기능적직무분석)</strong>: DPT(자료·사람·사물) 수준 분석</li>
<li><strong>PAQ(직위분석질문지)</strong>: 정보투입, 정신과정, 작업산출, 대인관계, 직무상황, 기타 특성</li>
</ul>`},{num:30,category:`jobinfo`,title:`고용서비스와 직업안정기관`,keyword:`고용센터, 직업안정기관, 직업소개, 고용서비스`,frequency:`자주 출제 (28/39회)`,summary:`<ul>
<li><strong>공공고용서비스</strong>: 고용노동부 산하 고용센터(전국 약 100개소)</li>
<li><strong>고용센터 업무</strong>: 직업소개·상담, 취업알선, 고용보험 업무, 직업훈련, 취업지원</li>
<li><strong>민간고용서비스</strong>: 유료직업소개사업, 무료직업소개사업, 근로자파견사업</li>
<li><strong>직업안정법 주요 내용</strong>: 직업소개사업 신고·등록, 금지사항(강제근로, 연령차별 등)</li>
<li><strong>한국고용정보원</strong>: 고용정보 분석, 직업·진로 연구, 워크넷 운영</li>
</ul>`},{num:31,category:`jobinfo`,title:`직업전망과 고용동향`,keyword:`직업전망, 고용동향, 직종별전망, 노동시장전망`,frequency:`자주 출제 (26/39회)`,summary:`<ul>
<li><strong>한국직업전망서</strong>: 한국고용정보원 발행, 주요 직업의 현황·전망·임금 수록</li>
<li><strong>전망 요인</strong>: 산업구조 변화, 기술발전, 인구변화, 정부정책, 가치관 변화</li>
<li><strong>유망 직업 기준</strong>: 고용 증가, 임금 수준, 고용 안정성, 발전 가능성</li>
<li><strong>고용동향 지표</strong>: 고용률, 실업률, 경제활동참가율, 취업자 수, 비정규직 비율</li>
<li><strong>OECD 고용전망</strong>: 국제비교 자료, 노동시장 정책 평가</li>
</ul>`},{num:32,category:`jobinfo`,title:`국가직무능력표준(NCS)`,keyword:`NCS, 직무능력, 능력단위, 학습모듈`,frequency:`자주 출제 (20/39회)`,summary:`<ul>
<li><strong>NCS 정의</strong>: 산업현장에서 직무 수행에 필요한 지식·기술·소양을 국가가 체계화한 것</li>
<li><strong>구성</strong>: 대분류(24개) → 중분류 → 소분류 → 세분류 → 능력단위 → 능력단위요소</li>
<li><strong>능력단위 구성</strong>: 능력단위요소, 수행준거, 지식·기술·태도, 적용범위 및 작업상황</li>
<li><strong>NCS 학습모듈</strong>: NCS 기반 교육·훈련과정 편성을 위한 교재</li>
<li><strong>활용분야</strong>: 교육과정 개편, 자격설계, 채용·배치, 직업훈련</li>
</ul>`},{num:33,category:`jobinfo`,title:`워크넷과 커리어넷 활용`,keyword:`워크넷, 커리어넷, 직업심리검사, 온라인정보`,frequency:`자주 출제 (24/39회)`,summary:`<ul>
<li><strong>워크넷(Work-Net)</strong>: 한국고용정보원 운영, 구인·구직·직업정보·직업심리검사</li>
<li><strong>워크넷 심리검사</strong>: 직업선호도검사, 직업가치관검사, 구직준비도검사, 영업적성검사 등</li>
<li><strong>커리어넷</strong>: 한국직업능력연구원 운영, 청소년 진로정보·상담·검사 제공</li>
<li><strong>커리어넷 검사</strong>: 직업적성검사, 직업흥미검사, 직업가치관검사 등</li>
<li><strong>기타 정보원</strong>: HRD-Net(훈련정보), Q-Net(자격정보), 잡코리아·사람인(민간)</li>
</ul>`},{num:34,category:`jobinfo`,title:`진로교육과 직업지도`,keyword:`진로교육, 직업지도, 학교진로, 진로체험`,frequency:`자주 출제 (22/39회)`,summary:`<ul>
<li><strong>진로교육 5대 목표</strong>: 자아이해, 직업세계 이해, 진로탐색, 진로설계, 진로준비</li>
<li><strong>진로교육법</strong>: 2015년 시행, 학교 진로교육의 법적 근거</li>
<li><strong>직업지도 방법</strong>: 진로상담, 집단지도, 직업체험, 견학, 멘토링, 포트폴리오</li>
<li><strong>학교 진로교육</strong>: 진로전담교사 배치, 진로체험 의무화, 자유학기제</li>
<li><strong>성인 진로지도</strong>: 전직·재취업 지원, 경력개발, 평생학습</li>
</ul>`},{num:35,category:`jobinfo`,title:`자격제도와 국가기술자격`,keyword:`자격제도, 국가기술자격, 과정평가형, NCS자격`,frequency:`자주 출제 (25/39회)`,summary:`<ul>
<li><strong>국가기술자격 등급</strong>: 기술사, 기능장, 기사, 산업기사, 기능사</li>
<li><strong>국가전문자격</strong>: 개별 법령에 의한 자격(변호사, 의사, 공인중개사 등)</li>
<li><strong>민간자격</strong>: 국가공인 민간자격과 등록 민간자격으로 구분</li>
<li><strong>과정평가형 자격</strong>: NCS 기반 교육·훈련과정 이수 후 내·외부 평가로 자격 부여</li>
<li><strong>자격의 기능</strong>: 능력인증, 인력수급, 교육·훈련 방향 제시, 임금결정 참고</li>
</ul>`},{num:36,category:`jobinfo`,title:`경력개발과 생애설계`,keyword:`경력개발, CDP, 전직지원, 생애설계`,frequency:`자주 출제 (23/39회)`,summary:`<ul>
<li><strong>경력개발(CDP)</strong>: 개인의 경력목표와 조직의 인력수요를 통합하는 체계적 과정</li>
<li><strong>경력 단계</strong>: 탐색 → 확립 → 유지 → 쇠퇴(은퇴)</li>
<li><strong>경력정체(Career Plateau)</strong>: 승진·이동 가능성이 낮아진 상태</li>
<li><strong>전직지원서비스</strong>: 아웃플레이스먼트, 재취업 상담, 경력전환 코칭</li>
<li><strong>생애설계</strong>: 은퇴 후 삶의 목표, 재무, 건강, 여가, 사회활동 설계</li>
</ul>`},{num:37,category:`labor_market`,title:`노동의 수요와 공급`,keyword:`노동수요, 노동공급, 균형임금, 파생수요`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>노동수요</strong>: 파생수요(생산물 수요에서 파생), 한계생산가치(VMP)에 의해 결정</li>
<li><strong>노동수요곡선</strong>: 우하향, 임금↑ → 노동수요↓ (대체효과+규모효과)</li>
<li><strong>노동공급</strong>: 개인의 노동-여가 선택, 소득효과와 대체효과</li>
<li><strong>후방굴절 노동공급곡선</strong>: 임금 상승 시 소득효과>대체효과 → 노동공급↓</li>
<li><strong>균형</strong>: 수요=공급 교차점에서 균형임금·균형고용량 결정</li>
</ul>`},{num:38,category:`labor_market`,title:`임금이론과 임금결정`,keyword:`임금, 보상적격차, 효율임금, 인적자본`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>보상적 임금격차</strong>: 비금전적 직무특성(위험, 불쾌)에 대한 보상 차이</li>
<li><strong>효율임금이론</strong>: 시장균형 이상의 임금 → 생산성 향상, 이직률 감소</li>
<li><strong>인적자본론(Becker)</strong>: 교육·훈련 투자 → 생산성 상승 → 임금 상승</li>
<li><strong>이중노동시장론</strong>: 1차(고임금·안정) vs 2차(저임금·불안정) 분단</li>
<li><strong>임금체계</strong>: 연공급, 직무급, 직능급, 성과급</li>
</ul>`},{num:39,category:`labor_market`,title:`인적자본이론 (Becker, Schultz)`,keyword:`인적자본, Becker, 교육투자, 훈련투자`,frequency:`자주 출제 (35/39회)`,summary:`<ul>
<li><strong>인적자본</strong>: 교육·훈련·경험 등을 통해 축적된 생산능력</li>
<li><strong>교육투자 수익률</strong>: 비용(기회비용+직접비) vs 편익(생애임금 증가)</li>
<li><strong>일반훈련</strong>: 모든 기업에 이전 가능 → 근로자가 비용 부담</li>
<li><strong>기업특수훈련</strong>: 해당 기업에서만 유용 → 기업이 비용 부담</li>
<li><strong>선별(Screening)이론</strong>: 교육은 생산성 향상이 아닌 능력 신호 기능(스펜스)</li>
</ul>`},{num:40,category:`labor_market`,title:`실업의 유형과 대책`,keyword:`실업, 마찰적실업, 구조적실업, 경기적실업`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>마찰적 실업</strong>: 직장이동 과정에서 발생, 정보부족이 원인 — 고용정보 제공으로 완화</li>
<li><strong>구조적 실업</strong>: 산업구조 변화, 기술변화로 발생 — 직업훈련·재훈련으로 대응</li>
<li><strong>경기적(순환적) 실업</strong>: 경기침체로 인한 총수요 부족 — 재정·통화정책으로 대응</li>
<li><strong>계절적 실업</strong>: 계절적 수요변동 — 공공근로, 계절적 직업알선</li>
<li><strong>실업률</strong>: 실업자/(취업자+실업자)×100, ILO 기준</li>
<li><strong>자연실업률</strong>: 마찰적+구조적 실업률, 프리드먼의 개념</li>
</ul>`},{num:41,category:`labor_market`,title:`노동시장의 구조와 유연성`,keyword:`이중노동시장, 내부노동시장, 유연성, 분단`,frequency:`자주 출제 (32/39회)`,summary:`<ul>
<li><strong>이중노동시장론(Doeringer & Piore)</strong>: 1차(고임금·승진기회·고용안정) vs 2차(저임금·불안정·제한적 기회)</li>
<li><strong>내부노동시장</strong>: 기업 내 인사규칙에 의해 임금·배치 결정, 입직구(ports of entry)를 통해서만 진입</li>
<li><strong>외부노동시장</strong>: 시장의 수요공급에 의해 임금·고용 결정</li>
<li><strong>노동시장 유연성</strong>: 수량적(고용·해고), 기능적(직무전환), 임금(성과연동), 시간적(근무시간)</li>
<li><strong>유연안정성(Flexicurity)</strong>: 유연성+안정성 동시 추구(덴마크 모델)</li>
</ul>`},{num:42,category:`labor_market`,title:`노동시장 차별이론`,keyword:`차별, 편견, 통계적차별, 직종분리`,frequency:`자주 출제 (28/39회)`,summary:`<ul>
<li><strong>베커(Becker) 차별이론</strong>: 편견에 의한 차별, 차별계수(d) — 고용주·동료·고객 차별</li>
<li><strong>통계적 차별</strong>: 집단 평균 특성으로 개인을 판단 (정보비용 절감 목적)</li>
<li><strong>직종분리(Occupational Segregation)</strong>: 성별·인종별 직종 집중현상</li>
<li><strong>이중노동시장 차별</strong>: 특정 집단이 2차 노동시장에 집중</li>
<li><strong>차별 시정 정책</strong>: 적극적 고용개선조치(AA), 동일가치노동 동일임금 원칙</li>
</ul>`},{num:43,category:`labor_market`,title:`노동조합과 단체교섭`,keyword:`노동조합, 단체교섭, 단체협약, 교섭구조`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>노동조합의 기능</strong>: 경제적(임금·근로조건 개선), 정치적(정책 참여), 공제적(상호부조)</li>
<li><strong>조합의 임금효과</strong>: 조합-비조합 임금격차, 위협효과, 대기실업</li>
<li><strong>단체교섭 유형</strong>: 기업별, 산업별, 직종별, 대각선, 통일교섭, 집단교섭</li>
<li><strong>단체협약</strong>: 규범적 부분(근로조건)과 채무적 부분(평화의무 등)</li>
<li><strong>쟁의행위</strong>: 파업, 태업, 직장폐쇄, 보이콧, 피케팅</li>
</ul>`},{num:44,category:`labor_market`,title:`고용보험제도`,keyword:`고용보험, 실업급여, 고용안정, 직업능력개발`,frequency:`자주 출제 (34/39회)`,summary:`<ul>
<li><strong>고용보험 4대 사업</strong>: 고용안정사업, 직업능력개발사업, 실업급여, 모성보호</li>
<li><strong>실업급여</strong>: 구직급여(기본), 취업촉진수당(조기재취업수당, 직업능력개발수당 등)</li>
<li><strong>구직급여 수급조건</strong>: 이직일 전 18개월간 피보험단위기간 180일 이상, 비자발적 이직</li>
<li><strong>소정급여일수</strong>: 연령·피보험기간에 따라 120~270일</li>
<li><strong>고용안정사업</strong>: 고용조정 지원, 고용촉진 장려금, 건설근로자 지원</li>
</ul>`},{num:45,category:`labor_market`,title:`비정규직과 고용형태`,keyword:`비정규직, 파견근로, 기간제, 고용형태다양화`,frequency:`자주 출제 (27/39회)`,summary:`<ul>
<li><strong>비정규직 유형</strong>: 기간제, 시간제(파트타임), 파견근로, 용역근로, 특수고용, 일일근로</li>
<li><strong>기간제법</strong>: 사용기간 2년 초과 시 무기계약 간주, 차별시정 제도</li>
<li><strong>파견근로</strong>: 파견사업주-사용사업주-근로자 3자관계, 2년 초과 시 직접고용 의무</li>
<li><strong>비정규직 이슈</strong>: 임금격차, 사회보험 사각지대, 차별, 고용불안정</li>
<li><strong>플랫폼 노동</strong>: 디지털 플랫폼 매개 노동, 종속성 논쟁, 노동자성 인정 문제</li>
</ul>`},{num:46,category:`labor_market`,title:`필립스곡선과 거시노동경제`,keyword:`필립스곡선, 인플레이션, 실업률, 오쿤법칙`,frequency:`자주 출제 (26/39회)`,summary:`<ul>
<li><strong>필립스곡선</strong>: 실업률↓ → 임금(물가)상승률↑ 역관계</li>
<li><strong>단기 필립스곡선</strong>: 우하향, 실업-인플레이션 상충(trade-off)</li>
<li><strong>장기 필립스곡선</strong>: 자연실업률에서 수직(프리드먼, 펠프스)</li>
<li><strong>스태그플레이션</strong>: 실업↑ + 물가↑ 동시 발생, 필립스곡선 이동</li>
<li><strong>오쿤의 법칙</strong>: 실업률 1%p 상승 → GDP 약 2~3% 감소</li>
</ul>`},{num:47,category:`labor_market`,title:`최저임금제도`,keyword:`최저임금, 고용효과, 수요독점, 최저임금위원회`,frequency:`자주 출제 (29/39회)`,summary:`<ul>
<li><strong>최저임금제</strong>: 국가가 임금의 최저수준을 정하여 사용자에게 강제하는 제도</li>
<li><strong>경쟁시장 효과</strong>: 최저임금>균형임금 → 초과공급(실업) 발생</li>
<li><strong>수요독점 시장</strong>: 최저임금 설정 → 고용 증가 가능(일정 범위)</li>
<li><strong>최저임금위원회</strong>: 근로자·사용자·공익위원 각 9인, 매년 심의·의결</li>
<li><strong>적용범위</strong>: 1인 이상 사업장, 일부 감액 적용(수습, 감시·단속적 근로 등)</li>
</ul>`},{num:48,category:`labor_market`,title:`노동생산성과 경제성장`,keyword:`노동생산성, 경제성장, 기술진보, 총요소생산성`,frequency:`자주 출제 (24/39회)`,summary:`<ul>
<li><strong>노동생산성</strong>: 산출량/노동투입량, 노동의 효율성 지표</li>
<li><strong>생산성 결정요인</strong>: 물적자본, 인적자본, 기술수준, 제도·문화</li>
<li><strong>총요소생산성(TFP)</strong>: 노동+자본 외 기술진보 등의 기여분(솔로우 잔차)</li>
<li><strong>임금-생산성 연계</strong>: 임금 상승률≒노동생산성 증가율이 바람직</li>
<li><strong>단위노동비용</strong>: 임금/생산성, 국가경쟁력 지표로 활용</li>
</ul>`},{num:49,category:`labor_law`,title:`근로기준법 총칙 (근로자·사용자 개념)`,keyword:`근로기준법, 근로자, 사용자, 근로계약`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>근로자</strong>: 직업의 종류와 관계없이 사업(장)에서 임금을 목적으로 근로를 제공하는 자</li>
<li><strong>사용자</strong>: 사업주, 사업경영담당자, 근로자에 관한 사항에 대해 사업주를 위하여 행위하는 자</li>
<li><strong>근로계약</strong>: 근로자가 사용자에게 근로를 제공하고 사용자는 이에 대한 임금을 지급할 것을 약정</li>
<li><strong>기본원칙</strong>: 균등대우, 강제근로 금지, 중간착취 금지, 공민권 행사 보장</li>
<li><strong>적용범위</strong>: 상시 5인 이상 사업장(일부 규정은 5인 미만에도 적용)</li>
</ul>`},{num:50,category:`labor_law`,title:`근로계약과 취업규칙`,keyword:`근로계약, 취업규칙, 명시사항, 해고`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>근로계약 명시사항</strong>: 임금, 소정근로시간, 휴일, 연차유급휴가, 취업장소, 업무내용</li>
<li><strong>단시간근로자</strong>: 근로계약서에 근로일별 근로시간 명시 의무</li>
<li><strong>취업규칙</strong>: 상시 10인 이상 사업장 작성·신고 의무</li>
<li><strong>취업규칙 불이익변경</strong>: 근로자 과반수 동의(노조 있으면 노조 동의)</li>
<li><strong>해고</strong>: 정당한 사유, 30일 전 서면 예고, 경영상 해고(긴박한 경영상 필요)</li>
</ul>`},{num:51,category:`labor_law`,title:`임금에 관한 법률`,keyword:`임금, 평균임금, 통상임금, 임금지급 4원칙`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>임금</strong>: 사용자가 근로의 대가로 지급하는 금품 일체(명칭 불문)</li>
<li><strong>평균임금</strong>: 산정사유발생일 이전 3개월간 총임금/총일수 — 퇴직금·재해보상 기준</li>
<li><strong>통상임금</strong>: 정기적·일률적·고정적으로 지급되는 임금 — 연장·야간·휴일수당 기준</li>
<li><strong>임금지급 4원칙</strong>: 통화불, 직접불, 전액불, 매월 1회 이상 정기불</li>
<li><strong>휴업수당</strong>: 사용자 귀책사유 휴업 시 평균임금의 70% 이상 지급</li>
</ul>`},{num:52,category:`labor_law`,title:`근로시간과 휴식`,keyword:`근로시간, 연장근로, 휴게, 휴일, 연차휴가`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>법정근로시간</strong>: 1주 40시간, 1일 8시간</li>
<li><strong>연장근로</strong>: 당사자 합의 시 1주 12시간 한도, 가산임금 50%</li>
<li><strong>야간근로</strong>: 22시~06시, 가산임금 50%</li>
<li><strong>휴게시간</strong>: 4시간 → 30분 이상, 8시간 → 1시간 이상, 자유이용</li>
<li><strong>연차유급휴가</strong>: 1년간 80% 이상 출근 시 15일, 3년 이상 매 2년마다 1일 추가(최대 25일)</li>
<li><strong>주휴일</strong>: 1주 소정근로일 개근 시 유급 주휴일 부여</li>
</ul>`},{num:53,category:`labor_law`,title:`해고와 퇴직`,keyword:`해고, 부당해고, 경영상해고, 퇴직금`,frequency:`자주 출제 (35/39회)`,summary:`<ul>
<li><strong>해고 제한</strong>: 정당한 이유 필요, 업무상 부상·질병 요양 중 해고 금지, 산전·산후 휴가 중 해고 금지</li>
<li><strong>해고예고</strong>: 30일 전 서면통보 또는 30일분 통상임금 지급</li>
<li><strong>경영상 해고 요건</strong>: 긴박한 경영상 필요, 해고회피 노력, 합리적 기준·공정 선정, 50일 전 통보·성실 협의</li>
<li><strong>부당해고 구제</strong>: 노동위원회 신청(3개월 이내), 원직복직+임금상당액</li>
<li><strong>퇴직금</strong>: 1년 이상 계속근로, 30일분 이상 평균임금×근속연수</li>
</ul>`},{num:54,category:`labor_law`,title:`여성·연소자 보호규정`,keyword:`여성근로자, 연소근로자, 모성보호, 육아휴직`,frequency:`자주 출제 (30/39회)`,summary:`<ul>
<li><strong>최저 고용연령</strong>: 15세 미만(의무교육 중) 사용 금지, 취직인허증</li>
<li><strong>연소근로자(18세 미만)</strong>: 근로시간 1일 7시간·1주 35시간, 야간·휴일 근로 제한</li>
<li><strong>산전후휴가</strong>: 출산 전후 90일(다태아 120일), 출산 후 45일 이상</li>
<li><strong>육아휴직</strong>: 만 8세 이하 자녀, 최대 1년, 남녀 모두 가능</li>
<li><strong>직장 내 성희롱 금지</strong>: 예방교육 의무, 사업주 조치의무</li>
</ul>`},{num:55,category:`labor_law`,title:`산업재해보상보험법`,keyword:`산재보험, 업무상재해, 보험급여, 요양급여`,frequency:`자주 출제 (33/39회)`,summary:`<ul>
<li><strong>산재보험</strong>: 근로자 1인 이상 당연적용, 보험료 전액 사업주 부담</li>
<li><strong>업무상 재해</strong>: 업무상 사고 + 업무상 질병 + 출퇴근 재해</li>
<li><strong>보험급여 종류</strong>: 요양급여, 휴업급여(평균임금70%), 장해급여, 유족급여, 상병보상연금, 장의비, 간병급여</li>
<li><strong>특별급여</strong>: 사용자 과실 시 민사 손해배상에 갈음한 급여</li>
<li><strong>재요양·재활</strong>: 재요양 요건, 직업재활급여(직장복귀지원금 등)</li>
</ul>`},{num:56,category:`labor_law`,title:`노동조합및노동관계조정법`,keyword:`노조법, 노동3권, 부당노동행위, 교섭창구단일화`,frequency:`매회 출제 (39/39회)`,summary:`<ul>
<li><strong>노동3권</strong>: 단결권, 단체교섭권, 단체행동권(헌법 제33조)</li>
<li><strong>노동조합 설립</strong>: 자유설립주의, 행정관청 설립신고</li>
<li><strong>부당노동행위 5유형</strong>: 불이익취급, 황견계약, 단체교섭거부, 지배·개입, 보복적 불이익</li>
<li><strong>교섭창구단일화</strong>: 하나의 사업(장)에 복수노조 시 교섭대표노조를 통해 교섭</li>
<li><strong>쟁의행위</strong>: 조합원 직접·비밀·무기명 투표 과반수 찬성 필요</li>
</ul>`},{num:57,category:`labor_law`,title:`노동쟁의 조정제도`,keyword:`노동쟁의, 조정, 중재, 긴급조정, 필수유지업무`,frequency:`자주 출제 (31/39회)`,summary:`<ul>
<li><strong>조정</strong>: 노동위원회, 조정기간 10일(공익 15일), 쟁의행위 전 필수 절차</li>
<li><strong>중재</strong>: 노동위원회, 중재재정은 단체협약과 동일 효력</li>
<li><strong>긴급조정</strong>: 고용노동부장관 결정, 공익에 중대한 위해 우려 시, 30일 쟁의 금지</li>
<li><strong>필수유지업무</strong>: 필수공익사업에서 업무중단 시 공중의 생명·건강·안전 위해 업무</li>
<li><strong>직권중재 폐지(2006)</strong>: 필수유지업무제도로 대체</li>
</ul>`},{num:58,category:`labor_law`,title:`직업안정법과 고용정책기본법`,keyword:`직업안정법, 직업소개, 고용정책, 고용영향평가`,frequency:`자주 출제 (29/39회)`,summary:`<ul>
<li><strong>직업안정법 목적</strong>: 직업소개·지도·고용정보 제공으로 고용안정·인력수급 원활화</li>
<li><strong>직업소개사업</strong>: 무료(신고), 유료(등록), 국내·국외 구분</li>
<li><strong>금지사항</strong>: 허위구인광고, 강제근로, 차별 등</li>
<li><strong>고용정책기본법</strong>: 국가 고용정책의 기본방향 제시, 고용영향평가 제도</li>
<li><strong>고용영향평가</strong>: 주요 정책의 고용효과 사전 평가</li>
</ul>`},{num:59,category:`labor_law`,title:`남녀고용평등법`,keyword:`남녀고용평등, 차별금지, 적극적고용개선, 일가정양립`,frequency:`자주 출제 (28/39회)`,summary:`<ul>
<li><strong>차별금지</strong>: 모집·채용·배치·승진·교육·정년·퇴직·해고에서 성차별 금지</li>
<li><strong>동일가치노동 동일임금</strong>: 같은 사업장 동일가치 노동에 성별 임금차별 금지</li>
<li><strong>적극적 고용개선조치(AA)</strong>: 여성 고용비율이 산업별 기준에 미달하는 기업에 시행계획 수립 의무</li>
<li><strong>일·가정 양립 지원</strong>: 육아휴직, 육아기 근로시간 단축, 가족돌봄휴직</li>
<li><strong>직장 내 성희롱 금지</strong>: 사업주 예방교육 의무, 발생 시 즉시 조치</li>
</ul>`},{num:60,category:`labor_law`,title:`파견근로자보호법과 기간제법`,keyword:`파견법, 기간제법, 차별시정, 사용기간`,frequency:`자주 출제 (27/39회)`,summary:`<ul>
<li><strong>기간제근로자</strong>: 총 사용기간 2년 초과 시 무기계약 간주</li>
<li><strong>파견근로</strong>: 파견기간 최대 2년(일시적 사유 등), 2년 초과 시 직접고용 의무</li>
<li><strong>파견 금지 업무</strong>: 건설, 하역, 유해·위험 업무, 직업안정법에 따른 근로자공급사업</li>
<li><strong>차별시정</strong>: 비정규직 차별 시 노동위원회에 시정신청(3개월 이내)</li>
<li><strong>사용사업주 의무</strong>: 안전·보건, 성희롱 방지 등에서 직접 사용자 책임</li>
</ul>`}];function ns(e){return!e||e===`all`?ts:ts.filter(t=>t.category===e)}function rs(){let e={};for(let t of es)t.id!==`all`&&(e[t.id]=ts.filter(e=>e.category===t.id).length);return e.all=ts.length,e}var is=[{id:`all`,label:`전체`,color:`#6366F1`,icon:`fa-solid fa-list`},{id:`psychology`,label:`직업심리`,color:`#8B5CF6`,icon:`fa-solid fa-brain`},{id:`counseling`,label:`직업상담 및 취업지원`,color:`#3B82F6`,icon:`fa-solid fa-comments`},{id:`jobinfo`,label:`직업정보`,color:`#10B981`,icon:`fa-solid fa-circle-info`},{id:`labor_market`,label:`노동시장`,color:`#F59E0B`,icon:`fa-solid fa-chart-line`},{id:`labor_law`,label:`고용노동관계법규`,color:`#EF4444`,icon:`fa-solid fa-scale-balanced`}],as=[{num:1,category:`psychology`,stars:4,title:`파슨스의 직업선택 3요인`,content:`<ul>
<li><strong>자신에 대한 이해</strong>: 자신의 흥미, 적성, 능력, 가치관 등 자신에 대한 명확한 이해</li>
<li><strong>직업에 대한 이해</strong>: 직업에서의 성공, 이점, 보상, 자격요건, 기회 등 직업세계에 대한 지식</li>
<li><strong>자신과 직업세계와의 연결</strong>: 개인적인 요인과 직업관련 자격요건 등의 정보를 기초로 한 현명한 선택</li>
</ul>`},{num:2,category:`psychology`,stars:4,title:`홀랜드의 직업선택이론`,content:`<ul>
<li><strong>특징</strong>: 직업적응방식을 6가지 종류로 구분하고, 직업환경을 6가지 차원으로 구분</li>
<li><strong>6가지 성격유형</strong>: 현실형, 탐구형, 예술형, 사회형, 진취형, 관습형</li>
<li><strong>5가지 주요 개념</strong>: 일관성, 차별성, 정체성, 일치성, 계측성</li>
</ul>`},{num:3,category:`psychology`,stars:4,title:`데이비스와 롭퀴스트의 직업적응이론`,content:`<ul>
<li><strong>특징</strong>: 직업적응 프로젝트는 근로자의 적응이 직업만족과 연관된다는 관점에서 출발</li>
<li><strong>직업적응양식</strong>
<ul>
<li>직업성격 측면: 민첩성, 역량, 리��, 지구력</li>
<li>직업적응방식 측면: 끈기(인내), 적극성, 반응성, 융통성</li>
</ul></li>
<li><strong>검사도구</strong>: 미네소타 중요도 질문지(MIQ), 미네���타 직무기술 질���지(MJDQ), 미네소타 직무만족 질문지(MSQ)</li>
</ul>`},{num:4,category:`psychology`,stars:5,title:`긴즈버그의 진로발달이론`,content:`<ul>
<li><strong>특징</strong>: 직업선택은 하나의 발달과정이며, 일련의 결정들이 계속적으로 이루어지는 과정</li>
<li><strong>발달단계</strong>: 환상기 → 잠정기(흥미단계, 능력단계, 가치단계, 전환단계) → 현실기(탐색단계, 구체화단��, 특수화단계)</li>
</ul>`},{num:5,category:`psychology`,stars:5,title:`수퍼의 진로발달이론`,content:`<ul>
<li><strong>특징</strong>: 개인과 주변환경 간의 상호작용을 통해 자아개념이 발달</li>
<li><strong>발달단계</strong>: 성장기 → 탐색기 → 확립기 → 유지기 → 쇠퇴기</li>
<li><strong>진로아치문 모델</strong>: 왼쪽 기둥(개인 측면), 오른쪽 기둥(사회·경제적 측면)</li>
</ul>`},{num:6,category:`psychology`,stars:4,title:`고트프레드슨의 직업포부 발달이론`,content:`<ul>
<li><strong>특징</strong>: 진로결정에 있어 제한(한계)과 타협(절충) 중시</li>
<li><strong>발달단계</strong>: 힘과 크기 지향성 → 성역할 지향성 → 사회적 가치 지향성 → 내적, 고유한 자아 지향성</li>
</ul>`},{num:7,category:`psychology`,stars:4,title:`로의 욕구이론`,content:`<ul>
<li><strong>특징</strong>: 직업흥미가 아동기 부모-자녀 관계에 의해 영향을 받는다고 봄</li>
<li><strong>8가지 직업군</strong>: 서비스직, 비즈니스직, 단체직, 기술직, 옥외활동직, 과학직, 예능직, 일반문화직</li>
<li><strong>직업수준 6단계</strong>: 고급 전문관리, 중급 전문관리, 준전문관리, 숙련직, 반숙련직, 비숙련직</li>
</ul>`},{num:8,category:`psychology`,stars:4,title:`크롬볼츠의 사회학습이론`,content:`<ul>
<li><strong>특징</strong>: 직업선택은 개인이 통제할 수 없는 복잡한 환경적 요인의 결과라고 봄</li>
<li><strong>진로결정에 영향을 미치는 요인</strong>: 유전적 요인과 특별한 능력, 환경적 조건과 사건, 학습경험, 과제접근기술</li>
</ul>`},{num:9,category:`psychology`,stars:3,title:`인지적 정보처리이론`,content:`<ul>
<li><strong>특징</strong>: 개인에게 학습기회를 제공함으로써 개인의 처리능력을 발전시키는 것을 목적으로 함</li>
<li><strong>진로문제해결의 과정</strong>: 의사소통, 분석, 통합 또는 종합, 평가 또는 가치부여, 실행</li>
</ul>`},{num:10,category:`psychology`,stars:3,title:`사회인지 진로이론`,content:`<ul>
<li><strong>특징</strong>: 진로발달과 선택에서 진로와 관련된 자신에 대한 평가와 믿음의 인지적 측면을 강조</li>
<li><strong>상호적 결정론</strong>: 개인, 행동, 환경(상황)의 3변인이 상호작용을 함</li>
<li><strong>3가지 영역 모델</strong>: 흥미모형, 선택모형, 수행모형</li>
</ul>`},{num:11,category:`psychology`,stars:3,title:`가치중심적 진로 접근모형의 명제`,content:`<ul>
<li>개인이 우선권을 부여하는 가치들은 그리 많지 않음</li>
<li>가치는 환경 속에서 가치를 담은 정보를 획득함으로써 학습됨</li>
<li>생애만족은 중요한 모든 가치들을 만족시키는 생애역할들에 의존함</li>
</ul>`},{num:12,category:`psychology`,stars:4,title:`심리검사의 목적과 용도`,content:`<ul>
<li><strong>개인적 기능</strong>: 자기이해 증진</li>
<li><strong>예측적 기능</strong>: 개인의 특성을 파악하여 개인의 수행 예측</li>
<li><strong>진단적 기능(분류적 기능)</strong>: 개인의 장단점 파악</li>
<li><strong>조사적 기능</strong>: 특정 집단의 성향이나 일반적 행동경향 조사</li>
</ul>`},{num:13,category:`psychology`,stars:4,title:`규준참조검사와 준거참조검사`,content:`<ul>
<li><strong>규준참조검사</strong>: 개인의 점수를 다른 사람의 점수와 비교해서 상대적으로 어떤 수준인지를 알아보는 검사</li>
<li><strong>준거참조검사</strong>: 검사점수를 타인과 비교하는 것이 아니라, 어떤 기준점수와 비교해서 이용하는 검사</li>
</ul>`},{num:14,category:`psychology`,stars:5,title:`질적 측정도구`,content:`<ul>
<li><strong>자기효능감 척도</strong>: 어떤 과제를 어느 정도 수준으로 수행할 수 있는 능력을 갖추었다고 스스로 판단하는지의 정도를 측정</li>
<li><strong>직업가계도(제노그램)</strong>: 내담자의 가족 내 직업적 계보를 통해 내담자의 직업에 대한 고정관념이나 직업가치 및 흥미 등의 근본 원인을 파악</li>
<li><strong>직업카드분류</strong>: 직업카드를 사용하여 직업을 선호군·혐오군·미결정중성군으로 분류하여 개인의 직업선택의 동기와 흥미 및 가치관을 탐색</li>
<li><strong>역할놀이</strong>: 가상 상황에서 내담자의 역할활동에 대한 관찰을 통해 내담자의 직업관련 사회적 기술을 파악</li>
</ul>`},{num:15,category:`psychology`,stars:4,title:`확률표집방법`,content:`<ul>
<li><strong>단순무선표집</strong>: 구성원들에게 일련번호를 부여하고, 이 번호들 중에서 무작위로 필요한 만큼 표집</li>
<li><strong>층화표집</strong>: 모집단이 서로 다른 하위집단으로 구성되어 있는 경우 각 집단에서 필요한 만큼의 단순무작위표집을 사용해 표본을 추출</li>
<li><strong>집락표집(군집표집)</strong>: 모집단을 서로 동질적인 집단으로 구분하여 해당되는 집단 자체를 표본으로 추출</li>
<li><strong>체계적 표집(계통표집)</strong>: 모집단 목록에서 무작위로 처음 'K'번째 요소를 뽑고, 이를 토대로 일정한 순서 및 규칙에 따라 이후의 표본을 추출</li>
</ul>`},{num:16,category:`psychology`,stars:3,title:`집단 내 규준`,content:`<ul>
<li><strong>백분위 점수</strong>: 개인이 표준화된 집단에서 차지하는 상대적 위치를 가리키는 것으로, 개인의 점수를 100개의 동일한 구간에서 순위를 정하는 것</li>
<li><strong>표준점수</strong>: 원점수를 주어진 집단의 평균을 중심으로 분포의 표준편차(등간척도)로 전환시킨 점수</li>
<li><strong>표준등급</strong>: 9등급 또는 스테나인 점수라고 하며, 원점수를 1~9등급까지 범주로 나누는 것</li>
</ul>`},{num:17,category:`psychology`,stars:5,title:`신뢰도`,content:`<ul>
<li><strong>검사-재검사신뢰도</strong>: 동일한 사람에게 동일한 검사를 서로 다른 시기에 두 번 실시하여 검사점수들 간의 상관관계를 알아보는 것으로 신뢰도를 추정</li>
<li><strong>동형검사신뢰도</strong>: 동일한 수검자에게 첫 번째 실시한 검사와 동일한 유형의 검사를 실시하여 두 검사점수 간의 상관계수에 의해 신뢰도를 추정</li>
<li><strong>반분신뢰도</strong>: 하나의 검사를 둘로 나누어 두 검사 간 동질성과 일치성을 비교하는 방법</li>
<li><strong>문항 내적 합치도</strong>: 한 검사 내의 문항 하나하나를 각각의 독립된 검사로 보고 이들 간의 일치성, 동질성, 합치성의 상관계수를 구하는 방법</li>
</ul>`},{num:18,category:`psychology`,stars:3,title:`신뢰도 계수에 영향을 미치는 요인`,content:`<ul>
<li>개인차가 클수록 커짐</li>
<li>검사 문항의 수가 증가할수록 신뢰도는 증가 (다만 정비례하여 커지는 것은 아님)</li>
<li>문항반응 수가 적정한 크기를 유지할 때 커짐</li>
<li>신뢰도 계수는 신뢰도 측정방법에 따라서 달라질 수 있음</li>
</ul>`},{num:19,category:`psychology`,stars:5,title:`타당도`,content:`<ul>
<li><strong>준거타당도</strong>: 어떤 심리검사가 특정 준거와 어느 정도 관련성이 있는지를 알아보는 것으로, 예언타당도와 동시타당도가 있음</li>
<li><strong>안면타당도</strong>: 검사를 받는 사람들에게 타당도를 묻는 것으로, 일반인에게 그 검사가 타당한 것처럼 보이는가를 뜻함</li>
<li><strong>내용타당도</strong>: 검사의 문항들이 그 검사가 측정하고자 하는 내용 영역을 얼마나 잘 반영하고 있는지의 정도</li>
<li><strong>구성타당도</strong>: 측정하고자 하는 추상적 개념인자들이 실제로 측정도구에 의해 제대로 측정되었는지의 정도를 나타내는 것으로, 수렴타당도, 변별타당도, 요인분석법이 있음</li>
</ul>`},{num:20,category:`psychology`,stars:4,title:`준거타당도의 크기에 영향을 미치는 요인`,content:`<ul>
<li><strong>표집오차</strong>: 조사대상자가 모집단의 전체가 아니기 때문에 생기는 오차로 모집단 조사를 위한 표본의 표집과정에서 초래되는 데이터 수집의 오차</li>
<li><strong>범위제한</strong>: 준거타당도 계산을 위해 얻은 자료들이 검사점수와 준거점수의 전체 범위를 포괄하지 않고 일부 범위만을 포괄하는 경우의 상관계수가 실제 상관계수보다 작게 나타나는 것</li>
<li><strong>준거측정치의 타당도</strong>: 준거측정도구의 준거측정치(실제준거)가 해당 개념준거를 얼마나 잘 반영하는가의 문제</li>
<li><strong>준거측정치의 신뢰도</strong>: 준거측정치의 신뢰도가 낮으면 검사의 준거타당도도 낮아지게 됨</li>
</ul>`},{num:21,category:`psychology`,stars:5,title:`웩슬러 성인용 지능검사(WAIS)`,content:`<ul>
<li><strong>언어성 검사의 하위검사</strong>: 기본지식, 공통성, 산수, 어휘, 이해, 숫자 외우기</li>
<li><strong>동작성 검사의 하위검사</strong>: 빠진 곳 찾기, 차례 맞추기, 토막 짜기, 모양 맞추기, 바꿔 쓰기</li>
</ul>`},{num:22,category:`psychology`,stars:3,title:`일반적성검사(GATB) 검출적성`,content:`<p>수리능력, 지능, 공간적성, 사무지각, 언어능력, 형태지각, 운동반응, 손재치, 손가락 재치</p>`},{num:23,category:`psychology`,stars:3,title:`진로성숙도검사(CMI)`,content:`<ul>
<li><strong>태도척도(상담척도)의 하위영역</strong>
<ul>
<li>진로 결정성: 선호하는 진로의 방향에 대한 확신의 정도</li>
<li>참여도: 진로선택 과정에 능동적으로 참여하는 정도</li>
<li>독립성: 진로선택을 독립적으로 할 수 있는 정도</li>
<li>성향: 진로결정에 필요한 사전 이해와 준비의 정도</li>
<li>타협성: 진로선택 시에 욕구와 현실에 타협하는 정도</li>
</ul></li>
<li><strong>능력척도의 하위영역</strong>
<ul>
<li>자기평가: 자신의 흥미, 성격 등을 명확히 이��하는 능력</li>
<li>직업정보: 자신의 관심분야의 직업세계에 대한 정보의 획득 및 분석 능력</li>
<li>목표선정: 자신의 정보와 직업세계의 연결을 통한 직업목표 선정 능력</li>
<li>계획: 자신의 직업목표를 달성하기 위한 실제적 계획 능력</li>
<li>문제해결: 자신의 진로과정에서 부딪히는 다양한 문제들을 해결하는 능력</li>
</ul></li>
</ul>`},{num:24,category:`psychology`,stars:4,title:`성격 5요인 검사`,content:`<ul>
<li><strong>외향성</strong>: 타인과의 상호작용을 원하고 타인의 관심을 끌고자 하는 경향 정도</li>
<li><strong>호감성</strong>: 타인과 편안하고 조화로운 관계를 유지하려는 경향 정도</li>
<li><strong>성실성</strong>: 사회적 규칙, 규범, 원칙들을 기꺼이 지키려는 경향 정도</li>
<li><strong>정서적 불안정성</strong>: 정서적으로 얼마나 안정되어 있는지를 측정함</li>
<li><strong>경험에 대한 개방성</strong>: 세계에 대한 관심, 호기심, 다양한 경험에 대한 추구 및 포용력 정도</li>
</ul>`},{num:25,category:`psychology`,stars:3,title:`초기면담의 구조화`,content:`<ul>
<li>비밀보장의 한계에 대해 설명</li>
<li>상담 장소, 시간, 상담의 지속 등에 대해서 미리 합의하고 구조화</li>
<li>상담의 목표와 성질에 대해 구조화</li>
<li>내담자가 지켜야 할 규칙을 구조화</li>
<li>상담자와 내담자의 역할을 구조화</li>
</ul>`},{num:26,category:`psychology`,stars:4,title:`직업상담의 기초기법`,content:`<ul>
<li><strong>공감(공감적 이해)</strong>: 내담자의 세계를 마치 상담자 자신의 세계인 것처럼 공감하는 것</li>
<li><strong>경청</strong>: 내담자의 말에 항상 세심하게 주목하는 것</li>
<li><strong>반영</strong>: 내담자의 생각과 말을 상담자가 다른 참신한 말로 부연하는 것</li>
<li><strong>직면</strong>: 내담자가 자신의 문제를 회피하지 않고 도전하도록 하는 것</li>
<li><strong>명료화</strong>: 내담자의 말 속에 포함되어 있는 불분명한 측면을 상담자가 분명하게 밝히는 것</li>
<li><strong>수용(수용적 존중)</strong>: 내담자의 이야기에 주의집중하고 내담자를 인격적으로 존중하는 것</li>
<li><strong>해석</strong>: 내담자가 직접 진술하지 않은 내용이나 개념을 그의 과거 경험이나 진술을 토대로 하여 추론해서 말하는 것</li>
<li><strong>요약과 재진술</strong>: 내담자가 전달하는 이야기의 표면적 의미를 다른 말로 바꾸어서 말하는 것</li>
</ul>`},{num:27,category:`psychology`,stars:3,title:`생애진로사정의 구조`,content:`<ul>
<li><strong>진로사정</strong>: 직업경험, 교육 또는 훈련과정 및 관심사, 오락(여가활동)</li>
<li><strong>전형적인 하루</strong>: 내담자가 의존적 또는 독립적인지, 자발적(임의적) 또는 체계적인지 자신의 성격차원을 파악하도록 도움</li>
<li><strong>강점과 장애</strong>: 문제나 환경적 장애, 극복하기 위해 가지고 있는 대처자원이나 잠재력 탐구</li>
<li><strong>요약</strong>: 내담자가 자신의 자원을 요약함으로써 목표를 성취하도록 자극</li>
</ul>`},{num:28,category:`psychology`,stars:4,title:`흥미사정방법`,content:`<ul>
<li><strong>수퍼(Super)의 흥미사정기법</strong>: 조사된 흥미, 표현된 흥미, 조작된 흥미</li>
<li><strong>일반적인 흥미사정방법</strong>: 직업선호도검사, 직업카드분류법, 흥미평가기법, 작업경험의 분석</li>
</ul>`},{num:29,category:`psychology`,stars:4,title:`인지적 명확성 사정`,content:`<table>
<tr><th>인지적 명확성이 부족한 내담자 유형</th><th>상담자의 개입방법</th></tr>
<tr><td>파행적 의사소통</td><td>저항에 초점 맞추기</td></tr>
<tr><td>가정된 불가능·불가피성</td><td>논리적 분석 및 격려</td></tr>
<tr><td>단순 오정보</td><td>정보 제공하기</td></tr>
<tr><td>복잡한 오정보</td><td>논리적 분석</td></tr>
<tr><td>강박적 사고</td><td>REBT 기법</td></tr>
<tr><td>원인과 결과의 착오</td><td>논리적 분석</td></tr>
<tr><td>구체성의 결여</td><td>구체화시키기</td></tr>
</table>`},{num:30,category:`psychology`,stars:4,title:`내담자의 정보 및 행동에 대한 이해기법`,content:`<ul>
<li><strong>가정 사용하기</strong>: 내담자의 행동을 예측하기 위해 내담자에게 그 행동이 존재했다는 것을 가정하고 이야기함</li>
<li><strong>전이된 오류 정정하기</strong>: 내담자가 가지고 있는 정보, 한계, 논리적 오류를 정정하는 것</li>
<li><strong>저항감 재인식 및 다루기</strong>: 저항의 목적이 무엇인지 이해하고 재인식시켜 줌</li>
<li><strong>근거 없는 믿음 확인하기</strong>: 근거 없는 믿음이 잘못된 것이라는 것을 알게 함으로써 다른 새로운 대안을 찾게 하는 것</li>
<li><strong>의미 있는 질문 던지기</strong>: 의미 있는 질문을 던져 내담자의 자유롭고 다양한 반응을 유도</li>
<li><strong>왜곡된 사고 확인하기</strong>: 상담자는 내담자가 가지고 있는 왜곡된 사고를 확인</li>
<li><strong>반성의 장 마련하기</strong>: 자신이나 타인 또는 세상 등에 대한 부정적인 판단을 내리는 과정을 알 수 있게 조성함</li>
<li><strong>변명에 초점 맞추기</strong>: 변명이란 자신의 행동의 부정적인 면을 줄이려는 행동이나 설명으로 이에 초점을 맞춤</li>
<li><strong>분류 및 재구성하기</strong>: 내담자의 표현을 분류 및 재구성함으로써 내담자 자신의 세계를 다른 각도에서 볼 수 있는 기회를 제공</li>
</ul>`},{num:31,category:`psychology`,stars:4,title:`셀리에의 일반적응증후군`,content:`<ul>
<li><strong>경고(경계)단계</strong>: 정신적·육체적 위험 앞에 갑자기 노출되어 나타나는 최초의 즉각적 반응 단계</li>
<li><strong>저항단계</strong>: 제시된 스트레스 유발요인에 대한 저항은 증가되지만 신체의 전반적인 저항력은 저하되는 단계</li>
<li><strong>탈진(소진)단계</strong>: 장기간 스트레스가 지속되는 상태로 스트레스에 대한 적응에너지가 고갈된 단계</li>
</ul>`},{num:32,category:`psychology`,stars:3,title:`역할갈등의 유형`,content:`<ul>
<li><strong>개인 간 역할갈등</strong>: 직업에서의 요구와 직업 이외의 요구가 다를 때 발생</li>
<li><strong>개인 내 역할갈등</strong>: 개인이 수행하는 직무의 요구와 개인의 가치관이 다를 때 발생</li>
<li><strong>송신자 간 역할갈등</strong>: 개인에게 요구하는 두 사람 이상의 요구가 다를 때 발생</li>
<li><strong>송신자 내 역할갈등</strong>: 상급자가 개인에게 서로 양립할 수 없는 요구를 할 때 발생</li>
</ul>`},{num:33,category:`psychology`,stars:4,title:`직무스트레스`,content:`<ul>
<li><strong>직무스트레스원</strong>: 과제특성, 직무역할, 산업·조직문화 풍토</li>
<li><strong>직무스트레스 조절변인</strong>: A/B 성격유형, 통제의 소재, 사회적 지원</li>
</ul>`},{num:34,category:`counseling`,stars:3,title:`직업상담의 원리`,content:`<ul>
<li>변화하는 직업세계에 대한 이해를 토대로 진행되어야 함</li>
<li>인간의 성격특성과 재능에 대한 이해를 토대로 진행되어야 함</li>
<li>심리검사 결과로 합리적인 판단을 이끌어낼 수 있어야 함</li>
<li>내담자의 전 생애적 발달과정을 반영할 수 있어야 함</li>
<li>개인의 의사결정에 대한 과정이 포함되어야 함</li>
<li>윤리적인 범위 내에서 상담을 전개하여야 함</li>
</ul>`},{num:35,category:`counseling`,stars:3,title:`직업상담사의 역할과 직무`,content:`<ul>
<li>상담자 / 정보 분석자</li>
<li>(검사도구) 해석자 / (직업문제) 처치자</li>
<li>조언자 / (직업지도 프로그램) 개발자</li>
<li>지원자 / 협의자</li>
<li>관리자 / 연구 및 평가자</li>
</ul>`},{num:36,category:`counseling`,stars:4,title:`직업상담의 일반적인 과정`,content:`<ul>
<li>관계형성 → 진단 및 측정 → 목표설정 → 개입 → 평가</li>
<li>관계수립 및 문제의 평가 → 상담목표의 설정 → 문제해결을 위한 개입 → 훈습 → 종결 및 추수지도</li>
</ul>`},{num:37,category:`counseling`,stars:4,title:`집단직업상담의 장점`,content:`<ul>
<li>집단 구성원 간의 활발한 피드백을 통해 자기 탐색을 증진</li>
<li>일반적으로 성숙도가 낮은 이에게 적합</li>
<li>개인상담보다 부담이 적어 받아들이기 용이함</li>
<li>타인과의 상호작용을 통해 대인교류능력과 사회성 증진</li>
<li>일대다수 상담으로 경제성 확보</li>
<li>타인을 통한 대리학습(관찰학습)의 기회부여</li>
</ul>`},{num:38,category:`counseling`,stars:5,title:`윌리암슨의 문제유형 (특성-요인 상담)`,content:`<ul>
<li>흥미와 적성의 불일치(모순)</li>
<li>어리석은 선택(현명하지 못한 선택)</li>
<li>불확실한 직업선택(확신 부족)</li>
<li>진로(직업) 무선택</li>
</ul>`},{num:39,category:`counseling`,stars:5,title:`보딘의 문제유형 (정신역동 상담)`,content:`<ul>
<li>내적 갈등(자아갈등)</li>
<li>정보의 부족</li>
<li>의존성</li>
<li>확신의 결여(문제는 없지만 확신이 부족한 경우)</li>
<li>진로선택의 불안</li>
</ul>`},{num:40,category:`counseling`,stars:4,title:`크릿츠의 문제유형 (포괄적 상담)`,content:`<ul>
<li><strong>적응성</strong>: 적응형, 부적응형</li>
<li><strong>결정성</strong>: 다재다능형, 우유부단형</li>
<li><strong>현실성</strong>: 비현실형, 불충족형, 강압형</li>
</ul>`},{num:41,category:`counseling`,stars:3,title:`사이버 상담의 필요성`,content:`<ul>
<li>인터넷의 보급과 활용으로 경제성 및 효율성이 높다.</li>
<li>내담자의 익명성이 보장되어 솔직한 표현이 가능하다.</li>
<li>상담자를 직접 대면하지 않으므로 내담자가 느끼는 심리적 부담감이 적다.</li>
<li>가명을 활용한 상담사례 소개 및 대처방안을 제시할 수 있다.</li>
<li>문제해결을 위한 자료탐색이 용이하다.</li>
<li>내담자 주도에 의한 자기성찰 능력을 향상시킬 수 있다.</li>
</ul>`},{num:42,category:`counseling`,stars:3,title:`정신분석 상담의 불안의 유형`,content:`<ul>
<li><strong>현실적 불안</strong>: 현실에서 지각하는 실제적 위험</li>
<li><strong>신경증적 불안</strong>: 본능이 통제되지 않아 생기는 불안</li>
<li><strong>도덕적 불안</strong>: 수치심과 죄의식을 느끼게 되는 불안</li>
</ul>`},{num:43,category:`counseling`,stars:4,title:`정신분석 상담의 주요 방어기제`,content:`<ul>
<li><strong>억압</strong>: 욕망, 충동, 생각들을 무의식으로 밀어넣는 것</li>
<li><strong>승화</strong>: 충동들을 사회적으로 용납되는 형태로 표출하는 것</li>
<li><strong>부정</strong>: 고통스러운 현실을 무의식으로 인정하지 않으려는 것</li>
</ul>`},{num:44,category:`counseling`,stars:4,title:`개인주의 상담의 목표 (아들러)`,content:`<ul>
<li>사회적 관심을 갖도록 도움</li>
<li>패배감을 극복하고 열등감을 감소시킬 수 있도록 도움</li>
<li>내담자의 잘못된 가치와 목표를 수정하도록 도움</li>
<li>잘못된 동기를 바꾸도록 도움</li>
<li>사회의 구성원으로 사회에 기여하도록 도움</li>
</ul>`},{num:45,category:`counseling`,stars:5,title:`내담자중심 상담`,content:`<ul>
<li><strong>특징</strong>: 상담자와 내담자 간의 관계형성과 허용적 분위기를 강조</li>
<li><strong>상담의 목적</strong>: 자아실현과 완전히 기능하는 사람</li>
<li><strong>상담자의 태도</strong>: 일치성, 무조건적인 수용, 공감적 이해</li>
</ul>`},{num:46,category:`counseling`,stars:4,title:`형태주의 상담 (펄스)`,content:`<ul>
<li><strong>특징</strong>: '여기-지금'의 현재 상황에 대한 인간의 자각에 초점</li>
<li><strong>상담의 목표</strong>: 성숙과 통합의 성취, 선택과 책임의식의 증진, 변화와 성장</li>
<li><strong>상담의 기법</strong>: 자각하기(욕구와 감정, 신체, 언어), 과장하기, 빈 의자 기법, 꿈 작업</li>
</ul>`},{num:47,category:`counseling`,stars:4,title:`실존주의 상담`,content:`<ul>
<li><strong>특징</strong>: 스스로의 자유와 책임의 양면성에 대한 지각을 중시</li>
<li><strong>상담의 목적</strong>: 피해자적 역할로부터 벗어날 수 있도록 돕는 것</li>
<li><strong>인간의 궁극적 관심사</strong>: 삶의 의미성, 진실성, 자유와 책임, 죽음과 비존재</li>
</ul>`},{num:48,category:`counseling`,stars:5,title:`인지·정서·행동 상담 (엘리스)`,content:`<ul>
<li><strong>특징</strong>: 심리적 문제를 일으키는 사건보다 사건에 대한 사고의 분석을 중시</li>
<li><strong>상담의 목표</strong>: 내담자의 비합리적인 신념을 논박하여 합리적인 신념으로 전환</li>
<li><strong>ABCDE모형</strong>: A(선행사건), B(신념체계), C(결과), D(논박), E(효과), F(새로운 느낌)</li>
</ul>`},{num:49,category:`counseling`,stars:4,title:`교류분석 상담`,content:`<ul>
<li><strong>특징</strong>: 개인 간, 개인 내부에서 이루어지는 다양한 자아들 간의 상호작용을 분석하는 구조를 제공</li>
<li><strong>자아 상태</strong>: 부모자아·어버이자아, 어른자아·성인자아, 어린이자아</li>
<li><strong>생활자세</strong>: 자기긍정/타인긍정, 자기긍정/타인부정, 자기부정/타인긍정, 자기부정/타인부정</li>
</ul>`},{num:50,category:`counseling`,stars:5,title:`특성-요인 직업상담`,content:`<ul>
<li><strong>특징</strong>: '직업과 사람을 연결시키기'라는 심리학적 관심을 대표</li>
<li><strong>상담의 과정</strong>: 분석 → 종합 → 진단 → 예측 → 상담 → 추후지도</li>
<li><strong>검사 해석단계 상담기법</strong>: 직접 충고, 설득, 설명</li>
</ul>`},{num:51,category:`counseling`,stars:4,title:`발달적 직업상담`,content:`<ul>
<li><strong>특징</strong>: 내담자의 진로발달을 개인의 전 생애에 걸쳐 이루어지는 과정으로 봄</li>
<li><strong>직업상담의 평가</strong>: 문제의 평가, 개인의 평가, 예언평가</li>
<li><strong>상담의 과정</strong>: 문제의 탐색 및 자아개념 묘사 → 심층적 탐색 → 자아수용 및 자아통찰 → 현실검증 → 태도와 감정의 탐색과 처리 → 의사결정</li>
</ul>`},{num:52,category:`counseling`,stars:4,title:`정신역동적 직업상담 (보딘)`,content:`<ul>
<li><strong>특징</strong>: 정신분석학과 특성-요인이론 및 내담자중심 직업상담의 개념을 통합한 접근법</li>
<li><strong>상담의 과정</strong>: 탐색과 계약설정의 단계 → 중대한(핵심) 결정의 단계 → 변화를 위한 노력의 단계</li>
<li><strong>상담의 기법</strong>: 명료화, 비교, 소망-방어체계의 해석</li>
</ul>`},{num:53,category:`counseling`,stars:4,title:`행동주의 직업상담`,content:`<ul>
<li><strong>특징</strong>: 내담자의 부적응 행동을 바람직한 적응 행동으로 대치시키는 데 조력</li>
<li><strong>상담의 목적</strong>: 불안을 제거하고 직업결정기술을 학습시키는 것</li>
<li><strong>내담자의 문제유형</strong>: 우유부단, 무결단성</li>
<li><strong>불안감소기법</strong>: 체계적 둔감법, 홍수법, 혐오치료, 내적 금지, 반조건형성(역조건형성), 주장훈련, 자기표현훈련 등</li>
<li><strong>학습촉진기법</strong>: 강화, 변별학습, 모델링(모방), 행동조성(조형), 토큰경제(상표제도) 등</li>
</ul>`},{num:54,category:`counseling`,stars:4,title:`포괄적 직업상담 (크릿츠)`,content:`<ul>
<li><strong>특징</strong>: 다양한 상담이론을 통합한 것으로, 특히 모든 상담의 진단과정을 고려함</li>
<li><strong>상담의 과정</strong>: 진단단계(초기단계) → 명료화 또는 해석의 단계(중간단계) → 문제해결의 단계(마지막단계)</li>
</ul>`},{num:55,category:`counseling`,stars:3,title:`목표설정의 원칙`,content:`<ul>
<li>내담자가 원하는 것을 상담목표로 설정해야 함</li>
<li>상담자의 기술과 양립할 것을 상담목표로 설정해야 함</li>
<li>구체적인 것을 상담목표로 설정해야 함</li>
<li>실현 가능한 것을 상담목표로 설정해야 함</li>
</ul>`},{num:56,category:`counseling`,stars:4,title:`6개의 생각하는 모자`,content:`<ul>
<li><strong>하양</strong>: 사실에만 초점을 둔 사고</li>
<li><strong>빨강</strong>: 직관에 의한 감정이나 느낌을 반영</li>
<li><strong>검정</strong>: 논리적, 부정적, 비판적 사고를 반영</li>
<li><strong>노랑</strong>: 낙관적, 긍정적 시각을 반영</li>
<li><strong>초록</strong>: 새로운 아이디어 생성, 창조적 사고를 반영</li>
<li><strong>파랑</strong>: 사회자로서의 역할과 의사결정자의 역할</li>
</ul>`},{num:57,category:`counseling`,stars:3,title:`코틀의 원형검사`,content:`<ul>
<li><strong>원의 의미</strong>: 각각 과거·현재·미래를 뜻하는 세 개의 원</li>
<li><strong>원의 크기</strong>: 시간차원에 대한 상대적 친밀감</li>
<li><strong>원의 배치</strong>: 시간차원이 각각 어떻게 연관되어 있는지를 나타냄</li>
<li><strong>시간전망 개입의 세 가지 측면</strong>
<ul>
<li>방향성: 미래지향성을 증진시키기 위한 것으로, 미래에 대한 낙관적인 입장을 구성함</li>
<li>변별성: 미래를 현실처럼 느끼게 하고 미래계획에 대한 긍정적 태도를 강화시키며 목표설정을 신속하게 하는 데 목표를 둠</li>
<li>통합성: 현재 행동과 미래의 결과를 연결시키고, 계획한 기법을 실습하여 미래에 대한 인식을 증진</li>
</ul></li>
</ul>`},{num:58,category:`counseling`,stars:4,title:`하렌(Harren)의 의사결정 유형`,content:`<ul>
<li><strong>합리적 유형(Rational Style)</strong>: 의사결정과정에서 자신과 상황에 대한 정확한 정보를 수집하고, 논리적이고 체계적으로 접근하는 유형. 의사결정에 대한 책임을 자신이 진다.</li>
<li><strong>직관적 유형(Intuitive Style)</strong>: 의사결정의 기초로 상상을 사용하고 현재의 감정에 주의를 기울이며 정서적 자각을 사용한다. 선택에 대한 확신은 비교적 빨리 내리지만 설명하지 못할 경우가 있다.</li>
<li><strong>의존적 유형(Dependent Style)</strong>: 의사결정에 대한 개인적 책임을 부정하고 그 책임을 외부로 돌리는 경향이 있다. 타인의 영향을 많이 받고, 수동적이며 순종적이다.</li>
</ul>`},{num:59,category:`counseling`,stars:4,title:`상담목표 설정 시 고려사항 및 기본원칙`,content:`<ul>
<li>내담자가 원하는 것을 상담목표로 설정한다.</li>
<li>상담자의 기술과 양립할 것을 상담목표로 설정한다.</li>
<li>구체적인 것을 상담목표로 설정한다.</li>
<li>실현 가능한 것을 상담목표로 설정한다.</li>
</ul>`},{num:60,category:`counseling`,stars:4,title:`상담내용에 대한 비밀보호 예외사항`,content:`<ul>
<li>내담자가 자신이나 다른 사람을 위험에 빠뜨릴 가능성이 클 때</li>
<li>내담자가 자살을 시도할 계획이 있는 경우</li>
<li>법적으로 정보의 공개가 요구되는 경우</li>
<li>내담자가 감염성이 있는 치명적인 질병에 걸린 경우</li>
<li>미성년자인 내담자가 학대를 당하고 있는 경우</li>
<li>내담자가 아동학대를 하는 경우</li>
<li>상담자가 슈퍼비전을 받아야 하는 경우</li>
<li>심각한 범죄 실행의 가능성이 있는 경우</li>
</ul>`},{num:61,category:`jobinfo`,stars:5,title:`공공직업정보의 특징`,content:`<ul>
<li>특정한 시기에 국한되지 않고 지속적으로 조사·분석하여 제공</li>
<li>장기적인 계획 및 목표에 따라 정보체계의 개선작업 수행이 가능</li>
<li>전체 산업 및 업종에 걸친 직업 대상</li>
<li>보편적인 항목으로 이루어진 기초적인 직업정보 체계로 구성</li>
</ul>`},{num:62,category:`jobinfo`,stars:3,title:`직업선택 모형`,content:`<ul>
<li><strong>기술적 모형</strong>: 타이드만과 오하라 모형, 힐튼 모형, 브룸 모형, 플레처 모형 및 슈의 모형</li>
<li><strong>처방적 모형</strong>: 카츠의 모형과 칼도와 쥐토우스키의 모형 및 겔라트의 모형</li>
</ul>`},{num:63,category:`jobinfo`,stars:4,title:`한국직업사전(2020)의 구성`,content:`<ul>
<li>직무분석을 바탕으로 조사</li>
<li>직업코드, 본직업명, 직무개요, 수행직무, 부가직업정보</li>
</ul>`},{num:64,category:`jobinfo`,stars:5,title:`한국직업사전(2020)의 부가직업정보`,content:`<p>정규교육, 숙련기간, 직무기능, 작업강도, 육체활동, 작업장소, 작업환경, 유사명칭, 관련직업, 자격/면허, 한국표준산업분류 코드, 한국표준직업분류 ���드, 조사연도</p>`},{num:65,category:`jobinfo`,stars:5,title:`한국직업전망(2021/2022)`,content:`<ul>
<li>9개 분야 220여개 직업에 대한 상세 정보 수록</li>
<li>대표직업명, 하는 일, 업무환경, 되는 길, 적성 및 흥미, 일자리 전망, 관련직업, 분류코드, 관련 정보처 등으로 구성</li>
<li>향후 10년간 해당 직업의 일자리 규모에 대한 전망과 변화요인을 기술</li>
<li>일자리 전망결과: -2% 미만(감소), -2%~-1%(다소 감소), -1%~+1%(현 상태 유지), 1%~2%(다소 증가), 2% 초과(증가) 등 5개 구간</li>
</ul>`},{num:66,category:`jobinfo`,stars:5,title:`한국표준직업분류(2018) 직업의 조건`,content:`<ul>
<li><strong>일의 계속성</strong>: 매일, 매주, 매월 등 주기적으로 행하는 것, 계절적으로 행해지는 것, 명확한 주기는 없으나 계속적으로 행해지는 것, 현재 하고 있는 일을 계속적으로 행할 의지와 가능성이 있는 것</li>
<li><strong>경제성</strong>: 경제적인 거래 관계가 성립하는 활동을 수행해야 함</li>
<li><strong>윤리성과 사회성</strong>: 비윤리적인 영리행위나 반사회적인 활동이 아니어야 하고, 사회적인 기여가 있어야 함</li>
<li><strong>기타</strong>: 속박된 상태에서의 활동이 아니어야 함</li>
</ul>`},{num:67,category:`jobinfo`,stars:5,title:`한국표준직업분류(2018) 직업으로 보지 않는 활동 (10가지)`,content:`<ul>
<li>이자, 주식배당, 임대료 등과 같은 자산 수입이 있는 경우</li>
<li>사회보장이나 민간보험에 의한 수입이 있는 경우</li>
<li>경마, 복권 등에 의한 배당금이나 주식투자에 의한 시세차익이 있는 경우</li>
<li>예·적금 인출, 보험금 수취, 차용 또는 토지나 금융자산을 매각하여 수입이 있는 경우</li>
<li>자기 집의 가사활동에 전념하는 경우</li>
<li>교육기관에 재학하며 학습에만 전념하는 경우</li>
<li>시민봉사활동 등에 의한 무급 봉사적인 일에 종사하는 경우</li>
<li>사회복지시설 수용자의 시설 내 경제활동</li>
<li>수형자의 활동과 같이 법률에 의한 강제노동을 하는 경우</li>
<li>도박, 강도, 절도, 사기, 매춘, 밀수와 같�� 불법적인 활동</li>
</ul>`},{num:68,category:`jobinfo`,stars:5,title:`직업분류원칙`,content:`<ul>
<li><strong>포괄적인 업무에 대한 직업분류원칙</strong>: 주된 직무 우선의 원칙, 최상급 직능수준 우선의 원칙, 생산업무 우선의 원칙</li>
<li><strong>다수 직업 종사자의 분류원칙</strong>: 취업시간 우선의 원칙, 수입 우선의 원칙, 조사 시 최근의 직업원칙</li>
</ul>`},{num:69,category:`jobinfo`,stars:4,title:`한국표준직업분류(2018)의 직업분류 기준`,content:`<ul>
<li><strong>직능</strong>: 주어진 직무의 업무와 과업을 수행하는 능력인 직능(skill)을 근거로 편제되며, 직능수준과 직능유형을 고려</li>
<li><strong>직능수준</strong>: 직무수행능력의 높낮이를 말하는 것으로 정규교육, 직업훈련, 직업경험 그리고 선천적 능력과 사회 문화적 환경 등에 의해 결정</li>
<li><strong>직능유형</strong>: 직무수행에 요구되는 지식의 분야, 사용하는 도구 및 장비, 투입되는 원재료, 생산된 재화나 서비스의 종류와 관련</li>
</ul>`},{num:70,category:`jobinfo`,stars:3,title:`한국고용직업분류(2018) 개요`,content:`<ul>
<li><strong>구성</strong>: 대분류 10개, 중분류 35개, 소분류 136개, 세분류 450개로 구성하고, 세세분류는 취업알선직업분류의 역할</li>
<li><strong>분류원칙</strong>: 직능유형(skill type) 우선, 포괄성, 배타성, 연계성 유지, 최소고용과 노동시장 우선</li>
<li><strong>특징</strong>: 세분류 직업조사 결과 반영, 35개 중분류 중심체계, 중분류를 직능유형(skill type) 중심으로 재구성</li>
</ul>`},{num:71,category:`jobinfo`,stars:4,title:`한국표준산업분류(2017)의 산업, 산업활동, 산업활동의 범위`,content:`<ul>
<li><strong>산업</strong>: 유사한 성질을 갖는 산업활동에 주로 종��하는 생산단위의 집합</li>
<li><strong>산업활동</strong>: 각 생산단위가 노동, 자본, 원료 등 자원을 투입하여 재화 또는 서비스를 생산 또는 제공하는 일련의 활동과정</li>
<li><strong>산업활동의 범위</strong>: 영리적·비영리적 활동이 모두 포함되나, 가정 내의 가사활동은 제외</li>
</ul>`},{num:72,category:`jobinfo`,stars:5,title:`한국표준산업분류(2017)의 분류기준`,content:`<ul>
<li><strong>산출물(생산된 재화 또는 제공된 서비스)의 특성</strong>: 산출물의 물리적 구성 및 가공단계, 산출물의 수요처, 산출물의 기능</li>
<li><strong>투입물의 특성</strong>: 원재료, 생산공정, 생산기술 및 시설 등</li>
<li><strong>생산활동의 일반적인 결합형태</strong></li>
</ul>`},{num:73,category:`jobinfo`,stars:5,title:`한국표준산업분류(2017)의 통계단위`,content:`<table>
<tr><th></th><th>하나 이상의 장소</th><th>단일 장소</th></tr>
<tr><td><strong>하나 이상의 산업활동</strong></td><td>기업집단단위 / 지역단위 / 기업체단위</td><td>-</td></tr>
<tr><td><strong>단일 산업활동</strong></td><td>활동유형단위</td><td>사업체단위</td></tr>
</table>`},{num:74,category:`jobinfo`,stars:3,title:`고용보험의 기업혜택 중 고용창출 장려금의 지원내용`,content:`<ul>
<li>일자리함께하기</li>
<li>국내복귀기업 고용지원</li>
<li>신중년 적합직무</li>
<li>고용촉진 장려금</li>
</ul>`},{num:75,category:`jobinfo`,stars:5,title:`국가기술자격 중 기술·기능 분야의 응시자격`,content:`<ul>
<li><strong>기술사</strong>: 실무경력 9년, 기사 취득 후 실무 4년, 산업기사 취득 후 실무 5년, 기능사 취득 후 실무 7년, 4년제 대학 졸업 후 실무 6년 등</li>
<li><strong>기능장</strong>: 실무경력 9년, 산업기사 이상 취득 후 실무 5년, 기능사 취득 후 실무 7년 등</li>
<li><strong>기사</strong>: 실무경력 4년, 산업기사 이상 취득 후 실무 1년, 기능사 취득 후 실무 3년, 대학(관련학과) 졸업(예정)자 등</li>
<li><strong>산업기사</strong>: 실무경력 2년, 기능사 이상 취득 후 실무 1년, 전문대학(관련학과) 졸업(예정)자 등</li>
</ul>`},{num:76,category:`jobinfo`,stars:5,title:`국가기술자격 검정기준`,content:`<ul>
<li><strong>기술사</strong>: 고도의 전문지식과 실무경험</li>
<li><strong>기능장</strong>: 최상급 숙련기능</li>
<li><strong>기사</strong>: 공학적 기술이론 지식</li>
<li><strong>산업기사</strong>: 기술기초이론 지식 또는 숙련기능</li>
<li><strong>기능사</strong>: 숙련기능</li>
</ul>`},{num:77,category:`jobinfo`,stars:4,title:`직업능력개발훈련의 목적에 따른 구분`,content:`<ul>
<li><strong>양성훈련</strong>: 근로자에게 직업에 필요한 기초적 직무수행능력을 습득시키기 위하여 실시하는 직업능력개발훈련</li>
<li><strong>향상훈련</strong>: 양성훈련을 받은 자 또는 직업에 필요한 기초적 직무수행능력을 가지고 있는 자에게 더 높은 직무수행능력을 습득시키는 훈련</li>
<li><strong>전직훈련</strong>: 근로자에게 종전의 직업과 유사하거나 새로운 직업에 필요한 직무수행능력을 습득시키기 위하여 실시하는 훈련</li>
</ul>`},{num:78,category:`jobinfo`,stars:3,title:`국가직무능력표준(NCS)의 직업기초능력`,content:`<p>의사소통능력, 문제해결능력, 자원관리능력, 정보능력, 조직이해능력, 수리능력, 자기개발능력, 대인관계능력, 기술능력, 직업윤리</p>`},{num:79,category:`jobinfo`,stars:4,title:`직업정보의 관리과정`,content:`<p>수집 → 분석 → 가공(체계화) → 제공 → 축적 → 평가</p>`},{num:80,category:`jobinfo`,stars:4,title:`직업정보의 제공유형별 장단점`,content:`<table>
<tr><th>제공유형</th><th>비용</th><th>학습자 참여도</th><th>접근성</th></tr>
<tr><td>인쇄물</td><td>저</td><td>수동적</td><td>용이</td></tr>
<tr><td>프로그램화된 자료</td><td>저</td><td>적극적</td><td>제한적</td></tr>
<tr><td>시청각 자료</td><td>고</td><td>수동적</td><td>제한적</td></tr>
<tr><td>온라인 시스템</td><td>저</td><td>수동적</td><td>제한적</td></tr>
<tr><td>시뮬레이션 자료</td><td>저</td><td>적극적</td><td>제한적</td></tr>
<tr><td>면접</td><td>저</td><td>적극적</td><td>제한적</td></tr>
<tr><td>직업경험</td><td>고</td><td>적극적</td><td>제한적</td></tr>
</table>`},{num:81,category:`labor_market`,stars:4,title:`노동수요의 증가요인`,content:`<ul>
<li>노동을 투입하여 생산하는 생산물에 대한 수요의 증가</li>
<li>자본·토지 등 다른 생산요소의 가격상승</li>
<li>노동 생산성의 증대</li>
<li>생산기술의 진보</li>
</ul>
<p><em>* 임금의 하락은 수요곡선상에서의 이동을 가져옴 (곡선 자체의 이동이 아님)</em></p>`},{num:82,category:`labor_market`,stars:5,title:`노동수요곡선과 이윤극대화`,content:`<ul>
<li><strong>경쟁노동시장의 노동수요곡선</strong>: 노동의 한계생산가치(VMP<sub>L</sub>) 곡선</li>
<li><strong>경쟁노동시장의 이윤극대화 조건</strong>: VMP<sub>L</sub>(= P·MP<sub>L</sub>) = W</li>
<li><strong>독점시장의 노동수요곡선</strong>: 노동의 한계수입생산(MRP<sub>L</sub>) 곡선</li>
</ul>`},{num:83,category:`labor_market`,stars:5,title:`노동수요곡선의 기울기`,content:`<ul>
<li>단기 노동수요곡선보다 장기 노동수요곡선이 완만(탄력적)</li>
<li>고임금의 경제효과가 있는 경우의 노동수요곡선은 고임금의 경제효과가 없는 경우에 비해 가파름(비탄력적)</li>
<li>산업의 노동수요곡선은 개별기업의 노동수요곡선의 수평합보다 가파름(비탄력적)</li>
</ul>`},{num:84,category:`labor_market`,stars:5,title:`노동수요 탄력성의 결정요인`,content:`<p>노동수요 탄력성은 다음의 경우에 커진다:</p>
<ol>
<li>상품의 수요가 탄력적일수록</li>
<li>총비용 가운데서 노동비용의 비중이 클수록</li>
<li>노동의 대체 가능성이 클수록</li>
<li>노동 이외의 다른 생산요소의 공급탄력성이 클수록</li>
</ol>`},{num:85,category:`labor_market`,stars:5,title:`노동통계`,content:`<ul>
<li><strong>경제활동참가율(%)</strong> = 경제활동인구 / 15세 이상 인구(생산가능인구) × 100</li>
<li><strong>실업률(%)</strong> = 실업자 수 / 경제활동인구 × 100</li>
<li><strong>고용률(%)</strong> = 취업자 수 / 15세 이상 인구(생산가능인구) × 100</li>
</ul>`},{num:86,category:`labor_market`,stars:3,title:`노동공급의 탄력성 결정요인`,content:`<ul>
<li>한 나라의 노동력 규모를 나타내는 인구수</li>
<li>노동조합의 결성 여부와 교섭력의 정도</li>
<li>여성 취업기회의 용이성</li>
<li>여러 부문들(지역, 산업) 간의 노동이동의 용이성</li>
<li>산업구조의 변화</li>
<li>기간(단기와 장기)</li>
</ul>`},{num:87,category:`labor_market`,stars:4,title:`인적자본에 대한 투자 대상`,content:`<ul>
<li>정규교육 또는 학교교육</li>
<li>현장훈련</li>
<li>이주</li>
<li>건강(health)</li>
<li>정보(information)</li>
</ul>`},{num:88,category:`labor_market`,stars:5,title:`내부노동시장의 형성요인`,content:`<ul>
<li>숙련의 특수성</li>
<li>현장훈련</li>
<li>관습</li>
<li>장기근속 가능성</li>
<li>기업의 규모</li>
<li>기업 내의 위계적 직무서열</li>
</ul>`},{num:89,category:`labor_market`,stars:4,title:`최저임금제가 고용을 증가시키는 경우`,content:`<ul>
<li>노동시장이 수요독점인 경우</li>
<li>생산성 증대효과가 있는 경우</li>
<li>유효수요 증대효과가 있는 경우</li>
</ul>`},{num:90,category:`labor_market`,stars:5,title:`최저임금제의 기대효과`,content:`<ul>
<li>노동자의 최저생활과 생활안정 보장</li>
<li>노동 생산성을 향상시켜 고임금의 경제(economies of high wage) 효과 실현</li>
<li>산업 간·직종 간의 임금격차가 완화되어 계층별 소득분배 상태 개선</li>
<li>노사관계 개선과 산업평화의 유지</li>
<li>유효수요(총수요)의 증대로 인한 경기 활성화, 고용증대 효과</li>
<li>기업에게 충격효과(shock effect)를 주어, 기업경영의 합리화와 경쟁력 강화 유도</li>
</ul>`},{num:91,category:`labor_market`,stars:3,title:`연공급의 장점`,content:`<ul>
<li>고용의 안정화 및 노동력의 정착화</li>
<li>노동자의 생활보장으로 기업에 대한 귀속의식 제고</li>
<li>보수성이 강한 기업풍토에서 질서확립과 사기유지에 유리</li>
</ul>`},{num:92,category:`labor_market`,stars:4,title:`직무급의 장점`,content:`<ul>
<li>동일직무에 동일임금을 지급</li>
<li>개인별 임금격차에 대한 불만 해소</li>
<li>전문기술인력의 확보가 용이</li>
<li>능력 위주의 인사풍토 조성</li>
<li>불합리한 노무비 상승을 방지</li>
</ul>`},{num:93,category:`labor_market`,stars:4,title:`사용자가 부가급여를 선호하는 이유`,content:`<ul>
<li>부가급여만큼 화폐임금액이 감소하면 조세나 사회보험료 부담 감소</li>
<li>사용자가 희망하는 노동 특성을 가진 근로자들을 채용하고자 할 때 근로자가 원하는 부가급여를 제공함으로써 채용을 쉽게 할 수 있음</li>
<li>정부가 과도한 임금인상을 규제하는 경우 임금인상 대신 부가급여 수준을 높여 대응할 수 있음</li>
<li>근로자의 장기근속을 유도하는 방편으로 부가급여 이용</li>
</ul>`},{num:94,category:`labor_market`,stars:5,title:`임금격차의 경쟁적 요인과 경쟁외적 요인`,content:`<ul>
<li><strong>경쟁적 요인</strong>: 노동자의 생산성의 차이, 임금의 보상격차(균등화 격차), 시장의 단기적 불균형 등</li>
<li><strong>경쟁외적 요인</strong>: 차별화 및 노동시장의 분단, 노동자에 대한 독점지대 배당, 기업주의 효율임금정책, 노동조합의 영향 등</li>
</ul>`},{num:95,category:`labor_market`,stars:5,title:`보상적 임금격차(균등화 격차)의 원인 - 스미스`,content:`<ul>
<li>고용의 안정성 여부</li>
<li>작업의 쾌적성 여부</li>
<li>교육 및 훈련비용</li>
<li>책임의 정도</li>
<li>성공 또는 실패의 가능성</li>
</ul>`},{num:96,category:`labor_market`,stars:5,title:`명목임금이 하방경직적인 이유 - 케인즈`,content:`<ul>
<li>노동자들의 화폐환상으로 인한 역선택</li>
<li>노동자와 사용자 간의 장기근로계약</li>
<li>노동조합의 존재</li>
<li>최저임금제</li>
<li>연공급 임금제도</li>
</ul>`},{num:97,category:`labor_market`,stars:5,title:`실업의 원인과 대책`,content:`<table>
<tr><th>구분</th><th>원인</th><th>대책</th></tr>
<tr><td><strong>마찰적 실업</strong></td><td>노동시장의 정보 부족</td><td>노동시장 정보의 효율적 제공</td></tr>
<tr><td><strong>경기적 실업</strong></td><td>유효수요(총수요)의 부족</td><td>재정투융자의 확대, 통화량의 증대</td></tr>
<tr><td><strong>구조적 실업</strong></td><td>산업구조의 변화, 산업 간·지역 간 노동의 이동성 부족</td><td>직업알선, 교육 및 재훈련, 이주비의 지원, 장래의 노동수요 예측</td></tr>
</table>`},{num:98,category:`labor_market`,stars:4,title:`노동시장 유연성의 형태`,content:`<ul>
<li><strong>외부적 수량적 유연성</strong>: 유연한 정리해고, 계약근로, 다양한 시간제 근로의 확산</li>
<li><strong>작업의 외부화</strong>: 하청, 파견근로자 사용 및 자영업자의 사용 등</li>
<li><strong>내부적 수량적 유연성</strong>: 변형 근로시간제, 다양한 형태의 교대 근무제</li>
<li><strong>기능적 유연성</strong>: 근로자의 다기능공화</li>
<li><strong>임금 유연성</strong>: 기본급 구조의 개편, 보너스의 차등지급이나 성과배분 도입</li>
</ul>`},{num:99,category:`labor_market`,stars:5,title:`노동조합 숍(shop) 제도`,content:`<ul>
<li><strong>오픈 숍</strong>: 조합원이 아니라도 자유롭게 채용할 수 있는 숍 제도</li>
<li><strong>유니언 숍</strong>: 조합원이 아니라도 채용할 수 있지만 일단 채용된 노동자는 일정기간 내에 노동조합에 가입하여야 하며, 탈퇴·제명 시 해고</li>
<li><strong>클로즈드 숍</strong>: 조합에 가입하고 있는 노동자만을 채용하고, 조합원 자격 상실 시 종업원이 될 수 없음</li>
<li><strong>에이전시 숍</strong>: 조합원이 아니더라도 조합비를 징수하는 숍 제도</li>
</ul>`},{num:100,category:`labor_market`,stars:3,title:`단체교섭의 유형`,content:`<ul>
<li><strong>기업별 교섭</strong>: 기업단위 노동조합과 사용자가 교섭하는 방식</li>
<li><strong>집단교섭</strong>: 여러 개의 단위노조와 사용자가 집단으로 연합전선을 형성하여 교섭</li>
<li><strong>통일교섭</strong>: 전국에 걸친 산업별 노동조합과 산업별 또는 지역별 사용자단체 간의 교섭</li>
<li><strong>대각선교섭</strong>: 상부단체와 개별기업의 사용자 간에 이루어지는 교섭</li>
<li><strong>공동교섭</strong>: 기업별 노동조합이 상부단위의 노동조합과 공동으로 참가하여 기업별 사용자 측과 교섭</li>
</ul>`},{num:101,category:`labor_law`,stars:4,title:`노동기본권`,content:`<p>노동기본권이란 근로권과 노동3권을 말하며, 단체교섭권 및 단체행동권의 행사주체는 노동조합이다. 사용자는 단체행동권은 없으나 쟁의행위는 할 수 있다.</p>
<p><em>* 사용자의 쟁의행위: 직장폐쇄</em></p>`},{num:102,category:`labor_law`,stars:4,title:`근로조건의 특별보호 대상과 단체행동권 제한대상`,content:`<ul>
<li>여성근로자·연소근로자는 <strong>근로조건의 특별보호 대상</strong>이며, 국가유공자·상이군경·전몰군경 유가족은 <strong>우선적 근로기회를 부여받는 대상</strong>이다.</li>
<li>주요방위산업체 종사자 중 전력·용수 및 주로 방산물자 생산업무에 종사하는 자의 <strong>단체행동권은 제한</strong>된다.</li>
</ul>
<p><em>* 주요방위산업체 종사자의 단결권, 단체교섭권은 제한대상이 아니다.</em></p>`},{num:103,category:`labor_law`,stars:3,title:`경영상 해고의 성립 요건`,content:`<ul>
<li>긴박한 경영상의 필요, 해고회피노력, 합리적이고 공정한 해고기준, 근로자대표와의 협의</li>
<li>사용자는 근로자를 경영상 이유로 해고한 날부터 <strong>3년 이내</strong>에 해고된 근로자가 해고 당시 담당했던 업무와 같은 업무를 할 근로자를 채용하고자 할 때에는 해고된 근로자를 우선적으로 고용해야 한다(고용의무).</li>
</ul>`},{num:104,category:`labor_law`,stars:4,title:`취업규칙의 작성·변경`,content:`<p>취업규칙을 작성·변경하기 위해서는 근로자 <strong>과반수의 의견</strong>을 들어야 하며, <strong>불리하게 변경</strong>하는 경우에는 근로자 <strong>과반수의 동의</strong>를 얻어야 한다(근로자의 과반수로 조직된 노동조합이 있는 경우에는 그 노동조합의 동의를 얻어야 함).</p>`},{num:105,category:`labor_law`,stars:3,title:`평균임금과 통상임금`,content:`<ul>
<li><strong>평균임금으로 산정</strong>: 퇴직금, 휴업수당, 감급액, 재해보상금, 실업급여</li>
<li><strong>통상임금으로 산정</strong>: 해고예고수당, 연장근로·야간근로·휴일근로 가산수당, 법정유급휴일 및 법정유급휴가수당</li>
</ul>`},{num:106,category:`labor_law`,stars:3,title:`이행강제금`,content:`<p>노동위원회는 구제명령을 받은 자가 구제명령을 이행하면 새로운 이행강제금을 부과하지 아니하되, 구제명령을 이행하기 전에 이미 부과된 이행강제금은 징수해야 한다.</p>`},{num:107,category:`labor_law`,stars:3,title:`유료직업소개`,content:`<p>유료직업소개사업을 등록할 수 있는 자에서 공인노무사 등의 공인자격자가 아닌 개인의 경력은 모두 <strong>2년 이상</strong>인 자이여야 한다.</p>`},{num:108,category:`labor_law`,stars:3,title:`자영업자 실업급여 종료`,content:`<p>자영업자(근로자를 사용하지 않는 1인 사업자 및 50명 미만의 근로자를 사용하는 사업자)인 피보험자의 실업급여의 종류에서 <strong>연장급여와 조기재취업수당은 제외</strong>된다.</p>`},{num:109,category:`labor_law`,stars:4,title:`훈련계약`,content:`<p>사업주가 훈련계약을 체결할 때에는 해당 직업능력개발훈련을 받는 사람이 직업능력개발훈련을 이수한 후에 사업주가 지정하는 업무에 일정기간 종사하도록 할 수 있다. 이 경우 그 기간은 <strong>5년 이내</strong>로 하되, 직업능력개발훈련기간의 <strong>3배를 초과할 수 없다</strong>.</p>`},{num:110,category:`labor_law`,stars:3,title:`고용보험 적용제외 근로자`,content:`<ul>
<li>65세 이후에 고용되거나 자영업을 개시한 자</li>
<li>1개월간 소정근로시간이 60시간 미만인 자(1주간의 소정근로시간이 15시간 미만인 자 포함). 다만, 3개월 이상 계속하여 근로를 제공하는 자와 일용근로자는 제외</li>
<li>국가공무원법과 지방공무원법에 따른 공무원</li>
<li>사립학교교직원 연금법의 적용을 받는 자</li>
<li>별정우체국법에 따른 별정우체국 직원</li>
</ul>`},{num:111,category:`labor_law`,stars:5,title:`실업급여의 종류`,content:`<p>구직급여, 취업촉진수당(조기재취업수당, 직업능력개발수당, 광역구직활동비, 이주비)</p>`},{num:112,category:`labor_law`,stars:3,title:`피보험단위기간 기준일`,content:`<p>구직급여는 <strong>이직일 이전</strong>, 출산휴가급여는 <strong>휴가종료일 이전</strong>, 육아휴직급여는 <strong>휴직개시일 이전</strong> 피보험 단위기간이 통산하여 <strong>180일 이상</strong>이어야 한다.</p>`},{num:113,category:`labor_law`,stars:4,title:`직업안정업무의 실시요건`,content:`<p>무료직업소개사업·직업정보제공사업·국외근로자 모집은 <strong>신고</strong>, 유료직업소개사업은 <strong>등록</strong>, 근로자공급사업은 <strong>허가</strong>사항이다.</p>`},{num:114,category:`labor_law`,stars:4,title:`직업정보제공사업자의 준수사항`,content:`<p>직업정보제공매체의 구인·구직광고에는 <strong>구인·구직자의 주소 또는 전화번호를 기재</strong>하고, 직업정보제공사업자의 주소 또는 전화번호는 <strong>기재하지 아니한다</strong>.</p>`},{num:115,category:`labor_law`,stars:4,title:`근로자의 개념`,content:`<ul>
<li><strong>근로기준법</strong>: 사업주에게 고용된 사람</li>
<li><strong>남녀고용평등법, 근로자직업능력개발법</strong>: 사업주에게 고용된 사람과 취업할 의사가 있는 사람</li>
</ul>`},{num:116,category:`labor_law`,stars:4,title:`직업능력개발훈련 비중시 대상`,content:`<p>비진학 청소년, 제조업 연구직·사무직 종사자, 기간의 정함이 없는 근로자는 중요시되는 대상이 <strong>아니다</strong>.</p>
<p><em>* 비진학 청소년은 직업능력개발훈련의 실시대상에는 해당한다.</em></p>`},{num:117,category:`labor_law`,stars:5,title:`직업능력개발훈련의 구분`,content:`<ul>
<li><strong>훈련목적에 따라</strong>: 양성훈련·향상훈련·전직훈련</li>
<li><strong>훈련방법에 따라</strong>: 집체훈련·현장훈련·원격훈련·혼합훈련</li>
</ul>
<p><em>* 훈련교사 양성을 위한 훈련과정은 양성훈련·향상훈련·교직훈련과정으로 구분</em></p>`},{num:118,category:`labor_law`,stars:3,title:`직장 내 성희롱 예방교육`,content:`<p>상시 근로자가 <strong>10명 미만</strong>인 사업, 사업주 및 근로자 모두가 남성 또는 여성 중 어느 한 성(性)으로만 구성된 사업에서는 성희롱 예방교육 내용을 근로자가 알 수 있도록 교육자료 또는 홍보물을 게시하거나 배포하는 방법으로 직장 내 성희롱 예방교육을 대신할 수 있다.</p>`},{num:119,category:`labor_law`,stars:3,title:`육아휴직`,content:`<p>사업주는 근로자가 <strong>만 8세 이하 또는 초등학교 2학년 이하</strong>의 자녀(입양한 자녀 포함)를 양육하기 위하여 육아휴직을 신청하는 경우에 이를 허용해야 한다. 육아휴직기간은 <strong>1년 이내</strong>로 하며, 그 기간은 근속기간에 포함한다.</p>`},{num:120,category:`labor_law`,stars:5,title:`개인정보보호위원회`,content:`<p>개인정보 보호에 관한 사무를 독립적으로 수행하기 위하여 <strong>국무총리 소속</strong>으로 개인정보 보호위원회를 둔다.</p>`}];function os(e){return!e||e===`all`?as:as.filter(t=>t.category===e)}function ss(){let e={};for(let t of is)t.id!==`all`&&(e[t.id]=as.filter(e=>e.category===t.id).length);return e.all=as.length,e}var cs=e=>`★`.repeat(e)+`☆`.repeat(5-e);function ls({topic:e,isOpen:t,onToggle:n,cardRef:r}){let i=es.find(t=>t.id===e.category);return(0,_.jsxs)(`div`,{className:`sq-card ${t?`sq-card--open`:``}`,ref:r,id:`topic-${e.num}`,children:[(0,_.jsxs)(`button`,{className:`sq-card-header`,onClick:n,type:`button`,children:[(0,_.jsxs)(`div`,{className:`sq-card-num`,children:[`Q`,e.num]}),(0,_.jsxs)(`div`,{className:`sq-card-title-area`,children:[(0,_.jsx)(`h3`,{className:`sq-card-title`,children:e.title}),(0,_.jsxs)(`div`,{className:`sq-card-meta`,children:[(0,_.jsx)(`span`,{className:`sq-badge`,style:{background:`${i?.color}18`,color:i?.color},children:i?.label}),(0,_.jsx)(`span`,{className:`sq-badge sq-badge--keyword`,children:e.keyword})]})]}),(0,_.jsx)(`div`,{className:`sq-card-toggle`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-${t?`up`:`down`}`})})]}),t&&(0,_.jsxs)(`div`,{className:`sq-card-body`,children:[(0,_.jsxs)(`div`,{className:`sq-frequency`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-bar`}),(0,_.jsxs)(`span`,{children:[`출제빈도: `,e.frequency]})]}),(0,_.jsxs)(`div`,{className:`sq-section`,children:[(0,_.jsxs)(`div`,{className:`sq-section-label`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-check-circle`}),(0,_.jsx)(`span`,{children:`핵심 요약`})]}),(0,_.jsx)(`div`,{className:`sq-section-content`,dangerouslySetInnerHTML:{__html:e.summary}})]})]})]})}function us(e){return e>=5?{label:`최다빈출`,cls:`sq-freq-grade--5`,icon:`fa-solid fa-fire-flame-curved`}:e>=4?{label:`고빈출`,cls:`sq-freq-grade--4`,icon:`fa-solid fa-fire`}:e>=3?{label:`빈출`,cls:`sq-freq-grade--3`,icon:`fa-solid fa-bolt`}:e>=2?{label:`출제`,cls:`sq-freq-grade--2`,icon:`fa-solid fa-circle-check`}:{label:`1회`,cls:`sq-freq-grade--1`,icon:`fa-regular fa-circle`}}function ds({topic:e,rank:t,isOpen:n,onToggle:r,cardRef:i}){let a=oo.find(t=>t.id===e.category),o=us(e.freqCount);return(0,_.jsxs)(`div`,{className:`sq-card ${n?`sq-card--open`:``} ${o.cls}`,ref:i,id:`topic-${e.num}`,children:[(0,_.jsxs)(`button`,{className:`sq-card-header`,onClick:r,type:`button`,children:[(0,_.jsxs)(`div`,{className:`sq-card-num`,children:[`#`,t]}),(0,_.jsxs)(`div`,{className:`sq-card-title-area`,children:[(0,_.jsx)(`h3`,{className:`sq-card-title`,children:e.title}),(0,_.jsxs)(`div`,{className:`sq-card-meta`,children:[(0,_.jsx)(`span`,{className:`sq-badge`,style:{background:`${a?.color}18`,color:a?.color},children:a?.label}),(0,_.jsx)(`span`,{className:`sq-badge sq-badge--keyword`,children:e.keyword}),(0,_.jsxs)(`span`,{className:`sq-badge sq-badge--freq-grade ${o.cls}`,children:[(0,_.jsx)(`i`,{className:o.icon}),` `,e.freqCount,`회 · `,o.label]})]})]}),(0,_.jsx)(`div`,{className:`sq-card-toggle`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-${n?`up`:`down`}`})})]}),n&&(0,_.jsxs)(`div`,{className:`sq-card-body`,children:[(0,_.jsxs)(`div`,{className:`sq-frequency`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-clock-rotate-left`}),(0,_.jsxs)(`span`,{children:[`출제 이력: `,e.frequency]})]}),(0,_.jsxs)(`div`,{className:`sq-section`,children:[(0,_.jsxs)(`div`,{className:`sq-section-label`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-file-lines`}),(0,_.jsx)(`span`,{children:`상세 해설`})]}),(0,_.jsx)(`div`,{className:`sq-section-content`,dangerouslySetInnerHTML:{__html:e.answer}})]})]})]})}function fs({topic:e,isOpen:t,onToggle:n,cardRef:r}){let i=is.find(t=>t.id===e.category);return(0,_.jsxs)(`div`,{className:`sq-card ${t?`sq-card--open`:``}`,ref:r,id:`topic-${e.num}`,children:[(0,_.jsxs)(`button`,{className:`sq-card-header`,onClick:n,type:`button`,children:[(0,_.jsx)(`div`,{className:`sq-card-num`,children:e.num}),(0,_.jsxs)(`div`,{className:`sq-card-title-area`,children:[(0,_.jsx)(`h3`,{className:`sq-card-title`,children:e.title}),(0,_.jsxs)(`div`,{className:`sq-card-meta`,children:[(0,_.jsx)(`span`,{className:`sq-badge`,style:{background:`${i?.color}18`,color:i?.color},children:i?.label}),(0,_.jsx)(`span`,{className:`sq-badge sq-badge--stars`,children:cs(e.stars)})]})]}),(0,_.jsx)(`div`,{className:`sq-card-toggle`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-${t?`up`:`down`}`})})]}),t&&(0,_.jsxs)(`div`,{className:`sq-card-body`,children:[(0,_.jsxs)(`div`,{className:`sq-frequency`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-star`}),(0,_.jsxs)(`span`,{children:[`중요도: `,cs(e.stars)]})]}),(0,_.jsxs)(`div`,{className:`sq-section`,children:[(0,_.jsxs)(`div`,{className:`sq-section-label`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-lightbulb`}),(0,_.jsx)(`span`,{children:`핵심 내용`})]}),(0,_.jsx)(`div`,{className:`sq-section-content`,dangerouslySetInnerHTML:{__html:e.content}})]})]})]})}function ps(){let[e,t]=(0,g.useState)(`pilgi`),[n,r]=(0,g.useState)(`all`),[i,a]=(0,g.useState)(new Set),[o,s]=(0,g.useState)(``),[c,u]=(0,g.useState)(new Set),d=(0,g.useRef)({}),f=(0,g.useMemo)(()=>[...so].map(e=>({...e,freqCount:(e.frequency.match(/,/g)||[]).length+1})).sort((e,t)=>t.freqCount-e.freqCount),[]),p=e===`pilgi`?es:e===`silgi`?oo:is,m=(0,g.useMemo)(()=>e===`pilgi`?rs():e===`silgi`?lo():ss(),[e]),h=e===`pilgi`?ts:e===`silgi`?f:as,v=(0,g.useMemo)(()=>{let e={};for(let t of p)t.id!==`all`&&(e[t.id]=h.filter(e=>e.category===t.id));return e},[e,h,p]),y=(0,g.useMemo)(()=>{let t;if(t=e===`pilgi`?ns(n):e===`silgi`?!n||n===`all`?f:f.filter(e=>e.category===n):os(n),o.trim()){let e=o.trim().toLowerCase();t=t.filter(t=>t.title.toLowerCase().includes(e))}return t},[e,n,o,f]),b=n=>{n!==e&&(t(n),r(`all`),a(new Set),s(``),u(new Set))},x=e=>{a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},S=()=>{a(new Set(y.map(e=>e.num)))},C=()=>{a(new Set)},w=e=>{u(t=>t.has(e)?new Set:new Set([e]))},T=e=>{a(t=>{let n=new Set(t);return n.add(e),n}),setTimeout(()=>{let t=d.current[e];t&&t.scrollIntoView({behavior:`smooth`,block:`start`})},50)},E=e=>{r(e),a(new Set),s(``)},D=e===`pilgi`,O=e===`silgi`,ee=e===`keynote`,k=D?`필기 빈출 주제 정리`:O?`실기 빈출 문항 정리`:`D-1 핵심노트 120선`,A=D?`직업상담사 2급 필기 2010~2022 39회 시험 빈출 핵심 주제 60개 요약 정리`:O?`직업상담사 2급 실기 2018~2025 8개년 빈출 핵심 문항 201개 빈출순 정리`:`직업상담사 2급 필기 D-1 빈출개념 노트 120개 핵심 요약`,j=D?`필기시험 39회 분석 · 핵심 빈출 주제 ${ts.length}개 요약`:O?`실기시험 8개년 분석 · 빈출 문항 ${so.length}개 빈출순 정리`:`D-1 빈출개념 노트 · 핵심 ${as.length}개 개념 정리`,M=D?`주제`:O?`문항`:`개념`;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:k,description:A}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(l,{to:`/learn`,className:`sq-back-link`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),` 과목별 학습`]}),(0,_.jsx)(`h1`,{children:`학습 요약`}),(0,_.jsx)(`p`,{className:`page-desc`,children:j})]})}),(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsxs)(`div`,{className:`summary-tabs`,children:[(0,_.jsxs)(`button`,{className:`summary-tab ${D?`active`:``}`,onClick:()=>b(`pilgi`),type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`}),` 필기`]}),(0,_.jsxs)(`button`,{className:`summary-tab ${O?`active`:``}`,onClick:()=>b(`silgi`),type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-file-pen`}),` 실기`]}),(0,_.jsxs)(`button`,{className:`summary-tab ${ee?`active`:``}`,onClick:()=>b(`keynote`),type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-bookmark`}),` 핵심노트`]})]})}),(0,_.jsx)(`div`,{className:`container silgi-exam-page`,children:(0,_.jsxs)(`div`,{className:`summary-layout`,children:[(0,_.jsx)(`aside`,{className:`summary-sidebar`,children:(0,_.jsxs)(`div`,{className:`summary-sidebar-inner`,children:[(0,_.jsxs)(`div`,{className:`summary-sidebar-title`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-bars-staggered`}),(0,_.jsx)(`span`,{children:`과목별 분류`})]}),(0,_.jsxs)(`button`,{className:`summary-sidebar-all ${n===`all`?`active`:``}`,onClick:()=>E(`all`),type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-list`}),(0,_.jsx)(`span`,{children:`전체 보기`}),(0,_.jsx)(`span`,{className:`summary-sidebar-count`,children:m.all})]}),(0,_.jsx)(`nav`,{className:`summary-sidebar-nav`,children:p.filter(e=>e.id!==`all`).map(e=>{let t=c.has(e.id),r=n===e.id,a=v[e.id]||[];return(0,_.jsxs)(`div`,{className:`summary-sidebar-group`,children:[(0,_.jsxs)(`button`,{className:`summary-sidebar-cat ${r?`active`:``}`,onClick:()=>w(e.id),type:`button`,children:[(0,_.jsx)(`span`,{className:`summary-sidebar-dot`,style:{background:e.color}}),(0,_.jsx)(`span`,{className:`summary-sidebar-cat-label`,children:e.label}),(0,_.jsx)(`span`,{className:`summary-sidebar-count`,children:m[e.id]}),(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-${t?`up`:`down`} summary-sidebar-chevron`})]}),t&&(0,_.jsxs)(`ul`,{className:`summary-sidebar-topics`,children:[(0,_.jsx)(`li`,{children:(0,_.jsxs)(`button`,{className:`summary-sidebar-topic-filter ${r?`active`:``}`,onClick:()=>E(e.id),type:`button`,style:r?{color:e.color}:void 0,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-filter`}),`이 과목만 보기`]})}),a.map(e=>(0,_.jsx)(`li`,{children:(0,_.jsxs)(`button`,{className:`summary-sidebar-topic ${i.has(e.num)?`active`:``}`,onClick:()=>T(e.num),type:`button`,children:[(0,_.jsx)(`span`,{className:`summary-sidebar-topic-num`,children:D?`Q${e.num}`:O?`#${e.num}`:`${e.num}`}),(0,_.jsx)(`span`,{className:`summary-sidebar-topic-title`,children:e.title})]})},e.num))]})]},e.id)})})]})}),(0,_.jsxs)(`div`,{className:`summary-main`,children:[(0,_.jsx)(`div`,{className:`freq-filter summary-mobile-filter`,children:p.map(e=>(0,_.jsxs)(`button`,{className:`freq-filter-btn ${n===e.id?`active`:``}`,onClick:()=>{r(e.id),a(new Set)},type:`button`,style:n===e.id?{background:e.color,borderColor:e.color,color:`#fff`}:void 0,children:[(0,_.jsx)(`i`,{className:e.icon}),(0,_.jsx)(`span`,{children:e.label}),(0,_.jsx)(`span`,{className:`freq-filter-count`,children:m[e.id]})]},e.id))}),(0,_.jsxs)(`div`,{className:`freq-search`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-search`}),(0,_.jsx)(`input`,{type:`text`,placeholder:`${M} 검색 (제목)`,value:o,onChange:e=>s(e.target.value)}),o&&(0,_.jsx)(`button`,{className:`freq-search-clear`,onClick:()=>s(``),type:`button`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-xmark`})})]}),(0,_.jsxs)(`div`,{className:`sq-controls`,children:[(0,_.jsxs)(`button`,{className:`sq-control-btn`,onClick:S,type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-angles-down`}),` 전체 펼치기`]}),(0,_.jsxs)(`button`,{className:`sq-control-btn`,onClick:C,type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-angles-up`}),` 전체 접기`]}),(0,_.jsxs)(`span`,{className:`sq-control-count`,children:[y.length,`개 `,M,` `,o&&`(검색: "${o}")`]})]}),(0,_.jsx)(`div`,{className:`sq-list`,children:y.length>0?D?y.map(e=>(0,_.jsx)(ls,{topic:e,isOpen:i.has(e.num),onToggle:()=>x(e.num),cardRef:t=>{d.current[e.num]=t}},e.num)):O?y.map((e,t)=>(0,_.jsx)(ds,{topic:e,rank:t+1,isOpen:i.has(e.num),onToggle:()=>x(e.num),cardRef:t=>{d.current[e.num]=t}},e.num)):y.map(e=>(0,_.jsx)(fs,{topic:e,isOpen:i.has(e.num),onToggle:()=>x(e.num),cardRef:t=>{d.current[e.num]=t}},e.num)):(0,_.jsxs)(`div`,{className:`freq-empty`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-search`}),(0,_.jsx)(`p`,{children:`검색 결과가 없습니다.`})]})}),(0,_.jsx)(`div`,{className:`sq-bottom-nav`,children:D?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(l,{to:`/learn`,className:`btn btn-secondary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),` 과목별 학습`]}),(0,_.jsxs)(l,{to:`/pilgi`,className:`btn btn-primary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`}),` 필기 CBT`]})]}):O?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(l,{to:`/silgi`,className:`btn btn-secondary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-file-pen`}),` 실기 시험`]}),(0,_.jsxs)(l,{to:`/silgi/frequent`,className:`btn btn-primary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-fire`}),` 기출문제 해설`]})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(l,{to:`/learn`,className:`btn btn-secondary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),` 과목별 학습`]}),(0,_.jsxs)(l,{to:`/pilgi`,className:`btn btn-primary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`}),` 필기 CBT`]})]})})]})]})})]})}function ms(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`문제풀기`,description:`직업상담사 2급 필기 CBT 및 실기 연습 문제를 풀어보세요.`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`}),` 문제풀기`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`필기 CBT와 실기 연습 문제로 실전 감각을 키워보세요.`})]})}),(0,_.jsx)(`section`,{className:`container`,style:{paddingTop:40,paddingBottom:60},children:(0,_.jsxs)(`div`,{className:`practice-grid`,children:[(0,_.jsxs)(l,{to:`/pilgi`,className:`practice-card`,style:{"--card-color":`#3B82F6`},children:[(0,_.jsx)(`div`,{className:`practice-card-icon`,style:{background:`#3B82F6`},children:(0,_.jsx)(`i`,{className:`fa-solid fa-desktop`})}),(0,_.jsxs)(`div`,{className:`practice-card-body`,children:[(0,_.jsx)(`h3`,{className:`practice-card-title`,children:`필기 CBT`}),(0,_.jsx)(`p`,{className:`practice-card-desc`,children:`5과목 100문항 4지선다 — 실제 시험과 동일한 CBT 환경에서 연습하세요.`}),(0,_.jsxs)(`div`,{className:`practice-card-meta`,children:[(0,_.jsxs)(`span`,{className:`practice-card-badge`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-clock`}),` 100분`]}),(0,_.jsxs)(`span`,{className:`practice-card-badge`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-list-ol`}),` 100문항`]}),(0,_.jsxs)(`span`,{className:`practice-card-badge`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-check-double`}),` 평균 60점 합격`]})]})]}),(0,_.jsx)(`div`,{className:`practice-card-arrow`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-right`})})]}),(0,_.jsxs)(l,{to:`/silgi`,className:`practice-card`,style:{"--card-color":`#10B981`},children:[(0,_.jsx)(`div`,{className:`practice-card-icon`,style:{background:`#10B981`},children:(0,_.jsx)(`i`,{className:`fa-solid fa-file-pen`})}),(0,_.jsxs)(`div`,{className:`practice-card-body`,children:[(0,_.jsx)(`h3`,{className:`practice-card-title`,children:`실기 연습`}),(0,_.jsx)(`p`,{className:`practice-card-desc`,children:`서술형·계산형 문제를 직접 풀어보며 실기 시험을 대비하세요.`}),(0,_.jsxs)(`div`,{className:`practice-card-meta`,children:[(0,_.jsxs)(`span`,{className:`practice-card-badge`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-clock`}),` 150분`]}),(0,_.jsxs)(`span`,{className:`practice-card-badge`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen`}),` 서술형`]}),(0,_.jsxs)(`span`,{className:`practice-card-badge`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-calculator`}),` 계산형`]})]})]}),(0,_.jsx)(`div`,{className:`practice-card-arrow`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-chevron-right`})})]})]})})]})}var hs=[{icon:`fa-solid fa-file-lines`,title:`필기 CBT`,desc:`실제 시험과 동일한 형식의 CBT 모의시험. 5과목 100문항, 100분 타이머.`},{icon:`fa-solid fa-pen-fancy`,title:`실기 연습`,desc:`주관식 실기 문제 풀이. 키워드 일치율 기반 채점 및 모범답안 비교.`},{icon:`fa-solid fa-book-open`,title:`과목별 학습`,desc:`직업상담학, 직업심리학, 직업정보론, 노동시장론, 노동관계법규 이론 학습.`},{icon:`fa-solid fa-chart-pie`,title:`학습 분석`,desc:`과목별 점수 추이, 약점 분석, 합격 예측까지 데이터 기반 학습 관리.`},{icon:`fa-solid fa-bookmark`,title:`오답노트·북마크`,desc:`틀린 문제 자동 수집, 중요 문제 북마크로 반복 학습.`},{icon:`fa-solid fa-trophy`,title:`합격 예측`,desc:`최근 시험 성적 기반 합격 확률을 실시간으로 분석.`}];function gs(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`사이트 소개`,description:`JobExam 직업상담사 1급·2급 시험 준비 플랫폼 소개`}),(0,_.jsx)(`div`,{className:`about-hero`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-info`}),` 사이트 소개`]}),(0,_.jsx)(`p`,{children:`직업상담사 1급·2급 시험 합격을 위한 올인원 CBT 학습 플랫폼`})]})}),(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`div`,{className:`about-section`,children:[(0,_.jsxs)(`h2`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-bullseye`}),` JobExam이란?`]}),(0,_.jsx)(`p`,{children:`JobExam은 직업상담사 1급·2급 자격증 시험 준비를 위한 온라인 CBT 학습 플랫폼입니다. 필기 모의시험, 실기 연습, 과목별 이론 학습, 오답노트, 합격 예측까지 시험 준비에 필요한 모든 기능을 제공합니다.`})]}),(0,_.jsx)(`div`,{className:`about-features`,children:hs.map((e,t)=>(0,_.jsxs)(`div`,{className:`about-feature-card`,children:[(0,_.jsx)(`div`,{className:`about-feature-icon`,children:(0,_.jsx)(`i`,{className:e.icon})}),(0,_.jsx)(`h3`,{children:e.title}),(0,_.jsx)(`p`,{children:e.desc})]},t))}),(0,_.jsxs)(`div`,{className:`about-section`,children:[(0,_.jsxs)(`h2`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-lock-open`}),` 무료 / 유료 안내`]}),(0,_.jsx)(`p`,{children:`기본적인 시험 안내와 서비스 소개는 누구나 무료로 이용할 수 있습니다. 학습 콘텐츠는 유료 이용권으로 이용하세요.`}),(0,_.jsxs)(`table`,{className:`about-access-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`기능`}),(0,_.jsx)(`th`,{children:`접근`}),(0,_.jsx)(`th`,{children:`설명`})]})}),(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`시험 안내·일정`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`badge-free`,children:`무료`})}),(0,_.jsx)(`td`,{children:`필기/실기 시험 개요 및 일정 안내`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`서비스 소개·이용안내`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`badge-free`,children:`무료`})}),(0,_.jsx)(`td`,{children:`플랫폼 소개 및 이용 방법`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`필기 CBT 1회 체험`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`badge-free`,children:`무료`})}),(0,_.jsx)(`td`,{children:`로그인 후 첫 1회 무료 체험`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`필기 CBT 무제한`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`badge-paid`,children:`유료`})}),(0,_.jsx)(`td`,{children:`모든 기출문제 CBT 무제한 응시`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`실기 연습`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`badge-paid`,children:`유료`})}),(0,_.jsx)(`td`,{children:`주관식 실기 문제 풀이`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`과목별 학습`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`badge-paid`,children:`유료`})}),(0,_.jsx)(`td`,{children:`5과목 이론 학습 콘텐츠`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`대시보드·분석`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`badge-paid`,children:`유료`})}),(0,_.jsx)(`td`,{children:`학습 현황, 점수 추이, 합격 예측`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`오답노트·북마크`}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`badge-paid`,children:`유료`})}),(0,_.jsx)(`td`,{children:`틀린 문제 관리 및 북마크`})]})]})]})]}),(0,_.jsxs)(`div`,{className:`about-cta`,children:[(0,_.jsx)(`h3`,{children:`지금 시작하세요`}),(0,_.jsx)(`p`,{children:`합리적인 가격으로 직업상담사 시험을 준비하세요.`}),(0,_.jsx)(l,{to:`/about/pricing`,className:`btn btn-lg`,children:`요금제 보기`})]})]})]})}var _s=[`생성형 AI 활용 교육`,`AI 프롬프트 엔지니어링`,`디지털 마케팅 & 브랜딩`,`교수설계 및 강사 양성`,`데이터 분석 & 시각화`],vs=[`현) DreamIT 대표`,`현) AI 교육 전문 강사`,`전) 대학교 겸임교수`,`전) IT 기업 교육 담당`],ys=[`경영학박사 (정보관리 전공)`,`직업학박사 수료 (고용정책, 직업교육훈련 전공)`,`정보과학 석사 (이학석사, 이학사, 경영학사, 문학사)`],bs=[`평생교육사 2급`,`한국어교원 2급`,`직업능력개발훈련교사 2급/3급 — 20.정보통신 대표 직종 모든 자격 보유 (인공지능, 정보보호 외 다수)`,`정보처리산업기사 외 국가기술자격, 공인자격 등 80여 가지 취득`],xs=[{label:`누적 강의`,value:`500+`},{label:`총 강의시간`,value:`3,000+`},{label:`평균 만족도`,value:`4.9/5.0`},{label:`교육 기관`,value:`100+`}];function Ss(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`제작자 소개`,description:`JobExam 제작자 이애본 박사 소개 — AI 교육 전문 강사`}),(0,_.jsx)(`div`,{className:`about-hero`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chalkboard-user`}),` 제작자 소개`]}),(0,_.jsx)(`p`,{children:`AI 교육 전문 강사`})]})}),(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`div`,{className:`instructor-profile`,children:[(0,_.jsx)(`div`,{className:`instructor-avatar`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-chalkboard-user`})}),(0,_.jsxs)(`div`,{className:`instructor-info`,children:[(0,_.jsx)(`h2`,{children:`이애본`}),(0,_.jsx)(`p`,{className:`instructor-degree`,children:`경영학박사 (정보관리 전공)`}),(0,_.jsx)(`p`,{className:`instructor-position`,children:`AI 교육 전문 강사 / 컨설턴트`}),(0,_.jsxs)(`div`,{className:`instructor-specialties`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-star`}),` 전문분야`]}),(0,_.jsx)(`ul`,{children:_s.map((e,t)=>(0,_.jsx)(`li`,{children:e},t))})]})]})]}),(0,_.jsx)(`div`,{className:`instructor-stats`,children:xs.map((e,t)=>(0,_.jsxs)(`div`,{className:`instructor-stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-value`,children:e.value}),(0,_.jsx)(`div`,{className:`stat-label`,children:e.label})]},t))}),(0,_.jsxs)(`div`,{className:`instructor-sections`,children:[(0,_.jsxs)(`div`,{className:`about-section`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-briefcase`}),` 주요 경력`]}),(0,_.jsx)(`ul`,{children:vs.map((e,t)=>(0,_.jsx)(`li`,{children:e},t))})]}),(0,_.jsxs)(`div`,{className:`about-section`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-graduation-cap`}),` 학력`]}),(0,_.jsx)(`ul`,{children:ys.map((e,t)=>(0,_.jsx)(`li`,{children:e},t))})]}),(0,_.jsxs)(`div`,{className:`about-section`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-certificate`}),` 자격`]}),(0,_.jsx)(`ul`,{children:bs.map((e,t)=>(0,_.jsx)(`li`,{children:e},t))})]})]}),(0,_.jsxs)(`div`,{className:`instructor-contact`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-address-card`}),` 연락처`]}),(0,_.jsxs)(`div`,{className:`instructor-contact-item`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-envelope`}),(0,_.jsx)(`a`,{href:`mailto:aebonlee@gmail.com`,children:`aebonlee@gmail.com`})]}),(0,_.jsxs)(`div`,{className:`instructor-contact-item`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-globe`}),(0,_.jsx)(`a`,{href:`https://www.dreamitbiz.com`,target:`_blank`,rel:`noreferrer`,children:`www.dreamitbiz.com`})]})]})]})]})}var Cs=[{num:1,title:`회원가입 / 로그인`,desc:`Google 또는 Kakao 계정으로 간편하게 로그인하세요. 별도의 회원가입 절차 없이 소셜 로그인만으로 시작합니다.`},{num:2,title:`무료 체험`,desc:`로그인 후 필기 CBT 1회를 무료로 체험할 수 있습니다. 실제 시험과 동일한 형식을 먼저 경험해 보세요.`},{num:3,title:`이용권 구매`,desc:`30일, 90일, 평생 이용권 중 선택하여 구매하세요. 결제 즉시 모든 학습 콘텐츠를 이용할 수 있습니다.`},{num:4,title:`학습 시작`,desc:`과목별 이론 학습 → 필기 CBT 모의시험 → 오답 복습 → 실기 연습 순서로 체계적으로 학습하세요.`},{num:5,title:`성과 분석`,desc:`대시보드에서 학습 현황, 과목별 점수, 합격 예측을 확인하고 약점을 보완하세요.`}],ws=[{icon:`fa-solid fa-clipboard-list`,label:`시험안내 — 필기/실기 시험 개요, 일정, 과목 소개`},{icon:`fa-solid fa-book-open`,label:`학습하기 — 5과목 이론 학습, 학습 요약, 실기 기출해설`},{icon:`fa-solid fa-pen-to-square`,label:`문제풀기 — 필기 CBT 모의시험, 실기 주관식 연습`},{icon:`fa-solid fa-user`,label:`나의학습 — 대시보드, 북마크, 오답노트`},{icon:`fa-solid fa-circle-info`,label:`서비스 — 서비스 소개, 이용 안내, 요금제`},{icon:`fa-solid fa-cart-shopping`,label:`결제 — 이용권 구매, 주문 내역 확인`}],Ts=[{q:`무료로 어디까지 이용할 수 있나요?`,a:`시험안내, 서비스 소개 페이지는 로그인 없이 무료입니다. 로그인 후 필기 CBT 1회 무료 체험이 가능합니다.`},{q:`이용권 기간은 언제부터 시작되나요?`,a:`결제 완료 시점부터 시작됩니다. 30일 이용권은 결제 후 30일간, 평생 이용권은 기한 없이 이용 가능합니다.`},{q:`결제 수단은 무엇이 있나요?`,a:`신용카드(KG이니시스) 결제를 지원합니다.`},{q:`환불이 가능한가요?`,a:`결제 후 7일 이내, 유료 콘텐츠 이용 이력이 없는 경우 전액 환불 가능합니다. 고객센터로 문의해 주세요.`},{q:`여러 기기에서 이용할 수 있나요?`,a:`네, 동일 계정으로 로그인하면 PC, 태블릿, 모바일 등 어디서든 이용 가능합니다.`}];function Es(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`이용 안내`,description:`JobPath 이용 방법 안내`}),(0,_.jsx)(`div`,{className:`about-hero`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-compass`}),` 이용 안내`]}),(0,_.jsx)(`p`,{children:`JobPath를 처음 이용하시는 분을 위한 가이드입니다`})]})}),(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`div`,{className:`about-section`,children:[(0,_.jsxs)(`h2`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-shoe-prints`}),` 시작하기`]}),(0,_.jsx)(`p`,{children:`5단계로 간단하게 시작하세요.`})]}),(0,_.jsx)(`div`,{className:`guide-steps`,children:Cs.map(e=>(0,_.jsxs)(`div`,{className:`guide-step`,children:[(0,_.jsx)(`div`,{className:`guide-step-number`,children:e.num}),(0,_.jsxs)(`div`,{className:`guide-step-content`,children:[(0,_.jsx)(`h3`,{children:e.title}),(0,_.jsx)(`p`,{children:e.desc})]})]},e.num))}),(0,_.jsxs)(`div`,{className:`about-section`,children:[(0,_.jsxs)(`h2`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-bars`}),` 메뉴 안내`]}),(0,_.jsx)(`p`,{children:`상단 메뉴를 통해 원하는 기능에 빠르게 접근하세요.`}),(0,_.jsx)(`div`,{className:`guide-menu-list`,children:ws.map((e,t)=>(0,_.jsxs)(`div`,{className:`guide-menu-item`,children:[(0,_.jsx)(`i`,{className:e.icon}),(0,_.jsx)(`span`,{children:e.label})]},t))})]}),(0,_.jsxs)(`div`,{className:`guide-faq`,children:[(0,_.jsxs)(`h2`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-question`}),` 자주 묻는 질문 (FAQ)`]}),Ts.map((e,t)=>(0,_.jsxs)(`div`,{className:`faq-item`,children:[(0,_.jsxs)(`h4`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-q`}),` `,e.q]}),(0,_.jsx)(`p`,{children:e.a})]},t))]}),(0,_.jsxs)(`div`,{className:`about-cta`,children:[(0,_.jsx)(`h3`,{children:`준비되셨나요?`}),(0,_.jsx)(`p`,{children:`지금 바로 학습을 시작하세요.`}),(0,_.jsx)(l,{to:`/login`,className:`btn btn-lg`,children:`로그인하기`})]})]})]})}var Ds=[`시험안내 열람`,`서비스 소개 열람`,`필기 CBT 1회 체험`,`필기 CBT 무제한`,`실기 연습`,`과목별 학습`,`학습 요약`,`대시보드·분석`,`오답노트`,`북마크`,`합격 예측`],Os=[!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1],ks=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],As=[`필기 CBT 모의시험 무제한`,`실기 주관식 연습`,`5과목 이론 학습`,`학습 요약 노트`,`대시보드 & 성적 분석`,`합격 예측 AI`,`오답노트 & 북마크`];function js(e){return e.toLocaleString(`ko-KR`)}function Ms(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`요금제`,description:`JobPath 이용권 요금제 안내`}),(0,_.jsx)(`div`,{className:`about-hero`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-tags`}),` 요금제`]}),(0,_.jsx)(`p`,{children:`시험 횟차에 맞춰 합리적인 가격으로 준비하세요`})]})}),(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsx)(`div`,{className:`pricing-grid`,children:ra.map(e=>(0,_.jsxs)(`div`,{className:`pricing-card${e.recommended?` pricing-card--recommended`:``}`,children:[(0,_.jsx)(`h3`,{children:e.label}),(0,_.jsx)(`p`,{className:`pricing-period`,children:e.desc||`${Math.round((e.days||0)/30)}개월간 이용`}),(0,_.jsxs)(`div`,{className:`pricing-price`,children:[js(e.price),`원`]}),(0,_.jsxs)(`p`,{className:`pricing-price-sub`,children:[`월 `,Math.round(e.price/Math.round((e.days||30)/30)).toLocaleString(),`원`]}),(0,_.jsx)(`ul`,{className:`pricing-features`,children:As.map((e,t)=>(0,_.jsxs)(`li`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-check`}),` `,e]},t))}),(0,_.jsx)(l,{to:`/checkout`,className:`btn btn-block ${e.recommended?`btn-primary`:`btn-secondary`}`,children:`구매하기`})]},e.id))}),(0,_.jsxs)(`div`,{className:`pricing-compare`,children:[(0,_.jsx)(`h2`,{children:`기능 비교`}),(0,_.jsxs)(`table`,{children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`기능`}),(0,_.jsx)(`th`,{children:`무료`}),(0,_.jsx)(`th`,{children:`유료 이용권`})]})}),(0,_.jsx)(`tbody`,{children:Ds.map((e,t)=>(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:e}),(0,_.jsx)(`td`,{children:Os[t]?(0,_.jsx)(`i`,{className:`fa-solid fa-check check`}):(0,_.jsx)(`i`,{className:`fa-solid fa-xmark cross`})}),(0,_.jsx)(`td`,{children:ks[t]?(0,_.jsx)(`i`,{className:`fa-solid fa-check check`}):(0,_.jsx)(`i`,{className:`fa-solid fa-xmark cross`})})]},t))})]})]}),(0,_.jsxs)(`div`,{className:`coupon-banner`,style:{background:`rgba(27, 58, 107, 0.05)`,border:`1px solid var(--border-light)`,borderRadius:`var(--radius-lg)`,padding:`24px 28px`,marginBottom:40,textAlign:`center`},children:[(0,_.jsxs)(`p`,{style:{fontSize:15,color:`var(--text-secondary)`,marginBottom:12},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-ticket`,style:{marginRight:8,color:`var(--primary-blue)`}}),`쿠폰이 있으신가요?`]}),(0,_.jsxs)(l,{to:`/coupon`,className:`btn btn-secondary`,style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-gift`}),` 쿠폰 등록하기`]})]}),(0,_.jsxs)(`div`,{className:`guide-faq`,children:[(0,_.jsxs)(`h2`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-question`}),` 결제 FAQ`]}),(0,_.jsxs)(`div`,{className:`faq-item`,children:[(0,_.jsxs)(`h4`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-q`}),` 결제 수단은 무엇인가요?`]}),(0,_.jsx)(`p`,{children:`신용카드(KG이니시스) 결제를 지원합니다.`})]}),(0,_.jsxs)(`div`,{className:`faq-item`,children:[(0,_.jsxs)(`h4`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-q`}),` 이용 기간은 언제부터 시작되나요?`]}),(0,_.jsx)(`p`,{children:`결제 완료 시점부터 시작됩니다. 시험 회차에 맞춰 3개월/6개월/12개월 중 선택하세요.`})]}),(0,_.jsxs)(`div`,{className:`faq-item`,children:[(0,_.jsxs)(`h4`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-q`}),` 환불 규정은 어떻게 되나요?`]}),(0,_.jsx)(`p`,{children:`결제 후 7일 이내, 유료 콘텐츠 이용 이력이 없는 경우 전액 환불 가능합니다.`})]}),(0,_.jsxs)(`div`,{className:`faq-item`,children:[(0,_.jsxs)(`h4`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-q`}),` 여러 기기에서 사용 가능한가요?`]}),(0,_.jsx)(`p`,{children:`네, 동일 계정으로 로그인하면 PC, 태블릿, 모바일 어디서든 이용 가능합니다.`})]})]})]})]})}function Ns(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`이용약관`}),(0,_.jsx)(`div`,{className:`about-hero`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-file-contract`}),` 이용약관`]}),(0,_.jsx)(`p`,{children:`JobPath 서비스 이용약관`})]})}),(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsxs)(`div`,{className:`terms-content`,children:[(0,_.jsx)(`h2`,{children:`제1조 (목적)`}),(0,_.jsx)(`p`,{children:`이 약관은 DreamIT Biz(이하 "회사")가 운영하는 JobPath(이하 "서비스")의 이용에 관한 조건 및 절차, 회사와 이용자의 권리·의무 및 기타 필요한 사항을 규정함을 목적으로 합니다.`}),(0,_.jsx)(`h2`,{children:`제2조 (정의)`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`"서비스"란 회사가 제공하는 직업상담사 2급 시험 준비 온라인 학습 플랫폼을 말합니다.`}),(0,_.jsx)(`li`,{children:`"이용자"란 이 약관에 따라 서비스를 이용하는 자를 말합니다.`}),(0,_.jsx)(`li`,{children:`"이용권"이란 유료 콘텐츠를 이용할 수 있는 기간제 또는 평생 라이선스를 말합니다.`})]}),(0,_.jsx)(`h2`,{children:`제3조 (약관의 효력)`}),(0,_.jsx)(`p`,{children:`이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다. 회사는 관련 법규를 위배하지 않는 범위에서 약관을 개정할 수 있으며, 개정 시 적용일자 및 개정사유를 명시하여 공지합니다.`}),(0,_.jsx)(`h2`,{children:`제4조 (서비스 이용)`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`서비스는 회원가입(소셜 로그인) 후 이용할 수 있습니다.`}),(0,_.jsx)(`li`,{children:`무료 콘텐츠: 시험안내, 서비스 소개, 필기 CBT 1회 체험`}),(0,_.jsx)(`li`,{children:`유료 콘텐츠: 이용권 구매 후 해당 기간 동안 이용 가능`})]}),(0,_.jsx)(`h2`,{children:`제5조 (결제 및 환불)`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`결제는 신용카드를 통해 이루어집니다.`}),(0,_.jsx)(`li`,{children:`결제 후 7일 이내, 유료 콘텐츠 이용 이력이 없는 경우 전액 환불이 가능합니다.`}),(0,_.jsx)(`li`,{children:`이용 이력이 있는 경우 잔여 기간에 대해 일할 환불이 적용됩니다.`}),(0,_.jsx)(`li`,{children:`평생 이용권은 결제 후 7일 이내 미이용 시에만 환불 가능합니다.`})]}),(0,_.jsx)(`h2`,{children:`제6조 (이용자의 의무)`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`이용자는 타인의 계정을 사용하거나 공유해서는 안 됩니다.`}),(0,_.jsx)(`li`,{children:`서비스 콘텐츠를 무단 복제·배포·전송해서는 안 됩니다.`}),(0,_.jsx)(`li`,{children:`서비스의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.`})]}),(0,_.jsx)(`h2`,{children:`제7조 (서비스 중단)`}),(0,_.jsx)(`p`,{children:`회사는 천재지변, 시스템 점검 등 부득이한 사유로 서비스를 일시적으로 중단할 수 있으며, 사전에 공지합니다.`}),(0,_.jsx)(`h2`,{children:`제8조 (개인정보 보호)`}),(0,_.jsx)(`p`,{children:`회사는 이용자의 개인정보를 관련 법령에 따라 보호하며, 개인정보처리방침에 따릅니다.`}),(0,_.jsx)(`h2`,{children:`제9조 (분쟁 해결)`}),(0,_.jsx)(`p`,{children:`서비스 이용과 관련한 분쟁은 대한민국 법을 준거법으로 하며, 관할 법원은 회사의 소재지를 관할하는 법원으로 합니다.`}),(0,_.jsx)(`p`,{className:`terms-date`,children:`시행일: 2026년 4월 6일`})]})})]})}function Ps(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`개인정보처리방침`}),(0,_.jsx)(`div`,{className:`about-hero`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-shield-halved`}),` 개인정보처리방침`]}),(0,_.jsx)(`p`,{children:`JobPath 개인정보처리방침`})]})}),(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsxs)(`div`,{className:`terms-content`,children:[(0,_.jsx)(`h2`,{children:`1. 개인정보의 수집 및 이용 목적`}),(0,_.jsx)(`p`,{children:`회사는 다음의 목적을 위해 개인정보를 수집·이용합니다.`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`회원 식별 및 서비스 제공`}),(0,_.jsx)(`li`,{children:`결제 처리 및 이용권 관리`}),(0,_.jsx)(`li`,{children:`학습 기록 저장 및 분석`}),(0,_.jsx)(`li`,{children:`고객 문의 대응`})]}),(0,_.jsx)(`h2`,{children:`2. 수집하는 개인정보 항목`}),(0,_.jsx)(`h3`,{children:`필수 항목`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`소셜 로그인 정보: 이름, 이메일 (Google/Kakao 제공)`}),(0,_.jsx)(`li`,{children:`프로필 사진 (소셜 계정 제공 시)`})]}),(0,_.jsx)(`h3`,{children:`결제 시 추가 수집`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`결제 정보: 결제수단, 주문번호`}),(0,_.jsx)(`li`,{children:`연락처: 이름, 이메일, 전화번호`})]}),(0,_.jsx)(`h3`,{children:`자동 수집`}),(0,_.jsx)(`ul`,{children:(0,_.jsx)(`li`,{children:`학습 기록: 시험 응시 내역, 점수, 북마크, 오답 기록`})}),(0,_.jsx)(`h2`,{children:`3. 개인정보의 보유 및 이용 기간`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`회원 탈퇴 시까지 보유 (탈퇴 후 즉시 파기)`}),(0,_.jsx)(`li`,{children:`결제 기록: 전자상거래법에 따라 5년간 보관`})]}),(0,_.jsx)(`h2`,{children:`4. 개인정보의 제3자 제공`}),(0,_.jsx)(`p`,{children:`회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만, 결제 처리를 위해 결제대행사(KG이니시스)에 필요 최소한의 정보를 전달합니다.`}),(0,_.jsx)(`h2`,{children:`5. 개인정보의 파기`}),(0,_.jsx)(`p`,{children:`보유 기간이 만료되거나 수집 목적이 달성된 경우, 해당 개인정보를 지체 없이 파기합니다. 전자적 파일 형태는 복구할 수 없는 방법으로 삭제합니다.`}),(0,_.jsx)(`h2`,{children:`6. 이용자의 권리`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`개인정보 열람, 수정, 삭제를 요청할 수 있습니다.`}),(0,_.jsx)(`li`,{children:`회원 탈퇴를 통해 개인정보 파기를 요청할 수 있습니다.`}),(0,_.jsx)(`li`,{children:`고객센터(aebon@dreamitbiz.com)로 문의하실 수 있습니다.`})]}),(0,_.jsx)(`h2`,{children:`7. 개인정보 보호 조치`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`데이터 암호화 전송 (HTTPS/TLS)`}),(0,_.jsx)(`li`,{children:`Supabase Row Level Security로 데이터 접근 제어`}),(0,_.jsx)(`li`,{children:`소셜 로그인을 통한 안전한 인증`})]}),(0,_.jsx)(`h2`,{children:`8. 개인정보 보호 책임자`}),(0,_.jsxs)(`p`,{children:[`이름: 이애본 (대표이사)`,(0,_.jsx)(`br`,{}),`이메일: aebon@dreamitbiz.com`,(0,_.jsx)(`br`,{}),`전화: 010-3700-0629`]}),(0,_.jsx)(`p`,{className:`terms-date`,children:`시행일: 2026년 4월 6일`})]})})]})}var Fs=`imp61949262`,Is=`html5_inicis.MOIkorcom1`;function Ls({orderNumber:e,name:t,amount:n,buyerName:r,buyerEmail:i,buyerTel:a,payMethod:o=`card`}){return new Promise(s=>{if(!window.IMP){s({success:!1,error:`PortOne SDK가 로드되지 않았습니다.`});return}window.IMP.init(Fs),window.IMP.request_pay({pg:Is,pay_method:o,merchant_uid:e,name:t,amount:n,buyer_name:r,buyer_email:i,buyer_tel:a},e=>{e.success?s({success:!0,paymentId:e.imp_uid,txId:e.merchant_uid}):s({success:!1,error:e.error_msg||`결제에 실패했습니다.`})})})}function Rs(){let e=new Date;return`JP-${`${String(e.getFullYear()).slice(2)}${String(e.getMonth()+1).padStart(2,`0`)}${String(e.getDate()).padStart(2,`0`)}`}-${Math.random().toString(36).substring(2,8).toUpperCase()}`}function zs(){let{user:e}=Z(),{items:t,clearCart:r,cartTotal:i,addItem:a,removeItem:o}=ca(),{refresh:s}=va(),{showToast:c}=k(),l=n(),[u,d]=(0,g.useState)(e?.user_metadata?.full_name||``),[f,p]=(0,g.useState)(e?.email||``),[m,h]=(0,g.useState)(``),[v,y]=(0,g.useState)(!1),[b,x]=(0,g.useState)(``),S=e=>{a(e),x(``)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`결제`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-credit-card`}),` 결제`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`이용권을 선택하고 결제를 진행하세요`})]})}),(0,_.jsx)(`div`,{className:`container checkout-container`,children:(0,_.jsxs)(`form`,{onSubmit:async n=>{if(n.preventDefault(),t.length===0){c(`이용권을 선택해 주세요.`,`error`);return}if(!u.trim()||!f.trim()||!m.trim()){c(`주문자 정보를 모두 입력해 주세요.`,`error`);return}y(!0);let a=Rs();try{let n=await Ls({orderNumber:a,name:t.map(e=>e.label).join(`, `),amount:i,buyerName:u,buyerEmail:f,buyerTel:m,payMethod:`card`});if(!n.success){c(n.error||`결제에 실패했습니다.`,`error`),y(!1);return}let o=new Date;for(let r of t){let t=r.days?new Date(o.getTime()+r.days*24*60*60*1e3).toISOString():null;await Y.from(X.ORDERS).insert({order_number:a,user_id:e.id,user_email:f,user_name:u,user_phone:m,plan_type:r.id,total_amount:r.price,payment_method:`card`,payment_status:`paid`,portone_payment_id:n.paymentId,paid_at:o.toISOString(),expires_at:t})}r(),await s(),c(`결제가 완료되었습니다!`,`success`),l(`/confirmation`,{state:{orderNumber:a,items:t,total:i,paidAt:o.toISOString()}})}catch(e){console.error(e),c(`결제 처리 중 오류가 발생했습니다.`,`error`)}y(!1)},className:`checkout-form`,children:[(0,_.jsxs)(`div`,{className:`checkout-section`,children:[(0,_.jsxs)(`h2`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-tags`}),` 이용권 선택`]}),(0,_.jsx)(`div`,{className:`checkout-plans`,children:ra.map(e=>{let n=t.find(t=>t.id===e.id);return(0,_.jsxs)(`div`,{className:`checkout-plan-card${n?` selected`:``}${e.recommended?` recommended`:``}`,children:[(0,_.jsxs)(`div`,{className:`checkout-plan-info`,children:[(0,_.jsx)(`h3`,{children:e.label}),(0,_.jsx)(`p`,{children:e.desc||`${Math.round((e.days||0)/30)}개월간 이용`})]}),(0,_.jsxs)(`div`,{className:`checkout-plan-price`,children:[e.price.toLocaleString(),`원`]}),n?(0,_.jsxs)(`button`,{type:`button`,className:`btn btn-sm btn-secondary`,onClick:()=>o(e.id),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-xmark`}),` 제거`]}):(0,_.jsxs)(`button`,{type:`button`,className:`btn btn-sm btn-primary`,onClick:()=>S(e.id),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-plus`}),` 추가`]})]},e.id)})})]}),t.length>0&&(0,_.jsxs)(`div`,{className:`checkout-section`,children:[(0,_.jsxs)(`h2`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-cart-shopping`}),` 주문 내역`]}),(0,_.jsxs)(`div`,{className:`checkout-summary`,children:[t.map(e=>(0,_.jsxs)(`div`,{className:`checkout-summary-item`,children:[(0,_.jsx)(`span`,{children:e.label}),(0,_.jsxs)(`span`,{children:[e.price.toLocaleString(),`원`]})]},e.id)),(0,_.jsxs)(`div`,{className:`checkout-summary-total`,children:[(0,_.jsx)(`strong`,{children:`합계`}),(0,_.jsxs)(`strong`,{children:[i.toLocaleString(),`원`]})]})]})]}),(0,_.jsxs)(`div`,{className:`checkout-section`,children:[(0,_.jsxs)(`h2`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-user`}),` 주문자 정보`]}),(0,_.jsxs)(`div`,{className:`checkout-fields`,children:[(0,_.jsxs)(`div`,{className:`form-group`,children:[(0,_.jsx)(`label`,{htmlFor:`name`,children:`이름`}),(0,_.jsx)(`input`,{id:`name`,type:`text`,value:u,onChange:e=>d(e.target.value),required:!0,placeholder:`이름을 입력하세요`})]}),(0,_.jsxs)(`div`,{className:`form-group`,children:[(0,_.jsx)(`label`,{htmlFor:`email`,children:`이메일`}),(0,_.jsx)(`input`,{id:`email`,type:`email`,value:f,onChange:e=>p(e.target.value),required:!0,placeholder:`이메일을 입력하세요`})]}),(0,_.jsxs)(`div`,{className:`form-group`,children:[(0,_.jsx)(`label`,{htmlFor:`phone`,children:`전화번호`}),(0,_.jsx)(`input`,{id:`phone`,type:`tel`,value:m,onChange:e=>h(e.target.value),required:!0,placeholder:`010-0000-0000`})]})]})]}),(0,_.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-block btn-lg checkout-submit`,disabled:v||t.length===0,children:v?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-spinner fa-spin`}),` 결제 처리 중...`]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-lock`}),` `,i.toLocaleString(),`원 결제하기`]})})]})})]})}function Bs(){return(0,_.jsx)(Ao,{children:(0,_.jsx)(zs,{})})}function Vs(){let e=u().state;return e?.orderNumber?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`결제 완료`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-check`}),` 결제 완료`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`결제가 성공적으로 완료되었습니다`})]})}),(0,_.jsx)(`div`,{className:`container checkout-container`,children:(0,_.jsxs)(`div`,{className:`confirmation-card`,children:[(0,_.jsx)(`div`,{className:`confirmation-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-circle-check`})}),(0,_.jsx)(`h2`,{children:`결제가 완료되었습니다!`}),(0,_.jsx)(`p`,{className:`confirmation-desc`,children:`이제 모든 학습 콘텐츠를 이용할 수 있습니다.`}),(0,_.jsxs)(`div`,{className:`confirmation-details`,children:[(0,_.jsxs)(`div`,{className:`confirmation-row`,children:[(0,_.jsx)(`span`,{children:`주문번호`}),(0,_.jsx)(`strong`,{children:e.orderNumber})]}),(0,_.jsxs)(`div`,{className:`confirmation-row`,children:[(0,_.jsx)(`span`,{children:`결제 일시`}),(0,_.jsx)(`strong`,{children:new Date(e.paidAt).toLocaleString(`ko-KR`)})]}),e.items?.map(e=>(0,_.jsxs)(`div`,{className:`confirmation-row`,children:[(0,_.jsx)(`span`,{children:e.label}),(0,_.jsxs)(`strong`,{children:[e.price?.toLocaleString(),`원`]})]},e.id)),(0,_.jsxs)(`div`,{className:`confirmation-row total`,children:[(0,_.jsx)(`span`,{children:`합계`}),(0,_.jsxs)(`strong`,{children:[e.total?.toLocaleString(),`원`]})]})]}),(0,_.jsxs)(`div`,{className:`confirmation-actions`,children:[(0,_.jsxs)(l,{to:`/dashboard`,className:`btn btn-primary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-pie`}),` 대시보드`]}),(0,_.jsxs)(l,{to:`/pilgi/select`,className:`btn btn-secondary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-pen-to-square`}),` 필기 CBT 시작`]}),(0,_.jsxs)(l,{to:`/orders`,className:`btn btn-secondary`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-receipt`}),` 주문 내역`]})]})]})})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`주문 확인`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-receipt`}),` 주문 확인`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`주문 정보를 확인할 수 없습니다`})]})}),(0,_.jsxs)(`div`,{className:`container`,style:{padding:`80px 0`,textAlign:`center`},children:[(0,_.jsx)(`p`,{style:{marginBottom:20,color:`var(--text-secondary)`},children:`주문 정보가 없습니다. 주문 내역에서 확인해 주세요.`}),(0,_.jsx)(l,{to:`/orders`,className:`btn btn-primary`,children:`주문 내역`})]})]})}function Hs(){return(0,_.jsx)(Ao,{children:(0,_.jsx)(Vs,{})})}var Us={paid:{text:`결제완료`,cls:`pass`},pending:{text:`대기중`,cls:``},failed:{text:`실패`,cls:`fail`},cancelled:{text:`취소`,cls:`fail`},refunded:{text:`환불`,cls:`fail`}};function Ws(){let{user:e}=Z(),[t,n]=(0,g.useState)([]),[r,i]=(0,g.useState)(!0);(0,g.useEffect)(()=>{e&&a()},[e]);let a=async()=>{i(!0);let{data:t,error:r}=await Y.from(X.ORDERS).select(`*`).eq(`user_id`,e.id).order(`created_at`,{ascending:!1});r||n(t||[]),i(!1)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`주문 내역`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-receipt`}),` 주문 내역`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`결제 및 이용권 내역을 확인하세요`})]})}),(0,_.jsx)(`div`,{className:`container checkout-container`,children:r?(0,_.jsx)(`div`,{className:`loading-page`,children:(0,_.jsx)(`div`,{className:`loading-spinner`})}):t.length===0?(0,_.jsxs)(`div`,{className:`checkout-empty`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-receipt`,style:{fontSize:48,opacity:.3,marginBottom:16}}),(0,_.jsx)(`p`,{children:`주문 내역이 없습니다.`}),(0,_.jsx)(l,{to:`/about/pricing`,className:`btn btn-primary`,style:{marginTop:16},children:`요금제 보기`})]}):(0,_.jsx)(`div`,{className:`order-list`,children:t.map(e=>{let t=Us[e.payment_status]||{text:e.payment_status,cls:``},n=e.payment_status===`paid`&&e.expires_at&&new Date(e.expires_at)>new Date;return(0,_.jsxs)(`div`,{className:`order-card`,children:[(0,_.jsxs)(`div`,{className:`order-card-header`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{className:`order-number`,children:e.order_number}),(0,_.jsx)(`span`,{className:`order-date`,children:new Date(e.created_at).toLocaleDateString(`ko-KR`)})]}),(0,_.jsx)(`span`,{className:`table-badge ${t.cls}`,children:t.text})]}),(0,_.jsxs)(`div`,{className:`order-card-body`,children:[(0,_.jsxs)(`div`,{className:`order-plan`,children:[(0,_.jsxs)(`strong`,{children:[e.plan_type===`3month`&&`3개월 이용권`,e.plan_type===`6month`&&`6개월 이용권`,e.plan_type===`12month`&&`12개월 이용권`,e.plan_type===`30day`&&`30일 이용권`,e.plan_type===`90day`&&`90일 이용권`,e.plan_type===`lifetime`&&`평생 이용권`,e.plan_type===`1day_trial`&&`1일 체험 이용권`]}),n&&(0,_.jsx)(`span`,{className:`badge-active`,children:`이용중`})]}),(0,_.jsxs)(`div`,{className:`order-amount`,children:[e.total_amount?.toLocaleString(),`원`]})]}),e.expires_at&&e.payment_status===`paid`&&(0,_.jsxs)(`div`,{className:`order-card-footer`,children:[`만료: `,new Date(e.expires_at).toLocaleDateString(`ko-KR`),n&&` (${Math.ceil((new Date(e.expires_at).getTime()-Date.now())/(1e3*60*60*24))}일 남음)`]}),e.plan_type===`lifetime`&&e.payment_status===`paid`&&!e.expires_at&&(0,_.jsx)(`div`,{className:`order-card-footer`,children:`기간 제한 없음 (평생)`}),e.cancel_reason&&(0,_.jsxs)(`div`,{className:`order-card-footer cancel`,children:[`취소 사유: `,e.cancel_reason]})]},e.id)})})})]})}function Gs(){return(0,_.jsx)(Ao,{children:(0,_.jsx)(Ws,{})})}function Ks(){let{user:e}=Z(),{refresh:t,grantAccess:n}=va(),{showToast:r}=k(),[i,a]=(0,g.useState)(``),[o,s]=(0,g.useState)(!1),[c,u]=(0,g.useState)(!1),[d,f]=(0,g.useState)(1),p=async()=>{let a=i.trim().toUpperCase();if(!a){r(`쿠폰 코드를 입력해주세요.`,`error`);return}s(!0);let{data:o,error:c}=await Y.from(X.COUPONS).select(`*`).eq(`code`,a).single();if(c||!o){r(`유효하지 않은 쿠폰 코드입니다.`,`error`),s(!1);return}if(!o.is_active){r(`비활성화된 쿠폰입니다.`,`error`),s(!1);return}if(o.used_count>=o.max_uses){r(`이미 모두 사용된 쿠폰입니다.`,`error`),s(!1);return}if(o.expires_at&&new Date(o.expires_at)<new Date){r(`만료된 쿠폰입니다.`,`error`),s(!1);return}let{data:l}=await Y.from(X.COUPON_REDEMPTIONS).select(`id`).eq(`coupon_id`,o.id).eq(`user_id`,e.id).limit(1);if(l&&l.length>0){r(`이미 사용한 쿠폰입니다.`,`error`),s(!1);return}let{error:d}=await Y.from(X.COUPON_REDEMPTIONS).insert({coupon_id:o.id,user_id:e.id,user_email:e.email||e.user_metadata?.email||``});if(d){r(`쿠폰 등록에 실패했습니다.`,`error`),s(!1);return}await Y.from(X.COUPONS).update({used_count:o.used_count+1}).eq(`id`,o.id);let p=o.days||1,m=new Date,h=new Date(m.getTime()+p*24*60*60*1e3),g=`CP-${Date.now()}`,_=p===1?`1day_trial`:`${p}day`,{error:v}=await Y.from(X.ORDERS).insert({user_id:e.id,user_email:e.email||e.user_metadata?.email||``,order_number:g,plan_type:_,total_amount:0,payment_method:`coupon`,payment_status:`paid`,paid_at:m.toISOString(),expires_at:h.toISOString()});v&&console.error(`Order creation error:`,v),n(h,{plan_type:_,payment_method:`coupon`}),t().catch(()=>{}),r(`쿠폰이 등록되었습니다! ${p}일 이용권이 활성화되었습니다.`,`success`),u(!0),f(p),s(!1)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`쿠폰 등록`,description:`쿠폰 코드를 입력하여 이용권을 활성화하세요`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-ticket`}),` 쿠폰 등록`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`쿠폰 코드를 입력하여 이용권을 활성화하세요`})]})}),(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsx)(`div`,{className:`coupon-redeem`,children:c?(0,_.jsxs)(`div`,{className:`coupon-success`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-circle-check`}),(0,_.jsx)(`h2`,{children:`쿠폰 등록 완료!`}),(0,_.jsxs)(`p`,{children:[d,`일 이용권이 활성화되었습니다.`]}),(0,_.jsxs)(`div`,{className:`coupon-success-actions`,children:[(0,_.jsx)(l,{to:`/pilgi/select`,className:`btn btn-primary`,children:`필기 CBT 시작`}),(0,_.jsx)(l,{to:`/orders`,className:`btn btn-secondary`,children:`주문 내역 확인`})]})]}):(0,_.jsxs)(`div`,{className:`coupon-form-card`,children:[(0,_.jsx)(`div`,{className:`coupon-form-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-gift`})}),(0,_.jsx)(`h2`,{children:`쿠폰 코드 입력`}),(0,_.jsx)(`p`,{children:`홍보용 무료 체험 쿠폰 코드를 입력해주세요.`}),(0,_.jsxs)(`div`,{className:`coupon-input-group`,children:[(0,_.jsx)(`input`,{type:`text`,value:i,onChange:e=>a(e.target.value.toUpperCase()),placeholder:`예: JP-XXXXXXXX`,className:`coupon-input`,maxLength:20,disabled:o,onKeyDown:e=>e.key===`Enter`&&p()}),(0,_.jsx)(`button`,{className:`btn btn-primary`,onClick:p,disabled:o,children:o?`확인 중...`:`등록하기`})]})]})})})]})}function qs(){return(0,_.jsx)(Ao,{children:(0,_.jsx)(Ks,{})})}function Js(){let e=``;for(let t=0;t<8;t++)e+=`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`.charAt(Math.floor(Math.random()*32));return`JP-${e}`}function Ys(){let{showToast:e}=k(),[t,n]=(0,g.useState)(`members`),[r,i]=(0,g.useState)([]),[a,o]=(0,g.useState)([]),[s,c]=(0,g.useState)([]),[l,u]=(0,g.useState)([]),[d,f]=(0,g.useState)(!0),[p,m]=(0,g.useState)(10),[h,v]=(0,g.useState)(1),[y,b]=(0,g.useState)(!1),[x,S]=(0,g.useState)(`all`),[C,w]=(0,g.useState)(``),[T,E]=(0,g.useState)(null),[D,O]=(0,g.useState)(``),[ee,A]=(0,g.useState)(!1),[j,M]=(0,g.useState)(``),[N,P]=(0,g.useState)(null),[F,te]=(0,g.useState)([]),[I,ne]=(0,g.useState)([]),[re,ie]=(0,g.useState)({}),[ae,oe]=(0,g.useState)(!1);(0,g.useEffect)(()=>{L()},[]);let L=async()=>{f(!0);let[e,t,n,r]=await Promise.all([Y.from(X.ORDERS).select(`*`).order(`created_at`,{ascending:!1}),Y.from(X.COUPONS).select(`*`).order(`created_at`,{ascending:!1}),Y.from(X.PROFILES).select(`*`).order(`created_at`,{ascending:!1}),Y.from(X.COUPON_REDEMPTIONS).select(`*`).order(`created_at`,{ascending:!1})]);e.error&&console.error(`[Admin] orders 조회 오류:`,e.error.message),t.error&&console.error(`[Admin] coupons 조회 오류:`,t.error.message),n.error&&console.error(`[Admin] profiles 조회 오류:`,n.error.message),r.error&&console.error(`[Admin] redemptions 조회 오류:`,r.error.message),e.data&&i(e.data),t.data&&o(t.data),r.data&&u(r.data);let a={};(n.data||[]).forEach(e=>{let t=(e.email||``).toLowerCase();t&&(a[t]={email:t,name:e.name||``,phone:``,firstSeen:e.created_at,lastActivity:e.created_at,source:`가입`})}),(e.data||[]).forEach(e=>{let t=(e.user_email||``).toLowerCase();t&&(a[t]?(!a[t].name&&e.user_name&&(a[t].name=e.user_name),!a[t].phone&&e.user_phone&&(a[t].phone=e.user_phone),new Date(e.created_at)>new Date(a[t].lastActivity)&&(a[t].lastActivity=e.created_at)):a[t]={email:t,name:e.user_name||``,phone:e.user_phone||``,firstSeen:e.created_at,lastActivity:e.created_at,source:`주문`})}),(r.data||[]).forEach(e=>{let t=(e.user_email||``).toLowerCase();t&&(a[t]?new Date(e.created_at)>new Date(a[t].lastActivity)&&(a[t].lastActivity=e.created_at):a[t]={email:t,name:``,phone:``,firstSeen:e.created_at,lastActivity:e.created_at,source:`쿠폰`})}),c(Object.values(a).sort((e,t)=>new Date(t.lastActivity).getTime()-new Date(e.lastActivity).getTime())),f(!1)},se=r.filter(e=>e.payment_status===`paid`).reduce((e,t)=>e+(t.total_amount||0),0),ce=a.filter(e=>e.is_active&&e.used_count<e.max_uses).length,le=async()=>{if(p<1||p>100){e(`1~100 사이의 수량을 입력해주세요.`,`error`);return}b(!0);let t=h===1?`1day_trial`:`${h}day`,n=new Date;n.setDate(n.getDate()+90);let r=Array.from({length:p},()=>({code:Js(),plan_type:t,days:h,max_uses:1,used_count:0,is_active:!0,expires_at:n.toISOString().split(`T`)[0],created_by:`admin`})),{error:i}=await Y.from(X.COUPONS).insert(r);i?e(`쿠폰 생성 실패: `+i.message,`error`):(e(`${p}개 쿠폰이 생성되었습니다.`,`success`),L()),b(!1)},ue=async t=>{let{error:n}=await Y.from(X.COUPONS).update({is_active:!1}).eq(`id`,t);n?e(`비활성화 실패`,`error`):(e(`쿠폰이 비활성화되었습니다.`,`success`),o(e=>e.map(e=>e.id===t?{...e,is_active:!1}:e)))},de=()=>{let t=a.filter(e=>e.is_active&&e.used_count<e.max_uses).map(e=>e.code);if(t.length===0){e(`복사할 활성 쿠폰이 없습니다.`,`error`);return}navigator.clipboard.writeText(t.join(`
`)),e(`${t.length}개 쿠폰 코드가 복사되었습니다.`,`success`)},fe=async(t,n,r=``)=>{A(!0);try{let i={payment_status:n};n===`paid`&&(i.paid_at=new Date().toISOString()),(n===`cancelled`||n===`refunded`)&&(i.cancelled_at=new Date().toISOString(),r&&(i.cancel_reason=r));let{error:a}=await Y.from(X.ORDERS).update(i).eq(`id`,t);if(a)throw a;e(`주문 상태가 변경되었습니다.`,`success`),E(null),O(``),L()}catch(t){e(`상태 변경 실패: ${t?.message||`알 수 없는 오류`}`,`error`),console.error(`Order status update error:`,t)}A(!1)},pe=(0,g.useMemo)(()=>{let e=r.filter(e=>e.payment_status===`paid`),t=r.filter(e=>e.payment_status===`cancelled`),n=r.filter(e=>e.payment_status===`refunded`);return{total:r.length,paidCount:e.length,paidAmount:e.reduce((e,t)=>e+(t.total_amount||0),0),cancelledCount:t.length,refundedCount:n.length}},[r]),me=(0,g.useMemo)(()=>{let e=r;if(x!==`all`&&(e=e.filter(e=>(e.payment_status||`pending`)===x)),C.trim()){let t=C.toLowerCase();e=e.filter(e=>(e.order_number||``).toLowerCase().includes(t)||(e.user_email||``).toLowerCase().includes(t)||(e.user_name||``).toLowerCase().includes(t))}return e},[r,x,C]),he=async t=>{P(t),oe(!0);try{let{data:n}=await Y.from(X.PROFILES).select(`id`).eq(`email`,t.email).single();if(!n){e(`해당 회원의 프로필을 찾을 수 없습니다.`,`error`),te([]),ne([]),ie({}),oe(!1);return}let[r,i]=await Promise.all([Y.from(X.EXAM_SESSIONS).select(`*`).eq(`user_id`,n.id).eq(`exam_type`,`pilgi`).not(`completed_at`,`is`,null).order(`completed_at`,{ascending:!1}),Y.from(X.EXAM_SESSIONS).select(`*`).eq(`user_id`,n.id).eq(`exam_type`,`silgi_practice`).not(`completed_at`,`is`,null).order(`completed_at`,{ascending:!1})]),a=r.data||[],o=i.data||[];te(a),ne(o);let s={},c={};Q.forEach(e=>{s[e.code]=0,c[e.code]=0}),a.forEach(e=>{e.score_by_subject&&Object.entries(e.score_by_subject).forEach(([e,t])=>{s[e]=(s[e]||0)+t,c[e]=(c[e]||0)+1})});let l={};Q.forEach(e=>{l[e.code]=c[e.code]?Math.round(s[e.code]/c[e.code]):0}),ie(l)}catch(t){console.error(`회원 학습현황 로드 오류:`,t),e(`학습현황 로드에 실패했습니다.`,`error`)}oe(!1)},ge=(0,g.useMemo)(()=>{if(!j.trim())return s;let e=j.toLowerCase();return s.filter(t=>(t.name||``).toLowerCase().includes(e)||(t.email||``).toLowerCase().includes(e)||(t.phone||``).includes(e))},[s,j]),_e=(0,g.useMemo)(()=>{let e=F.length,t=e?Math.round(F.reduce((e,t)=>e+(t.score_total||0),0)/e):0,n=F.filter(e=>e.is_pass).length;return{total:e,avg:t,passCount:n,passRate:e?Math.round(n/e*100):0}},[F]),ve=(0,g.useMemo)(()=>{let e=I.length,t=e?Math.round(I.reduce((e,t)=>e+(t.score_total||0),0)/e):0,n=I.filter(e=>e.is_pass).length;return{total:e,avg:t,passCount:n,passRate:e?Math.round(n/e*100):0}},[I]),ye=(0,g.useMemo)(()=>Q.filter(e=>re[e.code]>0&&re[e.code]<60),[re]),be={paid:{text:`결제완료`,cls:`pass`},pending:{text:`대기중`,cls:``},failed:{text:`실패`,cls:`fail`},cancelled:{text:`취소`,cls:`fail`},refunded:{text:`환불`,cls:`fail`}},xe={"3month":`3개월 이용권`,"6month":`6개월 이용권`,"12month":`12개월 이용권`,"30day":`30일 이용권`,"90day":`90일 이용권`,lifetime:`평생 이용권`,"1day_trial":`1일 체험 이용권`,"1day":`1일 이용권`,"3day":`3일 이용권`,"7day":`7일 이용권`,"10day":`10일 이용권`,"14day":`14일 이용권`,"60day":`60일 이용권`,"365day":`365일 이용권`};return d?(0,_.jsx)(`div`,{className:`loading-page`,children:(0,_.jsx)(`div`,{className:`loading-spinner`})}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($,{title:`관리자 대시보드`}),(0,_.jsx)(`div`,{className:`page-header`,children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(`h1`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-shield-halved`}),` 관리자 대시보드`]}),(0,_.jsx)(`p`,{className:`page-desc`,children:`회원, 주문, 쿠폰을 관리하세요`})]})}),(0,_.jsxs)(`div`,{className:`container admin-dashboard`,children:[(0,_.jsxs)(`div`,{className:`admin-stats`,children:[(0,_.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,_.jsx)(`div`,{className:`admin-stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-users`})}),(0,_.jsx)(`div`,{className:`admin-stat-value`,children:s.length}),(0,_.jsx)(`div`,{className:`admin-stat-label`,children:`총 회원수`})]}),(0,_.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,_.jsx)(`div`,{className:`admin-stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-receipt`})}),(0,_.jsx)(`div`,{className:`admin-stat-value`,children:r.length}),(0,_.jsx)(`div`,{className:`admin-stat-label`,children:`총 주문수`})]}),(0,_.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,_.jsx)(`div`,{className:`admin-stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-won-sign`})}),(0,_.jsx)(`div`,{className:`admin-stat-value`,children:se.toLocaleString()}),(0,_.jsx)(`div`,{className:`admin-stat-label`,children:`총 매출`})]}),(0,_.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,_.jsx)(`div`,{className:`admin-stat-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-ticket`})}),(0,_.jsx)(`div`,{className:`admin-stat-value`,children:ce}),(0,_.jsx)(`div`,{className:`admin-stat-label`,children:`활성 쿠폰`})]})]}),(0,_.jsxs)(`div`,{className:`admin-tabs`,children:[(0,_.jsxs)(`button`,{className:`admin-tab ${t===`members`?`active`:``}`,onClick:()=>n(`members`),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-users`}),` 회원 관리`]}),(0,_.jsxs)(`button`,{className:`admin-tab ${t===`orders`?`active`:``}`,onClick:()=>n(`orders`),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-receipt`}),` 주문 관리`]}),(0,_.jsxs)(`button`,{className:`admin-tab ${t===`coupons`?`active`:``}`,onClick:()=>n(`coupons`),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-ticket`}),` 쿠폰 관리`]}),(0,_.jsxs)(`button`,{className:`admin-tab ${t===`progress`?`active`:``}`,onClick:()=>n(`progress`),children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-line`}),` 회원 학습현황`]})]}),t===`members`&&(0,_.jsxs)(`div`,{className:`admin-panel`,children:[(0,_.jsxs)(`h2`,{children:[`회원 목록 (`,s.length,`명)`]}),s.length===0?(0,_.jsx)(`p`,{className:`admin-empty`,children:`등록된 회원이 없습니다.`}):(0,_.jsx)(`div`,{className:`admin-table-wrap`,children:(0,_.jsxs)(`table`,{className:`admin-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`이름`}),(0,_.jsx)(`th`,{children:`이메일`}),(0,_.jsx)(`th`,{children:`가입경로`}),(0,_.jsx)(`th`,{children:`주문수`}),(0,_.jsx)(`th`,{children:`쿠폰`}),(0,_.jsx)(`th`,{children:`최초 확인일`}),(0,_.jsx)(`th`,{children:`이용 상태`})]})}),(0,_.jsx)(`tbody`,{children:s.map(e=>{let t=e.email,n=r.filter(e=>(e.user_email||``).toLowerCase()===t),i=n.filter(e=>e.payment_status===`paid`)[0],o=i?.expires_at&&new Date(i.expires_at)>new Date,s=l.filter(e=>(e.user_email||``).toLowerCase()===t),c=!1;if(s.length>0)for(let e of s){let t=a.find(t=>t.id===e.coupon_id)?.days||1;if(new Date(new Date(e.created_at).getTime()+t*864e5)>new Date){c=!0;break}}let u=o||c;return(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{style:{fontWeight:600},children:e.name||`-`}),(0,_.jsx)(`td`,{children:t}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`table-badge`,children:e.source})}),(0,_.jsx)(`td`,{children:n.length}),(0,_.jsx)(`td`,{children:s.length}),(0,_.jsx)(`td`,{children:new Date(e.firstSeen).toLocaleDateString(`ko-KR`)}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`table-badge ${u?`pass`:``}`,children:u?c&&!o?`쿠폰 이용중`:`이용중`:`만료/없음`})})]},t)})})]})})]}),t===`orders`&&(0,_.jsxs)(`div`,{className:`admin-panel`,children:[(0,_.jsxs)(`div`,{className:`admin-order-summary`,children:[(0,_.jsxs)(`div`,{className:`admin-order-summary-card`,children:[(0,_.jsx)(`span`,{className:`admin-order-summary-label`,children:`전체 주문`}),(0,_.jsxs)(`span`,{className:`admin-order-summary-value`,children:[pe.total,`건`]})]}),(0,_.jsxs)(`div`,{className:`admin-order-summary-card paid`,children:[(0,_.jsx)(`span`,{className:`admin-order-summary-label`,children:`결제완료`}),(0,_.jsxs)(`span`,{className:`admin-order-summary-value`,children:[pe.paidCount,`건 / `,pe.paidAmount.toLocaleString(),`원`]})]}),(0,_.jsxs)(`div`,{className:`admin-order-summary-card cancelled`,children:[(0,_.jsx)(`span`,{className:`admin-order-summary-label`,children:`취소/환불`}),(0,_.jsxs)(`span`,{className:`admin-order-summary-value`,children:[pe.cancelledCount+pe.refundedCount,`건`]})]})]}),(0,_.jsxs)(`div`,{className:`admin-order-toolbar`,children:[(0,_.jsx)(`div`,{className:`admin-order-filters`,children:[`all`,`paid`,`pending`,`cancelled`,`refunded`,`failed`].map(e=>{let t=e===`all`?r.length:r.filter(t=>(t.payment_status||`pending`)===e).length;if(e!==`all`&&t===0)return null;let n=e===`all`?`전체`:be[e]?.text||e;return(0,_.jsxs)(`button`,{className:`admin-order-filter-btn ${x===e?`active`:``}`,onClick:()=>S(e),children:[n,` (`,t,`)`]},e)})}),(0,_.jsx)(`input`,{type:`text`,className:`admin-order-search`,placeholder:`주문번호, 이메일, 이름 검색...`,value:C,onChange:e=>w(e.target.value)})]}),me.length===0?(0,_.jsx)(`p`,{className:`admin-empty`,children:`해당 조건의 주문이 없습니다.`}):(0,_.jsx)(`div`,{className:`admin-table-wrap`,children:(0,_.jsxs)(`table`,{className:`admin-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`주문번호`}),(0,_.jsx)(`th`,{children:`주문자`}),(0,_.jsx)(`th`,{children:`플랜`}),(0,_.jsx)(`th`,{children:`금액`}),(0,_.jsx)(`th`,{children:`상태`}),(0,_.jsx)(`th`,{children:`만료일`}),(0,_.jsx)(`th`,{children:`결제일`})]})}),(0,_.jsx)(`tbody`,{children:me.map(e=>{let t=be[e.payment_status]||{text:e.payment_status,cls:``},n=T===e.id,r=e.expires_at&&new Date(e.expires_at)<new Date;return(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{className:`admin-order-row ${n?`expanded`:``}`,onClick:()=>E(n?null:e.id),style:{cursor:`pointer`},children:[(0,_.jsx)(`td`,{className:`order-num-cell`,children:e.order_number}),(0,_.jsxs)(`td`,{children:[e.user_name||e.user_email?.split(`@`)[0]||`-`,(0,_.jsx)(`br`,{}),(0,_.jsx)(`small`,{style:{color:`var(--text-light)`,fontSize:`11px`},children:e.user_email})]}),(0,_.jsx)(`td`,{children:xe[e.plan_type]||e.plan_type}),(0,_.jsxs)(`td`,{style:{fontWeight:700},children:[(e.total_amount||0).toLocaleString(),`원`]}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`table-badge ${t.cls}`,children:t.text})}),(0,_.jsx)(`td`,{children:e.expires_at?(0,_.jsxs)(`span`,{style:{color:r?`#DC2626`:`#059669`,fontWeight:600,fontSize:`13px`},children:[new Date(e.expires_at).toLocaleDateString(`ko-KR`),r?` (만료)`:``]}):`-`}),(0,_.jsx)(`td`,{children:new Date(e.created_at).toLocaleDateString(`ko-KR`)})]}),n&&(0,_.jsx)(`tr`,{children:(0,_.jsx)(`td`,{colSpan:7,style:{padding:0},children:(0,_.jsxs)(`div`,{className:`admin-order-detail`,children:[(0,_.jsx)(`div`,{className:`admin-order-detail-info`,children:(0,_.jsxs)(`dl`,{children:[(0,_.jsx)(`dt`,{children:`주문번호`}),(0,_.jsx)(`dd`,{children:e.order_number}),(0,_.jsx)(`dt`,{children:`이메일`}),(0,_.jsx)(`dd`,{children:e.user_email||`-`}),(0,_.jsx)(`dt`,{children:`전화번호`}),(0,_.jsx)(`dd`,{children:e.user_phone||`-`}),(0,_.jsx)(`dt`,{children:`결제수단`}),(0,_.jsx)(`dd`,{children:e.payment_method||`card`}),e.portone_payment_id&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`dt`,{children:`결제 ID`}),(0,_.jsx)(`dd`,{style:{fontFamily:`monospace`,fontSize:`12px`},children:e.portone_payment_id})]}),e.paid_at&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`dt`,{children:`결제일시`}),(0,_.jsx)(`dd`,{children:new Date(e.paid_at).toLocaleString(`ko-KR`)})]}),e.cancelled_at&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`dt`,{children:`취소일시`}),(0,_.jsx)(`dd`,{style:{color:`#DC2626`},children:new Date(e.cancelled_at).toLocaleString(`ko-KR`)})]}),e.cancel_reason&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`dt`,{children:`취소사유`}),(0,_.jsx)(`dd`,{style:{color:`#DC2626`},children:e.cancel_reason})]})]})}),(0,_.jsxs)(`div`,{className:`admin-order-actions`,children:[(0,_.jsx)(`span`,{style:{fontSize:`13px`,fontWeight:600},children:`상태 변경:`}),[`pending`,`paid`,`cancelled`,`refunded`].map(t=>(0,_.jsx)(`button`,{className:`btn-sm ${e.payment_status===t?`active`:``}`,disabled:e.payment_status===t||ee,onClick:n=>{n.stopPropagation(),t===`cancelled`||t===`refunded`?O(``):fe(e.id,t)},style:{background:e.payment_status===t?`var(--primary-blue)`:`rgba(27,58,107,0.08)`,color:e.payment_status===t?`#fff`:`var(--text-primary)`,opacity:e.payment_status===t?.6:1},children:be[t]?.text||t},t))]}),e.payment_status!==`cancelled`&&e.payment_status!==`refunded`&&(0,_.jsxs)(`div`,{className:`admin-order-cancel-form`,onClick:e=>e.stopPropagation(),children:[(0,_.jsx)(`input`,{type:`text`,placeholder:`취소/환불 사유를 입력하세요...`,value:D,onChange:e=>O(e.target.value),style:{flex:1,padding:`8px 12px`,border:`1px solid var(--border-light)`,borderRadius:`8px`,fontSize:`13px`}}),(0,_.jsx)(`button`,{className:`btn-sm btn-danger`,disabled:ee||!D.trim(),onClick:()=>fe(e.id,`cancelled`,D.trim()),children:`취소 확정`}),(0,_.jsx)(`button`,{className:`btn-sm`,disabled:ee||!D.trim(),onClick:()=>fe(e.id,`refunded`,D.trim()),style:{background:`rgba(139,92,246,0.1)`,color:`#7C3AED`},children:`환불 처리`})]})]})})})]},e.id)})})]})})]}),t===`coupons`&&(0,_.jsxs)(`div`,{className:`admin-panel`,children:[(0,_.jsx)(`h2`,{children:`쿠폰 관리`}),(0,_.jsxs)(`div`,{className:`admin-coupon-form`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-plus`}),` 쿠폰 발행`]}),(0,_.jsxs)(`div`,{className:`coupon-form-row`,children:[(0,_.jsx)(`label`,{children:`이용 기간:`}),(0,_.jsxs)(`select`,{value:h,onChange:e=>v(Number(e.target.value)),style:{padding:`8px 12px`,borderRadius:`8px`,border:`1px solid var(--border-color)`,fontSize:`14px`},children:[(0,_.jsx)(`option`,{value:1,children:`1일`}),(0,_.jsx)(`option`,{value:3,children:`3일`}),(0,_.jsx)(`option`,{value:7,children:`7일`}),(0,_.jsx)(`option`,{value:10,children:`10일`}),(0,_.jsx)(`option`,{value:14,children:`14일`}),(0,_.jsx)(`option`,{value:30,children:`30일`}),(0,_.jsx)(`option`,{value:60,children:`60일`}),(0,_.jsx)(`option`,{value:90,children:`90일`}),(0,_.jsx)(`option`,{value:365,children:`365일`})]}),(0,_.jsx)(`label`,{children:`발행 수량:`}),(0,_.jsx)(`input`,{type:`number`,min:1,max:100,value:p,onChange:e=>m(Number(e.target.value)),className:`coupon-qty-input`}),(0,_.jsx)(`button`,{className:`btn btn-primary`,onClick:le,disabled:y,children:y?`생성 중...`:`쿠폰 생성`}),(0,_.jsxs)(`button`,{className:`btn btn-secondary`,onClick:de,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-copy`}),` 활성 코드 복사`]})]}),(0,_.jsxs)(`p`,{className:`coupon-form-note`,children:[h,`일 이용권 (1회용) 쿠폰이 생성됩니다.`]})]}),a.length===0?(0,_.jsx)(`p`,{className:`admin-empty`,children:`발행된 쿠폰이 없습니다.`}):(0,_.jsx)(`div`,{className:`admin-table-wrap`,children:(0,_.jsxs)(`table`,{className:`admin-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`코드`}),(0,_.jsx)(`th`,{children:`이용기간`}),(0,_.jsx)(`th`,{children:`사용/최대`}),(0,_.jsx)(`th`,{children:`상태`}),(0,_.jsx)(`th`,{children:`생성일`}),(0,_.jsx)(`th`,{children:`관리`})]})}),(0,_.jsx)(`tbody`,{children:a.map(e=>(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{className:`coupon-code-cell`,children:e.code}),(0,_.jsxs)(`td`,{children:[e.days||1,`일`]}),(0,_.jsxs)(`td`,{children:[e.used_count,`/`,e.max_uses]}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`table-badge ${e.is_active&&e.used_count<e.max_uses?`pass`:`fail`}`,children:e.is_active?e.used_count>=e.max_uses?`소진`:`활성`:`비활성`})}),(0,_.jsx)(`td`,{children:new Date(e.created_at).toLocaleDateString(`ko-KR`)}),(0,_.jsx)(`td`,{children:e.is_active&&e.used_count<e.max_uses&&(0,_.jsx)(`button`,{className:`btn-sm btn-danger`,onClick:()=>ue(e.id),children:`비활성화`})})]},e.id))})]})})]}),t===`progress`&&(0,_.jsxs)(`div`,{className:`admin-panel`,children:[(0,_.jsxs)(`h2`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-chart-line`}),` 회원 학습현황 (`,ge.length,`명)`]}),(0,_.jsx)(`input`,{type:`text`,className:`admin-member-search`,placeholder:`이름, 이메일, 전화번호로 검색...`,value:j,onChange:e=>M(e.target.value)}),ge.length===0?(0,_.jsx)(`p`,{className:`admin-empty`,children:`검색 결과가 없습니다.`}):(0,_.jsx)(`div`,{className:`admin-table-wrap`,style:{maxHeight:N?`320px`:`600px`,overflowY:`auto`},children:(0,_.jsxs)(`table`,{className:`admin-table admin-progress-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`회원명`}),(0,_.jsx)(`th`,{children:`이메일`}),(0,_.jsx)(`th`,{children:`전화번호`}),(0,_.jsx)(`th`,{children:`가입일`}),(0,_.jsx)(`th`,{children:`마지막 활동`}),(0,_.jsx)(`th`,{children:`비고`})]})}),(0,_.jsx)(`tbody`,{children:ge.map(e=>{let t=e.email,n=N?.email===t,i=r.filter(e=>(e.user_email||``).toLowerCase()===t),o=i.filter(e=>e.payment_status===`paid`)[0],s=o?.expires_at&&new Date(o.expires_at)>new Date,c=l.filter(e=>(e.user_email||``).toLowerCase()===t),u=!1;if(c.length>0)for(let e of c){let t=a.find(t=>t.id===e.coupon_id)?.days||1;if(new Date(new Date(e.created_at).getTime()+t*864e5)>new Date){u=!0;break}}let d=s||u,f=d?u&&!s?`쿠폰 이용중`:`이용중`:i.length>0?`만료`:`미결제`;return(0,_.jsxs)(`tr`,{className:n?`selected`:``,onClick:()=>he(e),style:{cursor:`pointer`},children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`admin-member-name`,children:e.name||`-`})}),(0,_.jsx)(`td`,{children:t}),(0,_.jsx)(`td`,{children:e.phone||`-`}),(0,_.jsx)(`td`,{children:new Date(e.firstSeen).toLocaleDateString(`ko-KR`)}),(0,_.jsx)(`td`,{children:new Date(e.lastActivity).toLocaleDateString(`ko-KR`)}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`table-badge ${d?`pass`:``}`,children:f})})]},t)})})]})}),N&&(0,_.jsxs)(`div`,{className:`admin-member-dashboard`,children:[(0,_.jsxs)(`h3`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-user`}),` `,N.name||N.email,` 학습 현황`]}),ae?(0,_.jsx)(`div`,{style:{textAlign:`center`,padding:`40px 0`},children:(0,_.jsx)(`div`,{className:`loading-spinner`})}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{className:`dashboard-stats-grid`,children:[(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-label`,children:`필기 시험수`}),(0,_.jsx)(`span`,{className:`stat-number`,children:_e.total})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-label`,children:`필기 평균`}),(0,_.jsxs)(`span`,{className:`stat-number`,children:[_e.avg,`점`]})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-label`,children:`필기 합격률`}),(0,_.jsxs)(`span`,{className:`stat-number`,children:[_e.passRate,`%`]})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-label`,children:`필기 합격`}),(0,_.jsxs)(`span`,{className:`stat-number`,children:[_e.passCount,`회`]})]})]}),(0,_.jsxs)(`div`,{className:`dashboard-stats-grid`,style:{marginTop:`16px`},children:[(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-label`,children:`실기 연습수`}),(0,_.jsx)(`span`,{className:`stat-number`,children:ve.total})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-label`,children:`실기 평균`}),(0,_.jsxs)(`span`,{className:`stat-number`,children:[ve.avg,`점`]})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-label`,children:`실기 합격률`}),(0,_.jsxs)(`span`,{className:`stat-number`,children:[ve.passRate,`%`]})]}),(0,_.jsxs)(`div`,{className:`stat-card`,children:[(0,_.jsx)(`div`,{className:`stat-label`,children:`실기 합격`}),(0,_.jsxs)(`span`,{className:`stat-number`,children:[ve.passCount,`회`]})]})]}),_e.total===0&&ve.total===0?(0,_.jsx)(`p`,{className:`admin-empty`,children:`해당 회원의 학습 기록이 없습니다.`}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{className:`dashboard-charts`,style:{marginTop:`24px`},children:[_e.total>0&&(0,_.jsxs)(`div`,{className:`dashboard-card`,children:[(0,_.jsx)(`h4`,{children:`과목별 평균 점수`}),(0,_.jsx)(eo,{scores:re})]}),_e.total>0&&(0,_.jsxs)(`div`,{className:`dashboard-card`,children:[(0,_.jsx)(`h4`,{children:`필기 점수 추이`}),(0,_.jsx)(to,{sessions:[...F].reverse()})]})]}),ye.length>0&&(0,_.jsxs)(`div`,{className:`dashboard-card`,style:{marginTop:`16px`},children:[(0,_.jsxs)(`h4`,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`,style:{color:`#F59E0B`}}),` 약점 과목`]}),(0,_.jsx)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`,marginTop:`8px`},children:ye.map(e=>(0,_.jsxs)(`span`,{className:`table-badge fail`,children:[e.name,` (`,re[e.code],`점)`]},e.code))})]}),F.length>0&&(0,_.jsxs)(`div`,{className:`dashboard-card`,style:{marginTop:`16px`},children:[(0,_.jsx)(`h4`,{children:`최근 필기 시험`}),(0,_.jsx)(`div`,{className:`admin-table-wrap`,children:(0,_.jsxs)(`table`,{className:`admin-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`회차`}),(0,_.jsx)(`th`,{children:`점수`}),(0,_.jsx)(`th`,{children:`합격여부`}),(0,_.jsx)(`th`,{children:`응시일`})]})}),(0,_.jsx)(`tbody`,{children:F.slice(0,10).map((e,t)=>(0,_.jsxs)(`tr`,{children:[(0,_.jsxs)(`td`,{children:[F.length-t,`회`]}),(0,_.jsxs)(`td`,{style:{fontWeight:700},children:[e.score_total,`점`]}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`table-badge ${e.is_pass?`pass`:`fail`}`,children:e.is_pass?`합격`:`불합격`})}),(0,_.jsx)(`td`,{children:new Date(e.completed_at).toLocaleDateString(`ko-KR`)})]},e.id))})]})})]}),I.length>0&&(0,_.jsxs)(`div`,{className:`dashboard-card`,style:{marginTop:`16px`},children:[(0,_.jsx)(`h4`,{children:`최근 실기 연습`}),(0,_.jsx)(`div`,{className:`admin-table-wrap`,children:(0,_.jsxs)(`table`,{className:`admin-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`회차`}),(0,_.jsx)(`th`,{children:`점수`}),(0,_.jsx)(`th`,{children:`합격여부`}),(0,_.jsx)(`th`,{children:`연습일`})]})}),(0,_.jsx)(`tbody`,{children:I.slice(0,10).map((e,t)=>(0,_.jsxs)(`tr`,{children:[(0,_.jsxs)(`td`,{children:[I.length-t,`회`]}),(0,_.jsxs)(`td`,{style:{fontWeight:700},children:[e.score_total,`점`]}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`span`,{className:`table-badge ${e.is_pass?`pass`:`fail`}`,children:e.is_pass?`합격`:`불합격`})}),(0,_.jsx)(`td`,{children:new Date(e.completed_at).toLocaleDateString(`ko-KR`)})]},e.id))})]})})]})]})]})]})]})]})]})}function Xs({children:e}){let{user:t,loading:n,isAdmin:r}=Z();return n?(0,_.jsx)(`div`,{className:`loading-page`,children:(0,_.jsx)(`div`,{className:`loading-spinner`})}):t?r?e:(0,_.jsx)(a,{to:`/`,replace:!0}):(0,_.jsx)(a,{to:`/login`,replace:!0})}function Zs(){return(0,_.jsxs)(`div`,{className:`app-layout`,children:[(0,_.jsx)(ba,{}),(0,_.jsx)(Sa,{}),(0,_.jsx)(`main`,{id:`main-content`,children:(0,_.jsxs)(c,{children:[(0,_.jsx)(t,{path:`/`,element:(0,_.jsx)(ka,{})}),(0,_.jsx)(t,{path:`/login`,element:(0,_.jsx)(ja,{})}),(0,_.jsx)(t,{path:`/pilgi`,element:(0,_.jsx)(Na,{})}),(0,_.jsx)(t,{path:`/silgi`,element:(0,_.jsx)(ao,{})}),(0,_.jsx)(t,{path:`/info`,element:(0,_.jsx)(qo,{})}),(0,_.jsx)(t,{path:`/about`,element:(0,_.jsx)(gs,{})}),(0,_.jsx)(t,{path:`/about/instructor`,element:(0,_.jsx)(Ss,{})}),(0,_.jsx)(t,{path:`/about/guide`,element:(0,_.jsx)(Es,{})}),(0,_.jsx)(t,{path:`/about/pricing`,element:(0,_.jsx)(Ms,{})}),(0,_.jsx)(t,{path:`/service`,element:(0,_.jsx)(a,{to:`/about/guide`,replace:!0})}),(0,_.jsx)(t,{path:`/terms`,element:(0,_.jsx)(Ns,{})}),(0,_.jsx)(t,{path:`/privacy`,element:(0,_.jsx)(Ps,{})}),(0,_.jsx)(t,{path:`/learn`,element:(0,_.jsx)(Qo,{})}),(0,_.jsx)(t,{path:`/practice`,element:(0,_.jsx)(ms,{})}),(0,_.jsx)(t,{path:`/learn/:subjectCode`,element:(0,_.jsx)(Ca,{children:(0,_.jsx)($o,{})})}),(0,_.jsx)(t,{path:`/summary`,element:(0,_.jsx)(Ca,{children:(0,_.jsx)(ps,{})})}),(0,_.jsx)(t,{path:`/pilgi/select`,element:(0,_.jsx)(za,{})}),(0,_.jsx)(t,{path:`/pilgi/study`,element:(0,_.jsx)(Ca,{children:(0,_.jsx)(Ga,{})})}),(0,_.jsx)(t,{path:`/pilgi/exam/:id`,element:(0,_.jsx)(Ca,{allowFreeTrial:!0,children:(0,_.jsx)($a,{})})}),(0,_.jsx)(t,{path:`/pilgi/result/:id`,element:(0,_.jsx)(no,{})}),(0,_.jsx)(t,{path:`/pilgi/review/:id`,element:(0,_.jsx)(ro,{})}),(0,_.jsx)(t,{path:`/silgi/practice`,element:(0,_.jsx)(Ca,{children:(0,_.jsx)(_o,{})})}),(0,_.jsx)(t,{path:`/silgi/result`,element:(0,_.jsx)(vo,{})}),(0,_.jsx)(t,{path:`/silgi/terms`,element:(0,_.jsx)(bo,{})}),(0,_.jsx)(t,{path:`/silgi/past`,element:(0,_.jsx)(wo,{})}),(0,_.jsx)(t,{path:`/silgi/past/:examId`,element:(0,_.jsx)(Eo,{})}),(0,_.jsx)(t,{path:`/silgi/frequent`,element:(0,_.jsx)(Oo,{})}),(0,_.jsx)(t,{path:`/dashboard`,element:(0,_.jsx)(Ca,{children:(0,_.jsx)(Mo,{})})}),(0,_.jsx)(t,{path:`/dashboard/history`,element:(0,_.jsx)(Ca,{children:(0,_.jsx)(Po,{})})}),(0,_.jsx)(t,{path:`/bookmarks`,element:(0,_.jsx)(Ca,{children:(0,_.jsx)(Io,{})})}),(0,_.jsx)(t,{path:`/wrong-answers`,element:(0,_.jsx)(Ca,{children:(0,_.jsx)(Ro,{})})}),(0,_.jsx)(t,{path:`/checkout`,element:(0,_.jsx)(Bs,{})}),(0,_.jsx)(t,{path:`/confirmation`,element:(0,_.jsx)(Hs,{})}),(0,_.jsx)(t,{path:`/orders`,element:(0,_.jsx)(Gs,{})}),(0,_.jsx)(t,{path:`/coupon`,element:(0,_.jsx)(qs,{})}),(0,_.jsx)(t,{path:`/admin`,element:(0,_.jsx)(Xs,{children:(0,_.jsx)(Ys,{})})}),(0,_.jsx)(t,{path:`*`,element:(0,_.jsx)(Aa,{})})]})}),(0,_.jsx)(xa,{})]})}function Qs(){return(0,_.jsx)(C,{children:(0,_.jsx)(ee,{children:(0,_.jsx)(Qi,{children:(0,_.jsx)(sa,{children:(0,_.jsx)(_a,{children:(0,_.jsx)(s,{children:(0,_.jsx)(Zs,{})})})})})})})}(0,h.createRoot)(document.getElementById(`root`)).render((0,_.jsx)(g.StrictMode,{children:(0,_.jsx)(Qs,{})}));