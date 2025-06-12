function setup() {
    createCanvas(1080, 550, document.getElementById('sketch'));
    background(127);
    noStroke();
}

function draw() {
    let sec = Math.floor(frameCount / 120);
    let imgNum = sec % 3;

    if (imgNum == 0) {
        drawIndicator(500, 520, true);
        drawIndicator(518, 520, false);
        drawIndicator(536, 520, false);
    } else if (imgNum == 1) {
        drawIndicator(500, 520, false);
        drawIndicator(518, 520, true);
        drawIndicator(536, 520, false);
    } else if (imgNum == 2) {
        drawIndicator(500, 520, false);
        drawIndicator(518, 520, false);
        drawIndicator(536, 520, true);
    } 
}

function drawIndicator(x, y, f) {
    if (f == true) {
        fill(255, 157, 0);
    } else {
        fill(217, 217, 217); 
    }
    
    ellipse(x, y, 10);
}