(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8049],{91338:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/RJob",function(){return l(81546)}])},81546:function(e,t,l){"use strict";l.r(t);var r=l(50241);t.default=(0,r.Z)("/jobs/decentralized-storage-researcher")},50241:function(e,t,l){"use strict";let r="src/index.tsx";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){let t;let l=e[0],r=1;for(;r<e.length;){let n=e[r],o=e[r+1];if(r+=2,("optionalAccess"===n||"optionalCall"===n)&&null==l)return;"access"===n||"optionalAccess"===n?(t=l,l=o(l)):("call"===n||"optionalCall"===n)&&(l=o((...e)=>l.call(t,...e)),t=void 0)}return l}var a=n(l(67294)),s=n(l(11163)),i=n(l(9008));let c="Option {params: true} require the url to be the name of the param to search for: `redirect('to', {params:true})` will work with `/redirect?to=https://example.com`",u=e=>{if("undefined"==typeof window)return"";let t=new URL(window.location.href),l=t.searchParams.get(e);if(!l)throw Error(c);return l};t.Z=(e,t)=>class extends a.default.Component{static async getInitialProps({res:l,query:r}){if(o([l,"optionalAccess",e=>e.writeHead])){var n;let a=e;if(!0===o([t,"optionalAccess",e=>e.params])){if(!o([r,"optionalAccess",t=>t[e]]))throw Error(c);a=r[e]}l.writeHead((n=o([t,"optionalAccess",e=>e.statusCode]),null!=n?n:301),{Location:a}),l.end()}else if("undefined"!=typeof window){let s=e;!0===o([t,"optionalAccess",e=>e.params])&&(s=u(s)),window.location.href=s}return{}}componentDidMount(){!0===o([t,"optionalAccess",e=>e.params])?window.location.href=u(e):null!=o([t,"optionalAccess",e=>e.asUrl])?s.default.push(e,t.asUrl,{shallow:!0}):"/"===e[0]?s.default.push(e):window.location.href=e}render(){var l;let n=(l=o([t,"optionalAccess",e=>e.asUrl]),null!=l?l:e);return null!=o([t,"optionalAccess",e=>e.params])&&(n=u(e)),a.default.createElement(a.default.Fragment,null,a.default.createElement(i.default,{__self:this,__source:{fileName:r,lineNumber:76}},a.default.createElement("noscript",{__self:this,__source:{fileName:r,lineNumber:78}},a.default.createElement("meta",{httpEquiv:"refresh",content:`0;url=${n}`,__self:this,__source:{fileName:r,lineNumber:79}})),(void 0===o([t,"optionalAccess",e=>e.statusCode])||301===o([t,"optionalAccess",e=>e.statusCode]))&&a.default.createElement("link",{rel:"canonical",href:n,__self:this,__source:{fileName:r,lineNumber:83}})),this.props.children?this.props.children:a.default.createElement("p",{__self:this,__source:{fileName:r,lineNumber:90}},"Redirecting to ",a.default.createElement("a",{href:n,__self:this,__source:{fileName:r,lineNumber:91}},n),"…"))}}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=91338)}),_N_E=e.O()}]);