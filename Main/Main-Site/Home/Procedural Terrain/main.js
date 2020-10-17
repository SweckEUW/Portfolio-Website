let  scene,camera,renderer,animationId;

function setUpProceduralTerrain(){
    prepareEntities();
    init();
    animate();
}

function init(){
    noise.seed(Math.random());

    //CAMERA
    camera = new THREE.PerspectiveCamera(fieldOfView,aspectRatio,nearClippingPlane,farClippingPlane);
    camera.position.z = 100;
    camera.position.y = 40;
    camera.lookAt(new THREE.Vector3(1,0,0));

    //RENDERER
    renderer = new THREE.WebGLRenderer({canvas: document.getElementById("myCanvas"), powerPreference : "high-performance"});
    renderer.setClearColor(clearColor);
    renderer.setSize(canvasWidth,canvasHeight);

    //SCENE
    scene = new THREE.Scene();
    scene.matrixAutoUpdate = false;

    //LIGHT
    let directionalLight = new THREE.DirectionalLight( newColor(255),2);
    directionalLight.position.set(5,4,-1);
    scene.add( directionalLight );

    var ambientlight = new THREE.AmbientLight( newColor(255),0.5 );
    scene.add( ambientlight );

    if (screen.width < 900) 
        scene.fog = new THREE.Fog(0xFFFFFF,150,200);
    else
        scene.fog = new THREE.Fog(0xFFFFFF,100,350);

    initTerrain();
}

function animate(){  
    animationId = requestAnimationFrame(animate);

    updateTerrain();
    animateCamera(); 

    renderer.render(scene,camera); 
}

function stopRendering(){
    cancelAnimationFrame(animationId);
}

window.addEventListener("resize",onWindowResize,false);
function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}