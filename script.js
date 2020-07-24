
// deducting and update item number and current item total price
function deduct(itemName,itemCount_id,itemPrice_id){
    let unitPrice = 0;
    const itemTotalPrice_id = itemPrice_id;
    if(itemName === 'phn'){
        unitPrice = 1219;
    }
    else{
        unitPrice = 59;
    }
    let currentCount = parseInt(document.getElementById(itemCount_id).value);
    if(currentCount > 0 ){
        document.getElementById(itemCount_id).value = --currentCount;

        updateCurrentItemPrice(itemTotalPrice_id,unitPrice,currentCount);
        updateCostSection(-1 * unitPrice);
    }
}

// adding and updating item number and current price
function add(itemName,itemCount_id,itemPrice_id){
    let unitPrice = 0;
    const itemTotalPrice_id = itemPrice_id;
    if(itemName === 'phn'){
        unitPrice = 1219;
    }
    else{
        unitPrice = 59;
    }
    let currentCount = parseInt(document.getElementById(itemCount_id).value);
    document.getElementById(itemCount_id).value = ++currentCount;

    const itemUpdatedPrice = updateCurrentItemPrice(itemTotalPrice_id,unitPrice,currentCount);
    updateCostSection(unitPrice);
}

// update item current price
function updateCurrentItemPrice(itemPrice_id,unitPrice,currentCount){
    const updatedPrice = unitPrice * currentCount;
    document.getElementById(itemPrice_id).innerText = updatedPrice.toLocaleString();
}
// update costs section
function updateCostSection(unitPrice){
    const subTotal = parseFloat((document.getElementById('subtotal').innerText).split(",").join(""));
    const updatedSubtotal = subTotal + unitPrice;
    document.getElementById('subtotal').innerText = updatedSubtotal.toLocaleString();

    const updatedTax = parseFloat(((updatedSubtotal * 0.08).toFixed(2)).split(",").join(""));
    document.getElementById('tax').innerText = updatedTax.toLocaleString();

    const updatedTotal = parseFloat(((updatedSubtotal + updatedTax).toFixed(2)).split(",").join(""));
    document.getElementById('total').innerText = updatedTotal.toLocaleString();
}

// costs after remove one item from cart
function afterRemove(unitPrice,id){
    const itemNum = parseInt(document.getElementById(id).value);

    const subTotal = parseFloat((document.getElementById('subtotal').innerText).split(",").join(""));
    const updatedSubtotal = subTotal - (itemNum*unitPrice);
    document.getElementById('subtotal').innerText = updatedSubtotal.toLocaleString();

    const updatedTax = parseFloat(((updatedSubtotal * 0.08).toFixed(2)).split(",").join(""));
    document.getElementById('tax').innerText = updatedTax.toLocaleString();

    const updatedTotal = parseFloat(((updatedSubtotal + updatedTax).toFixed(2)).split(",").join(""));
    document.getElementById('total').innerText = updatedTotal.toLocaleString();
}


// phone minus button event handler
document.getElementById('decreasePhone').addEventListener('click', function(){
    deduct('phn','currentPhoneCount','phoneTotalPrice');
})

// phone plus button event handler
document.getElementById('increasePhone').addEventListener('click', function(){
    add('phn','currentPhoneCount','phoneTotalPrice');
})

// case minus button event handler
document.getElementById('decreaseCase').addEventListener('click', function(){
    deduct('case','currentCaseCount','caseTotalPrice');
})

// case plus button event handler
document.getElementById('increaseCase').addEventListener('click', function(){
    add('case','currentCaseCount','caseTotalPrice');
})

// phone item remove button click handler
document.querySelectorAll('img.remove-item')[0].addEventListener('click', function(){
    document.getElementById('cart-phone').style.display = 'none';
    afterRemove(1219,'currentPhoneCount');
})

// Case item remove button click handler
document.querySelectorAll('img.remove-item')[1].addEventListener('click', function(){
    document.getElementById('cart-case').style.display = 'none';
    afterRemove(59,'currentCaseCount');
})

// checkout button click handler
document.getElementById('check-out').addEventListener('click', function(){
    alert('You are about to Checkout');
    document.getElementById('full-area').style.display = 'none';
    document.getElementById('form').style.display = 'block';
})

// place order button click handler
document.getElementById('placeOrder').addEventListener('click', function(){
    document.getElementById('form').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
    document.body.style.backgroundColor = '#FCF6F5FF';
    const customer = document.getElementById('inputName').value;
    const upCaseName = customer.toUpperCase(); 
    document.querySelector('#thankYou h1').innerText = 'Thank you ' + upCaseName + ' for shopping with Panda Commerce!';
})