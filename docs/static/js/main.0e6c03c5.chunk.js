(this["webpackJsonplink-scrutinizer"]=this["webpackJsonplink-scrutinizer"]||[]).push([[0],{27:function(e,s,c){},79:function(e,s,c){},80:function(e,s,c){},81:function(e,s,c){},82:function(e,s,c){},84:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c(4),n=c.n(a),i=c(24),l=c.n(i),r=c(31),o=c(26),j=c(100),d=(c(27),c(32)),m=c.n(d),b=c(0),h=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m.a,{id:"circleicon",className:"circleicon--green"}),Object(b.jsx)("p",{className:"result result--safe",children:e.status})]})},u=c(38),x=c.n(u),O=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x.a,{id:"circleicon",className:"circleicon--red"}),Object(b.jsx)("p",{className:"result result--unsafe",children:e.status})]})},p=c(39),g=c.n(p),N=function(){var e=Object(t.useState)(""),s=Object(o.a)(e,2),c=s[0],a=s[1],n=Object(t.useState)(!1),i=Object(o.a)(n,2),d=i[0],m=i[1],u=function(){var e=Object(r.a)(l.a.mark((function e(){var s,c,t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),m(!0),s=document.querySelector("input").value,c={method:"POST",body:JSON.stringify({url:s}),headers:{"Content-Type":"application/json"}},"https://linkscrutinizer.herokuapp.com/url",e.next=7,fetch("https://linkscrutinizer.herokuapp.com/url",c);case 7:return t=e.sent,e.next=10,t.json();case 10:n=e.sent,a(n.scrutiny.status),m(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"main-title",children:"Scrutinize the Benign and Malicious URLs"}),Object(b.jsxs)("div",{className:"hero_container",children:[Object(b.jsx)("input",{type:"text",placeholder:"Enter your URL here"}),Object(b.jsx)("button",{className:"search",onClick:u,children:Object(b.jsx)(j.a,{className:"arrow-icon"})})]}),Object(b.jsxs)("div",{className:"result-container",children:[Object(b.jsx)(g.a,{type:"Circles",color:"white",visible:d}),""!==c?c.includes("Safe")?Object(b.jsx)(h,{status:c}):Object(b.jsx)(O,{status:c}):null]}),Object(b.jsx)("p",{className:"bottom",children:"#beSafewithus!"})]})})},v=c(5),f=c.p+"static/media/website_logo.4f38d06f.png",w=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("header",{children:[Object(b.jsx)("button",{className:"nav-toggle",onFocus:function(){var e=document.querySelector(".nav-toggle"),s=document.querySelector(".nav");e.addEventListener("click",(function(){s.classList.toggle("nav--visible")}))},"aria-label":"open navigation",children:Object(b.jsx)("span",{className:"hamburger"})}),Object(b.jsxs)("div",{className:"container row",children:[Object(b.jsx)("a",{className:"logo",href:"#",children:Object(b.jsx)("img",{src:f,className:"hero__img",alt:"link scrutinizer logo"})}),Object(b.jsx)("nav",{className:"nav",children:Object(b.jsxs)("ul",{className:"nav__list nav__list--primary",children:[Object(b.jsx)("li",{className:"nav__item",children:Object(b.jsx)(v.Link,{activeClass:"active",to:"homepage",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav__link",children:"Home"})}),Object(b.jsx)("li",{className:"nav__item",children:Object(b.jsx)(v.Link,{activeClass:"active",to:"apiguide",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav__link",children:"API Guide"})}),Object(b.jsx)("li",{className:"nav__item",children:Object(b.jsx)(v.Link,{activeClass:"active",to:"downloads",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav__link",children:"Downloads"})}),Object(b.jsx)("li",{className:"nav__item",children:Object(b.jsx)(v.Link,{activeClass:"active",to:"aboutus",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav__link",children:"About Us"})})]})})]})]})})},A=(c(79),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAABCtJREFUSEull1msnWMUhp/XVDMNMd8QUvMQFRW0VRFUpOJGGkNdCGIoqmlrTGMeGxFDKCH0QiIlIiW9aBopTaouhJBolKIU1ZaiaVFL3mP9ze/rt/9j56xkZ5+z9/ev91trvetdawsgIrYBTgGuBY4GdgS29XfAn8Aa4GXgFUk/5+dDelNEGOAm4L4E+8t3Kbz6Yn69CNwFfCOpPNPXRQw8DpgPbAY+ARYBv+b/f6e3g4DxwAGOGrgNWDEUcAO/mU4/AC6U9G159YjYPgEvyMhfBWZI+qKvMFuHDfwlsD8wS9KtvRxFhGt8EbDRqQaelzRrKMDfA3u4dpLu7wB2fccC8wBHbMINA3YAlC8/7pKZgF9L+r2XP0e8GtgVuFPSwx3AjwI/AS8BxwMTgGPzWRPU4Cacu2AF8BrwtqQfaj4N7JvvDNwuyc6rFhGnAcuTDzOAQ4B1wC9AQ0I/a/bvCTjaF4DZklaWTg28FtipAY4I33y7CrqjOSxb6kRgITAnO6AEtiZcCfyW558uwbeKOCKONGMrwM8AR2Ufm+UTJL1bS09EnAU8BRwKmEPmx+OSVjXnDey67dKK2H29oOLwMuBg4IZ0NkqS+30ri4jRwJOpgv7+x0z7I5KMRw3Yt7yq4s/CYRG5EfgKGC3JqawBnw48keRrvjeXnrNCSlrfZvUAuSJiX8CpKu094OKUV7N2TAfwqQls9rfNbeYL3WNgp2G3Vqp927kVYA+QIzLVgwEfmOfOTuKaE9aK3YENzmgNuKvGbqHJgNVubEfE7gyLi7vDf9sM/gBwCfBpDdiHnYHS3JdTgZsBa/QZBo4IK9nJtVq3Prs8Fe/67IpNBm4ks6nxca5BxZF12SJicrWB3QHu2y6bKOmNiLgOuNuyWgO2Hr9V8XJFCohTbQUblxGbcK5paRYVz3a/z5O0PCLMEwcVBnZTW+KaiA9P5paOLH9muyP+HDgzgc8H3AmleQa83xaNFvBAH38HDAdmSnqwK18R4bHpGreBvTi4BKUtBaZLsrQOWAn8MTAip85kSaZ71XoAP9ZSqPZzn+WA+LAX8EzgDsDj617goxxt5U7lulrRphQRjwH2qtz0D2A9sAlYJmldGbH3qGeBc7K53aM+XAL7giOzxm1yzS6ksZYtr0kL/wOcuT8BmGT9BfbL5m+Ge+PI0Xoslu3kRXFUZzPBpYB3u2u2sDqBrS77AGa0GW6Vaa8zPrYEmJgi4iExoNW5pe49CPBiz+OIaARkcyNngzy3hZVm9C25Ap3Uayx2kHM64M7Y0C+wdfahFPzxkt75Xzf+t5W813lfOw9Y2i+wFep1wKvPsvxZYwHyZln7ZWH/3sG805n9FiBPqav7Bfb5cwGvQe4GD47aT54yEQb3XmfuOOopfQEnEc32Y4BpgOetnQ5mzoYJadmdI2ntP8l73ZBB6WTHAAAAAElFTkSuQmCC"),y=function(){function e(e){var s=document.getElementById(e).innerHTML,c=document.createElement("textarea");document.body.appendChild(c),c.value=s,console.log(s),c.select(),document.execCommand("copy"),alert("Copied to clipboard"),document.body.removeChild(c)}return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{id:"page2",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"main-title main-title--blue",children:"API Guide"}),Object(b.jsx)("p",{className:"description",children:"We have created a free and easy to use service to detect benign and malicious URL for internet citizens to add bit of security check in their application or business needs."}),Object(b.jsx)("p",{className:"api-text--title",children:"Direction to consume API :"}),Object(b.jsxs)("div",{className:"container-col",children:[Object(b.jsxs)("div",{className:"hero__container ",children:[Object(b.jsx)("h3",{className:"api-text--white",children:"How to call API ?"}),Object(b.jsxs)("div",{className:"column",children:[Object(b.jsx)("h3",{className:"col-heading",children:"Request URL"}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("p",{className:"content-text",id:"one",children:"https://linkscrutinizer.herokuapp.com/url"}),Object(b.jsx)("button",{className:"copy-button",onClick:function(){return e("one")},children:Object(b.jsx)("img",{src:A,className:"copy-logo"})})]}),Object(b.jsx)("h3",{className:"col-heading",children:"Request Header(Optional)"}),Object(b.jsxs)("div",{className:"content content--padding",children:[Object(b.jsx)("p",{className:"content-text",id:"two",children:'{"Content-Type":"application/json"}'}),Object(b.jsx)("button",{className:"copy-button",onClick:function(){return e("two")},children:Object(b.jsx)("img",{src:A,className:"copy-logo"})})]}),Object(b.jsx)("h3",{className:"col-heading",children:"Request Body"}),Object(b.jsxs)("div",{className:"content content--padding-2",children:[Object(b.jsx)("p",{className:"content-text",id:"three",children:'{"url":"www.google.com"}'}),Object(b.jsx)("button",{className:"copy-button",onClick:function(){return e("three")},children:Object(b.jsx)("img",{src:A,className:"copy-logo"})})]})]})]}),Object(b.jsxs)("div",{className:"hero__container",children:[Object(b.jsx)("h3",{className:"api-text--white api-text--margin",children:"API response:"}),Object(b.jsx)("p",{className:"content--response",children:"The API will provide you formatted json object as shown in right box that you can parse and apply to your application."}),Object(b.jsx)("div",{className:"content content--2",children:Object(b.jsx)("p",{className:"content-text",children:'{"isBenign": true, "scrutiny":{"autonomousSystem": "AS15169 GOOGLE", "host": "www.google.com", "status": "URL is Safe you are good to go with !"}}'})})]})]})]})})})},k=(c(80),c(40)),B=c.n(k),C=(c(81),c.p+"static/media/mobile1.5f473b4e.png"),L=c.p+"static/media/mobile2.37636d72.png",S=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{id:"page-3",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(B.a,{children:[Object(b.jsxs)("div",{className:"main-col",children:[Object(b.jsxs)("div",{className:"hero__container1",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("p",{className:"app-desc",children:["Link Scrutinizer",Object(b.jsx)("br",{}),"Android App"]}),Object(b.jsx)("p",{className:"app-desc app-desc-font",children:"Available on Google Play store"})]}),Object(b.jsxs)("div",{className:"col animation",children:[Object(b.jsx)("img",{src:C,alt:"mobile-screen-1",className:"image"}),Object(b.jsx)("img",{src:L,alt:"mobile-screen-2",className:"image"})]})]}),Object(b.jsx)("div",{className:"dow",children:Object(b.jsx)("a",{href:"https://play.google.com/store/apps/details?id=mobile.app.linkscrutinizer",target:"_blank",children:Object(b.jsx)("button",{className:"download app-desc",children:"Download Now"})})})]}),Object(b.jsxs)("div",{className:"main-col",children:[Object(b.jsxs)("div",{className:"hero__container1",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("p",{className:"app-desc app-desc-mod",children:"Use directly from your chrome browser"}),Object(b.jsx)("p",{className:"app-desc app-desc-font",children:"Link Scrutinizer extension is also available on chrome web store."})]}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("div",{className:"video--color"})})]}),Object(b.jsx)("div",{className:"dow",children:Object(b.jsx)("a",{href:"https://chrome.google.com/webstore/category/extensions",target:"_blank",children:Object(b.jsx)("button",{className:"download app-desc",children:"Add to Chrome"})})})]})]})})})})},z=(c(82),c(16)),G=c.n(z),R=c(15),U=c.n(R),P=c(17),F=c.n(P),_=c.p+"static/media/mascot-removebg-preview.3f68dfa9.png",E=function(){var e=(new Date).getFullYear();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{id:"about-us",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"About Us"}),Object(b.jsxs)("div",{className:"para-container",children:[Object(b.jsx)("p",{className:"para",children:"We have set a goal to develop a real time system to prevent users from most common and serious threat of malicious URLs to cybersecurity by detecting such URLs using machine learning."}),Object(b.jsx)("p",{className:"para",children:"Malicious URL or website is a common and serious threat to cybersecurity. Malicious URLs host unsolicited content like spam, phishing, drive-by exploits, etc. and lure unsuspecting users to become victims of scams like monetary loss, theft of private information, and malware installation, and cause losses of billions of dollars every year. It is imperative to detect and act on such threats in a timely manner. Traditionally, this detection is done mostly through the usage of blacklists. However,blacklists cannot be exhaustive, and lack the ability to detect newly generated malicious URLs. To improve the generality of malicious URL detectors, machine learning techniques have been explored with increasing attention in recent years."}),Object(b.jsx)("p",{className:"para",children:"And hence we have created a real time formal solution which is available as website on which you are reading about us, an android application and also a chrome extension. All these based on machine learning approach which assure 90% accuracy on scrutinizing of URLs."}),Object(b.jsx)("p",{className:"para",children:"#besafewithus"})]}),Object(b.jsx)("p",{className:"title",children:"meet our team"}),Object(b.jsxs)("div",{className:"member-container",children:[Object(b.jsxs)("div",{className:"member",children:[Object(b.jsx)("div",{className:"circle",children:Object(b.jsx)("img",{src:_,className:"mem-logo",alt:"member-logo"})}),Object(b.jsx)("p",{className:"name",children:"Adarsh Pednekar"}),Object(b.jsxs)("div",{className:"logos",children:[Object(b.jsx)("a",{href:"https://github.com/adarshped1525",children:Object(b.jsx)(U.a,{className:"logo"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/adarsh-pednekar-11ba55183/",children:Object(b.jsx)(G.a,{className:"logo"})}),Object(b.jsx)(F.a,{className:"logo"})]})]}),Object(b.jsxs)("div",{className:"member",children:[Object(b.jsx)("div",{className:"circle",children:Object(b.jsx)("img",{src:_,className:"mem-logo",alt:"member-logo"})}),Object(b.jsx)("p",{className:"name",children:"Sushant Pagam"}),Object(b.jsxs)("div",{className:"logos",children:[Object(b.jsx)("a",{href:"https://github.com/SushantP199",children:Object(b.jsx)(U.a,{className:"logo"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/sushant-pagam/",children:Object(b.jsx)(G.a,{className:"logo"})}),Object(b.jsx)("a",{children:Object(b.jsx)(F.a,{className:"logo"})})]})]}),Object(b.jsxs)("div",{className:"member",children:[Object(b.jsx)("div",{className:"circle",children:Object(b.jsx)("img",{src:_,className:"mem-logo",alt:"member-logo"})}),Object(b.jsx)("p",{className:"name",children:"Suraj Prabhu"}),Object(b.jsxs)("div",{className:"logos",children:[Object(b.jsx)("a",{href:"https://github.com/sungod12",children:Object(b.jsx)(U.a,{className:"logo"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/suraj-prabhu-228475188/",children:Object(b.jsx)(G.a,{className:"logo"})}),Object(b.jsx)("a",{children:Object(b.jsx)(F.a,{className:"logo"})})]})]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"bottom-container",children:[Object(b.jsx)("p",{className:"bottom-text bottom-text-1",children:"teamlinkscrutinizer@gmail.com"}),Object(b.jsx)("p",{className:"bottom-text",children:"privacy policy"}),Object(b.jsxs)("p",{className:"bottom-text",children:["copyright ",e," @ link scrutinizer "]})]})]})})})},I=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{}),Object(b.jsx)("div",{id:"home",children:Object(b.jsx)(N,{})}),Object(b.jsx)("div",{id:"apiguide",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{id:"downloads",children:Object(b.jsx)(S,{})}),Object(b.jsx)("div",{id:"aboutus",children:Object(b.jsx)(E,{})})]})};n.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(I,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.0e6c03c5.chunk.js.map