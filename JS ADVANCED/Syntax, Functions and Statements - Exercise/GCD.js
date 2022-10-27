function divisior(num1, num2) {
    let greatestDivisor = 1;
    while(true) {
        if (num1 % greatestDivisor != 0 && num2 % greatestDivisor != 0) {
            break
        }
        greatestDivisor++;
    }
     console.log(greatestDivisor);
}

divisior(15, 5);

divisior(2154, 458);