// Appends the given value to the result field
function appendToResult(value) {
    document.getElementById('result').value += value;
}
/*
   This function is responsible for appending the given value to the result field.
   It retrieves the element with the ID "result" using document.getElementById().
   Then, it accesses the value property of the element and appends the given value to it.
   The updated value is then displayed in the result field.
*/

// Calculates the result based on the expression in the result field
function calculateResult() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}
/*
   This function is responsible for calculating the result based on the expression in the result field.
   It retrieves the element with the ID "result" using document.getElementById().
   The value property of the element is evaluated using the eval() function, which interprets the expression as JavaScript code and computes the result.
   The calculated result is stored in the variable "result".
   Finally, the value property of the result field is updated with the calculated result.
*/

// Clears the result field
function clearResult() {
    document.getElementById('result').value = '';
}
/*
   This function is responsible for clearing the result field.
   It retrieves the element with the ID "result" using document.getElementById().
   The value property of the element is set to an empty string, effectively clearing the result field.
*/

// Deletes the last character from the result field
function deleteLastCharacter() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}
/*
   This function is responsible for deleting the last character from the result field.
   It retrieves the element with the ID "result" using document.getElementById().
   The value property of the element is stored in the variable "result".
   Using the slice() method, the last character is removed from the "result" string by specifying a range from the beginning to the second-to-last character.
   The updated value is then assigned back to the result field, effectively deleting the most recently entered character.
*/

