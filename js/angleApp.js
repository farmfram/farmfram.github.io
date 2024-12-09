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

    //check for user inputs
    let inputCount = 0
    let angleCount = 0
    let sideCount = 0
    let angleTerms = [angleA, angleB]
    let sideTerms = [sideA, sideB, sideC]
    for (let currentTerm of angleTerms) {
        if (currentTerm !== 0) {
            angleCount++
            inputCount++
        }
    }
    for (let currentTerm of sideTerms) {
        if (currentTerm !== 0) {
            sideCount++
            inputCount++
        }
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
            sideC = Math.sqrt((sideA ** 2) + (sideB ** 2))
        }
        if (sideA !== 0 && sideC !== 0) {
            if (sideC < sideA) {
                alert("Side C must be larger than Side A")  // Alert for invalid inputs
                alertState = 1
                resetPage()
            } else {
                angleA = Math.asin(sideA / sideC) / (Math.PI / 180)
                angleB = (90 - angleA)
                sideB = Math.sqrt((sideC ** 2) - (sideA ** 2))
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
                sideA = Math.sqrt((sideC ** 2) - (sideB ** 2))
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

    //Math Functions
    function cosineLaw(angle, side1, side2) {
        return Math.sqrt((side1 ** 2) + (side2 ** 2) - (2 * side1 * side2 * Math.cos(angle * (Math.PI / 180))))
    }

    function reverseCosineLaw(sideA, sideB, sideC) {
        return (Math.acos((sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)) * (180 / Math.PI))
    }

    function sineLawSide(angle1, angle2, side1) {
        return ((side1 * Math.sin(angle2 * (Math.PI / 180))) / Math.sin(angle1 * (Math.PI / 180)))
    }

    function sineLawAngle(angle1, side1, side2) {
        return (Math.asin((Math.sin(angle1 * (Math.PI / 180)) * side2) / side1) * (180 / Math.PI))
    }

    //check number of inputs recieved
    let inputCount = 0
    let angleCount = 0
    let sideCount = 0

    function findAngleA() {
        return (180 - angleC - angleB)
    }
    function findAngleB() {
        return (180 - angleA - angleC)
    }
    function findAngleC() {
        return (180 - angleA - angleB)
    }

    //check for user inputs
    let angleTerms = [angleA, angleB, angleC]
    let sideTerms = [sideA, sideB, sideC]
    for (let currentTerm of angleTerms) {
        if (currentTerm !== 0) {
            angleCount++
            inputCount++
        }
    }
    for (let currentTerm of sideTerms) {
        if (currentTerm !== 0) {
            sideCount++
            inputCount++
        }
    }

    // perform calculation
    if (inputCount === 3 && ((sideCount === 2 && angleCount === 1) || (sideCount === 1 && angleCount === 2) || (sideCount === 3 && angleCount === 0))) { //check that a valid number of inputs are recieved before deciding what operation to perform
        switch (true) {

            // Cosine Law
            case (angleC !== 0 && sideA !== 0 && sideB !== 0):
                sideC = cosineLaw(angleC, sideA, sideB)
                angleA = sineLawAngle(angleC, sideC, sideA)
                angleB = sineLawAngle(angleC, sideC, sideB)
                break;

            case (angleB !== 0 && sideA !== 0 && sideC !== 0):
                sideB = cosineLaw(angleB, sideA, sideC)
                angleA = sineLawAngle(angleB, sideB, sideA)
                angleC = sineLawAngle(angleB, sideB, sideC)
                break;

            case (angleA !== 0 && sideC !== 0 && sideB !== 0):
                sideA = cosineLaw(angleA, sideC, sideB)
                angleC = sineLawAngle(angleA, sideA, sideC)
                angleB = sineLawAngle(angleA, sideA, sideB)
                break;

            // Two Angles and a Side
            case (sideA !== 0 && angleA !== 0 && angleB !== 0):
                sideB = sineLawSide(angleA, angleB, sideA)
                angleC = findAngleC()
                sideC = sineLawSide(angleA, angleC, sideA)
                break;

            case (sideA !== 0 && angleA !== 0 && angleC !== 0):
                sideC = sineLawSide(angleA, angleC, sideA)
                angleB = findAngleB()
                sideB = sineLawSide(angleA, angleB, sideA)
                break;

            case (sideB !== 0 && angleB !== 0 && angleA !== 0):
                sideA = sineLawSide(angleB, angleA, sideB)
                angleC = findAngleC()
                sideC = sineLawSide(angleB, angleC, sideB)
                break;

            case (sideB !== 0 && angleB !== 0 && angleC !== 0):
                sideC = sineLawSide(angleB, angleC, sideB)
                angleA = findAngleA()
                sideA = sineLawSide(angleB, angleA, sideB)
                break;

            case (sideC !== 0 && angleC !== 0 && angleA !== 0):
                sideA = sineLawSide(angleC, angleA, sideC)
                angleB = findAngleB()
                sideB = sineLawSide(angleC, angleB, sideC)
                break;

            case (sideC !== 0 && angleC !== 0 && angleB !== 0):
                sideB = sineLawSide(angleC, angleB, sideC)
                angleA = findAngleA()
                sideA = sineLawSide(angleC, angleA, sideC)
                break;

            // Two Sides and an Angle
            case (angleA !== 0 && sideA !== 0 && sideB !== 0):
                angleB = sineLawAngle(angleA, sideA, sideB)
                angleC = (180 - angleA - angleB)
                sideC = sineLawSide(angleA, angleC, sideA)
                break;

            case (angleA !== 0 && sideA !== 0 && sideC !== 0):
                angleC = sineLawAngle(angleA, sideA, sideC)
                angleB = findAngleB()
                sideB = sineLawSide(angleA, angleB, sideA)
                break;

            case (angleB !== 0 && sideB !== 0 && sideA !== 0):
                console.log("we are here")
                angleA = sineLawAngle(angleB, sideB, sideA)
                angleC = findAngleC()
                sideC = sineLawSide(angleB, angleC, sideB)
                break;

            case (angleB !== 0 && sideB !== 0 && sideC !== 0):
                angleC = sineLawAngle(angleB, sideB, sideC)
                angleA = findAngleA()
                sideA = sineLawSide(angleB, angleA, sideB)
                break;

            case (angleC !== 0 && sideC !== 0 && sideA !== 0):
                angleA = sineLawAngle(angleC, sideC, sideA)
                angleB = findAngleB()
                sideB = sineLawSide(angleC, angleB, sideC)
                break;

            case (angleC !== 0 && sideC !== 0 && sideB !== 0):
                angleB = sineLawAngle(angleC, sideC, sideB)
                angleA = findAngleA()
                sideA = sineLawSide(angleC, angleA, sideC)
                break;

            // Three Sides
            case (sideA !== 0 && sideB !== 0 && sideC !== 0):
                angleC = reverseCosineLaw(sideA, sideB, sideC)
                angleA = sineLawAngle(angleC, sideC, sideA)
                angleB = findAngleB()
                break;

            //all three
            case (angleA !== 0 && angleB !== 0 && sideC !== 0):
                angleC = findAngleC()
                sideA = sineLawSide(angleC, angleA, sideC)
                sideB = sineLawSide(angleC, angleB, sideC)
                break;
            case (angleA !== 0 && angleC !== 0 && sideB !== 0):
                angleB = findAngleB()
                sideA = sineLawSide(angleB, angleA, sideB)
                sideC = sineLawSide(angleB, angleC, sideB)
                break;
            case (angleB !== 0 && angleC !== 0 && sideA !== 0):
                angleA = findAngleA()
                sideB = sineLawSide(angleA, angleB, sideA)
                sideC = sineLawSide(angleA, angleC, sideA)
                break;
        }
    } else {
        alert("Three values are required, one must be a side")   // Alert for invalid inputs
        alertState = 1
        resetPage()
    }

    if (alertState === 0) {
        rightAnglePrint()
    }
}

//calculator functions
let rightAngleButton = document.getElementById('rightAngleCalculate')
rightAngleButton.addEventListener('click', rightAngleCalculator)

let triangleButton = document.getElementById('triangleCalculate')
triangleButton.addEventListener('click', triangleCalculator)

// reset-buttons
let buttonVar1 = document.getElementById('right-angle-reset')
buttonVar1.addEventListener('click', resetPage)

let buttonVar2 = document.getElementById('triangle-reset')
buttonVar2.addEventListener('click', resetPage)