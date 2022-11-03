function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);
}

function handleResponse(response) {
    if (response.ok == false) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

function handleData(data) {
    let list = document.getElementById('commits');
    let items = data.map(input => {
        let li = document.createElement('li');
        li.textContent = `${input.commit.author.name}: ${input.commit.message}`;
        return li;
    });

    list.replaceChildren(...items);
}

function handleError(err) {
    let list = document.getElementById("commits");
    list.textContent = err.message;
}