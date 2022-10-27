function attachEventsListeners() {
    let buttons = document.querySelectorAll("input[type=button]");

    for (let button of buttons) {
        button.addEventListener("click", convert);
    }

    function convert(e) {
        let div = e.target.parentElement;
        let value = Number(div.querySelector("input[type=text]").value);
        let unit = e.target.id;

        switch (unit) {
            case "daysBtn":
                calculate(value);
                break;
            case "hoursBtn":
                calculate(value / 24);
                break;
            case "minutesBtn":
                calculate(value / 24 / 60);
                break;
            case "secondsBtn":
                calculate(value / 24 / 60 / 60);
                break;
        }
    }

    function calculate(value) {
        let inputs = Array.from(document.querySelectorAll("input[type=text]"));
        inputs.forEach((ele, i) => {
            if (i === 0) {
                ele.value = value;
            } else if (i === 1) {
                ele.value = value * 24;
            } else if (i === 2) {
                ele.value = value * 24 * 60;
            } else {
                ele.value = value * 24 * 60 * 60;
            }
        });
    }
}