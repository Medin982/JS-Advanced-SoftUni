function validate() {
    let btn = document.getElementById('submit');
    let checkedCompany = document.getElementById("company");
    checkedCompany.addEventListener('change', () => {
        let tag = document.getElementById('companyInfo');
            tag.style.display === "none" ?
            tag.style.display = "block" :
            tag.style.display = "none";
    });
    btn.addEventListener('click', checkData);

    function checkData(event) {
        event.preventDefault();
        let inputs = document.querySelectorAll("form input");
        const usernamePattern = /[a-{zA-Z0-9]{3,20}/g;
        const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const passwordPattern = /[\w0-9_]{5,15}/g;
        let allDataIsValid = true;

        if (!validateData(inputs[0], usernamePattern)) {
            allDataIsValid = false;
        }

        if (!validateData(inputs[1], emailPattern)) {
            allDataIsValid = false;
        }

        if (inputs[2].value !== inputs[3].value) {
            allDataIsValid = false;
            inputs[2].style.borderColor = "red";
            inputs[3].style.borderColor = "red";
        } else {
            if (!validateData(inputs[2], passwordPattern)) {
                allDataIsValid = false;
            }
    
            if (!validateData(inputs[3], passwordPattern)) {
                allDataIsValid = false;
            }
        }  

        if (inputs[4].checked) {
            if (inputs[5].value < 1000 || inputs[5].value > 9999) {
                inputs[5].style.border = "";
                inputs[5].style.borderColor = "red";
                allDataIsValid = false;
            } else {
                inputs[5].style.border = "none";
            }
        }

        if (allDataIsValid) {
            document.getElementById("valid")
                .style.display = "block";
        } else {
            document.getElementById("valid")
                .style.display = "none";
        }

    }

    function validateData(data, pattern) {
        if (!data.value.match(pattern)) {
            data.style.borderColor = "red";
            return false;
        } else {
            data.style.border = "none";
            return true;
        }
    }
}
