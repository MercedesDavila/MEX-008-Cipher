window.cipher = {

    encode: (offset, string) => {
        let textCoded = "";
        for (let i = 0; i < string.length; i++) {
            let character = string[i];
            if (character.match(/[a-z]/i)) {
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                    textCoded += String.fromCharCode(textChar);
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    let textChar = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                    textCoded += String.fromCharCode(textChar);
                }
            } else {
                textCoded += character;
            }
        }

        return textCoded;
    },


    decode: (offset, string) => {
        let textDecoded = "";

        for (let i = 0; i < string.length; i++) {
            let characterD = string[i];
            if (characterD.match(/[a-z]/i)) {

                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let textChar = (string.charCodeAt(i) - 90 - parseInt(offset)) % 26 + 90;
                    textDecoded += String.fromCharCode(textChar);
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    let textChar = (string.charCodeAt(i) - 122 - parseInt(offset)) % 26 + 122;
                    textDecoded += String.fromCharCode(textChar);
                }

            } else {
                textDecoded += characterD;
            }
        }
        return textDecoded;
    }
};