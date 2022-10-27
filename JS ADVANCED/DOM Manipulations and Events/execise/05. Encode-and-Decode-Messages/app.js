function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener("click", encode);
    buttons[1].addEventListener("click", decode);

    function encode(e) {
        let someText = e.target.parentElement.querySelector("textarea").value;
        let encodeText = "";
        for (let i = 0; i < someText.length; i++) {
           let ascii = someText[i].charCodeAt();
           encodeText += String.fromCharCode(ascii + 1);
        }
        let decodeTextArea = document.querySelectorAll('textarea')[1];
        decodeTextArea.value = encodeText;
        e.target.parentElement.querySelector("textarea").value = "";
    }

    function decode() {
        let decodeTextArea = document.querySelectorAll('textarea')[1].value;
        let encodeText = "";
        for (let i = 0; i < decodeTextArea.length; i++) {
            let ascii = decodeTextArea[i].charCodeAt();
            encodeText += String.fromCharCode(ascii - 1);
        }
        document.querySelectorAll('textarea')[1].value = encodeText;
    }
}