(this["webpackJsonplink-scrutinizer"]=this["webpackJsonplink-scrutinizer"]||[]).push([[0],{22:function(e,s,c){},52:function(e,s,c){},53:function(e,s,c){},54:function(e,s,c){},55:function(e,s,c){},57:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c(4),i=c.n(a),n=c(21),l=c.n(n),r=c(26),o=c(31),j=c(72),d=(c(22),c(27)),m=c.n(d),h=c(0),b=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m.a,{id:"circleicon",className:"circleicon--green"}),Object(h.jsx)("p",{className:"result result--safe",children:e.status})]})},u=c(29),x=c.n(u),p=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x.a,{id:"circleicon",className:"circleicon--red"}),Object(h.jsx)("p",{className:"result result--unsafe",children:e.status})]})},O=function(){var e=Object(t.useState)(""),s=Object(o.a)(e,2),c=s[0],a=s[1],i=function(){var e=Object(r.a)(l.a.mark((function e(){var s,c,t,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=document.querySelector("input").value,c={method:"POST",body:JSON.stringify({url:s}),headers:{"Content-Type":"application/json"}},"https://linkscrutinizer.herokuapp.com/url",e.next=5,fetch("https://linkscrutinizer.herokuapp.com/url",c);case 5:return t=e.sent,e.next=8,t.json();case 8:i=e.sent,a(i.scrutiny.status);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"main-title",children:"Scrutinize the Benign and Malicious URLs"}),Object(h.jsxs)("div",{className:"hero_container",children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter your URL here"}),Object(h.jsx)("button",{className:"search",onClick:i,children:Object(h.jsx)(j.a,{className:"arrow-icon"})})]}),Object(h.jsx)("div",{className:"result-container",children:""!==c?c.includes("Safe")?Object(h.jsx)(b,{status:c}):Object(h.jsx)(p,{status:c}):null}),Object(h.jsx)("p",{className:"bottom",children:"#beSafewithus!"})]})})},N=c(5),g=c.p+"static/media/website_logo.4f38d06f.png",v=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("header",{children:[Object(h.jsx)("button",{className:"nav-toggle",onFocus:function(){var e=document.querySelector(".nav-toggle"),s=document.querySelector(".nav");e.addEventListener("click",(function(){s.classList.toggle("nav--visible")}))},"aria-label":"open navigation",children:Object(h.jsx)("span",{className:"hamburger"})}),Object(h.jsxs)("div",{className:"container row",children:[Object(h.jsx)("a",{className:"logo",href:"#",children:Object(h.jsx)("img",{src:g,className:"hero__img",alt:"link scrutinizer logo"})}),Object(h.jsx)("nav",{className:"nav",children:Object(h.jsxs)("ul",{className:"nav__list nav__list--primary",children:[Object(h.jsx)("li",{className:"nav__item",children:Object(h.jsx)(N.Link,{activeClass:"active",to:"homepage",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav__link",children:"Home"})}),Object(h.jsx)("li",{className:"nav__item",children:Object(h.jsx)(N.Link,{activeClass:"active",to:"apiguide",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav__link",children:"API Guide"})}),Object(h.jsx)("li",{className:"nav__item",children:Object(h.jsx)(N.Link,{activeClass:"active",to:"downloads",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav__link",children:"Downloads"})}),Object(h.jsx)("li",{className:"nav__item",children:Object(h.jsx)(N.Link,{activeClass:"active",to:"aboutus",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav__link",children:"About Us"})})]})})]})]})})},f=(c(52),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{id:"page2",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"main-title main-title--blue",children:"API Guide"}),Object(h.jsx)("p",{className:"description",children:"We have created a free and easy to use service to detect benign and malicious URL for internet citizens to add bit of security check in their application or business needs."}),Object(h.jsx)("p",{className:"api-text--title",children:"Direction to consume API :"}),Object(h.jsxs)("div",{className:"container-col",children:[Object(h.jsxs)("div",{className:"hero__container ",children:[Object(h.jsx)("h3",{className:"api-text--white",children:"How to call API ?"}),Object(h.jsxs)("div",{className:"column",children:[Object(h.jsx)("h3",{className:"col-heading",children:"Request URL"}),Object(h.jsx)("div",{className:"content",children:Object(h.jsx)("p",{className:"content-text",children:"https://linkscrutinizer.herokuapp.com/url"})}),Object(h.jsx)("h3",{className:"col-heading",children:"Request Header(Optional)"}),Object(h.jsx)("div",{className:"content content--padding",children:Object(h.jsx)("p",{className:"content-text",children:'{"Content-Type":"application/json"}'})}),Object(h.jsx)("h3",{className:"col-heading",children:"Request Body"}),Object(h.jsx)("div",{className:"content content--padding-2",children:Object(h.jsx)("p",{className:"content-text",children:'{\n"url":"www.google.com"}'})})]})]}),Object(h.jsxs)("div",{className:"hero__container",children:[Object(h.jsx)("h3",{className:"api-text--white api-text--margin",children:"API response:"}),Object(h.jsx)("p",{className:"content--response",children:"The API will provide you formatted json object as shown in right box that you can parse and apply to your application."}),Object(h.jsx)("div",{className:"content content--2",children:Object(h.jsx)("p",{className:"content-text",children:'{"isBenign": true, "scrutiny":{"autonomousSystem": "AS15169 GOOGLE", "host": "www.google.com", "status": "URL is Safe you are good to go with !"}}'})})]})]})]})})})}),w=(c(53),c(30)),y=c.n(w),k=(c(54),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{id:"page-3",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(y.a,{children:[Object(h.jsxs)("div",{className:"main-col",children:[Object(h.jsxs)("div",{className:"hero__container1",children:[Object(h.jsxs)("div",{className:"col",children:[Object(h.jsxs)("p",{className:"app-desc",children:["Link Scrutinizer",Object(h.jsx)("br",{}),"Android App"]}),Object(h.jsx)("p",{className:"app-desc app-desc-font",children:"Available on Google Play store"})]}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("iframe",{controls:"0",src:"https://www.youtube.com/embed/dSsKU1MRDco",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]}),Object(h.jsx)("div",{className:"dow",children:Object(h.jsx)("a",{href:"https://play.google.com/store/apps/details?id=mobile.app.linkscrutinizer",target:"_blank",children:Object(h.jsx)("button",{className:"download app-desc",children:"Download Now"})})})]}),Object(h.jsxs)("div",{className:"main-col",children:[Object(h.jsxs)("div",{className:"hero__container1",children:[Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("p",{className:"app-desc app-desc-mod",children:"Use directly from your chrome browser"}),Object(h.jsx)("p",{className:"app-desc app-desc-font",children:"Link Scrutinizer extension is also available on chrome web store."})]}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("div",{className:"video--color"})})]}),Object(h.jsx)("div",{className:"dow",children:Object(h.jsx)("a",{href:"https://chrome.google.com/webstore/category/extensions",target:"_blank",children:Object(h.jsx)("button",{className:"download app-desc",children:"Add to Chrome"})})})]})]})})})})}),_=(c(55),c(13)),L=c.n(_),S=c(12),A=c.n(S),R=c(14),U=c.n(R),z=c.p+"static/media/mascot-removebg-preview.3f68dfa9.png",F=function(){var e=(new Date).getFullYear();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{id:"about-us",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"About Us"}),Object(h.jsxs)("div",{className:"para-container",children:[Object(h.jsx)("p",{className:"para",children:"We have set a goal to develop a real time system to prevent users from most common and serious threat of malicious URLs to cybersecurity by detecting such URLs using machine learning."}),Object(h.jsx)("p",{className:"para",children:"Malicious URL or website is a common and serious threat to cybersecurity. Malicious URLs host unsolicited content like spam, phishing, drive-by exploits, etc. and lure unsuspecting users to become victims of scams like monetary loss, theft of private information, and malware installation, and cause losses of billions of dollars every year. It is imperative to detect and act on such threats in a timely manner. Traditionally, this detection is done mostly through the usage of blacklists. However,blacklists cannot be exhaustive, and lack the ability to detect newly generated malicious URLs. To improve the generality of malicious URL detectors, machine learning techniques have been explored with increasing attention in recent years."}),Object(h.jsx)("p",{className:"para",children:"And hence we have created a real time formal solution which is available as website on which you are reading about us, an android application and also a chrome extension. All these based on machine learning approach which assure 90% accuracy on scrutinizing of URLs."}),Object(h.jsx)("p",{className:"para",children:"#besafewithus"})]}),Object(h.jsx)("p",{className:"title",children:"meet our team"}),Object(h.jsxs)("div",{className:"member-container",children:[Object(h.jsxs)("div",{className:"member",children:[Object(h.jsx)("div",{className:"circle",children:Object(h.jsx)("img",{src:z,className:"mem-logo",alt:"member-logo"})}),Object(h.jsx)("p",{className:"name",children:"Adarsh Pednekar"}),Object(h.jsxs)("div",{className:"logos",children:[Object(h.jsx)("a",{href:"https://github.com/adarshped1525",children:Object(h.jsx)(A.a,{className:"logo"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/adarsh-pednekar-11ba55183/",children:Object(h.jsx)(L.a,{className:"logo"})}),Object(h.jsx)(U.a,{className:"logo"})]})]}),Object(h.jsxs)("div",{className:"member",children:[Object(h.jsx)("div",{className:"circle",children:Object(h.jsx)("img",{src:z,className:"mem-logo",alt:"member-logo"})}),Object(h.jsx)("p",{className:"name",children:"Sushant Pagam"}),Object(h.jsxs)("div",{className:"logos",children:[Object(h.jsx)("a",{href:"https://github.com/SushantP199",children:Object(h.jsx)(A.a,{className:"logo"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/sushant-pagam/",children:Object(h.jsx)(L.a,{className:"logo"})}),Object(h.jsx)("a",{children:Object(h.jsx)(U.a,{className:"logo"})})]})]}),Object(h.jsxs)("div",{className:"member",children:[Object(h.jsx)("div",{className:"circle",children:Object(h.jsx)("img",{src:z,className:"mem-logo",alt:"member-logo"})}),Object(h.jsx)("p",{className:"name",children:"Suraj Prabhu"}),Object(h.jsxs)("div",{className:"logos",children:[Object(h.jsx)("a",{href:"https://github.com/sungod12",children:Object(h.jsx)(A.a,{className:"logo"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/suraj-prabhu-228475188/",children:Object(h.jsx)(L.a,{className:"logo"})}),Object(h.jsx)("a",{children:Object(h.jsx)(U.a,{className:"logo"})})]})]})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"bottom-container",children:[Object(h.jsx)("p",{className:"bottom-text bottom-text-1",children:"teamlinkscrutinizer@gmail.com"}),Object(h.jsx)("p",{className:"bottom-text",children:"privacy policy"}),Object(h.jsxs)("p",{className:"bottom-text",children:["copyright ",e," @ link scrutinizer "]})]})]})})})},P=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{}),Object(h.jsx)("div",{id:"home",children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{id:"apiguide",children:Object(h.jsx)(f,{})}),Object(h.jsx)("div",{id:"downloads",children:Object(h.jsx)(k,{})}),Object(h.jsx)("div",{id:"aboutus",children:Object(h.jsx)(F,{})})]})};i.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.a3066362.chunk.js.map