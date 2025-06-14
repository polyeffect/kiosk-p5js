let img1, img2, img3;

function preload() {
    img1 = loadImage('/images/header_cat_1.jpg');
    img2 = loadImage('/images/header_cat_2.jpg');
    img3 = loadImage('/images/header_cat_3.jpg');
}

function setup() {
    createCanvas(1080, 550, document.getElementById('sketch'));
    noStroke();
}

function draw() {
    let sec = Math.floor(frameCount / 120);
    let imgNum = sec % 3;

    if (imgNum == 0) {
        image(img1, 0, 0);
        drawIndicator(517, 520, true);
        drawIndicator(535, 520, false);
        drawIndicator(553, 520, false);
    } else if (imgNum == 1) {
        image(img2, 0, 0);
        drawIndicator(517, 520, false);
        drawIndicator(535, 520, true);
        drawIndicator(553, 520, false);
    } else if (imgNum == 2) {
        image(img3, 0, 0);
        drawIndicator(517, 520, false);
        drawIndicator(535, 520, false);
        drawIndicator(553, 520, true);
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