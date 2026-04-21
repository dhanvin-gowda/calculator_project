const ex=document.querySelector(".box2");
const di=document.querySelectorAll(".text1,.text2");
function extract(){
    if (window.innerWidth<800){
        ex.style.display="none"
    }
    else{
        ex.style.display="grid"
    }
};
window.addEventListener('load',extract);
window.addEventListener('resize',extract);
extract()
const calci=document.querySelectorAll(".a2");
const calci_1=document.querySelectorAll(".a1");
const doc=document.querySelector(".box1");
calci.forEach(el=>{
    document.addEventListener("keydown",(event)=>{
        if (event.key===el.innerText){
            doc.innerText+=el.innerText;
            el.style.background="#011127";
            console.log("yes")
        }
        if (event.key==="Enter"){
            doc.innerText+=("="+eval(doc.innerText))
        }
    })
    document.addEventListener("keyup",(event_2)=>{
        if (event_2.key===el.innerText){
            el.style.background="#06306a";
        }
    })
})
calci_1.forEach(el=>{
    document.addEventListener("keydown",(event)=>{
        if (event.key===el.innerText){
            doc.innerText+=el.innerText;
            el.style.background="#011127";
            console.log("yes")
        }
        if (event.key==="Enter"){
            doc.innerText+=("="+eval(doc.innerText))
        }
    })
    document.addEventListener("keyup",(event_2)=>{
        if (event_2.key===el.innerText){
            el.style.background="#011e46";
        }
    })
})
calci.forEach(el=>{
    el.addEventListener("click",()=>{
       doc.innerText+=el.innerText;
    })
})
calci_1.forEach(el=>{
    el.addEventListener("click",()=>{
       doc.innerText+=el.innerText
    })
})
document.querySelector(".er").addEventListener("click",()=>{
    doc.innerText+=("= "+eval(doc.innerText))
})
document.querySelector(".a5").addEventListener("click",()=>{
    doc.innerText=doc.innerText.slice(0,-1)
    console.log('yes')
})
document.addEventListener("keydown",(event)=>{
    if (event.key==="Backspace"){
        doc.innerText=doc.innerText.slice(0,-1)
        document.querySelector(".a5").style.background="#011127";
        }
})
document.addEventListener("keyup",(event)=>{
    if (event.key==="Backspace"){
        document.querySelector(".a5").style.background="#011e46";
        }
})
const clear=document.querySelectorAll(".a3,.a4");
clear.forEach(num=>{
    num.addEventListener("click",()=>{
        doc.innerText=null;
    })
})
document.querySelector(".a9").addEventListener("click",()=>{
    if (doc.innerText<0){
        doc.innerText=Math.abs(doc.innerText)
                
    }
    else if (doc.innerText>0){
        doc.innerText=-(doc.innerText)
    }
})
document.querySelector(".a6").addEventListener("click",()=>{
    if (doc.innerText==="0"){
        doc.innerText="Cannot divide by zero"
    }
    else{
    doc.innerText="= "+(1/doc.innerText)
    }
})
document.querySelector(".a7").addEventListener("click",()=>{
    doc.innerText="= "+(doc.innerText)**2
})
document.querySelector(".a8").addEventListener("click",()=>{
    doc.innerText="= "+Math.sqrt(doc.innerText)
})