let canvas ,engine ,scene;

function init(){
    canvas = document.getElementById('myCanvas');
    engine = new BABYLON.Engine(canvas, true, { stencil: true });

    createScene();
    createModels();
    createCamera();
    createLight();

    engine.runRenderLoop(function() {
        scene.render();
    });
    
    window.addEventListener('resize', function() {
        engine.resize();
    });

}

function createCamera(){
    var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 3 , 70, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.inertia = 0;
    camera.inputs.attached.pointers.angularSensibilityX = 100;
    camera.inputs.attached.pointers.angularSensibilityY = 100;
}

function createScene() {
    scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0,1,1);
    scene.ambientColor = new BABYLON.Color3(0.5, 0.5, 0.5);

    scene.createDefaultEnvironment({
        createSkybox: false,
        createGround: false
    });
}

function createLight(){
    let light1 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -2, 0), scene);
}

function createModels(){    
   
}