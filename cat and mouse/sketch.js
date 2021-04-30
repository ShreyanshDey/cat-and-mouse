var cat,catimg,catimg2,catwalk,cathappy,cathappyimg
var mouse,mouseimg,mouseimg2,mousewalk,mousehappy,mousehappyimg
var bg
var satyam
function preload() {
    //load the Animations here
catimg= loadAnimation("cat1.png",)
cathappyimg= loadAnimation("cat4.png")
catimg2= loadAnimation("cat2.png","cat3.png")
mouseimg = loadAnimation("mouse1.png","mouse4.png")
mousehappyimg = loadAnimation("mouse4.png")
mouseimg2=loadAnimation("mouse2.png","mouse3.png")
bg=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600)
    cat.addAnimation("catty",catimg)
    cat.scale = 0.1
    mouse = createSprite(200,600)
    mouse.addAnimation("mousey",mouseimg)
    mouse.scale=0.1
  
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    
     if (cat.x-mouse.x < cat.width/2-mouse.width/2) {
        cat.velocityX=0
        cat.addAnimation( "cathappy" , cathappyimg)
       cat.scale=0.1
       cat.scale=0.1
      //  cathappy.frameDelay=500000
        cat.changeAnimation("cathappy")


      
        mouse.addAnimation( "mousehappy", mousehappyimg)
             mouse.scale=0.1
        mouse.changeAnimation("mousehappy")
   
        
       
     }
     //satyam.destroy()
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode=== LEFT_ARROW) {
    
    mouse.addAnimation("walk",mouseimg2)
   mouse.frameDelay=25
    mouse.changeAnimation("walk")
   

    cat.addAnimation("catwalk")
     
    cat.changeAnimation("catwalk")

    cat.velocityX=-5
   
    
}
 
  
}
