window.cipher = {


    encode: (offset, string) => {
        let textCoded = '';
        let newString = string.toUpperCase();

        for (let i = 0; i < string.length; i++) {

            let alphabetIndex = newString.charCodeAt(i);
            let cipherFormula = (alphabetIndex - 65 + offset) % 26 + 65;
            let OffsetToText = String.fromCharCode(cipherFormula);

            if (newString === ' ') {
                textCoded += ' ';
            } else {
                textCoded += OffsetToText;
            }
        }

        return textCoded;
    },

    decode: (offset, string) => {
        let textDecoded = '';
        let newString = string.toUpperCase();

        for (let i = 0; i < string.length; i++) {

            let alphabetIndex = newString.charCodeAt(i);
            let decipherFormula = (alphabetIndex - 65 - offset + 52) % 26 + 65;
            let decodedtoText = String.fromCharCode(decipherFormula);

            if (newString === ' ') {
                textDecoded += ' ';
            } else {
                textDecoded += decodedtoText;
            }
        }

        return textDecoded;
    },
};