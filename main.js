 canvas = document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
 
 var car1_width=120;
 var car1_height=90;
 var car1_image="Orange_Car.png";
 var car1_x=20;
 var car1_y=70;

 var car2_width=120;
 var car2_height=90;
 var car2_image="Blue_Car.png";
 var car2_x=20;
 var car2_y=250;

 var car3_width=120;
 var car3_height=90;
 var car3_image="Green_Car.png";
 var car3_x=20;
 var car3_y=420;

 var background_image="Racing.jpg";

 function add(){
bg_image= new Image();
bg_image.onload= uploadBackground;
bg_image.src=background_image;

bg_car1= new Image();
bg_car1.onload= uploadcar1;
bg_car1.src=car1_image;

bg_car2= new Image();
bg_car2.onload= uploadcar2;
bg_car2.src=car2_image;


bg_car3= new Image();
bg_car3.onload= uploadcar3;
bg_car3.src=car3_image;
}

function uploadBackground(){
ctx.drawImage(bg_image,0,0,canvas.width,canvas.height);    
} 
function uploadcar1(){
ctx.drawImage(bg_car1,car1_x,car1_y,car1_width,car1_height);    
}
function uploadcar2(){
ctx.drawImage(bg_car2,car2_x,car2_y,car2_width,car2_height);  
}
function uploadcar3(){
ctx.drawImage(bg_car3,car3_x,car3_y,car3_width,car3_height); 
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keyPress= e.keyCode;
console.log(keyPress);
if(keyPress=='37'){
car1_left();
console.log("left arrow key");
}
if(keyPress=='39'){
car1_right();
console.log("right arrow key");
}
if(keyPress=='65'){
car2_al();
console.log("a arrow key");
}
if(keyPress=='68'){
car2_dr();
console.log("d arrow key");
}
if(keyPress=='75'){
car3_kl();
console.log("k arrow key");
}
if(keyPress=='76'){
car3_lr();
console.log("l arrow key");
}
if(car1_x>=600){
document.getElementById("game_status").innerHTML="Car 1 Wins!!";    
}
}
if(car2_x>=600){
document.getElementById("game_status").innerHTML="Car 2 Wins!!";    
}
if(car3_x>=600){
document.getElementById("game_status").innerHTML="Car 3 Wins!!";    
}
function car1_left(){
if(car1_x>=0){
car1_x=car1_x-10;
uploadBackground();uploadcar1();uploadcar2();uploadcar3();    
}  
}
function car1_right(){
if(car1_x<=500){
car1_x=car1_x+10;
uploadBackground();uploadcar1();uploadcar2();uploadcar3();    
}  
}
function car2_al(){
if(car2_x>=0){
car2_x=car2_x-10;
uploadBackground();uploadcar1();uploadcar2();uploadcar3();    
}  
}
function car2_dr(){
if(car2_x<=500){
car2_x=car2_x+10;
uploadBackground();uploadcar1();uploadcar2();uploadcar3();    
}  
}
function car3_kl(){
if(car3_x>=0){
car3_x=car3_x-10;
uploadBackground();uploadcar1();uploadcar2();uploadcar3();    
}  
}
function car3_lr(){
if(car3_x<=500){
car3_x=car3_x+10;
uploadBackground();uploadcar1();uploadcar2();uploadcar3();    
}  
}
    
    