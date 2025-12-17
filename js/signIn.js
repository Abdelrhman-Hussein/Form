//selecting elements form signIn.html
var signInBtn = document.querySelector('.signInBtn');
var emailInputIn = document.querySelector('#emailInputIn');
var passwordInputIn = document.querySelector('#passwordInputIn');
var incorrect = document.querySelector('.incorrect');


// check if there is data in the local storage and collecting data from localStorage to compare between data
var usersList;
if(localStorage.getItem('users') != null){
    usersList = JSON.parse(localStorage.getItem('users'))
}else{
    usersList = [];
}

//check if this data already exist or not function
signInBtn.addEventListener('click',function(e){
    isUserEmailAndPasswordExists();
})

//check is this user has just sign up function
function isUserEmailAndPasswordExists(){
    var userSignInData = {
        email: emailInputIn.value,
        password: passwordInputIn.value,
    };
    var found = false;

    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email === userSignInData.email && usersList[i].password === userSignInData.password) {
            found = true;
            localStorage.setItem('loggedInUser', usersList[i].name);
        }
    }
    
    if (found) {
        window.location.href = "../html/welcome.html";

    } else {
        incorrect.classList.remove('d-none');
    }
}

