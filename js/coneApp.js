function resetPage() {
    location.reload();
    return false;
}

//Triangle Calculator
function coneCalculator() {
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

    if (alertState === 0) {
        rightAnglePrint()
    }
}

let coneButton = document.getElementById('cone-calculate')
coneButton.addEventListener('click', coneCalculator)

let buttonVar1 = document.getElementById('cone-reset')
buttonVar1.addEventListener('click', resetPage)