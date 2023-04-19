var email1 = 'allyouget14@gmail.com';
var password1 = '123456';

var email2 = 'admin14@gmail.com';
var password2 = '123456';

var email3 = 'rohit14@gmail.com';
var password3 = '123456';

// var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function myfunc() {
    event.preventDefault();
    let user = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (user === email1 && pass === password1) {
        sessionStorage.setItem('flag', 'true');
        window.location.assign('/admin');
    }
    else if (user === email2 && pass === password2) {
        sessionStorage.setItem('flag', 'true');
        window.location.assign('/admin');
    }
    else if (user === email3 && pass === password3) {
        sessionStorage.setItem('flag', 'true');
        window.location.assign('/admin');
    }
    else {
        alert("Please enter correct credentials");
        window.location.assign("/");
    }
}