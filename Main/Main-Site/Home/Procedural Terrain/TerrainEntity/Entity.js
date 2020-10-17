let objLoader = new THREE.OBJLoader(); 

let entityMesh = new THREE.Mesh();
entityMesh.material = terrainMaterial;
entityMesh.matrixAutoUpdate = false;

class Entity{
    constructor(terrain,face,geometry,colors,scale,minPlacement,maxPlacement,colorOffset){
        this.colorOffset = colorOffset;
        this.randomPoint;
        this.rotationAxis;
        this.rotationAngle;
        this.rotationAxis2;
        this.rotationAngle2 = Math.random()*Math.PI*2;
        this.terrainFace = face;
        this.scale = scale*randomNumber(1.5,0.9);
        this.minPlacement=minPlacement;
        this.maxPlacement=maxPlacement;
        this.models = new Array();

        if(this.calculatePlacement(terrain,face)){
            this.createModels(geometry);
            this.calcualteColors(colors);             
        }

    }

    calculatePlacement(terrain,face){
        //RANDOMPOINT
        let index1 = face.a;
        let index2 = face.b;
        let index3 = face.c;

        let v1 = terrain.geometry.vertices[index1].clone();
        let v2 = terrain.geometry.vertices[index2].clone();
        let v3 = terrain.geometry.vertices[index3].clone();

        let random1 = Math.random()*9999;
        let random2 = Math.random()*9999;
        let random3 = Math.random()*9999;

        let sum = random1+random2+random3;
        random1/=sum;
        random2/=sum;
        random3/=sum;

        let surfaceNormal = calculateNormal(v1,v2,v3);
        this.rotationAxis2 = surfaceNormal;

        v1.multiplyScalar(random1);
        v2.multiplyScalar(random2);
        v3.multiplyScalar(random3);

        this.randomPoint = v1;
        this.randomPoint.add(v2);
        this.randomPoint.add(v3);

        if(this.randomPoint.z < this.minPlacement || this.randomPoint.z > this.maxPlacement)
            return false;
        
        let upVector = new THREE.Vector3( 0, 1, 0 );
        this.rotationAngle = -Math.acos(surfaceNormal.clone().dot(upVector.clone()));
        this.rotationAxis = surfaceNormal.clone().cross(upVector.clone()).normalize();  
        return true;
    }

    calcualteColors(colors){
        for(let k=0;k<this.models.length;k++){
            for(let y=0;y<this.models[k].geometry.faces.length;y++){
                let color = randomColor2(colors[k*3],colors[k*3+1],colors[k*3+2],this.colorOffset);
                this.models[k].geometry.faces[y].color = color;                 
            }
        }
    }

    createModels(geometry){  
        for(let i = 0; i < geometry.length;i++) {
            
            let entity = entityMesh.clone();
            entity.geometry = geometry[i].geometry.clone();

            entity.scale.set(this.scale,this.scale,this.scale);
    
            entityRender.add(entity);

            entity.rotateOnAxis(this.rotationAxis2,this.rotationAngle2); 

            entity.rotateOnAxis(this.rotationAxis,this.rotationAngle);
            
            entity.position.set(this.randomPoint.x,this.randomPoint.y,this.randomPoint.z);   
            
            entity.updateMatrix();

            this.models.push(entity);

            entityRender.add(entity);
        }   
    }

    static loadModels(filepaths,geometryArray){
        for (let i = 0; i < filepaths.length; i++) {
            
            let myObjPromise =  new Promise(function( resolve, reject ){                            
                    objLoader.load("Main/Main-Site/Home/Procedural Terrain/Models/"+filepaths[i]+".obj", resolve);         
                });       

            myObjPromise.then(myObj => { 
                let entity = myObj.children[0];           
                entity.geometry = new THREE.Geometry().fromBufferGeometry( entity.geometry );
                geometryArray.push(entity);
            });  
            
        }
    }    
}