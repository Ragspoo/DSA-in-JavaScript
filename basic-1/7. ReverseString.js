//solution 1
function reverseString(str){
    return str.split('').reverse().join('')
}

const result = reverseString(`hello world`)
console.log(result)

// //solution 2
// function reverseString(str){
//     let reverse = '';

//     for (let i=str.length-1; i>=0; i--) {
//         reverse += str[i];
//     }

//     return reverse;
// }