let str = 'Iam a man with active soul';

let position = str.indexOf('with')

console.log(position);

//slicing

let subString  = str.slice(3,10)
console.log(subString);

//charAtIndex
let b = str.charAt(1)
console.log(b);

//
let c  = str.substr(1,3)
console.log(c);

//String replace

let replaced = str.replace('with', 'having')
.toLocaleUpperCase()

console.log(replaced);

let concat = str.concat('wastefull energy is saved')

console.log(concat);

let str1 = '  iam    local man  ';
console.log(str1.trim())