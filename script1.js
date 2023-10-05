const check = document.getElementById("check");
console.log(check);
check.addEventListener("click", function () {
  const text = document.getElementById("text");
  if (text.value.length <= 3) {
    alert("you need write min 3 character");
    text.value = "";
    return;
  }
  let div = document.createElement("div");
  let div1 = document.createElement("div");
  let remove = document.createElement("button");
  let p = document.createElement("p");
  const removeImg = document.createElement("img");
  removeImg.src = "./delete_3405244.png";
  removeImg.style.width = "24px";
  removeImg.style.height = "24px";
  remove.addEventListener("click", function () {
    this.parentElement.parentElement.remove();
  });
  remove.appendChild(removeImg);
  remove.classList.add("remove");
  p.textContent = text.value;
  div.style.width = "28.2vw";
  div.style.height = "7.5vh";
  div.style.backgroundColor = "#473838";
  p.style.fontFamily = "cursive";
  p.style.color = "wheat";
  p.style.fontSize = "28px";
  div1.style.display = "flex";
  div1.style.flexDirection = "row";
  div1.style.alignItems = "center";
  div1.style.width = "27.2vw";
  div1.style.height = "7.5vh";
  div1.style.justifyContent = "space-between";
  remove.style.background = "none";
  div1.appendChild(p);
  div1.appendChild(remove);
  div.appendChild(div1);
  const pahust = document.getElementById("pahust");
  pahust.appendChild(div);
  pahust.style.marginRight = "131px";
  text.value = "";
});
const images = [
        {0:'istockphoto-1206587771-612x612.jpg'},
        {1:'lands-endslide__800x600.jpg'},
        {2:'sunset.jpg'},
        {3:'pexels-lady-escabia-1774303.jpg'}
    ]
    const next = document.getElementById("next")
    const nkar=document.getElementById("nkar")
    let activeId =0
    next.addEventListener("click",function (){ 
        
        ++activeId
        if(activeId>3){
            activeId=0
        }
        for(let i=0;i<images.length;i++){
            for(let key in images[i]){
                if(key==activeId){
            activId=key
            nkar.src=images[i][key]
            return activeId
                
                }
            }
        }
    })
    const prevois = document.getElementById("prevois")
    prevois.addEventListener("click",function(){
        --activeId
        if(activeId<0){
            activeId=3
        }
        for(let i=images.length-1;i>0;i--){
            for(let key in images[i]){
                if(key==activeId){
                    nkar.src=images[i][key]
                    return activeId
                }
            }
        }
    })