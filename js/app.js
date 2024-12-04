///Calculate button
// create on click function for calculate button
//check that only 2 inputs have been given
//perform calculations
//fill in resulting values

function rightAngleCalculator() {
    console.log('lift OFF!')

    //Store input values in appropriate variables(eg. angleA, sideA)
    let angleA = +document.getElementById('angle-a').value
    let angleB = +document.getElementById('angle-b').value
    let sideA = +document.getElementById('side-a').value
    let sideB = +document.getElementById('side-b').value
    let sideC = +document.getElementById('side-c').value

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
        if(angleA !== 0 && sideA !== 0){
            angleB = (90 - angleA)
            sideB = sideA / Math.tan(angleA * (Math.PI/180))
            sideC = sideA / Math.sin(angleA * (Math.PI/180))
        }
        if(angleA !== 0 && sideB !== 0){
            angleB = (90 - angleA)
            sideA = sideB * Math.tan(angleA * (Math.PI/180))
            sideC = sideB / Math.cos(angleA * (Math.PI/180))   
        }
        if(angleA !== 0 && sideC !== 0){
            angleB = (90 - angleA)
            sideA = sideC * Math.sin(angleA * (Math.PI/180))
            sideB = sideC * Math.cos(angleA * (Math.PI/180))
        }

        //angleB options
        if(angleB !== 0 && sideA !== 0){
            angleA = (90 - angleB)
            sideB = sideA * Math.tan(angleB * (Math.PI/180))
            sideC = sideA / Math.cos(angleB * (Math.PI/180))
        }
        if(angleB !== 0 && sideB !== 0){
            angleA = (90 - angleB)
            sideA = sideB / Math.tan(angleB * (Math.PI/180))
            sideC = sideB / Math.sin(angleB * (Math.PI/180))
        }
        if(angleB !== 0 && sideC !== 0){
            angleA = (90 - angleB)
            sideA = sideC * Math.cos(angleB * (Math.PI/180))
            sideB = sideC * Math.sin(angleB * (Math.PI/180))
        }

        // Side options
        if (sideA !== 0 && sideB !== 0) {
            angleA = Math.atan2(sideA, sideB) * (180/Math.PI)
            angleB = (90 - angleA)
            sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
        }
        if (sideA !== 0 && sideC !== 0) {
            angleA = Math.asin(sideA / sideC)  / (Math.PI/180)
            angleB = (90 - angleA)
            sideB = Math.sqrt(Math.pow(sideC, 2) - Math.pow(sideA, 2))
        }
        if (sideC !== 0 && sideB !== 0) {
            angleA =  Math.acos(sideB / sideC)  / (Math.PI/180)
            angleB = (90 - angleA)
            sideA = Math.sqrt(Math.pow(sideC, 2) - Math.pow(sideB, 2))
        }

    }else {           // Alert for invalid inputs
        alert("must enter either two sides or a side and an angle")
    }

    // Handle Floating point errors - later add the toFixed method when update table
    // angleA = +angleA.toFixed(2)
    // angleB = +angleB.toFixed(2)
    // sideA = +sideA.toFixed(4)
    // sideB = +sideB.toFixed(4)
    // sideC = +sideC.toFixed(4)

    document.getElementById("angle-a").value = parseFloat(angleA.toFixed(2))
    document.getElementById("angle-b").value = parseFloat(angleB.toFixed(2))
    document.getElementById("side-a").value = parseFloat(sideA.toFixed(4))
    document.getElementById("side-b").value = parseFloat(sideB.toFixed(4))
    document.getElementById("side-c").value = parseFloat(sideC.toFixed(4))

    console.log("angle A: " + angleA)
    console.log("angle B: " + angleB)
    console.log("side A: " + sideA)
    console.log("side B: " + sideB)
    console.log("side C: " + sideC)
}

let rightAngleButton = document.getElementById('rightAngleCalculate')
rightAngleButton.addEventListener('click', rightAngleCalculator)

//reset button
// link with anchor tag to refresh page
// reset-button

//Change how this functions later, As this is a poor solution
//all fields shall be updated to empty instead of refreshing the entire page.
function resetPage() {
    location.reload();
    return false;
}

let buttonVar = document.getElementById('90reset')

buttonVar.addEventListener('click', resetPage)