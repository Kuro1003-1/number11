function forLoop() {
    let number = parseInt(document.getElementById("num1_for").value);
    let text = document.getElementById("text_for").value;
    let output = "";

    for (let i = 1; i <= number; i++) {
        output += i + ". " + text + "<br>";
    }

    document.getElementById("result").innerHTML = output;
}

function whileLoop() {
    let number = parseInt(document.getElementById("num1_while").value);
    let text = document.getElementById("text_while").value;
    let output = "";
    let i = 1;

    while (i <= number) {
        output += i + ". " + text + "<br>";
        i++;
    }

    document.getElementById("result").innerHTML = output;
}

function doWhileLoop() {
    let number = parseInt(document.getElementById("num1_do").value);
    let text = document.getElementById("text_do").value;
    let output = "";
    let i = 1;

    if (!isNaN(number) && number > 0) {
        do {
            output += i + ". " + text + "<br>";
            i++;
        } while (i <= number);
    }

    document.getElementById("result").innerHTML = output;
}

function clearFields() {
    document.getElementById("result").innerHTML = "";
}