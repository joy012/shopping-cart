// phone remove button event handler
document.getElementById('removePhone').addEventListener('click', function(){
    removeOne('currentPhone');
})
// phone add button event handler
document.getElementById('addPhone').addEventListener('click', function(){
    addOne('currentPhone');
})
// case remove button event handler
document.getElementById('removeCase').addEventListener('click', function(){
    removeOne('currentCase');
})
// case add button event handler
document.getElementById('addCase').addEventListener('click', function(){
    addOne('currentCase');
})

function addOne(id){
    let currentValue = parseInt(document.getElementById(id).value);
    currentValue++;
    document.getElementById(id).value = currentValue;
}
function removeOne(id){
    let currentValue = parseInt(document.getElementById(id).value);
    if(currentValue < 1){
        currentValue = 0;
    }
    else{
        currentValue--;
    }
    document.getElementById(id).value = currentValue;
}