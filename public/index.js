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

/* Test 'code'
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
*/

//send array to output
var output = "";
for(var ii = 0; ii < 16; ii++)
{
    output = output + ( String.fromCharCode(dataArr[ii]) );
}

outputBox.textContent = output;
