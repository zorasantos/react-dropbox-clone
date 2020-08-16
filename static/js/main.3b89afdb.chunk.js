(this["webpackJsonpreact-clone-interface"]=this["webpackJsonpreact-clone-interface"]||[]).push([[0],{22:function(n,e,t){n.exports=t.p+"static/media/googleLogo.a49aa431.svg"},23:function(n,e,t){n.exports=t(34)},34:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(18),i=t.n(a),l=t(2),c=t(3);function s(){var n=Object(l.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  *, button, input {\n    font-family: Roboto, sans-serif;\n  }\n  :root {\n    --color-primary: #0d2f81;\n    --color-secondary: #ffe7aa;\n    --color-tertiary: #fff;\n    --color-quaternary: #000;\n\n    --color-blue: #0061ff;\n    --color-border: #bdc4c9;\n  }\n"]);return s=function(){return n},n}var u=Object(c.a)(s()),p=t(10);function d(){var n=Object(l.a)(["\n  z-index: 2;\n  position: relative;\n  max-width: 1440px;\n  margin: 0 auto;\n\n  > h2 {\n    font-size: var(--heading-font-size);\n    color: var(--logo-color);\n    max-width: var(--content-width);\n  }\n\n  > p {\n    margin-top: 20px;\n    font-size: 16px;\n    color: var(--text-color);\n    max-width: var(--content-width);\n  }\n\n  padding: var(--padding-top) 32px var(--padding-bottom);\n"]);return d=function(){return n},n}function m(){var n=Object(l.a)(["\n  width: 36px;\n  height: 32px;\n  fill: var(--logo-color);\n"]);return m=function(){return n},n}function b(){var n=Object(l.a)(["\n  z-index: 3;\n  background: var(--bg-color);\n\n  display: flex;\n  justify-content: space-between;\n\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 16px 32px;\n\n  > h1 {\n    display: flex;\n    align-items: center;\n    > span {\n      color: var(--text-color);\n      margin-left: 10px;\n      font-size: 29px;\n    }\n  }\n\n  @media(max-width: 766px) {\n    > h1 {\n      > span {\n        display: none;\n      }\n    }\n  }\n\n  > button {\n    color: var(--text-color);\n    background: none;\n    border: none;\n    outline: none;\n    font-size: 16px;\n    cursor: pointer;\n\n    &:hover, &:focus {\n      text-decoration: underline;\n    }\n  }\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n"]);return b=function(){return n},n}function g(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  clip: rect(auto auto auto auto)\n"]);return g=function(){return n},n}function f(){var n=Object(l.a)(["\n  --padding-top: 100px;\n  --padding-bottom: 120px;\n  --heading-font-size: 30px;\n  --content-width: 100%;\n\n  &.blue {\n    --bg-color: var(--color-primary);\n    --text-color: var(--color-tertiary);\n    --logo-color: var(--color-secondary);\n  }\n  &.beige {\n    --bg-color: var(--color-secondary);\n    --text-color: var(--color-quaternary);\n    --logo-color: var(--color-primary);\n  }\n  &.white {\n    --bg-color: var(--color-tertiary);\n    --text-color: var(--color-quaternary);\n    --logo-color: var(--color-blue);\n  }\n  &.black {\n    --bg-color: var(--color-quaternary);\n    --text-color: var(--color-tertiary);\n    --logo-color: var(--color-blue);\n  }\n\n  &:first-child {\n    --padding-top: 130px;\n    --heading-font-size: 41px;\n\n    @media (min-width: 1024px) {\n      --content-width: 50%;\n      --heading-font-size: 71px;\n    }\n  }\n\n  background: var(--bg-color);\n  position: relative;\n"]);return f=function(){return n},n}var x=c.b.div(f()),v=c.b.div(g()),h=c.b.div(b()),E=Object(c.b)(p.a)(m()),w=c.b.div(d()),y=function(n){var e=n.variant,t=n.title,o=n.description,a=Math.round(Math.random());return r.a.createElement(x,{className:e},r.a.createElement(v,null,r.a.createElement(h,null,r.a.createElement("h1",null,r.a.createElement(E,null),r.a.createElement("span",null,"DropboxClone")),r.a.createElement("button",{onClick:function(){window.toggleActiveMenu&&window.toggleActiveMenu()}},0===a?"Acessar":"Registrar-se"))),r.a.createElement(w,null,r.a.createElement("h2",null,t),r.a.createElement("p",null,o)))},j=t(15);function z(){var n=Object(l.a)(["\n  z-index: 10;\n\n  position: fixed;\n  top: 0;\n  right: 0;\n\n  width: 100%;\n  height: 100%;\n\n  background: var(--color-tertiary);\n\n  @media(min-width: 1024px) {\n    width: calc(100% / 3);\n    box-shadow: -7px 0 5px -6px rba(0, 0, 0, 0.075);\n  }\n\n  @media(min-width: 1440px) {\n    width: calc(480px + ((100vw - 1440px) / 2));\n  }\n\n  transform: translateX(100%);\n  transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1);\n  &.open {\n    transform: translateX(0);\n  }\n\n  @media(min-width: 1024px) {\n    &.scrollOpen {\n      transform: translateX(0);\n    }\n    &.scrollOpen .action--close {\n      display: none;\n    }\n  }\n"]);return z=function(){return n},n}var O=c.b.div(z()),k=function(n){var e=n.children,t=Object(o.useState)(0),a=Object(j.a)(t,2),i=a[0],l=a[1],c=Object(o.useState)(!1),s=Object(j.a)(c,2),u=s[0],p=s[1];Object(o.useEffect)((function(){function n(){l(window.scrollY),p(!1)}return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]);var d=[u?"open":"",i<=300?"scrollOpen":""].join(" ").trim();return window.toggleActiveMenu=function(){p((function(n){return!n}))},r.a.createElement(O,{className:d},e)},q=t(22),A=t.n(q);function C(){var n=Object(l.a)(["\n  display: flex;\n  height: 100%;\n\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 0 32px;\n  max-width: 480px;\n  margin: 0 auto;\n\n  > .title {\n    font-size: 25px;\n    font-weight: 500px;\n  }\n\n  > .subtitle {\n    font-size: 12px;\n    margin-top: 3px;\n  }\n\n  > input {\n    background: var(--color-tertiary);\n    border: 1px solid var(--color-border);\n    padding: 13px 18px;\n    font-size: 14px;\n\n    margin-top: 18px;\n  }\n\n  > button {\n    margin-top: 18px;\n\n    padding: 13px 18px;\n    font-size: 17px;\n    background-color: var(--color-blue);\n    color: var(--color-tertiary);\n    border: none;\n\n    cursor: pointer;\n    &:hover {\n      opacity: 0.87;\n    }\n  }\n\n  > .terms {\n    font-size: 12px;\n    opacity: 0.6;\n    margin-top: 4px;\n  }\n\n  .btnGoogle {\n    background-color: transparent;\n    color: black;\n    border: 1px solid var(--color-border);\n    margin-bottom: 13px;\n\n    > img {\n      padding-right: 5px;\n    }\n  }\n\n  .btnGoogle:hover {\n    background: #FAFAFA;\n  }\n\n  > fieldset {\n    border: none;\n    background-color: transparent;\n    outline: none;\n\n    font-size: 13px;\n    padding: 10px 0;\n\n    > input {\n      margin-right: 5px;\n    }\n  }\n"]);return C=function(){return n},n}function D(){var n=Object(l.a)(["\n  width: 36px;\n  height: 32px;\n  fill: var(--color-blue);\n"]);return D=function(){return n},n}function L(){var n=Object(l.a)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 32px;\n  min-height: 61px;\n\n  > h1 {\n    display: flex;\n    align-items: center;\n\n    > span {\n      color: var(--color-quaternary);\n      margin-left: 10px;\n      font-size: 29px;\n    }\n  }\n  > button {\n    background: none;\n    border: none;\n    font-weight: bold;\n    font-size: 17px;\n    outline: 0;\n    cursor: pointer;\n  }\n  @media(min-width: 1024px) {\n    justify-content: flex-end;\n    > h1 {\n      display: none;\n    }\n  }\n"]);return L=function(){return n},n}function N(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  @media(min-width: 1024px) {\n    max-width: 480px;\n  }\n"]);return N=function(){return n},n}var M=c.b.div(N()),F=c.b.div(L()),G=Object(c.b)(p.a)(D()),R=c.b.form(C());var P=function(){return r.a.createElement(M,null,r.a.createElement(F,null,r.a.createElement("h1",null,r.a.createElement(G,null),r.a.createElement("span",null,"DropboxClone")),r.a.createElement("button",{className:"action--close",onClick:function(){window.toggleActiveMenu&&window.toggleActiveMenu()}}," X ")),r.a.createElement(R,null,r.a.createElement("p",{className:"title"},"Registre-se"),r.a.createElement("span",{className:"subtitle"},"ou acesse sua conta"),r.a.createElement("input",{type:"text",placeholder:"Nome"}),r.a.createElement("input",{type:"text",placeholder:"Sobrenome"}),r.a.createElement("input",{type:"email",placeholder:"E-mail"}),r.a.createElement("input",{type:"password",placeholder:"Senha"}),r.a.createElement("fieldset",null,r.a.createElement("input",{type:"checkbox"}),r.a.createElement("label",null,"Concordo com os Termos do DropboxClone")),r.a.createElement("button",null,"Registre-se"),r.a.createElement("button",{className:"btnGoogle"},r.a.createElement("img",{src:A.a,alt:"Logo Google"}),"Registre-se pelo Google"),r.a.createElement("span",{className:"terms"},"Esta p\xe1gina \xe9 protegida pelo reCAPTCHA e est\xe1 sujeita \xe0 Pol\xedtica de privacidade e aos Termos de servi\xe7o do Google.")))},S=[{title:"Concentre-se apenas no trabalho importante",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},{title:"Diga adeus ao trabalho ma\xe7ante",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},{title:"Armazenamento e compartilhamento de arquivos s\xe3o s\xf3 o come\xe7o",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis."},{title:"Para todos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"Parte inferior da p\xe1gina",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis."}];var X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{variant:"blue",title:S[0].title,description:S[0].description}),r.a.createElement(y,{variant:"beige",title:S[1].title,description:S[0].description}),r.a.createElement(y,{variant:"blue",title:S[2].title,description:S[0].description}),r.a.createElement(y,{variant:"white",title:S[3].title,description:S[0].description}),r.a.createElement(y,{variant:"black",title:S[4].title,description:S[0].description}),r.a.createElement(k,null,r.a.createElement(P,null)))};var Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(u,null))},T=t(9),B=t(1);var J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.b,{to:"/dropbox"},"DropBox"),r.a.createElement(T.b,{to:"/nubank"},"Nubank"))};i.a.render(r.a.createElement(T.a,null,r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"/home",component:J}),r.a.createElement(B.a,{exact:!0,path:"/",component:Q}))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3b89afdb.chunk.js.map