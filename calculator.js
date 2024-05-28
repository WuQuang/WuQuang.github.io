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
        { compMin: 11, compMax: 18, heightMin: 60, heightMax: 64.5 },
        { compMin: 18.25, compMax: 18.25, heightMin: 60.5, heightMax: 64.5 },
        { compMin: 18.5, compMax: 18.5, heightMin: 61.5, heightMax: 64.5 },
        { compMin: 18.75, compMax: 18.75, heightMin: 62.5, heightMax: 64.5 },
        { compMin: 19.00, compMax: 19.00, heightMin: 63.5, heightMax: 64.5 },
        { compMin: 19.25, compMax: 19.25, heightMin: 64.5, heightMax: 64.5 },
        { compMin: 11, compMax: 19.25, heightMin: 65, heightMax: 69.5 },
        { compMin: 19.5, compMax: 19.5, heightMin: 65.5, heightMax: 69.5 },
        { compMin: 19.75, compMax: 19.75, heightMin: 66.5, heightMax: 69.5 },
        { compMin: 20, compMax: 20, heightMin: 67.5, heightMax: 69.5 },
        { compMin: 20.25, compMax: 20.25, heightMin: 68.5, heightMax: 69.5 },
        { compMin: 20.5, compMax: 20.5, heightMin: 69.5, heightMax: 69.5 },
    ];

    const femaleRanges = [
        // Female standards
        { compMin: 11, compMax: 18, heightMin: 60, heightMax: 64.5 },
        { compMin: 18.25, compMax: 18.25, heightMin: 60.5, heightMax: 64.5 },
        { compMin: 18.5, compMax: 18.5, heightMin: 61.5, heightMax: 64.5 },
        { compMin: 18.75, compMax: 18.75, heightMin: 62.5, heightMax: 64.5 },
        { compMin: 19.00, compMax: 19.00, heightMin: 63.5, heightMax: 64.5 },
        { compMin: 19.25, compMax: 19.25, heightMin: 64.5, heightMax: 64.5 },
        { compMin: 11, compMax: 19.25, heightMin: 65, heightMax: 69.5 },
        { compMin: 19.5, compMax: 19.5, heightMin: 65.5, heightMax: 69.5 },
        { compMin: 19.75, compMax: 19.75, heightMin: 66.5, heightMax: 69.5 },
        { compMin: 20, compMax: 20, heightMin: 67.5, heightMax: 69.5 },
        { compMin: 20.25, compMax: 20.25, heightMin: 68.5, heightMax: 69.5 },
        { compMin: 20.5, compMax: 20.5, heightMin: 69.5, heightMax: 69.5 },
    ];

    function calculateMeasurements(height, weight, neck, waist) {
        const comp = waist - neck;
        return { height, weight, neck, waist, comp };
    }

    function isWithinRange(value, min, max) {
        return value >= min && value <= max;
    }

    function lookupStandards(measurements, gender) {
        const { comp, height } = measurements;
        let resultMessage = 'No';
        const ranges = gender === 'male' ? maleRanges : femaleRanges;

        for (const range of ranges) {
            if (isWithinRange(comp, range.compMin, range.compMax) &&
                isWithinRange(height, range.heightMin, range.heightMax)) {
                resultMessage = 'Yes';
                break;
            }
        }

        return `
            <p>Height: ${height} inches</p>
            <p>Weight: ${measurements.weight} pounds</p>
            <p>Neck Circumference: ${measurements.neck} cm</p>
            <p>Waist Circumference: ${measurements.waist} cm</p>
            <p>Comp (Waist - Neck): ${comp} cm</p>
            <p id="within-standards">Within Standards: <strong>${resultMessage}</strong></p>
        `;
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
        const results = lookupStandards(measurements, gender);
        resultDiv.innerHTML = results;
    });
});
