// 1) get the "standard" from the first select box
// 2) make "size" select box available
// 3) retrieve the data from "size box
// 4) display information for desired tap size

// add an eventListener for when the first selection is made
// this will populate the second select bar with available tap sizes (create a function)
// a loop will iterate through the options to populate options
// add another eventListener for when the second selection has bean made
// this will call a function that uses fetch to recieve data from the json file
// new function = tapDrillFinder(units, series, diameter)

let selectLimit = 0;

function resetPage() {
    location.reload();
    return false;
}

function nextSelect() {
    if (selectLimit !== 0){
        resetPage();
    }

    selectLimit += 1;
    console.log("selectLimit: ", selectLimit)

    console.log("great")
    selectedStandard = document.getElementById("tap-type");
    currentStandard = selectedStandard.value;
    switch (true) {
        case (currentStandard == "imperial-course"):
            console.log("case1")
            populateList("imperial", "coarse")
            break;

        case (currentStandard == "imperial-fine"):
            console.log("case2")
            populateList("imperial", "fine")
            break;

        case (currentStandard == "metric-course"):
            console.log("case3")
            populateList("metric", "coarse")
            break;

        case (currentStandard == "metric-fine"):
            console.log("case4")
            populateList("metric", "fine")
            break;
    }

}

function populateList(standard, series) {
    fetch('../json/tapTable.json')
                .then(response => response.json())
                .then(data => {


                    let currentTap;
                    if (standard === "imperial"){
                        currentTap = data.imperialTaps;
                    } else if (standard === 'metric') {
                        currentTap = data.metricTaps;
                    }

                    let threadType;
                    if (series === 'coarse') {
                        threadType = currentTap[0].courseThread;
                    } else if (series === 'fine') {
                        threadType = currentTap[1].fineThread;
                    }
        
                    for (const i in threadType){
                        let currentDiameter = threadType[i];
                        console.log("current Diamter: ", currentDiameter.tapSize)
                        const opt = document.createElement("option");
                        opt.value = i;
                        opt.innerHTML = currentDiameter.tapSize
                        document.getElementById("tap-diameter").appendChild(opt)
                    }
                    
                    document.getElementById("tap-diameter").removeAttribute("disabled");
                })
                .catch(error => console.error('Error loading the JSON file:', error));
}

function tapDisplay(){

    let selectedDiameter = document.getElementById("tap-diameter");
    let tapDiameter = selectedDiameter.value;
    
    selectedStandard = document.getElementById("tap-type");
    currentStandard = selectedStandard.value;
    switch (true) {
        case (currentStandard == "imperial-course"):
            console.log("case1")
            getTap("imperial", "coarse", tapDiameter)
            break;

        case (currentStandard == "imperial-fine"):
            console.log("case2")
            getTap("imperial", "fine", tapDiameter)
            break;

        case (currentStandard == "metric-course"):
            console.log("case3")
            getTap("metric", "coarse", tapDiameter)
            break;

        case (currentStandard == "metric-fine"):
            console.log("case4")
            getTap("metric", "fine", tapDiameter)
            break;
    }
    
}

function getTap(standard, series, dia){
    fetch('../json/tapTable.json')
                .then(response => response.json())
                .then(data => {


                    let currentTap;
                    if (standard === "imperial"){
                        currentTap = data.imperialTaps;
                    } else if (standard === 'metric') {
                        currentTap = data.metricTaps;
                    }

                    let threadType;
                    if (series === 'coarse') {
                        threadType = currentTap[0].courseThread;
                    } else if (series === 'fine') {
                        threadType = currentTap[1].fineThread;
                    }
        
                        let currentDiameter = threadType[dia];
                        console.log("current Diamter: ", currentDiameter.tapSize)
                        console.log("current Drill: ", currentDiameter.drillSize)
                        console.log("current pitch: ", currentDiameter.pitch)

                        const displaySize = document.createElement("p");
                        displaySize.innerHTML = "Tap Daimeter: "+currentDiameter.tapSize
                        document.getElementById("tap-display").appendChild(displaySize)

                        const displayDrill = document.createElement("p");
                        displayDrill.innerHTML = "Drill Diameter: "+currentDiameter.drillSize
                        document.getElementById("tap-display").appendChild(displayDrill)

                        const displayPitch = document.createElement("p");
                        displayPitch.innerHTML = "Thread Pitch: "+currentDiameter.pitch
                        document.getElementById("tap-display").appendChild(displayPitch)
                    
                })
                .catch(error => console.error('Error loading the JSON file:', error));
}


let tapSelect = document.getElementById('tap-type')
tapSelect.addEventListener('input', nextSelect)

let diameterSelect = document.getElementById('tap-diameter')
diameterSelect.addEventListener('input', tapDisplay)

let buttonVar1 = document.getElementById('tap-reset')
buttonVar1.addEventListener('click', resetPage)
