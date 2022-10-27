function validate() {
    let email = document.getElementById('email');
    let pattern = /\S+@\S+\.\S+/;
    email.addEventListener('change', checkEmail);

    function checkEmail(event) {
        if (!pattern.test(event.target.value)) {
            event.target.className = 'error';
            return;
        } 
        event.target.classList.remove('error');
    }
}