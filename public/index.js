
var outputBox = document.getElementById('outputBox');
var dataArr = [];

var output = "";
var iter = 0;

//create array
for (var ii = 0; ii < 16; ii++) {
    dataArr.push(65);
}

//Hessro functions
function rob() {
    iter = (iter + 1);
}

function hess() {
    iter = (iter - 1); 
}

function ROB() {
    dataArr[iter]++;
}

function HESS() {
    dataArr[iter]--;
}

function robhess() {
    output = output + (String.fromCharCode(dataArr[iter]));
}

function ROBHESSplus() {
    if (dataArr[iter] != null && dataArr[iter - 1] != null && dataArr[iter - 2] != null) {
        dataArr[iter] = dataArr[iter - 1] + dataArr[iter - 2];
    }
}

function ROBHESSminus() {
    if (dataArr[iter] != null && dataArr[iter - 1] != null && dataArr[iter - 2] != null) {
        dataArr[iter] = dataArr[iter - 1] - dataArr[iter - 2];
    }
}

//interpret the input in inputBox
function interpret(input) {
    output = "";
    dataArr = [];
    for (var ii = 0; ii < 16; ii++) {
        dataArr.push(65);
    }
    var i = 0;
    while (i < input.length) {
        if (input.substring(i, i + 3) == "rob" || input.substring(i, i + 3) == 13) {
            rob();
            i += 3;
        } else if (input.substring(i, i + 3) == "ROB") {
            ROB();
            i += 3;
        } else if (input.substring(i, i + 4) == "hess") {
            hess();
            i += 4;
        } else if (input.substring(i, i + 4) == "HESS") {
            HESS();
            i += 4;
        } else if (input.substring(i, i + 8) == "!robhess") {
            robhess();
            i += 8;
        } else if (input.substring(i, i + 8) == "ROB+HESS") {
            ROBHESSplus();
            i += 8;
        } else if (input.substring(i, i + 8) == "ROB-HESS") {
            ROBHESSminus();
            i += 8;
        } else {
            i++;
        }
    }
}

//listen for a click on the compileButton
document.getElementById('compileButton').addEventListener('click', function () { 
    interpret(document.getElementById('inputBox').value);
    outputBox.setAttribute('placeholder', '');
    outputBox.textContent = output;
    iter = 0;

});

