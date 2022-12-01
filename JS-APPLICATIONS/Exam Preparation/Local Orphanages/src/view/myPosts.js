import { getUserPosts } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html } from "../lib.js";

const myPostsTemp = (items) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    ${items 
    ? html`
    <div class="my-posts">
        ${items.map(item => html`
        <div class="post">
            <h2 class="post-title">${item.title}</h2>
            <img class="post-image" src=${item.imageUrl} alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${item._id}" class="details-btn btn">Details</a>
            </div>
        </div>`)}
    </div>`
    : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section>`;

export async function showMyPosts(ctx) {
    ctx.updateNav();
    const userId = getUserData()?.id;
    let posts = await getUserPosts(userId);
    if (posts <= 0) {
        posts = undefined;
    }
    ctx.render(myPostsTemp(posts));
}