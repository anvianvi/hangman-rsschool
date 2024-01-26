(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();let i=6,u="error",h=0,g=0;function f(t){i=t}function L(t){u=t}function b(t){t<7?h=t:console.log("game end")}function C(t){t===0?(g=t,console.log("you win")):g=t}async function v(t){try{const n=await(await fetch(`https://random-word-api.vercel.app/api?words=1&length=${t}`)).json();if(n&&n.length>0)return n[0];console.log("Error fetching word.")}catch(e){console.error("Error fetching word:",e)}}const y=["strung","snazzy","granny","velcro","hurray","mumble","dollar","mangle","exodus","paging","lather","shimmy","anthem","halved","shorty","senate","snooze","lively","antler","glance","repeal","bottom","raging","sanded","jingle","appear","anemia","botany","canyon","rocket"];function N(){const t=document.querySelector(".game-field-container"),e=document.createElement("div");e.className="gallows-box";const n=document.createElement("div");n.className="column";const r=document.createElement("div");r.className="girder";const o=document.createElement("div");o.className="diagonal";const a=document.createElement("div");a.className="rope";const c=document.createElement("div");c.className="parts parts-head",c.id="parts-head";const d=document.createElement("div");d.className="parts parts-body",d.id="parts-body";const s=document.createElement("div");s.className="parts parts-left-arm",s.id="parts-left-arm";const l=document.createElement("div");l.className="parts parts-right-arm",l.id="parts-right-arm";const p=document.createElement("div");p.className="parts parts-left-leg",p.id="parts-left-leg";const m=document.createElement("div");m.className="parts parts-right-leg",m.id="parts-right-leg",e.appendChild(n),e.appendChild(r),e.appendChild(o),e.appendChild(a),e.appendChild(c),e.appendChild(d),e.appendChild(s),e.appendChild(l),e.appendChild(p),e.appendChild(m),t.appendChild(e),console.log(1)}function w(){document.addEventListener("keyup",function(t){let e=t.code.slice(3).toLocaleLowerCase();E(e)})}function E(t){if(console.log(u),console.log(t),u.includes(t)){console.log("there is this smpol in word");let e=S(t);console.log(e),T(e,t)}else b(h+1),x(h)}function x(t){let e=[];e.push(document.querySelector("#parts-head")),e.push(document.querySelector("#parts-body")),e.push(document.querySelector("#parts-left-arm")),e.push(document.querySelector("#parts-right-arm")),e.push(document.querySelector("#parts-left-leg")),e.push(document.querySelector("#parts-right-leg"));for(let n=0;n<t;n++)e[n].style.opacity=1}function S(t){const e=[];for(let n=0;n<u.length;n++)u[n]===t&&e.push(n);return e}function T(t,e){t.forEach(n=>{console.log(n);let r=document.getElementById(`letter-${n}`);r.textContent=e,r.style.borderBottom=0,C(g-1)})}function B(){const t=[];for(let r=65;r<=90;r++){const o=String.fromCharCode(r);t.push(o)}return t}function W(){const t=B(),e=document.createElement("div");e.className="keyboard",e.id="keyboard",t.forEach(n=>{const r=document.createElement("div");r.className="key",r.id=`${n}`,r.textContent=n,e.appendChild(r),r.addEventListener("click",()=>{console.log(n),E(n.toLocaleLowerCase())})}),document.getElementById("right-part").appendChild(e)}function k(){const t=document.createElement("div");t.className="word-box";for(let e=0;e<u.length;e++)t.appendChild(A(e));document.getElementById("right-part").appendChild(t)}function A(t){const e=document.createElement("div");return e.className="letter-box",e.id=`letter-${t}`,e}async function q(){let t=await v(i)||y[Math.floor(Math.random()*y.length)];L(t),C(u.length),G()}function G(){const t=document.createElement("div");t.className="game-field-container",t.id="game-field-container",document.body.replaceChildren(t),console.log(u),N();const e=document.createElement("div");e.className="rightpart",e.id="right-part",t.appendChild(e),k(),W(),w()}function I(){const t=document.createElement("div");t.className="start-screen-container";const e=document.createElement("h1");e.innerText="Hello in Hangman!",t.appendChild(e);const n=document.createElement("p");n.innerHTML="We will think a word and then you should guess it letter by letter";const r=document.createElement("p");r.innerHTML="You will have 6 attempts to guess and then you lose. Good Luck!",t.appendChild(n),t.appendChild(r);const o=document.createElement("div");o.className="buttons-container",t.appendChild(o);const a=document.createElement("span");a.innerText="Word Length:";const c=document.createElement("button");c.className="button",c.innerText="-";const d=document.createElement("span");d.className="wordLength",d.id="wordLength",d.innerText=`${i}`;const s=document.createElement("button");s.className="button",s.innerText="+",o.appendChild(a),o.appendChild(c),o.appendChild(d),o.appendChild(s);const l=document.createElement("button");l.className="button",l.innerText="Start",t.appendChild(l),document.body.replaceChildren(t),c.addEventListener("click",function(){i>4&&(f(i-1),p())}),s.addEventListener("click",function(){i<10&&(f(i+1),p())});function p(){d.innerText=i}l.addEventListener("click",function(){q()})}I();
