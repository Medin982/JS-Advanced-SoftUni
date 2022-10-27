function attachGradientEvents() {
    let ele = document.getElementById('gradient');
    ele.addEventListener("mousemove", move);
    ele.addEventListener("mouseout",  () => {
        document.getElementById('result').textContent = "";
    });

    function move(event) {
        let position = event.offsetX;
        let width = event.target.clientWidth - 1;
        let result = Math.trunc(position / width * 100);
        document.getElementById('result').textContent = `${result}%`;
    }
}