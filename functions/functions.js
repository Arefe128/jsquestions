Q1:
function calculate(nom1) {
    return function (nom2) {
        return function (operator) {
            switch (operator) {
                case '-':
                    return nom1 - nom2;
                case '+':
                    return nom1 + nom2;
                case '*':
                    return nom1 * nom2;
                case '/':
                    return nom1 / nom2;
                default:
                    return "Enter the correct operator!"

            }
        }
    }
}



Q2:
function sumFromTo(a, b) {
    let result = 0;
    for (let i = 0; i < b; i++) {
        while (a <= b) {
            result += a
            a++
        }
    }
    return result;
}



Q3:
function callOnceAfter(func, time) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, time * 1000);
    }
}



Q4:
function logName() { console.log('hi') };
for (let i = 0; i < 10000; i++) {
    const limitedLogName = limitCallForEveryDuration(logName, 2);
}

function limitCallForEveryDuration(func, time) {
    let timeout = 0;
    return function () {
        timeout = new Date(func, time * 1000);
        limitedLogName()
    }
}




Q5:

function rememberOrDO(func) {
    if (arg === archive[key]) {
        return archive.value;
    } else {
        return func;
    }
}
let archive = {};
function slowSum(...arg) {
    let sum = 0;
    let inputs;

    let remember = new Object();
    for (let i = 0; i < arg.length; i++) {
        sum += arg[i]
        inputs += arg[i]
    }
    archive[arg] = sum;
    return sum;
}




Q6:
function makeCancelableTimeout(func, time) {
    function cancel() {
        clearTimeout(time);
    }
    return func;
}









function factorial(a) {
    let fcr = 1;
    for (let i = 1; i <= a; i++) {
        fcr *= i;
    }
    return fcr;
}





function sum(num1) {
    let total = num1
    for (let i = 0; i < 1000; i++) {
    function addnum(numx) {
            total += numx
            return addnum;
        }
    }
    return total;
}

