const button=document.querySelector("Button");
const body=document.querySelector("body");
const color=["red","blue","green","yellow","orange","purple","pink","black","white","violet","black","maroon","indigo","gold","skyblue","grey"]
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
});

