function clearDisplay() {
    document.getElementById("result").value = "";
}

function appendValue(value) {
    document.getElementById("result").value += value;
}

function deleteLast() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function calculate() {
    let result = document.getElementById("result").value;
    if (result) {
        document.getElementById("result").value = eval(result);
    }
}