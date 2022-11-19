import { showDetails } from "./details.js";

const homeSection = document.getElementById('homeView');
const main = document.getElementsByTagName('main')[0];
const form = homeSection.querySelector('form');
form.addEventListener('submit', getTopicData);
const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

export async function showHome() {
    const topicContainer = homeSection.querySelector('.topic-title');
    const posts = await loadPost();
    const content = Object.values(posts)
        .map(p => topicTemp(p));
    topicContainer.replaceChildren(...content);
    main.replaceChildren(homeSection);
}

function getTopicData(event) {
    event.preventDefault();
    if (event.submitter.innerHTML === 'Cancel') {
        event.target.reset();
    }
    
    const { topicName, username, postText } = Object.fromEntries(new FormData(event.target));
    if (!topicName || !username || !postText) {
        return;
    }

    createTopic({ topicName, username, postText, date: new Date() });
    event.target.reset();
}

async function loadPost() {
    const response = await fetch(url);
    const data = response.json();

    return data;
}

async function createTopic(body) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    showHome();
}

function topicTemp(data) {
    const container = document.createElement('div');
    container.classList.add('topic-container');
    container.innerHTML =
        `<div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal" data-id="${data._id}">
             <h2>${data.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${data.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${data.username}</span></p>
                    </div>
                </div>
            </div>
        </div>`;

        container.querySelector('a h2').addEventListener('click', showDetails);

    return container;
}