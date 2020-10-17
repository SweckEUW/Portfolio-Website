let navigationOpen = false;
let navigationLinks;

function setUpNavigation(){
    navigationLinks = document.getElementById("NavigationLinks").getElementsByTagName("a");
}

function navigation(){
    navigationOpen=!navigationOpen;
    if(navigationOpen)
        openNavigation();
    else
        closeNavigation();
}

function openNavigation(){
    document.getElementById("NavigationLinksWrapper").style.pointerEvents = "all";

    //Burger Animation
    document.getElementById("NavigationShelf").getElementsByTagName("div")[0].classList.add("TopShelfAnimation");
    document.getElementById("NavigationShelf").getElementsByTagName("div")[1].style.opacity = "0";
    document.getElementById("NavigationShelf").getElementsByTagName("div")[2].classList.add("BottomShelfAnimation");

    //Text Animation
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;

    for (let i = 0; i < navigationLinks.length; i++) { 
        navigationLinks[i].style.color = "rgb("+r+", "+g+", "+b+")";
        navigationLinks[i].onmouseover = function() {this.style.backgroundColor = "rgba("+r+", "+g+", "+b+","+ 0.2 +")";};
        navigationLinks[i].onmouseleave = function() {this.style.backgroundColor = "rgba(0,0,0,0)";};
    }

    playTextAnimations();

    //Blur all other elements
    document.getElementById("home").style.filter = "blur(100px) grayscale(100%)";
    document.getElementById("about").style.filter = "blur(100px) grayscale(100%)";
    document.getElementById("work").style.filter = "blur(100px) grayscale(100%)";
    document.getElementById("contact").style.filter = "blur(100px) grayscale(100%)"; 
}

function closeNavigation(){
    document.getElementById("NavigationLinksWrapper").style.pointerEvents = "none";

    //Burger Animation
    document.getElementById("NavigationShelf").getElementsByTagName("div")[0].classList.remove("TopShelfAnimation");
    document.getElementById("NavigationShelf").getElementsByTagName("div")[1].style.opacity = "1";
    document.getElementById("NavigationShelf").getElementsByTagName("div")[2].classList.remove("BottomShelfAnimation");

    for (let i = 0; i < navigationLinks.length; i++) 
        navigationLinks[i].style.backgroundColor = "unset";

    //Text Animations
    closeTextAnimations();
 
    //Unblur all elements
    document.getElementById("home").style.filter = "";
    document.getElementById("about").style.filter = "";
    document.getElementById("work").style.filter = "";
    document.getElementById("contact").style.filter = "";
}

function playTextAnimations(){   
    let links = document.getElementById("NavigationLinks").getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) { 
        let span = document.getElementById("NavigationLinks").getElementsByTagName("a")[i].getElementsByTagName("span");
        for (let j = 0; j < span.length; j++) {    
            setTimeout(function() {
                span[j].classList.add("NavigationLinksOpen");
                span[j].classList.remove("NavigationLinksClose");
            }, 30*j);
        }
    }
}

function closeTextAnimations(){ 
    let links = document.getElementById("NavigationLinks").getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {     
        let span = document.getElementById("NavigationLinks").getElementsByTagName("a")[i].getElementsByTagName("span");
        for (let j = span.length-1; j >= 0; j--) {    
            setTimeout(function() {
                span[j].classList.remove("NavigationLinksOpen");
                span[j].classList.add("NavigationLinksClose");
            }, j*30);
        }  
    } 
}

//HOME
function translateToHome(){   
    if(!titleScreenOpen)
        openHomeScreen();
    window.scrollTo(0,0);
}

//WORK
function translateToWork(){
    if(titleScreenOpen)
        closeHomeScreen();
    document.getElementById("work").scrollIntoView();
}

//ABOUT
function translateToAbout(){
    if(titleScreenOpen)
        closeHomeScreen();
    document.getElementById("about").scrollIntoView();
}

//Contact
function translateToContact(){
    if(titleScreenOpen)
        closeHomeScreen();
        document.getElementById("contact").scrollIntoView();
}