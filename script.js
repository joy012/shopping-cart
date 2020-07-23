// deducting and updating item number and price
function deduct(item,id1,id2){
    let singlePrice = 0;
    if(item === 'phn'){
        singlePrice = 1219;
    }
    else{
        singlePrice = 59;
    }
    let currentValue = parseInt(document.getElementById(id1).value);
    if(currentValue > 0 ){
        document.getElementById(id1).value = --currentValue;

        const currentPrice = parseInt(document.getElementById(id2).innerText);
        const updatedPrice = currentPrice - singlePrice;
        document.getElementById(id2).innerText = updatedPrice;
        updateCosts(-1*singlePrice);
    }
}

// adding and updating item number and price
function add(item,id1,id2){
    let singlePrice = 0;
    if(item === 'phn'){
        singlePrice = 1219;
    }
    else{
        singlePrice = 59;
    }
    let currentValue = parseInt(document.getElementById(id1).value);
    document.getElementById(id1).value = ++currentValue;

    const currentPrice = parseInt(document.getElementById(id2).innerText);
    const updatedPrice = currentPrice + singlePrice;
    document.getElementById(id2).innerText = updatedPrice;
    updateCosts(singlePrice);
}

// update subtotal, tax and total
function updateCosts(singlePrice){
    const subTotal = parseFloat(document.getElementById('subtotal').innerText);
    const updatedSubtotal = subTotal + singlePrice;
    document.getElementById('subtotal').innerText = updatedSubtotal;

    const updatedTax = parseFloat((updatedSubtotal * 0.12).toFixed(2));
    document.getElementById('tax').innerText = updatedTax;

    const updatedTotal = parseFloat((updatedSubtotal + updatedTax).toFixed(2));
    document.getElementById('total').innerText = updatedTotal;
}

// calculate the left item costs after removing one
function afterRemove(unitPrice,id){
    const itemNum = parseInt(document.getElementById(id).value);

    const subTotal = parseFloat(document.getElementById('subtotal').innerText)
    const updatedSubtotal = subTotal - (itemNum*unitPrice);
    document.getElementById('subtotal').innerText = updatedSubtotal;

    const updatedTax = parseFloat((updatedSubtotal * 0.12).toFixed(2));
    document.getElementById('tax').innerText = updatedTax;

    const updatedTotal = parseFloat((updatedSubtotal + updatedTax).toFixed(2));
    document.getElementById('total').innerText = updatedTotal;
}


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

// remove phone item from cart click handler
document.querySelectorAll('img.remove-item')[0].addEventListener('click', function(){
    document.getElementById('cart-phone').style.display = 'none';
    afterRemove(1219,'currentPhone');
})

// remove Case item from cart click handler
document.querySelectorAll('img.remove-item')[1].addEventListener('click', function(){
    document.getElementById('cart-case').style.display = 'none';
    afterRemove(59,'currentCase');
})

// checkout button click handler
document.getElementById('check-out').addEventListener('click', function(){
    alert('You are about to Checkout');
    document.getElementById('full-area').style.display = 'none';
    document.getElementById('form').style.display = 'block';
})

// place order button handler
document.getElementById('placeOrder').addEventListener('click', function(){
    document.getElementById('form').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
    document.body.style.backgroundColor = '#FCF6F5FF';
    const customer = document.getElementById('inputName').value;
    const upCaseName = customer.toUpperCase(); 
    document.querySelector('#thankYou h1').innerText = 'Thank you ' + upCaseName + ' for shopping with Panda Commerce!';
})