$(document).ready(function () {
    $('#calculateTotal').click(function () {
        // Get the value entered by the user for hours needed
        var hoursNeeded = parseFloat($('#hoursNeeded').val());

        // Validate if the input is a positive number
        if (isNaN(hoursNeeded) || hoursNeeded <= 0) {
            alert('Please enter a valid positive number for hours needed.');
            return;
        }

        // Get the hourly rate
        var hourlyRate = parseFloat($('#hourlyRate').val().replace('$', ''));

        // Calculate the total cost
        var totalCost = hoursNeeded * hourlyRate;
        console.log(totalCost)
        // Display the total cost in the output box
        $('#totalCost').val('$' + totalCost.toFixed(2));
    });
});

