(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/default.b9dc8cd5.png"},function(e,t,a){e.exports=a.p+"static/media/default2.97645085.png"},,,,function(e,t,a){e.exports=a.p+"static/media/lightning.fd831b85.png"},,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),i=(a(22),a(6)),s=a(9),o=a(4),u=a(1),m=a(12),d=a.n(m),f=a(7),v=a.n(f),h=a(8),b=a.n(h),E=(a(23),a(5),0);var g=function(e){var t="https://robohash.org/set_set1/".concat(e.pid,"?size=150x150"),a=[v.a,v.a,b.a,b.a];return r.a.createElement("div",{className:"card grows"},r.a.createElement("div",{className:"card-back card-face"},r.a.createElement("img",{alt:"",src:d.a})),r.a.createElement("div",{className:"card-front card-face"},r.a.createElement("img",{className:"card-value",onError:function(e){e.target.setAttribute("src",a[E]),E++},src:t,alt:""}),r.a.createElement("h3",null,e.username.substring(0,8))))};var p={gridColumn:"1 / -1",display:"grid",justifyContent:"center",gridTemplateColumns:"repeat(6, 150px)",gridTemplateRows:"200px 200px 200px",gridGap:"1em"},y=function(e){var t=e.robots;return r.a.createElement("div",{style:p},t.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,username:e.username,pid:e.pid})})))},j=[{id:1,name:"",username:"Edward",email:""},{id:2,name:"",username:"Anders",email:""},{id:3,name:"",username:"Johan",email:""},{id:4,name:"",username:"Amelia",email:""},{id:5,name:"",username:"Anna",email:""},{id:6,name:"",username:"Simon",email:""},{id:7,name:"",username:"Mia",email:""},{id:8,name:"",username:"Ulf",email:""},{id:9,name:"",username:"Marie",email:""},{id:10,name:"",username:"Test",email:""}];var O=function(e){var t=e.totalClicks,a=e.seconds;return r.a.createElement("div",{className:"overlay victory"},r.a.createElement("div",{className:"overlay-text"},r.a.createElement("h1",null," Well done! "),r.a.createElement("h3",null," Total Score: ",1e3-t-a," "),r.a.createElement("br",null),r.a.createElement("h3",null," Click here to play again! ")))};var x=function(){return r.a.createElement("div",{className:"overlay visible"},r.a.createElement("div",{className:"overlay-text"},r.a.createElement("h1",null," Welcome! "),r.a.createElement("br",null),r.a.createElement("h2",null," Click here to start! ")))};var k={boxSizing:"border-box",padding:"10px",overflowY:"auto",border:"5px solid black",height:"90vh",width:"100wh",zIndex:"1"},S=function(e){return r.a.createElement("div",{style:k},e.children)},C=a(13),A=a(14),L=a(15),T=a(16),w=function(e){Object(T.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(A.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Something went wrong "):this.props.children}}]),a}(n.Component);var N={height:"10vh"},M={lineHeight:"10vh",display:"grid",gridTemplateColumns:"15% 10% 50% 15% 10%"},q=function(e){var t=e.seconds,a=e.totalClicks;return r.a.createElement("div",{style:N},r.a.createElement("div",{style:M},r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement("h2",null,"Clicks:")),r.a.createElement("div",null,r.a.createElement("h2",null,a)),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"RoboMemory ")),r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement("h2",null,"Time:")),r.a.createElement("div",null,r.a.createElement("h2",null,t))))},I=(a(24),null),z=!0,J=[];var B=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),m=Object(u.a)(c,2),d=m[0],f=m[1],v=Object(n.useState)(0),h=Object(u.a)(v,2),b=h[0],E=h[1],g=Object(n.useState)(0),p=Object(u.a)(g,2),k=p[0],C=p[1],A=Object(n.useState)(0),L=Object(u.a)(A,2),T=L[0],N=L[1],M=Object(n.useState)(!1),B=Object(u.a)(M,2),R=B[0],W=B[1],D=function(e,t){18===(J=[].concat(Object(o.a)(J),[e,t])).length&&(C(0),document.querySelector(".overlay.victory").classList.add("visible"),J=[],W(!1))},G=function(e){return e.getElementsByClassName("card-value")[0].src},H=function(e){var t,a;G(e)===G(I)?D(e,I):(t=e,a=I,z=!0,setTimeout((function(){t.classList.remove("visible"),a.classList.remove("visible"),z=!1}),750)),I=null},U=function(e){(function(e){return!z&&!J.includes(e)&&e!==I})(e)&&(0===k&&C(1),N((function(e){return e+1})),e.classList.add("visible"),I?H(e):I=e)},Y=function(){E(0),N(0),d.forEach((function(e){return e.classList.add("visible")})),function(){for(var e=0;e<d.length;e++)d[e].style.order=e+1}(),z=!0,setTimeout((function(){!function(){for(var e=0;e<d.length;e++)d[e].style.order=e+1;for(var t=d.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=d[a].style.order;d[a].style.order=d[t].style.order,d[t].style.order=n}}(),z=!1}),2500),setTimeout((function(){d.forEach((function(e){return e.classList.remove("visible")}))}),2e3),function(){var e=document.querySelectorAll(".card-back");setTimeout((function(){Object(o.a)(e).map((function(e){return e.classList.add("hideCards")}))}),2e3),setTimeout((function(){Object(o.a)(e).map((function(e){return e.classList.remove("hideCards")}))}),3e3)}()};return Object(n.useEffect)((function(){var e=j.slice(0,9).map((function(e){var t=10*(e.id-1)+Math.ceil(10*Math.random());return[Object(s.a)({},e,{pid:String(t)}),Object(s.a)({},e,{id:Number(e.id)+9,pid:String(t)})]}));l(e.flat(1))}),[]),Object(n.useEffect)((function(){if(a.length){var e=Array.from(document.querySelectorAll(".card")),t=Array.from(document.querySelectorAll(".overlay"));if(t.length){var n,r=Object(i.a)(t);try{var l=function(){var e=n.value;e.addEventListener("click",(function(){e.classList.remove("visible"),W(!0)}))};for(r.s();!(n=r.n()).done;)l()}catch(u){r.e(u)}finally{r.f()}}if(e.length){var c,s=Object(i.a)(e);try{var o=function(){var e=c.value;e.addEventListener("click",(function(){U(e)}))};for(s.s();!(c=s.n()).done;)o()}catch(u){s.e(u)}finally{s.f()}f(e)}}}),[a]),Object(n.useEffect)((function(){R&&Y()}),[R]),Object(n.useEffect)((function(){var e=setInterval((function(){E((function(e){return e+k}))}),1e3);return function(){return clearInterval(e)}}),[k]),a.length?r.a.createElement("div",null,r.a.createElement(q,{seconds:b,totalClicks:T}),r.a.createElement(x,null),r.a.createElement(S,null,r.a.createElement(w,null,r.a.createElement(y,{robots:a}))),r.a.createElement(O,{seconds:b,totalClicks:T})):r.a.createElement("h1",null," Loading ")};a(25);c.a.render(r.a.createElement(B,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.3c1aee3d.chunk.js.map