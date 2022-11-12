function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", loadPhonebook);
    document.getElementById("btnCreate").addEventListener("click", getData);

    function getData() {
        const person = document.getElementById("person");
        const phone = document.getElementById("phone");
        const form = {
            "person": person.value,
            "phone": phone.value
        };
        person.value = "";
        phone.value = "";
        addPhone(form);
    }

    async function addPhone(body) {
        const response = await fetch("http://localhost:3030/jsonstore/phonebook", {
            method: 'POST',
            headers: {'Content-Type': 'application.json'},
            body: JSON.stringify(body)
        });

        const data = await response.json();
        loadPhonebook();
    }

    function loadPhonebook() {
        fetch("http://localhost:3030/jsonstore/phonebook")
            .then(response => {
                return response.json();
            })
            .then(data => {
                const phonebook = document.getElementById("phonebook");
                phonebook.innerHTML = "";
                Object.values(data)
                    .forEach(p => {
                        const li = document.createElement("li");
                        li.setAttribute("value", p._id);
                        const deleteBtn = document.createElement('button');
                        deleteBtn.setAttribute('id', "deleteBtn");
                        deleteBtn.textContent = "Delete";
                        deleteBtn.addEventListener("click", deletePhone);
                        li.textContent = `${p.person}: ${p.phone}`;
                        li.appendChild(deleteBtn);
                        phonebook.appendChild(li);
                    });
            })
            .catch(err => {
                document.getElementById("phonebook").textContent = "Not found any phone!!!";
            })
    }


    async function deletePhone(event) {
        const phone = event.target.parentElement;
        const phoneId = phone.getAttribute('value');

        const response = await fetch(`http://localhost:3030/jsonstore/phonebook/${phoneId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        loadPhonebook();
        return await response.json();
    }
}

attachEvents();