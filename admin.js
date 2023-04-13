var time = 0;
var i = 1;

window.onfocus = function () { time = 0; }
window.onclick = function () { time = 0; }
window.onmousemove = function () { time = 0; }
window.onkeypress = function () { time = 0; }
window.onkeydown = function () { time = 0; }
window.onkeyup = function () { time = 0; }

var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));

var frequency = setInterval(function () {
  time++;
  if (time > 5) { // 10 Sec time
    clearInterval(frequency);
    i = 0;
    myModal.show();
  }
}, 1000)

function login() {
  redirect();
}

function redirect() {
  window.location.assign("index.html");
}



//For table 1 --> Start =============================================

const obj1 = [
  {
    name: "Shashank dubey",
    position: "7905096489",
    office: "allyouget14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  }
]

obj1.forEach((i) => {
  var tr = document.createElement("tr");
  tr.setAttribute('class', "tr1");

  var td1 = document.createElement("td");
  td1.innerText = i.name;

  var td2 = document.createElement("td");
  td2.innerText = i.position;

  var td3 = document.createElement("td");
  td3.innerText = i.office;

  var td4 = document.createElement("td");
  td4.innerText = i.age;

  var td5 = document.createElement("td");
  td5.innerText = i.startDate;

  var td6 = document.createElement("td");
  td6.innerText = i.salary;

  tr.append(td1, td2, td3, td4, td5, td6);
  document.querySelector(".tbody1").append(tr);
});

const table = document.getElementById("example");

const tbody1 = table.querySelector('.tbody1');
const rows1 = tbody1.querySelectorAll('.tr1');

console.log(rows1);
const pageCount1 = Math.ceil(rows1.length / 10);

function showPage(page) {
  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;
  for (let i = 0; i < rows1.length; i++) {
    const row = rows1[i];
    if (i >= startIndex && i < endIndex) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  }
}

function createPagination() {
  const pagination = document.getElementById('pagination');
  for (let i = 1; i <= pageCount1; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
      showPage(i);
    });
    pagination.appendChild(button);
  }
}

showPage(1);
createPagination();

// Table 1 --> End ===================================================


//For table 2 --> Start =============================================

const obj2 = [
  {
    name: "Shashank dubey",
    position: "7905096489",
    office: "allyouget14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 23,
    startDate: "13-04-2023",
    salary: "$200"
  },
  {
    name: "Rohit dubey",
    position: "9651442006",
    office: "shashankrd14@gmail.com",
    age: 24,
    startDate: "13-04-2023",
    salary: "$200"
  }
]

obj2.forEach((i) => {
  var tr = document.createElement("tr");
  tr.setAttribute('class', "tr2");

  var td1 = document.createElement("td");
  td1.innerText = i.name;

  var td2 = document.createElement("td");
  td2.innerText = i.position;

  var td3 = document.createElement("td");
  td3.innerText = i.office;

  var td4 = document.createElement("td");
  td4.innerText = i.age;

  var td5 = document.createElement("td");
  td5.innerText = i.startDate;

  var td6 = document.createElement("td");
  td6.innerText = i.salary;

  tr.append(td1, td2, td3, td4, td5, td6);
  document.querySelector(".tbody2").append(tr);
});

const table2 = document.getElementById("example2");

const tbody2 = table2.querySelector('.tbody2');
const rows2 = tbody2.querySelectorAll('.tr2');

const pageCount2 = Math.ceil(rows2.length / 10);

function showPage2(page) {
  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;
  for (let i = 0; i < rows2.length; i++) {
    const row = rows2[i];
    if (i >= startIndex && i < endIndex) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  }
}

function createPagination2() {
  const pagination = document.getElementById('pagination2');
  for (let i = 1; i <= pageCount2; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
      showPage2(i);
    });
    pagination.appendChild(button);
  }
}

showPage2(1);
createPagination2();