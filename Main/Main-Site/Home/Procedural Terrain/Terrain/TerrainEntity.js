function addEntities(terrain){  
    for(let i = 0 ; i < terrain.geometry.faces.length;i++)
        if(Math.random() > entitySpawnProbability)
            spawnEntity(terrain,terrain.geometry.faces[i]); 
}

function spawnEntity(terrain,face){
    let biome = calculateBiome(terrain.geometry.vertices[face.a].x/terrainSize,terrain.geometry.vertices[face.a].y/terrainSize);
    if( biome > 0.6666)
        spawnForestEntity(terrain,face);
    else if( biome > 0.3333)
        spawnDesertEntity(terrain,face);
    else 
        spawnCandyLandEntity(terrain,face);
}

function spawnCandyLandEntity(terrain,face){
    let entityNumber = parseInt(Math.random()*7);
    switch (entityNumber){
        case 0:
            if(Math.random()>0.96)
                terrain.entities.push(new Donut1(terrain,face));   
            break;
        case 1:
            if(Math.random()>0.96)
                terrain.entities.push(new Lolipop1(terrain,face));     
            break;
        case 2:
            if(Math.random()>0.96)
                terrain.entities.push(new Lolipop2(terrain,face));
            break;
        case 3:
            if(Math.random()>0.96)
            terrain.entities.push(new IceCream1(terrain,face));
            break;
        case 4:
            if(Math.random()>0.96)
                terrain.entities.push(new Chocolate1(terrain,face));
            break;
        case 5:
            if(Math.random()>0.96)
                terrain.entities.push(new Chocolate2(terrain,face));
            break;
        case 6:
            if(Math.random()>0.99)
                terrain.entities.push(new Cloud(Cloud2Geometry,terrain));
            break;
    }
    
}

function spawnDesertEntity(terrain,face){
    let entityNumber = parseInt(Math.random()*4);
    switch (entityNumber){
        case 0:
            if(Math.random()>0.9)
                terrain.entities.push(new Cactus1(terrain,face));
            break;
        case 1:
            if(Math.random()>0.994)
                terrain.entities.push(new Stone1(terrain,face));
            break;
        case 2:
            if(Math.random()>0.994)
                terrain.entities.push(new Stone2(terrain,face));
            break;
        case 3:
            if(Math.random()>0.998)
                terrain.entities.push(new Ruin1(terrain,face));
            break;
    }
    
}

function spawnForestEntity(terrain,face){
    let entityNumber = parseInt(Math.random()*5);
    switch (entityNumber){
        case 0:
            if(Math.random()>0.82)
                terrain.entities.push(new Tree1(terrain,face));
            break;
        case 1:
            if(Math.random()>0.82)
                terrain.entities.push(new Tree2(terrain,face));
            break;
        case 2:
            if(Math.random()>0.82)
                terrain.entities.push(new Tree3(terrain,face));
            break;
        case 3:
            if(Math.random()>0.82)
                terrain.entities.push(new Flower1(terrain,face));
            break;
        case 4:
            if(Math.random()>0.99)
                terrain.entities.push(new Cloud(Cloud2Geometry,terrain));
            break;
    }
}

