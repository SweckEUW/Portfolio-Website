function calculateBiome(x,y){
    let noisev = (noise.simplex2(x*0.05,y*0.05)+1)*0.5;
    return noisev;
}