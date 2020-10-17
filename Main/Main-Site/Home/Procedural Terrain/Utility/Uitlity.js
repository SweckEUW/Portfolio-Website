function newColor(r,g,b){
    return new THREE.Color("rgb("+r+","+g+","+b+")");
}

function newColor(c){
    return new THREE.Color("rgb("+c+","+c+","+c+")");
}

function calculateNormal(v1,v2,v3){
    let u = v2.clone().sub(v1.clone());
    let v = v3.clone().sub(v1.clone());
    return u.cross(v).normalize();
}

let rInc = 0.4;
let gInc = 0.4;
let bInc = 0.4;

function randomColor(r,g,b){
    r = parseInt(r*(Math.random()*(1-coloroffset)+coloroffset));
    g = parseInt(g*(Math.random()*(1-coloroffset)+coloroffset));
    b = parseInt(b*(Math.random()*(1-coloroffset)+coloroffset));
    return new THREE.Color("rgba("+parseInt(r*rInc)+","+parseInt(g*gInc)+","+parseInt(b*bInc)+")");
}

function randomColor2(r,g,b,offset){
    r = parseInt(r*(Math.random()*(1-offset)+offset));
    g = parseInt(g*(Math.random()*(1-offset)+offset));
    b = parseInt(b*(Math.random()*(1-offset)+offset));
    return new THREE.Color("rgba("+parseInt(r*rInc)+","+parseInt(g*gInc)+","+parseInt(b*bInc)+")");
}

function randomNumber(a,b){
    return Math.random()*(a-b)+b;
}