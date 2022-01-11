


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
  

  
}
let thought = ['The two most powerful warriors are patience and time.','Time is money.','Time waits for no one.','Better three hours too soon than a minute too late.','Lost time is never found again.','Time is the most valuable thing a man can spend.','Time is the wisest counselor of all.','The key is in not spending time, but in investing it.','It is the time you have wasted for your rose that makes your rose so important.','Punctuality is the thief of time.']

  let shownthought = thought[Math.floor(Math.random() *thought.length)];
  console.log(shownthought);

function draw() {
  
  background("black"); 
  translate(200,200) 
  


  rotate(-90)
  
  hr = hour();
  mn = minute ();
  sc = second();





scAngle = map(sc ,  0, 60 , 0 , 360)
mnAngle = map(mn,0,60,0,360)
hrAngle = map(hr % 12,0,12,0,360)

push();
rotate(scAngle)
stroke(255,0,0);
strokeWeight(7);
line (0,0,100,0);

pop();



push();

rotate(mnAngle)
stroke(0, 255,0);
strokeWeight(7);
line (0,0,75, 0);

pop();

push();

rotate(hrAngle)
stroke(0,0,255);
strokeWeight(7);
line (0,0,50,0);

pop();

stroke(255,0,255)
point(0,0)
strokeWeight(10)
noFill()

stroke(255,0,0)
arc(0,0,300,300,0,scAngle)
stroke(0,255,0)
arc(0,0,280,280,0,mnAngle)
stroke(0,0,255)
arc(0,0,260,260,0,hrAngle)






drawSprites();

rotate(90)


textSize(60);
textFont("Courier New");
stroke("blue");
strokeWeight(5);
text("Time_:_" + hr+":"+mn+":"+sc , 70, 142, 50, 200);




// Thought
textFont("Arial");
textSize(40);
strokeWeight(1);
text(""+shownthought, 140, -140,500,400);




//function getRandomNumber(min, max){

//let step1 = max - min + 1;
//let step2 = Math.random() * step1;
//let result = Math.floor(step2) + min;

//return result;

//}

//textSize(60);
//textFont("Courier New");
//stroke("blue");
//strokeWeight(5);
//text(" "+a, 140, -140,600,400);










//playSound("Clock-Ticking-C-www.fesliyanstudios.com.mp3",true)

}
