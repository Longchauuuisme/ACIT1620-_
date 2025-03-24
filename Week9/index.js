let x = 32;
let y = 44;
let radius = 5;

var centerX = 0;
let centerY = 0;
let witdh = 600;
let height = 400;

function setup(witdh, height){
    centerX = witdh/2;
    centerY = height/2;
}

function computeDistance(x1, y1, x2, y2){
    let dx = x1 - x2;
    let dy = y1 - y2;
    let d2 = dx * dx + dy * dy;
    let d = Math.sqrt(d2);
    return d;
}
setup(witdh, height);
let area = circleArea(radius);
let distance = computeDistance(x, y, centerX, centerY);
alert("Area: " + area)
alert("Distance: " + distance)