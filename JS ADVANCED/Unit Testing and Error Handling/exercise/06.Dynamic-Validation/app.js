function validate() {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let email = document.getElementById('email');
    email.addEventListener('change', (e) => {
        let emailValue = e.target.value;
        if (!emailValue.match(re)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    });
}