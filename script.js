// Variables to hold the current input and operation
let currentInput = ''; // Stores the numbers and operations entered
let operation = null; // Tracks the current operation

// Function to append a number to the input
function appendNumber(number) {
    currentInput += number; // Add the number to the current input
    document.getElementById('result').value = currentInput.replace(/\*/g, '×'); // Update the display with ×
}

// Function to perform an operation (+, -, *, /)
function performOperation(op) {
    if (currentInput !== '') { // Ensure there is something in the input
        operation = op; // Set the current operation
        currentInput += ' ' + op + ' '; // Add the operation to the input
        document.getElementById('result').value = currentInput.replace(/\*/g, '×'); // Update the display with ×
    }
}

// Function to calculate the result
function calculateResult() {
    try {
        const result = eval(currentInput); // Use eval to calculate (basic for now)
        document.getElementById('result').value = result; // Display the result
        currentInput = result.toString(); // Update current input with result
        operation = null; // Clear the operation
    } catch (error) {
        document.getElementById('result').value = 'Error'; // Handle errors gracefully
        currentInput = ''; // Reset input
        operation = null; // Reset operation
    }
}

// Function to clear the display and reset everything
function clearResult() {
    currentInput = ''; // Reset input
    document.getElementById('result').value = ''; // Clear the display
}
