var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire2d84;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequire2d84=o),o("kyEFX").register(JSON.parse('{"5ZPII":"index.2acd658a.js","4Bpux":"amazon.99ff1432.jpg","3BxUJ":"applebooks.d7160da7.jpg","8rAoK":"bookstore.1c5b9883.jpg","l9VsI":"index.e087d496.js"}'));const a=document.querySelector(".categories__list");fetch("https://books-backend.p.goit.global/books/category-list").then((e=>e.json())).then((e=>{const t=e.sort(((e,t)=>e.list_name<t.list_name?-1:e.list_name>t.list_name?1:0)).map((({list_name:e})=>`<li class = "categories__item"><a href = "#" data-category = "${e}" class = "categories__link">${e}</a></li>`));return a.insertAdjacentHTML("beforeend",t.join("")),t}));o("bUb57");const s=document.querySelector(".modal-start"),l=document.querySelector(".backdrop-start"),i=document.querySelector(".login-btn"),r=document.querySelector(".modal__button-x"),c=document.querySelector("div[data-modal-start]"),d=document.querySelector('label[for="user_person"]'),m=document.querySelector("#user_person"),u=document.querySelector('label[for="user_email"]'),p=document.querySelector("#user_email"),g=document.querySelector('label[for="user_password"]'),y=document.querySelector("#user_password");function _(){let e=!0;return""===m.value.trim()?(m.classList.add("modal-form__field-input--error"),e=!1):m.classList.remove("modal-form__field-input--error"),""!==p.value.trim()&&p.checkValidity()?p.classList.remove("modal-form__field-input--error"):(p.classList.add("modal-form__field-input--error"),e=!1),""===y.value.trim()||y.length<5||y.value.length>12?(y.classList.add("modal-form__field-input--error"),e=!1):y.classList.remove("modal-form__field-input--error"),e}m.addEventListener("focus",(e=>console.log(d.style.top="5%"))),p.addEventListener("focus",(e=>console.log(u.style.top="5%"))),y.addEventListener("focus",(e=>console.log(g.style.top="5%"))),s.addEventListener("submit",(function(e){e.preventDefault(),_()?(console.log("Form send!"),l.classList.add("is-hidden-start"),l.style.display="none"):console.log("Error!")})),i.addEventListener("click",(e=>{s.style.display="block"})),r.addEventListener("click",(e=>{s.style.display="none"})),window.addEventListener("keydown",(e=>{"Escape"===e.key&&("Escape"!==e.key||s.contains(document.activeElement)||(s.classList.add("is-hidden-start"),l.classList.add("is-hidden-start")))})),l.addEventListener("click",(e=>{s&&e.target===l&&(s.classList.add("is-hidden-start"),l.classList.add("is-hidden-start"))})),i.addEventListener("click",(e=>{"none"===c.style.display&&(c.removeAttribute("style"),s.removeAttribute("style"))}));const f=document.querySelector('button[aria-label="link sing up"]'),b=document.querySelector('button[aria-label="link sing in"]');let h;f.classList.add("active"),f.addEventListener("click",(function(e){e.preventDefault(),s.style.height="516px",f.classList.add("active"),b.classList.remove("active"),s.classList.remove("sing-in"),d.style.display="block",m.style.display="block",m.parentElement.parentElement.classList.remove("is-invalid"),m.parentElement.parentElement.classList.add("is-valid"),s.style.height="516px"})),b.addEventListener("click",(function(e){e.preventDefault(),b.classList.add("active"),f.classList.remove("active"),s.classList.remove("sing-in"),s.style.height="450px",d.style.display="none",m.style.display="none",m.parentElement.parentElement.classList.add("is-invalid"),m.parentElement.parentElement.classList.remove("is-valid"),_()})),(()=>{const e={openModalBtnSingUp:document.querySelector("button[data-modal-start-open--sing-up]"),closeModalBtnXClose:document.querySelector("button[data-modal-start-close]"),formEl:document.querySelector("[data-modal-start]"),menu:document.querySelector("[data-menu]"),menuList:document.querySelector(".nav-list"),loginBtn:document.querySelector(".login-btn"),logOutBtn:document.querySelector(".login-btn-out")};function t(){e.formEl.classList.toggle("is-hidden-start"),e.formEl.classList.toggle("display"),e.formEl.classList.contains("display")&&(e.logOutBtn.classList.add("nav-hidden"),e.loginBtn.classList.add("nav-hidden"),e.menuList.classList.add("nav-hidden"),e.menu.classList.add("mobile-is-hidden"))}e.openModalBtnSingUp.addEventListener("click",t),e.closeModalBtnXClose.addEventListener("click",t)})(),o("fF5e9"),o("lsbs5"),o("i9TW1");var v;v=new URL(o("kyEFX").resolve("4Bpux"),import.meta.url).toString();const L=new URL(v);var k;k=new URL(o("kyEFX").resolve("3BxUJ"),import.meta.url).toString();const E=new URL(k);var S;S=new URL(o("kyEFX").resolve("8rAoK"),import.meta.url).toString();const T=new URL(S),H=document.querySelector(".pop__btn"),w=document.getElementById("bookInfoUrl"),M=document.getElementById("bookInfo"),I=document.getElementById("bookInform"),A=document.querySelector(".pop-text");function q(e){(async e=>{h=e;const t=await fetch(`https://books-backend.p.goit.global/books/${e}`);return await t.json()})(e).then((e=>{M.insertAdjacentHTML("afterbegin",`<li ${e._id}" >\n        <div class="modal-card__flex">\n          <div class="modal-card">\n          <img class="modal-card__image" src="${e.book_image}" alt="" />\n          \n        </div>\n        \n        </div>\n      </li>`),I.insertAdjacentHTML("afterbegin",`<div>\n          <h2 class="modal-card__title">${e.title}</h2>\n          <p class="modal-card__author">${e.author}</p>\n          <p class="modal-card__description">${e.description||"There is no description"}</p>\n        </div>`),e.buy_links.map((e=>{"Amazon"===e.name&&w.insertAdjacentHTML("beforeend",`<li class="pop_shop-item">\n                            <a\n                            class="pop_shop__link link"\n                            href="${e.url}"\n                            target="_blank"\n                            rel="noopener noreferrer"\n                            ><img\n                                class="modal_list-img"\n                                src="${L}" \n                                alt="amazon_shop_icon"/>\n                            </a>\n                        </li>`),"Apple Books"===e.name&&w.insertAdjacentHTML("beforeend",`<li class="pop_shop-item">\n                    <a\n                    class="pop_shop__link link"\n                    href="${e.url}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    ><img\n                        class="pop_list-img"\n                        src="${E}" \n                        alt="applebooks_shop_icon"\n                    />\n                    </a>\n                </li>`),"Bookshop"===e.name&&w.insertAdjacentHTML("beforeend",`<li class="pop_shop-item">\n                    <a\n                    class="pop_shop__link link"\n                    href="${e.url}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    ><img\n                        class="pop_list-img"\n                        src="${T}" \n                        alt="bookstore_shop_icon"\n                    />\n                    </a>\n                    </li>\n                    `)}))})),modal.style.display="block";document.getElementsByClassName("modal-btn")[0].onclick=function(){H.removeEventListener("click",$,!1),modal.style.display="none",w.innerHTML="",M.innerHTML="",I.innerHTML=""},window.addEventListener("keydown",(e=>{"Escape"===e.key&&(H.removeEventListener("click",$,!1),modal.style.display="none",w.innerHTML="",M.innerHTML="",I.innerHTML="")})),function(){H.dataset.id=h,null==localStorage.getItem("User-name")&&localStorage.setItem("User-name",JSON.stringify({name:"Not Authorized",email:"Not Authorized",listId:[]}));const e=localStorage.getItem("User-name");-1==JSON.parse(e).listId.indexOf(h)?(H.innerHTML="Add to shopping list",A.innerHTML=" "):(H.innerHTML="remove from the shopping lis",A.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.");H.addEventListener("click",$,!1)}()}window.onclick=function(e){e.target==modal&&(H.removeEventListener("click",$,!1),modal.style.display="none",w.innerHTML="",M.innerHTML="",I.innerHTML="")};const $=function(e){let t=H.dataset.id,n=localStorage.getItem("User-name"),o=JSON.parse(n),a=o.name,s=o.email;if(-1==o.listId.indexOf(t))o.listId.push(t),localStorage.setItem("User-name",JSON.stringify({name:a,email:s,listId:o.listId})),e.target.innerHTML="remove from the shopping list",A.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",H.removeEventListener("click",$,!1),H.addEventListener("click",$,!1);else{let n=o.listId.filter((e=>e!=t));localStorage.setItem("User-name",JSON.stringify({name:a,email:s,listId:n})),e.target.innerHTML="Add to shopping list",A.innerHTML="",H.removeEventListener("click",$,!1),H.addEventListener("click",$,!1)}};function B(e){return`\n  <ul class='bestseller-card'>\n  <li>\n    <div class = 'thumb'>\n      <img class='thumb__image' src='${e.book_image}' data-id='${e._id}' alt='${e.title}'/>\n        <div class="thumb__overlay">\n        <p class="thumb__overlay-text">QUICK VIEW</p>\n        </div> \n    </div>\n  </li>\n  <li>\n    <ul class='bestseller-card__meta'>\n      <li class='bestseller-card__title'>${e.title}</li>\n      <li class='bestseller-card__author'>${e.author}</li>\n    </ul\n  </li>\n  </ul>\n`}function j(){let e=document.querySelectorAll(".thumb__image");for(const t of e)t.addEventListener("click",(e=>{q(e.target.dataset.id)}))}const x={allCategoryContainer:document.querySelector(".bestSellers__container"),bestsellerContainer:document.querySelector(".bestSellers"),sectionTitle:document.querySelector(".section-title"),cardsQuantityByCategory:1,tabletWidth:768,pcWidth:1440};function U(){return null!=localStorage.getItem("selected-category")&&"undefined"!==localStorage.getItem("selected-category")||(localStorage.getItem("selected-category"),!1)}function C(){return document.documentElement.clientWidth}function R(){let e=document.querySelectorAll(".button__see-more");for(const t of e)t.addEventListener("click",(e=>{localStorage.setItem("selected-category",e.target.dataset.category),N()}))}function O(){let e=document.querySelectorAll(".categories__item"),t=document.querySelectorAll(".categories__link");for(const n of e)n.addEventListener("click",(e=>{for(const e of t)e.classList.remove("category-active");e.target.classList.add("category-active"),localStorage.getItem("selected-category")!==e.target.dataset.category&&(localStorage.setItem("selected-category",e.target.dataset.category),N())}))}const F=async()=>{if(U()){const e=await fetch(`https://books-backend.p.goit.global/books/category?category=${localStorage.getItem("selected-category")}`);return await e.json()}{const e=await fetch("https://books-backend.p.goit.global/books/top-books");return await e.json()}},W=async()=>{if(x.cardsQuantityByCategory=1,C()>=x.tabletWidth&&(x.cardsQuantityByCategory=3),C()>=x.pcWidth&&(x.cardsQuantityByCategory=5),U()){return await F().then((e=>e.map((e=>e))))}return await F().then((e=>e.map((e=>e.books.filter((e=>e.rank<=x.cardsQuantityByCategory))))))};async function N(){x.allCategoryContainer.innerHTML="",U()?(x.sectionTitle.innerHTML="",x.sectionTitle.insertAdjacentHTML("afterbegin",function(e){let t=e.split(" "),n=e.substr(t[0].length);return`<span class="section-title">${t[0]}</span>\n  <span class='section-title--highlight'>${n}</span>`}(localStorage.getItem("selected-category"))),async function(){const e=await W(),t=document.createElement("div");t.classList.add("category-container");for(let o=0;o<e.length;o++)t.insertAdjacentHTML("beforeend",`\n      <ul class='bestseller-card --margin'>\n      <li>\n        <div class = 'thumb'>\n          <img class='thumb__image' src='${(n=e[o]).book_image}' data-id='${n._id}' alt='${n.title}'/>\n            <div class="thumb__overlay">\n            <p class="thumb__overlay-text">QUICK VIEW</p>\n            </div> \n        </div>\n      </li>\n      <li>\n        <ul class='bestseller-card__meta'>\n          <li class='bestseller-card__title'>${n.title}</li>\n          <li class='bestseller-card__author'>${n.author}</li>\n        </ul\n      </li>\n      </ul>\n    `);var n;x.allCategoryContainer.insertAdjacentElement("beforeend",t),R(),j(),O()}()):async function(){const e=await W();let t;x.sectionTitle.innerHTML="",x.sectionTitle.insertAdjacentHTML("afterbegin",'<span>BestSellers<span><span class="section-title--highlight">Books</span>');for(let n=0;n<e.length;n++){const o=document.createElement("div");o.classList.add("category-container"),e[n].map((e=>{t=e.list_name,o.insertAdjacentHTML("beforeend",B(e))})),o.insertAdjacentHTML("afterbegin",`<h3 class="category-title">${t}</h3>`),o.insertAdjacentHTML("beforeend",`\n    <button class='button__see-more' type='button' name='See more' data-category='${t}'>See more</button>\n  `),x.allCategoryContainer.insertAdjacentElement("beforeend",o)}R(),j(),O()}()}N(),function(){let e;e=C()<768?375:C()>=768&&C()<1440?768:1440,addEventListener("resize",(t=>{(window.innerWidth>767&&e<768||window.innerWidth>1439&&e<1440||window.innerWidth<1440&&e>1439||window.innerWidth<768&&e>767)&&location.reload()}))}(),o("2ix2C"),o("lJ5oQ");
//# sourceMappingURL=index.2acd658a.js.map
