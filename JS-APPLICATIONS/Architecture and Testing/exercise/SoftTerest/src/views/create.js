import { createIdea } from "../api/data.js";

const createSec = document.getElementById('create-View');
const form = createSec.querySelector('form');
form.addEventListener('submit', onsubmit);
createSec.remove();
let ctx;
export function showCreate(context) {
    ctx = context;
    context.updateNav();
    context.showSection(createSec);
}

async function onsubmit(e) {
    e.preventDefault();
    const {title, description, imageURL} = Object.fromEntries(new FormData(e.target));

    if (title.length < 6 || description.length < 10 || imageURL.length < 5) {
            alert('Cannot have empty field!');
            return;
        }

      await createIdea(imageURL, title, description); 
      ctx.goTo('Dashboard'); 
}