class Tree1 extends Entity{
    constructor(terrain,face){
        let colors = new Array();
        colors.push(64,113,40);
        colors.push(205,133,63);
        super(terrain,face,Tree1Geometry,colors,0.5,10,20,0.8);
    }
}

class Tree2 extends Entity{
    constructor(terrain,face){        
        let colors = new Array();
        colors.push(64,113,40);
        colors.push(205,133,63);
        colors.push(205,50,53);
        super(terrain,face,Tree2Geometry,colors,0.5,10,20,0.8);
    }
}

class Tree3 extends Entity{
    constructor(terrain,face){
    let colors = new Array();
        colors.push(64,113,40);
        colors.push(205,133,63);
        super(terrain,face,Tree3Geometry,colors,1.2,10,20,0.8);
    }
}

class Flower1 extends Entity{
    constructor(terrain,face){
    let colors = new Array();
        colors.push(207,237,255);
        colors.push(124,255,108);
        colors.push(204,124,126);
        super(terrain,face,Flower1Geometry,colors,3,10,20,0.7);
    }
}