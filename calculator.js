document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const submitButton = document.querySelector('.calculator-box input[type="submit"]');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight)) {
            alert('Please enter valid numbers for both height and weight.');
            return;
        }

        // Here you can add the logic to check height and weight standards
        // For now, we will just display an alert with the entered values
        alert(`Height: ${height} inches\nWeight: ${weight} pounds`);
    });
});
