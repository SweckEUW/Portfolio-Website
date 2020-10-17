function newMenue(){
    document.getElementById("tree").style.display = "none";
    document.getElementById("new").style.display = "block";
}

function open1(){
    document.getElementById("inputNamen").style.opacity = "1";
    
    //Animate Buttons
    let height = document.getElementById("addedTeams").offsetHeight + document.getElementById("inputNamen").offsetHeight + 150;
    document.getElementById("Buttons").getElementsByTagName("img")[1].style.transform = "translateX(-180px) translateY("+height+"px) rotate(45deg)";
    document.getElementById("Buttons").getElementsByTagName("img")[0].style.transform = "translateX(180px) translateY("+height+"px)";

    document.getElementById("Buttons").getElementsByTagName("img")[1].onclick = function(){cancle();};
}

function cancle(){
    document.getElementById("inputNamen").style.opacity = "0";

    //Animate Buttons
    let height = document.getElementById("addedTeams").offsetHeight;
    document.getElementById("Buttons").getElementsByTagName("img")[1].style.transform = "translateX(0px) translateY("+height+"px) rotate(0deg)";
    document.getElementById("Buttons").getElementsByTagName("img")[0].style.transform = "translateX(0px) translateY("+height+"px)";

    document.getElementById("Buttons").getElementsByTagName("img")[1].onclick = function(){open1();};

    clearInput();
}

function done(){
    let teamNameHTML = document.createElement("h3");
    teamNameHTML.innerHTML = document.getElementById("inputNamen").getElementsByTagName("input")[0].value;

    let name1HTML = document.createElement("h4");
    name1HTML.innerHTML = document.getElementById("inputNamen").getElementsByTagName("input")[1].value;

    let name2HTML = document.createElement("h4");
    name2HTML.innerHTML = document.getElementById("inputNamen").getElementsByTagName("input")[2].value;

    let div = document.createElement("div");
    div.appendChild(teamNameHTML);
    div.appendChild(name1HTML);
    div.appendChild(name2HTML);
    div.style.height = document.getElementById("inputNamen").offsetHeight + "px";
    div.style.opacity = 0;
    fadeIn(div,800);

    setTimeout(function() {
        document.getElementById("addedTeams").appendChild(div);
    }, 500);


    document.getElementById("inputNamen").style.opacity = "0";

    //Animate Buttons
    let height = document.getElementById("addedTeams").offsetHeight + document.getElementById("inputNamen").offsetHeight + 150;
    document.getElementById("Buttons").getElementsByTagName("img")[1].style.transform = "translateX(0px) translateY("+height+"px) rotate(0deg)";
    document.getElementById("Buttons").getElementsByTagName("img")[0].style.transform = "translateX(0px) translateY("+height+"px)";

    document.getElementById("Buttons").getElementsByTagName("img")[1].onclick = function(){open1();};

    clearInput();
}

function fadeIn (element, duration){
    (function increment(value = 0) {
        element.style.opacity = String(value);
        if (element.style.opacity !== '1') {
            setTimeout(() => {
                increment(value + 0.1);
            }, duration / 10);
        }
    })();
}

function clearInput(){
    let smth = document.getElementById("inputNamen").getElementsByTagName("input");
    for (let i = 0; i < smth.length; i++) 
        smth[i].value = "";
    
}