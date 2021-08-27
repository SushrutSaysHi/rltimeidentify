var video = " ";
var classifier1 = " ";
var classifier2 = " ";
function preload() {
     
}

function setup() {
     var canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();

     classifier1 = ml5.imageClassifier('MobileNet', modelLoaded1);
     classifier2 = ml5.imageClassifier('GoogleLens', modelLoaded2);
     
}

function modelLoaded1() {
    console.log("Mn loaded");
}

function modelLoaded2() {
    console.log("lens loaded");
}

function draw() {
    image(video,0 , 0, 300, 300);
    classifier1.classify(video, gotResult1);
    classifier2.classify(video, gotResult2);
}

function gotResult1(error, results) {

    if (error) {
        console.error("Reasons for err are (m) " + error);
    } else {
        console.log(results);
        document.getElementById("obj_name_m").innerHTML = results[0].label;
        document.getElementById("obj_acc_m").innerHTML = results[0].confidence; 
    }

}

function gotResult2(error, results) {

    if (error) {
        console.error("Reasons for err are (g)" + error);
    } else {
        console.log(results);
        document.getElementById("obj_name_g").innerHTML = results[0].label;
        document.getElementById("obj_acc_g").innerHTML = results[0].confidence; 
    }

}