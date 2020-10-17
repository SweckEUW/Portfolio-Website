let noiseLayers,noisePeristance,noiseBaseRoughness,noiseStrength,noiseRoughness,noiseMin,noisevalue,frequency,amplitude,noiseX,noiseY;

function calculateHeights(geometry){
    for(let i = 0; i < geometry.vertices.length; i++){   
        let biome = calculateBiome(geometry.vertices[i].x,geometry.vertices[i].y);
        if(biome > 0.6666)
            noisevalue = calculateNoiseValueForsest(geometry.vertices[i].x,geometry.vertices[i].y);  
        else if(biome > 0.3333)
            noisevalue = calculateNoiseValueDesert(geometry.vertices[i].x,geometry.vertices[i].y);  
        else 
            noisevalue = calculateNoiseValueCandyLand(geometry.vertices[i].x,geometry.vertices[i].y);  
        
        geometry.vertices[i].z = noisevalue;
    }
}

function calculateNoiseValueForsest(x,y){
    noiseLayers = 6;
    noisePeristance = 0.9;
    noiseBaseRoughness = 0.3;
    noiseStrength = 17;
    noiseRoughness = 1.2;
    noiseMin = 1.7;

    noisevalue = 0;
    frequency = noiseBaseRoughness;
    amplitude = 1;
 
    for(let i = 0; i < noiseLayers; i++){
        noiseX = x*frequency;
        noiseY = y*frequency;
        noisevalue += (noise.simplex2(noiseX,noiseY)+1)*0.5*amplitude;
        frequency*=noiseRoughness;
        amplitude*=noisePeristance;
    }
    noisevalue=Math.max(0, noisevalue-noiseMin);
    return noisevalue*noiseStrength+1;
}

function calculateNoiseValueDesert(x,y){
    noiseLayers = 6;
    noisePeristance = 0.7;
    noiseBaseRoughness = 0.4;
    noiseStrength = 10;
    noiseRoughness = 1.2;
    noiseMin = 0.2;

    noisevalue = 0;
    frequency = noiseBaseRoughness;
    amplitude = 1;

    for(let i = 0; i < noiseLayers; i++){
        noiseX = x*frequency;
        noiseY = y*frequency;
        noisevalue += (noise.simplex2(noiseX,noiseY)+1)*0.5*amplitude;
        frequency*=noiseRoughness;
        amplitude*=noisePeristance;
    }
    noisevalue=Math.max(0, noisevalue-noiseMin);
    return noisevalue*noiseStrength+1;
}

function calculateNoiseValueCandyLand(x,y){
    noiseLayers = 6;
    noisePeristance = 0.5;
    noiseBaseRoughness = 0.5;
    noiseStrength = 10;
    noiseRoughness = 1;
    noiseMin = 0;

    noisevalue = 0;
    frequency = noiseBaseRoughness;
    amplitude = 1;

    for(let i = 0; i < noiseLayers; i++){
        noiseX = x*frequency;
        noiseY = y*frequency;
        noisevalue += (noise.simplex2(noiseX,noiseY)+1)*0.5*amplitude;
        frequency*=noiseRoughness;
        amplitude*=noisePeristance;
    }
    noisevalue=Math.max(0, noisevalue-noiseMin);
    return Math.cos(noisevalue)*noiseStrength+1;
}