console.time('process')


const input = '2[3[a]2[c]]';

let s = input;
let level = 0

function escapeInnestNumber(str: string) {
    const pos1 = str.lastIndexOf('[')
    const pos2 = str.indexOf(']', pos1)
    const searchValue = str[pos1 - 1]+str.substring(pos1, pos2 + 1)
    let replacedValue = '';
    for (let index = 1; index <= parseInt(str[pos1 - 1]); index++) {
        replacedValue += str.substring(pos1+1, pos2)
    }
    
    str = str.replace(searchValue, replacedValue) // potential risk
    console.log(str);
    return str;
}

for (const char of s) {
    if (char === '[') {
        level ++
    }
}

for (let index = 1; index <= level; index++) {
    s = escapeInnestNumber(s);
}




console.timeEnd('process')