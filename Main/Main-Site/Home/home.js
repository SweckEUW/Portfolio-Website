let titleScreenOpen = true;
let lasttouch = 600;

function setUpHome(){
    wrapLettersInSpanHome(document.getElementById("homeText").getElementsByTagName("h1")[0]);
    wrapLettersInSpanHome(document.getElementById("homeText").getElementsByTagName("h2")[0]);

    if(screen.width > 900)
        document.getElementById("home").onmousemove = function(){controlCamera(event)};

    window.addEventListener("touchmove", ()=> {
        if(lasttouch - event.touches[0].clientY < 0  && window.scrollY <150 && !titleScreenOpen)
            openHomeScreen(); 
    
        if(lasttouch - event.touches[0].clientY > 0 && titleScreenOpen)
            closeHomeScreen();
    
        lasttouch = event.touches[0].clientY;
    });

    window.addEventListener("wheel", ()=> {
        if(event.deltaY < 0  && window.scrollY <200 && !titleScreenOpen)
            openHomeScreen();
    
        if(event.deltaY > 0 && titleScreenOpen)
            closeHomeScreen();
    });
}

function initHomeScreen(){
    document.getElementById("myCanvas").style.opacity = 0.8;
    document.getElementById("myCanvas").style.transform = "scaleY(1)";
    document.getElementById("homeText").getElementsByTagName("h1")[0].style.opacity = 1;
    document.getElementById("homeText").getElementsByTagName("h2")[0].style.opacity = 1;
    document.getElementById("NavigationShelf").style.opacity = 1;
    document.getElementsByClassName("Arrow")[0].getElementsByTagName("picture")[0].style.opacity = 1;
    openHomeText();
}

function openHomeScreen(){
    //Animations
    document.getElementById("myCanvas").style.transform= "scale(1)";
    document.getElementById("myCanvas").style.filter = "blur(0px) sepia(80%) grayscale(30%)";
    openHomeText();
    document.getElementsByClassName("Arrow")[0].style.opacity = 1;

    document.getElementById("homeText").style.transform = "translate(-50%, -70%) scale(1)";

    //Start Rendering
    stopCameraAnimation(false);
    
    titleScreenOpen=true;   
}

function closeHomeScreen(){
    //Animations
    if (screen.width < 900)
    document.getElementById("myCanvas").style.transform= "scale(0.82)";
    else
        document.getElementById("myCanvas").style.transform= "scale(0.72)";

    document.getElementById("myCanvas").style.filter = "blur(10px) sepia(0%) grayscale(100%)";
    closeHomeText();
    document.getElementsByClassName("Arrow")[0].style.opacity = 0;

    document.getElementById("homeText").style.transform = "translate(-50%, -70%) scale(0.62)";

    //Stop Rendering
    stopCameraAnimation(true);

    document.getElementsByTagName("main")[0].style.display = "block";

    titleScreenOpen=false;    
}

function openHomeText(){  
    let h1 = document.getElementById("homeText").getElementsByTagName("h1")[0].getElementsByTagName("span");
    for (let i = 0; i < h1.length; i++) 
        setTimeout(function() {
            h1[i].classList.add("homeOpenAnimation");
            h1[i].classList.remove("homeCloseAnimation");
        }, i*30+100); 
        
    let h2 = document.getElementById("homeText").getElementsByTagName("h2")[0].getElementsByTagName("span");
    for (let i = 0; i < h2.length; i++) 
        setTimeout(function() {
            h2[i].classList.add("homeOpenAnimation");
            h2[i].classList.remove("homeCloseAnimation");
        }, i*10+h2.length*10+100);  
}

function closeHomeText(){
    let h1 = document.getElementById("homeText").getElementsByTagName("h1")[0].getElementsByTagName("span");
    for (let i = 0; i < h1.length; i++) 
        setTimeout(function() {
            h1[i].classList.remove("homeOpenAnimation");
            h1[i].classList.add("homeCloseAnimation");
        }, i*10+101); 
        
    let h2 = document.getElementById("homeText").getElementsByTagName("h2")[0].getElementsByTagName("span");
    for (let i = 0; i < h2.length; i++) 
        setTimeout(function() {
            h2[i].classList.remove("homeOpenAnimation");
            h2[i].classList.add("homeCloseAnimation");
        }, i*10+h2.length*10+101);  
}

function wrapLettersInSpanHome(element){
    let containerInnerHTML = element.innerHTML;
    element.innerHTML = "";

    let searchid = containerInnerHTML.search("&amp;");
    while(searchid>0){
        containerInnerHTML = containerInnerHTML.substring(0,searchid) + "&" + containerInnerHTML.substring(searchid+5,containerInnerHTML.length);
        searchid = containerInnerHTML.search("&amp;");
    }

    for (let i = 0; i < containerInnerHTML.length; i++) {
        let span = document.createElement("span"); 
        span.innerHTML = containerInnerHTML[i];    
        if(span.innerHTML == " ")
            span.style.minWidth = "1vw";    
        if(span.innerHTML == " " && element.tagName == "H1")
            span.style.minWidth = "2vw";   
        element.appendChild(span);
    }
}