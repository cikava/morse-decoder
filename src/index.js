const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '', str1 = '', res = '', n = 0;
    for (let i = 0; i < (expr.length/10); i++){
        str = expr.substr(i*10, 10);
        if (str == '**********'){ res  = res + ' ';}
        else {str = '' + +str; str1 = '';
               for (let i = 0; i < (str.length/2); i++){
                   n = +str.substr(i*2, 2);
               if (n == 10) {str1 = str1 + '.'}
               if (n == 11) {str1 = str1 + '-'}
               }
               res = res + MORSE_TABLE[str1];
           }
        }
        return(res);
}

module.exports = {
    decode
}