// Variables to hold the current input and operation
let currentInput = ''; // Stores the numbers and operations entered
let operation = null; // Tracks the current operation
let calculationHistory = []; // Stores the history of calculations
let isNewCalculation = true; // Tracks if we're starting a new calculation

// Function to append a number to the input
function appendNumber(number) {
    if (isNewCalculation) {
        currentInput = ''; // Clear the input if starting a new calculation
        isNewCalculation = false;
    }
    currentInput += number; // Add the number to the current input
    document.getElementById('result').value = currentInput.replace(/\*/g, '×'); // Update the display with ×
}

// Function to perform an operation (+, -, *, /)
function performOperation(op) {
    if (currentInput !== '') { // Ensure there is something in the input
        operation = op; // Set the current operation
        currentInput += ' ' + op + ' '; // Add the operation to the input
        document.getElementById('result').value = currentInput.replace(/\*/g, '×'); // Update the display with ×
        isNewCalculation = false;
    }
}

// Function to add a calculation to history
function addToHistory(calculation, result) {
    const historyItem = document.createElement('div');
    historyItem.textContent = `${calculation} = ${result}`;
    document.getElementById('history-list').prepend(historyItem);
    calculationHistory.unshift({ calculation, result });
    
    // Keep only the last 10 calculations
    if (calculationHistory.length > 10) {
        calculationHistory.pop();
        const historyList = document.getElementById('history-list');
        historyList.removeChild(historyList.lastChild);
    }
}

// Function to calculate the result
function calculateResult() {
    try {
        const displayCalculation = currentInput.replace(/\*/g, '×');
        const result = eval(currentInput); // Use eval to calculate (basic for now)
        document.getElementById('result').value = result; // Display the result
        addToHistory(displayCalculation, result); // Add to history
        currentInput = result.toString(); // Update current input with result
        operation = null; // Clear the operation
        isNewCalculation = true; // Set flag for new calculation
    } catch (error) {
        document.getElementById('result').value = 'Error'; // Handle errors gracefully
        currentInput = ''; // Reset input
        operation = null; // Reset operation
        isNewCalculation = true; // Set flag for new calculation
    }
}

// Function to clear the current calculation
function clearCurrent() {
    currentInput = ''; // Reset input
    document.getElementById('result').value = ''; // Clear the display
    isNewCalculation = true; // Set flag for new calculation
}

// Function to clear everything including history
function clearAll() {
    clearCurrent(); // Clear the current calculation
    calculationHistory = []; // Clear the history array
    document.getElementById('history-list').innerHTML = ''; // Clear the history display
}
