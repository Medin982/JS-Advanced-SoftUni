window.addEventListener("load", solve);

function solve() {
  let inputs = document.querySelectorAll(".form-wrapper input");
  let genre = document.getElementById("genre");
  let story = document.getElementById("story");
  document.getElementById("form-btn").addEventListener("click", publish);

  function publish(e) {
    e.preventDefault();
    for (let input of inputs) {
      if (!input.value) {
        return;
      }
    }

    if (!story.value) {
      return;
    }

    let li = document.createElement("li");
    li.setAttribute("class", "story-info");
    let article = document.createElement("article");
    article.appendChild(createElement("h4", `Name: ${inputs[0].value} ${inputs[1].value}`));
    article.appendChild(createElement("p", `Age: ${inputs[2].value}`));
    article.appendChild(createElement("p", `Title: ${inputs[3].value}`));
    article.appendChild(createElement("p", `Genre: ${genre.value}`));
    article.appendChild(createElement("p", story.value));
    li.appendChild(article);
    let saveBtn = createElement("button", "Save Story");
    saveBtn.setAttribute("class", "save-btn");
    saveBtn.addEventListener("click", save);
    let editBtn = createElement("button", "Edit Story");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.addEventListener("click", edit);
    let deleteBtn = createElement("button", "Delete Story");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.addEventListener("click", deleteInfo);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    e.target.setAttribute("disabled", "");
    document.getElementById("preview-list").appendChild(li);

    clearInputs();
  }

  function deleteInfo(e) {
    let li = e.target.parentElement;
    document.getElementById("form-btn").removeAttribute("disabled");
    document.getElementById("form-btn").value = "Publish";
    li.remove();
  }

  function save() {
    document.getElementById("main").remove();
    let div = document.createElement("div");
    div.setAttribute("id", "main");
    div.appendChild(createElement("h1", "Your scary story is saved!"));
    document.getElementsByClassName("body")[0].appendChild(div);
  }

  function edit(e) {
    let li = e.target.parentElement;
    let arrInfo = li.children;
    let articleArray = arrInfo[0].children;
    let name = articleArray[0].textContent.split(": ")[1];
    let [firstName, lastName] = name.split(" "); 
    inputs[0].value = firstName;
    inputs[1].value = lastName;
    inputs[2].value = articleArray[1].textContent.split(": ")[1];
    inputs[3].value = articleArray[2].textContent.split(": ")[1];
    genre.value = articleArray[3].textContent.split(": ")[1];
    story.value = articleArray[4].textContent;
    document.getElementById("form-btn").removeAttribute("disabled");
    document.getElementById("form-btn").value = "Publish";
    li.remove();
  }

  function clearInputs() {
    for (let input of inputs) {
      input.value = "";
    }

    genre.value = "";
    story.value = "";
  }

  function createElement(tag, value) {
    let ele = document.createElement(tag);
    ele.textContent = value;
    return ele;
  }
}
