let terrainResolution = 10;
let terrainSize = 70;

let terrainGeometry = new THREE.PlaneGeometry(1, 1, terrainResolution,terrainResolution);

let terrainMaterial = new THREE.MeshLambertMaterial ({vertexColors: THREE.FaceColors,flatShading:true});

let terrainMesh = new THREE.Mesh();
terrainMesh.matrixAutoUpdate = false;

class Terrain{
    constructor(positionX,positionY){
        this.terrain;
        this.geometry;
        this.entities = new Array();
        this.size= terrainSize;
        this.positionX = positionX;
        this.positionY = positionY;
        this.constructTerrain();
    }

    constructTerrain(){
        this.geometry = terrainGeometry.clone();
        this.geometry.translate(this.positionX,this.positionY,0);

        calculateHeights(this.geometry);
        calculateColors(this.geometry);

        this.geometry.scale(terrainSize,terrainSize,1);

        addEntities(this);

        this.terrain = terrainMesh.clone();
        this.terrain.material = terrainMaterial;
        this.terrain.geometry = this.geometry;
        
        terrainRender.add(this.terrain);
    }

    destroy(index){
        terrainRender.remove(terrainRender.children[index]);
        terrains.splice(index,1);
        this.destroyEntities();
    }

    destroyEntities(){
        for(let k = 0; k < this.entities.length;k++)
            for(let m = 0; m < this.entities[k].models.length;m++)
                entityRender.remove(this.entities[k].models[m]);
    }
}