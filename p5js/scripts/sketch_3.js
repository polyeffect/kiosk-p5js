function sketch1(p) {
    let img1, img2, img3;

    p.preload = function() {
        img1 = p.loadImage('/images/header_cat_1.jpg');
        img2 = p.loadImage('/images/header_cat_2.jpg');
        img3 = p.loadImage('/images/header_cat_3.jpg');
    };

    p.setup = function() {
        p.createCanvas(1080, 550, document.getElementById('sketch-1'));
        p.noStroke();
        // p.btn = p.select('#myBtn');
        // p.btn.mouseClicked(p.btnClicked);
    };

    p.draw = function() {
        let sec = Math.floor(p.frameCount / 120);
        let imgNum = sec % 3;

        if (imgNum == 0) {
            p.image(img1, 0, 0);
            p.drawIndicator(517, 520, true);
            p.drawIndicator(535, 520, false);
            p.drawIndicator(553, 520, false);
        } else if (imgNum == 1) {
            p.image(img2, 0, 0);
            p.drawIndicator(517, 520, false);
            p.drawIndicator(535, 520, true);
            p.drawIndicator(553, 520, false);
        } else if (imgNum == 2) {
            p.image(img3, 0, 0);
            p.drawIndicator(517, 520, false);
            p.drawIndicator(535, 520, false);
            p.drawIndicator(553, 520, true);
        } 
    };

    p.drawIndicator = function(x, y, f) {
        if (f == true) {
            p.fill(255, 157, 0);
        } else {
            p.fill(217, 217, 217); 
        }
        
        p.ellipse(x, y, 10);
    };
}

new p5(sketch1);

// Function for second canvas
function sketch2(p) {
    p.setup = function() {
        p.createCanvas(1080, 200, document.getElementById('sketch-2'));
        p.background(220);
    };

    p.draw = function() {

    };
}

new p5(sketch2);