//solution 1
function findMaxNum(arr){
    return Math.max(...arr)
}

const result = findMaxNum([2,9,6,4,3]);
console.log(result);

// solution 2
// function findMaxNum(arr){
//     let max= arr[0];
//     for( let i=0; i<arr.length; i++){
//         if(arr[i] > max){
//             max= arr[i];
//         }
//     }
//     return max;
// }
