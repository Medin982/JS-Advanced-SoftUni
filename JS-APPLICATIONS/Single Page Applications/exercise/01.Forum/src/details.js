const detailsSection = document.getElementById('detailsView');
const commentForm = detailsSection.querySelector('.answer-comment');
commentForm.querySelector('form').addEventListener('submit', onSubmit);
const main = document.getElementsByTagName('main')[0];
let postId;

export async function showDetails(e) {
    if (typeof (e) === 'string') {
        postId = e;
    } else {
        postId = e.target.parentElement.dataset.id;
    }
    const getPostUrl = `http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`;
    const commentUrl = `http://localhost:3030/jsonstore/collections/myboard/comments`;
    const post = await getRequest(getPostUrl);
    const allComments = await getRequest(commentUrl);
    const comments = Object.values(allComments).filter(c => c.postId == postId);
    const content = postTemp(post, comments);
    detailsSection.replaceChildren(content);

    main.replaceChildren(detailsSection);
    main.appendChild(commentForm);

}

function onSubmit(e) {
    e.preventDefault();

    const { postText, username } = Object.fromEntries(new FormData(e.target));
    if (!postText || !username) {
        return;
    }

    createComment({ postText, username, date: new Date(), postId });
}

async function createComment(body) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    showDetails(body.postId);
}

function postTemp(data, comments) {
    const container = document.createElement('div');
    container.setAttribute('class', 'theme-content');
    container.innerHTML =
        `<div class="theme-title">
            <div class="theme-name-wrapper">
                <div class="theme-name">
                    <h2>${data.topicName}</h2>
                </div>

            </div>
        </div>
        <!-- comment  -->
        <div class="comment">
            <div class="header">
                <img src="./static/profile.png" alt="avatar">
                <p><span>${data.username}</span> posted on <time>${data.date}</time></p>
                <p class="post-content">${data.postText}</p>
            </div>
        </div>`;

    if (comments.length !== 0) {
        const post = container.querySelector('.comment');
        comments.forEach(com => {
            const userComment = document.createElement('div');
            userComment.setAttribute('id', 'user-comment');
            userComment.innerHTML =
                `<div class="topic-name-wrapper">
                        <div class="topic-name">
                            <p><strong>${com.username}</strong> commented on <time>${com.date}</time></p>
                            <div class="post-content">
                                <p>${com.postText}</p>
                            </div>
                        </div>
                    </div>`;
            post.appendChild(userComment);
        });
    }

    return container;
}

async function getRequest(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}