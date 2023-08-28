const inputs = document.querySelectorAll('.angle-input')
const theTriangleBtn = document.querySelector('#the-triangle-btn')
const outputE1 = document.querySelector('#output');

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;
}

function theTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value), Number(inputs[2].value));
    
    if(sumOfAngles === 180){
        console.log("Yay, The angles form a triangle");
    }
    else {
        console.log("Oh Oh! The angles don't form a triangle");
    }
}

theTriangleBtn.addEventListener("click", theTriangle)