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

function nextSelect() {
    console.log("great")
    let selectedStandard = document.getElementById("tap-type");
    let currentStandard = selectedStandard.value;
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
        

                    //first tap size and drill size in imperial course thread
                    const firstImperialTap = threadType[0];
                    console.log("Imperial Tap Size:", firstImperialTap.tapSize); // Output: .25
                    console.log("Imperial Drill Size:", firstImperialTap.drillSize); // Output: .201
                    console.log("Imperial Pitch:", firstImperialTap.pitch); // Output: 20 TPI

                })
                .catch(error => console.error('Error loading the JSON file:', error));
    // for (const i in selected) {
    //     console.log(`Standard: ${selected}`);

    //     // Loop through each thread type (coarseThread, fineThread)
    //     selected[standard].forEach(threadType => {
    //         for (const type in threadType) {
    //             console.log(`  Type: ${type}`);

    //             // Loop through each tap size and print details
    //             threadType[type].forEach(tap => {
    //                 console.log(`    Tap Size: ${tap.tapSize}, Drill Size: ${tap.drillSize}, Pitch: ${tap.pitch}`);
    //             });
    //         }
    //     });
    // }
}

let tapSelect = document.getElementById('tap-type')
tapSelect.addEventListener('input', nextSelect)







// fetch('../json/tapTable.json')
//     .then(response => response.json())
//     .then(data => {
//         //values from JSON
//         const imperialCourseThread = data.imperialTaps[0].courseThread;
//         const metricCourseThread = data.metricTaps[0].courseThread;

//         //first tap size and drill size in imperial course thread
//         const firstImperialTap = imperialCourseThread[0];
//         console.log("Imperial Tap Size:", firstImperialTap.tapSize); // Output: .25
//         console.log("Imperial Drill Size:", firstImperialTap.drillSize); // Output: .201
//         console.log("Imperial Pitch:", firstImperialTap.pitch); // Output: 20 TPI

//         //metric tap values
//         const firstMetricTap = metricCourseThread[0];
//         console.log("Metric Tap Size:", firstMetricTap.tapSize); // Output: M6
//         console.log("Metric Drill Size:", firstMetricTap.drillSize); // Output: 5.0
//         console.log("Metric Pitch:", firstMetricTap.pitch); // Output: 1.0
//     })
//     .catch(error => console.error('Error loading the JSON file:', error));
