document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const submitButton = document.querySelector('.calculator-box input[type="submit"]');
    const resultsDiv = document.getElementById('results');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight)) {
            resultsDiv.innerHTML = '<p>Please enter valid numbers for both height and weight.</p>';
            return;
        }

        // Here you can add the logic to check height and weight standards
        // For now, we will just display the entered values
        resultsDiv.innerHTML = `<p>Height: ${height} inches</p><p>Weight: ${weight} pounds</p>`;
    });
});
