// phone remove button event handler
document.getElementById('removePhone').addEventListener('click', function(){
    deduct('phn','currentPhone','currentPhonePrice');
})
// phone add button event handler
document.getElementById('addPhone').addEventListener('click', function(){
    add('phn','currentPhone','currentPhonePrice');
})
// case remove button event handler
document.getElementById('removeCase').addEventListener('click', function(){
    deduct('case','currentCase','currentCasePrice');
})
// case add button event handler
document.getElementById('addCase').addEventListener('click', function(){
    add('case','currentCase','currentCasePrice');
})
// remove item from cart click handler
const removeItem = document.getElementsByClassName('remove-item');
for (let i = 0; i < removeItem.length; i++) {
    document.getElementsByClassName('remove-item')[i].addEventListener('click', function(){
        document.getElementsByClassName('cart-item')[i].style.display = 'none';
    })
}
// checkout button click handler
document.getElementById('check-out').addEventListener('click', function(){
    alert('You are about to Checkout');
    document.getElementById('full-area').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
    document.body.style.backgroundColor = '#FCF6F5FF';
})

// deducting and updating all price and value
function deduct(name,id1,id2){
    let singlePrice = 0;
    if(name === 'phn'){
        singlePrice = 1219;
    }
    else{
        singlePrice = 59;
    }
    let currentValue = parseInt(document.getElementById(id1).value);
    if(currentValue > 0 ){
        currentValue --;
        document.getElementById(id1).value = currentValue;

        const currentPrice = parseInt(document.getElementById(id2).innerText);
        const updatedPrice = currentPrice - singlePrice;
        document.getElementById(id2).innerText = updatedPrice;
        updateCosts(-1*singlePrice);
    }
}
// adding and updating all value and price
function add(name,id1,id2){
    let singlePrice = 0;
    if(name === 'phn'){
        singlePrice = 1219;
    }
    else{
        singlePrice = 59;
    }
    let currentValue = parseInt(document.getElementById(id1).value);
    currentValue++ ;
    document.getElementById(id1).value = currentValue;

    const currentPrice = parseInt(document.getElementById(id2).innerText);
    const updatedPrice = currentPrice + singlePrice;
    document.getElementById(id2).innerText = updatedPrice;
    updateCosts(singlePrice);
}
// calculate sub, tax and total
function updateCosts(singleVal){
    const subTotal = parseFloat(document.getElementById('subtotal').innerText);
    const updatedSubtotal = subTotal + singleVal;
    document.getElementById('subtotal').innerText = updatedSubtotal;

    const updatedTax = parseFloat((updatedSubtotal * 0.12).toFixed(2));
    document.getElementById('tax').innerText = updatedTax;

    const updatedTotal = parseFloat((updatedSubtotal + updatedTax).toFixed(2));
    document.getElementById('total').innerText = updatedTotal;
}