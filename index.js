const cipherKeyInput = document.getElementById('cipher-key-input');
const alphabetInput = document.getElementById('alphabet-input');

const cipherTextInput = document.getElementById('cipher-text');
const decipherTextInput = document.getElementById('decipher-text');

const resetInputs = () => {
    const inputs = [cipherKeyInput, alphabetInput, cipherTextInput, decipherTextInput];
    const ariaValid = input => input.ariaInvalid = "";
    const helperEmpty = input => {
        const helper = document.getElementById(input.id + "-helper");
        if (!helper) {
            return;
        }
        helper.innerText = "";
    };

    inputs.forEach(input => {
        ariaValid(input);
        helperEmpty(input);
    })
};

function isValidPositiveInteger(str) {
    if (typeof str !== 'string' || str.trim() === '') {
        return false;
    }
    return /^[1-9]\d*$/.test(str);
}


const validateInputs = (method, alphabet, cipherKey, text) => {
    if (!isValidPositiveInteger(cipherKey)) {
        cipherKeyInput.ariaInvalid = 'true';
        document.getElementById(cipherKeyInput.id + "-helper").innerText = 'Cipher key is not a positive integer';
        throw new Error('validation failed')
    }
}

const handleCipher = (e) => {
    e.preventDefault();
    resetInputs();
    console.log('ciphering');

    try {
        const cipherKey = cipherKeyInput.value;
        const alphabet = alphabetInput.value.toLowerCase();
        const text = cipherTextInput.value.toLowerCase();
        validateInputs('method_placeholder', alphabet, cipherKey, text);

        decipherTextInput.value = cipher('method_placeholder', alphabet, cipherKey, text);
        document.getElementById(decipherTextInput.id + '-helper').innerText = 'Ciphered successfully';
    } catch (e) {
        console.log('Something went very wrong when trying to cipher the text')
        console.error(e);
    }
};

const handleDecipher = (e) => {
    e.preventDefault();
    resetInputs();
    console.log('deciphering');
    try {
        const cipherKey = cipherKeyInput.value;
        const alphabet = alphabetInput.value.toLowerCase();
        const text = decipherTextInput.value.toLowerCase();
        validateInputs('method_placeholder', alphabet, cipherKey, text);

        cipherTextInput.value = decipher('method_placeholder', alphabet, cipherKey, text);
        document.getElementById(cipherTextInput.id + '-helper').innerText = 'Deciphered successfully';
    } catch (e) {
        console.log('Something went very wrong when trying to decipher the text')
        console.error(e);
    }
};
