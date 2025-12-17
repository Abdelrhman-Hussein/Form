//selecting elements form welcome.html
var welcome = document.querySelector('#welcomeMessage');


//store username in variable
var userName = localStorage.getItem('loggedInUser');


// add welcome messege
if (userName) {
        welcome.textContent = "Welcome, " + userName;
        welcome.classList.add('text-info')
}