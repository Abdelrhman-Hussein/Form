//selecting element from signUp.html
var nameInput = document.querySelector('#nameInput');
var emailInput = document.querySelector('#emailInput');
var passwordInput = document.querySelector('#passwordInput');
var signUpBtn = document.querySelector('.signUpBtn');
var success = document.getElementById('success');


// check if there is data in the local storage
var usersList;
if(localStorage.getItem('users') != null){
    usersList = JSON.parse(localStorage.getItem('users'))
}else{
    usersList = [];
}

// add user function
signUpBtn.addEventListener('click',function(e){
    addUser();
})
function addUser(){
    // check if the regex correct and the email is not repeated to sign up
    if(validateForm(nameInput) && validateForm(emailInput) && validateForm(passwordInput) && !isEmailExists(emailInput.value)){
        var userInfo={
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    }
    usersList.push(userInfo);
    localStorage.setItem('users',JSON.stringify(usersList));
    success.classList.remove('d-none');
    nameInput.classList.remove('is-valid');
    emailInput.classList.remove('is-valid');
    passwordInput.classList.remove('is-valid');
    clearForm();
    
    }else if(!isEmailExists(emailInput.value) == false){
        alert("E-mail is already used");
        nameInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        success.classList.add('d-none');
    }
}

// clear form function
function clearForm(){
    nameInput.value = null;
    emailInput.value = null;
    passwordInput.value = null;
}


//dynamic validation function 
function validateForm(element){
    var regex={
    nameInput: /^[a-z0-9_-]{3,15}$/i,
    emailInput: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    passwordInput: /^\w{5,10}$/i,
}
if(regex[element.id].test(element.value)){
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    element.nextElementSibling.classList.add('d-none');
    return true;
}else{
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
    element.nextElementSibling.classList.remove('d-none');
    return false;
}
}

// check if the email is repeated or not function
function isEmailExists(email){
    for(let i = 0; i < usersList.length; i++){
        if(usersList[i].email.toLowerCase() === email.toLowerCase()){
            return true;
        }
    }
    return false;
}




