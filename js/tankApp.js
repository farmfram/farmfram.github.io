let runState = 0;

function resetPage() {
    location.reload();
    return false;
}

function stateCheck() {
    if (runState === 0) {
        createPartForm();
    }
    else {
        createPartTable();
    }
}

function createPartForm() {
    let formCount = +document.getElementById('part-count').value

    const tankLength = document.createElement("label");
    tankLength.className = "new-bar-title";
    tankLength.for = "tank-circumference"
    tankLength.innerHTML = "<h3>Actual Tank Circumference</h3>"//innerHTML displays inside the tag
    document.getElementById("tank-inputs").appendChild(tankLength)

    const tankLength2 = document.createElement("input");
    tankLength2.className = "new-bar";
    tankLength2.id = "tank-circumference"
    tankLength2.type = "number"
    document.getElementById("tank-inputs").appendChild(tankLength2)

     // create data input fields
    for (i = 0; i < formCount; i++) {

        let partNumber = "Part-" + i
        let inputNumber = "input-" + i

        const newLine = document.createElement("hr");
        newLine.className = "new-line";
        document.getElementById("part-output-display").appendChild(newLine)

        const nameIt1 = document.createElement("label");
        nameIt1.className = "new-bar-title";
        nameIt1.for = partNumber
        nameIt1.innerHTML = "<h3>Part Name</h3>"//innerHTML displays inside the tag
        document.getElementById("part-output-display").appendChild(nameIt1)

        const getIt1 = document.createElement("input");
        getIt1.className = "new-bar";
        getIt1.id = partNumber
        document.getElementById("part-output-display").appendChild(getIt1)

        const nameIt2 = document.createElement("label");
        nameIt2.className = "new-bar-title";
        nameIt2.for = inputNumber
        nameIt2.innerHTML = "<h3>Angle</h3>"//innerHTML displays inside the tag
        document.getElementById("part-output-display").appendChild(nameIt2)

        const getIt2 = document.createElement("input");
        getIt2.className = "new-bar";
        getIt2.id = inputNumber
        getIt2.type = "number"
        document.getElementById("part-output-display").appendChild(getIt2)
    }

    runState += 1
}


function createPartTable() {
    //unhide next section
    const unHide = document.getElementById("tank-section");
    unHide.style = 'visability: visable;'

    // let alertState = 0

    // let actualCircumference = +document.getElementById('tank-circumference').value
    let formCount = +document.getElementById('part-count').value

    //create table rows and populate the data fields
    for (i = 0; i < formCount; i++) {
        let partNumber = "Part-" + i
        let inputNumber = "input-" + i
        let currentRow = "row-id-" + i;
        let currentName = document.getElementById(partNumber).value
        let currentAngle = +document.getElementById(inputNumber).value
        let tankCircumference = +document.getElementById("tank-circumference").value
        let tankRatio = tankCircumference / 360;
        let currentLength = tankRatio*currentAngle;

        const nextLine = document.createElement("tr");
        nextLine.className = "table-row";
        nextLine.id = currentRow
        document.getElementById("table-body").appendChild(nextLine)
        console.log(currentRow);

        console.log("im in");
        const nextName = document.createElement("td");
        nextName.className = "table-data";
        nextName.innerHTML = currentName
        document.getElementById(currentRow).appendChild(nextName)

        const nextAngle = document.createElement("td");
        nextAngle.className = "table-data";
        nextAngle.innerHTML = currentAngle
        document.getElementById(currentRow).appendChild(nextAngle)

        const nextarcLength = document.createElement("td");
        nextarcLength.className = "table-data";
        nextarcLength.innerHTML = parseFloat(currentLength.toFixed(4))
        document.getElementById(currentRow).appendChild(nextarcLength)


    }

    const scrollDown = document.getElementById("tank-section");
    scrollDown.scrollIntoView();

}

let tankButton = document.getElementById('next-part')
tankButton.addEventListener('click', stateCheck)

let buttonVar1 = document.getElementById('reset')
buttonVar1.addEventListener('click', resetPage)

let buttonVar2 = document.getElementById('reset2')
buttonVar2.addEventListener('click', resetPage)