
class Fish{
    fishcounter=0;
    className = "swimmable";
    spawn_fish(time){
        if(Math.floor(Math.random() * 2)>0){ //50/50 chance to spawn
            this.fishcounter++;
            let elem = document.getElementsByClassName(this.className)[0];
            const newDiv = document.createElement("div");
            newDiv.classList.add("fish");
            let fish_variant = Math.floor(Math.random() * 2);
            switch(fish_variant){
                case 0: newDiv.classList.add("f2");break;
                case 1: newDiv.classList.add("f1");break;
            }
            newDiv.style.top = Math.floor(Math.random() * elem.clientHeight)+"px";
            newDiv.style.scale = Math.floor(Math.random() * 5+6)*10+"%";
            let opacity = Math.floor(Math.random() * 10)*10+10;
            newDiv.style.opacity = opacity+"%";
            if(opacity>70){
                newDiv.style.zIndex = 3;
            }
            else{
                newDiv.style.zIndex = 1;
            }
            elem.appendChild(newDiv);
            setTimeout( function() { elem.removeChild(newDiv);this.fishcounter--;}, time);
        }
    }
    spawn_babel(time){
        const newDiv = document.createElement("div");
        var isremoved = false;
            newDiv.classList.add("babel");
            newDiv.style.left = Math.floor(Math.random() * 100)+"vw";
            newDiv.style.scale = Math.floor(Math.random() * 5+5)*10+"%";
            newDiv.style.rotate = Math.floor(Math.random() * 10)-5+"deg";
            newDiv.style.bottom = Math.floor(Math.random() * 100)+"vh";
            let elem = document.getElementsByClassName("swimmable")[0];
            elem.appendChild(newDiv);
            newDiv.onclick = function(){elem.removeChild(newDiv); isremoved=true;};
            newDiv.ondragend = function(){elem.removeChild(newDiv); isremoved=true;};
            newDiv.ondragenter = function(){elem.removeChild(newDiv); isremoved=true;};
            setTimeout( function() { if(!isremoved) elem.removeChild(newDiv)}, time);
    }
}
function init(){
    var fish = new Fish();
    setInterval( function(){
        fish.spawn_fish(60*1000);
        //console.log(fish.fishcounter);
        console.clear();
        
    },900);
}
//init();
