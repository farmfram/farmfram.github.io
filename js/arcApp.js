function resetPage() {
    location.reload();
    return false;
}

//Triangle Calculator
function arcCalculator() {
    let alertState = 0

    //Store input values in appropriate variables(eg. angleA, sideA)
    let radius = +document.getElementById('radius').value
    let angle = +document.getElementById('arc-angle').value
    let arcLength = +document.getElementById('arc-length').value
    let chord = +document.getElementById('chord-length').value
    let height = +document.getElementById('middle-height').value

    function rightAnglePrint() {
        document.getElementById("radius").value = parseFloat(radius.toFixed(4))
        document.getElementById("arc-angle").value = parseFloat(angle.toFixed(2))
        document.getElementById("arc-length").value = parseFloat(arcLength.toFixed(4))
        document.getElementById("chord-length").value = parseFloat(chord.toFixed(4))
        document.getElementById("middle-height").value = parseFloat(height.toFixed(4))
    }

    //Math Functions
    function arcLengthEquation(angle, radius) {
        return ((angle * Math.PI * radius) / (180))
    }
    function chordLengthEquation(angle, radius) {
        return ((Math.sin((angle / 2) * (Math.PI / 180))) * radius * 2)
    }

    function heightEquation(angle, radius) {
        return radius - ((Math.cos((angle / 2) * (Math.PI / 180))) * radius)
    }

    function radiusFromChord(angle, chord) {
        return chord/(Math.sin((angle/2)*(Math.PI/180))*2)
    }


    //check number of inputs recieved
    let inputCount = 0

    //check for user inputs
    let inputTerms = [radius, angle, arcLength, chord, height]
    for (let currentTerm of inputTerms) {
        if (currentTerm !== 0) {
            inputCount++
        }
    }

    // perform calculation
    if (inputCount === 2) {
        switch (true) {

            case (radius !== 0 && angle !== 0):
                console.log("im in")
                arcLength = arcLengthEquation(angle, radius)
                chord = chordLengthEquation(angle, radius)
                height = heightEquation(angle, radius)
                break;

            case (radius !== 0 && arcLength !== 0):
                angle = (arcLength*180)/(radius*Math.PI)
                chord = chordLengthEquation(angle, radius)
                height = heightEquation(angle, radius)
                break;

            case (radius !== 0 && chord !== 0):
                angle = (Math.asin((chord/2)/radius)) * (180/Math.PI)*2
                arcLength = arcLengthEquation(angle, radius)
                height = heightEquation(angle, radius)
                break;

            case (radius !== 0 && height !== 0):
                angle =  (Math.acos((radius-height)/radius))*(180/Math.PI)*2
                chord = chordLengthEquation(angle, radius)
                arcLength = arcLengthEquation(angle, radius)
                break;

            case (angle !== 0 && arcLength !== 0):
                radius = ((arcLength*180)/(angle*Math.PI))
                chord = chordLengthEquation(angle, radius)
                height = heightEquation(angle, radius)
                break;

            case (angle !== 0 && chord !== 0):
                radius = radiusFromChord(angle, chord)
                arcLength = arcLengthEquation(angle, radius)
                height = heightEquation(angle, radius)
                break;

            case (angle !== 0 && height !== 0):
                radius = height/(1-Math.cos((angle/2)*(Math.PI/180)))
                chord = chordLengthEquation(angle, radius)
                arcLength = arcLengthEquation(angle, radius)
                break;

            case (arcLength !== 0 && chord !== 0):
                alert("No Bueno")   // Alert for invalid inputs
                alertState = 1
                resetPage()
                break;

            case (arcLength !== 0 && height !== 0):
                alert("No Bueno")   // Alert for invalid inputs
                alertState = 1
                resetPage()
                break;

            case (chord !== 0 && height !== 0):
                radius = (height**2+(chord/2)**2)/(2*height)
                angle = (Math.acos((radius-height)/radius)*(180/Math.PI))*2
                arcLength = arcLengthEquation(angle, radius)
                break;

            default:
                alert("Something went wrong")   // Alert for invalid inputs
                alertState = 1
                resetPage()
                break;
        }
    } else {
        alert("Two values required")   // Alert for invalid inputs
        alertState = 1
        resetPage()
    }

    if (alertState === 0) {
        rightAnglePrint()
    }
}

let arcButton = document.getElementById('arc-calculate')
arcButton.addEventListener('click', arcCalculator)

let buttonVar1 = document.getElementById('arc-reset')
buttonVar1.addEventListener('click', resetPage)