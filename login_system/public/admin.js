if (!sessionStorage.getItem('flag')) {
    window.location.assign("/")
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
    window.location.assign("index");
}

function logOff() {
    sessionStorage.clear();
    redirect();
}

//For table 1 --> Start =============================================


$(document).ready(async function () {
    fetch('http://localhost:3000/getdata')
        .then(response => response.json())
        .then(data => {
            for(let i=0; i<data.data.length; i++){
                var tr = document.createElement("tr");

                var td1 = document.createElement("td");
                td1.innerText = data.data[i].name;

                var td2 = document.createElement("td");
                td2.innerText = data.data[i].email;

                var td3 = document.createElement("td");
                td3.innerText = data.data[i].department;

                var td4 = document.createElement("td");
                td4.innerText = data.data[i].role;

                var td5 = document.createElement("td");
                td5.innerText = data.data[i].dateofbirth;

                var td6 = document.createElement("td");
                td6.innerText = data.data[i].dateofjoining;

                tr.append(td1, td2, td3, td4, td5, td6);
                document.querySelector("tbody").append(tr);
            }
            $(document).ready(function () {
                $('#example').DataTable();
            });
        }
    )
})


// const obj1 = [
//     {
//         name: "Shashank dubey",
//         position: "7905096489",
//         office: "allyouget14@gmail.com",
//         age: 23,
//         startDate: "13-04-2023",
//         salary: "$200"
//     },
//     {
//         name: "Rohit dubey",
//         position: "9651442006",
//         office: "shashankrd14@gmail.com",
//         age: 23,
//         startDate: "13-04-2023",
//         salary: "$200"
//     },
//     {
//         name: "Rohit dubey",
//         position: "9651442006",
//         office: "shashankrd14@gmail.com",
//         age: 23,
//         startDate: "13-04-2023",
//         salary: "$200"
//     },
//     {
//         name: "Rohit dubey",
//         position: "9651442006",
//         office: "shashankrd14@gmail.com",
//         age: 23,
//         startDate: "13-04-2023",
//         salary: "$200"
//     },
//     {
//         name: "Rohit dubey",
//         position: "9651442006",
//         office: "shashankrd14@gmail.com",
//         age: 23,
//         startDate: "13-04-2023",
//         salary: "$200"
//     },
//     {
//         name: "Rohit dubey",
//         position: "9651442006",
//         office: "shashankrd14@gmail.com",
//         age: 23,
//         startDate: "13-04-2023",
//         salary: "$200"
//     },
//     {
//         name: "Rohit dubey",
//         position: "9651442006",
//         office: "shashankrd14@gmail.com",
//         age: 23,
//         startDate: "13-04-2023",
//         salary: "$200"
//     },
//     {
//         name: "Rohit dubey",
//         position: "9651442006",
//         office: "shashankrd14@gmail.com",
//         age: 23,
//         startDate: "13-04-2023",
//         salary: "$200"
//     },
//     {
//         name: "Rohit dubey",
//         position: "9651442006",
//         office: "shashankrd14@gmail.com",
//         age: 23,
//         startDate: "13-04-2023",
//         salary: "$200"
//     },
//     {
//         name: "Rohit dubey",
//         position: "9651442006",
//         office: "shashankrd14@gmail.com",
//         age: 23,
//         startDate: "13-04-2023",
//         salary: "$200"
//     },
//     {
//         name: "Rohit dubey",
//         position: "9651442006",
//         office: "shashankrd14@gmail.com",
//         age: 23,
//         startDate: "13-04-2023",
//         salary: "$100"
//     }
// ]

// obj1.forEach((i) => {
//     var tr = document.createElement("tr");

//     var td1 = document.createElement("td");
//     td1.innerText = i.name;

//     var td2 = document.createElement("td");
//     td2.innerText = i.position;

//     var td3 = document.createElement("td");
//     td3.innerText = i.office;

//     var td4 = document.createElement("td");
//     td4.innerText = i.age;

//     var td5 = document.createElement("td");
//     td5.innerText = i.startDate;

//     var td6 = document.createElement("td");
//     td6.innerText = i.salary;

//     tr.append(td1, td2, td3, td4, td5, td6);
//     document.querySelector("tbody").append(tr);
// });

// Table 1 --> End ===================================================

// $(document).ready(function () {
//     $('#example').DataTable();
// });


function toForm() {
    window.location.assign("form");
}