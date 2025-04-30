// function addition(n1,n2){
//     let sum = n1+n2;
//     return sum;
// }

// function subtraction(n1,n2){
//     let result = n1 - n2;
//     return result;
// }


// function division(n1,n2){
//     let result = n1 / n2;
//     result = Math.round(result*100)/100;
//     return result;
// }

// function multiplication(n1,n2){
//     let result = n1 * n2;
//     result = Math.round(result*100)/100;
//     return result;
// }

// function operate(op,n1,n2){
//     switch (op) {
//         case '+':
//             return addition(n1,n2);
//             break;
        
//         case '-':
//             return subtraction(n1,n2);
//             break;
        
//         case '/':
//             return division(n1,n2);
//             break;
        
//         case '*':
//             return multiplication(n1,n2);
//             break;
        
//         default:
//             break;
//     }
// }

// let oper = ['+','-','*','/'];
// let num = [1,2,3,4,5,6,7,8,9,0];
// let userValue = [];

// const buttons = document.querySelectorAll('button');
// const display = document.querySelector('#display');

// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         // const userValue = e.target.textContent; // Get the text of the clicked button

//         userValue.push(e.target.textContent);
//         console.log(userValue);
//         console.log(`Operator clicked: ${userValue}`);

//         // if(num.includes(userValue)){

//         // }

//         // if(userValue.includes('AC')) display.textContent = '';
//         // else if(oper.includes(userValue)){
//         //     operate()
//         // }
//         // else{

//         //     display.textContent= userValue.join('');
//         // }
//         if(userValue === '='){
//             userValue.forEach(i => {
//                 if (oper.includes(i)) {
//                     let index = userValue.indexOf(i);
//                     let n1 = parseFloat(userValue[index - 1]); // Get the left operand
//                     let n2 = parseFloat(userValue[index + 1]); // Get the right operand
//                     let ans = operate(i, n1, n2); // Perform the operation
            
//                     // Replace the operator and operands with the result
//                     userValue.splice(index - 1, 3, ans);
            
//                     console.log(`Updated userValue: ${userValue}`);
//                 }
//             });
            
//             // Display the final result
//             if (userValue.length === 1) {
//                 display.textContent = userValue[0];
//             }
//         }
//     });
// });



// function equalto(){
    
// }

function addition(n1, n2) {
    let sum = n1 + n2;
    return sum;
}

function subtraction(n1, n2) {
    let result = n1 - n2;
    return result;
}

function division(n1, n2) {
    if (n2 === 0) {
        return "Error"; // Handle division by zero
    }
    let result = n1 / n2;
    result = Math.round(result * 100) / 100;
    return result;
}

function multiplication(n1, n2) {
    let result = n1 * n2;
    result = Math.round(result * 100) / 100;
    return result;
}

function operate(op, n1, n2) {
    switch (op) {
        case '+':
            return addition(n1, n2);
        case '-':
            return subtraction(n1, n2);
        case '/':
            return division(n1, n2);
        case '*':
            return multiplication(n1, n2);
        default:
            return null;
    }
}

let oper = ['+', '-', '*', '/'];
let userValue = [];

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;

        if (value === 'AC') {
            // Clear everything
            userValue = [];
            display.textContent = '';
        }else if(value === 'X'){
            if(userValue.length > 1){
                let value = userValue[-2];

            }
            else{
                userValue = [];
            display.textContent = '';
            }
            
        } 
        else if (value === '=') {
            // Perform the calculation
            while (userValue.length > 1) {
                for (let i = 0; i < userValue.length; i++) {
                    if(userValue[i] === '.'){
                        userValue[i] === userValue[i]+'.';
                    }
                    if (oper.includes(userValue[i])) {
                        let n1 = parseFloat(userValue[i - 1]);
                        let n2 = parseFloat(userValue[i + 1]);
                        let ans = operate(userValue[i], n1, n2);

                        // Replace the operator and operands with the result
                        userValue.splice(i - 1, 3, ans);
                        break; // Restart the loop after modifying the array
                    }
                }
            }

            // Display the final result
            display.textContent = userValue[0];
        } else {
            // Add the clicked button's value to the array and update the display
            userValue.push(value);
            display.textContent = userValue.join('');
        }
    });
});