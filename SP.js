 let p1 = document.querySelector(".para");
    let b1=document.querySelector(".btn");
    let b2=document.querySelector(".btn-2");
    let b3=document.querySelector(".btn-3");
    let b4=document.querySelector(".btn-4");
    let b5=document.querySelector(".reset");
    let b6=document.querySelector(".Theme");
    let h = document.querySelector("body");

    let inp = document.querySelector(".input-text");
    let sub = document.querySelector(".sub");

    sub.addEventListener("click",function(){
        p1.innerText = inp.value;
    })

    b1.addEventListener("click",function(){
        p1.classList.toggle("colorpara");
    });
     b2.addEventListener("click",function(){
        p1.classList.toggle("fontsizepara");
    });
     b3.addEventListener("click",function(){
        p1.classList.toggle("fontpara");
    });
     b4.addEventListener("click",function(){
        p1.classList.toggle("backpara");
    });
     b5.addEventListener("click",function(){
        p1.classList.remove("colorpara","fontsizepara","fontpara","backpara");
        p1.textContent="";
        h.classList.remove("blacktheme");
        inp.value = "";
        b6.textContent = "Dark Mode";
    });
     b6.addEventListener("click",function(){
        h.classList.toggle("blacktheme");
         b6.textContent = h.classList.contains("blacktheme") ? "☀️Light Mode" : "🌙Dark Mode";
    });
   