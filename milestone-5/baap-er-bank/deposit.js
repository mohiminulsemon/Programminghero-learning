document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositField = document.getElementById('deposit-field');
    const depositValue = parseFloat(depositField.value);//use value for input field

    depositField.value = '';// if we use depositValue = ''; it will give incorrect result. we should choose the element for change not the value

        //number validation
        if(isNaN(depositValue)){
            alert('provide a number');
            return;
        }
   
    //calculate total deposit
    const depositTotal = document.getElementById('deposit-total');
    const previoursDeposit = parseFloat(depositTotal.innerText);
    
    const newdepositTotal = depositValue + previoursDeposit;
    depositTotal.innerText = newdepositTotal;// use innerText for other tags

    //calculate total balance
    const totalBalance = document.getElementById('balance-total');
    const previousBalance = parseFloat(totalBalance.innerText);
    
    totalBalance.innerText = previousBalance + depositValue;
})