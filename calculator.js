var mainInputVal = document.querySelector('#input');
var subInputVal = document.querySelector('#equation');
var historyDiv = document.querySelector('#history');
var mainInput = [];
var subInput = [];
function getVal(val){
    
    mainInputVal.value == '0' ? mainInputVal.value = val : mainInputVal.value += val;
}

function solve(){
    temp = mainInputVal.value;
    subInputVal.value = temp + "=";
    mainInputVal.value = eval(temp);

    mainInput.push(eval(temp));
   
    subInput.push(temp);
  
    showHistory();
}

function clearAll(){
    subInputVal.value = '';
    mainInputVal.value = '0';
}


function removeLastVal(){
    if(mainInputVal.value.length > 1)
    {
        mainInputVal.value = mainInputVal.value.slice(0, -1);
    }
    else{
        mainInputVal.value = mainInputVal.value.slice(0, -1);
        mainInputVal.value = '0';
    }  
}


function showHistory()
{
    var history = '<div>';
    for(let i = 0; i < subInput.length; i++)
    {
        history += `<div class="his"><p>${subInput[i]} =</p><p>${mainInput[i]}</p></div>`;
    }
    history+= '</div>';
    historyDiv.innerHTML = history;
}

function clearHistory()
{
    var choice = confirm('Are you sure you want to delete history?');
    if(choice){
        historyDiv.innerHTML = '';
        mainInput = [];
        subInput = [];
    }
}