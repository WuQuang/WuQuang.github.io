document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const neckInput = document.getElementById('neck');
    const waistInput = document.getElementById('waist');
    const submitButton = document.querySelector('.calculator-box input[type="submit"]');
    const resultDiv = document.getElementById('result');

    const ranges = [
        { compMin: 11, compMax: 20, heightMin: 10, heightMax: 20 },
        { compMin: 21, compMax: 30, heightMin: 21, heightMax: 30 },
        // Add more ranges as needed
    ];

    function calculateMeasurements(height, weight, neck, waist) {
        const comp = waist - neck;
        return { height, weight, neck, waist, comp };
    }

    function isWithinRange(value, min, max) {
        return value >= min && value <= max;
    }

    function lookupStandards(measurements) {
        const { comp, height } = measurements;
        let resultMessage = 'No';

        for (const range of ranges) {
            if (isWithinRange(comp, range.compMin, range.compMax) &&
                isWithinRange(height, range.heightMin, range.heightMax)) {
                resultMessage = 'Yes';
                break;
            }
        }
        
        return `<p>Height: ${height} inches</p>
                <p>Weight: ${measurements.weight} pounds</p>
                <p>Neck Circumference: ${measurements.neck} cm</p>
                <p>Waist Circumference: ${measurements.waist} cm</p>
                <p>Comp (Waist - Neck): ${comp} cm</p>
                <p>Result: <strong>${resultMessage}</strong></p>`;
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
