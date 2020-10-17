let cloudMaterial = new THREE.MeshStandardMaterial( {vertexColors:THREE.FaceColors} );
cloudMaterial.flatShading = true;
cloudMaterial.opacity = 0.1;
cloudMaterial.transparent = true;

class Cloud{
    constructor(geometry,terrain){
        this.randomPoint;
        this.terrainGeometry = terrain.geometry;
        this.scale = randomNumber(3,2);
        this.models = new Array();
        this.placeCloud();
        this.createModels(geometry);
        this.calcualteColors();             
    }

    placeCloud(){
        //RANDOMPOINT
        let randomFace = parseInt(Math.random()*this.terrainGeometry.faces.length);
        let randomIndex1 = this.terrainGeometry.faces[randomFace].a;
        let randomIndex2 = this.terrainGeometry.faces[randomFace].b;
        let randomIndex3 = this.terrainGeometry.faces[randomFace].c;

        let v1 = this.terrainGeometry.vertices[randomIndex1].clone();
        let v2 = this.terrainGeometry.vertices[randomIndex2].clone();
        let v3 = this.terrainGeometry.vertices[randomIndex3].clone();

        let random1 = Math.random()*9999;
        let random2 = Math.random()*9999;
        let random3 = Math.random()*9999;

        let sum = random1+random2+random3;
        random1/=sum;
        random2/=sum;
        random3/=sum;

        v1.multiplyScalar(random1);
        v2.multiplyScalar(random2);
        v3.multiplyScalar(random3);

        this.randomPoint = v1;
        this.randomPoint.add(v2);
        this.randomPoint.add(v3);

        this.randomPoint.z +=50*randomNumber(1,0.7);
    }

    calcualteColors(){
        let colors = [240,255,240];
        for(let k=0;k<this.models.length;k++){
            for(let y=0;y<this.models[k].geometry.faces.length;y++){
                let color = randomColor2(colors[k*3],colors[k*3+1],colors[k*3+2],0.9);
                this.models[k].geometry.faces[y].color = color;                 
            }
        }
    }

    createModels(geometry){  
        for(let i = 0; i < geometry.length;i++) {
            let entity = geometry[i].clone();     

            entity.scale.set (this.scale,this.scale,this.scale);
    
            entity.rotateOnAxis(new THREE.Vector3(1,0,0),Math.random()*Math.PI*2); 

            entity.position.set(this.randomPoint.x,this.randomPoint.y,this.randomPoint.z);   
            
            entity.material = cloudMaterial;

            entity.updateMatrix();
            entity.matrixAutoUpdate = false;

            this.models.push(entity);

            entityRender.add(entity);
        }   
    }

}