window.addEventListener("load", solve);

function solve() {
  let form = document.querySelector("form");
  let publishBtn = form.querySelector("button");
  let clearBtn = document.getElementById("clear-btn");
  publishBtn.addEventListener("click", publishPost);
  clearBtn.addEventListener("click", clear);
  

  function publishPost(e) {
    e.preventDefault();
    if (!form[0].value || !form[1].value || !form[2].value) {
      return;
    }
    let li = document.createElement("li");
    li.setAttribute("class", "rpost");
    let article = document.createElement("article");
    article.appendChild(createElement("h4", form[0].value));
    article.appendChild(createElement("p", `Category: ${form[1].value}`));
    article.appendChild(createElement("p", `Content: ${form[2].value}`));

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
    form[0].value = "";
    form[1].value = "";
    form[2].value = "";

  }

  function clear() {
    let ul = document.getElementById("published-list");
    for (let li of ul.children) {
      li.remove();
    }
  }

  function editPost(e) {
    let post = e.target.parentElement;
    let postArticle = post.children[0].children;
    form[0].value = postArticle[0].textContent;
    form[1].value = postArticle[1].textContent.split(": ")[1];
    form[2].value = postArticle[2].textContent;
    post.remove();

  }

  function approvePost(e) {
    let post = e.target.parentElement;
    document.getElementById("published-list").appendChild(post.children[0]);
    post.remove();
  }

  function createElement(tag, value) {
    let ele = document.createElement(tag);
    ele.textContent = value;
    return ele;
  }
}
