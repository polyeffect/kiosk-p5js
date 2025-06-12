// Function for first canvas
function sketch1(p) {
    let btn;

    p.setup = function() {
        p.createCanvas(1080, 500, document.getElementById('sketch-1'));
        p.background(220);
        p.btn = p.select('#myBtn');
        p.btn.mouseClicked(p.btnClicked);
    };

    p.draw = function() {

    };

    p.btnClicked = function() {
        p.background(255, 0, 0);
    }
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