class Donut1 extends Entity{
    constructor(terrain,face){
        let colors = new Array();
        colors.push(210,105,30);

        let randomnumber = Math.random();
        if(randomnumber>0.666){
            colors.push(80,80,80);
            colors.push(255,255,255);
        }else if(randomnumber>0.3333){
            colors.push(255,255,255);
            colors.push(80,80,80);  
        }else{
            colors.push(199,21,133);
            colors.push(255,255,255);  
        }
        super(terrain,face,Donut1Geometry,colors,2,0,200,0.7);
    }
}

class Lolipop1 extends Entity{
    constructor(terrain,face){
        let colors = new Array();
        colors.push(255,255,255);

        let randomnumber = Math.random();
        if(randomnumber>0.666)
            colors.push(80,80,180);
        else if(randomnumber>0.3333)
            colors.push(180,80,80);
        else
            colors.push(80,180,80); 
        

        super(terrain,face,Lolipop1Geometry,colors,3,0,200,0.7);
    }
}

class Lolipop2 extends Entity{
    constructor(terrain,face){
        let colors = new Array();
        colors.push(255,255,255);

        let randomnumber = Math.random();
        if(randomnumber>0.666)
            colors.push(210,105,30);
        else if(randomnumber>0.3333)
            colors.push(180,80,80);
        else
            colors.push(80,180,80); 
        

        super(terrain,face,Lolipop2Geometry,colors,3,0,200,0.7);
    }
}


class Chocolate1 extends Entity{
    constructor(terrain,face){
        let colors = new Array();
        colors.push(180,105,30);
        super(terrain,face,Chocolate1Geometry,colors,3,0,200,0.7);
    }
}

class Chocolate2 extends Entity{
    constructor(terrain,face){
        let colors = new Array();
        colors.push(180,105,30);
        super(terrain,face,Chocolate2Geometry,colors,5,0,200,0.7);
    }
}

class IceCream1 extends Entity{
    constructor(terrain,face){
        let colors = new Array();
        colors.push(210,155,80);

        let randomnumber = Math.random();
        if(randomnumber>0.666)
            colors.push(210,105,30);
        else if(randomnumber>0.3333)
            colors.push(180,80,80);
        else
            colors.push(80,180,80); 
        
        super(terrain,face,IceCream1Geometry,colors,3,0,200,0.7);
    }
}