import { getAllIdeas } from "../api/data.js";

const dashboardSec = document.getElementById('dashboard-holder');
dashboardSec.remove();

export async function showDashboard(context) {
    dashboardSec.innerHTML = "";
    const ideas = await getAllIdeas();
    if (!ideas) {
        dashboardSec.innerHTML = ' <h1>No ideas yet! Be the first one :)</h1>';
    } else {
        ideas.forEach(element => { dashboardSec.innerHTML += (createCard(element)) });
        [...dashboardSec.getElementsByClassName('btn')]
            .forEach(e => e.addEventListener('click', (e) => {
                context.goTo('Details', e);
            }));
    }
    context.updateNav();
    context.showSection(dashboardSec);
}

function createCard(element) {
    return `
        <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">${element.title}</p>
            </div>
            <img class="card-image" src=${element.img} alt="Card image cap">
            <a class="btn" href="" data-id=${element._id}>Details</a>
        </div>`;
}