(this.webpackJsonppetpet=this.webpackJsonppetpet||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/happy.55db9858.png"},,,,function(e,t,n){e.exports=n.p+"static/media/foodBowl.ca70f5f6.png"},function(e,t,n){e.exports=n.p+"static/media/washtub.064675d7.png"},function(e,t,n){e.exports=n.p+"static/media/poop.d9686bac.png"},function(e,t,n){e.exports=n.p+"static/media/bathSound.b2041793.mp3"},function(e,t,n){e.exports=n.p+"static/media/eatSound.e036d31d.mp3"},function(e,t,n){e.exports=n.p+"static/media/lol.1f8bb200.mp3"},function(e,t,n){e.exports=n.p+"static/media/pickPoop.4c0696ef.mp3"},function(e,t,n){e.exports=n.p+"static/media/sad.eec99f7b.png"},function(e,t,n){e.exports=n.p+"static/media/netural.bee15c3a.png"},,,,function(e,t,n){e.exports=n(44)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(19),o=n.n(r),c=(n(38),n(13)),p=n(29),l=n(10),s=n(9),u=(n(39),n(30)),h=n(4),d=(n(40),n(31)),m=function(e){var t=e.color,n=e.percentage,a=e.label;return i.a.createElement("div",null,i.a.createElement(d.a,{variant:t,now:n,label:a}))},b=function(e){var t=e.gameStore;return Object(h.d)((function(){return i.a.createElement("div",null,i.a.createElement(m,{color:t.hunger.color,percentage:t.hunger.percentage,label:"".concat(t.hunger.name,": ").concat(t.hunger.percentage)}),i.a.createElement("br",null),i.a.createElement(m,{color:t.happiness.color,percentage:t.happiness.percentage,label:"".concat(t.happiness.name,": ").concat(t.happiness.percentage)}),i.a.createElement("br",null),i.a.createElement(m,{color:t.dirtiness.color,percentage:t.dirtiness.percentage,label:"".concat(t.dirtiness.name,": ").concat(t.dirtiness.percentage)}))}))},f=n(14),g=function(e){var t=e.petPet,n=e.image;return i.a.createElement(l.a,{className:"justify-content-xs-center"},i.a.createElement(s.a,{xs:{span:8,offset:2},md:{span:6,offset:3}},i.a.createElement(f.a,{onClick:t,src:n,alt:"Pet"})))},y=n(20),j=n.n(y),O=n(21),w=n.n(O),E=function(e){var t=e.feedPet,n=e.cleanPet;return i.a.createElement(l.a,{className:"justify-content-md-center"},i.a.createElement(s.a,{md:3,xs:6},i.a.createElement(f.a,{onClick:t,alt:"Food Bowl",src:j.a,className:"align-self-center"})),i.a.createElement(s.a,{md:{span:3,offset:6},xs:6},i.a.createElement(f.a,{onClick:n,alt:"Wash Tub",src:w.a})))};function v(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}var S,A,k,R,z,P,x,F,H,C,B,I,D,N,M,W,T,J,Y,q,$,G,K,L,Q,U,V,X=function(e){return i.a.createElement("div",{id:"poop-area"},e.children)},Z=n(22),_=n.n(Z),ee=n(23),te=n.n(ee),ne=n(24),ae=n.n(ne),ie=n(25),re=n.n(ie),oe=n(26),ce=n.n(oe),pe=function(e){var t=e.score;return i.a.createElement("div",null,i.a.createElement("img",{src:_.a,className:"poop",id:"hiddenPoop",alt:"Poop"}),i.a.createElement("div",{className:"gameOver"},i.a.createElement("h2",null,"Your pet died from being burried in it's own crap... Are you sure you're ready to be a pet owner?"),i.a.createElement("h3",null,"Your Final Score: ",t),i.a.createElement("h4",null,"Click the poop to restart (maybe that will teach you how to cleanup after your pet.)")),i.a.createElement("audio",{id:"bathSound"},i.a.createElement("source",{src:te.a})),i.a.createElement("audio",{id:"eatSound"},i.a.createElement("source",{src:ae.a})),i.a.createElement("audio",{id:"laughSound"},i.a.createElement("source",{src:re.a})),i.a.createElement("audio",{id:"pickPoopSound"},i.a.createElement("source",{src:ce.a})))},le=Object(c.b)("gameStore")((function(e){var t=e.gameStore,n=Object(a.useState)(1e3*t.poopRate),r=Object(u.a)(n,2),o=r[0],c=r[1];Object(a.useEffect)((function(){var e=document.getElementById("poop-area").clientHeight,n=document.getElementById("poop-area").clientWidth;t.poopStore.updatePoopArea(e,n),t.poopStore.poopArea=document.getElementById("poop-area")}),[]);var p=function(){document.getElementById("eatSound").play(),t.updateAttribute(t.hunger,-15),t.updateAttribute(t.happiness,5),t.recentlyFed=t.recentlyFed+1},l=function(){for(document.getElementById("bathSound").play();t.poopStore.poops>0;)t.poopStore.poopArea.removeChild(t.poopStore.poopArea.lastChild),t.poopStore.poops-=1;t.dirtiness.percentage=0,t.isHungry?t.updateAttribute(t.happiness,50):t.updateAttribute(t.happiness,100)},s=function(){document.getElementById("laughSound").play(),t.updateAttribute(t.happiness,5)};v((function(){t.updateAttributes(),t.score=t.score+1}),1e3),v((function(){t.poopStore.createPoop(),function(){var e=1e3*t.poopRate-500*t.recentlyFed;e<=0&&(e=250),c(e),t.updateRecentlyFed(-1),console.log(e),console.log(t.recentlyFed)}()}),o);return v((function(){if(t.poopStore.poops>5){for(;t.poopStore.poopArea.hasChildNodes();)t.poopStore.poopArea.removeChild(t.poopStore.poopArea.lastChild);!function(){for(var e=setTimeout((function(){}),0);e>0;e--)window.clearInterval(e),window.clearTimeout(e),window.cancelAnimationFrame&&window.cancelAnimationFrame(e)}();var e=document.querySelector(".gameOver").cloneNode(!0),n=document.getElementById("hiddenPoop").cloneNode(!0);n.style.display="block",n.onclick=function(){window.location.reload()},e.style.display="block",t.poopStore.poopArea.appendChild(e),t.poopStore.poopArea.appendChild(n)}}),6e3),Object(h.d)((function(){return i.a.createElement("div",null,i.a.createElement(pe,{score:t.score}),i.a.createElement(X,null,i.a.createElement(b,{gameStore:t}),i.a.createElement("h3",null,"Score: ",t.score),i.a.createElement(g,{petPet:s,image:t.image}),i.a.createElement(E,{feedPet:p,cleanPet:l})))}))})),se=n(2),ue=n(11),he=n(3),de=(n(15),n(1)),me=(S=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(ue.a)(this,e),Object(se.a)(this,"name",A,this),Object(se.a)(this,"color",k,this),Object(se.a)(this,"percentage",R,this);var n=t.name,a=t.percentage,i=t.color;this.name=n||"status",this.percentage=a,this.color=i||"success"},A=Object(he.a)(S.prototype,"name",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=Object(he.a)(S.prototype,"color",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=Object(he.a)(S.prototype,"percentage",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S),be=(z=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(ue.a)(this,e),Object(se.a)(this,"height",P,this),Object(se.a)(this,"width",x,this),Object(se.a)(this,"poops",F,this),Object(se.a)(this,"poopArea",H,this),Object(se.a)(this,"updatePoopArea",C,this),Object(se.a)(this,"removePoop",B,this),Object(se.a)(this,"createPoop",I,this);var n=t.height,a=t.width,i=t.poopArea;this.height=n,this.width=a,this.poops=0,this.poopArea=i},P=Object(he.a)(z.prototype,"height",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=Object(he.a)(z.prototype,"width",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=Object(he.a)(z.prototype,"poops",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=Object(he.a)(z.prototype,"poopArea",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=Object(he.a)(z.prototype,"updatePoopArea",[de.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){e.height=t,e.width=n}}}),B=Object(he.a)(z.prototype,"removePoop",[de.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.poopArea.removeChild(t),e.poops=e.poops-1}}}),I=Object(he.a)(z.prototype,"createPoop",[de.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Math.floor(Math.random()*e.width),n=Math.floor(Math.random()*e.height),a=document.getElementById("hiddenPoop").cloneNode(!0);a.style.width="50px",a.style.height="50px",a.style.left="".concat(t,"px"),a.style.top="".concat(n,"px"),a.style.display="block",a.onclick=function(){e.removePoop(a),document.getElementById("pickPoopSound").play()},e.poops=e.poops+1,e.poopArea.appendChild(a)}}}),z),fe=n(27),ge=n.n(fe),ye=n(28),je=n.n(ye),Oe=n(16),we=n.n(Oe),Ee={gameStore:new(D=de.f.bound,N=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(ue.a)(this,e),Object(se.a)(this,"hunger",M,this),Object(se.a)(this,"happiness",W,this),Object(se.a)(this,"dirtiness",T,this),Object(se.a)(this,"image",J,this),Object(se.a)(this,"poopStore",Y,this),Object(se.a)(this,"recentlyFed",q,this),Object(se.a)(this,"score",$,this),this.hungerRate=5,this.happinessRate=-2,this.dirtinessRate=3,this.poopRate=3,this.isHungry=!1,this.isDirty=!1,Object(se.a)(this,"checkHunger",G,this),Object(se.a)(this,"checkDirtiness",K,this),Object(se.a)(this,"checkHappiness",L,this),Object(se.a)(this,"updateAttributes",Q,this),Object(se.a)(this,"updateAttribute",U,this),Object(se.a)(this,"updateRecentlyFed",V,this);var a=n.hunger,i=n.happiness,r=n.dirtiness;this.hunger=a||new me({name:"Hunger",percentage:0,color:"danger"}),this.happiness=i||new me({name:"Happiness",percentage:100,color:"success"}),this.dirtiness=r||new me({name:"Dirtiness",percentage:0,color:"secondary"}),this.poopStore=new be,this.image=we.a,this.recentlyFed=0,this.score=0,this.checkDirtiness(),Object(de.n)((function(){return t.hunger.percentage}),(function(){return t.checkHunger()})),Object(de.n)((function(){return t.poopStore.poops}),(function(){return t.checkDirtiness()})),Object(de.n)((function(){return t.happiness.percentage}),(function(){return t.checkHappiness()}))},M=Object(he.a)(N.prototype,"hunger",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=Object(he.a)(N.prototype,"happiness",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=Object(he.a)(N.prototype,"dirtiness",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=Object(he.a)(N.prototype,"image",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=Object(he.a)(N.prototype,"poopStore",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=Object(he.a)(N.prototype,"recentlyFed",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=Object(he.a)(N.prototype,"score",[de.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=Object(he.a)(N.prototype,"checkHunger",[de.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){100!==e.hunger.percentage||e.isHungry?e.hunger.percentage<100&&e.isHungry&&(e.happinessRate=e.happinessRate+e.hungerRate,e.isHungry=!1):(e.happinessRate=e.happinessRate+-e.hungerRate,e.isHungry=!0)}}}),K=Object(he.a)(N.prototype,"checkDirtiness",[de.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.dirtinessRate=e.poopStore.poops,100!==e.dirtiness.percentage||e.isDirty?e.dirtiness.percentage<100&&e.isDirty&&(e.happinessRate=e.happinessRate+e.dirtinessRate,e.isDirty=!1):(e.happinessRate=e.happinessRate+-e.dirtinessRate,e.isDirty=!0)}}}),L=Object(he.a)(N.prototype,"checkHappiness",[de.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.happiness.percentage<=30?e.image=ge.a:e.happiness.percentage>60?e.image=we.a:e.image=je.a}}}),Q=Object(he.a)(N.prototype,"updateAttributes",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.updateAttribute(e.hunger,e.hungerRate),e.updateAttribute(e.happiness,e.happinessRate),e.updateAttribute(e.dirtiness,e.dirtinessRate)}}}),U=Object(he.a)(N.prototype,"updateAttribute",[de.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(e,t){e.percentage+t>=100?e.percentage=100:e.percentage+t<=0?e.percentage=0:e.percentage=e.percentage+t}}}),V=Object(he.a)(N.prototype,"updateRecentlyFed",[de.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.recentlyFed+t<=0?e.recentlyFed=0:e.recentlyFed=e.recentlyFed+t}}}),N)},ve=function(){return i.a.createElement(c.a,Ee,i.a.createElement(p.a,{className:"App-Container"},i.a.createElement(l.a,null,i.a.createElement(s.a,{xs:12},i.a.createElement(le,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.e09d72f1.chunk.js.map