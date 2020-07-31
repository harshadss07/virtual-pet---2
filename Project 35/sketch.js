//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var feedback;
var dogImage,dogImage1;
var Food;
var feedthepetbutton;
var addfoodbutton;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  dogImage1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,300,150,150);
  dog.addImage("dogHappy",dogImage);
  dog.scale = 0.2;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  feed = createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
background(46,139,87)
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImage1);
}
drawSprites();
textSize(40);
text(foodS,170,200);

fedTime = database.ref('FeedTime')
fedTime.on("value",function(data){
  lastFed = data.val();
});

fill(255,255,254);
if(lastFed>12){
  text("Last Feed : "+ LastFed%12 + " PM", 350, 30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
  }else{
    text("Last Feed : "+ lastFed + " AM",350,30);
  }
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
}

display()
  var x = 80, y = 100;

  imageMode(CENTER);
  image(this.image,720,220,70,70);

  if(this.foodStock=0){
    for(var i=0;i<this.foodStock; i++){
      if(i%10==0){
        x = 80;
        y = y+50;
      }
      image(this.image,x,y,50,50);
    }
  }

