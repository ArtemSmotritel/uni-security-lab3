const cipher = (cipherMethod, alphabet, cipherKey, text) => {
    const getCodedSymbol = (symbol, symbolPositionInText) => {
        const alphabetSymbolPosition = alphabet.indexOf(symbol);
        const cipherKeyIndex = symbolPositionInText % cipherKey.length;
        const cipherNumber = +cipherKey[cipherKeyIndex];

        const codedLetterIndex = (cipherNumber + alphabetSymbolPosition) % alphabet.length;
        return alphabet[codedLetterIndex];
    };

    let codedText = '';
    for (let i = 0; i < text.length; i++) {
        codedText += getCodedSymbol(text[i], i);
    }

    return codedText;
};

const decipher = (cipherMethod, alphabet, cipherKey, text) => {
    const getDecodedSymbol = (symbol, symbolPositionInText) => {
        const alphabetSymbolPosition = alphabet.indexOf(symbol);
        const cipherKeyIndex = symbolPositionInText % cipherKey.length;
        const cipherNumber = +cipherKey[cipherKeyIndex];

        let decodedLetterIndex = alphabetSymbolPosition - cipherNumber;
        if (decodedLetterIndex < 0) {
            decodedLetterIndex += alphabet.length;
        }

        return alphabet[decodedLetterIndex];
    };

    let decodedText = '';
    for (let i = 0; i < text.length; i++) {
        decodedText += getDecodedSymbol(text[i], i);
    }

    return decodedText;
};
