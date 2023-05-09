canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car2_width=75;
car2_height=100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

car2_x=5;
car2_y=225;


function add() {
	backgroundImagetag=new Image();
	backgroundImagetag.onload=uploadBackground;
	backgroundImagetag.src=backgroundImage;
	car2tag=new Image();
	car2tag.onload=uploadGreenCar;
	car2tag.src=greencarImage;
}

function uploadBackground() {
	ctx.drawImage(backgroundImagetag,0,0,canvas.width,canvas.height);

}

function uploadGreenCar() {
	ctx.drawImage(car2tag,car2_x,car2_y,car2_width,car2_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car2_y >=0)
    {
        car2_y = car2_y - 10;
        console.log("Quando direcional cima for pressionada,  x = " + car2_x + " | y = " +car2_y);
         uploadBackground();
         uploadGreenCar();
    }
}

function down()
{
	if(car2_y <=500)
    {
       car2_y = car2_y + 10;
        console.log("Quando direcional baixo for pressionada,  x = " + car2_x+ " | y = " +car2_y);
         uploadBackground();
         uploadGreenCar();
    }
}
function left()
{
	if(roverX >=0)
    {
        car2_x = car2_x - 10;
        console.log("Quando direcional esquerda for pressionada,  x = " + car2_x + " | y = " +car2_y);
         uploadBackground();
        uploadGreenCar();
    }
}
function right()
{
	if(roverX <=700)
    {
        car2_x = car2_x+ 10;
        console.log("Quando direcional direita for pressionada,  x = " + car2_x + " | y = " +car2_y);
         uploadBackground();
         uploadGreenCar();
		
		}
	}