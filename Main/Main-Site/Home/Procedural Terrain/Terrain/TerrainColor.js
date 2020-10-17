let coloroffset = 0.8;

function calculateColors(geometry){  
    for(let i = 0 ; i < geometry.faces.length;i++){
        let biome = calculateBiome(geometry.vertices[geometry.faces[i].a].x,geometry.vertices[geometry.faces[i].a].y);
        if(biome > 0.6666)
            calculateColorsForest(geometry.vertices[geometry.faces[i].a].z,geometry.faces[i]);
        else if(biome > 0.3333)
            calculateColorsDesert(geometry.vertices[geometry.faces[i].a].z,geometry.faces[i]);
        else
            calculateColorsCandyLand(geometry.vertices[geometry.faces[i].a].z,geometry.faces[i]);
    }
}


function calculateColorsForest(height,face){       
    //MOUNTAINS   
    if(height>30)
        face.color = randomColor(140,140,140);
    else if(height>25)
        face.color = randomColor(168,176,160);
    //GRASS
    else if(height>16)
        face.color = randomColor(32,159,68);
    else if(height>13)
        face.color = randomColor(42,179,88);
    else if(height>10)
        face.color = randomColor(66,179,70);
    else if(height>7)
        face.color = randomColor(116,225,94);
    //SAND
    else if(height>5)
        face.color = randomColor(194, 178, 128);
    //WATER
    else if(height>3)
        face.color = randomColor(63,144,198);
    else if(height>0)
        face.color = randomColor(47,111,154);
}

function calculateColorsDesert(height,face){
    face.color = randomColor2(134, 118, 68,0.9);
}

function calculateColorsCandyLand(height,face){
    face.color = randomColor2(255,105,180,0.6);
}
