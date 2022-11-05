function lockedProfile() {

    fetch("http://localhost:3030/jsonstore/advanced/profiles")
        .then((response) => response.json())
        .then((data) => {
            let profile = document.getElementById("main");
            profile.innerHTML = "";
            const arrData = Object.values(data);
            let count = 0;
            for (let dataPerson of arrData) {
                count++;
                profile.innerHTML +=
                    `<div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${count}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${count}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${count}Username" value="${dataPerson.username}" disabled readonly />
				<div id="user${count}HiddenFields" class="hiddenInfo">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${count}Email" value="${dataPerson.email}" disabled readonly />
					<label>Age:</label>
					<input type="text" name="user${count}Age" value="${dataPerson.age}" disabled readonly />
				</div>
				
				<button>Show more</button>
			</div>`;
            }
            Array.from(document.querySelectorAll("button"))
                .forEach(b => b.addEventListener("click", showOrHideInfo));

        })
        .catch((e) => {
            return;
        })

    function showOrHideInfo(event) {
        const div = event.target.parentElement;
        const lock = div.querySelector("input[value='lock']");
        if (lock.checked) {
            return;
        }
        const hiddeInfo = div.getElementsByClassName("hiddenInfo");
        hiddeInfo.classList["display"] = "block";
    }
}