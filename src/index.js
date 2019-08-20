const encodebtn = document.getElementById('btn_encode');
let codeOffSet = document.getElementById('n_offset_e');
let textToCode = document.getElementById('box-msg-encode');


const decodebtn = document.getElementById('btn_decode');
let decodeOffSet = document.getElementById('n_offset_d');
let textToDecode = document.getElementById('box-msg-decode');


//Function that hide section with id
// const hideSection = (id) => {
//     document.getElementById(id).classList.add('hide');
// };
//Function that show section with id
const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
};


const CodeMsg = document.getElementById('CodeMsg');
const DecodeMsg = document.getElementById('DecodeMsg');

const codemsg = () => {

    showSection("content-msg-encode");
}


CodeMsg.addEventListener("click", codemsg);
// DecodeMsg.addEventListener("click", showmsgdecode);
const decodemsg = () => {

    showSection("content-msg-decode");
}

DecodeMsg.addEventListener("click", decodemsg);





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