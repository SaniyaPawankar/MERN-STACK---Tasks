let form = document.getElementById("form");
let table = document.querySelector("table");
let entries = [];

let updateFormElement = document.querySelector(".updateFormContainer");
let updateForm = document.querySelector(".updateForm");
let closeBtn = document.getElementById("closeUpdateForm");

let form1 = document.getElementById("form1");
let submitBtn = document.getElementById("submit1");
let cancelBtn = document.getElementById("cancel");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let entry = {
        index: entries.length + 1,
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()

    };

    entries.push(entry);

    displayData();
    form.reset();
});


function displayData() {

    table.innerHTML =
        `<tr>
    <th>Index</th>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Time & Date</th>
    <th>Actions</th>
    </tr>`;


    entries.forEach((element) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${element.index}</td>
            <td>${element.name}</td>
            <td>${element.phone}</td>
            <td>${element.email}</td>
            <td>Time: ${element.time}  Date: ${element.date}</td>
            <td><button onclick="openUpdateForm(${element.index})">Edit</button> <button onclick="deleteEntry(${element.index})">Delete</button></td>
        `;

        let editBtn = row.getElementsByTagName("button")[0];
        editBtn.style.padding = "5px 10px";
        editBtn.style.borderRadius = "5px";
        editBtn.style.border = "none";
        editBtn.style.backgroundColor = "blue";
        editBtn.style.color = "white";
        editBtn.style.cursor = "pointer";
        editBtn.style.marginRight = "10px";

        let deleteBtn = row.getElementsByTagName("button")[1];
        deleteBtn.style.padding = "5px 10px";
        deleteBtn.style.borderRadius = "5px";
        deleteBtn.style.border = "none";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.marginRight = "10px";

        table.appendChild(row);
    });


}


function deleteEntry(index) {
    console.log("Deleted Entry Index :", index);
    entries = entries.filter((element) => element.index !== index);
    console.log(entries);
    entries.forEach((element, i) => element.index = i + 1);
    if (entries.length === 0) {
        table.innerHTML = "";
    } else {
        displayData();
    }

}

function openUpdateForm(index) {
    console.log("Update Form Opened For Index :", index);

    form1.name.value = entries[index - 1].name;
    form1.phone.value = entries[index - 1].phone;
    form1.email.value = entries[index - 1].email;

    updateFormElement.style.display = "block";
    updateForm.style.display = "block";



    form1.addEventListener("submit", (event) => {
        event.preventDefault();
        submitBtn.addEventListener("click", updateFormData(index));
        displayData();
        closeUpdateForm();
    })
}

let updateFormData = (index) => {
    entries[index - 1].name = form1.name.value;
    entries[index - 1].phone = form1.phone.value;
    entries[index - 1].email = form1.email.value;
}

function closeUpdateForm() {
    console.log("Update Form Closed");
    updateFormElement.style.display = "none";
    updateForm.style.display = "none";
}

closeBtn.addEventListener("click", closeUpdateForm);
cancelBtn.addEventListener("click", closeUpdateForm);










/*------------------------------------------------------------------------------------------------------------------*/

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let entry = {
//         name: document.getElementById("name").value,
//         phone: document.getElementById("phone").value,
//         email: document.getElementById("email").value,
//         date: new Date().toLocaleDateString(),
//         time: new Date().toLocaleTimeString()
//     };


//     entries.push(entry);
//     console.log(entries);
//     displayTable(entry);
// });

// table.innerHTML =
//     `<tr>
//     <th>Name</th>
//     <th>Phone</th>
//     <th>Email</th>
//     <th>Time & Date</th>
//     </tr>`;


// function displayTable(entry) {
//     let row = document.createElement("tr");
//     row.style.padding = "10px";
//     row.innerHTML = `
//         <td> ${entry.name} </td>
//         <td> ${entry.phone} </td>
//         <td> ${entry.email} </td>
//         <td> Time: ${entry.time}  Date: ${entry.date} </td>
//     `;
//     table.appendChild(row);
// }

