function solve(cardArray) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];
    let res = [];
    for (let card of cardArray) {
        let cardSuit = card.substr(card.length - 1)
        card = card.replace(cardSuit, "");
        let cardFace = card;
    

    if (validFaces.indexOf(cardFace) === -1 ||
        validSuits.indexOf(cardSuit) === -1) {
        return console.log(`Invalid card: ${card  + cardSuit}`);
        
    }

    switch (cardSuit) {
        case 'S': cardSuit = '\u2660';
            break;
        case 'H': cardSuit = '\u2665';
            break;
        case 'D': cardSuit = '\u2666';
            break;
        case 'C': cardSuit = '\u2663';
            break;
    }

    res.push(cardFace + cardSuit);
}

    return console.log(res.join(" "));
}

solve(['AS', '1D', 'KH', '2C']);