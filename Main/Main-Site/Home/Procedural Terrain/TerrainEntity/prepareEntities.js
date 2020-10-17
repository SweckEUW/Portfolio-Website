function prepareEntities(){
    prepareCandyLandEntities();
    prepareDesertEntities();
    prepareForestEntities();
}

//FOREST
let Tree1Geometry = new Array();
let Tree2Geometry = new Array();
let Tree3Geometry = new Array();

let Cloud2Geometry = new Array();

let Flower1Geometry = new Array();

function prepareForestEntities(){
    Entity.loadModels(["Clouds/Cloud2"],Cloud2Geometry);
    
    Entity.loadModels(["Forest/Flowers/Flower1/Blaetter","Forest/Flowers/Flower1/Stil","Forest/Flowers/Flower1/Bluete"],Flower1Geometry);

    Entity.loadModels(["Forest/Trees/Tree3/Krone","Forest/Trees/Tree3/Stamm"],Tree3Geometry);
    Entity.loadModels(["Forest/Trees/Tree2/Krone","Forest/Trees/Tree2/Stamm","Forest/Trees/Tree2/apple"],Tree2Geometry);
    Entity.loadModels(["Forest/Trees/Tree1/Krone","Forest/Trees/Tree1/Stamm"],Tree1Geometry);
}

//CANDYLAND
let Donut1Geometry = new Array();

let Lolipop1Geometry = new Array();
let Lolipop2Geometry = new Array();

let Chocolate1Geometry = new Array();
let Chocolate2Geometry = new Array();

let IceCream1Geometry = new Array();

function prepareCandyLandEntities() {
    Entity.loadModels(["CandyLand/donut/DonutBase","CandyLand/donut/DonutGlaze","CandyLand/donut/DonutSprinkle"],Donut1Geometry);
    Entity.loadModels(["CandyLand/Lolipop/Lolipop1/Stil","CandyLand/Lolipop/Lolipop1/Head"],Lolipop1Geometry);
    Entity.loadModels(["CandyLand/Lolipop/Lolipop2/Stil","CandyLand/Lolipop/Lolipop2/Head"],Lolipop2Geometry);
    Entity.loadModels(["CandyLand/Chocolate/chocolate1"],Chocolate1Geometry);
    Entity.loadModels(["CandyLand/Chocolate/chocolate2"],Chocolate2Geometry);
    Entity.loadModels(["CandyLand/IceCream/IceCream1/Cone","CandyLand/IceCream/IceCream1/Cream"],IceCream1Geometry);
}

//DESERT
let Cactus1Geometry = new Array();

let Stone1Geometry = new Array();
let Stone2Geometry = new Array();

let Ruins1Geometry = new Array();

function prepareDesertEntities(){
    Entity.loadModels(["Desert/Cactus/cactus1"],Cactus1Geometry);

    Entity.loadModels(["Desert/Stones/Stone1"],Stone1Geometry);
    Entity.loadModels(["Desert/Stones/Stone2"],Stone2Geometry);

    Entity.loadModels(["Desert/Ruins/Ruin1"],Ruins1Geometry);
}