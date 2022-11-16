
document.getElementById('logout').addEventListener('click', logout);
document.getElementsByClassName('load')[0].addEventListener('click', loadAllChatches);
const addBtn = document.getElementsByClassName('add')[0];
document.getElementById('addForm').addEventListener('submit', getCatchData);


function updateCatchData(event) {

}

async function updateCatch(event) {
    const catches = {
        'angler': 'bbb',
        'weight': 5,
        'species': 'bb',
        'location': 'nn',
        'bait': 'sdsa',
        'captureTime': 10
    }
    const catchId = event.target.dataset;
    const accessToken = sessionStorage.accessToken;
    const response = await fetch(`http://localhost:3030/data/catches/${catchId.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-authorization': accessToken
        },
        body: JSON.stringify(catches)
    });

    const data = response.json();
}

async function deleteCatch(event) {
    const catchId = event.target.dataset;
    const accessToken = sessionStorage.accessToken;
    const response = await fetch(`http://localhost:3030/data/catches/${catchId.id}`, {
        method: 'DELETE',
        headers: { 'X-authorization': accessToken }
    });

    const data = await response.json();
    loadAllChatches();
}

function getCatchData(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    if (!data.angler || Number(data.weight) < 0 || !data.species
        || !data.location || !data.bait || Number(data.captureTime) < 0) {
        return;
    }

    addCatch(data);
    event.target.reset();
}

async function addCatch(body) {
    const accessToken = sessionStorage.accessToken;
    const response = await fetch('http://localhost:3030/data/catches ', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-authorization': accessToken
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();

}

async function loadAllChatches() {
    const response = await fetch('http://localhost:3030/data/catches');
    const data = await response.json();

    const divCatches = document.getElementById('catches');
    divCatches.innerHTML = "";
    Object.values(data)
        .forEach(catches => {
            const currentCatch = document.createElement('div');
            currentCatch.setAttribute('class', 'catch');
            currentCatch.innerHTML = catchCard(catches);
            divCatches.appendChild(currentCatch);
            currentCatch.getElementsByClassName('delete')[0].addEventListener('click', deleteCatch);
            currentCatch.getElementsByClassName('update')[0].addEventListener('click', updateCatch);
            showOrHideUpdateAndDeleteBtn(catches._ownerId, currentCatch);
        });
}

function showOrHideUpdateAndDeleteBtn(catchesOwnedId, catchHTMLEle) {
    const userId = sessionStorage.userId;
    if (catchesOwnedId !== userId) {
        [...catchHTMLEle.querySelectorAll('button')]
            .forEach(b => {
                b.setAttribute('disabled', '');
            });
    }
}

function catchCard(catches) {
    return `<label>Angler</label>
    <input type="text" class="angler" value="${catches.angler}">
    <label>Weight</label>
    <input type="text" class="weight" value="${catches.weight}">
    <label>Species</label>
    <input type="text" class="species" value="${catches.species}">
    <label>Location</label>
    <input type="text" class="location" value="${catches.location}">
    <label>Bait</label>
    <input type="text" class="bait" value="${catches.bait}">
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${catches.captureTime}">
    <button class="update" data-id="${catches._id}">Update</button>
    <button class="delete" data-id="${catches._id}">Delete</button>`;
}

async function logout() {
    const accessToken = sessionStorage.accessToken;
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: { 'X-authorization': accessToken }
    });
    sessionStorage.clear();
    location.reload();
}

(function displayOrHideNavElement() {
    const accessToken = sessionStorage.accessToken;
    const user = sessionStorage.userEmail;
    if (accessToken) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('p.email span').textContent = user;
        addBtn.removeAttribute('disabled', '');
    } else {
        document.getElementById('user').style.display = 'none';
        addBtn.setAttribute('disabled', '');
    }
})();
