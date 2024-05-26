document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const neckInput = document.getElementById('neck');
    const waistInput = document.getElementById('waist');
    const submitButton = document.querySelector('.calculator-box input[type="submit"]');
    const resultDiv = document.getElementById('result');

    const resultsLookup = {
        "11_60": 3,  // Example entry
        // Add more entries as needed
    };

    function calculateMeasurements(height, weight, neck, waist) {
        const comp = waist - neck;
        return { height, weight, neck, waist, comp };
    }

    function lookupStandards(measurements) {
        const key = `${measurements.comp}_${measurements.height}`;
        const lookupResult = resultsLookup[key];  // Get the result directly from the lookup object
        let resultMessage;
        if (lookupResult !== undefined) {
            resultMessage = `<p>Lookup Result: <strong>${lookupResult}</strong></p>`;  // Display the result clearly
        } else {
            resultMessage = `<p>No specific result for this combination of Comp and Height.</p>`;
        }
        
        return `<p>Height: ${measurements.height} inches</p>
                <p>Weight: ${measurements.weight} pounds</p>
                <p>Neck Circumference: ${measurements.neck} cm</p>
                <p>Waist Circumference: ${measurements.waist} cm</p>
                <p>Comp (Waist - Neck): ${measurements.comp} cm</p>
                ${resultMessage}`;  // Include the result message in the final HTML
    }

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        const neck = parseFloat(neckInput.value);
        const waist = parseFloat(waistInput.value);

        if (isNaN(height) || isNaN(weight) || isNaN(neck) || isNaN(waist)) {
            resultDiv.innerHTML = '<p style="color: red;">Please enter valid numbers for all fields.</p>';
            return;
        }

        const measurements = calculateMeasurements(height, weight, neck, waist);
        const results = lookupStandards(measurements);
        resultDiv.innerHTML = results;
    });
});
