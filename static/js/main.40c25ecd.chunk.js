(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{27:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){"use strict";i.r(t);var n=i(4),c=i.n(n),o=i(30),s=i.n(o),a=(i(38),i(39),i(15)),l=i(9),r=i(31),h=i.n(r),u=(i(27),i(2)),d=function(){var e=Object(l.f)(),t=function(t){console.log(t),"popup_closed_by_user"===t.error&&console.log("Don't close the pop up window or if same error occur again then clear cache memory and trylogging in again"),console.log(t.Ts.Ne),function(e){var t={fName:e.Ts.RT[0].toUpperCase()+e.Ts.RT.substring(1).toLowerCase()+" "+e.Ts.TR[0].toUpperCase()+e.Ts.TR.substring(1).toLowerCase(),emailID:e.Ts.Et,emailLogin:!0,mobileValidation:!1};console.log(t),localStorage.setItem("contacts",JSON.stringify(t))}(t),e.push("/mobile_verification")};return Object(u.jsxs)("div",{className:"gmaillogin",children:[Object(u.jsx)("h1",{children:"Login with Gmail "}),Object(u.jsx)(h.a,{className:"gmailloginButton",clientId:"802066088065-ogkll96k3ciimk7jhkp85pps3otfp05r.apps.googleusercontent.com",buttonText:"Login",onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"}),Object(u.jsx)(a.b,{className:"facebookButton",to:"/loginfacebook",activeClassName:"selected",children:"Login with facebook"})]})},j=i(33),b=i.n(j),m=function(){var e=Object(l.f)();return Object(u.jsxs)("div",{className:"gmaillogin",children:[Object(u.jsx)("h1",{children:"Login with facebook "}),Object(u.jsx)(b.a,{appId:"883274949281896",autoLoad:!0,fields:"name,email,picture",onClick:function(e){console.log(e)},callback:function(t){console.log(t),console.log(t.name),function(e){var t={fName:e.name,emailID:e.email,emailLogin:!0,mobileValidation:!1};console.log(t),localStorage.setItem("contacts",JSON.stringify(t))}(t),e.push("/mobile_verification")}}),Object(u.jsx)(a.b,{className:"gmailButton",to:"/login",activeClassName:"selected",children:"Login with Gmail"})]})},p=i(18),g=i(26);g.a.initializeApp({apiKey:"AIzaSyDXp_WDeeYDmxRypq412XXaDYpxge7wLXA",authDomain:"shoppers-fest.firebaseapp.com",projectId:"shoppers-fest",storageBucket:"shoppers-fest.appspot.com",messagingSenderId:"651181600283",appId:"1:651181600283:web:99c74ae163ffe8da0352be"});var f=g.a,O=(i(50),JSON.parse(localStorage.getItem("contacts"))),x=function(){var e=Object(n.useState)(!0),t=Object(p.a)(e,2),i=t[0],c=t[1];Object(n.useEffect)((function(){O=JSON.parse(localStorage.getItem("contacts")),c(!i)}));var o=Object(l.f)(),s=Object(n.useRef)("");return null===O?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Please Verify Email"}),Object(u.jsx)("button",{onClick:function(){return o.push("/login")},children:"Click here for Email Verification"})]}):!0===O.emailLogin?Object(u.jsxs)("div",{className:"base",children:[Object(u.jsx)("h1",{children:"Verify your Mobile Number Here"}),Object(u.jsx)("h3",{children:"Please Enter Mobile Number with country code "}),Object(u.jsx)("input",{type:"text",ref:s,placeholder:"Example +919876543210"}),Object(u.jsx)("label",{}),Object(u.jsx)("div",{id:"recaptcha"}),Object(u.jsx)("button",{onClick:function(){var e=new f.auth.RecaptchaVerifier("recaptcha"),t=s.current.value;f.auth().signInWithPhoneNumber(t,e).then((function(e){var t=prompt("enter the otp","");null!==t&&e.confirm(t).then((function(e){console.log(e.user,"user"),document.querySelector("label").innerText=e.user.phoneNumber+"Number Verified",O.mobileValidation=!0,localStorage.setItem("contacts",JSON.stringify(O)),o.push("/dashboard")})).catch((function(e){return console.log("hahaah",e)}))})).catch((function(e){return console.log("haha",e)}))},children:"Send OTP"})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Please Verify Email"}),Object(u.jsx)("button",{onClick:function(){return o.push("/login")},children:"Click here for Email Verification"})]})},v=(i(51),[]),k=JSON.parse(localStorage.getItem("contacts")),y=function(){var e=Object(l.f)(),t=Object(n.useState)(null),i=Object(p.a)(t,2),c=i[0],o=i[1],s=Object(n.useState)(!0),a=Object(p.a)(s,2),r=a[0],h=a[1],d=Object(n.useState)(!1),j=Object(p.a)(d,2),b=j[0],m=j[1];Object(n.useEffect)((function(){k=JSON.parse(localStorage.getItem("contacts"))}));Object(n.useEffect)((function(){o({kind:"youtube#searchListResponse",etag:"xe5iatOwIAWxvxiej05sPGJmQQc",nextPageToken:"CAMQAA",regionCode:"IN",pageInfo:{totalResults:1442,resultsPerPage:3},items:[{kind:"youtube#searchResult",etag:"_cAMI2-ckZNJyG5fOOwglpG6zCE",id:{kind:"youtube#video",videoId:"lg6Jlh-bEhk"},snippet:{publishedAt:"2021-07-01T12:10:44Z",channelId:"UCMiJRAwDNSNzuYeN2uWa0pA",title:"How many Spy Cameras are Recording you right now?",description:"Spy cameras are only decreasing in size, and increasing in number - here's how to spot them! To find out which Tech company has the worst customer support: ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/lg6Jlh-bEhk/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/lg6Jlh-bEhk/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/lg6Jlh-bEhk/hqdefault.jpg",width:480,height:360}},channelTitle:"Mrwhosetheboss",liveBroadcastContent:"none",publishTime:"2021-07-01T12:10:44Z"}},{kind:"youtube#searchResult",etag:"7p7k0djZHmTBB12FHohg4iGBucI",id:{kind:"youtube#video",videoId:"QBTwzYKx-kE"},snippet:{publishedAt:"2021-06-24T10:36:45Z",channelId:"UCMiJRAwDNSNzuYeN2uWa0pA",title:"Who has the WORST Customer Service?",description:"Samsung vs OnePlus, Huawei, Xiaomi, Blackberry, OPPO, Vivo, Apple. Let's see which tech company has the best and worst Customer Support! To see one of ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/QBTwzYKx-kE/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/QBTwzYKx-kE/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/QBTwzYKx-kE/hqdefault.jpg",width:480,height:360}},channelTitle:"Mrwhosetheboss",liveBroadcastContent:"none",publishTime:"2021-06-24T10:36:45Z"}},{kind:"youtube#searchResult",etag:"0jWYnk_5XHRa4u-8gs43Of1qipM",id:{kind:"youtube#playlist",playlistId:"PLflqtq8EOGAL-kyctA1gHg2x-8sw3LSB8"},snippet:{publishedAt:"2017-12-03T16:38:57Z",channelId:"UCMiJRAwDNSNzuYeN2uWa0pA",title:"Battery Charge Tests",description:"",thumbnails:{default:{url:"https://i.ytimg.com/vi/1jMnpHtK1Zg/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/1jMnpHtK1Zg/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/1jMnpHtK1Zg/hqdefault.jpg",width:480,height:360}},channelTitle:"Mrwhosetheboss",liveBroadcastContent:"none",publishTime:"2017-12-03T16:38:57Z"}}]})}),[]);var g=function(e){e.index;var t=e.item;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"dashboardItems",children:[Object(u.jsx)("h3",{children:t.snippet.title}),Object(u.jsx)("img",{src:t.snippet.thumbnails.medium.url}),Object(u.jsx)("button",{onClick:function(){v.push(t),m(!b)},children:"Add to Cart"})]})})},f=function(e){var t=e.index,i=e.item;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"cartItems",children:[Object(u.jsx)("img",{src:i.snippet.thumbnails.default.url}),Object(u.jsx)("h3",{children:i.snippet.title}),Object(u.jsx)("button",{onClick:function(){v.splice(t,1),m(!b)},children:"Remove from Cart"})]})})};return null===k?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Please Verify Email"}),Object(u.jsx)("button",{onClick:function(){return e.push("/login")},children:"Click here for Email Verification"})]}):!0===k.emailLogin&&!0===k.mobileValidation?Object(u.jsx)("div",{children:r?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"container",children:["  ",Object(u.jsxs)("h2",{children:["Wellcome to Shoppers Fest ",k.fName," "]}),Object(u.jsxs)("h3",{children:["Email ID-",k.emailID]}),Object(u.jsx)("button",{onClick:function(){return h(!r)},children:"Show cart Items"}),Object(u.jsx)("button",{onClick:function(){return k={fName:!1,emailID:!1,emailLogin:!1,mobileValidation:!1},localStorage.setItem("contacts",JSON.stringify(k)),void e.push("/login")},children:"SignOut"})]}),c?c.items.map((function(e,t){return Object(u.jsx)(g,{index:t,item:e},t)})):Object(u.jsx)("div",{children:"No contacts found"})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{children:["Total Items in Cart=",v.length]}),Object(u.jsx)("button",{className:"toDashBoardButton",onClick:function(){return h(!r)},children:"Go to Dashboard"}),v.map((function(e,t){return Object(u.jsx)(f,{index:t,item:e},t)}))]})}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Please Verify Email"}),Object(u.jsx)("button",{onClick:function(){return e.push("/login")},children:"Click here for Email Verification"})]})};var w=function(){return Object(u.jsx)(a.a,{children:Object(u.jsx)("div",{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/login",children:Object(u.jsx)(d,{})}),Object(u.jsx)(l.a,{path:"/loginfacebook",children:Object(u.jsx)(m,{})}),Object(u.jsx)(l.a,{path:"/mobile_verification",children:Object(u.jsx)(x,{})}),Object(u.jsx)(l.a,{path:"/dashboard",children:Object(u.jsx)(y,{})}),Object(u.jsx)(l.a,{children:Object(u.jsx)(d,{})})]})})})},N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,53)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;i(e),n(e),c(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),N()}},[[52,1,2]]]);
//# sourceMappingURL=main.40c25ecd.chunk.js.map