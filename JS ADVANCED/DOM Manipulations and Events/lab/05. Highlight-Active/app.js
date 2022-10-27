function focused() {
    let ele = document.getElementsByTagName("input");
    for (let sec of ele) {
       sec.addEventListener('focus', focusSec);
       sec.addEventListener('blur', blurSec);
    }
    
    function focusSec(event) {
        event.target.parentElement.classList.add('focused');
    }

    function blurSec(event) {
        event.target.parentElement.classList.remove('focused');
    }
}