var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
  
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var position = database.ref("ball/position");
    position.on("value",readPosition,showError )

}

function draw(){
    background("white");
  
    if (keyDown(LEFT_ARROW)){

        writePosition(-2,0);
    }
    
    if (keyDown(RIGHT_ARROW)){

        writePosition(2,0);
    }
    
    if (keyDown(UP_ARROW)){

        writePosition(0,-2);
    }
    
    if (keyDown(DOWN_ARROW)){

        writePosition(0,2);
    }
    drawSprites();
}


function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x + x,
        'y':position.y +y
    })

}
function readPosition(data){
    position = data.val();
    console.log(position);
    ball.x = position.x;
    ball.y = position.y;

}

function showError(){
    console.log("Error");
}



