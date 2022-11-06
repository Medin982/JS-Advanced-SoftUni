async function solution() {
    try {
        const response = await fetch("http://localhost:3030/jsonstore/advanced/articles/list");
        const data = await response.json();
        const section = document.getElementById("main");
        for (let ele of Object.values(data)) {
            const responseCurrent = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${ele._id}`);
            const dataCurrent = await responseCurrent.json();
            section.innerHTML +=
                `<div class="accordion">
               <div class="head">
                   <span>${ele.title}</span>
                   <button class="button" id="${ele._id}">More</button>
               </div>
               <div class="extra">
                   <p>${dataCurrent.content}</p>
               </div>
           </div>`;
        }
    } catch (error) {
        return;
    }

    Array.from(document.getElementsByClassName("button"))
        .forEach(b => b.addEventListener("click", showOrHideInfo));

    function showOrHideInfo(event) {
        const btn = event.target;
        const hiddenInfo = event.target.parentElement.parentElement.getElementsByTagName('div')[1];
        if (btn.textContent !== "MORE") {
            hiddenInfo.setAttribute("class", "extra");
            btn.textContent = "MORE";
            return;
        }

        hiddenInfo.removeAttribute("class");
        btn.textContent = "LESS";
    }
}

solution();