let playVideos = []; 
let articles;

function setUpWork(){  
    //wrapLettersInSpan
    let elements = document.getElementsByClassName("projectText");
    for (let i = 0; i < elements.length; i++) {
        wrapLettersInSpanWork(elements[i].getElementsByTagName("h2")[0]);
        wrapLettersInSpanWork(elements[i].getElementsByTagName("h3")[0]);
        wrapLettersInSpanWork(elements[i].getElementsByTagName("h4")[0]);
    }

    //booleans   
    for (let i = 0; i < document.getElementsByTagName("article").length; i++) 
        playVideos.push(false);

    //onscroll enlarge Videos
    articles = document.getElementsByTagName("article");
    window.addEventListener("scroll", workHover);

    for (let e of articles) {
        e.getElementsByTagName("video")[0].play();
        e.getElementsByTagName("video")[0].pause();
    }
     
}

function playVideo(number){
    // console.log(true);
    if(!playVideos[number]){
        //Animate Text
        playText(number);
        
        //Animate Video
        let video = document.getElementById("work"+number).getElementsByTagName("video")[0];  
        video.classList.add("videoOpen");
        video.play();

        document.getElementById("work"+number).getElementsByClassName("projectText")[0].classList.remove("closeWorkText");

        playVideos[number] = true;
    }   
}

function playText(number){
    let h2 = document.getElementById("work"+number).getElementsByClassName("projectText")[0].getElementsByTagName("h2")[0].getElementsByTagName("span");
    for (let i = 0; i < h2.length; i++) 
        setTimeout(function() {
            h2[i].classList.add("workOpenAnimation");
        }, i*10+100);
    
    let h3 = document.getElementById("work"+number).getElementsByClassName("projectText")[0].getElementsByTagName("h3")[0].getElementsByTagName("span");
    for (let i = 0; i < h3.length; i++) 
        setTimeout(function() {
            h3[i].classList.add("workOpenAnimation");
        }, i*10+h2.length*10+100);

    let h4 = document.getElementById("work"+number).getElementsByClassName("projectText")[0].getElementsByTagName("h4")[0].getElementsByTagName("span");
    for (let i = 0; i < h4.length; i++) 
        setTimeout(function() {
            h4[i].classList.add("workOpenAnimation");
        }, i*10+h2.length*10+100+h3.length*10);
}


function closeVideo(number){
    if(playVideos[number]){
        //Animate Text
        closeText(number);

        //Animate Video
        let video = document.getElementById("work"+number).getElementsByTagName("video")[0]
        video.classList.remove("videoOpen");
        video.pause();

        document.getElementById("work"+number).getElementsByClassName("projectText")[0].classList.add("closeWorkText");

        playVideos[number] = false;
    }
}

function closeText(number){   
    let h2 = document.getElementById("work"+number).getElementsByClassName("projectText")[0].getElementsByTagName("h2")[0].getElementsByTagName("span");
    for (let i = 0; i < h2.length; i++)
        setTimeout(function() {
            h2[i].classList.remove("workOpenAnimation");
        }, i*10+100);
    
    let h3 = document.getElementById("work"+number).getElementsByClassName("projectText")[0].getElementsByTagName("h3")[0].getElementsByTagName("span");
    for (let i = 0; i < h3.length; i++) 
        setTimeout(function() {
            h3[i].classList.remove("workOpenAnimation");
        }, i*10+h2.length*10+100);

    let h4 = document.getElementById("work"+number).getElementsByClassName("projectText")[0].getElementsByTagName("h4")[0].getElementsByTagName("span");
    for (let i = 0; i < h4.length; i++) 
        setTimeout(function() {
            h4[i].classList.remove("workOpenAnimation");
        }, i*10+h2.length*10+100+h3.length*10);
}

function workHover() {
    if(document.getElementsByTagName("main")[0].style.display != "none")
        for (let i = 0; articles.length > i; i++) 
            if (isElementInViewport(articles[i]))
                playVideo(articles.length-i-1);                
            else         
                closeVideo(articles.length-i-1);           
}

let c = 150;
let d = 500;
if (screen.width < 900){
    c = 100;
    d = 800;
}
function isElementInViewport(el){     
    let bounding = el.getBoundingClientRect();
    return (
        bounding.top >= -c && bounding.bottom <= (window.innerHeight+d || document.documentElement.clientHeight)
    );
}

function wrapLettersInSpanWork(element){
    let containerInnerHTML = element.innerHTML;
    element.innerHTML = "";

    let searchid = containerInnerHTML.search("&amp;");
    while(searchid>0){
        containerInnerHTML = containerInnerHTML.substring(0,searchid) + "&" + containerInnerHTML.substring(searchid+5,containerInnerHTML.length);
        searchid = containerInnerHTML.search("&amp;");
    }

    let parent = document.createElement("DIV");
    let next = false;
    for (let i = 0; i < containerInnerHTML.length; i++) {
        let span = document.createElement("span"); 
        span.innerHTML = containerInnerHTML[i];    

        if(span.innerHTML == " "){
            span.style.minWidth = "0.5vw"; 
            if (screen.width < 900)
                span.style.minWidth = "1.5vw";   
            next = true;
        } 
        
        if(span.innerHTML == " " && element.tagName == "H2"){
            span.style.minWidth = "2vw";  
            next = true;
        }   

        parent.appendChild(span);

        if(next || i == containerInnerHTML.length-1){
            element.appendChild(parent);
            next = false;
            parent = document.createElement("DIV");
        }
        
    }
}