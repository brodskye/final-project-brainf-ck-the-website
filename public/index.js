var outputBox = document.getElementById('outputBox');

//initializing the array that hessro will manipulate as a global variable
var dataArr = [];
for(var ii = 0; ii < 16; ii++)
{
    dataArr.push(32);
}

//initializing the iterator as a global variable
var iter = 0;

function rob()
{
    iter = (iter+1)%16;
}

function hess()
{
    iter = (iter-1)%16;
}

function ROB()
{
    dataArr[iter]++;
}

function HESS()
{
    dataArr[iter]--;
}

var output = "";
function robhess()
{
    output = output + ( String.fromCharCode(dataArr[iter]) );
}


ROB();
rob();
rob();
ROB();
rob();
rob();
ROB();
rob();
rob();
ROB();
hess();
hess();
hess();
hess();
hess();
hess();
robhess();
rob();
robhess();
rob();
robhess();
rob();
robhess();
rob();
robhess();
rob();
robhess();

//send array to output

outputBox.textContent = output;
