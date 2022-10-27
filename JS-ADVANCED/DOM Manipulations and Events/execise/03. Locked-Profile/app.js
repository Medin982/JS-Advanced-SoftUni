function lockedProfile() {
    let buttons = document.getElementsByTagName("button");
    for (let btn of buttons) {
        btn.addEventListener("click", showOrHideInfo);
    }


    function showOrHideInfo(e) {
        let isLock = false;
        let isHidden = false;
        let locked = e.target.parentElement.querySelectorAll("input[type=radio]")[0];
        if (locked.checked) {
            return;
        }

        if (isLock || isHidden) {
            return;
        }

        if (e.target.textContent == "Show more") {
            e.target.parentElement.querySelector("div").style.display = 'block';
            isLock = true;
            e.target.textContent = "Hide it";
        } else {
            e.target.parentElement.querySelector("div").style.display = 'none';
            e.target.textContent = "Show more";
            isHidden = true;
        }
    }
}