class Contact {
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.online = false;
    }

    render(idElement) {
        let article = this._createElement("article");
        let div = this._createElement("div", `${this.firstName} ${this.lastName}`);
        let btn = this._createElement("button", "&#8505;");
        let info = this._createElement("div",
            `<span>&phone; ${this.phoneNumber}</span><span>&#9993; ${this.email}</span>`);
        div.className = this.online ? "title online" : "title";
        info.className = "info";
        info.style.display = "none";
        div.appendChild(btn);
        article.appendChild(div);
        article.appendChild(info);

        document.getElementById(idElement).appendChild(article);
        btn.addEventListener("click", () => {
            info.style.display = info.style.display === "none" ? "block" : "none";
        })
    }

    _createElement(tag, content = "") {
        const element = document.createElement(tag);
        element.innerHTML = content;
        return element;
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));
setTimeout(() => contacts[1].online = true, 1000);