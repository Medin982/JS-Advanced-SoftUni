function solve() {
    let form = document.querySelector('form');
    let addButtons = form.querySelector('button');
    addButtons.addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();
        let task = document.getElementById('task').value;
        let desctiption = document.getElementById('description').value;
        let date = document.getElementById('date').value;

        if (!task.length || !desctiption.length || !date.length) {
            return;
        }

        let article = document.createElement('article');
        article.appendChild(createElement('h3', task));
        article.appendChild(createElement('p', `Description: ${desctiption}`));
        article.appendChild(createElement('p', `Due Date: ${date}`));
        let div = document.createElement('div');
        div.classList.add('flex');

        const startButton = createElement('button', 'Start', 'green');
        const deleteButton = createElement('button', 'Delete', 'red');
        const finishButton = createElement('button', 'Finish', 'orange');
        div.appendChild(startButton);
        div.appendChild(deleteButton);
        article.appendChild(div);
        document.querySelectorAll('section')[1]
            .children[1]
            .appendChild(article);

        startButton.addEventListener('click', moveTask);
        deleteButton.addEventListener('click', () => { article.remove() });
        finishButton.addEventListener('click', completeTask);

        function completeTask() {
            finishButton.remove();
            deleteButton.remove();
            document.querySelector('h1.green')
                .parentElement.parentElement
                .appendChild(article);
        }

        function moveTask() {
            startButton.remove();
            div.appendChild(finishButton);
            document.getElementById('in-progress').appendChild(article);
        }
    }

    function createElement(type, value, className) {
        let element = document.createElement(type);
        element.textContent = value;
        if (className) {
            element.classList.add(className);
        }
        return element;
    }
}