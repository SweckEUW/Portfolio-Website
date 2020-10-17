let terrain,terrainRender;
let entitys,entityRender;
let generationXMaxDistance,generationYMaxDistance,generationXMinDistance,generationYMinDistance;

let terrains = new Array();
let allTerrainsMesh = new THREE.Mesh(); 

if (screen.width < 900) {
    generationXMinDistance = 10; 
    generationYMinDistance = 200; 
    
    generationXMaxDistance = 80;
    generationYMaxDistance = 300;
    
}else{
    generationXMinDistance = 300; 
    generationYMinDistance = 300; 

    generationXMaxDistance = 400;
    generationYMaxDistance = 400;  
}

function updateTerrain(){
    for(let i = 0; i < terrains.length;i++)
        if(checkDestroyDistance(terrains[i]))
            terrains[i].destroy(i);
            
    for(let i = 0; i < terrains.length;i++)
        if(checkGenerateDistance(terrains[i]))
            checkForNeighbours(terrains[i],terrains.length);
}

function initTerrain(){
    terrainRender = new THREE.Group();
    terrainRender.rotation.x = 270*Math.PI/180;

    entityRender = new THREE.Group();
    entityRender.rotation.x = 270*Math.PI/180;

    scene.add(terrainRender);
    scene.add(entityRender);

    terrains.push(new Terrain(0,0));
}

function checkForNeighbours(terrain){
    let neighbours = new Array(8);
    for(let i = 0; i < terrains.length;i++){
        if(terrain.positionX == terrains[i].positionX && terrain.positionY+1 == terrains[i].positionY)
            //Nord
            neighbours[0]=true;
        
        if(terrain.positionX+1 == terrains[i].positionX && terrain.positionY+1 == terrains[i].positionY)
            //NordOst
            neighbours[1]=true;
        
        if(terrain.positionX+1 == terrains[i].positionX && terrain.positionY == terrains[i].positionY)
            //Ost
            neighbours[2]=true;
               
        if(terrain.positionX+1 == terrains[i].positionX && terrain.positionY-1 == terrains[i].positionY)
            //OstSüd
            neighbours[3]=true;
        
        if(terrain.positionX == terrains[i].positionX && terrain.positionY-1 == terrains[i].positionY)
            //Süd
            neighbours[4]=true;
        
        if(terrain.positionX-1 == terrains[i].positionX && terrain.positionY-1 == terrains[i].positionY)
            //SüdWest
            neighbours[5]=true;
        
        if(terrain.positionX-1 == terrains[i].positionX && terrain.positionY == terrains[i].positionY)
            //West
            neighbours[6]=true;
        
        if(terrain.positionX-1 == terrains[i].positionX && terrain.positionY+1 == terrains[i].positionY)
            //NordWest
            neighbours[7]=true;           
    }
    generateNeighbours(neighbours,terrain);
}

function generateNeighbours(neighbours,terrain){
    if(!neighbours[0]){
        //Nord
        terrains.push(new Terrain(terrain.positionX,terrain.positionY+1));
    }
    if(!neighbours[1]){
        //NordOst
        terrains.push(new Terrain(terrain.positionX+1,terrain.positionY+1));
    }
    if(!neighbours[2]){
        //Ost
        terrains.push(new Terrain(terrain.positionX+1,terrain.positionY));
    }
    if(!neighbours[3]){
        //OstSüd
        terrains.push(new Terrain(terrain.positionX+1,terrain.positionY-1));
    }
    if(!neighbours[4]){
        //Süd
        terrains.push(new Terrain(terrain.positionX,terrain.positionY-1));
    }
    if(!neighbours[5]){
        //SüdWest
        terrains.push(new Terrain(terrain.positionX-1,terrain.positionY-1));
    }
    if(!neighbours[6]){
        //West
        terrains.push(new Terrain(terrain.positionX-1,terrain.positionY));
    }
    if(!neighbours[7]){
        //NordWest
        terrains.push(new Terrain(terrain.positionX-1,terrain.positionY+1));
    }
}

function checkGenerateDistance(terrain){
    if(Math.abs(camera.position.x - terrain.positionX*terrain.size) < generationXMinDistance 
        && Math.abs(-camera.position.z - terrain.positionY*terrain.size) < generationYMinDistance)
       return true; 
    return false;
}

function checkDestroyDistance(terrain){
    if(Math.abs(camera.position.x - terrain.positionX*terrain.size) > generationXMaxDistance 
        || Math.abs(-camera.position.z - terrain.positionY*terrain.size) > generationYMaxDistance)
        return true;   
    return false;
}