// get current product count
function getProductCount(product){
    return parseInt(document.getElementById(product + '-count').value);
}

// hand increase and decrease item value and cost
function handleProductChange(product,isIncrease){
    const unitPrice = (product === 'phone')? 1219 : 59 ;
    let currentCount = getProductCount(product);
    if(isIncrease == false && currentCount > 0 ){
        currentCount--;
    }
    else if(isIncrease == true){
        currentCount++;
    }
    document.getElementById(product + '-count').value = currentCount;
    const updatedPrice = unitPrice * currentCount;
    document.getElementById(product + '-total').innerText = updatedPrice.toLocaleString();
    updateCostSection();

}

// update costs section
function updateCostSection(){
    const phoneCount = getProductCount('phone');
    const caseCount = getProductCount('case');

    const updatedSubtotal =(phoneCount * 1219) + (caseCount * 59);
    document.getElementById('subtotal').innerText = updatedSubtotal.toLocaleString();
    
    const updatedTax = Math.round(updatedSubtotal * 0.08);
    document.getElementById('tax').innerText = updatedTax.toLocaleString();

    const updatedTotal = updatedSubtotal + updatedTax;
    document.getElementById('total').innerText = updatedTotal.toLocaleString();
}

// costs after remove one item from cart
function afterRemove(product){
    document.getElementById('cart-' + product).style.display = 'none';
    const itemNum = getProductCount(product);
    const unitPrice = (product === 'phone')? 1219 : 59 ;

    const subTotal = parseFloat((document.getElementById('subtotal').innerText).split(",").join(""));
    const updatedSubtotal = subTotal - (itemNum*unitPrice);
    document.getElementById('subtotal').innerText = updatedSubtotal.toLocaleString();

    const updatedTax = Math.round(updatedSubtotal * 0.08);
    document.getElementById('tax').innerText = updatedTax.toLocaleString();

    const updatedTotal = updatedSubtotal + updatedTax;
    document.getElementById('total').innerText = updatedTotal.toLocaleString();
}

// phone minus button event handler
document.getElementById('decreasePhone').addEventListener('click', function(){
    handleProductChange('phone',false);
})

// phone plus button event handler
document.getElementById('increasePhone').addEventListener('click', function(){
    handleProductChange('phone',true);
})

// case minus button event handler
document.getElementById('decreaseCase').addEventListener('click', function(){
    handleProductChange('case', false);
})

// case plus button event handler
document.getElementById('increaseCase').addEventListener('click', function(){
    handleProductChange('case',true);
})

// phone item remove button click handler
document.querySelectorAll('img.remove-item')[0].addEventListener('click', function(){
    afterRemove('phone');
})

// Case item remove button click handler
document.querySelectorAll('img.remove-item')[1].addEventListener('click', function(){
    afterRemove('case');
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
    const customer = (document.getElementById('inputName').value).toUpperCase(); 
    document.querySelector('#thankYou h1').innerText = `Thank you ${customer} for shopping with Panda Commerce!`;
})