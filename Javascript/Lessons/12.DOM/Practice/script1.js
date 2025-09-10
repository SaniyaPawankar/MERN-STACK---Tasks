let form = document.getElementById("form");
let table = document.querySelector("table");
let entries = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let entry = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()

    };

    entries.push(entry);
    console.log(entries);

    displayData();
    form.reset();
});



function displayData() {

    table.innerHTML =
        `<tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Time & Date</th>
    </tr>`;

    entries.forEach((element, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${element.name}</td>
            <td>${element.phone}</td>
            <td>${element.email}</td>
            <td>Time: ${element.time}  Date: ${element.date}</td>
        `;
        table.appendChild(row);
    });
}



/*------------------------------------------------------------------------------------------------------------------*/

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let entry = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    };


    entries.push(entry);
    console.log(entries);
    displayTable(entry);
});

table.innerHTML =
    `<tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Time & Date</th>
    </tr>`;


function displayTable(entry) {
    let row = document.createElement("tr");
    row.style.padding = "10px";
    row.innerHTML = `
        <td> ${entry.name} </td>
        <td> ${entry.phone} </td>
        <td> ${entry.email} </td>
        <td> Time: ${entry.time}  Date: ${entry.date} </td>
    `;
    table.appendChild(row);
}

