(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[773],{35990:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2022-02-24-Ukraine-Media-Guide",function(){return n(71953)}])},71953:function(e,t,n){"use strict";n.r(t);var r=n(50241);t.default=(0,r.Z)("/guides/ukraine-media-guide")},50241:function(e,t,n){"use strict";const r="src/index.tsx";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return null!=e?e:t()}function a(e){let t,n=e[0],r=1;for(;r<e.length;){const o=e[r],l=e[r+1];if(r+=2,("optionalAccess"===o||"optionalCall"===o)&&null==n)return;"access"===o||"optionalAccess"===o?(t=n,n=l(n)):"call"!==o&&"optionalCall"!==o||(n=l(((...e)=>n.call(t,...e))),t=void 0)}return n}var s=o(n(67294)),i=o(n(11163)),c=o(n(9008));const u="Option {params: true} require the url to be the name of the param to search for: `redirect('to', {params:true})` will work with `/redirect?to=https://example.com`",f=e=>{if("undefined"===typeof window)return"";const t=new URL(window.location.href).searchParams.get(e);if(!t)throw new Error(u);return t};t.Z=(e,t)=>class extends s.default.Component{static async getInitialProps({res:n,query:r}){if(a([n,"optionalAccess",e=>e.writeHead])){let o=e;if(!0===a([t,"optionalAccess",e=>e.params])){const t=e;if(!a([r,"optionalAccess",e=>e[t]]))throw new Error(u);o=r[t]}n.writeHead(l(a([t,"optionalAccess",e=>e.statusCode]),(()=>301)),{Location:o}),n.end()}else if("undefined"!==typeof window){let n=e;!0===a([t,"optionalAccess",e=>e.params])&&(n=f(n)),window.location.href=n}return{}}componentDidMount(){!0===a([t,"optionalAccess",e=>e.params])?window.location.href=f(e):null!=a([t,"optionalAccess",e=>e.asUrl])?i.default.push(e,t.asUrl,{shallow:!0}):"/"===e[0]?i.default.push(e):window.location.href=e}render(){let n=l(a([t,"optionalAccess",e=>e.asUrl]),(()=>e));return null!=a([t,"optionalAccess",e=>e.params])&&(n=f(e)),s.default.createElement(s.default.Fragment,null,s.default.createElement(c.default,{__self:this,__source:{fileName:r,lineNumber:76}},s.default.createElement("noscript",{__self:this,__source:{fileName:r,lineNumber:78}},s.default.createElement("meta",{httpEquiv:"refresh",content:`0;url=${n}`,__self:this,__source:{fileName:r,lineNumber:79}})),(void 0===a([t,"optionalAccess",e=>e.statusCode])||301===a([t,"optionalAccess",e=>e.statusCode]))&&s.default.createElement("link",{rel:"canonical",href:n,__self:this,__source:{fileName:r,lineNumber:83}})),this.props.children?this.props.children:s.default.createElement("p",{__self:this,__source:{fileName:r,lineNumber:90}},"Redirecting to ",s.default.createElement("a",{href:n,__self:this,__source:{fileName:r,lineNumber:91}},n),"\u2026"))}}}},function(e){e.O(0,[774,888,179],(function(){return t=35990,e(e.s=t);var t}));var t=e.O();_N_E=t}]);