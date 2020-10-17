let navigationOpen = false;

function navigation(){
    navigationOpen=!navigationOpen;
    if(navigationOpen)
        openNavigation();
    else
        closeNavigation();
}

function openNavigation(){
    document.getElementsByTagName("main")[0].style.filter = "blur(20px)";
    document.getElementsByTagName("header")[0].style.filter = "blur(20px)";

    document.getElementById("NavigationLinks").style.display = "block";
    document.getElementById("NavigationLinks").style.opacity = 1;

    document.getElementById("NavigationShelf").getElementsByTagName("div")[0].style.transform = "rotate(45deg) translateY(23px)";
    document.getElementById("NavigationShelf").getElementsByTagName("div")[1].style.opacity = "0";
    document.getElementById("NavigationShelf").getElementsByTagName("div")[2].style.transform = "rotate(-45deg) translateY(-23px)";
}


function closeNavigation(){
    document.getElementsByTagName("main")[0].style.filter = "blur(0px)";
    document.getElementsByTagName("header")[0].style.filter = "blur(0px)";

    document.getElementById("NavigationLinks").style.opacity = 0;

    setTimeout(function() {
        document.getElementById("NavigationLinks").style.display = "none";
    }, 500);

    document.getElementById("NavigationShelf").getElementsByTagName("div")[0].style.transform = "rotate(0deg)";
    document.getElementById("NavigationShelf").getElementsByTagName("div")[1].style.opacity = "1";
    document.getElementById("NavigationShelf").getElementsByTagName("div")[2].style.transform = "rotate(0deg)";
}

function wrapLettersInSpanNavigation(id){
    let containerInnerHTML = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML = "";

    let searchid = containerInnerHTML.search("&amp;");
    if(searchid>0)
        containerInnerHTML=containerInnerHTML.substring(0,searchid) + "&" + containerInnerHTML.substring(searchid+5,containerInnerHTML.length);

    for (let i = 0; i < containerInnerHTML.length; i++) {
        let span = document.createElement("span"); 
        span.innerHTML = containerInnerHTML[i];
        document.getElementById(id).appendChild(span);
    }
}