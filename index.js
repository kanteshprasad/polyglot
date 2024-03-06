const stringinp = 'ಆಗಿಸು ಎ = 3;ಆಗಿಸು ಬಿ = 4;ಬರೆಯಿರಿ(ಎ - ಬಿ)';
const inparr = stringinp.split(/([[\]{}(),;\s+=\-*])/);
let translatedcode;
const obj = {
    ಆಗಿಸು: "let",
    ಇವಾಗ: "if",
    ಆದರೂ: "else if",
    ಅಥವ: "else",
    ಬರೆಯಿರಿ: "console.log"
};



function translate(inparr) {
    return inparr.map(elem => obj[elem] || elem).join('');
}

translatedcode = translate(inparr);

console.log(translatedcode);

eval(translatedcode);
