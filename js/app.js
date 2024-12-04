function resetPage() {
    location.reload();
    return false;
}

function rightAngleCalculator() {
    let alertState = 0

    //Store input values in appropriate variables(eg. angleA, sideA)
    let angleA = +document.getElementById('angle-a').value
    let angleB = +document.getElementById('angle-b').value
    let sideA = +document.getElementById('side-a').value
    let sideB = +document.getElementById('side-b').value
    let sideC = +document.getElementById('side-c').value

    function rightAnglePrint() {
        document.getElementById("angle-a").value = parseFloat(angleA.toFixed(2))
        document.getElementById("angle-b").value = parseFloat(angleB.toFixed(2))
        document.getElementById("side-a").value = parseFloat(sideA.toFixed(4))
        document.getElementById("side-b").value = parseFloat(sideB.toFixed(4))
        document.getElementById("side-c").value = parseFloat(sideC.toFixed(4))
    }

    //check number of inputs recieved
    let inputCount = 0
    if (angleA !== 0) {
        inputCount++
    }
    if (angleB !== 0) {
        inputCount++
    }
    if (sideA !== 0) {
        inputCount++
    }
    if (sideB !== 0) {
        inputCount++
    }
    if (sideC !== 0) {
        inputCount++
    }
    // perform calculation
    if (inputCount === 2 && (angleA === 0 || angleB === 0) && (angleA < 90 && angleB < 90) && (angleA >= 0 && angleB >= 0)) {

        // angleA options
        if (angleA !== 0 && sideA !== 0) {
            angleB = (90 - angleA)
            sideB = sideA / Math.tan(angleA * (Math.PI / 180))
            sideC = sideA / Math.sin(angleA * (Math.PI / 180))
        }
        if (angleA !== 0 && sideB !== 0) {
            angleB = (90 - angleA)
            sideA = sideB * Math.tan(angleA * (Math.PI / 180))
            sideC = sideB / Math.cos(angleA * (Math.PI / 180))
        }
        if (angleA !== 0 && sideC !== 0) {
            angleB = (90 - angleA)
            sideA = sideC * Math.sin(angleA * (Math.PI / 180))
            sideB = sideC * Math.cos(angleA * (Math.PI / 180))
        }

        //angleB options
        if (angleB !== 0 && sideA !== 0) {
            angleA = (90 - angleB)
            sideB = sideA * Math.tan(angleB * (Math.PI / 180))
            sideC = sideA / Math.cos(angleB * (Math.PI / 180))
        }
        if (angleB !== 0 && sideB !== 0) {
            angleA = (90 - angleB)
            sideA = sideB / Math.tan(angleB * (Math.PI / 180))
            sideC = sideB / Math.sin(angleB * (Math.PI / 180))
        }
        if (angleB !== 0 && sideC !== 0) {
            angleA = (90 - angleB)
            sideA = sideC * Math.cos(angleB * (Math.PI / 180))
            sideB = sideC * Math.sin(angleB * (Math.PI / 180))
        }

        // Side options
        if (sideA !== 0 && sideB !== 0) {
            angleA = Math.atan2(sideA, sideB) * (180 / Math.PI)
            angleB = (90 - angleA)
            sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
        }
        if (sideA !== 0 && sideC !== 0) {
            if (sideC < sideA) {
                alert("Side C must be larger than Side A")  // Alert for invalid inputs
                alertState = 1
                resetPage()
            } else {
                angleA = Math.asin(sideA / sideC) / (Math.PI / 180)
                angleB = (90 - angleA)
                sideB = Math.sqrt(Math.pow(sideC, 2) - Math.pow(sideA, 2))
            }
        }
        if (sideC !== 0 && sideB !== 0) {
            if (sideC < sideB) {
                alert("Side C must be larger than Side B")  // Alert for invalid inputs
                alertState = 1
                resetPage()
            } else {
                angleA = Math.acos(sideB / sideC) / (Math.PI / 180)
                angleB = (90 - angleA)
                sideA = Math.sqrt(Math.pow(sideC, 2) - Math.pow(sideB, 2))
            }
        }

    } else {
        alert("must enter either two sides or a side and an angle")   // Alert for invalid inputs
        alertState = 1
        resetPage()
    }

    if (alertState === 0) {
        rightAnglePrint()
    }
    console.log("angle A: " + angleA)
    console.log("angle B: " + angleB)
    console.log("side A: " + sideA)
    console.log("side B: " + sideB)
    console.log("side C: " + sideC)
}


//Triangle Calculator
function triangleCalculator() {
    let alertState = 0

    //Store input values in appropriate variables(eg. angleA, sideA)
    let angleA = +document.getElementById('tri-angle-a').value
    let angleB = +document.getElementById('tri-angle-b').value
    let angleC = +document.getElementById('tri-angle-c').value
    let sideA = +document.getElementById('tri-side-a').value
    let sideB = +document.getElementById('tri-side-b').value
    let sideC = +document.getElementById('tri-side-c').value

    function rightAnglePrint() {
        document.getElementById("tri-angle-a").value = parseFloat(angleA.toFixed(2))
        document.getElementById("tri-angle-b").value = parseFloat(angleB.toFixed(2))
        document.getElementById("tri-angle-c").value = parseFloat(angleC.toFixed(2))
        document.getElementById("tri-side-a").value = parseFloat(sideA.toFixed(4))
        document.getElementById("tri-side-b").value = parseFloat(sideB.toFixed(4))
        document.getElementById("tri-side-c").value = parseFloat(sideC.toFixed(4))
    }

    //check number of inputs recieved
    let inputCount = 0
    if (angleA !== 0) {
        inputCount++
    }
    if (angleB !== 0) {
        inputCount++
    }
    if (angleC !== 0) {
        inputCount++
    }
    if (sideA !== 0) {
        inputCount++
    }
    if (sideB !== 0) {
        inputCount++
    }
    if (sideC !== 0) {
        inputCount++
    }
    // perform calculation
    if (inputCount === 3 && (angleA === 0 || angleB === 0) && (angleA < 90 && angleB < 90) && (angleA >= 0 && angleB >= 0)) { //this section needs re-work for this calculator and is currently commented out, 
        //turn into two different if sections for cos and sin
        //create a cosine law section and a sin law section^

        // angleA options
        if (angleA !== 0 && sideA !== 0) {
            angleB = (90 - angleA)
            sideB = sideA / Math.tan(angleA * (Math.PI / 180))
            sideC = sideA / Math.sin(angleA * (Math.PI / 180))
        }
        if (angleA !== 0 && sideB !== 0) {
            angleB = (90 - angleA)
            sideA = sideB * Math.tan(angleA * (Math.PI / 180))
            sideC = sideB / Math.cos(angleA * (Math.PI / 180))
        }
        if (angleA !== 0 && sideC !== 0) {
            angleB = (90 - angleA)
            sideA = sideC * Math.sin(angleA * (Math.PI / 180))
            sideB = sideC * Math.cos(angleA * (Math.PI / 180))
        }

        //angleB options
        if (angleB !== 0 && sideA !== 0) {
            angleA = (90 - angleB)
            sideB = sideA * Math.tan(angleB * (Math.PI / 180))
            sideC = sideA / Math.cos(angleB * (Math.PI / 180))
        }
        if (angleB !== 0 && sideB !== 0) {
            angleA = (90 - angleB)
            sideA = sideB / Math.tan(angleB * (Math.PI / 180))
            sideC = sideB / Math.sin(angleB * (Math.PI / 180))
        }
        if (angleB !== 0 && sideC !== 0) {
            angleA = (90 - angleB)
            sideA = sideC * Math.cos(angleB * (Math.PI / 180))
            sideB = sideC * Math.sin(angleB * (Math.PI / 180))
        }

        // Side options
        if (sideA !== 0 && sideB !== 0) {
            angleA = Math.atan2(sideA, sideB) * (180 / Math.PI)
            angleB = (90 - angleA)
            sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
        }
        if (sideA !== 0 && sideC !== 0) {
            if (sideC < sideA) {
                alert("Side C must be larger than Side A")  // Alert for invalid inputs
                alertState = 1
                resetPage()
            } else {
                angleA = Math.asin(sideA / sideC) / (Math.PI / 180)
                angleB = (90 - angleA)
                sideB = Math.sqrt(Math.pow(sideC, 2) - Math.pow(sideA, 2))
            }
        }
        if (sideC !== 0 && sideB !== 0) {
            if (sideC < sideB) {
                alert("Side C must be larger than Side B")  // Alert for invalid inputs
                alertState = 1
                resetPage()
            } else {
                angleA = Math.acos(sideB / sideC) / (Math.PI / 180)
                angleB = (90 - angleA)
                sideA = Math.sqrt(Math.pow(sideC, 2) - Math.pow(sideB, 2))
            }
        }

    } else {
        alert("must enter either two sides or a side and an angle")   // Alert for invalid inputs
        alertState = 1
        resetPage()
    }

    if (alertState === 0) {
        rightAnglePrint()
    }
    console.log("angle A: " + angleA)
    console.log("angle B: " + angleB)
    console.log("angle C: " + angleC)
    console.log("side A: " + sideA)
    console.log("side B: " + sideB)
    console.log("side C: " + sideC)
}



//calculator functions
let rightAngleButton = document.getElementById('rightAngleCalculate')
rightAngleButton.addEventListener('click', rightAngleCalculator)

// let triangleButton = document.getElementById('triangleCalculate')
// triangleButton.addEventListener('click', triangleCalculator)

// reset-buttons
let buttonVar1 = document.getElementById('right-angle-reset')
buttonVar1.addEventListener('click', resetPage)

let buttonVar2 = document.getElementById('triangle-reset')
buttonVar2.addEventListener('click', resetPage)