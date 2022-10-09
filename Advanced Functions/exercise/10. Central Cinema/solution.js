function solve() {
    let parentDiv = document.getElementById('container');
    const btn = parentDiv.querySelector('button');
    btn.addEventListener('click', moveOnScreen);
    const clearBtn = document.getElementById('archive')
        .querySelector('button');
        clearBtn.addEventListener('click', function(e) {
            let sec = e.target.parentElement;
            let li = sec.querySelectorAll('ul li');
            for (let ele of li) {
                ele.remove();
            }
        })

    function moveOnScreen(e) {
        e.preventDefault();
        let inputs = parentDiv.querySelectorAll('input');
        for (let ele of inputs) {
            if (!ele.value.length) {
                return;
            }
        }

        if (isNaN(inputs[inputs.length -1].value)) {
            return;
        }

        let li = document.createElement('li');
        li.appendChild(createElement('span', inputs[0].value));
        let strong = createElement('strong', `Hall: ${inputs[1].value}`);
        li.appendChild(strong);
        let div = document.createElement('div');
        let price = createElement('strong', Number(inputs[2].value).toFixed(2));
        div.appendChild(price);
        let countTicket = createElement('input', 'Tickets Sold', 'placeholder');
        div.appendChild(countTicket);
        const archBtn = createElement('button', 'Archive');
        const deletBtn = createElement('button', 'Delete');
        div.appendChild(archBtn);
        li.appendChild(div);
        document.getElementById('movies')
            .querySelector('ul')
            .appendChild(li);

        for(let input of inputs){
            input.value = "";
        }


        archBtn.addEventListener('click', moveToArchive);
        deletBtn.addEventListener('click', () => li.remove());

        function moveToArchive() {
            if (isNaN(countTicket.value)) {
                return;
            }

            let sum = countTicket.value * Number(price.textContent);
            div.remove();
            strong.remove();
            li.appendChild(createElement('strong', `Total amount: ${sum.toFixed(2)}`));
            li.appendChild(deletBtn);
            document.getElementById('archive')
                .querySelector('ul')
                .appendChild(li);
        }
    }

    function createElement(type, value, className) {
        let element = document.createElement(type);
        element.textContent = value;
        if (className) {
            element.setAttribute(className, value);
        }
        return element;
    }
}   