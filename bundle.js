!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";function n(){l.classList.add("is-active");var e=document.querySelector(".modal-card");setTimeout(function(){return e.style.transform="translateY(0px)"})}function o(e){"Create"===e.target.textContent?""!==m.value?(i.push(a(m.value)),c(i),l.classList.remove("is-active"),p.style.transform="translateY(-500px)"):alert("Enter a project name or cancel"):"Cancel"===e.target.textContent?(l.classList.remove("is-active"),p.style.transform="translateY(-500px)"):"delete"===e.target.className&&(l.classList.remove("is-active"),p.style.transform="translateY(-500px)")}function a(e){function t(e){this.todos.push({todoText:e,checked:!1})}function r(e){v.innerHTML="",e.forEach(function(e,t){var r=document.createElement("div");r.setAttribute("class","item"),v.appendChild(r);var n=document.createElement("input");n.type="checkbox",r.appendChild(n);var o=document.createElement("p");r.appendChild(o),o.textContent=e.todoText})}function n(){this.createTodos(this.todos)}return{projectName:e,todos:[],addTodo:t,createTodos:r,renderTodos:n}}function c(e){f.innerHTML="",e.forEach(function(e,t){var r=document.createElement("a");r.setAttribute("class","button project"),r.textContent=e.projectName,r.dataset.projectIndex=t,f.appendChild(r)})}function s(e){"button project"===e.target.className&&(h.classList.add("is-active"),y=parseInt(e.target.dataset.projectIndex),x=i[y],setTimeout(function(){return b.style.transform="translateY(0px)"}))}function u(){x.addTodo(q.value),q.value="",x.renderTodos()}var i=[],d=document.querySelector(".button.create.is-primary"),l=document.querySelector(".modal");d.addEventListener("click",n);var m=document.querySelector(".input.project.is-primary"),p=document.querySelector(".modal-card");p.addEventListener("click",o);var f=document.querySelector(".menu-items"),v=document.querySelector(".inbox"),y=0,x=void 0,h=document.querySelector(".modal.task"),b=document.querySelector(".modal-card.task");document.querySelector(".menu").addEventListener("click",s);var q=document.querySelector(".input.todo.is-primary");document.querySelector(".button.add.is-success").addEventListener("click",u),i.push(a("Astravisual")),c(i)}]);