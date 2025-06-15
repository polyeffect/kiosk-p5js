// Function for first canvas
let img1, img2, img3;
let leftArr, rightArr;
let imgNum = 0;

function preload() {
    img1 = loadImage('/images/gallery_cat_1.jpg');
    img2 = loadImage('/images/gallery_cat_2.jpg');
    img3 = loadImage('/images/gallery_cat_3.jpg');
}

function setup() {
    createCanvas(980, 500, document.getElementById('sketch'));
    
    leftArr = select('#left-arrow');
    leftArr.mouseClicked(leftArrClicked);
    rightArr = select('#right-arrow');
    rightArr.mouseClicked(rightArrClicked);
}

function draw() {
    if (imgNum == 0) {
        image(img1, 0, 0);
    } else if (imgNum == 1) {
        image(img2, 0, 0);
    } else if (imgNum == 2) {
        image(img3, 0, 0);
    }
}

function leftArrClicked() {
    imgNum--;
    if (imgNum < 0) {
        imgNum = 2;
    }
}

function rightArrClicked() {
    imgNum++;
    if (imgNum > 2) {
        imgNum = 0;
    }
}
