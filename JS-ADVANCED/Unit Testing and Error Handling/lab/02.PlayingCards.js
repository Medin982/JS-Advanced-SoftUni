function solve(cardFace, cardSuit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    if (validFaces.indexOf(cardFace) === -1 ||
        validSuits.indexOf(cardSuit) === -1) {
        throw new Error('Error');
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

    return {
        cardFace,
        cardSuit,
        toString() {
            return cardFace + cardSuit;
        }
    }
}

console.log(solve('2', 'H').toString());