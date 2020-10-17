let currentImgId = 0;
let offset = 0;
let images;
let webpImages = [];
let pngImages = [];

document.addEventListener("DOMContentLoaded", function(){   
    images = document.getElementById("Images").getElementsByTagName("picture");

    for (let i = 0; i < images.length; i++) {
        webpImages[i] = images[i].getElementsByTagName("source")[0];
        pngImages[i] = images[i].getElementsByTagName("img")[0];
    }
});

function imgHover(number){
    document.getElementById("webpSource").srcset = webpImages[number+4*offset].srcset;
    document.getElementById("pngSource").src = pngImages[number+4*offset].src;
}

function changeNavigationImages(add){
    updateOffset(add);
    document.getElementById("Img1").getElementsByTagName("source")[0].srcset = webpImages[4*offset].srcset;
    document.getElementById("Img1").getElementsByTagName("img")[0].src = pngImages[4*offset].src;
   
    document.getElementById("Img2").style.display = "inline";
    document.getElementById("Img3").style.display = "inline";
    document.getElementById("Img4").style.display = "inline";

    if(2+4*offset > images.length){
        document.getElementById("Img2").style.display = "none";
    }else {
        document.getElementById("Img2").getElementsByTagName("source")[0].srcset = webpImages[1+4*offset].srcset;
        document.getElementById("Img2").getElementsByTagName("img")[0].src = pngImages[1+4*offset].src;
    }
    
    if(3+4*offset > images.length){
        document.getElementById("Img3").style.display = "none";
    }else {
        document.getElementById("Img3").getElementsByTagName("source")[0].srcset = webpImages[2+4*offset].srcset;
        document.getElementById("Img3").getElementsByTagName("img")[0].src = pngImages[2+4*offset].src;
    }

    if(4+4*offset > images.length){
        document.getElementById("Img4").style.display = "none";
    }else {
        document.getElementById("Img4").getElementsByTagName("source")[0].srcset = webpImages[3+4*offset].srcset;
        document.getElementById("Img4").getElementsByTagName("img")[0].src = pngImages[3+4*offset].src;
    }
}

function updateOffset(add){
    offset+=add;

    if(offset*4 >= images.length)
        offset = 0;

    if(offset < 0 ){
        offset = parseInt(images.length / 4);
        if(images.length % 4 == 0)
            offset--;
    }
      
}
let currentImg = 0;
function changeNavigationImagesMobile(add){
    currentImg+=add;
    if(currentImg >= images.length)
        currentImg=0;
    if(currentImg < 0)
        currentImg=images.length-1;
    document.getElementById("webpSource").srcset = webpImages[currentImg].srcset;
    document.getElementById("pngSource").src = pngImages[currentImg].src;
}

function enlargeImg(){
/*
    let img = document.getElementById("MainImage");
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    img.style.position = "absolute";
*/
}
