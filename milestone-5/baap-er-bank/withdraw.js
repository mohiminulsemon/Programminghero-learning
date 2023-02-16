document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValue = parseFloat(withdrawField.value);

    withdrawField.value = '';
    
    //number validation
    if(isNaN(withdrawValue)){
        alert('provide a number');
        return;
    }
   
    //calculate total withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdraw = parseFloat(withdrawTotal.innerText);
    // get balance state
    const totalBalance = document.getElementById('balance-total');
    const previousBalance = parseFloat(totalBalance.innerText);


    //balance validation 
    if(withdrawValue > previousBalance){
        alert('baap er eto taka nai.');
        return;
    }
    
    const newWithdrawTotal = withdrawValue + previouswithdraw;
    withdrawTotal.innerText = newWithdrawTotal;

    

    //calculate total balance    
    totalBalance.innerText = previousBalance - withdrawValue;
})