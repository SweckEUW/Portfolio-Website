let about = [];
let aboutPlay = [false,false,false];

function setUpAbout(){
    about.push(document.getElementById("aboutContainer"));
    about.push(document.getElementById("skillsContainer"));
    about.push(document.getElementById("contactContainer"));

    wrapLettersInSpanAbout(document.getElementById("aboutOverlay").getElementsByTagName("h2")[0]);
    wrapLettersInSpanAbout(document.getElementById("aboutOverlay").getElementsByTagName("h3")[0]);
    wrapLettersInSpanAbout(document.getElementById("skillsOverlay").getElementsByTagName("h2")[0]);
    wrapLettersInSpanAbout(document.getElementById("skillsOverlay").getElementsByTagName("h3")[0]);
    wrapLettersInSpanAbout(document.getElementById("contactOverlay").getElementsByTagName("h2")[0]);
    wrapLettersInSpanAbout(document.getElementById("contactOverlay").getElementsByTagName("h3")[0]);

    window.addEventListener("scroll", aboutHover);
    aboutHover();
}

function playAbout(number){ 
    if(!aboutPlay[number]){
        let img;
        if(number == 0){ img =  document.getElementById("about").getElementsByTagName("img")[0]; aboutAnimationsOpen("about");}
        if(number == 1){ img =  document.getElementById("skills").getElementsByTagName("img")[0]; skillsAnimationsOpen();}
        if(number == 2){ img =  document.getElementById("contact").getElementsByTagName("img")[0]; aboutAnimationsOpen("contact");}

        img.classList.add("imgOpen");

        aboutPlay[number]=true;
    }
}

function closeAbout(number){
    if(aboutPlay[number]){
        let img;
        if(number == 0){ img =  document.getElementById("about").getElementsByTagName("img")[0]; aboutAnimationsClose("about");}
        if(number == 1){ img =  document.getElementById("skills").getElementsByTagName("img")[0]; skillsAnimationsClose();}
        if(number == 2){ img =  document.getElementById("contact").getElementsByTagName("img")[0]; aboutAnimationsClose("contact");}

        img.classList.remove("imgOpen"); 

        aboutPlay[number]=false;
    }
}

function aboutAnimationsOpen(id){
    document.getElementById(id+"Overlay").classList.remove("closeOverlay");

    let h2 = document.getElementById(id+"Overlay").getElementsByTagName("h2")[0].getElementsByTagName("span");
    for (let i = 0; i < h2.length; i++) 
        setTimeout(function() {
            h2[i].classList.add(id+"OpenAnimation");
            h2[i].classList.remove(id+"CloseAnimation");
        }, i*3+100); 
    
    let h3 = document.getElementById(id+"Overlay").getElementsByTagName("h3")[0].getElementsByTagName("span");
    for (let i = 0; i < h3.length; i++) 
        setTimeout(function() {
            h3[i].classList.add(id+"OpenAnimation");
            h3[i].classList.remove(id+"CloseAnimation");
        }, i*3+h2.length*30+100);
}

function aboutAnimationsClose(id){
    document.getElementById(id+"Overlay").classList.add("closeOverlay");

    let h2 = document.getElementById(id+"Overlay").getElementsByTagName("h2")[0].getElementsByTagName("span");
    for (let i = 0; i < h2.length; i++)
    setTimeout(function() {
        h2[i].classList.remove(id+"OpenAnimation");
        h2[i].classList.add(id+"CloseAnimation");
    }, i*30+100); 
    
    let h3 = document.getElementById(id+"Overlay").getElementsByTagName("h3")[0].getElementsByTagName("span");
    for (let i = 0; i < h3.length; i++) 
    setTimeout(function() {
        h3[i].classList.remove(id+"OpenAnimation");
        h3[i].classList.add(id+"CloseAnimation");
    }, i*3+h2.length*30+100);   
}

function skillsAnimationsOpen(){

}


function skillsAnimationsClose(){
    
}

let a = 150;
let b = 300;
if (screen.width < 900){
    a = -50;
    b = 400;
}
function isElementInViewportAbout(el){    
    let bounding = el.getBoundingClientRect();
    return (
        bounding.top >= -a && bounding.bottom <= (window.innerHeight+b || document.documentElement.clientHeight)
    );
}

function aboutHover() {
    if(document.getElementsByTagName("main")[0].style.display != "none")
        for (let i = 0; i < about.length; i++) 
            if (isElementInViewportAbout(about[i]))
                playAbout(i);
            else
                closeAbout(i);
}

function copyEmail(){
    const el = document.createElement("textarea");
    el.value =  "Hello@Sweck.de";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Email copied to clipboard!");
}

function wrapLettersInSpanAbout(element){
    let containerInnerHTML = element.innerHTML;
    element.innerHTML = "";

    let searchid = containerInnerHTML.search("&amp;");
    while(searchid>0){
        containerInnerHTML = containerInnerHTML.substring(0,searchid) + "&" + containerInnerHTML.substring(searchid+5,containerInnerHTML.length);
        searchid = containerInnerHTML.search("&amp;");
    }

    let parent = document.createElement("h4");
    let next = false;
    for (let i = 0; i < containerInnerHTML.length; i++) {
        let span = document.createElement("span"); 
        span.innerHTML = containerInnerHTML[i];    

        if(span.innerHTML == " "){
            span.style.minWidth = "1vw";   
            if (screen.width < 900)
                span.style.minWidth = "2vw";
            next = true;
        } 

        if(span.innerHTML.indexOf("?")<0){
            parent.appendChild(span);
        }else
            next = true;
            

        if(next || i == containerInnerHTML.length-1){
            element.appendChild(parent);
            next = false;
            parent = document.createElement("h4");
        }
        
        if(span.innerHTML.indexOf("?")>=0)
            element.appendChild(document.createElement("h5"));
    }
}