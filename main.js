left_wrist_x =0;
left_wrist_y =0;
right_wrist_x =0;
right_wrist_y =0;
function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
}
function modelLoaded(){
    console.log('model is loaded');
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
       left_wrist_x = result[0].pose.leftWrist.x;
       left_wrist_y = result[0].pose.leftWrist.y;
       right_wrist_x = result[0].pose.rightWrist.x;
       right_wrist_y = result[0].pose.rightWrist.y;
       console.log("leftWristX = "+left_wrist_x+" leftWristY = "+left_wrist_y+" rightWristX = "+right_wrist_x+" rightWristY = "+right_wrist_y);
    }
}