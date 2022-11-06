function attachEvents() {
    document.getElementById("btnLoadPosts").addEventListener("click", loadPosts);
    document.getElementById("btnViewPost").addEventListener("click", showComments);

    async function loadPosts() {
        const responsePosts = await fetch("http://localhost:3030/jsonstore/blog/posts");
        const dataPosts = await responsePosts.json();

        const postsSection = document.getElementById("posts");
        postsSection.innerHTML = "";
        for (let post of Object.values(dataPosts)) {
            let option = document.createElement("option");
            option.value = post.id;
            option.textContent = post.title;
            postsSection.appendChild(option);
        }

    }

    async function showComments() {
        const selectedOp = document.getElementById("posts").selectedOptions[0].value;
        const comments = document.getElementById("post-comments");
        comments.replaceChildren();

        const responsePosts = await fetch("http://localhost:3030/jsonstore/blog/posts");
        const dataPosts = await responsePosts.json();

        const responseComments = await fetch("http://localhost:3030/jsonstore/blog/comments");
        const dataComments = await responseComments.json();



        const selectedPost = Object.values(dataPosts).find(p => p.id == selectedOp);
        document.getElementById("post-title").textContent = selectedPost.title;
        document.getElementById("post-body").textContent = selectedPost.body;

        Object.values(dataComments)
            .filter(c => c.postId == selectedOp)
            .forEach(c => {
                const li = document.createElement("li");
                li.id = c.id;
                li.textContent = c.text;
                comments.appendChild(li);
            });
    }
}

attachEvents();