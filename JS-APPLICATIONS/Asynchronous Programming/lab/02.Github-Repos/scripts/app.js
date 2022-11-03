function loadRepos() {
	let username = document.getElementById("username").value;
	fetch(`https://api.github.com/users/${username}/repos`)
	//HadleResponse
		.then((respone) => {
			if (respone.ok == false) {
				throw new Error(`Error: ${respone.status} ${respone.statusText}`);
			}
			return respone.json();
		})
		//HandleData
		.then((data) => {
			let list = document.getElementById("repos");
			let items = data.map(input =>{
				let li = document.createElement('li');
				let a = document.createElement('a');
				a.href = input.html_url;
				a.textContent = input.full_name;
				li.appendChild(a);
				return li;
			});

			list.replaceChildren(...items);
		})
		//HandleError
		.catch((err) => {
			let list = document.getElementById("repos");
			list.textContent  = err.message;
		});
}