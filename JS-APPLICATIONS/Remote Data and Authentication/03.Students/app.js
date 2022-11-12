const form = document.getElementById('form');
form.addEventListener("submit", getStudentData);

function getStudentData(e) {
    e.preventDefault();
    const data = new FormData(form);
    let firstName = data.get('firstName');
    let lastName = data.get('lastName');
    let facultyNumber = data.get('facultyNumber');
    let grade = data.get('grade');

    if (!firstName || !lastName || !facultyNumber || !grade) {
       return;
    }

    const formData = {
        "firstName": firstName,
        "lastName": lastName,
        "facultyNumber": Number(facultyNumber),
        "grade": Number(grade),
    };
    form.reset();
    addStudent(formData);
}

async function addStudent(body) {
    const response = await fetch("http://localhost:3030/jsonstore/collections/students", {
        method: 'POST',
        headers: { 'Content-Type': 'applocation/json' },
        body: JSON.stringify(body)
    });

    loadAllStudent();
}

async function loadAllStudent() {
    const response = await fetch("http://localhost:3030/jsonstore/collections/students");
    const data = await response.json();
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = "";
    Object.values(data)
        .forEach(s => {
            const tr = document.createElement("tr");
            tr.setAttribute("value", s._id);
            const fName = document.createElement("th");
            fName.textContent = s.firstName;
            const lname = document.createElement("th");
            lname.textContent = s.lastName;
            const facNumber = document.createElement("th");
            facNumber.textContent = s.facultyNumber;
            const grd = document.createElement("th");
            grd.textContent = s.grade;
            tr.appendChild(fName);
            tr.appendChild(lname);
            tr.appendChild(facNumber);
            tr.appendChild(grd);
            tbody.appendChild(tr);
        });
}