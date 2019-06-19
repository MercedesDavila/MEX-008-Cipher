const encodebtn = document.getElementById('btn_encode');
let codeOffSet = document.getElementById('n_offset_e');
let textToCode = document.getElementById('box-msg-encode');


const decodebtn = document.getElementById('btn_decode');
let decodeOffSet = document.getElementById('n_offset_d');
let textToDecode = document.getElementById('box-msg-decode');

const printEncodeMessage = () => {
    const blankMsg = document.getElementById('msg-encode-check');
    let codeOffSetNumber = parseInt(codeOffSet.value);
    let textCoded = cipher.encode(codeOffSetNumber, textToCode.value);
    blankMsg.innerHTML = textCoded;
}

encodebtn.addEventListener("click", printEncodeMessage);



const printDecodeMessage = () => {
    const blankMsg = document.getElementById('msg-decode-check');
    let decodeOffSetNumber = parseInt(decodeOffSet.value);
    let textDecoded = cipher.decode(decodeOffSetNumber, textToDecode.value);
    blankMsg.innerHTML = textDecoded;
}

decodebtn.addEventListener("click", printDecodeMessage);