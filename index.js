const cipherMethodInput = document.getElementById('cipher-method-input');
const cipherKeyInput = document.getElementById('cipher-key-input');
const alphabetInput = document.getElementById('alphabet-input');

const cipherTextInput = document.getElementById('cipher-text');
const decipherTextInput = document.getElementById('decipher-text');

const handleCipher = (e) => {
    e.preventDefault();
    console.log('ciphering');

    try {
        const method = cipherMethodInput.value;
        const cipherKey = cipherKeyInput.value;
        const alphabet = alphabetInput.value;
        const text = cipherTextInput.value;

        decipherTextInput.value = cipher(method, alphabet, cipherKey, text);
    } catch (e) {
        console.log('Something went very wrong when trying to cipher the text')
        console.error(e);
    }
};

const handleDecipher = (e) => {
    e.preventDefault();
    console.log('deciphering');
    try {
        const method = cipherMethodInput.value;
        const cipherKey = cipherKeyInput.value;
        const alphabet = alphabetInput.value;
        const text = cipherTextInput.value;

        cipherTextInput.value = decipher(method, alphabet, cipherKey, text);
    } catch (e) {
        console.log('Something went very wrong when trying to decipher the text')
        console.error(e);
    }
};
