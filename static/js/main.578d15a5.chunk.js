(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/bravo.ac3dceec.gif"},,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){var n={"./apple.png":12,"./avocado.png":13,"./banana.png":14,"./corn.png":15,"./lemon.png":16,"./lettuce.png":17,"./onion.png":18,"./strawberry.png":19};function c(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=i,e.exports=c,c.id=11},function(e,t,a){e.exports=a.p+"static/media/apple.0a2a3411.png"},function(e,t,a){e.exports=a.p+"static/media/avocado.56e8eabd.png"},function(e,t,a){e.exports=a.p+"static/media/banana.944da2e9.png"},function(e,t,a){e.exports=a.p+"static/media/corn.411d4325.png"},function(e,t,a){e.exports=a.p+"static/media/lemon.2c7096b5.png"},function(e,t,a){e.exports=a.p+"static/media/lettuce.ba36bf41.png"},function(e,t,a){e.exports=a.p+"static/media/onion.78415daa.png"},function(e,t,a){e.exports=a.p+"static/media/strawberry.10c41a10.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),r=a.n(i),o=a(5),l=a(1);function s(){var e=0;return function(e){for(var t=e.slice(0),a=0;a<e.length-1;a++){var n=Math.floor(Math.random()*(a+1)),c=t[a];t[a]=t[n],t[n]=c}return t}(["apple","avocado","banana","corn","lemon","lettuce","onion","strawberry"].reduce((function(t,a){return t.push({id:e++,value:a}),t.push({id:e++,value:a}),t}),[]))}var d=function(e){var t=e.id,n=e.value,i=e.width,r=e.height,o=e.flipped,l=e.solved,s=e.disabled,d=e.handleClick,u=e.children;return c.a.createElement("div",{className:"card",style:{width:i,height:r},onClick:function(){return s?null:d(t)}},c.a.createElement("img",{style:{width:i,height:r,opacity:o||l?1:0},src:o||l?a(11)("./".concat(n,".png")):null,alt:""}),u)},u=function(e){var t=e.cards,a=e.flipped,n=e.solved,i=e.disabled,r=e.handleClick;return c.a.createElement("div",{className:"board-section"},t.map((function(e){return c.a.createElement(d,{key:e.id,id:e.id,value:e.value,width:100,height:100,flipped:a.includes(e.id),solved:n.includes(e.id),handleClick:r,disabled:i||n.includes(e.id)})})))},m=function(e){return c.a.createElement("button",{onClick:e.onClick,className:"button"},e.children)},f=a(4),p=a.n(f),b=function(e){var t=e.click,a=e.time,n=e.setModal,i="".concat(a/60<10?"0".concat((a/60).toFixed(0)):(a/60).toFixed(0),":").concat(a%60<10?"0".concat((a%60).toFixed(0)):(a%60).toFixed(0));return c.a.createElement("div",{id:"overlay",className:"modal-overlay",onClick:function(){return n(!1)}},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h4",null,"You did it!"),c.a.createElement("img",{src:p.a,alt:"bravo"}),c.a.createElement("p",null,t/2," clicks - ",i)))},v=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(0),d=Object(l.a)(r,2),f=d[0],p=d[1],v=Object(n.useState)(!1),h=Object(l.a)(v,2),g=h[0],E=h[1],O=Object(n.useState)([]),x=Object(l.a)(O,2),j=x[0],k=x[1],y=Object(n.useState)([]),N=Object(l.a)(y,2),w=N[0],C=N[1],F=Object(n.useState)([]),S=Object(l.a)(F,2),I=S[0],M=S[1],T=Object(n.useState)(!1),D=Object(l.a)(T,2),J=D[0],L=D[1],R=Object(n.useState)(!1),U=Object(l.a)(R,2),_=U[0],A=U[1];Object(n.useEffect)((function(){k(s())}),[]),Object(n.useEffect)((function(){f>=1&&E(!0)}),[f]),Object(n.useEffect)((function(){if(g){var e=setInterval((function(){i(a+1)}),1e3);return function(){return clearInterval(e)}}}),[g,a]),Object(n.useEffect)((function(){j&&16===I.length&&(E(!1),A(!0))}),[j,I]);var B=function(e){return w.includes(e)},Y=function(e){var t=j.find((function(t){return t.id===e})),a=j.find((function(e){return w[0]===e.id}));return t.value===a.value},q=function(){C([]),L(!1)};return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"board"},c.a.createElement("header",{className:"board-header"},c.a.createElement("div",{style:{alignItems:"flex-start"}},c.a.createElement("h5",{className:"board-title"},"Time"),c.a.createElement("p",{className:"board-stats"},a/60<10?"0".concat((a/60).toFixed(0)):(a/60).toFixed(0),":",a%60<10?"0".concat((a%60).toFixed(0)):(a%60).toFixed(0))),c.a.createElement("div",{style:{alignItems:"flex-start"}},c.a.createElement("h5",{className:"board-title"},"Clicks"),c.a.createElement("p",{className:"board-stats",style:{marginLeft:"39px"}},(f/2).toFixed(0)))),c.a.createElement(u,{cards:j,flipped:w,disabled:J,solved:I,handleClick:function(e){if(L(!0),0===w.length)C([e]),L(!1);else{if(B(e))return;C([w[0],e]),Y(e)?(M([].concat(Object(o.a)(I),[w[0],e])),q()):setTimeout(q,1e3)}p(f+1)}}),c.a.createElement("footer",{className:"board-footer"},c.a.createElement(m,{onClick:function(){i(0),p(0),E(!1),M([])}},"RESTART"))),_&&c.a.createElement(b,{click:f,time:a,setModal:A}))};a(20);r.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.578d15a5.chunk.js.map