function resetPage() {
    location.reload();
    return false;
}

//Triangle Calculator
function keyCalculator() {
    let alertState = 0

    //Store input values in appropriate variables(eg. angleA, sideA)
    let diameter = +document.getElementById('diameter').value
    let keyWidth = +document.getElementById('key-size').value
    let keyDepth = +document.getElementById('key-depth').value

    function keyPrint() {
        document.getElementById("diameter").value = parseFloat(diameter.toFixed(4))
        document.getElementById("key-size").value = parseFloat(keyWidth.toFixed(4))
        document.getElementById("key-depth").value = parseFloat(keyDepth.toFixed(4))
    }

    // perform calculation
    if (diameter>0 && keyWidth>0 && keyDepth===0) {
        keyDepth = ((diameter/2.0)-(Math.sqrt(((diameter/2.0)**2)-((keyWidth/2.0)**2))))+(keyWidth/2.0);
    } else {
        alert("Two Positive values required")   // Alert for invalid inputs
        alertState = 1
        resetPage()
    }

    if (alertState === 0) {
        keyPrint()
    }
}

let keyButton = document.getElementById('key-calculate')
keyButton.addEventListener('click', keyCalculator)

let buttonVar1 = document.getElementById('key-reset')
buttonVar1.addEventListener('click', resetPage)