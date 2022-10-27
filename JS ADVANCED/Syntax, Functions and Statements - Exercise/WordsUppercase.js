function extracts (input) {
    let text = input.match(/\w+/g).join(", ");
    console.log(text.toUpperCase()); 
}

extracts('Hi, how are you?');
