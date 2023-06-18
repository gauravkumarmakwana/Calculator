function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastCharacter() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}
