//step-1: add event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get email and pass from input field
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    
    //step-4: email and pass verification
    if(email === 'semon@gmail.com' && password === 'semon')
    {
        window.location.href='bank.html';
    }
    else alert('invalid');
})