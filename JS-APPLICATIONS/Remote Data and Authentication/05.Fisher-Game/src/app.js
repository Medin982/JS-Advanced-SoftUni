
document.getElementById('logout').addEventListener('click', logout);
document.getElementsByClassName('load')[0].addEventListener('click', loadAllChatches);
const addBtn = document.getElementsByClassName('add')[0];
addBtn.addEventListener('submit', getCatchData);

function getCatchData(event) {
    event.preventDefault();
    
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
        });

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
    const user = sessionStorage.userData;
    if (accessToken) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('p.email span').textContent = user;
        addBtn.removeAttribute('disabled', '');
    } else {
        document.getElementById('user').style.display = 'none';
        addBtn.setAttribute('disabled', '');
    }
})();
