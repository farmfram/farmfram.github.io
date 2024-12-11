function resetPage() {
    location.reload();
    return false;
}

//Triangle Calculator
function coneCalculator() {
    let alertState = 0

    //Store input values in appropriate variables(eg. angleA, sideA)
    let height = +document.getElementById('height').value
    let topDiameter = +document.getElementById('top-diameter').value
    let bottomDiameter = +document.getElementById('bottom-diameter').value

    function conePrint() {
        document.getElementById('pattern-angle').value = parseFloat(patternAngle.toFixed(2))
        document.getElementById('inner-radius').value = parseFloat(innerRadius.toFixed(4))
        document.getElementById('outer-radius').value = parseFloat(outerRadius.toFixed(4))
        document.getElementById('chord-length').value = parseFloat(chord.toFixed(4))
        const scrollDown = document.getElementById("result-container");

        scrollDown.scrollIntoView();
    }

    if(topDiameter < bottomDiameter){
        let sideAngle = (Math.atan(height/((bottomDiameter-topDiameter)/2)))//left in radians
        outerRadius = (bottomDiameter/2)/Math.cos(sideAngle)
        innerRadius = (topDiameter/2)/Math.cos(sideAngle)
        let halfArcLength = (bottomDiameter*Math.PI)/2
        patternAngle = (halfArcLength*180)/(outerRadius*Math.PI)
        chord =  ((Math.sin((patternAngle / 2) * (Math.PI / 180))) * outerRadius * 2)
        conePrint()
    }else{
        alert("Something went wrong!")
        resetPage()
    }

}

let coneButton = document.getElementById('coneCalculate')
coneButton.addEventListener('click', coneCalculator)

let buttonVar1 = document.getElementById('cone-reset')
buttonVar1.addEventListener('click', resetPage)