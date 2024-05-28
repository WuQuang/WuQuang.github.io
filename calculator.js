document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const neckInput = document.getElementById('neck');
    const waistInput = document.getElementById('waist');
    const genderSelect = document.getElementById('gender');
    const submitButton = document.querySelector('.calculator-box input[type="submit"]');
    const resultDiv = document.getElementById('result');

    const maleRanges = [
        // Male standards
        // Table 1
        { compMin: 11, compMax: 18, heightMin: 60, heightMax: 64.5 },
        { compMin: 18.25, compMax: 18.25, heightMin: 60.5, heightMax: 64.5 },
        { compMin: 18.5, compMax: 18.5, heightMin: 61.5, heightMax: 64.5 },
        { compMin: 18.75, compMax: 18.75, heightMin: 62.5, heightMax: 64.5 },
        { compMin: 19.00, compMax: 19.00, heightMin: 63.5, heightMax: 64.5 },
        { compMin: 19.25, compMax: 19.25, heightMin: 64.5, heightMax: 64.5 },
        // Table 2
        { compMin: 11, compMax: 19.25, heightMin: 65, heightMax: 69.5 },
        { compMin: 19.5, compMax: 19.5, heightMin: 65.5, heightMax: 69.5 },
        { compMin: 19.75, compMax: 19.75, heightMin: 66.5, heightMax: 69.5 },
        { compMin: 20, compMax: 20, heightMin: 67.5, heightMax: 69.5 },
        { compMin: 20.25, compMax: 20.25, heightMin: 68.5, heightMax: 69.5 },
        { compMin: 20.5, compMax: 20.5, heightMin: 69.5, heightMax: 69.5 },
        // Table 3
        { compMin: 11, compMax: 20.5, heightMin: 70, heightMax: 74.5 },
        { compMin: 20.75, compMax: 20.75, heightMin: 70.5, heightMax: 74.5 },
        { compMin: 21, compMax: 21, heightMin: 71.5, heightMax: 74.5 },
        { compMin: 21.25, compMax: 21.25, heightMin: 73, heightMax: 74.5 },
        { compMin: 21.5, compMax: 21.5, heightMin: 74, heightMax: 74.5 },
        // Table 4 
        { compMin: 11, compMax: 21.75, heightMin: 75, heightMax: 79.5 },
        { compMin: 22, compMax: 22, heightMin: 76, heightMax: 79.5 },
        { compMin: 22.25, compMax: 22.25, heightMin: 77, heightMax: 79.5 },
        { compMin: 22.5, compMax: 22.5, heightMin: 78, heightMax: 79.5 },
        { compMin: 22.75, compMax: 22.75, heightMin: 79, heightMax: 79.5 },

    ];

    const femaleRanges = [
        // Female standards
        // Table 1
        { compMin: 34.5, compMax: 51.25, heightMin: 58, heightMax: 62.5 },
        { compMin: 51.5, compMax: 51.5, heightMin: 58.5, heightMax: 62.5 },
        { compMin: 51.75, compMax: 51.75, heightMin: 59, heightMax: 62.5 },
        { compMin: 52, compMax: 52, heightMin: 59.5, heightMax: 62.5 },
        { compMin: 52.25, compMax: 52.25, heightMin: 60, heightMax: 62.5 },
        { compMin: 52.5, compMax: 52.5, heightMin: 60.5, heightMax: 62.5 },
        { compMin: 52.75, compMax: 52.75, heightMin: 61, heightMax: 62.5 },
        { compMin: 53, compMax: 53, heightMin: 61.5, heightMax: 62.5 },
        { compMin: 53.25, compMax: 53.25, heightMin: 62, heightMax: 62.5 },
        { compMin: 53.5, compMax: 53.5, heightMin: 62, heightMax: 62.5 },
        { compMin: 53.75, compMax: 53.75, heightMin: 62.5, heightMax: 62.5 },
        //Table 2
        { compMin: 34.5, compMax: 54, heightMin: 63, heightMax: 67.5 },
        { compMin: 54.25, compMax: 54.25, heightMin: 63.5, heightMax: 67.5 },
        { compMin: 54.5, compMax: 54.5, heightMin: 64, heightMax: 67.5 },
        { compMin: 54.75, compMax: 54.75, heightMin: 64.5, heightMax: 67.5 },
        { compMin: 55, compMax: 55, heightMin: 65, heightMax: 67.5 },
        { compMin: 55.25, compMax: 55.25, heightMin: 65.5, heightMax: 67.5 },
        { compMin: 55.5, compMax: 55.5, heightMin: 66, heightMax: 67.5 },
        { compMin: 55.75, compMax: 55.75, heightMin: 66.5, heightMax: 67.5 },
        { compMin: 56, compMax: 56, heightMin: 67, heightMax: 67.5 },
        { compMin: 56.25, compMax: 56.25, heightMin: 67.5, heightMax: 67.5 },
        // Table 3
        { compMin: 34.5, compMax: 56.5, heightMin: 68, heightMax: 72.5 },
        { compMin: 56.75, compMax: 56.75, heightMin: 68.5, heightMax: 72.5 },
        { compMin: 57, compMax: 57, heightMin: 69, heightMax: 72.5 },
        { compMin: 57.25, compMax: 57.25, heightMin: 69.5, heightMax: 72.5 },
        { compMin: 57.5, compMax: 57.5, heightMin: 70, heightMax: 72.5 },
        { compMin: 57.75, compMax: 57.75, heightMin: 70.5, heightMax: 72.5 },
        { compMin: 58, compMax: 58, heightMin: 71, heightMax: 72.5 },
        { compMin: 58.25, compMax: 58.25, heightMin: 71.5, heightMax: 72.5 },
        { compMin: 58.5, compMax: 58.5, heightMin: 72, heightMax: 72.5 },
        { compMin: 58.75, compMax: 59, heightMin: 72.5, heightMax: 72.5 },
        // Table 4
        { compMin: 34.5, compMax: 59.25, heightMin: 73, heightMax: 77.5 },
        { compMin: 59.5, compMax: 59.5, heightMin: 73.5, heightMax: 77.5 },
        { compMin: 59.75, compMax: 59.75, heightMin: 74, heightMax: 77.5 },
        { compMin: 60, compMax: 60, heightMin: 74.5, heightMax: 77.5 },
        { compMin: 60.25, compMax: 60.25, heightMin: 75, heightMax: 77.5 },
        { compMin: 60.5, compMax: 60.5, heightMin: 75.5, heightMax: 77.5 },
        { compMin: 60.75, compMax: 60.75, heightMin: 77, heightMax: 77.5 },
        { compMin: 61, compMax: 61, heightMin: 76.5, heightMax: 77.5 },
        { compMin: 61.25, compMax: 61.25, heightMin: 77, heightMax: 77.5 },
        { compMin: 61.5, compMax: 61.5, heightMin: 77.5, heightMax: 77.5 },
    ];

    function calculateMeasurements(height, weight, neck, waist) {
        const comp = waist - neck;
        return { height, weight, neck, waist, comp };
    }

    function isWithinRange(value, min, max) {
        return value >= min && value <= max;
    }

    function lookupStandardsMale(measurements) {
        const { comp, height } = measurements;
        const ranges maleRanges;

        for (const range of ranges) {
            if (isWithinRange(comp, range.compMin, range.compMax) &&
                isWithinRange(height, range.heightMin, range.heightMax)) {
                return "Yes";
                break;
            }
        return "No";
        }
    function lookupStandardsFemale(measurements) {
        const { comp, height } = measurements;
        const ranges femaleRanges;

        for (const range of ranges) {
            if (isWithinRange(comp, range.compMin, range.compMax) &&
                isWithinRange(height, range.heightMin, range.heightMax)) {
                return "Yes:;
                break;
            }
        return "No";
        }

    }

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const neck = parseFloat(neckInput.value);
    const waist = parseFloat(waistInput.value);
    const gender = genderSelect.value;

    if (isNaN(height) || isNaN(weight) || isNaN(neck) || isNaN(waist)) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter valid numbers for all fields.</p>';
        return;
    }

    const measurements = calculateMeasurements(height, weight, neck, waist);
    const resFemale = lookupStandardsMale(measurements);
    const resMale = lookupStandardsFemale(measurements);
    document.getElementById("demo").innerHTML = resMale;
    document.getElementById("demo").innerHTML = resFemale;
});

});
