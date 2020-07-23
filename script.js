// phone remove button event handler
document.getElementById('removePhone').addEventListener('click', function(){
    deductPrice(1219,'currentPhone','currentPhonePrice');
})
// phone add button event handler
document.getElementById('addPhone').addEventListener('click', function(){
    add(1219,'currentPhone','currentPhonePrice');
})
// case remove button event handler
document.getElementById('removeCase').addEventListener('click', function(){
    deductPrice(59,'currentCase','currentCasePrice');
})
// case add button event handler
document.getElementById('addCase').addEventListener('click', function(){
    add(59,'currentCase','currentCasePrice');
})

// deducting and updating all price and value
function deductPrice(singlePrice,id1,id2){
    let currentValue = parseInt(document.getElementById(id1).value);
    
    if(currentValue > 0 ){
        currentValue --;
        document.getElementById(id1).value = currentValue;

        const currentPrice = parseInt(document.getElementById(id2).innerText);
        const updatedPrice = currentPrice - singlePrice;
        document.getElementById(id2).innerText = updatedPrice;

        const subTotal = parseFloat(document.getElementById('subtotal').innerText);
        const updatedSubtotal = subTotal - singlePrice;
        document.getElementById('subtotal').innerText = updatedSubtotal;

        const updatedTax = parseFloat((updatedSubtotal * 0.12).toFixed(2));
        document.getElementById('tax').innerText = updatedTax;

        const updatedTotal = parseFloat((updatedSubtotal + updatedTax).toFixed(2));
        document.getElementById('total').innerText = updatedTotal;
    }
}
// adding and updating all value and price
function add(singlePrice,id1,id2){
    let currentValue = parseInt(document.getElementById(id1).value);
    
        currentValue++ ;
        document.getElementById(id1).value = currentValue;

        const currentPrice = parseInt(document.getElementById(id2).innerText);
        const updatedPrice = currentPrice + singlePrice;
        document.getElementById(id2).innerText = updatedPrice;

        const subTotal = parseFloat(document.getElementById('subtotal').innerText);
        const updatedSubtotal = subTotal + singlePrice;
        document.getElementById('subtotal').innerText = updatedSubtotal;

        const updatedTax = parseFloat((updatedSubtotal * 0.12).toFixed(2));
        document.getElementById('tax').innerText = updatedTax;

        const updatedTotal = parseFloat((updatedSubtotal + updatedTax).toFixed(2));
        document.getElementById('total').innerText = updatedTotal;
}