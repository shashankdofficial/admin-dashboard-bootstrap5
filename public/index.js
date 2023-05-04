if (sessionStorage.getItem('flag')) {
    window.location.assign('/admin');
}

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

    if(!user && !pass){
        let n = document.querySelector('.allreq');
        n.style.color = 'red';
        n.innerHTML = 'All Field required!';
        return;
    }
    if (!user) {
        let n = document.querySelector('.email1');
        n.style.color = 'red';
        n.innerHTML = 'Email cannot be null!';
        return;
    }
    if (!(user.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
        let n = document.querySelector('.email1');
        n.style.color = 'red';
        n.innerHTML = 'Wrong Format!';
        return;
    }

    if(!pass) {
        let n = document.querySelector('.password1');
        n.style.color = 'red';
        n.innerHTML = 'Password cannot be null!';
        return;
    }
    else {
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
    }
}

function clear2(){
    let n = document.querySelector('.email1');
    n.innerHTML = '';

    let n2 = document.querySelector('.password1');
    n2.innerHTML = '';

    let n3 = document.querySelector('.allreq');
    n3.innerHTML = '';
}