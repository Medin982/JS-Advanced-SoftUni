import { deleteIdea, getIdea } from "../api/data.js";

const detailsSec = document.getElementById('details-View');
detailsSec.remove();

let ctx;
export async function showDetails(context, e) {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem('user'));
    const ideaId = e.target.dataset.id;
    const idea = await getIdea(ideaId);
    detailsSec.getElementsByTagName('img')[0].src = idea.img;
    detailsSec.getElementsByTagName('h2')[0].textContent = idea.title;
    detailsSec.querySelector('.idea-description').textContent = idea.description;
    const btn = detailsSec.querySelector('.btn');
    btn.remove();
    if (user) {
        if (user._id === idea._ownerId) {
            detailsSec.getElementsByClassName('text-center')[0].appendChild(btn);
            btn.addEventListener('click', () => {
                deleteIdea(ideaId);
                context.goTo('Dashboard');
            });
        }
    }
    ctx = context;
    context.updateNav();
    context.showSection(detailsSec);
}