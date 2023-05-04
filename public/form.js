if (!sessionStorage.getItem('flag')) {
    redirect();
}
var time = 0;

window.onfocus = function () { time = 0; }
window.onclick = function () { time = 0; }
window.onmousemove = function () { time = 0; }
window.onkeypress = function () { time = 0; }
window.onkeydown = function () { time = 0; }
window.onkeyup = function () { time = 0; }
window.onscroll = function () { time = 0; }

var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));

var frequency = setInterval(function () {
    time++;
    if (time > 200) { // 10 Sec time
        clearInterval(frequency);
        sessionStorage.clear();
        myModal.show();
    }
}, 1000)


if (sessionStorage.getItem("")) {
    redirect();
}

function login() {
    redirect();
}

function redirect() {
    window.location.assign("/");
}

function logOff() {
    sessionStorage.clear();
    redirect();
}

// Form data submission start

const save = document.querySelector('#save');

const saveEmp = async () => {
    event.preventDefault();

    var name = document.getElementById("name").value;
    console.log("Name: ", name);
    if (!name) {
        let n = document.querySelector('.name1');
        n.style.color = 'red';
        n.innerHTML = 'Name cannot be null';
        return;
    }

    var email = document.getElementById("email").value;
    if (!email) {
        let n = document.querySelector('.email1');
        n.style.color = 'red';
        n.innerHTML = 'Email cannot be null';
        return;
    }
    if (!(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
        let n = document.querySelector('.email1');
        n.style.color = 'red';
        n.innerHTML = 'Wrong Format';
        return;
    }

    var dateofbirth = document.getElementById("datepicker").value;
    if (!dateofbirth) {
        let n = document.querySelector('.dateofbirth1');
        n.style.color = 'red';
        n.innerHTML = 'DOB cannot be null';
        return;
    }

    var dateofjoining = document.getElementById("datepicker2").value;
    if (!dateofjoining) {
        let n = document.querySelector('.dateofjoining1');
        n.style.color = 'red';
        n.innerHTML = 'DOJ cannot be null';
        return;
    }

    var department = document.getElementById("department").value;
    if (department == "Select The Department") {
        let n = document.querySelector('.department1');
        n.style.color = 'red';
        n.innerHTML = 'Please select department';
        return;
    }

    var role = document.getElementById("role").value;
    if (role == "Select The Role") {
        let n = document.querySelector('.role1');
        n.style.color = 'red';
        n.innerHTML = 'Please slect Role';
        return;
    }

    let response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "role": role,
            "dateofbirth": dateofbirth,
            "dateofjoining": dateofjoining,
            "department": department,
            "email": email
        })
    });
    if (response.status === 200) {
        // alert('Form Submitted succesfully');
        window.location.assign('form');
    }
    else {
        window.location.assign('404');
    }
    console.log(response);
}
save.addEventListener('click', saveEmp);

// Form data Submission End

$(function () {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        maxDate: "+16Y",
        minDate: "-100Y",
        yearRange: "-100:+16"
    });
});

$(function () {
    $("#datepicker2").datepicker({
        changeMonth: true,
        changeYear: true,
        maxDate: "+16Y",
        minDate: "-100Y",
        yearRange: "-100:+16"
    });
});


function clear2(){

    let n1 = document.querySelector('.email1');
    n1.innerHTML = '';

    let n2 = document.querySelector('.name1');
    n2.innerHTML = '';

    let n3 = document.querySelector('.dateofbirth1');
    n3.innerHTML = '';

    let n4 = document.querySelector('.dateofjoining1');
    n4.innerHTML = '';

    let n5 = document.querySelector('.department1');
    n5.innerHTML = '';

    let n6 = document.querySelector('.role1');
    n6.innerHTML = '';
    
    let n = document.querySelector('.allreq');
    n.innerHTML = '';
}