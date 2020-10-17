function scrollToTop(){
    window.scroll(0,0);
}

window.addEventListener("scroll", function(){
    let img =  this.document.getElementById("topNavigation");
    let img2 =  this.document.getElementById("backNavigation").getElementsByTagName("img")[0];

    if(this.window.scrollY > 200){
        img.style.opacity = 1;
        img2.classList.add("handyLogo");
    }else{
        img.style.opacity = 0;
        img2.classList.remove("handyLogo");
    }
});