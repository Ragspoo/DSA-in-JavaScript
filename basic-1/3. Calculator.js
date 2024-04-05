function calculator(a,b,operator){
    let result;

    switch(operator){
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default :
            throw new Error("Not a valid operator");
    }
    return result;
}

const calculation = calculator(1,2,`/`)

console.log(calculation)

// other method
// function calc(num1,num2,operator){
//     let result;

//     if(operator === "+"){
//         result = num1 + num2;
//     }else if(operator === "-"){
//         result = num1 - num2;
//     }else if(operator === "*"){
//         result = num1 * num2;
//     }else if(operator === "/"){
//         result = num1 / num2;
//     }else{
//         return "Error"
//     }
//     return result;
// }