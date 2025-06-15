function sketch1(p) {
    let img1, img2, img3;

    p.preload = function() { // 함수 표현식 (Function Expression)
        img1 = p.loadImage('/images/banner_cat_1.jpg');
        img2 = p.loadImage('/images/banner_cat_2.jpg');
        img3 = p.loadImage('/images/banner_cat_3.jpg');
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
    let img1, img2, img3;
    let leftArr, rightArr;
    let imgNum = 0;

    p.preload = function() {
        img1 = p.loadImage('/images/gallery_cat_1.jpg');
        img2 = p.loadImage('/images/gallery_cat_2.jpg');
        img3 = p.loadImage('/images/gallery_cat_3.jpg');
    };

    p.setup = function() {
        p.createCanvas(980, 500, document.getElementById('sketch-2'));
        p.background(220);
        p.noStroke();

        leftArr = p.select('#left-arrow');
        leftArr.mouseClicked(p.leftArrClicked);
        rightArr = p.select('#right-arrow');
        rightArr.mouseClicked(p.rightArrClicked);
    };

    p.draw = function() {
        if (imgNum == 0) {
            p.image(img1, 0, 0);
        } else if (imgNum == 1) {
            p.image(img2, 0, 0);
        } else if (imgNum == 2) {
            p.image(img3, 0, 0);
        }
    };

    p.leftArrClicked = function() {
        imgNum--;
        if (imgNum < 0) {
            imgNum = 2;
        }
    };

    p.rightArrClicked = function() {
        imgNum++;
        if (imgNum > 2) {
            imgNum = 0;
        }
    };
}

new p5(sketch2);