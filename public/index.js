
var outputBox = document.getElementById('outputBox');
var dataArr = [];

var output = "";
var iter = 0;
var integerOp = false;

//Hessro functions

function hessro(num) {
    dataArr = [];
    for (var ii = 0; ii < 16; ii++) {
        dataArr.push(num);
    }
}
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
    if (integerOp == true) {
        output = output + (Number(dataArr[iter]));
    } else {
        output = output + (String.fromCharCode(dataArr[iter]));
    }
}

function ROBHESSplus() {
    integerOp = true;
    if (dataArr[iter] != null && dataArr[iter - 1] != null && dataArr[iter - 2] != null) {
        dataArr[iter] = Number(dataArr[iter - 1]) + Number(dataArr[iter - 2]);
    }
}

function ROBHESSminus() {
    integerOp = true;
    if (dataArr[iter] != null && dataArr[iter - 1] != null && dataArr[iter - 2] != null) {
        dataArr[iter] = Number(dataArr[iter - 1]) - Number(dataArr[iter - 2]);
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
        if (input.substring(i, i + 7) == "hessro(") {
            var j = 0;
            j = i + 7;
            var num = '';
            while (input.substring(j, j + 1) != ')') {
                if (isNaN(input.substring(j, j+1))) {
                    alert("Not a valid basis");
                    i = input.length;
                } else {
                    num += input.substring(j, j + 1);
                }
                j++;
            }
            num = Number(num);
            hessro(num);
            i += 7;
        } else if (input.substring(i, i + 3) == "rob" || input.substring(i, i + 3) == 13) {
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
        } else if (input.substring(i, i + 8) == "+ROBHESS") {
            ROBHESSplus();
            i += 8;
        } else if (input.substring(i, i + 8) == "-ROBHESS") {
            ROBHESSminus();
            i += 8;
        } else {
            i++;
        }
    }
}

//listen for a click on the compileButton
document.getElementById('compileButton').addEventListener('click', function () { 
    integerOp = false;
    interpret(document.getElementById('inputBox').value);
    outputBox.setAttribute('placeholder', '');
    outputBox.textContent = output;
    iter = 0;

});

