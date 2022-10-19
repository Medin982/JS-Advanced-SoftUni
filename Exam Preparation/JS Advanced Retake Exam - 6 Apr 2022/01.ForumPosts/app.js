window.addEventListener("load", solve);

function solve() {
  let form = document.querySelector("form").children;
  let publishBtn = document.getElementById("publish-btn");
  let clearBtn = document.getElementById("clear-btn");
  publishBtn.addEventListener("click", publishPost);
  clearBtn.addEventListener("click", clear);
  

  function publishPost(e) {
    e.preventDefault();
    if (!form[1].value || !form[2].value || !form[3].value) {
      return;
    }
    let li = document.createElement("li");
    li.setAttribute("class", "rpost");
    let article = document.createElement("article");
    article.appendChild(createElement("h4", form[1].value));
    article.appendChild(createElement("p", `Category: ${form[2].value}`));
    article.appendChild(createElement("p", `Content: ${form[3].value}`));

    let editBtn = createElement("button", "Edit");
    editBtn.setAttribute("class", "action-btn edit");
    let approveBtn = createElement("button", "Approve");
    approveBtn.setAttribute("class", "action-btn approve");

    editBtn.addEventListener("click", editPost);
    approveBtn.addEventListener("click", approvePost);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(approveBtn);

    document.getElementById("review-list").appendChild(li);
    form[1].value = "";
    form[2].value = "";
    form[3].value = "";

  }

  function clear() {
    Array.from(document.getElementById("published-list").children)
    .forEach(li => li.remove());
    
  }

  function editPost(e) {
    let post = e.target.parentElement;
    let postArticle = post.children[0].children;
    form[1].value = postArticle[0].textContent;
    form[2].value = postArticle[1].textContent.split(": ")[1];
    form[3].value = postArticle[2].textContent.split(": ")[1];
    post.remove();

  }

  function approvePost(e) {
    let post = e.target.parentElement;
    let li = document.createElement("li");
    li.setAttribute("class", "rpost");
    li.appendChild(post.children[0]);
    document.getElementById("published-list").appendChild(li);
    post.remove();
  }

  function createElement(tag, value) {
    let ele = document.createElement(tag);
    ele.textContent = value;
    return ele;
  }
}
