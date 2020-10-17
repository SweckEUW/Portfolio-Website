let cameraXinc = 0; 
let cameraYinc = 0; 
let CameraZSpeed = 0.8;
let stopCamera =false;

function controlCamera(event){
    cameraXinc = (event.clientX-canvasWidth/2)/4000;
}

function animateCamera(){
    if(!stopCamera){
        camera.position.z-=CameraZSpeed;
        camera.position.x+=cameraXinc*3;
        camera.rotation.y += -cameraXinc/100;
            
        if(!(camera.rotation.y<60 * Math.PI / 180 && camera.rotation.y>-60 * Math.PI / 180))
            camera.rotation.y -= -cameraXinc/100; 
            
    }
}

function stopCameraAnimation(boolean){
    if(boolean){
        stopRendering();
        stopCamera=true;
    }else{
        animate();
        stopCamera=false;
    }
}