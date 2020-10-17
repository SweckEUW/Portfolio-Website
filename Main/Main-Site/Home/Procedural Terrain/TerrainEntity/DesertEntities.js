class Cactus1 extends Entity{
    constructor(terrain,face){
        let colors = new Array();
        colors.push(35,117,67);
        super(terrain,face,Cactus1Geometry,colors,0.6,0,200,0.7);
    }
}

class Stone1 extends Entity{
    constructor(terrain,face){
        let colors = new Array();
        colors.push(225,153,83);
        super(terrain,face,Stone1Geometry,colors,9,0,200,0.8);
    }
}

class Stone2 extends Entity{
    constructor(terrain,face){
        let colors = new Array();
        colors.push(225,153,83);
        super(terrain,face,Stone2Geometry,colors,9,0,200,0.8);
    }
}

class Ruin1 extends Entity{
    constructor(terrain,face){
        let colors = new Array();
        colors.push(244,164,96);
        super(terrain,face,Ruins1Geometry,colors,4,0,200,0.8);
    }
}
