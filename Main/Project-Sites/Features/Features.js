let elements;
document.addEventListener("DOMContentLoaded", function(){   
     elements = document.getElementsByTagName("article");
});


function isElementInViewport(el){
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= -400 &&
        rect.bottom <= (window.innerHeight+100 || document.documentElement.clientHeight)
    );
}
 
window.addEventListener("scroll", function(){
    for (var i = 0; i < elements.length; i++) {

        let video = elements[i].getElementsByTagName("video"); 
        let media = elements[i].childNodes[1];

        if (isElementInViewport(media)) {
            // elements[i].style.filter = "blur(0)";
            for (let x = 0; x < video.length; x++) 
                video[x].play();
            
        }else { 
            // elements[i].style.filter = "blur(20px)";
            for (let x = 0; x < video.length; x++)  
                video[x].pause();
            
        }
    }
});
