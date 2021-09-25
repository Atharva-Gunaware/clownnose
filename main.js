nose_x=0;
nose_y=0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/FRhh361s/clownnose.jpg');
}

function setup(){
    canvas= createCanvas(350,350);
    canvas.position(600,200);
    video= createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is loaded');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
console.log("nose x="+ results[0].pose.nose.x);
console.log("nose y="+ results[0].pose.nose.y);
nose_x=results[0].pose.nose.x-15;
nose_y=results[0].pose.nose.y-15;
}
}

function draw(){
 image(video,0, 0 , 350, 350);
 //circle(nose_x,nose_y,30);
 //fill("red");
 //stroke("blue");
 image(clown_nose,nose_x,nose_y,30,30);
}

function take_snapshot(){
    save('filterimagenose.png');
}