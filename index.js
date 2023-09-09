function calculateBMI() {
    // Get the weight and height values from the input fields
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var weightUnit = document.getElementById("weightUnit").value;
    var heightUnit = document.getElementById("heightUnit").value;

    // Check if weight and height are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // Convert units to metric (kg and cm)
    if (weightUnit === "lb") {
        weight = weight * 0.453592; // Convert pounds to kilograms
    }
    if (heightUnit === "in") {
        height = height * 2.54; // Convert inches to centimeters
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Your BMI: " + bmi.toFixed(2);
}