function addition(n1,n2){
    let sum = n1+n2;
    return sum;
}

function subtraction(n1,n2){
    let result = n1 - n2;
    return result;
}


function division(n1,n2){
    let result = n1 / n2;
    result = Math.round(result*100)/100;
    return result;
}

function multiplication(n1,n2){
    let result = n1 * n2;
    result = Math.round(result*100)/100;
    return result;
}

function operate(op,n1,n2){
    switch (op) {
        case '+':
            return addition(n1,n2);
            break;
        
        case '-':
            return subtraction(n1,n2);
            break;
        
        case '/':
            return division(n1,n2);
            break;
        
        case '*':
            return multiplication(n1,n2);
            break;
        
        default:
            break;
    }
}