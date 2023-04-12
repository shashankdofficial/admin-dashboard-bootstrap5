const obj = [
    {
        name : "Shashank dubey",
        phone : "7905096489",
        email : "allyouget14@gmail.com",
        address : [
            {
                city : "Lucknow",
                district : "Lucknow",
                pincode : "226001"
            }
        ]
    },
    {
        name : "Rohit dubey",
        phone : "9651442006",
        email : "shashankrd14@gmail.com",
        address : [
            {
                city : "Sitapur",
                district : "Jaunpur",
                pincode : "226001"
            }
        ]
    },
    {
        name : "Rohit dubey",
        phone : "9651442006",
        email : "shashankrd14@gmail.com",
        address : [
            {
                city : "Sitapur",
                district : "Jaunpur",
                pincode : "226001"
            }
        ]
    },
    {
        name : "Rohit dubey",
        phone : "9651442006",
        email : "shashankrd14@gmail.com",
        address : [
            {
                city : "Sitapur",
                district : "Jaunpur",
                pincode : "226001"
            }
        ]
    }
]

obj.forEach((i) => {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = i.name;

    var td2 = document.createElement("td");
    td2.innerText = i.email;

    var td3 = document.createElement("td");
    td3.innerText = i.address[0].city;

    var td4 = document.createElement("td");
    td4.innerText = i.address[0].district;

    var td5 = document.createElement("td");
    td5.innerText = i.address[0].pincode;

    var td6 = document.createElement("td");
    td6.innerText = i.phone;

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
});
