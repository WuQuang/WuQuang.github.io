document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const neckInput = document.getElementById('neck');
    const waistInput = document.getElementById('waist');
    const submitButton = document.querySelector('.calculator-box input[type="submit"]');
    const resultDiv = document.getElementById('result');

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

        // Here you can add the logic to check height and weight standards
        // For now, we will just display the entered values
        resultDiv.innerHTML = `<p>Height: ${height} inches</p><p>Weight: ${weight} pounds</p><p>Neck Circumference: ${neck} cm</p><p>Waist Circumference: ${waist} cm</p>`;
    });
});
