const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let o=null;t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),d.removeAttribute("disabled"),o=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log("nfdfn")}),1e3)})),d.addEventListener("click",(function(){t.removeAttribute("disabled"),d.setAttribute("disabled","disabled"),clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.5f35c062.js.map
