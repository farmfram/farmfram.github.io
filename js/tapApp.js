// Function to load JSON from the file and use its values
fetch('../json/tapTable.json')
    .then(response => response.json())  // Parse the JSON data
    .then(data => {
        // Accessing values from the JSON
        const imperialCourseThread = data.imperialTaps[0].courseThread;
        const metricCourseThread = data.metricTaps[0].courseThread;

        // Example: Accessing the first tap size and drill size in imperial course thread
        const firstImperialTap = imperialCourseThread[0];
        console.log("Imperial Tap Size:", firstImperialTap.tapSize); // Output: .25
        console.log("Imperial Drill Size:", firstImperialTap.drillSize); // Output: .201
        console.log("Imperial Pitch:", firstImperialTap.pitch); // Output: 20 TPI

        // Example: Accessing metric tap values
        const firstMetricTap = metricCourseThread[0];
        console.log("Metric Tap Size:", firstMetricTap.tapSize); // Output: M6
        console.log("Metric Drill Size:", firstMetricTap.drillSize); // Output: 5.0
        console.log("Metric Pitch:", firstMetricTap.pitch); // Output: 1.0
    })
    .catch(error => console.error('Error loading the JSON file:', error));
